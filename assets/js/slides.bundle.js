import { a as getDefaultExportFromCjs, c as commonjsGlobal } from './chunk__commonjsHelpers.js';

function _typeof$1(o) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$1(o);
}

function toPrimitive(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}

function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$2(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray$2(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread();
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

var regeneratorRuntime$1 = {exports: {}};

var _typeof = {exports: {}};

(function (module) {
  function _typeof(o) {
    "@babel/helpers - typeof";

    return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
  }
  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(_typeof);
var _typeofExports = _typeof.exports;

(function (module) {
  var _typeof = _typeofExports["default"];
  function _regeneratorRuntime() {

    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
      return e;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function define(t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function value(t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(_typeof(e) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function reset(e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function stop() {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function complete(t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function finish(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      "catch": function _catch(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(regeneratorRuntime$1);
var regeneratorRuntimeExports = regeneratorRuntime$1.exports;

// TODO(Babel 8): Remove this file.

var runtime = regeneratorRuntimeExports();
var regenerator = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof$1(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
var _regeneratorRuntime = /*@__PURE__*/getDefaultExportFromCjs(regenerator);

function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*!
* reveal.js 5.1.0
* https://revealjs.com
* MIT licensed
*
* Copyright (C) 2011-2024 Hakim El Hattab, https://hakim.se
*/
var e = function e(_e2, t) {
    for (var _i in t) _e2[_i] = t[_i];
    return _e2;
  },
  t = function t(e, _t) {
    return Array.from(e.querySelectorAll(_t));
  },
  i = function i(e, t, _i2) {
    _i2 ? e.classList.add(t) : e.classList.remove(t);
  },
  s = function s(e) {
    if ("string" == typeof e) {
      if ("null" === e) return null;
      if ("true" === e) return !0;
      if ("false" === e) return !1;
      if (e.match(/^-?[\d\.]+$/)) return parseFloat(e);
    }
    return e;
  },
  a = function a(e, t) {
    e.style.transform = t;
  },
  n = function n(e, t) {
    var i = e.matches || e.matchesSelector || e.msMatchesSelector;
    return !(!i || !i.call(e, t));
  },
  r = function r(e, t) {
    if ("function" == typeof e.closest) return e.closest(t);
    for (; e;) {
      if (n(e, t)) return e;
      e = e.parentNode;
    }
    return null;
  },
  o = function o(e) {
    var t = (e = e || document.documentElement).requestFullscreen || e.webkitRequestFullscreen || e.webkitRequestFullScreen || e.mozRequestFullScreen || e.msRequestFullscreen;
    t && t.apply(e);
  },
  l = function l(e) {
    var t = document.createElement("style");
    return t.type = "text/css", e && e.length > 0 && (t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e))), document.head.appendChild(t), t;
  },
  d = function d() {
    var e = {};
    location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, function (t) {
      e[t.split("=").shift()] = t.split("=").pop();
    });
    for (var _t2 in e) {
      var _i3 = e[_t2];
      e[_t2] = s(unescape(_i3));
    }
    return void 0 !== e.dependencies && delete e.dependencies, e;
  },
  c = {
    mp4: "video/mp4",
    m4a: "video/mp4",
    ogv: "video/ogg",
    mpeg: "video/mpeg",
    webm: "video/webm"
  },
  h$1 = navigator.userAgent,
  u = /(iphone|ipod|ipad|android)/gi.test(h$1) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
  g$1 = /android/gi.test(h$1);
var p = function (e) {
  if (e) {
    var t = function t(e) {
        return [].slice.call(e);
      },
      i = 3,
      s = [],
      a = null,
      n = "requestAnimationFrame" in e ? function () {
        e.cancelAnimationFrame(a), a = e.requestAnimationFrame(function () {
          return o(s.filter(function (e) {
            return e.dirty && e.active;
          }));
        });
      } : function () {},
      r = function r(e) {
        return function () {
          s.forEach(function (t) {
            return t.dirty = e;
          }), n();
        };
      },
      o = function o(e) {
        e.filter(function (e) {
          return !e.styleComputed;
        }).forEach(function (e) {
          e.styleComputed = h(e);
        }), e.filter(u).forEach(g);
        var t = e.filter(c);
        t.forEach(d), t.forEach(function (e) {
          g(e), l(e);
        }), t.forEach(p);
      },
      l = function l(e) {
        return e.dirty = 0;
      },
      d = function d(e) {
        e.availableWidth = e.element.parentNode.clientWidth, e.currentWidth = e.element.scrollWidth, e.previousFontSize = e.currentFontSize, e.currentFontSize = Math.min(Math.max(e.minSize, e.availableWidth / e.currentWidth * e.previousFontSize), e.maxSize), e.whiteSpace = e.multiLine && e.currentFontSize === e.minSize ? "normal" : "nowrap";
      },
      c = function c(e) {
        return 2 !== e.dirty || 2 === e.dirty && e.element.parentNode.clientWidth !== e.availableWidth;
      },
      h = function h(t) {
        var i = e.getComputedStyle(t.element, null);
        return t.currentFontSize = parseFloat(i.getPropertyValue("font-size")), t.display = i.getPropertyValue("display"), t.whiteSpace = i.getPropertyValue("white-space"), !0;
      },
      u = function u(e) {
        var t = !1;
        return !e.preStyleTestCompleted && (/inline-/.test(e.display) || (t = !0, e.display = "inline-block"), "nowrap" !== e.whiteSpace && (t = !0, e.whiteSpace = "nowrap"), e.preStyleTestCompleted = !0, t);
      },
      g = function g(e) {
        e.element.style.whiteSpace = e.whiteSpace, e.element.style.display = e.display, e.element.style.fontSize = e.currentFontSize + "px";
      },
      p = function p(e) {
        e.element.dispatchEvent(new CustomEvent("fit", {
          detail: {
            oldValue: e.previousFontSize,
            newValue: e.currentFontSize,
            scaleFactor: e.currentFontSize / e.previousFontSize
          }
        }));
      },
      v = function v(e, t) {
        return function () {
          e.dirty = t, e.active && n();
        };
      },
      m = function m(e) {
        return function () {
          s = s.filter(function (t) {
            return t.element !== e.element;
          }), e.observeMutations && e.observer.disconnect(), e.element.style.whiteSpace = e.originalStyle.whiteSpace, e.element.style.display = e.originalStyle.display, e.element.style.fontSize = e.originalStyle.fontSize;
        };
      },
      f = function f(e) {
        return function () {
          e.active || (e.active = !0, n());
        };
      },
      y = function y(e) {
        return function () {
          return e.active = !1;
        };
      },
      b = function b(e) {
        e.observeMutations && (e.observer = new MutationObserver(v(e, 1)), e.observer.observe(e.element, e.observeMutations));
      },
      w = {
        minSize: 16,
        maxSize: 512,
        multiLine: !0,
        observeMutations: "MutationObserver" in e && {
          subtree: !0,
          childList: !0,
          characterData: !0
        }
      },
      E = null,
      S = function S() {
        e.clearTimeout(E), E = e.setTimeout(r(2), k.observeWindowDelay);
      },
      A = ["resize", "orientationchange"];
    return Object.defineProperty(k, "observeWindow", {
      set: function set(t) {
        var i = "".concat(t ? "add" : "remove", "EventListener");
        A.forEach(function (t) {
          e[i](t, S);
        });
      }
    }), k.observeWindow = !0, k.observeWindowDelay = 100, k.fitAll = r(i), k;
  }
  function R(e, t) {
    var a = Object.assign({}, w, t),
      r = e.map(function (e) {
        var t = Object.assign({}, a, {
          element: e,
          active: !0
        });
        return function (e) {
          e.originalStyle = {
            whiteSpace: e.element.style.whiteSpace,
            display: e.element.style.display,
            fontSize: e.element.style.fontSize
          }, b(e), e.newbie = !0, e.dirty = !0, s.push(e);
        }(t), {
          element: e,
          fit: v(t, i),
          unfreeze: f(t),
          freeze: y(t),
          unsubscribe: m(t)
        };
      });
    return n(), r;
  }
  function k(e) {
    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return "string" == typeof e ? R(t(document.querySelectorAll(e)), i) : R([e], i)[0];
  }
}("undefined" == typeof window ? null : window);
var v$1 = /*#__PURE__*/function () {
  function v(e) {
    _classCallCheck(this, v);
    this.Reveal = e, this.startEmbeddedIframe = this.startEmbeddedIframe.bind(this);
  }
  return _createClass(v, [{
    key: "shouldPreload",
    value: function shouldPreload(e) {
      if (this.Reveal.isScrollView()) return !0;
      var t = this.Reveal.getConfig().preloadIframes;
      return "boolean" != typeof t && (t = e.hasAttribute("data-preload")), t;
    }
  }, {
    key: "load",
    value: function load(e) {
      var _this = this;
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      e.style.display = this.Reveal.getConfig().display, t(e, "img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach(function (e) {
        ("IFRAME" !== e.tagName || _this.shouldPreload(e)) && (e.setAttribute("src", e.getAttribute("data-src")), e.setAttribute("data-lazy-loaded", ""), e.removeAttribute("data-src"));
      }), t(e, "video, audio").forEach(function (e) {
        var i = 0;
        t(e, "source[data-src]").forEach(function (e) {
          e.setAttribute("src", e.getAttribute("data-src")), e.removeAttribute("data-src"), e.setAttribute("data-lazy-loaded", ""), i += 1;
        }), u && "VIDEO" === e.tagName && e.setAttribute("playsinline", ""), i > 0 && e.load();
      });
      var s = e.slideBackgroundElement;
      if (s) {
        s.style.display = "block";
        var _t3 = e.slideBackgroundContentElement,
          _a = e.getAttribute("data-background-iframe");
        if (!1 === s.hasAttribute("data-loaded")) {
          s.setAttribute("data-loaded", "true");
          var _n = e.getAttribute("data-background-image"),
            _r = e.getAttribute("data-background-video"),
            _o = e.hasAttribute("data-background-video-loop"),
            _l = e.hasAttribute("data-background-video-muted");
          if (_n) /^data:/.test(_n.trim()) ? _t3.style.backgroundImage = "url(".concat(_n.trim(), ")") : _t3.style.backgroundImage = _n.split(",").map(function (e) {
            return "url(".concat(function () {
              var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
              return encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[!'()*]/g, function (e) {
                return "%".concat(e.charCodeAt(0).toString(16).toUpperCase());
              });
            }(decodeURI(e.trim())), ")");
          }).join(",");else if (_r && !this.Reveal.isSpeakerNotes()) {
            var _e3 = document.createElement("video");
            _o && _e3.setAttribute("loop", ""), _l && (_e3.muted = !0), u && (_e3.muted = !0, _e3.setAttribute("playsinline", "")), _r.split(",").forEach(function (t) {
              var i = document.createElement("source");
              i.setAttribute("src", t);
              var s = function () {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                return c[e.split(".").pop()];
              }(t);
              s && i.setAttribute("type", s), _e3.appendChild(i);
            }), _t3.appendChild(_e3);
          } else if (_a && !0 !== i.excludeIframes) {
            var _e4 = document.createElement("iframe");
            _e4.setAttribute("allowfullscreen", ""), _e4.setAttribute("mozallowfullscreen", ""), _e4.setAttribute("webkitallowfullscreen", ""), _e4.setAttribute("allow", "autoplay"), _e4.setAttribute("data-src", _a), _e4.style.width = "100%", _e4.style.height = "100%", _e4.style.maxHeight = "100%", _e4.style.maxWidth = "100%", _t3.appendChild(_e4);
          }
        }
        var _n2 = _t3.querySelector("iframe[data-src]");
        _n2 && this.shouldPreload(s) && !/autoplay=(1|true|yes)/gi.test(_a) && _n2.getAttribute("src") !== _a && _n2.setAttribute("src", _a);
      }
      this.layout(e);
    }
  }, {
    key: "layout",
    value: function layout(e) {
      var _this2 = this;
      Array.from(e.querySelectorAll(".r-fit-text")).forEach(function (e) {
        p(e, {
          minSize: 24,
          maxSize: .8 * _this2.Reveal.getConfig().height,
          observeMutations: !1,
          observeWindow: !1
        });
      });
    }
  }, {
    key: "unload",
    value: function unload(e) {
      e.style.display = "none";
      var i = this.Reveal.getSlideBackground(e);
      i && (i.style.display = "none", t(i, "iframe[src]").forEach(function (e) {
        e.removeAttribute("src");
      })), t(e, "video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach(function (e) {
        e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src");
      }), t(e, "video[data-lazy-loaded] source[src], audio source[src]").forEach(function (e) {
        e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src");
      });
    }
  }, {
    key: "formatEmbeddedContent",
    value: function formatEmbeddedContent() {
      var _this3 = this;
      var e = function e(_e5, i, s) {
        t(_this3.Reveal.getSlidesElement(), "iframe[" + _e5 + '*="' + i + '"]').forEach(function (t) {
          var i = t.getAttribute(_e5);
          i && -1 === i.indexOf(s) && t.setAttribute(_e5, i + (/\?/.test(i) ? "&" : "?") + s);
        });
      };
      e("src", "youtube.com/embed/", "enablejsapi=1"), e("data-src", "youtube.com/embed/", "enablejsapi=1"), e("src", "player.vimeo.com/", "api=1"), e("data-src", "player.vimeo.com/", "api=1");
    }
  }, {
    key: "startEmbeddedContent",
    value: function startEmbeddedContent(e) {
      var _this4 = this;
      e && !this.Reveal.isSpeakerNotes() && (t(e, 'img[src$=".gif"]').forEach(function (e) {
        e.setAttribute("src", e.getAttribute("src"));
      }), t(e, "video, audio").forEach(function (e) {
        if (r(e, ".fragment") && !r(e, ".fragment.visible")) return;
        var t = _this4.Reveal.getConfig().autoPlayMedia;
        if ("boolean" != typeof t && (t = e.hasAttribute("data-autoplay") || !!r(e, ".slide-background")), t && "function" == typeof e.play) if (e.readyState > 1) _this4.startEmbeddedMedia({
          target: e
        });else if (u) {
          var _t4 = e.play();
          _t4 && "function" == typeof _t4["catch"] && !1 === e.controls && _t4["catch"](function () {
            e.controls = !0, e.addEventListener("play", function () {
              e.controls = !1;
            });
          });
        } else e.removeEventListener("loadeddata", _this4.startEmbeddedMedia), e.addEventListener("loadeddata", _this4.startEmbeddedMedia);
      }), t(e, "iframe[src]").forEach(function (e) {
        r(e, ".fragment") && !r(e, ".fragment.visible") || _this4.startEmbeddedIframe({
          target: e
        });
      }), t(e, "iframe[data-src]").forEach(function (e) {
        r(e, ".fragment") && !r(e, ".fragment.visible") || e.getAttribute("src") !== e.getAttribute("data-src") && (e.removeEventListener("load", _this4.startEmbeddedIframe), e.addEventListener("load", _this4.startEmbeddedIframe), e.setAttribute("src", e.getAttribute("data-src")));
      }));
    }
  }, {
    key: "startEmbeddedMedia",
    value: function startEmbeddedMedia(e) {
      var t = !!r(e.target, "html"),
        i = !!r(e.target, ".present");
      t && i && (e.target.paused || e.target.ended) && (e.target.currentTime = 0, e.target.play()), e.target.removeEventListener("loadeddata", this.startEmbeddedMedia);
    }
  }, {
    key: "startEmbeddedIframe",
    value: function startEmbeddedIframe(e) {
      var t = e.target;
      if (t && t.contentWindow) {
        var _i4 = !!r(e.target, "html"),
          _s = !!r(e.target, ".present");
        if (_i4 && _s) {
          var _e6 = this.Reveal.getConfig().autoPlayMedia;
          "boolean" != typeof _e6 && (_e6 = t.hasAttribute("data-autoplay") || !!r(t, ".slide-background")), /youtube\.com\/embed\//.test(t.getAttribute("src")) && _e6 ? t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") : /player\.vimeo\.com\//.test(t.getAttribute("src")) && _e6 ? t.contentWindow.postMessage('{"method":"play"}', "*") : t.contentWindow.postMessage("slide:start", "*");
        }
      }
    }
  }, {
    key: "stopEmbeddedContent",
    value: function stopEmbeddedContent(i) {
      var _this5 = this;
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      s = e({
        unloadIframes: !0
      }, s), i && i.parentNode && (t(i, "video, audio").forEach(function (e) {
        e.hasAttribute("data-ignore") || "function" != typeof e.pause || (e.setAttribute("data-paused-by-reveal", ""), e.pause());
      }), t(i, "iframe").forEach(function (e) {
        e.contentWindow && e.contentWindow.postMessage("slide:stop", "*"), e.removeEventListener("load", _this5.startEmbeddedIframe);
      }), t(i, 'iframe[src*="youtube.com/embed/"]').forEach(function (e) {
        !e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
      }), t(i, 'iframe[src*="player.vimeo.com/"]').forEach(function (e) {
        !e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"method":"pause"}', "*");
      }), !0 === s.unloadIframes && t(i, "iframe[data-src]").forEach(function (e) {
        e.setAttribute("src", "about:blank"), e.removeAttribute("src");
      }));
    }
  }]);
}();
var m$1 = ".slides section",
  f = ".slides>section",
  y$1 = ".slides>section.present>section",
  b$1 = /registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/,
  w$1 = /fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/;
var E$1 = /*#__PURE__*/function () {
  function E(e) {
    _classCallCheck(this, E);
    this.Reveal = e;
  }
  return _createClass(E, [{
    key: "render",
    value: function render() {
      this.element = document.createElement("div"), this.element.className = "slide-number", this.Reveal.getRevealElement().appendChild(this.element);
    }
  }, {
    key: "configure",
    value: function configure(e, t) {
      var i = "none";
      e.slideNumber && !this.Reveal.isPrintView() && ("all" === e.showSlideNumber || "speaker" === e.showSlideNumber && this.Reveal.isSpeakerNotes()) && (i = "block"), this.element.style.display = i;
    }
  }, {
    key: "update",
    value: function update() {
      this.Reveal.getConfig().slideNumber && this.element && (this.element.innerHTML = this.getSlideNumber());
    }
  }, {
    key: "getSlideNumber",
    value: function getSlideNumber() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.Reveal.getCurrentSlide();
      var t,
        i = this.Reveal.getConfig(),
        s = "h.v";
      if ("function" == typeof i.slideNumber) t = i.slideNumber(e);else {
        "string" == typeof i.slideNumber && (s = i.slideNumber), /c/.test(s) || 1 !== this.Reveal.getHorizontalSlides().length || (s = "c");
        var _a2 = e && "uncounted" === e.dataset.visibility ? 0 : 1;
        switch (t = [], s) {
          case "c":
            t.push(this.Reveal.getSlidePastCount(e) + _a2);
            break;
          case "c/t":
            t.push(this.Reveal.getSlidePastCount(e) + _a2, "/", this.Reveal.getTotalSlides());
            break;
          default:
            var _i5 = this.Reveal.getIndices(e);
            t.push(_i5.h + _a2);
            var _n3 = "h/v" === s ? "/" : ".";
            this.Reveal.isVerticalSlide(e) && t.push(_n3, _i5.v + 1);
        }
      }
      var a = "#" + this.Reveal.location.getHash(e);
      return this.formatNumber(t[0], t[1], t[2], a);
    }
  }, {
    key: "formatNumber",
    value: function formatNumber(e, t, i) {
      var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#" + this.Reveal.location.getHash();
      return "number" != typeof i || isNaN(i) ? "<a href=\"".concat(s, "\">\n\t\t\t\t\t<span class=\"slide-number-a\">").concat(e, "</span>\n\t\t\t\t\t</a>") : "<a href=\"".concat(s, "\">\n\t\t\t\t\t<span class=\"slide-number-a\">").concat(e, "</span>\n\t\t\t\t\t<span class=\"slide-number-delimiter\">").concat(t, "</span>\n\t\t\t\t\t<span class=\"slide-number-b\">").concat(i, "</span>\n\t\t\t\t\t</a>");
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.element.remove();
    }
  }]);
}();
var S$1 = /*#__PURE__*/function () {
  function S(e) {
    _classCallCheck(this, S);
    this.Reveal = e, this.onInput = this.onInput.bind(this), this.onBlur = this.onBlur.bind(this), this.onKeyDown = this.onKeyDown.bind(this);
  }
  return _createClass(S, [{
    key: "render",
    value: function render() {
      this.element = document.createElement("div"), this.element.className = "jump-to-slide", this.jumpInput = document.createElement("input"), this.jumpInput.type = "text", this.jumpInput.className = "jump-to-slide-input", this.jumpInput.placeholder = "Jump to slide", this.jumpInput.addEventListener("input", this.onInput), this.jumpInput.addEventListener("keydown", this.onKeyDown), this.jumpInput.addEventListener("blur", this.onBlur), this.element.appendChild(this.jumpInput);
    }
  }, {
    key: "show",
    value: function show() {
      this.indicesOnShow = this.Reveal.getIndices(), this.Reveal.getRevealElement().appendChild(this.element), this.jumpInput.focus();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.isVisible() && (this.element.remove(), this.jumpInput.value = "", clearTimeout(this.jumpTimeout), delete this.jumpTimeout);
    }
  }, {
    key: "isVisible",
    value: function isVisible() {
      return !!this.element.parentNode;
    }
  }, {
    key: "jump",
    value: function jump() {
      clearTimeout(this.jumpTimeout), delete this.jumpTimeout;
      var e,
        t = this.jumpInput.value.trim("");
      if (/^\d+$/.test(t)) {
        var _i6 = this.Reveal.getConfig().slideNumber;
        if ("c" === _i6 || "c/t" === _i6) {
          var _i7 = this.Reveal.getSlides()[parseInt(t, 10) - 1];
          _i7 && (e = this.Reveal.getIndices(_i7));
        }
      }
      return e || (/^\d+\.\d+$/.test(t) && (t = t.replace(".", "/")), e = this.Reveal.location.getIndicesFromHash(t, {
        oneBasedIndex: !0
      })), !e && /\S+/i.test(t) && t.length > 1 && (e = this.search(t)), e && "" !== t ? (this.Reveal.slide(e.h, e.v, e.f), !0) : (this.Reveal.slide(this.indicesOnShow.h, this.indicesOnShow.v, this.indicesOnShow.f), !1);
    }
  }, {
    key: "jumpAfter",
    value: function jumpAfter(e) {
      var _this6 = this;
      clearTimeout(this.jumpTimeout), this.jumpTimeout = setTimeout(function () {
        return _this6.jump();
      }, e);
    }
  }, {
    key: "search",
    value: function search(e) {
      var t = new RegExp("\\b" + e.trim() + "\\b", "i"),
        i = this.Reveal.getSlides().find(function (e) {
          return t.test(e.innerText);
        });
      return i ? this.Reveal.getIndices(i) : null;
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.Reveal.slide(this.indicesOnShow.h, this.indicesOnShow.v, this.indicesOnShow.f), this.hide();
    }
  }, {
    key: "confirm",
    value: function confirm() {
      this.jump(), this.hide();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.jumpInput.removeEventListener("input", this.onInput), this.jumpInput.removeEventListener("keydown", this.onKeyDown), this.jumpInput.removeEventListener("blur", this.onBlur), this.element.remove();
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      13 === e.keyCode ? this.confirm() : 27 === e.keyCode && (this.cancel(), e.stopImmediatePropagation());
    }
  }, {
    key: "onInput",
    value: function onInput(e) {
      this.jumpAfter(200);
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      var _this7 = this;
      setTimeout(function () {
        return _this7.hide();
      }, 1);
    }
  }]);
}();
var A$1 = function A(e) {
  var t = e.match(/^#([0-9a-f]{3})$/i);
  if (t && t[1]) return t = t[1], {
    r: 17 * parseInt(t.charAt(0), 16),
    g: 17 * parseInt(t.charAt(1), 16),
    b: 17 * parseInt(t.charAt(2), 16)
  };
  var i = e.match(/^#([0-9a-f]{6})$/i);
  if (i && i[1]) return i = i[1], {
    r: parseInt(i.slice(0, 2), 16),
    g: parseInt(i.slice(2, 4), 16),
    b: parseInt(i.slice(4, 6), 16)
  };
  var s = e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
  if (s) return {
    r: parseInt(s[1], 10),
    g: parseInt(s[2], 10),
    b: parseInt(s[3], 10)
  };
  var a = e.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);
  return a ? {
    r: parseInt(a[1], 10),
    g: parseInt(a[2], 10),
    b: parseInt(a[3], 10),
    a: parseFloat(a[4])
  } : null;
};
var R$1 = /*#__PURE__*/function () {
  function R(e) {
    _classCallCheck(this, R);
    this.Reveal = e;
  }
  return _createClass(R, [{
    key: "render",
    value: function render() {
      this.element = document.createElement("div"), this.element.className = "backgrounds", this.Reveal.getRevealElement().appendChild(this.element);
    }
  }, {
    key: "create",
    value: function create() {
      var _this8 = this;
      this.element.innerHTML = "", this.element.classList.add("no-transition"), this.Reveal.getHorizontalSlides().forEach(function (e) {
        var i = _this8.createBackground(e, _this8.element);
        t(e, "section").forEach(function (e) {
          _this8.createBackground(e, i), i.classList.add("stack");
        });
      }), this.Reveal.getConfig().parallaxBackgroundImage ? (this.element.style.backgroundImage = 'url("' + this.Reveal.getConfig().parallaxBackgroundImage + '")', this.element.style.backgroundSize = this.Reveal.getConfig().parallaxBackgroundSize, this.element.style.backgroundRepeat = this.Reveal.getConfig().parallaxBackgroundRepeat, this.element.style.backgroundPosition = this.Reveal.getConfig().parallaxBackgroundPosition, setTimeout(function () {
        _this8.Reveal.getRevealElement().classList.add("has-parallax-background");
      }, 1)) : (this.element.style.backgroundImage = "", this.Reveal.getRevealElement().classList.remove("has-parallax-background"));
    }
  }, {
    key: "createBackground",
    value: function createBackground(e, t) {
      var i = document.createElement("div");
      i.className = "slide-background " + e.className.replace(/present|past|future/, "");
      var s = document.createElement("div");
      return s.className = "slide-background-content", i.appendChild(s), t.appendChild(i), e.slideBackgroundElement = i, e.slideBackgroundContentElement = s, this.sync(e), i;
    }
  }, {
    key: "sync",
    value: function sync(e) {
      var t = e.slideBackgroundElement,
        i = e.slideBackgroundContentElement,
        s = {
          background: e.getAttribute("data-background"),
          backgroundSize: e.getAttribute("data-background-size"),
          backgroundImage: e.getAttribute("data-background-image"),
          backgroundVideo: e.getAttribute("data-background-video"),
          backgroundIframe: e.getAttribute("data-background-iframe"),
          backgroundColor: e.getAttribute("data-background-color"),
          backgroundGradient: e.getAttribute("data-background-gradient"),
          backgroundRepeat: e.getAttribute("data-background-repeat"),
          backgroundPosition: e.getAttribute("data-background-position"),
          backgroundTransition: e.getAttribute("data-background-transition"),
          backgroundOpacity: e.getAttribute("data-background-opacity")
        },
        a = e.hasAttribute("data-preload");
      e.classList.remove("has-dark-background"), e.classList.remove("has-light-background"), t.removeAttribute("data-loaded"), t.removeAttribute("data-background-hash"), t.removeAttribute("data-background-size"), t.removeAttribute("data-background-transition"), t.style.backgroundColor = "", i.style.backgroundSize = "", i.style.backgroundRepeat = "", i.style.backgroundPosition = "", i.style.backgroundImage = "", i.style.opacity = "", i.innerHTML = "", s.background && (/^(http|file|\/\/)/gi.test(s.background) || /\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(s.background) ? e.setAttribute("data-background-image", s.background) : t.style.background = s.background), (s.background || s.backgroundColor || s.backgroundGradient || s.backgroundImage || s.backgroundVideo || s.backgroundIframe) && t.setAttribute("data-background-hash", s.background + s.backgroundSize + s.backgroundImage + s.backgroundVideo + s.backgroundIframe + s.backgroundColor + s.backgroundGradient + s.backgroundRepeat + s.backgroundPosition + s.backgroundTransition + s.backgroundOpacity), s.backgroundSize && t.setAttribute("data-background-size", s.backgroundSize), s.backgroundColor && (t.style.backgroundColor = s.backgroundColor), s.backgroundGradient && (t.style.backgroundImage = s.backgroundGradient), s.backgroundTransition && t.setAttribute("data-background-transition", s.backgroundTransition), a && t.setAttribute("data-preload", ""), s.backgroundSize && (i.style.backgroundSize = s.backgroundSize), s.backgroundRepeat && (i.style.backgroundRepeat = s.backgroundRepeat), s.backgroundPosition && (i.style.backgroundPosition = s.backgroundPosition), s.backgroundOpacity && (i.style.opacity = s.backgroundOpacity);
      var n = this.getContrastClass(e);
      "string" == typeof n && e.classList.add(n);
    }
  }, {
    key: "getContrastClass",
    value: function getContrastClass(e) {
      var t = e.slideBackgroundElement;
      var i = e.getAttribute("data-background-color");
      if (!i || !A$1(i)) {
        var _e7 = window.getComputedStyle(t);
        _e7 && _e7.backgroundColor && (i = _e7.backgroundColor);
      }
      if (i) {
        var _e8 = A$1(i);
        if (_e8 && 0 !== _e8.a) return "string" == typeof (s = i) && (s = A$1(s)), (s ? (299 * s.r + 587 * s.g + 114 * s.b) / 1e3 : null) < 128 ? "has-dark-background" : "has-light-background";
      }
      var s;
      return null;
    }
  }, {
    key: "bubbleSlideContrastClassToElement",
    value: function bubbleSlideContrastClassToElement(e, t) {
      ["has-light-background", "has-dark-background"].forEach(function (i) {
        e.classList.contains(i) ? t.classList.add(i) : t.classList.remove(i);
      }, this);
    }
  }, {
    key: "update",
    value: function update() {
      var _this9 = this;
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      var i = this.Reveal.getConfig(),
        s = this.Reveal.getCurrentSlide(),
        a = this.Reveal.getIndices(),
        n = null,
        r = i.rtl ? "future" : "past",
        o = i.rtl ? "past" : "future";
      if (Array.from(this.element.childNodes).forEach(function (i, s) {
        i.classList.remove("past", "present", "future"), s < a.h ? i.classList.add(r) : s > a.h ? i.classList.add(o) : (i.classList.add("present"), n = i), (e || s === a.h) && t(i, ".slide-background").forEach(function (e, t) {
          e.classList.remove("past", "present", "future");
          var i = "number" == typeof a.v ? a.v : 0;
          t < i ? e.classList.add("past") : t > i ? e.classList.add("future") : (e.classList.add("present"), s === a.h && (n = e));
        });
      }), this.previousBackground && !this.previousBackground.closest("body") && (this.previousBackground = null), n && this.previousBackground) {
        var _e9 = this.previousBackground.getAttribute("data-background-hash"),
          _t5 = n.getAttribute("data-background-hash");
        if (_t5 && _t5 === _e9 && n !== this.previousBackground) {
          this.element.classList.add("no-transition");
          var _e10 = n.querySelector("video"),
            _t6 = this.previousBackground.querySelector("video");
          if (_e10 && _t6) {
            var _i8 = _e10.parentNode;
            _t6.parentNode.appendChild(_e10), _i8.appendChild(_t6);
          }
        }
      }
      if (this.previousBackground && this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground, {
        unloadIframes: !this.Reveal.slideContent.shouldPreload(this.previousBackground)
      }), n) {
        this.Reveal.slideContent.startEmbeddedContent(n);
        var _e11 = n.querySelector(".slide-background-content");
        if (_e11) {
          var _t7 = _e11.style.backgroundImage || "";
          /\.gif/i.test(_t7) && (_e11.style.backgroundImage = "", window.getComputedStyle(_e11).opacity, _e11.style.backgroundImage = _t7);
        }
        this.previousBackground = n;
      }
      s && this.bubbleSlideContrastClassToElement(s, this.Reveal.getRevealElement()), setTimeout(function () {
        _this9.element.classList.remove("no-transition");
      }, 10);
    }
  }, {
    key: "updateParallax",
    value: function updateParallax() {
      var e = this.Reveal.getIndices();
      if (this.Reveal.getConfig().parallaxBackgroundImage) {
        var _t8,
          _i9,
          _s2 = this.Reveal.getHorizontalSlides(),
          _a3 = this.Reveal.getVerticalSlides(),
          _n4 = this.element.style.backgroundSize.split(" ");
        1 === _n4.length ? _t8 = _i9 = parseInt(_n4[0], 10) : (_t8 = parseInt(_n4[0], 10), _i9 = parseInt(_n4[1], 10));
        var _r2,
          _o2,
          _l2 = this.element.offsetWidth,
          _d = _s2.length;
        _r2 = "number" == typeof this.Reveal.getConfig().parallaxBackgroundHorizontal ? this.Reveal.getConfig().parallaxBackgroundHorizontal : _d > 1 ? (_t8 - _l2) / (_d - 1) : 0, _o2 = _r2 * e.h * -1;
        var _c,
          _h,
          _u = this.element.offsetHeight,
          _g = _a3.length;
        _c = "number" == typeof this.Reveal.getConfig().parallaxBackgroundVertical ? this.Reveal.getConfig().parallaxBackgroundVertical : (_i9 - _u) / (_g - 1), _h = _g > 0 ? _c * e.v : 0, this.element.style.backgroundPosition = _o2 + "px " + -_h + "px";
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.element.remove();
    }
  }]);
}();
var k$1 = 0;
var L$1 = /*#__PURE__*/function () {
  function L(e) {
    _classCallCheck(this, L);
    this.Reveal = e;
  }
  return _createClass(L, [{
    key: "run",
    value: function run(e, t) {
      var _this10 = this;
      this.reset();
      var i = this.Reveal.getSlides(),
        s = i.indexOf(t),
        a = i.indexOf(e);
      if (e && t && e.hasAttribute("data-auto-animate") && t.hasAttribute("data-auto-animate") && e.getAttribute("data-auto-animate-id") === t.getAttribute("data-auto-animate-id") && !(s > a ? t : e).hasAttribute("data-auto-animate-restart")) {
        this.autoAnimateStyleSheet = this.autoAnimateStyleSheet || l();
        var _i10 = this.getAutoAnimateOptions(t);
        e.dataset.autoAnimate = "pending", t.dataset.autoAnimate = "pending", _i10.slideDirection = s > a ? "forward" : "backward";
        var _n5 = "none" === e.style.display;
        _n5 && (e.style.display = this.Reveal.getConfig().display);
        var _r3 = this.getAutoAnimatableElements(e, t).map(function (e) {
          return _this10.autoAnimateElements(e.from, e.to, e.options || {}, _i10, k$1++);
        });
        if (_n5 && (e.style.display = "none"), "false" !== t.dataset.autoAnimateUnmatched && !0 === this.Reveal.getConfig().autoAnimateUnmatched) {
          var _e12 = .8 * _i10.duration,
            _s3 = .2 * _i10.duration;
          this.getUnmatchedAutoAnimateElements(t).forEach(function (e) {
            var t = _this10.getAutoAnimateOptions(e, _i10),
              s = "unmatched";
            t.duration === _i10.duration && t.delay === _i10.delay || (s = "unmatched-" + k$1++, _r3.push("[data-auto-animate=\"running\"] [data-auto-animate-target=\"".concat(s, "\"] { transition: opacity ").concat(t.duration, "s ease ").concat(t.delay, "s; }"))), e.dataset.autoAnimateTarget = s;
          }, this), _r3.push("[data-auto-animate=\"running\"] [data-auto-animate-target=\"unmatched\"] { transition: opacity ".concat(_e12, "s ease ").concat(_s3, "s; }"));
        }
        this.autoAnimateStyleSheet.innerHTML = _r3.join(""), requestAnimationFrame(function () {
          _this10.autoAnimateStyleSheet && (getComputedStyle(_this10.autoAnimateStyleSheet).fontWeight, t.dataset.autoAnimate = "running");
        }), this.Reveal.dispatchEvent({
          type: "autoanimate",
          data: {
            fromSlide: e,
            toSlide: t,
            sheet: this.autoAnimateStyleSheet
          }
        });
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      t(this.Reveal.getRevealElement(), '[data-auto-animate]:not([data-auto-animate=""])').forEach(function (e) {
        e.dataset.autoAnimate = "";
      }), t(this.Reveal.getRevealElement(), "[data-auto-animate-target]").forEach(function (e) {
        delete e.dataset.autoAnimateTarget;
      }), this.autoAnimateStyleSheet && this.autoAnimateStyleSheet.parentNode && (this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet), this.autoAnimateStyleSheet = null);
    }
  }, {
    key: "autoAnimateElements",
    value: function autoAnimateElements(e, t, i, s, a) {
      e.dataset.autoAnimateTarget = "", t.dataset.autoAnimateTarget = a;
      var n = this.getAutoAnimateOptions(t, s);
      void 0 !== i.delay && (n.delay = i.delay), void 0 !== i.duration && (n.duration = i.duration), void 0 !== i.easing && (n.easing = i.easing);
      var r = this.getAutoAnimatableProperties("from", e, i),
        o = this.getAutoAnimatableProperties("to", t, i);
      if (t.classList.contains("fragment") && (delete o.styles.opacity, e.classList.contains("fragment"))) {
        (e.className.match(w$1) || [""])[0] === (t.className.match(w$1) || [""])[0] && "forward" === s.slideDirection && t.classList.add("visible", "disabled");
      }
      if (!1 !== i.translate || !1 !== i.scale) {
        var _e13 = this.Reveal.getScale(),
          _t9 = {
            x: (r.x - o.x) / _e13,
            y: (r.y - o.y) / _e13,
            scaleX: r.width / o.width,
            scaleY: r.height / o.height
          };
        _t9.x = Math.round(1e3 * _t9.x) / 1e3, _t9.y = Math.round(1e3 * _t9.y) / 1e3, _t9.scaleX = Math.round(1e3 * _t9.scaleX) / 1e3, _t9.scaleX = Math.round(1e3 * _t9.scaleX) / 1e3;
        var _s4 = !1 !== i.translate && (0 !== _t9.x || 0 !== _t9.y),
          _a4 = !1 !== i.scale && (0 !== _t9.scaleX || 0 !== _t9.scaleY);
        if (_s4 || _a4) {
          var _e14 = [];
          _s4 && _e14.push("translate(".concat(_t9.x, "px, ").concat(_t9.y, "px)")), _a4 && _e14.push("scale(".concat(_t9.scaleX, ", ").concat(_t9.scaleY, ")")), r.styles.transform = _e14.join(" "), r.styles["transform-origin"] = "top left", o.styles.transform = "none";
        }
      }
      for (var _e15 in o.styles) {
        var _t10 = o.styles[_e15],
          _i11 = r.styles[_e15];
        _t10 === _i11 ? delete o.styles[_e15] : (!0 === _t10.explicitValue && (o.styles[_e15] = _t10.value), !0 === _i11.explicitValue && (r.styles[_e15] = _i11.value));
      }
      var l = "",
        d = Object.keys(o.styles);
      if (d.length > 0) {
        r.styles.transition = "none", o.styles.transition = "all ".concat(n.duration, "s ").concat(n.easing, " ").concat(n.delay, "s"), o.styles["transition-property"] = d.join(", "), o.styles["will-change"] = d.join(", "), l = '[data-auto-animate-target="' + a + '"] {' + Object.keys(r.styles).map(function (e) {
          return e + ": " + r.styles[e] + " !important;";
        }).join("") + '}[data-auto-animate="running"] [data-auto-animate-target="' + a + '"] {' + Object.keys(o.styles).map(function (e) {
          return e + ": " + o.styles[e] + " !important;";
        }).join("") + "}";
      }
      return l;
    }
  }, {
    key: "getAutoAnimateOptions",
    value: function getAutoAnimateOptions(t, i) {
      var s = {
        easing: this.Reveal.getConfig().autoAnimateEasing,
        duration: this.Reveal.getConfig().autoAnimateDuration,
        delay: 0
      };
      if (s = e(s, i), t.parentNode) {
        var _e16 = r(t.parentNode, "[data-auto-animate-target]");
        _e16 && (s = this.getAutoAnimateOptions(_e16, s));
      }
      return t.dataset.autoAnimateEasing && (s.easing = t.dataset.autoAnimateEasing), t.dataset.autoAnimateDuration && (s.duration = parseFloat(t.dataset.autoAnimateDuration)), t.dataset.autoAnimateDelay && (s.delay = parseFloat(t.dataset.autoAnimateDelay)), s;
    }
  }, {
    key: "getAutoAnimatableProperties",
    value: function getAutoAnimatableProperties(e, t, i) {
      var s = this.Reveal.getConfig(),
        a = {
          styles: []
        };
      if (!1 !== i.translate || !1 !== i.scale) {
        var _e17;
        if ("function" == typeof i.measure) _e17 = i.measure(t);else if (s.center) _e17 = t.getBoundingClientRect();else {
          var _i12 = this.Reveal.getScale();
          _e17 = {
            x: t.offsetLeft * _i12,
            y: t.offsetTop * _i12,
            width: t.offsetWidth * _i12,
            height: t.offsetHeight * _i12
          };
        }
        a.x = _e17.x, a.y = _e17.y, a.width = _e17.width, a.height = _e17.height;
      }
      var n = getComputedStyle(t);
      return (i.styles || s.autoAnimateStyles).forEach(function (t) {
        var i;
        "string" == typeof t && (t = {
          property: t
        }), void 0 !== t.from && "from" === e ? i = {
          value: t.from,
          explicitValue: !0
        } : void 0 !== t.to && "to" === e ? i = {
          value: t.to,
          explicitValue: !0
        } : ("line-height" === t.property && (i = parseFloat(n["line-height"]) / parseFloat(n["font-size"])), isNaN(i) && (i = n[t.property])), "" !== i && (a.styles[t.property] = i);
      }), a;
    }
  }, {
    key: "getAutoAnimatableElements",
    value: function getAutoAnimatableElements(e, t) {
      var i = ("function" == typeof this.Reveal.getConfig().autoAnimateMatcher ? this.Reveal.getConfig().autoAnimateMatcher : this.getAutoAnimatePairs).call(this, e, t),
        s = [];
      return i.filter(function (e, t) {
        if (-1 === s.indexOf(e.to)) return s.push(e.to), !0;
      });
    }
  }, {
    key: "getAutoAnimatePairs",
    value: function getAutoAnimatePairs(e, t) {
      var _this11 = this;
      var i = [];
      var s = "h1, h2, h3, h4, h5, h6, p, li";
      return this.findAutoAnimateMatches(i, e, t, "[data-id]", function (e) {
        return e.nodeName + ":::" + e.getAttribute("data-id");
      }), this.findAutoAnimateMatches(i, e, t, s, function (e) {
        return e.nodeName + ":::" + e.innerText;
      }), this.findAutoAnimateMatches(i, e, t, "img, video, iframe", function (e) {
        return e.nodeName + ":::" + (e.getAttribute("src") || e.getAttribute("data-src"));
      }), this.findAutoAnimateMatches(i, e, t, "pre", function (e) {
        return e.nodeName + ":::" + e.innerText;
      }), i.forEach(function (e) {
        n(e.from, s) ? e.options = {
          scale: !1
        } : n(e.from, "pre") && (e.options = {
          scale: !1,
          styles: ["width", "height"]
        }, _this11.findAutoAnimateMatches(i, e.from, e.to, ".hljs .hljs-ln-code", function (e) {
          return e.textContent;
        }, {
          scale: !1,
          styles: [],
          measure: _this11.getLocalBoundingBox.bind(_this11)
        }), _this11.findAutoAnimateMatches(i, e.from, e.to, ".hljs .hljs-ln-numbers[data-line-number]", function (e) {
          return e.getAttribute("data-line-number");
        }, {
          scale: !1,
          styles: ["width"],
          measure: _this11.getLocalBoundingBox.bind(_this11)
        }));
      }, this), i;
    }
  }, {
    key: "getLocalBoundingBox",
    value: function getLocalBoundingBox(e) {
      var t = this.Reveal.getScale();
      return {
        x: Math.round(e.offsetLeft * t * 100) / 100,
        y: Math.round(e.offsetTop * t * 100) / 100,
        width: Math.round(e.offsetWidth * t * 100) / 100,
        height: Math.round(e.offsetHeight * t * 100) / 100
      };
    }
  }, {
    key: "findAutoAnimateMatches",
    value: function findAutoAnimateMatches(e, t, i, s, a, n) {
      var r = {},
        o = {};
      [].slice.call(t.querySelectorAll(s)).forEach(function (e, t) {
        var i = a(e);
        "string" == typeof i && i.length && (r[i] = r[i] || [], r[i].push(e));
      }), [].slice.call(i.querySelectorAll(s)).forEach(function (t, i) {
        var s = a(t);
        var l;
        if (o[s] = o[s] || [], o[s].push(t), r[s]) {
          var _e18 = o[s].length - 1,
            _t11 = r[s].length - 1;
          r[s][_e18] ? (l = r[s][_e18], r[s][_e18] = null) : r[s][_t11] && (l = r[s][_t11], r[s][_t11] = null);
        }
        l && e.push({
          from: l,
          to: t,
          options: n
        });
      });
    }
  }, {
    key: "getUnmatchedAutoAnimateElements",
    value: function getUnmatchedAutoAnimateElements(e) {
      var _this12 = this;
      return [].slice.call(e.children).reduce(function (e, t) {
        var i = t.querySelector("[data-auto-animate-target]");
        return t.hasAttribute("data-auto-animate-target") || i || e.push(t), t.querySelector("[data-auto-animate-target]") && (e = e.concat(_this12.getUnmatchedAutoAnimateElements(t))), e;
      }, []);
    }
  }]);
}();
var C$1 = /*#__PURE__*/function () {
  function C(e) {
    _classCallCheck(this, C);
    this.Reveal = e, this.active = !1, this.activatedCallbacks = [], this.onScroll = this.onScroll.bind(this);
  }
  return _createClass(C, [{
    key: "activate",
    value: function activate() {
      var _this13 = this;
      if (this.active) return;
      var e = this.Reveal.getState();
      this.active = !0, this.slideHTMLBeforeActivation = this.Reveal.getSlidesElement().innerHTML;
      var i = t(this.Reveal.getRevealElement(), f),
        s = t(this.Reveal.getRevealElement(), ".backgrounds>.slide-background");
      var a;
      this.viewportElement.classList.add("loading-scroll-mode", "reveal-scroll");
      var n = window.getComputedStyle(this.viewportElement);
      n && n.background && (a = n.background);
      var r = [],
        o = i[0].parentNode;
      var l;
      var d = function d(e, t, i, n) {
        var o;
        if (l && _this13.Reveal.shouldAutoAnimateBetween(l, e)) o = document.createElement("div"), o.className = "scroll-page-content scroll-auto-animate-page", o.style.display = "none", l.closest(".scroll-page-content").parentNode.appendChild(o);else {
          var _e19 = document.createElement("div");
          if (_e19.className = "scroll-page", r.push(_e19), n && s.length > t) {
            var _i13 = s[t],
              _n6 = window.getComputedStyle(_i13);
            _n6 && _n6.background ? _e19.style.background = _n6.background : a && (_e19.style.background = a);
          } else a && (_e19.style.background = a);
          var _i14 = document.createElement("div");
          _i14.className = "scroll-page-sticky", _e19.appendChild(_i14), o = document.createElement("div"), o.className = "scroll-page-content", _i14.appendChild(o);
        }
        o.appendChild(e), e.classList.remove("past", "future"), e.setAttribute("data-index-h", t), e.setAttribute("data-index-v", i), e.slideBackgroundElement && (e.slideBackgroundElement.remove("past", "future"), o.insertBefore(e.slideBackgroundElement, e)), l = e;
      };
      i.forEach(function (e, t) {
        _this13.Reveal.isVerticalStack(e) ? e.querySelectorAll("section").forEach(function (e, i) {
          d(e, t, i, !0);
        }) : d(e, t, 0);
      }, this), this.createProgressBar(), t(this.Reveal.getRevealElement(), ".stack").forEach(function (e) {
        return e.remove();
      }), r.forEach(function (e) {
        return o.appendChild(e);
      }), this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()), this.Reveal.layout(), this.Reveal.setState(e), this.activatedCallbacks.forEach(function (e) {
        return e();
      }), this.activatedCallbacks = [], this.restoreScrollPosition(), this.viewportElement.classList.remove("loading-scroll-mode"), this.viewportElement.addEventListener("scroll", this.onScroll, {
        passive: !0
      });
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      if (!this.active) return;
      var e = this.Reveal.getState();
      this.active = !1, this.viewportElement.removeEventListener("scroll", this.onScroll), this.viewportElement.classList.remove("reveal-scroll"), this.removeProgressBar(), this.Reveal.getSlidesElement().innerHTML = this.slideHTMLBeforeActivation, this.Reveal.sync(), this.Reveal.setState(e), this.slideHTMLBeforeActivation = null;
    }
  }, {
    key: "toggle",
    value: function toggle(e) {
      "boolean" == typeof e ? e ? this.activate() : this.deactivate() : this.isActive() ? this.deactivate() : this.activate();
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this.active;
    }
  }, {
    key: "createProgressBar",
    value: function createProgressBar() {
      var _this14 = this;
      this.progressBar = document.createElement("div"), this.progressBar.className = "scrollbar", this.progressBarInner = document.createElement("div"), this.progressBarInner.className = "scrollbar-inner", this.progressBar.appendChild(this.progressBarInner), this.progressBarPlayhead = document.createElement("div"), this.progressBarPlayhead.className = "scrollbar-playhead", this.progressBarInner.appendChild(this.progressBarPlayhead), this.viewportElement.insertBefore(this.progressBar, this.viewportElement.firstChild);
      var e = function e(_e20) {
          var t = (_e20.clientY - _this14.progressBarInner.getBoundingClientRect().top) / _this14.progressBarHeight;
          t = Math.max(Math.min(t, 1), 0), _this14.viewportElement.scrollTop = t * (_this14.viewportElement.scrollHeight - _this14.viewportElement.offsetHeight);
        },
        t = function t(i) {
          _this14.draggingProgressBar = !1, _this14.showProgressBar(), document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", t);
        };
      this.progressBarInner.addEventListener("mousedown", function (i) {
        i.preventDefault(), _this14.draggingProgressBar = !0, document.addEventListener("mousemove", e), document.addEventListener("mouseup", t), e(i);
      });
    }
  }, {
    key: "removeProgressBar",
    value: function removeProgressBar() {
      this.progressBar && (this.progressBar.remove(), this.progressBar = null);
    }
  }, {
    key: "layout",
    value: function layout() {
      this.isActive() && (this.syncPages(), this.syncScrollPosition());
    }
  }, {
    key: "syncPages",
    value: function syncPages() {
      var _this15 = this;
      var e = this.Reveal.getConfig(),
        t = this.Reveal.getComputedSlideSize(window.innerWidth, window.innerHeight),
        i = this.Reveal.getScale(),
        s = "compact" === e.scrollLayout,
        a = this.viewportElement.offsetHeight,
        n = t.height * i,
        r = s ? n : a;
      this.scrollTriggerHeight = s ? n : a, this.viewportElement.style.setProperty("--page-height", r + "px"), this.viewportElement.style.scrollSnapType = "string" == typeof e.scrollSnap ? "y ".concat(e.scrollSnap) : "", this.slideTriggers = [];
      var o = Array.from(this.Reveal.getRevealElement().querySelectorAll(".scroll-page"));
      this.pages = o.map(function (i) {
        var n = _this15.createPage({
          pageElement: i,
          slideElement: i.querySelector("section"),
          stickyElement: i.querySelector(".scroll-page-sticky"),
          contentElement: i.querySelector(".scroll-page-content"),
          backgroundElement: i.querySelector(".slide-background"),
          autoAnimateElements: i.querySelectorAll(".scroll-auto-animate-page"),
          autoAnimatePages: []
        });
        n.pageElement.style.setProperty("--slide-height", !0 === e.center ? "auto" : t.height + "px"), _this15.slideTriggers.push({
          page: n,
          activate: function activate() {
            return _this15.activatePage(n);
          },
          deactivate: function deactivate() {
            return _this15.deactivatePage(n);
          }
        }), _this15.createFragmentTriggersForPage(n), n.autoAnimateElements.length > 0 && _this15.createAutoAnimateTriggersForPage(n);
        var o = Math.max(n.scrollTriggers.length - 1, 0);
        o += n.autoAnimatePages.reduce(function (e, t) {
          return e + Math.max(t.scrollTriggers.length - 1, 0);
        }, n.autoAnimatePages.length), n.pageElement.querySelectorAll(".scroll-snap-point").forEach(function (e) {
          return e.remove();
        });
        for (var _e21 = 0; _e21 < o + 1; _e21++) {
          var _t12 = document.createElement("div");
          _t12.className = "scroll-snap-point", _t12.style.height = _this15.scrollTriggerHeight + "px", _t12.style.scrollSnapAlign = s ? "center" : "start", n.pageElement.appendChild(_t12), 0 === _e21 && (_t12.style.marginTop = -_this15.scrollTriggerHeight + "px");
        }
        return s && n.scrollTriggers.length > 0 ? (n.pageHeight = a, n.pageElement.style.setProperty("--page-height", a + "px")) : (n.pageHeight = r, n.pageElement.style.removeProperty("--page-height")), n.scrollPadding = _this15.scrollTriggerHeight * o, n.totalHeight = n.pageHeight + n.scrollPadding, n.pageElement.style.setProperty("--page-scroll-padding", n.scrollPadding + "px"), o > 0 ? (n.stickyElement.style.position = "sticky", n.stickyElement.style.top = Math.max((a - n.pageHeight) / 2, 0) + "px") : (n.stickyElement.style.position = "relative", n.pageElement.style.scrollSnapAlign = n.pageHeight < a ? "center" : "start"), n;
      }), this.setTriggerRanges(), this.viewportElement.setAttribute("data-scrollbar", e.scrollProgress), e.scrollProgress && this.totalScrollTriggerCount > 1 ? (this.progressBar || this.createProgressBar(), this.syncProgressBar()) : this.removeProgressBar();
    }
  }, {
    key: "setTriggerRanges",
    value: function setTriggerRanges() {
      var _this16 = this;
      this.totalScrollTriggerCount = this.slideTriggers.reduce(function (e, t) {
        return e + Math.max(t.page.scrollTriggers.length, 1);
      }, 0);
      var e = 0;
      this.slideTriggers.forEach(function (t, i) {
        t.range = [e, e + Math.max(t.page.scrollTriggers.length, 1) / _this16.totalScrollTriggerCount];
        var s = (t.range[1] - t.range[0]) / t.page.scrollTriggers.length;
        t.page.scrollTriggers.forEach(function (t, i) {
          t.range = [e + i * s, e + (i + 1) * s];
        }), e = t.range[1];
      });
    }
  }, {
    key: "createFragmentTriggersForPage",
    value: function createFragmentTriggersForPage(e, t) {
      var _this17 = this;
      t = t || e.slideElement;
      var i = this.Reveal.fragments.sort(t.querySelectorAll(".fragment"), !0);
      return i.length && (e.fragments = this.Reveal.fragments.sort(t.querySelectorAll(".fragment:not(.disabled)")), e.scrollTriggers.push({
        activate: function activate() {
          _this17.Reveal.fragments.update(-1, e.fragments, t);
        }
      }), i.forEach(function (i, s) {
        e.scrollTriggers.push({
          activate: function activate() {
            _this17.Reveal.fragments.update(s, e.fragments, t);
          }
        });
      })), e.scrollTriggers.length;
    }
  }, {
    key: "createAutoAnimateTriggersForPage",
    value: function createAutoAnimateTriggersForPage(e) {
      var _this$slideTriggers,
        _this18 = this;
      e.autoAnimateElements.length > 0 && (_this$slideTriggers = this.slideTriggers).push.apply(_this$slideTriggers, _toConsumableArray(Array.from(e.autoAnimateElements).map(function (t, i) {
        var s = _this18.createPage({
          slideElement: t.querySelector("section"),
          contentElement: t,
          backgroundElement: t.querySelector(".slide-background")
        });
        return _this18.createFragmentTriggersForPage(s, s.slideElement), e.autoAnimatePages.push(s), {
          page: s,
          activate: function activate() {
            return _this18.activatePage(s);
          },
          deactivate: function deactivate() {
            return _this18.deactivatePage(s);
          }
        };
      })));
    }
  }, {
    key: "createPage",
    value: function createPage(e) {
      return e.scrollTriggers = [], e.indexh = parseInt(e.slideElement.getAttribute("data-index-h"), 10), e.indexv = parseInt(e.slideElement.getAttribute("data-index-v"), 10), e;
    }
  }, {
    key: "syncProgressBar",
    value: function syncProgressBar() {
      var _this19 = this;
      this.progressBarInner.querySelectorAll(".scrollbar-slide").forEach(function (e) {
        return e.remove();
      });
      var e = this.viewportElement.scrollHeight,
        t = this.viewportElement.offsetHeight,
        i = t / e;
      this.progressBarHeight = this.progressBarInner.offsetHeight, this.playheadHeight = Math.max(i * this.progressBarHeight, 8), this.progressBarScrollableHeight = this.progressBarHeight - this.playheadHeight;
      var s = t / e * this.progressBarHeight,
        a = Math.min(s / 8, 4);
      this.progressBarPlayhead.style.height = this.playheadHeight - a + "px", s > 6 ? this.slideTriggers.forEach(function (e) {
        var t = e.page;
        t.progressBarSlide = document.createElement("div"), t.progressBarSlide.className = "scrollbar-slide", t.progressBarSlide.style.top = e.range[0] * _this19.progressBarHeight + "px", t.progressBarSlide.style.height = (e.range[1] - e.range[0]) * _this19.progressBarHeight - a + "px", t.progressBarSlide.classList.toggle("has-triggers", t.scrollTriggers.length > 0), _this19.progressBarInner.appendChild(t.progressBarSlide), t.scrollTriggerElements = t.scrollTriggers.map(function (i, s) {
          var n = document.createElement("div");
          return n.className = "scrollbar-trigger", n.style.top = (i.range[0] - e.range[0]) * _this19.progressBarHeight + "px", n.style.height = (i.range[1] - i.range[0]) * _this19.progressBarHeight - a + "px", t.progressBarSlide.appendChild(n), 0 === s && (n.style.display = "none"), n;
        });
      }) : this.pages.forEach(function (e) {
        return e.progressBarSlide = null;
      });
    }
  }, {
    key: "syncScrollPosition",
    value: function syncScrollPosition() {
      var _this20 = this;
      var e = this.viewportElement.offsetHeight,
        t = e / this.viewportElement.scrollHeight,
        i = this.viewportElement.scrollTop,
        s = this.viewportElement.scrollHeight - e,
        a = Math.max(Math.min(i / s, 1), 0),
        n = Math.max(Math.min((i + e / 2) / this.viewportElement.scrollHeight, 1), 0);
      var r;
      this.slideTriggers.forEach(function (e) {
        var i = e.page;
        a >= e.range[0] - 2 * t && a <= e.range[1] + 2 * t && !i.loaded ? (i.loaded = !0, _this20.Reveal.slideContent.load(i.slideElement)) : i.loaded && (i.loaded = !1, _this20.Reveal.slideContent.unload(i.slideElement)), a >= e.range[0] && a <= e.range[1] ? (_this20.activateTrigger(e), r = e.page) : e.active && _this20.deactivateTrigger(e);
      }), r && r.scrollTriggers.forEach(function (e) {
        n >= e.range[0] && n <= e.range[1] ? _this20.activateTrigger(e) : e.active && _this20.deactivateTrigger(e);
      }), this.setProgressBarValue(i / (this.viewportElement.scrollHeight - e));
    }
  }, {
    key: "setProgressBarValue",
    value: function setProgressBarValue(e) {
      this.progressBar && (this.progressBarPlayhead.style.transform = "translateY(".concat(e * this.progressBarScrollableHeight, "px)"), this.getAllPages().filter(function (e) {
        return e.progressBarSlide;
      }).forEach(function (e) {
        e.progressBarSlide.classList.toggle("active", !0 === e.active), e.scrollTriggers.forEach(function (t, i) {
          e.scrollTriggerElements[i].classList.toggle("active", !0 === e.active && !0 === t.active);
        });
      }), this.showProgressBar());
    }
  }, {
    key: "showProgressBar",
    value: function showProgressBar() {
      var _this21 = this;
      this.progressBar.classList.add("visible"), clearTimeout(this.hideProgressBarTimeout), "auto" !== this.Reveal.getConfig().scrollProgress || this.draggingProgressBar || (this.hideProgressBarTimeout = setTimeout(function () {
        _this21.progressBar && _this21.progressBar.classList.remove("visible");
      }, 500));
    }
  }, {
    key: "prev",
    value: function prev() {
      this.viewportElement.scrollTop -= this.scrollTriggerHeight;
    }
  }, {
    key: "next",
    value: function next() {
      this.viewportElement.scrollTop += this.scrollTriggerHeight;
    }
  }, {
    key: "scrollToSlide",
    value: function scrollToSlide(e) {
      var _this22 = this;
      if (this.active) {
        var _t13 = this.getScrollTriggerBySlide(e);
        _t13 && (this.viewportElement.scrollTop = _t13.range[0] * (this.viewportElement.scrollHeight - this.viewportElement.offsetHeight));
      } else this.activatedCallbacks.push(function () {
        return _this22.scrollToSlide(e);
      });
    }
  }, {
    key: "storeScrollPosition",
    value: function storeScrollPosition() {
      var _this23 = this;
      clearTimeout(this.storeScrollPositionTimeout), this.storeScrollPositionTimeout = setTimeout(function () {
        sessionStorage.setItem("reveal-scroll-top", _this23.viewportElement.scrollTop), sessionStorage.setItem("reveal-scroll-origin", location.origin + location.pathname), _this23.storeScrollPositionTimeout = null;
      }, 50);
    }
  }, {
    key: "restoreScrollPosition",
    value: function restoreScrollPosition() {
      var e = sessionStorage.getItem("reveal-scroll-top"),
        t = sessionStorage.getItem("reveal-scroll-origin");
      e && t === location.origin + location.pathname && (this.viewportElement.scrollTop = parseInt(e, 10));
    }
  }, {
    key: "activatePage",
    value: function activatePage(e) {
      if (!e.active) {
        e.active = !0;
        var _t14 = e.slideElement,
          _i15 = e.backgroundElement,
          _s5 = e.contentElement,
          _a5 = e.indexh,
          _n7 = e.indexv;
        _s5.style.display = "block", _t14.classList.add("present"), _i15 && _i15.classList.add("present"), this.Reveal.setCurrentScrollPage(_t14, _a5, _n7), this.Reveal.backgrounds.bubbleSlideContrastClassToElement(_t14, this.viewportElement), Array.from(_s5.parentNode.querySelectorAll(".scroll-page-content")).forEach(function (e) {
          e !== _s5 && (e.style.display = "none");
        });
      }
    }
  }, {
    key: "deactivatePage",
    value: function deactivatePage(e) {
      e.active && (e.active = !1, e.slideElement && e.slideElement.classList.remove("present"), e.backgroundElement && e.backgroundElement.classList.remove("present"));
    }
  }, {
    key: "activateTrigger",
    value: function activateTrigger(e) {
      e.active || (e.active = !0, e.activate());
    }
  }, {
    key: "deactivateTrigger",
    value: function deactivateTrigger(e) {
      e.active && (e.active = !1, e.deactivate && e.deactivate());
    }
  }, {
    key: "getSlideByIndices",
    value: function getSlideByIndices(e, t) {
      var i = this.getAllPages().find(function (i) {
        return i.indexh === e && i.indexv === t;
      });
      return i ? i.slideElement : null;
    }
  }, {
    key: "getScrollTriggerBySlide",
    value: function getScrollTriggerBySlide(e) {
      return this.slideTriggers.find(function (t) {
        return t.page.slideElement === e;
      });
    }
  }, {
    key: "getAllPages",
    value: function getAllPages() {
      return this.pages.flatMap(function (e) {
        return [e].concat(_toConsumableArray(e.autoAnimatePages || []));
      });
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      this.syncScrollPosition(), this.storeScrollPosition();
    }
  }, {
    key: "viewportElement",
    get: function get() {
      return this.Reveal.getViewportElement();
    }
  }]);
}();
var x$1 = /*#__PURE__*/function () {
  function x(e) {
    _classCallCheck(this, x);
    this.Reveal = e;
  }
  return _createClass(x, [{
    key: "activate",
    value: function () {
      var _activate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var e, i, s, a, n, r, o, d, c, h, _e22, u, g, p, v;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              e = this.Reveal.getConfig(), i = t(this.Reveal.getRevealElement(), m$1), s = e.slideNumber && /all|print/i.test(e.showSlideNumber), a = this.Reveal.getComputedSlideSize(window.innerWidth, window.innerHeight), n = Math.floor(a.width * (1 + e.margin)), r = Math.floor(a.height * (1 + e.margin)), o = a.width, d = a.height;
              _context.next = 3;
              return new Promise(requestAnimationFrame);
            case 3:
              l("@page{size:" + n + "px " + r + "px; margin: 0px;}");
              l(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " + o + "px; max-height:" + d + "px}");
              document.documentElement.classList.add("reveal-print", "print-pdf");
              document.body.style.width = n + "px";
              document.body.style.height = r + "px";
              c = this.Reveal.getViewportElement();
              if (c) {
                _e22 = window.getComputedStyle(c);
                _e22 && _e22.background && (h = _e22.background);
              }
              _context.next = 12;
              return new Promise(requestAnimationFrame);
            case 12:
              this.Reveal.layoutSlideContents(o, d);
              _context.next = 15;
              return new Promise(requestAnimationFrame);
            case 15:
              u = i.map(function (e) {
                return e.scrollHeight;
              }), g = [], p = i[0].parentNode;
              v = 1;
              i.forEach(function (i, a) {
                if (!1 === i.classList.contains("stack")) {
                  var _l3 = (n - o) / 2,
                    _c2 = (r - d) / 2;
                  var _p = u[a];
                  var _m = Math.max(Math.ceil(_p / r), 1);
                  _m = Math.min(_m, e.pdfMaxPagesPerSlide), (1 === _m && e.center || i.classList.contains("center")) && (_c2 = Math.max((r - _p) / 2, 0));
                  var _f = document.createElement("div");
                  if (g.push(_f), _f.className = "pdf-page", _f.style.height = (r + e.pdfPageHeightOffset) * _m + "px", h && (_f.style.background = h), _f.appendChild(i), i.style.left = _l3 + "px", i.style.top = _c2 + "px", i.style.width = o + "px", this.Reveal.slideContent.layout(i), i.slideBackgroundElement && _f.insertBefore(i.slideBackgroundElement, i), e.showNotes) {
                    var _t15 = this.Reveal.getSlideNotes(i);
                    if (_t15) {
                      var _i16 = 8,
                        _s6 = "string" == typeof e.showNotes ? e.showNotes : "inline",
                        _a6 = document.createElement("div");
                      _a6.classList.add("speaker-notes"), _a6.classList.add("speaker-notes-pdf"), _a6.setAttribute("data-layout", _s6), _a6.innerHTML = _t15, "separate-page" === _s6 ? g.push(_a6) : (_a6.style.left = _i16 + "px", _a6.style.bottom = _i16 + "px", _a6.style.width = n - 2 * _i16 + "px", _f.appendChild(_a6));
                    }
                  }
                  if (s) {
                    var _e23 = document.createElement("div");
                    _e23.classList.add("slide-number"), _e23.classList.add("slide-number-pdf"), _e23.innerHTML = v++, _f.appendChild(_e23);
                  }
                  if (e.pdfSeparateFragments) {
                    var _e24 = this.Reveal.fragments.sort(_f.querySelectorAll(".fragment"), !0);
                    var _t16;
                    _e24.forEach(function (e, i) {
                      _t16 && _t16.forEach(function (e) {
                        e.classList.remove("current-fragment");
                      }), e.forEach(function (e) {
                        e.classList.add("visible", "current-fragment");
                      }, this);
                      var a = _f.cloneNode(!0);
                      if (s) {
                        var _e25 = i + 1;
                        a.querySelector(".slide-number-pdf").innerHTML += "." + _e25;
                      }
                      g.push(a), _t16 = e;
                    }, this), _e24.forEach(function (e) {
                      e.forEach(function (e) {
                        e.classList.remove("visible", "current-fragment");
                      });
                    });
                  } else t(_f, ".fragment:not(.fade-out)").forEach(function (e) {
                    e.classList.add("visible");
                  });
                }
              }, this);
              _context.next = 20;
              return new Promise(requestAnimationFrame);
            case 20:
              g.forEach(function (e) {
                return p.appendChild(e);
              });
              this.Reveal.slideContent.layout(this.Reveal.getSlidesElement());
              this.Reveal.dispatchEvent({
                type: "pdf-ready"
              });
              c.classList.remove("loading-scroll-mode");
            case 24:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function activate() {
        return _activate.apply(this, arguments);
      }
      return activate;
    }()
  }, {
    key: "isActive",
    value: function isActive() {
      return "print" === this.Reveal.getConfig().view;
    }
  }]);
}();
var P = /*#__PURE__*/function () {
  function P(e) {
    _classCallCheck(this, P);
    this.Reveal = e;
  }
  return _createClass(P, [{
    key: "configure",
    value: function configure(e, t) {
      !1 === e.fragments ? this.disable() : !1 === t.fragments && this.enable();
    }
  }, {
    key: "disable",
    value: function disable() {
      t(this.Reveal.getSlidesElement(), ".fragment").forEach(function (e) {
        e.classList.add("visible"), e.classList.remove("current-fragment");
      });
    }
  }, {
    key: "enable",
    value: function enable() {
      t(this.Reveal.getSlidesElement(), ".fragment").forEach(function (e) {
        e.classList.remove("visible"), e.classList.remove("current-fragment");
      });
    }
  }, {
    key: "availableRoutes",
    value: function availableRoutes() {
      var e = this.Reveal.getCurrentSlide();
      if (e && this.Reveal.getConfig().fragments) {
        var _t17 = e.querySelectorAll(".fragment:not(.disabled)"),
          _i17 = e.querySelectorAll(".fragment:not(.disabled):not(.visible)");
        return {
          prev: _t17.length - _i17.length > 0,
          next: !!_i17.length
        };
      }
      return {
        prev: !1,
        next: !1
      };
    }
  }, {
    key: "sort",
    value: function sort(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      e = Array.from(e);
      var i = [],
        s = [],
        a = [];
      e.forEach(function (e) {
        if (e.hasAttribute("data-fragment-index")) {
          var _t18 = parseInt(e.getAttribute("data-fragment-index"), 10);
          i[_t18] || (i[_t18] = []), i[_t18].push(e);
        } else s.push([e]);
      }), i = i.concat(s);
      var n = 0;
      return i.forEach(function (e) {
        e.forEach(function (e) {
          a.push(e), e.setAttribute("data-fragment-index", n);
        }), n++;
      }), !0 === t ? i : a;
    }
  }, {
    key: "sortAll",
    value: function sortAll() {
      var _this24 = this;
      this.Reveal.getHorizontalSlides().forEach(function (e) {
        var i = t(e, "section");
        i.forEach(function (e, t) {
          _this24.sort(e.querySelectorAll(".fragment"));
        }, _this24), 0 === i.length && _this24.sort(e.querySelectorAll(".fragment"));
      });
    }
  }, {
    key: "update",
    value: function update(e, t) {
      var _this25 = this;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.Reveal.getCurrentSlide();
      var s = {
        shown: [],
        hidden: []
      };
      if (i && this.Reveal.getConfig().fragments && (t = t || this.sort(i.querySelectorAll(".fragment"))).length) {
        var _a7 = 0;
        if ("number" != typeof e) {
          var _t19 = this.sort(i.querySelectorAll(".fragment.visible")).pop();
          _t19 && (e = parseInt(_t19.getAttribute("data-fragment-index") || 0, 10));
        }
        Array.from(t).forEach(function (t, i) {
          if (t.hasAttribute("data-fragment-index") && (i = parseInt(t.getAttribute("data-fragment-index"), 10)), _a7 = Math.max(_a7, i), i <= e) {
            var _a8 = t.classList.contains("visible");
            t.classList.add("visible"), t.classList.remove("current-fragment"), i === e && (_this25.Reveal.announceStatus(_this25.Reveal.getStatusText(t)), t.classList.add("current-fragment"), _this25.Reveal.slideContent.startEmbeddedContent(t)), _a8 || (s.shown.push(t), _this25.Reveal.dispatchEvent({
              target: t,
              type: "visible",
              bubbles: !1
            }));
          } else {
            var _e26 = t.classList.contains("visible");
            t.classList.remove("visible"), t.classList.remove("current-fragment"), _e26 && (_this25.Reveal.slideContent.stopEmbeddedContent(t), s.hidden.push(t), _this25.Reveal.dispatchEvent({
              target: t,
              type: "hidden",
              bubbles: !1
            }));
          }
        }), e = "number" == typeof e ? e : -1, e = Math.max(Math.min(e, _a7), -1), i.setAttribute("data-fragment", e);
      }
      return s.hidden.length && this.Reveal.dispatchEvent({
        type: "fragmenthidden",
        data: {
          fragment: s.hidden[0],
          fragments: s.hidden
        }
      }), s.shown.length && this.Reveal.dispatchEvent({
        type: "fragmentshown",
        data: {
          fragment: s.shown[0],
          fragments: s.shown
        }
      }), s;
    }
  }, {
    key: "sync",
    value: function sync() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.Reveal.getCurrentSlide();
      return this.sort(e.querySelectorAll(".fragment"));
    }
  }, {
    key: "goto",
    value: function goto(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var i = this.Reveal.getCurrentSlide();
      if (i && this.Reveal.getConfig().fragments) {
        var _s7 = this.sort(i.querySelectorAll(".fragment:not(.disabled)"));
        if (_s7.length) {
          if ("number" != typeof e) {
            var _t20 = this.sort(i.querySelectorAll(".fragment:not(.disabled).visible")).pop();
            e = _t20 ? parseInt(_t20.getAttribute("data-fragment-index") || 0, 10) : -1;
          }
          e += t;
          var _a9 = this.update(e, _s7);
          return this.Reveal.controls.update(), this.Reveal.progress.update(), this.Reveal.getConfig().fragmentInURL && this.Reveal.location.writeURL(), !(!_a9.shown.length && !_a9.hidden.length);
        }
      }
      return !1;
    }
  }, {
    key: "next",
    value: function next() {
      return this["goto"](null, 1);
    }
  }, {
    key: "prev",
    value: function prev() {
      return this["goto"](null, -1);
    }
  }]);
}();
var T$1 = /*#__PURE__*/function () {
  function T(e) {
    _classCallCheck(this, T);
    this.Reveal = e, this.active = !1, this.onSlideClicked = this.onSlideClicked.bind(this);
  }
  return _createClass(T, [{
    key: "activate",
    value: function activate() {
      var _this26 = this;
      if (this.Reveal.getConfig().overview && !this.Reveal.isScrollView() && !this.isActive()) {
        this.active = !0, this.Reveal.getRevealElement().classList.add("overview"), this.Reveal.cancelAutoSlide(), this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()), t(this.Reveal.getRevealElement(), m$1).forEach(function (e) {
          e.classList.contains("stack") || e.addEventListener("click", _this26.onSlideClicked, !0);
        });
        var _e27 = 70,
          _i18 = this.Reveal.getComputedSlideSize();
        this.overviewSlideWidth = _i18.width + _e27, this.overviewSlideHeight = _i18.height + _e27, this.Reveal.getConfig().rtl && (this.overviewSlideWidth = -this.overviewSlideWidth), this.Reveal.updateSlidesVisibility(), this.layout(), this.update(), this.Reveal.layout();
        var _s8 = this.Reveal.getIndices();
        this.Reveal.dispatchEvent({
          type: "overviewshown",
          data: {
            indexh: _s8.h,
            indexv: _s8.v,
            currentSlide: this.Reveal.getCurrentSlide()
          }
        });
      }
    }
  }, {
    key: "layout",
    value: function layout() {
      var _this27 = this;
      this.Reveal.getHorizontalSlides().forEach(function (e, i) {
        e.setAttribute("data-index-h", i), a(e, "translate3d(" + i * _this27.overviewSlideWidth + "px, 0, 0)"), e.classList.contains("stack") && t(e, "section").forEach(function (e, t) {
          e.setAttribute("data-index-h", i), e.setAttribute("data-index-v", t), a(e, "translate3d(0, " + t * _this27.overviewSlideHeight + "px, 0)");
        });
      }), Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach(function (e, i) {
        a(e, "translate3d(" + i * _this27.overviewSlideWidth + "px, 0, 0)"), t(e, ".slide-background").forEach(function (e, t) {
          a(e, "translate3d(0, " + t * _this27.overviewSlideHeight + "px, 0)");
        });
      });
    }
  }, {
    key: "update",
    value: function update() {
      var e = Math.min(window.innerWidth, window.innerHeight),
        t = Math.max(e / 5, 150) / e,
        i = this.Reveal.getIndices();
      this.Reveal.transformSlides({
        overview: ["scale(" + t + ")", "translateX(" + -i.h * this.overviewSlideWidth + "px)", "translateY(" + -i.v * this.overviewSlideHeight + "px)"].join(" ")
      });
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      var _this28 = this;
      if (this.Reveal.getConfig().overview) {
        this.active = !1, this.Reveal.getRevealElement().classList.remove("overview"), this.Reveal.getRevealElement().classList.add("overview-deactivating"), setTimeout(function () {
          _this28.Reveal.getRevealElement().classList.remove("overview-deactivating");
        }, 1), this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()), t(this.Reveal.getRevealElement(), m$1).forEach(function (e) {
          a(e, ""), e.removeEventListener("click", _this28.onSlideClicked, !0);
        }), t(this.Reveal.getBackgroundsElement(), ".slide-background").forEach(function (e) {
          a(e, "");
        }), this.Reveal.transformSlides({
          overview: ""
        });
        var _e28 = this.Reveal.getIndices();
        this.Reveal.slide(_e28.h, _e28.v), this.Reveal.layout(), this.Reveal.cueAutoSlide(), this.Reveal.dispatchEvent({
          type: "overviewhidden",
          data: {
            indexh: _e28.h,
            indexv: _e28.v,
            currentSlide: this.Reveal.getCurrentSlide()
          }
        });
      }
    }
  }, {
    key: "toggle",
    value: function toggle(e) {
      "boolean" == typeof e ? e ? this.activate() : this.deactivate() : this.isActive() ? this.deactivate() : this.activate();
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this.active;
    }
  }, {
    key: "onSlideClicked",
    value: function onSlideClicked(e) {
      if (this.isActive()) {
        e.preventDefault();
        var _t21 = e.target;
        for (; _t21 && !_t21.nodeName.match(/section/gi);) _t21 = _t21.parentNode;
        if (_t21 && !_t21.classList.contains("disabled") && (this.deactivate(), _t21.nodeName.match(/section/gi))) {
          var _e29 = parseInt(_t21.getAttribute("data-index-h"), 10),
            _i19 = parseInt(_t21.getAttribute("data-index-v"), 10);
          this.Reveal.slide(_e29, _i19);
        }
      }
    }
  }]);
}();
var N$1 = /*#__PURE__*/function () {
  function N(e) {
    _classCallCheck(this, N);
    this.Reveal = e, this.shortcuts = {}, this.bindings = {}, this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this);
  }
  return _createClass(N, [{
    key: "configure",
    value: function configure(e, t) {
      "linear" === e.navigationMode ? (this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"] = "Next slide", this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"] = "Previous slide") : (this.shortcuts["N  ,  SPACE"] = "Next slide", this.shortcuts["P  ,  Shift SPACE"] = "Previous slide", this.shortcuts["&#8592;  ,  H"] = "Navigate left", this.shortcuts["&#8594;  ,  L"] = "Navigate right", this.shortcuts["&#8593;  ,  K"] = "Navigate up", this.shortcuts["&#8595;  ,  J"] = "Navigate down"), this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"] = "Navigate without fragments", this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"] = "Jump to first/last slide", this.shortcuts["B  ,  ."] = "Pause", this.shortcuts.F = "Fullscreen", this.shortcuts.G = "Jump to slide", this.shortcuts["ESC, O"] = "Slide overview";
    }
  }, {
    key: "bind",
    value: function bind() {
      document.addEventListener("keydown", this.onDocumentKeyDown, !1);
    }
  }, {
    key: "unbind",
    value: function unbind() {
      document.removeEventListener("keydown", this.onDocumentKeyDown, !1);
    }
  }, {
    key: "addKeyBinding",
    value: function addKeyBinding(e, t) {
      "object" == _typeof$1(e) && e.keyCode ? this.bindings[e.keyCode] = {
        callback: t,
        key: e.key,
        description: e.description
      } : this.bindings[e] = {
        callback: t,
        key: null,
        description: null
      };
    }
  }, {
    key: "removeKeyBinding",
    value: function removeKeyBinding(e) {
      delete this.bindings[e];
    }
  }, {
    key: "triggerKey",
    value: function triggerKey(e) {
      this.onDocumentKeyDown({
        keyCode: e
      });
    }
  }, {
    key: "registerKeyboardShortcut",
    value: function registerKeyboardShortcut(e, t) {
      this.shortcuts[e] = t;
    }
  }, {
    key: "getShortcuts",
    value: function getShortcuts() {
      return this.shortcuts;
    }
  }, {
    key: "getBindings",
    value: function getBindings() {
      return this.bindings;
    }
  }, {
    key: "onDocumentKeyDown",
    value: function onDocumentKeyDown(e) {
      var t = this.Reveal.getConfig();
      if ("function" == typeof t.keyboardCondition && !1 === t.keyboardCondition(e)) return !0;
      if ("focused" === t.keyboardCondition && !this.Reveal.isFocused()) return !0;
      var i = e.keyCode,
        s = !this.Reveal.isAutoSliding();
      this.Reveal.onUserInput(e);
      var a = document.activeElement && !0 === document.activeElement.isContentEditable,
        n = document.activeElement && document.activeElement.tagName && /input|textarea/i.test(document.activeElement.tagName),
        r = document.activeElement && document.activeElement.className && /speaker-notes/i.test(document.activeElement.className),
        l = !(-1 !== [32, 37, 38, 39, 40, 63, 78, 80, 191].indexOf(e.keyCode) && e.shiftKey || e.altKey) && (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey);
      if (a || n || r || l) return;
      var d,
        c = [66, 86, 190, 191, 112];
      if ("object" == _typeof$1(t.keyboard)) for (d in t.keyboard) "togglePause" === t.keyboard[d] && c.push(parseInt(d, 10));
      if (this.Reveal.isPaused() && -1 === c.indexOf(i)) return !1;
      var h = "linear" === t.navigationMode || !this.Reveal.hasHorizontalSlides() || !this.Reveal.hasVerticalSlides(),
        u = !1;
      if ("object" == _typeof$1(t.keyboard)) for (d in t.keyboard) if (parseInt(d, 10) === i) {
        var _i20 = t.keyboard[d];
        "function" == typeof _i20 ? _i20.apply(null, [e]) : "string" == typeof _i20 && "function" == typeof this.Reveal[_i20] && this.Reveal[_i20].call(), u = !0;
      }
      if (!1 === u) for (d in this.bindings) if (parseInt(d, 10) === i) {
        var _t22 = this.bindings[d].callback;
        "function" == typeof _t22 ? _t22.apply(null, [e]) : "string" == typeof _t22 && "function" == typeof this.Reveal[_t22] && this.Reveal[_t22].call(), u = !0;
      }
      !1 === u && (u = !0, 80 === i || 33 === i ? this.Reveal.prev({
        skipFragments: e.altKey
      }) : 78 === i || 34 === i ? this.Reveal.next({
        skipFragments: e.altKey
      }) : 72 === i || 37 === i ? e.shiftKey ? this.Reveal.slide(0) : !this.Reveal.overview.isActive() && h ? t.rtl ? this.Reveal.next({
        skipFragments: e.altKey
      }) : this.Reveal.prev({
        skipFragments: e.altKey
      }) : this.Reveal.left({
        skipFragments: e.altKey
      }) : 76 === i || 39 === i ? e.shiftKey ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1) : !this.Reveal.overview.isActive() && h ? t.rtl ? this.Reveal.prev({
        skipFragments: e.altKey
      }) : this.Reveal.next({
        skipFragments: e.altKey
      }) : this.Reveal.right({
        skipFragments: e.altKey
      }) : 75 === i || 38 === i ? e.shiftKey ? this.Reveal.slide(void 0, 0) : !this.Reveal.overview.isActive() && h ? this.Reveal.prev({
        skipFragments: e.altKey
      }) : this.Reveal.up({
        skipFragments: e.altKey
      }) : 74 === i || 40 === i ? e.shiftKey ? this.Reveal.slide(void 0, Number.MAX_VALUE) : !this.Reveal.overview.isActive() && h ? this.Reveal.next({
        skipFragments: e.altKey
      }) : this.Reveal.down({
        skipFragments: e.altKey
      }) : 36 === i ? this.Reveal.slide(0) : 35 === i ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1) : 32 === i ? (this.Reveal.overview.isActive() && this.Reveal.overview.deactivate(), e.shiftKey ? this.Reveal.prev({
        skipFragments: e.altKey
      }) : this.Reveal.next({
        skipFragments: e.altKey
      })) : [58, 59, 66, 86, 190].includes(i) || 191 === i && !e.shiftKey ? this.Reveal.togglePause() : 70 === i ? o(t.embedded ? this.Reveal.getViewportElement() : document.documentElement) : 65 === i ? t.autoSlideStoppable && this.Reveal.toggleAutoSlide(s) : 71 === i ? t.jumpToSlide && this.Reveal.toggleJumpToSlide() : 63 !== i && 191 !== i || !e.shiftKey ? 112 === i ? this.Reveal.toggleHelp() : u = !1 : this.Reveal.toggleHelp()), u ? e.preventDefault && e.preventDefault() : 27 !== i && 79 !== i || (!1 === this.Reveal.closeOverlay() && this.Reveal.overview.toggle(), e.preventDefault && e.preventDefault()), this.Reveal.cueAutoSlide();
    }
  }]);
}();
var M = /*#__PURE__*/function () {
  function M(e) {
    _classCallCheck(this, M);
    _defineProperty(this, "MAX_REPLACE_STATE_FREQUENCY", 1e3);
    this.Reveal = e, this.writeURLTimeout = 0, this.replaceStateTimestamp = 0, this.onWindowHashChange = this.onWindowHashChange.bind(this);
  }
  return _createClass(M, [{
    key: "bind",
    value: function bind() {
      window.addEventListener("hashchange", this.onWindowHashChange, !1);
    }
  }, {
    key: "unbind",
    value: function unbind() {
      window.removeEventListener("hashchange", this.onWindowHashChange, !1);
    }
  }, {
    key: "getIndicesFromHash",
    value: function getIndicesFromHash() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.hash;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var i = e.replace(/^#\/?/, ""),
        s = i.split("/");
      if (/^[0-9]*$/.test(s[0]) || !i.length) {
        var _e30 = this.Reveal.getConfig();
        var _i21,
          _a10 = _e30.hashOneBasedIndex || t.oneBasedIndex ? 1 : 0,
          _n8 = parseInt(s[0], 10) - _a10 || 0,
          _r4 = parseInt(s[1], 10) - _a10 || 0;
        return _e30.fragmentInURL && (_i21 = parseInt(s[2], 10), isNaN(_i21) && (_i21 = void 0)), {
          h: _n8,
          v: _r4,
          f: _i21
        };
      }
      {
        var _e31, _t23;
        /\/[-\d]+$/g.test(i) && (_t23 = parseInt(i.split("/").pop(), 10), _t23 = isNaN(_t23) ? void 0 : _t23, i = i.split("/").shift());
        try {
          _e31 = document.getElementById(decodeURIComponent(i)).closest(".slides section");
        } catch (e) {}
        if (_e31) return _objectSpread$2(_objectSpread$2({}, this.Reveal.getIndices(_e31)), {}, {
          f: _t23
        });
      }
      return null;
    }
  }, {
    key: "readURL",
    value: function readURL() {
      var e = this.Reveal.getIndices(),
        t = this.getIndicesFromHash();
      t ? t.h === e.h && t.v === e.v && void 0 === t.f || this.Reveal.slide(t.h, t.v, t.f) : this.Reveal.slide(e.h || 0, e.v || 0);
    }
  }, {
    key: "writeURL",
    value: function writeURL(e) {
      var t = this.Reveal.getConfig(),
        i = this.Reveal.getCurrentSlide();
      if (clearTimeout(this.writeURLTimeout), "number" == typeof e) this.writeURLTimeout = setTimeout(this.writeURL, e);else if (i) {
        var _e32 = this.getHash();
        t.history ? window.location.hash = _e32 : t.hash && ("/" === _e32 ? this.debouncedReplaceState(window.location.pathname + window.location.search) : this.debouncedReplaceState("#" + _e32));
      }
    }
  }, {
    key: "replaceState",
    value: function replaceState(e) {
      window.history.replaceState(null, null, e), this.replaceStateTimestamp = Date.now();
    }
  }, {
    key: "debouncedReplaceState",
    value: function debouncedReplaceState(e) {
      var _this29 = this;
      clearTimeout(this.replaceStateTimeout), Date.now() - this.replaceStateTimestamp > this.MAX_REPLACE_STATE_FREQUENCY ? this.replaceState(e) : this.replaceStateTimeout = setTimeout(function () {
        return _this29.replaceState(e);
      }, this.MAX_REPLACE_STATE_FREQUENCY);
    }
  }, {
    key: "getHash",
    value: function getHash(e) {
      var t = "/",
        i = e || this.Reveal.getCurrentSlide(),
        s = i ? i.getAttribute("id") : null;
      s && (s = encodeURIComponent(s));
      var a = this.Reveal.getIndices(e);
      if (this.Reveal.getConfig().fragmentInURL || (a.f = void 0), "string" == typeof s && s.length) t = "/" + s, a.f >= 0 && (t += "/" + a.f);else {
        var _e33 = this.Reveal.getConfig().hashOneBasedIndex ? 1 : 0;
        (a.h > 0 || a.v > 0 || a.f >= 0) && (t += a.h + _e33), (a.v > 0 || a.f >= 0) && (t += "/" + (a.v + _e33)), a.f >= 0 && (t += "/" + a.f);
      }
      return t;
    }
  }, {
    key: "onWindowHashChange",
    value: function onWindowHashChange(e) {
      this.readURL();
    }
  }]);
}();
var I$1 = /*#__PURE__*/function () {
  function I(e) {
    _classCallCheck(this, I);
    this.Reveal = e, this.onNavigateLeftClicked = this.onNavigateLeftClicked.bind(this), this.onNavigateRightClicked = this.onNavigateRightClicked.bind(this), this.onNavigateUpClicked = this.onNavigateUpClicked.bind(this), this.onNavigateDownClicked = this.onNavigateDownClicked.bind(this), this.onNavigatePrevClicked = this.onNavigatePrevClicked.bind(this), this.onNavigateNextClicked = this.onNavigateNextClicked.bind(this), this.onEnterFullscreen = this.onEnterFullscreen.bind(this);
  }
  return _createClass(I, [{
    key: "render",
    value: function render() {
      var e = this.Reveal.getConfig().rtl,
        i = this.Reveal.getRevealElement();
      this.element = document.createElement("aside"), this.element.className = "controls", this.element.innerHTML = "<button class=\"navigate-left\" aria-label=\"".concat(e ? "next slide" : "previous slide", "\"><div class=\"controls-arrow\"></div></button>\n\t\t\t<button class=\"navigate-right\" aria-label=\"").concat(e ? "previous slide" : "next slide", "\"><div class=\"controls-arrow\"></div></button>\n\t\t\t<button class=\"navigate-up\" aria-label=\"above slide\"><div class=\"controls-arrow\"></div></button>\n\t\t\t<button class=\"navigate-down\" aria-label=\"below slide\"><div class=\"controls-arrow\"></div></button>"), this.Reveal.getRevealElement().appendChild(this.element), this.controlsLeft = t(i, ".navigate-left"), this.controlsRight = t(i, ".navigate-right"), this.controlsUp = t(i, ".navigate-up"), this.controlsDown = t(i, ".navigate-down"), this.controlsPrev = t(i, ".navigate-prev"), this.controlsNext = t(i, ".navigate-next"), this.controlsFullscreen = t(i, ".enter-fullscreen"), this.controlsRightArrow = this.element.querySelector(".navigate-right"), this.controlsLeftArrow = this.element.querySelector(".navigate-left"), this.controlsDownArrow = this.element.querySelector(".navigate-down");
    }
  }, {
    key: "configure",
    value: function configure(e, t) {
      this.element.style.display = e.controls ? "block" : "none", this.element.setAttribute("data-controls-layout", e.controlsLayout), this.element.setAttribute("data-controls-back-arrows", e.controlsBackArrows);
    }
  }, {
    key: "bind",
    value: function bind() {
      var _this30 = this;
      var e = ["touchstart", "click"];
      g$1 && (e = ["touchstart"]), e.forEach(function (e) {
        _this30.controlsLeft.forEach(function (t) {
          return t.addEventListener(e, _this30.onNavigateLeftClicked, !1);
        }), _this30.controlsRight.forEach(function (t) {
          return t.addEventListener(e, _this30.onNavigateRightClicked, !1);
        }), _this30.controlsUp.forEach(function (t) {
          return t.addEventListener(e, _this30.onNavigateUpClicked, !1);
        }), _this30.controlsDown.forEach(function (t) {
          return t.addEventListener(e, _this30.onNavigateDownClicked, !1);
        }), _this30.controlsPrev.forEach(function (t) {
          return t.addEventListener(e, _this30.onNavigatePrevClicked, !1);
        }), _this30.controlsNext.forEach(function (t) {
          return t.addEventListener(e, _this30.onNavigateNextClicked, !1);
        }), _this30.controlsFullscreen.forEach(function (t) {
          return t.addEventListener(e, _this30.onEnterFullscreen, !1);
        });
      });
    }
  }, {
    key: "unbind",
    value: function unbind() {
      var _this31 = this;
      ["touchstart", "click"].forEach(function (e) {
        _this31.controlsLeft.forEach(function (t) {
          return t.removeEventListener(e, _this31.onNavigateLeftClicked, !1);
        }), _this31.controlsRight.forEach(function (t) {
          return t.removeEventListener(e, _this31.onNavigateRightClicked, !1);
        }), _this31.controlsUp.forEach(function (t) {
          return t.removeEventListener(e, _this31.onNavigateUpClicked, !1);
        }), _this31.controlsDown.forEach(function (t) {
          return t.removeEventListener(e, _this31.onNavigateDownClicked, !1);
        }), _this31.controlsPrev.forEach(function (t) {
          return t.removeEventListener(e, _this31.onNavigatePrevClicked, !1);
        }), _this31.controlsNext.forEach(function (t) {
          return t.removeEventListener(e, _this31.onNavigateNextClicked, !1);
        }), _this31.controlsFullscreen.forEach(function (t) {
          return t.removeEventListener(e, _this31.onEnterFullscreen, !1);
        });
      });
    }
  }, {
    key: "update",
    value: function update() {
      var e = this.Reveal.availableRoutes();
      [].concat(_toConsumableArray(this.controlsLeft), _toConsumableArray(this.controlsRight), _toConsumableArray(this.controlsUp), _toConsumableArray(this.controlsDown), _toConsumableArray(this.controlsPrev), _toConsumableArray(this.controlsNext)).forEach(function (e) {
        e.classList.remove("enabled", "fragmented"), e.setAttribute("disabled", "disabled");
      }), e.left && this.controlsLeft.forEach(function (e) {
        e.classList.add("enabled"), e.removeAttribute("disabled");
      }), e.right && this.controlsRight.forEach(function (e) {
        e.classList.add("enabled"), e.removeAttribute("disabled");
      }), e.up && this.controlsUp.forEach(function (e) {
        e.classList.add("enabled"), e.removeAttribute("disabled");
      }), e.down && this.controlsDown.forEach(function (e) {
        e.classList.add("enabled"), e.removeAttribute("disabled");
      }), (e.left || e.up) && this.controlsPrev.forEach(function (e) {
        e.classList.add("enabled"), e.removeAttribute("disabled");
      }), (e.right || e.down) && this.controlsNext.forEach(function (e) {
        e.classList.add("enabled"), e.removeAttribute("disabled");
      });
      var t = this.Reveal.getCurrentSlide();
      if (t) {
        var _e34 = this.Reveal.fragments.availableRoutes();
        _e34.prev && this.controlsPrev.forEach(function (e) {
          e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
        }), _e34.next && this.controlsNext.forEach(function (e) {
          e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
        }), this.Reveal.isVerticalSlide(t) ? (_e34.prev && this.controlsUp.forEach(function (e) {
          e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
        }), _e34.next && this.controlsDown.forEach(function (e) {
          e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
        })) : (_e34.prev && this.controlsLeft.forEach(function (e) {
          e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
        }), _e34.next && this.controlsRight.forEach(function (e) {
          e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
        }));
      }
      if (this.Reveal.getConfig().controlsTutorial) {
        var _t24 = this.Reveal.getIndices();
        !this.Reveal.hasNavigatedVertically() && e.down ? this.controlsDownArrow.classList.add("highlight") : (this.controlsDownArrow.classList.remove("highlight"), this.Reveal.getConfig().rtl ? !this.Reveal.hasNavigatedHorizontally() && e.left && 0 === _t24.v ? this.controlsLeftArrow.classList.add("highlight") : this.controlsLeftArrow.classList.remove("highlight") : !this.Reveal.hasNavigatedHorizontally() && e.right && 0 === _t24.v ? this.controlsRightArrow.classList.add("highlight") : this.controlsRightArrow.classList.remove("highlight"));
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.unbind(), this.element.remove();
    }
  }, {
    key: "onNavigateLeftClicked",
    value: function onNavigateLeftClicked(e) {
      e.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.prev() : this.Reveal.left();
    }
  }, {
    key: "onNavigateRightClicked",
    value: function onNavigateRightClicked(e) {
      e.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.next() : this.Reveal.right();
    }
  }, {
    key: "onNavigateUpClicked",
    value: function onNavigateUpClicked(e) {
      e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.up();
    }
  }, {
    key: "onNavigateDownClicked",
    value: function onNavigateDownClicked(e) {
      e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.down();
    }
  }, {
    key: "onNavigatePrevClicked",
    value: function onNavigatePrevClicked(e) {
      e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.prev();
    }
  }, {
    key: "onNavigateNextClicked",
    value: function onNavigateNextClicked(e) {
      e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.next();
    }
  }, {
    key: "onEnterFullscreen",
    value: function onEnterFullscreen(e) {
      var t = this.Reveal.getConfig(),
        i = this.Reveal.getViewportElement();
      o(t.embedded ? i : i.parentElement);
    }
  }]);
}();
var B$1 = /*#__PURE__*/function () {
  function B(e) {
    _classCallCheck(this, B);
    this.Reveal = e, this.onProgressClicked = this.onProgressClicked.bind(this);
  }
  return _createClass(B, [{
    key: "render",
    value: function render() {
      this.element = document.createElement("div"), this.element.className = "progress", this.Reveal.getRevealElement().appendChild(this.element), this.bar = document.createElement("span"), this.element.appendChild(this.bar);
    }
  }, {
    key: "configure",
    value: function configure(e, t) {
      this.element.style.display = e.progress ? "block" : "none";
    }
  }, {
    key: "bind",
    value: function bind() {
      this.Reveal.getConfig().progress && this.element && this.element.addEventListener("click", this.onProgressClicked, !1);
    }
  }, {
    key: "unbind",
    value: function unbind() {
      this.Reveal.getConfig().progress && this.element && this.element.removeEventListener("click", this.onProgressClicked, !1);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.Reveal.getConfig().progress && this.bar) {
        var _e35 = this.Reveal.getProgress();
        this.Reveal.getTotalSlides() < 2 && (_e35 = 0), this.bar.style.transform = "scaleX(" + _e35 + ")";
      }
    }
  }, {
    key: "getMaxWidth",
    value: function getMaxWidth() {
      return this.Reveal.getRevealElement().offsetWidth;
    }
  }, {
    key: "onProgressClicked",
    value: function onProgressClicked(e) {
      this.Reveal.onUserInput(e), e.preventDefault();
      var t = this.Reveal.getSlides(),
        i = t.length,
        s = Math.floor(e.clientX / this.getMaxWidth() * i);
      this.Reveal.getConfig().rtl && (s = i - s);
      var a = this.Reveal.getIndices(t[s]);
      this.Reveal.slide(a.h, a.v);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.element.remove();
    }
  }]);
}();
var H = /*#__PURE__*/function () {
  function H(e) {
    _classCallCheck(this, H);
    this.Reveal = e, this.lastMouseWheelStep = 0, this.cursorHidden = !1, this.cursorInactiveTimeout = 0, this.onDocumentCursorActive = this.onDocumentCursorActive.bind(this), this.onDocumentMouseScroll = this.onDocumentMouseScroll.bind(this);
  }
  return _createClass(H, [{
    key: "configure",
    value: function configure(e, t) {
      e.mouseWheel ? document.addEventListener("wheel", this.onDocumentMouseScroll, !1) : document.removeEventListener("wheel", this.onDocumentMouseScroll, !1), e.hideInactiveCursor ? (document.addEventListener("mousemove", this.onDocumentCursorActive, !1), document.addEventListener("mousedown", this.onDocumentCursorActive, !1)) : (this.showCursor(), document.removeEventListener("mousemove", this.onDocumentCursorActive, !1), document.removeEventListener("mousedown", this.onDocumentCursorActive, !1));
    }
  }, {
    key: "showCursor",
    value: function showCursor() {
      this.cursorHidden && (this.cursorHidden = !1, this.Reveal.getRevealElement().style.cursor = "");
    }
  }, {
    key: "hideCursor",
    value: function hideCursor() {
      !1 === this.cursorHidden && (this.cursorHidden = !0, this.Reveal.getRevealElement().style.cursor = "none");
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.showCursor(), document.removeEventListener("wheel", this.onDocumentMouseScroll, !1), document.removeEventListener("mousemove", this.onDocumentCursorActive, !1), document.removeEventListener("mousedown", this.onDocumentCursorActive, !1);
    }
  }, {
    key: "onDocumentCursorActive",
    value: function onDocumentCursorActive(e) {
      this.showCursor(), clearTimeout(this.cursorInactiveTimeout), this.cursorInactiveTimeout = setTimeout(this.hideCursor.bind(this), this.Reveal.getConfig().hideCursorTime);
    }
  }, {
    key: "onDocumentMouseScroll",
    value: function onDocumentMouseScroll(e) {
      if (Date.now() - this.lastMouseWheelStep > 1e3) {
        this.lastMouseWheelStep = Date.now();
        var _t25 = e.detail || -e.wheelDelta;
        _t25 > 0 ? this.Reveal.next() : _t25 < 0 && this.Reveal.prev();
      }
    }
  }]);
}();
var D$1 = function D(e, t) {
  var i = document.createElement("script");
  i.type = "text/javascript", i.async = !1, i.defer = !1, i.src = e, "function" == typeof t && (i.onload = i.onreadystatechange = function (e) {
    ("load" === e.type || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = i.onerror = null, t());
  }, i.onerror = function (e) {
    i.onload = i.onreadystatechange = i.onerror = null, t(new Error("Failed loading script: " + i.src + "\n" + e));
  });
  var s = document.querySelector("head");
  s.insertBefore(i, s.lastChild);
};
var F$1 = /*#__PURE__*/function () {
  function F(e) {
    _classCallCheck(this, F);
    this.Reveal = e, this.state = "idle", this.registeredPlugins = {}, this.asyncDependencies = [];
  }
  return _createClass(F, [{
    key: "load",
    value: function load(e, t) {
      var _this32 = this;
      return this.state = "loading", e.forEach(this.registerPlugin.bind(this)), new Promise(function (e) {
        var i = [],
          s = 0;
        if (t.forEach(function (e) {
          e.condition && !e.condition() || (e.async ? _this32.asyncDependencies.push(e) : i.push(e));
        }), i.length) {
          s = i.length;
          var _t26 = function _t26(t) {
            t && "function" == typeof t.callback && t.callback(), 0 == --s && _this32.initPlugins().then(e);
          };
          i.forEach(function (e) {
            "string" == typeof e.id ? (_this32.registerPlugin(e), _t26(e)) : "string" == typeof e.src ? D$1(e.src, function () {
              return _t26(e);
            }) : (console.warn("Unrecognized plugin format", e), _t26());
          });
        } else _this32.initPlugins().then(e);
      });
    }
  }, {
    key: "initPlugins",
    value: function initPlugins() {
      var _this33 = this;
      return new Promise(function (e) {
        var t = Object.values(_this33.registeredPlugins),
          i = t.length;
        if (0 === i) _this33.loadAsync().then(e);else {
          var _s9,
            _a11 = function _a11() {
              0 == --i ? _this33.loadAsync().then(e) : _s9();
            },
            _n9 = 0;
          _s9 = function _s9() {
            var e = t[_n9++];
            if ("function" == typeof e.init) {
              var _t27 = e.init(_this33.Reveal);
              _t27 && "function" == typeof _t27.then ? _t27.then(_a11) : _a11();
            } else _a11();
          }, _s9();
        }
      });
    }
  }, {
    key: "loadAsync",
    value: function loadAsync() {
      return this.state = "loaded", this.asyncDependencies.length && this.asyncDependencies.forEach(function (e) {
        D$1(e.src, e.callback);
      }), Promise.resolve();
    }
  }, {
    key: "registerPlugin",
    value: function registerPlugin(e) {
      2 === arguments.length && "string" == typeof arguments[0] ? (e = arguments[1]).id = arguments[0] : "function" == typeof e && (e = e());
      var t = e.id;
      "string" != typeof t ? console.warn("Unrecognized plugin format; can't find plugin.id", e) : void 0 === this.registeredPlugins[t] ? (this.registeredPlugins[t] = e, "loaded" === this.state && "function" == typeof e.init && e.init(this.Reveal)) : console.warn('reveal.js: "' + t + '" plugin has already been registered');
    }
  }, {
    key: "hasPlugin",
    value: function hasPlugin(e) {
      return !!this.registeredPlugins[e];
    }
  }, {
    key: "getPlugin",
    value: function getPlugin(e) {
      return this.registeredPlugins[e];
    }
  }, {
    key: "getRegisteredPlugins",
    value: function getRegisteredPlugins() {
      return this.registeredPlugins;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      Object.values(this.registeredPlugins).forEach(function (e) {
        "function" == typeof e.destroy && e.destroy();
      }), this.registeredPlugins = {}, this.asyncDependencies = [];
    }
  }]);
}();
var z$1 = /*#__PURE__*/function () {
  function z(e) {
    _classCallCheck(this, z);
    this.Reveal = e, this.touchStartX = 0, this.touchStartY = 0, this.touchStartCount = 0, this.touchCaptured = !1, this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this);
  }
  return _createClass(z, [{
    key: "bind",
    value: function bind() {
      var e = this.Reveal.getRevealElement();
      "onpointerdown" in window ? (e.addEventListener("pointerdown", this.onPointerDown, !1), e.addEventListener("pointermove", this.onPointerMove, !1), e.addEventListener("pointerup", this.onPointerUp, !1)) : window.navigator.msPointerEnabled ? (e.addEventListener("MSPointerDown", this.onPointerDown, !1), e.addEventListener("MSPointerMove", this.onPointerMove, !1), e.addEventListener("MSPointerUp", this.onPointerUp, !1)) : (e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1));
    }
  }, {
    key: "unbind",
    value: function unbind() {
      var e = this.Reveal.getRevealElement();
      e.removeEventListener("pointerdown", this.onPointerDown, !1), e.removeEventListener("pointermove", this.onPointerMove, !1), e.removeEventListener("pointerup", this.onPointerUp, !1), e.removeEventListener("MSPointerDown", this.onPointerDown, !1), e.removeEventListener("MSPointerMove", this.onPointerMove, !1), e.removeEventListener("MSPointerUp", this.onPointerUp, !1), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1);
    }
  }, {
    key: "isSwipePrevented",
    value: function isSwipePrevented(e) {
      if (n(e, "video[controls], audio[controls]")) return !0;
      for (; e && "function" == typeof e.hasAttribute;) {
        if (e.hasAttribute("data-prevent-swipe")) return !0;
        e = e.parentNode;
      }
      return !1;
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart(e) {
      if (this.touchCaptured = !1, this.isSwipePrevented(e.target)) return !0;
      this.touchStartX = e.touches[0].clientX, this.touchStartY = e.touches[0].clientY, this.touchStartCount = e.touches.length;
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove(e) {
      if (this.isSwipePrevented(e.target)) return !0;
      var t = this.Reveal.getConfig();
      if (this.touchCaptured) g$1 && e.preventDefault();else {
        this.Reveal.onUserInput(e);
        var _i22 = e.touches[0].clientX,
          _s10 = e.touches[0].clientY;
        if (1 === e.touches.length && 2 !== this.touchStartCount) {
          var _a12 = this.Reveal.availableRoutes({
              includeFragments: !0
            }),
            _n10 = _i22 - this.touchStartX,
            _r5 = _s10 - this.touchStartY;
          _n10 > 40 && Math.abs(_n10) > Math.abs(_r5) ? (this.touchCaptured = !0, "linear" === t.navigationMode ? t.rtl ? this.Reveal.next() : this.Reveal.prev() : this.Reveal.left()) : _n10 < -40 && Math.abs(_n10) > Math.abs(_r5) ? (this.touchCaptured = !0, "linear" === t.navigationMode ? t.rtl ? this.Reveal.prev() : this.Reveal.next() : this.Reveal.right()) : _r5 > 40 && _a12.up ? (this.touchCaptured = !0, "linear" === t.navigationMode ? this.Reveal.prev() : this.Reveal.up()) : _r5 < -40 && _a12.down && (this.touchCaptured = !0, "linear" === t.navigationMode ? this.Reveal.next() : this.Reveal.down()), t.embedded ? (this.touchCaptured || this.Reveal.isVerticalSlide()) && e.preventDefault() : e.preventDefault();
        }
      }
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(e) {
      this.touchCaptured = !1;
    }
  }, {
    key: "onPointerDown",
    value: function onPointerDown(e) {
      e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
        clientX: e.clientX,
        clientY: e.clientY
      }], this.onTouchStart(e));
    }
  }, {
    key: "onPointerMove",
    value: function onPointerMove(e) {
      e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
        clientX: e.clientX,
        clientY: e.clientY
      }], this.onTouchMove(e));
    }
  }, {
    key: "onPointerUp",
    value: function onPointerUp(e) {
      e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
        clientX: e.clientX,
        clientY: e.clientY
      }], this.onTouchEnd(e));
    }
  }]);
}();
var q = "focus",
  O$1 = "blur";
var W$1 = /*#__PURE__*/function () {
  function W(e) {
    _classCallCheck(this, W);
    this.Reveal = e, this.onRevealPointerDown = this.onRevealPointerDown.bind(this), this.onDocumentPointerDown = this.onDocumentPointerDown.bind(this);
  }
  return _createClass(W, [{
    key: "configure",
    value: function configure(e, t) {
      e.embedded ? this.blur() : (this.focus(), this.unbind());
    }
  }, {
    key: "bind",
    value: function bind() {
      this.Reveal.getConfig().embedded && this.Reveal.getRevealElement().addEventListener("pointerdown", this.onRevealPointerDown, !1);
    }
  }, {
    key: "unbind",
    value: function unbind() {
      this.Reveal.getRevealElement().removeEventListener("pointerdown", this.onRevealPointerDown, !1), document.removeEventListener("pointerdown", this.onDocumentPointerDown, !1);
    }
  }, {
    key: "focus",
    value: function focus() {
      this.state !== q && (this.Reveal.getRevealElement().classList.add("focused"), document.addEventListener("pointerdown", this.onDocumentPointerDown, !1)), this.state = q;
    }
  }, {
    key: "blur",
    value: function blur() {
      this.state !== O$1 && (this.Reveal.getRevealElement().classList.remove("focused"), document.removeEventListener("pointerdown", this.onDocumentPointerDown, !1)), this.state = O$1;
    }
  }, {
    key: "isFocused",
    value: function isFocused() {
      return this.state === q;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.Reveal.getRevealElement().classList.remove("focused");
    }
  }, {
    key: "onRevealPointerDown",
    value: function onRevealPointerDown(e) {
      this.focus();
    }
  }, {
    key: "onDocumentPointerDown",
    value: function onDocumentPointerDown(e) {
      var t = r(e.target, ".reveal");
      t && t === this.Reveal.getRevealElement() || this.blur();
    }
  }]);
}();
var U$1 = /*#__PURE__*/function () {
  function U(e) {
    _classCallCheck(this, U);
    this.Reveal = e;
  }
  return _createClass(U, [{
    key: "render",
    value: function render() {
      this.element = document.createElement("div"), this.element.className = "speaker-notes", this.element.setAttribute("data-prevent-swipe", ""), this.element.setAttribute("tabindex", "0"), this.Reveal.getRevealElement().appendChild(this.element);
    }
  }, {
    key: "configure",
    value: function configure(e, t) {
      e.showNotes && this.element.setAttribute("data-layout", "string" == typeof e.showNotes ? e.showNotes : "inline");
    }
  }, {
    key: "update",
    value: function update() {
      this.Reveal.getConfig().showNotes && this.element && this.Reveal.getCurrentSlide() && !this.Reveal.isScrollView() && !this.Reveal.isPrintView() && (this.element.innerHTML = this.getSlideNotes() || '<span class="notes-placeholder">No notes on this slide.</span>');
    }
  }, {
    key: "updateVisibility",
    value: function updateVisibility() {
      this.Reveal.getConfig().showNotes && this.hasNotes() && !this.Reveal.isScrollView() && !this.Reveal.isPrintView() ? this.Reveal.getRevealElement().classList.add("show-notes") : this.Reveal.getRevealElement().classList.remove("show-notes");
    }
  }, {
    key: "hasNotes",
    value: function hasNotes() {
      return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length > 0;
    }
  }, {
    key: "isSpeakerNotesWindow",
    value: function isSpeakerNotesWindow() {
      return !!window.location.search.match(/receiver/gi);
    }
  }, {
    key: "getSlideNotes",
    value: function getSlideNotes() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.Reveal.getCurrentSlide();
      if (e.hasAttribute("data-notes")) return e.getAttribute("data-notes");
      var t = e.querySelectorAll("aside.notes");
      return t ? Array.from(t).map(function (e) {
        return e.innerHTML;
      }).join("\n") : null;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.element.remove();
    }
  }]);
}();
var V = /*#__PURE__*/function () {
  function V(e, t) {
    _classCallCheck(this, V);
    this.diameter = 100, this.diameter2 = this.diameter / 2, this.thickness = 6, this.playing = !1, this.progress = 0, this.progressOffset = 1, this.container = e, this.progressCheck = t, this.canvas = document.createElement("canvas"), this.canvas.className = "playback", this.canvas.width = this.diameter, this.canvas.height = this.diameter, this.canvas.style.width = this.diameter2 + "px", this.canvas.style.height = this.diameter2 + "px", this.context = this.canvas.getContext("2d"), this.container.appendChild(this.canvas), this.render();
  }
  return _createClass(V, [{
    key: "setPlaying",
    value: function setPlaying(e) {
      var t = this.playing;
      this.playing = e, !t && this.playing ? this.animate() : this.render();
    }
  }, {
    key: "animate",
    value: function animate() {
      var e = this.progress;
      this.progress = this.progressCheck(), e > .8 && this.progress < .2 && (this.progressOffset = this.progress), this.render(), this.playing && requestAnimationFrame(this.animate.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      var e = this.playing ? this.progress : 0,
        t = this.diameter2 - this.thickness,
        i = this.diameter2,
        s = this.diameter2,
        a = 28;
      this.progressOffset += .1 * (1 - this.progressOffset);
      var n = -Math.PI / 2 + e * (2 * Math.PI),
        r = -Math.PI / 2 + this.progressOffset * (2 * Math.PI);
      this.context.save(), this.context.clearRect(0, 0, this.diameter, this.diameter), this.context.beginPath(), this.context.arc(i, s, t + 4, 0, 2 * Math.PI, !1), this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )", this.context.fill(), this.context.beginPath(), this.context.arc(i, s, t, 0, 2 * Math.PI, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "rgba( 255, 255, 255, 0.2 )", this.context.stroke(), this.playing && (this.context.beginPath(), this.context.arc(i, s, t, r, n, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#fff", this.context.stroke()), this.context.translate(i - 14, s - 14), this.playing ? (this.context.fillStyle = "#fff", this.context.fillRect(0, 0, 10, a), this.context.fillRect(18, 0, 10, a)) : (this.context.beginPath(), this.context.translate(4, 0), this.context.moveTo(0, 0), this.context.lineTo(24, 14), this.context.lineTo(0, a), this.context.fillStyle = "#fff", this.context.fill()), this.context.restore();
    }
  }, {
    key: "on",
    value: function on(e, t) {
      this.canvas.addEventListener(e, t, !1);
    }
  }, {
    key: "off",
    value: function off(e, t) {
      this.canvas.removeEventListener(e, t, !1);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.playing = !1, this.canvas.parentNode && this.container.removeChild(this.canvas);
    }
  }]);
}();
var j$1 = {
  width: 960,
  height: 700,
  margin: .04,
  minScale: .2,
  maxScale: 2,
  controls: !0,
  controlsTutorial: !0,
  controlsLayout: "bottom-right",
  controlsBackArrows: "faded",
  progress: !0,
  slideNumber: !1,
  showSlideNumber: "all",
  hashOneBasedIndex: !1,
  hash: !1,
  respondToHashChanges: !0,
  jumpToSlide: !0,
  history: !1,
  keyboard: !0,
  keyboardCondition: null,
  disableLayout: !1,
  overview: !0,
  center: !0,
  touch: !0,
  loop: !1,
  rtl: !1,
  navigationMode: "default",
  shuffle: !1,
  fragments: !0,
  fragmentInURL: !0,
  embedded: !1,
  help: !0,
  pause: !0,
  showNotes: !1,
  showHiddenSlides: !1,
  autoPlayMedia: null,
  preloadIframes: null,
  autoAnimate: !0,
  autoAnimateMatcher: null,
  autoAnimateEasing: "ease",
  autoAnimateDuration: 1,
  autoAnimateUnmatched: !0,
  autoAnimateStyles: ["opacity", "color", "background-color", "padding", "font-size", "line-height", "letter-spacing", "border-width", "border-color", "border-radius", "outline", "outline-offset"],
  autoSlide: 0,
  autoSlideStoppable: !0,
  autoSlideMethod: null,
  defaultTiming: null,
  mouseWheel: !1,
  previewLinks: !1,
  postMessage: !0,
  postMessageEvents: !1,
  focusBodyOnPageVisibilityChange: !0,
  transition: "slide",
  transitionSpeed: "default",
  backgroundTransition: "fade",
  parallaxBackgroundImage: "",
  parallaxBackgroundSize: "",
  parallaxBackgroundRepeat: "",
  parallaxBackgroundPosition: "",
  parallaxBackgroundHorizontal: null,
  parallaxBackgroundVertical: null,
  view: null,
  scrollLayout: "full",
  scrollSnap: "mandatory",
  scrollProgress: "auto",
  scrollActivationWidth: 435,
  pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
  pdfSeparateFragments: !0,
  pdfPageHeightOffset: -1,
  viewDistance: 3,
  mobileViewDistance: 2,
  display: "block",
  hideInactiveCursor: !0,
  hideCursorTime: 5e3,
  sortFragmentsOnSync: !0,
  dependencies: [],
  plugins: []
};
var K = "5.1.0";
function $$1(n, o) {
  arguments.length < 2 && (o = arguments[0], n = document.querySelector(".reveal"));
  var l = {};
  var c,
    h,
    g,
    p,
    w,
    A = {},
    k = !1,
    D = !1,
    q = {
      hasNavigatedHorizontally: !1,
      hasNavigatedVertically: !1
    },
    O = [],
    $ = 1,
    X = {
      layout: "",
      overview: ""
    },
    Y = {},
    _ = "idle",
    J = 0,
    G = 0,
    Q = -1,
    Z = !1,
    ee = new v$1(l),
    te = new E$1(l),
    ie = new S$1(l),
    se = new L$1(l),
    ae = new R$1(l),
    ne = new C$1(l),
    re = new x$1(l),
    oe = new P(l),
    le = new T$1(l),
    de = new N$1(l),
    ce = new M(l),
    he = new I$1(l),
    ue = new B$1(l),
    ge = new H(l),
    pe = new F$1(l),
    ve = new W$1(l),
    me = new z$1(l),
    fe = new U$1(l);
  function ye() {
    D = !0, A.showHiddenSlides || t(Y.wrapper, 'section[data-visibility="hidden"]').forEach(function (e) {
      var t = e.parentNode;
      1 === t.childElementCount && /section/i.test(t.nodeName) ? t.remove() : e.remove();
    }), function () {
      Y.slides.classList.add("no-transition"), u ? Y.wrapper.classList.add("no-hover") : Y.wrapper.classList.remove("no-hover");
      ae.render(), te.render(), ie.render(), he.render(), ue.render(), fe.render(), Y.pauseOverlay = function (e, t, i) {
        var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
        var a = e.querySelectorAll("." + i);
        for (var _t28 = 0; _t28 < a.length; _t28++) {
          var _i23 = a[_t28];
          if (_i23.parentNode === e) return _i23;
        }
        var n = document.createElement(t);
        return n.className = i, n.innerHTML = s, e.appendChild(n), n;
      }(Y.wrapper, "div", "pause-overlay", A.controls ? '<button class="resume-button">Resume presentation</button>' : null), Y.statusElement = function () {
        var e = Y.wrapper.querySelector(".aria-status");
        e || (e = document.createElement("div"), e.style.position = "absolute", e.style.height = "1px", e.style.width = "1px", e.style.overflow = "hidden", e.style.clip = "rect( 1px, 1px, 1px, 1px )", e.classList.add("aria-status"), e.setAttribute("aria-live", "polite"), e.setAttribute("aria-atomic", "true"), Y.wrapper.appendChild(e));
        return e;
      }(), Y.wrapper.setAttribute("role", "application");
    }(), A.postMessage && window.addEventListener("message", At, !1), setInterval(function () {
      (!ne.isActive() && 0 !== Y.wrapper.scrollTop || 0 !== Y.wrapper.scrollLeft) && (Y.wrapper.scrollTop = 0, Y.wrapper.scrollLeft = 0);
    }, 1e3), document.addEventListener("fullscreenchange", xt), document.addEventListener("webkitfullscreenchange", xt), rt().forEach(function (e) {
      t(e, "section").forEach(function (e, t) {
        t > 0 && (e.classList.remove("present"), e.classList.remove("past"), e.classList.add("future"), e.setAttribute("aria-hidden", "true"));
      });
    }), Ee(), ae.update(!0), function () {
      var e = "print" === A.view,
        t = "scroll" === A.view || "reader" === A.view;
      (e || t) && (e ? Ae() : me.unbind(), Y.viewport.classList.add("loading-scroll-mode"), e ? "complete" === document.readyState ? re.activate() : window.addEventListener("load", function () {
        return re.activate();
      }) : ne.activate());
    }(), ce.readURL(), setTimeout(function () {
      Y.slides.classList.remove("no-transition"), Y.wrapper.classList.add("ready"), Ce({
        type: "ready",
        data: {
          indexh: c,
          indexv: h,
          currentSlide: p
        }
      });
    }, 1);
  }
  function be(e) {
    Y.statusElement.textContent = e;
  }
  function we(e) {
    var t = "";
    if (3 === e.nodeType) t += e.textContent;else if (1 === e.nodeType) {
      var _i24 = e.getAttribute("aria-hidden"),
        _s11 = "none" === window.getComputedStyle(e).display;
      "true" === _i24 || _s11 || Array.from(e.childNodes).forEach(function (e) {
        t += we(e);
      });
    }
    return t = t.trim(), "" === t ? "" : t + " ";
  }
  function Ee(t) {
    var s = _objectSpread$2({}, A);
    if ("object" == _typeof$1(t) && e(A, t), !1 === l.isReady()) return;
    var a = Y.wrapper.querySelectorAll(m$1).length;
    Y.wrapper.classList.remove(s.transition), Y.wrapper.classList.add(A.transition), Y.wrapper.setAttribute("data-transition-speed", A.transitionSpeed), Y.wrapper.setAttribute("data-background-transition", A.backgroundTransition), Y.viewport.style.setProperty("--slide-width", "string" == typeof A.width ? A.width : A.width + "px"), Y.viewport.style.setProperty("--slide-height", "string" == typeof A.height ? A.height : A.height + "px"), A.shuffle && Ge(), i(Y.wrapper, "embedded", A.embedded), i(Y.wrapper, "rtl", A.rtl), i(Y.wrapper, "center", A.center), !1 === A.pause && Ke(), A.previewLinks ? (Te(), Ne("[data-preview-link=false]")) : (Ne(), Te("[data-preview-link]:not([data-preview-link=false])")), se.reset(), w && (w.destroy(), w = null), a > 1 && A.autoSlide && A.autoSlideStoppable && (w = new V(Y.wrapper, function () {
      return Math.min(Math.max((Date.now() - Q) / J, 0), 1);
    }), w.on("click", Tt), Z = !1), "default" !== A.navigationMode ? Y.wrapper.setAttribute("data-navigation-mode", A.navigationMode) : Y.wrapper.removeAttribute("data-navigation-mode"), fe.configure(A, s), ve.configure(A, s), ge.configure(A, s), he.configure(A, s), ue.configure(A, s), de.configure(A, s), oe.configure(A, s), te.configure(A, s), Je();
  }
  function Se() {
    window.addEventListener("resize", Lt, !1), A.touch && me.bind(), A.keyboard && de.bind(), A.progress && ue.bind(), A.respondToHashChanges && ce.bind(), he.bind(), ve.bind(), Y.slides.addEventListener("click", kt, !1), Y.slides.addEventListener("transitionend", Rt, !1), Y.pauseOverlay.addEventListener("click", Ke, !1), A.focusBodyOnPageVisibilityChange && document.addEventListener("visibilitychange", Ct, !1);
  }
  function Ae() {
    me.unbind(), ve.unbind(), de.unbind(), he.unbind(), ue.unbind(), ce.unbind(), window.removeEventListener("resize", Lt, !1), Y.slides.removeEventListener("click", kt, !1), Y.slides.removeEventListener("transitionend", Rt, !1), Y.pauseOverlay.removeEventListener("click", Ke, !1);
  }
  function Re(e, t, i) {
    n.addEventListener(e, t, i);
  }
  function ke(e, t, i) {
    n.removeEventListener(e, t, i);
  }
  function Le(e) {
    "string" == typeof e.layout && (X.layout = e.layout), "string" == typeof e.overview && (X.overview = e.overview), X.layout ? a(Y.slides, X.layout + " " + X.overview) : a(Y.slides, X.overview);
  }
  function Ce(_ref) {
    var _ref$target = _ref.target,
      t = _ref$target === void 0 ? Y.wrapper : _ref$target,
      i = _ref.type,
      s = _ref.data,
      _ref$bubbles = _ref.bubbles,
      a = _ref$bubbles === void 0 ? !0 : _ref$bubbles;
    var n = document.createEvent("HTMLEvents", 1, 2);
    return n.initEvent(i, a, !0), e(n, s), t.dispatchEvent(n), t === Y.wrapper && Pe(i), n;
  }
  function xe(e) {
    Ce({
      type: "slidechanged",
      data: {
        indexh: c,
        indexv: h,
        previousSlide: g,
        currentSlide: p,
        origin: e
      }
    });
  }
  function Pe(t, i) {
    if (A.postMessageEvents && window.parent !== window.self) {
      var _s12 = {
        namespace: "reveal",
        eventName: t,
        state: ut()
      };
      e(_s12, i), window.parent.postMessage(JSON.stringify(_s12), "*");
    }
  }
  function Te() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "a";
    Array.from(Y.wrapper.querySelectorAll(e)).forEach(function (e) {
      /^(http|www)/gi.test(e.getAttribute("href")) && e.addEventListener("click", Pt, !1);
    });
  }
  function Ne() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "a";
    Array.from(Y.wrapper.querySelectorAll(e)).forEach(function (e) {
      /^(http|www)/gi.test(e.getAttribute("href")) && e.removeEventListener("click", Pt, !1);
    });
  }
  function Me(e) {
    Be(), Y.overlay = document.createElement("div"), Y.overlay.classList.add("overlay"), Y.overlay.classList.add("overlay-preview"), Y.wrapper.appendChild(Y.overlay), Y.overlay.innerHTML = "<header>\n\t\t\t\t<a class=\"close\" href=\"#\"><span class=\"icon\"></span></a>\n\t\t\t\t<a class=\"external\" href=\"".concat(e, "\" target=\"_blank\"><span class=\"icon\"></span></a>\n\t\t\t</header>\n\t\t\t<div class=\"spinner\"></div>\n\t\t\t<div class=\"viewport\">\n\t\t\t\t<iframe src=\"").concat(e, "\"></iframe>\n\t\t\t\t<small class=\"viewport-inner\">\n\t\t\t\t\t<span class=\"x-frame-error\">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>\n\t\t\t\t</small>\n\t\t\t</div>"), Y.overlay.querySelector("iframe").addEventListener("load", function (e) {
      Y.overlay.classList.add("loaded");
    }, !1), Y.overlay.querySelector(".close").addEventListener("click", function (e) {
      Be(), e.preventDefault();
    }, !1), Y.overlay.querySelector(".external").addEventListener("click", function (e) {
      Be();
    }, !1);
  }
  function Ie() {
    if (A.help) {
      Be(), Y.overlay = document.createElement("div"), Y.overlay.classList.add("overlay"), Y.overlay.classList.add("overlay-help"), Y.wrapper.appendChild(Y.overlay);
      var _e36 = '<p class="title">Keyboard Shortcuts</p><br/>',
        _t29 = de.getShortcuts(),
        _i25 = de.getBindings();
      _e36 += "<table><th>KEY</th><th>ACTION</th>";
      for (var _i26 in _t29) _e36 += "<tr><td>".concat(_i26, "</td><td>").concat(_t29[_i26], "</td></tr>");
      for (var _t30 in _i25) _i25[_t30].key && _i25[_t30].description && (_e36 += "<tr><td>".concat(_i25[_t30].key, "</td><td>").concat(_i25[_t30].description, "</td></tr>"));
      _e36 += "</table>", Y.overlay.innerHTML = "\n\t\t\t\t<header>\n\t\t\t\t\t<a class=\"close\" href=\"#\"><span class=\"icon\"></span></a>\n\t\t\t\t</header>\n\t\t\t\t<div class=\"viewport\">\n\t\t\t\t\t<div class=\"viewport-inner\">".concat(_e36, "</div>\n\t\t\t\t</div>\n\t\t\t"), Y.overlay.querySelector(".close").addEventListener("click", function (e) {
        Be(), e.preventDefault();
      }, !1);
    }
  }
  function Be() {
    return !!Y.overlay && (Y.overlay.parentNode.removeChild(Y.overlay), Y.overlay = null, !0);
  }
  function He() {
    if (Y.wrapper && !re.isActive()) {
      var _e37 = Y.viewport.offsetWidth,
        _t31 = Y.viewport.offsetHeight;
      if (!A.disableLayout) {
        u && !A.embedded && document.documentElement.style.setProperty("--vh", .01 * window.innerHeight + "px");
        var _i27 = ne.isActive() ? Fe(_e37, _t31) : Fe(),
          _s13 = $;
        De(A.width, A.height), Y.slides.style.width = _i27.width + "px", Y.slides.style.height = _i27.height + "px", $ = Math.min(_i27.presentationWidth / _i27.width, _i27.presentationHeight / _i27.height), $ = Math.max($, A.minScale), $ = Math.min($, A.maxScale), 1 === $ || ne.isActive() ? (Y.slides.style.zoom = "", Y.slides.style.left = "", Y.slides.style.top = "", Y.slides.style.bottom = "", Y.slides.style.right = "", Le({
          layout: ""
        })) : (Y.slides.style.zoom = "", Y.slides.style.left = "50%", Y.slides.style.top = "50%", Y.slides.style.bottom = "auto", Y.slides.style.right = "auto", Le({
          layout: "translate(-50%, -50%) scale(" + $ + ")"
        }));
        var _a13 = Array.from(Y.wrapper.querySelectorAll(m$1));
        for (var _e38 = 0, _t32 = _a13.length; _e38 < _t32; _e38++) {
          var _t33 = _a13[_e38];
          "none" !== _t33.style.display && (A.center || _t33.classList.contains("center") ? _t33.classList.contains("stack") ? _t33.style.top = 0 : _t33.style.top = Math.max((_i27.height - _t33.scrollHeight) / 2, 0) + "px" : _t33.style.top = "");
        }
        _s13 !== $ && Ce({
          type: "resize",
          data: {
            oldScale: _s13,
            scale: $,
            size: _i27
          }
        });
      }
      !function () {
        if (Y.wrapper && !A.disableLayout && !re.isActive() && "number" == typeof A.scrollActivationWidth && "scroll" !== A.view) {
          var _e39 = Fe();
          _e39.presentationWidth > 0 && _e39.presentationWidth <= A.scrollActivationWidth ? ne.isActive() || (ae.create(), ne.activate()) : ne.isActive() && ne.deactivate();
        }
      }(), Y.viewport.style.setProperty("--slide-scale", $), Y.viewport.style.setProperty("--viewport-width", _e37 + "px"), Y.viewport.style.setProperty("--viewport-height", _t31 + "px"), ne.layout(), ue.update(), ae.updateParallax(), le.isActive() && le.update();
    }
  }
  function De(e, i) {
    t(Y.slides, "section > .stretch, section > .r-stretch").forEach(function (t) {
      var s = function (e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        if (e) {
          var _i28,
            _s14 = e.style.height;
          return e.style.height = "0px", e.parentNode.style.height = "auto", _i28 = t - e.parentNode.offsetHeight, e.style.height = _s14 + "px", e.parentNode.style.removeProperty("height"), _i28;
        }
        return t;
      }(t, i);
      if (/(img|video)/gi.test(t.nodeName)) {
        var _i29 = t.naturalWidth || t.videoWidth,
          _a14 = t.naturalHeight || t.videoHeight,
          _n11 = Math.min(e / _i29, s / _a14);
        t.style.width = _i29 * _n11 + "px", t.style.height = _a14 * _n11 + "px";
      } else t.style.width = e + "px", t.style.height = s + "px";
    });
  }
  function Fe(e, t) {
    var i = A.width,
      s = A.height;
    A.disableLayout && (i = Y.slides.offsetWidth, s = Y.slides.offsetHeight);
    var a = {
      width: i,
      height: s,
      presentationWidth: e || Y.wrapper.offsetWidth,
      presentationHeight: t || Y.wrapper.offsetHeight
    };
    return a.presentationWidth -= a.presentationWidth * A.margin, a.presentationHeight -= a.presentationHeight * A.margin, "string" == typeof a.width && /%$/.test(a.width) && (a.width = parseInt(a.width, 10) / 100 * a.presentationWidth), "string" == typeof a.height && /%$/.test(a.height) && (a.height = parseInt(a.height, 10) / 100 * a.presentationHeight), a;
  }
  function ze(e, t) {
    "object" == _typeof$1(e) && "function" == typeof e.setAttribute && e.setAttribute("data-previous-indexv", t || 0);
  }
  function qe(e) {
    if ("object" == _typeof$1(e) && "function" == typeof e.setAttribute && e.classList.contains("stack")) {
      var _t34 = e.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv";
      return parseInt(e.getAttribute(_t34) || 0, 10);
    }
    return 0;
  }
  function Oe() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : p;
    return e && e.parentNode && !!e.parentNode.nodeName.match(/section/i);
  }
  function We() {
    return !(!p || !Oe(p)) && !p.nextElementSibling;
  }
  function Ue() {
    return 0 === c && 0 === h;
  }
  function Ve() {
    return !!p && !p.nextElementSibling && (!Oe(p) || !p.parentNode.nextElementSibling);
  }
  function je() {
    if (A.pause) {
      var _e40 = Y.wrapper.classList.contains("paused");
      pt(), Y.wrapper.classList.add("paused"), !1 === _e40 && Ce({
        type: "paused"
      });
    }
  }
  function Ke() {
    var e = Y.wrapper.classList.contains("paused");
    Y.wrapper.classList.remove("paused"), gt(), e && Ce({
      type: "resumed"
    });
  }
  function $e(e) {
    "boolean" == typeof e ? e ? je() : Ke() : Xe() ? Ke() : je();
  }
  function Xe() {
    return Y.wrapper.classList.contains("paused");
  }
  function Ye(e, i, s, a) {
    if (Ce({
      type: "beforeslidechange",
      data: {
        indexh: void 0 === e ? c : e,
        indexv: void 0 === i ? h : i,
        origin: a
      }
    }).defaultPrevented) return;
    g = p;
    var r = Y.wrapper.querySelectorAll(f);
    if (ne.isActive()) {
      var _t35 = ne.getSlideByIndices(e, i);
      return void (_t35 && ne.scrollToSlide(_t35));
    }
    if (0 === r.length) return;
    void 0 !== i || le.isActive() || (i = qe(r[e])), g && g.parentNode && g.parentNode.classList.contains("stack") && ze(g.parentNode, h);
    var o = O.concat();
    O.length = 0;
    var l = c || 0,
      d = h || 0;
    c = Qe(f, void 0 === e ? c : e), h = Qe(y$1, void 0 === i ? h : i);
    var u = c !== l || h !== d;
    u || (g = null);
    var v = r[c],
      m = v.querySelectorAll("section");
    n.classList.toggle("is-vertical-slide", m.length > 1), p = m[h] || v;
    var b = !1;
    u && g && p && !le.isActive() && (_ = "running", b = _e(g, p, l, d), b && Y.slides.classList.add("disable-slide-transitions")), tt(), He(), le.isActive() && le.update(), void 0 !== s && oe["goto"](s), g && g !== p && (g.classList.remove("present"), g.setAttribute("aria-hidden", "true"), Ue() && setTimeout(function () {
      t(Y.wrapper, f + ".stack").forEach(function (e) {
        ze(e, 0);
      });
    }, 0));
    e: for (var _e41 = 0, _t36 = O.length; _e41 < _t36; _e41++) {
      for (var _t37 = 0; _t37 < o.length; _t37++) if (o[_t37] === O[_e41]) {
        o.splice(_t37, 1);
        continue e;
      }
      Y.viewport.classList.add(O[_e41]), Ce({
        type: O[_e41]
      });
    }
    for (; o.length;) Y.viewport.classList.remove(o.pop());
    u && xe(a), !u && g || (ee.stopEmbeddedContent(g), ee.startEmbeddedContent(p)), requestAnimationFrame(function () {
      be(we(p));
    }), ue.update(), he.update(), fe.update(), ae.update(), ae.updateParallax(), te.update(), oe.update(), ce.writeURL(), gt(), b && (setTimeout(function () {
      Y.slides.classList.remove("disable-slide-transitions");
    }, 0), A.autoAnimate && se.run(g, p));
  }
  function _e(e, t, i, s) {
    return e.hasAttribute("data-auto-animate") && t.hasAttribute("data-auto-animate") && e.getAttribute("data-auto-animate-id") === t.getAttribute("data-auto-animate-id") && !(c > i || h > s ? t : e).hasAttribute("data-auto-animate-restart");
  }
  function Je() {
    Ae(), Se(), He(), J = A.autoSlide, gt(), ae.create(), ce.writeURL(), !0 === A.sortFragmentsOnSync && oe.sortAll(), he.update(), ue.update(), tt(), fe.update(), fe.updateVisibility(), ae.update(!0), te.update(), ee.formatEmbeddedContent(), !1 === A.autoPlayMedia ? ee.stopEmbeddedContent(p, {
      unloadIframes: !1
    }) : ee.startEmbeddedContent(p), le.isActive() && le.layout();
  }
  function Ge() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : rt();
    e.forEach(function (t, i) {
      var s = e[Math.floor(Math.random() * e.length)];
      s.parentNode === t.parentNode && t.parentNode.insertBefore(t, s);
      var a = t.querySelectorAll("section");
      a.length && Ge(a);
    });
  }
  function Qe(e, i) {
    var s = t(Y.wrapper, e),
      a = s.length,
      n = ne.isActive() || re.isActive(),
      r = !1,
      o = !1;
    if (a) {
      A.loop && (i >= a && (r = !0), (i %= a) < 0 && (i = a + i, o = !0)), i = Math.max(Math.min(i, a - 1), 0);
      for (var _e42 = 0; _e42 < a; _e42++) {
        var _t38 = s[_e42],
          _a15 = A.rtl && !Oe(_t38);
        _t38.classList.remove("past"), _t38.classList.remove("present"), _t38.classList.remove("future"), _t38.setAttribute("hidden", ""), _t38.setAttribute("aria-hidden", "true"), _t38.querySelector("section") && _t38.classList.add("stack"), n ? _t38.classList.add("present") : _e42 < i ? (_t38.classList.add(_a15 ? "future" : "past"), A.fragments && Ze(_t38)) : _e42 > i ? (_t38.classList.add(_a15 ? "past" : "future"), A.fragments && et(_t38)) : _e42 === i && A.fragments && (r ? et(_t38) : o && Ze(_t38));
      }
      var _e43 = s[i],
        _t39 = _e43.classList.contains("present");
      _e43.classList.add("present"), _e43.removeAttribute("hidden"), _e43.removeAttribute("aria-hidden"), _t39 || Ce({
        target: _e43,
        type: "visible",
        bubbles: !1
      });
      var _l4 = _e43.getAttribute("data-state");
      _l4 && (O = O.concat(_l4.split(" ")));
    } else i = 0;
    return i;
  }
  function Ze(e) {
    t(e, ".fragment").forEach(function (e) {
      e.classList.add("visible"), e.classList.remove("current-fragment");
    });
  }
  function et(e) {
    t(e, ".fragment.visible").forEach(function (e) {
      e.classList.remove("visible", "current-fragment");
    });
  }
  function tt() {
    var e,
      i,
      s = rt(),
      a = s.length;
    if (a && void 0 !== c) {
      var _n12 = le.isActive() ? 10 : A.viewDistance;
      u && (_n12 = le.isActive() ? 6 : A.mobileViewDistance), re.isActive() && (_n12 = Number.MAX_VALUE);
      for (var _r6 = 0; _r6 < a; _r6++) {
        var _o3 = s[_r6],
          _l5 = t(_o3, "section"),
          _d2 = _l5.length;
        if (e = Math.abs((c || 0) - _r6) || 0, A.loop && (e = Math.abs(((c || 0) - _r6) % (a - _n12)) || 0), e < _n12 ? ee.load(_o3) : ee.unload(_o3), _d2) {
          var _t40 = qe(_o3);
          for (var _s15 = 0; _s15 < _d2; _s15++) {
            var _a16 = _l5[_s15];
            i = _r6 === (c || 0) ? Math.abs((h || 0) - _s15) : Math.abs(_s15 - _t40), e + i < _n12 ? ee.load(_a16) : ee.unload(_a16);
          }
        }
      }
      dt() ? Y.wrapper.classList.add("has-vertical-slides") : Y.wrapper.classList.remove("has-vertical-slides"), lt() ? Y.wrapper.classList.add("has-horizontal-slides") : Y.wrapper.classList.remove("has-horizontal-slides");
    }
  }
  function it() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$includeFragment = _ref2.includeFragments,
      e = _ref2$includeFragment === void 0 ? !1 : _ref2$includeFragment;
    var t = Y.wrapper.querySelectorAll(f),
      i = Y.wrapper.querySelectorAll(y$1),
      s = {
        left: c > 0,
        right: c < t.length - 1,
        up: h > 0,
        down: h < i.length - 1
      };
    if (A.loop && (t.length > 1 && (s.left = !0, s.right = !0), i.length > 1 && (s.up = !0, s.down = !0)), t.length > 1 && "linear" === A.navigationMode && (s.right = s.right || s.down, s.left = s.left || s.up), !0 === e) {
      var _e44 = oe.availableRoutes();
      s.left = s.left || _e44.prev, s.up = s.up || _e44.prev, s.down = s.down || _e44.next, s.right = s.right || _e44.next;
    }
    if (A.rtl) {
      var _e45 = s.left;
      s.left = s.right, s.right = _e45;
    }
    return s;
  }
  function st() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : p;
    var t = rt(),
      i = 0;
    e: for (var _s16 = 0; _s16 < t.length; _s16++) {
      var _a17 = t[_s16],
        _n13 = _a17.querySelectorAll("section");
      for (var _t41 = 0; _t41 < _n13.length; _t41++) {
        if (_n13[_t41] === e) break e;
        "uncounted" !== _n13[_t41].dataset.visibility && i++;
      }
      if (_a17 === e) break;
      !1 === _a17.classList.contains("stack") && "uncounted" !== _a17.dataset.visibility && i++;
    }
    return i;
  }
  function at(e) {
    var i,
      s = c,
      a = h;
    if (e) if (ne.isActive()) s = parseInt(e.getAttribute("data-index-h"), 10), e.getAttribute("data-index-v") && (a = parseInt(e.getAttribute("data-index-v"), 10));else {
      var _i30 = Oe(e),
        _n14 = _i30 ? e.parentNode : e,
        _r7 = rt();
      s = Math.max(_r7.indexOf(_n14), 0), a = void 0, _i30 && (a = Math.max(t(e.parentNode, "section").indexOf(e), 0));
    }
    if (!e && p) {
      if (p.querySelectorAll(".fragment").length > 0) {
        var _e46 = p.querySelector(".current-fragment");
        i = _e46 && _e46.hasAttribute("data-fragment-index") ? parseInt(_e46.getAttribute("data-fragment-index"), 10) : p.querySelectorAll(".fragment.visible").length - 1;
      }
    }
    return {
      h: s,
      v: a,
      f: i
    };
  }
  function nt() {
    return t(Y.wrapper, m$1 + ':not(.stack):not([data-visibility="uncounted"])');
  }
  function rt() {
    return t(Y.wrapper, f);
  }
  function ot() {
    return t(Y.wrapper, ".slides>section>section");
  }
  function lt() {
    return rt().length > 1;
  }
  function dt() {
    return ot().length > 1;
  }
  function ct() {
    return nt().length;
  }
  function ht(e, t) {
    var i = rt()[e],
      s = i && i.querySelectorAll("section");
    return s && s.length && "number" == typeof t ? s ? s[t] : void 0 : i;
  }
  function ut() {
    var e = at();
    return {
      indexh: e.h,
      indexv: e.v,
      indexf: e.f,
      paused: Xe(),
      overview: le.isActive()
    };
  }
  function gt() {
    if (pt(), p && !1 !== A.autoSlide) {
      var _e47 = p.querySelector(".current-fragment[data-autoslide]"),
        _i31 = _e47 ? _e47.getAttribute("data-autoslide") : null,
        _s17 = p.parentNode ? p.parentNode.getAttribute("data-autoslide") : null,
        _a18 = p.getAttribute("data-autoslide");
      _i31 ? J = parseInt(_i31, 10) : _a18 ? J = parseInt(_a18, 10) : _s17 ? J = parseInt(_s17, 10) : (J = A.autoSlide, 0 === p.querySelectorAll(".fragment").length && t(p, "video, audio").forEach(function (e) {
        e.hasAttribute("data-autoplay") && J && 1e3 * e.duration / e.playbackRate > J && (J = 1e3 * e.duration / e.playbackRate + 1e3);
      })), !J || Z || Xe() || le.isActive() || Ve() && !oe.availableRoutes().next && !0 !== A.loop || (G = setTimeout(function () {
        "function" == typeof A.autoSlideMethod ? A.autoSlideMethod() : St(), gt();
      }, J), Q = Date.now()), w && w.setPlaying(-1 !== G);
    }
  }
  function pt() {
    clearTimeout(G), G = -1;
  }
  function vt() {
    J && !Z && (Z = !0, Ce({
      type: "autoslidepaused"
    }), clearTimeout(G), w && w.setPlaying(!1));
  }
  function mt() {
    J && Z && (Z = !1, Ce({
      type: "autoslideresumed"
    }), gt());
  }
  function ft() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref3$skipFragments = _ref3.skipFragments,
      e = _ref3$skipFragments === void 0 ? !1 : _ref3$skipFragments;
    if (q.hasNavigatedHorizontally = !0, ne.isActive()) return ne.prev();
    A.rtl ? (le.isActive() || e || !1 === oe.next()) && it().left && Ye(c + 1, "grid" === A.navigationMode ? h : void 0) : (le.isActive() || e || !1 === oe.prev()) && it().left && Ye(c - 1, "grid" === A.navigationMode ? h : void 0);
  }
  function yt() {
    var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref4$skipFragments = _ref4.skipFragments,
      e = _ref4$skipFragments === void 0 ? !1 : _ref4$skipFragments;
    if (q.hasNavigatedHorizontally = !0, ne.isActive()) return ne.next();
    A.rtl ? (le.isActive() || e || !1 === oe.prev()) && it().right && Ye(c - 1, "grid" === A.navigationMode ? h : void 0) : (le.isActive() || e || !1 === oe.next()) && it().right && Ye(c + 1, "grid" === A.navigationMode ? h : void 0);
  }
  function bt() {
    var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref5$skipFragments = _ref5.skipFragments,
      e = _ref5$skipFragments === void 0 ? !1 : _ref5$skipFragments;
    if (ne.isActive()) return ne.prev();
    (le.isActive() || e || !1 === oe.prev()) && it().up && Ye(c, h - 1);
  }
  function wt() {
    var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref6$skipFragments = _ref6.skipFragments,
      e = _ref6$skipFragments === void 0 ? !1 : _ref6$skipFragments;
    if (q.hasNavigatedVertically = !0, ne.isActive()) return ne.next();
    (le.isActive() || e || !1 === oe.next()) && it().down && Ye(c, h + 1);
  }
  function Et() {
    var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref7$skipFragments = _ref7.skipFragments,
      e = _ref7$skipFragments === void 0 ? !1 : _ref7$skipFragments;
    if (ne.isActive()) return ne.prev();
    if (e || !1 === oe.prev()) if (it().up) bt({
      skipFragments: e
    });else {
      var _i32;
      if (_i32 = A.rtl ? t(Y.wrapper, f + ".future").pop() : t(Y.wrapper, f + ".past").pop(), _i32 && _i32.classList.contains("stack")) {
        var _e48 = _i32.querySelectorAll("section").length - 1 || void 0;
        Ye(c - 1, _e48);
      } else A.rtl ? yt({
        skipFragments: e
      }) : ft({
        skipFragments: e
      });
    }
  }
  function St() {
    var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref8$skipFragments = _ref8.skipFragments,
      e = _ref8$skipFragments === void 0 ? !1 : _ref8$skipFragments;
    if (q.hasNavigatedHorizontally = !0, q.hasNavigatedVertically = !0, ne.isActive()) return ne.next();
    if (e || !1 === oe.next()) {
      var _t42 = it();
      _t42.down && _t42.right && A.loop && We() && (_t42.down = !1), _t42.down ? wt({
        skipFragments: e
      }) : A.rtl ? ft({
        skipFragments: e
      }) : yt({
        skipFragments: e
      });
    }
  }
  function At(e) {
    var t = e.data;
    if ("string" == typeof t && "{" === t.charAt(0) && "}" === t.charAt(t.length - 1) && (t = JSON.parse(t), t.method && "function" == typeof l[t.method])) if (!1 === b$1.test(t.method)) {
      var _e49 = l[t.method].apply(l, t.args);
      Pe("callback", {
        method: t.method,
        result: _e49
      });
    } else console.warn('reveal.js: "' + t.method + '" is is blacklisted from the postMessage API');
  }
  function Rt(e) {
    "running" === _ && /section/gi.test(e.target.nodeName) && (_ = "idle", Ce({
      type: "slidetransitionend",
      data: {
        indexh: c,
        indexv: h,
        previousSlide: g,
        currentSlide: p
      }
    }));
  }
  function kt(e) {
    var t = r(e.target, 'a[href^="#"]');
    if (t) {
      var _i33 = t.getAttribute("href"),
        _s18 = ce.getIndicesFromHash(_i33);
      _s18 && (l.slide(_s18.h, _s18.v, _s18.f), e.preventDefault());
    }
  }
  function Lt(e) {
    He();
  }
  function Ct(e) {
    !1 === document.hidden && document.activeElement !== document.body && ("function" == typeof document.activeElement.blur && document.activeElement.blur(), document.body.focus());
  }
  function xt(e) {
    (document.fullscreenElement || document.webkitFullscreenElement) === Y.wrapper && (e.stopImmediatePropagation(), setTimeout(function () {
      l.layout(), l.focus.focus();
    }, 1));
  }
  function Pt(e) {
    if (e.currentTarget && e.currentTarget.hasAttribute("href")) {
      var _t43 = e.currentTarget.getAttribute("href");
      _t43 && (Me(_t43), e.preventDefault());
    }
  }
  function Tt(e) {
    Ve() && !1 === A.loop ? (Ye(0, 0), mt()) : Z ? mt() : vt();
  }
  var Nt = {
    VERSION: K,
    initialize: function initialize(e) {
      if (!n) throw 'Unable to find presentation root (<div class="reveal">).';
      if (k = !0, Y.wrapper = n, Y.slides = n.querySelector(".slides"), !Y.slides) throw 'Unable to find slides container (<div class="slides">).';
      return A = _objectSpread$2(_objectSpread$2(_objectSpread$2(_objectSpread$2(_objectSpread$2({}, j$1), A), o), e), d()), /print-pdf/gi.test(window.location.search) && (A.view = "print"), function () {
        !0 === A.embedded ? Y.viewport = r(n, ".reveal-viewport") || n : (Y.viewport = document.body, document.documentElement.classList.add("reveal-full-page"));
        Y.viewport.classList.add("reveal-viewport");
      }(), window.addEventListener("load", He, !1), pe.load(A.plugins, A.dependencies).then(ye), new Promise(function (e) {
        return l.on("ready", e);
      });
    },
    configure: Ee,
    destroy: function destroy() {
      !1 !== k && (Ae(), pt(), Ne(), fe.destroy(), ve.destroy(), pe.destroy(), ge.destroy(), he.destroy(), ue.destroy(), ae.destroy(), te.destroy(), ie.destroy(), document.removeEventListener("fullscreenchange", xt), document.removeEventListener("webkitfullscreenchange", xt), document.removeEventListener("visibilitychange", Ct, !1), window.removeEventListener("message", At, !1), window.removeEventListener("load", He, !1), Y.pauseOverlay && Y.pauseOverlay.remove(), Y.statusElement && Y.statusElement.remove(), document.documentElement.classList.remove("reveal-full-page"), Y.wrapper.classList.remove("ready", "center", "has-horizontal-slides", "has-vertical-slides"), Y.wrapper.removeAttribute("data-transition-speed"), Y.wrapper.removeAttribute("data-background-transition"), Y.viewport.classList.remove("reveal-viewport"), Y.viewport.style.removeProperty("--slide-width"), Y.viewport.style.removeProperty("--slide-height"), Y.slides.style.removeProperty("width"), Y.slides.style.removeProperty("height"), Y.slides.style.removeProperty("zoom"), Y.slides.style.removeProperty("left"), Y.slides.style.removeProperty("top"), Y.slides.style.removeProperty("bottom"), Y.slides.style.removeProperty("right"), Y.slides.style.removeProperty("transform"), Array.from(Y.wrapper.querySelectorAll(m$1)).forEach(function (e) {
        e.style.removeProperty("display"), e.style.removeProperty("top"), e.removeAttribute("hidden"), e.removeAttribute("aria-hidden");
      }));
    },
    sync: Je,
    syncSlide: function syncSlide() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : p;
      ae.sync(e), oe.sync(e), ee.load(e), ae.update(), fe.update();
    },
    syncFragments: oe.sync.bind(oe),
    slide: Ye,
    left: ft,
    right: yt,
    up: bt,
    down: wt,
    prev: Et,
    next: St,
    navigateLeft: ft,
    navigateRight: yt,
    navigateUp: bt,
    navigateDown: wt,
    navigatePrev: Et,
    navigateNext: St,
    navigateFragment: oe["goto"].bind(oe),
    prevFragment: oe.prev.bind(oe),
    nextFragment: oe.next.bind(oe),
    on: Re,
    off: ke,
    addEventListener: Re,
    removeEventListener: ke,
    layout: He,
    shuffle: Ge,
    availableRoutes: it,
    availableFragments: oe.availableRoutes.bind(oe),
    toggleHelp: function toggleHelp(e) {
      "boolean" == typeof e ? e ? Ie() : Be() : Y.overlay ? Be() : Ie();
    },
    toggleOverview: le.toggle.bind(le),
    toggleScrollView: ne.toggle.bind(ne),
    togglePause: $e,
    toggleAutoSlide: function toggleAutoSlide(e) {
      "boolean" == typeof e ? e ? mt() : vt() : Z ? mt() : vt();
    },
    toggleJumpToSlide: function toggleJumpToSlide(e) {
      "boolean" == typeof e ? e ? ie.show() : ie.hide() : ie.isVisible() ? ie.hide() : ie.show();
    },
    isFirstSlide: Ue,
    isLastSlide: Ve,
    isLastVerticalSlide: We,
    isVerticalSlide: Oe,
    isVerticalStack: function isVerticalStack() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : p;
      return e.classList.contains(".stack") || null !== e.querySelector("section");
    },
    isPaused: Xe,
    isAutoSliding: function isAutoSliding() {
      return !(!J || Z);
    },
    isSpeakerNotes: fe.isSpeakerNotesWindow.bind(fe),
    isOverview: le.isActive.bind(le),
    isFocused: ve.isFocused.bind(ve),
    isScrollView: ne.isActive.bind(ne),
    isPrintView: re.isActive.bind(re),
    isReady: function isReady() {
      return D;
    },
    loadSlide: ee.load.bind(ee),
    unloadSlide: ee.unload.bind(ee),
    startEmbeddedContent: function startEmbeddedContent() {
      return ee.startEmbeddedContent(p);
    },
    stopEmbeddedContent: function stopEmbeddedContent() {
      return ee.stopEmbeddedContent(p, {
        unloadIframes: !1
      });
    },
    showPreview: Me,
    hidePreview: Be,
    addEventListeners: Se,
    removeEventListeners: Ae,
    dispatchEvent: Ce,
    getState: ut,
    setState: function setState(e) {
      if ("object" == _typeof$1(e)) {
        Ye(s(e.indexh), s(e.indexv), s(e.indexf));
        var _t44 = s(e.paused),
          _i34 = s(e.overview);
        "boolean" == typeof _t44 && _t44 !== Xe() && $e(_t44), "boolean" == typeof _i34 && _i34 !== le.isActive() && le.toggle(_i34);
      }
    },
    getProgress: function getProgress() {
      var e = ct(),
        t = st();
      if (p) {
        var _e50 = p.querySelectorAll(".fragment");
        if (_e50.length > 0) {
          var _i35 = .9;
          t += p.querySelectorAll(".fragment.visible").length / _e50.length * _i35;
        }
      }
      return Math.min(t / (e - 1), 1);
    },
    getIndices: at,
    getSlidesAttributes: function getSlidesAttributes() {
      return nt().map(function (e) {
        var t = {};
        for (var _i36 = 0; _i36 < e.attributes.length; _i36++) {
          var _s19 = e.attributes[_i36];
          t[_s19.name] = _s19.value;
        }
        return t;
      });
    },
    getSlidePastCount: st,
    getTotalSlides: ct,
    getSlide: ht,
    getPreviousSlide: function getPreviousSlide() {
      return g;
    },
    getCurrentSlide: function getCurrentSlide() {
      return p;
    },
    getSlideBackground: function getSlideBackground(e, t) {
      var i = "number" == typeof e ? ht(e, t) : e;
      if (i) return i.slideBackgroundElement;
    },
    getSlideNotes: fe.getSlideNotes.bind(fe),
    getSlides: nt,
    getHorizontalSlides: rt,
    getVerticalSlides: ot,
    hasHorizontalSlides: lt,
    hasVerticalSlides: dt,
    hasNavigatedHorizontally: function hasNavigatedHorizontally() {
      return q.hasNavigatedHorizontally;
    },
    hasNavigatedVertically: function hasNavigatedVertically() {
      return q.hasNavigatedVertically;
    },
    shouldAutoAnimateBetween: _e,
    addKeyBinding: de.addKeyBinding.bind(de),
    removeKeyBinding: de.removeKeyBinding.bind(de),
    triggerKey: de.triggerKey.bind(de),
    registerKeyboardShortcut: de.registerKeyboardShortcut.bind(de),
    getComputedSlideSize: Fe,
    setCurrentScrollPage: function setCurrentScrollPage(e, t, i) {
      var s = c || 0;
      c = t, h = i;
      var a = p !== e;
      g = p, p = e, p && g && A.autoAnimate && _e(g, p, s, h) && se.run(g, p), a && (g && (ee.stopEmbeddedContent(g), ee.stopEmbeddedContent(g.slideBackgroundElement)), ee.startEmbeddedContent(p), ee.startEmbeddedContent(p.slideBackgroundElement)), requestAnimationFrame(function () {
        be(we(p));
      }), xe();
    },
    getScale: function getScale() {
      return $;
    },
    getConfig: function getConfig() {
      return A;
    },
    getQueryHash: d,
    getSlidePath: ce.getHash.bind(ce),
    getRevealElement: function getRevealElement() {
      return n;
    },
    getSlidesElement: function getSlidesElement() {
      return Y.slides;
    },
    getViewportElement: function getViewportElement() {
      return Y.viewport;
    },
    getBackgroundsElement: function getBackgroundsElement() {
      return ae.element;
    },
    registerPlugin: pe.registerPlugin.bind(pe),
    hasPlugin: pe.hasPlugin.bind(pe),
    getPlugin: pe.getPlugin.bind(pe),
    getPlugins: pe.getRegisteredPlugins.bind(pe)
  };
  return e(l, _objectSpread$2(_objectSpread$2({}, Nt), {}, {
    announceStatus: be,
    getStatusText: we,
    focus: ve,
    scroll: ne,
    progress: ue,
    controls: he,
    location: ce,
    overview: le,
    fragments: oe,
    backgrounds: ae,
    slideContent: ee,
    slideNumber: te,
    onUserInput: function onUserInput(e) {
      A.autoSlideStoppable && vt();
    },
    closeOverlay: Be,
    updateSlidesVisibility: tt,
    layoutSlideContents: De,
    transformSlides: Le,
    cueAutoSlide: gt,
    cancelAutoSlide: pt
  })), Nt;
}
var X = $$1,
  Y = [];
X.initialize = function (e) {
  return Object.assign(X, new $$1(document.querySelector(".reveal"), e)), Y.map(function (e) {
    return e(X);
  }), X.initialize();
}, ["configure", "on", "off", "addEventListener", "removeEventListener", "registerPlugin"].forEach(function (e) {
  X[e] = function () {
    for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
      t[_key] = arguments[_key];
    }
    Y.push(function (i) {
      var _i$e;
      return (_i$e = i[e]).call.apply(_i$e, [null].concat(t));
    });
  };
}), X.isReady = function () {
  return !1;
}, X.VERSION = K;

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest();
}

var colors = [["rgb(0, 0, 0)", "rgb(255, 255, 0)"], ["rgb(0, 0, 0)", "rgb(153, 153, 153)"], ["rgb(0, 0, 0)", "rgb(170, 170, 170)"], ["rgb(0, 0, 0)", "rgb(204, 204, 204)"], ["rgb(0, 0, 0)", "rgb(238, 238, 238)"], ["rgb(0, 0, 0)", "rgb(244, 244, 244)"], ["rgb(0, 0, 0)", "rgb(255, 255, 255)"], ["rgb(0, 0, 0)", "rgb(255, 114, 92)"], ["rgb(0, 0, 0)", "rgb(255, 99, 0)"], ["rgb(0, 0, 0)", "rgb(255, 183, 0)"], ["rgb(0, 0, 0)", "rgb(255, 215, 0)"], ["rgb(0, 0, 0)", "rgb(251, 241, 169)"], ["rgb(0, 0, 0)", "rgb(255, 128, 204)"], ["rgb(0, 0, 0)", "rgb(255, 163, 215)"], ["rgb(0, 0, 0)", "rgb(158, 235, 207)"], ["rgb(0, 0, 0)", "rgb(150, 204, 255)"], ["rgb(0, 0, 0)", "rgb(205, 236, 255)"], ["rgb(0, 0, 0)", "rgb(246, 255, 254)"], ["rgb(0, 0, 0)", "rgb(232, 253, 245)"], ["rgb(0, 0, 0)", "rgb(255, 252, 235)"], ["rgb(0, 0, 0)", "rgb(255, 223, 223)"], ["rgb(255, 255, 0)", "rgb(0, 0, 0)"], ["rgb(255, 255, 0)", "rgb(17, 17, 17)"], ["rgb(255, 255, 0)", "rgb(51, 51, 51)"], ["rgb(255, 255, 0)", "rgb(94, 44, 165)"], ["rgb(255, 255, 0)", "rgb(0, 27, 68)"], ["rgb(255, 255, 0)", "rgb(0, 68, 158)"], ["rgb(17, 17, 17)", "rgb(255, 255, 0)"], ["rgb(17, 17, 17)", "rgb(170, 170, 170)"], ["rgb(17, 17, 17)", "rgb(204, 204, 204)"], ["rgb(17, 17, 17)", "rgb(238, 238, 238)"], ["rgb(17, 17, 17)", "rgb(244, 244, 244)"], ["rgb(17, 17, 17)", "rgb(255, 255, 255)"], ["rgb(17, 17, 17)", "rgb(255, 114, 92)"], ["rgb(17, 17, 17)", "rgb(255, 183, 0)"], ["rgb(17, 17, 17)", "rgb(255, 215, 0)"], ["rgb(17, 17, 17)", "rgb(251, 241, 169)"], ["rgb(17, 17, 17)", "rgb(255, 128, 204)"], ["rgb(17, 17, 17)", "rgb(255, 163, 215)"], ["rgb(17, 17, 17)", "rgb(158, 235, 207)"], ["rgb(17, 17, 17)", "rgb(150, 204, 255)"], ["rgb(17, 17, 17)", "rgb(205, 236, 255)"], ["rgb(17, 17, 17)", "rgb(246, 255, 254)"], ["rgb(17, 17, 17)", "rgb(232, 253, 245)"], ["rgb(17, 17, 17)", "rgb(255, 252, 235)"], ["rgb(17, 17, 17)", "rgb(255, 223, 223)"], ["rgb(51, 51, 51)", "rgb(255, 255, 0)"], ["rgb(51, 51, 51)", "rgb(204, 204, 204)"], ["rgb(51, 51, 51)", "rgb(238, 238, 238)"], ["rgb(51, 51, 51)", "rgb(244, 244, 244)"], ["rgb(51, 51, 51)", "rgb(255, 255, 255)"], ["rgb(51, 51, 51)", "rgb(255, 183, 0)"], ["rgb(51, 51, 51)", "rgb(255, 215, 0)"], ["rgb(51, 51, 51)", "rgb(251, 241, 169)"], ["rgb(51, 51, 51)", "rgb(158, 235, 207)"], ["rgb(51, 51, 51)", "rgb(150, 204, 255)"], ["rgb(51, 51, 51)", "rgb(205, 236, 255)"], ["rgb(51, 51, 51)", "rgb(246, 255, 254)"], ["rgb(51, 51, 51)", "rgb(232, 253, 245)"], ["rgb(51, 51, 51)", "rgb(255, 252, 235)"], ["rgb(51, 51, 51)", "rgb(255, 223, 223)"], ["rgb(85, 85, 85)", "rgb(255, 255, 255)"], ["rgb(85, 85, 85)", "rgb(246, 255, 254)"], ["rgb(85, 85, 85)", "rgb(232, 253, 245)"], ["rgb(85, 85, 85)", "rgb(255, 252, 235)"], ["rgb(153, 153, 153)", "rgb(0, 0, 0)"], ["rgb(170, 170, 170)", "rgb(0, 0, 0)"], ["rgb(170, 170, 170)", "rgb(17, 17, 17)"], ["rgb(170, 170, 170)", "rgb(0, 27, 68)"], ["rgb(204, 204, 204)", "rgb(0, 0, 0)"], ["rgb(204, 204, 204)", "rgb(17, 17, 17)"], ["rgb(204, 204, 204)", "rgb(51, 51, 51)"], ["rgb(204, 204, 204)", "rgb(0, 27, 68)"], ["rgb(238, 238, 238)", "rgb(0, 0, 0)"], ["rgb(238, 238, 238)", "rgb(17, 17, 17)"], ["rgb(238, 238, 238)", "rgb(51, 51, 51)"], ["rgb(238, 238, 238)", "rgb(94, 44, 165)"], ["rgb(238, 238, 238)", "rgb(0, 27, 68)"], ["rgb(238, 238, 238)", "rgb(0, 68, 158)"], ["rgb(244, 244, 244)", "rgb(0, 0, 0)"], ["rgb(244, 244, 244)", "rgb(17, 17, 17)"], ["rgb(244, 244, 244)", "rgb(51, 51, 51)"], ["rgb(244, 244, 244)", "rgb(94, 44, 165)"], ["rgb(244, 244, 244)", "rgb(0, 27, 68)"], ["rgb(244, 244, 244)", "rgb(0, 68, 158)"], ["rgb(255, 255, 255)", "rgb(0, 0, 0)"], ["rgb(255, 255, 255)", "rgb(17, 17, 17)"], ["rgb(255, 255, 255)", "rgb(51, 51, 51)"], ["rgb(255, 255, 255)", "rgb(85, 85, 85)"], ["rgb(255, 255, 255)", "rgb(94, 44, 165)"], ["rgb(255, 255, 255)", "rgb(0, 27, 68)"], ["rgb(255, 255, 255)", "rgb(0, 68, 158)"], ["rgb(255, 114, 92)", "rgb(0, 0, 0)"], ["rgb(255, 114, 92)", "rgb(17, 17, 17)"], ["rgb(255, 99, 0)", "rgb(0, 0, 0)"], ["rgb(255, 183, 0)", "rgb(0, 0, 0)"], ["rgb(255, 183, 0)", "rgb(17, 17, 17)"], ["rgb(255, 183, 0)", "rgb(51, 51, 51)"], ["rgb(255, 183, 0)", "rgb(0, 27, 68)"], ["rgb(255, 215, 0)", "rgb(0, 0, 0)"], ["rgb(255, 215, 0)", "rgb(17, 17, 17)"], ["rgb(255, 215, 0)", "rgb(51, 51, 51)"], ["rgb(255, 215, 0)", "rgb(0, 27, 68)"], ["rgb(251, 241, 169)", "rgb(0, 0, 0)"], ["rgb(251, 241, 169)", "rgb(17, 17, 17)"], ["rgb(251, 241, 169)", "rgb(51, 51, 51)"], ["rgb(251, 241, 169)", "rgb(94, 44, 165)"], ["rgb(251, 241, 169)", "rgb(0, 27, 68)"], ["rgb(251, 241, 169)", "rgb(0, 68, 158)"], ["rgb(94, 44, 165)", "rgb(255, 255, 0)"], ["rgb(94, 44, 165)", "rgb(238, 238, 238)"], ["rgb(94, 44, 165)", "rgb(244, 244, 244)"], ["rgb(94, 44, 165)", "rgb(255, 255, 255)"], ["rgb(94, 44, 165)", "rgb(251, 241, 169)"], ["rgb(94, 44, 165)", "rgb(205, 236, 255)"], ["rgb(94, 44, 165)", "rgb(246, 255, 254)"], ["rgb(94, 44, 165)", "rgb(232, 253, 245)"], ["rgb(94, 44, 165)", "rgb(255, 252, 235)"], ["rgb(94, 44, 165)", "rgb(255, 223, 223)"], ["rgb(255, 128, 204)", "rgb(0, 0, 0)"], ["rgb(255, 128, 204)", "rgb(17, 17, 17)"], ["rgb(255, 128, 204)", "rgb(0, 27, 68)"], ["rgb(255, 163, 215)", "rgb(0, 0, 0)"], ["rgb(255, 163, 215)", "rgb(17, 17, 17)"], ["rgb(255, 163, 215)", "rgb(0, 27, 68)"], ["rgb(158, 235, 207)", "rgb(0, 0, 0)"], ["rgb(158, 235, 207)", "rgb(17, 17, 17)"], ["rgb(158, 235, 207)", "rgb(51, 51, 51)"], ["rgb(158, 235, 207)", "rgb(0, 27, 68)"], ["rgb(0, 27, 68)", "rgb(255, 255, 0)"], ["rgb(0, 27, 68)", "rgb(170, 170, 170)"], ["rgb(0, 27, 68)", "rgb(204, 204, 204)"], ["rgb(0, 27, 68)", "rgb(238, 238, 238)"], ["rgb(0, 27, 68)", "rgb(244, 244, 244)"], ["rgb(0, 27, 68)", "rgb(255, 255, 255)"], ["rgb(0, 27, 68)", "rgb(255, 183, 0)"], ["rgb(0, 27, 68)", "rgb(255, 215, 0)"], ["rgb(0, 27, 68)", "rgb(251, 241, 169)"], ["rgb(0, 27, 68)", "rgb(255, 128, 204)"], ["rgb(0, 27, 68)", "rgb(255, 163, 215)"], ["rgb(0, 27, 68)", "rgb(158, 235, 207)"], ["rgb(0, 27, 68)", "rgb(150, 204, 255)"], ["rgb(0, 27, 68)", "rgb(205, 236, 255)"], ["rgb(0, 27, 68)", "rgb(246, 255, 254)"], ["rgb(0, 27, 68)", "rgb(232, 253, 245)"], ["rgb(0, 27, 68)", "rgb(255, 252, 235)"], ["rgb(0, 27, 68)", "rgb(255, 223, 223)"], ["rgb(0, 68, 158)", "rgb(255, 255, 0)"], ["rgb(0, 68, 158)", "rgb(238, 238, 238)"], ["rgb(0, 68, 158)", "rgb(244, 244, 244)"], ["rgb(0, 68, 158)", "rgb(255, 255, 255)"], ["rgb(0, 68, 158)", "rgb(251, 241, 169)"], ["rgb(0, 68, 158)", "rgb(205, 236, 255)"], ["rgb(0, 68, 158)", "rgb(246, 255, 254)"], ["rgb(0, 68, 158)", "rgb(232, 253, 245)"], ["rgb(0, 68, 158)", "rgb(255, 252, 235)"], ["rgb(0, 68, 158)", "rgb(255, 223, 223)"], ["rgb(150, 204, 255)", "rgb(0, 0, 0)"], ["rgb(150, 204, 255)", "rgb(17, 17, 17)"], ["rgb(150, 204, 255)", "rgb(51, 51, 51)"], ["rgb(150, 204, 255)", "rgb(0, 27, 68)"], ["rgb(205, 236, 255)", "rgb(0, 0, 0)"], ["rgb(205, 236, 255)", "rgb(17, 17, 17)"], ["rgb(205, 236, 255)", "rgb(51, 51, 51)"], ["rgb(205, 236, 255)", "rgb(94, 44, 165)"], ["rgb(205, 236, 255)", "rgb(0, 27, 68)"], ["rgb(205, 236, 255)", "rgb(0, 68, 158)"], ["rgb(246, 255, 254)", "rgb(0, 0, 0)"], ["rgb(246, 255, 254)", "rgb(17, 17, 17)"], ["rgb(246, 255, 254)", "rgb(51, 51, 51)"], ["rgb(246, 255, 254)", "rgb(85, 85, 85)"], ["rgb(246, 255, 254)", "rgb(94, 44, 165)"], ["rgb(246, 255, 254)", "rgb(0, 27, 68)"], ["rgb(246, 255, 254)", "rgb(0, 68, 158)"], ["rgb(232, 253, 245)", "rgb(0, 0, 0)"], ["rgb(232, 253, 245)", "rgb(17, 17, 17)"], ["rgb(232, 253, 245)", "rgb(51, 51, 51)"], ["rgb(232, 253, 245)", "rgb(85, 85, 85)"], ["rgb(232, 253, 245)", "rgb(94, 44, 165)"], ["rgb(232, 253, 245)", "rgb(0, 27, 68)"], ["rgb(232, 253, 245)", "rgb(0, 68, 158)"], ["rgb(255, 252, 235)", "rgb(0, 0, 0)"], ["rgb(255, 252, 235)", "rgb(17, 17, 17)"], ["rgb(255, 252, 235)", "rgb(51, 51, 51)"], ["rgb(255, 252, 235)", "rgb(85, 85, 85)"], ["rgb(255, 252, 235)", "rgb(94, 44, 165)"], ["rgb(255, 252, 235)", "rgb(0, 27, 68)"], ["rgb(255, 252, 235)", "rgb(0, 68, 158)"], ["rgb(255, 223, 223)", "rgb(0, 0, 0)"], ["rgb(255, 223, 223)", "rgb(17, 17, 17)"], ["rgb(255, 223, 223)", "rgb(51, 51, 51)"], ["rgb(255, 223, 223)", "rgb(94, 44, 165)"], ["rgb(255, 223, 223)", "rgb(0, 27, 68)"], ["rgb(255, 223, 223)", "rgb(0, 68, 158)"]];
var fonts = ["American Typewriter", "Andale Mono", "Arial", "Arial Black", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Avenir", "Avenir Next", "Avenir Next Condensed", "Bahnschrift", "Baskerville", "Big Caslon", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bradley Hand", "Brush Script MT", "Calibri", "Cambria", "Cambria Math", "Candara", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charter", "Cochin", "Comic Sans MS", "Consolas", "Constantia", "Copperplate", "Corbel", "Courier", "Courier New", "DIN Alternate", "DIN Condensed", "Didot", "Ebrima", "Franklin Gothic Medium", "Futura", "Gabriola", "Gadugi", "Geneva", "Georgia", "Gill Sans", "Helvetica", "Helvetica Neue", "Herculanum", "Hoefler Text", "HoloLens MDL2 Assets", "Impact", "Ink Free", "Javanese Text", "Leelawadee UI", "Lucida Console", "Lucida Grande", "Lucida Sans Unicode", "Luminari", "MS Gothic", "MV Boli", "Malgun Gothic", "Marker Felt", "Marlett", "Menlo", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU-ExtB", "Monaco", "Mongolian Baiti", "Myanmar Text", "Nirmala UI", "Noteworthy", "Optima", "Palatino", "Palatino Linotype", "Papyrus", "Phosphate", "Rockwell", "Savoye LET", "Segoe MDL2 Assets", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Emoji", "Segoe UI Historic", "Segoe UI Symbol", "SignPainter", "SimSun", "Sitka", "Skia", "Snell Roundhand", "Sylfaen", "Symbol", "Tahoma", "Times", "Times New Roman", "Trattatello", "Trebuchet MS", "Verdana", "Webdings", "Wingdings", "Yu Gothic", "Zapfino"];

var random = function random(arr) {
  var length = arr.length;
  return arr[Math.floor(Math.random() * length)];
};
var extend = function extend(base) {
  for (var _len = arguments.length, objects = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    objects[_key - 1] = arguments[_key];
  }
  return Object.assign.apply(Object, [{}, JSON.parse(JSON.stringify(base))].concat(objects));
};
var DEFAULT_OPTIONS = {
  'state-target': 'random-color',
  fonts: fonts,
  colors: colors
};
function RevealRandomColors() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var resolvedOptions = extend(DEFAULT_OPTIONS, options);
  var colors = resolvedOptions.colors,
    fonts = resolvedOptions.fonts;
  return {
    init: function init(RevealOrNot) {
      (RevealOrNot || Reveal).addEventListener('slidechanged', function (_ref) {
        var currentSlide = _ref.currentSlide;
        var App = document.querySelector('.reveal[role="application"]');
        var color = null;
        var backgroundColor = null;
        var fontFamily = null;
        if (currentSlide.dataset.state === resolvedOptions['state-target']) {
          var _random = random(colors);
          var _random2 = _slicedToArray(_random, 2);
          color = _random2[0];
          backgroundColor = _random2[1];
          fontFamily = random(fonts);
        }
        App.style.color = color;
        App.style.backgroundColor = backgroundColor;
        App.style.fontFamily = fontFamily;
      });
    }
  };
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * marked v12.0.2 - a markdown parser
 * Copyright (c) 2011-2024, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */

/**
 * Gets the original marked default options.
 */
function _getDefaults() {
  return {
    async: false,
    breaks: false,
    extensions: null,
    gfm: true,
    hooks: null,
    pedantic: false,
    renderer: null,
    silent: false,
    tokenizer: null,
    walkTokens: null
  };
}
var _defaults = _getDefaults();
function changeDefaults(newDefaults) {
  _defaults = newDefaults;
}

/**
 * Helpers
 */
var escapeTest = /[&<>"']/;
var escapeReplace = new RegExp(escapeTest.source, 'g');
var escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
var escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, 'g');
var escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
var getEscapeReplacement = function getEscapeReplacement(ch) {
  return escapeReplacements[ch];
};
function escape$1(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}
var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape$1(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(unescapeTest, function (_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}
var caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  var source = typeof regex === 'string' ? regex : regex.source;
  opt = opt || '';
  var obj = {
    replace: function replace(name, val) {
      var valSource = typeof val === 'string' ? val : val.source;
      valSource = valSource.replace(caret, '$1');
      source = source.replace(name, valSource);
      return obj;
    },
    getRegex: function getRegex() {
      return new RegExp(source, opt);
    }
  };
  return obj;
}
function cleanUrl(href) {
  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }
  return href;
}
var noopTest = {
  exec: function exec() {
    return null;
  }
};
function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  var row = tableRow.replace(/\|/g, function (match, offset, str) {
      var escaped = false;
      var curr = offset;
      while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;
      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
    cells = row.split(/ \|/);
  var i = 0;
  // First/last cell in a row cannot be empty if it has no leading/trailing pipe
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (count) {
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count) cells.push('');
    }
  }
  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }
  return cells;
}
/**
 * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
 * /c*$/ is vulnerable to REDOS.
 *
 * @param str
 * @param c
 * @param invert Remove suffix of non-c chars instead. Default falsey.
 */
function rtrim(str, c, invert) {
  var l = str.length;
  if (l === 0) {
    return '';
  }
  // Length of suffix matching the invert condition.
  var suffLen = 0;
  // Step left until we fail to match the invert condition.
  while (suffLen < l) {
    var currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  var level = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}
function outputLink(cap, link, raw, lexer) {
  var href = link.href;
  var title = link.title ? escape$1(link.title) : null;
  var text = cap[1].replace(/\\([\[\]])/g, '$1');
  if (cap[0].charAt(0) !== '!') {
    lexer.state.inLink = true;
    var token = {
      type: 'link',
      raw: raw,
      href: href,
      title: title,
      text: text,
      tokens: lexer.inlineTokens(text)
    };
    lexer.state.inLink = false;
    return token;
  }
  return {
    type: 'image',
    raw: raw,
    href: href,
    title: title,
    text: escape$1(text)
  };
}
function indentCodeCompensation(raw, text) {
  var matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  var indentToCode = matchIndentToCode[1];
  return text.split('\n').map(function (node) {
    var matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    var _matchIndentInNode = _slicedToArray(matchIndentInNode, 1),
      indentInNode = _matchIndentInNode[0];
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join('\n');
}
/**
 * Tokenizer
 */
var _Tokenizer = /*#__PURE__*/function () {
  // set by the lexer
  function _Tokenizer(options) {
    _classCallCheck(this, _Tokenizer);
    _defineProperty(this, "options", void 0);
    _defineProperty(this, "rules", void 0);
    // set by the lexer
    _defineProperty(this, "lexer", void 0);
    this.options = options || _defaults;
  }
  return _createClass(_Tokenizer, [{
    key: "space",
    value: function space(src) {
      var cap = this.rules.block.newline.exec(src);
      if (cap && cap[0].length > 0) {
        return {
          type: 'space',
          raw: cap[0]
        };
      }
    }
  }, {
    key: "code",
    value: function code(src) {
      var cap = this.rules.block.code.exec(src);
      if (cap) {
        var text = cap[0].replace(/^ {1,4}/gm, '');
        return {
          type: 'code',
          raw: cap[0],
          codeBlockStyle: 'indented',
          text: !this.options.pedantic ? rtrim(text, '\n') : text
        };
      }
    }
  }, {
    key: "fences",
    value: function fences(src) {
      var cap = this.rules.block.fences.exec(src);
      if (cap) {
        var raw = cap[0];
        var text = indentCodeCompensation(raw, cap[3] || '');
        return {
          type: 'code',
          raw: raw,
          lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, '$1') : cap[2],
          text: text
        };
      }
    }
  }, {
    key: "heading",
    value: function heading(src) {
      var cap = this.rules.block.heading.exec(src);
      if (cap) {
        var text = cap[2].trim();
        // remove trailing #s
        if (/#$/.test(text)) {
          var trimmed = rtrim(text, '#');
          if (this.options.pedantic) {
            text = trimmed.trim();
          } else if (!trimmed || / $/.test(trimmed)) {
            // CommonMark requires space before trailing #s
            text = trimmed.trim();
          }
        }
        return {
          type: 'heading',
          raw: cap[0],
          depth: cap[1].length,
          text: text,
          tokens: this.lexer.inline(text)
        };
      }
    }
  }, {
    key: "hr",
    value: function hr(src) {
      var cap = this.rules.block.hr.exec(src);
      if (cap) {
        return {
          type: 'hr',
          raw: cap[0]
        };
      }
    }
  }, {
    key: "blockquote",
    value: function blockquote(src) {
      var cap = this.rules.block.blockquote.exec(src);
      if (cap) {
        // precede setext continuation with 4 spaces so it isn't a setext
        var text = cap[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, '\n    $1');
        text = rtrim(text.replace(/^ *>[ \t]?/gm, ''), '\n');
        var top = this.lexer.state.top;
        this.lexer.state.top = true;
        var tokens = this.lexer.blockTokens(text);
        this.lexer.state.top = top;
        return {
          type: 'blockquote',
          raw: cap[0],
          tokens: tokens,
          text: text
        };
      }
    }
  }, {
    key: "list",
    value: function list(src) {
      var cap = this.rules.block.list.exec(src);
      if (cap) {
        var bull = cap[1].trim();
        var isordered = bull.length > 1;
        var _list = {
          type: 'list',
          raw: '',
          ordered: isordered,
          start: isordered ? +bull.slice(0, -1) : '',
          loose: false,
          items: []
        };
        bull = isordered ? "\\d{1,9}\\".concat(bull.slice(-1)) : "\\".concat(bull);
        if (this.options.pedantic) {
          bull = isordered ? bull : '[*+-]';
        }
        // Get next list item
        var itemRegex = new RegExp("^( {0,3}".concat(bull, ")((?:[\t ][^\\n]*)?(?:\\n|$))"));
        var raw = '';
        var itemContents = '';
        var endsWithBlankLine = false;
        // Check if current bullet point can start a new List Item
        while (src) {
          var endEarly = false;
          if (!(cap = itemRegex.exec(src))) {
            break;
          }
          if (this.rules.block.hr.test(src)) {
            // End list if bullet was actually HR (possibly move into itemRegex?)
            break;
          }
          raw = cap[0];
          src = src.substring(raw.length);
          var line = cap[2].split('\n', 1)[0].replace(/^\t+/, function (t) {
            return ' '.repeat(3 * t.length);
          });
          var nextLine = src.split('\n', 1)[0];
          var indent = 0;
          if (this.options.pedantic) {
            indent = 2;
            itemContents = line.trimStart();
          } else {
            indent = cap[2].search(/[^ ]/); // Find first non-space char
            indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent
            itemContents = line.slice(indent);
            indent += cap[1].length;
          }
          var blankLine = false;
          if (!line && /^ *$/.test(nextLine)) {
            // Items begin with at most one blank line
            raw += nextLine + '\n';
            src = src.substring(nextLine.length + 1);
            endEarly = true;
          }
          if (!endEarly) {
            var nextBulletRegex = new RegExp("^ {0,".concat(Math.min(3, indent - 1), "}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))"));
            var hrRegex = new RegExp("^ {0,".concat(Math.min(3, indent - 1), "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)"));
            var fencesBeginRegex = new RegExp("^ {0,".concat(Math.min(3, indent - 1), "}(?:```|~~~)"));
            var headingBeginRegex = new RegExp("^ {0,".concat(Math.min(3, indent - 1), "}#"));
            // Check if following lines should be included in List Item
            while (src) {
              var rawLine = src.split('\n', 1)[0];
              nextLine = rawLine;
              // Re-align to follow commonmark nesting rules
              if (this.options.pedantic) {
                nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
              }
              // End list item if found code fences
              if (fencesBeginRegex.test(nextLine)) {
                break;
              }
              // End list item if found start of new heading
              if (headingBeginRegex.test(nextLine)) {
                break;
              }
              // End list item if found start of new bullet
              if (nextBulletRegex.test(nextLine)) {
                break;
              }
              // Horizontal rule found
              if (hrRegex.test(src)) {
                break;
              }
              if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) {
                // Dedent if possible
                itemContents += '\n' + nextLine.slice(indent);
              } else {
                // not enough indentation
                if (blankLine) {
                  break;
                }
                // paragraph continuation unless last line was a different block level element
                if (line.search(/[^ ]/) >= 4) {
                  // indented code block
                  break;
                }
                if (fencesBeginRegex.test(line)) {
                  break;
                }
                if (headingBeginRegex.test(line)) {
                  break;
                }
                if (hrRegex.test(line)) {
                  break;
                }
                itemContents += '\n' + nextLine;
              }
              if (!blankLine && !nextLine.trim()) {
                // Check if current line is blank
                blankLine = true;
              }
              raw += rawLine + '\n';
              src = src.substring(rawLine.length + 1);
              line = nextLine.slice(indent);
            }
          }
          if (!_list.loose) {
            // If the previous item ended with a blank line, the list is loose
            if (endsWithBlankLine) {
              _list.loose = true;
            } else if (/\n *\n *$/.test(raw)) {
              endsWithBlankLine = true;
            }
          }
          var istask = null;
          var ischecked = void 0;
          // Check for task list items
          if (this.options.gfm) {
            istask = /^\[[ xX]\] /.exec(itemContents);
            if (istask) {
              ischecked = istask[0] !== '[ ] ';
              itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
            }
          }
          _list.items.push({
            type: 'list_item',
            raw: raw,
            task: !!istask,
            checked: ischecked,
            loose: false,
            text: itemContents,
            tokens: []
          });
          _list.raw += raw;
        }
        // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic
        _list.items[_list.items.length - 1].raw = raw.trimEnd();
        _list.items[_list.items.length - 1].text = itemContents.trimEnd();
        _list.raw = _list.raw.trimEnd();
        // Item child tokens handled here at end because we needed to have the final item to trim it first
        for (var i = 0; i < _list.items.length; i++) {
          this.lexer.state.top = false;
          _list.items[i].tokens = this.lexer.blockTokens(_list.items[i].text, []);
          if (!_list.loose) {
            // Check if list should be loose
            var spacers = _list.items[i].tokens.filter(function (t) {
              return t.type === 'space';
            });
            var hasMultipleLineBreaks = spacers.length > 0 && spacers.some(function (t) {
              return /\n.*\n/.test(t.raw);
            });
            _list.loose = hasMultipleLineBreaks;
          }
        }
        // Set all items to loose if list is loose
        if (_list.loose) {
          for (var _i = 0; _i < _list.items.length; _i++) {
            _list.items[_i].loose = true;
          }
        }
        return _list;
      }
    }
  }, {
    key: "html",
    value: function html(src) {
      var cap = this.rules.block.html.exec(src);
      if (cap) {
        var token = {
          type: 'html',
          block: true,
          raw: cap[0],
          pre: cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style',
          text: cap[0]
        };
        return token;
      }
    }
  }, {
    key: "def",
    value: function def(src) {
      var cap = this.rules.block.def.exec(src);
      if (cap) {
        var _tag2 = cap[1].toLowerCase().replace(/\s+/g, ' ');
        var href = cap[2] ? cap[2].replace(/^<(.*)>$/, '$1').replace(this.rules.inline.anyPunctuation, '$1') : '';
        var title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, '$1') : cap[3];
        return {
          type: 'def',
          tag: _tag2,
          raw: cap[0],
          href: href,
          title: title
        };
      }
    }
  }, {
    key: "table",
    value: function table(src) {
      var _this = this;
      var cap = this.rules.block.table.exec(src);
      if (!cap) {
        return;
      }
      if (!/[:|]/.test(cap[2])) {
        // delimiter row must have a pipe (|) or colon (:) otherwise it is a setext heading
        return;
      }
      var headers = splitCells(cap[1]);
      var aligns = cap[2].replace(/^\||\| *$/g, '').split('|');
      var rows = cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, '').split('\n') : [];
      var item = {
        type: 'table',
        raw: cap[0],
        header: [],
        align: [],
        rows: []
      };
      if (headers.length !== aligns.length) {
        // header and align columns must be equal, rows can be different.
        return;
      }
      var _iterator = _createForOfIteratorHelper$1(aligns),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var align = _step.value;
          if (/^ *-+: *$/.test(align)) {
            item.align.push('right');
          } else if (/^ *:-+: *$/.test(align)) {
            item.align.push('center');
          } else if (/^ *:-+ *$/.test(align)) {
            item.align.push('left');
          } else {
            item.align.push(null);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var _iterator2 = _createForOfIteratorHelper$1(headers),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var header = _step2.value;
          item.header.push({
            text: header,
            tokens: this.lexer.inline(header)
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var _iterator3 = _createForOfIteratorHelper$1(rows),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var row = _step3.value;
          item.rows.push(splitCells(row, item.header.length).map(function (cell) {
            return {
              text: cell,
              tokens: _this.lexer.inline(cell)
            };
          }));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return item;
    }
  }, {
    key: "lheading",
    value: function lheading(src) {
      var cap = this.rules.block.lheading.exec(src);
      if (cap) {
        return {
          type: 'heading',
          raw: cap[0],
          depth: cap[2].charAt(0) === '=' ? 1 : 2,
          text: cap[1],
          tokens: this.lexer.inline(cap[1])
        };
      }
    }
  }, {
    key: "paragraph",
    value: function paragraph(src) {
      var cap = this.rules.block.paragraph.exec(src);
      if (cap) {
        var text = cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1];
        return {
          type: 'paragraph',
          raw: cap[0],
          text: text,
          tokens: this.lexer.inline(text)
        };
      }
    }
  }, {
    key: "text",
    value: function text(src) {
      var cap = this.rules.block.text.exec(src);
      if (cap) {
        return {
          type: 'text',
          raw: cap[0],
          text: cap[0],
          tokens: this.lexer.inline(cap[0])
        };
      }
    }
  }, {
    key: "escape",
    value: function escape(src) {
      var cap = this.rules.inline.escape.exec(src);
      if (cap) {
        return {
          type: 'escape',
          raw: cap[0],
          text: escape$1(cap[1])
        };
      }
    }
  }, {
    key: "tag",
    value: function tag(src) {
      var cap = this.rules.inline.tag.exec(src);
      if (cap) {
        if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
          this.lexer.state.inLink = true;
        } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
          this.lexer.state.inLink = false;
        }
        if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = true;
        } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = false;
        }
        return {
          type: 'html',
          raw: cap[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          block: false,
          text: cap[0]
        };
      }
    }
  }, {
    key: "link",
    value: function link(src) {
      var cap = this.rules.inline.link.exec(src);
      if (cap) {
        var trimmedUrl = cap[2].trim();
        if (!this.options.pedantic && /^</.test(trimmedUrl)) {
          // commonmark requires matching angle brackets
          if (!/>$/.test(trimmedUrl)) {
            return;
          }
          // ending angle bracket cannot be escaped
          var rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');
          if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
            return;
          }
        } else {
          // find closing parenthesis
          var lastParenIndex = findClosingBracket(cap[2], '()');
          if (lastParenIndex > -1) {
            var start = cap[0].indexOf('!') === 0 ? 5 : 4;
            var linkLen = start + cap[1].length + lastParenIndex;
            cap[2] = cap[2].substring(0, lastParenIndex);
            cap[0] = cap[0].substring(0, linkLen).trim();
            cap[3] = '';
          }
        }
        var href = cap[2];
        var title = '';
        if (this.options.pedantic) {
          // split pedantic href and title
          var _link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
          if (_link) {
            href = _link[1];
            title = _link[3];
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : '';
        }
        href = href.trim();
        if (/^</.test(href)) {
          if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
            // pedantic allows starting angle bracket without ending angle bracket
            href = href.slice(1);
          } else {
            href = href.slice(1, -1);
          }
        }
        return outputLink(cap, {
          href: href ? href.replace(this.rules.inline.anyPunctuation, '$1') : href,
          title: title ? title.replace(this.rules.inline.anyPunctuation, '$1') : title
        }, cap[0], this.lexer);
      }
    }
  }, {
    key: "reflink",
    value: function reflink(src, links) {
      var cap;
      if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
        var linkString = (cap[2] || cap[1]).replace(/\s+/g, ' ');
        var _link2 = links[linkString.toLowerCase()];
        if (!_link2) {
          var text = cap[0].charAt(0);
          return {
            type: 'text',
            raw: text,
            text: text
          };
        }
        return outputLink(cap, _link2, cap[0], this.lexer);
      }
    }
  }, {
    key: "emStrong",
    value: function emStrong(src, maskedSrc) {
      var prevChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var match = this.rules.inline.emStrongLDelim.exec(src);
      if (!match) return;
      // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well
      if (match[3] && prevChar.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])/)) return;
      var nextChar = match[1] || match[2] || '';
      if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
        // unicode Regex counts emoji as 1 char; spread into array for proper count (used multiple times below)
        var lLength = _toConsumableArray(match[0]).length - 1;
        var rDelim,
          rLength,
          delimTotal = lLength,
          midDelimTotal = 0;
        var endReg = match[0][0] === '*' ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
        endReg.lastIndex = 0;
        // Clip maskedSrc to same section of string as src (move to lexer?)
        maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
        while ((match = endReg.exec(maskedSrc)) != null) {
          rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
          if (!rDelim) continue; // skip single * in __abc*abc__
          rLength = _toConsumableArray(rDelim).length;
          if (match[3] || match[4]) {
            // found another Left Delim
            delimTotal += rLength;
            continue;
          } else if (match[5] || match[6]) {
            // either Left or Right Delim
            if (lLength % 3 && !((lLength + rLength) % 3)) {
              midDelimTotal += rLength;
              continue; // CommonMark Emphasis Rules 9-10
            }
          }
          delimTotal -= rLength;
          if (delimTotal > 0) continue; // Haven't found enough closing delimiters
          // Remove extra characters. *a*** -> *a*
          rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
          // char length can be >1 for unicode characters;
          var lastCharLength = _toConsumableArray(match[0])[0].length;
          var raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
          // Create `em` if smallest delimiter has odd char count. *a***
          if (Math.min(lLength, rLength) % 2) {
            var _text = raw.slice(1, -1);
            return {
              type: 'em',
              raw: raw,
              text: _text,
              tokens: this.lexer.inlineTokens(_text)
            };
          }
          // Create 'strong' if smallest delimiter has even char count. **a***
          var text = raw.slice(2, -2);
          return {
            type: 'strong',
            raw: raw,
            text: text,
            tokens: this.lexer.inlineTokens(text)
          };
        }
      }
    }
  }, {
    key: "codespan",
    value: function codespan(src) {
      var cap = this.rules.inline.code.exec(src);
      if (cap) {
        var text = cap[2].replace(/\n/g, ' ');
        var hasNonSpaceChars = /[^ ]/.test(text);
        var hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
        if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
          text = text.substring(1, text.length - 1);
        }
        text = escape$1(text, true);
        return {
          type: 'codespan',
          raw: cap[0],
          text: text
        };
      }
    }
  }, {
    key: "br",
    value: function br(src) {
      var cap = this.rules.inline.br.exec(src);
      if (cap) {
        return {
          type: 'br',
          raw: cap[0]
        };
      }
    }
  }, {
    key: "del",
    value: function del(src) {
      var cap = this.rules.inline.del.exec(src);
      if (cap) {
        return {
          type: 'del',
          raw: cap[0],
          text: cap[2],
          tokens: this.lexer.inlineTokens(cap[2])
        };
      }
    }
  }, {
    key: "autolink",
    value: function autolink(src) {
      var cap = this.rules.inline.autolink.exec(src);
      if (cap) {
        var text, href;
        if (cap[2] === '@') {
          text = escape$1(cap[1]);
          href = 'mailto:' + text;
        } else {
          text = escape$1(cap[1]);
          href = text;
        }
        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text
          }]
        };
      }
    }
  }, {
    key: "url",
    value: function url(src) {
      var cap;
      if (cap = this.rules.inline.url.exec(src)) {
        var text, href;
        if (cap[2] === '@') {
          text = escape$1(cap[0]);
          href = 'mailto:' + text;
        } else {
          // do extended autolink path validation
          var prevCapZero;
          do {
            var _this$rules$inline$_b, _this$rules$inline$_b2;
            prevCapZero = cap[0];
            cap[0] = (_this$rules$inline$_b = (_this$rules$inline$_b2 = this.rules.inline._backpedal.exec(cap[0])) === null || _this$rules$inline$_b2 === void 0 ? void 0 : _this$rules$inline$_b2[0]) !== null && _this$rules$inline$_b !== void 0 ? _this$rules$inline$_b : '';
          } while (prevCapZero !== cap[0]);
          text = escape$1(cap[0]);
          if (cap[1] === 'www.') {
            href = 'http://' + cap[0];
          } else {
            href = cap[0];
          }
        }
        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text
          }]
        };
      }
    }
  }, {
    key: "inlineText",
    value: function inlineText(src) {
      var cap = this.rules.inline.text.exec(src);
      if (cap) {
        var text;
        if (this.lexer.state.inRawBlock) {
          text = cap[0];
        } else {
          text = escape$1(cap[0]);
        }
        return {
          type: 'text',
          raw: cap[0],
          text: text
        };
      }
    }
  }]);
}();
/**
 * Block-Level Grammar
 */
var newline = /^(?: *(?:\n|$))+/;
var blockCode = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/;
var fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var bullet = /(?:[*+-]|\d{1,9}[.)])/;
var lheading = edit(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, bullet) // lists can interrupt
.replace(/blockCode/g, / {4}/) // indented code blocks can interrupt
.replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/) // fenced code blocks can interrupt
.replace(/blockquote/g, / {0,3}>/) // blockquote can interrupt
.replace(/heading/g, / {0,3}#{1,6}/) // ATX heading can interrupt
.replace(/html/g, / {0,3}<[^\n>]+>\n/) // block html can interrupt
.getRegex();
var _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var blockText = /^[^\n]+/;
var _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
var def = edit(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace('label', _blockLabel).replace('title', /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex();
var _tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title' + '|tr|track|ul';
var _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var html = edit('^ {0,3}(?:' // optional indentation
+ '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
+ '|comment[^\\n]*(\\n+|$)' // (2)
+ '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
+ '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
+ '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
+ '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
+ '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
+ '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
+ ')', 'i').replace('comment', _comment).replace('tag', _tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var paragraph = edit(_paragraph).replace('hr', hr).replace('heading', ' {0,3}#{1,6}(?:\\s|$)').replace('|lheading', '') // setext headings don't interrupt commonmark paragraphs
.replace('|table', '').replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', _tag) // pars can be interrupted by type (6) html blocks
.getRegex();
var blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace('paragraph', paragraph).getRegex();
/**
 * Normal Block Grammar
 */
var blockNormal = {
  blockquote: blockquote,
  code: blockCode,
  def: def,
  fences: fences,
  heading: heading,
  hr: hr,
  html: html,
  lheading: lheading,
  list: list,
  newline: newline,
  paragraph: paragraph,
  table: noopTest,
  text: blockText
};
/**
 * GFM Block Grammar
 */
var gfmTable = edit('^ *([^\\n ].*)\\n' // Header
+ ' {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)' // Align
+ '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)') // Cells
.replace('hr', hr).replace('heading', ' {0,3}#{1,6}(?:\\s|$)').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', _tag) // tables can be interrupted by type (6) html blocks
.getRegex();
var blockGfm = _objectSpread$1(_objectSpread$1({}, blockNormal), {}, {
  table: gfmTable,
  paragraph: edit(_paragraph).replace('hr', hr).replace('heading', ' {0,3}#{1,6}(?:\\s|$)').replace('|lheading', '') // setext headings don't interrupt commonmark paragraphs
  .replace('table', gfmTable) // interrupt paragraphs with table
  .replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', _tag) // pars can be interrupted by type (6) html blocks
  .getRegex()
});
/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */
var blockPedantic = _objectSpread$1(_objectSpread$1({}, blockNormal), {}, {
  html: edit('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
  + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', _comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(_paragraph).replace('hr', hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', lheading).replace('|table', '').replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').replace('|tag', '').getRegex()
});
/**
 * Inline-Level Grammar
 */
var escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var br = /^( {2,}|\\)\n(?!\s*$)/;
var inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
// list of unicode punctuation marks, plus any missing characters from CommonMark spec
var _punctuation = '\\p{P}\\p{S}';
var punctuation = edit(/^((?![*_])[\spunctuation])/, 'u').replace(/punctuation/g, _punctuation).getRegex();
// sequences em should skip over [title](link), `code`, <html>
var blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
var emStrongLDelim = edit(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, 'u').replace(/punct/g, _punctuation).getRegex();
var emStrongRDelimAst = edit('^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)' // Skip orphan inside strong
+ '|[^*]+(?=[^*])' // Consume to delim
+ '|(?!\\*)[punct](\\*+)(?=[\\s]|$)' // (1) #*** can only be a Right Delimiter
+ '|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)' // (2) a***#, a*** can only be a Right Delimiter
+ '|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])' // (3) #***a, ***a can only be Left Delimiter
+ '|[\\s](\\*+)(?!\\*)(?=[punct])' // (4) ***# can only be Left Delimiter
+ '|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])' // (5) #***# can be either Left or Right Delimiter
+ '|[^punct\\s](\\*+)(?=[^punct\\s])', 'gu') // (6) a***a can be either Left or Right Delimiter
.replace(/punct/g, _punctuation).getRegex();
// (6) Not allowed for _
var emStrongRDelimUnd = edit('^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)' // Skip orphan inside strong
+ '|[^_]+(?=[^_])' // Consume to delim
+ '|(?!_)[punct](_+)(?=[\\s]|$)' // (1) #___ can only be a Right Delimiter
+ '|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)' // (2) a___#, a___ can only be a Right Delimiter
+ '|(?!_)[punct\\s](_+)(?=[^punct\\s])' // (3) #___a, ___a can only be Left Delimiter
+ '|[\\s](_+)(?!_)(?=[punct])' // (4) ___# can only be Left Delimiter
+ '|(?!_)[punct](_+)(?!_)(?=[punct])', 'gu') // (5) #___# can be either Left or Right Delimiter
.replace(/punct/g, _punctuation).getRegex();
var anyPunctuation = edit(/\\([punct])/, 'gu').replace(/punct/g, _punctuation).getRegex();
var autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace('scheme', /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace('email', /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var _inlineComment = edit(_comment).replace('(?:-->|$)', '-->').getRegex();
var tag = edit('^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
+ '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
+ '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
+ '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
+ '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>') // CDATA section
.replace('comment', _inlineComment).replace('attribute', /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
var link = edit(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace('label', _inlineLabel).replace('href', /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace('title', /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace('label', _inlineLabel).replace('ref', _blockLabel).getRegex();
var nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace('ref', _blockLabel).getRegex();
var reflinkSearch = edit('reflink|nolink(?!\\()', 'g').replace('reflink', reflink).replace('nolink', nolink).getRegex();
/**
 * Normal Inline Grammar
 */
var inlineNormal = {
  _backpedal: noopTest,
  // only used for GFM url
  anyPunctuation: anyPunctuation,
  autolink: autolink,
  blockSkip: blockSkip,
  br: br,
  code: inlineCode,
  del: noopTest,
  emStrongLDelim: emStrongLDelim,
  emStrongRDelimAst: emStrongRDelimAst,
  emStrongRDelimUnd: emStrongRDelimUnd,
  escape: escape,
  link: link,
  nolink: nolink,
  punctuation: punctuation,
  reflink: reflink,
  reflinkSearch: reflinkSearch,
  tag: tag,
  text: inlineText,
  url: noopTest
};
/**
 * Pedantic Inline Grammar
 */
var inlinePedantic = _objectSpread$1(_objectSpread$1({}, inlineNormal), {}, {
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace('label', _inlineLabel).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', _inlineLabel).getRegex()
});
/**
 * GFM Inline Grammar
 */
var inlineGfm = _objectSpread$1(_objectSpread$1({}, inlineNormal), {}, {
  escape: edit(escape).replace('])', '~|])').getRegex(),
  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, 'i').replace('email', /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
/**
 * GFM + Line Breaks Inline Grammar
 */
var inlineBreaks = _objectSpread$1(_objectSpread$1({}, inlineGfm), {}, {
  br: edit(br).replace('{2,}', '*').getRegex(),
  text: edit(inlineGfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
});
/**
 * exports
 */
var block = {
  normal: blockNormal,
  gfm: blockGfm,
  pedantic: blockPedantic
};
var inline = {
  normal: inlineNormal,
  gfm: inlineGfm,
  breaks: inlineBreaks,
  pedantic: inlinePedantic
};

/**
 * Block Lexer
 */
var _Lexer = /*#__PURE__*/function () {
  function _Lexer(options) {
    _classCallCheck(this, _Lexer);
    _defineProperty(this, "tokens", void 0);
    _defineProperty(this, "options", void 0);
    _defineProperty(this, "state", void 0);
    _defineProperty(this, "tokenizer", void 0);
    _defineProperty(this, "inlineQueue", void 0);
    // TokenList cannot be created in one go
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || _defaults;
    this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    var rules = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */
  return _createClass(_Lexer, [{
    key: "lex",
    value:
    /**
     * Preprocessing
     */
    function lex(src) {
      src = src.replace(/\r\n|\r/g, '\n');
      this.blockTokens(src, this.tokens);
      for (var i = 0; i < this.inlineQueue.length; i++) {
        var next = this.inlineQueue[i];
        this.inlineTokens(next.src, next.tokens);
      }
      this.inlineQueue = [];
      return this.tokens;
    }
  }, {
    key: "blockTokens",
    value: function blockTokens(src) {
      var _this2 = this;
      var tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (this.options.pedantic) {
        src = src.replace(/\t/g, '    ').replace(/^ +$/gm, '');
      } else {
        src = src.replace(/^( *)(\t+)/gm, function (_, leading, tabs) {
          return leading + '    '.repeat(tabs.length);
        });
      }
      var token;
      var lastToken;
      var cutSrc;
      var lastParagraphClipped;
      var _loop = function _loop() {
          if (_this2.options.extensions && _this2.options.extensions.block && _this2.options.extensions.block.some(function (extTokenizer) {
            if (token = extTokenizer.call({
              lexer: _this2
            }, src, tokens)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              return true;
            }
            return false;
          })) {
            return 0; // continue
          }
          // newline
          if (token = _this2.tokenizer.space(src)) {
            src = src.substring(token.raw.length);
            if (token.raw.length === 1 && tokens.length > 0) {
              // if there's a single \n as a spacer, it's terminating the last line,
              // so move it there so that we don't get unnecessary paragraph tags
              tokens[tokens.length - 1].raw += '\n';
            } else {
              tokens.push(token);
            }
            return 0; // continue
          }
          // code
          if (token = _this2.tokenizer.code(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            // An indented code block cannot interrupt a paragraph.
            if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
              lastToken.raw += '\n' + token.raw;
              lastToken.text += '\n' + token.text;
              _this2.inlineQueue[_this2.inlineQueue.length - 1].src = lastToken.text;
            } else {
              tokens.push(token);
            }
            return 0; // continue
          }
          // fences
          if (token = _this2.tokenizer.fences(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // heading
          if (token = _this2.tokenizer.heading(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // hr
          if (token = _this2.tokenizer.hr(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // blockquote
          if (token = _this2.tokenizer.blockquote(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // list
          if (token = _this2.tokenizer.list(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // html
          if (token = _this2.tokenizer.html(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // def
          if (token = _this2.tokenizer.def(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
              lastToken.raw += '\n' + token.raw;
              lastToken.text += '\n' + token.raw;
              _this2.inlineQueue[_this2.inlineQueue.length - 1].src = lastToken.text;
            } else if (!_this2.tokens.links[token.tag]) {
              _this2.tokens.links[token.tag] = {
                href: token.href,
                title: token.title
              };
            }
            return 0; // continue
          }
          // table (gfm)
          if (token = _this2.tokenizer.table(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // lheading
          if (token = _this2.tokenizer.lheading(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // top-level paragraph
          // prevent paragraph consuming extensions by clipping 'src' to extension start
          cutSrc = src;
          if (_this2.options.extensions && _this2.options.extensions.startBlock) {
            var startIndex = Infinity;
            var tempSrc = src.slice(1);
            var tempStart;
            _this2.options.extensions.startBlock.forEach(function (getStartIndex) {
              tempStart = getStartIndex.call({
                lexer: _this2
              }, tempSrc);
              if (typeof tempStart === 'number' && tempStart >= 0) {
                startIndex = Math.min(startIndex, tempStart);
              }
            });
            if (startIndex < Infinity && startIndex >= 0) {
              cutSrc = src.substring(0, startIndex + 1);
            }
          }
          if (_this2.state.top && (token = _this2.tokenizer.paragraph(cutSrc))) {
            lastToken = tokens[tokens.length - 1];
            if (lastParagraphClipped && lastToken.type === 'paragraph') {
              lastToken.raw += '\n' + token.raw;
              lastToken.text += '\n' + token.text;
              _this2.inlineQueue.pop();
              _this2.inlineQueue[_this2.inlineQueue.length - 1].src = lastToken.text;
            } else {
              tokens.push(token);
            }
            lastParagraphClipped = cutSrc.length !== src.length;
            src = src.substring(token.raw.length);
            return 0; // continue
          }
          // text
          if (token = _this2.tokenizer.text(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && lastToken.type === 'text') {
              lastToken.raw += '\n' + token.raw;
              lastToken.text += '\n' + token.text;
              _this2.inlineQueue.pop();
              _this2.inlineQueue[_this2.inlineQueue.length - 1].src = lastToken.text;
            } else {
              tokens.push(token);
            }
            return 0; // continue
          }
          if (src) {
            var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
            if (_this2.options.silent) {
              console.error(errMsg);
              return 1; // break
            } else {
              throw new Error(errMsg);
            }
          }
        },
        _ret;
      while (src) {
        _ret = _loop();
        if (_ret === 0) continue;
        if (_ret === 1) break;
      }
      this.state.top = true;
      return tokens;
    }
  }, {
    key: "inline",
    value: function inline(src) {
      var tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.inlineQueue.push({
        src: src,
        tokens: tokens
      });
      return tokens;
    }
    /**
     * Lexing/Compiling
     */
  }, {
    key: "inlineTokens",
    value: function inlineTokens(src) {
      var _this3 = this;
      var tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var token, lastToken, cutSrc;
      // String with links masked to avoid interference with em and strong
      var maskedSrc = src;
      var match;
      var keepPrevChar, prevChar;
      // Mask out reflinks
      if (this.tokens.links) {
        var links = Object.keys(this.tokens.links);
        if (links.length > 0) {
          while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
            if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
              maskedSrc = maskedSrc.slice(0, match.index) + '[' + 'a'.repeat(match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
            }
          }
        }
      }
      // Mask out other blocks
      while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + '[' + 'a'.repeat(match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      }
      // Mask out escaped characters
      while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
      }
      var _loop2 = function _loop2() {
          if (!keepPrevChar) {
            prevChar = '';
          }
          keepPrevChar = false;
          // extensions
          if (_this3.options.extensions && _this3.options.extensions.inline && _this3.options.extensions.inline.some(function (extTokenizer) {
            if (token = extTokenizer.call({
              lexer: _this3
            }, src, tokens)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              return true;
            }
            return false;
          })) {
            return 0; // continue
          }
          // escape
          if (token = _this3.tokenizer.escape(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // tag
          if (token = _this3.tokenizer.tag(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && token.type === 'text' && lastToken.type === 'text') {
              lastToken.raw += token.raw;
              lastToken.text += token.text;
            } else {
              tokens.push(token);
            }
            return 0; // continue
          }
          // link
          if (token = _this3.tokenizer.link(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // reflink, nolink
          if (token = _this3.tokenizer.reflink(src, _this3.tokens.links)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && token.type === 'text' && lastToken.type === 'text') {
              lastToken.raw += token.raw;
              lastToken.text += token.text;
            } else {
              tokens.push(token);
            }
            return 0; // continue
          }
          // em & strong
          if (token = _this3.tokenizer.emStrong(src, maskedSrc, prevChar)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // code
          if (token = _this3.tokenizer.codespan(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // br
          if (token = _this3.tokenizer.br(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // del (gfm)
          if (token = _this3.tokenizer.del(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // autolink
          if (token = _this3.tokenizer.autolink(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // url (gfm)
          if (!_this3.state.inLink && (token = _this3.tokenizer.url(src))) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // text
          // prevent inlineText consuming extensions by clipping 'src' to extension start
          cutSrc = src;
          if (_this3.options.extensions && _this3.options.extensions.startInline) {
            var startIndex = Infinity;
            var tempSrc = src.slice(1);
            var tempStart;
            _this3.options.extensions.startInline.forEach(function (getStartIndex) {
              tempStart = getStartIndex.call({
                lexer: _this3
              }, tempSrc);
              if (typeof tempStart === 'number' && tempStart >= 0) {
                startIndex = Math.min(startIndex, tempStart);
              }
            });
            if (startIndex < Infinity && startIndex >= 0) {
              cutSrc = src.substring(0, startIndex + 1);
            }
          }
          if (token = _this3.tokenizer.inlineText(cutSrc)) {
            src = src.substring(token.raw.length);
            if (token.raw.slice(-1) !== '_') {
              // Track prevChar before string of ____ started
              prevChar = token.raw.slice(-1);
            }
            keepPrevChar = true;
            lastToken = tokens[tokens.length - 1];
            if (lastToken && lastToken.type === 'text') {
              lastToken.raw += token.raw;
              lastToken.text += token.text;
            } else {
              tokens.push(token);
            }
            return 0; // continue
          }
          if (src) {
            var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
            if (_this3.options.silent) {
              console.error(errMsg);
              return 1; // break
            } else {
              throw new Error(errMsg);
            }
          }
        },
        _ret2;
      while (src) {
        _ret2 = _loop2();
        if (_ret2 === 0) continue;
        if (_ret2 === 1) break;
      }
      return tokens;
    }
  }], [{
    key: "rules",
    get: function get() {
      return {
        block: block,
        inline: inline
      };
    }
    /**
     * Static Lex Method
     */
  }, {
    key: "lex",
    value: function lex(src, options) {
      var lexer = new _Lexer(options);
      return lexer.lex(src);
    }
    /**
     * Static Lex Inline Method
     */
  }, {
    key: "lexInline",
    value: function lexInline(src, options) {
      var lexer = new _Lexer(options);
      return lexer.inlineTokens(src);
    }
  }]);
}();
/**
 * Renderer
 */
var _Renderer = /*#__PURE__*/function () {
  function _Renderer(options) {
    _classCallCheck(this, _Renderer);
    _defineProperty(this, "options", void 0);
    this.options = options || _defaults;
  }
  return _createClass(_Renderer, [{
    key: "code",
    value: function code(_code, infostring, escaped) {
      var _match;
      var lang = (_match = (infostring || '').match(/^\S*/)) === null || _match === void 0 ? void 0 : _match[0];
      _code = _code.replace(/\n$/, '') + '\n';
      if (!lang) {
        return '<pre><code>' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
      }
      return '<pre><code class="language-' + escape$1(lang) + '">' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
    }
  }, {
    key: "blockquote",
    value: function blockquote(quote) {
      return "<blockquote>\n".concat(quote, "</blockquote>\n");
    }
  }, {
    key: "html",
    value: function html(_html, block) {
      return _html;
    }
  }, {
    key: "heading",
    value: function heading(text, level, raw) {
      // ignore IDs
      return "<h".concat(level, ">").concat(text, "</h").concat(level, ">\n");
    }
  }, {
    key: "hr",
    value: function hr() {
      return '<hr>\n';
    }
  }, {
    key: "list",
    value: function list(body, ordered, start) {
      var type = ordered ? 'ol' : 'ul';
      var startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
      return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
    }
  }, {
    key: "listitem",
    value: function listitem(text, task, checked) {
      return "<li>".concat(text, "</li>\n");
    }
  }, {
    key: "checkbox",
    value: function checkbox(checked) {
      return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox">';
    }
  }, {
    key: "paragraph",
    value: function paragraph(text) {
      return "<p>".concat(text, "</p>\n");
    }
  }, {
    key: "table",
    value: function table(header, body) {
      if (body) body = "<tbody>".concat(body, "</tbody>");
      return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
    }
  }, {
    key: "tablerow",
    value: function tablerow(content) {
      return "<tr>\n".concat(content, "</tr>\n");
    }
  }, {
    key: "tablecell",
    value: function tablecell(content, flags) {
      var type = flags.header ? 'th' : 'td';
      var tag = flags.align ? "<".concat(type, " align=\"").concat(flags.align, "\">") : "<".concat(type, ">");
      return tag + content + "</".concat(type, ">\n");
    }
    /**
     * span level renderer
     */
  }, {
    key: "strong",
    value: function strong(text) {
      return "<strong>".concat(text, "</strong>");
    }
  }, {
    key: "em",
    value: function em(text) {
      return "<em>".concat(text, "</em>");
    }
  }, {
    key: "codespan",
    value: function codespan(text) {
      return "<code>".concat(text, "</code>");
    }
  }, {
    key: "br",
    value: function br() {
      return '<br>';
    }
  }, {
    key: "del",
    value: function del(text) {
      return "<del>".concat(text, "</del>");
    }
  }, {
    key: "link",
    value: function link(href, title, text) {
      var cleanHref = cleanUrl(href);
      if (cleanHref === null) {
        return text;
      }
      href = cleanHref;
      var out = '<a href="' + href + '"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += '>' + text + '</a>';
      return out;
    }
  }, {
    key: "image",
    value: function image(href, title, text) {
      var cleanHref = cleanUrl(href);
      if (cleanHref === null) {
        return text;
      }
      href = cleanHref;
      var out = "<img src=\"".concat(href, "\" alt=\"").concat(text, "\"");
      if (title) {
        out += " title=\"".concat(title, "\"");
      }
      out += '>';
      return out;
    }
  }, {
    key: "text",
    value: function text(_text2) {
      return _text2;
    }
  }]);
}();
/**
 * TextRenderer
 * returns only the textual part of the token
 */
var _TextRenderer = /*#__PURE__*/function () {
  function _TextRenderer() {
    _classCallCheck(this, _TextRenderer);
  }
  return _createClass(_TextRenderer, [{
    key: "strong",
    value:
    // no need for block level renderers
    function strong(text) {
      return text;
    }
  }, {
    key: "em",
    value: function em(text) {
      return text;
    }
  }, {
    key: "codespan",
    value: function codespan(text) {
      return text;
    }
  }, {
    key: "del",
    value: function del(text) {
      return text;
    }
  }, {
    key: "html",
    value: function html(text) {
      return text;
    }
  }, {
    key: "text",
    value: function text(_text3) {
      return _text3;
    }
  }, {
    key: "link",
    value: function link(href, title, text) {
      return '' + text;
    }
  }, {
    key: "image",
    value: function image(href, title, text) {
      return '' + text;
    }
  }, {
    key: "br",
    value: function br() {
      return '';
    }
  }]);
}();
/**
 * Parsing & Compiling
 */
var _Parser = /*#__PURE__*/function () {
  function _Parser(options) {
    _classCallCheck(this, _Parser);
    _defineProperty(this, "options", void 0);
    _defineProperty(this, "renderer", void 0);
    _defineProperty(this, "textRenderer", void 0);
    this.options = options || _defaults;
    this.options.renderer = this.options.renderer || new _Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new _TextRenderer();
  }
  /**
   * Static Parse Method
   */
  return _createClass(_Parser, [{
    key: "parse",
    value:
    /**
     * Parse Loop
     */
    function parse(tokens) {
      var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var out = '';
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        // Run any renderer extensions
        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
          var genericToken = token;
          var ret = this.options.extensions.renderers[genericToken.type].call({
            parser: this
          }, genericToken);
          if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(genericToken.type)) {
            out += ret || '';
            continue;
          }
        }
        switch (token.type) {
          case 'space':
            {
              continue;
            }
          case 'hr':
            {
              out += this.renderer.hr();
              continue;
            }
          case 'heading':
            {
              var headingToken = token;
              out += this.renderer.heading(this.parseInline(headingToken.tokens), headingToken.depth, unescape$1(this.parseInline(headingToken.tokens, this.textRenderer)));
              continue;
            }
          case 'code':
            {
              var codeToken = token;
              out += this.renderer.code(codeToken.text, codeToken.lang, !!codeToken.escaped);
              continue;
            }
          case 'table':
            {
              var tableToken = token;
              var header = '';
              // header
              var cell = '';
              for (var j = 0; j < tableToken.header.length; j++) {
                cell += this.renderer.tablecell(this.parseInline(tableToken.header[j].tokens), {
                  header: true,
                  align: tableToken.align[j]
                });
              }
              header += this.renderer.tablerow(cell);
              var body = '';
              for (var _j = 0; _j < tableToken.rows.length; _j++) {
                var row = tableToken.rows[_j];
                cell = '';
                for (var k = 0; k < row.length; k++) {
                  cell += this.renderer.tablecell(this.parseInline(row[k].tokens), {
                    header: false,
                    align: tableToken.align[k]
                  });
                }
                body += this.renderer.tablerow(cell);
              }
              out += this.renderer.table(header, body);
              continue;
            }
          case 'blockquote':
            {
              var blockquoteToken = token;
              var _body = this.parse(blockquoteToken.tokens);
              out += this.renderer.blockquote(_body);
              continue;
            }
          case 'list':
            {
              var listToken = token;
              var ordered = listToken.ordered;
              var start = listToken.start;
              var loose = listToken.loose;
              var _body2 = '';
              for (var _j2 = 0; _j2 < listToken.items.length; _j2++) {
                var item = listToken.items[_j2];
                var checked = item.checked;
                var task = item.task;
                var itemBody = '';
                if (item.task) {
                  var checkbox = this.renderer.checkbox(!!checked);
                  if (loose) {
                    if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                      item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
                      if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                        item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                      }
                    } else {
                      item.tokens.unshift({
                        type: 'text',
                        text: checkbox + ' '
                      });
                    }
                  } else {
                    itemBody += checkbox + ' ';
                  }
                }
                itemBody += this.parse(item.tokens, loose);
                _body2 += this.renderer.listitem(itemBody, task, !!checked);
              }
              out += this.renderer.list(_body2, ordered, start);
              continue;
            }
          case 'html':
            {
              var htmlToken = token;
              out += this.renderer.html(htmlToken.text, htmlToken.block);
              continue;
            }
          case 'paragraph':
            {
              var paragraphToken = token;
              out += this.renderer.paragraph(this.parseInline(paragraphToken.tokens));
              continue;
            }
          case 'text':
            {
              var textToken = token;
              var _body3 = textToken.tokens ? this.parseInline(textToken.tokens) : textToken.text;
              while (i + 1 < tokens.length && tokens[i + 1].type === 'text') {
                textToken = tokens[++i];
                _body3 += '\n' + (textToken.tokens ? this.parseInline(textToken.tokens) : textToken.text);
              }
              out += top ? this.renderer.paragraph(_body3) : _body3;
              continue;
            }
          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';
              if (this.options.silent) {
                console.error(errMsg);
                return '';
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }
      return out;
    }
    /**
     * Parse Inline Tokens
     */
  }, {
    key: "parseInline",
    value: function parseInline(tokens, renderer) {
      renderer = renderer || this.renderer;
      var out = '';
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        // Run any renderer extensions
        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
          var ret = this.options.extensions.renderers[token.type].call({
            parser: this
          }, token);
          if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
            out += ret || '';
            continue;
          }
        }
        switch (token.type) {
          case 'escape':
            {
              var escapeToken = token;
              out += renderer.text(escapeToken.text);
              break;
            }
          case 'html':
            {
              var tagToken = token;
              out += renderer.html(tagToken.text);
              break;
            }
          case 'link':
            {
              var linkToken = token;
              out += renderer.link(linkToken.href, linkToken.title, this.parseInline(linkToken.tokens, renderer));
              break;
            }
          case 'image':
            {
              var imageToken = token;
              out += renderer.image(imageToken.href, imageToken.title, imageToken.text);
              break;
            }
          case 'strong':
            {
              var strongToken = token;
              out += renderer.strong(this.parseInline(strongToken.tokens, renderer));
              break;
            }
          case 'em':
            {
              var emToken = token;
              out += renderer.em(this.parseInline(emToken.tokens, renderer));
              break;
            }
          case 'codespan':
            {
              var codespanToken = token;
              out += renderer.codespan(codespanToken.text);
              break;
            }
          case 'br':
            {
              out += renderer.br();
              break;
            }
          case 'del':
            {
              var delToken = token;
              out += renderer.del(this.parseInline(delToken.tokens, renderer));
              break;
            }
          case 'text':
            {
              var textToken = token;
              out += renderer.text(textToken.text);
              break;
            }
          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';
              if (this.options.silent) {
                console.error(errMsg);
                return '';
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }
      return out;
    }
  }], [{
    key: "parse",
    value: function parse(tokens, options) {
      var parser = new _Parser(options);
      return parser.parse(tokens);
    }
    /**
     * Static Parse Inline Method
     */
  }, {
    key: "parseInline",
    value: function parseInline(tokens, options) {
      var parser = new _Parser(options);
      return parser.parseInline(tokens);
    }
  }]);
}();
var _Hooks = /*#__PURE__*/function () {
  function _Hooks(options) {
    _classCallCheck(this, _Hooks);
    _defineProperty(this, "options", void 0);
    this.options = options || _defaults;
  }
  return _createClass(_Hooks, [{
    key: "preprocess",
    value:
    /**
     * Process markdown before marked
     */
    function preprocess(markdown) {
      return markdown;
    }
    /**
     * Process HTML after marked is finished
     */
  }, {
    key: "postprocess",
    value: function postprocess(html) {
      return html;
    }
    /**
     * Process all tokens before walk tokens
     */
  }, {
    key: "processAllTokens",
    value: function processAllTokens(tokens) {
      return tokens;
    }
  }]);
}();
_defineProperty(_Hooks, "passThroughHooks", new Set(['preprocess', 'postprocess', 'processAllTokens']));
var _Marked_brand = /*#__PURE__*/new WeakSet();
var Marked = /*#__PURE__*/function () {
  function Marked() {
    _classCallCheck(this, Marked);
    _classPrivateMethodInitSpec(this, _Marked_brand);
    _defineProperty(this, "defaults", _getDefaults());
    _defineProperty(this, "options", this.setOptions);
    _defineProperty(this, "parse", _assertClassBrand(_Marked_brand, this, _parseMarkdown).call(this, _Lexer.lex, _Parser.parse));
    _defineProperty(this, "parseInline", _assertClassBrand(_Marked_brand, this, _parseMarkdown).call(this, _Lexer.lexInline, _Parser.parseInline));
    _defineProperty(this, "Parser", _Parser);
    _defineProperty(this, "Renderer", _Renderer);
    _defineProperty(this, "TextRenderer", _TextRenderer);
    _defineProperty(this, "Lexer", _Lexer);
    _defineProperty(this, "Tokenizer", _Tokenizer);
    _defineProperty(this, "Hooks", _Hooks);
    this.use.apply(this, arguments);
  }
  /**
   * Run callback for every token
   */
  return _createClass(Marked, [{
    key: "walkTokens",
    value: function walkTokens(tokens, callback) {
      var _this4 = this;
      var values = [];
      var _iterator4 = _createForOfIteratorHelper$1(tokens),
        _step4;
      try {
        var _loop3 = function _loop3() {
          var token = _step4.value;
          values = values.concat(callback.call(_this4, token));
          switch (token.type) {
            case 'table':
              {
                var tableToken = token;
                var _iterator5 = _createForOfIteratorHelper$1(tableToken.header),
                  _step5;
                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var cell = _step5.value;
                    values = values.concat(_this4.walkTokens(cell.tokens, callback));
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
                var _iterator6 = _createForOfIteratorHelper$1(tableToken.rows),
                  _step6;
                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var row = _step6.value;
                    var _iterator7 = _createForOfIteratorHelper$1(row),
                      _step7;
                    try {
                      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                        var _cell = _step7.value;
                        values = values.concat(_this4.walkTokens(_cell.tokens, callback));
                      }
                    } catch (err) {
                      _iterator7.e(err);
                    } finally {
                      _iterator7.f();
                    }
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
                break;
              }
            case 'list':
              {
                var listToken = token;
                values = values.concat(_this4.walkTokens(listToken.items, callback));
                break;
              }
            default:
              {
                var _this4$defaults$exten;
                var genericToken = token;
                if ((_this4$defaults$exten = _this4.defaults.extensions) !== null && _this4$defaults$exten !== void 0 && (_this4$defaults$exten = _this4$defaults$exten.childTokens) !== null && _this4$defaults$exten !== void 0 && _this4$defaults$exten[genericToken.type]) {
                  _this4.defaults.extensions.childTokens[genericToken.type].forEach(function (childTokens) {
                    var tokens = genericToken[childTokens].flat(Infinity);
                    values = values.concat(_this4.walkTokens(tokens, callback));
                  });
                } else if (genericToken.tokens) {
                  values = values.concat(_this4.walkTokens(genericToken.tokens, callback));
                }
              }
          }
        };
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          _loop3();
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return values;
    }
  }, {
    key: "use",
    value: function use() {
      var _this5 = this;
      var extensions = this.defaults.extensions || {
        renderers: {},
        childTokens: {}
      };
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      args.forEach(function (pack) {
        // copy options to new object
        var opts = _objectSpread$1({}, pack);
        // set async to true if it was set to true before
        opts.async = _this5.defaults.async || opts.async || false;
        // ==-- Parse "addon" extensions --== //
        if (pack.extensions) {
          pack.extensions.forEach(function (ext) {
            if (!ext.name) {
              throw new Error('extension name required');
            }
            if ('renderer' in ext) {
              // Renderer extensions
              var prevRenderer = extensions.renderers[ext.name];
              if (prevRenderer) {
                // Replace extension with func to run new extension but fall back if false
                extensions.renderers[ext.name] = function () {
                  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                  }
                  var ret = ext.renderer.apply(this, args);
                  if (ret === false) {
                    ret = prevRenderer.apply(this, args);
                  }
                  return ret;
                };
              } else {
                extensions.renderers[ext.name] = ext.renderer;
              }
            }
            if ('tokenizer' in ext) {
              // Tokenizer Extensions
              if (!ext.level || ext.level !== 'block' && ext.level !== 'inline') {
                throw new Error("extension level must be 'block' or 'inline'");
              }
              var extLevel = extensions[ext.level];
              if (extLevel) {
                extLevel.unshift(ext.tokenizer);
              } else {
                extensions[ext.level] = [ext.tokenizer];
              }
              if (ext.start) {
                // Function to check for start of token
                if (ext.level === 'block') {
                  if (extensions.startBlock) {
                    extensions.startBlock.push(ext.start);
                  } else {
                    extensions.startBlock = [ext.start];
                  }
                } else if (ext.level === 'inline') {
                  if (extensions.startInline) {
                    extensions.startInline.push(ext.start);
                  } else {
                    extensions.startInline = [ext.start];
                  }
                }
              }
            }
            if ('childTokens' in ext && ext.childTokens) {
              // Child tokens to be visited by walkTokens
              extensions.childTokens[ext.name] = ext.childTokens;
            }
          });
          opts.extensions = extensions;
        }
        // ==-- Parse "overwrite" extensions --== //
        if (pack.renderer) {
          var renderer = _this5.defaults.renderer || new _Renderer(_this5.defaults);
          var _loop4 = function _loop4() {
            if (!(prop in renderer)) {
              throw new Error("renderer '".concat(prop, "' does not exist"));
            }
            if (prop === 'options') {
              // ignore options property
              return 1; // continue
            }
            var rendererProp = prop;
            var rendererFunc = pack.renderer[rendererProp];
            var prevRenderer = renderer[rendererProp];
            // Replace renderer with func to run extension, but fall back if false
            renderer[rendererProp] = function () {
              for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
              }
              var ret = rendererFunc.apply(renderer, args);
              if (ret === false) {
                ret = prevRenderer.apply(renderer, args);
              }
              return ret || '';
            };
          };
          for (var prop in pack.renderer) {
            if (_loop4()) continue;
          }
          opts.renderer = renderer;
        }
        if (pack.tokenizer) {
          var tokenizer = _this5.defaults.tokenizer || new _Tokenizer(_this5.defaults);
          var _loop5 = function _loop5() {
            if (!(_prop in tokenizer)) {
              throw new Error("tokenizer '".concat(_prop, "' does not exist"));
            }
            if (['options', 'rules', 'lexer'].includes(_prop)) {
              // ignore options, rules, and lexer properties
              return 1; // continue
            }
            var tokenizerProp = _prop;
            var tokenizerFunc = pack.tokenizer[tokenizerProp];
            var prevTokenizer = tokenizer[tokenizerProp];
            // Replace tokenizer with func to run extension, but fall back if false
            // @ts-expect-error cannot type tokenizer function dynamically
            tokenizer[tokenizerProp] = function () {
              for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
              }
              var ret = tokenizerFunc.apply(tokenizer, args);
              if (ret === false) {
                ret = prevTokenizer.apply(tokenizer, args);
              }
              return ret;
            };
          };
          for (var _prop in pack.tokenizer) {
            if (_loop5()) continue;
          }
          opts.tokenizer = tokenizer;
        }
        // ==-- Parse Hooks extensions --== //
        if (pack.hooks) {
          var hooks = _this5.defaults.hooks || new _Hooks();
          var _loop6 = function _loop6() {
            if (!(_prop2 in hooks)) {
              throw new Error("hook '".concat(_prop2, "' does not exist"));
            }
            if (_prop2 === 'options') {
              // ignore options property
              return 1; // continue
            }
            var hooksProp = _prop2;
            var hooksFunc = pack.hooks[hooksProp];
            var prevHook = hooks[hooksProp];
            if (_Hooks.passThroughHooks.has(_prop2)) {
              // @ts-expect-error cannot type hook function dynamically
              hooks[hooksProp] = function (arg) {
                if (_this5.defaults.async) {
                  return Promise.resolve(hooksFunc.call(hooks, arg)).then(function (ret) {
                    return prevHook.call(hooks, ret);
                  });
                }
                var ret = hooksFunc.call(hooks, arg);
                return prevHook.call(hooks, ret);
              };
            } else {
              // @ts-expect-error cannot type hook function dynamically
              hooks[hooksProp] = function () {
                for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                  args[_key5] = arguments[_key5];
                }
                var ret = hooksFunc.apply(hooks, args);
                if (ret === false) {
                  ret = prevHook.apply(hooks, args);
                }
                return ret;
              };
            }
          };
          for (var _prop2 in pack.hooks) {
            if (_loop6()) continue;
          }
          opts.hooks = hooks;
        }
        // ==-- Parse WalkTokens extensions --== //
        if (pack.walkTokens) {
          var _walkTokens = _this5.defaults.walkTokens;
          var packWalktokens = pack.walkTokens;
          opts.walkTokens = function (token) {
            var values = [];
            values.push(packWalktokens.call(this, token));
            if (_walkTokens) {
              values = values.concat(_walkTokens.call(this, token));
            }
            return values;
          };
        }
        _this5.defaults = _objectSpread$1(_objectSpread$1({}, _this5.defaults), opts);
      });
      return this;
    }
  }, {
    key: "setOptions",
    value: function setOptions(opt) {
      this.defaults = _objectSpread$1(_objectSpread$1({}, this.defaults), opt);
      return this;
    }
  }, {
    key: "lexer",
    value: function lexer(src, options) {
      return _Lexer.lex(src, options !== null && options !== void 0 ? options : this.defaults);
    }
  }, {
    key: "parser",
    value: function parser(tokens, options) {
      return _Parser.parse(tokens, options !== null && options !== void 0 ? options : this.defaults);
    }
  }]);
}();
function _parseMarkdown(lexer, parser) {
  var _this6 = this;
  return function (src, options) {
    var origOpt = _objectSpread$1({}, options);
    var opt = _objectSpread$1(_objectSpread$1({}, _this6.defaults), origOpt);
    // Show warning if an extension set async to true but the parse was called with async: false
    if (_this6.defaults.async === true && origOpt.async === false) {
      if (!opt.silent) {
        console.warn('marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored.');
      }
      opt.async = true;
    }
    var throwError = _assertClassBrand(_Marked_brand, _this6, _onError).call(_this6, !!opt.silent, !!opt.async);
    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
      return throwError(new Error('marked(): input parameter is undefined or null'));
    }
    if (typeof src !== 'string') {
      return throwError(new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected'));
    }
    if (opt.hooks) {
      opt.hooks.options = opt;
    }
    if (opt.async) {
      return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then(function (src) {
        return lexer(src, opt);
      }).then(function (tokens) {
        return opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens;
      }).then(function (tokens) {
        return opt.walkTokens ? Promise.all(_this6.walkTokens(tokens, opt.walkTokens)).then(function () {
          return tokens;
        }) : tokens;
      }).then(function (tokens) {
        return parser(tokens, opt);
      }).then(function (html) {
        return opt.hooks ? opt.hooks.postprocess(html) : html;
      })["catch"](throwError);
    }
    try {
      if (opt.hooks) {
        src = opt.hooks.preprocess(src);
      }
      var tokens = lexer(src, opt);
      if (opt.hooks) {
        tokens = opt.hooks.processAllTokens(tokens);
      }
      if (opt.walkTokens) {
        _this6.walkTokens(tokens, opt.walkTokens);
      }
      var _html2 = parser(tokens, opt);
      if (opt.hooks) {
        _html2 = opt.hooks.postprocess(_html2);
      }
      return _html2;
    } catch (e) {
      return throwError(e);
    }
  };
}
function _onError(silent, async) {
  return function (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if (silent) {
      var msg = '<p>An error occurred:</p><pre>' + escape$1(e.message + '', true) + '</pre>';
      if (async) {
        return Promise.resolve(msg);
      }
      return msg;
    }
    if (async) {
      return Promise.reject(e);
    }
    throw e;
  };
}
var markedInstance = new Marked();
function marked(src, opt) {
  return markedInstance.parse(src, opt);
}
/**
 * Sets the default options.
 *
 * @param options Hash of options
 */
marked.options = marked.setOptions = function (options) {
  markedInstance.setOptions(options);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
/**
 * Gets the original marked default options.
 */
marked.getDefaults = _getDefaults;
marked.defaults = _defaults;
/**
 * Use Extension
 */
marked.use = function () {
  markedInstance.use.apply(markedInstance, arguments);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
/**
 * Run callback for every token
 */
marked.walkTokens = function (tokens, callback) {
  return markedInstance.walkTokens(tokens, callback);
};
/**
 * Compiles markdown to HTML without enclosing `p` tag.
 *
 * @param src String of markdown source to be compiled
 * @param options Hash of options
 * @return String of compiled HTML
 */
marked.parseInline = markedInstance.parseInline;
/**
 * Expose
 */
marked.Parser = _Parser;
marked.parser = _Parser.parse;
marked.Renderer = _Renderer;
marked.TextRenderer = _TextRenderer;
marked.Lexer = _Lexer;
marked.lexer = _Lexer.lex;
marked.Tokenizer = _Tokenizer;
marked.Hooks = _Hooks;
marked.parse = marked;
marked.options;
marked.setOptions;
marked.use;
marked.walkTokens;
marked.parseInline;
_Parser.parse;
_Lexer.lex;

var _excluded = ["renderer", "animateLists"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DEFAULT_SLIDE_SEPARATOR = '\r?\n---\r?\n',
  DEFAULT_VERTICAL_SEPARATOR = null,
  DEFAULT_NOTES_SEPARATOR = '^\s*notes?:',
  DEFAULT_ELEMENT_ATTRIBUTES_SEPARATOR = '\\\.element\\\s*?(.+?)$',
  DEFAULT_SLIDE_ATTRIBUTES_SEPARATOR = '\\\.slide:\\\s*?(\\\S.+?)$';
var SCRIPT_END_PLACEHOLDER = '__SCRIPT_END__';

// match an optional line number offset and highlight line numbers
// [<line numbers>] or [<offset>: <line numbers>]
var CODE_LINE_NUMBER_REGEX = /\[\s*((\d*):)?\s*([\s\d,|-]*)\]/;
var HTML_ESCAPE_MAP = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
var Plugin$1 = function Plugin() {
  // The reveal.js instance this plugin is attached to
  var deck;

  /**
   * Retrieves the markdown contents of a slide section
   * element. Normalizes leading tabs/whitespace.
   */
  function getMarkdownFromSlide(section) {
    // look for a <script> or <textarea data-template> wrapper
    var template = section.querySelector('[data-template]') || section.querySelector('script');

    // strip leading whitespace so it isn't evaluated as code
    var text = (template || section).textContent;

    // restore script end tags
    text = text.replace(new RegExp(SCRIPT_END_PLACEHOLDER, 'g'), '</script>');
    var leadingWs = text.match(/^\n?(\s*)/)[1].length,
      leadingTabs = text.match(/^\n?(\t*)/)[1].length;
    if (leadingTabs > 0) {
      text = text.replace(new RegExp('\\n?\\t{' + leadingTabs + '}(.*)', 'g'), function (m, p1) {
        return '\n' + p1;
      });
    } else if (leadingWs > 1) {
      text = text.replace(new RegExp('\\n? {' + leadingWs + '}(.*)', 'g'), function (m, p1) {
        return '\n' + p1;
      });
    }
    return text;
  }

  /**
   * Given a markdown slide section element, this will
   * return all arguments that aren't related to markdown
   * parsing. Used to forward any other user-defined arguments
   * to the output markdown slide.
   */
  function getForwardedAttributes(section) {
    var attributes = section.attributes;
    var result = [];
    for (var i = 0, len = attributes.length; i < len; i++) {
      var name = attributes[i].name,
        value = attributes[i].value;

      // disregard attributes that are used for markdown loading/parsing
      if (/data\-(markdown|separator|vertical|notes)/gi.test(name)) continue;
      if (value) {
        result.push(name + '="' + value + '"');
      } else {
        result.push(name);
      }
    }
    return result.join(' ');
  }

  /**
   * Inspects the given options and fills out default
   * values for what's not defined.
   */
  function getSlidifyOptions(options) {
    var _deck, _deck$getConfig;
    var markdownConfig = (_deck = deck) === null || _deck === void 0 || (_deck$getConfig = _deck.getConfig) === null || _deck$getConfig === void 0 ? void 0 : _deck$getConfig.call(_deck).markdown;
    options = options || {};
    options.separator = options.separator || (markdownConfig === null || markdownConfig === void 0 ? void 0 : markdownConfig.separator) || DEFAULT_SLIDE_SEPARATOR;
    options.verticalSeparator = options.verticalSeparator || (markdownConfig === null || markdownConfig === void 0 ? void 0 : markdownConfig.verticalSeparator) || DEFAULT_VERTICAL_SEPARATOR;
    options.notesSeparator = options.notesSeparator || (markdownConfig === null || markdownConfig === void 0 ? void 0 : markdownConfig.notesSeparator) || DEFAULT_NOTES_SEPARATOR;
    options.attributes = options.attributes || '';
    return options;
  }

  /**
   * Helper function for constructing a markdown slide.
   */
  function createMarkdownSlide(content, options) {
    options = getSlidifyOptions(options);
    var notesMatch = content.split(new RegExp(options.notesSeparator, 'mgi'));
    if (notesMatch.length === 2) {
      content = notesMatch[0] + '<aside class="notes">' + marked(notesMatch[1].trim()) + '</aside>';
    }

    // prevent script end tags in the content from interfering
    // with parsing
    content = content.replace(/<\/script>/g, SCRIPT_END_PLACEHOLDER);
    return '<script type="text/template">' + content + '</script>';
  }

  /**
   * Parses a data string into multiple slides based
   * on the passed in separator arguments.
   */
  function slidify(markdown, options) {
    options = getSlidifyOptions(options);
    var separatorRegex = new RegExp(options.separator + (options.verticalSeparator ? '|' + options.verticalSeparator : ''), 'mg'),
      horizontalSeparatorRegex = new RegExp(options.separator);
    var matches,
      lastIndex = 0,
      isHorizontal,
      wasHorizontal = true,
      content,
      sectionStack = [];

    // iterate until all blocks between separators are stacked up
    while (matches = separatorRegex.exec(markdown)) {

      // determine direction (horizontal by default)
      isHorizontal = horizontalSeparatorRegex.test(matches[0]);
      if (!isHorizontal && wasHorizontal) {
        // create vertical stack
        sectionStack.push([]);
      }

      // pluck slide content from markdown input
      content = markdown.substring(lastIndex, matches.index);
      if (isHorizontal && wasHorizontal) {
        // add to horizontal stack
        sectionStack.push(content);
      } else {
        // add to vertical stack
        sectionStack[sectionStack.length - 1].push(content);
      }
      lastIndex = separatorRegex.lastIndex;
      wasHorizontal = isHorizontal;
    }

    // add the remaining slide
    (wasHorizontal ? sectionStack : sectionStack[sectionStack.length - 1]).push(markdown.substring(lastIndex));
    var markdownSections = '';

    // flatten the hierarchical stack, and insert <section data-markdown> tags
    for (var i = 0, len = sectionStack.length; i < len; i++) {
      // vertical
      if (sectionStack[i] instanceof Array) {
        markdownSections += '<section ' + options.attributes + '>';
        sectionStack[i].forEach(function (child) {
          markdownSections += '<section data-markdown>' + createMarkdownSlide(child, options) + '</section>';
        });
        markdownSections += '</section>';
      } else {
        markdownSections += '<section ' + options.attributes + ' data-markdown>' + createMarkdownSlide(sectionStack[i], options) + '</section>';
      }
    }
    return markdownSections;
  }

  /**
   * Parses any current data-markdown slides, splits
   * multi-slide markdown into separate sections and
   * handles loading of external markdown.
   */
  function processSlides(scope) {
    return new Promise(function (resolve) {
      var externalPromises = [];
      [].slice.call(scope.querySelectorAll('section[data-markdown]:not([data-markdown-parsed])')).forEach(function (section, i) {
        if (section.getAttribute('data-markdown').length) {
          externalPromises.push(loadExternalMarkdown(section).then(
          // Finished loading external file
          function (xhr, url) {
            section.outerHTML = slidify(xhr.responseText, {
              separator: section.getAttribute('data-separator'),
              verticalSeparator: section.getAttribute('data-separator-vertical'),
              notesSeparator: section.getAttribute('data-separator-notes'),
              attributes: getForwardedAttributes(section)
            });
          },
          // Failed to load markdown
          function (xhr, url) {
            section.outerHTML = '<section data-state="alert">' + 'ERROR: The attempt to fetch ' + url + ' failed with HTTP status ' + xhr.status + '.' + 'Check your browser\'s JavaScript console for more details.' + '<p>Remember that you need to serve the presentation HTML from a HTTP server.</p>' + '</section>';
          }));
        } else {
          section.outerHTML = slidify(getMarkdownFromSlide(section), {
            separator: section.getAttribute('data-separator'),
            verticalSeparator: section.getAttribute('data-separator-vertical'),
            notesSeparator: section.getAttribute('data-separator-notes'),
            attributes: getForwardedAttributes(section)
          });
        }
      });
      Promise.all(externalPromises).then(resolve);
    });
  }
  function loadExternalMarkdown(section) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest(),
        url = section.getAttribute('data-markdown');
      var datacharset = section.getAttribute('data-charset');

      // see https://developer.mozilla.org/en-US/docs/Web/API/element.getAttribute#Notes
      if (datacharset !== null && datacharset !== '') {
        xhr.overrideMimeType('text/html; charset=' + datacharset);
      }
      xhr.onreadystatechange = function (section, xhr) {
        if (xhr.readyState === 4) {
          // file protocol yields status code 0 (useful for local debug, mobile applications etc.)
          if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 0) {
            resolve(xhr, url);
          } else {
            reject(xhr, url);
          }
        }
      }.bind(this, section, xhr);
      xhr.open('GET', url, true);
      try {
        xhr.send();
      } catch (e) {
        console.warn('Failed to get the Markdown file ' + url + '. Make sure that the presentation and the file are served by a HTTP server and the file can be found there. ' + e);
        resolve(xhr, url);
      }
    });
  }

  /**
   * Check if a node value has the attributes pattern.
   * If yes, extract it and add that value as one or several attributes
   * to the target element.
   *
   * You need Cache Killer on Chrome to see the effect on any FOM transformation
   * directly on refresh (F5)
   * http://stackoverflow.com/questions/5690269/disabling-chrome-cache-for-website-development/7000899#answer-11786277
   */
  function addAttributeInElement(node, elementTarget, separator) {
    var markdownClassesInElementsRegex = new RegExp(separator, 'mg');
    var markdownClassRegex = new RegExp("([^\"= ]+?)=\"([^\"]+?)\"|(data-[^\"= ]+?)(?=[\" ])", 'mg');
    var nodeValue = node.nodeValue;
    var matches, matchesClass;
    if (matches = markdownClassesInElementsRegex.exec(nodeValue)) {
      var classes = matches[1];
      nodeValue = nodeValue.substring(0, matches.index) + nodeValue.substring(markdownClassesInElementsRegex.lastIndex);
      node.nodeValue = nodeValue;
      while (matchesClass = markdownClassRegex.exec(classes)) {
        if (matchesClass[2]) {
          elementTarget.setAttribute(matchesClass[1], matchesClass[2]);
        } else {
          elementTarget.setAttribute(matchesClass[3], "");
        }
      }
      return true;
    }
    return false;
  }

  /**
   * Add attributes to the parent element of a text node,
   * or the element of an attribute node.
   */
  function addAttributes(section, element, previousElement, separatorElementAttributes, separatorSectionAttributes) {
    if (element !== null && element.childNodes !== undefined && element.childNodes.length > 0) {
      var previousParentElement = element;
      for (var i = 0; i < element.childNodes.length; i++) {
        var childElement = element.childNodes[i];
        if (i > 0) {
          var j = i - 1;
          while (j >= 0) {
            var aPreviousChildElement = element.childNodes[j];
            if (typeof aPreviousChildElement.setAttribute === 'function' && aPreviousChildElement.tagName !== "BR") {
              previousParentElement = aPreviousChildElement;
              break;
            }
            j = j - 1;
          }
        }
        var parentSection = section;
        if (childElement.nodeName === "section") {
          parentSection = childElement;
          previousParentElement = childElement;
        }
        if (typeof childElement.setAttribute === 'function' || childElement.nodeType === Node.COMMENT_NODE) {
          addAttributes(parentSection, childElement, previousParentElement, separatorElementAttributes, separatorSectionAttributes);
        }
      }
    }
    if (element.nodeType === Node.COMMENT_NODE) {
      if (addAttributeInElement(element, previousElement, separatorElementAttributes) === false) {
        addAttributeInElement(element, section, separatorSectionAttributes);
      }
    }
  }

  /**
   * Converts any current data-markdown slides in the
   * DOM to HTML.
   */
  function convertSlides() {
    var sections = deck.getRevealElement().querySelectorAll('[data-markdown]:not([data-markdown-parsed])');
    [].slice.call(sections).forEach(function (section) {
      section.setAttribute('data-markdown-parsed', true);
      var notes = section.querySelector('aside.notes');
      var markdown = getMarkdownFromSlide(section);
      section.innerHTML = marked(markdown);
      addAttributes(section, section, null, section.getAttribute('data-element-attributes') || section.parentNode.getAttribute('data-element-attributes') || DEFAULT_ELEMENT_ATTRIBUTES_SEPARATOR, section.getAttribute('data-attributes') || section.parentNode.getAttribute('data-attributes') || DEFAULT_SLIDE_ATTRIBUTES_SEPARATOR);

      // If there were notes, we need to re-add them after
      // having overwritten the section's HTML
      if (notes) {
        section.appendChild(notes);
      }
    });
    return Promise.resolve();
  }
  function escapeForHTML(input) {
    return input.replace(/([&<>'"])/g, function (_char) {
      return HTML_ESCAPE_MAP[_char];
    });
  }
  return {
    id: 'markdown',
    /**
     * Starts processing and converting Markdown within the
     * current reveal.js deck.
     */
    init: function init(reveal) {
      deck = reveal;
      var _ref = deck.getConfig().markdown || {},
        renderer = _ref.renderer,
        animateLists = _ref.animateLists,
        markedOptions = _objectWithoutProperties(_ref, _excluded);
      if (!renderer) {
        renderer = new marked.Renderer();
        renderer.code = function (code, language) {
          // Off by default
          var lineNumberOffset = '';
          var lineNumbers = '';

          // Users can opt in to show line numbers and highlight
          // specific lines.
          // ```javascript []        show line numbers
          // ```javascript [1,4-8]   highlights lines 1 and 4-8
          // optional line number offset:
          // ```javascript [25: 1,4-8]   start line numbering at 25,
          //                             highlights lines 1 (numbered as 25) and 4-8 (numbered as 28-32)
          if (CODE_LINE_NUMBER_REGEX.test(language)) {
            var lineNumberOffsetMatch = language.match(CODE_LINE_NUMBER_REGEX)[2];
            if (lineNumberOffsetMatch) {
              lineNumberOffset = "data-ln-start-from=\"".concat(lineNumberOffsetMatch.trim(), "\"");
            }
            lineNumbers = language.match(CODE_LINE_NUMBER_REGEX)[3].trim();
            lineNumbers = "data-line-numbers=\"".concat(lineNumbers, "\"");
            language = language.replace(CODE_LINE_NUMBER_REGEX, '').trim();
          }

          // Escape before this gets injected into the DOM to
          // avoid having the HTML parser alter our code before
          // highlight.js is able to read it
          code = escapeForHTML(code);

          // return `<pre><code ${lineNumbers} class="${language}">${code}</code></pre>`;

          return "<pre><code ".concat(lineNumbers, " ").concat(lineNumberOffset, " class=\"").concat(language, "\">").concat(code, "</code></pre>");
        };
      }
      if (animateLists === true) {
        renderer.listitem = function (text) {
          return "<li class=\"fragment\">".concat(text, "</li>");
        };
      }
      marked.setOptions(_objectSpread({
        renderer: renderer
      }, markedOptions));
      return processSlides(deck.getRevealElement()).then(convertSlides);
    },
    // TODO: Do these belong in the API?
    processSlides: processSlides,
    convertSlides: convertSlides,
    slidify: slidify,
    marked: marked
  };
};

var speakerViewHTML = "<!--\n\tNOTE: You need to build the notes plugin after making changes to this file.\n-->\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\">\n\n\t\t<title>reveal.js - Speaker View</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\tfont-family: Helvetica;\n\t\t\t\tfont-size: 18px;\n\t\t\t}\n\n\t\t\t#current-slide,\n\t\t\t#upcoming-slide,\n\t\t\t#speaker-controls {\n\t\t\t\tpadding: 6px;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\t-moz-box-sizing: border-box;\n\t\t\t}\n\n\t\t\t#current-slide iframe,\n\t\t\t#upcoming-slide iframe {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tborder: 1px solid #ddd;\n\t\t\t}\n\n\t\t\t#current-slide .label,\n\t\t\t#upcoming-slide .label {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 10px;\n\t\t\t\tleft: 10px;\n\t\t\t\tz-index: 2;\n\t\t\t}\n\n\t\t\t#connection-status {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tz-index: 20;\n\t\t\t\tpadding: 30% 20% 20% 20%;\n\t\t\t\tfont-size: 18px;\n\t\t\t\tcolor: #222;\n\t\t\t\tbackground: #fff;\n\t\t\t\ttext-align: center;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tline-height: 1.4;\n\t\t\t}\n\n\t\t\t.overlay-element {\n\t\t\t\theight: 34px;\n\t\t\t\tline-height: 34px;\n\t\t\t\tpadding: 0 10px;\n\t\t\t\ttext-shadow: none;\n\t\t\t\tbackground: rgba( 220, 220, 220, 0.8 );\n\t\t\t\tcolor: #222;\n\t\t\t\tfont-size: 14px;\n\t\t\t}\n\n\t\t\t.overlay-element.interactive:hover {\n\t\t\t\tbackground: rgba( 220, 220, 220, 1 );\n\t\t\t}\n\n\t\t\t#current-slide {\n\t\t\t\tposition: absolute;\n\t\t\t\twidth: 60%;\n\t\t\t\theight: 100%;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\tpadding-right: 0;\n\t\t\t}\n\n\t\t\t#upcoming-slide {\n\t\t\t\tposition: absolute;\n\t\t\t\twidth: 40%;\n\t\t\t\theight: 40%;\n\t\t\t\tright: 0;\n\t\t\t\ttop: 0;\n\t\t\t}\n\n\t\t\t/* Speaker controls */\n\t\t\t#speaker-controls {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 40%;\n\t\t\t\tright: 0;\n\t\t\t\twidth: 40%;\n\t\t\t\theight: 60%;\n\t\t\t\toverflow: auto;\n\t\t\t\tfont-size: 18px;\n\t\t\t}\n\n\t\t\t\t.speaker-controls-time.hidden,\n\t\t\t\t.speaker-controls-notes.hidden {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .label,\n\t\t\t\t.speaker-controls-pace .label,\n\t\t\t\t.speaker-controls-notes .label {\n\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t\tfont-weight: normal;\n\t\t\t\t\tfont-size: 0.66em;\n\t\t\t\t\tcolor: #666;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time, .speaker-controls-pace {\n\t\t\t\t\tborder-bottom: 1px solid rgba( 200, 200, 200, 0.5 );\n\t\t\t\t\tmargin-bottom: 10px;\n\t\t\t\t\tpadding: 10px 16px;\n\t\t\t\t\tpadding-bottom: 20px;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .reset-button {\n\t\t\t\t\topacity: 0;\n\t\t\t\t\tfloat: right;\n\t\t\t\t\tcolor: #666;\n\t\t\t\t\ttext-decoration: none;\n\t\t\t\t}\n\t\t\t\t.speaker-controls-time:hover .reset-button {\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .timer,\n\t\t\t\t.speaker-controls-time .clock {\n\t\t\t\t\twidth: 50%;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .timer,\n\t\t\t\t.speaker-controls-time .clock,\n\t\t\t\t.speaker-controls-time .pacing .hours-value,\n\t\t\t\t.speaker-controls-time .pacing .minutes-value,\n\t\t\t\t.speaker-controls-time .pacing .seconds-value {\n\t\t\t\t\tfont-size: 1.9em;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .timer {\n\t\t\t\t\tfloat: left;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .clock {\n\t\t\t\t\tfloat: right;\n\t\t\t\t\ttext-align: right;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time span.mute {\n\t\t\t\t\topacity: 0.3;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .pacing-title {\n\t\t\t\t\tmargin-top: 5px;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .pacing.ahead {\n\t\t\t\t\tcolor: blue;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .pacing.on-track {\n\t\t\t\t\tcolor: green;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .pacing.behind {\n\t\t\t\t\tcolor: red;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-notes {\n\t\t\t\t\tpadding: 10px 16px;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-notes .value {\n\t\t\t\t\tmargin-top: 5px;\n\t\t\t\t\tline-height: 1.4;\n\t\t\t\t\tfont-size: 1.2em;\n\t\t\t\t}\n\n\t\t\t/* Layout selector */\n\t\t\t#speaker-layout {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 10px;\n\t\t\t\tright: 10px;\n\t\t\t\tcolor: #222;\n\t\t\t\tz-index: 10;\n\t\t\t}\n\t\t\t\t#speaker-layout select {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\tborder: 0;\n\t\t\t\t\tbox-shadow: 0;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\topacity: 0;\n\n\t\t\t\t\tfont-size: 1em;\n\t\t\t\t\tbackground-color: transparent;\n\n\t\t\t\t\t-moz-appearance: none;\n\t\t\t\t\t-webkit-appearance: none;\n\t\t\t\t\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\t\t\t\t}\n\n\t\t\t\t#speaker-layout select:focus {\n\t\t\t\t\toutline: none;\n\t\t\t\t\tbox-shadow: none;\n\t\t\t\t}\n\n\t\t\t.clear {\n\t\t\t\tclear: both;\n\t\t\t}\n\n\t\t\t/* Speaker layout: Wide */\n\t\t\tbody[data-speaker-layout=\"wide\"] #current-slide,\n\t\t\tbody[data-speaker-layout=\"wide\"] #upcoming-slide {\n\t\t\t\twidth: 50%;\n\t\t\t\theight: 45%;\n\t\t\t\tpadding: 6px;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"wide\"] #current-slide {\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"wide\"] #upcoming-slide {\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 50%;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"wide\"] #speaker-controls {\n\t\t\t\ttop: 45%;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 50%;\n\t\t\t\tfont-size: 1.25em;\n\t\t\t}\n\n\t\t\t/* Speaker layout: Tall */\n\t\t\tbody[data-speaker-layout=\"tall\"] #current-slide,\n\t\t\tbody[data-speaker-layout=\"tall\"] #upcoming-slide {\n\t\t\t\twidth: 45%;\n\t\t\t\theight: 50%;\n\t\t\t\tpadding: 6px;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"tall\"] #current-slide {\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"tall\"] #upcoming-slide {\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 0;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"tall\"] #speaker-controls {\n\t\t\t\tpadding-top: 40px;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 45%;\n\t\t\t\twidth: 55%;\n\t\t\t\theight: 100%;\n\t\t\t\tfont-size: 1.25em;\n\t\t\t}\n\n\t\t\t/* Speaker layout: Notes only */\n\t\t\tbody[data-speaker-layout=\"notes-only\"] #current-slide,\n\t\t\tbody[data-speaker-layout=\"notes-only\"] #upcoming-slide {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"notes-only\"] #speaker-controls {\n\t\t\t\tpadding-top: 40px;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tfont-size: 1.25em;\n\t\t\t}\n\n\t\t\t@media screen and (max-width: 1080px) {\n\t\t\t\tbody[data-speaker-layout=\"default\"] #speaker-controls {\n\t\t\t\t\tfont-size: 16px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media screen and (max-width: 900px) {\n\t\t\t\tbody[data-speaker-layout=\"default\"] #speaker-controls {\n\t\t\t\t\tfont-size: 14px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media screen and (max-width: 800px) {\n\t\t\t\tbody[data-speaker-layout=\"default\"] #speaker-controls {\n\t\t\t\t\tfont-size: 12px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t</style>\n\t</head>\n\n\t<body>\n\n\t\t<div id=\"connection-status\">Loading speaker view...</div>\n\n\t\t<div id=\"current-slide\"></div>\n\t\t<div id=\"upcoming-slide\"><span class=\"overlay-element label\">Upcoming</span></div>\n\t\t<div id=\"speaker-controls\">\n\t\t\t<div class=\"speaker-controls-time\">\n\t\t\t\t<h4 class=\"label\">Time <span class=\"reset-button\">Click to Reset</span></h4>\n\t\t\t\t<div class=\"clock\">\n\t\t\t\t\t<span class=\"clock-value\">0:00 AM</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"timer\">\n\t\t\t\t\t<span class=\"hours-value\">00</span><span class=\"minutes-value\">:00</span><span class=\"seconds-value\">:00</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clear\"></div>\n\n\t\t\t\t<h4 class=\"label pacing-title\" style=\"display: none\">Pacing – Time to finish current slide</h4>\n\t\t\t\t<div class=\"pacing\" style=\"display: none\">\n\t\t\t\t\t<span class=\"hours-value\">00</span><span class=\"minutes-value\">:00</span><span class=\"seconds-value\">:00</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"speaker-controls-notes hidden\">\n\t\t\t\t<h4 class=\"label\">Notes</h4>\n\t\t\t\t<div class=\"value\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id=\"speaker-layout\" class=\"overlay-element interactive\">\n\t\t\t<span class=\"speaker-layout-label\"></span>\n\t\t\t<select class=\"speaker-layout-dropdown\"></select>\n\t\t</div>\n\n\t\t<script>\n\n\t\t\t(function() {\n\n\t\t\t\tvar notes,\n\t\t\t\t\tnotesValue,\n\t\t\t\t\tcurrentState,\n\t\t\t\t\tcurrentSlide,\n\t\t\t\t\tupcomingSlide,\n\t\t\t\t\tlayoutLabel,\n\t\t\t\t\tlayoutDropdown,\n\t\t\t\t\tpendingCalls = {},\n\t\t\t\t\tlastRevealApiCallId = 0,\n\t\t\t\t\tconnected = false\n\n\t\t\t\tvar connectionStatus = document.querySelector( '#connection-status' );\n\n\t\t\t\tvar SPEAKER_LAYOUTS = {\n\t\t\t\t\t'default': 'Default',\n\t\t\t\t\t'wide': 'Wide',\n\t\t\t\t\t'tall': 'Tall',\n\t\t\t\t\t'notes-only': 'Notes only'\n\t\t\t\t};\n\n\t\t\t\tsetupLayout();\n\n\t\t\t\tlet openerOrigin;\n\n\t\t\t\ttry {\n\t\t\t\t\topenerOrigin = window.opener.location.origin;\n\t\t\t\t}\n\t\t\t\tcatch ( error ) { console.warn( error ) }\n\n\t\t\t\t// In order to prevent XSS, the speaker view will only run if its\n\t\t\t\t// opener has the same origin as itself\n\t\t\t\tif( window.location.origin !== openerOrigin ) {\n\t\t\t\t\tconnectionStatus.innerHTML = 'Cross origin error.<br>The speaker window can only be opened from the same origin.';\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tvar connectionTimeout = setTimeout( function() {\n\t\t\t\t\tconnectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';\n\t\t\t\t}, 5000 );\n\n\t\t\t\twindow.addEventListener( 'message', function( event ) {\n\n\t\t\t\t\t// Validate the origin of all messages to avoid parsing messages\n\t\t\t\t\t// that aren't meant for us. Ignore when running off file:// so\n\t\t\t\t\t// that the speaker view continues to work without a web server.\n\t\t\t\t\tif( window.location.origin !== event.origin && window.location.origin !== 'file://' ) {\n\t\t\t\t\t\treturn\n\t\t\t\t\t}\n\n\t\t\t\t\tclearTimeout( connectionTimeout );\n\t\t\t\t\tconnectionStatus.style.display = 'none';\n\n\t\t\t\t\tvar data = JSON.parse( event.data );\n\n\t\t\t\t\t// The overview mode is only useful to the reveal.js instance\n\t\t\t\t\t// where navigation occurs so we don't sync it\n\t\t\t\t\tif( data.state ) delete data.state.overview;\n\n\t\t\t\t\t// Messages sent by the notes plugin inside of the main window\n\t\t\t\t\tif( data && data.namespace === 'reveal-notes' ) {\n\t\t\t\t\t\tif( data.type === 'connect' ) {\n\t\t\t\t\t\t\thandleConnectMessage( data );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse if( data.type === 'state' ) {\n\t\t\t\t\t\t\thandleStateMessage( data );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse if( data.type === 'return' ) {\n\t\t\t\t\t\t\tpendingCalls[data.callId](data.result);\n\t\t\t\t\t\t\tdelete pendingCalls[data.callId];\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t// Messages sent by the reveal.js inside of the current slide preview\n\t\t\t\t\telse if( data && data.namespace === 'reveal' ) {\n\t\t\t\t\t\tif( /ready/.test( data.eventName ) ) {\n\t\t\t\t\t\t\t// Send a message back to notify that the handshake is complete\n\t\t\t\t\t\t\twindow.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse if( /slidechanged|fragmentshown|fragmenthidden|paused|resumed/.test( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {\n\n\t\t\t\t\t\t\tdispatchStateToMainWindow( data.state );\n\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t} );\n\n\t\t\t\t/**\n\t\t\t\t * Updates the presentation in the main window to match the state\n\t\t\t\t * of the presentation in the notes window.\n\t\t\t\t */\n\t\t\t\tconst dispatchStateToMainWindow = debounce(( state ) => {\n\t\t\t\t\twindow.opener.postMessage( JSON.stringify({ method: 'setState', args: [ state ]} ), '*' );\n\t\t\t\t}, 500);\n\n\t\t\t\t/**\n\t\t\t\t * Asynchronously calls the Reveal.js API of the main frame.\n\t\t\t\t */\n\t\t\t\tfunction callRevealApi( methodName, methodArguments, callback ) {\n\n\t\t\t\t\tvar callId = ++lastRevealApiCallId;\n\t\t\t\t\tpendingCalls[callId] = callback;\n\t\t\t\t\twindow.opener.postMessage( JSON.stringify( {\n\t\t\t\t\t\tnamespace: 'reveal-notes',\n\t\t\t\t\t\ttype: 'call',\n\t\t\t\t\t\tcallId: callId,\n\t\t\t\t\t\tmethodName: methodName,\n\t\t\t\t\t\targuments: methodArguments\n\t\t\t\t\t} ), '*' );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Called when the main window is trying to establish a\n\t\t\t\t * connection.\n\t\t\t\t */\n\t\t\t\tfunction handleConnectMessage( data ) {\n\n\t\t\t\t\tif( connected === false ) {\n\t\t\t\t\t\tconnected = true;\n\n\t\t\t\t\t\tsetupIframes( data );\n\t\t\t\t\t\tsetupKeyboard();\n\t\t\t\t\t\tsetupNotes();\n\t\t\t\t\t\tsetupTimer();\n\t\t\t\t\t\tsetupHeartbeat();\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Called when the main window sends an updated state.\n\t\t\t\t */\n\t\t\t\tfunction handleStateMessage( data ) {\n\n\t\t\t\t\t// Store the most recently set state to avoid circular loops\n\t\t\t\t\t// applying the same state\n\t\t\t\t\tcurrentState = JSON.stringify( data.state );\n\n\t\t\t\t\t// No need for updating the notes in case of fragment changes\n\t\t\t\t\tif ( data.notes ) {\n\t\t\t\t\t\tnotes.classList.remove( 'hidden' );\n\t\t\t\t\t\tnotesValue.style.whiteSpace = data.whitespace;\n\t\t\t\t\t\tif( data.markdown ) {\n\t\t\t\t\t\t\tnotesValue.innerHTML = marked( data.notes );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\tnotesValue.innerHTML = data.notes;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\telse {\n\t\t\t\t\t\tnotes.classList.add( 'hidden' );\n\t\t\t\t\t}\n\n\t\t\t\t\t// Update the note slides\n\t\t\t\t\tcurrentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );\n\t\t\t\t\tupcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );\n\t\t\t\t\tupcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );\n\n\t\t\t\t}\n\n\t\t\t\t// Limit to max one state update per X ms\n\t\t\t\thandleStateMessage = debounce( handleStateMessage, 200 );\n\n\t\t\t\t/**\n\t\t\t\t * Forward keyboard events to the current slide window.\n\t\t\t\t * This enables keyboard events to work even if focus\n\t\t\t\t * isn't set on the current slide iframe.\n\t\t\t\t *\n\t\t\t\t * Block F5 default handling, it reloads and disconnects\n\t\t\t\t * the speaker notes window.\n\t\t\t\t */\n\t\t\t\tfunction setupKeyboard() {\n\n\t\t\t\t\tdocument.addEventListener( 'keydown', function( event ) {\n\t\t\t\t\t\tif( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {\n\t\t\t\t\t\t\tevent.preventDefault();\n\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcurrentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );\n\t\t\t\t\t} );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Creates the preview iframes.\n\t\t\t\t */\n\t\t\t\tfunction setupIframes( data ) {\n\n\t\t\t\t\tvar params = [\n\t\t\t\t\t\t'receiver',\n\t\t\t\t\t\t'progress=false',\n\t\t\t\t\t\t'history=false',\n\t\t\t\t\t\t'transition=none',\n\t\t\t\t\t\t'autoSlide=0',\n\t\t\t\t\t\t'backgroundTransition=none'\n\t\t\t\t\t].join( '&' );\n\n\t\t\t\t\tvar urlSeparator = /\\?/.test(data.url) ? '&' : '?';\n\t\t\t\t\tvar hash = '#/' + data.state.indexh + '/' + data.state.indexv;\n\t\t\t\t\tvar currentURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&postMessageEvents=true' + hash;\n\t\t\t\t\tvar upcomingURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&controls=false' + hash;\n\n\t\t\t\t\tcurrentSlide = document.createElement( 'iframe' );\n\t\t\t\t\tcurrentSlide.setAttribute( 'width', 1280 );\n\t\t\t\t\tcurrentSlide.setAttribute( 'height', 1024 );\n\t\t\t\t\tcurrentSlide.setAttribute( 'src', currentURL );\n\t\t\t\t\tdocument.querySelector( '#current-slide' ).appendChild( currentSlide );\n\n\t\t\t\t\tupcomingSlide = document.createElement( 'iframe' );\n\t\t\t\t\tupcomingSlide.setAttribute( 'width', 640 );\n\t\t\t\t\tupcomingSlide.setAttribute( 'height', 512 );\n\t\t\t\t\tupcomingSlide.setAttribute( 'src', upcomingURL );\n\t\t\t\t\tdocument.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Setup the notes UI.\n\t\t\t\t */\n\t\t\t\tfunction setupNotes() {\n\n\t\t\t\t\tnotes = document.querySelector( '.speaker-controls-notes' );\n\t\t\t\t\tnotesValue = document.querySelector( '.speaker-controls-notes .value' );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * We send out a heartbeat at all times to ensure we can\n\t\t\t\t * reconnect with the main presentation window after reloads.\n\t\t\t\t */\n\t\t\t\tfunction setupHeartbeat() {\n\n\t\t\t\t\tsetInterval( () => {\n\t\t\t\t\t\twindow.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );\n\t\t\t\t\t}, 1000 );\n\n\t\t\t\t}\n\n\t\t\t\tfunction getTimings( callback ) {\n\n\t\t\t\t\tcallRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {\n\t\t\t\t\t\tcallRevealApi( 'getConfig', [], function ( config ) {\n\t\t\t\t\t\t\tvar totalTime = config.totalTime;\n\t\t\t\t\t\t\tvar minTimePerSlide = config.minimumTimePerSlide || 0;\n\t\t\t\t\t\t\tvar defaultTiming = config.defaultTiming;\n\t\t\t\t\t\t\tif ((defaultTiming == null) && (totalTime == null)) {\n\t\t\t\t\t\t\t\tcallback(null);\n\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t// Setting totalTime overrides defaultTiming\n\t\t\t\t\t\t\tif (totalTime) {\n\t\t\t\t\t\t\t\tdefaultTiming = 0;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tvar timings = [];\n\t\t\t\t\t\t\tfor ( var i in slideAttributes ) {\n\t\t\t\t\t\t\t\tvar slide = slideAttributes[ i ];\n\t\t\t\t\t\t\t\tvar timing = defaultTiming;\n\t\t\t\t\t\t\t\tif( slide.hasOwnProperty( 'data-timing' )) {\n\t\t\t\t\t\t\t\t\tvar t = slide[ 'data-timing' ];\n\t\t\t\t\t\t\t\t\ttiming = parseInt(t);\n\t\t\t\t\t\t\t\t\tif( isNaN(timing) ) {\n\t\t\t\t\t\t\t\t\t\tconsole.warn(\"Could not parse timing '\" + t + \"' of slide \" + i + \"; using default of \" + defaultTiming);\n\t\t\t\t\t\t\t\t\t\ttiming = defaultTiming;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\ttimings.push(timing);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tif ( totalTime ) {\n\t\t\t\t\t\t\t\t// After we've allocated time to individual slides, we summarize it and\n\t\t\t\t\t\t\t\t// subtract it from the total time\n\t\t\t\t\t\t\t\tvar remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );\n\t\t\t\t\t\t\t\t// The remaining time is divided by the number of slides that have 0 seconds\n\t\t\t\t\t\t\t\t// allocated at the moment, giving the average time-per-slide on the remaining slides\n\t\t\t\t\t\t\t\tvar remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length\n\t\t\t\t\t\t\t\tvar timePerSlide = Math.round( remainingTime / remainingSlides, 0 )\n\t\t\t\t\t\t\t\t// And now we replace every zero-value timing with that average\n\t\t\t\t\t\t\t\ttimings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tvar slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length\n\t\t\t\t\t\t\tif ( slidesUnderMinimum ) {\n\t\t\t\t\t\t\t\tmessage = \"The pacing time for \" + slidesUnderMinimum + \" slide(s) is under the configured minimum of \" + minTimePerSlide + \" seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).\";\n\t\t\t\t\t\t\t\talert(message);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tcallback( timings );\n\t\t\t\t\t\t} );\n\t\t\t\t\t} );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Return the number of seconds allocated for presenting\n\t\t\t\t * all slides up to and including this one.\n\t\t\t\t */\n\t\t\t\tfunction getTimeAllocated( timings, callback ) {\n\n\t\t\t\t\tcallRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {\n\t\t\t\t\t\tvar allocated = 0;\n\t\t\t\t\t\tfor (var i in timings.slice(0, currentSlide + 1)) {\n\t\t\t\t\t\t\tallocated += timings[i];\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcallback( allocated );\n\t\t\t\t\t} );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Create the timer and clock and start updating them\n\t\t\t\t * at an interval.\n\t\t\t\t */\n\t\t\t\tfunction setupTimer() {\n\n\t\t\t\t\tvar start = new Date(),\n\t\t\t\t\ttimeEl = document.querySelector( '.speaker-controls-time' ),\n\t\t\t\t\tclockEl = timeEl.querySelector( '.clock-value' ),\n\t\t\t\t\thoursEl = timeEl.querySelector( '.hours-value' ),\n\t\t\t\t\tminutesEl = timeEl.querySelector( '.minutes-value' ),\n\t\t\t\t\tsecondsEl = timeEl.querySelector( '.seconds-value' ),\n\t\t\t\t\tpacingTitleEl = timeEl.querySelector( '.pacing-title' ),\n\t\t\t\t\tpacingEl = timeEl.querySelector( '.pacing' ),\n\t\t\t\t\tpacingHoursEl = pacingEl.querySelector( '.hours-value' ),\n\t\t\t\t\tpacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),\n\t\t\t\t\tpacingSecondsEl = pacingEl.querySelector( '.seconds-value' );\n\n\t\t\t\t\tvar timings = null;\n\t\t\t\t\tgetTimings( function ( _timings ) {\n\n\t\t\t\t\t\ttimings = _timings;\n\t\t\t\t\t\tif (_timings !== null) {\n\t\t\t\t\t\t\tpacingTitleEl.style.removeProperty('display');\n\t\t\t\t\t\t\tpacingEl.style.removeProperty('display');\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Update once directly\n\t\t\t\t\t\t_updateTimer();\n\n\t\t\t\t\t\t// Then update every second\n\t\t\t\t\t\tsetInterval( _updateTimer, 1000 );\n\n\t\t\t\t\t} );\n\n\n\t\t\t\t\tfunction _resetTimer() {\n\n\t\t\t\t\t\tif (timings == null) {\n\t\t\t\t\t\t\tstart = new Date();\n\t\t\t\t\t\t\t_updateTimer();\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\t// Reset timer to beginning of current slide\n\t\t\t\t\t\t\tgetTimeAllocated( timings, function ( slideEndTimingSeconds ) {\n\t\t\t\t\t\t\t\tvar slideEndTiming = slideEndTimingSeconds * 1000;\n\t\t\t\t\t\t\t\tcallRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {\n\t\t\t\t\t\t\t\t\tvar currentSlideTiming = timings[currentSlide] * 1000;\n\t\t\t\t\t\t\t\t\tvar previousSlidesTiming = slideEndTiming - currentSlideTiming;\n\t\t\t\t\t\t\t\t\tvar now = new Date();\n\t\t\t\t\t\t\t\t\tstart = new Date(now.getTime() - previousSlidesTiming);\n\t\t\t\t\t\t\t\t\t_updateTimer();\n\t\t\t\t\t\t\t\t} );\n\t\t\t\t\t\t\t} );\n\t\t\t\t\t\t}\n\n\t\t\t\t\t}\n\n\t\t\t\t\ttimeEl.addEventListener( 'click', function() {\n\t\t\t\t\t\t_resetTimer();\n\t\t\t\t\t\treturn false;\n\t\t\t\t\t} );\n\n\t\t\t\t\tfunction _displayTime( hrEl, minEl, secEl, time) {\n\n\t\t\t\t\t\tvar sign = Math.sign(time) == -1 ? \"-\" : \"\";\n\t\t\t\t\t\ttime = Math.abs(Math.round(time / 1000));\n\t\t\t\t\t\tvar seconds = time % 60;\n\t\t\t\t\t\tvar minutes = Math.floor( time / 60 ) % 60 ;\n\t\t\t\t\t\tvar hours = Math.floor( time / ( 60 * 60 )) ;\n\t\t\t\t\t\thrEl.innerHTML = sign + zeroPadInteger( hours );\n\t\t\t\t\t\tif (hours == 0) {\n\t\t\t\t\t\t\thrEl.classList.add( 'mute' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\thrEl.classList.remove( 'mute' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\tminEl.innerHTML = ':' + zeroPadInteger( minutes );\n\t\t\t\t\t\tif (hours == 0 && minutes == 0) {\n\t\t\t\t\t\t\tminEl.classList.add( 'mute' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\tminEl.classList.remove( 'mute' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\tsecEl.innerHTML = ':' + zeroPadInteger( seconds );\n\t\t\t\t\t}\n\n\t\t\t\t\tfunction _updateTimer() {\n\n\t\t\t\t\t\tvar diff, hours, minutes, seconds,\n\t\t\t\t\t\tnow = new Date();\n\n\t\t\t\t\t\tdiff = now.getTime() - start.getTime();\n\n\t\t\t\t\t\tclockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );\n\t\t\t\t\t\t_displayTime( hoursEl, minutesEl, secondsEl, diff );\n\t\t\t\t\t\tif (timings !== null) {\n\t\t\t\t\t\t\t_updatePacing(diff);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfunction _updatePacing(diff) {\n\n\t\t\t\t\t\tgetTimeAllocated( timings, function ( slideEndTimingSeconds ) {\n\t\t\t\t\t\t\tvar slideEndTiming = slideEndTimingSeconds * 1000;\n\n\t\t\t\t\t\t\tcallRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {\n\t\t\t\t\t\t\t\tvar currentSlideTiming = timings[currentSlide] * 1000;\n\t\t\t\t\t\t\t\tvar timeLeftCurrentSlide = slideEndTiming - diff;\n\t\t\t\t\t\t\t\tif (timeLeftCurrentSlide < 0) {\n\t\t\t\t\t\t\t\t\tpacingEl.className = 'pacing behind';\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\telse if (timeLeftCurrentSlide < currentSlideTiming) {\n\t\t\t\t\t\t\t\t\tpacingEl.className = 'pacing on-track';\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\telse {\n\t\t\t\t\t\t\t\t\tpacingEl.className = 'pacing ahead';\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );\n\t\t\t\t\t\t\t} );\n\t\t\t\t\t\t} );\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Sets up the speaker view layout and layout selector.\n\t\t\t\t */\n\t\t\t\tfunction setupLayout() {\n\n\t\t\t\t\tlayoutDropdown = document.querySelector( '.speaker-layout-dropdown' );\n\t\t\t\t\tlayoutLabel = document.querySelector( '.speaker-layout-label' );\n\n\t\t\t\t\t// Render the list of available layouts\n\t\t\t\t\tfor( var id in SPEAKER_LAYOUTS ) {\n\t\t\t\t\t\tvar option = document.createElement( 'option' );\n\t\t\t\t\t\toption.setAttribute( 'value', id );\n\t\t\t\t\t\toption.textContent = SPEAKER_LAYOUTS[ id ];\n\t\t\t\t\t\tlayoutDropdown.appendChild( option );\n\t\t\t\t\t}\n\n\t\t\t\t\t// Monitor the dropdown for changes\n\t\t\t\t\tlayoutDropdown.addEventListener( 'change', function( event ) {\n\n\t\t\t\t\t\tsetLayout( layoutDropdown.value );\n\n\t\t\t\t\t}, false );\n\n\t\t\t\t\t// Restore any currently persisted layout\n\t\t\t\t\tsetLayout( getLayout() );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Sets a new speaker view layout. The layout is persisted\n\t\t\t\t * in local storage.\n\t\t\t\t */\n\t\t\t\tfunction setLayout( value ) {\n\n\t\t\t\t\tvar title = SPEAKER_LAYOUTS[ value ];\n\n\t\t\t\t\tlayoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );\n\t\t\t\t\tlayoutDropdown.value = value;\n\n\t\t\t\t\tdocument.body.setAttribute( 'data-speaker-layout', value );\n\n\t\t\t\t\t// Persist locally\n\t\t\t\t\tif( supportsLocalStorage() ) {\n\t\t\t\t\t\twindow.localStorage.setItem( 'reveal-speaker-layout', value );\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Returns the ID of the most recently set speaker layout\n\t\t\t\t * or our default layout if none has been set.\n\t\t\t\t */\n\t\t\t\tfunction getLayout() {\n\n\t\t\t\t\tif( supportsLocalStorage() ) {\n\t\t\t\t\t\tvar layout = window.localStorage.getItem( 'reveal-speaker-layout' );\n\t\t\t\t\t\tif( layout ) {\n\t\t\t\t\t\t\treturn layout;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// Default to the first record in the layouts hash\n\t\t\t\t\tfor( var id in SPEAKER_LAYOUTS ) {\n\t\t\t\t\t\treturn id;\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\tfunction supportsLocalStorage() {\n\n\t\t\t\t\ttry {\n\t\t\t\t\t\tlocalStorage.setItem('test', 'test');\n\t\t\t\t\t\tlocalStorage.removeItem('test');\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t\tcatch( e ) {\n\t\t\t\t\t\treturn false;\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\tfunction zeroPadInteger( num ) {\n\n\t\t\t\t\tvar str = '00' + parseInt( num );\n\t\t\t\t\treturn str.substring( str.length - 2 );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Limits the frequency at which a function can be called.\n\t\t\t\t */\n\t\t\t\tfunction debounce( fn, ms ) {\n\n\t\t\t\t\tvar lastTime = 0,\n\t\t\t\t\t\ttimeout;\n\n\t\t\t\t\treturn function() {\n\n\t\t\t\t\t\tvar args = arguments;\n\t\t\t\t\t\tvar context = this;\n\n\t\t\t\t\t\tclearTimeout( timeout );\n\n\t\t\t\t\t\tvar timeSinceLastCall = Date.now() - lastTime;\n\t\t\t\t\t\tif( timeSinceLastCall > ms ) {\n\t\t\t\t\t\t\tfn.apply( context, args );\n\t\t\t\t\t\t\tlastTime = Date.now();\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\ttimeout = setTimeout( function() {\n\t\t\t\t\t\t\t\tfn.apply( context, args );\n\t\t\t\t\t\t\t\tlastTime = Date.now();\n\t\t\t\t\t\t\t}, ms - timeSinceLastCall );\n\t\t\t\t\t\t}\n\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t})();\n\n\t\t</script>\n\t</body>\n</html>";

/**
 * Handles opening of and synchronization with the reveal.js
 * notes window.
 *
 * Handshake process:
 * 1. This window posts 'connect' to notes window
 *    - Includes URL of presentation to show
 * 2. Notes window responds with 'connected' when it is available
 * 3. This window proceeds to send the current presentation state
 *    to the notes window
 */
var Plugin = function Plugin() {
  var connectInterval;
  var speakerWindow = null;
  var deck;

  /**
   * Opens a new speaker view window.
   */
  function openSpeakerWindow() {
    // If a window is already open, focus it
    if (speakerWindow && !speakerWindow.closed) {
      speakerWindow.focus();
    } else {
      speakerWindow = window.open('about:blank', 'reveal.js - Notes', 'width=1100,height=700');
      speakerWindow.marked = marked;
      speakerWindow.document.write(speakerViewHTML);
      if (!speakerWindow) {
        alert('Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.');
        return;
      }
      connect();
    }
  }

  /**
   * Reconnect with an existing speaker view window.
   */
  function reconnectSpeakerWindow(reconnectWindow) {
    if (speakerWindow && !speakerWindow.closed) {
      speakerWindow.focus();
    } else {
      speakerWindow = reconnectWindow;
      window.addEventListener('message', onPostMessage);
      onConnected();
    }
  }

  /**
  	* Connect to the notes window through a postmessage handshake.
  	* Using postmessage enables us to work in situations where the
  	* origins differ, such as a presentation being opened from the
  	* file system.
  	*/
  function connect() {
    var presentationURL = deck.getConfig().url;
    var url = typeof presentationURL === 'string' ? presentationURL : window.location.protocol + '//' + window.location.host + window.location.pathname + window.location.search;

    // Keep trying to connect until we get a 'connected' message back
    connectInterval = setInterval(function () {
      speakerWindow.postMessage(JSON.stringify({
        namespace: 'reveal-notes',
        type: 'connect',
        state: deck.getState(),
        url: url
      }), '*');
    }, 500);
    window.addEventListener('message', onPostMessage);
  }

  /**
   * Calls the specified Reveal.js method with the provided argument
   * and then pushes the result to the notes frame.
   */
  function callRevealApi(methodName, methodArguments, callId) {
    var result = deck[methodName].apply(deck, methodArguments);
    speakerWindow.postMessage(JSON.stringify({
      namespace: 'reveal-notes',
      type: 'return',
      result: result,
      callId: callId
    }), '*');
  }

  /**
   * Posts the current slide data to the notes window.
   */
  function post(event) {
    var slideElement = deck.getCurrentSlide(),
      notesElements = slideElement.querySelectorAll('aside.notes'),
      fragmentElement = slideElement.querySelector('.current-fragment');
    var messageData = {
      namespace: 'reveal-notes',
      type: 'state',
      notes: '',
      markdown: false,
      whitespace: 'normal',
      state: deck.getState()
    };

    // Look for notes defined in a slide attribute
    if (slideElement.hasAttribute('data-notes')) {
      messageData.notes = slideElement.getAttribute('data-notes');
      messageData.whitespace = 'pre-wrap';
    }

    // Look for notes defined in a fragment
    if (fragmentElement) {
      var fragmentNotes = fragmentElement.querySelector('aside.notes');
      if (fragmentNotes) {
        messageData.notes = fragmentNotes.innerHTML;
        messageData.markdown = typeof fragmentNotes.getAttribute('data-markdown') === 'string';

        // Ignore other slide notes
        notesElements = null;
      } else if (fragmentElement.hasAttribute('data-notes')) {
        messageData.notes = fragmentElement.getAttribute('data-notes');
        messageData.whitespace = 'pre-wrap';

        // In case there are slide notes
        notesElements = null;
      }
    }

    // Look for notes defined in an aside element
    if (notesElements && notesElements.length) {
      // Ignore notes inside of fragments since those are shown
      // individually when stepping through fragments
      notesElements = Array.from(notesElements).filter(function (notesElement) {
        return notesElement.closest('.fragment') === null;
      });
      messageData.notes = notesElements.map(function (notesElement) {
        return notesElement.innerHTML;
      }).join('\n');
      messageData.markdown = notesElements[0] && typeof notesElements[0].getAttribute('data-markdown') === 'string';
    }
    speakerWindow.postMessage(JSON.stringify(messageData), '*');
  }

  /**
   * Check if the given event is from the same origin as the
   * current window.
   */
  function isSameOriginEvent(event) {
    try {
      return window.location.origin === event.source.location.origin;
    } catch (error) {
      return false;
    }
  }
  function onPostMessage(event) {
    // Only allow same-origin messages
    // (added 12/5/22 as a XSS safeguard)
    if (isSameOriginEvent(event)) {
      try {
        var data = JSON.parse(event.data);
        if (data && data.namespace === 'reveal-notes' && data.type === 'connected') {
          clearInterval(connectInterval);
          onConnected();
        } else if (data && data.namespace === 'reveal-notes' && data.type === 'call') {
          callRevealApi(data.methodName, data.arguments, data.callId);
        }
      } catch (e) {}
    }
  }

  /**
   * Called once we have established a connection to the notes
   * window.
   */
  function onConnected() {
    // Monitor events that trigger a change in state
    deck.on('slidechanged', post);
    deck.on('fragmentshown', post);
    deck.on('fragmenthidden', post);
    deck.on('overviewhidden', post);
    deck.on('overviewshown', post);
    deck.on('paused', post);
    deck.on('resumed', post);

    // Post the initial state
    post();
  }
  return {
    id: 'notes',
    init: function init(reveal) {
      deck = reveal;
      if (!/receiver/i.test(window.location.search)) {
        // If the there's a 'notes' query set, open directly
        if (window.location.search.match(/(\?|\&)notes/gi) !== null) {
          openSpeakerWindow();
        } else {
          // Keep listening for speaker view hearbeats. If we receive a
          // heartbeat from an orphaned window, reconnect it. This ensures
          // that we remain connected to the notes even if the presentation
          // is reloaded.
          window.addEventListener('message', function (event) {
            if (!speakerWindow && typeof event.data === 'string') {
              var data;
              try {
                data = JSON.parse(event.data);
              } catch (error) {}
              if (data && data.namespace === 'reveal-notes' && data.type === 'heartbeat') {
                reconnectSpeakerWindow(event.source);
              }
            }
          });
        }

        // Open the notes when the 's' key is hit
        deck.addKeyBinding({
          keyCode: 83,
          key: 'S',
          description: 'Speaker notes view'
        }, function () {
          openSpeakerWindow();
        });
      }
    },
    open: openSpeakerWindow
  };
};

var global$1 = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};

var moo = {exports: {}};

(function (module) {
  (function (root, factory) {
    if (module.exports) {
      module.exports = factory();
    } else {
      root.moo = factory();
    }
  })(commonjsGlobal, function () {

    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var toString = Object.prototype.toString;
    var hasSticky = typeof new RegExp().sticky === 'boolean';

    /***************************************************************************/

    function isRegExp(o) {
      return o && toString.call(o) === '[object RegExp]';
    }
    function isObject(o) {
      return o && _typeof$1(o) === 'object' && !isRegExp(o) && !Array.isArray(o);
    }
    function reEscape(s) {
      return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    function reGroups(s) {
      var re = new RegExp('|' + s);
      return re.exec('').length - 1;
    }
    function reCapture(s) {
      return '(' + s + ')';
    }
    function reUnion(regexps) {
      if (!regexps.length) return '(?!)';
      var source = regexps.map(function (s) {
        return "(?:" + s + ")";
      }).join('|');
      return "(?:" + source + ")";
    }
    function regexpOrLiteral(obj) {
      if (typeof obj === 'string') {
        return '(?:' + reEscape(obj) + ')';
      } else if (isRegExp(obj)) {
        // TODO: consider /u support
        if (obj.ignoreCase) throw new Error('RegExp /i flag not allowed');
        if (obj.global) throw new Error('RegExp /g flag is implied');
        if (obj.sticky) throw new Error('RegExp /y flag is implied');
        if (obj.multiline) throw new Error('RegExp /m flag is implied');
        return obj.source;
      } else {
        throw new Error('Not a pattern: ' + obj);
      }
    }
    function pad(s, length) {
      if (s.length > length) {
        return s;
      }
      return Array(length - s.length + 1).join(" ") + s;
    }
    function lastNLines(string, numLines) {
      var position = string.length;
      var lineBreaks = 0;
      while (true) {
        var idx = string.lastIndexOf("\n", position - 1);
        if (idx === -1) {
          break;
        } else {
          lineBreaks++;
        }
        position = idx;
        if (lineBreaks === numLines) {
          break;
        }
        if (position === 0) {
          break;
        }
      }
      var startPosition = lineBreaks < numLines ? 0 : position + 1;
      return string.substring(startPosition).split("\n");
    }
    function objectToRules(object) {
      var keys = Object.getOwnPropertyNames(object);
      var result = [];
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var thing = object[key];
        var rules = [].concat(thing);
        if (key === 'include') {
          for (var j = 0; j < rules.length; j++) {
            result.push({
              include: rules[j]
            });
          }
          continue;
        }
        var match = [];
        rules.forEach(function (rule) {
          if (isObject(rule)) {
            if (match.length) result.push(ruleOptions(key, match));
            result.push(ruleOptions(key, rule));
            match = [];
          } else {
            match.push(rule);
          }
        });
        if (match.length) result.push(ruleOptions(key, match));
      }
      return result;
    }
    function arrayToRules(array) {
      var result = [];
      for (var i = 0; i < array.length; i++) {
        var obj = array[i];
        if (obj.include) {
          var include = [].concat(obj.include);
          for (var j = 0; j < include.length; j++) {
            result.push({
              include: include[j]
            });
          }
          continue;
        }
        if (!obj.type) {
          throw new Error('Rule has no type: ' + JSON.stringify(obj));
        }
        result.push(ruleOptions(obj.type, obj));
      }
      return result;
    }
    function ruleOptions(type, obj) {
      if (!isObject(obj)) {
        obj = {
          match: obj
        };
      }
      if (obj.include) {
        throw new Error('Matching rules cannot also include states');
      }

      // nb. error and fallback imply lineBreaks
      var options = {
        defaultType: type,
        lineBreaks: !!obj.error || !!obj.fallback,
        pop: false,
        next: null,
        push: null,
        error: false,
        fallback: false,
        value: null,
        type: null,
        shouldThrow: false
      };

      // Avoid Object.assign(), so we support IE9+
      for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) {
          options[key] = obj[key];
        }
      }

      // type transform cannot be a string
      if (typeof options.type === 'string' && type !== options.type) {
        throw new Error("Type transform cannot be a string (type '" + options.type + "' for token '" + type + "')");
      }

      // convert to array
      var match = options.match;
      options.match = Array.isArray(match) ? match : match ? [match] : [];
      options.match.sort(function (a, b) {
        return isRegExp(a) && isRegExp(b) ? 0 : isRegExp(b) ? -1 : isRegExp(a) ? +1 : b.length - a.length;
      });
      return options;
    }
    function toRules(spec) {
      return Array.isArray(spec) ? arrayToRules(spec) : objectToRules(spec);
    }
    var defaultErrorRule = ruleOptions('error', {
      lineBreaks: true,
      shouldThrow: true
    });
    function compileRules(rules, hasStates) {
      var errorRule = null;
      var fast = Object.create(null);
      var fastAllowed = true;
      var unicodeFlag = null;
      var groups = [];
      var parts = [];

      // If there is a fallback rule, then disable fast matching
      for (var i = 0; i < rules.length; i++) {
        if (rules[i].fallback) {
          fastAllowed = false;
        }
      }
      for (var i = 0; i < rules.length; i++) {
        var options = rules[i];
        if (options.include) {
          // all valid inclusions are removed by states() preprocessor
          throw new Error('Inheritance is not allowed in stateless lexers');
        }
        if (options.error || options.fallback) {
          // errorRule can only be set once
          if (errorRule) {
            if (!options.fallback === !errorRule.fallback) {
              throw new Error("Multiple " + (options.fallback ? "fallback" : "error") + " rules not allowed (for token '" + options.defaultType + "')");
            } else {
              throw new Error("fallback and error are mutually exclusive (for token '" + options.defaultType + "')");
            }
          }
          errorRule = options;
        }
        var match = options.match.slice();
        if (fastAllowed) {
          while (match.length && typeof match[0] === 'string' && match[0].length === 1) {
            var word = match.shift();
            fast[word.charCodeAt(0)] = options;
          }
        }

        // Warn about inappropriate state-switching options
        if (options.pop || options.push || options.next) {
          if (!hasStates) {
            throw new Error("State-switching options are not allowed in stateless lexers (for token '" + options.defaultType + "')");
          }
          if (options.fallback) {
            throw new Error("State-switching options are not allowed on fallback tokens (for token '" + options.defaultType + "')");
          }
        }

        // Only rules with a .match are included in the RegExp
        if (match.length === 0) {
          continue;
        }
        fastAllowed = false;
        groups.push(options);

        // Check unicode flag is used everywhere or nowhere
        for (var j = 0; j < match.length; j++) {
          var obj = match[j];
          if (!isRegExp(obj)) {
            continue;
          }
          if (unicodeFlag === null) {
            unicodeFlag = obj.unicode;
          } else if (unicodeFlag !== obj.unicode && options.fallback === false) {
            throw new Error('If one rule is /u then all must be');
          }
        }

        // convert to RegExp
        var pat = reUnion(match.map(regexpOrLiteral));

        // validate
        var regexp = new RegExp(pat);
        if (regexp.test("")) {
          throw new Error("RegExp matches empty string: " + regexp);
        }
        var groupCount = reGroups(pat);
        if (groupCount > 0) {
          throw new Error("RegExp has capture groups: " + regexp + "\nUse (?: … ) instead");
        }

        // try and detect rules matching newlines
        if (!options.lineBreaks && regexp.test('\n')) {
          throw new Error('Rule should declare lineBreaks: ' + regexp);
        }

        // store regex
        parts.push(reCapture(pat));
      }

      // If there's no fallback rule, use the sticky flag so we only look for
      // matches at the current index.
      //
      // If we don't support the sticky flag, then fake it using an irrefutable
      // match (i.e. an empty pattern).
      var fallbackRule = errorRule && errorRule.fallback;
      var flags = hasSticky && !fallbackRule ? 'ym' : 'gm';
      var suffix = hasSticky || fallbackRule ? '' : '|';
      if (unicodeFlag === true) flags += "u";
      var combined = new RegExp(reUnion(parts) + suffix, flags);
      return {
        regexp: combined,
        groups: groups,
        fast: fast,
        error: errorRule || defaultErrorRule
      };
    }
    function compile(rules) {
      var result = compileRules(toRules(rules));
      return new Lexer({
        start: result
      }, 'start');
    }
    function checkStateGroup(g, name, map) {
      var state = g && (g.push || g.next);
      if (state && !map[state]) {
        throw new Error("Missing state '" + state + "' (in token '" + g.defaultType + "' of state '" + name + "')");
      }
      if (g && g.pop && +g.pop !== 1) {
        throw new Error("pop must be 1 (in token '" + g.defaultType + "' of state '" + name + "')");
      }
    }
    function compileStates(states, start) {
      var all = states.$all ? toRules(states.$all) : [];
      delete states.$all;
      var keys = Object.getOwnPropertyNames(states);
      if (!start) start = keys[0];
      var ruleMap = Object.create(null);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        ruleMap[key] = toRules(states[key]).concat(all);
      }
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var rules = ruleMap[key];
        var included = Object.create(null);
        for (var j = 0; j < rules.length; j++) {
          var rule = rules[j];
          if (!rule.include) continue;
          var splice = [j, 1];
          if (rule.include !== key && !included[rule.include]) {
            included[rule.include] = true;
            var newRules = ruleMap[rule.include];
            if (!newRules) {
              throw new Error("Cannot include nonexistent state '" + rule.include + "' (in state '" + key + "')");
            }
            for (var k = 0; k < newRules.length; k++) {
              var newRule = newRules[k];
              if (rules.indexOf(newRule) !== -1) continue;
              splice.push(newRule);
            }
          }
          rules.splice.apply(rules, splice);
          j--;
        }
      }
      var map = Object.create(null);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        map[key] = compileRules(ruleMap[key], true);
      }
      for (var i = 0; i < keys.length; i++) {
        var name = keys[i];
        var state = map[name];
        var groups = state.groups;
        for (var j = 0; j < groups.length; j++) {
          checkStateGroup(groups[j], name, map);
        }
        var fastKeys = Object.getOwnPropertyNames(state.fast);
        for (var j = 0; j < fastKeys.length; j++) {
          checkStateGroup(state.fast[fastKeys[j]], name, map);
        }
      }
      return new Lexer(map, start);
    }
    function keywordTransform(map) {
      // Use a JavaScript Map to map keywords to their corresponding token type
      // unless Map is unsupported, then fall back to using an Object:
      var isMap = typeof Map !== 'undefined';
      var reverseMap = isMap ? new Map() : Object.create(null);
      var types = Object.getOwnPropertyNames(map);
      for (var i = 0; i < types.length; i++) {
        var tokenType = types[i];
        var item = map[tokenType];
        var keywordList = Array.isArray(item) ? item : [item];
        keywordList.forEach(function (keyword) {
          if (typeof keyword !== 'string') {
            throw new Error("keyword must be string (in keyword '" + tokenType + "')");
          }
          if (isMap) {
            reverseMap.set(keyword, tokenType);
          } else {
            reverseMap[keyword] = tokenType;
          }
        });
      }
      return function (k) {
        return isMap ? reverseMap.get(k) : reverseMap[k];
      };
    }

    /***************************************************************************/

    var Lexer = function Lexer(states, state) {
      this.startState = state;
      this.states = states;
      this.buffer = '';
      this.stack = [];
      this.reset();
    };
    Lexer.prototype.reset = function (data, info) {
      this.buffer = data || '';
      this.index = 0;
      this.line = info ? info.line : 1;
      this.col = info ? info.col : 1;
      this.queuedToken = info ? info.queuedToken : null;
      this.queuedText = info ? info.queuedText : "";
      this.queuedThrow = info ? info.queuedThrow : null;
      this.setState(info ? info.state : this.startState);
      this.stack = info && info.stack ? info.stack.slice() : [];
      return this;
    };
    Lexer.prototype.save = function () {
      return {
        line: this.line,
        col: this.col,
        state: this.state,
        stack: this.stack.slice(),
        queuedToken: this.queuedToken,
        queuedText: this.queuedText,
        queuedThrow: this.queuedThrow
      };
    };
    Lexer.prototype.setState = function (state) {
      if (!state || this.state === state) return;
      this.state = state;
      var info = this.states[state];
      this.groups = info.groups;
      this.error = info.error;
      this.re = info.regexp;
      this.fast = info.fast;
    };
    Lexer.prototype.popState = function () {
      this.setState(this.stack.pop());
    };
    Lexer.prototype.pushState = function (state) {
      this.stack.push(this.state);
      this.setState(state);
    };
    var eat = hasSticky ? function (re, buffer) {
      // assume re is /y
      return re.exec(buffer);
    } : function (re, buffer) {
      // assume re is /g
      var match = re.exec(buffer);
      // will always match, since we used the |(?:) trick
      if (match[0].length === 0) {
        return null;
      }
      return match;
    };
    Lexer.prototype._getGroup = function (match) {
      var groupCount = this.groups.length;
      for (var i = 0; i < groupCount; i++) {
        if (match[i + 1] !== undefined) {
          return this.groups[i];
        }
      }
      throw new Error('Cannot find token type for matched text');
    };
    function tokenToString() {
      return this.value;
    }
    Lexer.prototype.next = function () {
      var index = this.index;

      // If a fallback token matched, we don't need to re-run the RegExp
      if (this.queuedGroup) {
        var token = this._token(this.queuedGroup, this.queuedText, index);
        this.queuedGroup = null;
        this.queuedText = "";
        return token;
      }
      var buffer = this.buffer;
      if (index === buffer.length) {
        return; // EOF
      }

      // Fast matching for single characters
      var group = this.fast[buffer.charCodeAt(index)];
      if (group) {
        return this._token(group, buffer.charAt(index), index);
      }

      // Execute RegExp
      var re = this.re;
      re.lastIndex = index;
      var match = eat(re, buffer);

      // Error tokens match the remaining buffer
      var error = this.error;
      if (match == null) {
        return this._token(error, buffer.slice(index, buffer.length), index);
      }
      var group = this._getGroup(match);
      var text = match[0];
      if (error.fallback && match.index !== index) {
        this.queuedGroup = group;
        this.queuedText = text;

        // Fallback tokens contain the unmatched portion of the buffer
        return this._token(error, buffer.slice(index, match.index), index);
      }
      return this._token(group, text, index);
    };
    Lexer.prototype._token = function (group, text, offset) {
      // count line breaks
      var lineBreaks = 0;
      if (group.lineBreaks) {
        var matchNL = /\n/g;
        var nl = 1;
        if (text === '\n') {
          lineBreaks = 1;
        } else {
          while (matchNL.exec(text)) {
            lineBreaks++;
            nl = matchNL.lastIndex;
          }
        }
      }
      var token = {
        type: typeof group.type === 'function' && group.type(text) || group.defaultType,
        value: typeof group.value === 'function' ? group.value(text) : text,
        text: text,
        toString: tokenToString,
        offset: offset,
        lineBreaks: lineBreaks,
        line: this.line,
        col: this.col
      };
      // nb. adding more props to token object will make V8 sad!

      var size = text.length;
      this.index += size;
      this.line += lineBreaks;
      if (lineBreaks !== 0) {
        this.col = size - nl + 1;
      } else {
        this.col += size;
      }

      // throw, if no rule with {error: true}
      if (group.shouldThrow) {
        var err = new Error(this.formatError(token, "invalid syntax"));
        throw err;
      }
      if (group.pop) this.popState();else if (group.push) this.pushState(group.push);else if (group.next) this.setState(group.next);
      return token;
    };
    if (typeof Symbol !== 'undefined' && Symbol.iterator) {
      var LexerIterator = function LexerIterator(lexer) {
        this.lexer = lexer;
      };
      LexerIterator.prototype.next = function () {
        var token = this.lexer.next();
        return {
          value: token,
          done: !token
        };
      };
      LexerIterator.prototype[Symbol.iterator] = function () {
        return this;
      };
      Lexer.prototype[Symbol.iterator] = function () {
        return new LexerIterator(this);
      };
    }
    Lexer.prototype.formatError = function (token, message) {
      if (token == null) {
        // An undefined token indicates EOF
        var text = this.buffer.slice(this.index);
        var token = {
          text: text,
          offset: this.index,
          lineBreaks: text.indexOf('\n') === -1 ? 0 : 1,
          line: this.line,
          col: this.col
        };
      }
      var numLinesAround = 2;
      var firstDisplayedLine = Math.max(token.line - numLinesAround, 1);
      var lastDisplayedLine = token.line + numLinesAround;
      var lastLineDigits = String(lastDisplayedLine).length;
      var displayedLines = lastNLines(this.buffer, this.line - token.line + numLinesAround + 1).slice(0, 5);
      var errorLines = [];
      errorLines.push(message + " at line " + token.line + " col " + token.col + ":");
      errorLines.push("");
      for (var i = 0; i < displayedLines.length; i++) {
        var line = displayedLines[i];
        var lineNo = firstDisplayedLine + i;
        errorLines.push(pad(String(lineNo), lastLineDigits) + "  " + line);
        if (lineNo === token.line) {
          errorLines.push(pad("", lastLineDigits + token.col + 1) + "^");
        }
      }
      return errorLines.join("\n");
    };
    Lexer.prototype.clone = function () {
      return new Lexer(this.states, this.state);
    };
    Lexer.prototype.has = function (tokenType) {
      return true;
    };
    return {
      compile: compile,
      states: compileStates,
      error: Object.freeze({
        error: true
      }),
      fallback: Object.freeze({
        fallback: true
      }),
      keywords: keywordTransform
    };
  });
})(moo);
var mooExports = moo.exports;
var x = /*@__PURE__*/getDefaultExportFromCjs(mooExports);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var k = (typeof globalThis === "undefined" ? "undefined" : _typeof$1(globalThis)) < "u" ? globalThis : (typeof window === "undefined" ? "undefined" : _typeof$1(window)) < "u" ? window : _typeof$1(global$1) < "u" ? global$1 : (typeof self === "undefined" ? "undefined" : _typeof$1(self)) < "u" ? self : {};
function w(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e["default"] : e;
}
var b = {
  exports: {}
};
(function (e) {
  (function (t, i, s) {
    function r(a) {
      var n = this,
        c = p();
      n.next = function () {
        var f = 2091639 * n.s0 + n.c * 23283064365386963e-26;
        return n.s0 = n.s1, n.s1 = n.s2, n.s2 = f - (n.c = f | 0);
      }, n.c = 1, n.s0 = c(" "), n.s1 = c(" "), n.s2 = c(" "), n.s0 -= c(a), n.s0 < 0 && (n.s0 += 1), n.s1 -= c(a), n.s1 < 0 && (n.s1 += 1), n.s2 -= c(a), n.s2 < 0 && (n.s2 += 1), c = null;
    }
    function u(a, n) {
      return n.c = a.c, n.s0 = a.s0, n.s1 = a.s1, n.s2 = a.s2, n;
    }
    function l(a, n) {
      var c = new r(a),
        f = n && n.state,
        o = c.next;
      return o.int32 = function () {
        return c.next() * 4294967296 | 0;
      }, o["double"] = function () {
        return o() + (o() * 2097152 | 0) * 11102230246251565e-32;
      }, o.quick = o, f && (_typeof$1(f) == "object" && u(f, c), o.state = function () {
        return u(c, {});
      }), o;
    }
    function p() {
      var a = 4022871197,
        n = function n(c) {
          c = String(c);
          for (var f = 0; f < c.length; f++) {
            a += c.charCodeAt(f);
            var o = 0.02519603282416938 * a;
            a = o >>> 0, o -= a, o *= a, a = o >>> 0, o -= a, a += o * 4294967296;
          }
          return (a >>> 0) * 23283064365386963e-26;
        };
      return n;
    }
    i && i.exports ? i.exports = l : s && s.amd ? s(function () {
      return l;
    }) : this.alea = l;
  })(k, e,
  // present in node.js
  !1
  // present with an AMD loader
  );
})(b);
var y = b.exports;
var _ = /* @__PURE__ */w(y),
  h = x.compile({
    /**
     * Matches various white space characters, including tab, vertical tab, form
     * feed, zero-width non-breaking space, and Unicode space separators.
     */
    WhiteSpace: {
      match: /[\t\x0B\f \xA0\u1680\u2000-\u200A\u202F\u205F\u3000\uFEFF]+/,
      lineBreaks: !0
    },
    /**
     * Matches various line break sequences, including carriage return followed by
     * line feed, carriage return, line feed, and Unicode line/paragraph separators.
     */
    Lines: {
      match: /\r?\n|[\r\u2028\u2029]/,
      lineBreaks: !0
    },
    /**
     * Matches (literally) identifiers followed by collon (`:`) that may include
     * Unicode characters and escape sequences.
     */
    ObjectKey: /\[?(?:#)?(?=(?:[\$A-Z\\_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]))(?:(?:[\$0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u0870-\u0887\u0889-\u088E\u0898-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECE\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1715\u171F-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B4C\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA827\uA82C\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF65-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDEFD-\uDF1C\uDF27\uDF30-\uDF50\uDF70-\uDF85\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC75\uDC7F-\uDCBA\uDCC2\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E-\uDE41\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39\uDF40-\uDF46]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDF00-\uDF10\uDF12-\uDF3A\uDF3E-\uDF42\uDF50-\uDF59\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC40-\uDC55]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC30-\uDC6D\uDC8F\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAE\uDEC0-\uDEF9]|\uD839[\uDCD0-\uDCF9\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]|\uDB40[\uDD00-\uDDEF])|\\u[0-9A-Fa-f]{4}|\\u\{[0-9A-Fa-f]+\})+\]?(?=:)/,
    /**
     * Matches various punctuators commonly used in programming languages
     * and regular expressions. It includes operators, delimiters, and special
     * characters.
     */
    Punctuator: /\x2D\x2D|\+\+|=>|\.{3}|\??\.(?![0-9])|(?:&&|\|\||\?\?|[%&\+\x2D\^\|]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\*\/]))=?|[\(\),:;\?\[\]\{\}~]/,
    /**
     * Matches boolean literals, allowing for optional single or double quotes.
     */
    BooleanLiteral: /true|false/,
    /**
     * Matches various forms of numeric literals, including hexadecimal, octal,
     * binary, decimal, and scientific notation.
     */
    NumericLiteral: /(?:0[Xx][0-9A-Fa-f](?:_?[0-9A-Fa-f])*|0[Oo][0-7](?:_?[0-7])*|0[Bb][01](?:_?[01])*)n?|0n|[1-9](?:_?[0-9])*n|(?:(?:0(?![0-9])|0[0-9]*[89][0-9]*|[1-9](?:_?[0-9])*)(?:\.(?:[0-9](?:_?[0-9])*)?)?|\.[0-9](?:_?[0-9])*)(?:[Ee][\+\x2D]?[0-9](?:_?[0-9])*)?|0[0-7]+/,
    /**
     * Matches single-quoted and double-quoted string literals, allowing for
     * escaping of quotes and newlines within the string.
     */
    StringLiteral: {
      match: /(?:'(?:(?!')(?:[\0-\t\x0B\f\x0E-\[\]-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])|\\(?:\r\n|(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])))*')|(?:"(?:(?!")(?:[\0-\t\x0B\f\x0E-\[\]-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])|\\(?:\r\n|(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])))*")/,
      value: function value(e) {
        return "\"".concat(e.slice(1, -1), "\"");
      }
    },
    /**
     * Matches identifiers that may include Unicode characters and escape
     * sequences.
     */
    Identifier: /(?:#)?(?=(?:[\$A-Z\\_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]))(?:(?:[\$0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u0870-\u0887\u0889-\u088E\u0898-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECE\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1715\u171F-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B4C\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA827\uA82C\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF65-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDEFD-\uDF1C\uDF27\uDF30-\uDF50\uDF70-\uDF85\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC75\uDC7F-\uDCBA\uDCC2\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E-\uDE41\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39\uDF40-\uDF46]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDF00-\uDF10\uDF12-\uDF3A\uDF3E-\uDF42\uDF50-\uDF59\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC40-\uDC55]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC30-\uDC6D\uDC8F\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAE\uDEC0-\uDEF9]|\uD839[\uDCD0-\uDCF9\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]|\uDB40[\uDD00-\uDDEF])|\\u[0-9A-Fa-f]{4}|\\u\{[0-9A-Fa-f]+\})+/
  });
function $(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var i = e.trim().replace(/[\,]+$/, "");
  if (i === "") return "{}";
  if (!A(i)) throw new TypeError("Unexpected input format");
  var s = "";
  h.reset(i);
  var _iterator = _createForOfIteratorHelper(h),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var r = _step.value;
      if (!(r.type === "WhiteSpace" || r.type === "Lines")) {
        switch (r.type) {
          case "Identifier":
            r.value = "\"".concat(t[r.value] || r.value, "\"");
            break;
          case "ObjectKey":
            r.value.slice(0, 1) === "[" && r.value.slice(-1) === "]" ? r.value = "\"".concat(t[r.value.slice(1, -1)] || r.value.slice(1, -1), "\"") : r.value = "\"".concat(r.value, "\"");
            break;
        }
        s += r.value;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return s.replace(/\,([\}\]])/g, "$1");
}
function A(e) {
  return e.startsWith("{") && e.endsWith("}") || e.startsWith("[") && e.endsWith("]");
}
var F = /[ \t\v\f\ufeff]+/,
  S = /(?:(?![\s\x00\x22\x27\x3E\x2F\x3D\x00-\x1F\x7F-\x9F])[^\s\x00-\x1F\x7F-\x9F\x22\x27\x3E\x2F\x3D])+/,
  L = /[\.#](?:(?!-?\d)(?:[a-zA-Z0-9\xA0-\uFFFF_-])+)/,
  E = new RegExp("(?<==)(?:true|false)"),
  N = new RegExp("(?<==)-?(?:(?:0[xX][\\da-fA-F](?:_?[\\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|-?0n|-?[1-9](?:_?\\d)*n|(?:(?:0(?!\\d)|0\\d*[89]\\d*|[1-9](?:_?\\d)*)(?:\\.(?:\\d(?:_?\\d)*)?)?|\\.\\d(?:_?\\d)*)(?:[eE][+-]?\\d(?:_?\\d)*)?|-?0[0-7]+)"),
  D = new RegExp("(?<==)'(?!.*&[0-9a-zA-Z]+;)[^'\\\\]*(?:\\\\.|\\\\n[^\"\\\\]*|&[^0-9a-zA-Z;]*)*'"),
  W = new RegExp('(?<==)"(?!.*&[0-9a-zA-Z]+;)[^"\\\\]*(?:\\\\.|\\\\n[^"\\\\]*|&[^0-9a-zA-Z;]*)*"'),
  j = new RegExp("(?<==)[^\"\\s'`=<>\\x00]+");
function m(e) {
  var t = typeof e == "string" && /^(['"]).*?\1$/.test(e) ?
  // omit quotes
  e.slice(1, -1) : e;
  return t.startsWith("[") && t.endsWith("]") || t.startsWith("{") && t.endsWith("}") ? JSON.parse($(t)) : t;
}
function z(e) {
  var t = "";
  for (var i in e) {
    var s = e[i];
    switch (_typeof$1(s)) {
      case "object":
        t += " ".concat(i, "='").concat(JSON.stringify(s), "'");
        break;
      case "string":
        t += " ".concat(i, "=\"").concat(s, "\"");
        break;
      case "number":
      case "boolean":
        t += " ".concat(i, "=").concat(s);
        break;
    }
  }
  return t.slice(1);
}
var v = x.states({
  main: {
    WhiteSpace: F,
    AttributeShorthand: L,
    BooleanLiteral: {
      match: E,
      value: function value(e) {
        return e === "true";
      }
    },
    NumericLiteral: {
      match: N,
      value: function value(e) {
        var t = Number(e);
        return Number.isNaN(t) ? Number(e.replace(/_|n$/g, "")) : Number(e);
      }
    },
    SingleQuotedValue: {
      match: D,
      value: m,
      type: function type() {
        return "StringLiteral";
      }
    },
    DoubleQuotedLiteral: {
      match: W,
      value: m,
      type: function type() {
        return "StringLiteral";
      }
    },
    UnquotedLiteral: {
      match: j,
      value: m,
      type: function type() {
        return "StringLiteral";
      }
    },
    AttributeName: S,
    Separator: "="
  }
});
function C(e) {
  var t = null;
  var i = v.reset(e),
    s = {};
  Object.defineProperties(s, {
    toString: {
      writable: !1,
      enumerable: !1,
      configurable: !1,
      value: function value() {
        return z(s);
      }
    },
    getTokens: {
      writable: !1,
      enumerable: !1,
      configurable: !1,
      value: function value() {
        return Array.from(v.reset(e));
      }
    }
  });
  var r = [];
  var _iterator2 = _createForOfIteratorHelper(i),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = _step2.value,
        u = _step2$value.type,
        l = _step2$value.value;
      switch (u) {
        case "AttributeName":
          t = l, s[t] = t;
          break;
        case "AttributeShorthand":
          var p = l[0];
          p === "." ? r.push(l.slice(1)) : p === "#" && (s.id = l.slice(1));
          break;
        case "BooleanLiteral":
        case "NumericLiteral":
        case "StringLiteral":
          t && (t === "class" && r.push(l), s[t] = l, t = null);
          break;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return r.length && (s["class"] = r.join(" ")), s;
}
var O = x.compile({
  spaces: /[\t\v\f\ufeff ]+/,
  name: /[a-zA-Z][\w-]*/,
  attrs: {
    match: /\{.*\}/,
    value: function value(e) {
      return C(e.slice(1, -1));
    }
  },
  text: {
    match: /\[.*\]/,
    value: function value(e) {
      return e.slice(1, -1);
    }
  },
  blockText: {
    match: /[\s\S]+/,
    lineBreaks: !0
  }
});
function T(e) {
  var t = e.type,
    i = e.level,
    s = e.raw,
    r = e.content,
    u = e.marker,
    l = e.tag,
    p = O.reset(r);
  var a,
    n,
    c = "",
    f = [];
  var _iterator3 = _createForOfIteratorHelper(p),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _step3$value = _step3.value,
        o = _step3$value.type,
        d = _step3$value.value;
      switch (o) {
        case "name":
          a = d;
          break;
        case "attrs":
          n = d;
          break;
        case "text":
        case "blockText":
          c = d, f = i === "container" ? this.lexer.blockTokens(d) : this.lexer.inlineTokens(d);
          break;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return {
    type: t,
    raw: s,
    meta: {
      level: i,
      marker: u,
      tag: l,
      name: a
    },
    attrs: n,
    text: c,
    tokens: f
  };
}
function Z(e, t) {
  switch (e) {
    case "container":
      return "^".concat(t, "([\\s\\S]*?)\\n").concat(t);
    case "block":
      return "^".concat(t, "((?:[a-zA-Z][\\w-]*|[\\{\\[].*?[\\}\\]])+)");
    case "inline":
      return "^".concat(t, "((?:[a-zA-Z][\\w-]*|[\\{].*?[\\}]+|[\\[].*?[\\]])+)");
  }
}
function B(e) {
  return e[0].toUpperCase() + e.slice(1).toLowerCase();
}
function g(e) {
  return ["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"].includes(e);
}
function R(e) {
  var t = e.meta,
    i = e.attrs,
    _e$tokens = e.tokens,
    s = _e$tokens === void 0 ? [] : _e$tokens,
    r = t.name || t.tag;
  var u = "<".concat(r);
  return u += i ? " " + i.toString() : "", u += g(r) ? " />" : ">", u += t.level === "container" ? "\n" : "", g(r) || (u += t.level === "container" ? this.parser.parse(s) : this.parser.parseInline(s), u += "</".concat(r, ">")), u += t.level === "inline" ? "" : "\n", u;
}
var I = [{
  level: "container",
  marker: ":::"
}, {
  level: "block",
  marker: "::"
}, {
  level: "inline",
  marker: ":"
}];
function U() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : I;
  return {
    extensions: e.map(function (_ref) {
      var t = _ref.level,
        i = _ref.marker,
        s = _ref.tag,
        r = _ref.renderer;
      var u = _(i).int32(),
        l = "directive".concat(B(t)).concat(u);
      return {
        name: l,
        level: t === "inline" ? "inline" : "block",
        start: function start(p) {
          var a;
          return (a = p.match(new RegExp(i))) == null ? void 0 : a.index;
        },
        tokenizer: function tokenizer(p) {
          var a = Z(t, i),
            n = p.match(new RegExp(a));
          if (n) {
            var _n = _slicedToArray(n, 2),
              c = _n[0],
              _n$ = _n[1],
              f = _n$ === void 0 ? "" : _n$;
            return T.call(this, {
              type: l,
              level: t,
              raw: c,
              content: f,
              marker: i,
              tag: s || (t === "inline" ? "span" : "div")
            });
          }
        },
        renderer: r || R
      };
    })
  };
}

var $$ = function $$(selector) {
  return Array.from(document.querySelectorAll(selector));
};
var markdown = Plugin$1();
markdown.marked.use(U());
X.initialize({
  plugins: [markdown, Plugin, RevealRandomColors],
  width: 1024,
  height: 728,
  controls: true,
  scrollProgress: true,
  progress: true,
  history: true,
  center: true,
  overview: false
});
X.on('ready', function () {
  window.localStorage.setItem('reveal-speaker-layout', 'tall');
  $$('a > img').forEach(function (el) {
    el.parentNode.classList.add('image');
  });
  $$('section[data-background]').forEach(function (el) {
    var isEmpty = Array.from(el.children).every(function (child) {
      return typeof child.nodeValue === 'text' && child.nodeValue.trim() === '' || child.classList.contains('notes');
    });
    if (isEmpty) {
      el.classList.add('empty');
    }
  });
  $$('section[data-markdown] > h1, section[data-markdown] > h2, section[data-markdown] > h3').forEach(function (el) {
    if (el.nextElementSibling && el.nextElementSibling.classList.contains('notes')) {
      el.classList.add('last-child');
    }
  });
  $$('section[data-markdown]').forEach(function (section) {
    if (section.querySelectorAll('pre > code').length) {
      section.setAttribute('data-state', 'code');
    }
  });
});
X.on('pdf-ready', function () {
  $$('.pdf-page').forEach(function (el) {
    el.style.minHeight = el.style.height;
    el.style.height = "";
    var speakerNotes = el.querySelector('.speaker-notes');
    if (speakerNotes) {
      speakerNotes.style.marginTop = el.style.minHeight;
    }
  });
});
