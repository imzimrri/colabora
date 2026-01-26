;(function () {
  const P = document.createElement("link").relList
  if (P && P.supports && P.supports("modulepreload")) return
  for (const y of document.querySelectorAll('link[rel="modulepreload"]')) I(y)
  new MutationObserver((y) => {
    for (const F of y)
      if (F.type === "childList")
        for (const b of F.addedNodes)
          b.tagName === "LINK" && b.rel === "modulepreload" && I(b)
  }).observe(document, { childList: !0, subtree: !0 })
  function h(y) {
    const F = {}
    return (
      y.integrity && (F.integrity = y.integrity),
      y.referrerPolicy && (F.referrerPolicy = y.referrerPolicy),
      y.crossOrigin === "use-credentials"
        ? (F.credentials = "include")
        : y.crossOrigin === "anonymous"
          ? (F.credentials = "omit")
          : (F.credentials = "same-origin"),
      F
    )
  }
  function I(y) {
    if (y.ep) return
    y.ep = !0
    const F = h(y)
    fetch(y.href, F)
  }
})()
var Ps = { exports: {} },
  Nr = {},
  _s = { exports: {} },
  W = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _u
function bd() {
  if (_u) return W
  _u = 1
  var g = Symbol.for("react.element"),
    P = Symbol.for("react.portal"),
    h = Symbol.for("react.fragment"),
    I = Symbol.for("react.strict_mode"),
    y = Symbol.for("react.profiler"),
    F = Symbol.for("react.provider"),
    b = Symbol.for("react.context"),
    Z = Symbol.for("react.forward_ref"),
    O = Symbol.for("react.suspense"),
    D = Symbol.for("react.memo"),
    B = Symbol.for("react.lazy"),
    V = Symbol.iterator
  function Y(d) {
    return d === null || typeof d != "object"
      ? null
      : ((d = (V && d[V]) || d["@@iterator"]),
        typeof d == "function" ? d : null)
  }
  var qe = {
      isMounted: function () {
        return !1
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Ge = Object.assign,
    le = {}
  function J(d, x, U) {
    ;((this.props = d),
      (this.context = x),
      (this.refs = le),
      (this.updater = U || qe))
  }
  ;((J.prototype.isReactComponent = {}),
    (J.prototype.setState = function (d, x) {
      if (typeof d != "object" && typeof d != "function" && d != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        )
      this.updater.enqueueSetState(this, d, x, "setState")
    }),
    (J.prototype.forceUpdate = function (d) {
      this.updater.enqueueForceUpdate(this, d, "forceUpdate")
    }))
  function xt() {}
  xt.prototype = J.prototype
  function dt(d, x, U) {
    ;((this.props = d),
      (this.context = x),
      (this.refs = le),
      (this.updater = U || qe))
  }
  var tt = (dt.prototype = new xt())
  ;((tt.constructor = dt), Ge(tt, J.prototype), (tt.isPureReactComponent = !0))
  var ke = Array.isArray,
    nt = Object.prototype.hasOwnProperty,
    Pe = { current: null },
    Be = { key: !0, ref: !0, __self: !0, __source: !0 }
  function $e(d, x, U) {
    var H,
      q = {},
      G = null,
      ee = null
    if (x != null)
      for (H in (x.ref !== void 0 && (ee = x.ref),
      x.key !== void 0 && (G = "" + x.key),
      x))
        nt.call(x, H) && !Be.hasOwnProperty(H) && (q[H] = x[H])
    var K = arguments.length - 2
    if (K === 1) q.children = U
    else if (1 < K) {
      for (var ie = Array(K), Ue = 0; Ue < K; Ue++) ie[Ue] = arguments[Ue + 2]
      q.children = ie
    }
    if (d && d.defaultProps)
      for (H in ((K = d.defaultProps), K)) q[H] === void 0 && (q[H] = K[H])
    return {
      $$typeof: g,
      type: d,
      key: G,
      ref: ee,
      props: q,
      _owner: Pe.current,
    }
  }
  function _t(d, x) {
    return {
      $$typeof: g,
      type: d.type,
      key: x,
      ref: d.ref,
      props: d.props,
      _owner: d._owner,
    }
  }
  function wt(d) {
    return typeof d == "object" && d !== null && d.$$typeof === g
  }
  function Yt(d) {
    var x = { "=": "=0", ":": "=2" }
    return (
      "$" +
      d.replace(/[=:]/g, function (U) {
        return x[U]
      })
    )
  }
  var ft = /\/+/g
  function be(d, x) {
    return typeof d == "object" && d !== null && d.key != null
      ? Yt("" + d.key)
      : x.toString(36)
  }
  function rt(d, x, U, H, q) {
    var G = typeof d
    ;(G === "undefined" || G === "boolean") && (d = null)
    var ee = !1
    if (d === null) ee = !0
    else
      switch (G) {
        case "string":
        case "number":
          ee = !0
          break
        case "object":
          switch (d.$$typeof) {
            case g:
            case P:
              ee = !0
          }
      }
    if (ee)
      return (
        (ee = d),
        (q = q(ee)),
        (d = H === "" ? "." + be(ee, 0) : H),
        ke(q)
          ? ((U = ""),
            d != null && (U = d.replace(ft, "$&/") + "/"),
            rt(q, x, U, "", function (Ue) {
              return Ue
            }))
          : q != null &&
            (wt(q) &&
              (q = _t(
                q,
                U +
                  (!q.key || (ee && ee.key === q.key)
                    ? ""
                    : ("" + q.key).replace(ft, "$&/") + "/") +
                  d,
              )),
            x.push(q)),
        1
      )
    if (((ee = 0), (H = H === "" ? "." : H + ":"), ke(d)))
      for (var K = 0; K < d.length; K++) {
        G = d[K]
        var ie = H + be(G, K)
        ee += rt(G, x, U, ie, q)
      }
    else if (((ie = Y(d)), typeof ie == "function"))
      for (d = ie.call(d), K = 0; !(G = d.next()).done; )
        ((G = G.value), (ie = H + be(G, K++)), (ee += rt(G, x, U, ie, q)))
    else if (G === "object")
      throw (
        (x = String(d)),
        Error(
          "Objects are not valid as a React child (found: " +
            (x === "[object Object]"
              ? "object with keys {" + Object.keys(d).join(", ") + "}"
              : x) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      )
    return ee
  }
  function pt(d, x, U) {
    if (d == null) return d
    var H = [],
      q = 0
    return (
      rt(d, H, "", "", function (G) {
        return x.call(U, G, q++)
      }),
      H
    )
  }
  function Le(d) {
    if (d._status === -1) {
      var x = d._result
      ;((x = x()),
        x.then(
          function (U) {
            ;(d._status === 0 || d._status === -1) &&
              ((d._status = 1), (d._result = U))
          },
          function (U) {
            ;(d._status === 0 || d._status === -1) &&
              ((d._status = 2), (d._result = U))
          },
        ),
        d._status === -1 && ((d._status = 0), (d._result = x)))
    }
    if (d._status === 1) return d._result.default
    throw d._result
  }
  var ue = { current: null },
    k = { transition: null },
    M = {
      ReactCurrentDispatcher: ue,
      ReactCurrentBatchConfig: k,
      ReactCurrentOwner: Pe,
    }
  function E() {
    throw Error("act(...) is not supported in production builds of React.")
  }
  return (
    (W.Children = {
      map: pt,
      forEach: function (d, x, U) {
        pt(
          d,
          function () {
            x.apply(this, arguments)
          },
          U,
        )
      },
      count: function (d) {
        var x = 0
        return (
          pt(d, function () {
            x++
          }),
          x
        )
      },
      toArray: function (d) {
        return (
          pt(d, function (x) {
            return x
          }) || []
        )
      },
      only: function (d) {
        if (!wt(d))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          )
        return d
      },
    }),
    (W.Component = J),
    (W.Fragment = h),
    (W.Profiler = y),
    (W.PureComponent = dt),
    (W.StrictMode = I),
    (W.Suspense = O),
    (W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
    (W.act = E),
    (W.cloneElement = function (d, x, U) {
      if (d == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            d +
            ".",
        )
      var H = Ge({}, d.props),
        q = d.key,
        G = d.ref,
        ee = d._owner
      if (x != null) {
        if (
          (x.ref !== void 0 && ((G = x.ref), (ee = Pe.current)),
          x.key !== void 0 && (q = "" + x.key),
          d.type && d.type.defaultProps)
        )
          var K = d.type.defaultProps
        for (ie in x)
          nt.call(x, ie) &&
            !Be.hasOwnProperty(ie) &&
            (H[ie] = x[ie] === void 0 && K !== void 0 ? K[ie] : x[ie])
      }
      var ie = arguments.length - 2
      if (ie === 1) H.children = U
      else if (1 < ie) {
        K = Array(ie)
        for (var Ue = 0; Ue < ie; Ue++) K[Ue] = arguments[Ue + 2]
        H.children = K
      }
      return { $$typeof: g, type: d.type, key: q, ref: G, props: H, _owner: ee }
    }),
    (W.createContext = function (d) {
      return (
        (d = {
          $$typeof: b,
          _currentValue: d,
          _currentValue2: d,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (d.Provider = { $$typeof: F, _context: d }),
        (d.Consumer = d)
      )
    }),
    (W.createElement = $e),
    (W.createFactory = function (d) {
      var x = $e.bind(null, d)
      return ((x.type = d), x)
    }),
    (W.createRef = function () {
      return { current: null }
    }),
    (W.forwardRef = function (d) {
      return { $$typeof: Z, render: d }
    }),
    (W.isValidElement = wt),
    (W.lazy = function (d) {
      return { $$typeof: B, _payload: { _status: -1, _result: d }, _init: Le }
    }),
    (W.memo = function (d, x) {
      return { $$typeof: D, type: d, compare: x === void 0 ? null : x }
    }),
    (W.startTransition = function (d) {
      var x = k.transition
      k.transition = {}
      try {
        d()
      } finally {
        k.transition = x
      }
    }),
    (W.unstable_act = E),
    (W.useCallback = function (d, x) {
      return ue.current.useCallback(d, x)
    }),
    (W.useContext = function (d) {
      return ue.current.useContext(d)
    }),
    (W.useDebugValue = function () {}),
    (W.useDeferredValue = function (d) {
      return ue.current.useDeferredValue(d)
    }),
    (W.useEffect = function (d, x) {
      return ue.current.useEffect(d, x)
    }),
    (W.useId = function () {
      return ue.current.useId()
    }),
    (W.useImperativeHandle = function (d, x, U) {
      return ue.current.useImperativeHandle(d, x, U)
    }),
    (W.useInsertionEffect = function (d, x) {
      return ue.current.useInsertionEffect(d, x)
    }),
    (W.useLayoutEffect = function (d, x) {
      return ue.current.useLayoutEffect(d, x)
    }),
    (W.useMemo = function (d, x) {
      return ue.current.useMemo(d, x)
    }),
    (W.useReducer = function (d, x, U) {
      return ue.current.useReducer(d, x, U)
    }),
    (W.useRef = function (d) {
      return ue.current.useRef(d)
    }),
    (W.useState = function (d) {
      return ue.current.useState(d)
    }),
    (W.useSyncExternalStore = function (d, x, U) {
      return ue.current.useSyncExternalStore(d, x, U)
    }),
    (W.useTransition = function () {
      return ue.current.useTransition()
    }),
    (W.version = "18.3.1"),
    W
  )
}
var zu
function Ts() {
  return (zu || ((zu = 1), (_s.exports = bd())), _s.exports)
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bu
function Ud() {
  if (Bu) return Nr
  Bu = 1
  var g = Ts(),
    P = Symbol.for("react.element"),
    h = Symbol.for("react.fragment"),
    I = Object.prototype.hasOwnProperty,
    y = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    F = { key: !0, ref: !0, __self: !0, __source: !0 }
  function b(Z, O, D) {
    var B,
      V = {},
      Y = null,
      qe = null
    ;(D !== void 0 && (Y = "" + D),
      O.key !== void 0 && (Y = "" + O.key),
      O.ref !== void 0 && (qe = O.ref))
    for (B in O) I.call(O, B) && !F.hasOwnProperty(B) && (V[B] = O[B])
    if (Z && Z.defaultProps)
      for (B in ((O = Z.defaultProps), O)) V[B] === void 0 && (V[B] = O[B])
    return {
      $$typeof: P,
      type: Z,
      key: Y,
      ref: qe,
      props: V,
      _owner: y.current,
    }
  }
  return ((Nr.Fragment = h), (Nr.jsx = b), (Nr.jsxs = b), Nr)
}
var Lu
function Wd() {
  return (Lu || ((Lu = 1), (Ps.exports = Ud())), Ps.exports)
}
var s = Wd(),
  Ll = {},
  zs = { exports: {} },
  Oe = {},
  Bs = { exports: {} },
  Ls = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tu
function Hd() {
  return (
    Tu ||
      ((Tu = 1),
      (function (g) {
        function P(k, M) {
          var E = k.length
          k.push(M)
          e: for (; 0 < E; ) {
            var d = (E - 1) >>> 1,
              x = k[d]
            if (0 < y(x, M)) ((k[d] = M), (k[E] = x), (E = d))
            else break e
          }
        }
        function h(k) {
          return k.length === 0 ? null : k[0]
        }
        function I(k) {
          if (k.length === 0) return null
          var M = k[0],
            E = k.pop()
          if (E !== M) {
            k[0] = E
            e: for (var d = 0, x = k.length, U = x >>> 1; d < U; ) {
              var H = 2 * (d + 1) - 1,
                q = k[H],
                G = H + 1,
                ee = k[G]
              if (0 > y(q, E))
                G < x && 0 > y(ee, q)
                  ? ((k[d] = ee), (k[G] = E), (d = G))
                  : ((k[d] = q), (k[H] = E), (d = H))
              else if (G < x && 0 > y(ee, E)) ((k[d] = ee), (k[G] = E), (d = G))
              else break e
            }
          }
          return M
        }
        function y(k, M) {
          var E = k.sortIndex - M.sortIndex
          return E !== 0 ? E : k.id - M.id
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var F = performance
          g.unstable_now = function () {
            return F.now()
          }
        } else {
          var b = Date,
            Z = b.now()
          g.unstable_now = function () {
            return b.now() - Z
          }
        }
        var O = [],
          D = [],
          B = 1,
          V = null,
          Y = 3,
          qe = !1,
          Ge = !1,
          le = !1,
          J = typeof setTimeout == "function" ? setTimeout : null,
          xt = typeof clearTimeout == "function" ? clearTimeout : null,
          dt = typeof setImmediate < "u" ? setImmediate : null
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling)
        function tt(k) {
          for (var M = h(D); M !== null; ) {
            if (M.callback === null) I(D)
            else if (M.startTime <= k)
              (I(D), (M.sortIndex = M.expirationTime), P(O, M))
            else break
            M = h(D)
          }
        }
        function ke(k) {
          if (((le = !1), tt(k), !Ge))
            if (h(O) !== null) ((Ge = !0), Le(nt))
            else {
              var M = h(D)
              M !== null && ue(ke, M.startTime - k)
            }
        }
        function nt(k, M) {
          ;((Ge = !1), le && ((le = !1), xt($e), ($e = -1)), (qe = !0))
          var E = Y
          try {
            for (
              tt(M), V = h(O);
              V !== null && (!(V.expirationTime > M) || (k && !Yt()));
            ) {
              var d = V.callback
              if (typeof d == "function") {
                ;((V.callback = null), (Y = V.priorityLevel))
                var x = d(V.expirationTime <= M)
                ;((M = g.unstable_now()),
                  typeof x == "function"
                    ? (V.callback = x)
                    : V === h(O) && I(O),
                  tt(M))
              } else I(O)
              V = h(O)
            }
            if (V !== null) var U = !0
            else {
              var H = h(D)
              ;(H !== null && ue(ke, H.startTime - M), (U = !1))
            }
            return U
          } finally {
            ;((V = null), (Y = E), (qe = !1))
          }
        }
        var Pe = !1,
          Be = null,
          $e = -1,
          _t = 5,
          wt = -1
        function Yt() {
          return !(g.unstable_now() - wt < _t)
        }
        function ft() {
          if (Be !== null) {
            var k = g.unstable_now()
            wt = k
            var M = !0
            try {
              M = Be(!0, k)
            } finally {
              M ? be() : ((Pe = !1), (Be = null))
            }
          } else Pe = !1
        }
        var be
        if (typeof dt == "function")
          be = function () {
            dt(ft)
          }
        else if (typeof MessageChannel < "u") {
          var rt = new MessageChannel(),
            pt = rt.port2
          ;((rt.port1.onmessage = ft),
            (be = function () {
              pt.postMessage(null)
            }))
        } else
          be = function () {
            J(ft, 0)
          }
        function Le(k) {
          ;((Be = k), Pe || ((Pe = !0), be()))
        }
        function ue(k, M) {
          $e = J(function () {
            k(g.unstable_now())
          }, M)
        }
        ;((g.unstable_IdlePriority = 5),
          (g.unstable_ImmediatePriority = 1),
          (g.unstable_LowPriority = 4),
          (g.unstable_NormalPriority = 3),
          (g.unstable_Profiling = null),
          (g.unstable_UserBlockingPriority = 2),
          (g.unstable_cancelCallback = function (k) {
            k.callback = null
          }),
          (g.unstable_continueExecution = function () {
            Ge || qe || ((Ge = !0), Le(nt))
          }),
          (g.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (_t = 0 < k ? Math.floor(1e3 / k) : 5)
          }),
          (g.unstable_getCurrentPriorityLevel = function () {
            return Y
          }),
          (g.unstable_getFirstCallbackNode = function () {
            return h(O)
          }),
          (g.unstable_next = function (k) {
            switch (Y) {
              case 1:
              case 2:
              case 3:
                var M = 3
                break
              default:
                M = Y
            }
            var E = Y
            Y = M
            try {
              return k()
            } finally {
              Y = E
            }
          }),
          (g.unstable_pauseExecution = function () {}),
          (g.unstable_requestPaint = function () {}),
          (g.unstable_runWithPriority = function (k, M) {
            switch (k) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                k = 3
            }
            var E = Y
            Y = k
            try {
              return M()
            } finally {
              Y = E
            }
          }),
          (g.unstable_scheduleCallback = function (k, M, E) {
            var d = g.unstable_now()
            switch (
              (typeof E == "object" && E !== null
                ? ((E = E.delay),
                  (E = typeof E == "number" && 0 < E ? d + E : d))
                : (E = d),
              k)
            ) {
              case 1:
                var x = -1
                break
              case 2:
                x = 250
                break
              case 5:
                x = 1073741823
                break
              case 4:
                x = 1e4
                break
              default:
                x = 5e3
            }
            return (
              (x = E + x),
              (k = {
                id: B++,
                callback: M,
                priorityLevel: k,
                startTime: E,
                expirationTime: x,
                sortIndex: -1,
              }),
              E > d
                ? ((k.sortIndex = E),
                  P(D, k),
                  h(O) === null &&
                    k === h(D) &&
                    (le ? (xt($e), ($e = -1)) : (le = !0), ue(ke, E - d)))
                : ((k.sortIndex = x), P(O, k), Ge || qe || ((Ge = !0), Le(nt))),
              k
            )
          }),
          (g.unstable_shouldYield = Yt),
          (g.unstable_wrapCallback = function (k) {
            var M = Y
            return function () {
              var E = Y
              Y = M
              try {
                return k.apply(this, arguments)
              } finally {
                Y = E
              }
            }
          }))
      })(Ls)),
    Ls
  )
}
var Mu
function Vd() {
  return (Mu || ((Mu = 1), (Bs.exports = Hd())), Bs.exports)
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Iu
function Qd() {
  if (Iu) return Oe
  Iu = 1
  var g = Ts(),
    P = Vd()
  function h(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n])
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    )
  }
  var I = new Set(),
    y = {}
  function F(e, t) {
    ;(b(e, t), b(e + "Capture", t))
  }
  function b(e, t) {
    for (y[e] = t, e = 0; e < t.length; e++) I.add(t[e])
  }
  var Z = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    O = Object.prototype.hasOwnProperty,
    D =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    B = {},
    V = {}
  function Y(e) {
    return O.call(V, e)
      ? !0
      : O.call(B, e)
        ? !1
        : D.test(e)
          ? (V[e] = !0)
          : ((B[e] = !0), !1)
  }
  function qe(e, t, n, r) {
    if (n !== null && n.type === 0) return !1
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-")
      default:
        return !1
    }
  }
  function Ge(e, t, n, r) {
    if (t === null || typeof t > "u" || qe(e, t, n, r)) return !0
    if (r) return !1
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t
        case 4:
          return t === !1
        case 5:
          return isNaN(t)
        case 6:
          return isNaN(t) || 1 > t
      }
    return !1
  }
  function le(e, t, n, r, l, i, o) {
    ;((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = o))
  }
  var J = {}
  ;("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      J[e] = new le(e, 0, !1, e, null, !1, !1)
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0]
      J[t] = new le(t, 1, !1, e[1], null, !1, !1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        J[e] = new le(e, 2, !1, e.toLowerCase(), null, !1, !1)
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      J[e] = new le(e, 2, !1, e, null, !1, !1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        J[e] = new le(e, 3, !1, e.toLowerCase(), null, !1, !1)
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      J[e] = new le(e, 3, !0, e, null, !1, !1)
    }),
    ["capture", "download"].forEach(function (e) {
      J[e] = new le(e, 4, !1, e, null, !1, !1)
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      J[e] = new le(e, 6, !1, e, null, !1, !1)
    }),
    ["rowSpan", "start"].forEach(function (e) {
      J[e] = new le(e, 5, !1, e.toLowerCase(), null, !1, !1)
    }))
  var xt = /[\-:]([a-z])/g
  function dt(e) {
    return e[1].toUpperCase()
  }
  ;("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(xt, dt)
      J[t] = new le(t, 1, !1, e, null, !1, !1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(xt, dt)
        J[t] = new le(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(xt, dt)
      J[t] = new le(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      J[e] = new le(e, 1, !1, e.toLowerCase(), null, !1, !1)
    }),
    (J.xlinkHref = new le(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      J[e] = new le(e, 1, !1, e.toLowerCase(), null, !0, !0)
    }))
  function tt(e, t, n, r) {
    var l = J.hasOwnProperty(t) ? J[t] : null
    ;(l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (Ge(t, n, l, r) && (n = null),
      r || l === null
        ? Y(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
  }
  var ke = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    nt = Symbol.for("react.element"),
    Pe = Symbol.for("react.portal"),
    Be = Symbol.for("react.fragment"),
    $e = Symbol.for("react.strict_mode"),
    _t = Symbol.for("react.profiler"),
    wt = Symbol.for("react.provider"),
    Yt = Symbol.for("react.context"),
    ft = Symbol.for("react.forward_ref"),
    be = Symbol.for("react.suspense"),
    rt = Symbol.for("react.suspense_list"),
    pt = Symbol.for("react.memo"),
    Le = Symbol.for("react.lazy"),
    ue = Symbol.for("react.offscreen"),
    k = Symbol.iterator
  function M(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (k && e[k]) || e["@@iterator"]),
        typeof e == "function" ? e : null)
  }
  var E = Object.assign,
    d
  function x(e) {
    if (d === void 0)
      try {
        throw Error()
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/)
        d = (t && t[1]) || ""
      }
    return (
      `
` +
      d +
      e
    )
  }
  var U = !1
  function H(e, t) {
    if (!e || U) return ""
    U = !0
    var n = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
      if (t)
        if (
          ((t = function () {
            throw Error()
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error()
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, [])
          } catch (m) {
            var r = m
          }
          Reflect.construct(e, [], t)
        } else {
          try {
            t.call()
          } catch (m) {
            r = m
          }
          e.call(t.prototype)
        }
      else {
        try {
          throw Error()
        } catch (m) {
          r = m
        }
        e()
      }
    } catch (m) {
      if (m && r && typeof m.stack == "string") {
        for (
          var l = m.stack.split(`
`),
            i = r.stack.split(`
`),
            o = l.length - 1,
            a = i.length - 1;
          1 <= o && 0 <= a && l[o] !== i[a];
        )
          a--
        for (; 1 <= o && 0 <= a; o--, a--)
          if (l[o] !== i[a]) {
            if (o !== 1 || a !== 1)
              do
                if ((o--, a--, 0 > a || l[o] !== i[a])) {
                  var u =
                    `
` + l[o].replace(" at new ", " at ")
                  return (
                    e.displayName &&
                      u.includes("<anonymous>") &&
                      (u = u.replace("<anonymous>", e.displayName)),
                    u
                  )
                }
              while (1 <= o && 0 <= a)
            break
          }
      }
    } finally {
      ;((U = !1), (Error.prepareStackTrace = n))
    }
    return (e = e ? e.displayName || e.name : "") ? x(e) : ""
  }
  function q(e) {
    switch (e.tag) {
      case 5:
        return x(e.type)
      case 16:
        return x("Lazy")
      case 13:
        return x("Suspense")
      case 19:
        return x("SuspenseList")
      case 0:
      case 2:
      case 15:
        return ((e = H(e.type, !1)), e)
      case 11:
        return ((e = H(e.type.render, !1)), e)
      case 1:
        return ((e = H(e.type, !0)), e)
      default:
        return ""
    }
  }
  function G(e) {
    if (e == null) return null
    if (typeof e == "function") return e.displayName || e.name || null
    if (typeof e == "string") return e
    switch (e) {
      case Be:
        return "Fragment"
      case Pe:
        return "Portal"
      case _t:
        return "Profiler"
      case $e:
        return "StrictMode"
      case be:
        return "Suspense"
      case rt:
        return "SuspenseList"
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Yt:
          return (e.displayName || "Context") + ".Consumer"
        case wt:
          return (e._context.displayName || "Context") + ".Provider"
        case ft:
          var t = e.render
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          )
        case pt:
          return (
            (t = e.displayName || null),
            t !== null ? t : G(e.type) || "Memo"
          )
        case Le:
          ;((t = e._payload), (e = e._init))
          try {
            return G(e(t))
          } catch {}
      }
    return null
  }
  function ee(e) {
    var t = e.type
    switch (e.tag) {
      case 24:
        return "Cache"
      case 9:
        return (t.displayName || "Context") + ".Consumer"
      case 10:
        return (t._context.displayName || "Context") + ".Provider"
      case 18:
        return "DehydratedFragment"
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        )
      case 7:
        return "Fragment"
      case 5:
        return t
      case 4:
        return "Portal"
      case 3:
        return "Root"
      case 6:
        return "Text"
      case 16:
        return G(t)
      case 8:
        return t === $e ? "StrictMode" : "Mode"
      case 22:
        return "Offscreen"
      case 12:
        return "Profiler"
      case 21:
        return "Scope"
      case 13:
        return "Suspense"
      case 19:
        return "SuspenseList"
      case 25:
        return "TracingMarker"
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null
        if (typeof t == "string") return t
    }
    return null
  }
  function K(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e
      case "object":
        return e
      default:
        return ""
    }
  }
  function ie(e) {
    var t = e.type
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    )
  }
  function Ue(e) {
    var t = ie(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t]
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        i = n.set
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this)
          },
          set: function (o) {
            ;((r = "" + o), i.call(this, o))
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r
          },
          setValue: function (o) {
            r = "" + o
          },
          stopTracking: function () {
            ;((e._valueTracker = null), delete e[t])
          },
        }
      )
    }
  }
  function jr(e) {
    e._valueTracker || (e._valueTracker = Ue(e))
  }
  function Ms(e) {
    if (!e) return !1
    var t = e._valueTracker
    if (!t) return !0
    var n = t.getValue(),
      r = ""
    return (
      e && (r = ie(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    )
  }
  function kr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null
    try {
      return e.activeElement || e.body
    } catch {
      return e.body
    }
  }
  function Il(e, t) {
    var n = t.checked
    return E({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    })
  }
  function Is(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked
    ;((n = K(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }))
  }
  function Rs(e, t) {
    ;((t = t.checked), t != null && tt(e, "checked", t, !1))
  }
  function Rl(e, t) {
    Rs(e, t)
    var n = K(t.value),
      r = t.type
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n)
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value")
      return
    }
    ;(t.hasOwnProperty("value")
      ? Fl(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Fl(e, t.type, K(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked))
  }
  function Fs(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return
      ;((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t))
    }
    ;((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n))
  }
  function Fl(e, t, n) {
    ;(t !== "number" || kr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
  }
  var Rn = Array.isArray
  function cn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {}
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0))
    } else {
      for (n = "" + K(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ;((e[l].selected = !0), r && (e[l].defaultSelected = !0))
          return
        }
        t !== null || e[l].disabled || (t = e[l])
      }
      t !== null && (t.selected = !0)
    }
  }
  function Ol(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(h(91))
    return E({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    })
  }
  function Os(e, t) {
    var n = t.value
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(h(92))
        if (Rn(n)) {
          if (1 < n.length) throw Error(h(93))
          n = n[0]
        }
        t = n
      }
      ;(t == null && (t = ""), (n = t))
    }
    e._wrapperState = { initialValue: K(n) }
  }
  function Ds(e, t) {
    var n = K(t.value),
      r = K(t.defaultValue)
    ;(n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r))
  }
  function bs(e) {
    var t = e.textContent
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t)
  }
  function Us(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg"
      case "math":
        return "http://www.w3.org/1998/Math/MathML"
      default:
        return "http://www.w3.org/1999/xhtml"
    }
  }
  function Dl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Us(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e
  }
  var Sr,
    Ws = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l)
            })
          }
        : e
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t
      else {
        for (
          Sr = Sr || document.createElement("div"),
            Sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Sr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild)
        for (; t.firstChild; ) e.appendChild(t.firstChild)
      }
    })
  function Fn(e, t) {
    if (t) {
      var n = e.firstChild
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t
        return
      }
    }
    e.textContent = t
  }
  var On = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Vu = ["Webkit", "ms", "Moz", "O"]
  Object.keys(On).forEach(function (e) {
    Vu.forEach(function (t) {
      ;((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (On[t] = On[e]))
    })
  })
  function Hs(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (On.hasOwnProperty(e) && On[e])
        ? ("" + t).trim()
        : t + "px"
  }
  function Vs(e, t) {
    e = e.style
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Hs(n, t[n], r)
        ;(n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, l) : (e[n] = l))
      }
  }
  var Qu = E(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  )
  function bl(e, t) {
    if (t) {
      if (Qu[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(h(137, e))
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(h(60))
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(h(61))
      }
      if (t.style != null && typeof t.style != "object") throw Error(h(62))
    }
  }
  function Ul(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string"
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1
      default:
        return !0
    }
  }
  var Wl = null
  function Hl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    )
  }
  var Vl = null,
    dn = null,
    fn = null
  function Qs(e) {
    if ((e = sr(e))) {
      if (typeof Vl != "function") throw Error(h(280))
      var t = e.stateNode
      t && ((t = Gr(t)), Vl(e.stateNode, e.type, t))
    }
  }
  function qs(e) {
    dn ? (fn ? fn.push(e) : (fn = [e])) : (dn = e)
  }
  function Gs() {
    if (dn) {
      var e = dn,
        t = fn
      if (((fn = dn = null), Qs(e), t)) for (e = 0; e < t.length; e++) Qs(t[e])
    }
  }
  function $s(e, t) {
    return e(t)
  }
  function Ys() {}
  var Ql = !1
  function Ks(e, t, n) {
    if (Ql) return e(t, n)
    Ql = !0
    try {
      return $s(e, t, n)
    } finally {
      ;((Ql = !1), (dn !== null || fn !== null) && (Ys(), Gs()))
    }
  }
  function Dn(e, t) {
    var n = e.stateNode
    if (n === null) return null
    var r = Gr(n)
    if (r === null) return null
    n = r[t]
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ;((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r))
        break e
      default:
        e = !1
    }
    if (e) return null
    if (n && typeof n != "function") throw Error(h(231, t, typeof n))
    return n
  }
  var ql = !1
  if (Z)
    try {
      var bn = {}
      ;(Object.defineProperty(bn, "passive", {
        get: function () {
          ql = !0
        },
      }),
        window.addEventListener("test", bn, bn),
        window.removeEventListener("test", bn, bn))
    } catch {
      ql = !1
    }
  function qu(e, t, n, r, l, i, o, a, u) {
    var m = Array.prototype.slice.call(arguments, 3)
    try {
      t.apply(n, m)
    } catch (w) {
      this.onError(w)
    }
  }
  var Un = !1,
    Cr = null,
    Er = !1,
    Gl = null,
    Gu = {
      onError: function (e) {
        ;((Un = !0), (Cr = e))
      },
    }
  function $u(e, t, n, r, l, i, o, a, u) {
    ;((Un = !1), (Cr = null), qu.apply(Gu, arguments))
  }
  function Yu(e, t, n, r, l, i, o, a, u) {
    if (($u.apply(this, arguments), Un)) {
      if (Un) {
        var m = Cr
        ;((Un = !1), (Cr = null))
      } else throw Error(h(198))
      Er || ((Er = !0), (Gl = m))
    }
  }
  function Kt(e) {
    var t = e,
      n = e
    if (e.alternate) for (; t.return; ) t = t.return
    else {
      e = t
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return))
      while (e)
    }
    return t.tag === 3 ? n : null
  }
  function Xs(e) {
    if (e.tag === 13) {
      var t = e.memoizedState
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated
    }
    return null
  }
  function Js(e) {
    if (Kt(e) !== e) throw Error(h(188))
  }
  function Ku(e) {
    var t = e.alternate
    if (!t) {
      if (((t = Kt(e)), t === null)) throw Error(h(188))
      return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
      var l = n.return
      if (l === null) break
      var i = l.alternate
      if (i === null) {
        if (((r = l.return), r !== null)) {
          n = r
          continue
        }
        break
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return (Js(l), e)
          if (i === r) return (Js(l), t)
          i = i.sibling
        }
        throw Error(h(188))
      }
      if (n.return !== r.return) ((n = l), (r = i))
      else {
        for (var o = !1, a = l.child; a; ) {
          if (a === n) {
            ;((o = !0), (n = l), (r = i))
            break
          }
          if (a === r) {
            ;((o = !0), (r = l), (n = i))
            break
          }
          a = a.sibling
        }
        if (!o) {
          for (a = i.child; a; ) {
            if (a === n) {
              ;((o = !0), (n = i), (r = l))
              break
            }
            if (a === r) {
              ;((o = !0), (r = i), (n = l))
              break
            }
            a = a.sibling
          }
          if (!o) throw Error(h(189))
        }
      }
      if (n.alternate !== r) throw Error(h(190))
    }
    if (n.tag !== 3) throw Error(h(188))
    return n.stateNode.current === n ? e : t
  }
  function Zs(e) {
    return ((e = Ku(e)), e !== null ? eo(e) : null)
  }
  function eo(e) {
    if (e.tag === 5 || e.tag === 6) return e
    for (e = e.child; e !== null; ) {
      var t = eo(e)
      if (t !== null) return t
      e = e.sibling
    }
    return null
  }
  var to = P.unstable_scheduleCallback,
    no = P.unstable_cancelCallback,
    Xu = P.unstable_shouldYield,
    Ju = P.unstable_requestPaint,
    de = P.unstable_now,
    Zu = P.unstable_getCurrentPriorityLevel,
    $l = P.unstable_ImmediatePriority,
    ro = P.unstable_UserBlockingPriority,
    Ar = P.unstable_NormalPriority,
    ec = P.unstable_LowPriority,
    lo = P.unstable_IdlePriority,
    Pr = null,
    mt = null
  function tc(e) {
    if (mt && typeof mt.onCommitFiberRoot == "function")
      try {
        mt.onCommitFiberRoot(Pr, e, void 0, (e.current.flags & 128) === 128)
      } catch {}
  }
  var lt = Math.clz32 ? Math.clz32 : lc,
    nc = Math.log,
    rc = Math.LN2
  function lc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((nc(e) / rc) | 0)) | 0)
  }
  var _r = 64,
    zr = 4194304
  function Wn(e) {
    switch (e & -e) {
      case 1:
        return 1
      case 2:
        return 2
      case 4:
        return 4
      case 8:
        return 8
      case 16:
        return 16
      case 32:
        return 32
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424
      case 134217728:
        return 134217728
      case 268435456:
        return 268435456
      case 536870912:
        return 536870912
      case 1073741824:
        return 1073741824
      default:
        return e
    }
  }
  function Br(e, t) {
    var n = e.pendingLanes
    if (n === 0) return 0
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      o = n & 268435455
    if (o !== 0) {
      var a = o & ~l
      a !== 0 ? (r = Wn(a)) : ((i &= o), i !== 0 && (r = Wn(i)))
    } else ((o = n & ~l), o !== 0 ? (r = Wn(o)) : i !== 0 && (r = Wn(i)))
    if (r === 0) return 0
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
    )
      return t
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        ((n = 31 - lt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l))
    return r
  }
  function ic(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1
      default:
        return -1
    }
  }
  function sc(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;
    ) {
      var o = 31 - lt(i),
        a = 1 << o,
        u = l[o]
      ;(u === -1
        ? ((a & n) === 0 || (a & r) !== 0) && (l[o] = ic(a, t))
        : u <= t && (e.expiredLanes |= a),
        (i &= ~a))
    }
  }
  function Yl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    )
  }
  function io() {
    var e = _r
    return ((_r <<= 1), (_r & 4194240) === 0 && (_r = 64), e)
  }
  function Kl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e)
    return t
  }
  function Hn(e, t, n) {
    ;((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - lt(t)),
      (e[t] = n))
  }
  function oc(e, t) {
    var n = e.pendingLanes & ~t
    ;((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements))
    var r = e.eventTimes
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - lt(n),
        i = 1 << l
      ;((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i))
    }
  }
  function Xl(e, t) {
    var n = (e.entangledLanes |= t)
    for (e = e.entanglements; n; ) {
      var r = 31 - lt(n),
        l = 1 << r
      ;((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l))
    }
  }
  var X = 0
  function so(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    )
  }
  var oo,
    Jl,
    ao,
    uo,
    co,
    Zl = !1,
    Lr = [],
    zt = null,
    Bt = null,
    Lt = null,
    Vn = new Map(),
    Qn = new Map(),
    Tt = [],
    ac =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      )
  function fo(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        zt = null
        break
      case "dragenter":
      case "dragleave":
        Bt = null
        break
      case "mouseover":
      case "mouseout":
        Lt = null
        break
      case "pointerover":
      case "pointerout":
        Vn.delete(t.pointerId)
        break
      case "gotpointercapture":
      case "lostpointercapture":
        Qn.delete(t.pointerId)
    }
  }
  function qn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = sr(t)), t !== null && Jl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e)
  }
  function uc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((zt = qn(zt, e, t, n, r, l)), !0)
      case "dragenter":
        return ((Bt = qn(Bt, e, t, n, r, l)), !0)
      case "mouseover":
        return ((Lt = qn(Lt, e, t, n, r, l)), !0)
      case "pointerover":
        var i = l.pointerId
        return (Vn.set(i, qn(Vn.get(i) || null, e, t, n, r, l)), !0)
      case "gotpointercapture":
        return (
          (i = l.pointerId),
          Qn.set(i, qn(Qn.get(i) || null, e, t, n, r, l)),
          !0
        )
    }
    return !1
  }
  function po(e) {
    var t = Xt(e.target)
    if (t !== null) {
      var n = Kt(t)
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Xs(n)), t !== null)) {
            ;((e.blockedOn = t),
              co(e.priority, function () {
                ao(n)
              }))
            return
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
          return
        }
      }
    }
    e.blockedOn = null
  }
  function Tr(e) {
    if (e.blockedOn !== null) return !1
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ti(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
      if (n === null) {
        n = e.nativeEvent
        var r = new n.constructor(n.type, n)
        ;((Wl = r), n.target.dispatchEvent(r), (Wl = null))
      } else return ((t = sr(n)), t !== null && Jl(t), (e.blockedOn = n), !1)
      t.shift()
    }
    return !0
  }
  function mo(e, t, n) {
    Tr(e) && n.delete(t)
  }
  function cc() {
    ;((Zl = !1),
      zt !== null && Tr(zt) && (zt = null),
      Bt !== null && Tr(Bt) && (Bt = null),
      Lt !== null && Tr(Lt) && (Lt = null),
      Vn.forEach(mo),
      Qn.forEach(mo))
  }
  function Gn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Zl ||
        ((Zl = !0), P.unstable_scheduleCallback(P.unstable_NormalPriority, cc)))
  }
  function $n(e) {
    function t(l) {
      return Gn(l, e)
    }
    if (0 < Lr.length) {
      Gn(Lr[0], e)
      for (var n = 1; n < Lr.length; n++) {
        var r = Lr[n]
        r.blockedOn === e && (r.blockedOn = null)
      }
    }
    for (
      zt !== null && Gn(zt, e),
        Bt !== null && Gn(Bt, e),
        Lt !== null && Gn(Lt, e),
        Vn.forEach(t),
        Qn.forEach(t),
        n = 0;
      n < Tt.length;
      n++
    )
      ((r = Tt[n]), r.blockedOn === e && (r.blockedOn = null))
    for (; 0 < Tt.length && ((n = Tt[0]), n.blockedOn === null); )
      (po(n), n.blockedOn === null && Tt.shift())
  }
  var pn = ke.ReactCurrentBatchConfig,
    Mr = !0
  function dc(e, t, n, r) {
    var l = X,
      i = pn.transition
    pn.transition = null
    try {
      ;((X = 1), ei(e, t, n, r))
    } finally {
      ;((X = l), (pn.transition = i))
    }
  }
  function fc(e, t, n, r) {
    var l = X,
      i = pn.transition
    pn.transition = null
    try {
      ;((X = 4), ei(e, t, n, r))
    } finally {
      ;((X = l), (pn.transition = i))
    }
  }
  function ei(e, t, n, r) {
    if (Mr) {
      var l = ti(e, t, n, r)
      if (l === null) (yi(e, t, r, Ir, n), fo(e, r))
      else if (uc(l, e, t, n, r)) r.stopPropagation()
      else if ((fo(e, r), t & 4 && -1 < ac.indexOf(e))) {
        for (; l !== null; ) {
          var i = sr(l)
          if (
            (i !== null && oo(i),
            (i = ti(e, t, n, r)),
            i === null && yi(e, t, r, Ir, n),
            i === l)
          )
            break
          l = i
        }
        l !== null && r.stopPropagation()
      } else yi(e, t, r, null, n)
    }
  }
  var Ir = null
  function ti(e, t, n, r) {
    if (((Ir = null), (e = Hl(r)), (e = Xt(e)), e !== null))
      if (((t = Kt(e)), t === null)) e = null
      else if (((n = t.tag), n === 13)) {
        if (((e = Xs(t)), e !== null)) return e
        e = null
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null
        e = null
      } else t !== e && (e = null)
    return ((Ir = e), null)
  }
  function ho(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4
      case "message":
        switch (Zu()) {
          case $l:
            return 1
          case ro:
            return 4
          case Ar:
          case ec:
            return 16
          case lo:
            return 536870912
          default:
            return 16
        }
      default:
        return 16
    }
  }
  var Mt = null,
    ni = null,
    Rr = null
  function go() {
    if (Rr) return Rr
    var e,
      t = ni,
      n = t.length,
      r,
      l = "value" in Mt ? Mt.value : Mt.textContent,
      i = l.length
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (Rr = l.slice(e, 1 < r ? 1 - r : void 0))
  }
  function Fr(e) {
    var t = e.keyCode
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    )
  }
  function Or() {
    return !0
  }
  function vo() {
    return !1
  }
  function We(e) {
    function t(n, r, l, i, o) {
      ;((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = o),
        (this.currentTarget = null))
      for (var a in e)
        e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]))
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Or
          : vo),
        (this.isPropagationStopped = vo),
        this
      )
    }
    return (
      E(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var n = this.nativeEvent
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Or))
        },
        stopPropagation: function () {
          var n = this.nativeEvent
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Or))
        },
        persist: function () {},
        isPersistent: Or,
      }),
      t
    )
  }
  var mn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ri = We(mn),
    Yn = E({}, mn, { view: 0, detail: 0 }),
    pc = We(Yn),
    li,
    ii,
    Kn,
    Dr = E({}, Yn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: oi,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Kn &&
              (Kn && e.type === "mousemove"
                ? ((li = e.screenX - Kn.screenX), (ii = e.screenY - Kn.screenY))
                : (ii = li = 0),
              (Kn = e)),
            li)
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ii
      },
    }),
    yo = We(Dr),
    mc = E({}, Dr, { dataTransfer: 0 }),
    hc = We(mc),
    gc = E({}, Yn, { relatedTarget: 0 }),
    si = We(gc),
    vc = E({}, mn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    yc = We(vc),
    xc = E({}, mn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
      },
    }),
    wc = We(xc),
    Nc = E({}, mn, { data: 0 }),
    xo = We(Nc),
    jc = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    kc = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Sc = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    }
  function Cc(e) {
    var t = this.nativeEvent
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Sc[e])
        ? !!t[e]
        : !1
  }
  function oi() {
    return Cc
  }
  var Ec = E({}, Yn, {
      key: function (e) {
        if (e.key) {
          var t = jc[e.key] || e.key
          if (t !== "Unidentified") return t
        }
        return e.type === "keypress"
          ? ((e = Fr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? kc[e.keyCode] || "Unidentified"
            : ""
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: oi,
      charCode: function (e) {
        return e.type === "keypress" ? Fr(e) : 0
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
      },
      which: function (e) {
        return e.type === "keypress"
          ? Fr(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0
      },
    }),
    Ac = We(Ec),
    Pc = E({}, Dr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    wo = We(Pc),
    _c = E({}, Yn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: oi,
    }),
    zc = We(_c),
    Bc = E({}, mn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Lc = We(Bc),
    Tc = E({}, Dr, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Mc = We(Tc),
    Ic = [9, 13, 27, 32],
    ai = Z && "CompositionEvent" in window,
    Xn = null
  Z && "documentMode" in document && (Xn = document.documentMode)
  var Rc = Z && "TextEvent" in window && !Xn,
    No = Z && (!ai || (Xn && 8 < Xn && 11 >= Xn)),
    jo = " ",
    ko = !1
  function So(e, t) {
    switch (e) {
      case "keyup":
        return Ic.indexOf(t.keyCode) !== -1
      case "keydown":
        return t.keyCode !== 229
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0
      default:
        return !1
    }
  }
  function Co(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null)
  }
  var hn = !1
  function Fc(e, t) {
    switch (e) {
      case "compositionend":
        return Co(t)
      case "keypress":
        return t.which !== 32 ? null : ((ko = !0), jo)
      case "textInput":
        return ((e = t.data), e === jo && ko ? null : e)
      default:
        return null
    }
  }
  function Oc(e, t) {
    if (hn)
      return e === "compositionend" || (!ai && So(e, t))
        ? ((e = go()), (Rr = ni = Mt = null), (hn = !1), e)
        : null
    switch (e) {
      case "paste":
        return null
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char
          if (t.which) return String.fromCharCode(t.which)
        }
        return null
      case "compositionend":
        return No && t.locale !== "ko" ? null : t.data
      default:
        return null
    }
  }
  var Dc = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  }
  function Eo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return t === "input" ? !!Dc[e.type] : t === "textarea"
  }
  function Ao(e, t, n, r) {
    ;(qs(r),
      (t = Vr(t, "onChange")),
      0 < t.length &&
        ((n = new ri("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })))
  }
  var Jn = null,
    Zn = null
  function bc(e) {
    Qo(e, 0)
  }
  function br(e) {
    var t = wn(e)
    if (Ms(t)) return e
  }
  function Uc(e, t) {
    if (e === "change") return t
  }
  var Po = !1
  if (Z) {
    var ui
    if (Z) {
      var ci = "oninput" in document
      if (!ci) {
        var _o = document.createElement("div")
        ;(_o.setAttribute("oninput", "return;"),
          (ci = typeof _o.oninput == "function"))
      }
      ui = ci
    } else ui = !1
    Po = ui && (!document.documentMode || 9 < document.documentMode)
  }
  function zo() {
    Jn && (Jn.detachEvent("onpropertychange", Bo), (Zn = Jn = null))
  }
  function Bo(e) {
    if (e.propertyName === "value" && br(Zn)) {
      var t = []
      ;(Ao(t, Zn, e, Hl(e)), Ks(bc, t))
    }
  }
  function Wc(e, t, n) {
    e === "focusin"
      ? (zo(), (Jn = t), (Zn = n), Jn.attachEvent("onpropertychange", Bo))
      : e === "focusout" && zo()
  }
  function Hc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return br(Zn)
  }
  function Vc(e, t) {
    if (e === "click") return br(t)
  }
  function Qc(e, t) {
    if (e === "input" || e === "change") return br(t)
  }
  function qc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
  }
  var it = typeof Object.is == "function" ? Object.is : qc
  function er(e, t) {
    if (it(e, t)) return !0
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1
    var n = Object.keys(e),
      r = Object.keys(t)
    if (n.length !== r.length) return !1
    for (r = 0; r < n.length; r++) {
      var l = n[r]
      if (!O.call(t, l) || !it(e[l], t[l])) return !1
    }
    return !0
  }
  function Lo(e) {
    for (; e && e.firstChild; ) e = e.firstChild
    return e
  }
  function To(e, t) {
    var n = Lo(e)
    e = 0
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e }
        e = r
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling
            break e
          }
          n = n.parentNode
        }
        n = void 0
      }
      n = Lo(n)
    }
  }
  function Mo(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Mo(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1
  }
  function Io() {
    for (var e = window, t = kr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string"
      } catch {
        n = !1
      }
      if (n) e = t.contentWindow
      else break
      t = kr(e.document)
    }
    return t
  }
  function di(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    )
  }
  function Gc(e) {
    var t = Io(),
      n = e.focusedElem,
      r = e.selectionRange
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Mo(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && di(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)))
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection()
          var l = n.textContent.length,
            i = Math.min(r.start, l)
          ;((r = r.end === void 0 ? i : Math.min(r.end, l)),
            !e.extend && i > r && ((l = r), (r = i), (i = l)),
            (l = To(n, i)))
          var o = To(n, r)
          l &&
            o &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(o.node, o.offset))
              : (t.setEnd(o.node, o.offset), e.addRange(t)))
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top))
    }
  }
  var $c = Z && "documentMode" in document && 11 >= document.documentMode,
    gn = null,
    fi = null,
    tr = null,
    pi = !1
  function Ro(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
    pi ||
      gn == null ||
      gn !== kr(r) ||
      ((r = gn),
      "selectionStart" in r && di(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (tr && er(tr, r)) ||
        ((tr = r),
        (r = Vr(fi, "onSelect")),
        0 < r.length &&
          ((t = new ri("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = gn))))
  }
  function Ur(e, t) {
    var n = {}
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    )
  }
  var vn = {
      animationend: Ur("Animation", "AnimationEnd"),
      animationiteration: Ur("Animation", "AnimationIteration"),
      animationstart: Ur("Animation", "AnimationStart"),
      transitionend: Ur("Transition", "TransitionEnd"),
    },
    mi = {},
    Fo = {}
  Z &&
    ((Fo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete vn.animationend.animation,
      delete vn.animationiteration.animation,
      delete vn.animationstart.animation),
    "TransitionEvent" in window || delete vn.transitionend.transition)
  function Wr(e) {
    if (mi[e]) return mi[e]
    if (!vn[e]) return e
    var t = vn[e],
      n
    for (n in t) if (t.hasOwnProperty(n) && n in Fo) return (mi[e] = t[n])
    return e
  }
  var Oo = Wr("animationend"),
    Do = Wr("animationiteration"),
    bo = Wr("animationstart"),
    Uo = Wr("transitionend"),
    Wo = new Map(),
    Ho =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      )
  function It(e, t) {
    ;(Wo.set(e, t), F(t, [e]))
  }
  for (var hi = 0; hi < Ho.length; hi++) {
    var gi = Ho[hi],
      Yc = gi.toLowerCase(),
      Kc = gi[0].toUpperCase() + gi.slice(1)
    It(Yc, "on" + Kc)
  }
  ;(It(Oo, "onAnimationEnd"),
    It(Do, "onAnimationIteration"),
    It(bo, "onAnimationStart"),
    It("dblclick", "onDoubleClick"),
    It("focusin", "onFocus"),
    It("focusout", "onBlur"),
    It(Uo, "onTransitionEnd"),
    b("onMouseEnter", ["mouseout", "mouseover"]),
    b("onMouseLeave", ["mouseout", "mouseover"]),
    b("onPointerEnter", ["pointerout", "pointerover"]),
    b("onPointerLeave", ["pointerout", "pointerover"]),
    F(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    F(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    F("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    F(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    F(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    F(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ))
  var nr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Xc = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(nr),
    )
  function Vo(e, t, n) {
    var r = e.type || "unknown-event"
    ;((e.currentTarget = n), Yu(r, t, void 0, e), (e.currentTarget = null))
  }
  function Qo(e, t) {
    t = (t & 4) !== 0
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event
      r = r.listeners
      e: {
        var i = void 0
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var a = r[o],
              u = a.instance,
              m = a.currentTarget
            if (((a = a.listener), u !== i && l.isPropagationStopped())) break e
            ;(Vo(l, a, m), (i = u))
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((a = r[o]),
              (u = a.instance),
              (m = a.currentTarget),
              (a = a.listener),
              u !== i && l.isPropagationStopped())
            )
              break e
            ;(Vo(l, a, m), (i = u))
          }
      }
    }
    if (Er) throw ((e = Gl), (Er = !1), (Gl = null), e)
  }
  function ne(e, t) {
    var n = t[Si]
    n === void 0 && (n = t[Si] = new Set())
    var r = e + "__bubble"
    n.has(r) || (qo(t, e, 2, !1), n.add(r))
  }
  function vi(e, t, n) {
    var r = 0
    ;(t && (r |= 4), qo(n, e, r, t))
  }
  var Hr = "_reactListening" + Math.random().toString(36).slice(2)
  function rr(e) {
    if (!e[Hr]) {
      ;((e[Hr] = !0),
        I.forEach(function (n) {
          n !== "selectionchange" && (Xc.has(n) || vi(n, !1, e), vi(n, !0, e))
        }))
      var t = e.nodeType === 9 ? e : e.ownerDocument
      t === null || t[Hr] || ((t[Hr] = !0), vi("selectionchange", !1, t))
    }
  }
  function qo(e, t, n, r) {
    switch (ho(t)) {
      case 1:
        var l = dc
        break
      case 4:
        l = fc
        break
      default:
        l = ei
    }
    ;((n = l.bind(null, t, n, e)),
      (l = void 0),
      !ql ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1))
  }
  function yi(e, t, n, r, l) {
    var i = r
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return
        var o = r.tag
        if (o === 3 || o === 4) {
          var a = r.stateNode.containerInfo
          if (a === l || (a.nodeType === 8 && a.parentNode === l)) break
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var u = o.tag
              if (
                (u === 3 || u === 4) &&
                ((u = o.stateNode.containerInfo),
                u === l || (u.nodeType === 8 && u.parentNode === l))
              )
                return
              o = o.return
            }
          for (; a !== null; ) {
            if (((o = Xt(a)), o === null)) return
            if (((u = o.tag), u === 5 || u === 6)) {
              r = i = o
              continue e
            }
            a = a.parentNode
          }
        }
        r = r.return
      }
    Ks(function () {
      var m = i,
        w = Hl(n),
        N = []
      e: {
        var v = Wo.get(e)
        if (v !== void 0) {
          var S = ri,
            A = e
          switch (e) {
            case "keypress":
              if (Fr(n) === 0) break e
            case "keydown":
            case "keyup":
              S = Ac
              break
            case "focusin":
              ;((A = "focus"), (S = si))
              break
            case "focusout":
              ;((A = "blur"), (S = si))
              break
            case "beforeblur":
            case "afterblur":
              S = si
              break
            case "click":
              if (n.button === 2) break e
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = yo
              break
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = hc
              break
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = zc
              break
            case Oo:
            case Do:
            case bo:
              S = yc
              break
            case Uo:
              S = Lc
              break
            case "scroll":
              S = pc
              break
            case "wheel":
              S = Mc
              break
            case "copy":
            case "cut":
            case "paste":
              S = wc
              break
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = wo
          }
          var _ = (t & 4) !== 0,
            fe = !_ && e === "scroll",
            f = _ ? (v !== null ? v + "Capture" : null) : v
          _ = []
          for (var c = m, p; c !== null; ) {
            p = c
            var j = p.stateNode
            if (
              (p.tag === 5 &&
                j !== null &&
                ((p = j),
                f !== null &&
                  ((j = Dn(c, f)), j != null && _.push(lr(c, j, p)))),
              fe)
            )
              break
            c = c.return
          }
          0 < _.length &&
            ((v = new S(v, A, null, n, w)), N.push({ event: v, listeners: _ }))
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((v = e === "mouseover" || e === "pointerover"),
            (S = e === "mouseout" || e === "pointerout"),
            v &&
              n !== Wl &&
              (A = n.relatedTarget || n.fromElement) &&
              (Xt(A) || A[Nt]))
          )
            break e
          if (
            (S || v) &&
            ((v =
              w.window === w
                ? w
                : (v = w.ownerDocument)
                  ? v.defaultView || v.parentWindow
                  : window),
            S
              ? ((A = n.relatedTarget || n.toElement),
                (S = m),
                (A = A ? Xt(A) : null),
                A !== null &&
                  ((fe = Kt(A)), A !== fe || (A.tag !== 5 && A.tag !== 6)) &&
                  (A = null))
              : ((S = null), (A = m)),
            S !== A)
          ) {
            if (
              ((_ = yo),
              (j = "onMouseLeave"),
              (f = "onMouseEnter"),
              (c = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((_ = wo),
                (j = "onPointerLeave"),
                (f = "onPointerEnter"),
                (c = "pointer")),
              (fe = S == null ? v : wn(S)),
              (p = A == null ? v : wn(A)),
              (v = new _(j, c + "leave", S, n, w)),
              (v.target = fe),
              (v.relatedTarget = p),
              (j = null),
              Xt(w) === m &&
                ((_ = new _(f, c + "enter", A, n, w)),
                (_.target = p),
                (_.relatedTarget = fe),
                (j = _)),
              (fe = j),
              S && A)
            )
              t: {
                for (_ = S, f = A, c = 0, p = _; p; p = yn(p)) c++
                for (p = 0, j = f; j; j = yn(j)) p++
                for (; 0 < c - p; ) ((_ = yn(_)), c--)
                for (; 0 < p - c; ) ((f = yn(f)), p--)
                for (; c--; ) {
                  if (_ === f || (f !== null && _ === f.alternate)) break t
                  ;((_ = yn(_)), (f = yn(f)))
                }
                _ = null
              }
            else _ = null
            ;(S !== null && Go(N, v, S, _, !1),
              A !== null && fe !== null && Go(N, fe, A, _, !0))
          }
        }
        e: {
          if (
            ((v = m ? wn(m) : window),
            (S = v.nodeName && v.nodeName.toLowerCase()),
            S === "select" || (S === "input" && v.type === "file"))
          )
            var z = Uc
          else if (Eo(v))
            if (Po) z = Qc
            else {
              z = Hc
              var L = Wc
            }
          else
            (S = v.nodeName) &&
              S.toLowerCase() === "input" &&
              (v.type === "checkbox" || v.type === "radio") &&
              (z = Vc)
          if (z && (z = z(e, m))) {
            Ao(N, z, n, w)
            break e
          }
          ;(L && L(e, v, m),
            e === "focusout" &&
              (L = v._wrapperState) &&
              L.controlled &&
              v.type === "number" &&
              Fl(v, "number", v.value))
        }
        switch (((L = m ? wn(m) : window), e)) {
          case "focusin":
            ;(Eo(L) || L.contentEditable === "true") &&
              ((gn = L), (fi = m), (tr = null))
            break
          case "focusout":
            tr = fi = gn = null
            break
          case "mousedown":
            pi = !0
            break
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ;((pi = !1), Ro(N, n, w))
            break
          case "selectionchange":
            if ($c) break
          case "keydown":
          case "keyup":
            Ro(N, n, w)
        }
        var T
        if (ai)
          e: {
            switch (e) {
              case "compositionstart":
                var R = "onCompositionStart"
                break e
              case "compositionend":
                R = "onCompositionEnd"
                break e
              case "compositionupdate":
                R = "onCompositionUpdate"
                break e
            }
            R = void 0
          }
        else
          hn
            ? So(e, n) && (R = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart")
        ;(R &&
          (No &&
            n.locale !== "ko" &&
            (hn || R !== "onCompositionStart"
              ? R === "onCompositionEnd" && hn && (T = go())
              : ((Mt = w),
                (ni = "value" in Mt ? Mt.value : Mt.textContent),
                (hn = !0))),
          (L = Vr(m, R)),
          0 < L.length &&
            ((R = new xo(R, e, null, n, w)),
            N.push({ event: R, listeners: L }),
            T ? (R.data = T) : ((T = Co(n)), T !== null && (R.data = T)))),
          (T = Rc ? Fc(e, n) : Oc(e, n)) &&
            ((m = Vr(m, "onBeforeInput")),
            0 < m.length &&
              ((w = new xo("onBeforeInput", "beforeinput", null, n, w)),
              N.push({ event: w, listeners: m }),
              (w.data = T))))
      }
      Qo(N, t)
    })
  }
  function lr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n }
  }
  function Vr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        i = l.stateNode
      ;(l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = Dn(e, n)),
        i != null && r.unshift(lr(e, i, l)),
        (i = Dn(e, t)),
        i != null && r.push(lr(e, i, l))),
        (e = e.return))
    }
    return r
  }
  function yn(e) {
    if (e === null) return null
    do e = e.return
    while (e && e.tag !== 5)
    return e || null
  }
  function Go(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var a = n,
        u = a.alternate,
        m = a.stateNode
      if (u !== null && u === r) break
      ;(a.tag === 5 &&
        m !== null &&
        ((a = m),
        l
          ? ((u = Dn(n, i)), u != null && o.unshift(lr(n, u, a)))
          : l || ((u = Dn(n, i)), u != null && o.push(lr(n, u, a)))),
        (n = n.return))
    }
    o.length !== 0 && e.push({ event: t, listeners: o })
  }
  var Jc = /\r\n?/g,
    Zc = /\u0000|\uFFFD/g
  function $o(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Jc,
        `
`,
      )
      .replace(Zc, "")
  }
  function Qr(e, t, n) {
    if (((t = $o(t)), $o(e) !== t && n)) throw Error(h(425))
  }
  function qr() {}
  var xi = null,
    wi = null
  function Ni(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    )
  }
  var ji = typeof setTimeout == "function" ? setTimeout : void 0,
    ed = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Yo = typeof Promise == "function" ? Promise : void 0,
    td =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Yo < "u"
          ? function (e) {
              return Yo.resolve(null).then(e).catch(nd)
            }
          : ji
  function nd(e) {
    setTimeout(function () {
      throw e
    })
  }
  function ki(e, t) {
    var n = t,
      r = 0
    do {
      var l = n.nextSibling
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            ;(e.removeChild(l), $n(t))
            return
          }
          r--
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++
      n = l
    } while (n)
    $n(t)
  }
  function Rt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType
      if (t === 1 || t === 3) break
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break
        if (t === "/$") return null
      }
    }
    return e
  }
  function Ko(e) {
    e = e.previousSibling
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e
          t--
        } else n === "/$" && t++
      }
      e = e.previousSibling
    }
    return null
  }
  var xn = Math.random().toString(36).slice(2),
    ht = "__reactFiber$" + xn,
    ir = "__reactProps$" + xn,
    Nt = "__reactContainer$" + xn,
    Si = "__reactEvents$" + xn,
    rd = "__reactListeners$" + xn,
    ld = "__reactHandles$" + xn
  function Xt(e) {
    var t = e[ht]
    if (t) return t
    for (var n = e.parentNode; n; ) {
      if ((t = n[Nt] || n[ht])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Ko(e); e !== null; ) {
            if ((n = e[ht])) return n
            e = Ko(e)
          }
        return t
      }
      ;((e = n), (n = e.parentNode))
    }
    return null
  }
  function sr(e) {
    return (
      (e = e[ht] || e[Nt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    )
  }
  function wn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode
    throw Error(h(33))
  }
  function Gr(e) {
    return e[ir] || null
  }
  var Ci = [],
    Nn = -1
  function Ft(e) {
    return { current: e }
  }
  function re(e) {
    0 > Nn || ((e.current = Ci[Nn]), (Ci[Nn] = null), Nn--)
  }
  function te(e, t) {
    ;(Nn++, (Ci[Nn] = e.current), (e.current = t))
  }
  var Ot = {},
    Se = Ft(Ot),
    Te = Ft(!1),
    Jt = Ot
  function jn(e, t) {
    var n = e.type.contextTypes
    if (!n) return Ot
    var r = e.stateNode
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext
    var l = {},
      i
    for (i in n) l[i] = t[i]
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    )
  }
  function Me(e) {
    return ((e = e.childContextTypes), e != null)
  }
  function $r() {
    ;(re(Te), re(Se))
  }
  function Xo(e, t, n) {
    if (Se.current !== Ot) throw Error(h(168))
    ;(te(Se, t), te(Te, n))
  }
  function Jo(e, t, n) {
    var r = e.stateNode
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n
    r = r.getChildContext()
    for (var l in r) if (!(l in t)) throw Error(h(108, ee(e) || "Unknown", l))
    return E({}, n, r)
  }
  function Yr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Ot),
      (Jt = Se.current),
      te(Se, e),
      te(Te, Te.current),
      !0
    )
  }
  function Zo(e, t, n) {
    var r = e.stateNode
    if (!r) throw Error(h(169))
    ;(n
      ? ((e = Jo(e, t, Jt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        re(Te),
        re(Se),
        te(Se, e))
      : re(Te),
      te(Te, n))
  }
  var jt = null,
    Kr = !1,
    Ei = !1
  function ea(e) {
    jt === null ? (jt = [e]) : jt.push(e)
  }
  function id(e) {
    ;((Kr = !0), ea(e))
  }
  function Dt() {
    if (!Ei && jt !== null) {
      Ei = !0
      var e = 0,
        t = X
      try {
        var n = jt
        for (X = 1; e < n.length; e++) {
          var r = n[e]
          do r = r(!0)
          while (r !== null)
        }
        ;((jt = null), (Kr = !1))
      } catch (l) {
        throw (jt !== null && (jt = jt.slice(e + 1)), to($l, Dt), l)
      } finally {
        ;((X = t), (Ei = !1))
      }
    }
    return null
  }
  var kn = [],
    Sn = 0,
    Xr = null,
    Jr = 0,
    Ye = [],
    Ke = 0,
    Zt = null,
    kt = 1,
    St = ""
  function en(e, t) {
    ;((kn[Sn++] = Jr), (kn[Sn++] = Xr), (Xr = e), (Jr = t))
  }
  function ta(e, t, n) {
    ;((Ye[Ke++] = kt), (Ye[Ke++] = St), (Ye[Ke++] = Zt), (Zt = e))
    var r = kt
    e = St
    var l = 32 - lt(r) - 1
    ;((r &= ~(1 << l)), (n += 1))
    var i = 32 - lt(t) + l
    if (30 < i) {
      var o = l - (l % 5)
      ;((i = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (l -= o),
        (kt = (1 << (32 - lt(t) + l)) | (n << l) | r),
        (St = i + e))
    } else ((kt = (1 << i) | (n << l) | r), (St = e))
  }
  function Ai(e) {
    e.return !== null && (en(e, 1), ta(e, 1, 0))
  }
  function Pi(e) {
    for (; e === Xr; )
      ((Xr = kn[--Sn]), (kn[Sn] = null), (Jr = kn[--Sn]), (kn[Sn] = null))
    for (; e === Zt; )
      ((Zt = Ye[--Ke]),
        (Ye[Ke] = null),
        (St = Ye[--Ke]),
        (Ye[Ke] = null),
        (kt = Ye[--Ke]),
        (Ye[Ke] = null))
  }
  var He = null,
    Ve = null,
    se = !1,
    st = null
  function na(e, t) {
    var n = et(5, null, null, 0)
    ;((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n))
  }
  function ra(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (He = e), (Ve = Rt(t.firstChild)), !0)
            : !1
        )
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (He = e), (Ve = null), !0) : !1
        )
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Zt !== null ? { id: kt, overflow: St } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = et(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (He = e),
              (Ve = null),
              !0)
            : !1
        )
      default:
        return !1
    }
  }
  function _i(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
  }
  function zi(e) {
    if (se) {
      var t = Ve
      if (t) {
        var n = t
        if (!ra(e, t)) {
          if (_i(e)) throw Error(h(418))
          t = Rt(n.nextSibling)
          var r = He
          t && ra(e, t)
            ? na(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (se = !1), (He = e))
        }
      } else {
        if (_i(e)) throw Error(h(418))
        ;((e.flags = (e.flags & -4097) | 2), (se = !1), (He = e))
      }
    }
  }
  function la(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return
    He = e
  }
  function Zr(e) {
    if (e !== He) return !1
    if (!se) return (la(e), (se = !0), !1)
    var t
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Ni(e.type, e.memoizedProps))),
      t && (t = Ve))
    ) {
      if (_i(e)) throw (ia(), Error(h(418)))
      for (; t; ) (na(e, t), (t = Rt(t.nextSibling)))
    }
    if ((la(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(h(317))
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data
            if (n === "/$") {
              if (t === 0) {
                Ve = Rt(e.nextSibling)
                break e
              }
              t--
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++
          }
          e = e.nextSibling
        }
        Ve = null
      }
    } else Ve = He ? Rt(e.stateNode.nextSibling) : null
    return !0
  }
  function ia() {
    for (var e = Ve; e; ) e = Rt(e.nextSibling)
  }
  function Cn() {
    ;((Ve = He = null), (se = !1))
  }
  function Bi(e) {
    st === null ? (st = [e]) : st.push(e)
  }
  var sd = ke.ReactCurrentBatchConfig
  function or(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(h(309))
          var r = n.stateNode
        }
        if (!r) throw Error(h(147, e))
        var l = r,
          i = "" + e
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (o) {
              var a = l.refs
              o === null ? delete a[i] : (a[i] = o)
            }),
            (t._stringRef = i),
            t)
      }
      if (typeof e != "string") throw Error(h(284))
      if (!n._owner) throw Error(h(290, e))
    }
    return e
  }
  function el(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        h(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    )
  }
  function sa(e) {
    var t = e._init
    return t(e._payload)
  }
  function oa(e) {
    function t(f, c) {
      if (e) {
        var p = f.deletions
        p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c)
      }
    }
    function n(f, c) {
      if (!e) return null
      for (; c !== null; ) (t(f, c), (c = c.sibling))
      return null
    }
    function r(f, c) {
      for (f = new Map(); c !== null; )
        (c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling))
      return f
    }
    function l(f, c) {
      return ((f = Gt(f, c)), (f.index = 0), (f.sibling = null), f)
    }
    function i(f, c, p) {
      return (
        (f.index = p),
        e
          ? ((p = f.alternate),
            p !== null
              ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
              : ((f.flags |= 2), c))
          : ((f.flags |= 1048576), c)
      )
    }
    function o(f) {
      return (e && f.alternate === null && (f.flags |= 2), f)
    }
    function a(f, c, p, j) {
      return c === null || c.tag !== 6
        ? ((c = js(p, f.mode, j)), (c.return = f), c)
        : ((c = l(c, p)), (c.return = f), c)
    }
    function u(f, c, p, j) {
      var z = p.type
      return z === Be
        ? w(f, c, p.props.children, j, p.key)
        : c !== null &&
            (c.elementType === z ||
              (typeof z == "object" &&
                z !== null &&
                z.$$typeof === Le &&
                sa(z) === c.type))
          ? ((j = l(c, p.props)), (j.ref = or(f, c, p)), (j.return = f), j)
          : ((j = Sl(p.type, p.key, p.props, null, f.mode, j)),
            (j.ref = or(f, c, p)),
            (j.return = f),
            j)
    }
    function m(f, c, p, j) {
      return c === null ||
        c.tag !== 4 ||
        c.stateNode.containerInfo !== p.containerInfo ||
        c.stateNode.implementation !== p.implementation
        ? ((c = ks(p, f.mode, j)), (c.return = f), c)
        : ((c = l(c, p.children || [])), (c.return = f), c)
    }
    function w(f, c, p, j, z) {
      return c === null || c.tag !== 7
        ? ((c = un(p, f.mode, j, z)), (c.return = f), c)
        : ((c = l(c, p)), (c.return = f), c)
    }
    function N(f, c, p) {
      if ((typeof c == "string" && c !== "") || typeof c == "number")
        return ((c = js("" + c, f.mode, p)), (c.return = f), c)
      if (typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case nt:
            return (
              (p = Sl(c.type, c.key, c.props, null, f.mode, p)),
              (p.ref = or(f, null, c)),
              (p.return = f),
              p
            )
          case Pe:
            return ((c = ks(c, f.mode, p)), (c.return = f), c)
          case Le:
            var j = c._init
            return N(f, j(c._payload), p)
        }
        if (Rn(c) || M(c))
          return ((c = un(c, f.mode, p, null)), (c.return = f), c)
        el(f, c)
      }
      return null
    }
    function v(f, c, p, j) {
      var z = c !== null ? c.key : null
      if ((typeof p == "string" && p !== "") || typeof p == "number")
        return z !== null ? null : a(f, c, "" + p, j)
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case nt:
            return p.key === z ? u(f, c, p, j) : null
          case Pe:
            return p.key === z ? m(f, c, p, j) : null
          case Le:
            return ((z = p._init), v(f, c, z(p._payload), j))
        }
        if (Rn(p) || M(p)) return z !== null ? null : w(f, c, p, j, null)
        el(f, p)
      }
      return null
    }
    function S(f, c, p, j, z) {
      if ((typeof j == "string" && j !== "") || typeof j == "number")
        return ((f = f.get(p) || null), a(c, f, "" + j, z))
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case nt:
            return (
              (f = f.get(j.key === null ? p : j.key) || null),
              u(c, f, j, z)
            )
          case Pe:
            return (
              (f = f.get(j.key === null ? p : j.key) || null),
              m(c, f, j, z)
            )
          case Le:
            var L = j._init
            return S(f, c, p, L(j._payload), z)
        }
        if (Rn(j) || M(j)) return ((f = f.get(p) || null), w(c, f, j, z, null))
        el(c, j)
      }
      return null
    }
    function A(f, c, p, j) {
      for (
        var z = null, L = null, T = c, R = (c = 0), xe = null;
        T !== null && R < p.length;
        R++
      ) {
        T.index > R ? ((xe = T), (T = null)) : (xe = T.sibling)
        var $ = v(f, T, p[R], j)
        if ($ === null) {
          T === null && (T = xe)
          break
        }
        ;(e && T && $.alternate === null && t(f, T),
          (c = i($, c, R)),
          L === null ? (z = $) : (L.sibling = $),
          (L = $),
          (T = xe))
      }
      if (R === p.length) return (n(f, T), se && en(f, R), z)
      if (T === null) {
        for (; R < p.length; R++)
          ((T = N(f, p[R], j)),
            T !== null &&
              ((c = i(T, c, R)),
              L === null ? (z = T) : (L.sibling = T),
              (L = T)))
        return (se && en(f, R), z)
      }
      for (T = r(f, T); R < p.length; R++)
        ((xe = S(T, f, R, p[R], j)),
          xe !== null &&
            (e &&
              xe.alternate !== null &&
              T.delete(xe.key === null ? R : xe.key),
            (c = i(xe, c, R)),
            L === null ? (z = xe) : (L.sibling = xe),
            (L = xe)))
      return (
        e &&
          T.forEach(function ($t) {
            return t(f, $t)
          }),
        se && en(f, R),
        z
      )
    }
    function _(f, c, p, j) {
      var z = M(p)
      if (typeof z != "function") throw Error(h(150))
      if (((p = z.call(p)), p == null)) throw Error(h(151))
      for (
        var L = (z = null), T = c, R = (c = 0), xe = null, $ = p.next();
        T !== null && !$.done;
        R++, $ = p.next()
      ) {
        T.index > R ? ((xe = T), (T = null)) : (xe = T.sibling)
        var $t = v(f, T, $.value, j)
        if ($t === null) {
          T === null && (T = xe)
          break
        }
        ;(e && T && $t.alternate === null && t(f, T),
          (c = i($t, c, R)),
          L === null ? (z = $t) : (L.sibling = $t),
          (L = $t),
          (T = xe))
      }
      if ($.done) return (n(f, T), se && en(f, R), z)
      if (T === null) {
        for (; !$.done; R++, $ = p.next())
          (($ = N(f, $.value, j)),
            $ !== null &&
              ((c = i($, c, R)),
              L === null ? (z = $) : (L.sibling = $),
              (L = $)))
        return (se && en(f, R), z)
      }
      for (T = r(f, T); !$.done; R++, $ = p.next())
        (($ = S(T, f, R, $.value, j)),
          $ !== null &&
            (e && $.alternate !== null && T.delete($.key === null ? R : $.key),
            (c = i($, c, R)),
            L === null ? (z = $) : (L.sibling = $),
            (L = $)))
      return (
        e &&
          T.forEach(function (Dd) {
            return t(f, Dd)
          }),
        se && en(f, R),
        z
      )
    }
    function fe(f, c, p, j) {
      if (
        (typeof p == "object" &&
          p !== null &&
          p.type === Be &&
          p.key === null &&
          (p = p.props.children),
        typeof p == "object" && p !== null)
      ) {
        switch (p.$$typeof) {
          case nt:
            e: {
              for (var z = p.key, L = c; L !== null; ) {
                if (L.key === z) {
                  if (((z = p.type), z === Be)) {
                    if (L.tag === 7) {
                      ;(n(f, L.sibling),
                        (c = l(L, p.props.children)),
                        (c.return = f),
                        (f = c))
                      break e
                    }
                  } else if (
                    L.elementType === z ||
                    (typeof z == "object" &&
                      z !== null &&
                      z.$$typeof === Le &&
                      sa(z) === L.type)
                  ) {
                    ;(n(f, L.sibling),
                      (c = l(L, p.props)),
                      (c.ref = or(f, L, p)),
                      (c.return = f),
                      (f = c))
                    break e
                  }
                  n(f, L)
                  break
                } else t(f, L)
                L = L.sibling
              }
              p.type === Be
                ? ((c = un(p.props.children, f.mode, j, p.key)),
                  (c.return = f),
                  (f = c))
                : ((j = Sl(p.type, p.key, p.props, null, f.mode, j)),
                  (j.ref = or(f, c, p)),
                  (j.return = f),
                  (f = j))
            }
            return o(f)
          case Pe:
            e: {
              for (L = p.key; c !== null; ) {
                if (c.key === L)
                  if (
                    c.tag === 4 &&
                    c.stateNode.containerInfo === p.containerInfo &&
                    c.stateNode.implementation === p.implementation
                  ) {
                    ;(n(f, c.sibling),
                      (c = l(c, p.children || [])),
                      (c.return = f),
                      (f = c))
                    break e
                  } else {
                    n(f, c)
                    break
                  }
                else t(f, c)
                c = c.sibling
              }
              ;((c = ks(p, f.mode, j)), (c.return = f), (f = c))
            }
            return o(f)
          case Le:
            return ((L = p._init), fe(f, c, L(p._payload), j))
        }
        if (Rn(p)) return A(f, c, p, j)
        if (M(p)) return _(f, c, p, j)
        el(f, p)
      }
      return (typeof p == "string" && p !== "") || typeof p == "number"
        ? ((p = "" + p),
          c !== null && c.tag === 6
            ? (n(f, c.sibling), (c = l(c, p)), (c.return = f), (f = c))
            : (n(f, c), (c = js(p, f.mode, j)), (c.return = f), (f = c)),
          o(f))
        : n(f, c)
    }
    return fe
  }
  var En = oa(!0),
    aa = oa(!1),
    tl = Ft(null),
    nl = null,
    An = null,
    Li = null
  function Ti() {
    Li = An = nl = null
  }
  function Mi(e) {
    var t = tl.current
    ;(re(tl), (e._currentValue = t))
  }
  function Ii(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break
      e = e.return
    }
  }
  function Pn(e, t) {
    ;((nl = e),
      (Li = An = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ie = !0), (e.firstContext = null)))
  }
  function Xe(e) {
    var t = e._currentValue
    if (Li !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), An === null)) {
        if (nl === null) throw Error(h(308))
        ;((An = e), (nl.dependencies = { lanes: 0, firstContext: e }))
      } else An = An.next = e
    return t
  }
  var tn = null
  function Ri(e) {
    tn === null ? (tn = [e]) : tn.push(e)
  }
  function ua(e, t, n, r) {
    var l = t.interleaved
    return (
      l === null ? ((n.next = n), Ri(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Ct(e, r)
    )
  }
  function Ct(e, t) {
    e.lanes |= t
    var n = e.alternate
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return))
    return n.tag === 3 ? n.stateNode : null
  }
  var bt = !1
  function Fi(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    }
  }
  function ca(e, t) {
    ;((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }))
  }
  function Et(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    }
  }
  function Ut(e, t, n) {
    var r = e.updateQueue
    if (r === null) return null
    if (((r = r.shared), (Q & 2) !== 0)) {
      var l = r.pending
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Ct(e, n)
      )
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Ri(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Ct(e, n)
    )
  }
  function rl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes
      ;((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n))
    }
  }
  function da(e, t) {
    var n = e.updateQueue,
      r = e.alternate
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          }
          ;(i === null ? (l = i = o) : (i = i.next = o), (n = n.next))
        } while (n !== null)
        i === null ? (l = i = t) : (i = i.next = t)
      } else l = i = t
      ;((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n))
      return
    }
    ;((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t))
  }
  function ll(e, t, n, r) {
    var l = e.updateQueue
    bt = !1
    var i = l.firstBaseUpdate,
      o = l.lastBaseUpdate,
      a = l.shared.pending
    if (a !== null) {
      l.shared.pending = null
      var u = a,
        m = u.next
      ;((u.next = null), o === null ? (i = m) : (o.next = m), (o = u))
      var w = e.alternate
      w !== null &&
        ((w = w.updateQueue),
        (a = w.lastBaseUpdate),
        a !== o &&
          (a === null ? (w.firstBaseUpdate = m) : (a.next = m),
          (w.lastBaseUpdate = u)))
    }
    if (i !== null) {
      var N = l.baseState
      ;((o = 0), (w = m = u = null), (a = i))
      do {
        var v = a.lane,
          S = a.eventTime
        if ((r & v) === v) {
          w !== null &&
            (w = w.next =
              {
                eventTime: S,
                lane: 0,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null,
              })
          e: {
            var A = e,
              _ = a
            switch (((v = t), (S = n), _.tag)) {
              case 1:
                if (((A = _.payload), typeof A == "function")) {
                  N = A.call(S, N, v)
                  break e
                }
                N = A
                break e
              case 3:
                A.flags = (A.flags & -65537) | 128
              case 0:
                if (
                  ((A = _.payload),
                  (v = typeof A == "function" ? A.call(S, N, v) : A),
                  v == null)
                )
                  break e
                N = E({}, N, v)
                break e
              case 2:
                bt = !0
            }
          }
          a.callback !== null &&
            a.lane !== 0 &&
            ((e.flags |= 64),
            (v = l.effects),
            v === null ? (l.effects = [a]) : v.push(a))
        } else
          ((S = {
            eventTime: S,
            lane: v,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          }),
            w === null ? ((m = w = S), (u = N)) : (w = w.next = S),
            (o |= v))
        if (((a = a.next), a === null)) {
          if (((a = l.shared.pending), a === null)) break
          ;((v = a),
            (a = v.next),
            (v.next = null),
            (l.lastBaseUpdate = v),
            (l.shared.pending = null))
        }
      } while (!0)
      if (
        (w === null && (u = N),
        (l.baseState = u),
        (l.firstBaseUpdate = m),
        (l.lastBaseUpdate = w),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t
        do ((o |= l.lane), (l = l.next))
        while (l !== t)
      } else i === null && (l.shared.lanes = 0)
      ;((ln |= o), (e.lanes = o), (e.memoizedState = N))
    }
  }
  function fa(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(h(191, l))
          l.call(r)
        }
      }
  }
  var ar = {},
    gt = Ft(ar),
    ur = Ft(ar),
    cr = Ft(ar)
  function nn(e) {
    if (e === ar) throw Error(h(174))
    return e
  }
  function Oi(e, t) {
    switch ((te(cr, t), te(ur, e), te(gt, ar), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Dl(null, "")
        break
      default:
        ;((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Dl(t, e)))
    }
    ;(re(gt), te(gt, t))
  }
  function _n() {
    ;(re(gt), re(ur), re(cr))
  }
  function pa(e) {
    nn(cr.current)
    var t = nn(gt.current),
      n = Dl(t, e.type)
    t !== n && (te(ur, e), te(gt, n))
  }
  function Di(e) {
    ur.current === e && (re(gt), re(ur))
  }
  var oe = Ft(0)
  function il(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t
      } else if (t.child !== null) {
        ;((t.child.return = t), (t = t.child))
        continue
      }
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null
        t = t.return
      }
      ;((t.sibling.return = t.return), (t = t.sibling))
    }
    return null
  }
  var bi = []
  function Ui() {
    for (var e = 0; e < bi.length; e++)
      bi[e]._workInProgressVersionPrimary = null
    bi.length = 0
  }
  var sl = ke.ReactCurrentDispatcher,
    Wi = ke.ReactCurrentBatchConfig,
    rn = 0,
    ae = null,
    he = null,
    ve = null,
    ol = !1,
    dr = !1,
    fr = 0,
    od = 0
  function Ce() {
    throw Error(h(321))
  }
  function Hi(e, t) {
    if (t === null) return !1
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!it(e[n], t[n])) return !1
    return !0
  }
  function Vi(e, t, n, r, l, i) {
    if (
      ((rn = i),
      (ae = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (sl.current = e === null || e.memoizedState === null ? dd : fd),
      (e = n(r, l)),
      dr)
    ) {
      i = 0
      do {
        if (((dr = !1), (fr = 0), 25 <= i)) throw Error(h(301))
        ;((i += 1),
          (ve = he = null),
          (t.updateQueue = null),
          (sl.current = pd),
          (e = n(r, l)))
      } while (dr)
    }
    if (
      ((sl.current = cl),
      (t = he !== null && he.next !== null),
      (rn = 0),
      (ve = he = ae = null),
      (ol = !1),
      t)
    )
      throw Error(h(300))
    return e
  }
  function Qi() {
    var e = fr !== 0
    return ((fr = 0), e)
  }
  function vt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    }
    return (ve === null ? (ae.memoizedState = ve = e) : (ve = ve.next = e), ve)
  }
  function Je() {
    if (he === null) {
      var e = ae.alternate
      e = e !== null ? e.memoizedState : null
    } else e = he.next
    var t = ve === null ? ae.memoizedState : ve.next
    if (t !== null) ((ve = t), (he = e))
    else {
      if (e === null) throw Error(h(310))
      ;((he = e),
        (e = {
          memoizedState: he.memoizedState,
          baseState: he.baseState,
          baseQueue: he.baseQueue,
          queue: he.queue,
          next: null,
        }),
        ve === null ? (ae.memoizedState = ve = e) : (ve = ve.next = e))
    }
    return ve
  }
  function pr(e, t) {
    return typeof t == "function" ? t(e) : t
  }
  function qi(e) {
    var t = Je(),
      n = t.queue
    if (n === null) throw Error(h(311))
    n.lastRenderedReducer = e
    var r = he,
      l = r.baseQueue,
      i = n.pending
    if (i !== null) {
      if (l !== null) {
        var o = l.next
        ;((l.next = i.next), (i.next = o))
      }
      ;((r.baseQueue = l = i), (n.pending = null))
    }
    if (l !== null) {
      ;((i = l.next), (r = r.baseState))
      var a = (o = null),
        u = null,
        m = i
      do {
        var w = m.lane
        if ((rn & w) === w)
          (u !== null &&
            (u = u.next =
              {
                lane: 0,
                action: m.action,
                hasEagerState: m.hasEagerState,
                eagerState: m.eagerState,
                next: null,
              }),
            (r = m.hasEagerState ? m.eagerState : e(r, m.action)))
        else {
          var N = {
            lane: w,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          }
          ;(u === null ? ((a = u = N), (o = r)) : (u = u.next = N),
            (ae.lanes |= w),
            (ln |= w))
        }
        m = m.next
      } while (m !== null && m !== i)
      ;(u === null ? (o = r) : (u.next = a),
        it(r, t.memoizedState) || (Ie = !0),
        (t.memoizedState = r),
        (t.baseState = o),
        (t.baseQueue = u),
        (n.lastRenderedState = r))
    }
    if (((e = n.interleaved), e !== null)) {
      l = e
      do ((i = l.lane), (ae.lanes |= i), (ln |= i), (l = l.next))
      while (l !== e)
    } else l === null && (n.lanes = 0)
    return [t.memoizedState, n.dispatch]
  }
  function Gi(e) {
    var t = Je(),
      n = t.queue
    if (n === null) throw Error(h(311))
    n.lastRenderedReducer = e
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState
    if (l !== null) {
      n.pending = null
      var o = (l = l.next)
      do ((i = e(i, o.action)), (o = o.next))
      while (o !== l)
      ;(it(i, t.memoizedState) || (Ie = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i))
    }
    return [i, r]
  }
  function ma() {}
  function ha(e, t) {
    var n = ae,
      r = Je(),
      l = t(),
      i = !it(r.memoizedState, l)
    if (
      (i && ((r.memoizedState = l), (Ie = !0)),
      (r = r.queue),
      $i(ya.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (ve !== null && ve.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        mr(9, va.bind(null, n, r, l, t), void 0, null),
        ye === null)
      )
        throw Error(h(349))
      ;(rn & 30) !== 0 || ga(n, t, l)
    }
    return l
  }
  function ga(e, t, n) {
    ;((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ae.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ae.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)))
  }
  function va(e, t, n, r) {
    ;((t.value = n), (t.getSnapshot = r), xa(t) && wa(e))
  }
  function ya(e, t, n) {
    return n(function () {
      xa(t) && wa(e)
    })
  }
  function xa(e) {
    var t = e.getSnapshot
    e = e.value
    try {
      var n = t()
      return !it(e, n)
    } catch {
      return !0
    }
  }
  function wa(e) {
    var t = Ct(e, 1)
    t !== null && ct(t, e, 1, -1)
  }
  function Na(e) {
    var t = vt()
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = cd.bind(null, ae, e)),
      [t.memoizedState, e]
    )
  }
  function mr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = ae.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ae.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    )
  }
  function ja() {
    return Je().memoizedState
  }
  function al(e, t, n, r) {
    var l = vt()
    ;((ae.flags |= e),
      (l.memoizedState = mr(1 | t, n, void 0, r === void 0 ? null : r)))
  }
  function ul(e, t, n, r) {
    var l = Je()
    r = r === void 0 ? null : r
    var i = void 0
    if (he !== null) {
      var o = he.memoizedState
      if (((i = o.destroy), r !== null && Hi(r, o.deps))) {
        l.memoizedState = mr(t, n, i, r)
        return
      }
    }
    ;((ae.flags |= e), (l.memoizedState = mr(1 | t, n, i, r)))
  }
  function ka(e, t) {
    return al(8390656, 8, e, t)
  }
  function $i(e, t) {
    return ul(2048, 8, e, t)
  }
  function Sa(e, t) {
    return ul(4, 2, e, t)
  }
  function Ca(e, t) {
    return ul(4, 4, e, t)
  }
  function Ea(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null)
        }
      )
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null
        }
      )
  }
  function Aa(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      ul(4, 4, Ea.bind(null, t, e), n)
    )
  }
  function Yi() {}
  function Pa(e, t) {
    var n = Je()
    t = t === void 0 ? null : t
    var r = n.memoizedState
    return r !== null && t !== null && Hi(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e)
  }
  function _a(e, t) {
    var n = Je()
    t = t === void 0 ? null : t
    var r = n.memoizedState
    return r !== null && t !== null && Hi(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e)
  }
  function za(e, t, n) {
    return (rn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = n))
      : (it(n, t) ||
          ((n = io()), (ae.lanes |= n), (ln |= n), (e.baseState = !0)),
        t)
  }
  function ad(e, t) {
    var n = X
    ;((X = n !== 0 && 4 > n ? n : 4), e(!0))
    var r = Wi.transition
    Wi.transition = {}
    try {
      ;(e(!1), t())
    } finally {
      ;((X = n), (Wi.transition = r))
    }
  }
  function Ba() {
    return Je().memoizedState
  }
  function ud(e, t, n) {
    var r = Qt(e)
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      La(e))
    )
      Ta(t, n)
    else if (((n = ua(e, t, n, r)), n !== null)) {
      var l = ze()
      ;(ct(n, e, r, l), Ma(n, t, r))
    }
  }
  function cd(e, t, n) {
    var r = Qt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }
    if (La(e)) Ta(t, l)
    else {
      var i = e.alternate
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var o = t.lastRenderedState,
            a = i(o, n)
          if (((l.hasEagerState = !0), (l.eagerState = a), it(a, o))) {
            var u = t.interleaved
            ;(u === null
              ? ((l.next = l), Ri(t))
              : ((l.next = u.next), (u.next = l)),
              (t.interleaved = l))
            return
          }
        } catch {
        } finally {
        }
      ;((n = ua(e, t, l, r)),
        n !== null && ((l = ze()), ct(n, e, r, l), Ma(n, t, r)))
    }
  }
  function La(e) {
    var t = e.alternate
    return e === ae || (t !== null && t === ae)
  }
  function Ta(e, t) {
    dr = ol = !0
    var n = e.pending
    ;(n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t))
  }
  function Ma(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes
      ;((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n))
    }
  }
  var cl = {
      readContext: Xe,
      useCallback: Ce,
      useContext: Ce,
      useEffect: Ce,
      useImperativeHandle: Ce,
      useInsertionEffect: Ce,
      useLayoutEffect: Ce,
      useMemo: Ce,
      useReducer: Ce,
      useRef: Ce,
      useState: Ce,
      useDebugValue: Ce,
      useDeferredValue: Ce,
      useTransition: Ce,
      useMutableSource: Ce,
      useSyncExternalStore: Ce,
      useId: Ce,
      unstable_isNewReconciler: !1,
    },
    dd = {
      readContext: Xe,
      useCallback: function (e, t) {
        return ((vt().memoizedState = [e, t === void 0 ? null : t]), e)
      },
      useContext: Xe,
      useEffect: ka,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          al(4194308, 4, Ea.bind(null, t, e), n)
        )
      },
      useLayoutEffect: function (e, t) {
        return al(4194308, 4, e, t)
      },
      useInsertionEffect: function (e, t) {
        return al(4, 2, e, t)
      },
      useMemo: function (e, t) {
        var n = vt()
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        )
      },
      useReducer: function (e, t, n) {
        var r = vt()
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = ud.bind(null, ae, e)),
          [r.memoizedState, e]
        )
      },
      useRef: function (e) {
        var t = vt()
        return ((e = { current: e }), (t.memoizedState = e))
      },
      useState: Na,
      useDebugValue: Yi,
      useDeferredValue: function (e) {
        return (vt().memoizedState = e)
      },
      useTransition: function () {
        var e = Na(!1),
          t = e[0]
        return ((e = ad.bind(null, e[1])), (vt().memoizedState = e), [t, e])
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ae,
          l = vt()
        if (se) {
          if (n === void 0) throw Error(h(407))
          n = n()
        } else {
          if (((n = t()), ye === null)) throw Error(h(349))
          ;(rn & 30) !== 0 || ga(r, t, n)
        }
        l.memoizedState = n
        var i = { value: n, getSnapshot: t }
        return (
          (l.queue = i),
          ka(ya.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          mr(9, va.bind(null, r, i, n, t), void 0, null),
          n
        )
      },
      useId: function () {
        var e = vt(),
          t = ye.identifierPrefix
        if (se) {
          var n = St,
            r = kt
          ;((n = (r & ~(1 << (32 - lt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = fr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"))
        } else ((n = od++), (t = ":" + t + "r" + n.toString(32) + ":"))
        return (e.memoizedState = t)
      },
      unstable_isNewReconciler: !1,
    },
    fd = {
      readContext: Xe,
      useCallback: Pa,
      useContext: Xe,
      useEffect: $i,
      useImperativeHandle: Aa,
      useInsertionEffect: Sa,
      useLayoutEffect: Ca,
      useMemo: _a,
      useReducer: qi,
      useRef: ja,
      useState: function () {
        return qi(pr)
      },
      useDebugValue: Yi,
      useDeferredValue: function (e) {
        var t = Je()
        return za(t, he.memoizedState, e)
      },
      useTransition: function () {
        var e = qi(pr)[0],
          t = Je().memoizedState
        return [e, t]
      },
      useMutableSource: ma,
      useSyncExternalStore: ha,
      useId: Ba,
      unstable_isNewReconciler: !1,
    },
    pd = {
      readContext: Xe,
      useCallback: Pa,
      useContext: Xe,
      useEffect: $i,
      useImperativeHandle: Aa,
      useInsertionEffect: Sa,
      useLayoutEffect: Ca,
      useMemo: _a,
      useReducer: Gi,
      useRef: ja,
      useState: function () {
        return Gi(pr)
      },
      useDebugValue: Yi,
      useDeferredValue: function (e) {
        var t = Je()
        return he === null ? (t.memoizedState = e) : za(t, he.memoizedState, e)
      },
      useTransition: function () {
        var e = Gi(pr)[0],
          t = Je().memoizedState
        return [e, t]
      },
      useMutableSource: ma,
      useSyncExternalStore: ha,
      useId: Ba,
      unstable_isNewReconciler: !1,
    }
  function ot(e, t) {
    if (e && e.defaultProps) {
      ;((t = E({}, t)), (e = e.defaultProps))
      for (var n in e) t[n] === void 0 && (t[n] = e[n])
      return t
    }
    return t
  }
  function Ki(e, t, n, r) {
    ;((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : E({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n))
  }
  var dl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Kt(e) === e : !1
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals
      var r = ze(),
        l = Qt(e),
        i = Et(r, l)
      ;((i.payload = t),
        n != null && (i.callback = n),
        (t = Ut(e, i, l)),
        t !== null && (ct(t, e, l, r), rl(t, e, l)))
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals
      var r = ze(),
        l = Qt(e),
        i = Et(r, l)
      ;((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Ut(e, i, l)),
        t !== null && (ct(t, e, l, r), rl(t, e, l)))
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals
      var n = ze(),
        r = Qt(e),
        l = Et(n, r)
      ;((l.tag = 2),
        t != null && (l.callback = t),
        (t = Ut(e, l, r)),
        t !== null && (ct(t, e, r, n), rl(t, e, r)))
    },
  }
  function Ia(e, t, n, r, l, i, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, o)
        : t.prototype && t.prototype.isPureReactComponent
          ? !er(n, r) || !er(l, i)
          : !0
    )
  }
  function Ra(e, t, n) {
    var r = !1,
      l = Ot,
      i = t.contextType
    return (
      typeof i == "object" && i !== null
        ? (i = Xe(i))
        : ((l = Me(t) ? Jt : Se.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? jn(e, l) : Ot)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = dl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    )
  }
  function Fa(e, t, n, r) {
    ;((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && dl.enqueueReplaceState(t, t.state, null))
  }
  function Xi(e, t, n, r) {
    var l = e.stateNode
    ;((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Fi(e))
    var i = t.contextType
    ;(typeof i == "object" && i !== null
      ? (l.context = Xe(i))
      : ((i = Me(t) ? Jt : Se.current), (l.context = jn(e, i))),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (Ki(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && dl.enqueueReplaceState(l, l.state, null),
        ll(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308))
  }
  function zn(e, t) {
    try {
      var n = "",
        r = t
      do ((n += q(r)), (r = r.return))
      while (r)
      var l = n
    } catch (i) {
      l =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
    }
    return { value: e, source: t, stack: l, digest: null }
  }
  function Ji(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null }
  }
  function Zi(e, t) {
    try {
      console.error(t.value)
    } catch (n) {
      setTimeout(function () {
        throw n
      })
    }
  }
  var md = typeof WeakMap == "function" ? WeakMap : Map
  function Oa(e, t, n) {
    ;((n = Et(-1, n)), (n.tag = 3), (n.payload = { element: null }))
    var r = t.value
    return (
      (n.callback = function () {
        ;(yl || ((yl = !0), (ms = r)), Zi(e, t))
      }),
      n
    )
  }
  function Da(e, t, n) {
    ;((n = Et(-1, n)), (n.tag = 3))
    var r = e.type.getDerivedStateFromError
    if (typeof r == "function") {
      var l = t.value
      ;((n.payload = function () {
        return r(l)
      }),
        (n.callback = function () {
          Zi(e, t)
        }))
    }
    var i = e.stateNode
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          ;(Zi(e, t),
            typeof r != "function" &&
              (Ht === null ? (Ht = new Set([this])) : Ht.add(this)))
          var o = t.stack
          this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : "",
          })
        }),
      n
    )
  }
  function ba(e, t, n) {
    var r = e.pingCache
    if (r === null) {
      r = e.pingCache = new md()
      var l = new Set()
      r.set(t, l)
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)))
    l.has(n) || (l.add(n), (e = Pd.bind(null, e, t, n)), t.then(e, e))
  }
  function Ua(e) {
    do {
      var t
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e
      e = e.return
    } while (e !== null)
    return null
  }
  function Wa(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Et(-1, 1)), (t.tag = 2), Ut(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e)
  }
  var hd = ke.ReactCurrentOwner,
    Ie = !1
  function _e(e, t, n, r) {
    t.child = e === null ? aa(t, null, n, r) : En(t, e.child, n, r)
  }
  function Ha(e, t, n, r, l) {
    n = n.render
    var i = t.ref
    return (
      Pn(t, l),
      (r = Vi(e, t, n, r, i, l)),
      (n = Qi()),
      e !== null && !Ie
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          At(e, t, l))
        : (se && n && Ai(t), (t.flags |= 1), _e(e, t, r, l), t.child)
    )
  }
  function Va(e, t, n, r, l) {
    if (e === null) {
      var i = n.type
      return typeof i == "function" &&
        !Ns(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Qa(e, t, i, r, l))
        : ((e = Sl(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e))
    }
    if (((i = e.child), (e.lanes & l) === 0)) {
      var o = i.memoizedProps
      if (
        ((n = n.compare), (n = n !== null ? n : er), n(o, r) && e.ref === t.ref)
      )
        return At(e, t, l)
    }
    return (
      (t.flags |= 1),
      (e = Gt(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    )
  }
  function Qa(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps
      if (er(i, r) && e.ref === t.ref)
        if (((Ie = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Ie = !0)
        else return ((t.lanes = e.lanes), At(e, t, l))
    }
    return es(e, t, n, r, l)
  }
  function qa(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          te(Ln, Qe),
          (Qe |= n))
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            te(Ln, Qe),
            (Qe |= e),
            null
          )
        ;((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          te(Ln, Qe),
          (Qe |= r))
      }
    else
      (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        te(Ln, Qe),
        (Qe |= r))
    return (_e(e, t, l, n), t.child)
  }
  function Ga(e, t) {
    var n = t.ref
    ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152))
  }
  function es(e, t, n, r, l) {
    var i = Me(n) ? Jt : Se.current
    return (
      (i = jn(t, i)),
      Pn(t, l),
      (n = Vi(e, t, n, r, i, l)),
      (r = Qi()),
      e !== null && !Ie
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          At(e, t, l))
        : (se && r && Ai(t), (t.flags |= 1), _e(e, t, n, l), t.child)
    )
  }
  function $a(e, t, n, r, l) {
    if (Me(n)) {
      var i = !0
      Yr(t)
    } else i = !1
    if ((Pn(t, l), t.stateNode === null))
      (pl(e, t), Ra(t, n, r), Xi(t, n, r, l), (r = !0))
    else if (e === null) {
      var o = t.stateNode,
        a = t.memoizedProps
      o.props = a
      var u = o.context,
        m = n.contextType
      typeof m == "object" && m !== null
        ? (m = Xe(m))
        : ((m = Me(n) ? Jt : Se.current), (m = jn(t, m)))
      var w = n.getDerivedStateFromProps,
        N =
          typeof w == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function"
      ;(N ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((a !== r || u !== m) && Fa(t, o, r, m)),
        (bt = !1))
      var v = t.memoizedState
      ;((o.state = v),
        ll(t, r, o, l),
        (u = t.memoizedState),
        a !== r || v !== u || Te.current || bt
          ? (typeof w == "function" && (Ki(t, n, w, r), (u = t.memoizedState)),
            (a = bt || Ia(t, n, a, r, v, u, m))
              ? (N ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = u)),
            (o.props = r),
            (o.state = u),
            (o.context = m),
            (r = a))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1)))
    } else {
      ;((o = t.stateNode),
        ca(e, t),
        (a = t.memoizedProps),
        (m = t.type === t.elementType ? a : ot(t.type, a)),
        (o.props = m),
        (N = t.pendingProps),
        (v = o.context),
        (u = n.contextType),
        typeof u == "object" && u !== null
          ? (u = Xe(u))
          : ((u = Me(n) ? Jt : Se.current), (u = jn(t, u))))
      var S = n.getDerivedStateFromProps
      ;((w =
        typeof S == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((a !== N || v !== u) && Fa(t, o, r, u)),
        (bt = !1),
        (v = t.memoizedState),
        (o.state = v),
        ll(t, r, o, l))
      var A = t.memoizedState
      a !== N || v !== A || Te.current || bt
        ? (typeof S == "function" && (Ki(t, n, S, r), (A = t.memoizedState)),
          (m = bt || Ia(t, n, m, r, v, A, u) || !1)
            ? (w ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(r, A, u),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, A, u)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (a === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (a === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = A)),
          (o.props = r),
          (o.state = A),
          (o.context = u),
          (r = m))
        : (typeof o.componentDidUpdate != "function" ||
            (a === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (a === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1))
    }
    return ts(e, t, n, r, i, l)
  }
  function ts(e, t, n, r, l, i) {
    Ga(e, t)
    var o = (t.flags & 128) !== 0
    if (!r && !o) return (l && Zo(t, n, !1), At(e, t, i))
    ;((r = t.stateNode), (hd.current = t))
    var a =
      o && typeof n.getDerivedStateFromError != "function" ? null : r.render()
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = En(t, e.child, null, i)), (t.child = En(t, null, a, i)))
        : _e(e, t, a, i),
      (t.memoizedState = r.state),
      l && Zo(t, n, !0),
      t.child
    )
  }
  function Ya(e) {
    var t = e.stateNode
    ;(t.pendingContext
      ? Xo(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Xo(e, t.context, !1),
      Oi(e, t.containerInfo))
  }
  function Ka(e, t, n, r, l) {
    return (Cn(), Bi(l), (t.flags |= 256), _e(e, t, n, r), t.child)
  }
  var ns = { dehydrated: null, treeContext: null, retryLane: 0 }
  function rs(e) {
    return { baseLanes: e, cachePool: null, transitions: null }
  }
  function Xa(e, t, n) {
    var r = t.pendingProps,
      l = oe.current,
      i = !1,
      o = (t.flags & 128) !== 0,
      a
    if (
      ((a = o) ||
        (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      a
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      te(oe, l & 1),
      e === null)
    )
      return (
        zi(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((o = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (o = { mode: "hidden", children: o }),
                (r & 1) === 0 && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = o))
                  : (i = Cl(o, r, 0, null)),
                (e = un(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = rs(n)),
                (t.memoizedState = ns),
                e)
              : ls(t, o))
      )
    if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
      return gd(e, t, o, r, a, l, n)
    if (i) {
      ;((i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling))
      var u = { mode: "hidden", children: r.children }
      return (
        (o & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = u),
            (t.deletions = null))
          : ((r = Gt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        a !== null ? (i = Gt(a, i)) : ((i = un(i, o, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? rs(n)
            : {
                baseLanes: o.baseLanes | n,
                cachePool: null,
                transitions: o.transitions,
              }),
        (i.memoizedState = o),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = ns),
        r
      )
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = Gt(i, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    )
  }
  function ls(e, t) {
    return (
      (t = Cl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    )
  }
  function fl(e, t, n, r) {
    return (
      r !== null && Bi(r),
      En(t, e.child, null, n),
      (e = ls(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    )
  }
  function gd(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Ji(Error(h(422)))), fl(e, t, o, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (l = t.mode),
            (r = Cl({ mode: "visible", children: r.children }, l, 0, null)),
            (i = un(i, l, o, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            (t.mode & 1) !== 0 && En(t, e.child, null, o),
            (t.child.memoizedState = rs(o)),
            (t.memoizedState = ns),
            i)
    if ((t.mode & 1) === 0) return fl(e, t, o, null)
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst
      return (
        (r = a),
        (i = Error(h(419))),
        (r = Ji(i, r, void 0)),
        fl(e, t, o, r)
      )
    }
    if (((a = (o & e.childLanes) !== 0), Ie || a)) {
      if (((r = ye), r !== null)) {
        switch (o & -o) {
          case 4:
            l = 2
            break
          case 16:
            l = 8
            break
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32
            break
          case 536870912:
            l = 268435456
            break
          default:
            l = 0
        }
        ;((l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== i.retryLane &&
            ((i.retryLane = l), Ct(e, l), ct(r, e, l, -1)))
      }
      return (ws(), (r = Ji(Error(h(421)))), fl(e, t, o, r))
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = _d.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (Ve = Rt(l.nextSibling)),
        (He = t),
        (se = !0),
        (st = null),
        e !== null &&
          ((Ye[Ke++] = kt),
          (Ye[Ke++] = St),
          (Ye[Ke++] = Zt),
          (kt = e.id),
          (St = e.overflow),
          (Zt = t)),
        (t = ls(t, r.children)),
        (t.flags |= 4096),
        t)
  }
  function Ja(e, t, n) {
    e.lanes |= t
    var r = e.alternate
    ;(r !== null && (r.lanes |= t), Ii(e.return, t, n))
  }
  function is(e, t, n, r, l) {
    var i = e.memoizedState
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = l))
  }
  function Za(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail
    if ((_e(e, t, r.children, n), (r = oe.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128))
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ja(e, n, t)
          else if (e.tag === 19) Ja(e, n, t)
          else if (e.child !== null) {
            ;((e.child.return = e), (e = e.child))
            continue
          }
          if (e === t) break e
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e
            e = e.return
          }
          ;((e.sibling.return = e.return), (e = e.sibling))
        }
      r &= 1
    }
    if ((te(oe, r), (t.mode & 1) === 0)) t.memoizedState = null
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate),
              e !== null && il(e) === null && (l = n),
              (n = n.sibling))
          ;((n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            is(t, !1, l, n, i))
          break
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && il(e) === null)) {
              t.child = l
              break
            }
            ;((e = l.sibling), (l.sibling = n), (n = l), (l = e))
          }
          is(t, !0, n, null, i)
          break
        case "together":
          is(t, !1, null, null, void 0)
          break
        default:
          t.memoizedState = null
      }
    return t.child
  }
  function pl(e, t) {
    ;(t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
  }
  function At(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (ln |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null
    if (e !== null && t.child !== e.child) throw Error(h(153))
    if (t.child !== null) {
      for (
        e = t.child, n = Gt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = Gt(e, e.pendingProps)),
          (n.return = t))
      n.sibling = null
    }
    return t.child
  }
  function vd(e, t, n) {
    switch (t.tag) {
      case 3:
        ;(Ya(t), Cn())
        break
      case 5:
        pa(t)
        break
      case 1:
        Me(t.type) && Yr(t)
        break
      case 4:
        Oi(t, t.stateNode.containerInfo)
        break
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value
        ;(te(tl, r._currentValue), (r._currentValue = l))
        break
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (te(oe, oe.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Xa(e, t, n)
              : (te(oe, oe.current & 1),
                (e = At(e, t, n)),
                e !== null ? e.sibling : null)
        te(oe, oe.current & 1)
        break
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Za(e, t, n)
          t.flags |= 128
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          te(oe, oe.current),
          r)
        )
          break
        return null
      case 22:
      case 23:
        return ((t.lanes = 0), qa(e, t, n))
    }
    return At(e, t, n)
  }
  var eu, ss, tu, nu
  ;((eu = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
      else if (n.tag !== 4 && n.child !== null) {
        ;((n.child.return = n), (n = n.child))
        continue
      }
      if (n === t) break
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return
        n = n.return
      }
      ;((n.sibling.return = n.return), (n = n.sibling))
    }
  }),
    (ss = function () {}),
    (tu = function (e, t, n, r) {
      var l = e.memoizedProps
      if (l !== r) {
        ;((e = t.stateNode), nn(gt.current))
        var i = null
        switch (n) {
          case "input":
            ;((l = Il(e, l)), (r = Il(e, r)), (i = []))
            break
          case "select":
            ;((l = E({}, l, { value: void 0 })),
              (r = E({}, r, { value: void 0 })),
              (i = []))
            break
          case "textarea":
            ;((l = Ol(e, l)), (r = Ol(e, r)), (i = []))
            break
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = qr)
        }
        bl(n, r)
        var o
        n = null
        for (m in l)
          if (!r.hasOwnProperty(m) && l.hasOwnProperty(m) && l[m] != null)
            if (m === "style") {
              var a = l[m]
              for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""))
            } else
              m !== "dangerouslySetInnerHTML" &&
                m !== "children" &&
                m !== "suppressContentEditableWarning" &&
                m !== "suppressHydrationWarning" &&
                m !== "autoFocus" &&
                (y.hasOwnProperty(m)
                  ? i || (i = [])
                  : (i = i || []).push(m, null))
        for (m in r) {
          var u = r[m]
          if (
            ((a = l?.[m]),
            r.hasOwnProperty(m) && u !== a && (u != null || a != null))
          )
            if (m === "style")
              if (a) {
                for (o in a)
                  !a.hasOwnProperty(o) ||
                    (u && u.hasOwnProperty(o)) ||
                    (n || (n = {}), (n[o] = ""))
                for (o in u)
                  u.hasOwnProperty(o) &&
                    a[o] !== u[o] &&
                    (n || (n = {}), (n[o] = u[o]))
              } else (n || (i || (i = []), i.push(m, n)), (n = u))
            else
              m === "dangerouslySetInnerHTML"
                ? ((u = u ? u.__html : void 0),
                  (a = a ? a.__html : void 0),
                  u != null && a !== u && (i = i || []).push(m, u))
                : m === "children"
                  ? (typeof u != "string" && typeof u != "number") ||
                    (i = i || []).push(m, "" + u)
                  : m !== "suppressContentEditableWarning" &&
                    m !== "suppressHydrationWarning" &&
                    (y.hasOwnProperty(m)
                      ? (u != null && m === "onScroll" && ne("scroll", e),
                        i || a === u || (i = []))
                      : (i = i || []).push(m, u))
        }
        n && (i = i || []).push("style", n)
        var m = i
        ;(t.updateQueue = m) && (t.flags |= 4)
      }
    }),
    (nu = function (e, t, n, r) {
      n !== r && (t.flags |= 4)
    }))
  function hr(e, t) {
    if (!se)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling))
          n === null ? (e.tail = null) : (n.sibling = null)
          break
        case "collapsed":
          n = e.tail
          for (var r = null; n !== null; )
            (n.alternate !== null && (r = n), (n = n.sibling))
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null)
      }
  }
  function Ee(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0
    if (t)
      for (var l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling))
    else
      for (l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling))
    return ((e.subtreeFlags |= r), (e.childLanes = n), t)
  }
  function yd(e, t, n) {
    var r = t.pendingProps
    switch ((Pi(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ee(t), null)
      case 1:
        return (Me(t.type) && $r(), Ee(t), null)
      case 3:
        return (
          (r = t.stateNode),
          _n(),
          re(Te),
          re(Se),
          Ui(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Zr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), st !== null && (vs(st), (st = null)))),
          ss(e, t),
          Ee(t),
          null
        )
      case 5:
        Di(t)
        var l = nn(cr.current)
        if (((n = t.type), e !== null && t.stateNode != null))
          (tu(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)))
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(h(166))
            return (Ee(t), null)
          }
          if (((e = nn(gt.current)), Zr(t))) {
            ;((r = t.stateNode), (n = t.type))
            var i = t.memoizedProps
            switch (((r[ht] = t), (r[ir] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                ;(ne("cancel", r), ne("close", r))
                break
              case "iframe":
              case "object":
              case "embed":
                ne("load", r)
                break
              case "video":
              case "audio":
                for (l = 0; l < nr.length; l++) ne(nr[l], r)
                break
              case "source":
                ne("error", r)
                break
              case "img":
              case "image":
              case "link":
                ;(ne("error", r), ne("load", r))
                break
              case "details":
                ne("toggle", r)
                break
              case "input":
                ;(Is(r, i), ne("invalid", r))
                break
              case "select":
                ;((r._wrapperState = { wasMultiple: !!i.multiple }),
                  ne("invalid", r))
                break
              case "textarea":
                ;(Os(r, i), ne("invalid", r))
            }
            ;(bl(n, i), (l = null))
            for (var o in i)
              if (i.hasOwnProperty(o)) {
                var a = i[o]
                o === "children"
                  ? typeof a == "string"
                    ? r.textContent !== a &&
                      (i.suppressHydrationWarning !== !0 &&
                        Qr(r.textContent, a, e),
                      (l = ["children", a]))
                    : typeof a == "number" &&
                      r.textContent !== "" + a &&
                      (i.suppressHydrationWarning !== !0 &&
                        Qr(r.textContent, a, e),
                      (l = ["children", "" + a]))
                  : y.hasOwnProperty(o) &&
                    a != null &&
                    o === "onScroll" &&
                    ne("scroll", r)
              }
            switch (n) {
              case "input":
                ;(jr(r), Fs(r, i, !0))
                break
              case "textarea":
                ;(jr(r), bs(r))
                break
              case "select":
              case "option":
                break
              default:
                typeof i.onClick == "function" && (r.onclick = qr)
            }
            ;((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4))
          } else {
            ;((o = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Us(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = o.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = o.createElement(n, { is: r.is }))
                    : ((e = o.createElement(n)),
                      n === "select" &&
                        ((o = e),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, n)),
              (e[ht] = t),
              (e[ir] = r),
              eu(e, t, !1, !1),
              (t.stateNode = e))
            e: {
              switch (((o = Ul(n, r)), n)) {
                case "dialog":
                  ;(ne("cancel", e), ne("close", e), (l = r))
                  break
                case "iframe":
                case "object":
                case "embed":
                  ;(ne("load", e), (l = r))
                  break
                case "video":
                case "audio":
                  for (l = 0; l < nr.length; l++) ne(nr[l], e)
                  l = r
                  break
                case "source":
                  ;(ne("error", e), (l = r))
                  break
                case "img":
                case "image":
                case "link":
                  ;(ne("error", e), ne("load", e), (l = r))
                  break
                case "details":
                  ;(ne("toggle", e), (l = r))
                  break
                case "input":
                  ;(Is(e, r), (l = Il(e, r)), ne("invalid", e))
                  break
                case "option":
                  l = r
                  break
                case "select":
                  ;((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = E({}, r, { value: void 0 })),
                    ne("invalid", e))
                  break
                case "textarea":
                  ;(Os(e, r), (l = Ol(e, r)), ne("invalid", e))
                  break
                default:
                  l = r
              }
              ;(bl(n, l), (a = l))
              for (i in a)
                if (a.hasOwnProperty(i)) {
                  var u = a[i]
                  i === "style"
                    ? Vs(e, u)
                    : i === "dangerouslySetInnerHTML"
                      ? ((u = u ? u.__html : void 0), u != null && Ws(e, u))
                      : i === "children"
                        ? typeof u == "string"
                          ? (n !== "textarea" || u !== "") && Fn(e, u)
                          : typeof u == "number" && Fn(e, "" + u)
                        : i !== "suppressContentEditableWarning" &&
                          i !== "suppressHydrationWarning" &&
                          i !== "autoFocus" &&
                          (y.hasOwnProperty(i)
                            ? u != null && i === "onScroll" && ne("scroll", e)
                            : u != null && tt(e, i, u, o))
                }
              switch (n) {
                case "input":
                  ;(jr(e), Fs(e, r, !1))
                  break
                case "textarea":
                  ;(jr(e), bs(e))
                  break
                case "option":
                  r.value != null && e.setAttribute("value", "" + K(r.value))
                  break
                case "select":
                  ;((e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? cn(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        cn(e, !!r.multiple, r.defaultValue, !0))
                  break
                default:
                  typeof l.onClick == "function" && (e.onclick = qr)
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus
                  break e
                case "img":
                  r = !0
                  break e
                default:
                  r = !1
              }
            }
            r && (t.flags |= 4)
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
        }
        return (Ee(t), null)
      case 6:
        if (e && t.stateNode != null) nu(e, t, e.memoizedProps, r)
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(h(166))
          if (((n = nn(cr.current)), nn(gt.current), Zr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[ht] = t),
              (i = r.nodeValue !== n) && ((e = He), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Qr(r.nodeValue, n, (e.mode & 1) !== 0)
                  break
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Qr(r.nodeValue, n, (e.mode & 1) !== 0)
              }
            i && (t.flags |= 4)
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[ht] = t),
              (t.stateNode = r))
        }
        return (Ee(t), null)
      case 13:
        if (
          (re(oe),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (se && Ve !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (ia(), Cn(), (t.flags |= 98560), (i = !1))
          else if (((i = Zr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(h(318))
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(h(317))
              i[ht] = t
            } else
              (Cn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4))
            ;(Ee(t), (i = !1))
          } else (st !== null && (vs(st), (st = null)), (i = !0))
          if (!i) return t.flags & 65536 ? t : null
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (oe.current & 1) !== 0
                  ? ge === 0 && (ge = 3)
                  : ws())),
            t.updateQueue !== null && (t.flags |= 4),
            Ee(t),
            null)
      case 4:
        return (
          _n(),
          ss(e, t),
          e === null && rr(t.stateNode.containerInfo),
          Ee(t),
          null
        )
      case 10:
        return (Mi(t.type._context), Ee(t), null)
      case 17:
        return (Me(t.type) && $r(), Ee(t), null)
      case 19:
        if ((re(oe), (i = t.memoizedState), i === null)) return (Ee(t), null)
        if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
          if (r) hr(i, !1)
          else {
            if (ge !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((o = il(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      hr(i, !1),
                      r = o.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (o = i.alternate),
                      o === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = o.childLanes),
                          (i.lanes = o.lanes),
                          (i.child = o.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = o.memoizedProps),
                          (i.memoizedState = o.memoizedState),
                          (i.updateQueue = o.updateQueue),
                          (i.type = o.type),
                          (e = o.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling))
                  return (te(oe, (oe.current & 1) | 2), t.child)
                }
                e = e.sibling
              }
            i.tail !== null &&
              de() > Tn &&
              ((t.flags |= 128), (r = !0), hr(i, !1), (t.lanes = 4194304))
          }
        else {
          if (!r)
            if (((e = il(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                hr(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !o.alternate &&
                  !se)
              )
                return (Ee(t), null)
            } else
              2 * de() - i.renderingStartTime > Tn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), hr(i, !1), (t.lanes = 4194304))
          i.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((n = i.last),
              n !== null ? (n.sibling = o) : (t.child = o),
              (i.last = o))
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = de()),
            (t.sibling = null),
            (n = oe.current),
            te(oe, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ee(t), null)
      case 22:
      case 23:
        return (
          xs(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (Qe & 1073741824) !== 0 &&
              (Ee(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ee(t),
          null
        )
      case 24:
        return null
      case 25:
        return null
    }
    throw Error(h(156, t.tag))
  }
  function xd(e, t) {
    switch ((Pi(t), t.tag)) {
      case 1:
        return (
          Me(t.type) && $r(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 3:
        return (
          _n(),
          re(Te),
          re(Se),
          Ui(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        )
      case 5:
        return (Di(t), null)
      case 13:
        if (
          (re(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(h(340))
          Cn()
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 19:
        return (re(oe), null)
      case 4:
        return (_n(), null)
      case 10:
        return (Mi(t.type._context), null)
      case 22:
      case 23:
        return (xs(), null)
      case 24:
        return null
      default:
        return null
    }
  }
  var ml = !1,
    Ae = !1,
    wd = typeof WeakSet == "function" ? WeakSet : Set,
    C = null
  function Bn(e, t) {
    var n = e.ref
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null)
        } catch (r) {
          ce(e, t, r)
        }
      else n.current = null
  }
  function os(e, t, n) {
    try {
      n()
    } catch (r) {
      ce(e, t, r)
    }
  }
  var ru = !1
  function Nd(e, t) {
    if (((xi = Mr), (e = Io()), di(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd }
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window
          var r = n.getSelection && n.getSelection()
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode
            var l = r.anchorOffset,
              i = r.focusNode
            r = r.focusOffset
            try {
              ;(n.nodeType, i.nodeType)
            } catch {
              n = null
              break e
            }
            var o = 0,
              a = -1,
              u = -1,
              m = 0,
              w = 0,
              N = e,
              v = null
            t: for (;;) {
              for (
                var S;
                N !== n || (l !== 0 && N.nodeType !== 3) || (a = o + l),
                  N !== i || (r !== 0 && N.nodeType !== 3) || (u = o + r),
                  N.nodeType === 3 && (o += N.nodeValue.length),
                  (S = N.firstChild) !== null;
              )
                ((v = N), (N = S))
              for (;;) {
                if (N === e) break t
                if (
                  (v === n && ++m === l && (a = o),
                  v === i && ++w === r && (u = o),
                  (S = N.nextSibling) !== null)
                )
                  break
                ;((N = v), (v = N.parentNode))
              }
              N = S
            }
            n = a === -1 || u === -1 ? null : { start: a, end: u }
          } else n = null
        }
      n = n || { start: 0, end: 0 }
    } else n = null
    for (
      wi = { focusedElem: e, selectionRange: n }, Mr = !1, C = t;
      C !== null;
    )
      if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (C = e))
      else
        for (; C !== null; ) {
          t = C
          try {
            var A = t.alternate
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break
                case 1:
                  if (A !== null) {
                    var _ = A.memoizedProps,
                      fe = A.memoizedState,
                      f = t.stateNode,
                      c = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? _ : ot(t.type, _),
                        fe,
                      )
                    f.__reactInternalSnapshotBeforeUpdate = c
                  }
                  break
                case 3:
                  var p = t.stateNode.containerInfo
                  p.nodeType === 1
                    ? (p.textContent = "")
                    : p.nodeType === 9 &&
                      p.documentElement &&
                      p.removeChild(p.documentElement)
                  break
                case 5:
                case 6:
                case 4:
                case 17:
                  break
                default:
                  throw Error(h(163))
              }
          } catch (j) {
            ce(t, t.return, j)
          }
          if (((e = t.sibling), e !== null)) {
            ;((e.return = t.return), (C = e))
            break
          }
          C = t.return
        }
    return ((A = ru), (ru = !1), A)
  }
  function gr(e, t, n) {
    var r = t.updateQueue
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next)
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy
          ;((l.destroy = void 0), i !== void 0 && os(t, n, i))
        }
        l = l.next
      } while (l !== r)
    }
  }
  function hl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next)
      do {
        if ((n.tag & e) === e) {
          var r = n.create
          n.destroy = r()
        }
        n = n.next
      } while (n !== t)
    }
  }
  function as(e) {
    var t = e.ref
    if (t !== null) {
      var n = e.stateNode
      switch (e.tag) {
        case 5:
          e = n
          break
        default:
          e = n
      }
      typeof t == "function" ? t(e) : (t.current = e)
    }
  }
  function lu(e) {
    var t = e.alternate
    ;(t !== null && ((e.alternate = null), lu(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[ht],
          delete t[ir],
          delete t[Si],
          delete t[rd],
          delete t[ld])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null))
  }
  function iu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
  }
  function su(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || iu(e.return)) return null
        e = e.return
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e
        ;((e.child.return = e), (e = e.child))
      }
      if (!(e.flags & 2)) return e.stateNode
    }
  }
  function us(e, t, n) {
    var r = e.tag
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = qr)))
    else if (r !== 4 && ((e = e.child), e !== null))
      for (us(e, t, n), e = e.sibling; e !== null; )
        (us(e, t, n), (e = e.sibling))
  }
  function cs(e, t, n) {
    var r = e.tag
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e))
    else if (r !== 4 && ((e = e.child), e !== null))
      for (cs(e, t, n), e = e.sibling; e !== null; )
        (cs(e, t, n), (e = e.sibling))
  }
  var Ne = null,
    at = !1
  function Wt(e, t, n) {
    for (n = n.child; n !== null; ) (ou(e, t, n), (n = n.sibling))
  }
  function ou(e, t, n) {
    if (mt && typeof mt.onCommitFiberUnmount == "function")
      try {
        mt.onCommitFiberUnmount(Pr, n)
      } catch {}
    switch (n.tag) {
      case 5:
        Ae || Bn(n, t)
      case 6:
        var r = Ne,
          l = at
        ;((Ne = null),
          Wt(e, t, n),
          (Ne = r),
          (at = l),
          Ne !== null &&
            (at
              ? ((e = Ne),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Ne.removeChild(n.stateNode)))
        break
      case 18:
        Ne !== null &&
          (at
            ? ((e = Ne),
              (n = n.stateNode),
              e.nodeType === 8
                ? ki(e.parentNode, n)
                : e.nodeType === 1 && ki(e, n),
              $n(e))
            : ki(Ne, n.stateNode))
        break
      case 4:
        ;((r = Ne),
          (l = at),
          (Ne = n.stateNode.containerInfo),
          (at = !0),
          Wt(e, t, n),
          (Ne = r),
          (at = l))
        break
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ae &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next
          do {
            var i = l,
              o = i.destroy
            ;((i = i.tag),
              o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && os(n, t, o),
              (l = l.next))
          } while (l !== r)
        }
        Wt(e, t, n)
        break
      case 1:
        if (
          !Ae &&
          (Bn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            ;((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount())
          } catch (a) {
            ce(n, t, a)
          }
        Wt(e, t, n)
        break
      case 21:
        Wt(e, t, n)
        break
      case 22:
        n.mode & 1
          ? ((Ae = (r = Ae) || n.memoizedState !== null), Wt(e, t, n), (Ae = r))
          : Wt(e, t, n)
        break
      default:
        Wt(e, t, n)
    }
  }
  function au(e) {
    var t = e.updateQueue
    if (t !== null) {
      e.updateQueue = null
      var n = e.stateNode
      ;(n === null && (n = e.stateNode = new wd()),
        t.forEach(function (r) {
          var l = zd.bind(null, e, r)
          n.has(r) || (n.add(r), r.then(l, l))
        }))
    }
  }
  function ut(e, t) {
    var n = t.deletions
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r]
        try {
          var i = e,
            o = t,
            a = o
          e: for (; a !== null; ) {
            switch (a.tag) {
              case 5:
                ;((Ne = a.stateNode), (at = !1))
                break e
              case 3:
                ;((Ne = a.stateNode.containerInfo), (at = !0))
                break e
              case 4:
                ;((Ne = a.stateNode.containerInfo), (at = !0))
                break e
            }
            a = a.return
          }
          if (Ne === null) throw Error(h(160))
          ;(ou(i, o, l), (Ne = null), (at = !1))
          var u = l.alternate
          ;(u !== null && (u.return = null), (l.return = null))
        } catch (m) {
          ce(l, t, m)
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (uu(t, e), (t = t.sibling))
  }
  function uu(e, t) {
    var n = e.alternate,
      r = e.flags
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ut(t, e), yt(e), r & 4)) {
          try {
            ;(gr(3, e, e.return), hl(3, e))
          } catch (_) {
            ce(e, e.return, _)
          }
          try {
            gr(5, e, e.return)
          } catch (_) {
            ce(e, e.return, _)
          }
        }
        break
      case 1:
        ;(ut(t, e), yt(e), r & 512 && n !== null && Bn(n, n.return))
        break
      case 5:
        if (
          (ut(t, e),
          yt(e),
          r & 512 && n !== null && Bn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode
          try {
            Fn(l, "")
          } catch (_) {
            ce(e, e.return, _)
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            o = n !== null ? n.memoizedProps : i,
            a = e.type,
            u = e.updateQueue
          if (((e.updateQueue = null), u !== null))
            try {
              ;(a === "input" &&
                i.type === "radio" &&
                i.name != null &&
                Rs(l, i),
                Ul(a, o))
              var m = Ul(a, i)
              for (o = 0; o < u.length; o += 2) {
                var w = u[o],
                  N = u[o + 1]
                w === "style"
                  ? Vs(l, N)
                  : w === "dangerouslySetInnerHTML"
                    ? Ws(l, N)
                    : w === "children"
                      ? Fn(l, N)
                      : tt(l, w, N, m)
              }
              switch (a) {
                case "input":
                  Rl(l, i)
                  break
                case "textarea":
                  Ds(l, i)
                  break
                case "select":
                  var v = l._wrapperState.wasMultiple
                  l._wrapperState.wasMultiple = !!i.multiple
                  var S = i.value
                  S != null
                    ? cn(l, !!i.multiple, S, !1)
                    : v !== !!i.multiple &&
                      (i.defaultValue != null
                        ? cn(l, !!i.multiple, i.defaultValue, !0)
                        : cn(l, !!i.multiple, i.multiple ? [] : "", !1))
              }
              l[ir] = i
            } catch (_) {
              ce(e, e.return, _)
            }
        }
        break
      case 6:
        if ((ut(t, e), yt(e), r & 4)) {
          if (e.stateNode === null) throw Error(h(162))
          ;((l = e.stateNode), (i = e.memoizedProps))
          try {
            l.nodeValue = i
          } catch (_) {
            ce(e, e.return, _)
          }
        }
        break
      case 3:
        if (
          (ut(t, e), yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            $n(t.containerInfo)
          } catch (_) {
            ce(e, e.return, _)
          }
        break
      case 4:
        ;(ut(t, e), yt(e))
        break
      case 13:
        ;(ut(t, e),
          yt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (ps = de())),
          r & 4 && au(e))
        break
      case 22:
        if (
          ((w = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ae = (m = Ae) || w), ut(t, e), (Ae = m)) : ut(t, e),
          yt(e),
          r & 8192)
        ) {
          if (
            ((m = e.memoizedState !== null),
            (e.stateNode.isHidden = m) && !w && (e.mode & 1) !== 0)
          )
            for (C = e, w = e.child; w !== null; ) {
              for (N = C = w; C !== null; ) {
                switch (((v = C), (S = v.child), v.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    gr(4, v, v.return)
                    break
                  case 1:
                    Bn(v, v.return)
                    var A = v.stateNode
                    if (typeof A.componentWillUnmount == "function") {
                      ;((r = v), (n = v.return))
                      try {
                        ;((t = r),
                          (A.props = t.memoizedProps),
                          (A.state = t.memoizedState),
                          A.componentWillUnmount())
                      } catch (_) {
                        ce(r, n, _)
                      }
                    }
                    break
                  case 5:
                    Bn(v, v.return)
                    break
                  case 22:
                    if (v.memoizedState !== null) {
                      fu(N)
                      continue
                    }
                }
                S !== null ? ((S.return = v), (C = S)) : fu(N)
              }
              w = w.sibling
            }
          e: for (w = null, N = e; ; ) {
            if (N.tag === 5) {
              if (w === null) {
                w = N
                try {
                  ;((l = N.stateNode),
                    m
                      ? ((i = l.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((a = N.stateNode),
                        (u = N.memoizedProps.style),
                        (o =
                          u != null && u.hasOwnProperty("display")
                            ? u.display
                            : null),
                        (a.style.display = Hs("display", o))))
                } catch (_) {
                  ce(e, e.return, _)
                }
              }
            } else if (N.tag === 6) {
              if (w === null)
                try {
                  N.stateNode.nodeValue = m ? "" : N.memoizedProps
                } catch (_) {
                  ce(e, e.return, _)
                }
            } else if (
              ((N.tag !== 22 && N.tag !== 23) ||
                N.memoizedState === null ||
                N === e) &&
              N.child !== null
            ) {
              ;((N.child.return = N), (N = N.child))
              continue
            }
            if (N === e) break e
            for (; N.sibling === null; ) {
              if (N.return === null || N.return === e) break e
              ;(w === N && (w = null), (N = N.return))
            }
            ;(w === N && (w = null),
              (N.sibling.return = N.return),
              (N = N.sibling))
          }
        }
        break
      case 19:
        ;(ut(t, e), yt(e), r & 4 && au(e))
        break
      case 21:
        break
      default:
        ;(ut(t, e), yt(e))
    }
  }
  function yt(e) {
    var t = e.flags
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (iu(n)) {
              var r = n
              break e
            }
            n = n.return
          }
          throw Error(h(160))
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode
            r.flags & 32 && (Fn(l, ""), (r.flags &= -33))
            var i = su(e)
            cs(e, i, l)
            break
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              a = su(e)
            us(e, a, o)
            break
          default:
            throw Error(h(161))
        }
      } catch (u) {
        ce(e, e.return, u)
      }
      e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
  }
  function jd(e, t, n) {
    ;((C = e), cu(e))
  }
  function cu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; C !== null; ) {
      var l = C,
        i = l.child
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || ml
        if (!o) {
          var a = l.alternate,
            u = (a !== null && a.memoizedState !== null) || Ae
          a = ml
          var m = Ae
          if (((ml = o), (Ae = u) && !m))
            for (C = l; C !== null; )
              ((o = C),
                (u = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? pu(l)
                  : u !== null
                    ? ((u.return = o), (C = u))
                    : pu(l))
          for (; i !== null; ) ((C = i), cu(i), (i = i.sibling))
          ;((C = l), (ml = a), (Ae = m))
        }
        du(e)
      } else
        (l.subtreeFlags & 8772) !== 0 && i !== null
          ? ((i.return = l), (C = i))
          : du(e)
    }
  }
  function du(e) {
    for (; C !== null; ) {
      var t = C
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ae || hl(5, t)
                break
              case 1:
                var r = t.stateNode
                if (t.flags & 4 && !Ae)
                  if (n === null) r.componentDidMount()
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : ot(t.type, n.memoizedProps)
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    )
                  }
                var i = t.updateQueue
                i !== null && fa(t, i, r)
                break
              case 3:
                var o = t.updateQueue
                if (o !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode
                        break
                      case 1:
                        n = t.child.stateNode
                    }
                  fa(t, o, n)
                }
                break
              case 5:
                var a = t.stateNode
                if (n === null && t.flags & 4) {
                  n = a
                  var u = t.memoizedProps
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      u.autoFocus && n.focus()
                      break
                    case "img":
                      u.src && (n.src = u.src)
                  }
                }
                break
              case 6:
                break
              case 4:
                break
              case 12:
                break
              case 13:
                if (t.memoizedState === null) {
                  var m = t.alternate
                  if (m !== null) {
                    var w = m.memoizedState
                    if (w !== null) {
                      var N = w.dehydrated
                      N !== null && $n(N)
                    }
                  }
                }
                break
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break
              default:
                throw Error(h(163))
            }
          Ae || (t.flags & 512 && as(t))
        } catch (v) {
          ce(t, t.return, v)
        }
      }
      if (t === e) {
        C = null
        break
      }
      if (((n = t.sibling), n !== null)) {
        ;((n.return = t.return), (C = n))
        break
      }
      C = t.return
    }
  }
  function fu(e) {
    for (; C !== null; ) {
      var t = C
      if (t === e) {
        C = null
        break
      }
      var n = t.sibling
      if (n !== null) {
        ;((n.return = t.return), (C = n))
        break
      }
      C = t.return
    }
  }
  function pu(e) {
    for (; C !== null; ) {
      var t = C
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return
            try {
              hl(4, t)
            } catch (u) {
              ce(t, n, u)
            }
            break
          case 1:
            var r = t.stateNode
            if (typeof r.componentDidMount == "function") {
              var l = t.return
              try {
                r.componentDidMount()
              } catch (u) {
                ce(t, l, u)
              }
            }
            var i = t.return
            try {
              as(t)
            } catch (u) {
              ce(t, i, u)
            }
            break
          case 5:
            var o = t.return
            try {
              as(t)
            } catch (u) {
              ce(t, o, u)
            }
        }
      } catch (u) {
        ce(t, t.return, u)
      }
      if (t === e) {
        C = null
        break
      }
      var a = t.sibling
      if (a !== null) {
        ;((a.return = t.return), (C = a))
        break
      }
      C = t.return
    }
  }
  var kd = Math.ceil,
    gl = ke.ReactCurrentDispatcher,
    ds = ke.ReactCurrentOwner,
    Ze = ke.ReactCurrentBatchConfig,
    Q = 0,
    ye = null,
    pe = null,
    je = 0,
    Qe = 0,
    Ln = Ft(0),
    ge = 0,
    vr = null,
    ln = 0,
    vl = 0,
    fs = 0,
    yr = null,
    Re = null,
    ps = 0,
    Tn = 1 / 0,
    Pt = null,
    yl = !1,
    ms = null,
    Ht = null,
    xl = !1,
    Vt = null,
    wl = 0,
    xr = 0,
    hs = null,
    Nl = -1,
    jl = 0
  function ze() {
    return (Q & 6) !== 0 ? de() : Nl !== -1 ? Nl : (Nl = de())
  }
  function Qt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Q & 2) !== 0 && je !== 0
        ? je & -je
        : sd.transition !== null
          ? (jl === 0 && (jl = io()), jl)
          : ((e = X),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : ho(e.type))),
            e)
  }
  function ct(e, t, n, r) {
    if (50 < xr) throw ((xr = 0), (hs = null), Error(h(185)))
    ;(Hn(e, n, r),
      ((Q & 2) === 0 || e !== ye) &&
        (e === ye && ((Q & 2) === 0 && (vl |= n), ge === 4 && qt(e, je)),
        Fe(e, r),
        n === 1 &&
          Q === 0 &&
          (t.mode & 1) === 0 &&
          ((Tn = de() + 500), Kr && Dt())))
  }
  function Fe(e, t) {
    var n = e.callbackNode
    sc(e, t)
    var r = Br(e, e === ye ? je : 0)
    if (r === 0)
      (n !== null && no(n), (e.callbackNode = null), (e.callbackPriority = 0))
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && no(n), t === 1))
        (e.tag === 0 ? id(hu.bind(null, e)) : ea(hu.bind(null, e)),
          td(function () {
            ;(Q & 6) === 0 && Dt()
          }),
          (n = null))
      else {
        switch (so(r)) {
          case 1:
            n = $l
            break
          case 4:
            n = ro
            break
          case 16:
            n = Ar
            break
          case 536870912:
            n = lo
            break
          default:
            n = Ar
        }
        n = ku(n, mu.bind(null, e))
      }
      ;((e.callbackPriority = t), (e.callbackNode = n))
    }
  }
  function mu(e, t) {
    if (((Nl = -1), (jl = 0), (Q & 6) !== 0)) throw Error(h(327))
    var n = e.callbackNode
    if (Mn() && e.callbackNode !== n) return null
    var r = Br(e, e === ye ? je : 0)
    if (r === 0) return null
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = kl(e, r)
    else {
      t = r
      var l = Q
      Q |= 2
      var i = vu()
      ;(ye !== e || je !== t) && ((Pt = null), (Tn = de() + 500), on(e, t))
      do
        try {
          Ed()
          break
        } catch (a) {
          gu(e, a)
        }
      while (!0)
      ;(Ti(),
        (gl.current = i),
        (Q = l),
        pe !== null ? (t = 0) : ((ye = null), (je = 0), (t = ge)))
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Yl(e)), l !== 0 && ((r = l), (t = gs(e, l)))),
        t === 1)
      )
        throw ((n = vr), on(e, 0), qt(e, r), Fe(e, de()), n)
      if (t === 6) qt(e, r)
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Sd(l) &&
            ((t = kl(e, r)),
            t === 2 && ((i = Yl(e)), i !== 0 && ((r = i), (t = gs(e, i)))),
            t === 1))
        )
          throw ((n = vr), on(e, 0), qt(e, r), Fe(e, de()), n)
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(h(345))
          case 2:
            an(e, Re, Pt)
            break
          case 3:
            if (
              (qt(e, r),
              (r & 130023424) === r && ((t = ps + 500 - de()), 10 < t))
            ) {
              if (Br(e, 0) !== 0) break
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                ;(ze(), (e.pingedLanes |= e.suspendedLanes & l))
                break
              }
              e.timeoutHandle = ji(an.bind(null, e, Re, Pt), t)
              break
            }
            an(e, Re, Pt)
            break
          case 4:
            if ((qt(e, r), (r & 4194240) === r)) break
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - lt(r)
              ;((i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i))
            }
            if (
              ((r = l),
              (r = de() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * kd(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = ji(an.bind(null, e, Re, Pt), r)
              break
            }
            an(e, Re, Pt)
            break
          case 5:
            an(e, Re, Pt)
            break
          default:
            throw Error(h(329))
        }
      }
    }
    return (Fe(e, de()), e.callbackNode === n ? mu.bind(null, e) : null)
  }
  function gs(e, t) {
    var n = yr
    return (
      e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256),
      (e = kl(e, t)),
      e !== 2 && ((t = Re), (Re = n), t !== null && vs(t)),
      e
    )
  }
  function vs(e) {
    Re === null ? (Re = e) : Re.push.apply(Re, e)
  }
  function Sd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot
            l = l.value
            try {
              if (!it(i(), l)) return !1
            } catch {
              return !1
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n))
      else {
        if (t === e) break
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0
          t = t.return
        }
        ;((t.sibling.return = t.return), (t = t.sibling))
      }
    }
    return !0
  }
  function qt(e, t) {
    for (
      t &= ~fs,
        t &= ~vl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - lt(t),
        r = 1 << n
      ;((e[n] = -1), (t &= ~r))
    }
  }
  function hu(e) {
    if ((Q & 6) !== 0) throw Error(h(327))
    Mn()
    var t = Br(e, 0)
    if ((t & 1) === 0) return (Fe(e, de()), null)
    var n = kl(e, t)
    if (e.tag !== 0 && n === 2) {
      var r = Yl(e)
      r !== 0 && ((t = r), (n = gs(e, r)))
    }
    if (n === 1) throw ((n = vr), on(e, 0), qt(e, t), Fe(e, de()), n)
    if (n === 6) throw Error(h(345))
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      an(e, Re, Pt),
      Fe(e, de()),
      null
    )
  }
  function ys(e, t) {
    var n = Q
    Q |= 1
    try {
      return e(t)
    } finally {
      ;((Q = n), Q === 0 && ((Tn = de() + 500), Kr && Dt()))
    }
  }
  function sn(e) {
    Vt !== null && Vt.tag === 0 && (Q & 6) === 0 && Mn()
    var t = Q
    Q |= 1
    var n = Ze.transition,
      r = X
    try {
      if (((Ze.transition = null), (X = 1), e)) return e()
    } finally {
      ;((X = r), (Ze.transition = n), (Q = t), (Q & 6) === 0 && Dt())
    }
  }
  function xs() {
    ;((Qe = Ln.current), re(Ln))
  }
  function on(e, t) {
    ;((e.finishedWork = null), (e.finishedLanes = 0))
    var n = e.timeoutHandle
    if ((n !== -1 && ((e.timeoutHandle = -1), ed(n)), pe !== null))
      for (n = pe.return; n !== null; ) {
        var r = n
        switch ((Pi(r), r.tag)) {
          case 1:
            ;((r = r.type.childContextTypes), r != null && $r())
            break
          case 3:
            ;(_n(), re(Te), re(Se), Ui())
            break
          case 5:
            Di(r)
            break
          case 4:
            _n()
            break
          case 13:
            re(oe)
            break
          case 19:
            re(oe)
            break
          case 10:
            Mi(r.type._context)
            break
          case 22:
          case 23:
            xs()
        }
        n = n.return
      }
    if (
      ((ye = e),
      (pe = e = Gt(e.current, null)),
      (je = Qe = t),
      (ge = 0),
      (vr = null),
      (fs = vl = ln = 0),
      (Re = yr = null),
      tn !== null)
    ) {
      for (t = 0; t < tn.length; t++)
        if (((n = tn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null
          var l = r.next,
            i = n.pending
          if (i !== null) {
            var o = i.next
            ;((i.next = l), (r.next = o))
          }
          n.pending = r
        }
      tn = null
    }
    return e
  }
  function gu(e, t) {
    do {
      var n = pe
      try {
        if ((Ti(), (sl.current = cl), ol)) {
          for (var r = ae.memoizedState; r !== null; ) {
            var l = r.queue
            ;(l !== null && (l.pending = null), (r = r.next))
          }
          ol = !1
        }
        if (
          ((rn = 0),
          (ve = he = ae = null),
          (dr = !1),
          (fr = 0),
          (ds.current = null),
          n === null || n.return === null)
        ) {
          ;((ge = 1), (vr = t), (pe = null))
          break
        }
        e: {
          var i = e,
            o = n.return,
            a = n,
            u = t
          if (
            ((t = je),
            (a.flags |= 32768),
            u !== null && typeof u == "object" && typeof u.then == "function")
          ) {
            var m = u,
              w = a,
              N = w.tag
            if ((w.mode & 1) === 0 && (N === 0 || N === 11 || N === 15)) {
              var v = w.alternate
              v
                ? ((w.updateQueue = v.updateQueue),
                  (w.memoizedState = v.memoizedState),
                  (w.lanes = v.lanes))
                : ((w.updateQueue = null), (w.memoizedState = null))
            }
            var S = Ua(o)
            if (S !== null) {
              ;((S.flags &= -257),
                Wa(S, o, a, i, t),
                S.mode & 1 && ba(i, m, t),
                (t = S),
                (u = m))
              var A = t.updateQueue
              if (A === null) {
                var _ = new Set()
                ;(_.add(u), (t.updateQueue = _))
              } else A.add(u)
              break e
            } else {
              if ((t & 1) === 0) {
                ;(ba(i, m, t), ws())
                break e
              }
              u = Error(h(426))
            }
          } else if (se && a.mode & 1) {
            var fe = Ua(o)
            if (fe !== null) {
              ;((fe.flags & 65536) === 0 && (fe.flags |= 256),
                Wa(fe, o, a, i, t),
                Bi(zn(u, a)))
              break e
            }
          }
          ;((i = u = zn(u, a)),
            ge !== 4 && (ge = 2),
            yr === null ? (yr = [i]) : yr.push(i),
            (i = o))
          do {
            switch (i.tag) {
              case 3:
                ;((i.flags |= 65536), (t &= -t), (i.lanes |= t))
                var f = Oa(i, u, t)
                da(i, f)
                break e
              case 1:
                a = u
                var c = i.type,
                  p = i.stateNode
                if (
                  (i.flags & 128) === 0 &&
                  (typeof c.getDerivedStateFromError == "function" ||
                    (p !== null &&
                      typeof p.componentDidCatch == "function" &&
                      (Ht === null || !Ht.has(p))))
                ) {
                  ;((i.flags |= 65536), (t &= -t), (i.lanes |= t))
                  var j = Da(i, a, t)
                  da(i, j)
                  break e
                }
            }
            i = i.return
          } while (i !== null)
        }
        xu(n)
      } catch (z) {
        ;((t = z), pe === n && n !== null && (pe = n = n.return))
        continue
      }
      break
    } while (!0)
  }
  function vu() {
    var e = gl.current
    return ((gl.current = cl), e === null ? cl : e)
  }
  function ws() {
    ;((ge === 0 || ge === 3 || ge === 2) && (ge = 4),
      ye === null ||
        ((ln & 268435455) === 0 && (vl & 268435455) === 0) ||
        qt(ye, je))
  }
  function kl(e, t) {
    var n = Q
    Q |= 2
    var r = vu()
    ;(ye !== e || je !== t) && ((Pt = null), on(e, t))
    do
      try {
        Cd()
        break
      } catch (l) {
        gu(e, l)
      }
    while (!0)
    if ((Ti(), (Q = n), (gl.current = r), pe !== null)) throw Error(h(261))
    return ((ye = null), (je = 0), ge)
  }
  function Cd() {
    for (; pe !== null; ) yu(pe)
  }
  function Ed() {
    for (; pe !== null && !Xu(); ) yu(pe)
  }
  function yu(e) {
    var t = ju(e.alternate, e, Qe)
    ;((e.memoizedProps = e.pendingProps),
      t === null ? xu(e) : (pe = t),
      (ds.current = null))
  }
  function xu(e) {
    var t = e
    do {
      var n = t.alternate
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = yd(n, t, Qe)), n !== null)) {
          pe = n
          return
        }
      } else {
        if (((n = xd(n, t)), n !== null)) {
          ;((n.flags &= 32767), (pe = n))
          return
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null))
        else {
          ;((ge = 6), (pe = null))
          return
        }
      }
      if (((t = t.sibling), t !== null)) {
        pe = t
        return
      }
      pe = t = e
    } while (t !== null)
    ge === 0 && (ge = 5)
  }
  function an(e, t, n) {
    var r = X,
      l = Ze.transition
    try {
      ;((Ze.transition = null), (X = 1), Ad(e, t, n, r))
    } finally {
      ;((Ze.transition = l), (X = r))
    }
    return null
  }
  function Ad(e, t, n, r) {
    do Mn()
    while (Vt !== null)
    if ((Q & 6) !== 0) throw Error(h(327))
    n = e.finishedWork
    var l = e.finishedLanes
    if (n === null) return null
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(h(177))
    ;((e.callbackNode = null), (e.callbackPriority = 0))
    var i = n.lanes | n.childLanes
    if (
      (oc(e, i),
      e === ye && ((pe = ye = null), (je = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        xl ||
        ((xl = !0),
        ku(Ar, function () {
          return (Mn(), null)
        })),
      (i = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || i)
    ) {
      ;((i = Ze.transition), (Ze.transition = null))
      var o = X
      X = 1
      var a = Q
      ;((Q |= 4),
        (ds.current = null),
        Nd(e, n),
        uu(n, e),
        Gc(wi),
        (Mr = !!xi),
        (wi = xi = null),
        (e.current = n),
        jd(n),
        Ju(),
        (Q = a),
        (X = o),
        (Ze.transition = i))
    } else e.current = n
    if (
      (xl && ((xl = !1), (Vt = e), (wl = l)),
      (i = e.pendingLanes),
      i === 0 && (Ht = null),
      tc(n.stateNode),
      Fe(e, de()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }))
    if (yl) throw ((yl = !1), (e = ms), (ms = null), e)
    return (
      (wl & 1) !== 0 && e.tag !== 0 && Mn(),
      (i = e.pendingLanes),
      (i & 1) !== 0 ? (e === hs ? xr++ : ((xr = 0), (hs = e))) : (xr = 0),
      Dt(),
      null
    )
  }
  function Mn() {
    if (Vt !== null) {
      var e = so(wl),
        t = Ze.transition,
        n = X
      try {
        if (((Ze.transition = null), (X = 16 > e ? 16 : e), Vt === null))
          var r = !1
        else {
          if (((e = Vt), (Vt = null), (wl = 0), (Q & 6) !== 0))
            throw Error(h(331))
          var l = Q
          for (Q |= 4, C = e.current; C !== null; ) {
            var i = C,
              o = i.child
            if ((C.flags & 16) !== 0) {
              var a = i.deletions
              if (a !== null) {
                for (var u = 0; u < a.length; u++) {
                  var m = a[u]
                  for (C = m; C !== null; ) {
                    var w = C
                    switch (w.tag) {
                      case 0:
                      case 11:
                      case 15:
                        gr(8, w, i)
                    }
                    var N = w.child
                    if (N !== null) ((N.return = w), (C = N))
                    else
                      for (; C !== null; ) {
                        w = C
                        var v = w.sibling,
                          S = w.return
                        if ((lu(w), w === m)) {
                          C = null
                          break
                        }
                        if (v !== null) {
                          ;((v.return = S), (C = v))
                          break
                        }
                        C = S
                      }
                  }
                }
                var A = i.alternate
                if (A !== null) {
                  var _ = A.child
                  if (_ !== null) {
                    A.child = null
                    do {
                      var fe = _.sibling
                      ;((_.sibling = null), (_ = fe))
                    } while (_ !== null)
                  }
                }
                C = i
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && o !== null)
              ((o.return = i), (C = o))
            else
              e: for (; C !== null; ) {
                if (((i = C), (i.flags & 2048) !== 0))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      gr(9, i, i.return)
                  }
                var f = i.sibling
                if (f !== null) {
                  ;((f.return = i.return), (C = f))
                  break e
                }
                C = i.return
              }
          }
          var c = e.current
          for (C = c; C !== null; ) {
            o = C
            var p = o.child
            if ((o.subtreeFlags & 2064) !== 0 && p !== null)
              ((p.return = o), (C = p))
            else
              e: for (o = c; C !== null; ) {
                if (((a = C), (a.flags & 2048) !== 0))
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hl(9, a)
                    }
                  } catch (z) {
                    ce(a, a.return, z)
                  }
                if (a === o) {
                  C = null
                  break e
                }
                var j = a.sibling
                if (j !== null) {
                  ;((j.return = a.return), (C = j))
                  break e
                }
                C = a.return
              }
          }
          if (
            ((Q = l), Dt(), mt && typeof mt.onPostCommitFiberRoot == "function")
          )
            try {
              mt.onPostCommitFiberRoot(Pr, e)
            } catch {}
          r = !0
        }
        return r
      } finally {
        ;((X = n), (Ze.transition = t))
      }
    }
    return !1
  }
  function wu(e, t, n) {
    ;((t = zn(n, t)),
      (t = Oa(e, t, 1)),
      (e = Ut(e, t, 1)),
      (t = ze()),
      e !== null && (Hn(e, 1, t), Fe(e, t)))
  }
  function ce(e, t, n) {
    if (e.tag === 3) wu(e, e, n)
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          wu(t, e, n)
          break
        } else if (t.tag === 1) {
          var r = t.stateNode
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Ht === null || !Ht.has(r)))
          ) {
            ;((e = zn(n, e)),
              (e = Da(t, e, 1)),
              (t = Ut(t, e, 1)),
              (e = ze()),
              t !== null && (Hn(t, 1, e), Fe(t, e)))
            break
          }
        }
        t = t.return
      }
  }
  function Pd(e, t, n) {
    var r = e.pingCache
    ;(r !== null && r.delete(t),
      (t = ze()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ye === e &&
        (je & n) === n &&
        (ge === 4 || (ge === 3 && (je & 130023424) === je && 500 > de() - ps)
          ? on(e, 0)
          : (fs |= n)),
      Fe(e, t))
  }
  function Nu(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = zr), (zr <<= 1), (zr & 130023424) === 0 && (zr = 4194304)))
    var n = ze()
    ;((e = Ct(e, t)), e !== null && (Hn(e, t, n), Fe(e, n)))
  }
  function _d(e) {
    var t = e.memoizedState,
      n = 0
    ;(t !== null && (n = t.retryLane), Nu(e, n))
  }
  function zd(e, t) {
    var n = 0
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState
        l !== null && (n = l.retryLane)
        break
      case 19:
        r = e.stateNode
        break
      default:
        throw Error(h(314))
    }
    ;(r !== null && r.delete(t), Nu(e, n))
  }
  var ju
  ju = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Te.current) Ie = !0
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ((Ie = !1), vd(e, t, n))
        Ie = (e.flags & 131072) !== 0
      }
    else ((Ie = !1), se && (t.flags & 1048576) !== 0 && ta(t, Jr, t.index))
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type
        ;(pl(e, t), (e = t.pendingProps))
        var l = jn(t, Se.current)
        ;(Pn(t, n), (l = Vi(null, t, r, e, l, n)))
        var i = Qi()
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Me(r) ? ((i = !0), Yr(t)) : (i = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Fi(t),
              (l.updater = dl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Xi(t, r, e, n),
              (t = ts(null, t, r, !0, i, n)))
            : ((t.tag = 0), se && i && Ai(t), _e(null, t, l, n), (t = t.child)),
          t
        )
      case 16:
        r = t.elementType
        e: {
          switch (
            (pl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Ld(r)),
            (e = ot(r, e)),
            l)
          ) {
            case 0:
              t = es(null, t, r, e, n)
              break e
            case 1:
              t = $a(null, t, r, e, n)
              break e
            case 11:
              t = Ha(null, t, r, e, n)
              break e
            case 14:
              t = Va(null, t, r, ot(r.type, e), n)
              break e
          }
          throw Error(h(306, r, ""))
        }
        return t
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          es(e, t, r, l, n)
        )
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          $a(e, t, r, l, n)
        )
      case 3:
        e: {
          if ((Ya(t), e === null)) throw Error(h(387))
          ;((r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            ca(e, t),
            ll(t, r, null, n))
          var o = t.memoizedState
          if (((r = o.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              ;((l = zn(Error(h(423)), t)), (t = Ka(e, t, r, n, l)))
              break e
            } else if (r !== l) {
              ;((l = zn(Error(h(424)), t)), (t = Ka(e, t, r, n, l)))
              break e
            } else
              for (
                Ve = Rt(t.stateNode.containerInfo.firstChild),
                  He = t,
                  se = !0,
                  st = null,
                  n = aa(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling))
          else {
            if ((Cn(), r === l)) {
              t = At(e, t, n)
              break e
            }
            _e(e, t, r, n)
          }
          t = t.child
        }
        return t
      case 5:
        return (
          pa(t),
          e === null && zi(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (o = l.children),
          Ni(r, l) ? (o = null) : i !== null && Ni(r, i) && (t.flags |= 32),
          Ga(e, t),
          _e(e, t, o, n),
          t.child
        )
      case 6:
        return (e === null && zi(t), null)
      case 13:
        return Xa(e, t, n)
      case 4:
        return (
          Oi(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = En(t, null, r, n)) : _e(e, t, r, n),
          t.child
        )
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          Ha(e, t, r, l, n)
        )
      case 7:
        return (_e(e, t, t.pendingProps, n), t.child)
      case 8:
        return (_e(e, t, t.pendingProps.children, n), t.child)
      case 12:
        return (_e(e, t, t.pendingProps.children, n), t.child)
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (i = t.memoizedProps),
            (o = l.value),
            te(tl, r._currentValue),
            (r._currentValue = o),
            i !== null)
          )
            if (it(i.value, o)) {
              if (i.children === l.children && !Te.current) {
                t = At(e, t, n)
                break e
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var a = i.dependencies
                if (a !== null) {
                  o = i.child
                  for (var u = a.firstContext; u !== null; ) {
                    if (u.context === r) {
                      if (i.tag === 1) {
                        ;((u = Et(-1, n & -n)), (u.tag = 2))
                        var m = i.updateQueue
                        if (m !== null) {
                          m = m.shared
                          var w = m.pending
                          ;(w === null
                            ? (u.next = u)
                            : ((u.next = w.next), (w.next = u)),
                            (m.pending = u))
                        }
                      }
                      ;((i.lanes |= n),
                        (u = i.alternate),
                        u !== null && (u.lanes |= n),
                        Ii(i.return, n, t),
                        (a.lanes |= n))
                      break
                    }
                    u = u.next
                  }
                } else if (i.tag === 10) o = i.type === t.type ? null : i.child
                else if (i.tag === 18) {
                  if (((o = i.return), o === null)) throw Error(h(341))
                  ;((o.lanes |= n),
                    (a = o.alternate),
                    a !== null && (a.lanes |= n),
                    Ii(o, n, t),
                    (o = i.sibling))
                } else o = i.child
                if (o !== null) o.return = i
                else
                  for (o = i; o !== null; ) {
                    if (o === t) {
                      o = null
                      break
                    }
                    if (((i = o.sibling), i !== null)) {
                      ;((i.return = o.return), (o = i))
                      break
                    }
                    o = o.return
                  }
                i = o
              }
          ;(_e(e, t, l.children, n), (t = t.child))
        }
        return t
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Pn(t, n),
          (l = Xe(l)),
          (r = r(l)),
          (t.flags |= 1),
          _e(e, t, r, n),
          t.child
        )
      case 14:
        return (
          (r = t.type),
          (l = ot(r, t.pendingProps)),
          (l = ot(r.type, l)),
          Va(e, t, r, l, n)
        )
      case 15:
        return Qa(e, t, t.type, t.pendingProps, n)
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          pl(e, t),
          (t.tag = 1),
          Me(r) ? ((e = !0), Yr(t)) : (e = !1),
          Pn(t, n),
          Ra(t, r, l),
          Xi(t, r, l, n),
          ts(null, t, r, !0, e, n)
        )
      case 19:
        return Za(e, t, n)
      case 22:
        return qa(e, t, n)
    }
    throw Error(h(156, t.tag))
  }
  function ku(e, t) {
    return to(e, t)
  }
  function Bd(e, t, n, r) {
    ;((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null))
  }
  function et(e, t, n, r) {
    return new Bd(e, t, n, r)
  }
  function Ns(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent))
  }
  function Ld(e) {
    if (typeof e == "function") return Ns(e) ? 1 : 0
    if (e != null) {
      if (((e = e.$$typeof), e === ft)) return 11
      if (e === pt) return 14
    }
    return 2
  }
  function Gt(e, t) {
    var n = e.alternate
    return (
      n === null
        ? ((n = et(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    )
  }
  function Sl(e, t, n, r, l, i) {
    var o = 2
    if (((r = e), typeof e == "function")) Ns(e) && (o = 1)
    else if (typeof e == "string") o = 5
    else
      e: switch (e) {
        case Be:
          return un(n.children, l, i, t)
        case $e:
          ;((o = 8), (l |= 8))
          break
        case _t:
          return (
            (e = et(12, n, t, l | 2)),
            (e.elementType = _t),
            (e.lanes = i),
            e
          )
        case be:
          return ((e = et(13, n, t, l)), (e.elementType = be), (e.lanes = i), e)
        case rt:
          return ((e = et(19, n, t, l)), (e.elementType = rt), (e.lanes = i), e)
        case ue:
          return Cl(n, l, i, t)
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case wt:
                o = 10
                break e
              case Yt:
                o = 9
                break e
              case ft:
                o = 11
                break e
              case pt:
                o = 14
                break e
              case Le:
                ;((o = 16), (r = null))
                break e
            }
          throw Error(h(130, e == null ? e : typeof e, ""))
      }
    return (
      (t = et(o, n, t, l)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = i),
      t
    )
  }
  function un(e, t, n, r) {
    return ((e = et(7, e, r, t)), (e.lanes = n), e)
  }
  function Cl(e, t, n, r) {
    return (
      (e = et(22, e, r, t)),
      (e.elementType = ue),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    )
  }
  function js(e, t, n) {
    return ((e = et(6, e, null, t)), (e.lanes = n), e)
  }
  function ks(e, t, n) {
    return (
      (t = et(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    )
  }
  function Td(e, t, n, r, l) {
    ;((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Kl(0)),
      (this.expirationTimes = Kl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Kl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null))
  }
  function Ss(e, t, n, r, l, i, o, a, u) {
    return (
      (e = new Td(e, t, n, a, u)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = et(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Fi(i),
      e
    )
  }
  function Md(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
      $$typeof: Pe,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    }
  }
  function Su(e) {
    if (!e) return Ot
    e = e._reactInternals
    e: {
      if (Kt(e) !== e || e.tag !== 1) throw Error(h(170))
      var t = e
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context
            break e
          case 1:
            if (Me(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext
              break e
            }
        }
        t = t.return
      } while (t !== null)
      throw Error(h(171))
    }
    if (e.tag === 1) {
      var n = e.type
      if (Me(n)) return Jo(e, n, t)
    }
    return t
  }
  function Cu(e, t, n, r, l, i, o, a, u) {
    return (
      (e = Ss(n, r, !0, e, l, i, o, a, u)),
      (e.context = Su(null)),
      (n = e.current),
      (r = ze()),
      (l = Qt(n)),
      (i = Et(r, l)),
      (i.callback = t ?? null),
      Ut(n, i, l),
      (e.current.lanes = l),
      Hn(e, l, r),
      Fe(e, r),
      e
    )
  }
  function El(e, t, n, r) {
    var l = t.current,
      i = ze(),
      o = Qt(l)
    return (
      (n = Su(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Et(i, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Ut(l, t, o)),
      e !== null && (ct(e, l, o, i), rl(e, l, o)),
      o
    )
  }
  function Al(e) {
    if (((e = e.current), !e.child)) return null
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode
      default:
        return e.child.stateNode
    }
  }
  function Eu(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane
      e.retryLane = n !== 0 && n < t ? n : t
    }
  }
  function Cs(e, t) {
    ;(Eu(e, t), (e = e.alternate) && Eu(e, t))
  }
  function Id() {
    return null
  }
  var Au =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e)
        }
  function Es(e) {
    this._internalRoot = e
  }
  ;((Pl.prototype.render = Es.prototype.render =
    function (e) {
      var t = this._internalRoot
      if (t === null) throw Error(h(409))
      El(e, t, null, null)
    }),
    (Pl.prototype.unmount = Es.prototype.unmount =
      function () {
        var e = this._internalRoot
        if (e !== null) {
          this._internalRoot = null
          var t = e.containerInfo
          ;(sn(function () {
            El(null, e, null, null)
          }),
            (t[Nt] = null))
        }
      }))
  function Pl(e) {
    this._internalRoot = e
  }
  Pl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = uo()
      e = { blockedOn: null, target: e, priority: t }
      for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
      ;(Tt.splice(n, 0, e), n === 0 && po(e))
    }
  }
  function As(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
  }
  function _l(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    )
  }
  function Pu() {}
  function Rd(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r
        r = function () {
          var m = Al(o)
          i.call(m)
        }
      }
      var o = Cu(t, r, e, 0, null, !1, !1, "", Pu)
      return (
        (e._reactRootContainer = o),
        (e[Nt] = o.current),
        rr(e.nodeType === 8 ? e.parentNode : e),
        sn(),
        o
      )
    }
    for (; (l = e.lastChild); ) e.removeChild(l)
    if (typeof r == "function") {
      var a = r
      r = function () {
        var m = Al(u)
        a.call(m)
      }
    }
    var u = Ss(e, 0, !1, null, null, !1, !1, "", Pu)
    return (
      (e._reactRootContainer = u),
      (e[Nt] = u.current),
      rr(e.nodeType === 8 ? e.parentNode : e),
      sn(function () {
        El(t, u, n, r)
      }),
      u
    )
  }
  function zl(e, t, n, r, l) {
    var i = n._reactRootContainer
    if (i) {
      var o = i
      if (typeof l == "function") {
        var a = l
        l = function () {
          var u = Al(o)
          a.call(u)
        }
      }
      El(t, o, e, l)
    } else o = Rd(n, t, e, l, r)
    return Al(o)
  }
  ;((oo = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode
        if (t.current.memoizedState.isDehydrated) {
          var n = Wn(t.pendingLanes)
          n !== 0 &&
            (Xl(t, n | 1),
            Fe(t, de()),
            (Q & 6) === 0 && ((Tn = de() + 500), Dt()))
        }
        break
      case 13:
        ;(sn(function () {
          var r = Ct(e, 1)
          if (r !== null) {
            var l = ze()
            ct(r, e, 1, l)
          }
        }),
          Cs(e, 1))
    }
  }),
    (Jl = function (e) {
      if (e.tag === 13) {
        var t = Ct(e, 134217728)
        if (t !== null) {
          var n = ze()
          ct(t, e, 134217728, n)
        }
        Cs(e, 134217728)
      }
    }),
    (ao = function (e) {
      if (e.tag === 13) {
        var t = Qt(e),
          n = Ct(e, t)
        if (n !== null) {
          var r = ze()
          ct(n, e, t, r)
        }
        Cs(e, t)
      }
    }),
    (uo = function () {
      return X
    }),
    (co = function (e, t) {
      var n = X
      try {
        return ((X = e), t())
      } finally {
        X = n
      }
    }),
    (Vl = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Rl(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t]
              if (r !== e && r.form === e.form) {
                var l = Gr(r)
                if (!l) throw Error(h(90))
                ;(Ms(r), Rl(r, l))
              }
            }
          }
          break
        case "textarea":
          Ds(e, n)
          break
        case "select":
          ;((t = n.value), t != null && cn(e, !!n.multiple, t, !1))
      }
    }),
    ($s = ys),
    (Ys = sn))
  var Fd = { usingClientEntryPoint: !1, Events: [sr, wn, Gr, qs, Gs, ys] },
    wr = {
      findFiberByHostInstance: Xt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Od = {
      bundleType: wr.bundleType,
      version: wr.version,
      rendererPackageName: wr.rendererPackageName,
      rendererConfig: wr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ke.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Zs(e)), e === null ? null : e.stateNode)
      },
      findFiberByHostInstance: wr.findFiberByHostInstance || Id,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    }
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Bl = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!Bl.isDisabled && Bl.supportsFiber)
      try {
        ;((Pr = Bl.inject(Od)), (mt = Bl))
      } catch {}
  }
  return (
    (Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fd),
    (Oe.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
      if (!As(t)) throw Error(h(200))
      return Md(e, t, null, n)
    }),
    (Oe.createRoot = function (e, t) {
      if (!As(e)) throw Error(h(299))
      var n = !1,
        r = "",
        l = Au
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Ss(e, 1, !1, null, null, n, !1, r, l)),
        (e[Nt] = t.current),
        rr(e.nodeType === 8 ? e.parentNode : e),
        new Es(t)
      )
    }),
    (Oe.findDOMNode = function (e) {
      if (e == null) return null
      if (e.nodeType === 1) return e
      var t = e._reactInternals
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(h(188))
          : ((e = Object.keys(e).join(",")), Error(h(268, e)))
      return ((e = Zs(t)), (e = e === null ? null : e.stateNode), e)
    }),
    (Oe.flushSync = function (e) {
      return sn(e)
    }),
    (Oe.hydrate = function (e, t, n) {
      if (!_l(t)) throw Error(h(200))
      return zl(null, e, t, !0, n)
    }),
    (Oe.hydrateRoot = function (e, t, n) {
      if (!As(e)) throw Error(h(405))
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        o = Au
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = Cu(t, null, e, 1, n ?? null, l, !1, i, o)),
        (e[Nt] = t.current),
        rr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l))
      return new Pl(t)
    }),
    (Oe.render = function (e, t, n) {
      if (!_l(t)) throw Error(h(200))
      return zl(null, e, t, !1, n)
    }),
    (Oe.unmountComponentAtNode = function (e) {
      if (!_l(e)) throw Error(h(40))
      return e._reactRootContainer
        ? (sn(function () {
            zl(null, null, e, !1, function () {
              ;((e._reactRootContainer = null), (e[Nt] = null))
            })
          }),
          !0)
        : !1
    }),
    (Oe.unstable_batchedUpdates = ys),
    (Oe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!_l(n)) throw Error(h(200))
      if (e == null || e._reactInternals === void 0) throw Error(h(38))
      return zl(e, t, n, !1, r)
    }),
    (Oe.version = "18.3.1-next-f1338f8080-20240426"),
    Oe
  )
}
var Ru
function qd() {
  if (Ru) return zs.exports
  Ru = 1
  function g() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g)
      } catch (P) {
        console.error(P)
      }
  }
  return (g(), (zs.exports = Qd()), zs.exports)
}
var Fu
function Gd() {
  if (Fu) return Ll
  Fu = 1
  var g = qd()
  return ((Ll.createRoot = g.createRoot), (Ll.hydrateRoot = g.hydrateRoot), Ll)
}
var $d = Gd(),
  De = Ts()
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yd = (g) => g.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Kd = (g) =>
    g.replace(/^([A-Z])|[\s-_]+(\w)/g, (P, h, I) =>
      I ? I.toUpperCase() : h.toLowerCase(),
    ),
  Ou = (g) => {
    const P = Kd(g)
    return P.charAt(0).toUpperCase() + P.slice(1)
  },
  bu = (...g) =>
    g
      .filter((P, h, I) => !!P && P.trim() !== "" && I.indexOf(P) === h)
      .join(" ")
      .trim()
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Xd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jd = De.forwardRef(
  (
    {
      color: g = "currentColor",
      size: P = 24,
      strokeWidth: h = 2,
      absoluteStrokeWidth: I,
      className: y = "",
      children: F,
      iconNode: b,
      ...Z
    },
    O,
  ) =>
    De.createElement(
      "svg",
      {
        ref: O,
        ...Xd,
        width: P,
        height: P,
        stroke: g,
        strokeWidth: I ? (Number(h) * 24) / Number(P) : h,
        className: bu("lucide", y),
        ...Z,
      },
      [
        ...b.map(([D, B]) => De.createElement(D, B)),
        ...(Array.isArray(F) ? F : [F]),
      ],
    ),
)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const we = (g, P) => {
  const h = De.forwardRef(({ className: I, ...y }, F) =>
    De.createElement(Jd, {
      ref: F,
      iconNode: P,
      className: bu(`lucide-${Yd(Ou(g))}`, `lucide-${g}`, I),
      ...y,
    }),
  )
  return ((h.displayName = Ou(g)), h)
}
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zd = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  ef = we("arrow-right", Zd)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tf = [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv",
      },
    ],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ],
  nf = we("award", tf)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rf = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  Tl = we("circle-check-big", rf)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lf = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
  ],
  sf = we("clock", lf)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const of = [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
    ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
  ],
  af = we("download", of)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uf = [
    [
      "path",
      {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
        key: "1rqfz7",
      },
    ],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }],
  ],
  cf = we("file-text", uf)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const df = [
    [
      "path",
      {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
        key: "c3ymky",
      },
    ],
  ],
  ff = we("heart", df)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pf = [
    [
      "rect",
      { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
    ],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ],
  Uu = we("mail", pf)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mf = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  Wu = we("map-pin", mf)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hf = [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
  ],
  gf = we("menu", hf)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vf = [
    [
      "path",
      {
        d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
        key: "1a0edw",
      },
    ],
    ["path", { d: "M12 22V12", key: "d0xqtd" }],
    ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
    ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ],
  Du = we("package", vf)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yf = [
    [
      "path",
      {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
        key: "foiqr5",
      },
    ],
  ],
  xf = we("phone", yf)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wf = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
  ],
  Nf = we("shield", wf)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jf = [
    ["path", { d: "M7 20h10", key: "e6iznv" }],
    ["path", { d: "M10 20c5.5-2.5.8-6.4 3-10", key: "161w41" }],
    [
      "path",
      {
        d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",
        key: "9gtqwd",
      },
    ],
    [
      "path",
      {
        d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",
        key: "bkxnd2",
      },
    ],
  ],
  kf = we("sprout", jf)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sf = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ],
  Cf = we("target", Sf)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ef = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["polyline", { points: "16 11 18 13 22 9", key: "1pwet4" }],
  ],
  Af = we("user-check", Ef)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pf = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
  ],
  Ml = we("users", Pf)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _f = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  zf = we("x", _f),
  Bf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAC0NJREFUaEPtWXlwVEUa/7pfvzczmWQySTgTLl0UBEHE2nKvWom64OKB6Aq6DIdQiIEEwYWEgH9MrUBQPJJAZJeVAsIooMKulrcioMvq7pa1xbECCgpCCAZyzUzmeO9191a/YzLEiTmqUrVl5RWQl5nu7+vf9/2+39fdIPiRPOhHggN6gfy/ZbI3I70Z6aEI9FKrM4HlnKN7li0YEVNbhqS7XOduSBt00u/3s87M7eqYHstIfsEDN0U526Yjdj1nDBCWQAZ80utwz3unfPuhri60o/E9AuSBJwpGnLl08VOdsyyEEBjdigMA40Bk0jw0u9/Nr67edLKjxXXl+x4B8quCaSURrq4zFi/+Jj1YQpCOlNIDL+xe15WFdjS2U0DWVy9zg05vp1wbgkG6kAOO9+fNezrUnvHbCh9a2KhFq9qCEOMxweBVnAs/LH95U3vzn3pqbkYMqRM1iOUSLp+D9KwP/YteCP8QmA6BbHxp1dBwpH6vzrXxIGgCCGTZcSqNZN1X5HvyaCrjD/iXZn9be/awxtggQStBL845AOLgwKT2Gu+AMdVlVfWp5q6vePT6oPrdXlWNXWN8jxA4FNeRdCXnvuLFm0+3B6ZDIKs3P/oWJnQyZxZHEDIWhoAcLJ37woT2DE9a6hsejEb/RAn6GVU1tySTCMH4Uw92LHq3ItBufawsu/cAg/gtpl0zcEYmwfXO2tLXJncbyJotC49zpo40i7YVt4SV2hUPb8ztiLvi+/cOv+eedMOkls6MXbluag1jsVzAGIAjAJFJwQLiOPFk8Z7rug2k7C+LKnSIL8bCsHhMu4BBfql0XpUvleEZ/iJPTd3lh2I8PgFjPBQhKVPXtCBG+LyCpI9zswa8snNtxXep5q4q+902CpHZwoPwZQoeB4zdVWtXvFLYbSCVbxc5YnWoTGexOZTxLIxwk4Kde/pLgx6bNWv596J8S+H0h8Nq7HmOUGbC6RXKxUFCOOJxuFfuqwxUtF1YdfV69+m6f1fG1cj9ACgTY9ykyM4dHpRb8vjjz0e7DcSe+Myf/9BHk5jX7XE2L55WdimVwQkF03xh0LYyzkkq6U3MMcPMvGnpCz4qD7yYytbayqK+aktjpuKWm1cu3prSX/K8Hyz2DdXLropo0Sk61fIBoZEYYwdHLMwpnJKwvC9T7rO7YJa/Thi8p3hubm1z478o8LwEBdvzZGVIlqTaAS7Pza8/t/WcGCoWHwxemM6xfhtCMBJjyUMZa0EUviJO8hHBztf9jwdOpQLeLpCnty6eHNdjOxBi2ciQTmTUnq0i4lXCpFbC7vuXz37m04lLZ959qSX4hiEKbZqgLT6WArcyjnPIdmdM3Vce+Nsf18+8OUaDeynTcm0frcolPuHAOG5SSObs1SWBN9qCSQmk6hV/eih86bRG4/2EAUAYELaGGioiCt9cLUHkWD/U76db/3ns/hDXAshE+/3HEiBD+GygCMCFiG/6qIGv1UbOfcaoOs4IGOeWxNtbA9MmAgySrNTnkCHDly4tb+qQWus3L7ldxS0f2A2w1TMH0UHEv6Ysih+Med0Dx+78+Pi4CNcDqG02bG/J+CzlE18JIFNH5fynLnj+qFipsG/+EZvkNsYQNty6SN87/cXb3u4QSEV18cxQrKEaSSITYnKSQePd+p0LYUSQ6c7L33XwWF6E6YF2uWpnos1PhRPflLF9ahqD3+43aGlEPsUmzWqMwqPXPXh+6WObrxCJlH7LAyW+cKx+h2FU0MrScnP9V0bJAOLon7/r0Im8iKBW8sVMEoVaC8N6szwriPimjBZAzu23+60JJFGOwK3GaJQf4uDNGDy/tLATQCp3rJgRVOsDtjWj2EWNGIEyz0XcsGo6zHQMsIBYGbGjnkShlEAQgALIN2V0/yuAtLLRpq8JCiGRD+gKkOIZIbXJAmKFxoggN4AkmGYtNNM9IH/XwRMmtewcJ2cjRd0g0bgF3xny3TVWAPl2fys9rDfLZ+JzI5ZdyEj59hJfWGvckVBbI/oswSwjQ4ZJc3faCqQNtazQSoBiDLgzQUx728YBnIz47hrrrWkMXtiPDaUwxSRZ3JIzJKiVkzFsfnHhpo5rpKK6dGZYra8GQznMxYrwJYIswmlkx/zsh4BIAI1DvP0nnmm8+CbHqH+yiBkZwcR3xwhvTSgigAirdpWZQpKolyRuZnsGzy/uTI2U7yiZ1RJv2J5c2BwQxwhrDKhiBA5LJhjGwGNTK7nYLdQOLB2dtGnMuA8L//tJhGq/sGNjr0vBxHfnaG9NKFSzX/SJVtUyfKjAqZIsMqLuO13sQn7DWlO1GXXrPIDJ0YFZw6aer//ylH1CMPPPwePub9aIDcQucuHUkbbro4qXH8pfMqOyOdZS1LY1CNUSQIIGtYRBkQVBYwR5uTcOv1B79E3O9JGi0E2REUAGdVa1SmaFjIzYGshAxq7Xi+duuHftloIg51pG6zZCADGLPcr1QHLXFkAzJNfKg1U7yyYUPPhoM41tMlhpP4JaiPjuMuTXKnbj3MOBYGfzmpK93lVl972lsdhk4zBnqFYXit3IiNpQnSTlIJP0Z5bPKV9etmXREc61MTyJIwlq2Q3RDKxBvSxH+oP7Kl7a/ZuiGRMb1Mh7rZVmDnEKICO8NY3RC4ZqmQKDQMLOw2tK9ox7Yt20SpWFirC1LTKLvUs1Um9kxFQPBGnE+/ulc9bvLNuy8B3G1DsSfQ8hyE7Ly9958FhemGkB0W8wtnqzTqGP0/PL9ysD/7hzyczr6iLhoxRxUVxmSSMAJ0itGREHNoteGBxvrindc7f/2TlzovG6raYEmMqZ09liN1RLu1xtNwyEJJqm9B29ZObqk2UvFlbpEFuIkUQRwmcQRd94MgYufv/Q16iehiYQTOrdDrmJI9LkVlxxUC598ar/VXWC30/6xmuvVTWeoYLmVnXNo+l6Dla1Q78d1Y83xr57Vpb5VVSjwzWqKwRnbCwr3V20buP80U2h2iOcUYOUSEKQnT60k/IbKJ4djjduE8db486B4TNZriHjF84obdywtXSkTlBanqPP8Xe/uUhq6xsyGaf9tFgsj3HUjzGtb5xSDwdIlwlxYQwuTdNB2JII4bqmNWNJUoHyJs7hkkzky+luRw1F/IIz5m16ZOLV0SNfnxyOqaQWP1b5lf+5ednRaP1nCGvDMeaIis7u7mSxbwismh6MNhQoWN7nUNwHMIMvjtcAnKqtuTFEI+MBkzGU0VG6quZiCXspZ06xZUm+VEwq6UQfMmUnwVdTSqzjAeKgcUqbCCZ1skKOMwrHXEj+fGBm38/HZCphLe3yCFUL36LGtYk5mYO3L19Y+XKyj5SbRnH5PKWkaGAoWPfzOLBbOUG/1nQ6ion0JiRSKK91O2DSN6Fx5hhuX4AYZwvz4fZWzRyb2DqIsSZCUV9MvBubBy5239whk6+Ao7/LgA9kZXg/+WvZprPI1mPLcgJIUWWR4/CXDddSGr+NIXSvDmy8rtMM4dmghSRFAKAFOI9QnbcgBFGEUAwBqBijGEIopGBZVTW1mciEyZKixrVohDJgBrnFLQxj4uJBlh2KO66pmDEmEyRlUMacOqJuYOCwtjIuhETTJx7OWBrjPJ0xKhlqJklRAvgIAdjjlN0f5HmHndjm98fQI+tKMo99/eVs4nDO0jhL44yexxyfVQg+KxHpHOFSDSBUKwNvcinO8O1X3xRZsGCBdgV1euiXZeJG5chpd3M8muFwwgCV8kFMp0NVqg1hnA0DQoYSjiiNqdVo3oqiG1XCm35C+pztqf+76CGchlm/349PxC4OSVkjPem4p2z3AumpyHbXbm9Guhu5nprXm5Geimx37fZmpLuR66l5/wNuMic6W4z7HgAAAABJRU5ErkJggg=="
