(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[44], {
    36282: function(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        function __export(m) {
            for (var p in m)
                exports.hasOwnProperty(p) || (exports[p] = m[p])
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        __export(__webpack_require__(31467)),
        __export(__webpack_require__(74722))
    },
    31467: function(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var defaultOptions = {
            padding: !0,
            symbols: __webpack_require__(99806).defaultSymbols
        };
        exports.abbreviateNumber = function(num, digit, options) {
            void 0 === digit && (digit = 1),
            Array.isArray(options) && (options = {
                symbols: options
            });
            var _a = Object.assign({}, defaultOptions, options)
              , symbols = _a.symbols
              , padding = _a.padding
              , sign = Math.sign(num) >= 0
              , tier = Math.log10(num = Math.abs(num)) / 3 | 0;
            if (0 == tier)
                return (sign ? "" : "-") + num.toString();
            var suffix = symbols[tier];
            if (!suffix)
                throw RangeError();
            var rounded = (num / Math.pow(10, 3 * tier)).toFixed(digit);
            return padding || (rounded = String(Number(rounded))),
            (sign ? "" : "-") + rounded + suffix
        }
    },
    99806: function(__unused_webpack_module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.defaultSymbols = ["", "k", "M", "G", "T", "P", "E"]
    },
    74722: function(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var const_1 = __webpack_require__(99806)
          , utils_1 = __webpack_require__(61787);
        exports.unabbreviateNumber = function(num, symbols) {
            void 0 === symbols && (symbols = const_1.defaultSymbols);
            var pattern = "^([+-]?([0-9]*[.])?[0-9]+)(" + symbols.join("|") + ")$"
              , regex = RegExp(pattern)
              , match = num.match(pattern) || [];
            if (regex.test(num) && match.length > 3) {
                var symbol = match[3]
                  , symbolValue = utils_1.symbolPow(symbols.indexOf(symbol));
                return Number(match[1]) * symbolValue
            }
            throw Error("This is not a valid input")
        }
    },
    61787: function(__unused_webpack_module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.symbolPow = function(index) {
            return void 0 === index && (index = 0),
            Math.pow(10, 3 * index)
        }
    },
    6917: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784)
          , _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36883);
        __webpack_exports__.Z = function(query, defaultState) {
            var _a = (0,
            react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0 !== defaultState ? defaultState : !!_misc_util__WEBPACK_IMPORTED_MODULE_1__.jU && window.matchMedia(query).matches)
              , state = _a[0]
              , setState = _a[1];
            return (0,
            react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {
                var mounted = !0
                  , mql = window.matchMedia(query)
                  , onChange = function() {
                    mounted && setState(!!mql.matches)
                };
                return mql.addListener(onChange),
                setState(mql.matches),
                function() {
                    mounted = !1,
                    mql.removeListener(onChange)
                }
            }, [query]),
            state
        }
    },
    39987: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
        let ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title, titleId, ...props}, svgRef) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: svgRef,
                "aria-labelledby": titleId
            }, props), title ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
                id: titleId
            }, title) : null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            }))
        });
        __webpack_exports__.Z = ForwardRef
    },
    14975: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
        let ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title, titleId, ...props}, svgRef) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: svgRef,
                "aria-labelledby": titleId
            }, props), title ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
                id: titleId
            }, title) : null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            }))
        });
        __webpack_exports__.Z = ForwardRef
    },
    25848: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
        let ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title, titleId, ...props}, svgRef) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: svgRef,
                "aria-labelledby": titleId
            }, props), title ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
                id: titleId
            }, title) : null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            }))
        });
        __webpack_exports__.Z = ForwardRef
    },
    76644: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
        let ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title, titleId, ...props}, svgRef) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: svgRef,
                "aria-labelledby": titleId
            }, props), title ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
                id: titleId
            }, title) : null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            }))
        });
        __webpack_exports__.Z = ForwardRef
    },
    93539: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
        let ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title, titleId, ...props}, svgRef) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: svgRef,
                "aria-labelledby": titleId
            }, props), title ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
                id: titleId
            }, title) : null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
            }))
        });
        __webpack_exports__.Z = ForwardRef
    },
    92397: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
        let ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title, titleId, ...props}, svgRef) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: svgRef,
                "aria-labelledby": titleId
            }, props), title ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
                id: titleId
            }, title) : null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            }))
        });
        __webpack_exports__.Z = ForwardRef
    },
    80408: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
        let ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title, titleId, ...props}, svgRef) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: svgRef,
                "aria-labelledby": titleId
            }, props), title ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
                id: titleId
            }, title) : null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            }))
        });
        __webpack_exports__.Z = ForwardRef
    },
    40288: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
        let ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title, titleId, ...props}, svgRef) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: svgRef,
                "aria-labelledby": titleId
            }, props), title ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
                id: titleId
            }, title) : null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            }))
        });
        __webpack_exports__.Z = ForwardRef
    },
    65632: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
        let ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title, titleId, ...props}, svgRef) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: svgRef,
                "aria-labelledby": titleId
            }, props), title ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
                id: titleId
            }, title) : null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            }))
        });
        __webpack_exports__.Z = ForwardRef
    },
    15775: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
        let ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title, titleId, ...props}, svgRef) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: svgRef,
                "aria-labelledby": titleId
            }, props), title ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
                id: titleId
            }, title) : null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            }))
        });
        __webpack_exports__.Z = ForwardRef
    },
    82096: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
        let ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title, titleId, ...props}, svgRef) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                ref: svgRef,
                "aria-labelledby": titleId
            }, props), title ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
                id: titleId
            }, title) : null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                fillRule: "evenodd",
                d: "M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z",
                clipRule: "evenodd"
            }))
        });
        __webpack_exports__.Z = ForwardRef
    },
    55332: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
        let ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title, titleId, ...props}, svgRef) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                ref: svgRef,
                "aria-labelledby": titleId
            }, props), title ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
                id: titleId
            }, title) : null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                fillRule: "evenodd",
                d: "M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z",
                clipRule: "evenodd"
            }))
        });
        __webpack_exports__.Z = ForwardRef
    },
    15030: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
        let ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function({title, titleId, ...props}, svgRef) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                ref: svgRef,
                "aria-labelledby": titleId
            }, props), title ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
                id: titleId
            }, title) : null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                fillRule: "evenodd",
                d: "M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z",
                clipRule: "evenodd"
            }))
        });
        __webpack_exports__.Z = ForwardRef
    },
    34401: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/community", function() {
            return __webpack_require__(24223)
        }
        ])
    },
    24223: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
            __N_SSP: function() {
                return __N_SSP
            },
            default: function() {
                return _topic___WEBPACK_IMPORTED_MODULE_0__.default
            }
        });
        var _topic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5794)
          , __N_SSP = !0
    }
}, function(__webpack_require__) {
    __webpack_require__.O(0, [1664, 8213, 7156, 8485, 9276, 5316, 5172, 9818, 5794, 9774, 2888, 179], function() {
        return __webpack_require__(__webpack_require__.s = 34401)
    }),
    _N_E = __webpack_require__.O()
}
]);
