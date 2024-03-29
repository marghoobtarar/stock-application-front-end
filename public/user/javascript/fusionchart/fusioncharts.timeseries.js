!(function(t) {
  "object" == typeof module && "undefined" != typeof module.exports
    ? (module.exports = t)
    : t();
})(function() {
  (window.webpackJsonpFusionCharts =
    window.webpackJsonpFusionCharts || []).push([
    [3],
    {
      610: function(t, e, n) {
        "use strict";
        (e.__esModule = !0), (e.TimeSeries = undefined);
        var i = c(n(611)),
          o = c(n(123)),
          r = c(n(272)),
          a = n(320),
          l = n(349),
          s = n(350);
        function c(t) {
          return t && t.__esModule ? t : { default: t };
        }
        (o["default"].DataStore = r["default"]),
          (o["default"].DataStore.Operators = {
            between: a.between,
            equals: a.equals,
            less: a.less,
            lessEquals: a.lessEquals,
            greater: a.greater,
            greaterEquals: a.greaterEquals,
            filter: a.filter,
            select: a.select,
            groupBy: a.groupBy,
            pipe: a.pipe,
            sort: a.sort,
            pivot: a.pivot
          }),
          (o["default"].Utils = {
            duration: s.duration,
            before: s.before,
            after: s.after,
            parseDate: s.parseDate,
            formatDate: s.formatDate,
            DatetimeUnits: s.DatetimeUnits,
            Weekdays: s.Weekdays
          }),
          (o["default"].DataStore.Aggregators = {
            aggregatorStore: l.aggregatorStore
          }),
          (e.TimeSeries = i["default"]),
          (e["default"] = {
            name: "timeseries",
            type: "package",
            requiresFusionCharts: !0,
            extension: function(t) {
              return t.addDep(i["default"]);
            }
          });
      },
      611: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(612);
        e["default"] = i.TimeSeries;
      },
      612: function(t, e, n) {
        "use strict";
        (e.__esModule = !0), (e.TimeSeries = undefined);
        var i,
          o = n(613),
          r = (i = o) && i.__esModule ? i : { default: i };
        e.TimeSeries = r["default"];
      },
      613: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                },
          o = H(n(614)),
          r = H(n(640)),
          a = H(n(642)),
          l = H(n(643)),
          s = H(n(647)),
          c = H(n(654)),
          u = H(n(362)),
          f = n(125),
          d = H(n(372)),
          h = H(n(660)),
          p = H(n(679)),
          g = H(n(725)),
          m = H(n(727)),
          y = H(n(730)),
          v = H(n(731)),
          b = H(n(748)),
          x = H(n(749)),
          k = H(n(751)),
          _ = H(n(761)),
          w = H(n(763)),
          S = H(n(764)),
          C = H(n(765)),
          E = H(n(770)),
          D = H(n(771)),
          M = H(n(668)),
          T = H(n(666)),
          O = H(n(777)),
          F = H(n(811)),
          L = H(n(831)),
          I = n(321),
          P = n(341),
          j = H(n(670)),
          A = n(328),
          B = H(n(833)),
          N = H(n(669));
        function H(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function R(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        O["default"].setup((0, F["default"])()),
          O["default"]
            .createStyleSheet({
              "@font-face": {
                "font-family": "Source Sans Pro",
                "font-style": "normal",
                "font-weight": "400",
                src:
                  "local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7j.woff) format('woff');",
                "unicode-range":
                  " U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;"
              }
            })
            .attach();
        var G = f.regex.dropHash,
          Y = function(t, e) {
            return t
              .getSchema()
              .filter(e)
              .map(function(t) {
                return t.name;
              });
          },
          z = function(t) {
            return t.charAt(0).toUpperCase() + t.slice(1);
          },
          V = function(t) {
            return t.map(function(t) {
              return {
                x: t.x,
                y: t.y,
                plots: (0, a["default"])(
                  t.x.map(function(t) {
                    return t.index;
                  }),
                  t.y.map(function(t) {
                    return t.index;
                  })
                ).map(function(t) {
                  return { x: t[0], y: t[1] };
                })
              };
            });
          },
          X = function(t) {
            return +t.split("_").pop();
          },
          U = function(t) {
            return "date" === t.type || "interval" === t.type;
          },
          W = function(t) {
            return "number" === t.type;
          },
          q = function(t) {
            return "string" === t.type;
          },
          Z = (0, r["default"])(o["default"]),
          Q = function(t, e) {
            return Z(function(t, n) {
              return e.map(function(t, e, i) {
                return {
                  x: [{ index: n, visible: e === i.length - 1 }],
                  y: [{ index: e, align: "left" }]
                };
              });
            }, t);
          },
          K = function(t, e) {
            return Z(function(t, n) {
              return {
                x: [{ index: n, visible: !0 }],
                y: e.map(function(t, e) {
                  return { index: e, align: e % 2 == 0 ? "left" : "right" };
                })
              };
            }, t);
          },
          J = function(t, e) {
            "object" === (void 0 === t ? "undefined" : i(t)) &&
              (t["line-height"] ||
                (t["line-height"] =
                  1.2 * (parseFloat(t["font-size"]) || e || 10)));
          },
          $ = function(t, e) {
            for (var n in t)
              (t[n]._fc_info.table = t[n]._fc_info.filter
                ? e.table.query([t[n]._fc_info.filterInfo.query])
                : e.table),
                (t[n]._fc_info.filterInfo.table = t[n]._fc_info.table),
                rt(t[n]);
          },
          tt = function(t, e) {
            for (var n in t)
              (t[n]._fc_info.table = e.table),
                (t[n]._fc_info.group = n),
                rt(t[n]);
          },
          et = function(t, e) {
            for (var n in t)
              (t[n]._fc_info.table = e.table),
                (t[n]._fc_info.groupItems = e.groupItems),
                (t[n]._fc_info.group = e.group),
                rt(t[n]);
          },
          nt = function(t) {
            var e = t.op,
              n = t.operands,
              i = [];
            if (t.filter) {
              for (var o in n) {
                var r;
                if (n.hasOwnProperty(o))
                  (r = i).push.apply(r, Object.keys(n[o]));
              }
              i = (0, s["default"])(i);
            } else i = Object.keys(n);
            return i.map(function(t) {
              return { column: t, operation: e };
            });
          },
          it = function(t) {
            var e =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : [],
              n = arguments[2],
              i = arguments[3],
              r = function(r) {
                if ("plottype" !== r) {
                  var a = function(t) {
                    return t.column === r && t.operation === i;
                  };
                  (e.length > 0
                    ? (0, o["default"])(function(t) {
                        return n.filter(a).map(function(e) {
                          return [t, e.column, e.operation];
                        });
                      }, e).map(function(t) {
                        return t.join(" - ");
                      })
                    : n.filter(a).map(function(t) {
                        return [t.column, t.operation].join(" - ");
                      })
                  ).forEach(function(e) {
                    return t[r].push(e);
                  });
                }
              };
            for (var a in t) r(a);
          },
          ot = function(t, e) {
            var n = function(n) {
              var i = t[n]._fc_info.binDecider,
                r = t[n]._fc_info.chart,
                a = i.getRangeThreshold(),
                l = [
                  {
                    column: t[n]._fc_info.bin,
                    timeUnit: P.DatetimeUnits[z(a[0].name())],
                    binSize: a[1],
                    startValue: t[n]._fc_info.totalStart
                  }
                ],
                s = e.group,
                c = e.groupItems,
                u = e.pivot,
                f = e.table,
                d = function(t) {
                  return (0, I.filter)(function(e, n) {
                    return e[n[s]] === t;
                  });
                };
              for (var h in t[n])
                "aggregate" === h &&
                  (function() {
                    var e,
                      p = t[n][h]._fc_info,
                      g = [],
                      m = void 0,
                      y = [],
                      v = [],
                      b = [];
                    for (var x in p)
                      g.push({ op: x, operands: p[x], filter: s });
                    if (((e = (0, o["default"])(nt, g)), s)) {
                      var k = c.map(d).map(function(t) {
                        return f.query([t]);
                      });
                      u
                        ? ((m = (0, I.pivot)(l, u, e)),
                          k.forEach(function(t) {
                            y.push(t.query([m])), v.push(t.unique(u));
                          }))
                        : ((m = (0, I.groupBy)(l, e)),
                          (y = k.map(function(t) {
                            return t.query([m]);
                          })));
                    } else
                      u
                        ? ((m = (0, I.pivot)(l, u, e)), (b = f.unique(u)))
                        : (m = (0, I.groupBy)(l, e)),
                        (y = [f.query([m])]);
                    r.addEventListener("focusLimitChanged", function() {
                      (a = i.getRangeThreshold()),
                        (l = [
                          {
                            column: t[n]._fc_info.bin,
                            timeUnit: P.DatetimeUnits[z(a[0].name())],
                            binSize: a[1],
                            startValue: t[n]._fc_info.totalStart
                          }
                        ]),
                        u ? m._updateArgs(l, u, e) : m._updateArgs(l, e);
                    }),
                      g.forEach(function(i) {
                        var o = i.operands;
                        s
                          ? c.forEach(function(r, a) {
                              var l = o[r];
                              (l.table = y[a]),
                                (l.position = t[n]._fc_info.bin),
                                (l.filterItem = r),
                                it(l, v[a], e, i.op);
                            })
                          : ((o.table = y[0]),
                            (o.position = t[n]._fc_info.bin),
                            it(o, b, e, i.op));
                      });
                  })();
            };
            for (var i in t) n(i);
          },
          rt = function(t) {
            for (var e in t) {
              var n = t[e];
              "filter" === e
                ? $(n, t._fc_info)
                : "group" === e
                ? tt(n, t._fc_info)
                : "pivot" === e
                ? et(n, t._fc_info)
                : "bin" === e && ot(n, t._fc_info);
            }
          },
          at = function(t, e) {
            var n = void 0,
              i = void 0,
              o = void 0,
              r = void 0,
              a = void 0,
              l = void 0,
              s = void 0;
            e
              ? ((n = t.config.contextPanels),
                (i = t.config.contextAxesX),
                (o = t.config.contextAxesY),
                (r = t.getFromEnv("contextBins")),
                (a = t.getFromEnv("contextScalesX")),
                (l = t.getFromEnv("contextScalesY")),
                (s = t.config.contextTableMap))
              : ((n = t.config.focusPanels),
                (i = t.config.focusAxesX),
                (o = t.config.focusAxesY),
                (r = t.getFromEnv("focusBins")),
                (a = t.getFromEnv("focusScalesX")),
                (l = t.getFromEnv("focusScalesY")),
                (s = t.config.focusTableMap));
            for (var c = 0, u = n.length; c < u; c++)
              for (
                var d = n[c].plots,
                  h = function(e, n) {
                    var c = d[e],
                      u = i[c.x],
                      h = o[c.y],
                      p = r[c.x],
                      g = p.getRangeThreshold(),
                      m = p.getBinDomain().map(Number),
                      y = a[c.x],
                      v = l[c.y],
                      b = s;
                    c.plots || (c.plots = []),
                      (u.binDecider = p),
                      (u.scale = y),
                      (h.scale = v),
                      u.filter &&
                        (b.filter || (b.filter = {}),
                        (b = b.filter),
                        (u.filterInfo.query = (0, I.between)(
                          u.filter[0],
                          m[0] - 2 * g[2],
                          m[1] + 2 * g[2]
                        )),
                        b["x__FC_OP_SEP__" + c.x] ||
                          (b["x__FC_OP_SEP__" + c.x] = {
                            _fc_info: {
                              filter: u.filter[0],
                              filterInfo: u.filterInfo,
                              start: m[0],
                              end: m[1]
                            }
                          }),
                        (b = b["x__FC_OP_SEP__" + c.x])),
                      h.filter &&
                        (b || (b.filter = {}),
                        (b = b.filter)["y__FC_OP_SEP__" + c.y] ||
                          (b["y__FC_OP_SEP__" + c.y] = {
                            _fc_info: { filter: h.filter[0] }
                          }),
                        (b = b["y__FC_OP_SEP__" + c.y])),
                      h.plot.forEach(function(e, n) {
                        var i = b,
                          o = [];
                        if (e.group) {
                          var r = e.group;
                          b.group || (b.group = {}),
                            (b = b.group)[r] || (b[r] = { _fc_info: {} }),
                            (b[
                              r
                            ]._fc_info.groupItems = o = t.config.dataTable.unique(
                              r
                            )),
                            (b = b[r]);
                        }
                        if (e.stack) {
                          var a = e.stack;
                          b.pivot || (b.pivot = {}),
                            (b = b.pivot)[a] ||
                              (b[a] = { _fc_info: { pivot: a } }),
                            (b = b[a]);
                        }
                        if (
                          (u.bin &&
                            (b.bin || (b.bin = {}),
                            (b = b.bin)["x__FC_OP_SEP__" + c.x] ||
                              (b["x__FC_OP_SEP__" + c.x] = {
                                _fc_info: {
                                  chart: t,
                                  bin: u.bin[0],
                                  binDecider: p,
                                  totalStart: +A.timeYear.floor(
                                    new Date(t.config.dataTable.min(u.bin[0]))
                                  )
                                }
                              }),
                            (b = b["x__FC_OP_SEP__" + c.x])),
                          h.bin &&
                            (b.bin || (b.bin = {}),
                            (b = b.bin)["y__FC_OP_SEP__" + c.y] ||
                              (b["y__FC_OP_SEP__" + c.y] = {
                                _fc_info: { bin: h.bin[0] }
                              }),
                            (b = b["y__FC_OP_SEP__" + c.y])),
                          b.aggregate || (b.aggregate = { _fc_info: {} }),
                          "candlestick" === e.type || "ohlc" === e.type)
                        )
                          for (
                            var l = e.group ? o.length : 1, s = 0;
                            s < l;
                            ++s
                          ) {
                            var d = {
                                plottype: e.type,
                                typeinnavigator: e.typeinnavigator
                              },
                              g = e.group ? o[s] : f.UNDEF;
                            if (e.open) {
                              b.aggregate._fc_info.first ||
                                (b.aggregate._fc_info.first = {});
                              var m = b.aggregate._fc_info.first;
                              g && !m[g] && (m[g] = {}),
                                g
                                  ? m[g][e.open] || (m[g][e.open] = [])
                                  : m[e.open] || (m[e.open] = []),
                                (d.open = g ? m[g][e.open] : m[e.open]);
                            }
                            if (e.high) {
                              b.aggregate._fc_info.max ||
                                (b.aggregate._fc_info.max = {});
                              var y = b.aggregate._fc_info.max;
                              g && !y[g] && (y[g] = {}),
                                g
                                  ? y[g][e.high] || (y[g][e.high] = [])
                                  : y[e.high] || (y[e.high] = []),
                                (d.high = g ? y[g][e.high] : y[e.high]);
                            }
                            if (e.low) {
                              b.aggregate._fc_info.min ||
                                (b.aggregate._fc_info.min = {});
                              var v = b.aggregate._fc_info.min;
                              g && !v[g] && (v[g] = {}),
                                g
                                  ? v[g][e.low] || (v[g][e.low] = [])
                                  : v[e.low] || (v[e.low] = []),
                                (d.low = g ? v[g][e.low] : v[e.low]);
                            }
                            if (e.close) {
                              b.aggregate._fc_info.last ||
                                (b.aggregate._fc_info.last = {});
                              var x = b.aggregate._fc_info.last;
                              g && !x[g] && (x[g] = {}),
                                g
                                  ? x[g][e.close] || (x[g][e.close] = [])
                                  : x[e.close] || (x[e.close] = []),
                                (d.close = g ? x[g][e.close] : x[e.close]);
                            }
                            var k = b.aggregate._fc_info;
                            (d.tableInfo = (g
                              ? [k.first[g], k.max[g], k.min[g], k.last[g]]
                              : [k.first, k.max, k.min, k.last]
                            ).filter(function(t) {
                              return !!t;
                            })[0]),
                              (d.value = e.value),
                              (d.plotInAxisIndex = n),
                              c.plots.push(d);
                          }
                        else {
                          b.aggregate._fc_info[e.aggregation] ||
                            (b.aggregate._fc_info[e.aggregation] = {});
                          var _ = b.aggregate._fc_info[e.aggregation];
                          if (e.group)
                            for (var w = 0; w < o.length; ++w) {
                              var S = o[w];
                              _[S] || (_[S] = {}),
                                _[S][e.value] || (_[S][e.value] = []),
                                c.plots.push({
                                  plottype: e.type,
                                  typeinnavigator: e.typeinnavigator,
                                  tableInfo: _[S],
                                  value: _[S][e.value],
                                  stack: e.stack,
                                  plotInAxisIndex: n
                                });
                            }
                          else
                            _[e.value] || (_[e.value] = []),
                              c.plots.push({
                                plottype: e.type,
                                typeinnavigator: e.typeinnavigator,
                                tableInfo: _,
                                value: _[e.value],
                                stack: e.stack,
                                plotInAxisIndex: n
                              });
                        }
                        b = i;
                      });
                  },
                  p = 0,
                  g = d.length;
                p < g;
                p++
              )
                h(p);
          },
          lt = function(t, e, n, i, o, r) {
            ((0, j["default"])(o) && 0 !== o) || (o = 10);
            var a =
                t > 0 && isFinite(t)
                  ? (function(t, e) {
                      var n = 0.9 * t;
                      return e ? Math.min(n, 1) : n;
                    })(t, r)
                  : 1,
              l = (0, j["default"])(n) && n > 0 && n < t ? n : a,
              s = e > 0 && isFinite(e) ? e : a + +o;
            return [l, (0, j["default"])(i) && i > l ? i : 1.2 * s];
          },
          st = function(t, e, n, i, o) {
            !isFinite(t) && (t = f.UNDEF),
              !isFinite(e) && (e = f.UNDEF),
              !isFinite(n) && (n = f.UNDEF),
              !isFinite(i) && (i = f.UNDEF);
            var r =
                n < t
                  ? n
                  : t !== f.UNDEF
                  ? (function(t, e) {
                      var n = t - Math.abs(0.1 * t);
                      return n > 0 && e ? 0 : n;
                    })(t, o)
                  : 0,
              a = r < 0 && (i < 0 || e < 0);
            return [
              r,
              i > e
                ? i
                : e !== f.UNDEF
                ? a && o
                  ? 0
                  : e + Math.abs(0.2 * e)
                : r + 1
            ];
          },
          ct = function ht(t) {
            for (var e in t)
              t.hasOwnProperty(e) &&
                ("object" === i(t[e])
                  ? ht(t[e])
                  : "stroke-dasharray" === e &&
                    "string" == typeof t[e] &&
                    (t[e] = t[e]
                      .replace(/^\s+|\s+$/g, "")
                      .replace(/,/g, " ")
                      .split(" ")
                      .map(function(t) {
                        return +t;
                      })));
          },
          ut = function pt(t) {
            for (var e in t)
              t.hasOwnProperty(e) &&
                ("object" === i(t[e])
                  ? pt(t[e])
                  : ("opacity" !== e &&
                      "stroke-opacity" !== e &&
                      "fill-opacity" !== e) ||
                    (t[e] = Math.max(0, Math.min(1, +t[e]))));
          },
          ft = function gt() {
            var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {},
              e = arguments[1];
            for (var n in t) {
              var i = t[n];
              if ("_fc_info" === n || "table" === n) {
                var o = "table" === n ? i : i.table;
                o && o !== e && o.dispose && o.dispose();
              } else
                "aggregate" === n
                  ? gt(i._fc_info, e)
                  : (0, N["default"])(i) && gt(i, e);
            }
          },
          dt = (function(t) {
            function e() {
              !(function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e);
              var n = (function(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                })(this, t.call(this)),
                i = n;
              return (
                i.addToEnv("getStyleDef", function() {
                  var t =
                      arguments.length > 0 && arguments[0] !== undefined
                        ? arguments[0]
                        : {},
                    e = i.getFromEnv("textStyle"),
                    n = void 0;
                  if ("string" == typeof t) {
                    var o = i.getFromEnv("dataSource").styledefinition;
                    (n = {}),
                      o &&
                        t.split(/\s+/g).forEach(function(t) {
                          return (0, f.extend2)(n, o[t.toLowerCase()]);
                        });
                  }
                  return (
                    n && (t = n),
                    ct(t),
                    ut(t),
                    (t["font-size"] || 0 === t["font-size"]) &&
                      J(t, e["font-size"]),
                    t
                  );
                }),
                i.deregisterFactory("canvas"),
                i.registerFactory("background", L["default"]),
                i.registerFactory("caption", x["default"]),
                i.registerFactory("legend", y["default"]),
                i.registerFactory("panel", w["default"]),
                i.registerFactory("selectorToolbar", g["default"], [
                  "timeNavigator",
                  "canvas"
                ]),
                i.registerFactory("timeNavigator", p["default"]),
                i.registerFactory("standardRangeSelector", m["default"], [
                  "selectorToolbar"
                ]),
                i.registerFactory("customRangeSelector", k["default"], [
                  "selectorToolbar"
                ]),
                i.registerFactory("multicanvasCrosslineManager", _["default"], [
                  "mouseTracker"
                ]),
                i.registerFactory("toolbarManager", B["default"], [
                  "standardRangeSelector",
                  "customRangeSelector"
                ]),
                n
              );
            }
            return (
              R(e, t),
              (e.getName = function() {
                return "timeseries";
              }),
              (e.prototype.getName = function() {
                return "timeseries";
              }),
              (e.prototype.__setDefaultConfig = function() {
                var t = this.config;
                (t.skipConfigureIteration = {}),
                  (t.canvasAxisMap = {}),
                  (t.scaleYDsMap = {}),
                  (t.palettecolors = [
                    "#32cd32",
                    "#29C3BE",
                    "#F2726F",
                    "#FFC533",
                    "#62B58F",
                    "#BC95DF",
                    "#67CDF2"
                  ]),
                  (t.defaultTextStyle = {
                    "font-family": f.DEFAULT_FT_FONT,
                    "font-weight": "normal",
                    "font-style": "normal",
                    "font-size": "12px",
                    fill: "#5F5F5F",
                    "line-height": "14px",
                    opacity: "1",
                    "fill-opacity": "1"
                  }),
                  this.addToEnv("textStyle", {
                    "font-family": "sans-serif",
                    "font-size": "10",
                    fill: "#000000",
                    "line-height": "12"
                  }),
                  (t.contextPanels = f.UNDEF),
                  (t.contextLimit = t.focusLimit = f.UNDEF),
                  (t.legendMap = {});
              }),
              (e.prototype.setTooltipStyle = function() {
                var t = this.getFromEnv("tooltipStyle") || {},
                  e = this.getFromEnv("toolTipController"),
                  n = this.getFromEnv("baseTextStyle");
                e.setStyle({
                  background: (0, f.pluck)(t.background, ""),
                  bgColor: (0, f.convertColor)(
                    t["background-color"] || "FFF",
                    (0, f.pluckNumber)(100 * t["background-opacity"], 100)
                  ),
                  rawBgColor: (t["background-color"] || "FFF")
                    .replace(/\s+/g, "")
                    .replace(/^#?([a-f0-9]+)/gi, "#$1"),
                  fontColor: t.color || "#5f5f5f",
                  borderColor: (0, f.convertColor)(
                    t["border-color"] || "E8E8E8"
                  ),
                  rawBorderColor: (t["border-color"] || "E8E8E8")
                    .replace(/\s+/g, "")
                    .replace(/^#?([a-f0-9]+)/gi, "#$1"),
                  bgAlpha: (0, f.pluckNumber)(
                    100 * t["background-opacity"],
                    100
                  ),
                  border: (0, f.pluck)(t.border, ""),
                  borderThickness: (0, f.pluckNumber)(t["border-width"], 1),
                  showTooltipShadow: (0, f.pluckNumber)(
                    t["background-shadow"],
                    1
                  ),
                  borderRadius: (0, f.pluckNumber)(t["border-radius"], 0),
                  "font-size": (0, f.pluckNumber)(t["font-size"], 11),
                  "font-family": t["font-family"] || n["font-family"],
                  "font-weight": t["font-weight"] || "normal",
                  padding: (0, f.pluckNumber)(t.padding, 3),
                  borderAlpha: (0, f.pluckNumber)(t["background-opacity"], 90)
                });
              }),
              (e.prototype.sanitizeData = function(e) {
                t.prototype.sanitizeData.call(this, e),
                  (e.xaxis = (0, S["default"])(Y(e.data, U), e.xaxis, !1)),
                  (e.yaxis = (0, S["default"])(Y(e.data, W), e.yaxis)),
                  (e.legend = e.legend || {}),
                  (e.plotconfig = e.plotconfig || {}),
                  (e.extensions = e.extensions || {});
              }),
              (e.prototype.getDSdef = function() {
                return h["default"];
              }),
              (e.prototype._updateVisuals = function() {
                t.prototype._updateVisuals.call(this),
                  (this.getFromEnv("paper").config.noDefaultAttribs = !0);
              }),
              (e.prototype.domainValidator = function(t, e) {
                var n =
                    arguments.length > 2 && arguments[2] !== undefined
                      ? arguments[2]
                      : [],
                  i = void 0,
                  o = this.getFromEnv("contextBins")[0].getBinMin(),
                  r = t[0],
                  a = t[1],
                  l = e[0],
                  s = e[1],
                  c = +t[0],
                  u = +t[1],
                  f = +e[0],
                  d = +e[1];
                if (
                  (n.length &&
                    (i =
                      Math.abs(u - c - (+n[1] - +n[0])) > 1
                        ? "squeeze"
                        : "drag"),
                  c < f &&
                    ((r = l), (a = "drag" === i ? new Date(u + (f - c)) : a)),
                  u > d &&
                    ((a = s), (r = "drag" === i ? new Date(c - (u - d)) : r)),
                  u < f && (a = l),
                  c > d && (r = s),
                  c > u)
                ) {
                  var h = [a, r];
                  (r = h[0]), (a = h[1]);
                }
                return a - r >= 3 * o[2]
                  ? (this.fireEvent("domainValidated"), [+r, +a])
                  : this.getFocusLimit() || this.getContextLimit();
              }),
              (e.prototype.configureAttributes = function(t) {
                var e = this.getFromEnv("dataSource"),
                  n = this.config,
                  i = new d["default"](this),
                  o = new D["default"](),
                  r = t.chart || {},
                  a = (function() {
                    var t =
                        arguments.length > 0 && arguments[0] !== undefined
                          ? arguments[0]
                          : [],
                      e = [];
                    return (
                      (0, M["default"])(t)
                        ? (e = t.slice())
                        : (0, T["default"])(t) && (e = t.split(/\s*,\s*/)),
                      (e = e.filter(function(t) {
                        return !!t;
                      })).map(function(t) {
                        return (0, f.hashify)(t);
                      })
                    );
                  })(r.palettecolors),
                  s = this.getFromEnv("textStyle"),
                  c = this.getFromEnv("getStyleDef"),
                  u = e.legend,
                  h = c(((e.chart && e.chart.style) || {}).text),
                  p = n.legendMap,
                  g = {},
                  m = this.getFromEnv("legendMap"),
                  y =
                    this.getChildren("legend") && this.getChildren("legend")[0],
                  x = c(u && u.item && u.item.style && u.item.style.text),
                  k = [];
                for (var _ in (this.addToEnv("baseTextStyle", {
                  "font-family": h["font-family"] || f.DEFAULT_FT_FONT
                }),
                (x = Object.assign({}, this.getFromEnv("baseTextStyle"), x)),
                (n.mergedLegendStyle = (0, f.extend2)(
                  (0, f.extend2)({}, n.defaultTextStyle),
                  x
                )),
                n.focusTableMap &&
                  ft(n.focusTableMap, n.focusTableMap._fc_info.table),
                n.contextTableMap &&
                  (ft(n.contextTableMap, n.contextTableMap._fc_info.table),
                  (n.contextTableMap = f.UNDEF)),
                this.addToEnv("chart-attrib", r),
                i.configure(),
                this.addToEnv("color-manager", i),
                a.length && (n.palettecolors = a),
                o.setRange(n.palettecolors),
                this.addToEnv("ordinalScale", o),
                (n.dataTable = t.data),
                (n.showLegend = (0, f.pluckNumber)(r.showlegend, 1)),
                (n.showTooltip = (0, f.pluckNumber)(r.showtooltip, 1)),
                (n.navigatorEnabled = (0, f.pluckNumber)(r.enablenavigator, 1)),
                (n.interCanvasSpace = (0, f.pluckNumber)(
                  r.intercanvasspace,
                  20
                )),
                (n.multiCanvas = (0, f.pluckNumber)(r.multicanvas, 1)),
                this.addToEnv("UTC", (0, f.pluck)(r.enableutc, !1)),
                this.addToEnv("dateAPI", function(t, e, n) {
                  return t["get" + (n ? "UTC" : "") + e]();
                }),
                (k = t.xaxis.slice(0, 1).map(function(t) {
                  return Object.assign({}, t, {
                    bin: t.plot.map(function(t) {
                      return t.value;
                    })
                  });
                })),
                (n.focusAxesX = k.map(function(t) {
                  return Object.assign({}, t, {
                    filter: t.plot.map(function(t) {
                      return t.value;
                    }),
                    filterInfo: {}
                  });
                })),
                (n.focusAxesY = (0, E["default"])(
                  Y(n.dataTable, q),
                  t.yaxis,
                  t.series,
                  t.stack,
                  t.group
                )),
                (n.focusPanels = V(
                  (0, C["default"])(
                    n.focusAxesX,
                    n.focusAxesY,
                    t.canvas,
                    n.multiCanvas ? Q : K
                  )
                )),
                n.focusAxesY.forEach(function(t) {
                  t.plot.forEach(function(t) {
                    var e = t.stack,
                      i = t.group,
                      o = t.value,
                      r = t.type;
                    if (e) {
                      if (g[e]) return;
                      g[e] = n.dataTable.unique(e);
                    } else if (i) {
                      if (g[e]) return;
                      g[i] = n.dataTable.unique(i);
                    } else if ("ohlc" !== r && "candlestick" !== r) {
                      if (g[o]) return;
                      g[o] = [o];
                    }
                  });
                }),
                g)) {
                  g[_].forEach(function(t) {
                    p[t] || (p[t] = { visibility: !0, series: t });
                  });
                }
                if ((this.addToEnv("legendMap", p), m)) {
                  !(function t(e, n) {
                    for (var i in e)
                      if (e.hasOwnProperty(i)) {
                        var o = n && n[i],
                          r = e[i];
                        r.hasOwnProperty("visibility")
                          ? o
                            ? (r.visibility ||
                                (y
                                  .getItem(r.legendItemId)
                                  .removeLegendState("hidden"),
                                (r.visibility = !0)),
                              (n[i] = r))
                            : y && y.disposeItem(r.legendItemId)
                          : t(r, o);
                      }
                  })(m, p);
                }
                (n.contextAxesX = (0, l["default"])(k)),
                  (n.contextAxesY = (0, l["default"])(n.focusAxesY)),
                  (0, v["default"])(this),
                  (0, b["default"])(this),
                  (n.focusTableMap = { _fc_info: { table: n.dataTable } }),
                  at(this),
                  n.navigatorEnabled &&
                    ((n.contextPanels = V(
                      (0, C["default"])(
                        n.contextAxesX,
                        n.contextAxesY,
                        [],
                        function(t, e) {
                          return t.map(function(t, n) {
                            return {
                              x: [{ index: n }],
                              y: e.map(function(t, e) {
                                return { index: e, visible: !1 };
                              })
                            };
                          });
                        }
                      )
                    )),
                    (n.contextTableMap = { _fc_info: { table: n.dataTable } }),
                    at(this, !0)),
                  rt(n.focusTableMap),
                  rt(n.contextTableMap),
                  (n.printOption = {
                    enabled: (0, f.pluckNumber)(
                      r.printshowbutton,
                      r.showprintmenuitem,
                      0
                    )
                  }),
                  (n.toolbarPosition = (function(t) {
                    switch (t) {
                      case "tr":
                      case "rt":
                      case "top right":
                      case "right top":
                        t = "tr";
                        break;
                      case "br":
                      case "rb":
                      case "bottom right":
                      case "right bottom":
                        t = "br";
                        break;
                      case "tl":
                      case "lt":
                      case "top left":
                      case "left top":
                        t = "tl";
                        break;
                      case "bl":
                      case "lb":
                      case "bottom left":
                      case "left bottom":
                        t = "bl";
                        break;
                      default:
                        t = "tr";
                    }
                    return t;
                  })((0, f.pluck)(r.toolbarposition, "tr").toLowerCase())),
                  (n.toolbarHAlign =
                    "left" === ("" + r.toolbarhalign).toLowerCase()
                      ? "l"
                      : n.toolbarPosition.charAt(1)),
                  (n.toolbarVAlign =
                    "bottom" === ("" + r.toolbarvalign).toLowerCase()
                      ? "b"
                      : n.toolbarPosition.charAt(0)),
                  (n.link = r.clickurl),
                  this.addToEnv(
                    "linkClickFN",
                    (0, f.getLinkAction)(this.getFromEnv("dataSource"), this)
                  ),
                  this.addToEnv("chartConfig", n),
                  r.style &&
                    ((0, f.extend2)(s, c(r.style.text)),
                    this.addToEnv("tooltipStyle", c(r.style.tooltip))),
                  this.addToEnv("style", {
                    outCancolor: s.fill,
                    fontSize: s["font-size"],
                    outCanfontFamily: s["font-family"]
                  }),
                  this.createBaseComponent(),
                  this.getFromEnv("animationManager").setAnimationState(
                    this._firstConfigure ? "initial" : "update"
                  ),
                  this._createToolBox(),
                  this.configureChildren(),
                  this.setTooltipStyle();
              }),
              (e.prototype._addLegend = function(t) {
                var e,
                  n,
                  i,
                  o = this,
                  r = o.config,
                  a = r.mergedLegendStyle,
                  l = t.series,
                  s = o.getFromEnv("ordinalScale").getRangeValue(l),
                  c = o.getFromEnv("legend"),
                  u = (0, f.getLightColor)(s, 60).replace(G, f.HASHSTRING);
                r.showLegend &&
                  ((e = {
                    FCcolor: { color: s, angle: 0, ratio: "0", alpha: "100" }
                  }),
                  (n = { label: l }),
                  (i = c.getItem(t.legendItemId)) ||
                    ((t.legendItemId = c.createItem()),
                    (i = c.getItem(t.legendItemId)),
                    o.addExtEventListener(
                      "fc-click",
                      function() {
                        t.visibility
                          ? ((t.visibility = !1), i.setLegendState("hidden"))
                          : ((t.visibility = !0),
                            i.removeLegendState("hidden")),
                          o.config.dataTable._flushResult({
                            legendInteracted: !0
                          });
                      },
                      i
                    )),
                  i.configure(n),
                  i.setStateCosmetics("default", {
                    symbol: {
                      fill: (0, f.toRaphaelColor)(e),
                      rawFillColor: s,
                      stroke: (0, f.toRaphaelColor)(u)
                    },
                    text: {
                      fill: (0, f.convertColor)(
                        a.fill,
                        a.opacity * a["fill-opacity"] * 100
                      ),
                      "font-family": a["font-family"],
                      "font-size": a["font-size"],
                      "font-style": a["font-style"],
                      "font-weight": a["font-weight"],
                      "line-height": a["line-height"]
                    }
                  }));
              }),
              (e.prototype._createGroup = function() {
                var t =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : {},
                  e = arguments[1];
                return this.getFromEnv("animationManager").setAnimation({
                  attr: t,
                  container: e,
                  el: "group",
                  component: this,
                  label: "group"
                });
              }),
              (e.prototype._createLayers = function() {
                var t = this.getFromEnv("animationManager"),
                  e = this.getContainer(""),
                  n = void 0;
                !e &&
                  (e = this.addContainer(
                    "",
                    t.setAnimation({
                      el: e || "group",
                      attr: { name: "" },
                      component: this
                    })
                  )),
                  this.getChildContainer("tropo") ||
                    this.addChildContainer(
                      "tropo",
                      this._createGroup({ name: "chart-tropo" }, e)
                    ),
                  this.getChildContainer("strato") ||
                    this.addChildContainer(
                      "strato",
                      this._createGroup({ name: "chart-strato" }, e)
                    ),
                  this.getChildContainer("meso") ||
                    this.addChildContainer(
                      "meso",
                      this._createGroup({ name: "chart-meso" }, e)
                    ),
                  this.getChildContainer("thermo") ||
                    this.addChildContainer(
                      "thermo",
                      this._createGroup({ name: "chart-thermo" }, e)
                    ),
                  this.getChildContainer("exo") ||
                    (n = this.addChildContainer(
                      "exo",
                      this._createGroup({ name: "chart-exo" }, e)
                    )),
                  this.getChildContainer("toolbar-master") ||
                    this.addChildContainer(
                      "toolbar-master",
                      this._createGroup({ name: "toolbar-master" }, n)
                    ),
                  this.getChildContainer("legendGroup") ||
                    this.addChildContainer(
                      "legendGroup",
                      this._createGroup({ name: "legend-group" }, n)
                    );
              }),
              (e.prototype.manageSpace = function() {
                var t,
                  e,
                  n,
                  i,
                  o,
                  r,
                  a = this,
                  l = a.config,
                  s = l.focusPanels,
                  c = l.canvasAxisMap,
                  u = a.getFromEnv("focusScalesY"),
                  d = a.getFromEnv("focusScalesX"),
                  h = a.getChildren("caption"),
                  p = a.getFromEnv("selectorToolbar"),
                  g = a.getFromEnv("toolbar"),
                  m = g.getLogicalSpace(),
                  y = a.getChildren("legend") && a.getChildren("legend")[0],
                  v = a.getChildren("background")[0],
                  b = a.getChildren("canvas_0"),
                  x = 0,
                  k = 0,
                  _ = a.getChildren("timeNavigator"),
                  w = void 0,
                  S = void 0,
                  C = 0,
                  E = void 0,
                  D = { left: 0, right: 0 },
                  M = 0,
                  T = 0,
                  O = (t = +a.getFromEnv("chartWidth")),
                  F = (e = +a.getFromEnv("chartHeight")),
                  L = void 0,
                  I = 0,
                  P = 0,
                  j = 0.03 * t,
                  A = 0.03 * e,
                  B = 0,
                  N = void 0,
                  H = void 0,
                  R = void 0,
                  G = void 0,
                  Y = void 0,
                  z = void 0,
                  V = l.interCanvasSpace;
                if (
                  ((T += (0, f.pluckNumber)(l.marginTop, A)),
                  (F -= (0, f.pluckNumber)(l.marginBottom, A)),
                  (M += (0, f.pluckNumber)(l.marginLeft, j)),
                  (O -= (0, f.pluckNumber)(l.marginRight, j)),
                  v.setDimension({ height: e, width: t }),
                  v.setTranslation(0, 0),
                  s.forEach(function(t, e) {
                    var n = c["canvas_" + e].y,
                      i = (0.6 * (O - M)) / (n.length || 1);
                    n.map(function(e) {
                      var n = X(e),
                        o = a.getChildren(e)[0].setDimension({ width: i });
                      return t.y[n].overlap ? {} : o;
                    }).forEach(function(t) {
                      "number" == typeof t.left
                        ? (D.left = Math.max(D.left, t.left))
                        : (D.right = Math.max(D.right, t.right));
                    });
                  }),
                  s.forEach(function(t, e) {
                    var n = 0,
                      i = 0,
                      o = void 0,
                      r = void 0,
                      l = void 0;
                    c["canvas_" + e].y.forEach(function(t) {
                      (o = a.getChildren(t)[0]),
                        (l = o.getAlignment()),
                        (r = o.updateMaxLabelSpace(D[l])),
                        (n += (0, f.pluckNumber)(r.left, 0)),
                        (i += (0, f.pluckNumber)(r.right, 0));
                    }),
                      (I = (0, f.safeMax)([I, n])),
                      (P = (0, f.safeMax)([P, i]));
                  }),
                  s.forEach(function(t, e) {
                    var n = c["canvas_" + e].x,
                      i = (0.6 * (F - T)) / (n.length || 1);
                    n.map(function(e) {
                      var n = X(e),
                        o = a.getChildren(e)[0].setDimension({ height: i });
                      return t.x[n].overlap ? {} : o;
                    }).forEach(function(t) {
                      B += (0, f.pluckNumber)(t.top, t.bottom, 0);
                    });
                  }),
                  (M += I),
                  (O -= P),
                  (w = F - T),
                  h && h.length
                    ? ((L = h[0].setDimension({
                        width: O - M - m.width,
                        height: 0.3 * w
                      })),
                      h[0].setTranslation(M, T),
                      (z = Math.max(L.height, m.height)))
                    : (z = m.height),
                  m.height &&
                    (g.setDimension({ x: O - m.width, y: T }), g.manageSpace()),
                  (T += z),
                  (n = Math.max(0, O - M)),
                  (r = p.getLogicalSpace().height),
                  p.setDimension({ x: M, y: T, width: n }),
                  p.manageSpace(),
                  (T += r),
                  (o = B + (s.length - 1) * V),
                  (w = Math.max(0, F - T - o)),
                  y &&
                    ((Y = Math.max(
                      0,
                      y.setDimension({ height: 0.1 * w, width: n }).height
                    )),
                    (F -= Y),
                    (w -= Y),
                    y.setTranslation(M, F)),
                  _ &&
                    _.length &&
                    ((E = (0.7 * w) / (s.length || 1)),
                    (N = (0.3 * w) / (_.length || 1)),
                    _.forEach(function(t, e) {
                      (G = t.getChildren("brush")[0]),
                        (S = G.getLabelSpace() + t.config.scrollerHeight),
                        (H = Math.min(Math.max(Math.min(N, 0.8 * E), 48), 60)),
                        (R = H + S),
                        t.setDimension({ width: n, height: R }),
                        t.setTranslation(M, F - (_.length - e) * R),
                        (C += R);
                    }),
                    C > w
                      ? _.forEach(function(t) {
                          return t.setDimension({ width: 0, height: 0 });
                        })
                      : (w -= C)),
                  (i = Math.max(0, w / (s.length || 1))),
                  b && b[0])
                ) {
                  var U = b[0].getCanvasBorder();
                  (x = U.topBorder + U.bottomBorder),
                    (k = U.leftBorder + U.rightBorder);
                }
                u.forEach(function(t) {
                  return t.setRange([i - x - 6, 0]);
                }),
                  d.forEach(function(t) {
                    return t.setRange([0, n - k]);
                  }),
                  s.forEach(function(t, e) {
                    var o = "canvas_" + e,
                      r = c[o],
                      l = r.x,
                      s = r.y,
                      u = t.x,
                      f = t.y,
                      d = M,
                      h = M + n,
                      p = a.getChildren(o)[0],
                      g = p.getCanvasBorder(),
                      m = T + g.topBorder,
                      y = m + i,
                      v = [];
                    p.setPadding({ top: 6 }),
                      p.setDimension({ width: n, height: i }),
                      l.forEach(function(t) {
                        var e = u[X(t)],
                          n = a.getChildren(t)[0],
                          i = n.getDimension();
                        e.overlap
                          ? v.push(t)
                          : "top" === e.align
                          ? (n.setTranslation(M + g.leftBorder, m),
                            (m += i.top))
                          : "bottom" === e.align &&
                            (n.setTranslation(M + g.leftBorder, y),
                            (y += i.bottom));
                      }),
                      p.setTranslation(M, m),
                      v.forEach(function(t) {
                        var e = u[X(t)],
                          n = a.getChildren(t)[0],
                          o = n.getDimension();
                        "top" === e.align
                          ? n.setTranslation(M + g.leftBorder, m)
                          : "bottom" === e.align &&
                            n.setTranslation(
                              M + g.leftBorder,
                              m + i - o.bottom
                            );
                      }),
                      s.forEach(function(t) {
                        var e = m + 6,
                          i = f[X(t)],
                          o = a.getChildren(t)[0],
                          r = o.getDimension();
                        i.overlap
                          ? "left" === i.align
                            ? o.setTranslation(M, e)
                            : "right" === i.align &&
                              o.setTranslation(M + n - r.right, e)
                          : "left" === i.align
                          ? ((d -= r.left), o.setTranslation(d, e))
                          : "right" === i.align &&
                            (o.setTranslation(h, e), (h += r.right));
                      }),
                      (T = y + V);
                  });
              }),
              (e.prototype._setDataLabelStyle = function() {
                return this;
              }),
              (e.prototype._checkInvalidData = function() {
                var t = this.getFromEnv("dataSource"),
                  e = this.getFromEnv("chartInstance");
                return (
                  !t.data &&
                  ((e.__state.dataReady = !1),
                  (e.jsVars.hasNativeMessage = !0),
                  (e.jsVars.drawCount += 1),
                  !0)
                );
              }),
              (e.prototype._checkInvalidSpecificData = function() {
                var t = this.getFromEnv("dataSource");
                if (t.data && "function" == typeof t.data.getData) {
                  var e = t.data.getData(),
                    n = e.data,
                    i = e.schema;
                  return !(
                    Array.isArray(n) &&
                    0 !== n.length &&
                    Array.isArray(i) &&
                    i.filter(function(t) {
                      return "date" === t.type;
                    }).length &&
                    i.filter(function(t) {
                      return "number" === t.type;
                    }).length
                  );
                }
                return !0;
              }),
              (e.prototype.setYScaleLimit = function(t, e, n) {
                var i =
                    !(arguments.length > 3 && arguments[3] !== undefined) ||
                    arguments[3],
                  o = this,
                  r = o.config,
                  a = r.scaleYDsMap,
                  l = a[t],
                  s = void 0,
                  c = void 0,
                  u = void 0,
                  d = void 0,
                  h = function(e) {
                    var n = e.scale;
                    return n && n.getId() === t;
                  },
                  p = r.focusAxesY.find(h),
                  g = r.contextAxesY.find(h),
                  m = p || g,
                  y = m && m.scale;
                if (y) {
                  for (var v in (l || (l = a[t] = {}),
                  (s = l[e]) || (s = l[e] = {}),
                  (s.limit = n),
                  (s.baseRequired = i),
                  l))
                    if (l.hasOwnProperty(v)) {
                      var b = l[v],
                        x = (0, f.extent)([c, u].concat(b.limit));
                      (c = x[0]), (u = x[1]), (d = d || b.baseRequired);
                    }
                  "log" === y.getType()
                    ? y.setDomain(lt(c, u, m.min, m.max, m.base, d))
                    : y.setDomain(st(c, u, m.min, m.max, d)),
                    o.config.focusPanels.forEach(function(t, e) {
                      var n = "canvas_" + e,
                        i = o.getChildren(n),
                        r = i && i[0],
                        a = o.config.canvasAxisMap[n],
                        l = a && a.y;
                      l &&
                        r &&
                        (r.asyncDraw(),
                        l.forEach(function(t) {
                          o.getChildren(t).forEach(function(t) {
                            t.getScale() === y &&
                              (t.placeAxis(), t.asyncDraw());
                          });
                        }));
                    });
                }
              }),
              (e.prototype.setXScaleLimit = function(t, e, n) {
                var i = this,
                  o = i.config,
                  r = o.scaleYDsMap,
                  a = r[t],
                  l = void 0,
                  s = void 0,
                  c = void 0,
                  u = void 0,
                  d = void 0,
                  h = i.getContextLimit(),
                  p = h[0],
                  g = h[1],
                  m = function(e) {
                    var n = e.scale;
                    return n && n.getId() === t;
                  },
                  y = o.focusAxesX.find(m),
                  v = o.contextAxesX.find(m),
                  b = y || v,
                  x = b && b.scale;
                if (x) {
                  for (var k in (a || (a = r[t] = {}),
                  (l = a[e]) || (l = a[e] = {}),
                  (l.limit = n),
                  a))
                    if (a.hasOwnProperty(k)) {
                      var _ = a[k],
                        w = (0, f.extent)([s, c].concat(_.limit));
                      (s = w[0]), (c = w[1]);
                    }
                  if (y) {
                    var S = i.getFocusLimit();
                    (u = S[0]),
                      (d = S[1]),
                      +u === p && (0, j["default"])(s) && (u = Math.min(u, s)),
                      +d === g && (0, j["default"])(c) && (d = Math.max(d, c)),
                      x.setDomain([u, d]);
                  } else
                    (u = (0, j["default"])(s) ? Math.min(p, s) : p),
                      (d = (0, j["default"])(c) ? Math.max(g, c) : g),
                      x.setDomain([u, d]);
                  i.config.focusPanels.forEach(function(t, e) {
                    var n = "canvas_" + e,
                      o = i.getChildren(n),
                      r = o && o[0],
                      a = i.config.canvasAxisMap[n],
                      l = a && a.x;
                    l &&
                      r &&
                      (r.asyncDraw(),
                      l.forEach(function(t) {
                        i.getChildren(t).forEach(function(t) {
                          t.getScale() === x && (t.placeAxis(), t.asyncDraw());
                        });
                      }));
                  });
                }
              }),
              (e.prototype.setFocusLimit = function() {
                var t =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : [],
                  e = this.config,
                  n = this.domainValidator(
                    t,
                    this.getContextLimit(),
                    e.focusLimit
                  ),
                  i = e.focusAxesX[0],
                  o = this.getFromEnv("focusBins")[0],
                  r = this.getFromEnv("focusScalesX")[0],
                  a = this.getFocusLimit();
                (e.focusLimit = n), o.setBinDomain(n);
                var l = o.getRangeThreshold();
                r.setRangeThreshold(l),
                  this.fireEvent("focusLimitChanged"),
                  (0, c["default"])(n, a) ||
                    (i.filterInfo &&
                      i.filterInfo.query &&
                      (i.filterInfo.query._updateArgs(
                        +n[0] - 2 * +l[2],
                        +n[1] + 2 * +l[2]
                      ),
                      i.filterInfo.table._flushResult(),
                      this.updateVerticalAxesWidth()));
              }),
              (e.prototype.updateVerticalAxesWidth = function() {
                var t = this,
                  e = t.config.canvasAxisMap,
                  n = Object.keys(e),
                  i = { left: 0, right: 0 },
                  o = void 0;
                n.forEach(function(n) {
                  e[n].y.forEach(function(e) {
                    t.getChildren(e).forEach(function(t) {
                      "number" == typeof (o = t.getDimension()).left
                        ? (i.left = Math.max(i.left, o.left))
                        : (i.right = Math.max(i.right, o.right));
                    });
                  });
                }),
                  n.forEach(function(n) {
                    e[n].y.forEach(function(e) {
                      t.getChildren(e).forEach(function(t) {
                        t.updateMaxLabelSpace(i[t.getAlignment()]);
                      });
                    });
                  });
              }),
              (e.prototype.getFocusLimit = function() {
                var t = this.config.focusLimit;
                return t && t.slice();
              }),
              (e.prototype.setContextLimit = function() {
                var t =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : [],
                  e = this.getFromEnv("contextBins");
                (this.config.contextLimit = t.slice()),
                  e[0].setBinDomain(t),
                  this.getFromEnv("contextScalesX")[0].setRangeThreshold(
                    e[0].getRangeThreshold()
                  );
              }),
              (e.prototype.getContextLimit = function() {
                return this.config.contextLimit.slice();
              }),
              e
            );
          })(u["default"]);
        e["default"] = dt;
      },
      660: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = p(n(661)),
          o = n(125),
          r = p(n(672)),
          a = p(n(675)),
          l = p(n(676)),
          s = p(n(674)),
          c = p(n(677)),
          u = n(129),
          f = p(n(670)),
          d = n(132),
          h = p(n(678));
        function p(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function g(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var m = 3.5,
          y = 5.5,
          v = function(t, e) {
            return (t + e) / 2;
          },
          b = function(t, e) {
            return Object.assign(t, e);
          },
          x = "line",
          k = "area",
          _ = function(t, e, n, i, o) {
            var r, a;
            return t
              ? ((r = n - t.x),
                (a = i - t.y),
                {
                  pointIndex: e,
                  hovered: Math.sqrt(Math.pow(r, 2) + Math.pow(a, 2)) <= 5,
                  pointObj: t,
                  component: o
                })
              : { pointIndex: e, hovered: !1, component: o };
          };
        function w(t) {
          switch (t) {
            case "line":
            case "smooth-line":
            case "step-line":
              return x;
            case "area":
            case "smooth-area":
            case "step-area":
              return k;
          }
        }
        (0, d.addDep)({
          name: "continuousAnimation",
          type: "animationRule",
          extension: h["default"]
        });
        var S = (function(t) {
          function e() {
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            var n = (function(t, e) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !e || ("object" != typeof e && "function" != typeof e)
                ? t
                : e;
            })(this, t.call(this));
            return (
              (n.getHoverInConfig = function(t, e) {
                return {
                  index: t,
                  hovered: !0,
                  radius: e ? y : m,
                  isDsHovered: e
                };
              }),
              (n.getHoverOutConfig = function(t) {
                return { index: t, hovered: !1 };
              }),
              n
            );
          }
          return (
            g(e, t),
            (e.prototype.getName = function() {
              return "continuous";
            }),
            (e.prototype.__setDefaultConfig = function() {
              t.prototype.__setDefaultConfig.call(this);
              var e = this.config;
              (e["default-stroke"] = "9194CC"),
                (e["default-fill"] = "9194CC"),
                (e["default-anchor-stroke"] = (0, u.convertColor)("#ffffff")),
                (e.type = "line"),
                (e.plotStyle = {}),
                (e.anchorStyle = {}),
                (e.anchorHoverInStyle = {}),
                (e.anchorHoverOutStyle = {}),
                (e.anchorHighlightObj = {}),
                (e.defaultStyle = { "stroke-opacity": 1, "fill-opacity": 0.6 }),
                (e.defaultAnchorStyle = {
                  "fill-opacity": 1,
                  "stroke-width": 1
                });
            }),
            (e.prototype.configureAttributes = function(t) {
              var e = void 0,
                n = void 0,
                i = this.config;
              if (t.hasOwnProperty("index"))
                t.hovered
                  ? ((i.mode = "show"), (i.sharedAnchorIndex = t.index))
                  : ((i.mode = "hide"), (i.hideIndex = i.lastShownIndex)),
                  (i.radius = t.radius),
                  (i.isDsHovered = t.isDsHovered),
                  (i.hoverMode = !0);
              else {
                for (e in t)
                  if ("primaryColor" === e) {
                    var r = t.plotCosmetics,
                      a = t.genericCosmetics,
                      l = t[e],
                      s = t.type,
                      c = w(s) === k,
                      f = i.plotStyle,
                      d = i.anchorStyle,
                      h = i.anchorHoverInStyle,
                      p = i.anchorHighlightObj,
                      g = this.getFromEnv("getStyleDef"),
                      m = g(a.style && a.style.plot),
                      y = g(a.style && a.style["plot:hover"]),
                      v = g(a.style && a.style["plot:highlight"]),
                      x = g(a.style && a.style.anchor),
                      _ = g(a.style && a.style["anchor:hover"]),
                      S = g(a.style && a.style["anchor:highlight"]),
                      C = g(r.style && r.style.generic),
                      E = g(t.styleConfig && t.styleConfig.plot),
                      D = g(r.style && r.style.plot),
                      M = g(t.styleConfig && t.styleConfig[s]),
                      T = g(r.style && r.style.anchor),
                      O = g(t.styleConfig && t.styleConfig.anchor),
                      F = g(r.style && r.style["generic:hover"]),
                      L = g(r.style && r.style["generic:highlight"]),
                      I = g(t.styleConfig && t.styleConfig["plot:hover"]),
                      P = g(t.styleConfig && t.styleConfig["plot:highlight"]),
                      j = g(r.style && r.style["anchor:hover"]),
                      A = g(r.style && r.style["anchor:highlight"]),
                      B = g(t.styleConfig && t.styleConfig["anchor:hover"]),
                      N = g(t.styleConfig && t.styleConfig["anchor:highlight"]);
                    for (n in ((i.defaultStyle["stroke-linecap"] = c
                      ? "butt"
                      : "round"),
                    [f, i.defaultStyle, m, C, E, D, M].reduce(b),
                    [d, i.defaultAnchorStyle, m, x, C, E, T, O].reduce(b),
                    (f.fill = c
                      ? (0, u.convertColor)(
                          (0, o.pluck)(l, i["default-fill"]),
                          100 * f["fill-opacity"]
                        )
                      : "none"),
                    (f.stroke = (0, u.convertColor)(
                      c
                        ? (0, o.pluck)(f.stroke, l, i["default-stroke"])
                        : (0, o.pluck)(l, i["default-stroke"]),
                      100 * f["stroke-opacity"]
                    )),
                    (d.fill = (0, u.convertColor)(
                      (0, o.pluck)(l, i["default-stroke"])
                    )),
                    (d.stroke = i["default-anchor-stroke"]),
                    [h, d, y, _, F, I, j, B].reduce(b),
                    [p, v, S, L, P, A, N].reduce(b),
                    Object.assign(Object.assign({}, h), p)))
                      i.anchorHoverOutStyle[n] = d[n] || "";
                    Object.keys(p).length ||
                      (p = i.anchorHighlightObj = (0, o.extend2)(
                        {},
                        i.anchorHoverOutStyle
                      )),
                      (i.connectNullData = (0, o.pluckNumber)(
                        i.connectNullData,
                        r.connectnulldata,
                        a.connectnulldata,
                        0
                      )),
                      delete f["fill-opacity"],
                      delete f["stroke-opacity"];
                  } else i[e] = t[e];
                if (!i.skipLimitCalc) {
                  i.limit = this._calculateLimits();
                  var H = this.getFromEnv("chart");
                  H.setYScaleLimit(
                    i.scaleY.getId(),
                    this.getId(),
                    i.limit.y,
                    i.limit.baseRequired
                  ),
                    H.setXScaleLimit(i.scaleX.getId(), this.getId(), i.limit.x);
                }
              }
            }),
            (e.prototype.getPadding = function() {
              var t = this.getLinkedParent().config,
                e = this.config,
                n = t.enableMouseTracking ? this.getValueFromPx(y) : 1,
                i = t.enableMarkers
                  ? this.getValueFromPx(e.dataMarkerPadding)
                  : 0;
              return Math.max(n, i);
            }),
            (e.prototype._getRelevantInfo = function() {
              var t = this.config;
              return {
                firstTimeStamp: t.firstTimeStamp,
                timeStampGap: t.timeStampGap,
                dataInfo: t.dataInfo,
                fill: t.plotStyle.stroke
              };
            }),
            (e.prototype.allocatePosition = function() {
              var t = this.config,
                e = t.indices,
                n = e[0],
                i = e[1],
                u = e[2],
                d = e[3],
                h = t.type,
                p = t.data,
                g = t.dataInfo,
                m = [],
                b = void 0,
                x = this.getFromEnv("binDecider"),
                _ = this.getFromEnv("xScale"),
                w = this.getFromEnv("yScale"),
                S = x.getRangeThreshold()[2],
                C = void 0,
                E = void 0,
                D = void 0,
                M = void 0,
                T = void 0,
                O = void 0,
                F = void 0,
                L = void 0,
                I = void 0,
                P = void 0,
                j = void 0,
                A = void 0,
                B = void 0,
                N = p.length,
                H = _.getDomain(),
                R = H[0],
                G = H[1],
                Y = void 0;
              if ((t.repositioningDone = this._isRepositioningNeeded())) {
                if ("visible" !== t.visibility) return;
                (g = t.dataInfo = []),
                  (t.timeStampGap = S),
                  (t.availableWidth = _.getRangeValue(S) - _.getRangeValue(0)),
                  (B = +_.getDomainValue(y) - +_.getDomainValue(0)),
                  (t.actualStartDomain = +R - B),
                  (t.actualEndDomain = +G + B),
                  p.forEach(function(e, r, a) {
                    (Y = e[n]),
                      (F = e[i]),
                      (E = Y.start),
                      (D = Y.end),
                      (M = v(E, D)),
                      (T = a[r + 1]),
                      (A = e[u]),
                      (P = w.getRangeValue(A || Math.max(w.getDomain()[0], 0))),
                      (j = w.getRangeValue(F)),
                      r || (L = t.firstTimeStamp = E),
                      (h !== k || (0, f["default"])(P)) &&
                        ((0, f["default"])(F) && (0, f["default"])(j)
                          ? ((I = _.getBinIndex(E, L)),
                            (b = {
                              startDate: E,
                              endDate: D,
                              midDate: M,
                              value: F,
                              paddingInTimestamp: B,
                              yBaseValue: h === k ? A : undefined,
                              x: _.getRangeValue(new Date(E), new Date(D)),
                              totalStackSum: (0, o.defined)(e[d])
                                ? e[d]
                                : o.UNDEF,
                              y: j,
                              base: P,
                              eventArgs: { index: r, dataValue: F }
                            }),
                            (g[I] = b),
                            T
                              ? (m.push(b),
                                (O = v(T[n].start, T[n].end)),
                                !t.connectNullData &&
                                  O - M > 1.5 * S &&
                                  m.push(null))
                              : N - r == 1 && m.push(b))
                          : t.connectNullData || m.push(null));
                  }),
                  (C = (function(t) {
                    switch (t) {
                      case "area":
                      case "smooth-area":
                      case "step-area":
                        return new a["default"]();
                      case "line":
                      case "smooth-line":
                      case "step-line":
                      default:
                        return new r["default"]();
                    }
                  })(h)
                    .setCurve(
                      (function(t) {
                        switch (t) {
                          case "smooth-line":
                          case "smooth-area":
                            return l["default"];
                          case "step-area":
                          case "step-line":
                            return c["default"];
                          case "line":
                          case "area":
                          default:
                            return s["default"];
                        }
                      })(h)
                    )
                    .setDefined(function(t) {
                      return !!t;
                    })
                    .setXAccessor(function(t, e) {
                      return m[e].x;
                    })
                    .setYAccessor(function(t, e) {
                      return m[e].y;
                    })).setYBaseAccessor &&
                    C.setYBaseAccessor(function(t, e) {
                      return m[e].base;
                    }),
                  (t.path = C.generate(m)),
                  (t.topPath = C.getLineYTop && C.getLineYTop().generate(m));
              }
            }),
            (e.prototype._isInvalidTooltext = function(t) {
              var e = this.config;
              if (
                !t ||
                t.midDate < e.actualStartDomain ||
                t.midDate > e.actualEndDomain
              )
                return !0;
            }),
            (e.prototype._drawPlot = function() {
              var t = this.config,
                e = t.plotStyle,
                n = t.dataInfo,
                i = w(t.type),
                r = (0, o.pluckNumber)(e["stroke-width"], 2),
                a = (0, o.pluckNumber)(e["stroke-width"], 0),
                l = void 0;
              this.addGraphicalElement({
                el: "group",
                container: { id: "meso", label: "group" },
                component: this,
                label: "group",
                id: "meso-line",
                attr: { name: "line-common-meso", visibility: t.visibility }
              }),
                this.addGraphicalElement(
                  {
                    el: "group",
                    container: { id: "meso-line", label: "group" },
                    component: this,
                    label: "group",
                    id: "meso-plot",
                    attr: { name: "line-plot-meso", visibility: t.visibility }
                  },
                  !0
                ),
                this.addGraphicalElement(
                  {
                    el: "group",
                    container: { id: "meso-line", label: "group" },
                    component: this,
                    label: "group",
                    id: "meso-anchor",
                    attr: { name: "line-anchor-meso", visibility: t.visibility }
                  },
                  !0
                ),
                this.addGraphicalElement(
                  {
                    el: "path",
                    container: { label: "group", id: "meso-plot" },
                    attr: Object.assign({}, e, {
                      path: t.path,
                      "stroke-width": "area" === i ? a : r
                    }),
                    label: "path",
                    component: this
                  },
                  !0
                ),
                t.topPath &&
                  this.addGraphicalElement(
                    {
                      el: "path",
                      container: { label: "group", id: "meso-plot" },
                      attr: Object.assign({}, e, {
                        path: t.topPath,
                        fill: "none",
                        "stroke-width": r
                      }),
                      label: "topPath",
                      component: this
                    },
                    !0
                  ),
                "show" === t.mode
                  ? isNaN(t.sharedAnchorIndex) ||
                    ((l = n[t.sharedAnchorIndex]),
                    (t.lastShownIndex = t.sharedAnchorIndex),
                    l &&
                      !isNaN(l.value) &&
                      this.addGraphicalElement({
                        el: "path",
                        container: { label: "group", id: "meso-anchor" },
                        attr: Object.assign(
                          {
                            path: (0, o.polyPathToPath)([
                              2,
                              l.x,
                              l.y,
                              t.radius,
                              0,
                              0
                            ]),
                            visibility: "show"
                          },
                          t.isDsHovered
                            ? t.anchorHoverInStyle
                            : t.anchorHighlightObj
                        ),
                        id: "shared-anchor",
                        label: t.dsType + "-anchor"
                      }))
                  : isNaN(t.hideIndex) ||
                    ((l = n[t.hideIndex]) &&
                      !isNaN(l.value) &&
                      this.addGraphicalElement({
                        el: "path",
                        container: { label: "group", id: "meso-anchor" },
                        attr: { visibility: "hidden" },
                        id: "shared-anchor",
                        label: t.dsType + "-anchor"
                      }));
            }),
            (e.prototype.setHoverInEffect = function(t, e) {
              this.getFromEnv("animationManager").setAnimationState(
                "mouseOver"
              ),
                this.setData(this.getHoverInConfig(t, e), !0);
            }),
            (e.prototype._getHoveredPlot = function(t, e) {
              var n,
                i,
                o,
                r,
                a,
                l,
                s,
                c = this.getFromEnv("xScale"),
                u = [
                  this.getChildren("pinMarker"),
                  this.getChildren("flagMarker")
                ],
                f = c.showPlotOverTick() ? Math.round : Math.floor,
                d = this.config,
                h = d.dataInfo,
                p = h.length,
                g = this.getLinkedParent().getTranslation(),
                m = g.x,
                y = g.y;
              if (
                ((t -= m),
                (e -= y),
                (s = c.getDomainValue(t - 5).getTime()),
                (l = (s - d.firstTimeStamp) / d.timeStampGap),
                (i = Math.floor(Math.max(l, 0))),
                (s = c.getDomainValue(t + 5).getTime()),
                (l = (s - d.firstTimeStamp) / d.timeStampGap),
                (o = Math.ceil(Math.min(l, p - 1))),
                u.forEach(function(n) {
                  !r &&
                    n &&
                    (n = n[0]) &&
                    (r = n._checkPointOverMarker(l, t, e, d.availableWidth));
                }),
                !r)
              )
                for (
                  a = o;
                  a >= i && ((n = h[a]), !(r = _(n, a, t, e, this)).hovered);
                  a--
                );
              return (
                !r && (r = {}),
                r.hovered
                  ? (r.binIndexHovered = r.pointIndex)
                  : ((r.binIndexHovered = f(
                      (c.getDomainValue(t).getTime() - d.firstTimeStamp) /
                        d.timeStampGap
                    )),
                    (r.pointObj =
                      d.dataInfo[r.binIndexHovered] ||
                      c.getBinBounds(t, d.firstTimeStamp)),
                    (r.component = this)),
                (d.binIndexHovered = r.binIndexHovered),
                r
              );
            }),
            e
          );
        })(i["default"]);
        e["default"] = S;
      },
      661: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                },
          o = u(n(141)),
          r = n(125),
          a = u(n(662)),
          l = u(n(670)),
          s = n(132),
          c = u(n(671));
        function u(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function f(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var d = function(t, e) {
            return Object.assign(t, e);
          },
          h = function(t) {
            return [t.start, t.end];
          },
          p = function(t, e, n, i) {
            return (t && e <= 0) || n[1] < i[0] || n[0] > i[1];
          },
          g = r.hasTouch ? r.TOUCH_THRESHOLD_PIXELS : r.CLICK_THRESHOLD_PIXELS;
        (0, s.addDep)({
          name: "timeseriesColumnAnimation",
          type: "animationRule",
          extension: c["default"]
        });
        var m = (function(t) {
          function e() {
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            var n = (function(t, e) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !e || ("object" != typeof e && "function" != typeof e)
                ? t
                : e;
            })(this, t.call(this));
            return (
              n.registerFactory("markerFactory", a["default"]),
              (n._getFirstValidData = function(t, e) {
                var n = void 0,
                  i = t.length;
                for (n = 0; n < i; n++)
                  if (t[0] && t[0][e] !== undefined) return t[0][e];
              }),
              (n.config.hoverInfo = []),
              n
            );
          }
          return (
            f(e, t),
            (e.prototype.getHoverInConfig = function(t) {
              return { style: this.config.hoverInStyle, index: t, hovered: !0 };
            }),
            (e.prototype.getHighlightConfig = function(t) {
              return {
                style: this.config.highlightStyle,
                index: t,
                hovered: !1
              };
            }),
            (e.prototype.getHoverOutConfig = function(t) {
              return {
                style: this.config.hoverOutStyle,
                index: t,
                hovered: !1
              };
            }),
            (e.prototype.getType = function() {
              return "dataset";
            }),
            (e.prototype.getName = function() {
              return "timeseriesColumn";
            }),
            (e.prototype.__setDefaultConfig = function() {
              t.prototype.__setDefaultConfig.call(this);
              var e = this.config;
              (e["default-plotSpacePercent"] = 30),
                (e.visibility = "visible"),
                (e.prevBoundaryInfo = {}),
                (e.prevDataInfo = []),
                (e.dataMarkerPadding = 0),
                (e.style = {}),
                (e.hoverInStyle = {}),
                (e.highlightStyle = {}),
                (e.hoverOutStyle = {}),
                (e.defaultStyle = {
                  "stroke-width": 1,
                  "fill-opacity": 1,
                  "stroke-opacity": 1,
                  opacity: 1
                }),
                (e.defaultHoverInStyle = { opacity: 0.8 });
            }),
            (e.prototype.configureAttributes = function(t) {
              var e = void 0,
                n = this.getFromEnv("chart-attrib"),
                i = this.config;
              if (t.hasOwnProperty("index"))
                i.hoverInfo.push(t), (i.hoverMode = !0);
              else {
                for (e in t)
                  if ("primaryColor" === e) {
                    var o = t.plotCosmetics,
                      a = t.genericCosmetics,
                      l = t[e],
                      s = void 0,
                      c = this.getFromEnv("getStyleDef"),
                      u = c(a.style && a.style.plot),
                      f = c(a.style && a.style["plot:hover"]),
                      h = c(a.style && a.style["plot:highlight"]),
                      p = c(o.style && o.style.plot),
                      g = c(t.styleConfig && t.styleConfig.plot),
                      m = c(o.style && o.style.column),
                      y = c(t.styleConfig && t.styleConfig.column),
                      v = c(o.style && o.style["plot:hover"]),
                      b = c(o.style && o.style["plot:highlight"]),
                      x = c(t.styleConfig && t.styleConfig["plot:hover"]),
                      k = c(t.styleConfig && t.styleConfig["plot:highlight"]),
                      _ = c(o.style && o.style["column:hover"]),
                      w = c(o.style && o.style["column:highlight"]),
                      S = c(t.styleConfig && t.styleConfig["column:hover"]),
                      C = c(t.styleConfig && t.styleConfig["column:highlight"]),
                      E = i.style,
                      D = i.hoverOutStyle,
                      M = i.hoverInStyle,
                      T = i.highlightStyle;
                    for (s in ([E, i.defaultStyle, u, p, g, m, y].reduce(d),
                    [M, i.defaultHoverInStyle, f, v, _, x, S].reduce(d),
                    [T, h, b, w, k, C].reduce(d),
                    Object.keys(T).length ||
                      (T = i.highlightStyle = (0, r.extend2)({}, M)),
                    (E.stroke = (0, r.convertColor)(
                      (0, r.pluck)(E.stroke, l, i["default-stroke"]),
                      100 * (0, r.pluckNumber)(E["stroke-opacity"], 1)
                    )),
                    (E.fill = (0, r.convertColor)(
                      (0, r.pluck)(l, E.stroke, i["default-fill"]),
                      100 * (0, r.pluckNumber)(E["fill-opacity"], 1)
                    )),
                    M.fill &&
                      (M.fill = (0, r.convertColor)(
                        M.fill,
                        100 *
                          (0, r.pluckNumber)(
                            M["fill-opacity"],
                            E["fill-opacity"]
                          )
                      )),
                    M.stroke &&
                      (M.stroke = (0, r.convertColor)(
                        M.stroke,
                        100 *
                          (0, r.pluckNumber)(
                            M["stroke-opacity"],
                            E["stroke-opacity"]
                          )
                      )),
                    T.fill &&
                      (T.fill = (0, r.convertColor)(
                        T.fill,
                        100 *
                          (0, r.pluckNumber)(
                            T["fill-opacity"],
                            E["fill-opacity"]
                          )
                      )),
                    T.stroke &&
                      (T.stroke = (0, r.convertColor)(
                        T.stroke,
                        100 *
                          (0, r.pluckNumber)(
                            T["stroke-opacity"],
                            E["stroke-opacity"]
                          )
                      )),
                    Object.assign(Object.assign({}, M), T)))
                      D[s] = (0, r.pluck)(E[s], "");
                    (0, r.defined)(D["stroke-dasharray"]) &&
                      (D["stroke-dasharray"] = ""),
                      (i.plotBorderThickness = E["stroke-width"]),
                      (i.opacity = E.opacity),
                      (i["fill-opacity"] = E["fill-opacity"]),
                      (i["stroke-opacity"] = E["stroke-opacity"]),
                      delete E.opacity,
                      delete E["fill-opacity"],
                      delete E["stroke-opacity"];
                  } else i[e] = t[e];
                if (
                  ((i.plotSpacePercent = (0, r.pluckNumber)(
                    n.plotspacepercent,
                    i["default-plotSpacePercent"]
                  )),
                  !i.skipLimitCalc)
                ) {
                  i.limit = this._calculateLimits();
                  var O = this.getFromEnv("chart");
                  O.setYScaleLimit(
                    i.scaleY.getId(),
                    this.getId(),
                    i.limit.y,
                    i.limit.baseRequired
                  ),
                    O.setXScaleLimit(i.scaleX.getId(), this.getId(), i.limit.x);
                }
              }
            }),
            (e.prototype.getValueFromPx = function(t) {
              var e = this.getFromEnv("binDecider").getBinRange(),
                n = e[1] - e[0],
                i = this.getFromEnv("chart").getFocusLimit();
              return (t * (i[1] - i[0])) / (n - t);
            }),
            (e.prototype.getPadding = function() {
              var t = this.config,
                e = t.scaleX,
                n = this.getFromEnv("binDecider").getRangeThreshold(),
                i = 0,
                o = this.getValueFromPx(t.dataMarkerPadding);
              return e.showPlotOverTick() && (i = n[2] / 2), Math.max(i, o);
            }),
            (e.prototype._calculateLimits = function() {
              var t,
                e = this.config,
                n = e.indices,
                i = e.data,
                o = e.type,
                a = e.scaleY,
                l = e.scaleX,
                s = /continuous/.test(this.getName()),
                c = l.showPlotOverTick(),
                u = {},
                f = i[0],
                d = i[i.length - 1],
                g = "log" === a.getType(),
                m = "visible" === this.config.visibility,
                y = this.getFromEnv("chart").getFocusLimit();
              return (
                (t = this.getPadding()),
                (u.x = c
                  ? m
                    ? [f && f[n[0]].start - t, d && d[n[0]].start + t]
                    : r.UNDEF
                  : s
                  ? m
                    ? [
                        f && (f[n[0]].start + f[n[0]].end) / 2 - t,
                        d && (d[n[0]].start + d[n[0]].end) / 2 + t
                      ]
                    : r.UNDEF
                  : m
                  ? [f && f[n[0]].start - t, d && d[n[0]].end - t]
                  : r.UNDEF),
                (u.y = m
                  ? [
                      (0, r.safeMin)(i, function(t) {
                        var e = (0, r.pluckNumber)(t[n[2]], t[n[1]]),
                          i = h(t[0]);
                        return p(g, e, i, y) ? null : e;
                      }),
                      (0, r.safeMax)(i, function(t) {
                        var e = t[n[1]],
                          i = h(t[0]);
                        return p(g, e, i, y) ? null : e;
                      })
                    ]
                  : r.UNDEF),
                (u.baseRequired = !/line/.test(o)),
                u
              );
            }),
            (e.prototype.draw = function() {
              this._createContainer(),
                this._drawPlot(),
                (this.config.hoverInfo = []),
                (this.config.hoverMode = !1),
                (this.config.repositioningDone = !1);
            }),
            (e.prototype.legendInteractivity = function() {
              "visible" === this.config.visibility ? this.hide() : this.show();
            }),
            (e.prototype._createContainer = function() {
              this.addGraphicalElement(
                {
                  el: "group",
                  container: { id: "meso", label: "group", isParent: !0 },
                  component: this,
                  label: "group",
                  id: "meso",
                  attr: { name: "dataset-meso" }
                },
                !0
              ),
                this.addGraphicalElement(
                  {
                    el: "group",
                    container: { id: "thermo", label: "group", isParent: !0 },
                    component: this,
                    label: "group",
                    id: "thermo",
                    attr: {
                      name: "dataset-thermo",
                      "clip-path": this.getFromEnv("dsGroupclipPath")
                    }
                  },
                  !0
                );
            }),
            (e.prototype.isDrawingRequired = function() {
              var t = this.config;
              if (t.repositioningDone || t.hoverMode) return !0;
            }),
            (e.prototype._drawPlot = function() {
              var t,
                e = this,
                n = e.config,
                i = n.style,
                o = (0, r.defined)(n.opacity),
                a = (0, r.defined)(n["stroke-opacity"]),
                s = (0, r.defined)(n["fill-opacity"]),
                c = n.dataInfo;
              e.addGraphicalElement(
                {
                  el: "group",
                  container: { id: "meso", label: "group" },
                  component: e,
                  label: "group",
                  id: "meso-plot",
                  attr: Object.assign(
                    { name: "column-plot-meso", visibility: n.visibility },
                    i
                  )
                },
                !0
              ),
                c.forEach(function(i, r) {
                  (0, l["default"])(i.value) &&
                    ((t = { x: i.x, y: i.y, width: i.width, height: i.height }),
                    o && (t.opacity = n.opacity),
                    a && (t["stroke-opacity"] = n["stroke-opacity"]),
                    s && (t["fill-opacity"] = n["fill-opacity"]),
                    i.style && Object.assign(t, i.style),
                    e.addGraphicalElement(
                      {
                        el: "rect",
                        container: { label: "group", id: "meso-plot" },
                        props: { dataLength: c.length },
                        label: "rect",
                        attr: t,
                        component: e,
                        index: r
                      },
                      !0
                    ),
                    (i.style = undefined));
                }),
                (n.hoverInfo = []);
            }),
            (e.prototype._isRepositioningNeeded = function() {
              var t = this.config,
                e = this.getFromEnv("xScale"),
                n = this.getFromEnv("yScale"),
                i = e.getDomain(),
                o = i[0],
                r = i[1],
                a = e.getRange(),
                l = a[0],
                s = a[1],
                c = n.getDomain(),
                u = c[0],
                f = c[1],
                d = n.getRange(),
                h = d[0],
                p = d[1],
                g = void 0,
                m = t.prevBoundaryInfo,
                y = t.limit.y || [],
                v = t.prevDataInfo;
              return (
                (+o != +m.xDomainStart ||
                  +r != +m.xDomainEnd ||
                  +u != +m.yDomainStart ||
                  +f != +m.yDomainEnd ||
                  l !== m.xRangeStart ||
                  s !== +m.xRangeEnd ||
                  h !== m.yRangeStart ||
                  p !== +m.yRangeEnd ||
                  t.prevVisibility !== t.visibility ||
                  y[0] !== v[0] ||
                  y[1] !== v[1] ||
                  t.legendInteracted) &&
                  ((t.legendInteracted = !1),
                  (g = !0),
                  (t.prevBoundaryInfo = {
                    xDomainStart: o,
                    xDomainEnd: r,
                    xRangeStart: l,
                    xRangeEnd: s,
                    yDomainStart: u,
                    yDomainEnd: f,
                    yRangeStart: h,
                    yRangeEnd: p
                  }),
                  (t.prevVisibility = t.visibility),
                  (t.prevDataInfo = y)),
                g
              );
            }),
            (e.prototype.allocatePosition = function() {
              var t = this.config,
                e = t.indices,
                n = e[0],
                o = e[1],
                a = e[2],
                s = e[3],
                c = this.getFromEnv("binDecider"),
                u = this.getFromEnv("xScale"),
                f = this.getFromEnv("yScale"),
                d = t.dataInfo,
                h = void 0,
                p = void 0,
                g = void 0,
                m = void 0,
                y = void 0,
                v = void 0,
                b = void 0,
                x = void 0,
                k = void 0,
                _ = void 0,
                w = void 0,
                S = void 0,
                C = t.groupIndex || 0,
                E = void 0,
                D = t.totalGroups || 1,
                M = void 0,
                T = void 0,
                O = t.data,
                F = void 0,
                L = void 0,
                I = t.plotBorderThickness,
                P = t.fillColor === t.strokeColor && I > 0,
                j = void 0,
                A = c.getRangeThreshold()[2],
                B = u.getDomain(),
                N = B[0],
                H = B[1],
                R = void 0;
              if ((t.repositioningDone = this._isRepositioningNeeded())) {
                if ("visible" !== t.visibility) return;
                (d = t.dataInfo = []),
                  (t.availableWidth = T =
                    u.getRangeValue(A) - u.getRangeValue(0)),
                  (t.timeStampGap = A),
                  (E = Math.max(T * (1 - t.plotSpacePercent / 100), 1)),
                  (p = E / D),
                  (F = Math.round(D / 2)),
                  (L = D % 2 == 0 ? 0 : 0.5),
                  (S = F - C > 0 ? -p * (F - C - L) : p * (C - F + L)),
                  (j =
                    +u.getDomainValue(T * (t.plotSpacePercent / 200)) -
                    +u.getDomainValue(0)),
                  (t.actualStartDomain = +N + j),
                  (t.actualEndDomain = +H - j),
                  P && (p = Math.max(p - I, 1)),
                  O.forEach(function(e, i) {
                    (g = e[n]),
                      (m = e[o]),
                      i || (M = t.firstTimeStamp = g.start),
                      (b = e[a]),
                      (k = f.getRangeValue(b || Math.max(f.getDomain()[0], 0))),
                      (x = f.getRangeValue(m)),
                      (0, l["default"])(m) &&
                        (0, l["default"])(k) &&
                        (0, l["default"])(x) &&
                        ((y = u.getRangeValue(
                          new Date(g.start),
                          new Date(g.end)
                        )),
                        P && (y += I / 2),
                        (y += S),
                        (h = Math.abs(k - x)),
                        (v = x > k ? k : x),
                        (R = {
                          startDate: g.start,
                          endDate: g.end,
                          value: m,
                          yBaseValue: b,
                          yBase: k,
                          x: y,
                          y: v,
                          width: p,
                          height: h,
                          totalStackSum: (0, r.defined)(e[s]) ? e[s] : r.UNDEF,
                          eventArgs: { index: i, dataValue: m }
                        }),
                        (w = u.getBinIndex(g.start, M)),
                        (d[w] = R));
                  });
              }
              (_ = t.hoverInfo) &&
                _.forEach(function(t) {
                  "object" === i(d[t.index]) &&
                    "object" === i(t.style) &&
                    (d[t.index].style = (0, r.extend2)(
                      d[t.index].style,
                      t.style
                    ));
                });
            }),
            (e.prototype._getRelevantInfo = function() {
              var t = this.config;
              return {
                firstTimeStamp: t.firstTimeStamp,
                timeStampGap: t.timeStampGap,
                dataInfo: t.dataInfo,
                fill: t.style.stroke
              };
            }),
            (e.prototype._getHoveredPlot = function(t, e) {
              var n,
                i,
                o,
                a,
                l,
                s = this.getFromEnv("xScale"),
                c = this.getLinkedParent(),
                u = this.config,
                f = this.getChildren("flagMarker"),
                d = s.showPlotOverTick() ? Math.round : Math.floor,
                h = c.getTranslation(),
                p = h ? h.x : 0,
                g = h ? h.y : 0;
              if ((0, r.defined)(u.firstTimeStamp))
                return (
                  (t -= p),
                  (e -= g),
                  (l =
                    (s.getDomainValue(t).getTime() - u.firstTimeStamp) /
                    u.timeStampGap),
                  u.timeStampGap <= 1 && -1 === l && (l = 0),
                  (n = Math.ceil(l)),
                  (i = Math.floor(l)),
                  f &&
                    (f = f[0]) &&
                    (o = f._checkPointOverMarker(l, t, e, u.availableWidth)),
                  (a = o) || (a = this._checkPointerOverColumn(n, t, e)),
                  a.hovered || (a = this._checkPointerOverColumn(i, t, e)),
                  a.hovered
                    ? (a.binIndexHovered = a.pointIndex)
                    : ((a.binIndexHovered = d(l)),
                      (a.pointObj =
                        u.dataInfo[a.binIndexHovered] ||
                        s.getBinBounds(t, u.firstTimeStamp))),
                  (u.binIndexHovered = a.binIndexHovered),
                  a
                );
            }),
            (e.prototype._getHoveredBin = function() {
              return this.config.binIndexHovered;
            }),
            (e.prototype._getTooltext = function(t, e, n) {
              var i,
                o = this.config,
                a = this.getName(),
                s = (function(t) {
                  switch (t) {
                    case "line":
                    case "smooth-line":
                    case "step-line":
                      return "line";
                    case "area":
                    case "smooth-area":
                    case "step-area":
                      return "area";
                  }
                })(o.type),
                c = o.dataInfo[n],
                u = this.getFromEnv("tooltipStyle") || {},
                f = (0, r.pluckNumber)(u["font-size"] || 11),
                d = t ? (e ? 1 : 0.5) : 1,
                h =
                  "continuous" === a
                    ? "line" === s
                      ? o.plotStyle.stroke
                      : o.plotStyle.fill
                    : o.style.fill;
              return this._isInvalidTooltext(c)
                ? ""
                : (c.tooltipValue ||
                    ((i = (0, l["default"])(c.yBaseValue)
                      ? c.yBaseValue >= 0
                        ? c.value - c.yBaseValue
                        : c.yBaseValue - c.value
                      : c.value),
                    (c.tooltipValue = (0, l["default"])(i)
                      ? o.formatterFn({
                          value: i,
                          type: "tooltip",
                          prefix: o.prefix,
                          suffix: o.suffix
                        })
                      : "")),
                  "<div style='margin-top:3px; margin-bottom:2px; height: 14px; opacity:" +
                    d +
                    "'>\n      <div style='float: left; font-size:" +
                    Math.round(0.72 * f) +
                    "px; line-height: " +
                    Math.round(1.27 * f) +
                    "px; color:" +
                    h +
                    "'>&#9609;&nbsp</div>\n      <div style='float: left;'>&nbsp" +
                    o.series +
                    "&nbsp</div>\n      <div style='float: right;'>&nbsp" +
                    (c.tooltipValue || "") +
                    "</div>\n      </div>");
            }),
            (e.prototype._isInvalidTooltext = function(t) {
              var e = this.config;
              if (
                !t ||
                t.endDate < e.actualStartDomain ||
                t.startDate > e.actualEndDomain
              )
                return !0;
            }),
            (e.prototype._getDateForToolText = function(t) {
              var e,
                n = this.config,
                i = n.dataInfo,
                o = this.getFromEnv("tooltipStyle") || {},
                a = (0, r.pluckNumber)(o["font-size"], 11),
                s = (0, r.pluck)(o.color, "5f5f5f"),
                c = "",
                u = i[t];
              return this._isInvalidTooltext(u)
                ? ""
                : (u.tooltextTime ||
                    (u.tooltextTime = n.timeFormatterFn({
                      type: "tooltip",
                      dateRange: u
                    })),
                  !u.totalStackSumTooltip &&
                    (0, l["default"])(u.totalStackSum) &&
                    (u.totalStackSumTooltip = n.formatterFn({
                      value: u.totalStackSum,
                      type: "tooltip",
                      prefix: n.prefix,
                      suffix: n.suffix
                    })),
                  (e =
                    "<div style='font-size: " +
                    (a + Math.round(0.1 * a)) +
                    "px; color: #" +
                    (0, r.getLightColor)(s, 76) +
                    "; margin-bottom: 2px; padding-left: 2px; font-weight:600;'>" +
                    u.tooltextTime +
                    "</div>"),
                  u.totalStackSumTooltip &&
                    (c =
                      "<div  margin-bottom: 2px; font-weight:600; padding-left: 2px;'>Total: " +
                      u.totalStackSumTooltip +
                      "</div>"),
                  e + c);
            }),
            (e.prototype._checkPointerOverColumn = function(t, e, n) {
              var i,
                o,
                r,
                a,
                l,
                s,
                c,
                u = this.config,
                f = u.plotBorderThickness;
              return (i = u.dataInfo[t])
                ? ((l = i.height < g ? g : i.height),
                  (a = i.width < g ? g : i.width),
                  (c = i.height < g ? i.y - (g - i.height) : i.y),
                  f !== undefined ? (s = f / 2) : (f = s = 0),
                  (r = n - c + s),
                  {
                    pointIndex: t,
                    hovered:
                      (o = e - i.x + s) >= 0 &&
                      o <= a + f &&
                      r >= 0 &&
                      r <= l + f,
                    pointObj: i,
                    component: this
                  })
                : { pointIndex: t, hovered: !1, component: this };
            }),
            (e.prototype._firePlotEvent = function(t, e, n, i) {
              var o = this.config.dataInfo,
                a = (o[e] && o[e].eventArgs) || {},
                l = this.getFromEnv("chart"),
                s = (0, r.getMouseCoordinate)(
                  l.getFromEnv("chart-container"),
                  n,
                  l
                ),
                c = (0, r.extend2)(s, a),
                u = void 0,
                f = void 0;
              switch (t) {
                case "fc-mouseover":
                  l.fireChartInstanceEvent(
                    "DataPlotRollOver",
                    c,
                    r.UNDEF,
                    r.UNDEF,
                    function(t, e) {
                      n.FusionChartsPreventEvent = !0;
                    }
                  );
                  break;
                case "fc-mouseout":
                  l.fireChartInstanceEvent("DataPlotRollOut", c);
                  break;
                case "fc-click":
                case "touchend":
                case "mouseup":
                  l.fireChartInstanceEvent("DataPlotClick", c),
                    (f = (u = l.getFromEnv()) && u.linkClickFN),
                    c.link && f && f.call({ link: c.link }, !0);
              }
            }),
            (e.prototype.setHoverInEffect = function(t, e) {
              this.getFromEnv("animationManager").setAnimationState(
                "mouseOver"
              ),
                this.setData(
                  e ? this.getHoverInConfig(t) : this.getHighlightConfig(t),
                  !0
                );
            }),
            (e.prototype.setHoverOutEffect = function(t) {
              this.getFromEnv("animationManager").setAnimationState("mouseOut"),
                this.setData(this.getHoverOutConfig(t), !0);
            }),
            (e.prototype.show = function() {
              this.setData({ visibility: "visible" }, !0);
            }),
            (e.prototype.hide = function() {
              this.setData({ visibility: "hidden" }, !0);
            }),
            (e.prototype.remove = function() {
              var e = this.getFromEnv("chart"),
                n = this.config;
              e.setYScaleLimit(n.scaleY.getId(), this.getId()),
                e.setXScaleLimit(n.scaleX.getId(), this.getId()),
                t.prototype.remove.call(this);
            }),
            e
          );
        })(o["default"]);
        e["default"] = m;
      },
      662: function(t, e, n) {
        "use strict";
        (e.__esModule = !0),
          (e["default"] = function(t) {
            var e = t.getFromEnv("dataSource"),
              n = t.config.series,
              s = void 0,
              c = t.config,
              u = c.measures,
              f = c.seriesInfo,
              d = f === undefined ? {} : f,
              h = c.enableMarkers,
              p = c.visibility,
              g = [];
            h &&
              (s = e.datamarker) &&
              (s.forEach(function(t) {
                var e = t.value,
                  i = t.series,
                  s = !0;
                if (
                  (e &&
                    ((0, o["default"])(e) && (e = [e]),
                    (0, r["default"])(e) &&
                      (0, o["default"])(e[0]) &&
                      (s = (0, a["default"])(e, u))),
                  (0, l["default"])(i))
                )
                  for (
                    var c = Object.keys(i), f = c.length, h = void 0;
                    s && f--;

                  )
                    (h = c[f]),
                      (0, o["default"])(i[h]) && i[h] !== d[h] && (s = !1);
                s && (g.push(t), (t.seriesname = n));
              }),
              0 !== g.length &&
                t
                  .attachChild(i["default"], "flagMarker")
                  .configure({ data: g, visibility: p }));
          });
        var i = s(n(663)),
          o = s(n(666)),
          r = s(n(668)),
          a = s(n(654)),
          l = s(n(669));
        function s(t) {
          return t && t.__esModule ? t : { default: t };
        }
      },
      663: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = u(n(141)),
          o = u(n(281)),
          r = n(125),
          a = n(129),
          l = n(664),
          s = n(132),
          c = u(n(665));
        function u(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function f(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var d = 16,
          h = 10,
          p = 16;
        (0, s.addDep)({
          name: "flagMarkerAnimation",
          type: "animationRule",
          extension: c["default"]
        });
        var g = (function(t) {
          function e() {
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            var n = (function(t, e) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !e || ("object" != typeof e && "function" != typeof e)
                ? t
                : e;
            })(this, t.call(this));
            return (
              (n._getMarkerBounds = function() {
                return { width: p, height: h + d };
              }),
              (n.config.styleInfo = {}),
              n
            );
          }
          return (
            f(e, t),
            (e.prototype.configure = function(e) {
              t.prototype.configure.call(this, e);
              var n,
                i,
                o = this.config,
                a = o.styleInfo;
              if ((e.data && (this.config.data = e.data), (i = e.style)))
                for (var l in ((n = a[e.index] || (a[e.index] = {})), i))
                  n[l] = i[l];
              (o.skipGrouping = e.skipGrouping),
                (0, r.defined)(e.visibility) && (o.visibility = e.visibility);
            }),
            (e.prototype.setHoverInEffect = function(t) {
              var e = this.config,
                n = e.markerInfo[t].markers,
                i = n[0].style || {},
                o = {},
                r = {},
                a = this.getFromEnv("getStyleDef");
              n.multipleMarkers
                ? (o = e.defaultHoverStyle)
                : (Object.assign(o, e.defaultHoverStyle, a(i["marker:hover"])),
                  Object.assign(r, e.defaultHoverStyle, a(i["text:hover"]))),
                this.getFromEnv("animationManager").setAnimationState(
                  "mouseOver"
                ),
                this.setData({
                  style: { marker: o, text: r },
                  index: t,
                  skipGrouping: !0
                });
            }),
            (e.prototype.setHoverOutEffect = function(t) {
              this.getFromEnv("animationManager").setAnimationState("mouseOut"),
                this.setData({
                  style: { marker: {}, text: {} },
                  index: t,
                  skipGrouping: !0
                });
            }),
            (e.prototype.__setDefaultConfig = function() {
              var t = this.config;
              (t["default-stroke-width"] = 1),
                (t["default-fill-opacity"] = 0.5),
                (t["default-stroke-opacity"] = 0.5),
                (t["default-font-color"] = "#ffffff"),
                (t["default-stroke-color-multiple"] = "#8c8c8c"),
                (t["default-tooltip-background"] = "#f2eded"),
                (t.defaultMarkerStyle = {
                  "stroke-width": 1,
                  "fill-opacity": 0.5,
                  "stroke-opacity": 0.5
                }),
                (t.defaultTextStyle = {
                  fill: "#ffffff",
                  "font-size": "12px",
                  "fill-opacity": 1,
                  "stroke-opacity": 1,
                  "text-anchor": "middle",
                  "font-weight": "normal",
                  "font-style": "normal"
                }),
                (t.defaultHoverStyle = {
                  opacity: 1,
                  "fill-opacity": 1,
                  "stroke-opacity": 1
                });
            }),
            (e.prototype.draw = function() {
              "visible" === this.config.visibility &&
                (this._createGroup(), this._drawMarkers());
            }),
            (e.prototype.getType = function() {
              return "dataMarker";
            }),
            (e.prototype.getName = function() {
              return "flagMarker";
            }),
            (e.prototype._checkPointOverMarker = function(t, e, n, i) {
              for (
                var o,
                  r,
                  a,
                  l,
                  s,
                  c,
                  u = this,
                  f = u.config,
                  d = f.dataInfo,
                  h = u._getMarkerBounds(),
                  p = f.markerInfo,
                  g = Math.ceil(t),
                  m = Math.floor(t),
                  y = i,
                  v = [g, m];
                y < h.width;

              )
                v.unshift(++g), v.push(--m), (y += i);
              return (
                v.forEach(function(t) {
                  !c &&
                    p[t] &&
                    ((o = d[t]),
                    (r = o.x),
                    (a = o.y),
                    (l = (o.width || 0) / 2),
                    e >= (s = r + l) - h.width / 2 &&
                      e <= s + h.width / 2 &&
                      n <= a &&
                      n >= a - h.height &&
                      (c = {
                        pointIndex: t,
                        hovered: !0,
                        pointObj: o,
                        markerObj: p[t],
                        component: u
                      }));
                }),
                c
              );
            }),
            (e.prototype._getTooltext = function(t) {
              var e,
                n,
                i = this.config,
                a = this.getFromEnv("tooltipStyle") || {},
                s = (0, r.pluckNumber)(a["font-size"], 10),
                c = i.markerInfo[t],
                u = c.markers,
                f = this.getStyleInformation(t),
                d = c.multipleMarkers;
              return (
                c.formatedTime ||
                  (d
                    ? ((e = this.getFromEnv("binDecider").getRangeThreshold()[0]
                        ._name),
                      (c.formatedTime = o["default"]
                        .formatter(
                          (0, l.getFilterdTimeFormat)(
                            "%b %d, %Y %H:%M:%S:%L:%f",
                            e
                          )
                        )
                        .format(new Date(c.startDate))))
                    : (c.formatedTime = u[0].time)),
                c.tooltipValue ||
                  (c.tooltipValue = this.getFromEnv("yScale").tickFormat(
                    4,
                    ".2s"
                  )(c.value)),
                (n =
                  "<div style='font-size: " +
                  (s + Math.round(0.2 * s)) +
                  "px'};'>" +
                  c.formatedTime +
                  "</div>"),
                (n +=
                  "<div style='margin-top:3px; margin-bottom:2px; height: 14px; font-size: " +
                  s +
                  "px;'>\n    <div style='float: left; font-size: 23px; line-height: 0.5; color:" +
                  f.marker.fill +
                  "'>■&nbsp</div>\n    <div style='float: left;'>" +
                  c.seriesname +
                  "&nbsp</div>\n    <div style='float: right;'>&nbsp" +
                  c.tooltipValue +
                  "</div>\n    </div>"),
                u.forEach(function(t) {
                  d &&
                    (n +=
                      "<div style='clear: both; margin-bottom:4px; font-size: " +
                      (s + Math.round(0.1 * s)) +
                      "px'};'>" +
                      t.time +
                      "</div>"),
                    (n += t.tooltext
                      ? "<div style='clear: both; margin-bottom:6px; font-size: " +
                        s +
                        "px;\n      background-color:" +
                        (d ? i["default-tooltip-background"] : "") +
                        ";'>" +
                        (0, r.parseUnsafeString)(t.tooltext) +
                        "</div>"
                      : "");
                }),
                n
              );
            }),
            (e.prototype.allocatePosition = function() {
              !this.config.skipGrouping && this._groupMarkers();
            }),
            (e.prototype._groupMarkers = function() {
              var t,
                e,
                n,
                i,
                r = this,
                a = r.getLinkedParent()._getRelevantInfo(),
                s = a.firstTimeStamp,
                c = a.dataInfo,
                u = r.config,
                f = (u.markerInfo = {}),
                d = r.getFromEnv("binDecider").getRangeThreshold()[0]._name,
                h = u.data;
              (u.dataInfo = c),
                h.forEach(function(a) {
                  (n = o["default"].parser(a.timeformat).parse(a.time)),
                    (i =
                      (0, l.getPlaceHolderIndex)(d) -
                      (0, l.getPlaceHolderIndex)(
                        (0, l.getMinPlaceHolder)(a.timeformat)
                      )),
                    n &&
                      i >= 0 &&
                      i <= 1 &&
                      (n = n.getTime()) >= s &&
                      ((e = r.getFromEnv("xScale").getBinIndex(n, s)),
                      c[e] &&
                        (!f[e] &&
                          (t = f[e] = {
                            markers: [],
                            id: a.seriesname + a.time,
                            startDate: c[e].startDate,
                            seriesname: a.seriesname
                          }),
                        t.markers.push(a),
                        t.markers.length > 1 && (t.multipleMarkers = !0)));
                });
            }),
            (e.prototype._createGroup = function() {
              this.addGraphicalElement({
                el: "group",
                container: { label: "group", id: "thermo", isParent: !0 },
                component: this,
                label: "group",
                attr: { name: "markerGroup-thermo" }
              });
            }),
            (e.prototype.getStyleInformation = function(t) {
              var e,
                n,
                i,
                o,
                l,
                s,
                c = this.config,
                u = c.styleInfo,
                f = c.markerInfo[t],
                d = this.getFromEnv("getStyleDef"),
                h = void 0,
                p = c.defaultMarkerStyle,
                g = c.defaultTextStyle,
                m = this.getLinkedParent()._getRelevantInfo(),
                y = this.getFromEnv("baseTextStyle");
              return (
                (o = {}),
                (l = {}),
                (e = (s = u[t] || {}).marker || {}),
                (h = d((i = f.markers[0].style || {}).marker)),
                (n = d(i.text)),
                f.multipleMarkers
                  ? (h.fill = h.stroke = f.fill =
                      c["default-stroke-color-multiple"])
                  : ((h.fill = f.fill = (0, a.convertColor)(
                      (0, r.pluck)(h.fill, m.fill),
                      100 *
                        (0, r.pluck)(
                          e["fill-opacity"],
                          h["fill-opacity"],
                          p["fill-opacity"]
                        )
                    )),
                    (h.stroke = f.stroke = (0, a.convertColor)(
                      (0, r.pluck)(h.stroke, m.fill),
                      100 * (0, r.pluck)(h["stroke-opacity"], p["fill-opacity"])
                    ))),
                Object.assign(o, p, h, s.marker),
                Object.assign(l, g, y, n, s.text),
                { marker: o, text: l }
              );
            }),
            (e.prototype._drawMarkers = function() {
              var t,
                e,
                n,
                i,
                o,
                r,
                a,
                l,
                s,
                c,
                u,
                f,
                g,
                m = this.config,
                y = m.dataInfo,
                v = {},
                b = m.markerInfo;
              for (o in b)
                (e = y[o]),
                  (u = (i = b[o]).multipleMarkers),
                  (a = i.id),
                  (t = e.y),
                  (r = e.x + (e.width || 0) / 2),
                  (c = t - h),
                  (v = this.getStyleInformation(o)),
                  (n = i.markers[0]),
                  (i.value = e.value),
                  (f = v.marker.opacity),
                  (g = v.text.opacity),
                  (s = { path: ["M", r, t, "V", c], opacity: f }),
                  this.addGraphicalElement(
                    {
                      el: "path",
                      container: { label: "group" },
                      id: a,
                      component: this,
                      attr: s,
                      css: v.marker,
                      label: "flagStick"
                    },
                    !0
                  ),
                  (s = {
                    path:
                      "M12.4444444,0 L1.55555556,0 C0.7,0 0,0.654545455 0,1.45454545 L0,10.8363636 C0,11.3454545 0.233333333,11.7817897 0.7,12.0727273 L7,16 L13.3,12.0727273 C13.6888889,11.7818182 14,11.3454545 14,10.8363636 L14,1.45454545 C14,0.654545455 13.3,0 12.4444444,0 Z",
                    transform: "t" + (r - p / 2 + 1) + "," + (c - d),
                    opacity: f
                  }),
                  this.addGraphicalElement(
                    {
                      el: "path",
                      container: { label: "group" },
                      id: a,
                      component: this,
                      attr: s,
                      css: v.marker,
                      label: "flagTriangle"
                    },
                    !0
                  ),
                  (u || (l = n.identifier)) &&
                    ((s = {
                      text: u ? i.markers.length : l.charAt(0),
                      x: r,
                      y: c - d / 2,
                      opacity: g
                    }),
                    this.addGraphicalElement(
                      {
                        el: "text",
                        container: { label: "group" },
                        id: a,
                        component: this,
                        attr: s,
                        css: v.text,
                        label: "markerText"
                      },
                      !0
                    ));
              this.styleInfo = {};
            }),
            e
          );
        })(i["default"]);
        e["default"] = g;
      },
      664: function(t, e, n) {
        "use strict";
        (e.__esModule = !0),
          (e.getFilterdTimeFormat = e.getPlaceHolderIndex = e.getMinPlaceHolder = undefined);
        var i,
          o = n(283),
          r = (i = o) && i.__esModule ? i : { default: i };
        var a =
            "%[" +
            Object.keys(r["default"])
              .sort(function(t, e) {
                return "-" === t ? 1 : "-" === e ? -1 : 0;
              })
              .join("") +
            "]?",
          l = function(t) {
            return new RegExp("" + a + t);
          },
          s = [
            "millisecond",
            "second",
            "minute",
            "hour",
            "day",
            "month",
            "year"
          ],
          c = {
            millisecond: 0,
            second: 1,
            minute: 2,
            hour: 3,
            day: 4,
            month: 5,
            year: 6
          },
          u = {
            millisecond: 0,
            second: 1,
            minute: 2,
            hour: 2,
            day: 4,
            month: 5,
            year: 6
          },
          f = (function(t) {
            var e = {},
              n = "";
            for (n in t) t.hasOwnProperty(n) && (e[n] = t[n].map(l));
            return e;
          })({
            millisecond: ["L", "Q"],
            second: ["S", "s"],
            minute: ["M"],
            hour: ["H", "I", "p"],
            day: ["d", "e", "j", "a", "A"],
            month: ["b", "B", "m"],
            year: ["y", "Y"]
          }),
          d = s.length;
        (e.getMinPlaceHolder = function() {
          var t =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : "",
            e = void 0,
            n = void 0,
            i = void 0,
            o = void 0;
          for (e = 0; e < d; e++)
            for (o = (i = f[s[e]]).length, n = 0; n < o; n++)
              if (t.match(i[n])) return s[e];
        }),
          (e.getPlaceHolderIndex = function(t) {
            return c[t];
          }),
          (e.getFilterdTimeFormat = function() {
            var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : "",
              e = arguments[1],
              n = u[e],
              i = function(e) {
                t = t.replace(e, "");
              },
              o = void 0;
            for (o = 0; o < n; o++) f[s[o]].forEach(i);
            return t.replace(/(\W+$)/, "").replace(/^,/, "");
          });
      },
      665: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(125);
        e["default"] = {
          "initial.dataMarker.flagMarker": function() {
            return {
              "*.appearing": function(t) {
                return [
                  {
                    initialAttr: { opacity: 0 },
                    finalAttr: {
                      opacity: (0, i.pluckNumber)(t.attr.opacity, 1)
                    },
                    slot: "final"
                  }
                ];
              }
            };
          }
        };
      },
      666: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(667),
          r = (i = o) && i.__esModule ? i : { default: i };
        e["default"] = function(t) {
          return (0, r["default"])(t) && t.length;
        };
      },
      667: function(t, e, n) {
        "use strict";
        (e.__esModule = !0),
          (e["default"] = function(t) {
            return "string" == typeof t;
          });
      },
      668: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(374),
          r = (i = o) && i.__esModule ? i : { default: i };
        e["default"] = function(t) {
          return (0, r["default"])(t) && t.length;
        };
      },
      669: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              };
        e["default"] = function(t) {
          return (
            null !== t &&
            "object" === (void 0 === t ? "undefined" : i(t)) &&
            !Array.isArray(t)
          );
        };
      },
      670: function(t, e, n) {
        "use strict";
        (e.__esModule = !0),
          (e["default"] = function(t) {
            return (
              "" !== t &&
              "number" == typeof +t &&
              !isNaN(+t) &&
              t !== Infinity &&
              t !== -Infinity
            );
          });
      },
      671: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(125);
        e["default"] = {
          "initial.dataset.timeseriesColumn": function() {
            var t = this,
              e = t.getFromEnv("yScale");
            return t.config.indices[3] !== undefined
              ? (function(t) {
                  var e = t.config.datasetIndex,
                    n = t.config.seriesLength;
                  return {
                    "rect.appearing": function(i) {
                      var o = i.index,
                        r = t.config.dataInfo[o].yBaseValue < 0;
                      return [
                        {
                          initialAttr: (function(t, e, n) {
                            return { y: n ? e : e + t, height: 0 };
                          })(i.attr.height, i.attr.y, r),
                          slot: "middle",
                          startEnd: (function(t, e) {
                            var n = 1 / e,
                              i = n * t;
                            return { start: i, end: i + n };
                          })(e, n),
                          effect: "linear"
                        }
                      ];
                    }
                  };
                })(t)
              : {
                  "rect.appearing": function(n) {
                    var o,
                      r,
                      a,
                      l,
                      s = (n.props && n.props.originalIndex) || n.index,
                      c = t.config.data[s],
                      u = n.attr,
                      f = e.getRangeValue(0);
                    return (
                      (o = u.y),
                      (r = u.height),
                      (l = Math.sign(o + r / 2 - f)),
                      (a = 1 === l ? o : o + r),
                      c && (c._posWRT0 = l),
                      [
                        {
                          initialAttr: function() {
                            var t = {};
                            return (t.y = a), (t.height = 0), t;
                          },
                          finalAttr: {},
                          startEnd: function() {
                            var t = i.animHelperFN.animByWeight(
                              n.index,
                              n.props.dataLength,
                              0.6
                            );
                            return t;
                          },
                          hookFn: function() {
                            this.attr({ opacity: 1 });
                          },
                          effect: "easeInOutQuart",
                          slot: "plot"
                        }
                      ]
                    );
                  },
                  "*": null
                };
          }
        };
      },
      672: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = a(n(673)),
          o = a(n(402)),
          r = a(n(674));
        function a(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var l = (function() {
          function t() {
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.xAccessor = function(t) {
                return t[0];
              }),
              (this.yAccessor = function(t) {
                return t[1];
              }),
              (this.isDefined = (0, o["default"])(!0)),
              (this.Curve = r["default"]),
              (this.ctx = null),
              (this._output = null);
          }
          return (
            (t.prototype.generate = function() {
              var t =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : [],
                e = 0,
                n = t.length,
                o = void 0,
                r = void 0,
                a = void 0;
              for (
                (null !== this.ctx && "undefined" != typeof this.ctx) ||
                  ((a = new i["default"]()),
                  (this._output = new this.Curve(a))),
                  e = 0;
                e <= n;
                ++e
              )
                (o = t[e]),
                  r
                    ? this.isDefined(o, e, t)
                      ? this._output.point(
                          this.xAccessor(o, e, t),
                          this.yAccessor(o, e, t)
                        )
                      : (this._output.lineEnd(), (r = !1))
                    : this.isDefined(o, e, t) &&
                      ((r = !0),
                      this._output.lineStart(),
                      this._output.point(
                        this.xAccessor(o, e, t),
                        this.yAccessor(o, e, t)
                      ));
              if (a) return (this._output = null), a.toString();
            }),
            (t.prototype.setXAccessor = function() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : function(t) {
                      return t[0];
                    };
              return (
                (this.xAccessor =
                  "function" == typeof t ? t : (0, o["default"])(+t)),
                this
              );
            }),
            (t.prototype.getXAccessor = function() {
              return this.xAccessor;
            }),
            (t.prototype.setYAccessor = function() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : function(t) {
                      return t[1];
                    };
              return (
                (this.yAccessor =
                  "function" == typeof t ? t : (0, o["default"])(+t)),
                this
              );
            }),
            (t.prototype.getYAccessor = function() {
              return this.yAccessor;
            }),
            (t.prototype.setDefined = function() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : (0, o["default"])(!0);
              return (
                (this.isDefined =
                  "function" == typeof t ? t : (0, o["default"])(!!t)),
                this
              );
            }),
            (t.prototype.getDefined = function() {
              return this.isDefined;
            }),
            (t.prototype.setCurve = function() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : r["default"];
              return (
                (this.Curve = t),
                ("undefined" == typeof this.ctx && null === this.ctx) ||
                  (this._output = new this.Curve(this.ctx)),
                this
              );
            }),
            (t.prototype.getCurve = function() {
              return this.Curve;
            }),
            (t.prototype.setContext = function(t) {
              return (
                null === t || void 0 === t
                  ? ((this.ctx = null), (this._output = this.ctx))
                  : ((this.ctx = t), (this._output = new this.Curve(this.ctx))),
                this
              );
            }),
            (t.prototype.getContext = function() {
              return this.ctx;
            }),
            t
          );
        })();
        e["default"] = l;
      },
      673: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = Math.PI,
          o = 2 * i,
          r = o - 1e-6,
          a = (function() {
            function t() {
              !(function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                this._clear();
            }
            return (
              (t.prototype.moveTo = function(t, e) {
                (this._x0 = this._x1 = +t),
                  (this._y0 = this._y1 = +e),
                  (this.pathStr += "M" + this._x0 + "," + this._y0);
              }),
              (t.prototype.lineTo = function(t, e) {
                (this._x1 = +t),
                  (this._y1 = +e),
                  (this.pathStr += "L" + this._x1 + "," + this._y1);
              }),
              (t.prototype.quadraticCurveTo = function(t, e, n, i) {
                (this._x1 = +n),
                  (this._y1 = +i),
                  (t = +t),
                  (e = +e),
                  (this.pathStr +=
                    "Q" + t + "," + e + "," + this._x1 + "," + this._y1);
              }),
              (t.prototype.bezierCurveTo = function(t, e, n, i, o, r) {
                (this._x1 = +o),
                  (this._y1 = +r),
                  (t = +t),
                  (e = +e),
                  (n = +n),
                  (i = +i),
                  (this.pathStr +=
                    "C" +
                    t +
                    "," +
                    e +
                    "," +
                    n +
                    "," +
                    i +
                    "," +
                    this._x1 +
                    "," +
                    this._y1);
              }),
              (t.prototype.rect = function(t, e, n, i) {
                (this._x0 = this._x1 = +t),
                  (this._y0 = this._y1 = +e),
                  (n = +n),
                  (i = +i),
                  (this.pathStr +=
                    "M" +
                    this._x0 +
                    "," +
                    this._y0 +
                    "h" +
                    n +
                    "v" +
                    i +
                    "h" +
                    -n +
                    "Z");
              }),
              (t.prototype.arcTo = function(t, e, n, o, r) {
                var a,
                  l,
                  s,
                  c,
                  u,
                  f,
                  d,
                  h = void 0,
                  p = void 0,
                  g = void 0,
                  m = void 0,
                  y = void 0,
                  v = void 0,
                  b = void 0,
                  x = void 0,
                  k = void 0;
                (t = +t),
                  (n = +n),
                  (e = +e),
                  (o = +o),
                  (r = +r),
                  (f = this._x1),
                  (d = this._y1),
                  (a = n - t),
                  (l = o - e),
                  (u = (s = f - t) * s + (c = d - e) * c),
                  (r = Math.max(r, 0)),
                  null === this._x1
                    ? ((this._x1 = t),
                      (this._y1 = e),
                      (this.pathStr += "M" + this._x1 + "," + this._y1))
                    : u > 1e-6 &&
                      (Math.abs(c * a - l * s) > 1e-6 && r
                        ? ((y = a * a + l * l),
                          (m = (h = n - f) * h + (p = o - d) * p),
                          (v = Math.sqrt(y)),
                          (g = Math.sqrt(u)),
                          (b =
                            (k =
                              r *
                              Math.tan(
                                (i - Math.acos((y + u - m) / (2 * v * g))) / 2
                              )) / g),
                          (x = k / v),
                          Math.abs(b - 1) > 1e-6 &&
                            (this.pathStr +=
                              "L" + (t + b * s) + "," + (e + b * c)),
                          (this._x1 = t + x * a),
                          (this._y1 = e + x * l),
                          (this.pathStr +=
                            "A" +
                            r +
                            "," +
                            r +
                            ",0,0," +
                            +(c * h > s * p) +
                            "," +
                            this._x1 +
                            "," +
                            this._y1))
                        : ((this._x1 = t),
                          (this._y1 = e),
                          (this.pathStr += "L" + this._x1 + "," + this._y1)));
              }),
              (t.prototype.arc = function(t, e, n, a, l) {
                var s =
                  arguments.length > 5 &&
                  arguments[5] !== undefined &&
                  arguments[5];
                (t = +t), (e = +e), (a = +a), (l = +l), (s = !!s);
                var c = (n = +n) * Math.cos(a),
                  u = n * Math.sin(a),
                  f = t + c,
                  d = e + u,
                  h = Number(!s),
                  p = s ? a - l : l - a;
                Math.max(n, 0),
                  null === this._x1
                    ? (this.pathStr += "M" + f + "," + d)
                    : (Math.abs(this._x1 - f) > 1e-6 ||
                        Math.abs(this._y1 - d) > 1e-6) &&
                      (this.pathStr += "L" + f + "," + d),
                  n &&
                    (p < 0 && (p = (p % o) + o),
                    p > r
                      ? ((this._x1 = f),
                        (this._y1 = d),
                        (this.pathStr +=
                          "A" +
                          n +
                          "," +
                          n +
                          ",0,1," +
                          h +
                          "," +
                          (t - c) +
                          "," +
                          (e - u)),
                        (this.pathStr +=
                          "A" +
                          n +
                          "," +
                          n +
                          ",0,1," +
                          h +
                          "," +
                          this._x1 +
                          "," +
                          this._y1))
                      : p > 1e-6 &&
                        ((this._x1 = t + n * Math.cos(l)),
                        (this._y1 = e + n * Math.sin(l)),
                        (this.pathStr +=
                          "A" +
                          n +
                          "," +
                          n +
                          ",0," +
                          +(p >= i) +
                          "," +
                          h +
                          "," +
                          this._x1 +
                          "," +
                          this._y1)));
              }),
              (t.prototype.closePath = function() {
                null !== this._x1 &&
                  ((this._x1 = this._x0),
                  (this._y1 = this._y0),
                  (this.pathStr += "Z"));
              }),
              (t.prototype.toString = function() {
                return this.pathStr;
              }),
              (t.prototype._clear = function() {
                (this._x0 = this._y0 = this._x1 = this._y1 = null),
                  (this.pathStr = "");
              }),
              t
            );
          })();
        e["default"] = a;
      },
      674: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = (function() {
          function t(e) {
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this._ctx = e);
          }
          return (
            (t.prototype.areaStart = function() {
              this._line = 0;
            }),
            (t.prototype.areaEnd = function() {
              this._line = NaN;
            }),
            (t.prototype.lineStart = function() {
              this._point = 0;
            }),
            (t.prototype.lineEnd = function() {
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._ctx.closePath(),
                (this._line = 1 - this._line);
            }),
            (t.prototype.point = function(t, e) {
              switch (((t = +t), (e = +e), this._point)) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._ctx.lineTo(t, e)
                      : this._ctx.moveTo(t, e);
                  break;
                case 1:
                  this._point = 2;
                default:
                  this._ctx.lineTo(t, e);
              }
            }),
            t
          );
        })();
        e["default"] = i;
      },
      675: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = l(n(673)),
          o = l(n(402)),
          r = l(n(674)),
          a = l(n(672));
        function l(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var s = (function() {
          function t() {
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.xTopAccessor = function(t) {
                return t[0];
              }),
              (this.xBaseAccessor = null),
              (this.yTopAccessor = (0, o["default"])(0)),
              (this.yBaseAccessor = function(t) {
                return t[1];
              }),
              (this.isDefined = (0, o["default"])(!0)),
              (this.Curve = r["default"]),
              (this.ctx = null),
              (this._output = null);
          }
          return (
            (t.prototype.generate = function() {
              var t =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : [],
                e = t.length,
                n = !1,
                o = new Array(e),
                r = new Array(e),
                a = void 0,
                l = void 0,
                s = void 0,
                c = void 0,
                u = void 0;
              for (
                (null !== this.ctx && "undefined" != typeof this.ctx) ||
                  ((u = new i["default"]()),
                  (this._output = new this.Curve(u))),
                  a = 0;
                a <= e;
                ++a
              ) {
                if (((c = t[a]), !(a < e && this.isDefined(c, a, t)) === n))
                  if ((n = !n))
                    (l = a), this._output.areaStart(), this._output.lineStart();
                  else {
                    for (
                      this._output.lineEnd(),
                        this._output.lineStart(),
                        s = a - 1;
                      s >= l;
                      --s
                    )
                      this._output.point(o[s], r[s]);
                    this._output.lineEnd(), this._output.areaEnd();
                  }
                n &&
                  ((o[a] = +this.xTopAccessor(c, a, t)),
                  (r[a] = +this.yTopAccessor(c, a, t)),
                  this._output.point(
                    this.xBaseAccessor ? +this.xBaseAccessor(c, a, t) : o[a],
                    this.yBaseAccessor ? +this.yBaseAccessor(c, a, t) : r[a]
                  ));
              }
              if (u) return (this._output = null), u.toString();
            }),
            (t.prototype.setXAccessor = function() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : function(t) {
                      return t[0];
                    };
              return (
                (this.xTopAccessor =
                  "function" == typeof t ? t : (0, o["default"])(+t)),
                (this.xBaseAccessor = null),
                this
              );
            }),
            (t.prototype.getXAccessor = function() {
              return this.xTopAccessor;
            }),
            (t.prototype.setXTopAccessor = function() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : function(t) {
                      return t[0];
                    };
              return (
                (this.xTopAccessor =
                  "function" == typeof t ? t : (0, o["default"])(+t)),
                this
              );
            }),
            (t.prototype.getXTopAccessor = function() {
              return this.xTopAccessor;
            }),
            (t.prototype.setXBaseAccessor = function(t) {
              return (
                (this.xBaseAccessor =
                  null === t || void 0 === t
                    ? null
                    : "function" == typeof t
                    ? t
                    : (0, o["default"])(+t)),
                this
              );
            }),
            (t.prototype.getXBaseAccessor = function() {
              return this.xBaseAccessor;
            }),
            (t.prototype.setYAccessor = function() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : function(t) {
                      return t[1];
                    };
              return (
                (this.yTopAccessor =
                  "function" == typeof t ? t : (0, o["default"])(+t)),
                (this.yBaseAccessor = null),
                this
              );
            }),
            (t.prototype.getYAccessor = function() {
              return this.yTopAccessor;
            }),
            (t.prototype.setYTopAccessor = function() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : function(t) {
                      return t[1];
                    };
              return (
                (this.yTopAccessor =
                  "function" == typeof t ? t : (0, o["default"])(+t)),
                this
              );
            }),
            (t.prototype.getYTopAccessor = function() {
              return this.yTopAccessor;
            }),
            (t.prototype.setYBaseAccessor = function(t) {
              return (
                (this.yBaseAccessor =
                  null === t || void 0 === t
                    ? null
                    : "function" == typeof t
                    ? t
                    : (0, o["default"])(+t)),
                this
              );
            }),
            (t.prototype.getYBaseAccessor = function() {
              return this.yBaseAccessor;
            }),
            (t.prototype.setDefined = function() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : (0, o["default"])(!0);
              return (
                (this.isDefined =
                  "function" == typeof t ? t : (0, o["default"])(!!t)),
                this
              );
            }),
            (t.prototype.getDefined = function() {
              return this.isDefined;
            }),
            (t.prototype.setCurve = function() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : r["default"];
              return (
                (this.Curve = t),
                null !== this.ctx &&
                  "undefined" != typeof this.ctx &&
                  (this._output = new this.Curve(this.ctx)),
                this
              );
            }),
            (t.prototype.getCurve = function() {
              return this.Curve;
            }),
            (t.prototype.setContext = function(t) {
              return (
                null === t || void 0 === t
                  ? ((this.ctx = null), (this._output = this._ctx))
                  : ((this.ctx = t), (this._output = new this.Curve(this.ctx))),
                this
              );
            }),
            (t.prototype.getContext = function() {
              return this.ctx;
            }),
            (t.prototype._areaLine = function() {
              return new a["default"]()
                .setDefined(this.isDefined)
                .setCurve(this.Curve)
                .setContext(this.ctx);
            }),
            (t.prototype.getLineXBase = function() {
              return this._areaLine()
                .setXAccessor(this.xTopAccessor)
                .setYAccessor(this.yTopAccessor);
            }),
            (t.prototype.getLineYBase = function() {
              return this._areaLine()
                .setXAccessor(this.xTopAccessor)
                .setYAccessor(this.yTopAccessor);
            }),
            (t.prototype.getLineYTop = function() {
              return this._areaLine()
                .setXAccessor(this.xTopAccessor)
                .setYAccessor(this.yTopAccessor);
            }),
            (t.prototype.getLineXTop = function() {
              return this._areaLine()
                .setXAccessor(this.xBaseAccessor)
                .setYAccessor(this.yBaseAccessor);
            }),
            t
          );
        })();
        e["default"] = s;
      },
      676: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = function(t) {
            return t < 0 ? -1 : 1;
          },
          o = (function() {
            function t(e) {
              !(function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this._ctx = e);
            }
            return (
              (t.prototype.areaStart = function() {
                this._line = 0;
              }),
              (t.prototype.areaEnd = function() {
                this._line = NaN;
              }),
              (t.prototype.lineStart = function() {
                (this._x0 = this._x1 = NaN),
                  (this._y0 = this._y1 = NaN),
                  (this._t0 = NaN),
                  (this._point = 0);
              }),
              (t.prototype.lineEnd = function() {
                switch (this._point) {
                  case 2:
                    this._ctx.lineTo(this._x1, this._y1);
                    break;
                  case 3:
                    this._monotoneCurveTo(this._t0, this._slope2(this._t0));
                }
                (this._line || (0 !== this._line && 1 === this._point)) &&
                  this._ctx.closePath(),
                  (this._line = 1 - this._line);
              }),
              (t.prototype.point = function(t, e) {
                var n = NaN;
                if (((e = +e), (t = +t) !== this._x1 || e !== this._y1)) {
                  switch (this._point) {
                    case 0:
                      (this._point = 1),
                        this._line
                          ? this._ctx.lineTo(t, e)
                          : this._ctx.moveTo(t, e);
                      break;
                    case 1:
                      this._point = 2;
                      break;
                    case 2:
                      (this._point = 3),
                        (n = this._slope3(t, e)),
                        this._monotoneCurveTo(this._slope2(n), n);
                      break;
                    default:
                      (n = this._slope3(t, e)),
                        this._monotoneCurveTo(this._t0, n);
                  }
                  (this._x0 = this._x1),
                    (this._x1 = t),
                    (this._y0 = this._y1),
                    (this._y1 = e),
                    (this._t0 = n);
                }
              }),
              (t.prototype._monotoneCurveTo = function(t, e) {
                var n = this._x0,
                  i = this._y0,
                  o = this._x1,
                  r = this._y1,
                  a = (o - n) / 3;
                this._ctx.bezierCurveTo(
                  n + a,
                  i + a * t,
                  o - a,
                  r - a * e,
                  o,
                  r
                );
              }),
              (t.prototype._slope2 = function(t) {
                var e = this._x1 - this._x0;
                return e ? ((3 * (this._y1 - this._y0)) / e - t) / 2 : t;
              }),
              (t.prototype._slope3 = function(t, e) {
                var n = this._x1 - this._x0,
                  o = t - this._x1,
                  r = (this._y1 - this._y0) / (n || (o < 0 && -0)),
                  a = (e - this._y1) / (o || (n < 0 && -0)),
                  l = (r * o + a * n) / (n + o);
                return (
                  (i(r) + i(a)) *
                    Math.min(Math.abs(r), Math.abs(a), 0.5 * Math.abs(l)) || 0
                );
              }),
              t
            );
          })();
        e["default"] = o;
      },
      677: function(t, e, n) {
        "use strict";
        function i(t, e) {
          if (!t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
        }
        function o(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        function r(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        e.__esModule = !0;
        var a = (function() {
            function t(e) {
              var n =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : 0.5;
              r(this, t), (this._ctx = e), (this._factor = n);
            }
            return (
              (t.prototype.areaStart = function() {
                this._line = 0;
              }),
              (t.prototype.areaEnd = function() {
                this._line = NaN;
              }),
              (t.prototype.lineStart = function() {
                (this._x = this._y = NaN), (this._point = 0);
              }),
              (t.prototype.lineEnd = function() {
                this._factor > 0 &&
                  this._factor < 1 &&
                  2 === this._point &&
                  this._ctx.lineTo(this._x, this._y),
                  (this._line || (0 !== this._line && 1 === this._point)) &&
                    this._ctx.closePath(),
                  this._line >= 0 &&
                    ((this._factor = 1 - this._factor),
                    (this._line = 1 - this._line));
              }),
              (t.prototype.point = function(t, e) {
                switch (((t = +t), (e = +e), this._point)) {
                  case 0:
                    (this._point = 1),
                      this._line
                        ? this._ctx.lineTo(t, e)
                        : this._ctx.moveTo(t, e);
                    break;
                  case 1:
                    this._point = 2;
                  default:
                    if (this._factor <= 0)
                      this._ctx.lineTo(this._x, e), this._ctx.lineTo(t, e);
                    else {
                      var n = this._x * (1 - this._factor) + t * this._factor;
                      this._ctx.lineTo(n, this._y), this._ctx.lineTo(n, e);
                    }
                }
                (this._x = t), (this._y = e);
              }),
              t
            );
          })(),
          l = (function(t) {
            function e(n) {
              return r(this, e), i(this, t.call(this, n, 1));
            }
            return o(e, t), e;
          })(a),
          s = (function(t) {
            function e(n) {
              return r(this, e), i(this, t.call(this, n, 0));
            }
            return o(e, t), e;
          })(a);
        (e.StepBefore = s), (e.StepAfter = l), (e["default"] = a);
      },
      678: function(t, e, n) {
        "use strict";
        function i(t) {
          var e = this.getFromEnv("yScale"),
            n = this.getFromEnv("xScale"),
            i = e.getDomain(),
            o = n.getDomain(),
            r = n.getRangeValue(o[0]),
            a = e.getRangeValue(i[0]),
            l = e.getRangeValue(i[1]),
            s = Math.abs(n.getRangeValue(o[1]) - r),
            c = a - l,
            u = [];
          return (
            u.push(r),
            u.push(c < 0 ? a : l),
            "init" === t ? u.push(0) : "canvas" === t && u.push(s),
            u.push(Math.abs(c)),
            u
          );
        }
        (e.__esModule = !0),
          (e["default"] = {
            "initial.dataset.continuous": function() {
              var t = i.call(this, "canvas"),
                e = i.call(this, "init");
              return {
                "path.appearing": function() {
                  return [
                    {
                      initialAttr: { "clip-rect": e },
                      finalAttr: { "clip-rect": t },
                      slot: "middle",
                      callback: function() {
                        this.attr({ "clip-rect": null });
                      }
                    }
                  ];
                },
                "topPath.appearing": function() {
                  return [
                    {
                      initialAttr: { "clip-rect": e },
                      finalAttr: { "clip-rect": t },
                      slot: "middle",
                      callback: function() {
                        this.attr({ "clip-rect": null });
                      }
                    }
                  ];
                },
                "*": null
              };
            }
          });
      },
      679: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = l(n(680)),
          o = l(n(683)),
          r = n(125),
          a = l(n(724));
        function l(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var s = (0, i["default"])({
            orientation: "bottom",
            align: "bottom",
            visible: !0,
            overlap: !0,
            dayinmajor: !0,
            stickycontextlabel: !1,
            scalemode: "random",
            skipinfo: { minor: !0 },
            offset: { x: 2, y: 2 }
          }),
          c = (0, i["default"])({
            orientation: "left",
            align: "left",
            visible: !0,
            overlap: !1
          });
        e["default"] = function(t) {
          var e = t.config,
            n = e.contextAxesX || [],
            l = e.contextAxesY || [],
            u = (e.contextPanels || []).map(function(t) {
              return (0, i["default"])(t, {
                x: t.x.map(function(t) {
                  return (0, i["default"])(s(t), (0, a["default"])(n, t.index));
                }),
                y: t.y.map(function(t) {
                  return (0,
                  i[
                    "default"
                  ])(c(t), (0, i["default"])((0, a["default"])(l, t.index), { plottype: "line" }));
                })
              });
            }),
            f = t.config.contextTableMap,
            d = t.getFocusLimit(),
            h = u.map(function(t) {
              return (0, i["default"])(t, { tableMap: f, values: d });
            });
          if (
            ((0, r.componentFactory)(
              t,
              o["default"],
              "timeNavigator",
              u.length,
              h
            ),
            (e.contextPanels = h),
            t.getChildren("timeNavigator"))
          ) {
            var p = t.getChildren("timeNavigator")[0],
              g = p.getChildren("brush"),
              m = p.getChildren("scroller");
            p.attachHandlers(),
              p.addExtEventListener(
                "focusLimitChanged",
                function() {
                  (p.config.values = t.getFocusLimit()),
                    p.setChildDimension(),
                    g[0] && g[0].asyncDraw && g[0].asyncDraw(),
                    m[0] && m[0].asyncDraw && m[0].asyncDraw();
                },
                t
              );
          }
        };
      },
      683: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(138),
          o = u(n(684)),
          r = u(n(660)),
          a = u(n(715)),
          l = u(n(718)),
          s = u(n(719)),
          c = n(125);
        function u(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function f(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var d = function(t) {
            var e = t.config;
            t.attachChild(o["default"], "canvas").configure({
              xConfigs: e.xConfigs,
              yConfigs: e.yConfigs,
              plotConfigs: e.plotConfigs,
              tableMap: e.tableMap,
              enableGridLines: !0,
              gridLineDirection: "vertical",
              enableMarkers: !1,
              enableReferenceLine: !1,
              leftBorder: e.border.left,
              bottomBorder: e.border.bottom,
              topBorder: e.border.top,
              rightBorder: e.border.right,
              enableTimeMarkers: !1,
              styleGridLines: 0,
              includeLegend: 0,
              enableMouseTracking: 0,
              isContext: !0,
              gridLineStyle: {
                stroke: "#F1F1F1",
                "stroke-width": "1",
                "stroke-opacity": "1"
              }
            });
          },
          h = function(t) {
            return t.scale;
          },
          p = (function(t) {
            function e() {
              !(function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e);
              var n = (function(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              })(this, t.call(this));
              return (
                (n._dimensions = {}),
                (n._translation = {}),
                (n._scrollerConfig = {}),
                n.registerFactory("timeNavigatorAxis", a["default"]),
                n.registerFactory("scroller", l["default"]),
                n.registerFactory("brush", s["default"]),
                n.registerFactory("canvas", d),
                n
              );
            }
            return (
              f(e, t),
              (e.prototype.__setDefaultConfig = function() {
                var e =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {};
                t.prototype.__setDefaultConfig.call(this, e);
                var n = this.config;
                (n.startX = 0),
                  (n.startY = 0),
                  (n.scrollerHeight = 18),
                  (n.scrollerStart = -17.5),
                  (n.scrollerButtonWidth = 17),
                  (n.yScalePadding = 20),
                  (n.border = { left: 1, right: 1, top: 1, bottom: 0 }),
                  (n.defaultButtonStyle = { fill: "#e3e3e3" }),
                  (n.defaultTrackStyle = { fill: "#f8f8f8" }),
                  (n.defaultScrollBarStyle = { fill: "#e3e3e3" });
              }),
              (e.prototype.setContextScale = function() {
                var t = this.config,
                  e = this.getFromEnv("chart").getContextLimit(),
                  n = void 0,
                  i = t.xConfigs.map(h)[0];
                (t.contextScale = n = i.copy()),
                  (n.minBin = i.minBin),
                  n.setDomain([e[0], e[1]]);
              }),
              (e.prototype.setDimension = function(t) {
                var e = this,
                  n = this.config,
                  i = this.getChildren("canvas")[0],
                  o = this.getChildren("brush")[0],
                  r = n.border,
                  a = o.getLabelSpace();
                (this._dimensions.width = t.width),
                  (this._dimensions.height = t.height),
                  i.setDimension({
                    left: n.startX,
                    top: a,
                    width: this._dimensions.width,
                    height: Math.max(
                      this._dimensions.height - a - n.scrollerHeight,
                      0
                    )
                  }),
                  this.getChildren("timeAxis").forEach(function(t) {
                    t.setTranslation(0, a), t.placeAxis();
                  }),
                  n.xConfigs.map(h).forEach(function(t) {
                    t.setRange([
                      r.left,
                      e._dimensions.width - (r.left / 2 + r.right / 2)
                    ]);
                  }),
                  n.yConfigs.map(h).forEach(function(t) {
                    return t.setRange([
                      e._dimensions.height -
                        n.scrollerHeight -
                        r.top -
                        r.bottom,
                      a
                    ]);
                  }),
                  this.setContextScale();
              }),
              (e.prototype.getPosition = function() {
                return {
                  x: this.config._translateX,
                  y: this.config._translateY
                };
              }),
              (e.prototype.setChildDimension = function() {
                var t = this.config,
                  e = this.getChildren("brush")[0],
                  n = e.getLabelSpace(),
                  i = this.getChildren("scroller")[0];
                e.setMaxBrushDimensions({
                  x: t.startX,
                  y: n,
                  width: this._dimensions.width,
                  height: this._dimensions.height - n - t.scrollerHeight
                }),
                  i.setDimension({
                    x: t.scrollerStart,
                    y: this._dimensions.height - t.scrollerHeight,
                    height: t.scrollerHeight,
                    width:
                      this._dimensions.width + 2 * t.scrollerButtonWidth + 1
                  }),
                  this.setScrollerConfig(
                    "width",
                    this._dimensions.width + 2 * t.scrollerButtonWidth + 1
                  ),
                  (i.config.scrollRatio = this.getScrollRatio()),
                  this.setScrollerConfig("scrollRatio", i.config.scrollRatio),
                  (i.config.scrollPosition = this.getScrollPosition()),
                  this.setScrollerConfig(
                    "scrollPosition",
                    i.config.scrollPosition
                  );
              }),
              (e.prototype.getDimension = function() {
                return this._dimensions;
              }),
              (e.prototype.configureAttributes = function() {
                var e =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {};
                t.prototype.configureAttributes.call(this, e);
                var n,
                  i,
                  o,
                  r,
                  a,
                  l,
                  s,
                  u,
                  f,
                  d = this.config,
                  h = this.getFromEnv("dataSource"),
                  p =
                    (h.chart && h.chart.style && h.chart.style.navigator) || {},
                  g = this.getFromEnv("getStyleDef"),
                  m = d.defaultButtonStyle,
                  y = d.defaultTrackStyle,
                  v = d.defaultScrollBarStyle;
                (d.style = p),
                  (n = d.style.scroller || {}),
                  (i = Object.assign({}, v, g(n.scrollbar))),
                  (r = Object.assign({}, m, g(n.button))),
                  (o = Object.assign({}, y, g(n.track))),
                  (a = i.fill),
                  (l = o.fill),
                  (s = r.fill),
                  (u = "#" + (0, c.getDarkColor)(s, 60)),
                  (f = "#" + (0, c.getDarkColor)(a, 60)),
                  e.x && (d.xConfigs = e.x),
                  e.y && (d.yConfigs = e.y),
                  e.tableMap && (d.tableMap = e.tableMap),
                  e.values && (d.values = e.values),
                  e.plots && (d.plotConfigs = e.plots),
                  this.addToEnv("timeNavigator", this),
                  this.addToEnv("timeNavigatorConfig", d),
                  this.setScrollerConfig("anchorFill", a),
                  this.setScrollerConfig("anchorStroke", "none"),
                  this.setScrollerConfig("trackFill", l),
                  this.setScrollerConfig("trackStroke", "none"),
                  this.setScrollerConfig("buttonFill", s),
                  this.setScrollerConfig("buttonStroke", "none"),
                  this.setScrollerConfig("buttonPointerFill", u),
                  this.setScrollerConfig("drawStripes", 1),
                  this.setScrollerConfig("stripesStroke", f),
                  this.setScrollerConfig("restrictScrollAnchor", 0);
              }),
              (e.prototype.attachHandlers = function() {
                var t = this,
                  e = void 0,
                  n = void 0,
                  i = void 0;
                t.addEventListener(
                  "fc-mouseover",
                  t.mouseoverHandler ||
                    (t.mouseoverHandler = function() {
                      clearTimeout(t.mouseoutTimer),
                        (e = this.getChildren("brush")[0]),
                        (n = e.getChildren("leftLabel")[0]),
                        (i = e.getChildren("rightLabel")[0]),
                        n.config.showLabel ||
                          i.config.showLabel ||
                          (n.setData({ showLabel: !0 }, !0),
                          i.setData({ showLabel: !0 }, !0));
                    })
                ),
                  t.addEventListener(
                    "fc-mouseup",
                    t.mouseupHandler ||
                      (t.mouseupHandler = function() {
                        e.config.pointerReleasedOnParent = !0;
                      })
                  ),
                  t.addEventListener(
                    "fc-mouseout",
                    t.mouseoutHandler ||
                      (t.mouseoutHandler = function() {
                        t.config.labelsGettingDragged ||
                          (t.mouseoutTimer = setTimeout(function() {
                            n.setData({ showLabel: !1 }, !0),
                              i.setData({ showLabel: !1 }, !0);
                          }, 20));
                      })
                  );
              }),
              (e.prototype.draw = function() {
                this.addGraphicalElement({
                  el: "group",
                  container: { id: "tropo", label: "group", isParent: !0 },
                  component: this,
                  label: "group",
                  attr: {
                    name: "timenav-tropo",
                    transform: this.config.translate
                  },
                  id: "tropo"
                }),
                  this.addGraphicalElement({
                    el: "group",
                    container: { id: "strato", label: "group", isParent: !0 },
                    component: this,
                    label: "group",
                    attr: {
                      name: "timenav-strato",
                      transform: this.config.translate
                    },
                    id: "strato"
                  }),
                  this.addGraphicalElement({
                    el: "group",
                    container: { id: "meso", label: "group", isParent: !0 },
                    component: this,
                    label: "group",
                    attr: {
                      name: "timenav-meso",
                      transform: this.config.translate
                    },
                    id: "meso"
                  }),
                  this.addGraphicalElement({
                    el: "group",
                    container: { id: "thermo", label: "group", isParent: !0 },
                    component: this,
                    label: "group",
                    attr: {
                      name: "timenav-thermo",
                      transform: this.config.translate
                    },
                    id: "thermo"
                  }),
                  this.addGraphicalElement(
                    {
                      el: "group",
                      attr: { name: "time-axis-group" },
                      id: "axisTopGroup",
                      label: "group",
                      container: { id: "strato", label: "group" },
                      component: this
                    },
                    !0
                  ),
                  this.addGraphicalElement(
                    {
                      el: "group",
                      attr: { name: " " },
                      id: "scrollerContainer",
                      label: "scroller",
                      container: { id: "thermo", label: "group" },
                      component: this
                    },
                    !0
                  ),
                  this.setChildDimension();
              }),
              (e.prototype.setScrollerConfig = function(t, e) {
                this._scrollerConfig[t] = e;
              }),
              (e.prototype.getScrollerConfig = function(t) {
                return t ? this._scrollerConfig[t] : this._scrollerConfig;
              }),
              (e.prototype.validateDomain = function(t) {
                var e = this.getFromEnv("chart"),
                  n = this.config.contextScale,
                  i = n.getDomainValue(t[0]),
                  o = n.getDomainValue(t[1]);
                e.setFocusLimit([i, o]);
              }),
              (e.prototype.getScrollRatio = function() {
                var t = this.getChildren("scroller")[0].config,
                  e = t.width,
                  n = t.height,
                  i = 2 * Math.min(n, 0.5 * e);
                return (
                  (this.getChildren("brush")[0].getCurrentBrushDimensions()
                    .width +
                    1) /
                  Math.max(0.001, e - i)
                );
              }),
              (e.prototype.getScrollPosition = function() {
                var t = this.getChildren("scroller")[0].config,
                  e = t.width,
                  n = t.height,
                  i = 2 * Math.min(n, 0.5 * e),
                  o = this.getChildren("brush")[0],
                  r = o.getCurrentBrushDimensions().x,
                  a = o.getCurrentBrushDimensions().width,
                  l = this.getScrollerConfig("scrollRatio") * (e - i),
                  s = e - (i + l);
                return (
                  (r +
                    a / 2 -
                    (i / 2 + l / 2 - this.config.scrollerButtonWidth)) /
                  s
                );
              }),
              (e.prototype.getDSdef = function() {
                return r["default"];
              }),
              e
            );
          })(i.SmartRenderer);
        e["default"] = p;
      },
      684: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = v(n(141)),
          o = n(129),
          r = n(125),
          a = v(n(685)),
          l = v(n(689)),
          s = v(n(691)),
          c = v(n(693)),
          u = v(n(695)),
          f = v(n(697)),
          d = v(n(698)),
          h = v(n(699)),
          p = v(n(700)),
          g = v(n(701)),
          m = v(n(712)),
          y = v(n(714));
        function v(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function b(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var x = "M",
          k = (function(t) {
            function e() {
              !(function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e);
              var n = (function(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              })(this, t.call(this));
              return (
                n.registerFactory("dataset", g["default"]),
                n.registerFactory("gridLine", s["default"]),
                n.registerFactory("timeMarker", a["default"]),
                n.registerFactory("referenceLine", l["default"]),
                n.registerFactory("mouseTracker", c["default"]),
                n.registerFactory("tooltip", u["default"], ["mouseTracker"]),
                n.registerFactory("wheel", f["default"]),
                n.registerFactory("dbTap", d["default"]),
                n.registerFactory("swipe", h["default"]),
                n.registerFactory("pinchZoom", p["default"]),
                n.registerFactory("verticalCrossline", m["default"], [
                  "dataset"
                ]),
                n.registerFactory("horizontalCrossline", y["default"], [
                  "dataset"
                ]),
                n
              );
            }
            return (
              b(e, t),
              (e.prototype.__setDefaultConfig = function() {
                t.prototype.__setDefaultConfig.call(this),
                  (this.config.padding = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                  }),
                  (this.config.multiSeriesDatasetMap = {});
              }),
              (e.prototype.getName = function() {
                return "canvas";
              }),
              (e.prototype.getType = function() {
                return "canvas";
              }),
              (e.prototype.configureAttributes = function(t) {
                var e,
                  n = this.config,
                  i = this.getFromEnv("dataSource"),
                  a = (i.chart && i.chart.style) || {},
                  l = this.getFromEnv("getStyleDef"),
                  s = n.borderConfig || (n.borderConfig = {});
                t.xConfigs && (this.config.xConfigs = t.xConfigs),
                  t.yConfigs && (this.config.yConfigs = t.yConfigs),
                  t.plotConfigs && (this.config.plotConfigs = t.plotConfigs),
                  t.tableMap && (this.config.tableMap = t.tableMap),
                  t.enableGridLines &&
                    (this.config.enableGridLines = t.enableGridLines),
                  t.isContext && (this.config.isContext = t.isContext),
                  (e = l(a.canvas)),
                  [
                    "leftBorder",
                    "topBorder",
                    "rightBorder",
                    "bottomBorder"
                  ].forEach(function(n) {
                    s[n] = t[n]
                      ? (0, r.pluckNumber)(e["stroke-width"], 2)
                      : s[n] || 0;
                  }),
                  (n.canvasBorderColor = (0, o.convertColor)(
                    (0, r.pluck)(e.stroke, "D6D6D6"),
                    (0, r.pluckNumber)(100 * e["stroke-opacity"], 100)
                  )),
                  (n.canvasBGColor = (0, o.convertColor)(
                    (0, r.pluck)(e.fill, "ffffff"),
                    (0, r.pluckNumber)(100 * e["fill-opacity"], 100)
                  )),
                  (n.opacity = e.opacity),
                  (n.enableMouseTracking = (0, r.pluckNumber)(
                    t.enableMouseTracking,
                    1
                  )),
                  (n.enableMarkers = (0, r.pluckNumber)(t.enableMarkers, 1)),
                  (n.enableTimeMarkers = (0, r.pluckNumber)(
                    t.enableTimeMarkers,
                    1
                  )),
                  (n.enableReferenceLine = (0, r.pluckNumber)(
                    t.enableReferenceLine,
                    1
                  )),
                  (n.enableInteraction = (0, r.pluckNumber)(
                    t.enableInteraction,
                    0
                  )),
                  (n.includeLegend = (0, r.pluckNumber)(t.includeLegend, 1)),
                  (n.gridLineDirection = (0, r.pluck)(
                    t.gridLineDirection,
                    "horizontal"
                  )),
                  (n.styleGridLines = (0, r.pluckNumber)(t.styleGridLines, 1)),
                  (n.gridLineStyle = (0, r.pluck)(t.gridLineStyle));
              }),
              (e.prototype.setDimension = function() {
                var t =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : {},
                  e = this.config,
                  n = e.borderConfig,
                  i = this.getFromEnv("chartConfig");
                (e.canvasTop = t.top || 0),
                  (e.canvasLeft = t.left || 0),
                  (e.canvasWidth = t.width || i.origRenderWidth),
                  (e.canvasHeight = t.height || i.origRenderHeight),
                  (e.canvasBGTop = e.canvasTop + n.topBorder),
                  (e.canvasBGLeft = e.canvasLeft + n.leftBorder),
                  (e.canvasBGWidth = Math.max(
                    0,
                    e.canvasWidth - n.rightBorder - n.leftBorder
                  )),
                  (e.canvasBGHeight = Math.max(
                    0,
                    e.canvasHeight - n.bottomBorder
                  ));
              }),
              (e.prototype.isWithinCanvas = function(t, e) {
                var n = this.config,
                  i = n.canvasBGLeft,
                  o = Math.floor(i + n.canvasBGWidth),
                  r = n.canvasBGTop,
                  a = n.padding,
                  l = Math.floor(r + n.canvasBGHeight),
                  s = this.getTranslation();
                return (
                  (t = t - (s.x || 0) + (a.left || 0)),
                  (e = e - (s.y || 0) + (a.top || 0)),
                  t > i && t < o && e > r && e < l
                );
              }),
              (e.prototype.draw = function() {
                this._createGroup(),
                  this._drawCanvas(),
                  !this.config.isContext && this._setTooltipBounding();
              }),
              (e.prototype._setTooltipBounding = function() {
                var t = this.config,
                  e = this.getTranslation(),
                  n = this.getFromEnv("toolTipController"),
                  i = t.canvasLeft + (e.x || 0),
                  o = t.canvasTop + (e.y || 0);
                n._setRelativePosition({
                  left: i,
                  right: i + t.canvasWidth,
                  top: o,
                  bottom: o + t.canvasHeight,
                  canvas: this
                });
              }),
              (e.prototype._drawCanvas = function() {
                var t,
                  e = this.config,
                  n = e.borderConfig,
                  i = e.canvasTop + n.topBorder / 2,
                  o = e.canvasLeft + n.leftBorder / 2,
                  r = e.canvasWidth - (n.rightBorder / 2 + n.leftBorder / 2),
                  a = e.canvasHeight - (n.bottomBorder / 2 + n.topBorder / 2),
                  l = {
                    leftBorder: [x, o, i, "V", i + a],
                    rightBorder: [x, o + r, i, "V", i + a],
                    topBorder: [x, o, i, "H", o + r],
                    bottomBorder: [x, o, i + a, "H", o + r]
                  };
                for (t in (this.addGraphicalElement(
                  {
                    el: "rect",
                    component: this,
                    label: "canvas",
                    container: { id: "tropo", label: "group", isParent: !1 },
                    attr: {
                      y: e.canvasBGTop,
                      x: e.canvasBGLeft,
                      width: e.canvasBGWidth,
                      height: e.canvasBGHeight,
                      fill: e.canvasBGColor,
                      "stroke-width": 0,
                      stroke: "none",
                      opacity: e.opacity
                    },
                    id: "background"
                  },
                  !0
                ),
                n))
                  this.addGraphicalElement(
                    {
                      el: "path",
                      component: this,
                      label: "canvas",
                      container: { id: "tropo", label: "group", isParent: !1 },
                      attr: {
                        path: l[t],
                        stroke: e.canvasBorderColor,
                        "stroke-width": n[t],
                        opacity: e.opacity
                      },
                      id: "border"
                    },
                    !0
                  );
              }),
              (e.prototype._createGroup = function() {
                var t = this.config,
                  e = t.padding,
                  n = t.canvasBGLeft - e.left,
                  i = t.canvasBGTop - e.top,
                  o = t.canvasBGWidth,
                  r = t.canvasBGHeight,
                  a = [
                    "M" + n + "," + i,
                    "L" + (n + o) + "," + i,
                    "L" + (n + o) + "," + (i + r),
                    "L" + n + "," + (i + r) + "Z"
                  ];
                this.addGraphicalElement({
                  el: "group",
                  container: { id: "tropo", label: "group", isParent: !0 },
                  component: this,
                  label: "group",
                  attr: {
                    name: "canvas-tropo",
                    transform: t.canvasTranslation
                  },
                  id: "tropo"
                }),
                  this.addGraphicalElement({
                    el: "group",
                    container: { id: "strato", label: "group", isParent: !0 },
                    component: this,
                    label: "strato",
                    attr: { name: "canvas-strato", transform: t.translate },
                    id: "strato"
                  }),
                  this.addGraphicalElement({
                    el: "group",
                    container: { id: "meso", label: "group", isParent: !0 },
                    component: this,
                    label: "meso",
                    attr: {
                      name: "canvas-meso",
                      transform: t.translate,
                      "clip-path": a
                    },
                    id: "meso"
                  }),
                  this.addGraphicalElement({
                    el: "group",
                    container: { id: "thermo", label: "group", isParent: !0 },
                    component: this,
                    label: "thermo",
                    attr: { name: "canvas-thermo", transform: t.translate },
                    id: "thermo"
                  }),
                  this.addToEnv("dsGroupclipPath", a);
              }),
              (e.prototype.setTranslation = function(t, e) {
                var n = this.config,
                  i = n.borderConfig,
                  o = n.padding;
                (n._translateX = t + i.leftBorder),
                  (n._translateY = e + i.topBorder),
                  (n.canvasTranslation =
                    "t" + n._translateX + "," + n._translateY),
                  (n._translateX += o.left),
                  (n._translateY += o.top),
                  (n.translate = "t" + n._translateX + "," + n._translateY);
              }),
              (e.prototype.getCanvasBorder = function() {
                return this.config.borderConfig;
              }),
              (e.prototype.setPadding = function() {
                var t =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {};
                Object.assign(this.config.padding, t);
              }),
              e
            );
          })(i["default"]);
        e["default"] = k;
      },
      685: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = a(n(686)),
          o = a(n(687)),
          r = a(n(688));
        function a(t) {
          return t && t.__esModule ? t : { default: t };
        }
        e["default"] = function(t) {
          var e = t.config.xConfigs;
          t.config.enableTimeMarkers &&
            e.forEach(function(e) {
              var n = e.timemarker || [],
                a = e.plot[0].value,
                l = t
                  .getFromEnv("chartConfig")
                  .dataTable.getSchema()
                  .find(function(t) {
                    return t.name === a;
                  }).format,
                s = [],
                c = [],
                u = [],
                f = t.getFromEnv("chart"),
                d = t.config.xConfigs[0].scale,
                h = void 0,
                p = void 0,
                g = void 0;
              n.forEach(function(t) {
                t.end ? ("full" === t.type ? c.push(t) : s.push(t)) : u.push(t);
              }),
                (h = t.attachChild(i["default"], "timeSpanMinMarker")),
                (p = t.attachChild(o["default"], "timeSpanFullMarker")),
                h.configure({ timeMarker: s, defaultFormat: l, xScale: d }),
                h.addExtEventListener(
                  "timeSpanMinMarkerHovered",
                  function(t) {
                    t.data.senderTimeMarker !== h &&
                      h.setData(
                        {
                          hoveredIndex: t.data.hoveredIndex,
                          hoveredFromOutside: !0
                        },
                        !0
                      );
                  },
                  f
                ),
                p.configure({ timeMarker: c, defaultFormat: l, xScale: d }),
                p.addExtEventListener(
                  "timeSpanFullMarkerHovered",
                  function(t) {
                    t.data.senderTimeMarker !== p &&
                      p.setData(
                        {
                          hoveredIndex: t.data.hoveredIndex,
                          hoveredFromOutside: !0
                        },
                        !0
                      );
                  },
                  f
                ),
                (g = t.attachChild(
                  r["default"],
                  "timeInstanceMarker"
                )).configure({ timeMarker: u, defaultFormat: l, xScale: d }),
                g.addExtEventListener(
                  "timeInstanceMarkerHovered",
                  function(t) {
                    t.data.senderTimeMarker !== g &&
                      g.setData(
                        {
                          hoveredMarkerIndex: t.data.hoveredMarkerIndex,
                          hoveredDomainIndex: t.data.hoveredDomainIndex,
                          hoveredFromOutside: !0
                        },
                        !0
                      );
                  },
                  f
                );
            });
        };
      },
      686: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(138),
          r = n(336),
          a = n(328),
          l = n(125),
          s = n(281),
          c = (i = s) && i.__esModule ? i : { default: i };
        function u(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        function f(t) {
          switch (t) {
            case "year":
            case "quarter":
            case "month":
            case "week":
            case "day":
            case "hour":
            case "minute":
            case "second":
            case "millisecond":
              return !0;
            default:
              return !1;
          }
        }
        function d(t, e) {
          switch (t) {
            case "year":
              return e ? r.utcYear : a.timeYear;
            case "quarter":
            case "month":
              return e ? r.utcMonth : a.timeMonth;
            case "week":
              return e ? r.utcWeek : a.timeWeek;
            case "day":
              return e ? r.utcDay : a.timeDay;
            case "hour":
              return e ? r.utcHour : a.timeHour;
            case "minute":
              return e ? r.utcMinute : a.timeMinute;
            case "second":
              return e ? r.utcSecond : a.timeSecond;
            case "millisecond":
              return e ? r.utcMillisecond : a.timeMillisecond;
          }
        }
        function h(t, e, n, i) {
          var o,
            r = !1,
            a = i.markerDim,
            l = void 0,
            s = void 0;
          for (s = 0, o = a.length; s < o; s++)
            if (
              e >= a[s].x &&
              e <= a[s].x + a[s].width &&
              n >= a[s].y &&
              n <= a[s].y + a[s].height
            ) {
              (r = !0), (t.config.previouslyHoveredIndex = i.index), (l = a[s]);
              break;
            }
          return {
            pointIndex: i.index,
            hovered: r,
            pointObj: { hoveredMarkerDim: l, index: r && s, type: i.type },
            previouslyHoveredIndex: t.config.previouslyHoveredIndex,
            component: t
          };
        }
        function p(t, e, n, i) {
          return (t >= n && t <= i) || (e <= i && e >= n) || (n >= t && i <= e);
        }
        var g = (function(t) {
          function e() {
            return (
              (function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              (function(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              })(this, t.apply(this, arguments))
            );
          }
          return (
            u(e, t),
            (e.prototype.__setDefaultConfig = function() {
              t.prototype.__setDefaultConfig.call(this),
                (this.config.defaultStyle = {
                  text: {
                    fill: "#808080",
                    opacity: 1,
                    "font-size": "10px",
                    "font-weight": "normal",
                    "font-style": "normal",
                    "text-anchor": "middle"
                  },
                  marker: {
                    fill: "#62b58f",
                    opacity: 1,
                    "fill-opacity": "1",
                    "stroke-opacity": "1",
                    "border-thickness": 0,
                    "border-padding": 1,
                    "border-radius": 0,
                    "border-dash": "none",
                    "stroke-width": "1"
                  }
                }),
                (this.config.toolTipOpacity = 0.9),
                (this.config.hoveredIndex = undefined),
                (this.config.previouslyHoveredIndex = undefined),
                (this.config.hoveredOpacity = 0.5),
                (this.config.valueArr = []),
                (this.config.textArr = []),
                (this.config.styleArr = []),
                (this.config.domainArr = []),
                (this.config.markerDetails = []),
                (this.config.type = "minimal");
            }),
            (e.prototype.getHoveredMarker = function(t, e) {
              var n = this.config,
                i = this.getLinkedParent().getTranslation(),
                o = void 0,
                r = n.markerDetails,
                a = void 0;
              for (
                t -= i.x, e -= i.y, a = r.length - 1;
                a >= 0 && !(o = h(this, t, e, r[a])).hovered;
                a--
              );
              return o;
            }),
            (e.prototype.setHoverInEffect = function(t) {
              var e = this.getFromEnv("chart");
              this.setData({ hoveredIndex: t }, !0),
                e.fireEvent("timeSpanMinMarkerHovered", {
                  senderTimeMarker: this,
                  hoveredIndex: t,
                  hoveredFromOutside: !0
                });
            }),
            (e.prototype.setHoverOutEffect = function() {
              var t = this.getFromEnv("chart");
              this.setData({ hoveredIndex: undefined }, !0),
                t.fireEvent("timeSpanMinMarkerHovered", {
                  senderTimeMarker: this,
                  hoveredIndex: undefined,
                  hoveredFromOutside: !0
                });
            }),
            (e.prototype.getToolTextConfiguration = function(t, e) {
              var n = this.config.toolTipOpacity,
                i = this.getFromEnv("tooltipStyle") || {},
                o = (0, l.pluckNumber)(i["font-size"], 11),
                r = 40,
                a = 26,
                s = this.getFromEnv("smartLabel"),
                c = void 0;
              return (
                s.setStyle({
                  "font-size": o + Math.round(0.1 * o),
                  "font-family": i["font-family"],
                  "font-weight": i["font-weight"]
                }),
                (r += (c = s.getOriSize(t[0])).width),
                (a += c.height),
                t[1]
                  ? (s.setStyle({
                      "font-size": o,
                      "font-family": i["font-family"],
                      "font-weight": i["font-weight"]
                    }),
                    (a += (c = s.getOriSize(t[1])).height),
                    (r = Math.max(r, c.width)),
                    {
                      toolText:
                        "<div style='opacity:" +
                        n +
                        "; text-align:center'>\n                  <div style='margin: 5px;font-size: " +
                        (o + Math.round(0.1 * o)) +
                        "px;'>" +
                        t[0] +
                        "</div>\n                  <div style='margin: 5px;'>" +
                        t[1] +
                        "</div>\n                  </div>",
                      dimensions: { width: r, height: "full" !== e ? a : 0 }
                    })
                  : {
                      toolText:
                        "<div style='opacity:" +
                        n +
                        "; text-align:center; padding: 5px;'>\n                <div style= 'font-size: " +
                        (o + Math.round(0.1 * o)) +
                        "px;'>" +
                        t[0] +
                        "</div>\n                </div>",
                      dimensions: { width: r, height: "full" !== e ? a : 0 }
                    }
              );
            }),
            (e.prototype.getMarkerAndLabelConfiguration = function(t, e) {
              var n,
                i,
                o,
                r,
                a = this.config,
                l = this.getLinkedParent().config,
                s = l.padding,
                c = s.left,
                u = s.right,
                f = s.top,
                d = s.bottom,
                h = this.config.xScale,
                g = h.getDomain(),
                m = a.valueArr[t],
                y = m.repeat,
                v = void 0,
                b = void 0,
                x = void 0,
                k = void 0,
                _ = void 0,
                w = void 0;
              return (
                (v = h.getRangeValue(m.start)),
                (w = h.getRangeValue(m.end)),
                (n =
                  "full" === (i = m.type)
                    ? l.canvasTop + 2 + f
                    : l.canvasTop + l.canvasHeight - 2 - f + d),
                (o =
                  "full" === i
                    ? l.canvasTop - l.padding.top
                    : l.canvasTop + l.canvasHeight - (e + 4) - f + d),
                (r = "full" === i ? l.canvasHeight : e + 4),
                (a.markerDetails[t].markerDim = []),
                (a.domainArr[t] = []),
                (a.markerDetails[t].index = t),
                !y && p(+m.start, +m.end, +g[0], +g[1])
                  ? (a.domainArr[t].push({ start: m.start, end: m.end }),
                    a.markerDetails[t].markerDim.push({
                      x: v - c + u,
                      y: o,
                      width: w - v,
                      height: r
                    }),
                    (b = v - c + u),
                    (k = m.start),
                    (_ = m.end))
                  : y &&
                    ((a.domainArr[t] = x = this.getAllValidDomains(
                      m.start,
                      m.end,
                      m.repeat
                    )),
                    x.length &&
                      ((b = h.getRangeValue(x[0].start) - c + u),
                      (k = x[0].start),
                      (_ = x[0].end),
                      x.forEach(function(e) {
                        (v = h.getRangeValue(e.start)),
                          (w = h.getRangeValue(e.end)),
                          a.markerDetails[t].markerDim.push({
                            x: v - c + u,
                            y: o,
                            width: w - v,
                            height: r
                          }),
                          y.multiplier < 0 &&
                            ((b = v - c + u), (k = e.start), (_ = e.end));
                      }))),
                (a.markerDetails[t].type = i),
                {
                  labelConfiguration: {
                    x: b,
                    y: n,
                    width: w - v - 4,
                    startDomain: k,
                    endDomain: _
                  }
                }
              );
            }),
            (e.prototype.getAllValidDomains = function(t, e, n) {
              var i = this.config.xScale.getDomain(),
                o = [];
              if (+t < +i[0] && n.multiplier > 0)
                for (; !p(+t, +e, +i[0], +i[1]) && +t <= +i[1]; )
                  (t = n.interval.offset(t, n.multiplier)),
                    (e = n.interval.offset(e, n.multiplier));
              for (; p(+t, +e, +i[0], +i[1]); )
                o.push({ start: t, end: e }),
                  (t = n.interval.offset(t, n.multiplier)),
                  (e = n.interval.offset(e, n.multiplier));
              return o;
            }),
            (e.prototype.configureAttributes = function() {
              var e =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              t.prototype.configureAttributes.call(this, e);
              var n,
                i = this.config,
                o = [],
                r = [],
                a = this.getFromEnv("isUTC"),
                s = [],
                u = void 0,
                h = void 0,
                p = void 0,
                g = void 0,
                m = void 0,
                y = void 0,
                v = this.getFromEnv("getStyleDef"),
                b = e.timeMarker || [],
                x = void 0;
              for (
                b.sort(function(t, e) {
                  return +new Date(t.start) - +new Date(e.start);
                }),
                  x = 0,
                  n = b.length;
                x < n;
                x++
              )
                if (
                  b[x].start &&
                  b[x].start !== l.BLANKSTRING &&
                  ((g = (0, l.pluck)(b[x].timeformat, e.defaultFormat)),
                  (p = (h = a
                    ? c["default"].utcParser(g)
                    : c["default"].parser(g)).parse(b[x].start)),
                  (m = h.parse(b[x].end)),
                  p && m)
                ) {
                  if (+p > +m) {
                    var k = [m, p];
                    (p = k[0]), (m = k[1]);
                  }
                  (u = {
                    start: p,
                    end: m,
                    startString: b[x].start,
                    endString: b[x].end,
                    timeFormat: g,
                    type: b[x].type || i.type
                  }),
                    b[x].repeat &&
                      b[x].repeat.unit &&
                      0 !== Math.floor(+b[x].repeat.multiplier) &&
                      f((y = b[x].repeat.unit.toLowerCase())) &&
                      (u.repeat = {
                        interval: d(y, a),
                        multiplier:
                          ("quarter" === y ? 3 : 1) *
                          (0, l.pluckNumber)(b[x].repeat.multiplier, 1)
                      }),
                    s.push(u),
                    o.push(v(b[x].style)),
                    r.push((0, l.pluck)(b[x].label, ""));
                }
              e.xScale && (i.xScale = e.xScale),
                (i.hoveredIndex = e.hoveredIndex),
                e.timeMarker &&
                  ((i.valueArr = s), (i.styleArr = o), (i.textArr = r));
            }),
            (e.prototype.getAllLabelsProps = function(t, e) {
              var n,
                i,
                o = this.config,
                r = this.getFromEnv("smartLabel"),
                a = o.valueArr,
                s = o.domainArr[t],
                u = void 0,
                f = void 0,
                d = o.markerDetails[t],
                h = void 0,
                p = void 0,
                g = this.getFromEnv("isUTC"),
                m = void 0,
                y = e.x,
                v = e.y,
                b = e.width,
                x = r._lineHeight,
                k = [],
                _ = void 0,
                w = void 0,
                S = o.textArr[t];
              for (
                S &&
                  ((h = r.getSmartText((0, l.parseUnsafeString)(S), b, x)),
                  k.push({
                    dim: { x: y + b / 2 + 2, y: v - 2 },
                    text: (0, l.parseUnsafeString)(h.text)
                  })),
                  n = a[t].timeFormat,
                  w = 0,
                  i = s.length;
                w < i;
                w++
              )
                (_ = []),
                  (u = s[w]),
                  (f = d.markerDim[w]),
                  (p =
                    (m = g
                      ? c["default"].utcFormatter(n)
                      : c["default"].formatter(n)).format(u.start) +
                    " - " +
                    m.format(u.end)),
                  _.push(p),
                  S && _.push(h.oriText),
                  (f.toolTextArr = _);
              return k;
            }),
            (e.prototype.createGroup = function() {
              var t = this.getLinkedParent().config,
                e = t.padding,
                n = t.canvasBGLeft - e.left,
                i = t.canvasBGTop - e.top,
                o = t.canvasBGWidth,
                r = t.canvasBGHeight,
                a = [
                  "M" + n + "," + i,
                  "L" + (n + o) + "," + i,
                  "L" + (n + o) + "," + (i + r),
                  "L" + n + "," + (i + r) + "Z"
                ];
              this.addGraphicalElement({
                el: "group",
                container: { id: "thermo", label: "group", isParent: !0 },
                component: this,
                label: "timeMarker",
                attr: { name: "time-marker-min-group", "clip-path": a },
                id: "timeMarker"
              });
            }),
            (e.prototype.drawAllLabels = function(t, e) {
              var n = this;
              t.forEach(function(t, i) {
                n.addGraphicalElement({
                  el: "text",
                  attr: {
                    text: t.text,
                    x: t.dim.x,
                    y: t.dim.y,
                    opacity: e.text.opacity
                  },
                  css: e.text,
                  container: { label: "timeMarker" },
                  id: "time-marker-label-" + i,
                  component: n,
                  label: "label"
                });
              });
            }),
            (e.prototype.draw = function() {
              var t,
                e = this.config,
                n = this.getFromEnv("smartLabel"),
                i = e.valueArr,
                o = void 0,
                r = this.getFromEnv("textStyle"),
                a = this.getFromEnv("baseTextStyle"),
                s = e.defaultStyle,
                c = e.styleArr,
                u = void 0,
                f = void 0,
                d = void 0,
                h = void 0,
                p = void 0,
                g = void 0;
              for (
                this.createGroup(), e.markerDetails = [], p = 0, t = i.length;
                p < t;
                p++
              )
                if (
                  ((e.markerDetails[p] = {}),
                  Object.assign(s.text, a),
                  (s.text["vertical-align"] =
                    "full" === i[p].type ? "top" : "bottom"),
                  (o = (0, l.extend2)(
                    (0, l.extend2)((0, l.extend2)({}, { text: r }), s),
                    c[p]
                  )),
                  n.setStyle({
                    "font-size": o.text["font-size"],
                    "font-family": o.text["font-family"],
                    "font-weight": o.text["font-weight"]
                  }),
                  n.getOriSize(e.textArr[p]),
                  (f = this.getMarkerAndLabelConfiguration(p, n._lineHeight)),
                  (d = e.markerDetails[p].markerDim),
                  (h = f.labelConfiguration),
                  d.length)
                ) {
                  for (
                    u = this.getAllLabelsProps(p, h, o), g = 0;
                    g < d.length;
                    g++
                  )
                    this.addGraphicalElement({
                      el: "rect",
                      attr: {
                        x: d[g].x,
                        y: d[g].y,
                        width: d[g].width,
                        height: d[g].height,
                        stroke: o.marker.stroke,
                        "stroke-width": o.marker["stroke-width"],
                        fill: o.marker.fill,
                        opacity:
                          e.markerDetails[p].index === e.hoveredIndex
                            ? 0.5 * o.marker.opacity
                            : 0.2 * o.marker.opacity,
                        "fill-opacity": (e.markerDetails[p].index,
                        e.hoveredIndex,
                        o.marker["fill-opacity"]),
                        "stroke-opacity": (e.markerDetails[p].index,
                        e.hoveredIndex,
                        o.marker["stroke-opacity"]),
                        "stroke-dasharray": o.marker["stroke-dasharray"]
                      },
                      container: { label: "timeMarker" },
                      id: "time-span-marker-" + p + g,
                      component: this,
                      label: "line"
                    });
                  this.drawAllLabels(u, o);
                }
            }),
            (e.prototype.getType = function() {
              return "timeMarker";
            }),
            (e.prototype.getName = function() {
              return "timeSpanMinMarker";
            }),
            e
          );
        })(o.SmartRenderer);
        e["default"] = g;
      },
      687: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(686);
        function r(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var a = (function(t) {
          function e() {
            return (
              (function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              (function(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              })(this, t.apply(this, arguments))
            );
          }
          return (
            r(e, t),
            (e.prototype.setHoverInEffect = function(t) {
              var e = this.getFromEnv("chart");
              this.setData({ hoveredIndex: t }, !0),
                e.fireEvent("timeSpanFullMarkerHovered", {
                  senderTimeMarker: this,
                  hoveredIndex: t,
                  hoveredFromOutside: !0
                });
            }),
            (e.prototype.setHoverOutEffect = function() {
              var t = this.getFromEnv("chart");
              this.setData({ hoveredIndex: undefined }, !0),
                t.fireEvent("timeSpanFullMarkerHovered", {
                  senderTimeMarker: this,
                  hoveredIndex: undefined,
                  hoveredFromOutside: !0
                });
            }),
            (e.prototype.createGroup = function() {
              var t = this.getLinkedParent().config,
                e = t.padding,
                n = t.canvasBGLeft - e.left,
                i = t.canvasBGTop - e.top,
                o = t.canvasBGWidth,
                r = t.canvasBGHeight,
                a = [
                  "M" + n + "," + i,
                  "L" + (n + o) + "," + i,
                  "L" + (n + o) + "," + (i + r),
                  "L" + n + "," + (i + r) + "Z"
                ];
              this.addGraphicalElement({
                el: "group",
                container: { id: "strato", label: "group", isParent: !0 },
                component: this,
                label: "timeMarker",
                attr: { name: "time-marker-full-group", "clip-path": a },
                id: "timeMarker"
              });
            }),
            (e.prototype.getName = function() {
              return "timeSpanFullMarker";
            }),
            e
          );
        })(((i = o) && i.__esModule ? i : { default: i })["default"]);
        e["default"] = a;
      },
      688: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(138),
          r = n(336),
          a = n(328),
          l = n(125),
          s = n(281),
          c = (i = s) && i.__esModule ? i : { default: i };
        function u(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        function f(t, e, n, i) {
          var o,
            r,
            a,
            l,
            s,
            c = !1;
          return (
            "#" === t[0] && ((t = t.substring(1)), (c = !0)),
            (r = ((o = parseInt(t, 16)) >> 16) + e) > 255
              ? (r = 255)
              : r < 0 && (r = 0),
            (l = ((o >> 8) & 255) + n) > 255 ? (l = 255) : l < 0 && (l = 0),
            (a = (255 & o) + i) > 255 ? (a = 255) : a < 0 && (a = 0),
            (s = (a | (l << 8) | (r << 16)).toString(16)),
            0 === r && (s = "00" + s),
            0 === l &&
              0 !== a &&
              (s = s.substring(0, 2) + "00" + s.substring(2)),
            (c ? "#" : "") + s
          );
        }
        function d(t) {
          switch (t) {
            case "year":
            case "quarter":
            case "month":
            case "week":
            case "day":
            case "hour":
            case "minute":
            case "second":
            case "millisecond":
              return !0;
            default:
              return !1;
          }
        }
        function h(t, e) {
          switch (t) {
            case "year":
              return e ? r.utcYear : a.timeYear;
            case "quarter":
            case "month":
              return e ? r.utcMonth : a.timeMonth;
            case "week":
              return e ? r.utcWeek : a.timeWeek;
            case "day":
              return e ? r.utcDay : a.timeDay;
            case "hour":
              return e ? r.utcHour : a.timeHour;
            case "minute":
              return e ? r.utcMinute : a.timeMinute;
            case "second":
              return e ? r.utcSecond : a.timeSecond;
            case "millisecond":
              return e ? r.utcMillisecond : a.timeMillisecond;
          }
        }
        function p(t, e, n, i) {
          var o,
            r = !1,
            a = i.markerDim,
            l = void 0,
            s = void 0;
          for (s = 0, o = a.length; s < o; s++)
            if (
              e >= a[s].x &&
              e <= a[s].x + a[s].width &&
              n >= a[s].y &&
              n <= a[s].y + a[s].height
            ) {
              (r = !0), (t.config.previouslyHoveredIndex = i.index), (l = a[s]);
              break;
            }
          return {
            pointIndex: i.index,
            hovered: r,
            pointObj: { hoveredMarkerDim: l, index: r && s },
            previouslyHoveredIndex: t.config.previouslyHoveredIndex,
            component: t
          };
        }
        var g = (function(t) {
          function e() {
            return (
              (function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              (function(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              })(this, t.apply(this, arguments))
            );
          }
          return (
            u(e, t),
            (e.prototype.__setDefaultConfig = function() {
              t.prototype.__setDefaultConfig.call(this),
                (this.config.defaultStyle = {
                  text: {
                    fill: "#808080",
                    "font-size": "11px",
                    "font-weight": "normal",
                    "font-style": "normal",
                    "vertical-align": "middle",
                    "text-anchor": "middle"
                  },
                  marker: {
                    fill: "#f8b8b7",
                    opacity: 1,
                    stroke: "#666666",
                    "border-radius": 2,
                    "stroke-width": "1"
                  }
                }),
                (this.config.toolTipOpacity = 0.9),
                (this.config.hoveredMarkerIndex = undefined),
                (this.config.hoveredDomainIndex = undefined),
                (this.config.previouslyHoveredIndex = undefined),
                (this.config.hoveredFromOutside = !1),
                (this.config.hoveredLabelFill = "#ffffff"),
                (this.config.hoveredMarkerRadius = "1.5"),
                (this.config.valueArr = []),
                (this.config.textArr = []),
                (this.config.styleArr = []),
                (this.config.domainArr = []),
                (this.config.repeatationArr = []),
                (this.config.markerDetails = []),
                (this.config.type = "minimal");
            }),
            (e.prototype.getHoveredMarker = function(t, e) {
              var n = this.config,
                i = this.getLinkedParent().getTranslation(),
                o = void 0,
                r = n.markerDetails,
                a = void 0;
              for (
                t -= i.x, e -= i.y, a = r.length - 1;
                a >= 0 && !(o = p(this, t, e, r[a])).hovered;
                a--
              );
              return o;
            }),
            (e.prototype.setHoverInEffect = function(t, e, n) {
              var i = this.getFromEnv("chart");
              this.setData(
                {
                  hoveredMarkerIndex: t,
                  hoveredDomainIndex: e,
                  hoveredFromOutside: n
                },
                !0
              ),
                i.fireEvent("timeInstanceMarkerHovered", {
                  senderTimeMarker: this,
                  hoveredMarkerIndex: t,
                  hoveredDomainIndex: e,
                  hoveredFromOutside: !0
                });
            }),
            (e.prototype.setHoverOutEffect = function() {
              var t = this.getFromEnv("chart");
              this.setData(
                {
                  hoveredMarkerIndex: undefined,
                  hoveredDomainIndex: undefined
                },
                !0
              ),
                t.fireEvent("timeInstanceMarkerHovered", {
                  senderTimeMarker: this,
                  hoveredMarkerIndex: undefined,
                  hoveredDomainIndex: undefined,
                  hoveredFromOutside: !0
                });
            }),
            (e.prototype.getToolTextConfiguration = function(t) {
              var e = this.config.toolTipOpacity,
                n = this.getFromEnv("tooltipStyle") || {},
                i = (0, l.pluckNumber)(n["font-size"], 11),
                o = 40,
                r = 46,
                a = this.getFromEnv("smartLabel"),
                s = {},
                c = void 0,
                u = void 0,
                f = void 0;
              if (
                (a.setStyle({
                  "font-size": i + Math.round(0.1 * i),
                  "font-family": n["font-family"],
                  "font-weight": n["font-weight"]
                }),
                (o += (f = a.getOriSize(t[0])).width),
                (r += f.height),
                (s.toolText =
                  "<div style='opacity:" +
                  e +
                  ";'>\n                         <div style='margin: 5px;font-size: " +
                  (i + Math.round(0.1 * i)) +
                  "px;'>" +
                  t[0] +
                  "</div>"),
                a.setStyle({
                  "font-size": i,
                  "font-family": n["font-family"],
                  "font-weight": n["font-weight"]
                }),
                t.length > 2)
              )
                for (s.toolText += "</br>", c = 1, u = t.length; c < u; c++)
                  t[c] &&
                    ((r += (f = a.getOriSize(t[c])).height),
                    (o = Math.max(o, f.width)),
                    (s.toolText +=
                      "<div style= 'margin: 5px;'>" +
                      c +
                      ". " +
                      t[c] +
                      "</div>"));
              else
                2 === t.length &&
                  t[1] &&
                  ((s.toolText += "</br>"),
                  (r += (f = a.getOriSize(t[1])).height),
                  (o = Math.max(o, f.width)),
                  (s.toolText +=
                    "<div style= 'margin: 5px;'>" + t[1] + "</div>"));
              return (
                (s.toolText += "</div>"),
                (s.dimensions = { width: o, height: r }),
                s
              );
            }),
            (e.prototype.reCalculateDimension = function(t, e) {
              var n = this.config,
                i = n.domainArr[t][e],
                o = this.config.xScale,
                r = this.getLinkedParent().config,
                a = r.padding,
                l = a.left,
                s = a.right,
                c = a.top,
                u = a.bottom,
                f = o.getRangeValue(i),
                d = n.markerDetails[t].markerDim[e],
                h = f - 6.6 - l + s,
                p = r.canvasBGTop + r.canvasBGHeight - 6.6 - c + u;
              (d.x = h),
                (d.y = p),
                (d.width = 13.2),
                (d.height = 13.2),
                (d.thresholdX =
                  h < r.canvasBGLeft
                    ? h - r.canvasBGLeft
                    : h + 13.2 > r.canvasBGLeft + r.canvasBGWidth
                    ? h + 13.2 - (r.canvasBGLeft + r.canvasBGWidth)
                    : 0),
                (d.thresholdY = 6.6);
            }),
            (e.prototype.getMarkerDimension = function(t, e) {
              var n = this.config.xScale,
                i = this.getLinkedParent().config,
                o = i.padding,
                r = o.left,
                a = o.right,
                l = o.top,
                s = o.bottom,
                c = n.getRangeValue(t) - e / 2 - r + a,
                u = (2 * e) / 2;
              return {
                x: c,
                y: i.canvasBGTop + i.canvasBGHeight - e / 2 - l + s,
                width: u,
                height: (2 * e) / 2,
                thresholdX:
                  c < i.canvasBGLeft
                    ? c - i.canvasBGLeft
                    : c + u > i.canvasBGLeft + i.canvasBGWidth
                    ? c + u - (i.canvasBGLeft + i.canvasBGWidth)
                    : 0,
                thresholdY: e / 2
              };
            }),
            (e.prototype.getMarkerAndLabelConfiguration = function(t, e) {
              var n = this,
                i = n.config,
                o = n.config.xScale.getDomain(),
                r = i.valueArr[t],
                a = r.repeat,
                l = void 0,
                s = e.text["line-height"];
              (i.markerDetails[t].markerDim = []),
                (i.markerDetails[t].index = t),
                (i.domainArr[t] = []),
                !a && +r.start >= +o[0] && +r.start <= +o[1]
                  ? (i.domainArr[t].push(r.start),
                    i.markerDetails[t].markerDim.push(
                      n.getMarkerDimension(r.start, s)
                    ))
                  : a &&
                    ((i.domainArr[t] = l = n.getAllValidDomains(
                      r.start,
                      r.repeat
                    )),
                    l.length &&
                      l.forEach(function(e) {
                        i.markerDetails[t].markerDim.push(
                          n.getMarkerDimension(e, s)
                        );
                      }));
            }),
            (e.prototype.getAllValidDomains = function(t, e) {
              var n = this.config.xScale.getDomain(),
                i = [];
              if (+t < +n[0] && e.multiplier > 0)
                for (; +t < +n[0]; ) t = e.interval.offset(t, e.multiplier);
              for (; +t <= +n[1]; )
                i.push(t), (t = e.interval.offset(t, e.multiplier));
              return i;
            }),
            (e.prototype.configureAttributes = function() {
              var e =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              t.prototype.configureAttributes.call(this, e);
              var n,
                i = this.config,
                o = [],
                r = [],
                a = this.getFromEnv("isUTC"),
                s = [],
                u = void 0,
                f = void 0,
                p = void 0,
                g = void 0,
                m = this.getFromEnv("getStyleDef"),
                y = e.timeMarker || [],
                v = void 0;
              for (v = 0, n = y.length; v < n; v++)
                y[v].start &&
                  y[v].start !== l.BLANKSTRING &&
                  ((g = (0, l.pluck)(y[v].timeformat, e.defaultFormat)),
                  (f = (a
                    ? c["default"].utcParser(g)
                    : c["default"].parser(g)
                  ).parse(y[v].start)) &&
                    ((u = {
                      start: f,
                      startString: y[v].start,
                      timeFormat: g,
                      type: y[v].type || i.type
                    }),
                    y[v].repeat &&
                      y[v].repeat.unit &&
                      0 !== Math.floor(+y[v].repeat.multiplier) &&
                      d((p = y[v].repeat.unit.toLowerCase())) &&
                      (u.repeat = {
                        interval: h(p, a),
                        multiplier:
                          ("quarter" === p ? 3 : 1) *
                          (0, l.pluckNumber)(y[v].repeat.multiplier, 1)
                      }),
                    s.push(u),
                    o.push(m(y[v].style)),
                    r.push(
                      (0, l.pluck)((0, l.parseUnsafeString)(y[v].label), "")
                    )));
              e.xScale && (i.xScale = e.xScale),
                (i.hoveredMarkerIndex = e.hoveredMarkerIndex),
                (i.hoveredDomainIndex = e.hoveredDomainIndex),
                (i.hoveredFromOutside = e.hoveredFromOutside),
                e.timeMarker &&
                  ((i.valueArr = s), (i.styleArr = o), (i.textArr = r));
            }),
            (e.prototype.createToolipConfiguration = function() {
              var t = this.config,
                e = t.markerDetails,
                n = t.domainArr,
                i = t.repeatationArr,
                o = t.valueArr,
                r = void 0,
                a = void 0,
                l = this.getFromEnv("isUTC"),
                s = void 0,
                u = void 0,
                f = [],
                d = void 0,
                h = void 0;
              for (d = 0; d < n.length; d++)
                for (
                  r = n[d],
                    a = o[d].timeFormat,
                    s = l
                      ? c["default"].utcFormatter(a)
                      : c["default"].formatter(a),
                    h = 0;
                  h < r.length;
                  h++
                )
                  (f = []),
                    (u = s.format(r[h])),
                    (f = f.concat([u], i[d][h].labels)),
                    (e[d].markerDim[h].toolTextArr = f);
            }),
            (e.prototype.getRepeatationArr = function() {
              var t = this.config,
                e = t.domainArr,
                n = t.textArr,
                i = t.markerDetails,
                o = void 0,
                r = void 0,
                a = [],
                l = void 0,
                s = void 0,
                c = void 0,
                u = void 0,
                f = void 0;
              for (u = 0; u < e.length; u++)
                for (s = e[u], a[u] = [], f = 0; f < s.length; f++)
                  for (
                    o = u,
                      c = s[f],
                      a[u][f] = {
                        domainValue: c,
                        labels: [n[u]],
                        markerDimIndex: f
                      };
                    o + 1 < e.length;

                  )
                    (l = e[o + 1].map(function(t) {
                      return +t;
                    })),
                      -1 !== (r = l.indexOf(+c)) &&
                        (a[u][f].labels.push(n[o + 1]),
                        (e[o + 1] = e[o + 1].filter(function(t) {
                          return +t != +c;
                        })),
                        (i[o + 1].markerDim = i[o + 1].markerDim.filter(
                          function(t, e) {
                            return e !== r;
                          }
                        ))),
                      o++;
              return a;
            }),
            (e.prototype.draw = function() {
              var t,
                e = this.config,
                n = e.valueArr,
                i = void 0,
                o = this.getFromEnv("smartLabel"),
                r = this.getFromEnv("textStyle"),
                a = e.defaultStyle,
                s = e.styleArr,
                c = void 0;
              for (
                this.addGraphicalElement({
                  el: "group",
                  container: { id: "thermo", label: "thermo", isParent: !0 },
                  component: this,
                  label: "timeMarkerHoverGroup",
                  attr: { name: "time-marker-hover-elem-group" },
                  id: "timeMarker"
                }),
                  this.addGraphicalElement({
                    el: "group",
                    container: { id: "thermo", label: "thermo", isParent: !0 },
                    component: this,
                    label: "timeMarker",
                    attr: { name: "time-marker-group" },
                    id: "timeMarker"
                  }),
                  e.markerDetails = [],
                  c = 0,
                  t = n.length;
                c < t;
                c++
              )
                (e.markerDetails[c] = {}),
                  (i = (0, l.extend2)(
                    (0, l.extend2)((0, l.extend2)({}, { text: r }), a),
                    s[c]
                  )),
                  o.setStyle({
                    "font-size": i.text["font-size"],
                    "font-family": i.text["font-family"],
                    "font-weight": i.text["font-weight"],
                    "font-style": i.text["font-style"]
                  }),
                  this.getMarkerAndLabelConfiguration(c, i);
              (e.repeatationArr = this.getRepeatationArr()),
                this.createToolipConfiguration(),
                this.drawTimeMarkers(),
                this.drawTimeMarkerLabels();
            }),
            (e.prototype.drawTimeMarkers = function() {
              var t = this.config,
                e = t.markerDetails,
                n = void 0,
                i = void 0,
                o = void 0,
                r = void 0,
                a = this.getLinkedParent().config,
                s = a.padding,
                c = t.styleArr,
                u = t.repeatationArr,
                d = this.getFromEnv("textStyle"),
                h = this.getFromEnv("baseTextStyle"),
                p = t.defaultStyle,
                g = void 0,
                m = void 0,
                y = void 0,
                v = void 0;
              for (y = 0; y < e.length; y++)
                for (
                  n = e[y].markerDim,
                    Object.assign(p.text, h),
                    g = (0, l.extend2)(
                      (0, l.extend2)((0, l.extend2)({}, { label: d }), p),
                      c[y]
                    ),
                    r = t.valueArr[y].type,
                    v = 0;
                  v < n.length;
                  v++
                )
                  u[y][v].labels.length < 2 &&
                    13.2 != +g.text["line-height"] &&
                    this.reCalculateDimension(y, v),
                    (i = n[v]),
                    (o =
                      y === t.hoveredMarkerIndex && v === t.hoveredDomainIndex),
                    (m = (c[y].marker && c[y].marker.stroke) || g.marker.fill),
                    (o || "full" === r) &&
                      (this.addGraphicalElement({
                        el: "path",
                        attr: {
                          path: [
                            "M",
                            i.x + i.width / 2,
                            i.y + i.height / 2,
                            "v",
                            -a.canvasHeight
                          ],
                          stroke: o ? f(m, -6, -70, -72) : m,
                          "stroke-width": g.marker["stroke-width"],
                          opacity: g.marker.opacity,
                          "stroke-opacity": g.marker["stroke-opacity"],
                          "stroke-dasharray": g.marker["stroke-dasharray"]
                        },
                        container: { label: "timeMarkerHoverGroup" },
                        id: "time-instance-marker-path-" + y + v,
                        component: this,
                        label: "path"
                      }),
                      this.addGraphicalElement({
                        el: "circle",
                        attr: {
                          cx: i.x + i.width / 2,
                          cy:
                            a.canvasTop +
                            t.hoveredMarkerRadius +
                            s.bottom -
                            s.top,
                          r: t.hoveredMarkerRadius,
                          fill: o
                            ? f(g.marker.fill, -6, -70, -72)
                            : g.marker.fill,
                          stroke: o ? f(m, -6, -70, -72) : m,
                          "stroke-width": g.marker["stroke-width"],
                          opacity: g.marker.opacity,
                          "fill-opacity": g.marker["fill-opacity"],
                          "stroke-opacity": g.marker["stroke-opacity"],
                          "stroke-dasharray": g.marker["stroke-dasharray"]
                        },
                        container: { label: "timeMarkerHoverGroup" },
                        id: "time-instance-marker-circle-" + y + v,
                        component: this,
                        label: "path"
                      })),
                    this.addGraphicalElement({
                      el: "rect",
                      attr: {
                        x: i.x,
                        y: i.y,
                        width: i.width,
                        height: i.height,
                        stroke: g.marker.stroke,
                        "stroke-width": g.marker["stroke-width"],
                        r: g.marker["border-radius"],
                        ry: g.marker["border-radius"],
                        fill: o
                          ? f(g.marker.fill, -6, -70, -72)
                          : g.marker.fill,
                        opacity: g.marker.opacity,
                        "fill-opacity": g.marker["fill-opacity"],
                        "stroke-opacity": g.marker["stroke-opacity"],
                        "stroke-dasharray": g.marker["stroke-dasharray"]
                      },
                      container: { label: "timeMarker" },
                      id: "time-instance-marker-rect-" + y + v,
                      component: this,
                      label: "rect"
                    });
            }),
            (e.prototype.drawTimeMarkerLabels = function() {
              var t = this.config,
                e = t.markerDetails,
                n = void 0,
                i = t.repeatationArr,
                o = void 0,
                r = void 0,
                a = void 0,
                s = void 0,
                c = t.styleArr,
                u = this.getFromEnv("textStyle"),
                f = t.defaultStyle,
                d = void 0,
                h = void 0,
                p = void 0;
              for (h = 0; h < i.length; h++)
                for (
                  o = i[h],
                    d = (0, l.extend2)(
                      (0, l.extend2)((0, l.extend2)({}, { label: u }), f),
                      c[h]
                    ),
                    p = 0;
                  p < o.length;
                  p++
                )
                  (a = o[p]),
                    (r =
                      h === t.hoveredMarkerIndex && p === t.hoveredDomainIndex),
                    (s = a.labels.length) > 1 &&
                      ((n = e[h].markerDim[a.markerDimIndex]),
                      this.addGraphicalElement({
                        el: "text",
                        attr: {
                          x: n.x + n.width / 2,
                          y: n.y + n.height / 2,
                          fill: r ? t.hoveredLabelFill : d.text.fill,
                          "font-size": d.text["font-size"],
                          "font-weight": d.text["font-weight"],
                          "font-style": d.text["font-style"],
                          "font-family": d.text["font-family"],
                          "text-anchor": d.text["text-anchor"],
                          "vertical-align": d.text["vertical-align"],
                          text: s,
                          opacity: d.text.opacity
                        },
                        container: { label: "timeMarker" },
                        id: "time-instance-marker-text-" + h + p,
                        component: this,
                        label: "text"
                      }));
            }),
            (e.prototype.getType = function() {
              return "timeMarker";
            }),
            (e.prototype.getName = function() {
              return "timeInstanceMarker";
            }),
            e
          );
        })(o.SmartRenderer);
        e["default"] = g;
      },
      689: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(690),
          r = (i = o) && i.__esModule ? i : { default: i };
        e["default"] = function(t) {
          t.config.yConfigs.forEach(function(e) {
            var n = e.scale;
            t.config.enableReferenceLine &&
              Array.isArray(e.referenceline) &&
              e.referenceline.forEach(function(i) {
                var o = t.attachChild(r["default"], "referenceLine");
                o.addEventListener("fc-mouseover", o.hoverInHandler),
                  o.addEventListener("fc-mouseout", o.hoverOutHandler),
                  o.configure({
                    yScale: n,
                    direction: "left" === e.align ? "right" : "left",
                    formatterFn: e.formatterFn,
                    prefix: e.formatLabelPrefix,
                    suffix: e.formatLabelSuffix,
                    referenceLine: i
                  });
              });
          });
        };
      },
      690: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(138),
          r = n(125),
          a = n(670),
          l = (i = a) && i.__esModule ? i : { default: i };
        function s(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var c = "L",
          u = "h",
          f = (function(t) {
            function e() {
              !(function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e);
              var n = (function(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              })(this, t.call(this));
              return (
                (n.hoverInHandler = function() {
                  n.setState("hovered", !0), n.asyncDraw();
                }),
                (n.hoverOutHandler = function() {
                  n.setState("hovered", !1), n.asyncDraw();
                }),
                n
              );
            }
            return (
              s(e, t),
              (e.prototype.__setDefaultConfig = function() {
                t.prototype.__setDefaultConfig.call(this),
                  (this.config.defaultStyle = {
                    text: {
                      fill: "#5F5F5F",
                      "vertical-align": "top",
                      opacity: "1",
                      "fill-opacity": "1",
                      "stroke-opacity": "1",
                      "font-size": "11px",
                      "font-style": "normal"
                    },
                    marker: {
                      fill: "#B70000",
                      stroke: "#B70000",
                      "fill-opacity": "1",
                      "stroke-opacity": "1",
                      opacity: "1",
                      borderthickness: 0,
                      borderpadding: 2,
                      borderradius: 0,
                      borderdash: "none",
                      "stroke-width": "1"
                    }
                  }),
                  (this.config.direction = "right");
              }),
              (e.prototype.configureAttributes = function() {
                var e =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {};
                t.prototype.configureAttributes.call(this, e);
                var n = this.config,
                  i = this.getFromEnv("getStyleDef"),
                  o = e.referenceLine || {};
                (n.markerStyle = i(o.style && o.style.marker)),
                  (n.textStyle = i(o.style && o.style.text)),
                  (n.label = (0, r.pluck)(o.label, "")),
                  (n.value = (0, r.pluckNumber)(o.value, 0)),
                  e.yScale && (n.yScale = e.yScale),
                  e.formatterFn && (n.formatterFn = e.formatterFn),
                  e.prefix && (n.prefix = e.prefix),
                  e.suffix && (n.suffix = e.suffix),
                  e.direction && (n.direction = e.direction);
              }),
              (e.prototype.getPathArr = function() {
                var t = this.config,
                  e = t.direction,
                  n = this.getLinkedParent().config,
                  i = t.yScale,
                  o = i.getDomain(),
                  r = void 0,
                  a = t.value,
                  s = [];
                if (
                  (0, l["default"])(o[0]) &&
                  (0, l["default"])(o[1]) &&
                  a >= o[0] &&
                  a <= o[1]
                )
                  switch (((r = i.getRangeValue(a)), e)) {
                    case "left":
                      s = [
                        "M",
                        n.canvasLeft +
                          n.canvasWidth -
                          n.borderConfig.rightBorder,
                        r,
                        "h",
                        -n.canvasWidth
                      ];
                      break;
                    case "right":
                      s = [
                        "M",
                        n.canvasLeft + n.borderConfig.leftBorder,
                        r,
                        "h",
                        n.canvasWidth
                      ];
                      break;
                    case "top":
                    case "bottom":
                      s = [
                        "M",
                        r,
                        n.canvasTop,
                        "v",
                        n.canvasHeight - n.borderConfig.bottomBorder
                      ];
                  }
                return s;
              }),
              (e.prototype.getLabelsProps = function(t, e) {
                var n = this.config,
                  i = n.direction,
                  o = { isValidLabel: !1 };
                if (t.length && n.label)
                  switch (((o.isValidLabel = !0), i)) {
                    case "top":
                      (o.x = t[1]), (o.y = t[2]), (o.textAnchor = "start");
                      break;
                    case "bottom":
                      (o.x = t[1]), (o.y = t[4]), (o.textAnchor = "start");
                      break;
                    case "left":
                      (o.x = t[1] + t[4] + 3),
                        (o.y = t[2] + e.borderpadding),
                        (o.textAnchor = "start");
                      break;
                    case "right":
                      (o.x = t[1] + t[4] - e.borderpadding - 1),
                        (o.y = t[2] + e.borderpadding),
                        (o.textAnchor = "end");
                  }
                return o;
              }),
              (e.prototype.getBulbPoints = function(t) {
                var e = this.config.direction,
                  n = {};
                if (t)
                  switch (e) {
                    case "left":
                      (n.cx = t[1] + t[4] - 3), (n.cy = t[2]);
                      break;
                    case "right":
                      (n.cx = t[1] + t[4] + 3), (n.cy = t[2]);
                  }
                return n;
              }),
              (e.prototype.getTagProps = function(t, e) {
                var n,
                  i,
                  o = this.config,
                  r = o.value,
                  a = this.getFromEnv("smartLabel"),
                  l = this.getLinkedParent().config,
                  s = l.canvasLeft,
                  f = l.canvasWidth,
                  d = l.canvasLeft + f,
                  h = void 0,
                  p = void 0,
                  g = {},
                  m = {},
                  y = o.direction;
                switch (
                  ((i = o.yScale.getRangeValue(r)),
                  (h =
                    (h = (n = a.getSmartText(r)).width + 2 * t.borderpadding) >
                    29
                      ? h
                      : 29),
                  y)
                ) {
                  case "right":
                    (p = [
                      "M",
                      s + l.borderConfig.leftBorder,
                      i,
                      c,
                      s - 5,
                      i,
                      c,
                      s - 10,
                      i - n.height / 2 - 2 * e.marker.borderpadding,
                      u,
                      -h,
                      "v",
                      n.height + 4 * e.marker.borderpadding,
                      u,
                      h,
                      c,
                      s - 5,
                      i,
                      "z"
                    ]),
                      (g.x = s - 10 - h / 2),
                      (g.y = i);
                    break;
                  case "left":
                    (p = [
                      "M",
                      d,
                      i,
                      c,
                      d + 5,
                      i,
                      c,
                      d + 10,
                      i - n.height / 2 - 2 * e.marker.borderpadding,
                      u,
                      h,
                      "v",
                      n.height + 4 * e.marker.borderpadding,
                      u,
                      -h,
                      c,
                      d + 5,
                      i,
                      "z"
                    ]),
                      (g.x = d + 10 + h / 2),
                      (g.y = i);
                }
                return (m.tagPath = p), (m.tagTextPosition = g), m;
              }),
              (e.prototype.draw = function() {
                var t,
                  e,
                  n,
                  i,
                  o,
                  a = this.config,
                  l = a.value,
                  s = this.getFromEnv("smartLabel"),
                  c = a.defaultStyle,
                  u = void 0,
                  f = void 0,
                  d = void 0,
                  h = void 0,
                  p = a.textStyle,
                  g = a.markerStyle,
                  m = a.label,
                  y = void 0,
                  v = void 0,
                  b = void 0,
                  x = this.getState("hovered"),
                  k = this.getFromEnv("baseTextStyle");
                this.addGraphicalElement(
                  {
                    el: "group",
                    container: { id: "thermo", label: "group", isParent: !0 },
                    component: this,
                    label: "refLine",
                    attr: { name: "reference-line-thermo" },
                    id: "thermo"
                  },
                  !0
                ),
                  this.addGraphicalElement(
                    {
                      el: "group",
                      container: { id: "thermo", label: "refLine" },
                      component: this,
                      label: "refLine-thermo-hover-group",
                      attr: { name: "reference-line-hover-elem-group" },
                      id: "thermo"
                    },
                    !0
                  ),
                  this.addGraphicalElement(
                    {
                      el: "group",
                      container: { id: "thermo", label: "refLine" },
                      component: this,
                      label: "refLine-thermo-group",
                      attr: { name: "reference-line-group" },
                      id: "thermo"
                    },
                    !0
                  ),
                  Object.assign(c.text, k),
                  (t = (0, r.extend2)((0, r.extend2)({}, c.text), p)),
                  (e = (0, r.extend2)((0, r.extend2)({}, c.marker), g)),
                  (f = (0, r.extend2)({}, e)),
                  (n = this.getPathArr()),
                  (i = this.getLabelsProps(n, e)),
                  (o = this.getBulbPoints(n)),
                  n.length &&
                    (this.addGraphicalElement(
                      {
                        el: "path",
                        attr: {
                          path: n,
                          stroke: e.stroke || e.fill,
                          "fill-opacity": e["fill-opacity"],
                          "stroke-opacity": e["stroke-opacity"],
                          "stroke-width": e["stroke-width"],
                          "stroke-linecap": e["stroke-linecap"],
                          opacity: e.opacity * (x ? 1 : 0.4),
                          "stroke-dasharray": e["stroke-dasharray"] || "none"
                        },
                        container: { label: "refLine-thermo-group" },
                        component: this,
                        label: "line"
                      },
                      !0
                    ),
                    (f["stroke-width"] = x ? e["stroke-width"] || 1 : 0),
                    (f.stroke = (g && g.stroke) || "#595959"),
                    this.addGraphicalElement({
                      el: "circle",
                      attr: { cx: o.cx, cy: o.cy, r: 3 },
                      container: { label: "refLine-thermo-group" },
                      css: f,
                      component: this,
                      label: "anchor"
                    }),
                    x &&
                      ((u = (0, r.extend2)(
                        (0, r.extend2)((0, r.extend2)({}, c), {
                          text: { fill: "#f3f3f3" }
                        }),
                        { text: p, marker: g }
                      )),
                      i.isValidLabel &&
                        this.addGraphicalElement(
                          {
                            el: "text",
                            attr: {
                              text: m,
                              x: i.x,
                              y:
                                i.y -
                                e.borderpadding *
                                  ("top" === t["vertical-align"] ? -1 : 1),
                              "font-family": t["font-family"],
                              "font-weight": t["font-weight"],
                              "font-style": t["font-style"],
                              "font-size": t["font-size"],
                              opacity: t.opacity,
                              "fill-opacity": t["fill-opacity"],
                              "stroke-opacity": +t["stroke-opacity"],
                              fill: t.fill,
                              "text-anchor": i.textAnchor,
                              "vertical-align": t["vertical-align"],
                              "text-bound": [
                                e.fill,
                                e.fill,
                                e.borderthickness,
                                e.borderpadding,
                                e.borderradius,
                                e.borderdash,
                                0.2
                              ]
                            },
                            container: { label: "refLine-thermo-hover-group" },
                            component: this,
                            label: "label"
                          },
                          !0
                        ),
                      s.setStyle({
                        fontFamily: t["font-family"],
                        fontWeight: t["font-weight"],
                        fontSize: t["font-size"],
                        fontStyle: t["font-style"]
                      }),
                      (v = (y = this.getTagProps(e, u)).tagPath),
                      (b = y.tagTextPosition),
                      !(d = (0, r.extend2)({}, u.marker)).stroke &&
                        (d.stroke = "none"),
                      this.addGraphicalElement(
                        {
                          el: "path",
                          attr: { path: v },
                          container: { label: "refLine-thermo-hover-group" },
                          css: d,
                          component: this,
                          label: "tag"
                        },
                        !0
                      ),
                      !(h = (0, r.extend2)({}, u.text))["text-anchor"] &&
                        (h["text-anchor"] = "middle"),
                      (h["vertical-align"] = "middle"),
                      this.addGraphicalElement(
                        {
                          el: "text",
                          attr: {
                            text: a.formatterFn({
                              value: l,
                              type: "referenceline",
                              prefix: a.prefix,
                              suffix: a.suffix
                            }),
                            x: b.x,
                            y: b.y
                          },
                          css: h,
                          container: { label: "refLine-thermo-hover-group" },
                          component: this,
                          label: "tag-text"
                        },
                        !0
                      )));
              }),
              e
            );
          })(o.SmartRenderer);
        e["default"] = f;
      },
      691: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(692),
          r = (i = o) && i.__esModule ? i : { default: i };
        e["default"] = function(t) {
          t.config.enableGridLines &&
            t
              .attachChild(r["default"], "gridLine")
              .configure({
                direction: t.config.gridLineDirection,
                styleGridLines: t.config.styleGridLines,
                defaultStyle: t.config.gridLineStyle
              });
        };
      },
      692: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(138),
          o = n(125);
        function r(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var a = /\S/,
          l = "stroke-dasharray",
          s = (function(t) {
            function e() {
              return (
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                (function(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                })(this, t.apply(this, arguments))
              );
            }
            return (
              r(e, t),
              (e.prototype.__setDefaultConfig = function() {
                t.prototype.__setDefaultConfig.call(this),
                  (this.config.direction = "horizontal"),
                  (this.config.showgridlines = 1),
                  (this.config.showboundarygridlines = 1),
                  (this.config.style = {}),
                  (this.config.defaultStyle = {
                    stroke: "#EFEFEF",
                    "stroke-width": "1",
                    "stroke-opacity": "1"
                  });
              }),
              (e.prototype.configureAttributes = function() {
                var e =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {};
                t.prototype.configureAttributes.call(this, e);
                var n = this.config;
                for (var i in e)
                  e.hasOwnProperty(i) &&
                    "undefined" != typeof e[i] &&
                    (n[i] = e[i]);
              }),
              (e.prototype.getPathArr = function() {
                var t,
                  e,
                  n,
                  i,
                  o,
                  r = this.config,
                  a = this.getFromEnv("getStyleDef"),
                  l = this.getLinkedParent().config,
                  s = [],
                  c = void 0,
                  u = void 0,
                  f = void 0,
                  d = void 0,
                  h = void 0,
                  p = void 0,
                  g = void 0,
                  m = [],
                  y = void 0,
                  v = void 0;
                if (
                  ("vertical" !== r.direction
                    ? ((p = (c = l.yConfigs[0]).scale),
                      (h = "H"),
                      (u = l.canvasBGLeft),
                      (f = p.getRangeValue),
                      (d = l.canvasBGLeft + l.canvasBGWidth))
                    : ((h = "V"),
                      (u = (p = (c = l.xConfigs[0]).scale).getRangeValue),
                      (f = l.canvasBGTop + l.canvasBGHeight - l.padding.top),
                      (d = l.canvasBGTop - l.padding.top)),
                  c.tickarguments && (m = c.tickarguments),
                  (e = c.style || {}),
                  (r.style = a(e["grid-line"] || {})),
                  m.push(c.skipinfo || {}),
                  m.push(c.dayinmajor || !1),
                  (n = (t = p).ticks.apply(t, m)),
                  r.showgridlines)
                )
                  for (g = p.getDomain(), y = 0, v = n.length; y < v; y++)
                    (r.showboundarygridlines || (0 !== y && y !== v - 1)) &&
                      (+(i = n[y]) >= +(o = g)[0] && +i <= +o[1]) &&
                      s.push([
                        "M",
                        "function" == typeof u ? u.call(p, n[y]) : u,
                        "function" == typeof f ? f.call(p, n[y]) : f,
                        h,
                        d
                      ]);
                return s;
              }),
              (e.prototype.draw = function() {
                var t = this,
                  e = t.config,
                  n = e.styleGridLines,
                  i = t.getPathArr(),
                  r = (0, o.extend2)(
                    (0, o.extend2)({}, e.defaultStyle),
                    n && e.style
                  );
                r[l] &&
                  (r[l] =
                    "string" == typeof r[l]
                      ? r[l]
                          .split(" ")
                          .filter(function(t) {
                            return a.test(t);
                          })
                          .map(function(t) {
                            return +t;
                          })
                      : r[l]),
                  t.addGraphicalElement({
                    el: "group",
                    container: { id: "strato", label: "strato", isParent: !0 },
                    component: t,
                    label: "gridLine",
                    attr: { name: "grid-line-group" },
                    id: "gridLine"
                  }),
                  i.forEach(function(e, n) {
                    t.addGraphicalElement({
                      el: "path",
                      attr: { path: e },
                      css: r,
                      container: { label: "gridLine" },
                      id: "grid-line-" + n,
                      component: t,
                      label: "line"
                    });
                  });
              }),
              e
            );
          })(i.SmartRenderer);
        e["default"] = s;
      },
      693: function(t, e, n) {
        "use strict";
        (e.__esModule = !0),
          (e["default"] = function(t) {
            var e = void 0;
            t.config.enableMouseTracking &&
              ((e = t.attachChild(r["default"], "mouseTracker")),
              t.addToEnv("mouseTracker", e),
              e.config.mouseTrackerEventAdded ||
                (e.addEvents(), (e.config.mouseTrackerEventAdded = !0)));
          });
        var i,
          o = n(694),
          r = (i = o) && i.__esModule ? i : { default: i };
      },
      694: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(430),
          r = (i = o) && i.__esModule ? i : { default: i },
          a = n(125);
        function l(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var s = function(t) {
            return function() {
              t.deactivate(),
                t.fireEvent("canvasHovered", { hoveredInfo: {}, e: {} }),
                clearTimeout(t.domainValidationTimer),
                (t.domainValidationTimer = setTimeout(function() {
                  t.activate();
                }, 100));
            };
          },
          c = (function(t) {
            function e() {
              !(function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e);
              var n,
                i = (function(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                })(this, t.call(this));
              return (
                (i.handler = ((n = i),
                function(t) {
                  n.mouseEvtHandler(t);
                })),
                i.eventsList.push("fc-mouseout"),
                (i.active = !0),
                i
              );
            }
            return (
              l(e, t),
              (e.prototype.mouseEvtHandler = function(t) {
                if (this.active) {
                  var e,
                    n,
                    i,
                    o,
                    r,
                    l,
                    s,
                    c,
                    u = t.originalEvent,
                    f = this.getLinkedParent(),
                    d = f.getChild(undefined, "dataset"),
                    h = f.getChild(undefined, "timeInstanceMarker")[0],
                    p = f.getChild(undefined, "timeSpanMinMarker")[0],
                    g = f.getChild(undefined, "timeSpanFullMarker")[0],
                    m = d.length;
                  if (
                    ((n = (e = (0, a.getMouseCoordinate)(
                      this.getFromEnv("chart-container"),
                      u,
                      this.getFromEnv("chart")
                    )).chartX),
                    (i = e.chartY),
                    (l = h.getHoveredMarker(n, i)) && l.hovered)
                  )
                    this.fireEvent("canvasHovered", {
                      hoveredInfo: l,
                      e: t,
                      i: m,
                      chartX: n,
                      chartY: i
                    });
                  else if (
                    (l &&
                      l.previouslyHoveredIndex !== undefined &&
                      (this.fireEvent("canvasHovered", {
                        hoveredInfo: l,
                        e: t,
                        i: m,
                        chartX: n,
                        chartY: i
                      }),
                      (h.config.previouslyHoveredIndex = undefined)),
                    (l = p.getHoveredMarker(n, i)) && l.hovered)
                  )
                    this.fireEvent("canvasHovered", {
                      hoveredInfo: l,
                      e: t,
                      i: m,
                      chartX: n,
                      chartY: i
                    });
                  else {
                    for (
                      l &&
                      l.previouslyHoveredIndex !== undefined &&
                      (this.fireEvent("canvasHovered", {
                        hoveredInfo: l,
                        e: t,
                        i: m,
                        chartX: n,
                        chartY: i
                      }),
                      (p.config.previouslyHoveredIndex = undefined));
                      m--;

                    )
                      "hidden" !== (o = d[m]).config.visibility &&
                        (r = o._getHoveredPlot && o._getHoveredPlot(n, i)) &&
                        r.hovered &&
                        ((s = r), (c = m));
                    if (!s) {
                      if ((l = g.getHoveredMarker(n, i)) && l.hovered)
                        return void this.fireEvent("canvasHovered", {
                          hoveredInfo: l,
                          e: t,
                          i: m,
                          chartX: n,
                          chartY: i
                        });
                      l &&
                        l.previouslyHoveredIndex !== undefined &&
                        (this.fireEvent("canvasHovered", {
                          hoveredInfo: l,
                          e: t,
                          i: m,
                          chartX: n,
                          chartY: i
                        }),
                        (g.config.previouslyHoveredIndex = undefined));
                    }
                    this.fireEvent("canvasHovered", {
                      hoveredInfo: s || r,
                      e: t,
                      i: c,
                      chartX: n,
                      chartY: i
                    });
                  }
                }
              }),
              (e.prototype.addEvents = function() {
                var t,
                  e = this.getLinkedParent(),
                  n = this.eventsList;
                for (t in (this._removeListners(), n))
                  e.addEventListener(n[t], this.handler);
                (this.config.onDomainValidated = s(this)),
                  this.addExtEventListener(
                    "domainValidated",
                    this.config.onDomainValidated,
                    this.getFromEnv("chart")
                  );
              }),
              (e.prototype._removeListners = function() {
                var t,
                  e = this.getLinkedParent(),
                  n = this.eventsList;
                for (t in n) e.removeEventListener(n[t], this.handler);
                this.removeExtEventListener(
                  "domainValidated",
                  this.config.onDomainValidated,
                  this.getFromEnv("chart")
                );
              }),
              (e.prototype.remove = function() {
                var e;
                this._removeListners();
                for (var n = arguments.length, i = Array(n), o = 0; o < n; o++)
                  i[o] = arguments[o];
                (e = t.prototype.remove).call.apply(e, [this].concat(i));
              }),
              (e.prototype.activate = function() {
                this.active = !0;
              }),
              (e.prototype.deactivate = function() {
                (this.active = !1), s();
              }),
              e
            );
          })(r["default"]);
        e["default"] = c;
      },
      695: function(t, e, n) {
        "use strict";
        (e.__esModule = !0),
          (e["default"] = function(t) {
            t.config.enableMouseTracking &&
              t.attachChild(r["default"], "tooltipHover").configure();
          });
        var i,
          o = n(696),
          r = (i = o) && i.__esModule ? i : { default: i };
      },
      696: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(141),
          r = (i = o) && i.__esModule ? i : { default: i },
          a = n(125);
        function l(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var s = (function(t) {
          function e() {
            return (
              (function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              (function(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              })(this, t.apply(this, arguments))
            );
          }
          return (
            l(e, t),
            (e.prototype.configure = function() {
              t.prototype.configure.call(this);
              var e,
                n = this.config,
                i = this.getFromEnv("chart-attrib"),
                o = this.getFromEnv("mouseTracker");
              (n.showTooltip = (0, a.pluckNumber)(i.showtooltip, 1)),
                !n.eventAdded &&
                  this.addExtEventListener(
                    "canvasHovered",
                    ((e = this),
                    (n.eventAdded = !0),
                    function() {
                      switch (
                        arguments[1].hoveredInfo &&
                          arguments[1].hoveredInfo.component &&
                          arguments[1].hoveredInfo.component.getType()
                      ) {
                        case "timeMarker":
                          e._triggerMarkerMouseActions.apply(e, arguments);
                          break;
                        default:
                          e._triggerMouseActions.apply(e, arguments);
                      }
                    }),
                    o
                  );
            }),
            (e.prototype.mouseoutHandler = function(t, e, n, i) {
              var o = this.config;
              i &&
                i.config &&
                (i.setHoverOutEffect(n),
                i._firePlotEvent && i._firePlotEvent("fc-mouseout", n, t)),
                o.showTooltip &&
                  this.getFromEnv("toolTipController").hide(o.currentToolTip),
                delete o._lastDatasetIndex,
                delete o._lastPointIndex;
            }),
            (e.prototype._triggerMarkerMouseActions = function(t) {
              var e = t.data,
                n = this.getFromEnv("toolTipController"),
                i = e.chartX,
                o = e.chartY,
                r = this.getLinkedParent(),
                a = void 0,
                l = void 0,
                s = r.getTranslation(),
                c = e.hoveredInfo,
                u = c.hovered,
                f = this.config,
                d = f.showTooltip,
                h = c.component,
                p = c.pointObj.hoveredMarkerDim || {},
                g =
                  c.hovered &&
                  h.getToolTextConfiguration(p.toolTextArr, c.pointObj.type),
                m = r.isWithinCanvas(
                  i - (p.thresholdX || 0),
                  o - (p.thresholdY || 0)
                );
              u && m
                ? ((a = i),
                  (l = p.y - g.dimensions.height + s.y),
                  d &&
                    (f.currentToolTip = n.drawAt(
                      a,
                      l,
                      g.toolText,
                      f.currentToolTip,
                      r
                    )),
                  h.setHoverInEffect(c.pointIndex, c.pointObj.index, !1))
                : (d && n.hide(f.currentToolTip), h.setHoverOutEffect());
            }),
            (e.prototype._triggerMouseActions = function(t) {
              var e,
                n,
                i,
                o,
                r,
                a,
                l,
                s,
                c,
                u = this,
                f = t.data,
                d = u.getFromEnv("toolTipController"),
                h = f.i,
                p = f.e,
                g = f.chartX,
                m = f.chartY,
                y = f.hoveredInfo,
                v = h >= 0,
                b = u.getLinkedParent(),
                x = b.getChild(undefined, "dataset"),
                k = u.config,
                _ = k._lastDatasetIndex,
                w = k._lastPointIndex,
                S = b.getTranslation(),
                C = "",
                E = y && y.pointIndex,
                D = b.isWithinCanvas(g, m);
              if (
                (v &&
                  ((y.datasetIndex = h),
                  (c = u.getMouseEvents(
                    p,
                    y.datasetIndex,
                    E,
                    y.component.getName(),
                    y.markerObj
                  ))),
                (!D || ((!v || (c && c.fireOut)) && void 0 !== _)) &&
                  (c && !c.events.length
                    ? (k.mouseoutTimer = setTimeout(function() {
                        u.mouseoutHandler(p, _, w, k._lastComponentHovered);
                      }, 20))
                    : (u.mouseoutHandler(p, _, w, k._lastComponentHovered),
                      clearTimeout(k.mouseoutTimer))),
                D &&
                  x.length &&
                  k.showTooltip &&
                  (x.forEach(function(t, e) {
                    "visible" === (s = t.config).visibility &&
                      ((o = t._getTooltext(v, h === e, t._getHoveredBin())),
                      (C += o),
                      s.dataInfo[t._getHoveredBin()] &&
                        o &&
                        ((r = s.dataInfo[t._getHoveredBin()]), (l = t)));
                  }),
                  (C =
                    (l ? l._getDateForToolText(l._getHoveredBin()) : "") + C),
                  (e = v ? y.pointObj : r) && "" !== C
                    ? (k.currentToolTip = d.drawAt(
                        e.x + (e.width || 0) / 2 + 5 + S.x,
                        (e.colY || e.y) + S.y,
                        C,
                        k.currentToolTip,
                        b
                      ))
                    : d.hide(k.currentToolTip)),
                v && (n = c.events && c.events.length))
              )
                for (
                  k._lastDatasetIndex = y.datasetIndex,
                    k._lastPointIndex = E,
                    a = k._lastComponentHovered = y.component,
                    k._lastComponentHoveredName = a && a.getName(),
                    a.setHoverInEffect(E),
                    k.showTooltip &&
                      "dataMarker" === a.getType() &&
                      ((C = a._getTooltext(E)),
                      (k.currentToolTip = d.draw(p, C, k.currentToolTip))),
                    i = 0;
                  i < n;
                  i += 1
                )
                  a &&
                    a._firePlotEvent &&
                    a &&
                    a._firePlotEvent &&
                    a._firePlotEvent(c.events[i], E, p, y);
            }),
            (e.prototype.getMouseEvents = function(t, e, n, i) {
              var o = this.config,
                r = o._lastDatasetIndex,
                a = o._lastPointIndex,
                l = o._lastComponentHoveredName,
                s = { fireOut: !1, events: [] };
              switch (t.type) {
                case "fc-click":
                  s.events.push("fc-click");
                  break;
                case "fc-mousemove":
                  l === i && r === e && a === n
                    ? (clearTimeout(o.mouseoutTimer),
                      s.events.push("fc-mousemove"))
                    : (s.events.push("fc-mouseover"), (s.fireOut = !0));
                  break;
                case "fc-mousedown":
                  (l === i && r === e && a === n) ||
                    ((s.fireOut = !0), s.events.push("fc-mouseover")),
                    s.events.push("fc-mousedown");
                  break;
                case "fc-mouseover":
                  l === i && r === e && a === n
                    ? clearTimeout(o.mouseoutTimer)
                    : ((s.fireOut = !0), s.events.push("fc-mouseover"));
                  break;
                case "fc-mouseup":
                  s.events.push("fc-mouseup");
                  break;
                case "fc-mouseout":
                  s.fireOut = !0;
              }
              return s;
            }),
            e
          );
        })(r["default"]);
        e["default"] = s;
      },
      697: function(t, e, n) {
        "use strict";
        (e.__esModule = !0),
          (e["default"] = function(t) {
            var e = t.config;
            e.enableInteraction &&
              !e.wheelEventAdded &&
              (t.addEventListener("fc-wheel", o(t)), (e.wheelEventAdded = !0));
          });
        var i = n(125),
          o = function(t) {
            return function(e) {
              var n,
                o,
                r = t.getLinkedParent(),
                a = t.config.xConfigs[0].scale,
                l = r.getContextLimit(),
                s = a.getRange(),
                c = s[0],
                u = s[1],
                f = e.originalEvent,
                d = void 0,
                h = void 0,
                p = void 0,
                g = void 0,
                m = void 0,
                y = void 0,
                v = void 0,
                b = void 0,
                x = void 0;
              Math.abs(f.deltaY) > Math.abs(f.deltaX)
                ? ((d = "vertical"), (h = f.deltaY))
                : ((d = "horizontal"), (h = f.deltaX)),
                "vertical" === d
                  ? ((p = (0, i.getMouseCoordinate)(
                      t.getFromEnv("chart-container"),
                      e.originalEvent,
                      r
                    )),
                    (m = (g = t.getTranslation()) ? g.x : 0),
                    (c -=
                      (2 * h * (v = (y = p.chartX - m) - c)) /
                      (x = v + (b = u - y))),
                    (u += (2 * h * b) / x))
                  : (h > 0
                      ? a.getDomainValue(u) < l[1]
                      : a.getDomainValue(c) > l[0]) && ((u += h), (c += h)),
                (n = a.getDomainValue(c)),
                (o = a.getDomainValue(u)),
                r.setFocusLimit([n, o]);
            };
          };
      },
      698: function(t, e, n) {
        "use strict";
        (e.__esModule = !0),
          (e["default"] = function(t) {
            var e = t.config;
            e.enableInteraction &&
              !e.dbTapEventAdded &&
              (t.addEventListener("fc-dbclick", i(t)),
              (e.dbTapEventAdded = !0));
          });
        var i = function(t) {
            return function(e) {
              var n,
                i,
                r = t.getLinkedParent(),
                a = t.config.xConfigs[0].scale,
                l = a.getRange(),
                s = l[0],
                c = l[1];
              (s += o),
                (c -= o),
                (n = a.getDomainValue(s)),
                (i = a.getDomainValue(c)),
                r.setFocusLimit([n, i]);
            };
          },
          o = 20;
      },
      699: function(t, e, n) {
        "use strict";
        (e.__esModule = !0),
          (e["default"] = function(t) {
            var e = t.config;
            e.enableInteraction &&
              !e.swipeEventAdded &&
              (t.addEventListener("fc-dragstart", i(t)),
              t.addEventListener("fc-dragmove", o(t)),
              t.addEventListener("fc-dragend", r(t)),
              (e.swipeEventAdded = !0));
          });
        var i = function(t) {
            return function() {
              (a = 0), t.getChildren("mouseTracker")[0].deactivate();
            };
          },
          o = function(t) {
            return function(e) {
              var n,
                i,
                o = t.getLinkedParent(),
                r = t.config.xConfigs[0].scale,
                l = o.getContextLimit(),
                s = r.getRange(),
                c = s[0],
                u = s[1],
                f = e.originalEvent.data,
                d = f[0] - a;
              (d < 0
                ? r.getDomainValue(u) < l[1]
                : r.getDomainValue(c) > l[0]) && ((u -= d), (c -= d)),
                (n = r.getDomainValue(c)),
                (i = r.getDomainValue(u)),
                o.setFocusLimit([n, i]),
                (a = f[0]);
            };
          },
          r = function(t) {
            return function() {
              t.getChildren("mouseTracker")[0].activate();
            };
          },
          a = void 0;
      },
      700: function(t, e, n) {
        "use strict";
        (e.__esModule = !0),
          (e["default"] = function(t) {
            var e = t.config;
            e.enableInteraction &&
              !e.pinchEventAdded &&
              (t.addEventListener("fc-pinchstart", o),
              t.addEventListener("fc-pinchmove", r(t)),
              (e.pinchEventAdded = !0));
          });
        var i = n(125),
          o = function(t) {
            a = t.originalEvent.data.distanceX;
          },
          r = function(t) {
            return function(e) {
              var n,
                o,
                r = t.getLinkedParent(),
                l = t.config.xConfigs[0].scale,
                s = l.getRange(),
                c = s[0],
                u = s[1],
                f = e.originalEvent.data.distanceX,
                d = f - a,
                h = (0, i.getMouseCoordinate)(
                  t.getFromEnv("chart-container"),
                  e.originalEvent,
                  r
                ),
                p = t.getTranslation(),
                g = p ? p.x : 0,
                m = h.chartX - g,
                y = m - c,
                v = u - m,
                b = y + v;
              (a = f),
                (c += (2 * d * y) / b),
                (u -= (2 * d * v) / b),
                (n = l.getDomainValue(c)),
                (o = l.getDomainValue(u)),
                r.setFocusLimit([n, o]);
            };
          },
          a = void 0;
      },
      701: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = d(n(702)),
          o = d(n(660)),
          r = d(n(661)),
          a = d(n(703)),
          l = d(n(705)),
          s = d(n(707)),
          c = d(n(710)),
          u = d(n(711)),
          f = n(125);
        function d(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var h = function(t) {
            return t.split(" - ")[0];
          },
          p = function(t) {
            return t ? "visible" : "hidden";
          },
          g = function(t) {
            return "ohlc" === t || "candlestick" === t;
          };
        e["default"] = function(t) {
          var e = t.getFromEnv("chart"),
            n = t.getFromEnv("legendMap"),
            d = t.config,
            m = t.getFromEnv("dataSource").plotconfig || {},
            y = t.getFromEnv("ordinalScale"),
            v = d.isContext ? e.config.contextAxesX : e.config.focusAxesX,
            b = d.isContext ? e.config.contextAxesY : e.config.focusAxesY,
            x = d.isContext,
            k = d.multiSeriesDatasetMap;
          x &&
            d.plotConfigs.forEach(function(t) {
              t.plots.forEach(function(t) {
                g(t.plottype)
                  ? ((t.value = t.close || t.low || t.high || t.open || []),
                    (t.plottype = t.typeinnavigator || "line"))
                  : "column" === t.plottype &&
                    (t.plottype =
                      t.typeinnavigator ||
                      (t.value.length > 1 ? "area" : "line"));
              });
            }),
            d.plotConfigs.forEach(function(e) {
              var _ = v[e.x],
                w = b[e.y],
                S = _.binDecider,
                C = _.scale,
                E = w.scale,
                D = w.plotstyle || {},
                M = e.plots.filter(function(t) {
                  return "column" === t.plottype;
                }).length,
                T = 0;
              e.plots.forEach(function(e) {
                var v,
                  b,
                  O,
                  F,
                  L,
                  I = e.tableInfo,
                  P = I.table,
                  j = I.filterItem,
                  A = w.plot[e.plotInAxisIndex],
                  B = A.style || {},
                  N = A.connectnulldata,
                  H = P.getData().data,
                  R = P,
                  G = _.timeFormatterFn,
                  Y = void 0,
                  z = void 0,
                  V = [A.value],
                  X = {};
                if (
                  (A.group && (X[A.group.toLowerCase()] = j),
                  (v = (0, f.extend2)((0, f.extend2)({}, D), B)),
                  !x && g(e.plottype))
                ) {
                  var U = e.close || e.open || e.high || e.low;
                  (U.length > 1 || j) && ((e.plottype = "line"), (e.value = U));
                }
                if (
                  ((F = e.plottype),
                  (b = m[F] || {}),
                  (O = m.generic || {}),
                  (L = (function(t) {
                    switch (t) {
                      case "column":
                        return r["default"];
                      case "candlestick":
                        return a["default"];
                      case "ohlc":
                        return l["default"];
                      default:
                        return o["default"];
                    }
                  })(F)),
                  "column" === F && ((Y = T++), (z = M)),
                  g(F))
                ) {
                  var W = (0, i["default"])(
                      [
                        e.open || [e.open],
                        e.high || [e.high],
                        e.low || [e.low],
                        e.close || [e.close]
                      ].filter(function(t) {
                        return !!t;
                      })
                    ),
                    q = A.open,
                    Z = A.high,
                    Q = A.low,
                    K = A.close;
                  q && V.push(q),
                    Z && V.push(Z),
                    Q && V.push(Q),
                    K && V.push(K),
                    V.length > 1 && V.shift(),
                    W.forEach(function(n) {
                      var i = t.attachChild(L, "dataset");
                      R.on("resultFlushed", function(t) {
                        var e = t.data && t.data.legendInteracted;
                        i.setData(
                          {
                            data: t.sender.getData().data,
                            skipLimitCalc: x,
                            legendInteracted: e
                          },
                          !0
                        );
                      }),
                        i.addToEnv("binDecider", S),
                        i.addToEnv("xScale", C),
                        i.addToEnv("yScale", E),
                        i.configure({
                          data: H,
                          scaleX: C,
                          scaleY: E,
                          formatterFn: w.formatterFn,
                          timeFormatterFn: G,
                          styleConfig: v,
                          plotCosmetics: b,
                          genericCosmetics: O,
                          prefix: w.formatLabelPrefix,
                          suffix: w.formatLabelSuffix,
                          indices: [R.indexOf(I.position)].concat(
                            n.map(function(t) {
                              return R.indexOf(t);
                            })
                          ),
                          primaryColor: !0,
                          type: F,
                          series: e.value,
                          measures: V
                        });
                    });
                } else if (
                  e.stack &&
                  (function(t) {
                    return (
                      "area" === t ||
                      "smooth-area" === t ||
                      "step-area" === t ||
                      "column" === t
                    );
                  })(F)
                ) {
                  var J = R.indexOf(I.position),
                    $ =
                      e.value[0]
                        .split(" - ")
                        .slice(1)
                        .join(" - ") + " - sum",
                    tt = new s["default"]()
                      .setValueAccessor(function(t, e) {
                        return n[h(e)].visibility ? t[R.indexOf(e)] : 0;
                      })
                      .setKeysAccessor(function() {
                        return e.value.filter(function(t) {
                          return R.indexOf(t) >= 0;
                        });
                      })
                      .setOffset(
                        "log" === E.getType() ? u["default"] : c["default"]
                      );
                  R.addColumns({
                    name: $,
                    type: "number",
                    calcFn: function(t, i) {
                      return e.value.reduce(function(e, o) {
                        return n[h(o)].visibility ? e + t[i[o]] : e;
                      }, 0);
                    }
                  });
                  var et = tt.generate(R.getData().data),
                    nt = et.length;
                  R.on("resultFlushed", function(e) {
                    et = tt.generate(e.sender.getData().data);
                    var i = e.data && e.data.legendInteracted;
                    if (
                      (et.forEach(function(t) {
                        var e = j ? k[j + " - " + t.key] : k[t.key],
                          o = t.map(function(t) {
                            return [
                              t.data[J],
                              t[0],
                              t[1],
                              t.data[R.indexOf($)]
                            ];
                          }),
                          r = e.config.series,
                          a = n[r] && n[r].visibility;
                        a === f.UNDEF && (a = !0),
                          e.setData(
                            {
                              visibility: p(a),
                              data: o,
                              skipLimitCalc: x,
                              legendInteracted: i
                            },
                            !0
                          );
                      }),
                      0 === et.length)
                    ) {
                      var o = t.getChildren("dataset");
                      o &&
                        o.forEach(function(t) {
                          t.setData({ data: [], legendInteracted: i }, !0);
                        });
                    }
                  }),
                    et.forEach(function(e, n) {
                      var i = t.attachChild(L, "dataset"),
                        o = h(e.key),
                        r = e.map(function(t) {
                          return [t.data[J], t[0], t[1], t.data[R.indexOf($)]];
                        });
                      A.stack && (X[A.stack.toLowerCase()] = o),
                        i.addToEnv("binDecider", S),
                        i.addToEnv("xScale", C),
                        i.addToEnv("yScale", E),
                        j ? (k[j + " - " + e.key] = i) : (k[e.key] = i),
                        i.configure({
                          data: r,
                          datasetIndex: n,
                          seriesLength: nt,
                          scaleX: C,
                          scaleY: E,
                          timeFormatterFn: G,
                          groupIndex: Y,
                          totalGroups: z,
                          formatterFn: w.formatterFn,
                          prefix: w.formatLabelPrefix,
                          suffix: w.formatLabelSuffix,
                          styleConfig: v,
                          plotCosmetics: b,
                          genericCosmetics: O,
                          connectNullData: N,
                          indices: [0, 2, 1, 3],
                          primaryColor: y.getRangeValue(o),
                          type: F,
                          series: o,
                          enableMarkers: d.enableMarkers,
                          measures: V,
                          seriesInfo: Object.assign({}, X)
                        });
                    });
                } else
                  e.value.forEach(function(i) {
                    var o = t.attachChild(L, "dataset"),
                      r = e.stack ? h(i) : j || h(i);
                    R.on("resultFlushed", function(t) {
                      var e = o.config.series,
                        i = t.data && t.data.legendInteracted,
                        r = n[e] && n[e].visibility;
                      r === f.UNDEF && (r = !0),
                        o.setData(
                          {
                            visibility: p(r),
                            data: t.sender.getData().data,
                            skipLimitCalc: x,
                            legendInteracted: i
                          },
                          !0
                        );
                    }),
                      e.stack && (X[e.stack.toLowerCase()] = r),
                      o.addToEnv("binDecider", S),
                      o.addToEnv("xScale", C),
                      o.addToEnv("yScale", E),
                      o.configure({
                        data: H,
                        scaleX: C,
                        scaleY: E,
                        timeFormatterFn: G,
                        groupIndex: Y,
                        totalGroups: z,
                        formatterFn: w.formatterFn,
                        prefix: w.formatLabelPrefix,
                        suffix: w.formatLabelSuffix,
                        styleConfig: v,
                        plotCosmetics: b,
                        genericCosmetics: O,
                        connectNullData: N,
                        indices: [R.indexOf(I.position), R.indexOf(i)],
                        primaryColor: y.getRangeValue(r),
                        type: F,
                        series: r,
                        enableMarkers: d.enableMarkers,
                        measures: V,
                        seriesInfo: Object.assign({}, X)
                      });
                  });
              });
            });
        };
      },
      703: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                },
          o = c(n(661)),
          r = n(125),
          a = c(n(670)),
          l = n(132),
          s = c(n(704));
        function c(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function u(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var f = function(t, e) {
          return Object.assign(t, e);
        };
        (0, l.addDep)({
          name: "timeseriesCandlestickAnimation",
          type: "animationRule",
          extension: s["default"]
        });
        var d = (function(t) {
          function e() {
            return (
              (function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              (function(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              })(this, t.apply(this, arguments))
            );
          }
          return (
            u(e, t),
            (e.prototype.getHoverInConfig = function(t) {
              var e = this.config;
              return {
                bullStyle: e.bullHoverInStyle,
                bearStyle: e.bearHoverInStyle,
                index: t,
                hovered: !0
              };
            }),
            (e.prototype.getHighlightConfig = function(t) {
              var e = this.config;
              return {
                bullStyle: e.bullHighlightStyle,
                bearStyle: e.bearHighlightStyle,
                index: t,
                hovered: !0
              };
            }),
            (e.prototype.getHoverOutConfig = function(t) {
              var e = this.config;
              return {
                bullStyle: e.bullHoverOutStyle,
                bearStyle: e.bearHoverOutStyle,
                index: t,
                hovered: !1
              };
            }),
            (e.prototype.__setDefaultConfig = function() {
              var t = this.config;
              (t.bullStyle = {}),
                (t.bullHoverInStyle = {}),
                (t.bullHighlightStyle = {}),
                (t.bullHoverOutStyle = {}),
                (t.bearStyle = {}),
                (t.bearHoverInStyle = {}),
                (t.bearHighlightStyle = {}),
                (t.bearHoverOutStyle = {}),
                (t.plotSpacePercent = 40),
                (t.dataMarkerPadding = 0),
                (t.visibility = "visible"),
                (t.prevBoundaryInfo = {}),
                (t.prevDataInfo = []),
                (t.defaultBullStyle = {
                  "stroke-width": 1,
                  opacity: 1,
                  stroke: "000000",
                  fill: "ffffff"
                }),
                (t.defaultBearStyle = {
                  "stroke-width": 1,
                  opacity: 1,
                  stroke: "000000",
                  fill: "868AC8"
                }),
                (t.defaultBearHoverInStyle = { "stroke-width": 2 }),
                (t.defaultBullHoverInStyle = { "stroke-width": 2 }),
                (t.legendDefaultTextStyle = {
                  "font-family": r.DEFAULT_FT_FONT,
                  "font-weight": "normal",
                  "font-style": "normal",
                  "font-size": "12px",
                  fill: "#5F5F5F"
                }),
                (t.strokeColor = "#464E56"),
                (t.hoverInfo = []);
            }),
            (e.prototype.configureAttributes = function(t) {
              var e = void 0,
                n = this.getFromEnv("dataSource"),
                i = this.getFromEnv("getStyleDef"),
                o = n.legend,
                a = i(o && o.item && o.item.style && o.item.style.text),
                l = this.config;
              if (
                ((l.mergedLegendStyle = (0, r.extend2)(
                  (0, r.extend2)({}, l.legendDefaultTextStyle),
                  a
                )),
                t.hasOwnProperty("index"))
              )
                l.hoverInfo.push(t), (l.hoverMode = !0);
              else {
                for (e in t)
                  if ("primaryColor" === e) {
                    var s = t.plotCosmetics,
                      c = t.genericCosmetics,
                      u = l.bullStyle,
                      d = l.bearStyle,
                      h = l.bullHoverInStyle,
                      p = l.bearHoverInStyle,
                      g = l.bullHighlightStyle,
                      m = l.bearHighlightStyle,
                      y = l.bullHoverOutStyle,
                      v = l.bearHoverOutStyle,
                      b = void 0,
                      x = i(s.style && s.style.bear),
                      k = i(s.style && s.style.bull),
                      _ = i(c.style && c.style.plot),
                      w = i(c.style && c.style["plot:hover"]),
                      S = i(c.style && c.style["plot:highlight"]),
                      C = i(c.style && c.style.bull),
                      E = i(c.style && c.style["bull:hover"]),
                      D = i(c.style && c.style["bull:highlight"]),
                      M = i(c.style && c.style.bear),
                      T = i(c.style && c.style["bear:hover"]),
                      O = i(c.style && c.style["bear:highlight"]),
                      F = i(s.style && s.style["bear:hover"]),
                      L = i(s.style && s.style["bear:highlight"]),
                      I = i(s.style && s.style["bull:hover"]),
                      P = i(s.style && s.style["bull:highlight"]),
                      j = i(t.styleConfig && t.styleConfig.bear),
                      A = i(t.styleConfig && t.styleConfig.bull),
                      B = i(t.styleConfig && t.styleConfig["bear:hover"]),
                      N = i(t.styleConfig && t.styleConfig["bear:highlight"]),
                      H = i(t.styleConfig && t.styleConfig["bull:hover"]),
                      R = i(t.styleConfig && t.styleConfig["bull:highlight"]),
                      G = i(s.style && s.style.plot),
                      Y = i(t.styleConfig && t.styleConfig.plot),
                      z = i(s.style && s.style["generic:hover"]),
                      V = i(s.style && s.style["generic:highlight"]),
                      X = i(t.styleConfig && t.styleConfig["plot:hover"]),
                      U = i(t.styleConfig && t.styleConfig["plot:highlight"]);
                    for (b in (delete _.fill,
                    delete G.fill,
                    delete Y.fill,
                    "timeseries-ohlc" === this.getName() &&
                      (delete Y.stroke, delete _.stroke, delete G.stroke),
                    [u, l.defaultBullStyle, _, G, Y, C, k, A].reduce(f),
                    [d, l.defaultBearStyle, _, G, Y, M, x, j].reduce(f),
                    [h, l.defaultBullHoverInStyle, w, z, X, E, I, H].reduce(f),
                    [g, l.defaultBullHighlightStyle, S, V, U, D, P, R].reduce(
                      f
                    ),
                    [p, l.defaultBearHoverInStyle, w, z, X, T, F, B].reduce(f),
                    [m, l.defaultBearHighlightStyle, S, V, U, O, L, N].reduce(
                      f
                    ),
                    Object.keys(g).length ||
                      (g = l.bullHighlightStyle = (0, r.extend2)({}, h)),
                    Object.keys(m).length ||
                      (g = l.bearHighlightStyle = (0, r.extend2)({}, p)),
                    (u.stroke = (0, r.convertColor)(
                      u.stroke,
                      100 * (0, r.pluckNumber)(u["stroke-opacity"], 1)
                    )),
                    (u.fill = (0, r.convertColor)(
                      u.fill,
                      100 * (0, r.pluckNumber)(u["fill-opacity"], 1)
                    )),
                    (d.stroke = (0, r.convertColor)(
                      d.stroke,
                      100 * (0, r.pluckNumber)(d["fill-opacity"], 1)
                    )),
                    (d.fill = (0, r.convertColor)(
                      d.fill,
                      100 * (0, r.pluckNumber)(d["fill-opacity"], 1)
                    )),
                    h.fill &&
                      (h.fill = (0, r.convertColor)(
                        h.fill,
                        100 *
                          (0, r.pluckNumber)(
                            h["fill-opacity"],
                            u["fill-opacity"]
                          )
                      )),
                    h.stroke &&
                      (h.stroke = (0, r.convertColor)(
                        h.stroke,
                        100 *
                          (0, r.pluckNumber)(
                            h["stroke-opacity"],
                            u["stroke-opacity"]
                          )
                      )),
                    p.fill &&
                      (p.fill = (0, r.convertColor)(
                        p.fill,
                        100 *
                          (0, r.pluckNumber)(
                            p["fill-opacity"],
                            d["fill-opacity"]
                          )
                      )),
                    p.stroke &&
                      (p.stroke = (0, r.convertColor)(
                        p.stroke,
                        100 *
                          (0, r.pluckNumber)(
                            p["stroke-opacity"],
                            d["stroke-opacity"]
                          )
                      )),
                    g.fill &&
                      (g.fill = (0, r.convertColor)(
                        g.fill,
                        100 *
                          (0, r.pluckNumber)(
                            g["fill-opacity"],
                            u["fill-opacity"]
                          )
                      )),
                    g.stroke &&
                      (g.stroke = (0, r.convertColor)(
                        g.stroke,
                        100 *
                          (0, r.pluckNumber)(
                            g["stroke-opacity"],
                            u["stroke-opacity"]
                          )
                      )),
                    p.fill &&
                      (p.fill = (0, r.convertColor)(
                        p.fill,
                        100 *
                          (0, r.pluckNumber)(
                            p["fill-opacity"],
                            d["fill-opacity"]
                          )
                      )),
                    p.stroke &&
                      (p.stroke = (0, r.convertColor)(
                        p.stroke,
                        100 *
                          (0, r.pluckNumber)(
                            p["stroke-opacity"],
                            d["stroke-opacity"]
                          )
                      )),
                    (l.plotBorderThickness = d["stroke-width"] = u[
                      "stroke-width"
                    ] = (0, r.pluckNumber)(
                      (0, r.safeMin)([
                        Number(d["stroke-width"]),
                        Number(u["stroke-width"])
                      ])
                    )),
                    Object.assign(Object.assign({}, h), g)))
                      y[b] = (0, r.pluck)(u[b], "");
                    for (b in ((0, r.defined)(y["stroke-dasharray"]) &&
                      (y["stroke-dasharray"] = ""),
                    Object.assign(Object.assign({}, p), m)))
                      v[b] = d[b] || "";
                    (0, r.defined)(v["stroke-dasharray"]) &&
                      (y["stroke-dasharray"] = ""),
                      (l.bullOpacity = u.opacity),
                      (l["bull-fill-opacity"] = u["fill-opacity"]),
                      (l["bull-stroke-opacity"] = u["stroke-opacity"]),
                      (l.bearOpacity = d.opacity),
                      (l["bear-fill-opacity"] = d["fill-opacity"]),
                      (l["bear-stroke-opacity"] = d["stroke-opacity"]),
                      delete u.opacity,
                      delete u["fill-opacity"],
                      delete u["stroke-opacity"],
                      delete d.opacity,
                      delete d["fill-opacity"],
                      delete d["stroke-opacity"];
                  } else l[e] = t[e];
                if (!l.skipLimitCalc) {
                  l.limit = this._calculateLimits();
                  var W = this.getFromEnv("chart");
                  W.setYScaleLimit(
                    l.scaleY.getId(),
                    this.getId(),
                    l.limit.y,
                    l.limit.baseRequired
                  ),
                    W.setXScaleLimit(l.scaleX.getId(), this.getId(), l.limit.x);
                }
              }
            }),
            (e.prototype._calculateLimits = function() {
              var t,
                e = this.config,
                n = e.indices,
                i = e.data,
                o = e.scaleY,
                a = e.scaleX,
                l = i[0],
                s = i[i.length - 1],
                c = a.showPlotOverTick(),
                u = "visible" === this.config.visibility,
                f = "log" === o.getType(),
                d = this.getFromEnv("chart").getFocusLimit(),
                h = d[0],
                p = d[1],
                g = {},
                m = function(t) {
                  return f && t <= 0 ? null : t;
                };
              return (
                (t = this.getPadding()),
                (g.x = c
                  ? u
                    ? [l && l[n[0]].start - t, s && s[n[0]].start + t]
                    : r.UNDEF
                  : u
                  ? [l && l[n[0]].start - t, s && s[n[0]].end - t]
                  : r.UNDEF),
                (g.y = u
                  ? [
                      (0, r.safeMin)(i, function(t) {
                        if (!(t[0].end < h || t[0].start > p))
                          return (0, r.safeMin)([t[1], t[2], t[3], t[4]], m);
                      }),
                      (0, r.safeMax)(i, function(t) {
                        if (!(t[0].end < h || t[0].start > p))
                          return (0, r.safeMax)([t[1], t[2], t[3], t[4]], m);
                      })
                    ]
                  : r.UNDEF),
                (g.baseRequired = !1),
                g
              );
            }),
            (e.prototype._createContainer = function() {
              var t = this.config,
                e = t.bullStyle,
                n = t.bearStyle;
              this.addGraphicalElement({
                el: "group",
                container: { id: "meso", label: "group", isParent: !0 },
                component: this,
                label: "group",
                id: "meso",
                attr: { name: "candlestick-dataset-meso" }
              }),
                this.addGraphicalElement({
                  el: "group",
                  container: { id: "meso", label: "group" },
                  component: this,
                  label: "group",
                  id: "meso-bull",
                  attr: Object.assign(
                    { name: "bullGroup-meso", visibility: t.visibility },
                    e
                  )
                }),
                this.addGraphicalElement({
                  el: "group",
                  container: { id: "meso", label: "group" },
                  component: this,
                  label: "group",
                  id: "meso-bear",
                  attr: Object.assign(
                    { name: "bearGroup-meso", visibility: t.visibility },
                    n
                  )
                });
            }),
            (e.prototype.getName = function() {
              return "timeseriesCandlestick";
            }),
            (e.prototype.allocatePosition = function() {
              var t,
                e,
                n,
                o,
                l,
                s,
                c,
                u,
                f,
                d,
                h,
                p,
                g,
                m,
                y,
                v,
                b,
                x,
                k,
                _,
                w,
                S,
                C,
                E = this.getFromEnv("binDecider"),
                D = this.getFromEnv("xScale"),
                M = this.getFromEnv("yScale"),
                T = this.config,
                O = T.indices,
                F = O[0],
                L = O[1],
                I = O[2],
                P = O[3],
                j = O[4],
                A = T.dataInfo,
                B = E.getRangeThreshold()[2],
                N = D.getDomain(),
                H = N[0],
                R = N[1],
                G = T.data;
              (T.repositioningDone = this._isRepositioningNeeded()) &&
                ((T.timeStampGap = B),
                (k = D.getRangeValue(B) - D.getRangeValue(0)),
                (e = Math.max(
                  k * (1 - T.plotSpacePercent / 100) - T.plotBorderThickness,
                  1
                )),
                (C =
                  +D.getDomainValue(k * (T.plotSpacePercent / 200)) -
                  +D.getDomainValue(0)),
                (T.actualStartDomain = +H + C),
                (T.actualEndDomain = +R - C),
                (A = T.dataInfo = []),
                G.forEach(function(i, r) {
                  (n = i[F]),
                    (d = i[L]),
                    (h = i[j]),
                    (p = i[I]),
                    (g = i[P]),
                    r || (y = T.firstTimeStamp = n.start),
                    (S = M.getRangeValue(h)),
                    (w = M.getRangeValue(d)),
                    (x = M.getRangeValue(p)),
                    (b = M.getRangeValue(g)),
                    (0, a["default"])(w) &&
                      (0, a["default"])(S) &&
                      (d > h
                        ? ((u = S), (c = w), (f = "bull"))
                        : ((c = S), (u = w), (f = "bear")),
                      (t = Math.max(Math.abs(u - c), 1)),
                      (l = c > u ? u : c)),
                    (s = D.getRangeValue(new Date(n.start), new Date(n.end))),
                    (o = s - e / 2),
                    ((m = { startDate: n.start, endDate: n.end }).x = o),
                    (m.midX = s),
                    (m.colHeight = t || 0),
                    (m.colY = l || w || S),
                    (m.y = m.highStickYExtend = x),
                    (m.width = e),
                    (m.openValue = d),
                    (m.closeValue = h),
                    (m.highValue = p),
                    (m.lowValue = g),
                    (m.value = h),
                    (m.lowStickYEntend = b),
                    (m.height = b - x || 0),
                    (m.groupId = f || "bull"),
                    (m.groupConfig =
                      "bull" === f ? "bullConfig" : "bearConfig"),
                    (v = D.getBinIndex(n.start, y)),
                    (A[v] = m);
                })),
                (_ = T.hoverInfo) &&
                  _.forEach(function(t) {
                    "object" === i(A[t.index]) &&
                      (A[t.index].style = (0, r.extend2)(
                        A[t.index].style,
                        t[A[t.index].groupId + "Style"]
                      ));
                  });
            }),
            (e.prototype._drawPlot = function() {
              var t,
                e,
                n = this,
                i = n.config,
                o = i.dataInfo,
                a = (0, r.defined)(i.bullOpacity),
                l = (0, r.defined)(i["bull-fill-opacity"]),
                s = (0, r.defined)(i["bull-stroke-opacity"]),
                c = (0, r.defined)(i.bearOpacity),
                u = (0, r.defined)(i["bear-fill-opacity"]),
                f = (0, r.defined)(i["bear-stroke-opacity"]),
                d = {},
                h = {};
              a && (d.opacity = i.bullOpacity),
                l && (d.opacity = i["bull-fill-opacity"]),
                s && (d.opacity = i["bull-stroke-opacity"]),
                c && (h.opacity = i.bearOpacity),
                u && (h.opacity = i["bear-fill-opacity"]),
                f && (h.opacity = i["bear-stroke-opacity"]),
                o.forEach(function(i, r) {
                  i.groupConfig &&
                    ((e = "bull" === i.groupId ? d : h),
                    i.colHeight > 0
                      ? ((t = Object.assign(
                          {
                            x: i.x,
                            y: i.colY,
                            height: i.colHeight,
                            width: i.width
                          },
                          e
                        )),
                        i.style && Object.assign(t, i.style),
                        n.addGraphicalElement(
                          {
                            el: "rect",
                            component: n,
                            props: { index: r, dataLength: o.length },
                            container: {
                              label: "group",
                              id: "meso-" + i.groupId
                            },
                            label: "rect",
                            attr: t
                          },
                          !0
                        ))
                      : (i.openValue || i.closeValue) &&
                        ((t = Object.assign(
                          {
                            path:
                              "M" + i.x + "," + i.colY + ",H" + (i.x + i.width)
                          },
                          e
                        )),
                        i.style && Object.assign(t, i.style),
                        n.addGraphicalElement(
                          {
                            el: "path",
                            component: n,
                            props: { index: r, dataLength: o.length },
                            container: {
                              label: "group",
                              id: "meso-" + i.groupId
                            },
                            label: "line",
                            attr: t
                          },
                          !0
                        )),
                    i.highStickYExtend &&
                      ((t = Object.assign(
                        {
                          path:
                            "M" +
                            i.midX +
                            "," +
                            i.highStickYExtend +
                            ",V" +
                            (i.colY || i.highStickYExtend + i.height),
                          "stroke-linecap": "round"
                        },
                        e
                      )),
                      i.style && Object.assign(t, i.style),
                      n.addGraphicalElement(
                        {
                          el: "path",
                          component: n,
                          props: { index: r, dataLength: o.length },
                          container: {
                            label: "group",
                            id: "meso-" + i.groupId
                          },
                          label: "high",
                          attr: t
                        },
                        !0
                      )),
                    i.lowStickYEntend &&
                      ((t = Object.assign(
                        {
                          path:
                            "M" +
                            i.midX +
                            "," +
                            i.lowStickYEntend +
                            ",V" +
                            (i.colY + i.colHeight ||
                              i.lowStickYEntend - i.height),
                          "stroke-linecap": "round"
                        },
                        e
                      )),
                      i.style && Object.assign(t, i.style),
                      n.addGraphicalElement(
                        {
                          el: "path",
                          component: n,
                          props: { index: r, dataLength: o.length },
                          container: {
                            label: "group",
                            id: "meso-" + i.groupId
                          },
                          label: "low",
                          attr: t
                        },
                        !0
                      )));
                }),
                (i.hoverInfo = []);
            }),
            (e.prototype._getTooltext = function(t, e, n) {
              var i,
                o,
                a = this.config,
                l = a.dataInfo[n],
                s = t ? (e ? 1 : 0.5) : 1;
              return this._isInvalidTooltext(l)
                ? ""
                : ((i = (0, r.defined)(l.groupConfig)),
                  (o =
                    "<div style='margin-top:5px; margin-bottom:4px; height: 14px; opacity:" +
                    s +
                    "'>\n      <div style='float: left; color:#464E56; clear: both; font-size: 8px; line-height: 1.9;'>&#9609;&nbsp</div>\n      <div style='float: left;'>&nbsp" +
                    a.series +
                    "&nbsp</div>\n      </div>"),
                  i
                    ? (a.series ? o : "") +
                      ["open", "high", "low", "close"].reduce(function(t, e) {
                        var n =
                          l[e + "TooltipValue"] ||
                          (l[e + "TooltipValue"] =
                            l[e + "Value"] &&
                            a.formatterFn({
                              value: l[e + "Value"],
                              type: "tooltip",
                              prefix: a.prefix,
                              suffix: a.suffix
                            }));
                        return (
                          t +
                          (n !== undefined
                            ? "<div style = 'clear: both'>\n        <div style = 'float: left;'>" +
                              e +
                              "</div>\n        <div style = 'float: right;'>" +
                              n +
                              "</div>\n       </div>"
                            : "")
                        );
                      }, "")
                    : o);
            }),
            e
          );
        })(o["default"]);
        e["default"] = d;
      },
      704: function(t, e, n) {
        "use strict";
        function i(t) {
          var e = /M(.*)V(.*)/g.exec(t),
            n = e[1],
            i = e[2];
          return {
            MX: parseFloat(n.split(",")[0]),
            MY: parseFloat(n.split(",")[1]),
            VY: (i = parseFloat(i))
          };
        }
        (e.__esModule = !0),
          (e["default"] = {
            "initial.dataset.timeseriesCandlestick": function() {
              var t = this.getFromEnv("yScale").getRangeValue(0),
                e = -1,
                n = null,
                o = function(t, i) {
                  if (t === e) return n;
                  var o = (function(t, e) {
                    return { start: 2e-5 * t, end: 1 };
                  })(t);
                  return (e = t), (n = o), o;
                };
              return {
                "rect.appearing": function(e) {
                  var n = e.props.index;
                  e.props.dataLength;
                  return [
                    {
                      initialAttr: { y: t },
                      startEnd: function() {
                        return o(n);
                      },
                      effect: "easeInOutQuart",
                      slot: "middle"
                    }
                  ];
                },
                "line.appearing": function(e) {
                  var n = e.attr.path,
                    i = e.props.index,
                    r = (e.props.dataLength,
                    (function(t) {
                      var e = /M(.*)H(.*)/g.exec(t),
                        n = e[1],
                        i = e[2];
                      return {
                        MX: parseFloat(n.split(",")[0]),
                        MY: parseFloat(n.split(",")[1]),
                        HX: (i = parseFloat(i))
                      };
                    })(n));
                  return [
                    {
                      initialAttr: { path: "M" + r.MX + "," + t + "H" + r.HX },
                      finalAttr: { path: "M" + r.MX + "," + r.MY + "H" + r.HX },
                      startEnd: function() {
                        return o(i);
                      },
                      effect: "easeInOutQuart",
                      slot: "middle"
                    }
                  ];
                },
                "high.appearing": function(e) {
                  var n = e.attr.path,
                    r = e.props.index,
                    a = (e.props.dataLength, i(n));
                  return [
                    {
                      initialAttr: {
                        path: "M" + a.MX + "," + t + "V" + (a.VY + (t - a.MY))
                      },
                      finalAttr: { path: "M" + a.MX + "," + a.MY + "V" + a.VY },
                      startEnd: function() {
                        return o(r);
                      },
                      effect: "easeInOutQuart",
                      slot: "middle"
                    }
                  ];
                },
                "low.appearing": function(e) {
                  var n = e.attr.path,
                    r = e.props.index,
                    a = (e.props.dataLength, i(n));
                  return [
                    {
                      initialAttr: {
                        path: "M" + a.MX + "," + t + "V" + (a.VY + (t - a.MY))
                      },
                      finalAttr: { path: "M" + a.MX + "," + a.MY + "V" + a.VY },
                      startEnd: function() {
                        return o(r);
                      },
                      effect: "easeInOutQuart",
                      slot: "middle"
                    }
                  ];
                }
              };
            }
          });
      },
      705: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                },
          o = c(n(703)),
          r = c(n(670)),
          a = n(125),
          l = n(132),
          s = c(n(706));
        function c(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function u(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        (0, l.addDep)({
          name: "ohlcAnimation",
          type: "animationRule",
          extension: s["default"]
        });
        var f = (function(t) {
          function e() {
            return (
              (function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              (function(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              })(this, t.apply(this, arguments))
            );
          }
          return (
            u(e, t),
            (e.prototype.__setDefaultConfig = function() {
              t.prototype.__setDefaultConfig.call(this),
                (this.config.defaultBearStyle.stroke = "868AC8");
            }),
            (e.prototype._drawPlot = function() {
              var t,
                e,
                n = this,
                i = n.config,
                o = i.dataInfo,
                r = (0, a.defined)(i.bullOpacity),
                l = (0, a.defined)(i["bull-fill-opacity"]),
                s = (0, a.defined)(i["bull-stroke-opacity"]),
                c = (0, a.defined)(i.bearOpacity),
                u = (0, a.defined)(i["bear-fill-opacity"]),
                f = (0, a.defined)(i["bear-stroke-opacity"]),
                d = {},
                h = {};
              r && (d.opacity = i.bullOpacity),
                l && (d.opacity = i["bull-fill-opacity"]),
                s && (d.opacity = i["bull-stroke-opacity"]),
                c && (h.opacity = i.bearOpacity),
                u && (h.opacity = i["bear-fill-opacity"]),
                f && (h.opacity = i["bear-stroke-opacity"]),
                o.forEach(function(i, r) {
                  i.groupConfig &&
                    ((e = "bull" === i.groupId ? d : h),
                    !!i.lowStickYEntend +
                      !!i.highStickYExtend +
                      !!i.open +
                      !!i.close >
                    1
                      ? "bull" === i.groupId
                        ? ((t = Object.assign(
                            {
                              path:
                                "M" +
                                i.midX +
                                "," +
                                (i.highStickYExtend || i.open || i.close) +
                                ",V" +
                                (i.lowStickYEntend || i.close || i.open),
                              "stroke-linecap": "round"
                            },
                            e
                          )),
                          i.style && Object.assign(t, i.style),
                          n.addGraphicalElement(
                            {
                              el: "path",
                              component: n,
                              container: {
                                label: "group",
                                id: "meso-" + i.groupId
                              },
                              props: { index: r, dataLength: o.length },
                              label: "highlow",
                              attr: t
                            },
                            !0
                          ))
                        : ((t = Object.assign(
                            {
                              path:
                                "M" +
                                i.midX +
                                "," +
                                (i.highStickYExtend || i.close) +
                                ",V" +
                                (i.lowStickYEntend || i.open),
                              "stroke-linecap": "round"
                            },
                            e
                          )),
                          i.style && Object.assign(t, i.style),
                          n.addGraphicalElement(
                            {
                              el: "path",
                              component: n,
                              container: {
                                label: "group",
                                id: "meso-" + i.groupId
                              },
                              props: { index: r, dataLength: o.length },
                              label: "highlow",
                              attr: t
                            },
                            !0
                          ))
                      : (i.lowStickYEntend || i.highStickYExtend) &&
                        ((t = Object.assign(
                          {
                            path:
                              "M" +
                              i.midX +
                              "," +
                              (i.lowStickYEntend || i.highStickYExtend) +
                              ",V" +
                              (i.lowStickYEntend || i.highStickYExtend),
                            "stroke-linecap": "round"
                          },
                          e
                        )),
                        i.style && Object.assign(t, i.style),
                        n.addGraphicalElement(
                          {
                            el: "path",
                            component: n,
                            container: {
                              label: "group",
                              id: "meso-" + i.groupId
                            },
                            props: { index: r, dataLength: o.length },
                            label: "highlow",
                            attr: t
                          },
                          !0
                        )),
                    i.open &&
                      ((t = Object.assign(
                        {
                          path:
                            "M" + i.midX + "," + i.open + ",H" + i.leftExtend
                        },
                        e
                      )),
                      i.style && Object.assign(t, i.style),
                      n.addGraphicalElement(
                        {
                          el: "path",
                          component: n,
                          container: {
                            label: "group",
                            id: "meso-" + i.groupId
                          },
                          props: { index: r, dataLength: o.length },
                          label: "open",
                          attr: t
                        },
                        !0
                      )),
                    i.close &&
                      ((t = Object.assign(
                        {
                          path:
                            "M" + i.midX + "," + i.close + ",H" + i.rightExtend
                        },
                        e
                      )),
                      i.style && Object.assign(t, i.style),
                      n.addGraphicalElement(
                        {
                          el: "path",
                          component: n,
                          container: {
                            label: "group",
                            id: "meso-" + i.groupId
                          },
                          props: { index: r, dataLength: o.length },
                          label: "close",
                          attr: t
                        },
                        !0
                      ),
                      (i.style = undefined)));
                }),
                (i.hoverInfo = []);
            }),
            (e.prototype.allocatePosition = function() {
              var t,
                e,
                n,
                o,
                l,
                s,
                c,
                u,
                f,
                d,
                h,
                p,
                g,
                m,
                y,
                v,
                b,
                x = this.getFromEnv("binDecider"),
                k = this.getFromEnv("xScale"),
                _ = this.getFromEnv("yScale"),
                w = this.config,
                S = w.indices,
                C = S[0],
                E = S[1],
                D = S[2],
                M = S[3],
                T = S[4],
                O = w.dataInfo,
                F = w.data;
              (w.repositioningDone = this._isRepositioningNeeded()) &&
                ((w.timeStampGap = x.getRangeThreshold()[2]),
                (y =
                  k.getRangeValue(x.getRangeThreshold()[2]) -
                  k.getRangeValue(0)),
                (t = y * (1 - w.plotSpacePercent / 100)),
                (O = w.dataInfo = []),
                F.forEach(function(i, p) {
                  (e = i[C]),
                    (n = k.getRangeValue(new Date(e.start), new Date(e.end))),
                    (o = i[E]),
                    (l = i[T]),
                    (s = i[D]),
                    (c = i[M]),
                    p || (f = w.firstTimeStamp = e.start),
                    (v = _.getRangeValue(l)),
                    (b = _.getRangeValue(o)),
                    (m = _.getRangeValue(s)),
                    (g = _.getRangeValue(c)),
                    (0, r["default"])(b) &&
                      (0, r["default"])(v) &&
                      (h = o > l ? "bull" : "bear"),
                    ((d = { startDate: e.start, endDate: e.end }).rightExtend =
                      n + t / 2),
                    (d.leftExtend = d.x = n - t / 2),
                    (d.y = m),
                    (d.width = t),
                    (d.close = v),
                    (d.openValue = o),
                    (d.closeValue = l),
                    (d.highValue = s),
                    (d.lowValue = c),
                    (d.value = l),
                    (d.open = b),
                    (d.midX = n),
                    (d.groupId = h || "bull"),
                    (d.lowStickYEntend = g),
                    (d.highStickYExtend = m),
                    (d.height = g - m || 0),
                    (d.colY = d.height / 2 + m - 10),
                    (d["stroke-width"] = (0, a.pluckNumber)(
                      w["default-stroke-width"],
                      1
                    )),
                    (d.groupConfig =
                      "bull" === h ? "bullConfig" : "bearConfig"),
                    (u = k.getBinIndex(e.start, f)),
                    (O[u] = d);
                })),
                (p = w.hoverInfo) &&
                  p.forEach(function(t) {
                    "object" === i(O[t.index]) &&
                      (O[t.index].style = t[O[t.index].groupId + "Style"]);
                  });
            }),
            (e.prototype.getName = function() {
              return "timeseries-ohlc";
            }),
            e
          );
        })(o["default"]);
        e["default"] = f;
      },
      706: function(t, e, n) {
        "use strict";
        function i(t, e) {
          var n,
            i,
            o,
            r = /M(.*)V(.*)/g,
            a = void 0,
            l = void 0,
            s = void 0;
          return (
            e && (r = /M(.*)H(.*)/g),
            (a = (n = r.exec(t))[1]),
            (e && (s = n[2])) || (l = n[2]),
            (i = parseFloat(a.split(",")[0])),
            (o = parseFloat(a.split(",")[1])),
            (l = parseFloat(l)),
            (s = parseFloat(s)),
            e ? { MX: i, MY: o, HX: s } : { MX: i, MY: o, VY: l }
          );
        }
        (e.__esModule = !0),
          (e["default"] = {
            "initial.dataset.timeseries-ohlc": function() {
              var t = this.getFromEnv("yScale").getRangeValue(0),
                e = -1,
                n = null,
                o = function(t, i) {
                  if (t === e) return n;
                  var o = (function(t, e) {
                    return { start: 2e-5 * t, end: 1 };
                  })(t);
                  return (e = t), (n = o), o;
                };
              return {
                "highlow.appearing": function(e) {
                  var n = i(e.attr.path),
                    r = e.props.index;
                  e.props.dataLength;
                  return [
                    {
                      initialAttr: {
                        path: "M" + n.MX + "," + t + "V" + (n.VY + (t - n.MY))
                      },
                      startEnd: o(r),
                      effect: "easeInOutQuart"
                    }
                  ];
                },
                "open.appearing": function(e) {
                  var n = i(e.attr.path, !0),
                    r = e.props.index;
                  e.props.dataLength;
                  return [
                    {
                      initialAttr: { path: "M" + n.MX + "," + t + "H" + n.HX },
                      startEnd: o(r),
                      effect: "easeInOutQuart"
                    }
                  ];
                },
                "close.appearing": function(e) {
                  var n = i(e.attr.path, !0),
                    r = e.props.index;
                  e.props.dataLength;
                  return [
                    {
                      initialAttr: { path: "M" + n.MX + "," + t + "H" + n.HX },
                      startEnd: o(r),
                      effect: "easeInOutQuart"
                    }
                  ];
                }
              };
            }
          });
      },
      707: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = l(n(374)),
          o = l(n(402)),
          r = l(n(708)),
          a = l(n(709));
        function l(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var s = function(t, e) {
            return t[e];
          },
          c = (function() {
            function t() {
              !(function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.keysAccessor = (0, o["default"])([])),
                (this.order = r["default"]),
                (this.offset = a["default"]),
                (this.valueAccessor = s);
            }
            return (
              (t.prototype.generate = function(t) {
                var e,
                  n = this.keysAccessor(t),
                  i = void 0,
                  o = t.length,
                  r = n.length,
                  a = new Array(r);
                for (i = 0; i < r; ++i) {
                  var l = n[i],
                    s = new Array(o),
                    c = void 0,
                    u = void 0;
                  for (a[i] = s, u = 0; u < o; ++u)
                    ((c = [0, +this.valueAccessor(t[u], l, u, t)]).data = t[u]),
                      (s[u] = c);
                  s.key = l;
                }
                for (e = this.order(a), i = 0; i < r; ++i) a[e[i]].index = i;
                return this.offset(a, e), a;
              }),
              (t.prototype.setKeysAccessor = function() {
                var t =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : (0, o["default"])([]);
                return (
                  (this.keysAccessor =
                    "function" == typeof t
                      ? t
                      : (0, o["default"])(
                          (0, i["default"])(t) ? t.slice() : []
                        )),
                  this
                );
              }),
              (t.prototype.getKeysAccessor = function() {
                return this.keysAccessor;
              }),
              (t.prototype.setValueAccessor = function() {
                var t =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : s;
                return (
                  (this.valueAccessor =
                    "function" == typeof t ? t : (0, o["default"])(+t)),
                  this
                );
              }),
              (t.prototype.getValueAccessor = function() {
                return this.valueAccessor;
              }),
              (t.prototype.setOrder = function() {
                var t =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : r["default"];
                return (
                  (this.order =
                    "function" == typeof t
                      ? t
                      : (0, o["default"])(
                          (0, i["default"])(t) ? t.slice() : []
                        )),
                  this
                );
              }),
              (t.prototype.getOrder = function() {
                return this.order;
              }),
              (t.prototype.setOffset = function() {
                var t =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : a["default"];
                return (this.offset = t), this;
              }),
              (t.prototype.getOffset = function() {
                return this.offset;
              }),
              t
            );
          })();
        e["default"] = c;
      },
      708: function(t, e, n) {
        "use strict";
        (e.__esModule = !0),
          (e["default"] = function(t) {
            for (var e = t.length, n = new Array(e); --e >= 0; ) n[e] = e;
            return n;
          });
      },
      709: function(t, e, n) {
        "use strict";
        (e.__esModule = !0),
          (e["default"] = function(t, e) {
            var n = t.length;
            if (n > 1) {
              var i = t[e[0]],
                o = i.length,
                r = void 0,
                a = void 0,
                l = void 0;
              for (a = 1; a < n; ++a)
                for (r = i, i = t[e[a]], l = 0; l < o; ++l)
                  (i[l][0] = isNaN(r[l][1]) ? r[l][0] : r[l][1]),
                    (i[l][1] += i[l][0]);
            }
          });
      },
      710: function(t, e, n) {
        "use strict";
        (e.__esModule = !0),
          (e["default"] = function(t, e) {
            var n = t.length;
            if (n > 1) {
              var i = t[e[0]].length,
                o = 0,
                r = 0,
                a = void 0,
                l = void 0,
                s = void 0,
                c = void 0;
              for (r = 0; r < i; ++r)
                for (s = c = 0, o = 0; o < n; ++o)
                  (l = (a = t[e[o]][r])[1] - a[0]) >= 0
                    ? ((a[0] = s), (s += l), (a[1] = s))
                    : l < 0
                    ? ((a[1] = c), (c += l), (a[0] = c))
                    : (a[0] = s);
            }
          });
      },
      711: function(t, e, n) {
        "use strict";
        (e.__esModule = !0),
          (e["default"] = function(t, e) {
            var n = t.length;
            if (n > 1) {
              var i = t[e[0]],
                o = i.length,
                r = void 0,
                a = void 0,
                l = void 0;
              for (a = 0; a < i.length; a++) i[a][0] = null;
              for (a = 1; a < n; ++a)
                for (r = i, i = t[e[a]], l = 0; l < o; ++l)
                  (i[l][0] = isNaN(r[l][1]) ? r[l][0] : r[l][1]),
                    (i[l][1] += i[l][0]);
            }
          });
      },
      712: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(713),
          r = (i = o) && i.__esModule ? i : { default: i };
        e["default"] = function(t) {
          t.attachChild(r["default"], "verticalCrossLine").configure({
            scale: t.config.xConfigs[0].scale,
            type: "vertical",
            timeFormatterFn: t.config.xConfigs[0].timeFormatterFn
          });
        };
      },
      713: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(138),
          r = n(125),
          a = n(670),
          l = (i = a) && i.__esModule ? i : { default: i };
        function s(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var c = "M",
          u = "L",
          f = "l",
          d = "h",
          h = "v",
          p = (function(t) {
            function e() {
              return (
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                (function(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                })(this, t.apply(this, arguments))
              );
            }
            return (
              s(e, t),
              (e.prototype.__setDefaultConfig = function() {
                t.prototype.__setDefaultConfig.call(this),
                  (this.config.type = "vertical"),
                  (this.config.value = undefined),
                  (this.config["default-stroke-width"] = 1),
                  (this.config["default-vertical-marker-fill"] = "#5f5f5f"),
                  (this.config["default-vertical-label-fill"] = "#ffffff"),
                  (this.config["default-horizontal-marker-fill"] = "#5f5f5f"),
                  (this.config["default-horizontal-label-fill"] = "#ffffff"),
                  (this.config["default-stroke"] = "#9a9a9a"),
                  (this.config["default-stroke-opacity"] = 1),
                  (this.config["default-font-size"] = "10"),
                  (this.config["default-font-weight"] = "normal"),
                  (this.config["default-font-style"] = "normal"),
                  (this.config["default-padding"] = "2"),
                  (this.config["default-text-anchor"] = "middle");
              }),
              (e.prototype.configureAttributes = function(e) {
                t.prototype.configureAttributes.call(this, e);
                var n = this.config;
                for (var i in e) e.hasOwnProperty(i) && (n[i] = e[i]);
              }),
              (e.prototype.getPathArr = function() {
                var t = this.config,
                  e = "vertical" === t.type,
                  n = t.scale,
                  i = t.value,
                  o = this.getLinkedParent().config,
                  r = o.padding,
                  a = o.canvasLeft - r.left,
                  l = o.canvasTop - r.top,
                  s = o.canvasWidth,
                  u = o.canvasHeight;
                return e
                  ? [c, n.getRangeValue(i), l, h, u]
                  : [c, a, n.getRangeValue(i), d, s];
              }),
              (e.prototype.drawVerticalCrosslineText = function() {
                var t = this.config,
                  e = t.dateRange,
                  n = t.timeFormatterFn({ dateRange: e, type: "crossline" }),
                  i = t.value,
                  o = t.scale,
                  a = (0, r.pluckNumber)(t.padding, t["default-padding"]),
                  s = this.getLinkedParent().config,
                  f = s.padding,
                  p = s.canvasLeft - f.left,
                  g = s.canvasTop - f.top,
                  m = s.canvasWidth,
                  y = g + s.canvasHeight,
                  v = p + m,
                  b = this.getFromEnv("smartLabel"),
                  x = this.getFromEnv("baseTextStyle"),
                  k = void 0,
                  _ = void 0,
                  w = 0,
                  S = (0, r.pluck)(
                    t.markerFill,
                    t["default-vertical-marker-fill"]
                  ),
                  C = (0, r.pluck)(
                    t.labelFill,
                    t["default-vertical-label-fill"]
                  ),
                  E = void 0,
                  D = void 0;
                (0, l["default"])(i) &&
                  (b.setStyle({
                    fontFamily: (0, r.pluck)(
                      t["font-family"],
                      x["font-family"]
                    ),
                    fontSize: (0, r.pluck)(
                      t["font-size"],
                      t["default-font-size"]
                    ),
                    fontWeight: (0, r.pluck)(
                      t["font-weight"],
                      t["default-font-weight"]
                    )
                  }),
                  (D = b.getOriSize(n)),
                  (E = o.getRangeValue(i)),
                  this.addGraphicalElement({
                    el: "group",
                    container: { id: "thermo", label: "thermo", isParent: !0 },
                    component: this,
                    label: "crossline",
                    attr: { name: "veritcal-crosssline-marker-group" },
                    id: "crossline"
                  }),
                  E + D.width / 2 + 2 * a > v
                    ? ((k = [
                        c,
                        E,
                        y,
                        u,
                        E,
                        y + a,
                        h,
                        D.height + 2 * a,
                        d,
                        -(D.width + 4 * a),
                        h,
                        -(D.height + 2 * a),
                        u,
                        E - a,
                        y + a,
                        "z"
                      ]),
                      (_ = "end"),
                      (w = -2 * a))
                    : E - D.width / 2 - 2 * a < p
                    ? ((k = [
                        c,
                        E,
                        y,
                        u,
                        E,
                        y + a,
                        h,
                        D.height + 2 * a,
                        d,
                        D.width + 4 * a,
                        h,
                        -(D.height + 2 * a),
                        u,
                        E + a,
                        y + a,
                        "z"
                      ]),
                      (_ = "start"),
                      (w = 2 * a))
                    : ((k = [
                        c,
                        E,
                        y,
                        u,
                        E - a,
                        y + a,
                        u,
                        E - D.width / 2 - 2 * a,
                        y + a,
                        h,
                        D.height + 2 * a,
                        d,
                        D.width + 4 * a,
                        h,
                        -(D.height + 2 * a),
                        u,
                        E + a,
                        y + a,
                        "z"
                      ]),
                      (_ = "middle")),
                  this.addGraphicalElement({
                    el: "path",
                    attr: { path: k, fill: S },
                    id: "vertical-crossline-marker",
                    container: { label: "crossline" }
                  }),
                  this.addGraphicalElement({
                    el: "text",
                    attr: {
                      fill: C,
                      text: n,
                      x: E + w,
                      y: y + 2 * a + D.height / 2,
                      "text-anchor": _,
                      "font-family": (0, r.pluck)(
                        t["font-family"],
                        x["font-family"]
                      ),
                      "font-size": (0, r.pluck)(
                        t["font-size"],
                        t["default-font-size"]
                      ),
                      "font-weight": (0, r.pluck)(
                        t["font-weight"],
                        t["default-font-weight"]
                      ),
                      "font-style": (0, r.pluck)(
                        t["font-style"],
                        t["default-font-style"]
                      )
                    },
                    id: "vertical-crossline-text",
                    container: { label: "crossline" }
                  }));
              }),
              (e.prototype.drawHorizontalCrosslineText = function() {
                var t = this.config,
                  e = t.value,
                  n = t.formatterFn({
                    value: t.text,
                    type: "crossline",
                    prefix: t.prefix,
                    suffix: t.suffix
                  }),
                  i = this.getFromEnv("baseTextStyle"),
                  o = this.getFromEnv("smartLabel"),
                  a = (0, r.pluck)(
                    t.markerFill,
                    t["default-horizontal-marker-fill"]
                  ),
                  s = (0, r.pluck)(
                    t.labelFill,
                    t["default-horizontal-label-fill"]
                  ),
                  c = this.getHorizontalMarkerProps();
                (0, l["default"])(e) &&
                  (o.setStyle({
                    fontFamily: (0, r.pluck)(
                      t["font-family"],
                      i["font-family"]
                    ),
                    fontSize: (0, r.pluck)(
                      t["font-size"],
                      t["default-font-size"]
                    ),
                    fontWeight: (0, r.pluck)(
                      t["font-weight"],
                      t["default-font-weight"]
                    )
                  }),
                  this.addGraphicalElement({
                    el: "group",
                    container: { id: "strato", label: "strato", isParent: !0 },
                    component: this,
                    label: "crossline",
                    attr: { name: "horizontal-crosssline-marker-group" },
                    id: "crossline"
                  }),
                  this.addGraphicalElement({
                    el: "path",
                    attr: { path: c.markerPath, fill: a, stroke: a },
                    id: "horizontal-crossline-marker",
                    container: { label: "crossline" }
                  }),
                  this.addGraphicalElement({
                    el: "text",
                    attr: {
                      fill: s,
                      text: n,
                      x: c.markerText.x,
                      y: c.markerText.y,
                      "text-anchor": (0, r.pluck)(
                        t["text-anchor"],
                        t["default-text-anchor"]
                      ),
                      "font-family": (0, r.pluck)(
                        t["font-family"],
                        i["font-family"]
                      ),
                      "font-size": (0, r.pluck)(
                        t["font-size"],
                        t["default-font-size"]
                      ),
                      "font-weight": (0, r.pluck)(
                        t["font-weight"],
                        t["default-font-weight"]
                      ),
                      "font-style": (0, r.pluck)(
                        t["font-style"],
                        t["default-font-style"]
                      )
                    },
                    id: "horizontal-crossline-text",
                    container: { label: "crossline" }
                  }));
              }),
              (e.prototype.getHorizontalMarkerProps = function() {
                var t,
                  e,
                  n = this.config,
                  i = n.value,
                  o = n.scale,
                  a = n.yAxisAlignment,
                  l = (0, r.pluckNumber)(n.padding, n["default-padding"]),
                  s = this.getLinkedParent().config,
                  u = n.formatterFn({
                    value: n.text,
                    type: "crossline",
                    prefix: n.prefix,
                    suffix: n.suffix
                  }),
                  p = s.borderConfig,
                  g = s.padding,
                  m = s.canvasLeft + p.leftBorder - g.left,
                  y = m + (s.canvasWidth - p.rightBorder + g.left),
                  v = void 0,
                  b = {},
                  x = {};
                switch (
                  ((e = this.getFromEnv("smartLabel").getSmartText(u)),
                  (t = o.getRangeValue(i)),
                  a)
                ) {
                  case "left":
                    (v = [
                      c,
                      m,
                      t,
                      d,
                      -5,
                      f,
                      -5,
                      -e.height / 2 - 2 * l,
                      d,
                      -(e.width + 2 * l),
                      h,
                      e.height + 4 * l,
                      d,
                      e.width + 2 * l,
                      f,
                      5,
                      -e.height / 2 - 2 * l
                    ]),
                      (b.x = m - 10 - (e.width + 2 * l) / 2),
                      (b.y = t);
                    break;
                  case "right":
                    (v = [
                      c,
                      y,
                      t,
                      d,
                      5,
                      f,
                      10,
                      -e.height / 2 - 2 * l,
                      d,
                      e.width + 2 * l,
                      h,
                      e.height + 4 * l,
                      d,
                      -(e.width + 2 * l),
                      f,
                      -10,
                      -e.height / 2 - 2 * l
                    ]),
                      (b.x = y + 10 + (e.width + 2 * l) / 2),
                      (b.y = t);
                }
                return (x.markerPath = v), (x.markerText = b), x;
              }),
              (e.prototype.draw = function() {
                var t = this.config,
                  e = (+t.value && this.getPathArr()) || [],
                  n = (0, r.convertColor)(
                    (0, r.pluck)(t.stroke, t["default-stroke"])
                  ),
                  i = (0, r.pluckNumber)(
                    t["stroke-width"],
                    t["default-stroke-width"]
                  ),
                  o = (0, r.pluckNumber)(
                    t["stroke-opacity"],
                    t["default-stroke-opacity"]
                  );
                this.addGraphicalElement({
                  el: "group",
                  container: { id: "strato", label: "strato", isParent: !0 },
                  component: this,
                  label: "verticalcrossline",
                  attr: { name: "vertical-crosssline-group" },
                  id: "crossline"
                }),
                  this.addGraphicalElement({
                    el: "group",
                    container: { id: "strato", label: "strato", isParent: !0 },
                    component: this,
                    label: "horizontalcrossline",
                    attr: { name: "horizontal-crosssline-group" },
                    id: "crossline"
                  }),
                  e.length &&
                    this.addGraphicalElement({
                      el: "path",
                      attr: {
                        path: e,
                        stroke: n,
                        "stroke-width": i,
                        "stroke-opacity": o
                      },
                      container: { label: t.type + "crossline" },
                      id: t.type + "-crossline-path",
                      component: this
                    }),
                  t.showMarker &&
                    ("vertical" === t.type
                      ? this.drawVerticalCrosslineText()
                      : this.drawHorizontalCrosslineText());
              }),
              e
            );
          })(o.SmartRenderer);
        e["default"] = p;
      },
      714: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(713),
          r = (i = o) && i.__esModule ? i : { default: i };
        e["default"] = function(t) {
          t.attachChild(r["default"], "horizontalCrossLine").configure({
            type: "horizontal"
          });
        };
      },
      715: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(716),
          r = (i = o) && i.__esModule ? i : { default: i };
        e["default"] = function(t) {
          t.attachChild(r["default"], "timeAxis"),
            t.getChildren("timeAxis").forEach(function(e) {
              e.configure({
                skipinfo: { minor: !0 },
                overlap: !0,
                validateLabelDimensions: 1,
                offset: { x: 2, y: 2 },
                style: {
                  text: {
                    major: {
                      fill: "#5f5f5f",
                      "font-size": 11,
                      "text-anchor": "start"
                    },
                    context: { "text-anchor": "start" },
                    minor: { "text-anchor": "start" }
                  }
                },
                ticksize: 0,
                domainline: !1,
                align: "top",
                dayinmajor: !0,
                stickycontextlabel: !1,
                scalemode: "random",
                scale: t.config.xConfigs[0].scale
              });
            });
        };
      },
      716: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                },
          r = n(138),
          a = n(399),
          l = (i = a) && i.__esModule ? i : { default: i },
          s = n(125),
          c = n(717);
        function u(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var f = function(t) {
            return t;
          },
          d = function(t) {
            return null === t || void 0 === t;
          },
          h = "top",
          p = "left",
          g = "major",
          m = "context",
          y = Math.max,
          v = Math.min,
          b = Math.ceil,
          x = Math.floor,
          k = function(t) {
            return "t" + t + ",0";
          },
          _ = function(t) {
            return "t0," + t;
          },
          w = function(t, e, n) {
            if (t && e) return t[e[n]];
          },
          S = function(t) {
            var e =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : 12,
              n = e <= 15 ? 0 : y(0, x(e / 10)),
              i = "WW";
            for (n = v(b(t / 2), n); n < t; ) (i += n % 2 ? "W" : "L"), n++;
            return i;
          },
          C = function(t, e) {
            return (
              !(t.x > e.x + e.width || e.x > t.x + t.width) &&
              !(t.y > e.y + e.height || e.y > t.y + t.height)
            );
          },
          E = function(t) {
            (t.text = ""), (t.dim.width = 0), (t.dim.height = 0);
          },
          D = function(t) {
            var e = void 0;
            switch (t) {
              case p:
                e = "end";
                break;
              case "right":
                e = "start";
                break;
              default:
                e = "middle";
            }
            return e;
          },
          M = function(t, e, n, i) {
            var o = void 0;
            return (
              (o =
                "start" === e
                  ? n.x
                  : "end" === e
                  ? n.x - t.width
                  : n.x - t.width / 2) >= 0 && o + t.width <= i.width
            );
          },
          T = (function(t) {
            function e() {
              return (
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                (function(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                })(this, t.apply(this, arguments))
              );
            }
            return (
              u(e, t),
              (e.prototype.getType = function() {
                return "axis";
              }),
              (e.prototype.getName = function() {
                return "axis";
              }),
              (e.prototype.__setDefaultConfig = function() {
                t.prototype.__setDefaultConfig.call(this);
                var e = this.config;
                this.setScale(new l["default"]()),
                  this.setAlignment(p),
                  this.setTickArguments(),
                  this.setTickValues(),
                  this.setReverse(!1),
                  this.setTickSize(12),
                  this.setTickPadding(1),
                  this.setDomainLine(!0),
                  this.setTicksDraw(!0),
                  this.setLabelOffset(),
                  this.setDayInMajor(!1),
                  this.setStickyContextLabel(!0),
                  (e.alignDiff = 0),
                  (e.maxLabelSpace = 0),
                  (e.defaultStyle = e.style = {
                    ticks: {
                      minor: { stroke: "#EFEFEF" },
                      major: { stroke: "#AAAAAA" },
                      context: {}
                    },
                    text: {
                      major: {
                        fill: "#858585",
                        "font-size": "12px",
                        "font-weight": "normal",
                        "font-style": "normal"
                      },
                      minor: {
                        fill: "#9A9A9A",
                        "font-size": "11px",
                        "font-weight": "normal",
                        "font-style": "normal"
                      },
                      context: {
                        fill: "#858585",
                        "font-size": "12px",
                        "font-weight": "normal",
                        "font-style": "normal"
                      }
                    },
                    line: { fill: "#D6D6D6" },
                    title: {
                      fill: "#5F5F5F",
                      "font-size": "12px",
                      "font-weight": "normal",
                      "font-style": "normal"
                    }
                  }),
                  this.config.prevTicks || (this.config.prevTicks = []);
              }),
              (e.prototype.configureAttributes = function(e) {
                t.prototype.configureAttributes.call(this, e);
                e.scale && this.setScale(e.scale),
                  e.align && this.setAlignment(e.align, e.overlap),
                  e.reverse && this.setReverse(e.reverse),
                  e.tickarguments &&
                    this.setTickArguments.apply(this, e.tickarguments),
                  e.title && this.setAxisName(e.title),
                  e.skipinfo && this.setSkipInfo(e.skipinfo),
                  e.offset && this.setLabelOffset(e.offset),
                  e.dayinmajor && this.setDayInMajor(e.dayinmajor),
                  e.scalemode && this.setScaleMode(e.scalemode),
                  "undefined" != typeof e.stickycontextlabel &&
                    this.setStickyContextLabel(e.stickycontextlabel),
                  !d(e.ticksize) && this.setTickSize(e.ticksize),
                  !d(e.tickpadding) && this.setTickPadding(e.tickpadding),
                  this.setDomainLine(e.domainline),
                  this.setTicksDraw(e.drawticks),
                  !d(e.formatterFn) && this.setTickFormat(e),
                  e.style && this.parseStyle(e.style),
                  (this.config.validateLabelDimensions = (0, s.pluckNumber)(
                    e.validateLabelDimensions,
                    0
                  ));
              }),
              (e.prototype.parseStyle = function() {
                var t =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : {},
                  e = this.config,
                  n = e.defaultStyle,
                  i = this.getFromEnv("getStyleDef"),
                  o = Object.assign({}, n),
                  r = this.getFromEnv("baseTextStyle"),
                  a = void 0,
                  l = void 0,
                  s = void 0,
                  u = void 0,
                  f = void 0,
                  d = void 0;
                if (
                  ((l = o.ticks.major = Object.assign(
                    {},
                    n.ticks.major,
                    i(t.ticks && t.ticks.major)
                  )),
                  (s = o.ticks.minor = Object.assign(
                    {},
                    n.ticks.minor,
                    i(t.ticks && t.ticks.minor)
                  )),
                  (u = o.ticks.context = Object.assign(
                    {},
                    n.ticks.context,
                    i(t.ticks && t.ticks.context)
                  )),
                  t["tick-mark"])
                ) {
                  for (a in ((f = i(t["tick-mark"])),
                  (o.ticks.major = l = Object.assign({}, l, f)),
                  f))
                    c.styleInterpolator.hasOwnProperty(a)
                      ? "fill" === a || "stroke" === a
                        ? ((s[a] = c.styleInterpolator[a].minor(l[a], 19)),
                          (u[a] = c.styleInterpolator[a].context(l[a], 100)))
                        : ((s[a] = c.styleInterpolator[a].minor(l[a])),
                          (u[a] = c.styleInterpolator[a].context(l[a])))
                      : ((s[a] = l[a]), (u[a] = l[a]));
                  (o.ticks.minor = s), (o.ticks.context = u);
                }
                if (
                  ((l = o.text.major = Object.assign(
                    {},
                    n.text.major,
                    r,
                    i(t.text && t.text.major)
                  )),
                  (s = o.text.minor = Object.assign(
                    {},
                    n.text.minor,
                    r,
                    i(t.text && t.text.minor)
                  )),
                  (u = o.text.context = Object.assign(
                    {},
                    n.text.context,
                    r,
                    i(t.text && t.text.context)
                  )),
                  t.label)
                ) {
                  for (a in ((d = i(t.label)),
                  (l = o.text.major = Object.assign({}, l, d)),
                  d))
                    c.styleInterpolator.hasOwnProperty(a)
                      ? "fill" === a || "stroke" === a
                        ? ((s[a] = c.styleInterpolator[a].minor(l[a], 80)),
                          (u[a] = c.styleInterpolator[a].context(l[a], 100)))
                        : ((s[a] = c.styleInterpolator[a].minor(l[a])),
                          (u[a] = c.styleInterpolator[a].context(l[a])))
                      : ((s[a] = l[a]), (u[a] = l[a]));
                  (o.text.minor = s), (o.text.context = u);
                }
                Object.assign(n.title, r),
                  t.title && (o.title = Object.assign(n.title, i(t.title))),
                  t.line && (o.line = Object.assign(n.line, i(t.line))),
                  (e.style = o);
              }),
              (e.prototype.placeAxis = function() {
                var t,
                  e,
                  n,
                  i,
                  o,
                  r,
                  a,
                  l = this.config,
                  c = l.isVertical,
                  u = this.getScale(),
                  y = this.getSkipInfo() || {},
                  v = void 0,
                  b = void 0,
                  x = this.getTickPadding(),
                  k = this.getFromEnv("smartLabel"),
                  _ = [],
                  C = void 0,
                  E = void 0,
                  D = 0,
                  M = 0,
                  T = void 0,
                  O = this.getAxisName(),
                  F = void 0,
                  L = void 0,
                  I = void 0,
                  P = void 0,
                  j = void 0,
                  A = [];
                for (
                  (v = (this.getTickArguments() || []).slice(0)).push(y),
                    v.push(l.dayInMajor),
                    e = d(this.getTickValues())
                      ? u.ticks
                        ? u.ticks.apply(u, v)
                        : u.getDomain()
                      : this.getTickValues(),
                    b = d(this.getTickFormat())
                      ? u.tickFormat
                        ? u.tickFormat.apply(u, this.getTickArguments())
                        : f
                      : this.getTickFormat(),
                    o = l.style.text.context,
                    k.setStyle(Object.assign({}, o)),
                    r = o["font-size"] || o.fontSize,
                    l.labelHeight = 1.2 * parseFloat(r, 10),
                    O &&
                      (k.setStyle(Object.assign({}, l.style.title)),
                      (D += (l.axisNameDim = k.getOriSize(O, !1)).height)),
                    n = u._tickType || [],
                    C = 0,
                    E = e.length;
                  C < E;
                  C++
                ) {
                  var B;
                  (L = e[C]),
                    (F = w(u._timeFormat, n, C)),
                    k.setStyle(Object.assign({}, l.style.text[n[C] || g])),
                    (I = l.isVertical
                      ? b.formatFn(
                          {
                            value: L,
                            prefix: b.prefix,
                            suffix: b.suffix,
                            type: "axis"
                          },
                          F
                        )
                      : b(L, F, n[C])),
                    (M = Math.max(I.length, M)),
                    (j = k.getOriSize(I, !1)),
                    c && (j.width = l.vLabelWidth),
                    (T = this.getTickSize(n[C])),
                    _.push(
                      (((B = { text: I, value: L, dim: j, tickLen: T })[l.x] =
                        x + T),
                      B)
                    ),
                    n[C] !== m && A.push((c ? j.width : j.height) + T);
                }
                if (c && d(l.vLabelWidth))
                  for (
                    l.vLabelWidth = 0, A = [], C = 0, E = e.length;
                    C < E;
                    C++
                  )
                    k.setStyle(Object.assign({}, l.style.text[n[C] || g])),
                      (P = +(P = l.style.text[n[C] || g]["font-size"])
                        .toString()
                        .split("px")[0]),
                      (j = k.getOriSize(S(M, P), !1)),
                      (_[C].dim = j),
                      (l.vLabelWidth = Math.max(j.width, l.vLabelWidth)),
                      n[C] !== m && A.push((c ? j.width : j.height) + T);
                for (
                  l.values = _,
                    a = this.getLabelOverlapBuffer(),
                    D += l.prevMaxLen = (0, s.pluckNumber)(
                      (0, s.safeMax)(A),
                      l.prevMaxLen,
                      0
                    ),
                    i = c ? 0 : l.labelHeight,
                    l.maxLabelSpace = D + x + a + i,
                    C = 0,
                    E = e.length;
                  C < E;
                  C++
                )
                  (L = _[C]),
                    l.orientation === h || l.orientation === p
                      ? (L[l.x] = l.maxLabelSpace - x - a - L.tickLen)
                      : (L[l.x] = x + L.tickLen);
                return (
                  (l.axisDimension = (((t = {})[l.align] = l.maxLabelSpace),
                  t)),
                  l.axisDimension
                );
              }),
              (e.prototype.getLabelOverlapBuffer = function() {
                var t,
                  e = this.config,
                  n = e.values,
                  i = this.getScale()._tickType || [],
                  o = void 0,
                  r = void 0,
                  a = void 0,
                  l = 0,
                  s = void 0;
                for (
                  a = 0, t = n.length;
                  a < t &&
                  (i[a] !== g && i[a]
                    ? "minor" === i[a] && (r = n[a])
                    : (o = n[a]),
                  !o || !r);
                  a++
                );
                if (r)
                  switch (((s = { x: r.dim.width, y: r.dim.height }), e.k)) {
                    case 1:
                      l = Math.max(r[e.x] + s[e.x] - o[e.x], 0);
                      break;
                    case -1:
                      l = Math.max(o[e.x] - (r[e.x] + s[e.x]), 0);
                  }
                return (e.overlapBuffer = (e.k * l) / 3);
              }),
              (e.prototype.makeBBox = function(t) {
                var e,
                  n =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : 5,
                  i = this.config,
                  o = this.getScale(),
                  r = { x: t.dim.width, y: t.dim.height };
                return (
                  ((e = {})[i.x] = t[i.x] - n - r[i.x] / 2),
                  (e[i.xInverse] =
                    o.getRangeValue(t.value) - n - r[i.xInverse] / 2),
                  (e.width = t.dim.width + n),
                  (e.height = t.dim.height + n),
                  e
                );
              }),
              (e.prototype.setMinorSkipIndex = function() {
                var t,
                  e,
                  n,
                  i,
                  r,
                  a = this.config,
                  l = this.getScale(),
                  c = a.values,
                  u = l._tickType || [],
                  f = [],
                  d = void 0,
                  h = void 0,
                  p = c.length,
                  m = void 0,
                  y = void 0,
                  v = void 0,
                  b = 1,
                  k = 1,
                  _ = !1,
                  w = !1;
                for (d = 0; d < p; d++) {
                  if (u[d] === g || o(u[d]) === s.UNDEF)
                    for (h = d + 1; h < p; h++)
                      if (u[h] === g || o(u[h]) === s.UNDEF) {
                        (m = c[d]),
                          (y = c[h]),
                          (f = c.slice(d + 1, h)),
                          (_ = !0);
                        break;
                      }
                  if (_) break;
                }
                if (f.length)
                  if (
                    ((p = f.length),
                    (r = d),
                    (t = x(p / 2)),
                    (e = this.makeBBox(m)),
                    (n = this.makeBBox(y)),
                    (i = this.makeBBox(f[t])),
                    C(i, e) || C(i, n))
                  )
                    a.minorSkip = p;
                  else {
                    for (d = t - 1; d >= 0; d--)
                      if (((v = this.makeBBox(f[d])), !C(v, i))) {
                        b = t - d;
                        break;
                      }
                    for (d = t + 1; d < p + r; d++)
                      if (((v = this.makeBBox(f[d])), !C(v, i))) {
                        k = d - t;
                        break;
                      }
                    for (p = f.length; !w; ) {
                      for (w = !0, d = t + k; d < p; d += k)
                        if (C(this.makeBBox(f[d]), this.makeBBox(f[d - k]))) {
                          k++, (w = !1);
                          break;
                        }
                      for (d = t - b; d >= 0; d -= b)
                        if (C(this.makeBBox(f[d]), this.makeBBox(f[d + b]))) {
                          b++, (w = !1);
                          break;
                        }
                    }
                    a.minorSkip = Math.max(b, k);
                  }
              }),
              (e.prototype.cleanseMinorTicks = function() {
                var t,
                  e = this.config,
                  n = this.getScale()._tickType || [],
                  i = void 0,
                  o = void 0,
                  r = void 0,
                  a = [],
                  l = void 0,
                  s = [],
                  c = void 0,
                  u = void 0,
                  f = void 0,
                  d = void 0,
                  h = e.values,
                  p = -1,
                  m = void 0,
                  y = (((t = {})[e.xInverse] = "height"),
                  (t[e.x] = "width"),
                  t);
                for (i = 0, r = h.length; i < r; i++)
                  (n[i] !== g && n[i]) || a.push(i);
                for (i = 0, r = a.length; i < r - 1; i++)
                  if (
                    ((l = h.slice(a[i] + 1, a[i + 1])),
                    s.push(l),
                    (m = l.length),
                    (p = -1),
                    l.length)
                  ) {
                    for (
                      c = x(l.length / 2),
                        u = this.makeBBox(h[a[i]], 0),
                        f = this.makeBBox(h[a[i + 1]], 0),
                        o = c;
                      o >= 0;
                      o -= 1
                    )
                      if (((d = this.makeBBox(l[o], 1)), e.isVertical)) {
                        if (u[e.xInverse] <= d[e.xInverse] + d[y[e.xInverse]]) {
                          p = Math.max(p, o);
                          break;
                        }
                      } else if (
                        d[e.xInverse] <=
                        u[e.xInverse] + u[y[e.xInverse]]
                      ) {
                        p = Math.max(p, o);
                        break;
                      }
                    for (o = c; o < l.length; o += 1)
                      if (((d = this.makeBBox(l[o], 1)), e.isVertical)) {
                        if (f[e.xInverse] + f[y[e.xInverse]] >= d[e.xInverse]) {
                          m = Math.min(m, o);
                          break;
                        }
                      } else if (
                        d[e.xInverse] + d[y[e.xInverse]] >=
                        f[e.xInverse]
                      ) {
                        m = Math.min(m, o);
                        break;
                      }
                    for (o = 0; o < l.length; o++)
                      (o <= p || o >= m || Math.abs(c - o) % e.minorSkip) &&
                        E(l[o]);
                  }
              }),
              (e.prototype.cleanseMajorTicks = function() {
                var t,
                  e,
                  n = this.config,
                  i = this.getScale(),
                  o = n.values,
                  r = [],
                  a = [],
                  l = [],
                  s = [],
                  c = i._tickType || [],
                  u = 0,
                  f = 1,
                  d = 1,
                  h = void 0,
                  p = void 0,
                  y = !1;
                if ((p = o.length)) {
                  for (h = 0; h < p; h++)
                    c[h] !== g && c[h]
                      ? c[h] === m && (l.push(o[h]), s.push(h))
                      : (r.push(o[h]), a.push(h));
                  if (s.length)
                    for (h = 0, p = r.length; h < p; h++)
                      +l[0].value == +r[h].value && (u = h);
                  else u = 0;
                  for (
                    t = this.makeBBox(r[0]), h = u + 1, p = r.length;
                    h < p;
                    h++
                  )
                    if (!C(this.makeBBox(r[h]), t)) {
                      d = h - u;
                      break;
                    }
                  for (h = u - 1; h >= 0; h--)
                    if (!C(this.makeBBox(r[h]), t)) {
                      f = u - h;
                      break;
                    }
                  for (; !y; ) {
                    for (y = !0, h = u + d; h < p; h += d)
                      if (C(this.makeBBox(r[h]), this.makeBBox(r[h - d]))) {
                        d++, (y = !1);
                        break;
                      }
                    for (h = u - f; h >= 0; h -= d)
                      if (C(this.makeBBox(r[h]), this.makeBBox(r[h + f]))) {
                        f++, (y = !1);
                        break;
                      }
                  }
                  for (
                    n.majorSkip = e = Math.max(f, d), h = 0, p = r.length;
                    h < p;
                    h++
                  )
                    Math.abs(h - u) % e && E(r[h]);
                }
              }),
              (e.prototype.draw = function() {
                var t = this.config,
                  e = this.getFromEnv("chart").config,
                  n = this.getScale(),
                  i = this.getLinkedParent(),
                  o = n._tickType || [],
                  r = (n.getBandwidth
                    ? function(t) {
                        return function(e) {
                          return +t.getRangeValue(e) + t.getBandwidth() / 2;
                        };
                      }
                    : function(t) {
                        return function(e) {
                          return +t.getRangeValue(e);
                        };
                      })(n.copy()),
                  a = n.getRange(),
                  l = n.getDomain(),
                  c = Number(a[0]),
                  u = Number(a[a.length - 1]),
                  f = this.getOrientation(),
                  d = this.getFromEnv("smartLabel"),
                  y = f === p || f === h ? t.maxLabelSpace + 2 : 0,
                  v = t.isVertical,
                  b = t.orientation,
                  x = t.xInverse,
                  k = t.x,
                  _ = t.k,
                  w = t.style;
                this.addGraphicalElement({
                  el: "group",
                  attr: { name: "strato-axis", transform: t.groupTranslation },
                  container: { id: "strato", label: "group", isParent: !0 },
                  id: "strato-axis",
                  component: this,
                  label: "group"
                }),
                  this.addGraphicalElement({
                    el: "group",
                    attr: { name: "axis-" + b },
                    container: { id: "strato-axis", label: "group" },
                    id: "axisGroup",
                    component: this,
                    label: "group"
                  });
                var S,
                  C,
                  E = void 0,
                  T = void 0,
                  O = void 0,
                  F = void 0,
                  L = void 0,
                  I = void 0,
                  P = void 0,
                  j = void 0,
                  A = 0,
                  B = void 0,
                  N = void 0,
                  H = void 0,
                  R = void 0,
                  G = void 0;
                if (
                  (this.setMinorSkipIndex(),
                  this.cleanseMinorTicks(),
                  this.cleanseMajorTicks(),
                  (C = this.getDomainLine()) &&
                    this.addGraphicalElement({
                      el: "path",
                      attr: {
                        path: C,
                        stroke: "#d6d6d6",
                        fill: "none",
                        "stroke-width": 2
                      },
                      container: {
                        id: "axisGroup",
                        label: "group",
                        isParent: !1
                      },
                      css: w.line,
                      component: this,
                      label: "path"
                    }),
                  (S = this.getAxisName()) &&
                    ((H = parseFloat(
                      t.style.title["font-size"] || t.style.title.fontSize,
                      10
                    )),
                    d.setStyle(Object.assign({}, t.style.title)),
                    (O = d.getSmartText(S, Math.abs(c - u), 1.2 * H)),
                    v
                      ? ((F =
                          f === p
                            ? 0 + O.height / 2
                            : t.maxLabelSpace - O.height / 2),
                        (L = (c - u) / 2))
                      : ((F = (u - c) / 2),
                        (L =
                          f === h
                            ? 0 + O.height / 2
                            : t.maxLabelSpace - O.height / 2)),
                    this.addGraphicalElement({
                      el: "text",
                      attr: {
                        text: O.text,
                        x: F,
                        y: L,
                        opacity: w.title.opacity,
                        "text-anchor": "middle",
                        transform: v
                          ? (0, s.getSuggestiveRotation)(90 * _, F, L)
                          : "t0,0"
                      },
                      container: {
                        id: "axisGroup",
                        label: "group",
                        isParent: !1
                      },
                      tooltext: e.showTooltip ? O.tooltext : s.UNDEF,
                      css: w.title,
                      component: this,
                      id: "axis-name",
                      label: "name"
                    })),
                  this.getTicksDraw())
                )
                  for (
                    A = o.length - o.indexOf(m),
                      B = t.values.find(function(t, e) {
                        return t.value >= l[0] && t.value <= l[1] && o[e] === g;
                      }),
                      I = 0,
                      P = t.values.length;
                    I < P;
                    I++
                  ) {
                    var Y, z;
                    if (
                      ((j = t.values[I]),
                      (T = o[I] || g) === m ||
                        !(j.value < l[0] || j.value > l[1]))
                    )
                      if (
                        !(
                          T === m &&
                          A > 1 &&
                          (j.value < l[0] || j.value > l[1])
                        )
                      )
                        if (
                          ((j[x] =
                            T === m && 1 === A
                              ? this.getStickyContextLabel() || void 0 === B
                                ? Math.max(r(j.value), j.dim.width / 2)
                                : r(B.value)
                              : r(j.value)),
                          (j[k] += t.alignDiff),
                          (E = j.value),
                          this.addGraphicalElement({
                            container: {
                              id: "axisGroup",
                              label: "group",
                              isParent: !1
                            },
                            attr: {
                              name: "tick",
                              transform: t.translate(j[x])
                            },
                            data: { value: E },
                            el: "group",
                            id: "tick-group-" + I,
                            component: this,
                            label: "group"
                          }),
                          T !== m &&
                            ((R = v
                              ? "M " +
                                y +
                                " 0 H " +
                                (y + _ * this.getTickSize(o[I]))
                              : "M 0 " +
                                y +
                                " V " +
                                (y + _ * this.getTickSize(o[I]))),
                            this.addGraphicalElement({
                              el: "path",
                              attr: { path: R },
                              container: {
                                id: "tick-group-" + I,
                                label: "group",
                                isParent: !1
                              },
                              id: "tick-" + I,
                              css: w.ticks[T || g],
                              component: this,
                              label: "path"
                            })),
                          (N = w.text[T || g]["text-anchor"] || D(f)),
                          ((Y = {})[x] = j[x] + t[x + "Offset"]),
                          (Y[k] =
                            j[k] +
                            t[k + "Offset"] +
                            ("minor" !== T ? t.overlapBuffer : 0)),
                          (G = Y),
                          !t.validateLabelDimensions ||
                            M(j.dim, N, G, i.getDimension()))
                        )
                          this.addGraphicalElement({
                            el: "text",
                            attr: ((z = { text: j.text + "" }),
                            (z[x] = 0 + t[x + "Offset"]),
                            (z[k] =
                              j[k] +
                              t[k + "Offset"] +
                              ("minor" !== T ? t.overlapBuffer : 0)),
                            (z["text-anchor"] = N),
                            (z["vertical-align"] =
                              b === h
                                ? "bottom"
                                : "bottom" === b
                                ? "top"
                                : "middle"),
                            z),
                            container: {
                              id: "tick-group-" + I,
                              label: "group",
                              isParent: !1
                            },
                            component: this,
                            id: "tick-label-" + I,
                            css: w.text[T || g],
                            label: "text"
                          });
                  }
              }),
              (e.prototype.updateMaxLabelSpace = function(t) {
                var e = this.config,
                  n = this.getAlignment();
                return (
                  (e.alignDiff = t - e.maxLabelSpace),
                  (e.maxLabelSpace = e.axisDimension[n] = t),
                  e.axisDimension
                );
              }),
              (e.prototype.setDayInMajor = function(t) {
                this.config.dayInMajor = t;
              }),
              (e.prototype.setSkipInfo = function() {
                var t =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {};
                this.config.tickInfo = t;
              }),
              (e.prototype.getSkipInfo = function() {
                return this.config.tickInfo;
              }),
              (e.prototype.setStickyContextLabel = function() {
                var t =
                  !(arguments.length > 0 && arguments[0] !== undefined) ||
                  arguments[0];
                this.config.stickyContextLabel = t;
              }),
              (e.prototype.getStickyContextLabel = function() {
                return this.config.stickyContextLabel;
              }),
              (e.prototype.setLabelOffset = function() {
                var t =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : {},
                  e = this.config;
                (e.xOffset = (0, s.pluckNumber)(t.x, 0)),
                  (e.yOffset = (0, s.pluckNumber)(t.y, 0));
              }),
              (e.prototype.getLabelOffset = function() {
                return { x: this.config.xOffset, y: this.config.yOffset };
              }),
              (e.prototype.getAxisName = function() {
                return this.config.axisName;
              }),
              (e.prototype.setAxisName = function() {
                var t =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : "";
                this.config.axisName = t;
              }),
              (e.prototype.getAlignment = function() {
                return this.config.align;
              }),
              (e.prototype.setAlignment = function(t) {
                var e,
                  n =
                    arguments.length > 1 &&
                    arguments[1] !== undefined &&
                    arguments[1],
                  i = this.config,
                  o = void 0;
                switch (t) {
                  case p:
                    o = n ? "right" : p;
                    break;
                  case "right":
                    o = n ? p : "right";
                    break;
                  case h:
                    o = n ? "bottom" : h;
                    break;
                  case "bottom":
                    o = n ? h : "bottom";
                }
                (i.align = t),
                  (i.orientation = o),
                  (i.isVertical = e = t === p || "right" === t),
                  (i.k = o === p || o === h ? -1 : 1),
                  (i.x = e ? "x" : "y"),
                  (i.xInverse = e ? "y" : "x"),
                  (i.translate = e ? _ : k),
                  (i.translateInverse = e ? k : _);
              }),
              (e.prototype.getOrientation = function() {
                return this.config.orientation;
              }),
              (e.prototype.setTranslation = function() {
                var t =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : 0,
                  e =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : 0;
                (this.config._translatedX = t),
                  (this.config._translatedY = e),
                  (this.config.groupTranslation = "t" + t + ", " + e);
              }),
              (e.prototype.getTranslation = function() {
                return {
                  x: this.config._translatedX,
                  y: this.config._translatedY
                };
              }),
              (e.prototype.setDomainLine = function() {
                var t =
                  !(arguments.length > 0 && arguments[0] !== undefined) ||
                  arguments[0];
                return (this.config.drawDomainLine = t), this;
              }),
              (e.prototype.getDomainLine = function() {
                var t = this.config,
                  e = this.getScale().getRange(),
                  n = t.isVertical,
                  i = t.orientation,
                  o = t.maxLabelSpace,
                  r = void 0,
                  a = +e[0],
                  l = +e[1],
                  s = void 0;
                return (
                  t.drawDomainLine &&
                    ((r = i === p || i === h ? o + 2 : 0),
                    (s = n
                      ? "M " + r + " " + a + " V " + l
                      : "M " + a + " " + r + " H " + l)),
                  s
                );
              }),
              (e.prototype.setTicksDraw = function() {
                var t =
                  !(arguments.length > 0 && arguments[0] !== undefined) ||
                  arguments[0];
                return (this.config.drawTicks = t), this;
              }),
              (e.prototype.getTicksDraw = function() {
                return this.config.drawTicks;
              }),
              (e.prototype.setScale = function(t) {
                this.config.scale = t;
              }),
              (e.prototype.getScale = function() {
                return this.config.scale;
              }),
              (e.prototype.setReverse = function(t) {
                this.config.isReverse = t;
              }),
              (e.prototype.getReverse = function() {
                return this.config.isReverse;
              }),
              (e.prototype.setTickArguments = function() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                  e[n] = arguments[n];
                return (this.config.tickArguments = e), this;
              }),
              (e.prototype.getTickArguments = function() {
                return this.config.tickArguments.slice();
              }),
              (e.prototype.setTickSize = function(t) {
                return (
                  (this.config.tickSizeOuter = Number(t)),
                  (this.config.tickSizeInner =
                    this.config.tickSizeOuter * (2 / 3)),
                  this
                );
              }),
              (e.prototype.getTickSize = function() {
                var t =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : g,
                  e = this.config;
                switch (t) {
                  case m:
                    return e.tickSizeOuter + e.labelHeight;
                  case "minor":
                    return e.tickSizeInner;
                  case g:
                    return e.tickSizeOuter;
                }
              }),
              (e.prototype.setTickPadding = function(t) {
                return (this.config.tickPadding = Number(t)), this;
              }),
              (e.prototype.getTickPadding = function() {
                return this.config.tickPadding;
              }),
              (e.prototype.setTickValues = function(t) {
                return (this.config.tickValues = d(t) ? null : t.slice()), this;
              }),
              (e.prototype.getTickValues = function() {
                return this.config.tickValues && this.config.tickValues.slice();
              }),
              (e.prototype.setTickFormat = function(t) {
                return (
                  (this.config.tickFormat = {
                    formatFn: t.formatterFn,
                    prefix: t.formatLabelPrefix,
                    suffix: t.formatLabelSuffix
                  }),
                  this
                );
              }),
              (e.prototype.getTickFormat = function() {
                return this.config.tickFormat;
              }),
              (e.prototype.getAxisEndLabelDisplaySpace = function() {
                var t = +this.getFromEnv("chartWidth"),
                  e = +this.getFromEnv("chartHeight"),
                  n = this.config.values,
                  i = this.getReverse(),
                  o = {},
                  r = void 0,
                  a = void 0,
                  l = void 0,
                  s = void 0;
                return (
                  this.config.isVertical
                    ? ((l = i ? n[n.length - 1] : n[0]),
                      (s = i ? n[0] : n[n.length - 1]),
                      (o.top = 0 - Math.min(0, l.y - l.dim.height)),
                      (o.bottom = Math.max(s.y + s.dim.height, e) - e))
                    : ((r = i ? n[n.length - 1] : n[0]),
                      (a = i ? n[0] : n[n.length - 1]),
                      (o.left = 0 - Math.min(0, r.x - r.dim.width)),
                      (o.right = Math.max(a.x + a.dim.width, t) - t)),
                  o
                );
              }),
              (e.prototype.getDimension = function() {
                return this.config.axisDimension;
              }),
              (e.prototype.setDimension = function(t) {
                return this.placeAxis(t);
              }),
              (e.prototype.setScaleMode = function(t) {
                this.config.scale.setMode(t);
              }),
              (e.prototype.getScaleMode = function() {
                return this.config.scale.getMode();
              }),
              e
            );
          })(r.SmartRenderer);
        e["default"] = T;
      },
      717: function(t, e, n) {
        "use strict";
        (e.__esModule = !0), (e.styleInterpolator = undefined);
        var i = n(125),
          o = Math.max,
          r = Math.min,
          a = Math.round,
          l = {
            minor: function(t, e) {
              return "#" + (0, i.getLightColor)(t, e);
            },
            context: function(t, e) {
              return "#" + (0, i.getDarkColor)(t, e);
            }
          },
          s = {
            minor: function(t) {
              return o(0, 0.8 * t);
            },
            context: function(t) {
              return r(1, 1.2 * t);
            }
          },
          c = {
            fill: l,
            stroke: l,
            "fill-opacity": s,
            "stroke-opacity": s,
            "font-size": {
              minor: function(t) {
                return (t = +(t + "").replace("px", "")), a(0.9 * t) + "px";
              },
              context: function(t) {
                return (t = +(t + "").replace("px", "")), a(1.1 * t) + "px";
              }
            },
            "font-weight": {
              minor: function(t) {
                return "bold" === t || +t >= 500 ? "normal" : t;
              },
              context: function(t) {
                return t;
              }
            },
            "stroke-width": {
              minor: function(t) {
                return (t = +(t + "").replace("px", "")) / 2 + "px";
              },
              context: function(t) {
                return t;
              }
            }
          };
        e.styleInterpolator = c;
      },
      718: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(230),
          r = (i = o) && i.__esModule ? i : { default: i };
        e["default"] = function(t) {
          var e = void 0;
          (e = t.attachChild(r["default"], "scroller")).configure({
            isHorizontal: !0,
            displayFlat: !0,
            width: t.getScrollerConfig("width"),
            height: t.getScrollerConfig("height"),
            anchorFill: t.getScrollerConfig("anchorFill"),
            anchorStroke: t.getScrollerConfig("anchorStroke"),
            trackFill: t.getScrollerConfig("trackFill"),
            trackStroke: t.getScrollerConfig("trackStroke"),
            buttonFill: t.getScrollerConfig("buttonFill"),
            buttonStroke: t.getScrollerConfig("buttonStroke"),
            buttonPointerFill: t.getScrollerConfig("buttonPointerFill"),
            drawStripes: t.getScrollerConfig("drawStripes"),
            stripesStroke: t.getScrollerConfig("stripesStroke"),
            restrictScrollAnchor: t.getScrollerConfig("restrictScrollAnchor"),
            scrollRatio: t.getScrollerConfig("scrollRatio")
          }),
            e.attachEventHandlers({
              scroll: function(e) {
                var n = t.getChildren("scroller")[0].config,
                  i = n.width,
                  o = n.height,
                  r = t.getScrollerConfig("scrollRatio"),
                  a = Math.min(o, 0.5 * i),
                  l = (i - 2 * a) * r - 1,
                  s = n.x + a + 0.5 + (i - 2 * a - l) * e;
                t.validateDomain([s, s + l]);
              }
            });
        };
      },
      719: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(720),
          r = (i = o) && i.__esModule ? i : { default: i };
        e["default"] = function(t) {
          t.attachChild(r["default"], "brush").configure({
            values: t.config.values,
            style: t.config.style.brush || {}
          });
        };
      },
      720: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(138),
          o = s(n(721)),
          r = s(n(722)),
          a = s(n(723)),
          l = s(n(281));
        function s(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function c(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var u = (function(t) {
          function e() {
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            var n = (function(t, e) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !e || ("object" != typeof e && "function" != typeof e)
                ? t
                : e;
            })(this, t.call(this));
            return (n._maxDimensions = {}), (n._currDimensions = {}), n;
          }
          return (
            c(e, t),
            (e.prototype.__setDefaultConfig = function() {
              var e =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              t.prototype.__setDefaultConfig.call(this, e);
              var n = this.config;
              (n.handleWidth = 12), (n.handleHeight = 20);
            }),
            (e.prototype.configureAttributes = function() {
              var e =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              t.prototype.configureAttributes.call(this, e);
              var n = this.config;
              (n.values = e.values),
                (n.style = e.style),
                this.createChildComponents();
            }),
            (e.prototype.setChildDimension = function() {
              var t = this.config,
                e = this.getChildren("selection")[0],
                n = this.getChildren("leftHandle")[0],
                i = this.getChildren("rightHandle")[0],
                o = this.getChildren("leftLabel")[0],
                r = this.getChildren("rightLabel")[0],
                a = this.getFromEnv("timeNavigatorConfig").contextScale,
                l = this.getFromEnv("timeNavigatorConfig").values || [],
                s = a.getRangeValue(l[0]),
                c = a.getRangeValue(l[1]);
              e.setDimension({
                x: s,
                y: this._maxDimensions.y,
                width: c - s,
                height: this._maxDimensions.height
              }),
                n.setDimension({
                  x: s - t.handleWidth,
                  y:
                    this._maxDimensions.y +
                    this._maxDimensions.height / 2 -
                    t.handleHeight / 2,
                  width: t.handleWidth,
                  height: t.handleHeight
                }),
                i.setDimension({
                  x: c,
                  y:
                    this._maxDimensions.y +
                    this._maxDimensions.height / 2 -
                    t.handleHeight / 2,
                  width: t.handleWidth,
                  height: t.handleHeight
                }),
                o.setDimension({ x: s, y: this._maxDimensions.y }),
                r.setDimension({ x: c, y: this._maxDimensions.y }),
                this.setCurrentBrushDimensions({
                  x: s,
                  y: this._maxDimensions.y,
                  width: c - s,
                  height: this._maxDimensions.height - this._maxDimensions.y
                });
            }),
            (e.prototype.getLabelSpace = function() {
              var t,
                e,
                n = this.getChildren("leftLabel")[0],
                i = this.getChildren("rightLabel")[0],
                o = this.getFromEnv("smartLabel"),
                r = void 0,
                a = l["default"].formatter("%b %d, %Y");
              return (
                (r = n.config.labelStyle),
                o.setStyle({
                  fontSize: r["font-size"],
                  fontFamily: r["font-family"],
                  lineHeight: r["line-height"],
                  fontWeight: r["font-weight"]
                }),
                (t = o.getOriSize(a.format(this.config.values[0]))),
                (r = i.config.labelStyle),
                o.setStyle({
                  fontSize: r["font-size"],
                  fontFamily: r["font-family"],
                  lineHeight: r["line-height"],
                  fontWeight: r["font-weight"]
                }),
                (e = o.getOriSize(a.format(this.config.values[1]))),
                Math.max(t.height, e.height)
              );
            }),
            (e.prototype.draw = function() {
              this.addGraphicalElement({
                el: "group",
                attr: { name: "brush-group" },
                id: "brushGroup",
                label: "brushGroup",
                component: this,
                container: { id: "thermo", label: "group", isParent: !0 }
              });
            }),
            (e.prototype.hideAllLabels = function() {
              var t = this.getChildren("leftLabel")[0],
                e = this.getChildren("rightLabel")[0];
              this.config.pointerReleasedOnParent ||
                ((t.config.showLabel = e.config.showLabel = !1),
                t.asyncDraw(),
                e.asyncDraw());
            }),
            (e.prototype.createChildComponents = function() {
              var t = this.config,
                e = this.getFromEnv("getStyleDef"),
                n = void 0,
                i = void 0,
                l = void 0,
                s = void 0,
                c = void 0;
              (c = this.attachChild(
                a["default"],
                "selection"
              )).attachHandlers(),
                c.configure({
                  orientation: "horizontal",
                  selectionStyle: e(t.style.overlay) || {}
                }),
                (n = this.attachChild(
                  o["default"],
                  "leftHandle"
                )).attachHandlers(),
                n.configure({
                  orientation: "horizontal",
                  type: "leftHandle",
                  handleStyle: e(t.style.handle) || {}
                }),
                (i = this.attachChild(
                  o["default"],
                  "rightHandle"
                )).attachHandlers(),
                i.configure({
                  orientation: "horizontal",
                  type: "rightHandle",
                  handleStyle: e(t.style.handle) || {}
                }),
                (l = this.attachChild(
                  r["default"],
                  "leftLabel"
                )).attachHandlers(),
                l.configure({ orientation: "horizontal", type: "leftLabel" }),
                (s = this.attachChild(
                  r["default"],
                  "rightLabel"
                )).attachHandlers(),
                s.configure({ orientation: "horizontal", type: "rightLabel" });
            }),
            (e.prototype.setMaxBrushDimensions = function(t) {
              (this._maxDimensions = t), this.setChildDimension();
            }),
            (e.prototype.getMaxBrushDimensions = function() {
              return this._maxDimensions;
            }),
            (e.prototype.setCurrentBrushDimensions = function(t) {
              this._currDimensions = t;
            }),
            (e.prototype.getCurrentBrushDimensions = function() {
              return this._currDimensions;
            }),
            e
          );
        })(i.SmartRenderer);
        e["default"] = u;
      },
      721: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(138),
          o = n(125);
        function r(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var a = (function(t) {
          function e() {
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            var n = (function(t, e) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !e || ("object" != typeof e && "function" != typeof e)
                ? t
                : e;
            })(this, t.call(this));
            return (n._dimensions = {}), n;
          }
          return (
            r(e, t),
            (e.prototype.__setDefaultConfig = function() {
              t.prototype.__setDefaultConfig.call(this),
                (this.config.defaultStyle = {
                  fill: "#dfdfdf",
                  stroke: "none",
                  cursor: "ew-resize"
                });
            }),
            (e.prototype.configureAttributes = function() {
              var e =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              t.prototype.configureAttributes.call(this, e);
              var n = this.config,
                i = n.defaultStyle,
                o = e.handleStyle;
              (n.style = Object.assign({}, i, o)),
                (n.orientation = e.orientation),
                (n.type = e.type);
            }),
            (e.prototype.setDimension = function(t) {
              this._dimensions = t;
            }),
            (e.prototype.getDimension = function() {
              return this._dimensions;
            }),
            (e.prototype.attachHandlers = function() {
              var t = this,
                e = t.getLinkedParent(),
                n = e.getFromEnv("timeNavigator"),
                i = void 0,
                r = void 0,
                a = void 0,
                l = void 0,
                s = void 0;
              t.addEventListener(
                "fc-dragstart",
                t.dragstartHandler ||
                  (t.dragstartHandler = function(t) {
                    (r = (0, o.getTouchEvent)(t).clientX),
                      (i = e.getCurrentBrushDimensions());
                  })
              ),
                t.addEventListener(
                  "fc-dragmove",
                  t.dragmoveHandler ||
                    (t.dragmoveHandler = function(e) {
                      (a = (0, o.getTouchEvent)(e).clientX - r),
                        "leftHandle" === t.config.type
                          ? ((l = i.x + a), (s = i.x + i.width))
                          : ((l = i.x), (s = i.x + i.width + a)),
                        t
                          .getFromEnv("animationManager")
                          .setAnimationState("timenavSqueeze"),
                        n.validateDomain([l, s], t.config.type);
                    })
                );
            }),
            (e.prototype.draw = function() {
              var t = this.config.style,
                e = this.getDimension(),
                n = e.x,
                i = e.y,
                r = e.width,
                a = e.height,
                l = t.fill ? "#" + (0, o.getDarkColor)(t.fill, 60) : "#808080";
              this.addGraphicalElement({
                el: "rect",
                attr: { x: n, y: i, width: r, height: a, opacity: t.opacity },
                css: t,
                label: "handleButton",
                component: this,
                container: {
                  id: "brushGroup",
                  label: "brushGroup",
                  isParent: !0
                }
              }),
                this.addGraphicalElement({
                  el: "path",
                  attr: {
                    path:
                      "M " +
                      (n + 3.5) +
                      "," +
                      (i + 6) +
                      " v " +
                      (a - 12) +
                      "\n               M " +
                      (n + 6.5) +
                      "," +
                      (i + 6) +
                      " v " +
                      (a - 12),
                    stroke: l,
                    "stroke-width": "1",
                    "stroke-linecap": "round"
                  },
                  label: "handlePath",
                  component: this,
                  css: { cursor: "ew-resize" },
                  container: {
                    id: "brushGroup",
                    label: "brushGroup",
                    isParent: !0
                  }
                });
            }),
            e
          );
        })(i.SmartRenderer);
        e["default"] = a;
      },
      722: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(138),
          r = n(281),
          a = (i = r) && i.__esModule ? i : { default: i },
          l = n(125);
        function s(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var c = (function(t) {
          function e() {
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            var n = (function(t, e) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !e || ("object" != typeof e && "function" != typeof e)
                ? t
                : e;
            })(this, t.call(this));
            return (n._dimensions = {}), n;
          }
          return (
            s(e, t),
            (e.prototype.configureAttributes = function() {
              var e =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              t.prototype.configureAttributes.call(this, e);
              var n = this.config;
              for (var i in e) e.hasOwnProperty(i) && (n[i] = e[i]);
            }),
            (e.prototype.__setDefaultConfig = function() {
              t.prototype.__setDefaultConfig.call(this),
                (this.config.showLabel = !1),
                (this.config.labelStyle = {
                  fill: "#f3f3f3",
                  "font-size": "11px",
                  "font-weight": 600,
                  "background-color": "#5f5f5f",
                  "border-horizontal-padding": 5,
                  "border-vertical-padding": 3,
                  "vertical-align": "middle"
                });
            }),
            (e.prototype.setDimension = function(t) {
              this._dimensions = t;
            }),
            (e.prototype.getDimension = function() {
              return this._dimensions;
            }),
            (e.prototype.attachHandlers = function() {
              var t = this,
                e = t.getFromEnv("animationManager"),
                n = t.getLinkedParent(),
                i = n.getFromEnv("timeNavigator"),
                o = void 0,
                r = void 0,
                a = void 0,
                s = void 0,
                c = void 0,
                u = void 0;
              t.addEventListener(
                "fc-dragstart",
                t.dragstartHandler ||
                  (t.dragstartHandler = function(t) {
                    (a = (0, l.getTouchEvent)(t).clientX),
                      (o = n.getCurrentBrushDimensions()),
                      (i.config.labelsGettingDragged = !0),
                      (r = t.originalEvent.target),
                      (n.config.pointerReleasedOnParent = !1);
                  })
              ),
                t.addEventListener(
                  "fc-dragmove",
                  t.dragmoveHandler ||
                    (t.dragmoveHandler = function(n) {
                      e.setAnimationState("timenavSqueeze"),
                        (s = (0, l.getTouchEvent)(n).clientX - a),
                        "leftLabel" === t.config.type
                          ? ((c = o.x + s), (u = o.x + o.width))
                          : ((c = o.x), (u = o.x + o.width + s)),
                        i.validateDomain([c, u], t.config.type);
                    })
                ),
                t.addEventListener(
                  "fc-dragend",
                  t.dragendHandler ||
                    (t.dragendHandler = function(t) {
                      e.setAnimationState("timenavSqueeze"),
                        (i.config.labelsGettingDragged = !1),
                        r !== t.originalEvent.target && n.hideAllLabels();
                    })
                );
            }),
            (e.prototype.draw = function() {
              var t,
                e = this.getFromEnv("baseTextStyle"),
                n = this.config,
                i = Object.assign(n.labelStyle, e),
                o = this.getLinkedParent(),
                r = this.getFromEnv("timeNavigator").config,
                l = this.getFromEnv("smartLabel"),
                s = o.getMaxBrushDimensions(),
                c = this.getDimension(),
                u = c.x,
                f = void 0,
                d = void 0,
                h = a["default"].formatter("%b %d, %Y"),
                p = "leftLabel" === n.type ? r.values[0] : r.values[1],
                g = h.format(p),
                m = c.y,
                y = void 0,
                v = void 0,
                b = void 0,
                x = void 0,
                k = void 0,
                _ = void 0;
              l.setStyle({
                fontSize: i["font-size"],
                fontFamily: i["font-family"],
                lineHeight: i["line-height"],
                fontWeight: i["font-weight"]
              }),
                (t = l.getOriSize(g)),
                "leftLabel" === n.type
                  ? u - t.width >= s.x
                    ? ((d = "end"), (f = 1))
                    : ((d = "start"), (f = -1))
                  : u + t.width <= s.x + s.width
                  ? ((d = "start"), (f = -1))
                  : ((d = "end"), (f = 1)),
                n.showLabel &&
                  ((b = t.width),
                  (x = t.height),
                  (k = b + 2 * i["border-horizontal-padding"]),
                  (_ = x + 2 * i["border-vertical-padding"]),
                  (y = u - f * i["border-horizontal-padding"]),
                  (v = m - (x + 2 * i["border-vertical-padding"]) / 2),
                  this.addGraphicalElement({
                    el: "rect",
                    attr: {
                      x: "start" === d ? u : u - k,
                      y: m - _,
                      width: k,
                      height: _,
                      fill: i["background-color"]
                    },
                    css: { cursor: "move" },
                    shadow: [!0, 1],
                    label: "dragableLabelBackground",
                    id: n.type + "dragableLabelBackground",
                    component: this,
                    container: {
                      id: "brushGroup",
                      label: "brushGroup",
                      isParent: !0
                    }
                  }),
                  this.addGraphicalElement({
                    el: "text",
                    attr: {
                      x: y,
                      y: v,
                      text: g,
                      "font-family": i["font-family"],
                      "font-style": i["font-style"],
                      "vertical-align": i["vertical-align"],
                      "font-size": i["font-size"],
                      "font-weight": i["font-weight"],
                      "text-anchor": d,
                      fill: i.fill
                    },
                    css: { cursor: "move" },
                    id: n.type + "dragableLabel",
                    label: "dragableLabel",
                    component: this,
                    container: {
                      id: "brushGroup",
                      label: "brushGroup",
                      isParent: !0
                    }
                  }));
            }),
            e
          );
        })(o.SmartRenderer);
        e["default"] = c;
      },
      723: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(138),
          o = n(125);
        function r(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var a = (function(t) {
          function e() {
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            var n = (function(t, e) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !e || ("object" != typeof e && "function" != typeof e)
                ? t
                : e;
            })(this, t.call(this));
            return (n._dimensions = {}), n;
          }
          return (
            r(e, t),
            (e.prototype.__setDefaultConfig = function() {
              t.prototype.__setDefaultConfig.call(this),
                (this.config.defaultStyle = {
                  fill: (0, o.toRaphaelColor)({
                    FCcolor: {
                      color: "#fdfdfd,#f7fffe",
                      ratio: "0,100",
                      angle: 90,
                      alpha: "50,50"
                    }
                  }),
                  stroke: "#e3e3e3",
                  "stroke-width": 1,
                  opacity: 0.5,
                  "fill-opacity": 1,
                  cursor: "move"
                });
            }),
            (e.prototype.configureAttributes = function() {
              var e =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              t.prototype.configureAttributes.call(this, e);
              var n = this.config,
                i = e.selectionStyle,
                o = n.defaultStyle;
              (n.style = Object.assign({}, o, i)),
                (n.orientation = e.orientation);
            }),
            (e.prototype.setDimension = function(t) {
              this._dimensions = t;
            }),
            (e.prototype.getDimension = function() {
              return this._dimensions;
            }),
            (e.prototype.attachHandlers = function() {
              var t = this.getFromEnv("animationManager"),
                e = this.getLinkedParent(),
                n = e.getFromEnv("timeNavigator"),
                i = void 0,
                r = void 0,
                a = void 0,
                l = void 0,
                s = void 0;
              this.addEventListener(
                "fc-dragstart",
                this.dragstartHandler ||
                  (this.dragstartHandler = function(t) {
                    (r = (0, o.getTouchEvent)(t).clientX),
                      (i = e.getCurrentBrushDimensions());
                  })
              ),
                this.addEventListener(
                  "fc-dragmove",
                  this.dragmoveHandler ||
                    (this.dragmoveHandler = function(e) {
                      t.setAnimationState("timenavScroll"),
                        (a = (0, o.getTouchEvent)(e).clientX - r),
                        (l = i.x + a),
                        (s = i.x + a + i.width),
                        n.validateDomain([l, s]);
                    })
                );
            }),
            (e.prototype.draw = function() {
              var t = this.config.style,
                e = this.getDimension();
              this.addGraphicalElement({
                el: "rect",
                attr: {
                  x: e.x,
                  y: e.y,
                  width: Math.max(e.width, 0),
                  height: Math.max(e.height, 0),
                  opacity: t.opacity
                },
                css: t,
                id: "selectionBox",
                label: "selectionBox",
                component: this,
                container: {
                  id: "brushGroup",
                  label: "brushGroup",
                  isParent: !0
                }
              }),
                this.addGraphicalElement({
                  el: "path",
                  attr: {
                    path: [
                      "M",
                      e.x,
                      e.y,
                      "v",
                      e.height,
                      "h",
                      e.width,
                      "v",
                      -e.height
                    ],
                    stroke: t.stroke,
                    fill: "none",
                    "stroke-width": t["stroke-width"]
                  },
                  id: "selectionBoxBorder",
                  label: "selectionBoxBorder",
                  css: { cursor: "move" },
                  component: this,
                  container: {
                    id: "brushGroup",
                    label: "brushGroup",
                    isParent: !0
                  }
                });
            }),
            e
          );
        })(i.SmartRenderer);
        e["default"] = a;
      },
      724: function(t, e, n) {
        "use strict";
        (e.__esModule = !0),
          (e["default"] = function(t, e) {
            var n = t[e];
            return Object.assign({}, n, { columnname: n.columnname });
          });
      },
      725: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(125),
          r = n(726),
          a = (i = r) && i.__esModule ? i : { default: i };
        e["default"] = function(t) {
          var e,
            n = t.getFromEnv("dataSource").chart;
          (0, o.componentFactory)(t, a["default"], "selectorToolbar", 1, [
            Object.assign({ toolbarhdirection: 1 }, n)
          ]),
            (e = t.getChildren("selectorToolbar")[0]),
            t.addToEnv("selectorToolbar", e);
        };
      },
      726: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(228),
          o = n(125);
        function r(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var a = (function(t) {
          function e() {
            return (
              (function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              (function(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              })(this, t.apply(this, arguments))
            );
          }
          return (
            r(e, t),
            (e.prototype.configureAttributes = function() {
              var t =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {},
                e = this.config,
                n = this.getFromEnv("chartConfig"),
                i = void 0,
                r = void 0,
                a = void 0,
                l = void 0,
                s = void 0;
              if (
                ((this.props.width = (0, o.pluckNumber)(
                  t.width,
                  this.props.width,
                  0
                )),
                (this.props.height = (0, o.pluckNumber)(
                  t.height,
                  this.props.height,
                  0
                )),
                (e.orientation = (0, o.pluck)(
                  t.toolbarorientation,
                  e.orientation
                )),
                (e.hPadding = (0, o.pluck)(t.toolbarhpadding, e.hPadding)),
                (e.vPadding = (0, o.pluck)(t.toolbarvpadding, e.vPadding)),
                (e.backgroundcolor = (0, o.pluck)(
                  t.toolbarbackgroundcolor,
                  e.backgroundcolor
                )),
                (e.backgroundalpha = (0, o.pluck)(
                  t.toolbarbackgroundalpha,
                  e.backgroundalpha
                )),
                (e.bordercolor = (0, o.pluck)(
                  t.toolbarbordercolor,
                  e.bordercolor
                )),
                (e.borderalpha = (0, o.pluck)(
                  t.toolbarborderalpha,
                  e.borderalpha
                )),
                (e.borderthickness = (0, o.pluck)(
                  t.toolbarborderthickness,
                  e.borderthickness
                )),
                (e.hDirection = (0, o.pluckNumber)(
                  t.toolbarhdirection,
                  "r" === n.toolbarHAlign ? -1 : 1
                )),
                (e.vDirection = (0, o.pluckNumber)(
                  t.toolbarvdirection,
                  "b" === n.toolbarBAlign ? -1 : 1
                )),
                (e.hAlign = (0, o.pluck)(t.hAlign, "center").toLowerCase()),
                (e.vAlign = (0, o.pluck)(t.vAlign, "middle").toLowerCase()),
                (e.marginTop = (0, o.pluckNumber)(
                  t.marginTop,
                  t.spacing,
                  e.marginTop
                )),
                (e.marginLeft = (0, o.pluckNumber)(
                  t.marginLeft,
                  t.spacing,
                  e.marginLeft
                )),
                (e.marginRight = (0, o.pluckNumber)(
                  t.marginRight,
                  t.spacing,
                  e.marginRight
                )),
                (e.marginBottom = (0, o.pluckNumber)(
                  t.marginBottom,
                  t.spacing,
                  e.marginBottom
                )),
                (e.child = t.child || e.child),
                e.child)
              )
                for (
                  i = e.child, a = 0, l = (r = Object.keys(e.child)).length;
                  a < l;
                  a++
                )
                  (s = this.attachChild(
                    i[r[a]].def,
                    i[r[a]].type,
                    r[a]
                  )).setData(i[r[a]].configuration, !0),
                    s.setState("visible", !0);
            }),
            e
          );
        })(i.ToolBar);
        e["default"] = a;
      },
      727: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(728),
          r = (i = o) && i.__esModule ? i : { default: i },
          a = n(125);
        e["default"] = function(t) {
          var e = t.getFromEnv("dataSource").extensions;
          (0, a.pluckNumber)(
            e && e.standardrangeselector && e.standardrangeselector.enabled,
            1
          )
            ? ((0, a.componentFactory)(
                t,
                r["default"],
                "standardRangeSelector",
                1
              ),
              t
                .getChildren("standardRangeSelector")[0]
                .configure({
                  currentDomain: t.getFocusLimit(),
                  totalDomain: t.getContextLimit(),
                  style:
                    (e &&
                      e.standardrangeselector &&
                      e.standardrangeselector.style) ||
                    {}
                }))
            : (0, a.componentFactory)(
                t,
                r["default"],
                "standardRangeSelector",
                0
              );
        };
      },
      728: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(138),
          o = u(n(729)),
          r = n(229),
          a = n(125),
          l = n(336),
          s = n(328),
          c = u(n(726));
        function u(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function f(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var d = [
            31536e6,
            160704e5,
            80352e5,
            26784e5,
            1296e6,
            6048e5,
            864e5,
            432e5,
            216e5,
            108e5,
            36e5,
            18e5
          ],
          h = {
            0: {
              unit: "year",
              multiplier: 1,
              intervalName: "1Y",
              tilldateName: "YTD"
            },
            1: { unit: "month", multiplier: 6, intervalName: "6M" },
            2: {
              unit: "month",
              multiplier: 3,
              intervalName: "3M",
              tilldateName: "QTD"
            },
            3: {
              unit: "month",
              multiplier: 1,
              intervalName: "1M",
              tilldateName: "MTD"
            },
            4: { unit: "day", multiplier: 15, intervalName: "15D" },
            5: {
              unit: "day",
              multiplier: 7,
              intervalName: "7D",
              tilldateName: "WTD"
            },
            6: { unit: "day", multiplier: 1, intervalName: "1D" },
            7: { unit: "hour", multiplier: 12, intervalName: "12H" },
            8: { unit: "hour", multiplier: 6, intervalName: "6H" },
            9: { unit: "hour", multiplier: 3, intervalName: "3H" },
            10: { unit: "hour", multiplier: 1, intervalName: "1H" },
            11: { unit: "minute", multiplier: 30, intervalName: "30m" }
          },
          p = function(t, e, n) {
            var i =
                arguments.length > 3 &&
                arguments[3] !== undefined &&
                arguments[3],
              o = arguments[4],
              r = g(h[t].unit, this.getFromEnv("isUTC")),
              a = 3 * n[2];
            return i
              ? o - r.every(h[t].multiplier).floor(o) >= a
              : d[t] >= e[2] && d[t] >= a;
          },
          g = function(t, e) {
            switch (t) {
              case "year":
                return e ? l.utcYear : s.timeYear;
              case "quarter":
                return e ? l.utcQuarter : s.timeQuarter;
              case "month":
                return e ? l.utcMonth : s.timeMonth;
              case "week":
                return e ? l.utcWeek : s.timeWeek;
              case "day":
                return e ? l.utcDay : s.timeDay;
              case "hour":
                return e ? l.utcHour : s.timeHour;
              case "minute":
                return e ? l.utcMinute : s.timeMinute;
              case "second":
                return e ? l.utcSecond : s.timeSecond;
            }
          },
          m = (function(t) {
            function e() {
              !(function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e);
              var n = (function(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                })(this, t.call(this)),
                i = n;
              return (
                (n._handler = function() {
                  var t = this.getFromEnv("chart"),
                    e = this.config.multiplier,
                    n = this.getFromEnv("isUTC"),
                    o = this.config.unit,
                    r = this.config.fixedAtEnd,
                    a = this.config.fixedAtStart,
                    l = void 0,
                    s = void 0,
                    c = void 0,
                    u = t.getFocusLimit(),
                    f = t.getContextLimit();
                  (i.config.clickedButtonDetails = this.config),
                    this.getFromEnv("animationManager").setAnimationState(
                      "selectedRange"
                    ),
                    (c = r ? f[1] : u[1]),
                    o && e
                      ? ((l = g(o, n)),
                        (s = r ? l.every(e).floor(c) : l.offset(c, -e)))
                      : a && (s = f[0]),
                    (i.config.lastSelectedButtonConfig = {
                      fixedAtEnd: this.config.fixedAtEnd,
                      fixedAtStart: this.config.fixedAtStart,
                      unit: this.config.unit,
                      multiplier: this.config.multiplier
                    }),
                    (i.config.updatedThroughButton = !0),
                    t.setFocusLimit([s, c]);
                }),
                (n._toolbars = {}),
                n
              );
            }
            return (
              f(e, t),
              (e.prototype.__setDefaultConfig = function() {
                t.prototype.__setDefaultConfig.call(this),
                  (this.config.lastSelectedButtonConfig = undefined),
                  (this.config.clickedButtonDetails = {}),
                  (this.config.labelFontSize = "12px"),
                  (this.config.stateStyle = {
                    activated: {
                      config: {
                        normal: {
                          fill: "#9e9e9e",
                          stroke: "none",
                          "stroke-width": 2,
                          cursor: "pointer",
                          "stroke-opacity": 1,
                          "fill-opacity": 1,
                          opacity: "1",
                          "font-weight": 400,
                          "font-size": "12",
                          "text-anchor": "middle"
                        },
                        hover: {
                          fill: "#32cd32",
                          stroke: "none",
                          "stroke-width": 2,
                          cursor: "pointer",
                          "stroke-opacity": 1,
                          "fill-opacity": 1,
                          opacity: "1",
                          "font-weight": 400,
                          "font-size": "12",
                          "text-anchor": "middle"
                        },
                        normalBackground: {
                          fill: a.TRACKER_FILL,
                          stroke: "none",
                          cursor: "pointer"
                        },
                        hoverBackground: {
                          fill: a.TRACKER_FILL,
                          stroke: "none",
                          cursor: "pointer"
                        }
                      }
                    },
                    pressed: {
                      config: {
                        normal: {
                          fill: "#32cd32",
                          "stroke-width": 2,
                          stroke: "none",
                          "symbol-stroke": "#343434",
                          cursor: "pointer",
                          "fill-opacity": 1,
                          "stroke-opacity": 1,
                          opacity: "1",
                          "font-weight": 400,
                          "font-size": "12",
                          "text-anchor": "middle"
                        },
                        hover: {
                          fill: "#32cd32",
                          "stroke-width": 2,
                          stroke: "none",
                          "symbol-stroke": "#32cd32",
                          cursor: "pointer",
                          "fill-opacity": 1,
                          "stroke-opacity": 1,
                          opacity: "1",
                          "font-weight": 400,
                          "font-size": "12",
                          "text-anchor": "middle"
                        },
                        normalBackground: {
                          fill: a.TRACKER_FILL,
                          stroke: "none",
                          cursor: "pointer"
                        },
                        hoverBackground: {
                          fill: a.TRACKER_FILL,
                          stroke: "none",
                          cursor: "pointer"
                        }
                      }
                    }
                  });
              }),
              (e.prototype.configureAttributes = function(e) {
                t.prototype.configureAttributes.call(this, e);
                var n,
                  i,
                  o,
                  r,
                  l,
                  s,
                  c,
                  u = this.config,
                  f = this.getFromEnv("chart"),
                  d = this.getFromEnv("getStyleDef"),
                  h = this.getFromEnv("baseTextStyle"),
                  p = u.stateStyle;
                for (var g in ((u.contextRangeThreshold = f
                  .getFromEnv("contextBins")[0]
                  .getRangeThreshold()),
                (u.focusRangeThreshold = f
                  .getFromEnv("focusBins")[0]
                  .getRangeThreshold()),
                (u.contextMinBin = f.getFromEnv("contextBins")[0].getBinMin()),
                (u.focusMinBin = f.getFromEnv("focusBins")[0].getBinMin()),
                e))
                  e.hasOwnProperty(g) && (u[g] = e[g]);
                (n = Object.assign(
                  {},
                  h,
                  d(u.style.button && u.style.button.text)
                )),
                  (i = Object.assign(
                    {},
                    h,
                    d(u.style["button:hover"] && u.style["button:hover"].text)
                  )),
                  (o = Object.assign(
                    {},
                    h,
                    d(u.style["button:active"] && u.style["button:active"].text)
                  )),
                  (r = d(u.style.button && u.style.button.background)),
                  (l = d(
                    u.style["button:hover"] &&
                      u.style["button:hover"].background
                  )),
                  (s = d(
                    u.style["button:active"] &&
                      u.style["button:active"].background
                  )),
                  (c = d(u.style.separator && u.style.separator)),
                  (p.activated.config.normal = (0, a.extend2)(
                    p.activated.config.normal,
                    n
                  )),
                  (p.activated.config.hover = (0, a.extend2)(
                    p.activated.config.hover,
                    i
                  )),
                  (p.pressed.config.normal = (0, a.extend2)(
                    p.pressed.config.normal,
                    o
                  )),
                  (p.pressed.config.hover = (0, a.extend2)(
                    p.pressed.config.hover,
                    i
                  )),
                  (p.activated.config.normalBackground = (0, a.extend2)(
                    p.activated.config.normalBackground,
                    r
                  )),
                  (p.activated.config.hoverBackground = (0, a.extend2)(
                    p.activated.config.hoverBackground,
                    l
                  )),
                  (p.pressed.config.normalBackground = (0, a.extend2)(
                    p.pressed.config.normalBackground,
                    s
                  )),
                  (p.pressed.config.hoverBackground = (0, a.extend2)(
                    p.pressed.config.hoverBackground,
                    l
                  )),
                  (u.stateStyle.separator = c);
              }),
              (e.prototype.getTillDateButtons = function(t, e, n) {
                var i = [],
                  o = void 0,
                  r = this.getFromEnv("chartConfig").contextLimit[1],
                  l = this.getFromEnv("UTC"),
                  s = this.getFromEnv("dateAPI"),
                  c = new Date(r),
                  u = new Date(),
                  f = void 0,
                  g = void 0;
                if (
                  s(c, "FullYear", l) === s(u, "FullYear", l) &&
                  s(c, "Month", l) === s(u, "Month", l) &&
                  s(c, "Date", l) === s(u, "Date", l)
                )
                  for (f = 0, g = d.length; f < g; f++)
                    t >= d[f] &&
                      h[f].tilldateName &&
                      p.call(this, f, e, n, !0, r) &&
                      (((o = (0, a.extend2)({}, h[f])).fixedAtEnd = !0),
                      (o.fixedAtStart = !1),
                      i.push(o));
                return i;
              }),
              (e.prototype.getSelectionButtonConfig = function() {
                var t = this.config,
                  e = void 0,
                  n = void 0,
                  i = void 0,
                  o = this.getFromEnv("isUTC"),
                  r = t.currentDomain,
                  a = t.totalDomain,
                  c = +r[1] - +r[0];
                return (
                  (n = o ? l.utcYear : s.timeYear),
                  (e = o ? l.utcMonth : s.timeMonth),
                  (i = o ? l.utcDay : s.timeDay),
                  t.lastSelectedButtonConfig
                    ? {
                        isTillDate:
                          t.lastSelectedButtonConfig.fixedAtEnd &&
                          !t.lastSelectedButtonConfig.fixedAtStart,
                        isAllButton:
                          t.lastSelectedButtonConfig.fixedAtEnd &&
                          t.lastSelectedButtonConfig.fixedAtStart,
                        isIntervalButton:
                          !t.lastSelectedButtonConfig.fixedAtEnd &&
                          !t.lastSelectedButtonConfig.fixedAtStart,
                        multiplier: t.lastSelectedButtonConfig.multiplier,
                        unit: t.lastSelectedButtonConfig.unit
                      }
                    : c === +a[1] - +a[0]
                    ? { isAllButton: !0 }
                    : c === +r[1] - +n.floor(r[1])
                    ? { isTillDate: !0, multiplier: "1", unit: "year" }
                    : c === +r[1] - +e.floor(r[1])
                    ? { isTillDate: !0, multiplier: "1", unit: "month" }
                    : c === +r[1] - +e.every(3).floor(r[1])
                    ? { isTillDate: !0, multiplier: "3", unit: "month" }
                    : c === +r[1] - +i.every(7).floor(r[1])
                    ? { isTillDate: !0, multiplier: "7", unit: "day" }
                    : this.getHighlightedIntervalButton(c)
                );
              }),
              (e.prototype.getIntervalButtons = function(t, e, n, i) {
                var o = void 0,
                  r = d.length,
                  a = [];
                for (o = r - 1; o > 0 && !(d[o] >= t); o--);
                return (
                  t &&
                    (o <= 0
                      ? (d[0] <= e && p.call(this, 0, n, i) && a.push(h[0]),
                        d[1] <= e && p.call(this, 1, n, i) && a.push(h[1]))
                      : o === r - 1
                      ? (d[o - 1] <= e &&
                          p.call(this, o - 1, n, i) &&
                          a.push(h[o - 1]),
                        d[o] <= e && p.call(this, o, n, i) && a.push(h[o]))
                      : (d[o - 1] <= e &&
                          p.call(this, o - 1, n, i) &&
                          a.push(h[o - 1]),
                        d[o] <= e && p.call(this, o, n, i) && a.push(h[o]),
                        d[o + 1] <= e &&
                          p.call(this, o + 1, n, i) &&
                          a.push(h[o + 1]))),
                  a
                );
              }),
              (e.prototype.getHighlightedIntervalButton = function(t) {
                var e = this.config,
                  n = void 0,
                  i = e.intervalButtons,
                  o = e.currentDomain,
                  r = this.getFromEnv("isUTC"),
                  l = void 0,
                  s = {};
                for (
                  n = i.length - 1;
                  n >= 0 &&
                  ((l = g(i[n].unit, r)),
                  +o[0] != +l.offset(o[1], -i[n].multiplier) &&
                    +o[1] != +l.offset(o[0], i[n].multiplier));
                  n--
                );
                return (
                  -1 !== n &&
                    ((s = (0, a.extend2)({ isIntervalButton: !0 }, h[n])),
                    (s = {
                      isIntervalButton: !0,
                      unit: i[n].unit,
                      multiplier: i[n].multiplier
                    }),
                    (e.lastSelectedButtonConfig = s)),
                  s
                );
              }),
              (e.prototype.getToolInfo = function() {
                var t,
                  e,
                  n,
                  i,
                  a,
                  l = this,
                  s = l.config,
                  u = l.getFromEnv("chart"),
                  f = l.getFromEnv("selectorToolbar"),
                  d = {},
                  h = void 0,
                  p = void 0,
                  g = void 0,
                  m = l.getFromEnv("smartLabel"),
                  y = void 0,
                  v = s.stateStyle,
                  b = ((n = (e = v).activated.config.normal["font-size"] || 0),
                  (i = e.activated.config.hover["font-size"] || 0),
                  (a = e.pressed.config.normal["font-size"] || 0),
                  Math.max(n, i, a) || s.labelFontSize),
                  x = v.activated.config.normal["font-family"],
                  k = v.activated.config.normal["font-weight"],
                  _ = s.currentDomain,
                  w = u.getContextLimit(),
                  S = s.contextRangeThreshold,
                  C = s.focusRangeThreshold,
                  E = s.contextMinBin,
                  D = s.focusMinBin,
                  M = +_[1] - +_[0],
                  T = +w[1] - +w[0],
                  O = "intervalToolBar-" + f.getId() + "-" + u.getId(),
                  F = "businessToolBar-" + f.getId() + "-" + u.getId(),
                  L = "allToolBar-" + f.getId() + "-" + u.getId(),
                  I = (s.intervalButtons = l.getIntervalButtons(M, T, C, D)),
                  P = (s.tillDateButtons = l.getTillDateButtons(T, S, E));
                for (
                  m.setStyle({ fontSize: b, fontFamily: x, fontWeight: k }),
                    t = l.getSelectionButtonConfig(),
                    d[O] = {
                      type: "tool",
                      def: c["default"],
                      configuration: {
                        hAlign: "left",
                        toolbarhdirection: 1,
                        child: {}
                      }
                    },
                    h = 0,
                    p = I.length;
                  h < p;
                  h++
                )
                  (g =
                    t.isIntervalButton &&
                    t.unit === I[h].unit &&
                    t.multiplier === I[h].multiplier
                      ? "pressed"
                      : "activated"),
                    (y = m.getOriSize(I[h].intervalName, !1)),
                    (d[O].configuration.child[
                      "intervalButton-" + f.getId() + "-" + u.getId() + "-" + h
                    ] = {
                      type: "tool",
                      def: o["default"],
                      configuration: {
                        text: I[h].intervalName,
                        name: "interval",
                        width: y.width,
                        height: y.height,
                        scale: 1,
                        marginLeft: h ? 5 : 0,
                        marginRight: h === p - 1 ? 0 : 5,
                        hAlign: "left",
                        symbolStrokeWidth: "2",
                        hoveredState: "normal",
                        state: g,
                        multiplier: I[h].multiplier,
                        unit: I[h].unit,
                        strokeWidth: 0,
                        listener: { "fc-click": l._handler },
                        css: v
                      }
                    });
                for (
                  p &&
                    (d["separator-" + f.getId() + "-" + u.getId() + "-0"] = {
                      type: "tool",
                      def: r.Separator,
                      configuration: {
                        marginLeft: 0,
                        marginRight: 0,
                        scale: 1,
                        height: y.height < 16 ? 16 : y.height,
                        width: 10,
                        hAlign: "left",
                        stroke: v.separator.stroke || "#dfdfdf",
                        css: v.separator
                      }
                    }),
                    d[F] = {
                      type: "tool",
                      def: c["default"],
                      configuration: {
                        hAlign: "left",
                        toolbarhdirection: 1,
                        child: {}
                      }
                    },
                    h = 0,
                    p = P.length;
                  h < p;
                  h++
                )
                  (g =
                    t.isTillDate &&
                    t.unit === P[h].unit &&
                    t.multiplier === P[h].multiplier &&
                    +_[1] == +w[1]
                      ? "pressed"
                      : "activated"),
                    (y = m.getOriSize(P[h].tilldateName, !1)),
                    (d[F].configuration.child[
                      "tillDateButton-" + f.getId() + "-" + u.getId() + "-" + h
                    ] = {
                      type: "tool",
                      def: o["default"],
                      configuration: {
                        text: P[h].tilldateName,
                        name: "interval",
                        scale: 1,
                        width: y.width,
                        height: y.height,
                        state: g,
                        multiplier: P[h].multiplier,
                        unit: P[h].unit,
                        symbolStrokeWidth: "2",
                        hoveredState: "normal",
                        fixedAtStart: P[h].fixedAtStart,
                        fixedAtEnd: P[h].fixedAtEnd,
                        marginLeft: h ? 5 : 0,
                        marginRight: h === p - 1 ? 0 : 5,
                        hAlign: "left",
                        strokeWidth: 0,
                        listener: { "fc-click": l._handler },
                        css: v
                      }
                    });
                return (
                  p &&
                    (d["separator-" + f.getId() + "-" + u.getId() + "-1"] = {
                      type: "tool",
                      def: r.Separator,
                      configuration: {
                        marginLeft: 0,
                        marginRight: 0,
                        scale: 1,
                        height: y.height < 16 ? 16 : y.height,
                        classIndex: 3,
                        itemIndex: 0,
                        width: 10,
                        hAlign: "left",
                        stroke: v.separator.stroke || "#dfdfdf",
                        css: v.separator
                      }
                    }),
                  (g = t.isAllButton ? "pressed" : "activated"),
                  (d[L] = {
                    type: "tool",
                    def: c["default"],
                    configuration: {
                      hAlign: "left",
                      toolbarhdirection: 1,
                      child: {}
                    }
                  }),
                  (y = m.getOriSize("All", !1)),
                  (d[L].configuration.child[
                    "allButton-" + f.getId() + "-" + u.getId() + "-0"
                  ] = {
                    type: "tool",
                    def: o["default"],
                    configuration: {
                      state: g,
                      width: y.width,
                      height: y.height,
                      scale: 1,
                      text: "All",
                      name: "interval",
                      marginLeft: 0,
                      marginRight: 0,
                      hAlign: "left",
                      hoveredState: "normal",
                      symbolStrokeWidth: "2",
                      strokeWidth: 0,
                      fixedAtStart: !0,
                      fixedAtEnd: !0,
                      fill: "#00ff00",
                      labelFill: "#00ff00",
                      symbolFill: "#00ff00",
                      listener: { "fc-click": l._handler },
                      css: v
                    }
                  }),
                  d
                );
              }),
              (e.prototype.updateOnLimitChange = function() {
                var t,
                  e = this.getFromEnv("chart");
                (this.config.currentDomain = e.getFocusLimit()),
                  (t =
                    this.config.currentDomain[1] -
                    this.config.currentDomain[0]),
                  this.config.lastSelectedRange &&
                    this.config.lastSelectedRange !== t &&
                    !this.config.updatedThroughButton &&
                    (this.config.lastSelectedButtonConfig = undefined),
                  (this.config.lastSelectedRange = t),
                  (this.config.updatedThroughButton = !1),
                  this.setData({}, !0);
              }),
              e
            );
          })(i.SmartRenderer);
        e["default"] = m;
      },
      729: function(t, e, n) {
        "use strict";
        function i(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        e.__esModule = !0;
        var o = "hover",
          r = "normal",
          a = (function(t) {
            function e(n) {
              !(function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e);
              var i = (function(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              })(this, t.call(this, n));
              return (
                i.addEventListener("fc-mouseover", function() {
                  this.setData({ hoveredState: o }, !0);
                }),
                i.addEventListener("fc-mouseout", function() {
                  this.setData({ hoveredState: r }, !0);
                }),
                i
              );
            }
            return (
              i(e, t),
              (e.prototype.__setDefaultConfig = function() {
                t.prototype.__setDefaultConfig.call(this);
                var e = this.config;
                (e.containerInfo = {
                  id: "group",
                  label: "group",
                  isParent: !0
                }),
                  (e.spaceNotHardCoded = !0),
                  (e.hoveredState = r);
              }),
              (e.prototype.configureAttributes = function() {
                var t =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : {},
                  e = this.config,
                  n = void 0;
                for (n in t) e[n] = t[n];
                for (n in e.listener) this.addEventListener(n, e.listener[n]);
                this.setState("visible", !0 !== e.isHidden),
                  (e.symbolName = e.name);
              }),
              (e.prototype.getHoveredState = function() {
                return this.config.hoveredState;
              }),
              (e.prototype.draw = function() {
                var t = this.config,
                  e = t.x + t.width / 2,
                  n = t.y + t.height / 2,
                  i = t.width,
                  o = t.height,
                  r = t.css,
                  a = this.getCurrentState(),
                  l = this.getHoveredState(),
                  s = r[a].config[l],
                  c = r[a].config[l + "Background"];
                this.getState("visible") &&
                  (this.addGraphicalElement({
                    el: "group",
                    attr: { name: "srs-tool" },
                    container: t.containerInfo,
                    component: this,
                    id: "group",
                    label: "group"
                  }),
                  this.addGraphicalElement(
                    {
                      el: "rect",
                      attr: {
                        x: e - i / 2 - 2,
                        y: n - o / 2 - 2,
                        width: i + 4,
                        height: o + 4,
                        opacity: c.opacity
                      },
                      css: c,
                      container: { id: "group", label: "group" },
                      component: this,
                      id: "rect",
                      label: "rect"
                    },
                    !0
                  ),
                  this.addGraphicalElement(
                    {
                      el: "text",
                      attr: { x: e, y: n, text: t.text, opacity: s.opacity },
                      container: { id: "group", label: "group" },
                      css: s,
                      component: this,
                      id: "text",
                      label: "text"
                    },
                    !0
                  ),
                  "pressed" === a &&
                    this.addGraphicalElement(
                      {
                        el: "path",
                        attr: {
                          path:
                            "M" +
                            (e - i / 2 - 1) +
                            ", " +
                            (n + o / 2 + 1.5) +
                            " h " +
                            (i + 1),
                          opacity: s.opacity
                        },
                        container: { id: "group", label: "group" },
                        css: {
                          stroke: s.fill,
                          "stroke-linecap": "round",
                          "stroke-opacity": s["fill-opacity"]
                        },
                        component: this,
                        id: "path",
                        label: "path"
                      },
                      !0
                    ));
              }),
              e
            );
          })(n(229).Tool);
        e["default"] = a;
      },
      730: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(463),
          r = (i = o) && i.__esModule ? i : { default: i },
          a = n(125);
        e["default"] = function(t) {
          var e = void 0,
            n = t.getFromEnv("dataSource"),
            i = t.getFromEnv("getStyleDef"),
            o = n.legend,
            l = t.config.showLegend,
            s = i(o && o.item && o.item.style && o.item.style.text),
            c = (s.color = (0, a.pluck)(s.fill, "#5f5f5f")),
            u = (0, a.pluckNumber)(s.opacity, 1),
            f = (0, a.pluckNumber)(s["fill-opacity"], 1);
          if (l) {
            (0, a.componentFactory)(t, r["default"], "legend", 1, [
              {
                drawcustomlegendicon: 1,
                legendiconsides: 4,
                alignlegendwithcanvas: 1,
                legendborderthickness: 0,
                legendiconscale: 1.3,
                legendbgalpha: 0,
                legendFontColor: c,
                style: { text: s }
              }
            ]),
              (e = t.getChildren("legend")[0]),
              t.addToEnv("legend", e),
              e.setStateCosmetics("hover", function(t, e) {
                return (
                  e.hasState("hidden") ||
                    (t.text || (t.text = {}),
                    (t.text.fill = (0, a.convertColor)(c, u * f * 100)),
                    (t.text.cursor = "inherit")),
                  t
                );
              });
            !(function n() {
              var e =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              for (var i in e)
                if (e.hasOwnProperty(i)) {
                  var o = e[i];
                  o.hasOwnProperty("visibility") ? t._addLegend(o) : n(o);
                }
            })(t.getFromEnv("legendMap"));
          } else
            (e = t.getChildren("legend") && t.getChildren("legend")[0]) &&
              e.remove();
        };
      },
      731: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = m(n(732)),
          o = m(n(738)),
          r = m(n(739)),
          a = m(n(740)),
          l = m(n(741)),
          s = m(n(742)),
          c = m(n(399)),
          u = m(n(743)),
          f = n(125),
          d = m(n(746)),
          h = m(n(281)),
          p = n(328),
          g = n(336);
        function m(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var y = {
          time: i["default"],
          utctime: o["default"],
          scaletime: r["default"],
          scaleutctime: a["default"],
          numeric: c["default"],
          log: u["default"]
        };
        e["default"] = function(t) {
          var e = t.config,
            n = e.focusAxesX,
            i = e.contextAxesX || [],
            o = e.dataTable,
            r = o.getData(),
            a = r.schema,
            c = r.data,
            u = t.getFromEnv("UTC"),
            m = [0, (0.8 * t.getFromEnv("chartWidth")) / n.length],
            v = function(t) {
              var e = t.type;
              t.plot;
              return new (("time" === (e = e || "time") && u
                ? y["utc" + e]
                : y[e]) || y.time)();
            },
            b = function(t) {
              var e,
                n,
                i,
                r,
                f,
                h,
                b,
                x = [],
                k = [],
                _ = void 0,
                w = t.length;
              for (_ = 0; _ < w; _++)
                (x[_] = v(t[_])),
                  (k[_] = ((e = t[_]),
                  (n = void 0),
                  void 0,
                  (r = void 0),
                  (f = void 0),
                  (h = void 0),
                  void 0,
                  (n = e.type),
                  (i = e.plot),
                  (r = e.maxbin),
                  (f = e.minbin),
                  (h =
                    "time" === (n = n || "time") && u
                      ? new l["default"](
                          (0, s["default"])(
                            g.utcYear,
                            g.utcMonth,
                            g.utcWeek,
                            g.utcDay,
                            g.utcHour,
                            g.utcMinute,
                            g.utcSecond,
                            g.utcMillisecond
                          )
                        )
                      : new l["default"](
                          (0, s["default"])(
                            p.timeYear,
                            p.timeMonth,
                            p.timeWeek,
                            p.timeDay,
                            p.timeHour,
                            p.timeMinute,
                            p.timeSecond,
                            p.timeMillisecond
                          )
                        )),
                  (b = new (("time" === n && u
                    ? y["scaleutc" + n]
                    : y["scale" + n]) || y.time)()),
                  h.setScale(b),
                  (r = r
                    ? r.ms
                      ? { unit: r, multiplier: 1 }
                      : r.unit
                      ? { unit: r.unit, multiplier: +r.multiplier || 1 }
                      : undefined
                    : undefined) && h.setBinMax(r),
                  ((f = f
                    ? f.ms
                      ? { unit: f, multiplier: 1 }
                      : f.unit
                      ? { unit: f.unit, multiplier: +f.multiplier || 1 }
                      : undefined
                    : undefined) &&
                    h.setBinMin(f)) ||
                    h.setBinMin(
                      (0, d["default"])(
                        a[o.indexOf(i[0].value)].format,
                        o.indexOf(i[0].value),
                        c,
                        h.getStandardBins(),
                        h.intervalIndexMap
                      )
                    ),
                  h.setBinRange(m),
                  h)),
                  x[_].setThresholdIntervals(k[_].standardBins),
                  x[_].setBinMin(k[_].minBin),
                  x[_].setRangeThreshold(k[_].getRangeThreshold());
              return { scales: x, bins: k };
            },
            x = function(t) {
              var e = t.value;
              return [o.min(e), o.max(e)];
            },
            k = b(i),
            _ = b(n),
            w = (function(e) {
              var n,
                i = e.plot.map(x),
                o = (0, f.extent)((n = []).concat.apply(n, i), Number),
                r = e.plot[0].value,
                l =
                  e.format ||
                  a.find(function(t) {
                    return t.name === r;
                  }).format,
                s = h["default"].parser(l),
                c = (t.getFromEnv("dataSource").extensions || {})
                  .standardrangeselector,
                d = (c && 0 !== c.enabled && c.initialselection) || {},
                m = void 0,
                y = function(t, e) {
                  var n = s.parse(t);
                  return null === n ? e : n < e ? +n : e;
                },
                v = function(t, e) {
                  var n = s.parse(t);
                  return null === n ? e : n > e ? +n : e;
                },
                b = void 0;
              return (
                (o[0] = y(e.min, o[0])),
                (o[1] = v(e.max, o[1])),
                ((b = o.slice())[0] = v(e.activemin, b[0])),
                (b[1] = y(e.activemax, b[1])),
                d.unit &&
                  d.multiplier &&
                  (m = (function(t, e) {
                    switch (t) {
                      case "year":
                        return e ? g.utcYear : p.timeYear;
                      case "quarter":
                        return e ? g.utcQuarter : p.timeQuarter;
                      case "month":
                        return e ? g.utcMonth : p.timeMonth;
                      case "week":
                        return e ? g.utcWeek : p.timeWeek;
                      case "day":
                        return e ? g.utcDay : p.timeDay;
                      case "hour":
                        return e ? g.utcHour : p.timeHour;
                      case "minute":
                        return e ? g.utcMinute : p.timeMinute;
                      case "second":
                        return e ? g.utcSecond : p.timeSecond;
                      default:
                        return undefined;
                    }
                  })(d.unit, u)) &&
                  (b[0] = m.offset(b[1], -d.multiplier)),
                { focus: (b = (0, f.extent)(b)), context: o }
              );
            })(i[0]),
            S = w.focus,
            C = w.context;
          t.addToEnv("contextScalesX", k.scales),
            t.addToEnv("focusScalesX", _.scales),
            t.addToEnv("contextBins", k.bins),
            t.addToEnv("focusBins", _.bins),
            t.setContextLimit(C),
            t.setFocusLimit(S);
        };
      },
      732: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(328),
          r = n(733),
          a = (i = r) && i.__esModule ? i : { default: i },
          l = n(400);
        function s(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var c = (function(t) {
          function e() {
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            var n = (function(t, e) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !e || ("object" != typeof e && "function" != typeof e)
                ? t
                : e;
            })(
              this,
              t.call(
                this,
                o.timeYear,
                o.timeMonth,
                o.timeWeek,
                o.timeDay,
                o.timeHour,
                o.timeMinute,
                o.timeSecond,
                o.timeMillisecond
              )
            );
            return (
              (n.formatters = {
                millisecond: {
                  major: n._localeConverter.formatter("%I:%M:%S.%L %p"),
                  minor: n._localeConverter.formatter("%L ms"),
                  context: n._localeConverter.formatter(
                    "%b %d, %Y, %I:%M:%S.%L %p"
                  )
                },
                second: {
                  major: n._localeConverter.formatter("%I:%M:%S %p"),
                  minor: n._localeConverter.formatter("%S s"),
                  context: n._localeConverter.formatter(
                    "%b %d, %Y, %I:%M:%S %p"
                  )
                },
                minute: {
                  major: n._localeConverter.formatter("%I:%M %p"),
                  minor: n._localeConverter.formatter("%M m"),
                  context: n._localeConverter.formatter("%b %d, %Y, %I:%M %p")
                },
                hour: {
                  major: n._localeConverter.formatter("%I %p"),
                  minor: n._localeConverter.formatter("%I %p"),
                  context: n._localeConverter.formatter("%b %d, %Y, %I %p")
                },
                day: {
                  major: n._localeConverter.formatter("%b %d"),
                  minor: n._localeConverter.formatter("%d"),
                  context: n._localeConverter.formatter("%b %d, %Y")
                },
                month: {
                  major: n._localeConverter.formatter("%b"),
                  minor: n._localeConverter.formatter("%b"),
                  context: n._localeConverter.formatter("%b %Y")
                },
                year: {
                  major: n._localeConverter.formatter("%Y"),
                  context: n._localeConverter.formatter("%Y")
                }
              }),
              n.setDomain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]),
              n
            );
          }
          return (
            s(e, t),
            (e.prototype.getType = function() {
              return "";
            }),
            (e.prototype.tickFormat = function(t) {
              var e = this;
              return t
                ? function(n) {
                    return e._localeConverter.formatter(t).format(n);
                  }
                : function(t, n, i) {
                    return e._timeFormat[n]
                      ? e._localeConverter.formatter(e._timeFormat[n]).format(t)
                      : e.formatters[n][i].format(t);
                  };
            }),
            (e.prototype.copy = function() {
              return (0, l.copyScale)(this, new e());
            }),
            e
          );
        })(a["default"]);
        e["default"] = c;
      },
      733: function(t, e, n) {
        "use strict";
        (e.__esModule = !0), (e.getFloorOfDate = e.modifyDate = undefined);
        var i = s(n(734)),
          o = n(737),
          r = n(125),
          a = n(664),
          l = s(n(281));
        function s(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function c(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var u = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          f = ["day", "month", "year"],
          d = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
          h = [
            { ratio: 4, index: 8 },
            { ratio: 3, index: 7 },
            { ratio: 2.5, index: 6 },
            { ratio: 2, index: 5 },
            { ratio: 1.5, index: 4 },
            { ratio: 1, index: 3 },
            { ratio: 0.67, index: 2 },
            { ratio: 0.33, index: 1 },
            { ratio: 0, index: 0 }
          ],
          p = function(t) {
            return null !== t && !isNaN(t);
          },
          g = function(t, e, n) {
            return t["get" + n + e]();
          },
          m = function(t) {
            return (t < 10 ? "0" + t : t) + "";
          },
          y = function(t, e) {
            return (
              u[g(t, "Month", e)] +
              " " +
              m(g(t, "Date", e)) +
              ", " +
              g(t, "FullYear", e)
            );
          },
          v = function(t, e) {
            return (
              m(g(t, "Hours", e)) +
              ":" +
              m(g(t, "Minutes", e)) +
              ":" +
              m(g(t, "Seconds", e))
            );
          },
          b = (function(t) {
            function e(n, i, o, r, a, l, s, c) {
              !(function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e);
              var u = (function(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              })(this, t.call(this, n, i, o, r, a, l, s, c));
              return (u._type = ""), u;
            }
            return (
              c(e, t),
              (e.prototype.getType = function() {
                return this._type;
              }),
              (e.prototype.showPlotOverTick = function() {
                var t = this._getRangeThreshold();
                return (
                  ("millisecond" === this.getBinMin()[0].name() ||
                    f.indexOf(t[0].name()) > -1) &&
                  1 === t[1]
                );
              }),
              (e.prototype.getBinBounds = function(t) {
                var e,
                  n,
                  i =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : 0,
                  o = this.getType(),
                  r = this._getRangeThreshold(),
                  a = r[2],
                  l = void 0,
                  s = void 0,
                  c = this.getDomainValue(t),
                  u = (c.getTime() - i) / a,
                  f = g(c, "FullYear", o),
                  h = g(c, "Month", o),
                  p = g(c, "Date", o),
                  m = g(c, "Hours", o),
                  y = void 0,
                  v = void 0;
                if ("month" === r[0].name()) {
                  for (l = 0; l < 12; l += r[1])
                    if (h >= l && h < l + r[1]) {
                      this.showPlotOverTick() && p > 14 && (l += 1);
                      break;
                    }
                  (y = +new Date(c.getFullYear() + 0, l, 1)),
                    (v = +new Date(c.getFullYear() + 0, l + r[1], 1));
                } else if ("day" === r[0].name() && this.showPlotOverTick()) {
                  for (
                    l = 0,
                      n = void 0,
                      s =
                        1 !== (e = h) ||
                        (n = f) % 4 != 0 ||
                        (n % 100 == 0 && n % 400 != 0)
                          ? d[e]
                          : 29;
                    l <= s;
                    l++
                  )
                    if (l === p) {
                      m > 11 && (l += 1);
                      break;
                    }
                  (y = +new Date(c.getFullYear(), h, l)),
                    (v = +new Date(c.getFullYear(), h, l + 1));
                } else
                  a <= 1 && -1 === u && (u = 0),
                    (y = i + Math.floor(u) * a),
                    (v = i + Math.ceil(u) * a);
                return { startDate: y, endDate: v };
              }),
              (e.prototype.getBinIndex = function(t, e) {
                var n = this._getRangeThreshold(),
                  i = void 0,
                  o = new Date(e),
                  r = new Date(t),
                  a = void 0,
                  l = void 0,
                  s = void 0,
                  c = void 0,
                  u = void 0,
                  f = n[2];
                return "year" === n[0].name()
                  ? n[0].count(e, t)
                  : "month" === n[0].name()
                  ? ((s = g(o, "FullYear", this.getType())),
                    (c = g(r, "FullYear", this.getType())),
                    (a = g(o, "Month", this.getType())),
                    (l = g(r, "Month", this.getType())),
                    (i = Math.max(0, c - s - 1)),
                    s === c
                      ? (u = Math.floor(l / n[1]) - Math.floor(a / n[1]))
                      : ((u = (12 * i) / n[1]),
                        (u += 12 / n[1] - Math.floor(a / n[1])),
                        (u += Math.floor(l / n[1]))),
                    u)
                  : Math.round((t - e) / f);
              }),
              (e.prototype.getRangeValue = function(e, n) {
                return void 0 === n
                  ? t.prototype.getRangeValue.call(this, e)
                  : this.showPlotOverTick()
                  ? t.prototype.getRangeValue.call(this, e)
                  : (t.prototype.getRangeValue.call(this, e) +
                      t.prototype.getRangeValue.call(this, n)) /
                    2;
              }),
              (e.prototype.calculateIndexOfIntervals = function() {
                var t = void 0,
                  e = this.thresholdIntervals,
                  n = void 0,
                  i = e.length;
                for (this.intervalIndexMap = t = {}, n = i - 1; n >= 0; n--)
                  t[e[n][0].name()] = n;
              }),
              (e.prototype.getNiceMinorTickInterval = function(t, e) {
                var n,
                  i,
                  o = this.thresholdIntervals,
                  a = void 0,
                  l = this.getDomain(),
                  s = this._getRangeThreshold()[2],
                  c = o[t - 1][0].name(),
                  u = void 0,
                  f = [];
                for (a = 0, i = o.length; a < i; a++)
                  if (o[a][2] >= s) {
                    u = a;
                    break;
                  }
                for (a = t - 1; a >= u && o[a][0].name() === c; a--)
                  o[a][2] % s || f.push(a);
                return (
                  (n = Math.min(
                    (function(t) {
                      var e = void 0,
                        n = h.length,
                        i = 1 / t;
                      if (i > 4) return Infinity;
                      for (e = 0; e < n; e++)
                        if (i > h[e].ratio) return h[e].index;
                    })((l[1] - l[0]) / e),
                    f.length - 1
                  )),
                  (0, r.pluckNumber)(f[n], -1)
                );
              }),
              (e.prototype.getNiceMajorTickInterval = function(t) {
                var e =
                    arguments.length > 1 &&
                    arguments[1] !== undefined &&
                    arguments[1],
                  n = this.thresholdIntervals,
                  i = void 0,
                  o = n.length,
                  r = this._getRangeThreshold()[2];
                if ("random" === this.getMode()) {
                  if (
                    !e &&
                    "day" === n[t][0].name() &&
                    (n[t][1] > 1 || n[t][2] > r)
                  ) {
                    for (i = t; i < o; i++)
                      if ("day" !== n[i][0].name() && r < n[i][2]) return i;
                  } else for (i = t; i < o; i++) if (n[i][2] > r) return i;
                } else if (1 !== n[t][1] || n[t][2] <= r)
                  for (i = t; i < o; i++)
                    if (1 === n[i][1] && n[i][2] > r) return i;
                return t;
              }),
              (e.prototype.generateContextTicks = function(t) {
                var e =
                    arguments.length > 1 &&
                    arguments[1] !== undefined &&
                    arguments[1],
                  n = this.thresholdIntervals,
                  i = this.intervalIndexMap,
                  r = this.getDomain(),
                  a = r[0],
                  l = r[1],
                  s = n[t][0].name(),
                  c = f[f.indexOf(s) + 1],
                  u = void 0,
                  d = n.length,
                  h = i.day,
                  p = void 0,
                  g = void 0,
                  m = -1,
                  y = void 0,
                  v = [];
                if (e) m = t;
                else
                  for (
                    "day" === s && (c = "year"), u = Math.max(t, h);
                    u < d;
                    u++
                  )
                    if (n[u][0].name() === c) {
                      m = u;
                      break;
                    }
                if (m > -1) {
                  if (
                    ((p = (0, o.getFloorOfDate)(
                      new Date(a),
                      n[m][0].name(),
                      n[m][1],
                      this.getType()
                    )),
                    (y = (function(t, e, n, i, r) {
                      var a = (0, o.getFloorOfDate)(
                          new Date(t),
                          i[n][0].name(),
                          i[n][1],
                          r
                        ),
                        l = (0, o.getFloorOfDate)(
                          new Date(e),
                          i[n][0].name(),
                          i[n][1],
                          r
                        );
                      return +a != +l && [a, l];
                    })(new Date(a), new Date(l), m, n, this.getType())))
                  ) {
                    for (y = (g = y[1]) - n[m][2]; y >= +a; )
                      v.push(new Date(y)), (y -= n[m][2]);
                    +a != +p && v.push(new Date(p)),
                      v.reverse(),
                      v.push(new Date(g));
                  } else v.push(p);
                  this._timeFormat.context = n[m][0].name();
                }
                return v;
              }),
              (e.prototype.getMajorIntervalGap = function(t, e) {
                var n = this.thresholdIntervals;
                return "month" === n[t][0].name()
                  ? 2592e6
                  : "year" === n[t][0].name()
                  ? 31536e6
                  : e[1] - e[0];
              }),
              (e.prototype.ticks = function() {
                var t,
                  e =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : {},
                  n = arguments[1],
                  i = void 0,
                  r = void 0,
                  a = void 0,
                  l = this.thresholdIntervals,
                  s = this.getDomain(),
                  c = void 0,
                  u = void 0,
                  f = void 0,
                  d = void 0,
                  h = void 0,
                  g = void 0,
                  m = !1,
                  y = [],
                  v = void 0,
                  b = s[0],
                  x = s[1],
                  k = [],
                  _ = [],
                  w = void 0,
                  S = this.getType();
                if (!p(b) || !p(x)) return (this._tickType = []), [];
                for (
                  this._timeFormat = w = {},
                    t = x - b + 1,
                    i = a = l.length - 1;
                  i >= 0;
                  i--
                )
                  if (Math.floor(t / l[i][2]) > 1) {
                    for (
                      u = l[
                        (c = this.getNiceMajorTickInterval(i, n))
                      ][0].name(),
                        b = (0, o.getFloorOfDate)(new Date(b), u, l[c][1], S),
                        x = (0, o.modifyDate)(new Date(x), u, l[c][1], !1, S),
                        x = (0, o.getFloorOfDate)(new Date(x), u, l[c][1], S),
                        d = l[c][0].range(+b, +x + l[c][2], l[c][1]),
                        w.major = u,
                        r = 0;
                      r < d.length;
                      r++
                    )
                      +d[r] >= +s[0] && +d[r] <= +s[1] && (m = !0);
                    y = this.generateContextTicks(c, !m) || [];
                    break;
                  }
                if (!d) return (this._tickType = []), k;
                for (
                  f =
                    "year" === l[c][0].name() && d.length > 10
                      ? -1
                      : this.getNiceMinorTickInterval(
                          c,
                          this.getMajorIntervalGap(c, d)
                        ),
                    i = 0,
                    a = d.length;
                  i < a - 1;
                  i++
                )
                  if ((k.push(d[i]), _.push("major"), f > -1 && !e.minor))
                    for (
                      h = l[f][0].range(+d[i], +d[i + 1] + 1, l[f][1]),
                        w.minor = l[f][0].name(),
                        r = 0,
                        g = h.length;
                      r < g;
                      r++
                    )
                      (v = +h[r]),
                        (r === g - 1 &&
                          g > 1 &&
                          (+d[i + 1] - v) / (v - +h[r - 1]) < 0.5) ||
                          (v !== +d[i] &&
                            v !== +d[i + 1] &&
                            (k.push(h[r]), _.push("minor")));
                if ((k.push(d[a - 1]), _.push("major"), y.length && !e.context))
                  for (i = 0, a = y.length; i < a; i++)
                    k.push(y[i]), _.push("context");
                return (this._tickType = _), k;
              }),
              (e.prototype.setDomain = function() {
                var e,
                  n =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : [];
                return (
                  n[0] > n[1] &&
                    ((e = [n[0], n[1]]), (n[1] = e[0]), (n[0] = e[1])),
                  t.prototype.setDomain.call(this, n)
                );
              }),
              (e.prototype.nice = function(e, n) {
                var i = t.prototype.nice.call(this, e, n);
                return this._computeRangeThreshold(4), i;
              }),
              (e.prototype.getFormattedTime = function() {
                var t =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : {},
                  e = this._getRangeThreshold(),
                  n = void 0,
                  i = void 0,
                  o = void 0,
                  r = t.dateRange,
                  s = t.type,
                  c = void 0,
                  u = void 0,
                  f = void 0,
                  d = void 0,
                  h = void 0,
                  p = e[1],
                  m = this.getType();
                return "crossline" === s || "tooltip" === s
                  ? ((n = e[0].name()),
                    (i = o = (0, a.getFilterdTimeFormat)(
                      "%b %d, %Y, %I:%M:%S.%L %p",
                      n
                    )),
                    "hour" === n &&
                      ((i = i.replace(/%M/, "")), (o = o.replace(/%M/, ""))),
                    (i = i.replace(/[:|.]*[\s]/g, " ")),
                    (o = o.replace(/[:|.]*[\s]/g, " ")),
                    i.match(/%I/) ||
                      ((r.endDate -= 1),
                      (i = i.replace(/%p/, "")),
                      (o = o.replace(/%p/, ""))),
                    (c = new Date(r.startDate)),
                    (u = new Date(r.endDate)),
                    (f = g(c, "Date", m) === g(u, "Date", m)),
                    (d = g(c, "Month", m) === g(u, "Month", m)),
                    (h = g(c, "FullYear", m) === g(u, "FullYear", m)),
                    p > 1
                      ? h &&
                        (d
                          ? f
                            ? i.match(/%I/)
                              ? ((i = i.replace(/%p/, "")),
                                (o = (o = (o = o.replace(/%b/, "")).replace(
                                  /%d/,
                                  ""
                                )).replace(/%Y/, "")))
                              : ((i = i.replace(/%b/, "%B")), (o = ""))
                            : (i = i.replace(/%Y/, "")).match(/%I/) ||
                              ((o = o.replace(/%b/, "")),
                              (i = i.replace(/%b/, "%B")))
                          : 1 !== p && (i = i.replace(/%Y/, "")))
                      : i.match(/%I/) || (i = i.replace(/%b/, "%B")),
                    (i = i.trim()),
                    (o = o.trim()),
                    (i = i
                      .replace(/^[,|\s|:]*/, "")
                      .replace(/(\W+$)/, "")
                      .replace(/([,]+[\s]*[,]+)|([\s]+[,]+)/g, ",")),
                    (o = o
                      .replace(/^[,|\s|:]*/, "")
                      .replace(/(\W+$)/, "")
                      .replace(/([,]+[\s]*[,]+)|([\s]+[,]+)/g, ",")) && 1 !== p
                      ? (
                          ("UTC" === m
                            ? l["default"].utcFormatter(i)
                            : l["default"].formatter(i)
                          ).format(new Date(r.startDate)) +
                          " - " +
                          ("UTC" === m
                            ? l["default"].utcFormatter(o)
                            : l["default"].formatter(o)
                          ).format(new Date(r.endDate))
                        ).trim()
                      : ("UTC" === m
                          ? l["default"].utcFormatter(i)
                          : l["default"].formatter(i)
                        )
                          .format(new Date(r.startDate))
                          .trim())
                  : "CRS" === s
                  ? (
                      y(r.startDate, m) +
                      (t.showTimeInLabel ? ", " + v(r.startDate, m) : "") +
                      " - " +
                      (y(r.endDate, m) +
                        (t.showTimeInLabel ? ", " + v(r.endDate, m) : ""))
                    ).trim()
                  : void 0;
              }),
              (e.prototype.setBinMin = function(t) {
                return (this.minBin = t), this;
              }),
              (e.prototype.getBinMin = function() {
                return this.minBin;
              }),
              (e.prototype.setRangeThreshold = function(t) {
                return (this._threshold = t), this;
              }),
              (e.prototype._getRangeThreshold = function() {
                return this._threshold;
              }),
              (e.prototype.setMode = function(t) {
                this.mode = t;
              }),
              (e.prototype.getMode = function() {
                return this.mode;
              }),
              (e.prototype.setThresholdIntervals = function(t) {
                (this.thresholdIntervals = t), this.calculateIndexOfIntervals();
              }),
              e
            );
          })(i["default"]);
        (e.modifyDate = o.modifyDate),
          (e.getFloorOfDate = o.getFloorOfDate),
          (e["default"] = b);
      },
      734: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(400),
          o = u(i),
          r = u(n(382)),
          a = n(735),
          l = u(a),
          s = u(n(295)),
          c = n(281);
        function u(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function f(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var d = 1e3,
          h = 60 * d,
          p = 60 * h,
          g = 24 * p,
          m = 7 * g,
          y = 30 * g,
          v = 365 * g,
          b = function(t) {
            return new Date(t);
          },
          x = function(t) {
            return t instanceof Date ? +t : +new Date(+t);
          },
          k = (function(t) {
            function e(n, o, a, l, u, f, b, x) {
              !(function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e);
              var k = (function(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              })(this, t.call(this, i.deInterpolateLinear, r["default"]));
              return (
                (k.timeIntervals = {
                  year: n,
                  month: o,
                  week: a,
                  day: l,
                  hour: u,
                  minute: f,
                  second: b,
                  millisecond: x
                }),
                (k.tickIntervals = [
                  [k.timeIntervals.second, 1, d],
                  [k.timeIntervals.second, 5, 5 * d],
                  [k.timeIntervals.second, 15, 15 * d],
                  [k.timeIntervals.second, 30, 30 * d],
                  [k.timeIntervals.minute, 1, h],
                  [k.timeIntervals.minute, 5, 5 * h],
                  [k.timeIntervals.minute, 15, 15 * h],
                  [k.timeIntervals.minute, 30, 30 * h],
                  [k.timeIntervals.hour, 1, p],
                  [k.timeIntervals.hour, 3, 3 * p],
                  [k.timeIntervals.hour, 6, 6 * p],
                  [k.timeIntervals.hour, 12, 12 * p],
                  [k.timeIntervals.day, 1, g],
                  [k.timeIntervals.day, 2, 2 * g],
                  [k.timeIntervals.week, 1, m],
                  [k.timeIntervals.month, 1, y],
                  [k.timeIntervals.month, 3, 3 * y],
                  [k.timeIntervals.year, 1, v]
                ]),
                (k.locale = s["default"]),
                (k._localeConverter = new c.TimeConverter(s["default"])),
                k
              );
            }
            return (
              f(e, t),
              (e.prototype.setDomain = function(e) {
                return t.prototype.setDomain.call(this, e.map(x));
              }),
              (e.prototype.getDomain = function() {
                return t.prototype.getDomain.call(this).map(b);
              }),
              (e.prototype.ticks = function(e, n) {
                var i = t.prototype.getDomain.call(this);
                return (0, l["default"])(
                  i[0],
                  i[i.length - 1],
                  e,
                  n,
                  this.tickIntervals,
                  this.timeIntervals
                );
              }),
              (e.prototype.nice = function(e, n) {
                var i = t.prototype.getDomain.call(this),
                  o = (0, a.tickInterval)(
                    i[0],
                    i[i.length - 1],
                    e,
                    n,
                    this.tickIntervals,
                    this.timeIntervals
                  );
                return o
                  ? t.prototype.setDomain.call(
                      this,
                      (function(t, e) {
                        var n = t.slice(),
                          i = 0,
                          o = n.length - 1,
                          r = n[i],
                          a = n[o],
                          l = void 0;
                        return (
                          a < r &&
                            ((l = i),
                            (i = o),
                            (o = l),
                            (l = r),
                            (r = a),
                            (a = l)),
                          (n[i] = e.floor(r)),
                          (n[o] = e.ceil(a)),
                          n
                        );
                      })(i, o)
                    )
                  : this;
              }),
              (e.prototype.getDomainValue = function(e) {
                return new Date(t.prototype.getDomainValue.call(this, e));
              }),
              (e.prototype.setLocale = function() {
                var t =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : s["default"];
                return (
                  (this.locale = t),
                  (this._localeConverter = new c.TimeConverter(this.locale)),
                  this
                );
              }),
              (e.prototype.copy = function() {
                var t = this.timeIntervals,
                  n = t.year,
                  o = t.month,
                  r = t.week,
                  a = t.day,
                  l = t.hour,
                  s = t.minute,
                  c = t.second,
                  u = t.millisecond;
                return (0, i.copyScale)(this, new e(n, o, r, a, l, s, c, u));
              }),
              e
            );
          })(o["default"]);
        e["default"] = k;
      },
      735: function(t, e, n) {
        "use strict";
        (e.__esModule = !0), (e.tickFormat = e.tickInterval = undefined);
        var i,
          o = n(736),
          r = (i = o) && i.__esModule ? i : { default: i },
          a = n(417);
        var l = function(t, e) {
          var n =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : 10,
            i = arguments[3],
            o = arguments[4],
            l = arguments[5],
            s = n,
            c = i,
            u = void 0,
            f = void 0;
          return (
            "number" == typeof s &&
              ((u = Math.abs(e - t) / s),
              (f = (0, r["default"])(function(t) {
                return t[2];
              }).right(o, u)) === o.length
                ? ((c = (0, a.tickStep)(t / 31536e6, e / 31536e6, s)),
                  (s = l.year))
                : f
                ? ((c = (f = o[u / o[f - 1][2] < o[f][2] / u ? f - 1 : f])[1]),
                  (s = f[0]))
                : ((c = Math.max((0, a.tickStep)(t, e, s), 1)),
                  (s = l.millisecond))),
            null === c || void 0 === c ? s : s.every(c)
          );
        };
        (e.tickInterval = l),
          (e.tickFormat = function(t, e, n) {
            return (t.second.floor(n) < n
              ? e.millisecond
              : t.minute.floor(n) < n
              ? e.second
              : t.hour.floor(n) < n
              ? e.minute
              : t.day.floor(n) < n
              ? e.hour
              : t.month.floor(n) < n
              ? t.week.floor(n) < n
                ? e.day
                : e.week
              : t.year.floor(n) < n
              ? e.month
              : e.year
            ).format(n);
          }),
          (e["default"] = function(t, e, n, i, o, r) {
            var a = e < t,
              s = void 0,
              c = void 0;
            return (
              a && ((s = t), (t = e), (e = s)),
              (c = (c = l(t, e, n, i, o, r)) ? c.range(t, e + 1) : []),
              a ? c.reverse() : c
            );
          });
      },
      736: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = function(t) {
          return function(e, n) {
            return (
              (i = t(e)),
              (o = n),
              (r = NaN),
              i < o ? (r = -1) : i > o ? (r = 1) : i >= o && (r = 0),
              r
            );
            var i, o, r;
          };
        };
        e["default"] = function(t) {
          var e = t;
          return (
            1 === e.length && (e = i(e)),
            {
              left: function() {
                for (
                  var t =
                      arguments.length > 0 && arguments[0] !== undefined
                        ? arguments[0]
                        : [],
                    n = arguments[1],
                    i =
                      arguments.length > 2 && arguments[2] !== undefined
                        ? arguments[2]
                        : 0,
                    o =
                      arguments.length > 3 && arguments[3] !== undefined
                        ? arguments[3]
                        : t.length;
                  i < o;

                ) {
                  var r = Math.abs(Math.floor((i + o) / 2));
                  e(t[r], n) < 0 ? (i = r + 1) : (o = r);
                }
                return i;
              },
              right: function() {
                for (
                  var t =
                      arguments.length > 0 && arguments[0] !== undefined
                        ? arguments[0]
                        : [],
                    n = arguments[1],
                    i =
                      arguments.length > 2 && arguments[2] !== undefined
                        ? arguments[2]
                        : 0,
                    o =
                      arguments.length > 3 && arguments[3] !== undefined
                        ? arguments[3]
                        : t.length;
                  i < o;

                ) {
                  var r = Math.abs(Math.floor((i + o) / 2));
                  e(t[r], n) > 0 ? (o = r) : (i = r + 1);
                }
                return i;
              }
            }
          );
        };
      },
      737: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = 12,
          o = "millisecond",
          r = "second",
          a = "minute",
          l = "hour",
          s = "day",
          c = "month",
          u = "year",
          f = "get",
          d = "set",
          h = 1e3,
          p = 60,
          g = 60,
          m = 24,
          y = 30;
        (e.getFloorOfDate = function(t) {
          var e,
            n =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : "day",
            v =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : 1,
            b =
              arguments.length > 3 && arguments[3] !== undefined
                ? arguments[3]
                : "",
            x = new Date(t.valueOf());
          switch (n) {
            case o:
              (e = x[f + b + "Milliseconds"]()),
                (v = Math.min(v, h)),
                x[d + b + "Milliseconds"](Math.floor(e / v) * v);
              break;
            case r:
              (e = x[f + b + "Seconds"]()),
                (v = Math.min(v, p)),
                x[d + b + "Seconds"](Math.floor(e / v) * v, 0);
              break;
            case a:
              (e = x[f + b + "Minutes"]()),
                (v = Math.min(v, g)),
                x[d + b + "Minutes"](Math.floor(e / v) * v, 0, 0);
              break;
            case l:
              (e = x[f + b + "Hours"]()),
                (v = Math.min(v, m)),
                x[d + b + "Hours"](Math.floor(e / v) * v, 0, 0, 0);
              break;
            case s:
              (e = x[f + b + "Date"]()),
                (v = Math.min(v, y + 1)),
                x[d + b + "Date"](Math.max(Math.floor(e / v) * v, 1)),
                x[d + b + "Hours"](0, 0, 0, 0);
              break;
            case c:
              (e = x[f + b + "Month"]()),
                (v = Math.min(v, i)),
                x[d + b + "Month"](Math.floor(e / v) * v, 1),
                x[d + b + "Hours"](0, 0, 0, 0);
              break;
            case u:
              x[d + b + "Month"](0, 1), x[d + b + "Hours"](0, 0, 0, 0);
          }
          return x;
        }),
          (e.modifyDate = function(t) {
            var e =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : "day",
              n =
                arguments.length > 2 && arguments[2] !== undefined
                  ? arguments[2]
                  : 1,
              i =
                arguments.length > 3 &&
                arguments[3] !== undefined &&
                arguments[3],
              h =
                arguments.length > 4 && arguments[4] !== undefined
                  ? arguments[4]
                  : "",
              p = new Date(t.valueOf());
            switch (e) {
              case o:
                p[d + h + "Milliseconds"](p[f + h + "Milliseconds"]() + n);
                break;
              case r:
                p[d + h + "Seconds"](p[f + h + "Seconds"]() + n),
                  i && p[d + h + "Milliseconds"](0);
                break;
              case a:
                p[d + h + "Minutes"](p[f + h + "Minutes"]() + n),
                  i && p[d + h + "Seconds"](0, 0);
                break;
              case l:
                p[d + h + "Hours"](p[f + h + "Hours"]() + n),
                  i && p[d + h + "Minutes"](0, 0, 0);
                break;
              case s:
                p[d + h + "Date"](p[f + h + "Date"]() + n),
                  i && p[d + h + "Hours"](0, 0, 0, 0);
                break;
              case c:
                p[d + h + "Month"](p[f + h + "Month"]() + n),
                  i && p[d + h + "Date"](0, 0, 0, 0, 0);
                break;
              case u:
                p[d + h + "FullYear"](p[f + h + "FullYear"]() + n),
                  i && p[d + h + "Month"](0, 0, 0, 0, 0, 0);
            }
            return p;
          }),
          (e.MILLISECONDS_IN_SECOND = h),
          (e.SECONDS_IN_MINUTE = p),
          (e.MINUTES_IN_HOUR = g),
          (e.HOURS_IN_DAY = m),
          (e.DAYS_IN_MONTH = y),
          (e.DAYS_IN_YEAR = 365);
      },
      738: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(336),
          r = n(400),
          a = n(733);
        function l(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var s = (function(t) {
          function e() {
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            var n = (function(t, e) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !e || ("object" != typeof e && "function" != typeof e)
                ? t
                : e;
            })(
              this,
              t.call(
                this,
                o.utcYear,
                o.utcMonth,
                o.utcWeek,
                o.utcDay,
                o.utcHour,
                o.utcMinute,
                o.utcSecond,
                o.utcMillisecond
              )
            );
            return (
              (n.formatters = {
                millisecond: {
                  major: n._localeConverter.utcFormatter("%I:%M:%S.%L %p"),
                  minor: n._localeConverter.utcFormatter("%L ms"),
                  context: n._localeConverter.utcFormatter(
                    "%b %d, %Y, %I:%M:%S.%L %p"
                  )
                },
                second: {
                  major: n._localeConverter.utcFormatter("%I:%M:%S %p"),
                  minor: n._localeConverter.utcFormatter("%S s"),
                  context: n._localeConverter.utcFormatter(
                    "%b %d, %Y, %I:%M:%S %p"
                  )
                },
                minute: {
                  major: n._localeConverter.utcFormatter("%I:%M %p"),
                  minor: n._localeConverter.utcFormatter("%M m"),
                  context: n._localeConverter.utcFormatter(
                    "%b %d, %Y, %I:%M %p"
                  )
                },
                hour: {
                  major: n._localeConverter.utcFormatter("%I %p"),
                  minor: n._localeConverter.utcFormatter("%I %p"),
                  context: n._localeConverter.utcFormatter("%b %d, %Y, %I %p")
                },
                day: {
                  major: n._localeConverter.utcFormatter("%b %d"),
                  minor: n._localeConverter.utcFormatter("%d"),
                  context: n._localeConverter.utcFormatter("%b %d, %Y")
                },
                month: {
                  major: n._localeConverter.utcFormatter("%b"),
                  minor: n._localeConverter.utcFormatter("%b"),
                  context: n._localeConverter.utcFormatter("%b %Y")
                },
                year: {
                  major: n._localeConverter.utcFormatter("%Y"),
                  context: n._localeConverter.utcFormatter("%Y")
                }
              }),
              n.setDomain([[Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]]),
              n
            );
          }
          return (
            l(e, t),
            (e.prototype.getType = function() {
              return "UTC";
            }),
            (e.prototype.tickFormat = function(t) {
              var e = this;
              return t
                ? function(n) {
                    return e._localeConverter.utcFormatter(t).format(n);
                  }
                : function(t, n, i) {
                    return e._timeFormat[n]
                      ? e._localeConverter
                          .utcFormatter(e._timeFormat[n])
                          .format(t)
                      : e.formatters[n][i].format(t);
                  };
            }),
            (e.prototype.copy = function() {
              return (0, r.copyScale)(this, new e());
            }),
            e
          );
        })(((i = a) && i.__esModule ? i : { default: i })["default"]);
        e["default"] = s;
      },
      739: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(400),
          r = n(328),
          a = n(734),
          l = (i = a) && i.__esModule ? i : { default: i },
          s = n(735);
        function c(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var u = (function(t) {
          function e() {
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            var n = (function(t, e) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !e || ("object" != typeof e && "function" != typeof e)
                ? t
                : e;
            })(
              this,
              t.call(
                this,
                r.timeYear,
                r.timeMonth,
                r.timeWeek,
                r.timeDay,
                r.timeHour,
                r.timeMinute,
                r.timeSecond,
                r.timeMillisecond
              )
            );
            return (
              (n.formatters = {
                millisecond: n._localeConverter.formatter(".%L"),
                second: n._localeConverter.formatter(":%S"),
                minute: n._localeConverter.formatter("%I:%M"),
                hour: n._localeConverter.formatter("%I %p"),
                day: n._localeConverter.formatter("%a %d"),
                week: n._localeConverter.formatter("%b %d"),
                month: n._localeConverter.formatter("%B"),
                year: n._localeConverter.formatter("%Y")
              }),
              n.setDomain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]),
              n
            );
          }
          return (
            c(e, t),
            (e.prototype.tickFormat = function(t) {
              var e = this;
              return t
                ? function(n) {
                    return e._localeConverter.formatter(t).format(n);
                  }
                : function(t) {
                    return (0, s.tickFormat)(e.timeIntervals, e.formatters, t);
                  };
            }),
            (e.prototype.copy = function() {
              return (0, o.copyScale)(this, new e());
            }),
            e
          );
        })(l["default"]);
        e["default"] = u;
      },
      740: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(336),
          r = n(734),
          a = (i = r) && i.__esModule ? i : { default: i },
          l = n(400),
          s = n(735);
        function c(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var u = (function(t) {
          function e() {
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            var n = (function(t, e) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !e || ("object" != typeof e && "function" != typeof e)
                ? t
                : e;
            })(
              this,
              t.call(
                this,
                o.utcYear,
                o.utcMonth,
                o.utcWeek,
                o.utcDay,
                o.utcHour,
                o.utcMinute,
                o.utcSecond,
                o.utcMillisecond
              )
            );
            return (
              (n.formatters = {
                millisecond: n._localeConverter.utcFormatter(".%L"),
                second: n._localeConverter.utcFormatter(":%S"),
                minute: n._localeConverter.utcFormatter("%I:%M"),
                hour: n._localeConverter.utcFormatter("%I %p"),
                day: n._localeConverter.utcFormatter("%a %d"),
                week: n._localeConverter.utcFormatter("%b %d"),
                month: n._localeConverter.utcFormatter("%B"),
                year: n._localeConverter.utcFormatter("%Y")
              }),
              n.setDomain([[Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]]),
              n
            );
          }
          return (
            c(e, t),
            (e.prototype.tickFormat = function(t) {
              var e = this;
              return t
                ? function(n) {
                    return e._localeConverter.utcFormatter(t).format(n);
                  }
                : function(t) {
                    return (0, s.tickFormat)(e.timeIntervals, e.formatters, t);
                  };
            }),
            (e.prototype.copy = function() {
              return (0, l.copyScale)(this, new e());
            }),
            e
          );
        })(a["default"]);
        e["default"] = u;
      },
      741: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = function(t) {
            return new Date(t);
          },
          o = function(t, e) {
            for (
              var n = 0,
                i = t.length - 1,
                o = i,
                r = Math.floor((i + n) / 2),
                a = e instanceof Array ? e[2] : e.unit.ms * e.multiplier;
              n < i;

            ) {
              if (a < t[r][2]) o = i = r - 1;
              else {
                if (!(a > t[r][2])) {
                  o = r;
                  break;
                }
                n = r + 1;
              }
              r = Math.floor((i + n) / 2);
            }
            return e instanceof Array
              ? t[o]
              : t[o][2] === a
              ? t[o]
              : [t[o - 1][0], e.multiplier, a];
          },
          r = function(t) {
            var e = {},
              n = void 0;
            for (n = t.length - 1; n >= 0; n--) e[t[n][0].name()] = n;
            return e;
          },
          a = (function() {
            function t(e) {
              !(function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                this.setStandardBins(e),
                (this.binRange = [0, 1]),
                (this.binDomain = [0, 1]),
                (this.intervalIndexMap = r(this.getStandardBins()));
            }
            return (
              (t.prototype.setStandardBins = function(t) {
                this.standardBins = t;
              }),
              (t.prototype.getStandardBins = function() {
                return this.standardBins;
              }),
              (t.prototype.setScale = function(t) {
                this.scale = t;
              }),
              (t.prototype.getScale = function() {
                return this.scale;
              }),
              (t.prototype._computeRangeThreshold = function(t) {
                var e,
                  n,
                  i,
                  o = this.getBinRange(),
                  r = o[0],
                  a = o[1],
                  l = ((e = t),
                  (n = 1),
                  (i = Math.abs(r - a)),
                  Math.min(Math.max(e, n), i)),
                  s = +this.getScale().getDomainValue(0),
                  c = +this.getScale().getDomainValue(l),
                  u = Math.abs(c - s),
                  f = this.getBinMin(),
                  d = this.getBinMax(),
                  h = Math.max(
                    0,
                    this.standardBins.findIndex(function(t) {
                      return t[2] >= u;
                    })
                  );
                this.standardBins[h][2] < f[2]
                  ? (this._threshold = f)
                  : d && this.standardBins[h][2] > d[2] && d[2] >= f[2]
                  ? (this._threshold = d)
                  : (this._threshold = this.standardBins[h]);
              }),
              (t.prototype.setBinRange = function(t) {
                return (
                  (this.binRange = t.slice()),
                  this.getScale().setRange(this.binRange),
                  this.getScale().setDomain(this.binDomain),
                  this._computeRangeThreshold(4),
                  this
                );
              }),
              (t.prototype.getBinRange = function() {
                return this.binRange;
              }),
              (t.prototype.setBinDomain = function(t) {
                return (
                  (this.binDomain = t.slice()),
                  this.getScale().setRange(this.binRange),
                  this.getScale().setDomain(this.binDomain),
                  this._computeRangeThreshold(4),
                  this
                );
              }),
              (t.prototype.getBinDomain = function() {
                return this.binDomain.slice().map(i);
              }),
              (t.prototype.setBinMin = function(t) {
                var e = o(this.standardBins, t);
                return (this.minBin = e), this;
              }),
              (t.prototype.getBinMin = function() {
                return this.minBin;
              }),
              (t.prototype.setBinMax = function(t) {
                var e = o(this.standardBins, t);
                this.maxBin = e;
              }),
              (t.prototype.getBinMax = function() {
                return this.maxBin;
              }),
              (t.prototype.setRangeThreshold = function() {
                var t =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : 4;
                return this._computeRangeThreshold(t), this;
              }),
              (t.prototype.getRangeThreshold = function() {
                return this._threshold;
              }),
              t
            );
          })();
        (e["default"] = a), (e._calculateIndexOfIntervals = r);
      },
      742: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(737),
          o = 1 * i.MILLISECONDS_IN_SECOND,
          r = o * i.SECONDS_IN_MINUTE,
          a = r * i.MINUTES_IN_HOUR,
          l = a * i.HOURS_IN_DAY,
          s = l * i.DAYS_IN_MONTH,
          c = l * i.DAYS_IN_YEAR;
        e["default"] = function(t, e, n, i, u, f, d, h) {
          return [
            [h, 1, 1],
            [h, 2, 2],
            [h, 4, 4],
            [h, 5, 5],
            [h, 10, 10],
            [h, 20, 20],
            [h, 25, 25],
            [h, 40, 40],
            [h, 50, 50],
            [h, 100, 100],
            [h, 200, 200],
            [h, 250, 250],
            [h, 500, 500],
            [d, 1, o, !0],
            [d, 2, 2 * o],
            [d, 3, 3 * o],
            [d, 4, 4 * o],
            [d, 5, 5 * o],
            [d, 6, 6 * o],
            [d, 10, 10 * o],
            [d, 12, 12 * o],
            [d, 15, 15 * o],
            [d, 20, 20 * o],
            [d, 30, 30 * o],
            [f, 1, r, !0],
            [f, 2, 2 * r],
            [f, 3, 3 * r],
            [f, 4, 4 * r],
            [f, 5, 5 * r],
            [f, 6, 6 * r],
            [f, 10, 10 * r],
            [f, 12, 12 * r],
            [f, 15, 15 * r],
            [f, 20, 20 * r],
            [f, 30, 30 * r],
            [u, 1, a, !0],
            [u, 2, 2 * a],
            [u, 3, 3 * a],
            [u, 4, 4 * a],
            [u, 6, 6 * a],
            [u, 8, 8 * a],
            [u, 12, 12 * a],
            [i, 1, l, !0],
            [i, 2, 2 * l],
            [i, 3, 3 * l],
            [i, 5, 5 * l],
            [i, 6, 6 * l],
            [i, 10, 10 * l],
            [i, 15, 15 * l],
            [e, 1, s],
            [e, 2, 2 * s],
            [e, 3, 3 * s],
            [e, 4, 4 * s],
            [e, 6, 6 * s],
            [t, 1, c, !0]
          ];
        };
      },
      743: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = r(n(744)),
          o = r(n(416));
        function r(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function a(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var l = (function(t) {
          function e() {
            return (
              (function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              (function(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              })(this, t.apply(this, arguments))
            );
          }
          return (
            a(e, t),
            (e.prototype.ticks = function(t) {
              var e,
                n,
                i,
                r,
                a,
                l,
                s,
                c,
                u,
                f,
                d,
                h = this.getDomain(),
                p = h[0],
                g = h[1],
                m = 0,
                y = [],
                v = [],
                b = 0,
                x = this.base,
                k = Math.log(x) / Math.log(10),
                _ = x > 1 ? -1 : 1,
                w = k % 1 ? 4 : 8;
              if (p <= 0 || g <= 0) return y;
              if (p > g) {
                var S = this.getDomain();
                (g = S[0]), (p = S[1]), (m = 1);
              }
              for (
                x > 1
                  ? ((r = e = Math.ceil(Math.log(g) / Math.log(x))),
                    (i = n = Math.floor(Math.log(p) / Math.log(x))))
                  : x > 0 &&
                    x < 1 &&
                    ((e = Math.floor(Math.log(g) / Math.log(x))),
                    (r = n = Math.ceil(Math.log(p) / Math.log(x))),
                    (i = e)),
                  l = n,
                  s = i;
                s <= r;
                ++s
              ) {
                if (((a = this.pows(l)), d !== undefined))
                  for (
                    x > 1
                      ? (e = Math.ceil(Math.log(a) / Math.log(x)))
                      : x > 0 &&
                        x < 1 &&
                        (e = Math.floor(Math.log(a) / Math.log(x))),
                      u = (Math.pow(x, e) - Math.pow(x, e + _)) / (w + 1),
                      c = 1;
                    c <= w;
                    ++c
                  )
                    (f = Math.pow(x, e + _) + u * c),
                      y.push(f),
                      v.push("minor"),
                      (p > f || g < f) && ++b;
                y.push(a),
                  v.push("major"),
                  (p > a || g < a) && ++b,
                  (d = a),
                  x > 1 ? l++ : l--;
              }
              return (
                (this._tickType = v),
                y.length - b <= 2 &&
                  ((y = (0, o["default"])(p, g, t)),
                  (this._tickType = undefined)),
                (this.majorTicks = m ? y.reverse() : y)
              );
            }),
            e
          );
        })(i["default"]);
        e["default"] = l;
      },
      746: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(341),
          r = n(747),
          a = (i = r) && i.__esModule ? i : { default: i };
        e["default"] = function(t, e) {
          var n =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : [],
            i = arguments[3],
            r = arguments[4],
            l = [],
            s = void 0,
            c = void 0,
            u = void 0,
            f = void 0,
            d = void 0,
            h = { count: 0 },
            p = void 0,
            g = n.length,
            m = {};
          if (!t) return null;
          if (
            (/%[_ -]?[cfLQ]/.test(t) &&
              (l.push(o.DatetimeUnits.Millisecond),
              (m[o.DatetimeUnits.Millisecond.name] = {})),
            /%[_ -]?[sSX]/.test(t) &&
              (l.push(o.DatetimeUnits.Second),
              (m[o.DatetimeUnits.Second.name] = {})),
            /%[_ -]?M/.test(t) &&
              (l.push(o.DatetimeUnits.Minute),
              (m[o.DatetimeUnits.Minute.name] = {})),
            /%[_ -]?[HI]/.test(t) &&
              (l.push(o.DatetimeUnits.Hour),
              (m[o.DatetimeUnits.Hour.name] = {})),
            /%[_ -]?[dejuwx]/.test(t) &&
              (l.push(o.DatetimeUnits.Day), (m[o.DatetimeUnits.Day.name] = {})),
            /%[_ -]?[bBm]/.test(t) &&
              (l.push(o.DatetimeUnits.Month),
              (m[o.DatetimeUnits.Month.name] = {})),
            /%[_ -]?[yY]/.test(t) &&
              (l.push(o.DatetimeUnits.Year),
              (m[o.DatetimeUnits.Year.name] = {})),
            !l.length)
          )
            return [];
          if (1 === g || 0 === g) return [l[0].ms, 1, l[0].ms];
          for (s = 1; s < g; ++s)
            (u = n[s - 1][e]),
              (c = n[s][e] - u) &&
                ((p = m[(f = (0, a["default"])(i, r, l, c)).unit.name])[
                  f.multiplier
                ] || (p[f.multiplier] = 0),
                (d = ++p[f.multiplier]),
                (h.count < d ||
                  (h.count === d &&
                    h.unit.ms * h.multiplier > f.unit.ms * f.multiplier)) &&
                  ((h.count = d), Object.assign(h, f)));
          return h.count
            ? [h.unit.ms, h.multiplier, h.multiplier * h.unit.ms]
            : [l[0].ms, 1, l[0].ms];
        };
      },
      747: function(t, e, n) {
        "use strict";
        (e.__esModule = !0),
          (e["default"] = function(t, e, n, i) {
            var o = void 0,
              r = void 0,
              a = void 0,
              l = void 0,
              s = n.length,
              c = void 0,
              u = void 0;
            for (o = 0; o < s; o++)
              for (
                r = e[(a = n[o]).name.toLowerCase()];
                t[r] && t[r][0].name() === a.name.toLowerCase();

              ) {
                if (i === (c = t[r])[2]) return { unit: a, multiplier: c[1] };
                if (i < c[2])
                  return u && i < Math.round((c[2] + u[2]) / 2)
                    ? { unit: l, multiplier: u[1] }
                    : { unit: a, multiplier: c[1] };
                (u = c), (l = a), r++;
              }
            return { unit: n[o - 1], multiplier: Math.round(i / n[o - 1].ms) };
          });
      },
      748: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = a(n(732)),
          o = a(n(399)),
          r = a(n(743));
        function a(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var l = { time: i["default"], linear: o["default"], log: r["default"] };
        e["default"] = function(t) {
          var e = t.config,
            n = e.focusAxesY,
            i = e.contextAxesY || [],
            o = function(t) {
              var e = t.type,
                n = t.base,
                i = l[e] || l.linear;
              return i === r["default"] && +n > 0
                ? new i().setBase(n)
                : new i();
            };
          t.addToEnv("contextScalesY", i.map(o)),
            t.addToEnv("focusScalesY", n.map(o));
        };
      },
      749: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(125),
          r = n(750),
          a = (i = r) && i.__esModule ? i : { default: i };
        e["default"] = function(t) {
          var e,
            n,
            i = t.getFromEnv("dataSource"),
            r = i.caption || {},
            l = i.subcaption || {},
            s = t.getFromEnv("getStyleDef");
          (e = r.text || ""), (n = s(r.style && r.style.text));
          var c = {
            caption: e,
            subCaption: l.text,
            captionCss: n,
            subCaptionCss: s(l.style && l.style.text)
          };
          (0, o.componentFactory)(t, a["default"], "caption", 1, [c]);
        };
      },
      750: function(t, e, n) {
        "use strict";
        var i, o;
        e.__esModule = !0;
        var r = n(138),
          a = n(125);
        function l(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var s = (((i = {})["font-size"] = "16px"),
          (i["font-style"] = "normal"),
          (i["font-weight"] = "bold"),
          (i.fill = "#5F5F5F"),
          i),
          c = (((o = {})["font-size"] = "12px"),
          (o["font-style"] = "normal"),
          (o["font-weight"] = "normal"),
          (o.fill = "#B1B1B1"),
          o),
          u = (function(t) {
            function e() {
              return (
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                (function(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                })(this, t.apply(this, arguments))
              );
            }
            return (
              l(e, t),
              (e.prototype.__setDefaultConfig = function() {
                t.prototype.__setDefaultConfig.call(this);
                var e = this.config;
                (e.captionCss = s),
                  (e.subCaptionCss = c),
                  (e.alignment = "left"),
                  (e.gap = 0);
              }),
              (e.prototype.configureAttributes = function() {
                var e =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {};
                t.prototype.configureAttributes.call(this, e);
                var n = this.config,
                  i = this.getFromEnv("baseTextStyle");
                Object.keys(e).forEach(function(t) {
                  return (n[t] = e[t]);
                }),
                  (n.captionCss = Object.assign({}, s, i, n.captionCss || {})),
                  (n.subCaptionCss = Object.assign(
                    {},
                    c,
                    i,
                    n.subCaptionCss || {}
                  ));
              }),
              (e.prototype.setDimension = function(t) {
                var e,
                  n,
                  i = this.config,
                  o = this.getFromEnv("smartLabel"),
                  r = t.height - 10,
                  a = t.width,
                  l = void 0,
                  s = 0,
                  c = 0,
                  u = void 0;
                return (
                  i.subCaption
                    ? ((s = 0.7 * (l = r - (u = i.gap = 0.02 * r))),
                      (c = i.caption ? 0.3 * l : r))
                    : (l = s = r),
                  o.useEllipsesOnOverflow(!0),
                  o.setStyle(i.captionCss),
                  (e = i.captionDim = o.getSmartText(i.caption, a, s)),
                  o.setStyle(i.subCaptionCss),
                  (n = i.subCaptionDim = o.getSmartText(i.subCaption, a, c)),
                  (r = e.height + (i.subCaption ? u : 0) + n.height),
                  (r += 0 === r ? 0 : 10),
                  (i.spaceTaken = { width: a, height: r }),
                  { height: r, width: a }
                );
              }),
              (e.prototype.draw = function() {
                var t = this.config,
                  e = this.getFromEnv("chart").config,
                  n = t.captionDim,
                  i = t.subCaptionDim,
                  o = void 0,
                  r = void 0,
                  l = t.spaceTaken,
                  s = { text: n.text },
                  c = { text: i.text };
                switch (t.alignment) {
                  case "right":
                    (o = l.width), (r = "end");
                    break;
                  case "middle":
                    (o = l.width / 2), (r = "middle");
                    break;
                  case "left":
                  default:
                    (o = 0), (r = "start");
                }
                (s.x = c.x = o),
                  (s["text-anchor"] = c["text-anchor"] = r),
                  (s["vertical-align"] = c["vertical-align"] = "top"),
                  (s.y = 0),
                  (c.y = t.gap + n.height),
                  this.addGraphicalElement({
                    el: "group",
                    container: { id: "strato", label: "group", isParent: !0 },
                    component: this,
                    label: "group",
                    attr: { name: "caption-strato", transform: t.translate },
                    id: "strato"
                  }),
                  t.caption &&
                    this.addGraphicalElement({
                      el: "text",
                      attr: {
                        x: s.x,
                        y: s.y,
                        text: s.text,
                        fill: t.captionCss.fill,
                        "text-anchor": s["text-anchor"],
                        "vertical-align": s["vertical-align"],
                        "font-size": t.captionCss["font-size"],
                        "font-family": t.captionCss["font-family"],
                        "font-style": t.captionCss["font-style"],
                        "font-weight": t.captionCss["font-weight"],
                        opacity: t.captionCss.opacity
                      },
                      container: { id: "strato", label: "group", isParent: !1 },
                      tooltext: e.showTooltip ? n.tooltext : a.UNDEF,
                      component: this,
                      id: "caption",
                      label: "text"
                    }),
                  t.subCaption &&
                    this.addGraphicalElement({
                      el: "text",
                      attr: {
                        x: c.x,
                        y: c.y,
                        text: c.text,
                        fill: t.subCaptionCss.fill,
                        "text-anchor": c["text-anchor"],
                        "vertical-align": c["vertical-align"],
                        "font-size": t.subCaptionCss["font-size"],
                        "font-family": t.subCaptionCss["font-family"],
                        "font-style": t.subCaptionCss["font-style"],
                        "font-weight": t.subCaptionCss["font-weight"],
                        opacity: t.subCaptionCss.opacity
                      },
                      container: { id: "strato", label: "group", isParent: !1 },
                      tooltext: e.showTooltip ? i.tooltext : a.UNDEF,
                      component: this,
                      id: "subCaption",
                      label: "text"
                    });
              }),
              e
            );
          })(r.SmartRenderer);
        e["default"] = u;
      },
      751: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(125),
          r = n(752),
          a = (i = r) && i.__esModule ? i : { default: i };
        e["default"] = function(t) {
          var e = t.getFromEnv("dataSource").extensions || {},
            n = (0, o.pluckNumber)(
              e.customrangeselector && e.customrangeselector.enabled,
              1
            );
          (0, o.componentFactory)(t, a["default"], "customRangeSelector", +n, [
            {
              domain: t.getFocusLimit(),
              style:
                (e.customrangeselector && e.customrangeselector.style) || {}
            }
          ]);
        };
      },
      752: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(138),
          r = n(753),
          a = (i = r) && i.__esModule ? i : { default: i };
        function l(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var s = (function(t) {
          function e() {
            return (
              (function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              (function(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              })(this, t.apply(this, arguments))
            );
          }
          return (
            l(e, t),
            (e.prototype.configureAttributes = function() {
              var t =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {},
                e = this.config,
                n = void 0;
              for (n in t) e[n] = t[n];
            }),
            (e.prototype.updateOnLimitChange = function() {
              this.setData(
                { domain: this.getFromEnv("chart").getFocusLimit() },
                !0
              );
            }),
            (e.prototype.getToolInfo = function() {
              var t = Object.assign({}, this.config.style);
              return (
                (t["title:hoverout"] = t.title),
                {
                  "selector-0": {
                    type: "tool",
                    def: a["default"],
                    configuration: {
                      domain: this.config.domain,
                      hAlign: "right",
                      scale: 1,
                      marginTop: 2,
                      marginBottom: 2,
                      marginLeft: 2,
                      marginRight: 2,
                      extStyle: t
                    }
                  }
                }
              );
            }),
            e
          );
        })(o.SmartRenderer);
        e["default"] = s;
      },
      753: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = l(n(754)),
          o = n(228),
          r = n(125),
          a = l(n(760));
        function l(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function s(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var c = ["hour", "minute", "second", "millisecond"],
          u = (function(t) {
            function e(n) {
              !(function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e);
              var i = (function(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                })(this, t.call(this, n)),
                o = i;
              return (
                (o.config.hideCRS = !0),
                (o.documentClicked = function() {
                  o.config.hideCRS &&
                    (document.removeEventListener(
                      "mousedown",
                      o.documentClicked
                    ),
                    document.removeEventListener(
                      "touchstart",
                      o.documentClicked
                    ),
                    o.setData({}, !0)),
                    (o.config.hideCRS = !0);
                }),
                (o.keyDownHandler = function(t) {
                  ("key" in t
                    ? "Escape" === t.key || "Esc" === t.key
                    : 27 === t.keyCode) && i.setData({}, !0);
                }),
                (o.clickHandler = function() {
                  var t = o,
                    e = t.config,
                    n = e.domain,
                    i = t.getFromEnv("chart"),
                    a = i.getFromEnv("UTC"),
                    l = i.getFromEnv("dateAPI"),
                    s = i.getContextLimit(),
                    c = new Date(s[0]),
                    u = new Date(s[1]),
                    f = new Date(n[0]),
                    d = new Date(n[1]);
                  t.setData(
                    {
                      blockUpdate: !0,
                      interactionStyle: e.extStyle["title:active"]
                    },
                    !0
                  ),
                    t
                      .getChildren("cover")[0]
                      .setData({ visibility: "visible" }, !0),
                    t
                      .getChildren("manager")[0]
                      .setData(
                        {
                          visibility: "visible",
                          position: t.config.containerPos,
                          drawCalendars: !0,
                          startDate: {
                            year: l(f, "FullYear", a),
                            month: l(f, "Month", a) + 1,
                            day: l(f, "Date", a),
                            hours: l(f, "Hours", a),
                            minutes: l(f, "Minutes", a),
                            seconds: l(f, "Seconds", a)
                          },
                          endDate: {
                            year: l(d, "FullYear", a),
                            month: l(d, "Month", a) + 1,
                            day: l(d, "Date", a),
                            hours: l(d, "Hours", a),
                            minutes: l(d, "Minutes", a),
                            seconds: l(d, "Seconds", a)
                          },
                          contextStart: {
                            year: l(c, "FullYear", a),
                            month: l(c, "Month", a) + 1,
                            day: l(c, "Date", a)
                          },
                          contextEnd: {
                            year: l(u, "FullYear", a),
                            month: l(u, "Month", a) + 1,
                            day: l(u, "Date", a)
                          }
                        },
                        !0
                      ),
                    !r.isIpad &&
                      document.addEventListener("mousedown", o.documentClicked),
                    document.addEventListener("touchstart", o.documentClicked);
                }),
                i.addEventListener("fc-click", o.clickHandler),
                i.addEventListener("fc-mouseover", function() {
                  this.setData(
                    {
                      interactionStyle: this.config.extStyle["title:hover"],
                      hoverConfig: !0
                    },
                    !0
                  );
                }),
                i.addEventListener("fc-mouseout", function() {
                  !o.config.blockUpdate &&
                    o.setData(
                      {
                        interactionStyle: this.config.extStyle[
                          "title:hoverout"
                        ],
                        hoverConfig: !0
                      },
                      !0
                    );
                }),
                document.addEventListener("keydown", o.keyDownHandler),
                i
              );
            }
            return (
              s(e, t),
              (e.prototype.__setDefaultConfig = function() {
                t.prototype.__setDefaultConfig.call(this);
                var e = this.config;
                (e.containerState = 0),
                  (e.showDate = !0),
                  (e.calendarIconPath =
                    "M15.604605,2.6231875 C15.3617479,2.39715625 15.0736134,2.284125 14.7409412,2.284125 L13.5126723,2.284125 L13.5126723,1.4275625 C13.5126723,1.0350625 13.3621849,0.69896875 13.0615126,0.41940625 C12.7606723,0.13984375 12.3993613,0 11.9769748,0 L11.3629244,0 C10.9405714,0 10.5791261,0.13984375 10.2784202,0.4194375 C9.97761345,0.69896875 9.8272605,1.03509375 9.8272605,1.42759375 L9.8272605,2.28415625 L6.14221849,2.28415625 L6.14221849,1.42759375 C6.14221849,1.03509375 5.99179832,0.699 5.69105882,0.4194375 C5.39038655,0.13984375 5.02890756,0 4.60655462,0 L3.99240336,0 C3.57015126,0 3.20863866,0.13984375 2.90789916,0.4194375 C2.60722689,0.69896875 2.45677311,1.03509375 2.45677311,1.42759375 L2.45677311,2.28415625 L1.22847059,2.28415625 C0.895697479,2.28415625 0.607831933,2.3971875 0.364705882,2.62321875 C0.121579832,2.84921875 0,3.11696875 0,3.42625 L0,14.8466563 C0,15.1557188 0.121579832,15.4234063 0.364705882,15.6495625 C0.607798319,15.8755312 0.895663866,15.9885937 1.22847059,15.9885937 L14.7407059,15.9885937 C15.0733782,15.9885937 15.3615462,15.8755625 15.6043697,15.6495625 C15.8475294,15.4235 15.9691429,15.1556875 15.9691429,14.8466563 L15.9691429,3.42621875 C15.9691092,3.11684375 15.8476303,2.84921875 15.604605,2.6231875 Z M11.0558319,1.4276875 C11.0558319,1.34434375 11.0843697,1.275875 11.1418824,1.22246875 C11.199395,1.169 11.2730084,1.14221875 11.3627227,1.14221875 L11.9767731,1.14221875 C12.066521,1.14221875 12.1398992,1.16890625 12.1976134,1.22246875 C12.2551597,1.27596875 12.2838992,1.3444375 12.2838992,1.4276875 L12.2838992,3.9971875 C12.2838992,4.0805 12.2551597,4.14884375 12.1976134,4.20240625 C12.1398655,4.2558125 12.066521,4.28265625 11.9767731,4.28265625 L11.3627227,4.28265625 C11.2730084,4.28265625 11.199395,4.2559375 11.1418824,4.20240625 C11.0843697,4.1488125 11.0558319,4.0805 11.0558319,3.9971875 L11.0558319,1.4276875 Z M3.68534454,1.4276875 C3.68534454,1.34434375 3.71408403,1.275875 3.77166387,1.22246875 C3.82927731,1.169 3.90278992,1.14221875 3.99240336,1.14221875 L4.60655462,1.14221875 C4.69620168,1.14221875 4.76984874,1.16890625 4.82729412,1.22246875 C4.88480672,1.27596875 4.91368067,1.3444375 4.91368067,1.4276875 L4.91368067,3.9971875 C4.91368067,4.0805 4.88494118,4.1489375 4.82729412,4.20240625 C4.76971429,4.2558125 4.69620168,4.28265625 4.60655462,4.28265625 L3.99240336,4.28265625 C3.90278992,4.28265625 3.82917647,4.2559375 3.77166387,4.20240625 C3.71421849,4.1488125 3.68534454,4.0805 3.68534454,3.9971875 L3.68534454,1.4276875 Z M14.7407059,14.8465 L1.22847059,14.8465 L1.22847059,5.71025 L14.7407059,5.71025 L14.7407059,14.8465 Z"),
                  (e.calendarIconDim = { width: 16, height: 16 }),
                  (e.containerPos = { x: 100, y: 100 }),
                  (e.containerInfo = {
                    id: "group",
                    label: "group",
                    isParent: !0
                  }),
                  (e.spaceNotHardCoded = !0),
                  (e.hoveredState = "normal"),
                  (e._iconStyle = { fill: "#32cd32", opacity: 1 }),
                  (e._textStyle = {
                    "font-size": "12px",
                    "font-style": "normal",
                    "font-weight": "600",
                    "text-anchor": "start",
                    fill: "#32cd32",
                    opacity: 1
                  }),
                  (e.prevDim = { height: 0, width: 0 });
              }),
              (e.prototype.configureAttributes = function() {
                var t,
                  e,
                  n =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : {},
                  o = this.config,
                  r = this.getFromEnv("focusScalesX"),
                  l = !1,
                  s = void 0,
                  u = this.getFromEnv("getStyleDef"),
                  f = this.getFromEnv("baseTextStyle");
                for (s in n) o[s] = n[s];
                !n.blockUpdate && delete o.blockUpdate,
                  !n.interactionStyle && delete o.interactionStyle,
                  (t = o.extStyle || {}),
                  (e = o.interactionStyle || {}),
                  this.setState("visible", !0 !== o.isHidden),
                  (o.symbolName = o.name),
                  r.forEach(function(t) {
                    c.includes(t.getBinMin()[0].name()) && (l = !0);
                  }),
                  this.attachChild(a["default"], "cover", "cover").configure({
                    visibility: "hidden"
                  }),
                  this.attachChild(
                    i["default"],
                    "manager",
                    "manager"
                  ).configure({
                    visibility: "hidden",
                    position: o.containerPos,
                    showTime: l,
                    extStyle: t,
                    drawCalendars: !1
                  }),
                  (o.showTime = l),
                  (o._finalIconStyle = Object.assign(
                    {},
                    o._iconStyle,
                    u(t.title && t.title.icon),
                    u(e.icon)
                  )),
                  (o._finalTextStyle = Object.assign(
                    {},
                    o._textStyle,
                    f,
                    u(t.title && t.title.text),
                    u(e.text)
                  ));
              }),
              (e.prototype.getLabel = function() {
                var t,
                  e = this.config,
                  n = "",
                  i = e.showTimeInLabel,
                  o = +this.getFromEnv("chartWidth"),
                  r = this.getLinkedParent(),
                  a = this.getFromEnv("chart").getFromEnv("contextScalesX")[0],
                  l = e.domain || a.getDomain(),
                  s = this.getFromEnv("smartLabel"),
                  c = new Date(l[0]),
                  u = new Date(l[1]),
                  f = Object.assign(e.prevDim),
                  d = f;
                return (
                  s.setStyle(e._finalTextStyle),
                  (n = a.getFormattedTime({
                    dateRange: { startDate: c, endDate: u },
                    type: "CRS",
                    showTimeInLabel: i
                  })),
                  (t = s.getOriSize(n)),
                  Math.abs(t.width - f.width) > 10 &&
                    (d = e.prevDim = Object.assign(t)),
                  o < 600 &&
                    (d.width + e.calendarIconDim.width) / r.props.width > 0.4 &&
                    ((n = ""), (d.width = 0)),
                  (e.label = n),
                  { text: n, dim: d }
                );
              }),
              (e.prototype.getLogicalSpace = function() {
                var t,
                  e = this.config,
                  n = this.getChildren("manager")[0],
                  i = this.getFromEnv("focusScalesX"),
                  o = !1,
                  r = e.width,
                  a = e.height,
                  l = e.marginTop,
                  s = e.marginLeft,
                  u = e.marginRight,
                  f = e.marginBottom;
                return (
                  i.forEach(function(t) {
                    c.includes(t.getBinMin()[0].name()) && (e.showTime = !0),
                      t._timeFormat &&
                        (o =
                          c.includes(t._timeFormat.major) ||
                          c.includes(t._timeFormat.minor) ||
                          o);
                  }),
                  (e.showTimeInLabel = o),
                  n.configure({ showTime: e.showTime }, !0),
                  (r = (t = this.getLabel().dim).width),
                  (a = t.height),
                  (e.skipGraphics || e.isHidden || this.getState("removed")) &&
                    (r = a = f = s = u = l = 0),
                  (e.width = t.width),
                  (e.height = t.height),
                  {
                    width: r,
                    height: a,
                    marginLeft: s,
                    marginBottom: f,
                    marginRight: u,
                    marginTop: l
                  }
                );
              }),
              (e.prototype.draw = function() {
                var t,
                  e,
                  n = this.config,
                  i = this.getLinkedParent();
                this.addGraphicalElement(
                  {
                    el: "group",
                    attr: {
                      name: "range-selector-text",
                      transform: "t" + n.x + ", " + (n.y + i.props.height / 2)
                    },
                    container: n.containerInfo,
                    component: this,
                    id: "group",
                    label: "group"
                  },
                  !0
                ),
                  (t = -1 * n.calendarIconDim.width - 5),
                  (e = ((3 * n.calendarIconDim.height) / 4) * -1),
                  this.addGraphicalElement(
                    {
                      el: "group",
                      attr: {
                        name: "range-selector-icon-group",
                        transform: "t" + t + ", " + e
                      },
                      container: { id: "group", label: "group" },
                      component: this,
                      label: "group",
                      id: "icon-group"
                    },
                    !0
                  ),
                  this.addGraphicalElement(
                    {
                      el: "path",
                      attr: { path: n.calendarIconPath },
                      css: n._finalIconStyle,
                      container: { id: "icon-group", label: "group" },
                      component: this,
                      label: "path",
                      id: "icon"
                    },
                    !0
                  ),
                  this.addGraphicalElement(
                    {
                      el: "text",
                      attr: { text: n.label },
                      css: n._finalTextStyle,
                      container: { id: "group", label: "group" },
                      component: this,
                      label: "text",
                      id: "display"
                    },
                    !0
                  ),
                  this.addGraphicalElement({
                    el: "rect",
                    attr: {
                      fill: r.TRACKER_FILL,
                      x: t,
                      y: (-1 * i.props.height) / 2,
                      width: n.calendarIconDim.width + Math.abs(t) + n.width,
                      height: n.calendarIconDim.height
                    },
                    component: this,
                    container: { label: "group", id: "group" },
                    css: { cursor: "pointer" },
                    label: "rect",
                    id: "rect"
                  }),
                  (n.containerPos = {
                    x: n.x - n.calendarIconDim.width / 2 - 4,
                    y: n.y + i.props.height / 2 + n.calendarIconDim.height
                  });
              }),
              e
            );
          })(o.Tool);
        e["default"] = u;
      },
      754: function(t, e, n) {
        "use strict";
        (e.__esModule = !0), (e.formatDate = undefined);
        var i = n(138),
          o = c(n(755)),
          r = n(125),
          a = c(n(757)),
          l = c(n(758)),
          s = c(n(759));
        function c(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function u(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var f = function(t) {
            return (t < 10 ? "0" + t : t) + "";
          },
          d = (function(t) {
            function e(n) {
              !(function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e);
              var i = (function(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                })(this, t.call(this, n)),
                o = i;
              return (
                (o.clickHandler = function() {
                  o.getLinkedParent().config.hideCRS = !1;
                }),
                o.addEventListener("mousedown", o.clickHandler),
                o.addEventListener("touchstart", o.clickHandler),
                o.addToEnv("fontParser", function(t) {
                  return isNaN(t) ? +t.slice(0, t.length - 2) : +t;
                }),
                i
              );
            }
            return (
              u(e, t),
              (e.prototype.__setDefaultConfig = function() {
                var t = this.config;
                (t.marginLeft = 10),
                  (t.marginRight = 10),
                  (t.marginTop = 15),
                  (t.marginBottom = 15),
                  (t.contextStart = { year: 1970, month: 1, day: 1 }),
                  (t.contextEnd = { year: 2070, month: 1, day: 1 }),
                  (t.calendarDim = { height: 191, width: 163 }),
                  (this._calendars = {}),
                  (t._backgroundStyle = {
                    "font-size": 11 + r.PXSTRING,
                    "font-family": "Verdana,sans-serif",
                    border: "1px solid #cdcdcd",
                    "background-color": "#ffffff"
                  }),
                  (t._pointerStyle = {
                    "font-size": 11 + r.PXSTRING,
                    "font-family": "Verdana,sans-serif",
                    "border-left": "1px solid #cdcdcd",
                    "border-right": "0px solid #cdcdcd",
                    "border-top": "1px solid #cdcdcd",
                    "border-bottom": "0px solid #cdcdcd",
                    transform: "rotate(45deg)",
                    "background-color": "#ffffff"
                  });
              }),
              (e.prototype.configureAttributes = function() {
                var t,
                  e,
                  n,
                  i =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : {},
                  o = this.config,
                  r = this.getCalendars(),
                  c = this.getFromEnv("getStyleDef");
                if (
                  (Object.keys(i).forEach(function(t) {
                    return (o[t] = i[t]);
                  }),
                  (t = o.extStyle),
                  "visible" !== o.visibility)
                )
                  return (
                    r.left && (r.left.dispose(), delete r.left),
                    void (r.right && (r.right.dispose(), delete r.right))
                  );
                this.attachChild(
                  a["default"],
                  "left-date",
                  "left-date"
                ).configure({
                  label: "From: ",
                  date: o.startDate,
                  id: "left",
                  labelStyle: t.label,
                  inputStyle: t.input
                }),
                  this.attachChild(
                    a["default"],
                    "right-date",
                    "right-date"
                  ).configure({
                    label: "To: ",
                    date: o.endDate,
                    id: "right",
                    labelStyle: t.label,
                    inputStyle: t.input
                  }),
                  o.showTime &&
                    (this.attachChild(
                      l["default"],
                      "left-time",
                      "left-time"
                    ).configure({
                      time: o.startDate,
                      labelStyle: t.label,
                      selectStyle: t.select
                    }),
                    this.attachChild(
                      l["default"],
                      "right-time",
                      "right-time"
                    ).configure({
                      time: o.endDate,
                      labelStyle: t.label,
                      selectStyle: t.select
                    })),
                  (e = (t.button && t.button.apply) || {
                    color: "#ffffff",
                    "font-style": "11px !important"
                  }),
                  this.attachChild(s["default"], "apply", "apply").configure({
                    label: "Apply",
                    type: "submit",
                    customStyle: e,
                    buttonStyle: e,
                    "button:hoverout": e,
                    "button:hover":
                      (t["button:hover"] && t["button:hover"].apply) || {}
                  }),
                  (n = (t.button && t.button.cancel) || {
                    backgroundColor: "#ffffff",
                    color: "#7A7A7A",
                    border: "0px",
                    "font-style": "11px !important"
                  }),
                  this.attachChild(s["default"], "cancel", "cancel").configure({
                    label: "Cancel",
                    type: "cancel",
                    customStyle: n,
                    buttonStyle: n,
                    "button:hoverout": n,
                    "button:hover":
                      (t["button:hover"] && t["button:hover"].cancel) || {}
                  }),
                  (o._finalBackgroundStyle = Object.assign(
                    o._backgroundStyle,
                    c(t.background)
                  )),
                  (o._finalPointerStyle = Object.assign(
                    o._pointerStyle,
                    c(t.background)
                  )),
                  o._finalPointerStyle.border &&
                    (o._finalPointerStyle["border-left"] = o._finalPointerStyle[
                      "border-top"
                    ] = o._finalPointerStyle.border),
                  (o._finalPointerStyle["border-right"] = o._finalPointerStyle[
                    "border-bottom"
                  ] = "0px"),
                  delete o._finalPointerStyle.border;
              }),
              (e.prototype.manageSpace = function() {
                var t,
                  e,
                  n,
                  i,
                  o,
                  r,
                  a = this.config,
                  l = 4,
                  s = void 0,
                  c = void 0,
                  u = void 0,
                  f = void 0,
                  d = void 0,
                  h = void 0,
                  p = { height: 0, width: 0 },
                  g = { height: 0, width: 0 },
                  m = a.calendarDim;
                "visible" === a.visibility &&
                  ((s = this.getChildren("left-date")[0]),
                  (c = this.getChildren("right-date")[0]),
                  (u = this.getChildren("left-time")),
                  (f = this.getChildren("right-time")),
                  (d = this.getChildren("apply")[0]),
                  (h = this.getChildren("cancel")[0]),
                  u && (p = (u = u[0]).getDimension()),
                  f && (g = (f = f[0]).getDimension()),
                  !p.height && (l = 2),
                  (t = s.getDimension()),
                  (e = c.getDimension()),
                  (o = d.getDimension()),
                  (r = h.getDimension()),
                  (n = Math.max(p.width, t.width, m.width)),
                  (a.leftCalendarPosition = {
                    x: a.marginLeft,
                    y: a.marginTop + t.height + 8
                  }),
                  (a.rightCalendarPosition = {
                    x: a.marginLeft + n + 25,
                    y: a.marginTop + e.height + 8
                  }),
                  s.setTranslation(a.marginLeft, a.marginTop),
                  c.setTranslation(a.marginLeft + n + 25, a.marginTop),
                  u &&
                    u.setTranslation(
                      a.marginLeft,
                      a.leftCalendarPosition.y + m.height + 16
                    ),
                  f &&
                    f.setTranslation(
                      a.marginLeft + n + 25,
                      a.rightCalendarPosition.y + m.height + 16
                    ),
                  d.setTranslation(
                    a.marginLeft,
                    a.leftCalendarPosition.y + m.height + 8 * l + p.height
                  ),
                  h.setTranslation(
                    a.marginLeft + o.width + 5,
                    a.leftCalendarPosition.y + m.height + 8 * l + p.height
                  ),
                  (i = Math.max(
                    a.marginLeft + o.width + 5 + r.width,
                    a.rightCalendarPosition.x + m.width,
                    a.marginLeft + n + 25 + g.width,
                    a.marginLeft + n + 25 + e.width
                  )),
                  (a.width = i + a.marginRight),
                  (a.height =
                    a.leftCalendarPosition.y +
                    m.height +
                    o.height +
                    8 * l +
                    p.height +
                    a.marginBottom));
              }),
              (e.prototype.draw = function() {
                this.manageSpace();
                var t = this.getLinkedParent(),
                  e = this.config,
                  n = t.config.containerPos;
                this.addGraphicalElement({
                  el: "html",
                  attr: {
                    x: n.x - e.width / 2,
                    y: n.y + 4,
                    width: e.width,
                    height: e.height,
                    type: "div",
                    fill: "ffffff",
                    display: "block",
                    visibility: e.visibility
                  },
                  css: e._backgroundStyle,
                  component: this,
                  label: "box-container",
                  id: "box-container"
                }),
                  this.addGraphicalElement({
                    el: "html",
                    attr: {
                      x: e.width / 2 - 10,
                      y: -8,
                      width: 15,
                      height: 15,
                      type: "div",
                      display: "block",
                      visibility: e.visibility
                    },
                    css: e._finalPointerStyle,
                    container: { label: "box-container", id: "box-container" },
                    component: this,
                    label: "box-pointer",
                    id: "box-pointer"
                  }),
                  e.drawCalendars && this.drawCalendars();
              }),
              (e.prototype.getCalendars = function() {
                return this._calendars;
              }),
              (e.prototype.drawCalendars = function() {
                var t,
                  e = this,
                  n = e.config,
                  i = n.extStyle,
                  r = e.getCalendars(),
                  a = n.leftCalendarPosition,
                  l = n.rightCalendarPosition,
                  s = e.getGraphicalElement("box-container", "box-container")
                    .element;
                r.left
                  ? r.left.configure({
                      weekLabel: ["S", "M", "T", "W", "T", "F", "S"],
                      selectedDate: n.startDate,
                      posX: a.x,
                      posY: a.y,
                      rangeStart: n.contextStart,
                      rangeEnd: n.contextEnd,
                      customCssClass: i.calendar || {},
                      showInactiveMonths: !0,
                      container: s
                    })
                  : (r.left = new o["default"]({
                      weekLabel: ["S", "M", "T", "W", "T", "F", "S"],
                      selectedDate: n.startDate,
                      posX: a.x,
                      posY: a.y,
                      container: s,
                      id: "left",
                      rangeStart: n.contextStart,
                      rangeEnd: n.contextEnd,
                      showInactiveMonths: !0,
                      customCssClass: i.calendar || {},
                      events: {
                        onDateChange: function(t) {
                          e.updateDate(t, "left");
                        },
                        onMonthChange: function(t) {
                          e.updateDate(t, "left");
                        },
                        onYearChange: function(t) {
                          e.updateDate(t, "left");
                        }
                      }
                    })),
                  r.right
                    ? r.right.configure({
                        weekLabel: ["S", "M", "T", "W", "T", "F", "S"],
                        selectedDate: n.endDate,
                        posX: l.x,
                        posY: l.y,
                        rangeStart: n.contextStart,
                        rangeEnd: n.contextEnd,
                        customCssClass: i.calendar || {},
                        showInactiveMonths: !0,
                        container: s
                      })
                    : (r.right = new o["default"]({
                        weekLabel: ["S", "M", "T", "W", "T", "F", "S"],
                        selectedDate: n.endDate,
                        posX: l.x,
                        posY: l.y,
                        rangeStart: n.contextStart,
                        rangeEnd: n.contextEnd,
                        showInactiveMonths: !0,
                        customCssClass: i.calendar || {},
                        container: s,
                        id: "right",
                        events: {
                          onDateChange: function(t) {
                            e.updateDate(t, "right");
                          },
                          onMonthChange: function(t) {
                            e.updateDate(t, "right");
                          },
                          onYearChange: function(t) {
                            e.updateDate(t, "right");
                          }
                        }
                      })),
                  ((t = r.left.getDimension()).width === n.calendarDim.width &&
                    t.height === n.calendarDim.height) ||
                    ((n.calendarDim = t), e.asyncDraw());
              }),
              (e.prototype.updateDate = function(t, e) {
                var n = this.getChildren(e + "-date")[0],
                  i = n.getGraphicalElement("box", "box");
                n.configure({ date: t }),
                  (i.element.value =
                    f(t.day) + "/" + f(t.month) + "/" + f(t.year));
              }),
              (e.prototype.updateCalendar = function(t, e) {
                var n = this.config,
                  i = this.getCalendars();
                !(function(t, e, n) {
                  var i = new Date(e.year, e.month, e.day),
                    o = new Date(n.year, n.month, n.day),
                    r = new Date(t.year, t.month, t.day);
                  return +r >= +i && +r <= +o;
                })(t, n.contextStart, n.contextEnd)
                  ? this.getChildren(e + "-date")[0].setData({}, !0)
                  : i[e] && i[e].configure({ selectedDate: t });
              }),
              (e.prototype.submitData = function() {
                var t =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : "cancel",
                  e = this.getLinkedParent(),
                  n = e.getFromEnv("chart"),
                  i = [],
                  o = this.getCalendars(),
                  r = n.getFromEnv("UTC"),
                  a = o.left.getDate(),
                  l = o.right.getDate(),
                  s = this.getChildren("left-time"),
                  c = this.getChildren("right-time"),
                  u = void 0,
                  f = void 0,
                  d = { hours: 0, minutes: 0, seconds: 0 },
                  h = { hours: 0, minutes: 0, seconds: 0 };
                s && (d = s[0].getTime()),
                  c && (h = c[0].getTime()),
                  e.setData({}, !0),
                  "submit" === t &&
                    ((u = r
                      ? Date.UTC(
                          a.year,
                          a.month - 1,
                          a.day,
                          d.hours,
                          d.minutes,
                          d.seconds
                        )
                      : new Date(
                          a.year,
                          a.month - 1,
                          a.day,
                          d.hours,
                          d.minutes,
                          d.seconds
                        )),
                    (f = r
                      ? Date.UTC(
                          l.year,
                          l.month - 1,
                          l.day,
                          h.hours,
                          h.minutes,
                          h.seconds
                        )
                      : new Date(
                          l.year,
                          l.month - 1,
                          l.day,
                          h.hours,
                          h.minutes,
                          h.seconds
                        )),
                    i.push(+u),
                    i.push(+f),
                    n.setFocusLimit(i));
              }),
              e
            );
          })(i.SmartRenderer);
        (e.formatDate = f), (e["default"] = d);
      },
      755: function(t, e, n) {
        "use strict";
        (function(t) {
          var n,
            i,
            o,
            r,
            a =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function(t) {
                    return typeof t;
                  }
                : function(t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  };
          undefined,
            (r = function() {
              return (function(t) {
                var e = {};
                function n(i) {
                  if (e[i]) return e[i].exports;
                  var o = (e[i] = { i: i, l: !1, exports: {} });
                  return (
                    t[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
                  );
                }
                return (
                  (n.m = t),
                  (n.c = e),
                  (n.i = function(t) {
                    return t;
                  }),
                  (n.d = function(t, e, i) {
                    n.o(t, e) ||
                      Object.defineProperty(t, e, {
                        configurable: !1,
                        enumerable: !0,
                        get: i
                      });
                  }),
                  (n.n = function(t) {
                    var e =
                      t && t.__esModule
                        ? function() {
                            return t["default"];
                          }
                        : function() {
                            return t;
                          };
                    return n.d(e, "a", e), e;
                  }),
                  (n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                  }),
                  (n.p = "/dist/"),
                  n((n.s = 4))
                );
              })([
                function(t, e, n) {
                  var i = n(1);
                  "string" == typeof i && (i = [[t.i, i, ""]]);
                  n(3)(i, {});
                  i.locals && (t.exports = i.locals);
                },
                function(t, e, n) {
                  (t.exports = n(2)()).push([
                    t.i,
                    ".fc-cal-date-li {\n  box-sizing: border-box!important;\n  float: left!important;\n  list-style-type: none!important;\n  width: 14.28571%!important;\n  height: auto!important;\n  padding: 2px 0 2px !important;\n  margin: 0 !important;\n  background-color: #fff !important;\n}\n.fc-cal-nav-inactive {\n  opacity: 0;\n  cursor: default !important;\n}\n.fc-cal-weekend-default {\n  background-color: #F7F6FF!important;\n}\n.fc-cal-date-normal-default{\n  cursor: pointer!important;\n}\n.fc-cal-date-normal-default:hover {\n  color: #5F5F5F!important;\n  background-color: #dcdcdc!important;\n}\n.fc-cal-date-selected-default,\n.fc-cal-date-selected-default:hover {\n  background-color: #32cd32!important;\n  color: #F3F3F3!important;\n}\n\n.fc-cal-date-disabled-default {\n  color: #cacaca!important;\n}\n",
                    ""
                  ]);
                },
                function(t, e) {
                  t.exports = function() {
                    var t = [];
                    return (
                      (t.toString = function() {
                        for (var t = [], e = 0; e < this.length; e++) {
                          var n = this[e];
                          n[2]
                            ? t.push("@media " + n[2] + "{" + n[1] + "}")
                            : t.push(n[1]);
                        }
                        return t.join("");
                      }),
                      (t.i = function(e, n) {
                        "string" == typeof e && (e = [[null, e, ""]]);
                        for (var i = {}, o = 0; o < this.length; o++) {
                          var r = this[o][0];
                          "number" == typeof r && (i[r] = !0);
                        }
                        for (o = 0; o < e.length; o++) {
                          var a = e[o];
                          ("number" == typeof a[0] && i[a[0]]) ||
                            (n && !a[2]
                              ? (a[2] = n)
                              : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                            t.push(a));
                        }
                      }),
                      t
                    );
                  };
                },
                function(t, e) {
                  var n = {},
                    i = function(t) {
                      var e;
                      return function() {
                        return (
                          void 0 === e && (e = t.apply(this, arguments)), e
                        );
                      };
                    },
                    o = i(function() {
                      return /msie [6-9]\b/.test(
                        self.navigator.userAgent.toLowerCase()
                      );
                    }),
                    r = i(function() {
                      return (
                        document.head ||
                        document.getElementsByTagName("head")[0]
                      );
                    }),
                    l = null,
                    s = 0,
                    c = [];
                  function u(t, e) {
                    for (var i = 0; i < t.length; i++) {
                      var o = t[i],
                        r = n[o.id];
                      if (r) {
                        r.refs++;
                        for (var a = 0; a < r.parts.length; a++)
                          r.parts[a](o.parts[a]);
                        for (; a < o.parts.length; a++)
                          r.parts.push(g(o.parts[a], e));
                      } else {
                        var l = [];
                        for (a = 0; a < o.parts.length; a++)
                          l.push(g(o.parts[a], e));
                        n[o.id] = { id: o.id, refs: 1, parts: l };
                      }
                    }
                  }
                  function f(t) {
                    for (var e = [], n = {}, i = 0; i < t.length; i++) {
                      var o = t[i],
                        r = o[0],
                        a = { css: o[1], media: o[2], sourceMap: o[3] };
                      n[r]
                        ? n[r].parts.push(a)
                        : e.push((n[r] = { id: r, parts: [a] }));
                    }
                    return e;
                  }
                  function d(t, e) {
                    var n = r(),
                      i = c[c.length - 1];
                    if ("top" === t.insertAt)
                      i
                        ? i.nextSibling
                          ? n.insertBefore(e, i.nextSibling)
                          : n.appendChild(e)
                        : n.insertBefore(e, n.firstChild),
                        c.push(e);
                    else {
                      if ("bottom" !== t.insertAt)
                        throw new Error(
                          "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'."
                        );
                      n.appendChild(e);
                    }
                  }
                  function h(t) {
                    t.parentNode.removeChild(t);
                    var e = c.indexOf(t);
                    e >= 0 && c.splice(e, 1);
                  }
                  function p(t) {
                    var e = document.createElement("style");
                    return (e.type = "text/css"), d(t, e), e;
                  }
                  function g(t, e) {
                    var n, i, o;
                    if (e.singleton) {
                      var r = s++;
                      (n = l || (l = p(e))),
                        (i = v.bind(null, n, r, !1)),
                        (o = v.bind(null, n, r, !0));
                    } else
                      t.sourceMap &&
                      "function" == typeof URL &&
                      "function" == typeof URL.createObjectURL &&
                      "function" == typeof URL.revokeObjectURL &&
                      "function" == typeof Blob &&
                      "function" == typeof btoa
                        ? ((n = (function(t) {
                            var e = document.createElement("link");
                            return (e.rel = "stylesheet"), d(t, e), e;
                          })(e)),
                          (i = function(t, e) {
                            var n = e.css,
                              i = e.sourceMap;
                            i &&
                              (n +=
                                "\n/*# sourceMappingURL=data:application/json;base64," +
                                btoa(
                                  unescape(
                                    encodeURIComponent(JSON.stringify(i))
                                  )
                                ) +
                                " */");
                            var o = new Blob([n], { type: "text/css" }),
                              r = t.href;
                            (t.href = URL.createObjectURL(o)),
                              r && URL.revokeObjectURL(r);
                          }.bind(null, n)),
                          (o = function() {
                            h(n), n.href && URL.revokeObjectURL(n.href);
                          }))
                        : ((n = p(e)),
                          (i = function(t, e) {
                            var n = e.css,
                              i = e.media;
                            i && t.setAttribute("media", i);
                            if (t.styleSheet) t.styleSheet.cssText = n;
                            else {
                              for (; t.firstChild; )
                                t.removeChild(t.firstChild);
                              t.appendChild(document.createTextNode(n));
                            }
                          }.bind(null, n)),
                          (o = function() {
                            h(n);
                          }));
                    return (
                      i(t),
                      function(e) {
                        if (e) {
                          if (
                            e.css === t.css &&
                            e.media === t.media &&
                            e.sourceMap === t.sourceMap
                          )
                            return;
                          i((t = e));
                        } else o();
                      }
                    );
                  }
                  t.exports = function(t, e) {
                    if (
                      "undefined" != typeof DEBUG &&
                      DEBUG &&
                      "object" !==
                        ("undefined" == typeof document
                          ? "undefined"
                          : a(document))
                    )
                      throw new Error(
                        "The style-loader cannot be used in a non-browser environment"
                      );
                    "undefined" == typeof (e = e || {}).singleton &&
                      (e.singleton = o()),
                      "undefined" == typeof e.insertAt &&
                        (e.insertAt = "bottom");
                    var i = f(t);
                    return (
                      u(i, e),
                      function(t) {
                        for (var o = [], r = 0; r < i.length; r++) {
                          var a = i[r];
                          (l = n[a.id]).refs--, o.push(l);
                        }
                        t && u(f(t), e);
                        for (r = 0; r < o.length; r++) {
                          var l;
                          if (0 === (l = o[r]).refs) {
                            for (var s = 0; s < l.parts.length; s++)
                              l.parts[s]();
                            delete n[l.id];
                          }
                        }
                      }
                    );
                  };
                  var m,
                    y = ((m = []),
                    function(t, e) {
                      return (m[t] = e), m.filter(Boolean).join("\n");
                    });
                  function v(t, e, n, i) {
                    var o = n ? "" : i.css;
                    if (t.styleSheet) t.styleSheet.cssText = y(e, o);
                    else {
                      var r = document.createTextNode(o),
                        a = t.childNodes;
                      a[e] && t.removeChild(a[e]),
                        a.length ? t.insertBefore(r, a[e]) : t.appendChild(r);
                    }
                  }
                },
                function(t, e, n) {
                  Object.defineProperty(e, "__esModule", { value: !0 }), n(0);
                  var i = 0,
                    o = undefined,
                    r = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                    a = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    l = [
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December"
                    ],
                    s = {
                      container: "fc-cal-container",
                      header: "fc-cal-header",
                      month: "fc-cal-month-header",
                      year: "fc-cal-year-header",
                      monthname: "fc-cal-month",
                      yearname: "fc-cal-year",
                      nav: "fc-cal-nav",
                      navprev: "fc-cal-nav-prev",
                      navnext: "fc-cal-nav-next",
                      navinactive: "fc-cal-nav-inactive",
                      navmonth: "fc-cal-nav-month",
                      navyear: "fc-cal-nav-year",
                      subheader: "fc-cal-sub-header",
                      days: "fc-cal-day",
                      indexeddays: "fc-cal-day-",
                      body: "fc-cal-body",
                      date: "fc-cal-date",
                      dateLI: "fc-cal-date-li",
                      selecteddatedefault: "fc-cal-date-selected-default",
                      disableddatedefault: "fc-cal-date-disabled-default",
                      normaldatedefault: "fc-cal-date-normal-default",
                      highlighteddatedefault: "fc-cal-date-highlight-default",
                      selecteddate: "fc-cal-date-selected",
                      normaldate: "fc-cal-date-normal",
                      disableddate: "fc-cal-date-disabled",
                      highlighteddate: "fc-cal-date-highlight",
                      daycol: "fc-cal-day-col",
                      weekenddefault: "fc-cal-weekend-default",
                      weekend: "fc-cal-weekend"
                    },
                    c = {
                      container:
                        "box-sizing: border-box !important; -webkit-touch-callout: none !important; -webkit-user-select: none !important; -khtml-user-select: none !important; -moz-user-select: none !important; -ms-user-select: none !important; user-select: none !important; text-align: center !important; vertical-align: top !important; padding-bottom: 0 !important; margin: 0px 0px 0px 0px !important; float: left;font-family: Source sans pro, sans-seriff !important; font-size: 11px !important; max-width: 163px !important; background-color: #fff !important; border: 1px solid #a5a4a4;",
                      header:
                        "box-sizing: border-box !important; overflow: hidden !important; height: 26px !important; line-height: 2.4 !importantfont-size: 12px !important; background-color: #32cd32 !important;",
                      month:
                        "display: block !important; width: 100% !important; float: left !important; height: 100% !important;font-weight: bold !important; color: #F3F3F3 !important; font-size: 13px !important;",
                      year:
                        "display: block !important; width: 35% !important; float: right !important;",
                      monthname:
                        "display: inline-block !important; padding: 4px !important;",
                      yearname:
                        "display: inline-block !important; padding-right: 5px !important; padding-left: 5px !important;",
                      nav:
                        "display: inline-block !important; cursor: pointer !important; padding: 4px;",
                      navprev:
                        "float: left !important; padding-left: 8px !important;",
                      navnext:
                        "float: right !important; padding-right: 8px !important;",
                      navinactive: "cursor: default !important;",
                      navmonth: "",
                      navyear: "",
                      subheader:
                        "text-transform: uppercase !important; overflow: hidden !important; color: #666 !important;",
                      days:
                        "box-sizing: border-box !important; display: block !important; float: left !important; width: 14.28571% !important; line-height: 2.3 !important;",
                      indexeddays: "",
                      body: "width: 100% !important;",
                      date:
                        "box-sizing: border-box !important; text-align: center !important; display: block !important; margin: 0 auto !important;border: 0px solid transparent !important; width: 14.2857% !important; padding: 0px !important;",
                      dateLI:
                        "box-sizing: border-box !important; float: left !important; list-style-type: none !important; width: 14.28571% !important; height: auto!important;",
                      selecteddate: "",
                      disableddate: "",
                      normaldate: "cursor: pointer !important;",
                      highlightedDate: "",
                      daycol: "",
                      weekenddefault: "background-color: #F7F6FF!important;",
                      weekend: ""
                    },
                    u = { padding: "0", margin: 0 },
                    f = 300,
                    d = 300,
                    h = "px",
                    p = " ",
                    g = { top: 0, middle: -0.5, bottom: -1 },
                    m = { left: 0, center: -0.5, right: -1 },
                    y = function() {
                      return "fc_calendar-" + i++;
                    },
                    v = function(t, e) {
                      if (e && t && t.style)
                        for (var n in e)
                          e.hasOwnProperty(n) && (t.style[n] = e[n]);
                    },
                    b = function(t, e) {
                      var n = e && e.className;
                      n &&
                        t &&
                        (e.className = n.replace(
                          new RegExp("(?:^|\\s*)" + t.trim() + "(?:\\s*|$)"),
                          " "
                        ));
                    },
                    x = function(t, e) {
                      var n = void 0,
                        i = void 0,
                        o = void 0,
                        r = void 0,
                        a = void 0;
                      if (t && t.getElementsByClassName)
                        for (
                          o = 0, r = (a = e.trim().split(p)).length;
                          o < r;
                          o += 1
                        )
                          for (
                            e = a[o],
                              i = (n = t.getElementsByClassName(e)).length - 1;
                            i >= 0;
                            i--
                          )
                            b(e, n[i]);
                    },
                    k = function(t) {
                      var e = t.info,
                        n = e.weekStartingDay,
                        i = t.graphic.dayElements,
                        o = void 0;
                      for (o = 0; o < 7; o++)
                        i[o].innerHTML = e.weekLabel[(o + n) % 7];
                    },
                    _ = function(t) {
                      var e = t.classNames,
                        n = t.info,
                        i = n.selectedDate,
                        o = n.active,
                        r = n.startingPos,
                        a = t.graphic,
                        l = a.container,
                        s = a.dateLiElements,
                        c = a.dateElements;
                      i.month === o.month &&
                        i.year === o.year &&
                        (x(l, e.selecteddatedefault),
                        x(l, e.selecteddate),
                        (s[i.day + r - 1].className +=
                          p + e.selecteddatedefault),
                        (c[i.day + r - 1].className += p + e.selecteddate));
                    },
                    w = function(t, e) {
                      var n = e.appendTo,
                        i = e.className,
                        o = e.inline,
                        r = e.id,
                        a = e.innerHTML,
                        l = e.events,
                        s = document.createElement(t);
                      if (
                        (i && (s.className = i),
                        o && s.setAttribute("style", o),
                        r && (s.id = r),
                        a && (s.innerHTML = a),
                        l)
                      )
                        for (var c in l)
                          s.addEventListener(c, l[c]),
                            "click" === c &&
                              ((s["_" + c + "Handler"] = l[c]),
                              (s.eventAttached = !0));
                      return n && n.appendChild(s), s;
                    },
                    S = function(t, e) {
                      var n = t.graphic,
                        i = t.info.weekLabel,
                        o = n.dateElements,
                        r = n.dayElements,
                        a = n.dateLiElements,
                        l = (t.classNames = Object.assign(
                          {},
                          s,
                          t._customCssClass
                        )),
                        f = (n.container = w("div", {
                          appendTo: n.parentElement,
                          inline: c.container,
                          className: l.container,
                          id: t.id
                        })),
                        d = (n.calendarHeader = w("div", {
                          appendTo: f,
                          inline: c.header
                        })),
                        h = (n.headerUl = w("ul", {
                          appendTo: d,
                          className: l.header,
                          inline: "height: 100% !important;"
                        })),
                        g = (n.headerMonthLi = w("li", {
                          appendTo: h,
                          inline: c.month
                        })),
                        m = (n.headerMonthUl = w("ul", {
                          appendTo: g,
                          className: l.month,
                          inline: "height: 100% !important;"
                        })),
                        y = (n.calendarSubHeader = w("div", {
                          appendTo: f,
                          inline: c.subheader
                        })),
                        x = (n.weekDays = w("ul", {
                          appendTo: y,
                          className: l.subheader
                        })),
                        k = (n.calendarBody = w("div", {
                          appendTo: f,
                          inline: c.body
                        })),
                        S = (n.days = n.dayCell = w("ul", {
                          appendTo: k,
                          inline:
                            "padding: 1px !important; margin: 0px !important;",
                          className: l.body
                        })),
                        D = void 0,
                        M = void 0,
                        T = void 0,
                        O = void 0;
                      for (
                        v(f, t.style),
                          v(h, u),
                          v(x, u),
                          v(S, u),
                          v(m, u),
                          n.prevMonth = w("li", {
                            appendTo: m,
                            inline: c.nav + p + c.navprev + p,
                            events: {
                              click: function() {
                                var e = t.info,
                                  n = t.graphic,
                                  i = (e.active && e.active.month) - 1,
                                  o = e.active && e.active.year,
                                  r = e.rangeStart;
                                i < 1 && ((i = 12), o--),
                                  !r || o > r.year
                                    ? (b(l.navinactive, n.prevMonth),
                                      b(l.navinactive, n.nextMonth),
                                      t.configure({
                                        active: { month: i, year: o }
                                      }))
                                    : o === r.year &&
                                      i >= r.month &&
                                      (b(l.navinactive, n.nextMonth),
                                      i === r.month &&
                                        (n.prevMonth.className +=
                                          p + l.navinactive),
                                      t.configure({
                                        active: { month: i, year: o }
                                      }));
                              }
                            }
                          }),
                          n.prevMonthPointer = w("span", {
                            appendTo: n.prevMonth,
                            className: l.navprev,
                            innerHTML: "&#10094;"
                          }),
                          n.monthStrLi = w("li", {
                            appendTo: m,
                            inline: c.monthname
                          }),
                          n.monthStr = w("span", {
                            appendTo: n.monthStrLi,
                            className: l.monthname
                          }),
                          n.nextMonth = w("li", {
                            appendTo: m,
                            inline: c.nav + p + c.navnext + p,
                            events: {
                              click: function() {
                                var e = t.info,
                                  n = t.graphic,
                                  i = (e.active && e.active.month) + 1,
                                  o = e.active && e.active.year,
                                  r = e.rangeEnd;
                                i > 12 && ((i = 1), o++),
                                  !r || o < r.year
                                    ? (b(l.navinactive, n.prevMonth),
                                      b(l.navinactive, n.nextMonth),
                                      t.configure({
                                        active: { month: i, year: o }
                                      }))
                                    : o === r.year &&
                                      i <= r.month &&
                                      (i === r.month &&
                                        (n.nextMonth.className +=
                                          p + l.navinactive),
                                      b(l.navinactive, n.prevMonth),
                                      t.configure({
                                        active: { month: i, year: o }
                                      }));
                              }
                            }
                          }),
                          n.nextMonthPointer = w("span", {
                            appendTo: n.nextMonth,
                            className: l.navnext,
                            innerHTML: "&#10095;"
                          }),
                          M = 1;
                        M < 8;
                        M++
                      )
                        (T = p + (M > 5 ? l.weekend : "")),
                          (O = p + (M > 5 ? l.weekenddefault : "")),
                          (D = w("li", {
                            appendTo: x,
                            inline: c.days,
                            className: O
                          })),
                          (D = w("span", {
                            appendTo: D,
                            innerHTML: i[M % 7],
                            inline: "display: block !important;",
                            className: l.days + p + l.indexeddays + (M % 7) + T
                          })),
                          r.push(D);
                      for (
                        var F = function(e) {
                            (O =
                              p +
                              (e % 7 == 5 || e % 7 == 6
                                ? l.weekenddefault
                                : "")),
                              (T =
                                p +
                                (e % 7 == 5 || e % 7 == 6 ? l.weekend : "")),
                              (D = w("li", {
                                appendTo: S,
                                inline: c.date,
                                className: l.dateLI + O
                              })),
                              a.push(D),
                              (D = w("span", {
                                appendTo: D,
                                className:
                                  l.date + p + l.daycol + "-" + (e % 7) + T,
                                inline:
                                  "display: block !important; padding: 4px 0px !important;",
                                innerHTML: "&nbsp;",
                                events: {
                                  click: function() {
                                    var n = t.info,
                                      i = t.events,
                                      o = n.selectedDate,
                                      r = n.active,
                                      a = {
                                        day: e - n.startingPos + 1,
                                        month: r.month,
                                        year: r.year
                                      };
                                    a.day >= 1 &&
                                      a.day <=
                                        n.curMonthInfo.end - n.startingPos &&
                                      C(a, n.rangeStart) &&
                                      E(a, n.rangeEnd) &&
                                      ((o.day = a.day),
                                      (o.month = a.month),
                                      (o.year = a.year),
                                      _(t),
                                      i.onDateChange && i.onDateChange(o));
                                  }
                                }
                              })),
                              o.push(D);
                          },
                          L = 0;
                        L < 42;
                        L++
                      )
                        F(L);
                    },
                    C = function(t, e) {
                      var n = t.day,
                        i = t.month,
                        o = t.year;
                      return !(
                        e &&
                        (e.year > o ||
                          (e.year === o &&
                            (e.month > i || (e.month === i && e.day > n))))
                      );
                    },
                    E = function(t, e) {
                      var n = t.day,
                        i = t.month,
                        o = t.year;
                      return !(
                        e &&
                        (e.year < o ||
                          (e.year === o &&
                            (e.month < i || (e.month === i && e.day < n))))
                      );
                    },
                    D = (function() {
                      function t() {
                        var e =
                          arguments.length > 0 && arguments[0] !== undefined
                            ? arguments[0]
                            : {};
                        !(function(t, e) {
                          if (!(t instanceof e))
                            throw new TypeError(
                              "Cannot call a class as a function"
                            );
                        })(this, t);
                        var n = new Date(),
                          i = {
                            day: n.getDate(),
                            month: n.getMonth() + 1,
                            year: n.getFullYear()
                          };
                        (this._customCssClass = {}),
                          (this.graphic = {
                            parentElement: e.container || document.body,
                            dateElements: [],
                            dateLiElements: [],
                            dayElements: []
                          }),
                          (this.style = {
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: d + h,
                            overflow: "hidden"
                          }),
                          (this.id = e.id || y()),
                          (this.events = {}),
                          (this.info = {
                            selectedDate: i,
                            active: { month: i.month, year: i.year },
                            weekLabel: [].concat(a),
                            monthLabel: [].concat(l),
                            weekStartingDay: 1,
                            posX: 0,
                            posY: 0,
                            height: f,
                            width: d,
                            vAlignment: "top",
                            hAlignment: "left",
                            highlightClasses: []
                          }),
                          e.customCssClass &&
                            (this._customCssClass = e.customCssClass),
                          S(this, e),
                          this.configure(e, !0);
                      }
                      return (
                        (t.prototype.configure = function(t, e) {
                          var n = this.graphic,
                            i = this.events,
                            a = this.info,
                            l = this.style,
                            c = t && t.events,
                            u = void 0,
                            y = void 0,
                            S = !1;
                          t &&
                            (t.customCssClass &&
                              (this._customCssClass = t.customCssClass),
                            (this.classNames = Object.assign(
                              {},
                              s,
                              this._customCssClass
                            )),
                            t.container &&
                            (u = document.getElementById(t.container))
                              ? ((n.parentElement = u),
                                u.appendChild(n.container))
                              : t.container instanceof Element &&
                                (n.parentElement = t.container),
                            t.style &&
                              t.style.position &&
                              ((l.position = t.style.position),
                              v(n.container, l)),
                            isNaN((y = Number(t.posX))) ||
                              ((a.posX = y), (S = !0)),
                            isNaN((y = Number(t.posY))) ||
                              ((a.posY = y), (S = !0)),
                            !isNaN((y = Number(t.width))) &&
                              y > d &&
                              ((a.width = y), (l.width = y + h), (S = !0)),
                            t.vAlignment &&
                              (y = t.vAlignment.toLowerCase()) &&
                              g[y] !== o &&
                              ((a.vAlignment = y), (S = !0)),
                            t.hAlignment &&
                              (y = t.hAlignment.toLowerCase()) &&
                              m[y] !== o &&
                              ((a.hAlignment = y), (S = !0)),
                            c &&
                              ("function" == typeof c.onDateChange &&
                                (i.onDateChange = c.onDateChange),
                              "function" == typeof c.onYearChange &&
                                (i.onYearChange = c.onYearChange),
                              "function" == typeof c.onMonthChange &&
                                (i.onMonthChange = c.onMonthChange)),
                            t.highlight
                              ? ((a.highlight = t.highlight), (e = !0))
                              : null === t.highlight &&
                                (delete a.highlight, (e = !0)),
                            (y = t.selectedDate) &&
                              !isNaN(
                                Date.parse(y.month + "/" + y.day + "/" + y.year)
                              ) &&
                              ((a.selectedDate = t.selectedDate),
                              (a.active.month = a.selectedDate.month),
                              (a.active.year = a.selectedDate.year),
                              (e = !0)),
                            t.showInactiveMonths !== o &&
                              (a.showInactiveMonths = !!t.showInactiveMonths),
                            t.active &&
                              ((y = {
                                month: t.active.month || a.active.month,
                                year: t.active.year || a.active.year
                              }),
                              (a.active.month === y.month &&
                                a.active.year === y.year) ||
                                !(
                                  a.showInactiveMonths ||
                                  (C(y, a.rangeStart) && E(y, a.rangeEnd))
                                ) ||
                                ((a.active.month = y.month),
                                (a.active.year = y.year),
                                (e = !0))),
                            t.monthLabel &&
                              12 === t.monthLabel.length &&
                              ((a.monthLabel = t.monthLabel), (e = !0)),
                            t.weekLabel &&
                              7 === t.weekLabel.length &&
                              ((a.weekLabel = t.weekLabel), k(this)),
                            t.weekStart !== o &&
                              a.weekStartingDay !== t.weekStart &&
                              ((a.weekStartingDay = t.weekStart), k(this)),
                            t.rangeStart && C(a.selectedDate, t.rangeStart)
                              ? ((a.rangeStart = t.rangeStart), (e = !0))
                              : null === t.rangeStart &&
                                (delete a.rangeStart, (e = !0)),
                            t.rangeEnd && E(a.selectedDate, t.rangeEnd)
                              ? ((a.rangeEnd = t.rangeEnd), (e = !0))
                              : null === t.rangeEnd &&
                                (delete a.rangeEnd, (e = !0)),
                            e &&
                              (function(t) {
                                var e,
                                  n,
                                  i = t.info,
                                  o = t.graphic,
                                  a = t.classNames,
                                  l = i.active,
                                  s = i.rangeStart,
                                  c = i.rangeEnd,
                                  u = i.weekStartingDay,
                                  f = i.highlight,
                                  d = i.highlightClasses,
                                  h = (i.showInactiveMonths, o.monthStr),
                                  g = (o.yearStr, o.dateElements),
                                  m = o.dateLiElements,
                                  y = o.container,
                                  v = o.prevMonth,
                                  k = o.prevMonthPointer,
                                  S = o.nextMonth,
                                  D = o.nextMonthPointer,
                                  M = (o.prevYear, o.nextYear, l.month),
                                  T = l.year,
                                  O = f && f[T] && f[T][M],
                                  F = new Date(M + "/1/" + T).getDay(),
                                  L = (i.startingPos =
                                    F - u + (u <= F ? 0 : 7)),
                                  I =
                                    r[M - 1] +
                                    ((function(t) {
                                      return (
                                        (t % 4 == 0 && t % 100 != 0) ||
                                        t % 400 == 0
                                      );
                                    })(T) && 2 === M
                                      ? 1
                                      : 0),
                                  P = I + L,
                                  j = C({ day: 1, month: M, year: T }, s),
                                  A = E({ day: I, month: M, year: T }, c),
                                  B = j
                                    ? 0
                                    : s.month === M && s.year === T
                                    ? s.day - 1
                                    : I,
                                  N = A
                                    ? I + 1
                                    : c.month === M && c.year === T
                                    ? c.day + 1
                                    : 1,
                                  H = void 0,
                                  R = void 0,
                                  G = void 0,
                                  Y = void 0,
                                  z = void 0,
                                  V = void 0,
                                  X = void 0,
                                  U = void 0,
                                  W =
                                    s &&
                                    s.year === l.year &&
                                    s.month === l.month,
                                  q =
                                    c &&
                                    c.year === l.year &&
                                    c.month === l.month;
                                for (
                                  i.curMonthInfo = { start: F, end: P },
                                    n = o.calendarBody.children[0],
                                    x(y, a.normaldatedefault),
                                    x(y, a.selecteddatedefault),
                                    x(y, a.disableddatedefault),
                                    x(y, a.normaldate),
                                    x(y, a.selecteddate),
                                    x(y, a.disableddate),
                                    x(y, a.navinactive),
                                    q
                                      ? (D.className += p + a.navinactive)
                                      : b(a.navinactive, S),
                                    W
                                      ? (k.className += p + a.navinactive)
                                      : b(a.navinactive, v);
                                  d.length;

                                )
                                  (z = d.pop()), x(y, z);
                                if (n.childElementCount < 42)
                                  for (; n.childElementCount < 42; )
                                    (H = n.childElementCount),
                                      (V =
                                        p +
                                        (H % 7 == 5 || H % 7 == 6
                                          ? a.weekenddefault
                                          : "")),
                                      (X =
                                        p +
                                        (H % 7 == 5 || H % 7 == 6
                                          ? a.weekend
                                          : "")),
                                      (U = w("li", {
                                        appendTo: n,
                                        className: V,
                                        events: {
                                          click: function() {
                                            var e = t.info,
                                              n = t.events,
                                              i = e.selectedDate,
                                              o = e.active,
                                              r = {
                                                day: H - e.startingPos + 1,
                                                month: o.month,
                                                year: o.year
                                              };
                                            r.day >= 1 &&
                                              r.day <=
                                                e.curMonthInfo.end -
                                                  e.startingPos &&
                                              C(r, e.rangeStart) &&
                                              E(r, e.rangeEnd) &&
                                              ((i.day = r.day),
                                              (i.month = r.month),
                                              (i.year = r.year),
                                              _(t),
                                              n.onDateChange &&
                                                n.onDateChange(i));
                                          }
                                        }
                                      })),
                                      m.push(U),
                                      (U = w("span", {
                                        appendTo: U,
                                        className:
                                          a.date +
                                          p +
                                          a.daycol +
                                          "-" +
                                          (H % 7) +
                                          X,
                                        innerHTML: "&nbsp;"
                                      })),
                                      g.push(U);
                                for (
                                  h.innerHTML = i.monthLabel[M - 1] + p + T,
                                    H = 0,
                                    e = g.length;
                                  H < e;
                                  H++
                                )
                                  H < L
                                    ? ((g[H].innerHTML = new Date(
                                        T,
                                        M - 1,
                                        H - L + 1
                                      ).getDate()),
                                      (m[H].className +=
                                        p + a.disableddatedefault),
                                      (g[H].className += p + a.disableddate),
                                      m[H].eventAttached &&
                                        m[H].removeEventListener(
                                          "click",
                                          g[H]._clickHandler
                                        ),
                                      (m[H].eventAttached = !1))
                                    : H >= P
                                    ? ((G = new Date(
                                        T,
                                        M - 1,
                                        H - L + 1
                                      ).getDate()),
                                      (g[H].innerHTML = G < 10 ? "0" + G : G),
                                      (m[H].className +=
                                        p + a.disableddatedefault),
                                      (g[H].className += p + a.disableddate),
                                      m[H].eventAttached &&
                                        m[H].removeEventListener(
                                          "click",
                                          g[H]._clickHandler
                                        ),
                                      (m[H].eventAttached = !1))
                                    : ((R = H - L + 1),
                                      (g[H].innerHTML = R < 10 ? "0" + R : R),
                                      (Y = O && O[R]) &&
                                        ((z = p + a.highlightedDate),
                                        !0 !== Y && (z += p + Y),
                                        d.push(z)),
                                      !m[H].eventAttached &&
                                        m[H].addEventListener(
                                          "click",
                                          m[H]._clickHandler
                                        ),
                                      (m[H].eventAttached = !0),
                                      (g[H].className +=
                                        p +
                                        (R <= B || R >= N
                                          ? a.disableddate
                                          : a.normaldate) +
                                        (Y ? z : "")),
                                      (m[H].className +=
                                        p +
                                        (R <= B || R >= N
                                          ? a.disableddatedefault
                                          : a.normaldatedefault) +
                                        (Y ? z : "")));
                                _(t);
                              })(this),
                            S &&
                              ((l.left =
                                a.posX + a.width * (m[a.hAlignment] || 0) + h),
                              (a.height =
                                (n.container && n.container.offsetHeight) || f),
                              (l.top =
                                a.posY + a.height * (g[a.vAlignment] || 0) + h),
                              v(n.container, l)));
                        }),
                        (t.prototype.show = function() {
                          var t = this.graphic.container;
                          (t.style.visibility = "visible"),
                            (t.style.opacity = "1");
                        }),
                        (t.prototype.hide = function() {
                          var t = this.graphic.container;
                          (t.style.visibility = "hidden"),
                            (t.style.opacity = "0");
                        }),
                        (t.prototype.getDate = function() {
                          return this.info.selectedDate;
                        }),
                        (t.prototype.addEventListner = function(t, e) {
                          "function" == typeof e &&
                            this.events &&
                            (this.events[t] = e);
                        }),
                        (t.prototype.removeEventListner = function(t) {
                          this.events &&
                            this.events[t] &&
                            delete this.events[t];
                        }),
                        (t.prototype.getDimension = function() {
                          var t = this.graphic;
                          return {
                            width: t.container.offsetWidth,
                            height: t.container.offsetHeight
                          };
                        }),
                        (t.prototype.dispose = function() {
                          var t = this.graphic,
                            e = t.parentElement,
                            n = t.container;
                          e.removeChild(n);
                        }),
                        t
                      );
                    })();
                  e["default"] = D;
                }
              ]);
            }),
            "object" === a(e) && "object" === a(t)
              ? (t.exports = r())
              : ((i = []),
                (o = "function" == typeof (n = r) ? n.apply(e, i) : n) ===
                  undefined || (t.exports = o));
        }.call(this, n(756)(t)));
      },
      757: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(138),
          o = n(125);
        function r(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var a = [2, 2, 4],
          l = function(t) {
            return (t < 10 ? "0" + t : t) + "";
          },
          s = (function(t) {
            function e(n) {
              !(function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e);
              var i = (function(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              })(this, t.call(this, n));
              return (
                i.addEventListener("blur", function(t) {
                  var e = this.getLinkedParent(),
                    n = (t.originalEvent.target.value + "").split("/"),
                    i = void 0,
                    o = n.length;
                  if (3 === o) {
                    for (i = 0; i < o; i++)
                      if (isNaN(n[i]) || n[i].length !== a[i]) return;
                    e.updateCalendar(
                      { day: +n[0], month: +n[1], year: +n[2] },
                      this.config.id
                    );
                  }
                }),
                i
              );
            }
            return (
              r(e, t),
              (e.prototype.__setDefaultConfig = function() {
                t.prototype.__setDefaultConfig.call(this);
                var e = this.config;
                (e.enabled = !0),
                  (e.inputBoxWidth = 65),
                  (e._labelStyle = {
                    "font-size": "12px",
                    "font-weight": "normal",
                    "font-style": "normal",
                    color: "#5F5F5F"
                  }),
                  (e._inputStyle = {
                    "font-size": "12px",
                    border: "1px solid #efefef",
                    "background-color": "#fcfcfc",
                    color: "#5F5F5F",
                    width: e.inputBoxWidth + o.PXSTRING,
                    padding: "2px"
                  }),
                  (e.date = { day: 8, month: 10, year: 2018 });
              }),
              (e.prototype.configureAttributes = function() {
                var e =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {};
                t.prototype.configureAttributes.call(this, e);
                var n,
                  i = this.config,
                  o = this.getFromEnv("getStyleDef"),
                  r = this.getFromEnv("baseTextStyle");
                Object.keys(e).forEach(function(t) {
                  return (i[t] = e[t]);
                }),
                  (n = i.date),
                  (i.value = l(n.day) + "/" + l(n.month) + "/" + l(n.year)),
                  (i._finalLabelStyle = Object.assign(
                    {},
                    i._labelStyle,
                    r,
                    o(i.labelStyle)
                  )),
                  (i._finalInputStyle = Object.assign(
                    {},
                    i._inputStyle,
                    r,
                    o(i.inputStyle)
                  )),
                  delete i._finalInputStyle["line-height"];
              }),
              (e.prototype.getDimension = function() {
                var t,
                  e = this.config,
                  n = this.getFromEnv("smartLabel"),
                  i = this.getFromEnv("fontParser")(
                    e._finalInputStyle["font-size"]
                  );
                return (
                  n.setStyle(Object.assign({}, e._finalLabelStyle)),
                  (e.labelDim = t = n.getOriSize(e.label)),
                  n.setStyle(Object.assign({}, e._finalInputStyle)),
                  (e.inputBoxWidth = n.getOriSize(e.value).width + 10),
                  (e._finalInputStyle.width =
                    Math.max(65, e.inputBoxWidth) + o.PXSTRING),
                  {
                    width: t.width + e.inputBoxWidth,
                    height: Math.max(n._lineHeight, 1.5 * i)
                  }
                );
              }),
              (e.prototype.setTranslation = function(t, e) {
                this.config.position = { x: t, y: e };
              }),
              (e.prototype.draw = function() {
                var t = this.config,
                  e = t.position,
                  n = t.labelDim,
                  i = t.date || {},
                  o = l(i.day) + "/" + l(i.month) + "/" + l(i.year);
                this.addGraphicalElement({
                  el: "html",
                  attr: { x: e.x, y: e.y, type: "div", text: t.label },
                  component: this,
                  css: t._finalLabelStyle,
                  container: {
                    id: "box-container",
                    label: "box-container",
                    isParent: !0
                  },
                  label: "label",
                  id: "label"
                }),
                  this.addGraphicalElement({
                    el: "html",
                    attr: {
                      x: e.x + n.width,
                      y: e.y - n.height / 3,
                      type: "input",
                      name: t.label,
                      value: o
                    },
                    component: this,
                    css: t._finalInputStyle,
                    container: {
                      id: "box-container",
                      label: "box-container",
                      isParent: !0
                    },
                    label: "box",
                    id: "box"
                  }),
                  (this.getGraphicalElement("box", "box").element.value = o);
              }),
              e
            );
          })(i.SmartRenderer);
        e["default"] = s;
      },
      758: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(138),
          o = n(125);
        function r(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var a = function(t) {
            return (t < 10 ? "0" + t : t) + "";
          },
          l = function(t) {
            var e =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : -1,
              n = void 0,
              i = "";
            for (n = 0; n <= t; n++)
              i +=
                n === e
                  ? '<option value="' +
                    a(n) +
                    '" selected>' +
                    a(n) +
                    "</option>"
                  : '<option value="' + a(n) + '">' + a(n) + "</option>";
            return i;
          },
          s = (function(t) {
            function e() {
              return (
                (function(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                (function(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                })(this, t.apply(this, arguments))
              );
            }
            return (
              r(e, t),
              (e.prototype.__setDefaultConfig = function() {
                var t = this.config;
                (t.enabled = !0),
                  (t.label = "Time: "),
                  (t._labelStyle = {
                    "font-size": "12px",
                    "font-weight": "normal",
                    "font-style": "normal",
                    color: "#5f5f5f"
                  }),
                  (t._selectStyle = {
                    "font-size": "12px",
                    border: "0",
                    outline: "1px solid #efefef",
                    "outline-offset": "-1px",
                    color: "#5f5f5f",
                    width: 32 + o.PXSTRING,
                    padding: o.isIE11 ? "0px" : "5px",
                    background:
                      "url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+) no-repeat 100% 100%",
                    "background-color": "#FFFFFF",
                    "-webkit-appearance": "none",
                    "-moz-appearance": "none",
                    "-o-appearance": "none",
                    "border-radius": "0px",
                    appearance: "none"
                  });
              }),
              (e.prototype.configureAttributes = function() {
                var t =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : {},
                  e = this.config,
                  n = this.getFromEnv("getStyleDef"),
                  i = this.getFromEnv("baseTextStyle");
                Object.keys(t).forEach(function(n) {
                  return (e[n] = t[n]);
                }),
                  (e._finalLabelStyle = Object.assign(
                    {},
                    e._labelStyle,
                    i,
                    n(e.labelStyle)
                  )),
                  (e._finalSelectStyle = Object.assign(
                    {},
                    e._selectStyle,
                    i,
                    n(e.selectStyle)
                  )),
                  delete e._finalSelectStyle["line-height"];
              }),
              (e.prototype.getDimension = function() {
                var t,
                  e,
                  n = this.config,
                  i = this.getFromEnv("fontParser"),
                  r = i(n._finalSelectStyle["font-size"]),
                  a = this.getFromEnv("smartLabel"),
                  l = (function(t) {
                    return t < 21 ? 2 : t < 31 ? 1.67 : t < 51 ? 1.5 : 1.25;
                  })(r);
                return (
                  a.setStyle(n._finalLabelStyle),
                  (t = n.labelDim = a.getOriSize(n.label)),
                  (e = a.getOriSize(":").width),
                  (n.inputBoxWidth = Math.max(
                    i(n._finalSelectStyle.width),
                    2.6 * r
                  )),
                  (n.inputBoxHeight = r * l),
                  (n.spacingMultiplier = r > 30 ? 2 : 1),
                  (n._finalSelectStyle.width = n.inputBoxWidth + o.PXSTRING),
                  {
                    width: t.width + 3 * e + 3 * n.inputBoxWidth + 20,
                    height: Math.max(t.height, n.inputBoxHeight)
                  }
                );
              }),
              (e.prototype.setTranslation = function(t, e) {
                this.config.position = { x: t, y: e };
              }),
              (e.prototype.getTime = function() {
                var t, e, n;
                return (
                  (t = this.getGraphicalElement("hour-box", "hour-box")),
                  (e = this.getGraphicalElement("minute-box", "minute-box")),
                  (n = this.getGraphicalElement("second-box", "second-box")),
                  {
                    hours: +t.element.value,
                    minutes: +e.element.value,
                    seconds: +n.element.value
                  }
                );
              }),
              (e.prototype.draw = function() {
                var t = this.config,
                  e = t.position,
                  n = t.labelDim,
                  i = t.time || {},
                  o = e.x,
                  r = Math.abs(n.height - t.inputBoxHeight) / 2;
                this.addGraphicalElement({
                  el: "html",
                  attr: { x: o, y: e.y, type: "label", text: t.label },
                  component: this,
                  css: t._finalLabelStyle,
                  container: {
                    id: "box-container",
                    label: "box-container",
                    isParent: !0
                  },
                  label: "time-label",
                  id: "time-label"
                }),
                  (o += n.width + 5),
                  this.addGraphicalElement({
                    el: "html",
                    attr: {
                      x: o,
                      y: e.y - r,
                      type: "select",
                      innerHTML: l(23, i.hours)
                    },
                    component: this,
                    css: t._finalSelectStyle,
                    container: {
                      id: "box-container",
                      label: "box-container",
                      isParent: !0
                    },
                    label: "hour-box",
                    id: "hour-box"
                  }),
                  (o += t.inputBoxWidth),
                  this.addGraphicalElement({
                    el: "html",
                    attr: { x: o + 3, y: e.y, type: "label", text: ":" },
                    component: this,
                    css: t._finalLabelStyle,
                    container: {
                      id: "box-container",
                      label: "box-container",
                      isParent: !0
                    },
                    label: "semicolon-minute",
                    id: "semicolon-minute"
                  }),
                  (o += 10 * t.spacingMultiplier),
                  this.addGraphicalElement({
                    el: "html",
                    attr: {
                      x: o,
                      y: e.y - r,
                      type: "select",
                      innerHTML: l(59, i.minutes)
                    },
                    component: this,
                    css: t._finalSelectStyle,
                    container: {
                      id: "box-container",
                      label: "box-container",
                      isParent: !0
                    },
                    label: "minute-box",
                    id: "minute-box"
                  }),
                  (o += t.inputBoxWidth),
                  this.addGraphicalElement({
                    el: "html",
                    attr: { x: o + 3, y: e.y, type: "label", text: ":" },
                    component: this,
                    css: t._finalLabelStyle,
                    container: {
                      id: "box-container",
                      label: "box-container",
                      isParent: !0
                    },
                    label: "semicolon-second",
                    id: "semicolon-second"
                  }),
                  (o += 10 * t.spacingMultiplier),
                  this.addGraphicalElement({
                    el: "html",
                    attr: {
                      x: o,
                      y: e.y - r,
                      type: "select",
                      innerHTML: l(59, i.seconds)
                    },
                    component: this,
                    css: t._finalSelectStyle,
                    container: {
                      id: "box-container",
                      label: "box-container",
                      isParent: !0
                    },
                    label: "second-box",
                    id: "second-box"
                  });
              }),
              e
            );
          })(i.SmartRenderer);
        e["default"] = s;
      },
      759: function(t, e, n) {
        "use strict";
        function i(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        e.__esModule = !0;
        var o = (function(t) {
          function e(n) {
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            var i = (function(t, e) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !e || ("object" != typeof e && "function" != typeof e)
                ? t
                : e;
            })(this, t.call(this, n));
            return (
              i.addEventListener("click", function() {
                this.getLinkedParent().submitData(this.config.type);
              }),
              i.addEventListener("mouseover", function() {
                this.setData({ buttonStyle: this.config["button:hover"] }, !0);
              }),
              i.addEventListener("mouseout", function() {
                this.setData(
                  { buttonStyle: this.config["button:hoverout"] },
                  !0
                );
              }),
              i
            );
          }
          return (
            i(e, t),
            (e.prototype.__setDefaultConfig = function() {
              var t = this.config;
              (t.height = 10),
                (t.width = 20),
                (t.label = "Apply"),
                (t._buttonStyle = {
                  "-webkit-border-radius": "2px",
                  backgroundColor: "#32cd32",
                  border: "1px solid #32cd32",
                  borderRadius: "2px",
                  color: "#60634E",
                  cursor: "pointer",
                  paddingTop: "1px",
                  textAlign: "center",
                  zIndex: 21,
                  display: "flex",
                  width: 66,
                  height: 22,
                  "line-height": "9px",
                  "justify-content": "center",
                  "align-items": "center",
                  "font-size": "11px"
                }),
                (t.clickHandler = function() {
                  this.getLinkedParent().submitData();
                });
            }),
            (e.prototype.configureAttributes = function() {
              var e =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              t.prototype.configureAttributes.call(this, e);
              var n = this.config,
                i = this.getFromEnv("getStyleDef"),
                o = this.getFromEnv("baseTextStyle");
              Object.keys(e).forEach(function(t) {
                return (n[t] = e[t]);
              }),
                (n._finalStyle = Object.assign(
                  {},
                  n._buttonStyle,
                  o,
                  i(n.customStyle),
                  i(n.buttonStyle)
                ));
            }),
            (e.prototype.getDimension = function() {
              var t = this.config,
                e = t._finalStyle["font-size"],
                n = this.getFromEnv("fontParser");
              return (
                (t.width = Math.max(+t._finalStyle.width || 0, 6 * n(e))),
                (t.height = Math.max(+t._finalStyle.height || 0, 2 * n(e))),
                { width: t.width, height: t.height }
              );
            }),
            (e.prototype.setTranslation = function(t, e) {
              this.config.position = { x: t, y: e };
            }),
            (e.prototype.draw = function() {
              var t = this.config,
                e = t.position;
              this.addGraphicalElement({
                el: "html",
                attr: {
                  text: t.label,
                  type: "div",
                  width: t.width,
                  height: t.height,
                  x: e.x,
                  y: e.y
                },
                component: this,
                container: {
                  id: "box-container",
                  label: "box-container",
                  isParent: !0
                },
                css: t._finalStyle,
                label: "button",
                id: "button"
              });
            }),
            e
          );
        })(n(138).SmartRenderer);
        e["default"] = o;
      },
      760: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = n(138),
          o = n(125);
        function r(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var a = (function(t) {
          function e(n) {
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            var i = (function(t, e) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !e || ("object" != typeof e && "function" != typeof e)
                ? t
                : e;
            })(this, t.call(this, n));
            return (
              i.addEventListener("click", function() {
                this.getLinkedParent().setData({}, !0);
              }),
              i
            );
          }
          return (
            r(e, t),
            (e.prototype.__setDefaultConfig = function() {
              t.prototype.__setDefaultConfig.call(this),
                (this.config.visibility = "hidden");
            }),
            (e.prototype.configureAttributes = function() {
              var t =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {},
                e = this.config;
              Object.keys(t).forEach(function(n) {
                return (e[n] = t[n]);
              });
            }),
            (e.prototype.draw = function() {
              var t = +this.getFromEnv("chartHeight"),
                e = +this.getFromEnv("chartWidth"),
                n = this.config.visibility;
              this.addGraphicalElement({
                el: "html",
                attr: {
                  x: 0,
                  y: 0,
                  width: e,
                  height: t,
                  fill: o.TRACKER_FILL,
                  visibility: n,
                  type: "div"
                },
                component: this,
                id: "cover",
                label: "cover"
              });
            }),
            e
          );
        })(i.SmartRenderer);
        e["default"] = a;
      },
      761: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(762),
          r = (i = o) && i.__esModule ? i : { default: i },
          a = n(125);
        e["default"] = function(t) {
          (0, a.componentFactory)(
            t,
            r["default"],
            "multicanvasCrosslineManager",
            1
          ),
            t.getChildren("multicanvasCrosslineManager")[0].configure();
        };
      },
      762: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(138),
          r = n(129),
          a = n(125),
          l = n(670),
          s = (i = l) && i.__esModule ? i : { default: i };
        function c(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        var u = function(t) {
            return "column" === t;
          },
          f = 5,
          d = {},
          h = (function(t) {
            function e() {
              !(function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e);
              var n = (function(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                })(this, t.call(this)),
                i = n,
                o = void 0,
                l = void 0,
                c = void 0,
                h = void 0,
                p = void 0,
                g = void 0,
                m = void 0,
                y = void 0,
                v = void 0,
                b = void 0,
                x = void 0;
              return (
                (i.canvases = []),
                (i._handler = function(t) {
                  (y = i.config.multiCanvasTooltip),
                    (o = t.sender.getLinkedParent()),
                    (v = o.config.xConfigs[0].scale),
                    (x = o.isWithinCanvas(t.data.chartX, t.data.chartY));
                  var e = t.data.hoveredInfo || {},
                    n = void 0,
                    k = void 0,
                    _ = void 0,
                    w = void 0,
                    S = void 0,
                    C = void 0,
                    E = void 0,
                    D = void 0,
                    M = void 0,
                    T = void 0,
                    O = void 0,
                    F = void 0,
                    L = void 0;
                  x && e.pointObj
                    ? ((L = i
                        .getFromEnv("chart")
                        .config.focusAxesX[0].scale.getDomain()),
                      (C = e.pointObj.startDate),
                      (E = e.pointObj.endDate),
                      (+(c = v.getDomainValue(v.getRangeValue(C, E))) < +L[0] ||
                        +c > +L[1] ||
                        +C == +E) &&
                        (c = undefined))
                    : (c = undefined),
                    i.canvases.forEach(function(n) {
                      (p = n === o),
                        (m = n.getTranslation()),
                        (T = undefined),
                        n
                          .getChildren("verticalCrossLine")[0]
                          .setData(
                            {
                              value: c,
                              showMarker: p,
                              dateRange: { startDate: C, endDate: E }
                            },
                            !0
                          ),
                        (k = n.getChildren("dataset")),
                        (u(k[0].getName()) && 1 !== k.length) ||
                        !e.component ||
                        ("dataset" !== e.component.getType() &&
                          "dataMarker" !== e.component.getType())
                          ? x ||
                            k.forEach(function(t) {
                              t.setHoverOutEffect(d[t.getId()]);
                            })
                          : k.forEach(function(t) {
                              (M = x && t._getHoveredBin()),
                                t.setHoverInEffect(
                                  M,
                                  e.hovered && e.component === t
                                ),
                                (b = d[t.getId()]),
                                (0, a.defined)(b) &&
                                  b !== M &&
                                  t.setHoverOutEffect(b),
                                (d[t.getId()] = M);
                            }),
                        y &&
                          !p &&
                          ((_ = n.getChildren("tooltipHover")[0]),
                          (w = _.config).showTooltip &&
                            ((g = ""),
                            (l = n.getFromEnv("toolTipController")),
                            x &&
                            e.component &&
                            "dataset" === e.component.getType()
                              ? (k.forEach(function(e, n) {
                                  e._getHoveredPlot &&
                                    e._getHoveredPlot(
                                      t.data.chartX,
                                      t.data.chartY
                                    ),
                                    (M = e._getHoveredBin()),
                                    "visible" === e.config.visibility &&
                                      e.config.dataInfo[M] &&
                                      ((T = e.config.dataInfo[M]),
                                      (g += e._getTooltext(!1, !1, M)),
                                      (S = n));
                                }),
                                T
                                  ? ((M = k[S]._getHoveredBin()),
                                    "" !== (g = k[S]._getDateForToolText(M) + g)
                                      ? (w.currentToolTip = l.drawAt(
                                          T.x + (T.width || 0) / 2 + f + m.x,
                                          (T.colY || T.y) + m.y,
                                          g,
                                          w.currentToolTip
                                        ))
                                      : l.hide(w.currentToolTip))
                                  : l.hide(w.currentToolTip))
                              : l.hide(w.currentToolTip)));
                    }),
                    (n = o.getChildren("horizontalCrossLine")[0]),
                    e.hovered && "dataset" === e.component.getType() && x
                      ? ((D = (0, s["default"])(e.pointObj.yBaseValue)
                          ? e.pointObj.yBaseValue >= 0
                            ? e.pointObj.value
                            : e.pointObj.yBaseValue
                          : e.pointObj.value),
                        (h = e.component.config),
                        o.config.yConfigs.forEach(function(t) {
                          t.scale === e.component.config.scaleY &&
                            ((O = t.scale), (F = t.align));
                        }),
                        "hidden" !== h.visibility &&
                          n.setData(
                            {
                              value: D,
                              scale: O,
                              yAxisAlignment: F,
                              showMarker: !0,
                              text: e.pointObj.value,
                              suffix: h.suffix,
                              prefix: h.prefix,
                              formatterFn: h.formatterFn,
                              markerFill: (function(t) {
                                var e,
                                  n = void 0;
                                for (n = 0, e = t.length; n < e; n++)
                                  if (t[n] !== undefined && "none" !== t[n])
                                    return (0, r.convertColor)(t[n]);
                              })([
                                h.style && h.style.fill,
                                h.plotStyle && h.plotStyle.fill,
                                h.plotStyle && h.plotStyle.stroke
                              ])
                            },
                            !0
                          ))
                      : n.setData({ value: undefined }, !0);
                }),
                n
              );
            }
            return (
              c(e, t),
              (e.prototype.__setDefaultConfig = function() {
                t.prototype.__setDefaultConfig.call(this),
                  (this.config.defaultFormat = "%A, %b %d, %Y"),
                  (this.canvases = []);
              }),
              (e.prototype.configure = function() {
                t.prototype.configure.call(this);
                var e = this.getLinkedParent(),
                  n = e.config.focusPanels.length,
                  i = void 0,
                  o = void 0,
                  r = void 0;
                for (
                  this.config.multiCanvasTooltip = (0, a.pluckNumber)(
                    this.getFromEnv("chart-attrib").multicanvastooltip,
                    1
                  ),
                    r = 0;
                  r < n;
                  r++
                )
                  (o = e.getChildren("canvas_" + r)[0]),
                    this.canvases.push(o),
                    (i = o.getFromEnv("mouseTracker")),
                    this.addExtEventListener("canvasHovered", this._handler, i);
              }),
              e
            );
          })(o.SmartRenderer);
        e["default"] = h;
      },
      763: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = c(n(680)),
          o = n(125),
          r = c(n(716)),
          a = c(n(684)),
          l = c(n(724)),
          s = c(n(404));
        function c(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var u = function(t) {
            return t.match(/^canvas/);
          },
          f = function(t) {
            return t.remove();
          },
          d = (0, i["default"])({
            orientation: "bottom",
            align: "bottom",
            tickpadding: 2,
            visible: !0,
            overlap: !1,
            domainline: !1,
            style: {
              text: { major: { fill: "#818181" }, context: { fill: "#818181" } }
            }
          }),
          h = (0, i["default"])({
            tickarguments: [4, "s"],
            ticksize: 5,
            tickpadding: 7,
            visible: !0,
            overlap: !1,
            domainline: !1,
            style: {
              text: { major: { "font-size": "11px" } },
              ticks: { major: { stroke: "#efefef" } }
            }
          }),
          p = function(t) {
            return t.visible;
          },
          g = function(t) {
            return "left" === t.align;
          },
          m = function(t) {
            return "right" === t.align;
          },
          y = function(t) {
            return "top" === t.align;
          },
          v = function(t) {
            return "bottom" === t.align;
          };
        e["default"] = function(t) {
          var e = [],
            n = t.config,
            c = n.focusAxesX,
            b = n.focusAxesY,
            x = n.focusPanels.map(function(t) {
              return (0, i["default"])(t, {
                x: t.x.map(function(t) {
                  var e = c[t.index],
                    n = (0, o.pluck)(c[t.index].format, {});
                  return (
                    (e.timeFormatterFn =
                      "function" == typeof n.formatter
                        ? function(t) {
                            return n.formatter.call(e.scale, t);
                          }
                        : function(t) {
                            return (
                              e.scale.getFormattedTime &&
                              e.scale.getFormattedTime(t)
                            );
                          }),
                    (0, i["default"])(d(t), (0, l["default"])(c, t.index))
                  );
                }),
                y: t.y.map(function(t) {
                  var e = b[t.index],
                    n = (0, o.pluck)(b[t.index].format, {});
                  return (
                    (e.formatLabelPrefix = n.prefix || o.BLANKSTRING),
                    (e.formatLabelSuffix = n.suffix || o.BLANKSTRING),
                    e.scale.setLocale(
                      (0, o.extend2)((0, o.extend2)({}, s["default"]), {
                        prefix: e.formatLabelPrefix,
                        suffix: e.formatLabelSuffix
                      })
                    ),
                    (e.formatterFn =
                      "function" == typeof n.formatter
                        ? function(t) {
                            return n.formatter(t) + "";
                          }
                        : function(i) {
                            var o;
                            return (
                              (o =
                                "string" == typeof n.formatter
                                  ? n.formatter
                                  : (function(t, e) {
                                      var n = Math.abs(e);
                                      return 0 !== n && n < 1e-4
                                        ? "$e"
                                        : (n >= 1e-4 && n < 1) || 0 === n
                                        ? "$"
                                        : t;
                                    })(
                                      (function(t, e) {
                                        switch (t) {
                                          case "axis":
                                            return "log" === e ? "$~s" : "$s";
                                          case "tooltip":
                                          case "crossline":
                                            return "$.2s";
                                          case "referenceline":
                                            return "$.1~s";
                                        }
                                      })(i.type, b[t.index].type),
                                      i.value
                                    )),
                              e.scale.tickFormat(4, o)(i.value)
                            );
                          }),
                    (0, i["default"])(h(t), (0, l["default"])(b, t.index))
                  );
                })
              });
            }),
            k = t.config.canvasAxisMap;
          x.forEach(function(n, l) {
            var s = n.x,
              c = n.y,
              u = n.plots,
              f = "canvas_" + l;
            k[f] || (k[f] = { x: [], y: [] }),
              s.filter(p).forEach(function(e, n) {
                var i = "axesX_" + l + "_" + n;
                (e.align = e.align.toLowerCase()),
                  ["bottom", "top"].includes(e.align) || (e.align = "bottom"),
                  k[f].x.push(i),
                  (0, o.componentFactory)(t, r["default"], i, 1, [e]);
              });
            var d,
              h,
              b,
              x,
              _ = { left: 0, right: 0 };
            c.filter(p).forEach(function(e, n) {
              var i,
                a = "axesY_" + l + "_" + n;
              ("left" === (i = e.orientation) || "right" === i) &&
                (e.align = e.orientation),
                (e.orientation = e.align),
                (e.domainline = _[e.align] > 0),
                _[e.align]++,
                "log" === e.type && (e.tickarguments = [4, "~s"]),
                k[f].y.push(a),
                (0, o.componentFactory)(t, r["default"], a, 1, [e]);
            }),
              e.push(f),
              (0, o.componentFactory)(t, a["default"], f, 1, [
                ((d = {
                  plotConfigs: u,
                  tableMap: t.config.focusTableMap,
                  xConfigs: s,
                  yConfigs: c,
                  enableGridLines: !0,
                  enableMouseTracking: 1,
                  enableMarkers: 1,
                  enableInteraction: 1
                }),
                (h = {
                  leftBorder: !1,
                  rightBorder: !1,
                  topBorder: !1,
                  bottomBorder: !1
                }),
                (b = d.xConfigs),
                (x = d.yConfigs),
                (b.find(g) || x.find(g)) && (h.leftBorder = !0),
                (b.find(m) || x.find(m)) && (h.rightBorder = !0),
                (b.find(y) || x.find(y)) && (h.topBorder = !0),
                (b.find(v) || x.find(v)) && (h.bottomBorder = !0),
                (0, i["default"])(d, h))
              ]);
          }),
            Object.keys(t.getChildren())
              .filter(u)
              .filter(function(t) {
                return !e.includes(t);
              })
              .forEach(function(e) {
                t.getChildren(e).forEach(f);
              }),
            (n.focusPanels = x);
        };
      },
      764: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = s(n(668)),
          o = s(n(666)),
          r = s(n(669)),
          a = s(n(374)),
          l = s(n(667));
        function s(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var c = [
            "column",
            "line",
            "step-line",
            "smooth-line",
            "area",
            "step-area",
            "smooth-area",
            "candlestick",
            "ohlc"
          ],
          u = function() {
            return !0;
          },
          f = function() {
            var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : "",
              e =
                !(arguments.length > 1 && arguments[1] !== undefined) ||
                arguments[1];
            return c.includes(t) ? t : e ? "line" : void 0;
          },
          d = function(t, e) {
            var n = [];
            return (
              (0, o["default"])(t) &&
                e(t) &&
                n.push({
                  plot: [{ value: t, aggregation: "avg", type: "line" }]
                }),
              n
            );
          },
          h = function(t, e) {
            var n = f(t.type),
              i = "candlestick" === n || "ohlc" === n,
              o = function(t) {
                return e(t) ? t : undefined;
              },
              a = void 0,
              l = {},
              s = void 0,
              c = void 0,
              u = void 0,
              d = void 0;
            if (
              ((a = (0, r["default"])(t.value) ? o(t.value.value) : o(t.value)),
              i
                ? ((0, r["default"])(t.value) &&
                    ((s = o(t.value.open)),
                    (c = o(t.value.close)),
                    (u = o(t.value.high)),
                    (d = o(t.value.low))),
                  (l =
                    s && u && d && c
                      ? Object.assign({}, t, {
                          type: n,
                          high: u,
                          low: d,
                          open: s,
                          close: c,
                          value: null
                        })
                      : s || u || d || c
                      ? Object.assign({}, t, {
                          type: n,
                          high: u,
                          low: d,
                          open: s,
                          close: c,
                          value: null
                        })
                      : Object.assign({}, t, {
                          type: n,
                          high: a,
                          low: a,
                          open: a,
                          close: a,
                          value: a
                        })))
                : (l = Object.assign({}, t, { type: n, value: a })),
              (l.typeinnavigator = f(l.typeinnavigator, !1)),
              (i && (a || s || c || u || d)) || a)
            )
              return l;
          },
          p = function(t, e) {
            var n,
              a = [],
              l = void 0,
              s = function(t) {
                return (0, o["default"])(t) && e(t);
              };
            if (
              ((n = t),
              (0, r["default"])(n) &&
                ((0, o["default"])(n.plot) ||
                  (0, i["default"])(n.plot) ||
                  (0, r["default"])(n.plot)))
            ) {
              l = t.plot;
              var c = [];
              if (
                (a.push(Object.assign({}, t, { plot: c })),
                ((0, r["default"])(l) || (0, o["default"])(l)) && (l = [l]),
                (0, i["default"])(l))
              )
                l.filter(function(t) {
                  return !!t;
                }).forEach(function(e) {
                  var n = void 0;
                  if ((0, r["default"])(e)) {
                    var i = e.type || t.plottype;
                    n = h(
                      Object.assign({}, e, {
                        aggregation: e.aggregation || t.aggregation || "avg",
                        type: i
                      }),
                      s
                    );
                  } else s(e) && (n = h({ value: e, type: t.plottype, aggregation: t.aggregation || "avg" }, s));
                  n && c.push(n);
                });
            }
            return a[0] && a[0].plot.length ? a : [];
          },
          g = function(t) {
            var e =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : u,
              n = [];
            return (
              (0, l["default"])(t)
                ? (n = d(t, e))
                : (0, r["default"])(t)
                ? (n = p(t, e))
                : (0, a["default"])(t) &&
                  (n = (function(t, e) {
                    var n = [];
                    return (
                      t.forEach(function(t) {
                        (0, l["default"])(t)
                          ? (n = n.concat(d(t, e)))
                          : (0, r["default"])(t) && (n = n.concat(p(t, e)));
                      }),
                      n
                    );
                  })(t, e)),
              n
            );
          };
        e["default"] = function() {
          var t =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : [],
            e = arguments[1],
            n =
              !(arguments.length > 2 && arguments[2] !== undefined) ||
              arguments[2],
            i = [];
          return (
            e &&
              (i = g(e, function(e) {
                return t.indexOf(e) >= 0;
              })),
            i.length || (i = g(t)),
            n &&
              i.forEach(function(t) {
                if (!(0, l["default"])(t.title)) {
                  var e = t.plot.map(function(t) {
                    return t.value;
                  });
                  t.title = e.join(" - ");
                }
              }),
            i
          );
        };
      },
      765: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i = s(n(680)),
          o = s(n(766)),
          r = s(n(669)),
          a = s(n(374)),
          l = s(n(769));
        function s(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var c = function(t, e) {
            return (
              (0, l["default"])(e) &&
              (function(t, e) {
                return e >= 0 && e < t.length;
              })(t, e)
            );
          },
          u = function(t, e) {
            return (
              c(t, +e) ||
              (function(t, e) {
                return (0, r["default"])(e) && c(t, +e.index);
              })(t, e)
            );
          },
          f = function(t) {
            return (0, r["default"])(t)
              ? (0, i["default"])(t, { index: +t.index })
              : { index: +t };
          },
          d = function(t) {
            return (0, i["default"])(t, {
              x: (0, a["default"])(t.x) ? t.x.map(f) : [f(t.x)],
              y: (0, a["default"])(t.y) ? t.y.map(f) : [f(t.y)]
            });
          },
          h = function(t, e) {
            return (0, a["default"])(e)
              ? (0, o["default"])(function(e) {
                  return u(t, e);
                }, e)
              : u(t, e);
          };
        e["default"] = function() {
          var t,
            e =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : [],
            n =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : [],
            i =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : [],
            o = arguments[3],
            l = function(t) {
              return (0, r["default"])(t) && h(e, t.x) && h(n, t.y);
            },
            s = ((t = i),
            (0, a["default"])(t) && t.length > 0
              ? t.filter(l).map(d)
              : l(t)
              ? [d(t)]
              : []);
          return s.length ? s : o(e, n);
        };
      },
      769: function(t, e, n) {
        "use strict";
        (e.__esModule = !0),
          (e["default"] = function(t) {
            return "number" == typeof t && !isNaN(t);
          });
      },
      770: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(666),
          r = (i = o) && i.__esModule ? i : { default: i },
          a = n(125);
        e["default"] = function() {
          var t =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : [],
            e =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : [],
            n =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : "",
            i =
              arguments.length > 3 && arguments[3] !== undefined
                ? arguments[3]
                : "",
            o =
              arguments.length > 4 && arguments[4] !== undefined
                ? arguments[4]
                : "",
            l = function(e) {
              return (0, r["default"])(e) && t.indexOf(e) >= 0 ? e : a.UNDEF;
            },
            s = l(n),
            c = l(i),
            u = l(o);
          return e.map(function(t) {
            var e = l(t.series) || s,
              n = l(t.stack) || c,
              i = l(t.group) || u;
            return (
              (t.plot = t.plot.map(function(t) {
                var o = t.type;
                return (
                  "column" === o || /area/.test(o)
                    ? ((t.stack = l(t.stack) || n || e),
                      (t.group = l(t.group) || i))
                    : ((t.stack = l(t.stack) || n),
                      (t.group = l(t.group) || i || e)),
                  t
                );
              })),
              t
            );
          });
        };
      },
      771: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(772),
          r = (i = o) && i.__esModule ? i : { default: i };
        var a = "implicit",
          l = (function() {
            function t() {
              !(function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.unknown = a),
                (this.domain = []),
                (this.ordinalRange = []),
                (this.map = new r["default"]());
            }
            return (
              (t.prototype.setDomain = function() {
                var t,
                  e,
                  n,
                  i =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : [];
                for (
                  this.domain = [], this.map.clear(), t = 0;
                  t < i.length;
                  ++t
                )
                  (n = (e = i[t]).toString()),
                    this.map.has(e) || this.map.set(n, this.domain.push(e));
                return this;
              }),
              (t.prototype.getDomain = function() {
                return this.domain.slice();
              }),
              (t.prototype.setRange = function(t) {
                return (this.ordinalRange = t.slice()), this;
              }),
              (t.prototype.getRange = function() {
                return this.ordinalRange.slice();
              }),
              (t.prototype.setUnknown = function(t) {
                return (this.unknown = t), this;
              }),
              (t.prototype.getUnknown = function() {
                return this.unknown;
              }),
              (t.prototype.copy = function() {
                return new t()
                  .setDomain(this.getDomain())
                  .setRange(this.getRange())
                  .setUnknown(this.geUnknownn());
              }),
              (t.prototype.getRangeValue = function(t) {
                var e = this.map,
                  n = t.toString(),
                  i = this.getRange(),
                  o = e.get(n);
                if (!o) {
                  if (this.getUnknown() !== a) return this.getUnknown();
                  (o = this.domain.push(t)), e.set(n, o);
                }
                return i[(o - 1) % i.length];
              }),
              (t.prototype.getType = function() {
                return "ordinal";
              }),
              t
            );
          })();
        e["default"] = l;
      },
      831: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(832),
          r = (i = o) && i.__esModule ? i : { default: i },
          a = n(125);
        e["default"] = function(t) {
          (0, a.componentFactory)(t, r["default"], "background", 1, [{}]);
        };
      },
      832: function(t, e, n) {
        "use strict";
        function i(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        e.__esModule = !0;
        var o = (function(t) {
          function e() {
            return (
              (function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              (function(t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e || ("object" != typeof e && "function" != typeof e)
                  ? t
                  : e;
              })(this, t.apply(this, arguments))
            );
          }
          return (
            i(e, t),
            (e.prototype.__setDefaultConfig = function() {
              this.config.backgroundCss = { fill: "#ffffff" };
            }),
            (e.prototype.configureAttributes = function() {
              var e =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              t.prototype.configureAttributes.call(this, e);
              var n = this.config,
                i = this.getFromEnv("chart-attrib"),
                o = i.style && i.style.background;
              Object.keys(e).forEach(function(t) {
                return (n[t] = e[t]);
              }),
                (n.backgroundCss = Object.assign(
                  n.backgroundCss,
                  this.getFromEnv("getStyleDef")(o)
                ));
            }),
            (e.prototype.setDimension = function() {
              var t =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};
              Object.assign(this.config, t);
            }),
            (e.prototype.draw = function() {
              var t = this.config;
              this.addGraphicalElement({
                el: "rect",
                attr: {
                  height: t.height,
                  width: t.width,
                  transform: t.translate,
                  opacity: t.backgroundCss.opacity
                },
                container: { id: "tropo", label: "group", isParent: !0 },
                css: t.backgroundCss,
                component: this,
                id: "background",
                label: "rect"
              });
            }),
            e
          );
        })(n(138).SmartRenderer);
        e["default"] = o;
      },
      833: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var i,
          o = n(125),
          r = n(834),
          a = (i = r) && i.__esModule ? i : { default: i };
        e["default"] = function(t) {
          var e = t.getChildren("standardRangeSelector"),
            n = t.getChildren("customRangeSelector"),
            i = void 0;
          (0, o.componentFactory)(t, a["default"], "toolbar-manager"),
            (i = t.getChildren("toolbar-manager")[0]),
            e && e[0] && !e[0].getState("removed")
              ? i.register("srs", e[0])
              : i.deRegister("srs"),
            n && n[0] && !n[0].getState("removed")
              ? i.register("crs", n[0])
              : i.deRegister("crs"),
            i.configure();
        };
      },
      834: function(t, e, n) {
        "use strict";
        function i(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (function(t, e) {
                    for (
                      var n = Object.getOwnPropertyNames(e), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        r = Object.getOwnPropertyDescriptor(e, o);
                      r &&
                        r.configurable &&
                        t[o] === undefined &&
                        Object.defineProperty(t, o, r);
                    }
                  })(t, e));
        }
        e.__esModule = !0;
        var o = (function(t) {
          function e(n) {
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            var i = (function(t, e) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !e || ("object" != typeof e && "function" != typeof e)
                ? t
                : e;
            })(this, t.call(this, n));
            return (
              (i._registry = {}),
              (i._limitChangeHandler = function() {
                var t = i,
                  e = i.getRegistry();
                for (t in e)
                  e[t].updateOnLimitChange && e[t].updateOnLimitChange();
                i.setData({}, !0);
              }),
              i
            );
          }
          return (
            i(e, t),
            (e.prototype.configureAttributes = function() {
              arguments.length > 0 &&
                arguments[0] !== undefined &&
                arguments[0];
              var t = this.getRegistry(),
                e = void 0,
                n = [{}],
                i = this.getFromEnv("selectorToolbar");
              for (e in t) t[e] && n.push(t[e].getToolInfo());
              i.setData(
                { child: Object.assign.apply(Object, n), toolbarhdirection: 1 },
                !0
              ),
                this.addExtEventListener(
                  "focusLimitChanged",
                  this._limitChangeHandler,
                  this.getFromEnv("chart")
                );
            }),
            (e.prototype.getRegistry = function() {
              return this._registry;
            }),
            (e.prototype.register = function(t, e) {
              this._registry[t] = e;
            }),
            (e.prototype.deRegister = function(t) {
              delete this._registry[t];
            }),
            e
          );
        })(n(138).SmartRenderer);
        e["default"] = o;
      }
    }
  ]);
});
//# sourceMappingURL=http://localhost:3052/3.13.4/map/eval/fusioncharts.timeseries.js.map