function Lf({ className: g = "" }) {
  return s.jsx("img", {
    src: Bf,
    alt: "Colabora Business Solutions Logo",
    className: `${g} object-contain`,
  })
}
function Tf({ currentPage: g = "home", onNavigate: P }) {
  const [h, I] = De.useState(!1),
    y = [
      { label: "Home", page: "home" },
      { label: "Find Jobs", page: "jobs" },
      { label: "Hire Talent", page: "hire-talent" },
      { label: "About Us", page: "about" },
      { label: "Contact", page: "contact" },
    ],
    F = (b) => {
      ;(P(b), I(!1))
    }
  return s.jsx("header", {
    className: "fixed top-0 left-0 right-0 z-50",
    children: s.jsx("div", {
      className:
        "backdrop-blur-md bg-white/70 border-b border-[#204A3B]/10 shadow-sm",
      style: {
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      },
      children: s.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          s.jsxs("div", {
            className: "flex items-center justify-between h-16",
            children: [
              s.jsxs("button", {
                onClick: () => F("home"),
                className:
                  "flex items-center gap-3 hover:opacity-80 transition-opacity",
                "aria-label": "Go to homepage",
                children: [
                  s.jsx(Lf, { className: "w-10 h-10" }),
                  s.jsx("span", {
                    className: "text-[#204A3B] hidden sm:inline",
                    children: "Colabora Business Solutions",
                  }),
                ],
              }),
              s.jsxs("nav", {
                className: "hidden md:flex items-center gap-8",
                "aria-label": "Main navigation",
                children: [
                  y.map((b) =>
                    s.jsx(
                      "button",
                      {
                        onClick: () => F(b.page),
                        className: `transition-colors ${g === b.page ? "text-[#529989]" : "text-[#204A3B] hover:text-[#529989]"}`,
                        "aria-current": g === b.page ? "page" : void 0,
                        children: b.label,
                      },
                      b.page,
                    ),
                  ),
                  s.jsx("a", {
                    href: "tel:+15307126359",
                    className:
                      "text-[#529989] hover:text-[#204A3B] transition-colors",
                    "aria-label": "Call us at 530-712-6359",
                    children: "(530) 712-6359",
                  }),
                ],
              }),
              s.jsx("button", {
                onClick: () => I(!h),
                className:
                  "md:hidden p-2 text-[#204A3B] hover:text-[#529989] transition-colors",
                "aria-label": h ? "Close menu" : "Open menu",
                "aria-expanded": h,
                children: h ? s.jsx(zf, { size: 24 }) : s.jsx(gf, { size: 24 }),
              }),
            ],
          }),
          h &&
            s.jsx("nav", {
              className: "md:hidden py-4 border-t border-[#204A3B]/10",
              "aria-label": "Mobile navigation",
              children: s.jsxs("div", {
                className: "flex flex-col gap-4",
                children: [
                  y.map((b) =>
                    s.jsx(
                      "button",
                      {
                        onClick: () => F(b.page),
                        className: `text-left px-4 py-2 transition-colors ${g === b.page ? "text-[#529989] bg-[#529989]/10" : "text-[#204A3B] hover:text-[#529989] hover:bg-[#529989]/5"}`,
                        "aria-current": g === b.page ? "page" : void 0,
                        children: b.label,
                      },
                      b.page,
                    ),
                  ),
                  s.jsx("a", {
                    href: "tel:+15307126359",
                    className:
                      "text-[#529989] px-4 py-2 hover:bg-[#529989]/5 transition-colors",
                    "aria-label": "Call us at (530) 712-6359",
                    children: "📞 (530) 712-6359",
                  }),
                ],
              }),
            }),
        ],
      }),
    }),
  })
}
function Mf({ onNavigate: g }) {
  return s.jsx("footer", {
    className: "bg-[#655225] text-white mt-auto",
    children: s.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
      children: [
        s.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-8",
          children: [
            s.jsxs("div", {
              children: [
                s.jsx("h3", {
                  className: "text-white mb-4",
                  children: "Colaborasolutions",
                }),
                s.jsx("p", {
                  className: "text-white/90 text-sm",
                  children:
                    "Connecting reliable local talent with essential industries through simple, modern staffing solutions.",
                }),
              ],
            }),
            s.jsxs("div", {
              children: [
                s.jsx("h4", {
                  className: "text-white mb-4",
                  children: "Quick Links",
                }),
                s.jsx("nav", {
                  "aria-label": "Footer navigation",
                  children: s.jsxs("ul", {
                    className: "space-y-2",
                    children: [
                      s.jsx("li", {
                        children: s.jsx("button", {
                          onClick: () => g("home"),
                          className:
                            "text-white/90 hover:text-white text-sm transition-colors",
                          children: "Home",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx("button", {
                          onClick: () => g("jobs"),
                          className:
                            "text-white/90 hover:text-white text-sm transition-colors",
                          children: "Find Jobs",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx("button", {
                          onClick: () => g("hire-talent"),
                          className:
                            "text-white/90 hover:text-white text-sm transition-colors",
                          children: "Hire Talent",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx("button", {
                          onClick: () => g("about"),
                          className:
                            "text-white/90 hover:text-white text-sm transition-colors",
                          children: "About Us",
                        }),
                      }),
                      s.jsx("li", {
                        children: s.jsx("button", {
                          onClick: () => g("contact"),
                          className:
                            "text-white/90 hover:text-white text-sm transition-colors",
                          children: "Contact",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            s.jsxs("div", {
              children: [
                s.jsx("h4", {
                  className: "text-white mb-4",
                  children: "Contact Us",
                }),
                s.jsxs("address", {
                  className: "not-italic space-y-2 text-sm",
                  children: [
                    s.jsx("p", {
                      className: "text-white/90",
                      children: s.jsx("a", {
                        href: "tel:+15307126359",
                        className: "hover:text-white transition-colors",
                        "aria-label": "Call us at 530-712-6359",
                        children: "Phone: (530) 712-6359",
                      }),
                    }),
                    s.jsx("p", {
                      className: "text-white/90",
                      children: s.jsx("a", {
                        href: "mailto:info@colaborasolutions.com",
                        className: "hover:text-white transition-colors",
                        "aria-label": "Email us at info@colaborasolutions.com",
                        children: "Email: info@colaborasolutions.com",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        s.jsx("div", {
          className: "mt-8 pt-8 border-t border-white/20",
          children: s.jsxs("div", {
            className:
              "flex flex-col sm:flex-row justify-between items-center gap-4",
            children: [
              s.jsxs("p", {
                className: "text-white/80 text-sm",
                children: [
                  "© ",
                  new Date().getFullYear(),
                  " Colaborasolutions. All rights reserved.",
                ],
              }),
              s.jsxs("div", {
                className: "flex gap-6",
                children: [
                  s.jsx("button", {
                    onClick: () => g("privacy"),
                    className:
                      "text-white/80 hover:text-white text-sm transition-colors",
                    children: "Privacy Policy",
                  }),
                  s.jsx("button", {
                    onClick: () => g("terms"),
                    className:
                      "text-white/80 hover:text-white text-sm transition-colors",
                    children: "Terms of Service",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  })
}
function In({
  children: g,
  variant: P = "primary",
  fullWidth: h = !1,
  className: I = "",
  ...y
}) {
  const F =
      "px-8 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
    b = {
      primary:
        "bg-[#529989] text-white hover:bg-[#529989]/90 focus:ring-2 focus:ring-[#529989] focus:ring-offset-2",
      secondary:
        "bg-[#879153] text-white hover:bg-[#879153]/90 focus:ring-2 focus:ring-[#879153] focus:ring-offset-2",
    },
    Z = h ? "w-full" : ""
  return s.jsx("button", {
    className: `${F} ${b[P]} ${Z} ${I}`,
    ...y,
    children: g,
  })
}
function me({ children: g, className: P = "" }) {
  return s.jsx("div", {
    className: `backdrop-blur-md bg-white/70 border border-[#204A3B]/10 rounded-lg shadow-lg p-6 ${P}`,
    style: { backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" },
    children: g,
  })
}
const If = "/assets/handshake-tAiNE4cc.webp"
function Rf({ onNavigate: g }) {
  return s.jsxs("main", {
    children: [
      s.jsx("section", {
        className:
          "pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#529989]/10 to-transparent",
        children: s.jsx("div", {
          className: "max-w-7xl mx-auto",
          children: s.jsxs("div", {
            className: "text-center max-w-4xl mx-auto",
            children: [
              s.jsx("h1", {
                className: "text-4xl font-bold text-[#204A3B] mb-6 md:text-5xl",
                children:
                  "Connecting reliable local talent with essential industries",
              }),
              s.jsx("p", {
                className: "text-[#204A3B]/80 mb-8 max-w-2xl mx-auto",
                children:
                  "Colaborasolution specializes in staffing solutions for Agriculture and General Labor sectors, providing simple, modern connections between skilled workers and businesses across Northern California.",
              }),
            ],
          }),
        }),
      }),
      s.jsx("section", {
        className: "py-12 px-4 sm:px-6 lg:px-8",
        "aria-labelledby": "cta-heading",
        children: s.jsxs("div", {
          className: "max-w-7xl mx-auto",
          children: [
            s.jsx("h2", {
              id: "cta-heading",
              className: "sr-only",
              children: "Choose your path",
            }),
            s.jsxs("div", {
              className: "grid md:grid-cols-2 gap-8",
              children: [
                s.jsxs(me, {
                  className: "text-center hover:shadow-xl transition-shadow",
                  children: [
                    s.jsx(Ml, {
                      className: "text-[#529989] mx-auto mb-4",
                      size: 48,
                      "aria-hidden": "true",
                    }),
                    s.jsx("h2", {
                      className: "text-[#204A3B] mb-4",
                      children: "Looking for Work?",
                    }),
                    s.jsx("p", {
                      className: "text-[#204A3B]/80 mb-6",
                      children:
                        "Find opportunities in agriculture, processing plants, and general labor. Start your application today and connect with local employers.",
                    }),
                    s.jsx(In, {
                      onClick: () => g("jobs"),
                      fullWidth: !0,
                      "aria-label": "Go to job applications page",
                      children: "Apply Now",
                    }),
                  ],
                }),
                s.jsxs(me, {
                  className: "text-center hover:shadow-xl transition-shadow",
                  children: [
                    s.jsx(Du, {
                      className: "text-[#879153] mx-auto mb-4",
                      size: 48,
                      "aria-hidden": "true",
                    }),
                    s.jsx("h2", {
                      className: "text-[#204A3B] mb-4",
                      children: "Need Reliable Staff?",
                    }),
                    s.jsx("p", {
                      className: "text-[#204A3B]/80 mb-6",
                      children:
                        "Access our pool of vetted, skilled workers ready for agriculture and general labor roles. Get the staffing support your business needs.",
                    }),
                    s.jsx(In, {
                      onClick: () => g("hire-talent"),
                      variant: "secondary",
                      fullWidth: !0,
                      "aria-label": "Go to talent hiring page",
                      children: "Hire Talent",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      s.jsx("section", {
        className: "py-16 px-4 sm:px-6 lg:px-8 bg-[#529989]/5",
        "aria-labelledby": "industries-heading",
        children: s.jsxs("div", {
          className: "max-w-7xl mx-auto",
          children: [
            s.jsxs("div", {
              className: "text-center mb-12",
              children: [
                s.jsx("h2", {
                  id: "industries-heading",
                  className: "text-[#204A3B] mb-4",
                  children: "Our Industry Focus",
                }),
                s.jsx("p", {
                  className: "text-[#204A3B]/80 max-w-2xl mx-auto",
                  children:
                    "We specialize in connecting talent with opportunities in these essential industries",
                }),
              ],
            }),
            s.jsxs("div", {
              className: "grid md:grid-cols-3 gap-8",
              children: [
                s.jsxs(me, {
                  className: "text-center",
                  children: [
                    s.jsx(kf, {
                      className: "text-[#529989] mx-auto mb-4",
                      size: 40,
                      "aria-hidden": "true",
                    }),
                    s.jsx("h3", {
                      className: "text-[#204A3B] mb-3",
                      children: "Agriculture",
                    }),
                    s.jsx("p", {
                      className: "text-[#204A3B]/80 text-sm",
                      children:
                        "Farm workers, harvesters, equipment operators, and agricultural processing for seasonal and year-round positions.",
                    }),
                  ],
                }),
                s.jsxs(me, {
                  className: "text-center",
                  children: [
                    s.jsx(Du, {
                      className: "text-[#529989] mx-auto mb-4",
                      size: 40,
                      "aria-hidden": "true",
                    }),
                    s.jsx("h3", {
                      className: "text-[#204A3B] mb-3",
                      children: "Processing Plants",
                    }),
                    s.jsx("p", {
                      className: "text-[#204A3B]/80 text-sm",
                      children:
                        "Food processing, packaging, quality control, and warehouse roles in processing facilities and distribution centers.",
                    }),
                  ],
                }),
                s.jsxs(me, {
                  className: "text-center",
                  children: [
                    s.jsx(Ml, {
                      className: "text-[#529989] mx-auto mb-4",
                      size: 40,
                      "aria-hidden": "true",
                    }),
                    s.jsx("h3", {
                      className: "text-[#204A3B] mb-3",
                      children: "General Labor",
                    }),
                    s.jsx("p", {
                      className: "text-[#204A3B]/80 text-sm",
                      children:
                        "Assembly, warehouse operations, maintenance, and general workforce needs across various industries.",
                    }),
                  ],
                }),
              ],
            }),
            s.jsx("div", {
              className:
                "mt-8 p-4 bg-[#879153]/10 rounded-lg border border-[#879153]/20",
              children: s.jsxs("p", {
                className: "text-center text-[#204A3B]/90 text-sm",
                children: [
                  s.jsx("strong", { children: "Please note:" }),
                  " At this time, we do not provide staffing for Construction or similar heavy industrial sectors. Our focus remains on Agriculture and General Labor opportunities.",
                ],
              }),
            }),
          ],
        }),
      }),
      s.jsx("section", {
        className: "py-16 px-4 sm:px-6 lg:px-8",
        "aria-labelledby": "about-snippet-heading",
        children: s.jsx("div", {
          className: "max-w-7xl mx-auto",
          children: s.jsxs("div", {
            className: "grid md:grid-cols-2 gap-12 items-center",
            children: [
              s.jsxs("div", {
                children: [
                  s.jsx("h2", {
                    id: "about-snippet-heading",
                    className: "text-[#204A3B] mb-6",
                    children: "Why Choose Colaborasolutions?",
                  }),
                  s.jsx("p", {
                    className: "text-[#204A3B]/80 mb-4",
                    children:
                      "Founded by Daniela and Juan, professionals with deep roots in staffing and workforce management, Colaborasolutions brings years of experience connecting local talent with essential industries.",
                  }),
                  s.jsx("p", {
                    className: "text-[#204A3B]/80 mb-6",
                    children:
                      "We understand the unique needs of both job seekers and employers in agriculture and general labor sectors. Our streamlined approach ensures fast, reliable placements that benefit everyone.",
                  }),
                  s.jsx(In, {
                    onClick: () => g("about"),
                    "aria-label": "Learn more about us",
                    children: "Learn More About Us",
                  }),
                ],
              }),
              s.jsx(me, {
                children: s.jsx("div", {
                  className:
                    "aspect-video rounded-lg overflow-hidden flex items-center justify-center",
                  children: s.jsx("img", {
                    src: If,
                    alt: "Connecting People, Building Communities",
                    className: "w-full h-full object-cover",
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    ],
  })
}
const Ff = "/assets/fw4-CXCmrmIq.pdf"
function Of() {
  const g = [
      {
        icon: cf,
        title: "Fill Out the Form",
        description:
          "Complete our simple application form below. Select your job type preference from the dropdown.",
      },
      {
        icon: Af,
        title: "Initial Screening",
        description:
          "Our team reviews your application and contacts qualified candidates within 2-3 business days.",
      },
      {
        icon: Tl,
        title: "Placement & Onboarding",
        description:
          "Once matched with a position, we'll guide you through the onboarding process.",
      },
    ],
    P = () => {
      document
        .getElementById("application-form")
        ?.scrollIntoView({ behavior: "smooth" })
    }
  return s.jsxs("main", {
    children: [
      s.jsx("section", {
        className:
          "pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#529989]/10 to-transparent",
        children: s.jsxs("div", {
          className: "max-w-4xl mx-auto text-center",
          children: [
            s.jsx("h1", {
              className: "text-4xl font-bold text-[#204A3B] mb-6 md:text-5xl",
              children: "Find Your Next Role in Agriculture or General Labor",
            }),
            s.jsx("p", {
              className: "text-[#204A3B]/80 mb-8 max-w-2xl mx-auto",
              children:
                "Join our network of skilled workers and connect with local employers in essential industries. Your next opportunity is just an application away.",
            }),
            s.jsx(In, {
              onClick: P,
              "aria-label": "Scroll to application form",
              children: "Start Application",
            }),
          ],
        }),
      }),
      s.jsx("section", {
        className: "py-12 px-4 sm:px-6 lg:px-8",
        "aria-labelledby": "process-heading",
        children: s.jsxs("div", {
          className: "max-w-7xl mx-auto",
          children: [
            s.jsx("h2", {
              id: "process-heading",
              className: "text-[#204A3B] text-center mb-12",
              children: "How It Works",
            }),
            s.jsx("div", {
              className: "grid md:grid-cols-3 gap-8",
              children: g.map((h, I) => {
                const y = h.icon
                return s.jsxs(
                  me,
                  {
                    className: "text-center",
                    children: [
                      s.jsx("div", {
                        className:
                          "inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#529989] text-white mb-4",
                        children: I + 1,
                      }),
                      s.jsx(y, {
                        className: "text-[#529989] mx-auto mb-4",
                        size: 32,
                        "aria-hidden": "true",
                      }),
                      s.jsx("h3", {
                        className: "text-[#204A3B] mb-3",
                        children: h.title,
                      }),
                      s.jsx("p", {
                        className: "text-[#204A3B]/80 text-sm",
                        children: h.description,
                      }),
                    ],
                  },
                  I,
                )
              }),
            }),
          ],
        }),
      }),
      s.jsx("section", {
        id: "application-form",
        className: "py-16 px-4 sm:px-6 lg:px-8",
        "aria-labelledby": "application-heading",
        children: s.jsxs("div", {
          className: "max-w-4xl mx-auto",
          children: [
            s.jsxs("div", {
              className: "text-center mb-8",
              children: [
                s.jsx("h2", {
                  id: "application-heading",
                  className: "text-[#204A3B] mb-4",
                  children: "Submit Your Application",
                }),
                s.jsxs("p", {
                  className: "text-[#204A3B]/80",
                  children: [
                    "Please fill out all fields completely. ",
                    s.jsx("strong", { children: "Important:" }),
                    " ",
                    "Make sure to select your preferred job type from the dropdown menu within the form.",
                  ],
                }),
              ],
            }),
            s.jsx(me, {
              children: s.jsx("div", {
                className: "bg-white/50 rounded-lg overflow-hidden",
                children: s.jsx("iframe", {
                  src: "https://docs.google.com/forms/d/e/1FAIpQLSeVnixvjsMlVQrF3gCFZIHlsvXE-iSxn6bM9nk4X0229hNBRQ/viewform?embedded=true",
                  width: "100%",
                  height: "1345",
                  frameBorder: "0",
                  marginHeight: 0,
                  marginWidth: 0,
                  title: "Job Application Form",
                  children: "Loading…",
                }),
              }),
            }),
            s.jsxs("div", {
              className: "flex items-center justify-center py-16",
              children: [
                s.jsx("span", { className: "bg-[#529989]/20 h-px w-24" }),
                s.jsx("span", {
                  className: "mx-4 text-[#204A3B] font-bold text-3xl",
                  children: "W4 Form",
                }),
                s.jsx("span", { className: "bg-[#529989]/20 h-px w-24" }),
              ],
            }),
            s.jsx(me, {
              children: s.jsxs("div", {
                className: "p-8",
                children: [
                  s.jsx("h3", {
                    className:
                      "text-2xl font-semibold text-[#204A3B] mb-6 text-center",
                    children: "Submit Manually",
                  }),
                  s.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-8 items-start",
                    children: [
                      s.jsxs("div", {
                        className: "space-y-6",
                        children: [
                          s.jsxs("div", {
                            className: "flex items-start gap-4",
                            children: [
                              s.jsx("div", {
                                className:
                                  "p-2 bg-[#529989]/10 rounded-lg shrink-0",
                                children: s.jsx(af, {
                                  className: "text-[#529989]",
                                  size: 24,
                                }),
                              }),
                              s.jsxs("div", {
                                children: [
                                  s.jsx("h4", {
                                    className:
                                      "font-semibold text-[#204A3B] mb-1",
                                    children: "1. Download Form",
                                  }),
                                  s.jsx("p", {
                                    className: "text-[#204A3B]/80 text-sm mb-3",
                                    children:
                                      "Download and complete our employment form.",
                                  }),
                                  s.jsxs("a", {
                                    href: Ff,
                                    download: "Colabora-Empoloyment-Form.pdf",
                                    className:
                                      "inline-flex items-center gap-2 text-[#529989] font-medium hover:text-[#204A3B] transition-colors",
                                    children: [
                                      "Download PDF ",
                                      s.jsx(ef, { size: 16 }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "flex items-start gap-4",
                            children: [
                              s.jsx("div", {
                                className:
                                  "p-2 bg-[#529989]/10 rounded-lg shrink-0",
                                children: s.jsx(Uu, {
                                  className: "text-[#529989]",
                                  size: 24,
                                }),
                              }),
                              s.jsxs("div", {
                                children: [
                                  s.jsx("h4", {
                                    className:
                                      "font-semibold text-[#204A3B] mb-1",
                                    children: "2. Email Us",
                                  }),
                                  s.jsx("p", {
                                    className: "text-[#204A3B]/80 text-sm mb-2",
                                    children: "Send your completed form to:",
                                  }),
                                  s.jsx("a", {
                                    href: "mailto:info@colaborasolutions.com",
                                    className:
                                      "text-[#529989] font-medium hover:underline block break-all",
                                    children: "info@colaborasolutions.com",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className:
                          "flex items-start gap-4 bg-[#529989]/5 p-6 rounded-xl border border-[#529989]/10 h-full",
                        children: [
                          s.jsx("div", {
                            className:
                              "p-2 bg-[#529989]/10 rounded-lg shrink-0",
                            children: s.jsx(Wu, {
                              className: "text-[#529989]",
                              size: 24,
                            }),
                          }),
                          s.jsxs("div", {
                            children: [
                              s.jsx("h4", {
                                className: "font-semibold text-[#204A3B] mb-2",
                                children: "Drop Off In Person",
                              }),
                              s.jsx("p", {
                                className: "text-[#204A3B]/80 text-sm mb-4",
                                children:
                                  "You can also print your completed form and bring it to our office:",
                              }),
                              s.jsxs("address", {
                                className:
                                  "not-italic text-[#204A3B] font-medium bg-white/50 p-4 rounded-lg border border-[#529989]/10",
                                children: [
                                  "75 Declaration Drive",
                                  s.jsx("br", {}),
                                  "Suite 14",
                                  s.jsx("br", {}),
                                  "Chico, CA 95973",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            s.jsx("div", {
              className: "mt-6 text-center",
              children: s.jsxs("p", {
                className: "text-sm text-[#204A3B]/60",
                children: [
                  "Having trouble with the form? Contact us directly at",
                  " ",
                  s.jsx("a", {
                    href: "tel:+15307126359",
                    className: "text-[#529989] hover:underline",
                    children: "(530) 712-6359",
                  }),
                  " ",
                  "or",
                  " ",
                  s.jsx("a", {
                    href: "mailto:info@colaborasolutions.com",
                    className: "text-[#529989] hover:underline",
                    children: "info@colaborasolutions.com",
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  })
}
function Hu() {
  return s.jsxs(me, {
    children: [
      s.jsx("h3", {
        className: "text-[#204A3B] mb-6",
        children: "Get in Touch",
      }),
      s.jsxs("div", {
        className: "space-y-4",
        children: [
          s.jsxs("div", {
            className: "flex items-start gap-3",
            children: [
              s.jsx(xf, {
                className: "text-[#529989] mt-1 flex-shrink-0",
                size: 20,
                "aria-hidden": "true",
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("p", {
                    className: "text-sm text-[#204A3B]/60 mb-1",
                    children: "Phone",
                  }),
                  s.jsx("a", {
                    href: "tel:+15307126359",
                    className:
                      "text-[#204A3B] hover:text-[#529989] transition-colors",
                    "aria-label": "Call us at +1 (530) 712-6359",
                    children: "+1 (530) 712-6359",
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className: "flex items-start gap-3",
            children: [
              s.jsx(Uu, {
                className: "text-[#529989] mt-1 flex-shrink-0",
                size: 20,
                "aria-hidden": "true",
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("p", {
                    className: "text-sm text-[#204A3B]/60 mb-1",
                    children: "Email",
                  }),
                  s.jsx("a", {
                    href: "mailto:info@colaborasolutions.com",
                    className:
                      "text-[#204A3B] hover:text-[#529989] transition-colors break-all",
                    "aria-label": "Email us at info@colaborasolutions.com",
                    children: "info@colaborasolutions.com",
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className: "flex items-start gap-3",
            children: [
              s.jsx(Wu, {
                className: "text-[#529989] mt-1 flex-shrink-0",
                size: 20,
                "aria-hidden": "true",
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("p", {
                    className: "text-sm text-[#204A3B]/60 mb-1",
                    children: "Address",
                  }),
                  s.jsxs("a", {
                    href: "geo:37.7749,-122.4194",
                    className:
                      "text-[#204A3B] hover:text-[#529989] transition-colors",
                    "aria-label": "View our location on map",
                    children: [
                      "75 Declaration Drive",
                      s.jsx("br", {}),
                      "Suite 14",
                      s.jsx("br", {}),
                      "Chico, CA 95973",
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      s.jsx("div", {
        className: "mt-6 pt-6 border-t border-[#204A3B]/10",
        children: s.jsxs("p", {
          className: "text-sm text-[#204A3B]/80",
          children: [
            s.jsx("strong", { children: "Business Hours:" }),
            s.jsx("br", {}),
            "Monday - Friday: 8:00 AM - 5:00 PM",
            s.jsx("br", {}),
            "Saturday - Sunday: Closed",
          ],
        }),
      }),
    ],
  })
}
function Df() {
  const [g, P] = De.useState({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      staffingNeed: "",
      timeline: "",
      message: "",
    }),
    [h, I] = De.useState("idle"),
    [y, F] = De.useState({}),
    b = () => {
      const B = {}
      return (
        g.companyName.trim() || (B.companyName = "Company name is required"),
        g.contactName.trim() || (B.contactName = "Contact name is required"),
        g.email.trim()
          ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g.email) ||
            (B.email = "Please enter a valid email address")
          : (B.email = "Email is required"),
        g.phone.trim() || (B.phone = "Phone number is required"),
        g.staffingNeed || (B.staffingNeed = "Please select a staffing need"),
        g.timeline || (B.timeline = "Please select a timeline"),
        F(B),
        Object.keys(B).length === 0
      )
    },
    Z = async (B) => {
      if ((B.preventDefault(), !!b())) {
        I("submitting")
        try {
          ;(
            await fetch("/api/send-email", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                to: "info@colaborasolution.com",
                replyTo: g.email,
                subject: `New Staffing Inquiry from ${g.companyName}`,
                html: `
            <h1>New Staffing Inquiry</h1>
            <p><strong>Company:</strong> ${g.companyName}</p>
            <p><strong>Contact:</strong> ${g.contactName}</p>
            <p><strong>Email:</strong> ${g.email}</p>
            <p><strong>Phone:</strong> ${g.phone}</p>
            <p><strong>Staffing Need:</strong> ${g.staffingNeed}</p>
            <p><strong>Timeline:</strong> ${g.timeline}</p>
            <p><strong>Message:</strong></p>
            <p>${g.message || "No additional details provided."}</p>
          `,
              }),
            })
          ).ok
            ? (I("success"),
              P({
                companyName: "",
                contactName: "",
                email: "",
                phone: "",
                staffingNeed: "",
                timeline: "",
                message: "",
              }),
              setTimeout(() => {
                I("idle")
              }, 5e3))
            : (console.error("Failed to send email"), I("error"))
        } catch (V) {
          ;(console.error("Error sending email:", V), I("error"))
        }
      }
    },
    O = (B, V) => {
      ;(P((Y) => ({ ...Y, [B]: V })), y[B] && F((Y) => ({ ...Y, [B]: "" })))
    },
    D = [
      {
        icon: Ml,
        title: "Vetted Local Talent",
        description:
          "Access to pre-screened, qualified workers from your local community",
      },
      {
        icon: sf,
        title: "Quick Placement",
        description:
          "Fast turnaround times to fill your staffing needs efficiently",
      },
      {
        icon: Nf,
        title: "Fewer Administrative Burden",
        description:
          "Colabora is the employer or record, we will manage HR, payroll, taxes, and compliance",
      },
      {
        icon: Tl,
        title: "Flexibility",
        description:
          "You can hire for specific projects or seasons, and you have the option for a temp-to-hire conversion if requested",
      },
    ]
  return s.jsxs("main", {
    children: [
      s.jsx("section", {
        className:
          "pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#529989]/10 to-transparent",
        children: s.jsxs("div", {
          className: "max-w-4xl mx-auto text-center",
          children: [
            s.jsx("h1", {
              className: "text-4xl font-bold text-[#204A3B] mb-6 md:text-5xl",
              children: "Find Reliable Talent for Your Business",
            }),
            s.jsx("p", {
              className: "text-[#204A3B]/80 max-w-2xl mx-auto",
              children:
                "Colaborasolutions connects you with skilled, vetted workers ready to meet your agriculture and general labor staffing needs. Experience fast, professional placements backed by local expertise.",
            }),
          ],
        }),
      }),
      s.jsx("section", {
        className: "py-12 px-4 sm:px-6 lg:px-8",
        "aria-labelledby": "benefits-heading",
        children: s.jsxs("div", {
          className: "max-w-7xl mx-auto",
          children: [
            s.jsx("h2", {
              id: "benefits-heading",
              className: "text-[#204A3B] text-center mb-12",
              children: "Why Partner With Us",
            }),
            s.jsx("div", {
              className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
              children: D.map((B, V) => {
                const Y = B.icon
                return s.jsxs(
                  me,
                  {
                    className: "text-center",
                    children: [
                      s.jsx(Y, {
                        className: "text-[#529989] mx-auto mb-4",
                        size: 40,
                        "aria-hidden": "true",
                      }),
                      s.jsx("h3", {
                        className: "text-[#204A3B] mb-3",
                        children: B.title,
                      }),
                      s.jsx("p", {
                        className: "text-[#204A3B]/80 text-sm",
                        children: B.description,
                      }),
                    ],
                  },
                  V,
                )
              }),
            }),
          ],
        }),
      }),
      s.jsx("section", {
        className: "py-16 px-4 sm:px-6 lg:px-8 bg-[#529989]/5",
        "aria-labelledby": "inquiry-heading",
        children: s.jsx("div", {
          className: "max-w-7xl mx-auto",
          children: s.jsxs("div", {
            className: "grid lg:grid-cols-3 gap-8",
            children: [
              s.jsxs("div", {
                className: "lg:col-span-2",
                children: [
                  s.jsx("h2", {
                    id: "inquiry-heading",
                    className: "text-[#204A3B] mb-6",
                    children: "Request Staffing Information",
                  }),
                  h === "success" &&
                    s.jsxs("div", {
                      className:
                        "mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3",
                      children: [
                        s.jsx(Tl, {
                          className: "text-green-600 flex-shrink-0 mt-0.5",
                          size: 20,
                        }),
                        s.jsxs("div", {
                          children: [
                            s.jsx("p", {
                              className: "text-green-800",
                              children: s.jsx("strong", {
                                children: "Thank you for your inquiry!",
                              }),
                            }),
                            s.jsx("p", {
                              className: "text-green-700 text-sm mt-1",
                              children:
                                "We've received your request and will contact you within 1 business day.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  s.jsx(me, {
                    children: s.jsxs("form", {
                      onSubmit: Z,
                      noValidate: !0,
                      children: [
                        s.jsxs("div", {
                          className: "grid md:grid-cols-2 gap-6 mb-6",
                          children: [
                            s.jsxs("div", {
                              children: [
                                s.jsxs("label", {
                                  htmlFor: "companyName",
                                  className: "block text-[#204A3B] mb-2",
                                  children: [
                                    "Company Name",
                                    " ",
                                    s.jsx("span", {
                                      className: "text-red-500",
                                      "aria-label": "required",
                                      children: "*",
                                    }),
                                  ],
                                }),
                                s.jsx("input", {
                                  type: "text",
                                  id: "companyName",
                                  value: g.companyName,
                                  onChange: (B) =>
                                    O("companyName", B.target.value),
                                  className: `w-full px-4 py-3 rounded-lg border ${y.companyName ? "border-red-500" : "border-[#204A3B]/20"} bg-white focus:outline-none focus:ring-2 focus:ring-[#529989] focus:border-transparent`,
                                  "aria-required": "true",
                                  "aria-invalid": !!y.companyName,
                                  "aria-describedby": y.companyName
                                    ? "companyName-error"
                                    : void 0,
                                }),
                                y.companyName &&
                                  s.jsx("p", {
                                    id: "companyName-error",
                                    className: "text-red-500 text-sm mt-1",
                                    children: y.companyName,
                                  }),
                              ],
                            }),
                            s.jsxs("div", {
                              children: [
                                s.jsxs("label", {
                                  htmlFor: "contactName",
                                  className: "block text-[#204A3B] mb-2",
                                  children: [
                                    "Contact Name",
                                    " ",
                                    s.jsx("span", {
                                      className: "text-red-500",
                                      "aria-label": "required",
                                      children: "*",
                                    }),
                                  ],
                                }),
                                s.jsx("input", {
                                  type: "text",
                                  id: "contactName",
                                  value: g.contactName,
                                  onChange: (B) =>
                                    O("contactName", B.target.value),
                                  className: `w-full px-4 py-3 rounded-lg border ${y.contactName ? "border-red-500" : "border-[#204A3B]/20"} bg-white focus:outline-none focus:ring-2 focus:ring-[#529989] focus:border-transparent`,
                                  "aria-required": "true",
                                  "aria-invalid": !!y.contactName,
                                  "aria-describedby": y.contactName
                                    ? "contactName-error"
                                    : void 0,
                                }),
                                y.contactName &&
                                  s.jsx("p", {
                                    id: "contactName-error",
                                    className: "text-red-500 text-sm mt-1",
                                    children: y.contactName,
                                  }),
                              ],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "grid md:grid-cols-2 gap-6 mb-6",
                          children: [
                            s.jsxs("div", {
                              children: [
                                s.jsxs("label", {
                                  htmlFor: "email",
                                  className: "block text-[#204A3B] mb-2",
                                  children: [
                                    "Email Address",
                                    " ",
                                    s.jsx("span", {
                                      className: "text-red-500",
                                      "aria-label": "required",
                                      children: "*",
                                    }),
                                  ],
                                }),
                                s.jsx("input", {
                                  type: "email",
                                  id: "email",
                                  value: g.email,
                                  onChange: (B) => O("email", B.target.value),
                                  className: `w-full px-4 py-3 rounded-lg border ${y.email ? "border-red-500" : "border-[#204A3B]/20"} bg-white focus:outline-none focus:ring-2 focus:ring-[#529989] focus:border-transparent`,
                                  "aria-required": "true",
                                  "aria-invalid": !!y.email,
                                  "aria-describedby": y.email
                                    ? "email-error"
                                    : void 0,
                                }),
                                y.email &&
                                  s.jsx("p", {
                                    id: "email-error",
                                    className: "text-red-500 text-sm mt-1",
                                    children: y.email,
                                  }),
                              ],
                            }),
                            s.jsxs("div", {
                              children: [
                                s.jsxs("label", {
                                  htmlFor: "phone",
                                  className: "block text-[#204A3B] mb-2",
                                  children: [
                                    "Phone Number",
                                    " ",
                                    s.jsx("span", {
                                      className: "text-red-500",
                                      "aria-label": "required",
                                      children: "*",
                                    }),
                                  ],
                                }),
                                s.jsx("input", {
                                  type: "tel",
                                  id: "phone",
                                  value: g.phone,
                                  onChange: (B) => O("phone", B.target.value),
                                  className: `w-full px-4 py-3 rounded-lg border ${y.phone ? "border-red-500" : "border-[#204A3B]/20"} bg-white focus:outline-none focus:ring-2 focus:ring-[#529989] focus:border-transparent`,
                                  "aria-required": "true",
                                  "aria-invalid": !!y.phone,
                                  "aria-describedby": y.phone
                                    ? "phone-error"
                                    : void 0,
                                }),
                                y.phone &&
                                  s.jsx("p", {
                                    id: "phone-error",
                                    className: "text-red-500 text-sm mt-1",
                                    children: y.phone,
                                  }),
                              ],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "grid md:grid-cols-2 gap-6 mb-6",
                          children: [
                            s.jsxs("div", {
                              children: [
                                s.jsxs("label", {
                                  htmlFor: "staffingNeed",
                                  className: "block text-[#204A3B] mb-2",
                                  children: [
                                    "Staffing Need",
                                    " ",
                                    s.jsx("span", {
                                      className: "text-red-500",
                                      "aria-label": "required",
                                      children: "*",
                                    }),
                                  ],
                                }),
                                s.jsxs("select", {
                                  id: "staffingNeed",
                                  value: g.staffingNeed,
                                  onChange: (B) =>
                                    O("staffingNeed", B.target.value),
                                  className: `w-full px-4 py-3 rounded-lg border ${y.staffingNeed ? "border-red-500" : "border-[#204A3B]/20"} bg-white focus:outline-none focus:ring-2 focus:ring-[#529989] focus:border-transparent`,
                                  "aria-required": "true",
                                  "aria-invalid": !!y.staffingNeed,
                                  "aria-describedby": y.staffingNeed
                                    ? "staffingNeed-error"
                                    : void 0,
                                  children: [
                                    s.jsx("option", {
                                      value: "",
                                      children: "Select a category",
                                    }),
                                    s.jsx("option", {
                                      value: "agriculture",
                                      children: "Agriculture",
                                    }),
                                    s.jsx("option", {
                                      value: "processing",
                                      children: "Processing Plant",
                                    }),
                                    s.jsx("option", {
                                      value: "general-labor",
                                      children: "General Labor",
                                    }),
                                    s.jsx("option", {
                                      value: "multiple",
                                      children: "Multiple Categories",
                                    }),
                                  ],
                                }),
                                y.staffingNeed &&
                                  s.jsx("p", {
                                    id: "staffingNeed-error",
                                    className: "text-red-500 text-sm mt-1",
                                    children: y.staffingNeed,
                                  }),
                              ],
                            }),
                            s.jsxs("div", {
                              children: [
                                s.jsxs("label", {
                                  htmlFor: "timeline",
                                  className: "block text-[#204A3B] mb-2",
                                  children: [
                                    "When Do You Need Staff?",
                                    " ",
                                    s.jsx("span", {
                                      className: "text-red-500",
                                      "aria-label": "required",
                                      children: "*",
                                    }),
                                  ],
                                }),
                                s.jsxs("select", {
                                  id: "timeline",
                                  value: g.timeline,
                                  onChange: (B) =>
                                    O("timeline", B.target.value),
                                  className: `w-full px-4 py-3 rounded-lg border ${y.timeline ? "border-red-500" : "border-[#204A3B]/20"} bg-white focus:outline-none focus:ring-2 focus:ring-[#529989] focus:border-transparent`,
                                  "aria-required": "true",
                                  "aria-invalid": !!y.timeline,
                                  "aria-describedby": y.timeline
                                    ? "timeline-error"
                                    : void 0,
                                  children: [
                                    s.jsx("option", {
                                      value: "",
                                      children: "Select timeline",
                                    }),
                                    s.jsx("option", {
                                      value: "immediately",
                                      children: "Immediately",
                                    }),
                                    s.jsx("option", {
                                      value: "1-2-weeks",
                                      children: "1-2 Weeks",
                                    }),
                                    s.jsx("option", {
                                      value: "1-month",
                                      children: "1 Month",
                                    }),
                                    s.jsx("option", {
                                      value: "flexible",
                                      children: "Flexible",
                                    }),
                                  ],
                                }),
                                y.timeline &&
                                  s.jsx("p", {
                                    id: "timeline-error",
                                    className: "text-red-500 text-sm mt-1",
                                    children: y.timeline,
                                  }),
                              ],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "mb-6",
                          children: [
                            s.jsx("label", {
                              htmlFor: "message",
                              className: "block text-[#204A3B] mb-2",
                              children: "Additional Details",
                            }),
                            s.jsx("textarea", {
                              id: "message",
                              value: g.message,
                              onChange: (B) => O("message", B.target.value),
                              rows: 4,
                              className:
                                "w-full px-4 py-3 rounded-lg border border-[#204A3B]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[#529989] focus:border-transparent resize-none",
                              placeholder:
                                "Tell us more about your staffing needs...",
                            }),
                          ],
                        }),
                        s.jsx(In, {
                          type: "submit",
                          fullWidth: !0,
                          children: "Submit Inquiry",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "lg:col-span-1",
                children: [
                  s.jsx("h3", {
                    className: "text-[#204A3B] mb-6",
                    children: "Prefer to Talk?",
                  }),
                  s.jsx(Hu, {}),
                ],
              }),
            ],
          }),
        }),
      }),
    ],
  })
}
const bf = "/assets/founders-DwQ_62-K.jpg"
function Uf() {
  const g = [
    {
      icon: ff,
      title: "Trust & Integrity",
      description:
        "We build lasting relationships based on honesty, transparency, and ethical practices in every placement.",
    },
    {
      icon: Cf,
      title: "Industry Focus",
      description:
        "Our specialized expertise in agriculture and general labor ensures we understand your unique needs.",
    },
    {
      icon: Ml,
      title: "Community First",
      description:
        "We're committed to strengthening local communities by connecting neighbors with opportunities.",
    },
    {
      icon: nf,
      title: "Quality & Reliability",
      description:
        "Every candidate is carefully vetted to ensure they meet our high standards and your expectations.",
    },
  ]
  return s.jsxs("main", {
    children: [
      s.jsx("section", {
        className:
          "pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#529989]/10 to-transparent",
        children: s.jsxs("div", {
          className: "max-w-4xl mx-auto",
          children: [
            s.jsx("h1", {
              className:
                "text-4xl font-bold text-[#204A3B] text-center mb-8 md:text-5xl",
              children: "About Colaborasolutions",
            }),
            s.jsx(me, {
              className: "mb-8",
              children: s.jsxs("blockquote", {
                className: "text-center",
                children: [
                  s.jsx("p", {
                    className: "text-[#204A3B] italic mb-4",
                    children:
                      '"Our mission is to connect reliable local talent with essential industries through simple, modern staffing solutions that benefit both workers and employers. We believe in the power of meaningful work to transform lives and strengthen communities."',
                  }),
                  s.jsx("footer", {
                    className: "text-[#204A3B]/70",
                    children: "— Daniela & Juan, Founders",
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      s.jsx("section", {
        className: "py-16 px-4 sm:px-6 lg:px-8",
        "aria-labelledby": "leadership-heading",
        children: s.jsxs("div", {
          className: "max-w-7xl mx-auto",
          children: [
            s.jsx("h2", {
              id: "leadership-heading",
              className: "text-[#204A3B] text-center mb-12",
              children: "Meet Our Founders",
            }),
            s.jsxs("div", {
              className: "grid md:grid-cols-2 gap-12 items-start",
              children: [
                s.jsx(me, {
                  className: "h-fit",
                  children: s.jsx("div", {
                    className:
                      "relative aspect-[3/4] md:aspect-square lg:aspect-[3/4] rounded-lg overflow-hidden",
                    children: s.jsx("img", {
                      src: bf,
                      alt: "Daniela & Juan, Co-Founders of Colaborasolutions",
                      className: "w-full h-full object-cover",
                    }),
                  }),
                }),
                s.jsxs("div", {
                  children: [
                    s.jsx("h3", {
                      className: "text-[#204A3B] mb-4",
                      children: "Our Story",
                    }),
                    s.jsxs("div", {
                      className: "space-y-4 text-[#204A3B]/80",
                      children: [
                        s.jsx("p", {
                          children:
                            "Colaborasolutions was founded by Daniela and Juan, two professionals with deep roots in workforce management and staffing solutions. With over 15 combined years of experience in the industry, they recognized a critical gap in how agriculture and general labor businesses connect with qualified local talent.",
                        }),
                        s.jsx("p", {
                          children:
                            "Daniela brings extensive experience in human resources and talent acquisition, having worked with both small businesses and larger organizations to build effective teams. Her expertise in understanding employer needs and matching them with the right candidates forms the backbone of our placement process.",
                        }),
                        s.jsx("p", {
                          children:
                            "Juan's background in operations and workforce coordination in agricultural and processing environments gives him unique insight into the daily challenges businesses face. He understands what it takes to build reliable, productive teams in fast-paced, demanding work environments.",
                        }),
                        s.jsx("p", {
                          children:
                            "Together, they've created Colaborasolutions to streamline the staffing process, eliminate unnecessary complexity, and deliver results that benefit everyone involved. Their hands-on approach ensures that every placement is handled with care, attention to detail, and a commitment to long-term success.",
                        }),
                        s.jsx("p", {
                          children:
                            "Based in the local community they serve, Daniela and Juan are personally invested in the success of both the workers they place and the businesses they partner with. This isn't just a business to them—it's about building stronger communities through meaningful employment.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      s.jsx("section", {
        className: "py-16 px-4 sm:px-6 lg:px-8 bg-[#529989]/5",
        "aria-labelledby": "values-heading",
        children: s.jsxs("div", {
          className: "max-w-7xl mx-auto",
          children: [
            s.jsx("h2", {
              id: "values-heading",
              className: "text-[#204A3B] text-center mb-4",
              children: "Our Core Values",
            }),
            s.jsx("p", {
              className:
                "text-[#204A3B]/80 text-center max-w-2xl mx-auto mb-12",
              children:
                "These principles guide every decision we make and every relationship we build",
            }),
            s.jsx("div", {
              className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
              children: g.map((P, h) => {
                const I = P.icon
                return s.jsxs(
                  me,
                  {
                    className: "text-center",
                    children: [
                      s.jsx(I, {
                        className: "text-[#529989] mx-auto mb-4",
                        size: 40,
                        "aria-hidden": "true",
                      }),
                      s.jsx("h3", {
                        className: "text-[#204A3B] mb-3",
                        children: P.title,
                      }),
                      s.jsx("p", {
                        className: "text-[#204A3B]/80 text-sm",
                        children: P.description,
                      }),
                    ],
                  },
                  h,
                )
              }),
            }),
          ],
        }),
      }),
      s.jsx("section", {
        className: "py-16 px-4 sm:px-6 lg:px-8",
        "aria-labelledby": "commitment-heading",
        children: s.jsxs("div", {
          className: "max-w-4xl mx-auto",
          children: [
            s.jsx("h2", {
              id: "commitment-heading",
              className: "text-[#204A3B] text-center mb-8",
              children: "Our Commitment to You",
            }),
            s.jsx(me, {
              children: s.jsxs("div", {
                className: "space-y-6 text-[#204A3B]/80",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsx("h3", {
                        className: "text-[#204A3B] mb-2",
                        children: "For Job Seekers",
                      }),
                      s.jsx("p", {
                        className: "text-sm",
                        children:
                          "We're committed to treating every candidate with respect and dignity. We take the time to understand your skills, goals, and preferences to find positions where you can thrive. Your success is our success, and we're here to support you throughout your employment journey.",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("h3", {
                        className: "text-[#204A3B] mb-2",
                        children: "For Employers",
                      }),
                      s.jsx("p", {
                        className: "text-sm",
                        children:
                          "We understand that your business depends on reliable, skilled workers. That's why we go beyond basic resume screening to ensure every candidate we recommend is truly qualified and ready to contribute. We're not satisfied until you have the team you need to succeed.",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("h3", {
                        className: "text-[#204A3B] mb-2",
                        children: "For Our Community",
                      }),
                      s.jsx("p", {
                        className: "text-sm",
                        children:
                          "We believe that strong communities are built on meaningful employment opportunities. By connecting local workers with local businesses, we're contributing to economic stability and growth right here in our community. We're proud to be part of the solution.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  })
}
function Wf() {
  const [g, P] = De.useState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    }),
    [h, I] = De.useState("idle"),
    [y, F] = De.useState({}),
    b = () => {
      const D = {}
      return (
        g.name.trim() || (D.name = "Name is required"),
        g.email.trim()
          ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g.email) ||
            (D.email = "Please enter a valid email address")
          : (D.email = "Email is required"),
        g.subject.trim() || (D.subject = "Subject is required"),
        g.message.trim() || (D.message = "Message is required"),
        F(D),
        Object.keys(D).length === 0
      )
    },
    Z = async (D) => {
      if ((D.preventDefault(), !!b())) {
        I("submitting")
        try {
          ;(
            await fetch("/api/send-email", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                to: "info@colaborasolution.com",
                replyTo: g.email,
                subject: `New Contact Message: ${g.subject}`,
                html: `
            <h1>New Contact Message</h1>
            <p><strong>Name:</strong> ${g.name}</p>
            <p><strong>Email:</strong> ${g.email}</p>
            <p><strong>Phone:</strong> ${g.phone || "Not provided"}</p>
            <p><strong>Subject:</strong> ${g.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${g.message}</p>
          `,
              }),
            })
          ).ok
            ? (I("success"),
              P({ name: "", email: "", phone: "", subject: "", message: "" }),
              setTimeout(() => {
                I("idle")
              }, 5e3))
            : (console.error("Failed to send email"), I("error"))
        } catch (B) {
          ;(console.error("Error sending email:", B), I("error"))
        }
      }
    },
    O = (D, B) => {
      ;(P((V) => ({ ...V, [D]: B })), y[D] && F((V) => ({ ...V, [D]: "" })))
    }
  return s.jsxs("main", {
    children: [
      s.jsx("section", {
        className:
          "pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#529989]/10 to-transparent",
        children: s.jsxs("div", {
          className: "max-w-4xl mx-auto text-center",
          children: [
            s.jsx("h1", {
              className: "text-4xl font-bold text-[#204A3B] mb-6 md:text-5xl",
              children: "Contact Us",
            }),
            s.jsx("p", {
              className: "text-[#204A3B]/80 max-w-2xl mx-auto",
              children:
                "Have questions or need assistance? We're here to help. Reach out to us using the form below or contact us directly using the information provided.",
            }),
          ],
        }),
      }),
      s.jsx("section", {
        className: "py-12 px-4 sm:px-6 lg:px-8",
        "aria-labelledby": "contact-form-heading",
        children: s.jsx("div", {
          className: "max-w-7xl mx-auto",
          children: s.jsxs("div", {
            className: "grid lg:grid-cols-3 gap-8",
            children: [
              s.jsx("div", {
                className: "lg:col-span-1 order-2 lg:order-1",
                children: s.jsx(Hu, {}),
              }),
              s.jsxs("div", {
                className: "lg:col-span-2 order-1 lg:order-2",
                children: [
                  s.jsx("h2", {
                    id: "contact-form-heading",
                    className: "text-[#204A3B] mb-6",
                    children: "Send Us a Message",
                  }),
                  h === "success" &&
                    s.jsxs("div", {
                      className:
                        "mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3",
                      children: [
                        s.jsx(Tl, {
                          className: "text-green-600 flex-shrink-0 mt-0.5",
                          size: 20,
                        }),
                        s.jsxs("div", {
                          children: [
                            s.jsx("p", {
                              className: "text-green-800",
                              children: s.jsx("strong", {
                                children: "Message sent successfully!",
                              }),
                            }),
                            s.jsx("p", {
                              className: "text-green-700 text-sm mt-1",
                              children:
                                "We'll get back to you as soon as possible.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  s.jsx(me, {
                    children: s.jsxs("form", {
                      onSubmit: Z,
                      noValidate: !0,
                      children: [
                        s.jsxs("div", {
                          className: "mb-6",
                          children: [
                            s.jsxs("label", {
                              htmlFor: "name",
                              className: "block text-[#204A3B] mb-2",
                              children: [
                                "Your Name",
                                " ",
                                s.jsx("span", {
                                  className: "text-red-500",
                                  "aria-label": "required",
                                  children: "*",
                                }),
                              ],
                            }),
                            s.jsx("input", {
                              type: "text",
                              id: "name",
                              value: g.name,
                              onChange: (D) => O("name", D.target.value),
                              className: `w-full px-4 py-3 rounded-lg border ${y.name ? "border-red-500" : "border-[#204A3B]/20"} bg-white focus:outline-none focus:ring-2 focus:ring-[#529989] focus:border-transparent`,
                              "aria-required": "true",
                              "aria-invalid": !!y.name,
                              "aria-describedby": y.name
                                ? "name-error"
                                : void 0,
                            }),
                            y.name &&
                              s.jsx("p", {
                                id: "name-error",
                                className: "text-red-500 text-sm mt-1",
                                children: y.name,
                              }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "grid md:grid-cols-2 gap-6 mb-6",
                          children: [
                            s.jsxs("div", {
                              children: [
                                s.jsxs("label", {
                                  htmlFor: "email",
                                  className: "block text-[#204A3B] mb-2",
                                  children: [
                                    "Email Address",
                                    " ",
                                    s.jsx("span", {
                                      className: "text-red-500",
                                      "aria-label": "required",
                                      children: "*",
                                    }),
                                  ],
                                }),
                                s.jsx("input", {
                                  type: "email",
                                  id: "email",
                                  value: g.email,
                                  onChange: (D) => O("email", D.target.value),
                                  className: `w-full px-4 py-3 rounded-lg border ${y.email ? "border-red-500" : "border-[#204A3B]/20"} bg-white focus:outline-none focus:ring-2 focus:ring-[#529989] focus:border-transparent`,
                                  "aria-required": "true",
                                  "aria-invalid": !!y.email,
                                  "aria-describedby": y.email
                                    ? "email-error"
                                    : void 0,
                                }),
                                y.email &&
                                  s.jsx("p", {
                                    id: "email-error",
                                    className: "text-red-500 text-sm mt-1",
                                    children: y.email,
                                  }),
                              ],
                            }),
                            s.jsxs("div", {
                              children: [
                                s.jsx("label", {
                                  htmlFor: "phone",
                                  className: "block text-[#204A3B] mb-2",
                                  children: "Phone Number",
                                }),
                                s.jsx("input", {
                                  type: "tel",
                                  id: "phone",
                                  value: g.phone,
                                  onChange: (D) => O("phone", D.target.value),
                                  className:
                                    "w-full px-4 py-3 rounded-lg border border-[#204A3B]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[#529989] focus:border-transparent",
                                }),
                              ],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "mb-6",
                          children: [
                            s.jsxs("label", {
                              htmlFor: "subject",
                              className: "block text-[#204A3B] mb-2",
                              children: [
                                "Subject",
                                " ",
                                s.jsx("span", {
                                  className: "text-red-500",
                                  "aria-label": "required",
                                  children: "*",
                                }),
                              ],
                            }),
                            s.jsx("input", {
                              type: "text",
                              id: "subject",
                              value: g.subject,
                              onChange: (D) => O("subject", D.target.value),
                              className: `w-full px-4 py-3 rounded-lg border ${y.subject ? "border-red-500" : "border-[#204A3B]/20"} bg-white focus:outline-none focus:ring-2 focus:ring-[#529989] focus:border-transparent`,
                              "aria-required": "true",
                              "aria-invalid": !!y.subject,
                              "aria-describedby": y.subject
                                ? "subject-error"
                                : void 0,
                            }),
                            y.subject &&
                              s.jsx("p", {
                                id: "subject-error",
                                className: "text-red-500 text-sm mt-1",
                                children: y.subject,
                              }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "mb-6",
                          children: [
                            s.jsxs("label", {
                              htmlFor: "message",
                              className: "block text-[#204A3B] mb-2",
                              children: [
                                "Message",
                                " ",
                                s.jsx("span", {
                                  className: "text-red-500",
                                  "aria-label": "required",
                                  children: "*",
                                }),
                              ],
                            }),
                            s.jsx("textarea", {
                              id: "message",
                              value: g.message,
                              onChange: (D) => O("message", D.target.value),
                              rows: 6,
                              className: `w-full px-4 py-3 rounded-lg border ${y.message ? "border-red-500" : "border-[#204A3B]/20"} bg-white focus:outline-none focus:ring-2 focus:ring-[#529989] focus:border-transparent resize-none`,
                              "aria-required": "true",
                              "aria-invalid": !!y.message,
                              "aria-describedby": y.message
                                ? "message-error"
                                : void 0,
                            }),
                            y.message &&
                              s.jsx("p", {
                                id: "message-error",
                                className: "text-red-500 text-sm mt-1",
                                children: y.message,
                              }),
                          ],
                        }),
                        s.jsx(In, {
                          type: "submit",
                          fullWidth: !0,
                          children: "Send Message",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      s.jsx("section", {
        className: "py-12 px-4 sm:px-6 lg:px-8 bg-[#529989]/5",
        "aria-labelledby": "map-heading",
        children: s.jsxs("div", {
          className: "max-w-7xl mx-auto",
          children: [
            s.jsx("h2", {
              id: "map-heading",
              className: "text-[#204A3B] text-center mb-8",
              children: "Visit Our Office",
            }),
            s.jsx(me, {
              children: s.jsx("div", {
                className: "aspect-video rounded-lg overflow-hidden",
                children: s.jsx("iframe", {
                  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.2356494235314!2d-121.87501012333571!3d39.77211017155045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8082d8eedb03839b%3A0xfdec6d7e26f115ab!2s75%20Declaration%20Dr%20%2314%2C%20Chico%2C%20CA%2095973!5e1!3m2!1sen!2sus!4v1762380215323!5m2!1sen!2sus",
                  width: "100%",
                  height: "100%",
                  style: { border: 0 },
                  allowFullScreen: !0,
                  loading: "lazy",
                  referrerPolicy: "no-referrer-when-downgrade",
                  className: "w-full h-full",
                }),
              }),
            }),
          ],
        }),
      }),
    ],
  })
}
function Hf() {
  return s.jsxs("main", {
    children: [
      s.jsx("section", {
        className:
          "pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#529989]/10 to-transparent",
        children: s.jsxs("div", {
          className: "max-w-4xl mx-auto",
          children: [
            s.jsx("h1", {
              className: "text-4xl font-bold text-[#204A3B] mb-4 md:text-5xl",
              children: "Privacy Policy",
            }),
            s.jsxs("p", {
              className: "text-[#204A3B]/80",
              children: [
                "Last Updated:",
                " ",
                new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }),
              ],
            }),
          ],
        }),
      }),
      s.jsx("section", {
        className: "py-12 px-4 sm:px-6 lg:px-8",
        children: s.jsx("div", {
          className: "max-w-4xl mx-auto",
          children: s.jsx(me, {
            children: s.jsxs("div", {
              className: "prose prose-sm max-w-none",
              children: [
                s.jsx("div", {
                  className:
                    "bg-[#529989]/10 border border-[#529989]/20 rounded-lg p-6 mb-8",
                  children: s.jsxs("p", {
                    className: "text-[#204A3B] m-0",
                    children: [
                      s.jsx("strong", { children: "Important Notice:" }),
                      " This is a placeholder for the official Privacy Policy document. The actual Privacy Policy should be drafted by legal counsel and will be provided soon.",
                    ],
                  }),
                }),
                s.jsxs("article", {
                  children: [
                    s.jsxs("section", {
                      className: "mb-8",
                      children: [
                        s.jsx("h2", {
                          className: "text-[#204A3B] mb-4",
                          children: "Introduction",
                        }),
                        s.jsx("p", {
                          className: "text-[#204A3B]/80 mb-4",
                          children:
                            'Colaborasolutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.',
                        }),
                      ],
                    }),
                    s.jsxs("section", {
                      className: "mb-8",
                      children: [
                        s.jsx("h2", {
                          className: "text-[#204A3B] mb-4",
                          children: "Information We Collect",
                        }),
                        s.jsx("p", {
                          className: "text-[#204A3B]/80 mb-4",
                          children:
                            "We may collect information about you in a variety of ways. The information we may collect includes:",
                        }),
                        s.jsx("h3", {
                          className: "text-[#204A3B] mb-3 mt-6",
                          children: "Personal Data",
                        }),
                        s.jsx("p", {
                          className: "text-[#204A3B]/80 mb-4",
                          children:
                            "Information such as your name, email address, phone number, and other contact details that you voluntarily provide when filling out forms on our website.",
                        }),
                        s.jsx("h3", {
                          className: "text-[#204A3B] mb-3 mt-6",
                          children: "Employment Information",
                        }),
                        s.jsx("p", {
                          className: "text-[#204A3B]/80 mb-4",
                          children:
                            "For job seekers, we collect information relevant to employment placement, including work history, skills, qualifications, and references.",
                        }),
                      ],
                    }),
                    s.jsxs("section", {
                      className: "mb-8",
                      children: [
                        s.jsx("h2", {
                          className: "text-[#204A3B] mb-4",
                          children: "Use of Your Information",
                        }),
                        s.jsx("p", {
                          className: "text-[#204A3B]/80 mb-4",
                          children: "We use the information we collect to:",
                        }),
                        s.jsxs("ul", {
                          className:
                            "list-disc pl-6 space-y-2 text-[#204A3B]/80",
                          children: [
                            s.jsx("li", {
                              children:
                                "Process employment applications and facilitate job placements",
                            }),
                            s.jsx("li", {
                              children:
                                "Respond to inquiries and provide customer service",
                            }),
                            s.jsx("li", {
                              children:
                                "Send administrative information and updates about our services",
                            }),
                            s.jsx("li", {
                              children:
                                "Match job seekers with appropriate employment opportunities",
                            }),
                            s.jsx("li", {
                              children:
                                "Connect employers with qualified candidates",
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("section", {
                      className: "mb-8",
                      children: [
                        s.jsx("h2", {
                          className: "text-[#204A3B] mb-4",
                          children: "Disclosure of Your Information",
                        }),
                        s.jsx("p", {
                          className: "text-[#204A3B]/80 mb-4",
                          children:
                            "We may share your information in the following circumstances:",
                        }),
                        s.jsxs("ul", {
                          className:
                            "list-disc pl-6 space-y-2 text-[#204A3B]/80",
                          children: [
                            s.jsx("li", {
                              children:
                                "With potential employers when you apply for positions through our service",
                            }),
                            s.jsx("li", {
                              children:
                                "With service providers who assist in our business operations",
                            }),
                            s.jsx("li", {
                              children:
                                "When required by law or to protect our legal rights",
                            }),
                            s.jsx("li", {
                              children: "With your explicit consent",
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("section", {
                      className: "mb-8",
                      children: [
                        s.jsx("h2", {
                          className: "text-[#204A3B] mb-4",
                          children: "Data Security",
                        }),
                        s.jsx("p", {
                          className: "text-[#204A3B]/80 mb-4",
                          children:
                            "We implement appropriate technical and organizational security measures to protect your personal information. However, no electronic transmission or storage method is 100% secure, and we cannot guarantee absolute security.",
                        }),
                      ],
                    }),
                    s.jsxs("section", {
                      className: "mb-8",
                      children: [
                        s.jsx("h2", {
                          className: "text-[#204A3B] mb-4",
                          children: "Your Rights",
                        }),
                        s.jsx("p", {
                          className: "text-[#204A3B]/80 mb-4",
                          children: "You have the right to:",
                        }),
                        s.jsxs("ul", {
                          className:
                            "list-disc pl-6 space-y-2 text-[#204A3B]/80",
                          children: [
                            s.jsx("li", {
                              children:
                                "Access the personal information we hold about you",
                            }),
                            s.jsx("li", {
                              children:
                                "Request correction of inaccurate information",
                            }),
                            s.jsx("li", {
                              children:
                                "Request deletion of your information in certain circumstances",
                            }),
                            s.jsx("li", {
                              children: "Opt-out of marketing communications",
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("section", {
                      className: "mb-8",
                      children: [
                        s.jsx("h2", {
                          className: "text-[#204A3B] mb-4",
                          children: "Contact Us",
                        }),
                        s.jsx("p", {
                          className: "text-[#204A3B]/80 mb-2",
                          children:
                            "If you have questions about this Privacy Policy, please contact us:",
                        }),
                        s.jsxs("p", {
                          className: "text-[#204A3B]/80",
                          children: [
                            "Email:",
                            " ",
                            s.jsx("a", {
                              href: "mailto:privacy@colaborasolutions.com",
                              className: "text-[#529989] hover:underline",
                              children: "privacy@colaborasolutions.com",
                            }),
                            s.jsx("br", {}),
                            "Phone:",
                            " ",
                            s.jsx("a", {
                              href: "tel:+15307126359",
                              className: "text-[#529989] hover:underline",
                              children: "1(530)712-6359",
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("section", {
                      className: "mb-8",
                      children: [
                        s.jsx("h2", {
                          className: "text-[#204A3B] mb-4",
                          children: "Changes to This Policy",
                        }),
                        s.jsx("p", {
                          className: "text-[#204A3B]/80",
                          children:
                            'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
    ],
  })
}
function Vf() {
  return s.jsxs("main", {
    children: [
      s.jsx("section", {
        className:
          "pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#529989]/10 to-transparent",
        children: s.jsxs("div", {
          className: "max-w-4xl mx-auto",
          children: [
            s.jsx("h1", {
              className: "text-4xl font-bold text-[#204A3B] mb-4 md:text-5xl",
              children: "Terms of Service",
            }),
            s.jsxs("p", {
              className: "text-[#204A3B]/80",
              children: [
                "Last Updated:",
                " ",
                new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }),
              ],
            }),
          ],
        }),
      }),
      s.jsx("section", {
        className: "py-12 px-4 sm:px-6 lg:px-8",
        children: s.jsx("div", {
          className: "max-w-4xl mx-auto",
          children: s.jsx(me, {
            children: s.jsxs("div", {
              className: "prose prose-sm max-w-none",
              children: [
                s.jsx("div", {
                  className:
                    "bg-[#879153]/10 border border-[#879153]/20 rounded-lg p-6 mb-8",
                  children: s.jsxs("p", {
                    className: "text-[#204A3B] m-0",
                    children: [
                      s.jsx("strong", { children: "Important Notice:" }),
                      " This is a placeholder for the official Terms of Service document. The actual Terms of Service should be drafted by legal counsel and will be provided soon.",
                    ],
                  }),
                }),
                s.jsxs("article", {
                  children: [
                    s.jsxs("section", {
                      className: "mb-8",
                      children: [
                        s.jsx("h2", {
                          className: "text-[#204A3B] mb-4",
                          children: "Agreement to Terms",
                        }),
                        s.jsx("p", {
                          className: "text-[#204A3B]/80 mb-4",
                          children:
                            "By accessing and using the Colaborasolutions website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site.",
                        }),
                      ],
                    }),
                    s.jsxs("section", {
                      className: "mb-8",
                      children: [
                        s.jsx("h2", {
                          className: "text-[#204A3B] mb-4",
                          children: "Use of Services",
                        }),
                        s.jsx("h3", {
                          className: "text-[#204A3B] mb-3 mt-6",
                          children: "For Job Seekers",
                        }),
                        s.jsx("p", {
                          className: "text-[#204A3B]/80 mb-4",
                          children:
                            "When applying for positions through our platform, you agree to:",
                        }),
                        s.jsxs("ul", {
                          className:
                            "list-disc pl-6 space-y-2 text-[#204A3B]/80 mb-4",
                          children: [
                            s.jsx("li", {
                              children:
                                "Provide accurate and truthful information in all applications",
                            }),
                            s.jsx("li", {
                              children:
                                "Update your information promptly if it changes",
                            }),
                            s.jsx("li", {
                              children:
                                "Maintain professional conduct throughout the placement process",
                            }),
                            s.jsx("li", {
                              children:
                                "Comply with all requirements of employers we connect you with",
                            }),
                          ],
                        }),
                        s.jsx("h3", {
                          className: "text-[#204A3B] mb-3 mt-6",
                          children: "For Employers",
                        }),
                        s.jsx("p", {
                          className: "text-[#204A3B]/80 mb-4",
                          children:
                            "When using our staffing services, you agree to:",
                        }),
                        s.jsxs("ul", {
                          className:
                            "list-disc pl-6 space-y-2 text-[#204A3B]/80",
                          children: [
                            s.jsx("li", {
                              children:
                                "Provide accurate job descriptions and requirements",
                            }),
                            s.jsx("li", {
                              children:
                                "Comply with all applicable employment laws and regulations",
                            }),
                            s.jsx("li", {
                              children:
                                "Treat all candidates fairly and without discrimination",
                            }),
                            s.jsx("li", {
                              children:
                                "Communicate placement decisions and feedback in a timely manner",
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("section", {
                      className: "mb-8",
                      children: [
                        s.jsx("h2", {
                          className: "text-[#204A3B] mb-4",
                          children: "Service Scope",
                        }),
                        s.jsx("p", {
                          className: "text-[#204A3B]/80 mb-4",
                          children:
                            "Colaborasolutions specializes in staffing for Agriculture and General Labor industries. We do not provide staffing services for Construction or similar heavy industrial sectors at this time.",
                        }),
                      ],
                    }),
                    s.jsxs("section", {
                      className: "mb-8",
                      children: [
                        s.jsx("h2", {
                          className: "text-[#204A3B] mb-4",
                          children: "Intellectual Property",
                        }),
                        s.jsx("p", {
                          className: "text-[#204A3B]/80 mb-4",
                          children:
                            "The content, features, and functionality of our website are owned by Colaborasolutions and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.",
                        }),
                      ],
                    }),
                    s.jsxs("section", {
                      className: "mb-8",
                      children: [
                        s.jsx("h2", {
                          className: "text-[#204A3B] mb-4",
                          children: "Privacy and Data Protection",
                        }),
                        s.jsx("p", {
                          className: "text-[#204A3B]/80 mb-4",
                          children:
                            "Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your information.",
                        }),
                      ],
                    }),
                    s.jsxs("section", {
                      className: "mb-8",
                      children: [
                        s.jsx("h2", {
                          className: "text-[#204A3B] mb-4",
                          children: "Limitation of Liability",
                        }),
                        s.jsx("p", {
                          className: "text-[#204A3B]/80 mb-4",
                          children:
                            "While we strive to provide quality staffing services, Colaborasolutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.",
                        }),
                      ],
                    }),
                    s.jsxs("section", {
                      className: "mb-8",
                      children: [
                        s.jsx("h2", {
                          className: "text-[#204A3B] mb-4",
                          children: "Employment Relationship",
                        }),
                        s.jsx("p", {
                          className: "text-[#204A3B]/80 mb-4",
                          children:
                            "Colaborasolutions acts as an intermediary connecting job seekers with employers. The employment relationship exists between the worker and the employer. We are not responsible for the actions, decisions, or conduct of either party after placement.",
                        }),
                      ],
                    }),
                    s.jsxs("section", {
                      className: "mb-8",
                      children: [
                        s.jsx("h2", {
                          className: "text-[#204A3B] mb-4",
                          children: "Termination",
                        }),
                        s.jsx("p", {
                          className: "text-[#204A3B]/80 mb-4",
                          children:
                            "We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any violation of these Terms of Service or for any other reason we deem appropriate.",
                        }),
                      ],
                    }),
                    s.jsxs("section", {
                      className: "mb-8",
                      children: [
                        s.jsx("h2", {
                          className: "text-[#204A3B] mb-4",
                          children: "Changes to Terms",
                        }),
                        s.jsx("p", {
                          className: "text-[#204A3B]/80 mb-4",
                          children:
                            "We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.",
                        }),
                      ],
                    }),
                    s.jsxs("section", {
                      className: "mb-8",
                      children: [
                        s.jsx("h2", {
                          className: "text-[#204A3B] mb-4",
                          children: "Governing Law",
                        }),
                        s.jsx("p", {
                          className: "text-[#204A3B]/80 mb-4",
                          children:
                            "These Terms shall be governed by and construed in accordance with the laws of [Your State/Jurisdiction], without regard to its conflict of law provisions.",
                        }),
                      ],
                    }),
                    s.jsxs("section", {
                      className: "mb-8",
                      children: [
                        s.jsx("h2", {
                          className: "text-[#204A3B] mb-4",
                          children: "Contact Information",
                        }),
                        s.jsx("p", {
                          className: "text-[#204A3B]/80 mb-2",
                          children:
                            "If you have any questions about these Terms of Service, please contact us:",
                        }),
                        s.jsxs("p", {
                          className: "text-[#204A3B]/80",
                          children: [
                            "Email:",
                            " ",
                            s.jsx("a", {
                              href: "mailto:legal@colaborasolutions.com",
                              className: "text-[#529989] hover:underline",
                              children: "legal@colaborasolutions.com",
                            }),
                            s.jsx("br", {}),
                            "Phone:",
                            " ",
                            s.jsx("a", {
                              href: "tel:+15307126359",
                              className: "text-[#529989] hover:underline",
                              children: "(530)712-6359",
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("section", {
                      children: [
                        s.jsx("h2", {
                          className: "text-[#204A3B] mb-4",
                          children: "Acknowledgment",
                        }),
                        s.jsx("p", {
                          className: "text-[#204A3B]/80",
                          children:
                            "By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
    ],
  })
}
function Qf() {
  const [g, P] = De.useState("home")
  De.useEffect(() => {
    const y = () => {
      const F = window.location.hash.slice(1) || "home"
      P(F)
    }
    return (
      window.addEventListener("hashchange", y),
      y(),
      () => {
        window.removeEventListener("hashchange", y)
      }
    )
  }, [])
  const h = (y) => {
      ;(P(y),
        (window.location.hash = y),
        window.scrollTo({ top: 0, behavior: "smooth" }))
    },
    I = () => {
      switch (g) {
        case "jobs":
          return s.jsx(Of, {})
        case "hire-talent":
          return s.jsx(Df, {})
        case "about":
          return s.jsx(Uf, {})
        case "contact":
          return s.jsx(Wf, {})
        case "privacy":
          return s.jsx(Hf, {})
        case "terms":
          return s.jsx(Vf, {})
        default:
          return s.jsx(Rf, { onNavigate: h })
      }
    }
  return s.jsxs("div", {
    className: "min-h-screen flex flex-col",
    children: [
      s.jsx(Tf, { currentPage: g, onNavigate: h }),
      s.jsx("div", { className: "flex-grow", children: I() }),
      s.jsx(Mf, { onNavigate: h }),
    ],
  })
}
$d.createRoot(document.getElementById("root")).render(s.jsx(Qf, {}))
