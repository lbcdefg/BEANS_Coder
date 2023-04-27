(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[942], {
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
    13405: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784)
          , _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72489)
          , _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36883)
          , defaultState = {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        };
        __webpack_exports__.Z = _misc_util__WEBPACK_IMPORTED_MODULE_2__.jU && void 0 !== window.ResizeObserver ? function() {
            var _a = (0,
            react__WEBPACK_IMPORTED_MODULE_0__.useState)(null)
              , element = _a[0]
              , ref = _a[1]
              , _b = (0,
            react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultState)
              , rect = _b[0]
              , setRect = _b[1]
              , observer = (0,
            react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function() {
                return new window.ResizeObserver(function(entries) {
                    if (entries[0]) {
                        var _a = entries[0].contentRect;
                        setRect({
                            x: _a.x,
                            y: _a.y,
                            width: _a.width,
                            height: _a.height,
                            top: _a.top,
                            left: _a.left,
                            bottom: _a.bottom,
                            right: _a.right
                        })
                    }
                }
                )
            }, []);
            return (0,
            _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__.Z)(function() {
                if (element)
                    return observer.observe(element),
                    function() {
                        observer.disconnect()
                    }
            }, [element]),
            [ref, rect]
        }
        : function() {
            return [_misc_util__WEBPACK_IMPORTED_MODULE_2__.ZT, defaultState]
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
    46648: function() {},
    36797: function() {},
    21082: function() {},
    59579: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            tq: function() {
                return Swiper
            },
            o5: function() {
                return SwiperSlide
            }
        });
        var react = __webpack_require__(2784)
          , swiper_esm = __webpack_require__(84047);
        function isObject(o) {
            return "object" == typeof o && null !== o && o.constructor && "Object" === Object.prototype.toString.call(o).slice(8, -1)
        }
        function extend(target, src) {
            let noExtend = ["__proto__", "constructor", "prototype"];
            Object.keys(src).filter(key=>0 > noExtend.indexOf(key)).forEach(key=>{
                void 0 === target[key] ? target[key] = src[key] : isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0 ? src[key].__swiper__ ? target[key] = src[key] : extend(target[key], src[key]) : target[key] = src[key]
            }
            )
        }
        function needsNavigation(params={}) {
            return params.navigation && void 0 === params.navigation.nextEl && void 0 === params.navigation.prevEl
        }
        function needsPagination(params={}) {
            return params.pagination && void 0 === params.pagination.el
        }
        function needsScrollbar(params={}) {
            return params.scrollbar && void 0 === params.scrollbar.el
        }
        function uniqueClasses(classNames="") {
            let classes = classNames.split(" ").map(c=>c.trim()).filter(c=>!!c)
              , unique = [];
            return classes.forEach(c=>{
                0 > unique.indexOf(c) && unique.push(c)
            }
            ),
            unique.join(" ")
        }
        let paramsList = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopedSlidesLimit", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"]
          , calcLoopedSlides = (slides,swiperParams)=>{
            let slidesPerViewParams = swiperParams.slidesPerView;
            if (swiperParams.breakpoints) {
                let breakpoint = swiper_esm.ZP.prototype.getBreakpoint(swiperParams.breakpoints)
                  , breakpointOnlyParams = breakpoint in swiperParams.breakpoints ? swiperParams.breakpoints[breakpoint] : void 0;
                breakpointOnlyParams && breakpointOnlyParams.slidesPerView && (slidesPerViewParams = breakpointOnlyParams.slidesPerView)
            }
            let loopedSlides = Math.ceil(parseFloat(swiperParams.loopedSlides || slidesPerViewParams, 10));
            return (loopedSlides += swiperParams.loopAdditionalSlides) > slides.length && swiperParams.loopedSlidesLimit && (loopedSlides = slides.length),
            loopedSlides
        }
        ;
        function isChildSwiperSlide(child) {
            return child.type && child.type.displayName && child.type.displayName.includes("SwiperSlide")
        }
        let updateOnVirtualData = swiper=>{
            swiper && !swiper.destroyed && swiper.params.virtual && (!swiper.params.virtual || swiper.params.virtual.enabled) && (swiper.updateSlides(),
            swiper.updateProgress(),
            swiper.updateSlidesClasses(),
            swiper.lazy && swiper.params.lazy.enabled && swiper.lazy.load(),
            swiper.parallax && swiper.params.parallax && swiper.params.parallax.enabled && swiper.parallax.setTranslate())
        }
        ;
        function useIsomorphicLayoutEffect(callback, deps) {
            return "undefined" == typeof window ? (0,
            react.useEffect)(callback, deps) : (0,
            react.useLayoutEffect)(callback, deps)
        }
        let SwiperSlideContext = (0,
        react.createContext)(null)
          , SwiperContext = (0,
        react.createContext)(null);
        function _extends() {
            return (_extends = Object.assign ? Object.assign.bind() : function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source)
                        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
                }
                return target
            }
            ).apply(this, arguments)
        }
        let Swiper = (0,
        react.forwardRef)(function(_temp, externalElRef) {
            let {className, tag: Tag="div", wrapperTag: WrapperTag="div", children, onSwiper, ...rest} = void 0 === _temp ? {} : _temp
              , eventsAssigned = !1
              , [containerClasses,setContainerClasses] = (0,
            react.useState)("swiper")
              , [virtualData,setVirtualData] = (0,
            react.useState)(null)
              , [breakpointChanged,setBreakpointChanged] = (0,
            react.useState)(!1)
              , initializedRef = (0,
            react.useRef)(!1)
              , swiperElRef = (0,
            react.useRef)(null)
              , swiperRef = (0,
            react.useRef)(null)
              , oldPassedParamsRef = (0,
            react.useRef)(null)
              , oldSlides = (0,
            react.useRef)(null)
              , nextElRef = (0,
            react.useRef)(null)
              , prevElRef = (0,
            react.useRef)(null)
              , paginationElRef = (0,
            react.useRef)(null)
              , scrollbarElRef = (0,
            react.useRef)(null)
              , {params: swiperParams, passedParams, rest: restProps, events} = function(obj={}, splitEvents=!0) {
                let params = {
                    on: {}
                }
                  , events = {}
                  , passedParams = {};
                extend(params, swiper_esm.ZP.defaults),
                extend(params, swiper_esm.ZP.extendedDefaults),
                params._emitClasses = !0,
                params.init = !1;
                let rest = {}
                  , allowedParams = paramsList.map(key=>key.replace(/_/, ""))
                  , plainObj = Object.assign({}, obj);
                return Object.keys(plainObj).forEach(key=>{
                    void 0 !== obj[key] && (allowedParams.indexOf(key) >= 0 ? isObject(obj[key]) ? (params[key] = {},
                    passedParams[key] = {},
                    extend(params[key], obj[key]),
                    extend(passedParams[key], obj[key])) : (params[key] = obj[key],
                    passedParams[key] = obj[key]) : 0 === key.search(/on[A-Z]/) && "function" == typeof obj[key] ? splitEvents ? events[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key] : params.on[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key] : rest[key] = obj[key])
                }
                ),
                ["navigation", "pagination", "scrollbar"].forEach(key=>{
                    !0 === params[key] && (params[key] = {}),
                    !1 === params[key] && delete params[key]
                }
                ),
                {
                    params,
                    passedParams,
                    rest,
                    events
                }
            }(rest)
              , {slides, slots} = function(c) {
                let slides = []
                  , slots = {
                    "container-start": [],
                    "container-end": [],
                    "wrapper-start": [],
                    "wrapper-end": []
                };
                return react.Children.toArray(c).forEach(child=>{
                    if (isChildSwiperSlide(child))
                        slides.push(child);
                    else if (child.props && child.props.slot && slots[child.props.slot])
                        slots[child.props.slot].push(child);
                    else if (child.props && child.props.children) {
                        let foundSlides = function processChildren(c) {
                            let slides = [];
                            return react.Children.toArray(c).forEach(child=>{
                                isChildSwiperSlide(child) ? slides.push(child) : child.props && child.props.children && processChildren(child.props.children).forEach(slide=>slides.push(slide))
                            }
                            ),
                            slides
                        }(child.props.children);
                        foundSlides.length > 0 ? foundSlides.forEach(slide=>slides.push(slide)) : slots["container-end"].push(child)
                    } else
                        slots["container-end"].push(child)
                }
                ),
                {
                    slides,
                    slots
                }
            }(children)
              , onBeforeBreakpoint = ()=>{
                setBreakpointChanged(!breakpointChanged)
            }
            ;
            Object.assign(swiperParams.on, {
                _containerClasses(swiper, classes) {
                    setContainerClasses(classes)
                }
            });
            let initSwiper = ()=>{
                if (Object.assign(swiperParams.on, events),
                eventsAssigned = !0,
                swiperRef.current = new swiper_esm.ZP(swiperParams),
                swiperRef.current.loopCreate = ()=>{}
                ,
                swiperRef.current.loopDestroy = ()=>{}
                ,
                swiperParams.loop && (swiperRef.current.loopedSlides = calcLoopedSlides(slides, swiperParams)),
                swiperRef.current.virtual && swiperRef.current.params.virtual.enabled) {
                    swiperRef.current.virtual.slides = slides;
                    let extendWith = {
                        cache: !1,
                        slides,
                        renderExternal: setVirtualData,
                        renderExternalUpdate: !1
                    };
                    extend(swiperRef.current.params.virtual, extendWith),
                    extend(swiperRef.current.originalParams.virtual, extendWith)
                }
            }
            ;
            swiperElRef.current || initSwiper(),
            swiperRef.current && swiperRef.current.on("_beforeBreakpoint", onBeforeBreakpoint);
            let attachEvents = ()=>{
                !eventsAssigned && events && swiperRef.current && Object.keys(events).forEach(eventName=>{
                    swiperRef.current.on(eventName, events[eventName])
                }
                )
            }
              , detachEvents = ()=>{
                events && swiperRef.current && Object.keys(events).forEach(eventName=>{
                    swiperRef.current.off(eventName, events[eventName])
                }
                )
            }
            ;
            return (0,
            react.useEffect)(()=>()=>{
                swiperRef.current && swiperRef.current.off("_beforeBreakpoint", onBeforeBreakpoint)
            }
            ),
            (0,
            react.useEffect)(()=>{
                !initializedRef.current && swiperRef.current && (swiperRef.current.emitSlidesClasses(),
                initializedRef.current = !0)
            }
            ),
            useIsomorphicLayoutEffect(()=>{
                if (externalElRef && (externalElRef.current = swiperElRef.current),
                swiperElRef.current)
                    return swiperRef.current.destroyed && initSwiper(),
                    function({el, nextEl, prevEl, paginationEl, scrollbarEl, swiper}, swiperParams) {
                        needsNavigation(swiperParams) && nextEl && prevEl && (swiper.params.navigation.nextEl = nextEl,
                        swiper.originalParams.navigation.nextEl = nextEl,
                        swiper.params.navigation.prevEl = prevEl,
                        swiper.originalParams.navigation.prevEl = prevEl),
                        needsPagination(swiperParams) && paginationEl && (swiper.params.pagination.el = paginationEl,
                        swiper.originalParams.pagination.el = paginationEl),
                        needsScrollbar(swiperParams) && scrollbarEl && (swiper.params.scrollbar.el = scrollbarEl,
                        swiper.originalParams.scrollbar.el = scrollbarEl),
                        swiper.init(el)
                    }({
                        el: swiperElRef.current,
                        nextEl: nextElRef.current,
                        prevEl: prevElRef.current,
                        paginationEl: paginationElRef.current,
                        scrollbarEl: scrollbarElRef.current,
                        swiper: swiperRef.current
                    }, swiperParams),
                    onSwiper && onSwiper(swiperRef.current),
                    ()=>{
                        swiperRef.current && !swiperRef.current.destroyed && swiperRef.current.destroy(!0, !1)
                    }
            }
            , []),
            useIsomorphicLayoutEffect(()=>{
                attachEvents();
                let changedParams = function(swiperParams, oldParams, children, oldChildren, getKey) {
                    let keys = [];
                    if (!oldParams)
                        return keys;
                    let addKey = key=>{
                        0 > keys.indexOf(key) && keys.push(key)
                    }
                    ;
                    if (children && oldChildren) {
                        let oldChildrenKeys = oldChildren.map(getKey)
                          , childrenKeys = children.map(getKey);
                        oldChildrenKeys.join("") !== childrenKeys.join("") && addKey("children"),
                        oldChildren.length !== children.length && addKey("children")
                    }
                    let watchParams = paramsList.filter(key=>"_" === key[0]).map(key=>key.replace(/_/, ""));
                    return watchParams.forEach(key=>{
                        if (key in swiperParams && key in oldParams) {
                            if (isObject(swiperParams[key]) && isObject(oldParams[key])) {
                                let newKeys = Object.keys(swiperParams[key])
                                  , oldKeys = Object.keys(oldParams[key]);
                                newKeys.length !== oldKeys.length ? addKey(key) : (newKeys.forEach(newKey=>{
                                    swiperParams[key][newKey] !== oldParams[key][newKey] && addKey(key)
                                }
                                ),
                                oldKeys.forEach(oldKey=>{
                                    swiperParams[key][oldKey] !== oldParams[key][oldKey] && addKey(key)
                                }
                                ))
                            } else
                                swiperParams[key] !== oldParams[key] && addKey(key)
                        }
                    }
                    ),
                    keys
                }(passedParams, oldPassedParamsRef.current, slides, oldSlides.current, c=>c.key);
                return oldPassedParamsRef.current = passedParams,
                oldSlides.current = slides,
                changedParams.length && swiperRef.current && !swiperRef.current.destroyed && function({swiper, slides, passedParams, changedParams, nextEl, prevEl, scrollbarEl, paginationEl}) {
                    let needThumbsInit, needControllerInit, needPaginationInit, needScrollbarInit, needNavigationInit;
                    let updateParams = changedParams.filter(key=>"children" !== key && "direction" !== key)
                      , {params: currentParams, pagination, navigation, scrollbar, virtual, thumbs} = swiper;
                    changedParams.includes("thumbs") && passedParams.thumbs && passedParams.thumbs.swiper && currentParams.thumbs && !currentParams.thumbs.swiper && (needThumbsInit = !0),
                    changedParams.includes("controller") && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control && (needControllerInit = !0),
                    changedParams.includes("pagination") && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || !1 === currentParams.pagination) && pagination && !pagination.el && (needPaginationInit = !0),
                    changedParams.includes("scrollbar") && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || !1 === currentParams.scrollbar) && scrollbar && !scrollbar.el && (needScrollbarInit = !0),
                    changedParams.includes("navigation") && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || !1 === currentParams.navigation) && navigation && !navigation.prevEl && !navigation.nextEl && (needNavigationInit = !0);
                    let destroyModule = mod=>{
                        swiper[mod] && (swiper[mod].destroy(),
                        "navigation" === mod ? (currentParams[mod].prevEl = void 0,
                        currentParams[mod].nextEl = void 0,
                        swiper[mod].prevEl = void 0,
                        swiper[mod].nextEl = void 0) : (currentParams[mod].el = void 0,
                        swiper[mod].el = void 0))
                    }
                    ;
                    if (updateParams.forEach(key=>{
                        if (isObject(currentParams[key]) && isObject(passedParams[key]))
                            extend(currentParams[key], passedParams[key]);
                        else {
                            let newValue = passedParams[key];
                            (!0 === newValue || !1 === newValue) && ("navigation" === key || "pagination" === key || "scrollbar" === key) ? !1 === newValue && destroyModule(key) : currentParams[key] = passedParams[key]
                        }
                    }
                    ),
                    updateParams.includes("controller") && !needControllerInit && swiper.controller && swiper.controller.control && currentParams.controller && currentParams.controller.control && (swiper.controller.control = currentParams.controller.control),
                    changedParams.includes("children") && slides && virtual && currentParams.virtual.enabled ? (virtual.slides = slides,
                    virtual.update(!0)) : changedParams.includes("children") && swiper.lazy && swiper.params.lazy.enabled && swiper.lazy.load(),
                    needThumbsInit) {
                        let initialized = thumbs.init();
                        initialized && thumbs.update(!0)
                    }
                    needControllerInit && (swiper.controller.control = currentParams.controller.control),
                    needPaginationInit && (paginationEl && (currentParams.pagination.el = paginationEl),
                    pagination.init(),
                    pagination.render(),
                    pagination.update()),
                    needScrollbarInit && (scrollbarEl && (currentParams.scrollbar.el = scrollbarEl),
                    scrollbar.init(),
                    scrollbar.updateSize(),
                    scrollbar.setTranslate()),
                    needNavigationInit && (nextEl && (currentParams.navigation.nextEl = nextEl),
                    prevEl && (currentParams.navigation.prevEl = prevEl),
                    navigation.init(),
                    navigation.update()),
                    changedParams.includes("allowSlideNext") && (swiper.allowSlideNext = passedParams.allowSlideNext),
                    changedParams.includes("allowSlidePrev") && (swiper.allowSlidePrev = passedParams.allowSlidePrev),
                    changedParams.includes("direction") && swiper.changeDirection(passedParams.direction, !1),
                    swiper.update()
                }({
                    swiper: swiperRef.current,
                    slides,
                    passedParams,
                    changedParams,
                    nextEl: nextElRef.current,
                    prevEl: prevElRef.current,
                    scrollbarEl: scrollbarElRef.current,
                    paginationEl: paginationElRef.current
                }),
                ()=>{
                    detachEvents()
                }
            }
            ),
            useIsomorphicLayoutEffect(()=>{
                updateOnVirtualData(swiperRef.current)
            }
            , [virtualData]),
            react.createElement(Tag, _extends({
                ref: swiperElRef,
                className: uniqueClasses(`${containerClasses}${className ? ` ${className}` : ""}`)
            }, restProps), react.createElement(SwiperContext.Provider, {
                value: swiperRef.current
            }, slots["container-start"], react.createElement(WrapperTag, {
                className: "swiper-wrapper"
            }, slots["wrapper-start"], swiperParams.virtual ? function(swiper, slides, virtualData) {
                if (!virtualData)
                    return null;
                let style = swiper.isHorizontal() ? {
                    [swiper.rtlTranslate ? "right" : "left"]: `${virtualData.offset}px`
                } : {
                    top: `${virtualData.offset}px`
                };
                return slides.filter((child,index)=>index >= virtualData.from && index <= virtualData.to).map(child=>react.cloneElement(child, {
                    swiper,
                    style
                }))
            }(swiperRef.current, slides, virtualData) : !swiperParams.loop || swiperRef.current && swiperRef.current.destroyed ? slides.map(child=>react.cloneElement(child, {
                swiper: swiperRef.current
            })) : function(swiper, slides, swiperParams) {
                let modifiedSlides = slides.map((child,index)=>react.cloneElement(child, {
                    swiper,
                    "data-swiper-slide-index": index
                }));
                function duplicateSlide(child, index, position) {
                    return react.cloneElement(child, {
                        key: `${child.key}-duplicate-${index}-${position}`,
                        className: `${child.props.className || ""} ${swiperParams.slideDuplicateClass}`
                    })
                }
                if (swiperParams.loopFillGroupWithBlank) {
                    let blankSlidesNum = swiperParams.slidesPerGroup - modifiedSlides.length % swiperParams.slidesPerGroup;
                    if (blankSlidesNum !== swiperParams.slidesPerGroup)
                        for (let i = 0; i < blankSlidesNum; i += 1) {
                            let blankSlide = react.createElement("div", {
                                className: `${swiperParams.slideClass} ${swiperParams.slideBlankClass}`
                            });
                            modifiedSlides.push(blankSlide)
                        }
                }
                "auto" !== swiperParams.slidesPerView || swiperParams.loopedSlides || (swiperParams.loopedSlides = modifiedSlides.length);
                let loopedSlides = calcLoopedSlides(modifiedSlides, swiperParams)
                  , prependSlides = []
                  , appendSlides = [];
                for (let i1 = 0; i1 < loopedSlides; i1 += 1) {
                    let index = i1 - Math.floor(i1 / modifiedSlides.length) * modifiedSlides.length;
                    appendSlides.push(duplicateSlide(modifiedSlides[index], i1, "append")),
                    prependSlides.unshift(duplicateSlide(modifiedSlides[modifiedSlides.length - index - 1], i1, "prepend"))
                }
                return swiper && (swiper.loopedSlides = loopedSlides),
                [...prependSlides, ...modifiedSlides, ...appendSlides]
            }(swiperRef.current, slides, swiperParams), slots["wrapper-end"]), needsNavigation(swiperParams) && react.createElement(react.Fragment, null, react.createElement("div", {
                ref: prevElRef,
                className: "swiper-button-prev"
            }), react.createElement("div", {
                ref: nextElRef,
                className: "swiper-button-next"
            })), needsScrollbar(swiperParams) && react.createElement("div", {
                ref: scrollbarElRef,
                className: "swiper-scrollbar"
            }), needsPagination(swiperParams) && react.createElement("div", {
                ref: paginationElRef,
                className: "swiper-pagination"
            }), slots["container-end"]))
        });
        function swiper_slide_extends() {
            return (swiper_slide_extends = Object.assign ? Object.assign.bind() : function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source)
                        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
                }
                return target
            }
            ).apply(this, arguments)
        }
        Swiper.displayName = "Swiper";
        let SwiperSlide = (0,
        react.forwardRef)(function(_temp, externalRef) {
            let {tag: Tag="div", children, className="", swiper, zoom, virtualIndex, ...rest} = void 0 === _temp ? {} : _temp
              , slideElRef = (0,
            react.useRef)(null)
              , [slideClasses,setSlideClasses] = (0,
            react.useState)("swiper-slide");
            function updateClasses(_s, el, classNames) {
                el === slideElRef.current && setSlideClasses(classNames)
            }
            useIsomorphicLayoutEffect(()=>{
                if (externalRef && (externalRef.current = slideElRef.current),
                slideElRef.current && swiper) {
                    if (swiper.destroyed) {
                        "swiper-slide" !== slideClasses && setSlideClasses("swiper-slide");
                        return
                    }
                    return swiper.on("_slideClass", updateClasses),
                    ()=>{
                        swiper && swiper.off("_slideClass", updateClasses)
                    }
                }
            }
            ),
            useIsomorphicLayoutEffect(()=>{
                swiper && slideElRef.current && !swiper.destroyed && setSlideClasses(swiper.getSlideClasses(slideElRef.current))
            }
            , [swiper]);
            let slideData = {
                isActive: slideClasses.indexOf("swiper-slide-active") >= 0 || slideClasses.indexOf("swiper-slide-duplicate-active") >= 0,
                isVisible: slideClasses.indexOf("swiper-slide-visible") >= 0,
                isDuplicate: slideClasses.indexOf("swiper-slide-duplicate") >= 0,
                isPrev: slideClasses.indexOf("swiper-slide-prev") >= 0 || slideClasses.indexOf("swiper-slide-duplicate-prev") >= 0,
                isNext: slideClasses.indexOf("swiper-slide-next") >= 0 || slideClasses.indexOf("swiper-slide-duplicate-next") >= 0
            }
              , renderChildren = ()=>"function" == typeof children ? children(slideData) : children;
            return react.createElement(Tag, swiper_slide_extends({
                ref: slideElRef,
                className: uniqueClasses(`${slideClasses}${className ? ` ${className}` : ""}`),
                "data-swiper-slide-index": virtualIndex
            }, rest), react.createElement(SwiperSlideContext.Provider, {
                value: slideData
            }, zoom ? react.createElement("div", {
                className: "swiper-zoom-container",
                "data-swiper-zoom": "number" == typeof zoom ? zoom : void 0
            }, renderChildren()) : renderChildren()))
        });
        SwiperSlide.displayName = "SwiperSlide"
    },
    84047: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        let support, deviceCached, browser;
        function ssr_window_esm_isObject(obj) {
            return null !== obj && "object" == typeof obj && "constructor"in obj && obj.constructor === Object
        }
        function extend(target={}, src={}) {
            Object.keys(src).forEach(key=>{
                void 0 === target[key] ? target[key] = src[key] : ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0 && extend(target[key], src[key])
            }
            )
        }
        __webpack_require__.d(__webpack_exports__, {
            s5: function() {
                return A11y
            },
            pt: function() {
                return Autoplay
            },
            tl: function() {
                return Pagination
            },
            ZP: function() {
                return core
            }
        });
        let ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector: ()=>null,
            querySelectorAll: ()=>[],
            getElementById: ()=>null,
            createEvent: ()=>({
                initEvent() {}
            }),
            createElement: ()=>({
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName: ()=>[]
            }),
            createElementNS: ()=>({}),
            importNode: ()=>null,
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            let doc = "undefined" != typeof document ? document : {};
            return extend(doc, ssrDocument),
            doc
        }
        let ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function() {
                return this
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle: ()=>({
                getPropertyValue: ()=>""
            }),
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia: ()=>({}),
            requestAnimationFrame: callback=>"undefined" == typeof setTimeout ? (callback(),
            null) : setTimeout(callback, 0),
            cancelAnimationFrame(id) {
                "undefined" != typeof setTimeout && clearTimeout(id)
            }
        };
        function ssr_window_esm_getWindow() {
            let win = "undefined" != typeof window ? window : {};
            return extend(win, ssrWindow),
            win
        }
        class Dom7 extends Array {
            constructor(items) {
                "number" == typeof items ? super(items) : (super(...items || []),
                function(obj) {
                    let proto = obj.__proto__;
                    Object.defineProperty(obj, "__proto__", {
                        get: ()=>proto,
                        set(value) {
                            proto.__proto__ = value
                        }
                    })
                }(this))
            }
        }
        function arrayFlat(arr=[]) {
            let res = [];
            return arr.forEach(el=>{
                Array.isArray(el) ? res.push(...arrayFlat(el)) : res.push(el)
            }
            ),
            res
        }
        function arrayFilter(arr, callback) {
            return Array.prototype.filter.call(arr, callback)
        }
        function dom7_esm_$(selector, context) {
            let window1 = ssr_window_esm_getWindow()
              , document1 = ssr_window_esm_getDocument()
              , arr = [];
            if (!context && selector instanceof Dom7)
                return selector;
            if (!selector)
                return new Dom7(arr);
            if ("string" == typeof selector) {
                let html = selector.trim();
                if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                    let toCreate = "div";
                    0 === html.indexOf("<li") && (toCreate = "ul"),
                    0 === html.indexOf("<tr") && (toCreate = "tbody"),
                    (0 === html.indexOf("<td") || 0 === html.indexOf("<th")) && (toCreate = "tr"),
                    0 === html.indexOf("<tbody") && (toCreate = "table"),
                    0 === html.indexOf("<option") && (toCreate = "select");
                    let tempParent = document1.createElement(toCreate);
                    tempParent.innerHTML = html;
                    for (let i = 0; i < tempParent.childNodes.length; i += 1)
                        arr.push(tempParent.childNodes[i])
                } else
                    arr = function(selector, context) {
                        if ("string" != typeof selector)
                            return [selector];
                        let a = []
                          , res = context.querySelectorAll(selector);
                        for (let i = 0; i < res.length; i += 1)
                            a.push(res[i]);
                        return a
                    }(selector.trim(), context || document1)
            } else if (selector.nodeType || selector === window1 || selector === document1)
                arr.push(selector);
            else if (Array.isArray(selector)) {
                if (selector instanceof Dom7)
                    return selector;
                arr = selector
            }
            return new Dom7(function(arr) {
                let uniqueArray = [];
                for (let i = 0; i < arr.length; i += 1)
                    -1 === uniqueArray.indexOf(arr[i]) && uniqueArray.push(arr[i]);
                return uniqueArray
            }(arr))
        }
        dom7_esm_$.fn = Dom7.prototype;
        let noTrigger = "resize scroll".split(" ");
        function shortcut(name) {
            return function(...args) {
                if (void 0 === args[0]) {
                    for (let i = 0; i < this.length; i += 1)
                        0 > noTrigger.indexOf(name) && (name in this[i] ? this[i][name]() : dom7_esm_$(this[i]).trigger(name));
                    return this
                }
                return this.on(name, ...args)
            }
        }
        shortcut("click"),
        shortcut("blur"),
        shortcut("focus"),
        shortcut("focusin"),
        shortcut("focusout"),
        shortcut("keyup"),
        shortcut("keydown"),
        shortcut("keypress"),
        shortcut("submit"),
        shortcut("change"),
        shortcut("mousedown"),
        shortcut("mousemove"),
        shortcut("mouseup"),
        shortcut("mouseenter"),
        shortcut("mouseleave"),
        shortcut("mouseout"),
        shortcut("mouseover"),
        shortcut("touchstart"),
        shortcut("touchend"),
        shortcut("touchmove"),
        shortcut("resize"),
        shortcut("scroll");
        let Methods = {
            addClass: function(...classes) {
                let classNames = arrayFlat(classes.map(c=>c.split(" ")));
                return this.forEach(el=>{
                    el.classList.add(...classNames)
                }
                ),
                this
            },
            removeClass: function(...classes) {
                let classNames = arrayFlat(classes.map(c=>c.split(" ")));
                return this.forEach(el=>{
                    el.classList.remove(...classNames)
                }
                ),
                this
            },
            hasClass: function(...classes) {
                let classNames = arrayFlat(classes.map(c=>c.split(" ")));
                return arrayFilter(this, el=>classNames.filter(className=>el.classList.contains(className)).length > 0).length > 0
            },
            toggleClass: function(...classes) {
                let classNames = arrayFlat(classes.map(c=>c.split(" ")));
                this.forEach(el=>{
                    classNames.forEach(className=>{
                        el.classList.toggle(className)
                    }
                    )
                }
                )
            },
            attr: function(attrs, value) {
                if (1 == arguments.length && "string" == typeof attrs)
                    return this[0] ? this[0].getAttribute(attrs) : void 0;
                for (let i = 0; i < this.length; i += 1)
                    if (2 == arguments.length)
                        this[i].setAttribute(attrs, value);
                    else
                        for (let attrName in attrs)
                            this[i][attrName] = attrs[attrName],
                            this[i].setAttribute(attrName, attrs[attrName]);
                return this
            },
            removeAttr: function(attr) {
                for (let i = 0; i < this.length; i += 1)
                    this[i].removeAttribute(attr);
                return this
            },
            transform: function(transform) {
                for (let i = 0; i < this.length; i += 1)
                    this[i].style.transform = transform;
                return this
            },
            transition: function(duration) {
                for (let i = 0; i < this.length; i += 1)
                    this[i].style.transitionDuration = "string" != typeof duration ? `${duration}ms` : duration;
                return this
            },
            on: function(...args) {
                let j, [eventType,targetSelector,listener,capture] = args;
                function handleLiveEvent(e) {
                    let target = e.target;
                    if (!target)
                        return;
                    let eventData = e.target.dom7EventData || [];
                    if (0 > eventData.indexOf(e) && eventData.unshift(e),
                    dom7_esm_$(target).is(targetSelector))
                        listener.apply(target, eventData);
                    else {
                        let parents = dom7_esm_$(target).parents();
                        for (let k = 0; k < parents.length; k += 1)
                            dom7_esm_$(parents[k]).is(targetSelector) && listener.apply(parents[k], eventData)
                    }
                }
                function handleEvent(e) {
                    let eventData = e && e.target && e.target.dom7EventData || [];
                    0 > eventData.indexOf(e) && eventData.unshift(e),
                    listener.apply(this, eventData)
                }
                "function" == typeof args[1] && ([eventType,listener,capture] = args,
                targetSelector = void 0),
                capture || (capture = !1);
                let events = eventType.split(" ");
                for (let i = 0; i < this.length; i += 1) {
                    let el = this[i];
                    if (targetSelector)
                        for (j = 0; j < events.length; j += 1) {
                            let event = events[j];
                            el.dom7LiveListeners || (el.dom7LiveListeners = {}),
                            el.dom7LiveListeners[event] || (el.dom7LiveListeners[event] = []),
                            el.dom7LiveListeners[event].push({
                                listener,
                                proxyListener: handleLiveEvent
                            }),
                            el.addEventListener(event, handleLiveEvent, capture)
                        }
                    else
                        for (j = 0; j < events.length; j += 1) {
                            let event1 = events[j];
                            el.dom7Listeners || (el.dom7Listeners = {}),
                            el.dom7Listeners[event1] || (el.dom7Listeners[event1] = []),
                            el.dom7Listeners[event1].push({
                                listener,
                                proxyListener: handleEvent
                            }),
                            el.addEventListener(event1, handleEvent, capture)
                        }
                }
                return this
            },
            off: function(...args) {
                let[eventType,targetSelector,listener,capture] = args;
                "function" == typeof args[1] && ([eventType,listener,capture] = args,
                targetSelector = void 0),
                capture || (capture = !1);
                let events = eventType.split(" ");
                for (let i = 0; i < events.length; i += 1) {
                    let event = events[i];
                    for (let j = 0; j < this.length; j += 1) {
                        let handlers;
                        let el = this[j];
                        if (!targetSelector && el.dom7Listeners ? handlers = el.dom7Listeners[event] : targetSelector && el.dom7LiveListeners && (handlers = el.dom7LiveListeners[event]),
                        handlers && handlers.length)
                            for (let k = handlers.length - 1; k >= 0; k -= 1) {
                                let handler = handlers[k];
                                listener && handler.listener === listener ? (el.removeEventListener(event, handler.proxyListener, capture),
                                handlers.splice(k, 1)) : listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener ? (el.removeEventListener(event, handler.proxyListener, capture),
                                handlers.splice(k, 1)) : listener || (el.removeEventListener(event, handler.proxyListener, capture),
                                handlers.splice(k, 1))
                            }
                    }
                }
                return this
            },
            trigger: function(...args) {
                let window1 = ssr_window_esm_getWindow()
                  , events = args[0].split(" ")
                  , eventData = args[1];
                for (let i = 0; i < events.length; i += 1) {
                    let event = events[i];
                    for (let j = 0; j < this.length; j += 1) {
                        let el = this[j];
                        if (window1.CustomEvent) {
                            let evt = new window1.CustomEvent(event,{
                                detail: eventData,
                                bubbles: !0,
                                cancelable: !0
                            });
                            el.dom7EventData = args.filter((data,dataIndex)=>dataIndex > 0),
                            el.dispatchEvent(evt),
                            el.dom7EventData = [],
                            delete el.dom7EventData
                        }
                    }
                }
                return this
            },
            transitionEnd: function(callback) {
                let dom = this;
                return callback && dom.on("transitionend", function fireCallBack(e) {
                    e.target === this && (callback.call(this, e),
                    dom.off("transitionend", fireCallBack))
                }),
                this
            },
            outerWidth: function(includeMargins) {
                if (this.length > 0) {
                    if (includeMargins) {
                        let styles = this.styles();
                        return this[0].offsetWidth + parseFloat(styles.getPropertyValue("margin-right")) + parseFloat(styles.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            },
            outerHeight: function(includeMargins) {
                if (this.length > 0) {
                    if (includeMargins) {
                        let styles = this.styles();
                        return this[0].offsetHeight + parseFloat(styles.getPropertyValue("margin-top")) + parseFloat(styles.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            },
            styles: function() {
                let window1 = ssr_window_esm_getWindow();
                return this[0] ? window1.getComputedStyle(this[0], null) : {}
            },
            offset: function() {
                if (this.length > 0) {
                    let window1 = ssr_window_esm_getWindow()
                      , document1 = ssr_window_esm_getDocument()
                      , el = this[0]
                      , box = el.getBoundingClientRect()
                      , body = document1.body
                      , clientTop = el.clientTop || body.clientTop || 0
                      , clientLeft = el.clientLeft || body.clientLeft || 0
                      , scrollTop = el === window1 ? window1.scrollY : el.scrollTop
                      , scrollLeft = el === window1 ? window1.scrollX : el.scrollLeft;
                    return {
                        top: box.top + scrollTop - clientTop,
                        left: box.left + scrollLeft - clientLeft
                    }
                }
                return null
            },
            css: function(props, value) {
                let i;
                let window1 = ssr_window_esm_getWindow();
                if (1 == arguments.length) {
                    if ("string" == typeof props) {
                        if (this[0])
                            return window1.getComputedStyle(this[0], null).getPropertyValue(props)
                    } else {
                        for (i = 0; i < this.length; i += 1)
                            for (let prop in props)
                                this[i].style[prop] = props[prop];
                        return this
                    }
                }
                if (2 == arguments.length && "string" == typeof props)
                    for (i = 0; i < this.length; i += 1)
                        this[i].style[props] = value;
                return this
            },
            each: function(callback) {
                return callback && this.forEach((el,index)=>{
                    callback.apply(el, [el, index])
                }
                ),
                this
            },
            html: function(html) {
                if (void 0 === html)
                    return this[0] ? this[0].innerHTML : null;
                for (let i = 0; i < this.length; i += 1)
                    this[i].innerHTML = html;
                return this
            },
            text: function(text) {
                if (void 0 === text)
                    return this[0] ? this[0].textContent.trim() : null;
                for (let i = 0; i < this.length; i += 1)
                    this[i].textContent = text;
                return this
            },
            is: function(selector) {
                let compareWith, i;
                let window1 = ssr_window_esm_getWindow()
                  , document1 = ssr_window_esm_getDocument()
                  , el = this[0];
                if (!el || void 0 === selector)
                    return !1;
                if ("string" == typeof selector) {
                    if (el.matches)
                        return el.matches(selector);
                    if (el.webkitMatchesSelector)
                        return el.webkitMatchesSelector(selector);
                    if (el.msMatchesSelector)
                        return el.msMatchesSelector(selector);
                    for (i = 0,
                    compareWith = dom7_esm_$(selector); i < compareWith.length; i += 1)
                        if (compareWith[i] === el)
                            return !0;
                    return !1
                }
                if (selector === document1)
                    return el === document1;
                if (selector === window1)
                    return el === window1;
                if (selector.nodeType || selector instanceof Dom7) {
                    for (i = 0,
                    compareWith = selector.nodeType ? [selector] : selector; i < compareWith.length; i += 1)
                        if (compareWith[i] === el)
                            return !0
                }
                return !1
            },
            index: function() {
                let i, child = this[0];
                if (child) {
                    for (i = 0; null !== (child = child.previousSibling); )
                        1 === child.nodeType && (i += 1);
                    return i
                }
            },
            eq: function(index) {
                if (void 0 === index)
                    return this;
                let length = this.length;
                if (index > length - 1)
                    return dom7_esm_$([]);
                if (index < 0) {
                    let returnIndex = length + index;
                    return returnIndex < 0 ? dom7_esm_$([]) : dom7_esm_$([this[returnIndex]])
                }
                return dom7_esm_$([this[index]])
            },
            append: function(...els) {
                let newChild;
                let document1 = ssr_window_esm_getDocument();
                for (let k = 0; k < els.length; k += 1) {
                    newChild = els[k];
                    for (let i = 0; i < this.length; i += 1)
                        if ("string" == typeof newChild) {
                            let tempDiv = document1.createElement("div");
                            for (tempDiv.innerHTML = newChild; tempDiv.firstChild; )
                                this[i].appendChild(tempDiv.firstChild)
                        } else if (newChild instanceof Dom7)
                            for (let j = 0; j < newChild.length; j += 1)
                                this[i].appendChild(newChild[j]);
                        else
                            this[i].appendChild(newChild)
                }
                return this
            },
            prepend: function(newChild) {
                let i, j;
                let document1 = ssr_window_esm_getDocument();
                for (i = 0; i < this.length; i += 1)
                    if ("string" == typeof newChild) {
                        let tempDiv = document1.createElement("div");
                        for (tempDiv.innerHTML = newChild,
                        j = tempDiv.childNodes.length - 1; j >= 0; j -= 1)
                            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0])
                    } else if (newChild instanceof Dom7)
                        for (j = 0; j < newChild.length; j += 1)
                            this[i].insertBefore(newChild[j], this[i].childNodes[0]);
                    else
                        this[i].insertBefore(newChild, this[i].childNodes[0]);
                return this
            },
            next: function(selector) {
                if (this.length > 0) {
                    if (selector)
                        return this[0].nextElementSibling && dom7_esm_$(this[0].nextElementSibling).is(selector) ? dom7_esm_$([this[0].nextElementSibling]) : dom7_esm_$([]);
                    if (this[0].nextElementSibling)
                        return dom7_esm_$([this[0].nextElementSibling])
                }
                return dom7_esm_$([])
            },
            nextAll: function(selector) {
                let nextEls = []
                  , el = this[0];
                if (!el)
                    return dom7_esm_$([]);
                for (; el.nextElementSibling; ) {
                    let next = el.nextElementSibling;
                    selector ? dom7_esm_$(next).is(selector) && nextEls.push(next) : nextEls.push(next),
                    el = next
                }
                return dom7_esm_$(nextEls)
            },
            prev: function(selector) {
                if (this.length > 0) {
                    let el = this[0];
                    if (selector)
                        return el.previousElementSibling && dom7_esm_$(el.previousElementSibling).is(selector) ? dom7_esm_$([el.previousElementSibling]) : dom7_esm_$([]);
                    if (el.previousElementSibling)
                        return dom7_esm_$([el.previousElementSibling])
                }
                return dom7_esm_$([])
            },
            prevAll: function(selector) {
                let prevEls = []
                  , el = this[0];
                if (!el)
                    return dom7_esm_$([]);
                for (; el.previousElementSibling; ) {
                    let prev = el.previousElementSibling;
                    selector ? dom7_esm_$(prev).is(selector) && prevEls.push(prev) : prevEls.push(prev),
                    el = prev
                }
                return dom7_esm_$(prevEls)
            },
            parent: function(selector) {
                let parents = [];
                for (let i = 0; i < this.length; i += 1)
                    null !== this[i].parentNode && (selector ? dom7_esm_$(this[i].parentNode).is(selector) && parents.push(this[i].parentNode) : parents.push(this[i].parentNode));
                return dom7_esm_$(parents)
            },
            parents: function(selector) {
                let parents = [];
                for (let i = 0; i < this.length; i += 1) {
                    let parent = this[i].parentNode;
                    for (; parent; )
                        selector ? dom7_esm_$(parent).is(selector) && parents.push(parent) : parents.push(parent),
                        parent = parent.parentNode
                }
                return dom7_esm_$(parents)
            },
            closest: function(selector) {
                let closest = this;
                return void 0 === selector ? dom7_esm_$([]) : (closest.is(selector) || (closest = closest.parents(selector).eq(0)),
                closest)
            },
            find: function(selector) {
                let foundElements = [];
                for (let i = 0; i < this.length; i += 1) {
                    let found = this[i].querySelectorAll(selector);
                    for (let j = 0; j < found.length; j += 1)
                        foundElements.push(found[j])
                }
                return dom7_esm_$(foundElements)
            },
            children: function(selector) {
                let children = [];
                for (let i = 0; i < this.length; i += 1) {
                    let childNodes = this[i].children;
                    for (let j = 0; j < childNodes.length; j += 1)
                        (!selector || dom7_esm_$(childNodes[j]).is(selector)) && children.push(childNodes[j])
                }
                return dom7_esm_$(children)
            },
            filter: function(callback) {
                let result = arrayFilter(this, callback);
                return dom7_esm_$(result)
            },
            remove: function() {
                for (let i = 0; i < this.length; i += 1)
                    this[i].parentNode && this[i].parentNode.removeChild(this[i]);
                return this
            }
        };
        function utils_nextTick(callback, delay=0) {
            return setTimeout(callback, delay)
        }
        function utils_now() {
            return Date.now()
        }
        function utils_isObject(o) {
            return "object" == typeof o && null !== o && o.constructor && "Object" === Object.prototype.toString.call(o).slice(8, -1)
        }
        function utils_extend(...args) {
            let to = Object(args[0])
              , noExtend = ["__proto__", "constructor", "prototype"];
            for (let i = 1; i < args.length; i += 1) {
                let nextSource = args[i];
                if (null != nextSource && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(nextSource instanceof HTMLElement) : !nextSource || 1 !== nextSource.nodeType && 11 !== nextSource.nodeType)) {
                    let keysArray = Object.keys(Object(nextSource)).filter(key=>0 > noExtend.indexOf(key));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        let nextKey = keysArray[nextIndex]
                          , desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        void 0 !== desc && desc.enumerable && (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey]) ? nextSource[nextKey].__swiper__ ? to[nextKey] = nextSource[nextKey] : utils_extend(to[nextKey], nextSource[nextKey]) : !utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey]) ? (to[nextKey] = {},
                        nextSource[nextKey].__swiper__ ? to[nextKey] = nextSource[nextKey] : utils_extend(to[nextKey], nextSource[nextKey])) : to[nextKey] = nextSource[nextKey])
                    }
                }
            }
            return to
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue)
        }
        function animateCSSModeScroll({swiper, targetPosition, side}) {
            let time;
            let window1 = ssr_window_esm_getWindow()
              , startPosition = -swiper.translate
              , startTime = null
              , duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none",
            window1.cancelAnimationFrame(swiper.cssModeFrameID);
            let dir = targetPosition > startPosition ? "next" : "prev"
              , isOutOfBound = (current,target)=>"next" === dir && current >= target || "prev" === dir && current <= target
              , animate = ()=>{
                time = new Date().getTime(),
                null === startTime && (startTime = time);
                let progress = Math.max(Math.min((time - startTime) / duration, 1), 0)
                  , currentPosition = startPosition + (.5 - Math.cos(progress * Math.PI) / 2) * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition) && (currentPosition = targetPosition),
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                }),
                isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden",
                    swiper.wrapperEl.style.scrollSnapType = "",
                    setTimeout(()=>{
                        swiper.wrapperEl.style.overflow = "",
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        })
                    }
                    ),
                    window1.cancelAnimationFrame(swiper.cssModeFrameID);
                    return
                }
                swiper.cssModeFrameID = window1.requestAnimationFrame(animate)
            }
            ;
            animate()
        }
        function getSupport() {
            return support || (support = function() {
                let window1 = ssr_window_esm_getWindow()
                  , document1 = ssr_window_esm_getDocument();
                return {
                    smoothScroll: document1.documentElement && "scrollBehavior"in document1.documentElement.style,
                    touch: !!("ontouchstart"in window1 || window1.DocumentTouch && document1 instanceof window1.DocumentTouch),
                    passiveListener: function() {
                        let supportsPassive = !1;
                        try {
                            let opts = Object.defineProperty({}, "passive", {
                                get() {
                                    supportsPassive = !0
                                }
                            });
                            window1.addEventListener("testPassiveListener", null, opts)
                        } catch (e) {}
                        return supportsPassive
                    }(),
                    gestures: "ongesturestart"in window1
                }
            }()),
            support
        }
        function transitionEmit({swiper, runCallbacks, direction, step}) {
            let {activeIndex, previousIndex} = swiper
              , dir = direction;
            if (dir || (dir = activeIndex > previousIndex ? "next" : activeIndex < previousIndex ? "prev" : "reset"),
            swiper.emit(`transition${step}`),
            runCallbacks && activeIndex !== previousIndex) {
                if ("reset" === dir) {
                    swiper.emit(`slideResetTransition${step}`);
                    return
                }
                swiper.emit(`slideChangeTransition${step}`),
                "next" === dir ? swiper.emit(`slideNextTransition${step}`) : swiper.emit(`slidePrevTransition${step}`)
            }
        }
        function onTouchStart(event) {
            let swiper = this
              , document1 = ssr_window_esm_getDocument()
              , window1 = ssr_window_esm_getWindow()
              , data = swiper.touchEventsData
              , {params, touches, enabled} = swiper;
            if (!enabled || swiper.animating && params.preventInteractionOnTransition)
                return;
            !swiper.animating && params.cssMode && params.loop && swiper.loopFix();
            let e = event;
            e.originalEvent && (e = e.originalEvent);
            let $targetEl = dom7_esm_$(e.target);
            if ("wrapper" === params.touchEventsTarget && !$targetEl.closest(swiper.wrapperEl).length || (data.isTouchEvent = "touchstart" === e.type,
            !data.isTouchEvent && "which"in e && 3 === e.which || !data.isTouchEvent && "button"in e && e.button > 0 || data.isTouched && data.isMoved))
                return;
            let swipingClassHasValue = !!params.noSwipingClass && "" !== params.noSwipingClass
              , eventPath = event.composedPath ? event.composedPath() : event.path;
            swipingClassHasValue && e.target && e.target.shadowRoot && eventPath && ($targetEl = dom7_esm_$(eventPath[0]));
            let noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`
              , isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? function(selector, base=this) {
                return function __closestFrom(el) {
                    if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow())
                        return null;
                    el.assignedSlot && (el = el.assignedSlot);
                    let found = el.closest(selector);
                    return found || el.getRootNode ? found || __closestFrom(el.getRootNode().host) : null
                }(base)
            }(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
                swiper.allowClick = !0;
                return
            }
            if (params.swipeHandler && !$targetEl.closest(params.swipeHandler)[0])
                return;
            touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
            touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
            let startX = touches.currentX
              , startY = touches.currentY
              , edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection
              , edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window1.innerWidth - edgeSwipeThreshold)) {
                if ("prevent" !== edgeSwipeDetection)
                    return;
                event.preventDefault()
            }
            if (Object.assign(data, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }),
            touches.startX = startX,
            touches.startY = startY,
            data.touchStartTime = utils_now(),
            swiper.allowClick = !0,
            swiper.updateSize(),
            swiper.swipeDirection = void 0,
            params.threshold > 0 && (data.allowThresholdMove = !1),
            "touchstart" !== e.type) {
                let preventDefault = !0;
                $targetEl.is(data.focusableElements) && (preventDefault = !1,
                "SELECT" === $targetEl[0].nodeName && (data.isTouched = !1)),
                document1.activeElement && dom7_esm_$(document1.activeElement).is(data.focusableElements) && document1.activeElement !== $targetEl[0] && document1.activeElement.blur();
                let shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
                (params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable && e.preventDefault()
            }
            swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode && swiper.freeMode.onTouchStart(),
            swiper.emit("touchStart", e)
        }
        function onTouchMove(event) {
            let document1 = ssr_window_esm_getDocument()
              , swiper = this
              , data = swiper.touchEventsData
              , {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled)
                return;
            let e = event;
            if (e.originalEvent && (e = e.originalEvent),
            !data.isTouched) {
                data.startMoving && data.isScrolling && swiper.emit("touchMoveOpposite", e);
                return
            }
            if (data.isTouchEvent && "touchmove" !== e.type)
                return;
            let targetTouch = "touchmove" === e.type && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0])
              , pageX = "touchmove" === e.type ? targetTouch.pageX : e.pageX
              , pageY = "touchmove" === e.type ? targetTouch.pageY : e.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX,
                touches.startY = pageY;
                return
            }
            if (!swiper.allowTouchMove) {
                dom7_esm_$(e.target).is(data.focusableElements) || (swiper.allowClick = !1),
                data.isTouched && (Object.assign(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY
                }),
                data.touchStartTime = utils_now());
                return
            }
            if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
                if (swiper.isVertical()) {
                    if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                        data.isTouched = !1,
                        data.isMoved = !1;
                        return
                    }
                } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate())
                    return
            }
            if (data.isTouchEvent && document1.activeElement && e.target === document1.activeElement && dom7_esm_$(e.target).is(data.focusableElements)) {
                data.isMoved = !0,
                swiper.allowClick = !1;
                return
            }
            if (data.allowTouchCallbacks && swiper.emit("touchMove", e),
            e.targetTouches && e.targetTouches.length > 1)
                return;
            touches.currentX = pageX,
            touches.currentY = pageY;
            let diffX = touches.currentX - touches.startX
              , diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold)
                return;
            if (void 0 === data.isScrolling) {
                let touchAngle;
                swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX ? data.isScrolling = !1 : diffX * diffX + diffY * diffY >= 25 && (touchAngle = 180 * Math.atan2(Math.abs(diffY), Math.abs(diffX)) / Math.PI,
                data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle)
            }
            if (data.isScrolling && swiper.emit("touchMoveOpposite", e),
            void 0 === data.startMoving && (touches.currentX !== touches.startX || touches.currentY !== touches.startY) && (data.startMoving = !0),
            data.isScrolling) {
                data.isTouched = !1;
                return
            }
            if (!data.startMoving)
                return;
            swiper.allowClick = !1,
            !params.cssMode && e.cancelable && e.preventDefault(),
            params.touchMoveStopPropagation && !params.nested && e.stopPropagation(),
            data.isMoved || (params.loop && !params.cssMode && swiper.loopFix(),
            data.startTranslate = swiper.getTranslate(),
            swiper.setTransition(0),
            swiper.animating && swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            data.allowMomentumBounce = !1,
            params.grabCursor && (!0 === swiper.allowSlideNext || !0 === swiper.allowSlidePrev) && swiper.setGrabCursor(!0),
            swiper.emit("sliderFirstMove", e)),
            swiper.emit("sliderMove", e),
            data.isMoved = !0;
            let diff = swiper.isHorizontal() ? diffX : diffY;
            touches.diff = diff,
            diff *= params.touchRatio,
            rtl && (diff = -diff),
            swiper.swipeDirection = diff > 0 ? "prev" : "next",
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = !0
              , resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges && (resistanceRatio = 0),
            diff > 0 && data.currentTranslate > swiper.minTranslate() ? (disableParentSwiper = !1,
            params.resistance && (data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio)) : diff < 0 && data.currentTranslate < swiper.maxTranslate() && (disableParentSwiper = !1,
            params.resistance && (data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio)),
            disableParentSwiper && (e.preventedByNestedSwiper = !0),
            !swiper.allowSlideNext && "next" === swiper.swipeDirection && data.currentTranslate < data.startTranslate && (data.currentTranslate = data.startTranslate),
            !swiper.allowSlidePrev && "prev" === swiper.swipeDirection && data.currentTranslate > data.startTranslate && (data.currentTranslate = data.startTranslate),
            swiper.allowSlidePrev || swiper.allowSlideNext || (data.currentTranslate = data.startTranslate),
            params.threshold > 0) {
                if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                    if (!data.allowThresholdMove) {
                        data.allowThresholdMove = !0,
                        touches.startX = touches.currentX,
                        touches.startY = touches.currentY,
                        data.currentTranslate = data.startTranslate,
                        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                        return
                    }
                } else {
                    data.currentTranslate = data.startTranslate;
                    return
                }
            }
            params.followFinger && !params.cssMode && ((params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) && (swiper.updateActiveIndex(),
            swiper.updateSlidesClasses()),
            swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.freeMode.onTouchMove(),
            swiper.updateProgress(data.currentTranslate),
            swiper.setTranslate(data.currentTranslate))
        }
        function onTouchEnd(event) {
            let currentPos;
            let swiper = this
              , data = swiper.touchEventsData
              , {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled)
                return;
            let e = event;
            if (e.originalEvent && (e = e.originalEvent),
            data.allowTouchCallbacks && swiper.emit("touchEnd", e),
            data.allowTouchCallbacks = !1,
            !data.isTouched) {
                data.isMoved && params.grabCursor && swiper.setGrabCursor(!1),
                data.isMoved = !1,
                data.startMoving = !1;
                return
            }
            params.grabCursor && data.isMoved && data.isTouched && (!0 === swiper.allowSlideNext || !0 === swiper.allowSlidePrev) && swiper.setGrabCursor(!1);
            let touchEndTime = utils_now()
              , timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                let pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target),
                swiper.emit("tap click", e),
                timeDiff < 300 && touchEndTime - data.lastClickTime < 300 && swiper.emit("doubleTap doubleClick", e)
            }
            if (data.lastClickTime = utils_now(),
            utils_nextTick(()=>{
                swiper.destroyed || (swiper.allowClick = !0)
            }
            ),
            !data.isTouched || !data.isMoved || !swiper.swipeDirection || 0 === touches.diff || data.currentTranslate === data.startTranslate) {
                data.isTouched = !1,
                data.isMoved = !1,
                data.startMoving = !1;
                return
            }
            if (data.isTouched = !1,
            data.isMoved = !1,
            data.startMoving = !1,
            currentPos = params.followFinger ? rtl ? swiper.translate : -swiper.translate : -data.currentTranslate,
            params.cssMode)
                return;
            if (swiper.params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return
            }
            let stopIndex = 0
              , groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                let increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                void 0 !== slidesGrid[i + increment] ? currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment] && (stopIndex = i,
                groupSize = slidesGrid[i + increment] - slidesGrid[i]) : currentPos >= slidesGrid[i] && (stopIndex = i,
                groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2])
            }
            let rewindFirstIndex = null
              , rewindLastIndex = null;
            params.rewind && (swiper.isBeginning ? rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1 : swiper.isEnd && (rewindFirstIndex = 0));
            let ratio = (currentPos - slidesGrid[stopIndex]) / groupSize
              , increment1 = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return
                }
                "next" === swiper.swipeDirection && (ratio >= params.longSwipesRatio ? swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment1) : swiper.slideTo(stopIndex)),
                "prev" === swiper.swipeDirection && (ratio > 1 - params.longSwipesRatio ? swiper.slideTo(stopIndex + increment1) : null !== rewindLastIndex && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio ? swiper.slideTo(rewindLastIndex) : swiper.slideTo(stopIndex))
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return
                }
                let isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                isNavButtonTarget ? e.target === swiper.navigation.nextEl ? swiper.slideTo(stopIndex + increment1) : swiper.slideTo(stopIndex) : ("next" === swiper.swipeDirection && swiper.slideTo(null !== rewindFirstIndex ? rewindFirstIndex : stopIndex + increment1),
                "prev" === swiper.swipeDirection && swiper.slideTo(null !== rewindLastIndex ? rewindLastIndex : stopIndex))
            }
        }
        function onResize() {
            let swiper = this
              , {params, el} = swiper;
            if (el && 0 === el.offsetWidth)
                return;
            params.breakpoints && swiper.setBreakpoint();
            let {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            swiper.allowSlideNext = !0,
            swiper.allowSlidePrev = !0,
            swiper.updateSize(),
            swiper.updateSlides(),
            swiper.updateSlidesClasses(),
            ("auto" === params.slidesPerView || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides ? swiper.slideTo(swiper.slides.length - 1, 0, !1, !0) : swiper.slideTo(swiper.activeIndex, 0, !1, !0),
            swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused && swiper.autoplay.run(),
            swiper.allowSlidePrev = allowSlidePrev,
            swiper.allowSlideNext = allowSlideNext,
            swiper.params.watchOverflow && snapGrid !== swiper.snapGrid && swiper.checkOverflow()
        }
        function onClick(e) {
            this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(),
            this.params.preventClicksPropagation && this.animating && (e.stopPropagation(),
            e.stopImmediatePropagation()))
        }
        function onScroll() {
            let swiper = this
              , {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled)
                return;
            swiper.previousTranslate = swiper.translate,
            swiper.isHorizontal() ? swiper.translate = -wrapperEl.scrollLeft : swiper.translate = -wrapperEl.scrollTop,
            0 === swiper.translate && (swiper.translate = 0),
            swiper.updateActiveIndex(),
            swiper.updateSlidesClasses();
            let translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            (0 === translatesDiff ? 0 : (swiper.translate - swiper.minTranslate()) / translatesDiff) !== swiper.progress && swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate),
            swiper.emit("setTranslate", swiper.translate, !1)
        }
        Object.keys(Methods).forEach(methodName=>{
            Object.defineProperty(dom7_esm_$.fn, methodName, {
                value: Methods[methodName],
                writable: !0
            })
        }
        );
        let dummyEventAttached = !1;
        function dummyEventListener() {}
        let events = (swiper,method)=>{
            let document1 = ssr_window_esm_getDocument()
              , {params, touchEvents, el, wrapperEl, device, support} = swiper
              , capture = !!params.nested
              , domMethod = "on" === method ? "addEventListener" : "removeEventListener";
            if (support.touch) {
                let passiveListener = "touchstart" === touchEvents.start && !!support.passiveListener && !!params.passiveListeners && {
                    passive: !0,
                    capture: !1
                };
                el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener),
                el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                    passive: !1,
                    capture
                } : capture),
                el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener),
                touchEvents.cancel && el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener)
            } else
                el[domMethod](touchEvents.start, swiper.onTouchStart, !1),
                document1[domMethod](touchEvents.move, swiper.onTouchMove, capture),
                document1[domMethod](touchEvents.end, swiper.onTouchEnd, !1);
            (params.preventClicks || params.preventClicksPropagation) && el[domMethod]("click", swiper.onClick, !0),
            params.cssMode && wrapperEl[domMethod]("scroll", swiper.onScroll),
            params.updateOnWindowResize ? swiper[method](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, !0) : swiper[method]("observerUpdate", onResize, !0)
        }
          , isGridEnabled = (swiper,params)=>swiper.grid && params.grid && params.grid.rows > 1;
        var defaults = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopedSlidesLimit: !0,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            rewind: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1
        };
        let prototypes = {
            eventsEmitter: {
                on(events, handler, priority) {
                    let self1 = this;
                    if (!self1.eventsListeners || self1.destroyed || "function" != typeof handler)
                        return self1;
                    let method = priority ? "unshift" : "push";
                    return events.split(" ").forEach(event=>{
                        self1.eventsListeners[event] || (self1.eventsListeners[event] = []),
                        self1.eventsListeners[event][method](handler)
                    }
                    ),
                    self1
                },
                once(events, handler, priority) {
                    let self1 = this;
                    if (!self1.eventsListeners || self1.destroyed || "function" != typeof handler)
                        return self1;
                    function onceHandler(...args) {
                        self1.off(events, onceHandler),
                        onceHandler.__emitterProxy && delete onceHandler.__emitterProxy,
                        handler.apply(self1, args)
                    }
                    return onceHandler.__emitterProxy = handler,
                    self1.on(events, onceHandler, priority)
                },
                onAny(handler, priority) {
                    return !this.eventsListeners || this.destroyed || "function" != typeof handler || 0 > this.eventsAnyListeners.indexOf(handler) && this.eventsAnyListeners[priority ? "unshift" : "push"](handler),
                    this
                },
                offAny(handler) {
                    if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners)
                        return this;
                    let index = this.eventsAnyListeners.indexOf(handler);
                    return index >= 0 && this.eventsAnyListeners.splice(index, 1),
                    this
                },
                off(events, handler) {
                    let self1 = this;
                    return self1.eventsListeners && !self1.destroyed && self1.eventsListeners && events.split(" ").forEach(event=>{
                        void 0 === handler ? self1.eventsListeners[event] = [] : self1.eventsListeners[event] && self1.eventsListeners[event].forEach((eventHandler,index)=>{
                            (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) && self1.eventsListeners[event].splice(index, 1)
                        }
                        )
                    }
                    ),
                    self1
                },
                emit(...args) {
                    let events, data, context;
                    let self1 = this;
                    if (!self1.eventsListeners || self1.destroyed || !self1.eventsListeners)
                        return self1;
                    "string" == typeof args[0] || Array.isArray(args[0]) ? (events = args[0],
                    data = args.slice(1, args.length),
                    context = self1) : (events = args[0].events,
                    data = args[0].data,
                    context = args[0].context || self1),
                    data.unshift(context);
                    let eventsArray = Array.isArray(events) ? events : events.split(" ");
                    return eventsArray.forEach(event=>{
                        self1.eventsAnyListeners && self1.eventsAnyListeners.length && self1.eventsAnyListeners.forEach(eventHandler=>{
                            eventHandler.apply(context, [event, ...data])
                        }
                        ),
                        self1.eventsListeners && self1.eventsListeners[event] && self1.eventsListeners[event].forEach(eventHandler=>{
                            eventHandler.apply(context, data)
                        }
                        )
                    }
                    ),
                    self1
                }
            },
            update: {
                updateSize: function() {
                    let width, height;
                    let $el = this.$el;
                    width = void 0 !== this.params.width && null !== this.params.width ? this.params.width : $el[0].clientWidth,
                    height = void 0 !== this.params.height && null !== this.params.height ? this.params.height : $el[0].clientHeight,
                    0 === width && this.isHorizontal() || 0 === height && this.isVertical() || (width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10),
                    height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10),
                    Number.isNaN(width) && (width = 0),
                    Number.isNaN(height) && (height = 0),
                    Object.assign(this, {
                        width,
                        height,
                        size: this.isHorizontal() ? width : height
                    }))
                },
                updateSlides: function() {
                    let slideSize;
                    let swiper = this;
                    function getDirectionLabel(property) {
                        return swiper.isHorizontal() ? property : ({
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        })[property]
                    }
                    function getDirectionPropertyValue(node, label) {
                        return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0)
                    }
                    let params = swiper.params
                      , {$wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper
                      , isVirtual = swiper.virtual && params.virtual.enabled
                      , previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length
                      , slides = $wrapperEl.children(`.${swiper.params.slideClass}`)
                      , slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length
                      , snapGrid = []
                      , slidesGrid = []
                      , slidesSizesGrid = []
                      , offsetBefore = params.slidesOffsetBefore;
                    "function" == typeof offsetBefore && (offsetBefore = params.slidesOffsetBefore.call(swiper));
                    let offsetAfter = params.slidesOffsetAfter;
                    "function" == typeof offsetAfter && (offsetAfter = params.slidesOffsetAfter.call(swiper));
                    let previousSnapGridLength = swiper.snapGrid.length
                      , previousSlidesGridLength = swiper.slidesGrid.length
                      , spaceBetween = params.spaceBetween
                      , slidePosition = -offsetBefore
                      , prevSlideSize = 0
                      , index = 0;
                    if (void 0 === swiperSize)
                        return;
                    "string" == typeof spaceBetween && spaceBetween.indexOf("%") >= 0 && (spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize),
                    swiper.virtualSize = -spaceBetween,
                    rtl ? slides.css({
                        marginLeft: "",
                        marginBottom: "",
                        marginTop: ""
                    }) : slides.css({
                        marginRight: "",
                        marginBottom: "",
                        marginTop: ""
                    }),
                    params.centeredSlides && params.cssMode && (utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", ""),
                    utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", ""));
                    let gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
                    gridEnabled && swiper.grid.initSlides(slidesLength);
                    let shouldResetSlideSize = "auto" === params.slidesPerView && params.breakpoints && Object.keys(params.breakpoints).filter(key=>void 0 !== params.breakpoints[key].slidesPerView).length > 0;
                    for (let i = 0; i < slidesLength; i += 1) {
                        slideSize = 0;
                        let slide = slides.eq(i);
                        if (gridEnabled && swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel),
                        "none" !== slide.css("display")) {
                            if ("auto" === params.slidesPerView) {
                                shouldResetSlideSize && (slides[i].style[getDirectionLabel("width")] = "");
                                let slideStyles = getComputedStyle(slide[0])
                                  , currentTransform = slide[0].style.transform
                                  , currentWebKitTransform = slide[0].style.webkitTransform;
                                if (currentTransform && (slide[0].style.transform = "none"),
                                currentWebKitTransform && (slide[0].style.webkitTransform = "none"),
                                params.roundLengths)
                                    slideSize = swiper.isHorizontal() ? slide.outerWidth(!0) : slide.outerHeight(!0);
                                else {
                                    let width = getDirectionPropertyValue(slideStyles, "width")
                                      , paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left")
                                      , paddingRight = getDirectionPropertyValue(slideStyles, "padding-right")
                                      , marginLeft = getDirectionPropertyValue(slideStyles, "margin-left")
                                      , marginRight = getDirectionPropertyValue(slideStyles, "margin-right")
                                      , boxSizing = slideStyles.getPropertyValue("box-sizing");
                                    if (boxSizing && "border-box" === boxSizing)
                                        slideSize = width + marginLeft + marginRight;
                                    else {
                                        let {clientWidth, offsetWidth} = slide[0];
                                        slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth)
                                    }
                                }
                                currentTransform && (slide[0].style.transform = currentTransform),
                                currentWebKitTransform && (slide[0].style.webkitTransform = currentWebKitTransform),
                                params.roundLengths && (slideSize = Math.floor(slideSize))
                            } else
                                slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView,
                                params.roundLengths && (slideSize = Math.floor(slideSize)),
                                slides[i] && (slides[i].style[getDirectionLabel("width")] = `${slideSize}px`);
                            slides[i] && (slides[i].swiperSlideSize = slideSize),
                            slidesSizesGrid.push(slideSize),
                            params.centeredSlides ? (slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween,
                            0 === prevSlideSize && 0 !== i && (slidePosition = slidePosition - swiperSize / 2 - spaceBetween),
                            0 === i && (slidePosition = slidePosition - swiperSize / 2 - spaceBetween),
                            .001 > Math.abs(slidePosition) && (slidePosition = 0),
                            params.roundLengths && (slidePosition = Math.floor(slidePosition)),
                            index % params.slidesPerGroup == 0 && snapGrid.push(slidePosition),
                            slidesGrid.push(slidePosition)) : (params.roundLengths && (slidePosition = Math.floor(slidePosition)),
                            (index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup == 0 && snapGrid.push(slidePosition),
                            slidesGrid.push(slidePosition),
                            slidePosition = slidePosition + slideSize + spaceBetween),
                            swiper.virtualSize += slideSize + spaceBetween,
                            prevSlideSize = slideSize,
                            index += 1
                        }
                    }
                    if (swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter,
                    rtl && wrongRTL && ("slide" === params.effect || "coverflow" === params.effect) && $wrapperEl.css({
                        width: `${swiper.virtualSize + params.spaceBetween}px`
                    }),
                    params.setWrapperSize && $wrapperEl.css({
                        [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
                    }),
                    gridEnabled && swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel),
                    !params.centeredSlides) {
                        let newSlidesGrid = [];
                        for (let i1 = 0; i1 < snapGrid.length; i1 += 1) {
                            let slidesGridItem = snapGrid[i1];
                            params.roundLengths && (slidesGridItem = Math.floor(slidesGridItem)),
                            snapGrid[i1] <= swiper.virtualSize - swiperSize && newSlidesGrid.push(slidesGridItem)
                        }
                        snapGrid = newSlidesGrid,
                        Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1 && snapGrid.push(swiper.virtualSize - swiperSize)
                    }
                    if (0 === snapGrid.length && (snapGrid = [0]),
                    0 !== params.spaceBetween) {
                        let key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                        slides.filter((_,slideIndex)=>!params.cssMode || slideIndex !== slides.length - 1).css({
                            [key]: `${spaceBetween}px`
                        })
                    }
                    if (params.centeredSlides && params.centeredSlidesBounds) {
                        let allSlidesSize = 0;
                        slidesSizesGrid.forEach(slideSizeValue=>{
                            allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0)
                        }
                        ),
                        allSlidesSize -= params.spaceBetween;
                        let maxSnap = allSlidesSize - swiperSize;
                        snapGrid = snapGrid.map(snap=>snap < 0 ? -offsetBefore : snap > maxSnap ? maxSnap + offsetAfter : snap)
                    }
                    if (params.centerInsufficientSlides) {
                        let allSlidesSize1 = 0;
                        if (slidesSizesGrid.forEach(slideSizeValue=>{
                            allSlidesSize1 += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0)
                        }
                        ),
                        (allSlidesSize1 -= params.spaceBetween) < swiperSize) {
                            let allSlidesOffset = (swiperSize - allSlidesSize1) / 2;
                            snapGrid.forEach((snap,snapIndex)=>{
                                snapGrid[snapIndex] = snap - allSlidesOffset
                            }
                            ),
                            slidesGrid.forEach((snap,snapIndex)=>{
                                slidesGrid[snapIndex] = snap + allSlidesOffset
                            }
                            )
                        }
                    }
                    if (Object.assign(swiper, {
                        slides,
                        snapGrid,
                        slidesGrid,
                        slidesSizesGrid
                    }),
                    params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                        utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`),
                        utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                        let addToSnapGrid = -swiper.snapGrid[0]
                          , addToSlidesGrid = -swiper.slidesGrid[0];
                        swiper.snapGrid = swiper.snapGrid.map(v=>v + addToSnapGrid),
                        swiper.slidesGrid = swiper.slidesGrid.map(v=>v + addToSlidesGrid)
                    }
                    if (slidesLength !== previousSlidesLength && swiper.emit("slidesLengthChange"),
                    snapGrid.length !== previousSnapGridLength && (swiper.params.watchOverflow && swiper.checkOverflow(),
                    swiper.emit("snapGridLengthChange")),
                    slidesGrid.length !== previousSlidesGridLength && swiper.emit("slidesGridLengthChange"),
                    params.watchSlidesProgress && swiper.updateSlidesOffset(),
                    !isVirtual && !params.cssMode && ("slide" === params.effect || "fade" === params.effect)) {
                        let backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`
                          , hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
                        slidesLength <= params.maxBackfaceHiddenSlides ? hasClassBackfaceClassAdded || swiper.$el.addClass(backFaceHiddenClass) : hasClassBackfaceClassAdded && swiper.$el.removeClass(backFaceHiddenClass)
                    }
                },
                updateAutoHeight: function(speed) {
                    let i;
                    let swiper = this
                      , activeSlides = []
                      , isVirtual = swiper.virtual && swiper.params.virtual.enabled
                      , newHeight = 0;
                    "number" == typeof speed ? swiper.setTransition(speed) : !0 === speed && swiper.setTransition(swiper.params.speed);
                    let getSlideByIndex = index=>isVirtual ? swiper.slides.filter(el=>parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index)[0] : swiper.slides.eq(index)[0];
                    if ("auto" !== swiper.params.slidesPerView && swiper.params.slidesPerView > 1) {
                        if (swiper.params.centeredSlides)
                            (swiper.visibleSlides || dom7_esm_$([])).each(slide=>{
                                activeSlides.push(slide)
                            }
                            );
                        else
                            for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                                let index = swiper.activeIndex + i;
                                if (index > swiper.slides.length && !isVirtual)
                                    break;
                                activeSlides.push(getSlideByIndex(index))
                            }
                    } else
                        activeSlides.push(getSlideByIndex(swiper.activeIndex));
                    for (i = 0; i < activeSlides.length; i += 1)
                        if (void 0 !== activeSlides[i]) {
                            let height = activeSlides[i].offsetHeight;
                            newHeight = height > newHeight ? height : newHeight
                        }
                    (newHeight || 0 === newHeight) && swiper.$wrapperEl.css("height", `${newHeight}px`)
                },
                updateSlidesOffset: function() {
                    let slides = this.slides;
                    for (let i = 0; i < slides.length; i += 1)
                        slides[i].swiperSlideOffset = this.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop
                },
                updateSlidesProgress: function(translate=this && this.translate || 0) {
                    let swiper = this
                      , params = swiper.params
                      , {slides, rtlTranslate: rtl, snapGrid} = swiper;
                    if (0 === slides.length)
                        return;
                    void 0 === slides[0].swiperSlideOffset && swiper.updateSlidesOffset();
                    let offsetCenter = -translate;
                    rtl && (offsetCenter = translate),
                    slides.removeClass(params.slideVisibleClass),
                    swiper.visibleSlidesIndexes = [],
                    swiper.visibleSlides = [];
                    for (let i = 0; i < slides.length; i += 1) {
                        let slide = slides[i]
                          , slideOffset = slide.swiperSlideOffset;
                        params.cssMode && params.centeredSlides && (slideOffset -= slides[0].swiperSlideOffset);
                        let slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween)
                          , originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween)
                          , slideBefore = -(offsetCenter - slideOffset)
                          , slideAfter = slideBefore + swiper.slidesSizesGrid[i]
                          , isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                        isVisible && (swiper.visibleSlides.push(slide),
                        swiper.visibleSlidesIndexes.push(i),
                        slides.eq(i).addClass(params.slideVisibleClass)),
                        slide.progress = rtl ? -slideProgress : slideProgress,
                        slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress
                    }
                    swiper.visibleSlides = dom7_esm_$(swiper.visibleSlides)
                },
                updateProgress: function(translate) {
                    if (void 0 === translate) {
                        let multiplier = this.rtlTranslate ? -1 : 1;
                        translate = this && this.translate && this.translate * multiplier || 0
                    }
                    let params = this.params
                      , translatesDiff = this.maxTranslate() - this.minTranslate()
                      , {progress, isBeginning, isEnd} = this
                      , wasBeginning = isBeginning
                      , wasEnd = isEnd;
                    0 === translatesDiff ? (progress = 0,
                    isBeginning = !0,
                    isEnd = !0) : (isBeginning = (progress = (translate - this.minTranslate()) / translatesDiff) <= 0,
                    isEnd = progress >= 1),
                    Object.assign(this, {
                        progress,
                        isBeginning,
                        isEnd
                    }),
                    (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) && this.updateSlidesProgress(translate),
                    isBeginning && !wasBeginning && this.emit("reachBeginning toEdge"),
                    isEnd && !wasEnd && this.emit("reachEnd toEdge"),
                    (wasBeginning && !isBeginning || wasEnd && !isEnd) && this.emit("fromEdge"),
                    this.emit("progress", progress)
                },
                updateSlidesClasses: function() {
                    let activeSlide;
                    let {slides, params, $wrapperEl, activeIndex, realIndex} = this
                      , isVirtual = this.virtual && params.virtual.enabled;
                    slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`),
                    (activeSlide = isVirtual ? this.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`) : slides.eq(activeIndex)).addClass(params.slideActiveClass),
                    params.loop && (activeSlide.hasClass(params.slideDuplicateClass) ? $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass) : $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass));
                    let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
                    params.loop && 0 === nextSlide.length && (nextSlide = slides.eq(0)).addClass(params.slideNextClass);
                    let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
                    params.loop && 0 === prevSlide.length && (prevSlide = slides.eq(-1)).addClass(params.slidePrevClass),
                    params.loop && (nextSlide.hasClass(params.slideDuplicateClass) ? $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass) : $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass),
                    prevSlide.hasClass(params.slideDuplicateClass) ? $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass) : $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass)),
                    this.emitSlidesClasses()
                },
                updateActiveIndex: function(newActiveIndex) {
                    let snapIndex;
                    let swiper = this
                      , translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate
                      , {slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper
                      , activeIndex = newActiveIndex;
                    if (void 0 === activeIndex) {
                        for (let i = 0; i < slidesGrid.length; i += 1)
                            void 0 !== slidesGrid[i + 1] ? translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2 ? activeIndex = i : translate >= slidesGrid[i] && translate < slidesGrid[i + 1] && (activeIndex = i + 1) : translate >= slidesGrid[i] && (activeIndex = i);
                        params.normalizeSlideIndex && (activeIndex < 0 || void 0 === activeIndex) && (activeIndex = 0)
                    }
                    if (snapGrid.indexOf(translate) >= 0)
                        snapIndex = snapGrid.indexOf(translate);
                    else {
                        let skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup)
                    }
                    if (snapIndex >= snapGrid.length && (snapIndex = snapGrid.length - 1),
                    activeIndex === previousIndex) {
                        snapIndex !== previousSnapIndex && (swiper.snapIndex = snapIndex,
                        swiper.emit("snapIndexChange"));
                        return
                    }
                    let realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
                    Object.assign(swiper, {
                        snapIndex,
                        realIndex,
                        previousIndex,
                        activeIndex
                    }),
                    swiper.emit("activeIndexChange"),
                    swiper.emit("snapIndexChange"),
                    previousRealIndex !== realIndex && swiper.emit("realIndexChange"),
                    (swiper.initialized || swiper.params.runCallbacksOnInit) && swiper.emit("slideChange")
                },
                updateClickedSlide: function(e) {
                    let slideIndex;
                    let swiper = this
                      , params = swiper.params
                      , slide = dom7_esm_$(e).closest(`.${params.slideClass}`)[0]
                      , slideFound = !1;
                    if (slide) {
                        for (let i = 0; i < swiper.slides.length; i += 1)
                            if (swiper.slides[i] === slide) {
                                slideFound = !0,
                                slideIndex = i;
                                break
                            }
                    }
                    if (slide && slideFound)
                        swiper.clickedSlide = slide,
                        swiper.virtual && swiper.params.virtual.enabled ? swiper.clickedIndex = parseInt(dom7_esm_$(slide).attr("data-swiper-slide-index"), 10) : swiper.clickedIndex = slideIndex;
                    else {
                        swiper.clickedSlide = void 0,
                        swiper.clickedIndex = void 0;
                        return
                    }
                    params.slideToClickedSlide && void 0 !== swiper.clickedIndex && swiper.clickedIndex !== swiper.activeIndex && swiper.slideToClickedSlide()
                }
            },
            translate: {
                getTranslate: function(axis=this.isHorizontal() ? "x" : "y") {
                    let {params, rtlTranslate: rtl, translate, $wrapperEl} = this;
                    if (params.virtualTranslate)
                        return rtl ? -translate : translate;
                    if (params.cssMode)
                        return translate;
                    let currentTranslate = function(el, axis="x") {
                        let matrix, curTransform, transformMatrix;
                        let window1 = ssr_window_esm_getWindow()
                          , curStyle = function(el) {
                            let style;
                            let window1 = ssr_window_esm_getWindow();
                            return window1.getComputedStyle && (style = window1.getComputedStyle(el, null)),
                            !style && el.currentStyle && (style = el.currentStyle),
                            style || (style = el.style),
                            style
                        }(el, null);
                        return window1.WebKitCSSMatrix ? ((curTransform = curStyle.transform || curStyle.webkitTransform).split(",").length > 6 && (curTransform = curTransform.split(", ").map(a=>a.replace(",", ".")).join(", ")),
                        transformMatrix = new window1.WebKitCSSMatrix("none" === curTransform ? "" : curTransform)) : matrix = (transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
                        "x" === axis && (curTransform = window1.WebKitCSSMatrix ? transformMatrix.m41 : 16 === matrix.length ? parseFloat(matrix[12]) : parseFloat(matrix[4])),
                        "y" === axis && (curTransform = window1.WebKitCSSMatrix ? transformMatrix.m42 : 16 === matrix.length ? parseFloat(matrix[13]) : parseFloat(matrix[5])),
                        curTransform || 0
                    }($wrapperEl[0], axis);
                    return rtl && (currentTranslate = -currentTranslate),
                    currentTranslate || 0
                },
                setTranslate: function(translate, byController) {
                    let swiper = this
                      , {rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress} = swiper
                      , x = 0
                      , y = 0;
                    swiper.isHorizontal() ? x = rtl ? -translate : translate : y = translate,
                    params.roundLengths && (x = Math.floor(x),
                    y = Math.floor(y)),
                    params.cssMode ? wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y : params.virtualTranslate || $wrapperEl.transform(`translate3d(${x}px, ${y}px, 0px)`),
                    swiper.previousTranslate = swiper.translate,
                    swiper.translate = swiper.isHorizontal() ? x : y;
                    let translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
                    (0 === translatesDiff ? 0 : (translate - swiper.minTranslate()) / translatesDiff) !== progress && swiper.updateProgress(translate),
                    swiper.emit("setTranslate", swiper.translate, byController)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(translate=0, speed=this.params.speed, runCallbacks=!0, translateBounds=!0, internal) {
                    let newTranslate;
                    let swiper = this
                      , {params, wrapperEl} = swiper;
                    if (swiper.animating && params.preventInteractionOnTransition)
                        return !1;
                    let minTranslate = swiper.minTranslate()
                      , maxTranslate = swiper.maxTranslate();
                    if (newTranslate = translateBounds && translate > minTranslate ? minTranslate : translateBounds && translate < maxTranslate ? maxTranslate : translate,
                    swiper.updateProgress(newTranslate),
                    params.cssMode) {
                        let isH = swiper.isHorizontal();
                        if (0 === speed)
                            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
                        else {
                            if (!swiper.support.smoothScroll)
                                return animateCSSModeScroll({
                                    swiper,
                                    targetPosition: -newTranslate,
                                    side: isH ? "left" : "top"
                                }),
                                !0;
                            wrapperEl.scrollTo({
                                [isH ? "left" : "top"]: -newTranslate,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === speed ? (swiper.setTransition(0),
                    swiper.setTranslate(newTranslate),
                    runCallbacks && (swiper.emit("beforeTransitionStart", speed, internal),
                    swiper.emit("transitionEnd"))) : (swiper.setTransition(speed),
                    swiper.setTranslate(newTranslate),
                    runCallbacks && (swiper.emit("beforeTransitionStart", speed, internal),
                    swiper.emit("transitionStart")),
                    swiper.animating || (swiper.animating = !0,
                    swiper.onTranslateToWrapperTransitionEnd || (swiper.onTranslateToWrapperTransitionEnd = function(e) {
                        swiper && !swiper.destroyed && e.target === this && (swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd),
                        swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd),
                        swiper.onTranslateToWrapperTransitionEnd = null,
                        delete swiper.onTranslateToWrapperTransitionEnd,
                        runCallbacks && swiper.emit("transitionEnd"))
                    }
                    ),
                    swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd),
                    swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd))),
                    !0
                }
            },
            transition: {
                setTransition: function(duration, byController) {
                    this.params.cssMode || this.$wrapperEl.transition(duration),
                    this.emit("setTransition", duration, byController)
                },
                transitionStart: function(runCallbacks=!0, direction) {
                    let {params} = this;
                    params.cssMode || (params.autoHeight && this.updateAutoHeight(),
                    transitionEmit({
                        swiper: this,
                        runCallbacks,
                        direction,
                        step: "Start"
                    }))
                },
                transitionEnd: function(runCallbacks=!0, direction) {
                    let swiper = this
                      , {params} = swiper;
                    swiper.animating = !1,
                    params.cssMode || (swiper.setTransition(0),
                    transitionEmit({
                        swiper,
                        runCallbacks,
                        direction,
                        step: "End"
                    }))
                }
            },
            slide: {
                slideTo: function(index=0, speed=this.params.speed, runCallbacks=!0, internal, initial) {
                    let direction;
                    if ("number" != typeof index && "string" != typeof index)
                        throw Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
                    if ("string" == typeof index) {
                        let indexAsNumber = parseInt(index, 10)
                          , isValidNumber = isFinite(indexAsNumber);
                        if (!isValidNumber)
                            throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                        index = indexAsNumber
                    }
                    let swiper = this
                      , slideIndex = index;
                    slideIndex < 0 && (slideIndex = 0);
                    let {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
                    if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial)
                        return !1;
                    let skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex)
                      , snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
                    snapIndex >= snapGrid.length && (snapIndex = snapGrid.length - 1);
                    let translate = -snapGrid[snapIndex];
                    if (params.normalizeSlideIndex)
                        for (let i = 0; i < slidesGrid.length; i += 1) {
                            let normalizedTranslate = -Math.floor(100 * translate)
                              , normalizedGrid = Math.floor(100 * slidesGrid[i])
                              , normalizedGridNext = Math.floor(100 * slidesGrid[i + 1]);
                            void 0 !== slidesGrid[i + 1] ? normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2 ? slideIndex = i : normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext && (slideIndex = i + 1) : normalizedTranslate >= normalizedGrid && (slideIndex = i)
                        }
                    if (swiper.initialized && slideIndex !== activeIndex && (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate() || !swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate() && (activeIndex || 0) !== slideIndex))
                        return !1;
                    if (slideIndex !== (previousIndex || 0) && runCallbacks && swiper.emit("beforeSlideChangeStart"),
                    swiper.updateProgress(translate),
                    direction = slideIndex > activeIndex ? "next" : slideIndex < activeIndex ? "prev" : "reset",
                    rtl && -translate === swiper.translate || !rtl && translate === swiper.translate)
                        return swiper.updateActiveIndex(slideIndex),
                        params.autoHeight && swiper.updateAutoHeight(),
                        swiper.updateSlidesClasses(),
                        "slide" !== params.effect && swiper.setTranslate(translate),
                        "reset" !== direction && (swiper.transitionStart(runCallbacks, direction),
                        swiper.transitionEnd(runCallbacks, direction)),
                        !1;
                    if (params.cssMode) {
                        let isH = swiper.isHorizontal()
                          , t = rtl ? translate : -translate;
                        if (0 === speed) {
                            let isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                            isVirtual && (swiper.wrapperEl.style.scrollSnapType = "none",
                            swiper._immediateVirtual = !0),
                            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t,
                            isVirtual && requestAnimationFrame(()=>{
                                swiper.wrapperEl.style.scrollSnapType = "",
                                swiper._swiperImmediateVirtual = !1
                            }
                            )
                        } else {
                            if (!swiper.support.smoothScroll)
                                return animateCSSModeScroll({
                                    swiper,
                                    targetPosition: t,
                                    side: isH ? "left" : "top"
                                }),
                                !0;
                            wrapperEl.scrollTo({
                                [isH ? "left" : "top"]: t,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return swiper.setTransition(speed),
                    swiper.setTranslate(translate),
                    swiper.updateActiveIndex(slideIndex),
                    swiper.updateSlidesClasses(),
                    swiper.emit("beforeTransitionStart", speed, internal),
                    swiper.transitionStart(runCallbacks, direction),
                    0 === speed ? swiper.transitionEnd(runCallbacks, direction) : swiper.animating || (swiper.animating = !0,
                    swiper.onSlideToWrapperTransitionEnd || (swiper.onSlideToWrapperTransitionEnd = function(e) {
                        swiper && !swiper.destroyed && e.target === this && (swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd),
                        swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd),
                        swiper.onSlideToWrapperTransitionEnd = null,
                        delete swiper.onSlideToWrapperTransitionEnd,
                        swiper.transitionEnd(runCallbacks, direction))
                    }
                    ),
                    swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd),
                    swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd)),
                    !0
                },
                slideToLoop: function(index=0, speed=this.params.speed, runCallbacks=!0, internal) {
                    if ("string" == typeof index) {
                        let indexAsNumber = parseInt(index, 10)
                          , isValidNumber = isFinite(indexAsNumber);
                        if (!isValidNumber)
                            throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                        index = indexAsNumber
                    }
                    let newIndex = index;
                    return this.params.loop && (newIndex += this.loopedSlides),
                    this.slideTo(newIndex, speed, runCallbacks, internal)
                },
                slideNext: function(speed=this.params.speed, runCallbacks=!0, internal) {
                    let swiper = this
                      , {animating, enabled, params} = swiper;
                    if (!enabled)
                        return swiper;
                    let perGroup = params.slidesPerGroup;
                    "auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto && (perGroup = Math.max(swiper.slidesPerViewDynamic("current", !0), 1));
                    let increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
                    if (params.loop) {
                        if (animating && params.loopPreventsSlide)
                            return !1;
                        swiper.loopFix(),
                        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft
                    }
                    return params.rewind && swiper.isEnd ? swiper.slideTo(0, speed, runCallbacks, internal) : swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal)
                },
                slidePrev: function(speed=this.params.speed, runCallbacks=!0, internal) {
                    let swiper = this
                      , {params, animating, snapGrid, slidesGrid, rtlTranslate, enabled} = swiper;
                    if (!enabled)
                        return swiper;
                    if (params.loop) {
                        if (animating && params.loopPreventsSlide)
                            return !1;
                        swiper.loopFix(),
                        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft
                    }
                    let translate = rtlTranslate ? swiper.translate : -swiper.translate;
                    function normalize(val) {
                        return val < 0 ? -Math.floor(Math.abs(val)) : Math.floor(val)
                    }
                    let normalizedTranslate = normalize(translate)
                      , normalizedSnapGrid = snapGrid.map(val=>normalize(val))
                      , prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
                    if (void 0 === prevSnap && params.cssMode) {
                        let prevSnapIndex;
                        snapGrid.forEach((snap,snapIndex)=>{
                            normalizedTranslate >= snap && (prevSnapIndex = snapIndex)
                        }
                        ),
                        void 0 !== prevSnapIndex && (prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex])
                    }
                    let prevIndex = 0;
                    if (void 0 !== prevSnap && ((prevIndex = slidesGrid.indexOf(prevSnap)) < 0 && (prevIndex = swiper.activeIndex - 1),
                    "auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto && (prevIndex = Math.max(prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", !0) + 1, 0))),
                    params.rewind && swiper.isBeginning) {
                        let lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                        return swiper.slideTo(lastIndex, speed, runCallbacks, internal)
                    }
                    return swiper.slideTo(prevIndex, speed, runCallbacks, internal)
                },
                slideReset: function(speed=this.params.speed, runCallbacks=!0, internal) {
                    return this.slideTo(this.activeIndex, speed, runCallbacks, internal)
                },
                slideToClosest: function(speed=this.params.speed, runCallbacks=!0, internal, threshold=.5) {
                    let index = this.activeIndex
                      , skip = Math.min(this.params.slidesPerGroupSkip, index)
                      , snapIndex = skip + Math.floor((index - skip) / this.params.slidesPerGroup)
                      , translate = this.rtlTranslate ? this.translate : -this.translate;
                    if (translate >= this.snapGrid[snapIndex]) {
                        let currentSnap = this.snapGrid[snapIndex]
                          , nextSnap = this.snapGrid[snapIndex + 1];
                        translate - currentSnap > (nextSnap - currentSnap) * threshold && (index += this.params.slidesPerGroup)
                    } else {
                        let prevSnap = this.snapGrid[snapIndex - 1]
                          , currentSnap1 = this.snapGrid[snapIndex];
                        translate - prevSnap <= (currentSnap1 - prevSnap) * threshold && (index -= this.params.slidesPerGroup)
                    }
                    return index = Math.min(index = Math.max(index, 0), this.slidesGrid.length - 1),
                    this.slideTo(index, speed, runCallbacks, internal)
                },
                slideToClickedSlide: function() {
                    let realIndex;
                    let swiper = this
                      , {params, $wrapperEl} = swiper
                      , slidesPerView = "auto" === params.slidesPerView ? swiper.slidesPerViewDynamic() : params.slidesPerView
                      , slideToIndex = swiper.clickedIndex;
                    if (params.loop) {
                        if (swiper.animating)
                            return;
                        realIndex = parseInt(dom7_esm_$(swiper.clickedSlide).attr("data-swiper-slide-index"), 10),
                        params.centeredSlides ? slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2 ? (swiper.loopFix(),
                        slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index(),
                        utils_nextTick(()=>{
                            swiper.slideTo(slideToIndex)
                        }
                        )) : swiper.slideTo(slideToIndex) : slideToIndex > swiper.slides.length - slidesPerView ? (swiper.loopFix(),
                        slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index(),
                        utils_nextTick(()=>{
                            swiper.slideTo(slideToIndex)
                        }
                        )) : swiper.slideTo(slideToIndex)
                    } else
                        swiper.slideTo(slideToIndex)
                }
            },
            loop: {
                loopCreate: function() {
                    let swiper = this
                      , document1 = ssr_window_esm_getDocument()
                      , {params, $wrapperEl} = swiper
                      , $selector = $wrapperEl.children().length > 0 ? dom7_esm_$($wrapperEl.children()[0].parentNode) : $wrapperEl;
                    $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
                    let slides = $selector.children(`.${params.slideClass}`);
                    if (params.loopFillGroupWithBlank) {
                        let blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
                        if (blankSlidesNum !== params.slidesPerGroup) {
                            for (let i = 0; i < blankSlidesNum; i += 1) {
                                let blankNode = dom7_esm_$(document1.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                                $selector.append(blankNode)
                            }
                            slides = $selector.children(`.${params.slideClass}`)
                        }
                    }
                    "auto" !== params.slidesPerView || params.loopedSlides || (params.loopedSlides = slides.length),
                    swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10)),
                    swiper.loopedSlides += params.loopAdditionalSlides,
                    swiper.loopedSlides > slides.length && swiper.params.loopedSlidesLimit && (swiper.loopedSlides = slides.length);
                    let prependSlides = []
                      , appendSlides = [];
                    slides.each((el,index)=>{
                        let slide = dom7_esm_$(el);
                        slide.attr("data-swiper-slide-index", index)
                    }
                    );
                    for (let i1 = 0; i1 < swiper.loopedSlides; i1 += 1) {
                        let index = i1 - Math.floor(i1 / slides.length) * slides.length;
                        appendSlides.push(slides.eq(index)[0]),
                        prependSlides.unshift(slides.eq(slides.length - index - 1)[0])
                    }
                    for (let i2 = 0; i2 < appendSlides.length; i2 += 1)
                        $selector.append(dom7_esm_$(appendSlides[i2].cloneNode(!0)).addClass(params.slideDuplicateClass));
                    for (let i3 = prependSlides.length - 1; i3 >= 0; i3 -= 1)
                        $selector.prepend(dom7_esm_$(prependSlides[i3].cloneNode(!0)).addClass(params.slideDuplicateClass))
                },
                loopFix: function() {
                    let newIndex;
                    let swiper = this;
                    swiper.emit("beforeLoopFix");
                    let {activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl} = swiper;
                    swiper.allowSlidePrev = !0,
                    swiper.allowSlideNext = !0;
                    let snapTranslate = -snapGrid[activeIndex]
                      , diff = snapTranslate - swiper.getTranslate();
                    if (activeIndex < loopedSlides) {
                        newIndex = slides.length - 3 * loopedSlides + activeIndex + loopedSlides;
                        let slideChanged = swiper.slideTo(newIndex, 0, !1, !0);
                        slideChanged && 0 !== diff && swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff)
                    } else if (activeIndex >= slides.length - loopedSlides) {
                        newIndex = -slides.length + activeIndex + loopedSlides + loopedSlides;
                        let slideChanged1 = swiper.slideTo(newIndex, 0, !1, !0);
                        slideChanged1 && 0 !== diff && swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff)
                    }
                    swiper.allowSlidePrev = allowSlidePrev,
                    swiper.allowSlideNext = allowSlideNext,
                    swiper.emit("loopFix")
                },
                loopDestroy: function() {
                    let {$wrapperEl, params, slides} = this;
                    $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove(),
                    slides.removeAttr("data-swiper-slide-index")
                }
            },
            grabCursor: {
                setGrabCursor: function(moving) {
                    if (this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)
                        return;
                    let el = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;
                    el.style.cursor = "move",
                    el.style.cursor = moving ? "grabbing" : "grab"
                },
                unsetGrabCursor: function() {
                    let swiper = this;
                    swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode || (swiper["container" === swiper.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                }
            },
            events: {
                attachEvents: function() {
                    let swiper = this
                      , document1 = ssr_window_esm_getDocument()
                      , {params, support} = swiper;
                    swiper.onTouchStart = onTouchStart.bind(swiper),
                    swiper.onTouchMove = onTouchMove.bind(swiper),
                    swiper.onTouchEnd = onTouchEnd.bind(swiper),
                    params.cssMode && (swiper.onScroll = onScroll.bind(swiper)),
                    swiper.onClick = onClick.bind(swiper),
                    support.touch && !dummyEventAttached && (document1.addEventListener("touchstart", dummyEventListener),
                    dummyEventAttached = !0),
                    events(swiper, "on")
                },
                detachEvents: function() {
                    events(this, "off")
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    let swiper = this
                      , {activeIndex, initialized, loopedSlides=0, params, $el} = swiper
                      , breakpoints = params.breakpoints;
                    if (!breakpoints || breakpoints && 0 === Object.keys(breakpoints).length)
                        return;
                    let breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
                    if (!breakpoint || swiper.currentBreakpoint === breakpoint)
                        return;
                    let breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0
                      , breakpointParams = breakpointOnlyParams || swiper.originalParams
                      , wasMultiRow = isGridEnabled(swiper, params)
                      , isMultiRow = isGridEnabled(swiper, breakpointParams)
                      , wasEnabled = params.enabled;
                    wasMultiRow && !isMultiRow ? ($el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`),
                    swiper.emitContainerClasses()) : !wasMultiRow && isMultiRow && ($el.addClass(`${params.containerModifierClass}grid`),
                    (breakpointParams.grid.fill && "column" === breakpointParams.grid.fill || !breakpointParams.grid.fill && "column" === params.grid.fill) && $el.addClass(`${params.containerModifierClass}grid-column`),
                    swiper.emitContainerClasses()),
                    ["navigation", "pagination", "scrollbar"].forEach(prop=>{
                        let wasModuleEnabled = params[prop] && params[prop].enabled
                          , isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                        wasModuleEnabled && !isModuleEnabled && swiper[prop].disable(),
                        !wasModuleEnabled && isModuleEnabled && swiper[prop].enable()
                    }
                    );
                    let directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction
                      , needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
                    directionChanged && initialized && swiper.changeDirection(),
                    utils_extend(swiper.params, breakpointParams);
                    let isEnabled = swiper.params.enabled;
                    Object.assign(swiper, {
                        allowTouchMove: swiper.params.allowTouchMove,
                        allowSlideNext: swiper.params.allowSlideNext,
                        allowSlidePrev: swiper.params.allowSlidePrev
                    }),
                    wasEnabled && !isEnabled ? swiper.disable() : !wasEnabled && isEnabled && swiper.enable(),
                    swiper.currentBreakpoint = breakpoint,
                    swiper.emit("_beforeBreakpoint", breakpointParams),
                    needsReLoop && initialized && (swiper.loopDestroy(),
                    swiper.loopCreate(),
                    swiper.updateSlides(),
                    swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, !1)),
                    swiper.emit("breakpoint", breakpointParams)
                },
                getBreakpoint: function(breakpoints, base="window", containerEl) {
                    if (!breakpoints || "container" === base && !containerEl)
                        return;
                    let breakpoint = !1
                      , window1 = ssr_window_esm_getWindow()
                      , currentHeight = "window" === base ? window1.innerHeight : containerEl.clientHeight
                      , points = Object.keys(breakpoints).map(point=>{
                        if ("string" == typeof point && 0 === point.indexOf("@")) {
                            let minRatio = parseFloat(point.substr(1));
                            return {
                                value: currentHeight * minRatio,
                                point
                            }
                        }
                        return {
                            value: point,
                            point
                        }
                    }
                    );
                    points.sort((a,b)=>parseInt(a.value, 10) - parseInt(b.value, 10));
                    for (let i = 0; i < points.length; i += 1) {
                        let {point, value} = points[i];
                        "window" === base ? window1.matchMedia(`(min-width: ${value}px)`).matches && (breakpoint = point) : value <= containerEl.clientWidth && (breakpoint = point)
                    }
                    return breakpoint || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    let swiper = this
                      , {isLocked: wasLocked, params} = swiper
                      , {slidesOffsetBefore} = params;
                    if (slidesOffsetBefore) {
                        let lastSlideIndex = swiper.slides.length - 1
                          , lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + 2 * slidesOffsetBefore;
                        swiper.isLocked = swiper.size > lastSlideRightEdge
                    } else
                        swiper.isLocked = 1 === swiper.snapGrid.length;
                    !0 === params.allowSlideNext && (swiper.allowSlideNext = !swiper.isLocked),
                    !0 === params.allowSlidePrev && (swiper.allowSlidePrev = !swiper.isLocked),
                    wasLocked && wasLocked !== swiper.isLocked && (swiper.isEnd = !1),
                    wasLocked !== swiper.isLocked && swiper.emit(swiper.isLocked ? "lock" : "unlock")
                }
            },
            classes: {
                addClasses: function() {
                    let {classNames, params, rtl, $el, device, support} = this
                      , suffixes = function(entries, prefix) {
                        let resultClasses = [];
                        return entries.forEach(item=>{
                            "object" == typeof item ? Object.keys(item).forEach(classNames=>{
                                item[classNames] && resultClasses.push(prefix + classNames)
                            }
                            ) : "string" == typeof item && resultClasses.push(prefix + item)
                        }
                        ),
                        resultClasses
                    }(["initialized", params.direction, {
                        "pointer-events": !support.touch
                    }, {
                        "free-mode": this.params.freeMode && params.freeMode.enabled
                    }, {
                        autoheight: params.autoHeight
                    }, {
                        rtl: rtl
                    }, {
                        grid: params.grid && params.grid.rows > 1
                    }, {
                        "grid-column": params.grid && params.grid.rows > 1 && "column" === params.grid.fill
                    }, {
                        android: device.android
                    }, {
                        ios: device.ios
                    }, {
                        "css-mode": params.cssMode
                    }, {
                        centered: params.cssMode && params.centeredSlides
                    }, {
                        "watch-progress": params.watchSlidesProgress
                    }], params.containerModifierClass);
                    classNames.push(...suffixes),
                    $el.addClass([...classNames].join(" ")),
                    this.emitContainerClasses()
                },
                removeClasses: function() {
                    let {$el, classNames} = this;
                    $el.removeClass(classNames.join(" ")),
                    this.emitContainerClasses()
                }
            },
            images: {
                loadImage: function(imageEl, src, srcset, sizes, checkForComplete, callback) {
                    let image;
                    let window1 = ssr_window_esm_getWindow();
                    function onReady() {
                        callback && callback()
                    }
                    let isPicture = dom7_esm_$(imageEl).parent("picture")[0];
                    isPicture || imageEl.complete && checkForComplete ? onReady() : src ? ((image = new window1.Image).onload = onReady,
                    image.onerror = onReady,
                    sizes && (image.sizes = sizes),
                    srcset && (image.srcset = srcset),
                    src && (image.src = src)) : onReady()
                },
                preloadImages: function() {
                    let swiper = this;
                    function onReady() {
                        null != swiper && swiper && !swiper.destroyed && (void 0 !== swiper.imagesLoaded && (swiper.imagesLoaded += 1),
                        swiper.imagesLoaded === swiper.imagesToLoad.length && (swiper.params.updateOnImagesReady && swiper.update(),
                        swiper.emit("imagesReady")))
                    }
                    swiper.imagesToLoad = swiper.$el.find("img");
                    for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
                        let imageEl = swiper.imagesToLoad[i];
                        swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), !0, onReady)
                    }
                }
            }
        }
          , extendedDefaults = {};
        class Swiper {
            constructor(...args) {
                let el, params;
                if (1 === args.length && args[0].constructor && "Object" === Object.prototype.toString.call(args[0]).slice(8, -1) ? params = args[0] : [el,params] = args,
                params || (params = {}),
                params = utils_extend({}, params),
                el && !params.el && (params.el = el),
                params.el && dom7_esm_$(params.el).length > 1) {
                    let swipers = [];
                    return dom7_esm_$(params.el).each(containerEl=>{
                        let newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new Swiper(newParams))
                    }
                    ),
                    swipers
                }
                let swiper = this;
                swiper.__swiper__ = !0,
                swiper.support = getSupport(),
                swiper.device = function(overrides={}) {
                    return deviceCached || (deviceCached = function({userAgent}={}) {
                        let support = getSupport()
                          , window1 = ssr_window_esm_getWindow()
                          , platform = window1.navigator.platform
                          , ua = userAgent || window1.navigator.userAgent
                          , device = {
                            ios: !1,
                            android: !1
                        }
                          , screenWidth = window1.screen.width
                          , screenHeight = window1.screen.height
                          , android = ua.match(/(Android);?[\s\/]+([\d.]+)?/)
                          , ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
                          , ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/)
                          , iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
                          , macos = "MacIntel" === platform;
                        return !ipad && macos && support.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${screenWidth}x${screenHeight}`) >= 0 && ((ipad = ua.match(/(Version)\/([\d.]+)/)) || (ipad = [0, 1, "13_0_0"]),
                        macos = !1),
                        android && "Win32" !== platform && (device.os = "android",
                        device.android = !0),
                        (ipad || iphone || ipod) && (device.os = "ios",
                        device.ios = !0),
                        device
                    }(overrides)),
                    deviceCached
                }({
                    userAgent: params.userAgent
                }),
                swiper.browser = (browser || (browser = function() {
                    let window1 = ssr_window_esm_getWindow();
                    return {
                        isSafari: function() {
                            let ua = window1.navigator.userAgent.toLowerCase();
                            return ua.indexOf("safari") >= 0 && 0 > ua.indexOf("chrome") && 0 > ua.indexOf("android")
                        }(),
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window1.navigator.userAgent)
                    }
                }()),
                browser),
                swiper.eventsListeners = {},
                swiper.eventsAnyListeners = [],
                swiper.modules = [...swiper.__modules__],
                params.modules && Array.isArray(params.modules) && swiper.modules.push(...params.modules);
                let allModulesParams = {};
                swiper.modules.forEach(mod=>{
                    var params1;
                    mod({
                        swiper,
                        extendParams: (params1 = params,
                        function(obj={}) {
                            let moduleParamName = Object.keys(obj)[0]
                              , moduleParams = obj[moduleParamName];
                            if ("object" != typeof moduleParams || null === moduleParams || (["navigation", "pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && !0 === params1[moduleParamName] && (params1[moduleParamName] = {
                                auto: !0
                            }),
                            !(moduleParamName in params1 && "enabled"in moduleParams))) {
                                utils_extend(allModulesParams, obj);
                                return
                            }
                            !0 === params1[moduleParamName] && (params1[moduleParamName] = {
                                enabled: !0
                            }),
                            "object" != typeof params1[moduleParamName] || "enabled"in params1[moduleParamName] || (params1[moduleParamName].enabled = !0),
                            params1[moduleParamName] || (params1[moduleParamName] = {
                                enabled: !1
                            }),
                            utils_extend(allModulesParams, obj)
                        }
                        ),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    })
                }
                );
                let swiperParams = utils_extend({}, defaults, allModulesParams);
                return swiper.params = utils_extend({}, swiperParams, extendedDefaults, params),
                swiper.originalParams = utils_extend({}, swiper.params),
                swiper.passedParams = utils_extend({}, params),
                swiper.params && swiper.params.on && Object.keys(swiper.params.on).forEach(eventName=>{
                    swiper.on(eventName, swiper.params.on[eventName])
                }
                ),
                swiper.params && swiper.params.onAny && swiper.onAny(swiper.params.onAny),
                swiper.$ = dom7_esm_$,
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: dom7_esm_$(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: ()=>"horizontal" === swiper.params.direction,
                    isVertical: ()=>"vertical" === swiper.params.direction,
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEvents: (swiper.touchEventsTouch = {
                        start: "touchstart",
                        move: "touchmove",
                        end: "touchend",
                        cancel: "touchcancel"
                    },
                    swiper.touchEventsDesktop = {
                        start: "pointerdown",
                        move: "pointermove",
                        end: "pointerup"
                    },
                    swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: utils_now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                swiper.emit("_swiper"),
                swiper.params.init && swiper.init(),
                swiper
            }
            enable() {
                let swiper = this;
                swiper.enabled || (swiper.enabled = !0,
                swiper.params.grabCursor && swiper.setGrabCursor(),
                swiper.emit("enable"))
            }
            disable() {
                let swiper = this;
                swiper.enabled && (swiper.enabled = !1,
                swiper.params.grabCursor && swiper.unsetGrabCursor(),
                swiper.emit("disable"))
            }
            setProgress(progress, speed) {
                progress = Math.min(Math.max(progress, 0), 1);
                let min = this.minTranslate()
                  , max = this.maxTranslate()
                  , current = (max - min) * progress + min;
                this.translateTo(current, void 0 === speed ? 0 : speed),
                this.updateActiveIndex(),
                this.updateSlidesClasses()
            }
            emitContainerClasses() {
                let swiper = this;
                if (!swiper.params._emitClasses || !swiper.el)
                    return;
                let cls = swiper.el.className.split(" ").filter(className=>0 === className.indexOf("swiper") || 0 === className.indexOf(swiper.params.containerModifierClass));
                swiper.emit("_containerClasses", cls.join(" "))
            }
            getSlideClasses(slideEl) {
                let swiper = this;
                return swiper.destroyed ? "" : slideEl.className.split(" ").filter(className=>0 === className.indexOf("swiper-slide") || 0 === className.indexOf(swiper.params.slideClass)).join(" ")
            }
            emitSlidesClasses() {
                let swiper = this;
                if (!swiper.params._emitClasses || !swiper.el)
                    return;
                let updates = [];
                swiper.slides.each(slideEl=>{
                    let classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    }),
                    swiper.emit("_slideClass", slideEl, classNames)
                }
                ),
                swiper.emit("_slideClasses", updates)
            }
            slidesPerViewDynamic(view="current", exact=!1) {
                let {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = this
                  , spv = 1;
                if (params.centeredSlides) {
                    let breakLoop, slideSize = slides[activeIndex].swiperSlideSize;
                    for (let i = activeIndex + 1; i < slides.length; i += 1)
                        slides[i] && !breakLoop && (slideSize += slides[i].swiperSlideSize,
                        spv += 1,
                        slideSize > swiperSize && (breakLoop = !0));
                    for (let i1 = activeIndex - 1; i1 >= 0; i1 -= 1)
                        slides[i1] && !breakLoop && (slideSize += slides[i1].swiperSlideSize,
                        spv += 1,
                        slideSize > swiperSize && (breakLoop = !0))
                } else if ("current" === view)
                    for (let i2 = activeIndex + 1; i2 < slides.length; i2 += 1) {
                        let slideInView = exact ? slidesGrid[i2] + slidesSizesGrid[i2] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i2] - slidesGrid[activeIndex] < swiperSize;
                        slideInView && (spv += 1)
                    }
                else
                    for (let i3 = activeIndex - 1; i3 >= 0; i3 -= 1) {
                        let slideInView1 = slidesGrid[activeIndex] - slidesGrid[i3] < swiperSize;
                        slideInView1 && (spv += 1)
                    }
                return spv
            }
            update() {
                let swiper = this;
                if (!swiper || swiper.destroyed)
                    return;
                let {snapGrid, params} = swiper;
                function setTranslate() {
                    let translateValue = swiper.rtlTranslate ? -1 * swiper.translate : swiper.translate
                      , newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate),
                    swiper.updateActiveIndex(),
                    swiper.updateSlidesClasses()
                }
                params.breakpoints && swiper.setBreakpoint(),
                swiper.updateSize(),
                swiper.updateSlides(),
                swiper.updateProgress(),
                swiper.updateSlidesClasses(),
                swiper.params.freeMode && swiper.params.freeMode.enabled ? (setTranslate(),
                swiper.params.autoHeight && swiper.updateAutoHeight()) : (("auto" === swiper.params.slidesPerView || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides ? swiper.slideTo(swiper.slides.length - 1, 0, !1, !0) : swiper.slideTo(swiper.activeIndex, 0, !1, !0)) || setTranslate(),
                params.watchOverflow && snapGrid !== swiper.snapGrid && swiper.checkOverflow(),
                swiper.emit("update")
            }
            changeDirection(newDirection, needUpdate=!0) {
                let swiper = this
                  , currentDirection = swiper.params.direction;
                return newDirection || (newDirection = "horizontal" === currentDirection ? "vertical" : "horizontal"),
                newDirection === currentDirection || "horizontal" !== newDirection && "vertical" !== newDirection || (swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`),
                swiper.emitContainerClasses(),
                swiper.params.direction = newDirection,
                swiper.slides.each(slideEl=>{
                    "vertical" === newDirection ? slideEl.style.width = "" : slideEl.style.height = ""
                }
                ),
                swiper.emit("changeDirection"),
                needUpdate && swiper.update()),
                swiper
            }
            changeLanguageDirection(direction) {
                let swiper = this;
                (!swiper.rtl || "rtl" !== direction) && (swiper.rtl || "ltr" !== direction) && (swiper.rtl = "rtl" === direction,
                swiper.rtlTranslate = "horizontal" === swiper.params.direction && swiper.rtl,
                swiper.rtl ? (swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`),
                swiper.el.dir = "rtl") : (swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`),
                swiper.el.dir = "ltr"),
                swiper.update())
            }
            mount(el) {
                let swiper = this;
                if (swiper.mounted)
                    return !0;
                let $el = dom7_esm_$(el || swiper.params.el);
                if (!(el = $el[0]))
                    return !1;
                el.swiper = swiper;
                let getWrapperSelector = ()=>`.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`
                  , $wrapperEl = (()=>{
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        let res = dom7_esm_$(el.shadowRoot.querySelector(getWrapperSelector()));
                        return res.children = options=>$el.children(options),
                        res
                    }
                    return $el.children ? $el.children(getWrapperSelector()) : dom7_esm_$($el).children(getWrapperSelector())
                }
                )();
                if (0 === $wrapperEl.length && swiper.params.createElements) {
                    let document1 = ssr_window_esm_getDocument()
                      , wrapper = document1.createElement("div");
                    $wrapperEl = dom7_esm_$(wrapper),
                    wrapper.className = swiper.params.wrapperClass,
                    $el.append(wrapper),
                    $el.children(`.${swiper.params.slideClass}`).each(slideEl=>{
                        $wrapperEl.append(slideEl)
                    }
                    )
                }
                return Object.assign(swiper, {
                    $el,
                    el,
                    $wrapperEl,
                    wrapperEl: $wrapperEl[0],
                    mounted: !0,
                    rtl: "rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction"),
                    rtlTranslate: "horizontal" === swiper.params.direction && ("rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction")),
                    wrongRTL: "-webkit-box" === $wrapperEl.css("display")
                }),
                !0
            }
            init(el) {
                let swiper = this;
                if (swiper.initialized)
                    return swiper;
                let mounted = swiper.mount(el);
                return !1 === mounted || (swiper.emit("beforeInit"),
                swiper.params.breakpoints && swiper.setBreakpoint(),
                swiper.addClasses(),
                swiper.params.loop && swiper.loopCreate(),
                swiper.updateSize(),
                swiper.updateSlides(),
                swiper.params.watchOverflow && swiper.checkOverflow(),
                swiper.params.grabCursor && swiper.enabled && swiper.setGrabCursor(),
                swiper.params.preloadImages && swiper.preloadImages(),
                swiper.params.loop ? swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, !1, !0) : swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, !1, !0),
                swiper.attachEvents(),
                swiper.initialized = !0,
                swiper.emit("init"),
                swiper.emit("afterInit")),
                swiper
            }
            destroy(deleteInstance=!0, cleanStyles=!0) {
                let swiper = this
                  , {params, $el, $wrapperEl, slides} = swiper;
                return void 0 === swiper.params || swiper.destroyed || (swiper.emit("beforeDestroy"),
                swiper.initialized = !1,
                swiper.detachEvents(),
                params.loop && swiper.loopDestroy(),
                cleanStyles && (swiper.removeClasses(),
                $el.removeAttr("style"),
                $wrapperEl.removeAttr("style"),
                slides && slides.length && slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                swiper.emit("destroy"),
                Object.keys(swiper.eventsListeners).forEach(eventName=>{
                    swiper.off(eventName)
                }
                ),
                !1 !== deleteInstance && (swiper.$el[0].swiper = null,
                function(obj) {
                    let object = obj;
                    Object.keys(object).forEach(key=>{
                        try {
                            object[key] = null
                        } catch (e) {}
                        try {
                            delete object[key]
                        } catch (e1) {}
                    }
                    )
                }(swiper)),
                swiper.destroyed = !0),
                null
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults)
            }
            static get extendedDefaults() {
                return extendedDefaults
            }
            static get defaults() {
                return defaults
            }
            static installModule(mod) {
                Swiper.prototype.__modules__ || (Swiper.prototype.__modules__ = []);
                let modules = Swiper.prototype.__modules__;
                "function" == typeof mod && 0 > modules.indexOf(mod) && modules.push(mod)
            }
            static use(module) {
                return Array.isArray(module) ? (module.forEach(m=>Swiper.installModule(m)),
                Swiper) : (Swiper.installModule(module),
                Swiper)
            }
        }
        Object.keys(prototypes).forEach(prototypeGroup=>{
            Object.keys(prototypes[prototypeGroup]).forEach(protoMethod=>{
                Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod]
            }
            )
        }
        ),
        Swiper.use([function({swiper, on, emit}) {
            let window1 = ssr_window_esm_getWindow()
              , observer = null
              , animationFrame = null
              , resizeHandler = ()=>{
                swiper && !swiper.destroyed && swiper.initialized && (emit("beforeResize"),
                emit("resize"))
            }
              , createObserver = ()=>{
                swiper && !swiper.destroyed && swiper.initialized && (observer = new ResizeObserver(entries=>{
                    animationFrame = window1.requestAnimationFrame(()=>{
                        let {width, height} = swiper
                          , newWidth = width
                          , newHeight = height;
                        entries.forEach(({contentBoxSize, contentRect, target})=>{
                            target && target !== swiper.el || (newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize,
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize)
                        }
                        ),
                        (newWidth !== width || newHeight !== height) && resizeHandler()
                    }
                    )
                }
                )).observe(swiper.el)
            }
              , removeObserver = ()=>{
                animationFrame && window1.cancelAnimationFrame(animationFrame),
                observer && observer.unobserve && swiper.el && (observer.unobserve(swiper.el),
                observer = null)
            }
              , orientationChangeHandler = ()=>{
                swiper && !swiper.destroyed && swiper.initialized && emit("orientationchange")
            }
            ;
            on("init", ()=>{
                if (swiper.params.resizeObserver && void 0 !== window1.ResizeObserver) {
                    createObserver();
                    return
                }
                window1.addEventListener("resize", resizeHandler),
                window1.addEventListener("orientationchange", orientationChangeHandler)
            }
            ),
            on("destroy", ()=>{
                removeObserver(),
                window1.removeEventListener("resize", resizeHandler),
                window1.removeEventListener("orientationchange", orientationChangeHandler)
            }
            )
        }
        , function({swiper, extendParams, on, emit}) {
            let observers = []
              , window1 = ssr_window_esm_getWindow()
              , attach = (target,options={})=>{
                let ObserverFunc = window1.MutationObserver || window1.WebkitMutationObserver
                  , observer = new ObserverFunc(mutations=>{
                    if (1 === mutations.length) {
                        emit("observerUpdate", mutations[0]);
                        return
                    }
                    let observerUpdate = function() {
                        emit("observerUpdate", mutations[0])
                    };
                    window1.requestAnimationFrame ? window1.requestAnimationFrame(observerUpdate) : window1.setTimeout(observerUpdate, 0)
                }
                );
                observer.observe(target, {
                    attributes: void 0 === options.attributes || options.attributes,
                    childList: void 0 === options.childList || options.childList,
                    characterData: void 0 === options.characterData || options.characterData
                }),
                observers.push(observer)
            }
              , init = ()=>{
                if (swiper.params.observer) {
                    if (swiper.params.observeParents) {
                        let containerParents = swiper.$el.parents();
                        for (let i = 0; i < containerParents.length; i += 1)
                            attach(containerParents[i])
                    }
                    attach(swiper.$el[0], {
                        childList: swiper.params.observeSlideChildren
                    }),
                    attach(swiper.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            }
              , destroy = ()=>{
                observers.forEach(observer=>{
                    observer.disconnect()
                }
                ),
                observers.splice(0, observers.length)
            }
            ;
            extendParams({
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            }),
            on("init", init),
            on("destroy", destroy)
        }
        ]);
        var core = Swiper;
        function classesToSelector(classes="") {
            return `.${classes.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
        }
        function Pagination({swiper, extendParams, on, emit}) {
            let bulletSize;
            let pfx = "swiper-pagination";
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: number=>number,
                    formatFractionTotal: number=>number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`,
                    paginationDisabledClass: `${pfx}-disabled`
                }
            }),
            swiper.pagination = {
                el: null,
                $el: null,
                bullets: []
            };
            let dynamicBulletIndex = 0;
            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || 0 === swiper.pagination.$el.length
            }
            function setSideBullets($bulletEl, position) {
                let {bulletActiveClass} = swiper.params.pagination;
                $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`)
            }
            function update() {
                let current;
                let rtl = swiper.rtl
                  , params = swiper.params.pagination;
                if (isPaginationDisabled())
                    return;
                let slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length
                  , $el = swiper.pagination.$el
                  , total = swiper.params.loop ? Math.ceil((slidesLength - 2 * swiper.loopedSlides) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop ? ((current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup)) > slidesLength - 1 - 2 * swiper.loopedSlides && (current -= slidesLength - 2 * swiper.loopedSlides),
                current > total - 1 && (current -= total),
                current < 0 && "bullets" !== swiper.params.paginationType && (current = total + current)) : current = void 0 !== swiper.snapIndex ? swiper.snapIndex : swiper.activeIndex || 0,
                "bullets" === params.type && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    let firstIndex, lastIndex, midIndex;
                    let bullets = swiper.pagination.bullets;
                    if (params.dynamicBullets && (bulletSize = bullets.eq(0)[swiper.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                    $el.css(swiper.isHorizontal() ? "width" : "height", `${bulletSize * (params.dynamicMainBullets + 4)}px`),
                    params.dynamicMainBullets > 1 && void 0 !== swiper.previousIndex && ((dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0)) > params.dynamicMainBullets - 1 ? dynamicBulletIndex = params.dynamicMainBullets - 1 : dynamicBulletIndex < 0 && (dynamicBulletIndex = 0)),
                    midIndex = ((lastIndex = (firstIndex = Math.max(current - dynamicBulletIndex, 0)) + (Math.min(bullets.length, params.dynamicMainBullets) - 1)) + firstIndex) / 2),
                    bullets.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(suffix=>`${params.bulletActiveClass}${suffix}`).join(" ")),
                    $el.length > 1)
                        bullets.each(bullet=>{
                            let $bullet = dom7_esm_$(bullet)
                              , bulletIndex = $bullet.index();
                            bulletIndex === current && $bullet.addClass(params.bulletActiveClass),
                            params.dynamicBullets && (bulletIndex >= firstIndex && bulletIndex <= lastIndex && $bullet.addClass(`${params.bulletActiveClass}-main`),
                            bulletIndex === firstIndex && setSideBullets($bullet, "prev"),
                            bulletIndex === lastIndex && setSideBullets($bullet, "next"))
                        }
                        );
                    else {
                        let $bullet = bullets.eq(current)
                          , bulletIndex = $bullet.index();
                        if ($bullet.addClass(params.bulletActiveClass),
                        params.dynamicBullets) {
                            let $firstDisplayedBullet = bullets.eq(firstIndex)
                              , $lastDisplayedBullet = bullets.eq(lastIndex);
                            for (let i = firstIndex; i <= lastIndex; i += 1)
                                bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
                            if (swiper.params.loop) {
                                if (bulletIndex >= bullets.length) {
                                    for (let i1 = params.dynamicMainBullets; i1 >= 0; i1 -= 1)
                                        bullets.eq(bullets.length - i1).addClass(`${params.bulletActiveClass}-main`);
                                    bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`)
                                } else
                                    setSideBullets($firstDisplayedBullet, "prev"),
                                    setSideBullets($lastDisplayedBullet, "next")
                            } else
                                setSideBullets($firstDisplayedBullet, "prev"),
                                setSideBullets($lastDisplayedBullet, "next")
                        }
                    }
                    if (params.dynamicBullets) {
                        let dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        bullets.css(swiper.isHorizontal() ? rtl ? "right" : "left" : "top", `${(bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize}px`)
                    }
                }
                if ("fraction" === params.type && ($el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1)),
                $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total))),
                "progressbar" === params.type) {
                    let progressbarDirection;
                    progressbarDirection = params.progressbarOpposite ? swiper.isHorizontal() ? "vertical" : "horizontal" : swiper.isHorizontal() ? "horizontal" : "vertical";
                    let scale = (current + 1) / total
                      , scaleX = 1
                      , scaleY = 1;
                    "horizontal" === progressbarDirection ? scaleX = scale : scaleY = scale,
                    $el.find(classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed)
                }
                "custom" === params.type && params.renderCustom ? ($el.html(params.renderCustom(swiper, current + 1, total)),
                emit("paginationRender", $el[0])) : emit("paginationUpdate", $el[0]),
                swiper.params.watchOverflow && swiper.enabled && $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass)
            }
            function render() {
                let params = swiper.params.pagination;
                if (isPaginationDisabled())
                    return;
                let slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length
                  , $el = swiper.pagination.$el
                  , paginationHTML = "";
                if ("bullets" === params.type) {
                    let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - 2 * swiper.loopedSlides) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength && (numberOfBullets = slidesLength);
                    for (let i = 0; i < numberOfBullets; i += 1)
                        params.renderBullet ? paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass) : paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
                    $el.html(paginationHTML),
                    swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass))
                }
                "fraction" === params.type && (paginationHTML = params.renderFraction ? params.renderFraction.call(swiper, params.currentClass, params.totalClass) : `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`,
                $el.html(paginationHTML)),
                "progressbar" === params.type && (paginationHTML = params.renderProgressbar ? params.renderProgressbar.call(swiper, params.progressbarFillClass) : `<span class="${params.progressbarFillClass}"></span>`,
                $el.html(paginationHTML)),
                "custom" !== params.type && emit("paginationRender", swiper.pagination.$el[0])
            }
            function init() {
                swiper.params.pagination = function(swiper, originalParams, params, checkProps) {
                    let document1 = ssr_window_esm_getDocument();
                    return swiper.params.createElements && Object.keys(checkProps).forEach(key=>{
                        if (!params[key] && !0 === params.auto) {
                            let element = swiper.$el.children(`.${checkProps[key]}`)[0];
                            element || ((element = document1.createElement("div")).className = checkProps[key],
                            swiper.$el.append(element)),
                            params[key] = element,
                            originalParams[key] = element
                        }
                    }
                    ),
                    params
                }(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: "swiper-pagination"
                });
                let params = swiper.params.pagination;
                if (!params.el)
                    return;
                let $el = dom7_esm_$(params.el);
                0 === $el.length || (swiper.params.uniqueNavElements && "string" == typeof params.el && $el.length > 1 && ($el = swiper.$el.find(params.el)).length > 1 && ($el = $el.filter(el=>dom7_esm_$(el).parents(".swiper")[0] === swiper.el)),
                "bullets" === params.type && params.clickable && $el.addClass(params.clickableClass),
                $el.addClass(params.modifierClass + params.type),
                $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass),
                "bullets" === params.type && params.dynamicBullets && ($el.addClass(`${params.modifierClass}${params.type}-dynamic`),
                dynamicBulletIndex = 0,
                params.dynamicMainBullets < 1 && (params.dynamicMainBullets = 1)),
                "progressbar" === params.type && params.progressbarOpposite && $el.addClass(params.progressbarOppositeClass),
                params.clickable && $el.on("click", classesToSelector(params.bulletClass), function(e) {
                    e.preventDefault();
                    let index = dom7_esm_$(this).index() * swiper.params.slidesPerGroup;
                    swiper.params.loop && (index += swiper.loopedSlides),
                    swiper.slideTo(index)
                }),
                Object.assign(swiper.pagination, {
                    $el,
                    el: $el[0]
                }),
                swiper.enabled || $el.addClass(params.lockClass))
            }
            function destroy() {
                let params = swiper.params.pagination;
                if (isPaginationDisabled())
                    return;
                let $el = swiper.pagination.$el;
                $el.removeClass(params.hiddenClass),
                $el.removeClass(params.modifierClass + params.type),
                $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass),
                swiper.pagination.bullets && swiper.pagination.bullets.removeClass && swiper.pagination.bullets.removeClass(params.bulletActiveClass),
                params.clickable && $el.off("click", classesToSelector(params.bulletClass))
            }
            on("init", ()=>{
                !1 === swiper.params.pagination.enabled ? disable() : (init(),
                render(),
                update())
            }
            ),
            on("activeIndexChange", ()=>{
                swiper.params.loop ? update() : void 0 === swiper.snapIndex && update()
            }
            ),
            on("snapIndexChange", ()=>{
                swiper.params.loop || update()
            }
            ),
            on("slidesLengthChange", ()=>{
                swiper.params.loop && (render(),
                update())
            }
            ),
            on("snapGridLengthChange", ()=>{
                swiper.params.loop || (render(),
                update())
            }
            ),
            on("destroy", ()=>{
                destroy()
            }
            ),
            on("enable disable", ()=>{
                let {$el} = swiper.pagination;
                $el && $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.pagination.lockClass)
            }
            ),
            on("lock unlock", ()=>{
                update()
            }
            ),
            on("click", (_s,e)=>{
                let targetEl = e.target
                  , {$el} = swiper.pagination;
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el && $el.length > 0 && !dom7_esm_$(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl))
                        return;
                    let isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
                    !0 === isHidden ? emit("paginationShow") : emit("paginationHide"),
                    $el.toggleClass(swiper.params.pagination.hiddenClass)
                }
            }
            );
            let enable = ()=>{
                swiper.$el.removeClass(swiper.params.pagination.paginationDisabledClass),
                swiper.pagination.$el && swiper.pagination.$el.removeClass(swiper.params.pagination.paginationDisabledClass),
                init(),
                render(),
                update()
            }
              , disable = ()=>{
                swiper.$el.addClass(swiper.params.pagination.paginationDisabledClass),
                swiper.pagination.$el && swiper.pagination.$el.addClass(swiper.params.pagination.paginationDisabledClass),
                destroy()
            }
            ;
            Object.assign(swiper.pagination, {
                enable,
                disable,
                render,
                update,
                init,
                destroy
            })
        }
        function A11y({swiper, extendParams, on}) {
            extendParams({
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    slideLabelMessage: "{{index}} / {{slidesLength}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: "group",
                    id: null
                }
            }),
            swiper.a11y = {
                clicked: !1
            };
            let liveRegion = null;
            function notify(message) {
                let notification = liveRegion;
                0 !== notification.length && (notification.html(""),
                notification.html(message))
            }
            function makeElFocusable($el) {
                $el.attr("tabIndex", "0")
            }
            function makeElNotFocusable($el) {
                $el.attr("tabIndex", "-1")
            }
            function addElRole($el, role) {
                $el.attr("role", role)
            }
            function addElRoleDescription($el, description) {
                $el.attr("aria-roledescription", description)
            }
            function addElLabel($el, label) {
                $el.attr("aria-label", label)
            }
            function disableEl($el) {
                $el.attr("aria-disabled", !0)
            }
            function enableEl($el) {
                $el.attr("aria-disabled", !1)
            }
            function onEnterOrSpaceKey(e) {
                if (13 !== e.keyCode && 32 !== e.keyCode)
                    return;
                let params = swiper.params.a11y
                  , $targetEl = dom7_esm_$(e.target);
                swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl) && (swiper.isEnd && !swiper.params.loop || swiper.slideNext(),
                swiper.isEnd ? notify(params.lastSlideMessage) : notify(params.nextSlideMessage)),
                swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl) && (swiper.isBeginning && !swiper.params.loop || swiper.slidePrev(),
                swiper.isBeginning ? notify(params.firstSlideMessage) : notify(params.prevSlideMessage)),
                swiper.pagination && $targetEl.is(classesToSelector(swiper.params.pagination.bulletClass)) && $targetEl[0].click()
            }
            function hasPagination() {
                return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length
            }
            function hasClickablePagination() {
                return hasPagination() && swiper.params.pagination.clickable
            }
            let initNavEl = ($el,wrapperId,message)=>{
                makeElFocusable($el),
                "BUTTON" !== $el[0].tagName && (addElRole($el, "button"),
                $el.on("keydown", onEnterOrSpaceKey)),
                addElLabel($el, message),
                function($el, controls) {
                    $el.attr("aria-controls", controls)
                }($el, wrapperId)
            }
              , handlePointerDown = ()=>{
                swiper.a11y.clicked = !0
            }
              , handlePointerUp = ()=>{
                requestAnimationFrame(()=>{
                    requestAnimationFrame(()=>{
                        swiper.destroyed || (swiper.a11y.clicked = !1)
                    }
                    )
                }
                )
            }
              , handleFocus = e=>{
                if (swiper.a11y.clicked)
                    return;
                let slideEl = e.target.closest(`.${swiper.params.slideClass}`);
                if (!slideEl || !swiper.slides.includes(slideEl))
                    return;
                let isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex
                  , isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
                !isActive && !isVisible && (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (swiper.isHorizontal() ? swiper.el.scrollLeft = 0 : swiper.el.scrollTop = 0,
                swiper.slideTo(swiper.slides.indexOf(slideEl), 0)))
            }
              , initSlides = ()=>{
                let params = swiper.params.a11y;
                params.itemRoleDescriptionMessage && addElRoleDescription(dom7_esm_$(swiper.slides), params.itemRoleDescriptionMessage),
                params.slideRole && addElRole(dom7_esm_$(swiper.slides), params.slideRole);
                let slidesLength = swiper.params.loop ? swiper.slides.filter(el=>!el.classList.contains(swiper.params.slideDuplicateClass)).length : swiper.slides.length;
                params.slideLabelMessage && swiper.slides.each((slideEl,index)=>{
                    let $slideEl = dom7_esm_$(slideEl)
                      , slideIndex = swiper.params.loop ? parseInt($slideEl.attr("data-swiper-slide-index"), 10) : index
                      , ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
                    addElLabel($slideEl, ariaLabelMessage)
                }
                )
            }
              , init = ()=>{
                let $nextEl, $prevEl;
                let params = swiper.params.a11y;
                swiper.$el.append(liveRegion);
                let $containerEl = swiper.$el;
                params.containerRoleDescriptionMessage && addElRoleDescription($containerEl, params.containerRoleDescriptionMessage),
                params.containerMessage && addElLabel($containerEl, params.containerMessage);
                let $wrapperEl = swiper.$wrapperEl
                  , wrapperId = params.id || $wrapperEl.attr("id") || `swiper-wrapper-${function(size=16) {
                    let randomChar = ()=>Math.round(16 * Math.random()).toString(16);
                    return "x".repeat(size).replace(/x/g, randomChar)
                }(16)}`
                  , live = swiper.params.autoplay && swiper.params.autoplay.enabled ? "off" : "polite";
                !function($el, id) {
                    $el.attr("id", id)
                }($wrapperEl, wrapperId),
                function($el, live) {
                    $el.attr("aria-live", live)
                }($wrapperEl, live),
                initSlides(),
                swiper.navigation && swiper.navigation.$nextEl && ($nextEl = swiper.navigation.$nextEl),
                swiper.navigation && swiper.navigation.$prevEl && ($prevEl = swiper.navigation.$prevEl),
                $nextEl && $nextEl.length && initNavEl($nextEl, wrapperId, params.nextSlideMessage),
                $prevEl && $prevEl.length && initNavEl($prevEl, wrapperId, params.prevSlideMessage),
                hasClickablePagination() && swiper.pagination.$el.on("keydown", classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey),
                swiper.$el.on("focus", handleFocus, !0),
                swiper.$el.on("pointerdown", handlePointerDown, !0),
                swiper.$el.on("pointerup", handlePointerUp, !0)
            }
            ;
            on("beforeInit", ()=>{
                liveRegion = dom7_esm_$(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
            }
            ),
            on("afterInit", ()=>{
                swiper.params.a11y.enabled && init()
            }
            ),
            on("slidesLengthChange snapGridLengthChange slidesGridLengthChange", ()=>{
                swiper.params.a11y.enabled && initSlides()
            }
            ),
            on("fromEdge toEdge afterInit lock unlock", ()=>{
                swiper.params.a11y.enabled && function() {
                    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation)
                        return;
                    let {$nextEl, $prevEl} = swiper.navigation;
                    $prevEl && $prevEl.length > 0 && (swiper.isBeginning ? (disableEl($prevEl),
                    makeElNotFocusable($prevEl)) : (enableEl($prevEl),
                    makeElFocusable($prevEl))),
                    $nextEl && $nextEl.length > 0 && (swiper.isEnd ? (disableEl($nextEl),
                    makeElNotFocusable($nextEl)) : (enableEl($nextEl),
                    makeElFocusable($nextEl)))
                }()
            }
            ),
            on("paginationUpdate", ()=>{
                swiper.params.a11y.enabled && function() {
                    let params = swiper.params.a11y;
                    hasPagination() && swiper.pagination.bullets.each(bulletEl=>{
                        let $bulletEl = dom7_esm_$(bulletEl);
                        swiper.params.pagination.clickable && (makeElFocusable($bulletEl),
                        swiper.params.pagination.renderBullet || (addElRole($bulletEl, "button"),
                        addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1)))),
                        $bulletEl.is(`.${swiper.params.pagination.bulletActiveClass}`) ? $bulletEl.attr("aria-current", "true") : $bulletEl.removeAttr("aria-current")
                    }
                    )
                }()
            }
            ),
            on("destroy", ()=>{
                if (swiper.params.a11y.enabled) {
                    let $nextEl, $prevEl;
                    liveRegion && liveRegion.length > 0 && liveRegion.remove(),
                    swiper.navigation && swiper.navigation.$nextEl && ($nextEl = swiper.navigation.$nextEl),
                    swiper.navigation && swiper.navigation.$prevEl && ($prevEl = swiper.navigation.$prevEl),
                    $nextEl && $nextEl.off("keydown", onEnterOrSpaceKey),
                    $prevEl && $prevEl.off("keydown", onEnterOrSpaceKey),
                    hasClickablePagination() && swiper.pagination.$el.off("keydown", classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey),
                    swiper.$el.off("focus", handleFocus, !0),
                    swiper.$el.off("pointerdown", handlePointerDown, !0),
                    swiper.$el.off("pointerup", handlePointerUp, !0)
                }
            }
            )
        }
        function Autoplay({swiper, extendParams, on, emit}) {
            let timeout;
            function run() {
                if (!swiper.size) {
                    swiper.autoplay.running = !1,
                    swiper.autoplay.paused = !1;
                    return
                }
                let $activeSlideEl = swiper.slides.eq(swiper.activeIndex)
                  , delay = swiper.params.autoplay.delay;
                $activeSlideEl.attr("data-swiper-autoplay") && (delay = $activeSlideEl.attr("data-swiper-autoplay") || swiper.params.autoplay.delay),
                clearTimeout(timeout),
                timeout = utils_nextTick(()=>{
                    let autoplayResult;
                    swiper.params.autoplay.reverseDirection ? swiper.params.loop ? (swiper.loopFix(),
                    autoplayResult = swiper.slidePrev(swiper.params.speed, !0, !0),
                    emit("autoplay")) : swiper.isBeginning ? swiper.params.autoplay.stopOnLastSlide ? stop() : (autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, !0, !0),
                    emit("autoplay")) : (autoplayResult = swiper.slidePrev(swiper.params.speed, !0, !0),
                    emit("autoplay")) : swiper.params.loop ? (swiper.loopFix(),
                    autoplayResult = swiper.slideNext(swiper.params.speed, !0, !0),
                    emit("autoplay")) : swiper.isEnd ? swiper.params.autoplay.stopOnLastSlide ? stop() : (autoplayResult = swiper.slideTo(0, swiper.params.speed, !0, !0),
                    emit("autoplay")) : (autoplayResult = swiper.slideNext(swiper.params.speed, !0, !0),
                    emit("autoplay")),
                    swiper.params.cssMode && swiper.autoplay.running ? run() : !1 === autoplayResult && run()
                }
                , delay)
            }
            function start() {
                return void 0 === timeout && !swiper.autoplay.running && (swiper.autoplay.running = !0,
                emit("autoplayStart"),
                run(),
                !0)
            }
            function stop() {
                return !!swiper.autoplay.running && void 0 !== timeout && (timeout && (clearTimeout(timeout),
                timeout = void 0),
                swiper.autoplay.running = !1,
                emit("autoplayStop"),
                !0)
            }
            function pause(speed) {
                swiper.autoplay.running && (swiper.autoplay.paused || (timeout && clearTimeout(timeout),
                swiper.autoplay.paused = !0,
                0 !== speed && swiper.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(event=>{
                    swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd)
                }
                ) : (swiper.autoplay.paused = !1,
                run())))
            }
            function onVisibilityChange() {
                let document1 = ssr_window_esm_getDocument();
                "hidden" === document1.visibilityState && swiper.autoplay.running && pause(),
                "visible" === document1.visibilityState && swiper.autoplay.paused && (run(),
                swiper.autoplay.paused = !1)
            }
            function onTransitionEnd(e) {
                swiper && !swiper.destroyed && swiper.$wrapperEl && e.target === swiper.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(event=>{
                    swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd)
                }
                ),
                swiper.autoplay.paused = !1,
                swiper.autoplay.running ? run() : stop())
            }
            function onMouseEnter() {
                swiper.params.autoplay.disableOnInteraction ? stop() : (emit("autoplayPause"),
                pause()),
                ["transitionend", "webkitTransitionEnd"].forEach(event=>{
                    swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd)
                }
                )
            }
            function onMouseLeave() {
                swiper.params.autoplay.disableOnInteraction || (swiper.autoplay.paused = !1,
                emit("autoplayResume"),
                run())
            }
            swiper.autoplay = {
                running: !1,
                paused: !1
            },
            extendParams({
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1,
                    pauseOnMouseEnter: !1
                }
            }),
            on("init", ()=>{
                if (swiper.params.autoplay.enabled) {
                    start();
                    let document1 = ssr_window_esm_getDocument();
                    document1.addEventListener("visibilitychange", onVisibilityChange),
                    swiper.params.autoplay.pauseOnMouseEnter && (swiper.$el.on("mouseenter", onMouseEnter),
                    swiper.$el.on("mouseleave", onMouseLeave))
                }
            }
            ),
            on("beforeTransitionStart", (_s,speed,internal)=>{
                swiper.autoplay.running && (internal || !swiper.params.autoplay.disableOnInteraction ? swiper.autoplay.pause(speed) : stop())
            }
            ),
            on("sliderFirstMove", ()=>{
                swiper.autoplay.running && (swiper.params.autoplay.disableOnInteraction ? stop() : pause())
            }
            ),
            on("touchEnd", ()=>{
                swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction && run()
            }
            ),
            on("destroy", ()=>{
                swiper.$el.off("mouseenter", onMouseEnter),
                swiper.$el.off("mouseleave", onMouseLeave),
                swiper.autoplay.running && stop();
                let document1 = ssr_window_esm_getDocument();
                document1.removeEventListener("visibilitychange", onVisibilityChange)
            }
            ),
            Object.assign(swiper.autoplay, {
                pause,
                run,
                start,
                stop
            })
        }
    }
}]);
