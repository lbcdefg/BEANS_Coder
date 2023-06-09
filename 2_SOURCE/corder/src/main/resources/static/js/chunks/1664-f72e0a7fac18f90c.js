(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1664], {
    10227: function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.getDomainLocale = function(path, locale, locales, domainLocales) {
            return !1
        }
        ,
        ("function" == typeof exports.default || "object" == typeof exports.default && null !== exports.default) && void 0 === exports.default.__esModule && (Object.defineProperty(exports.default, "__esModule", {
            value: !0
        }),
        Object.assign(exports.default, exports),
        module.exports = exports.default)
    },
    31551: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.default = void 0;
        var _interop_require_default = __webpack_require__(23903).Z
          , _object_without_properties_loose = __webpack_require__(15154).Z
          , _react = _interop_require_default(__webpack_require__(2784))
          , _router = __webpack_require__(41003)
          , _formatUrl = __webpack_require__(67795)
          , _addLocale = __webpack_require__(54465)
          , _routerContext = __webpack_require__(72692)
          , _appRouterContext = __webpack_require__(48245)
          , _useIntersection = __webpack_require__(69246)
          , _getDomainLocale = __webpack_require__(10227)
          , _addBasePath = __webpack_require__(33468);
        let prefetched = new Set;
        function prefetch(router, href, as, options) {
            if (_router.isLocalURL(href)) {
                if (!options.bypassPrefetchedCheck) {
                    let locale = void 0 !== options.locale ? options.locale : "locale"in router ? router.locale : void 0
                      , prefetchedKey = href + "%" + as + "%" + locale;
                    if (prefetched.has(prefetchedKey))
                        return;
                    prefetched.add(prefetchedKey)
                }
                Promise.resolve(router.prefetch(href, as, options)).catch(err=>{}
                )
            }
        }
        function formatStringOrUrl(urlObjOrString) {
            return "string" == typeof urlObjOrString ? urlObjOrString : _formatUrl.formatUrl(urlObjOrString)
        }
        let Link = _react.default.forwardRef(function(props, forwardedRef) {
            let children, child;
            let {href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp, passHref, replace, shallow, scroll, locale, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior=!0 !== Boolean(!0)} = props
              , restProps = _object_without_properties_loose(props, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
            children = childrenProp,
            legacyBehavior && ("string" == typeof children || "number" == typeof children) && (children = _react.default.createElement("a", null, children));
            let prefetchEnabled = !1 !== prefetchProp
              , pagesRouter = _react.default.useContext(_routerContext.RouterContext)
              , appRouter = _react.default.useContext(_appRouterContext.AppRouterContext)
              , router = null != pagesRouter ? pagesRouter : appRouter
              , isAppRouter = !pagesRouter
              , {href, as} = _react.default.useMemo(()=>{
                if (!pagesRouter) {
                    let resolvedHref = formatStringOrUrl(hrefProp);
                    return {
                        href: resolvedHref,
                        as: asProp ? formatStringOrUrl(asProp) : resolvedHref
                    }
                }
                let[resolvedHref1,resolvedAs] = _router.resolveHref(pagesRouter, hrefProp, !0);
                return {
                    href: resolvedHref1,
                    as: asProp ? _router.resolveHref(pagesRouter, asProp) : resolvedAs || resolvedHref1
                }
            }
            , [pagesRouter, hrefProp, asProp])
              , previousHref = _react.default.useRef(href)
              , previousAs = _react.default.useRef(as);
            legacyBehavior && (child = _react.default.Children.only(children));
            let childRef = legacyBehavior ? child && "object" == typeof child && child.ref : forwardedRef
              , [setIntersectionRef,isVisible,resetVisible] = _useIntersection.useIntersection({
                rootMargin: "200px"
            })
              , setRef = _react.default.useCallback(el=>{
                (previousAs.current !== as || previousHref.current !== href) && (resetVisible(),
                previousAs.current = as,
                previousHref.current = href),
                setIntersectionRef(el),
                childRef && ("function" == typeof childRef ? childRef(el) : "object" == typeof childRef && (childRef.current = el))
            }
            , [as, childRef, href, resetVisible, setIntersectionRef]);
            _react.default.useEffect(()=>{
                router && isVisible && prefetchEnabled && prefetch(router, href, as, {
                    locale
                })
            }
            , [as, href, isVisible, locale, prefetchEnabled, null == pagesRouter ? void 0 : pagesRouter.locale, router]);
            let childProps = {
                ref: setRef,
                onClick(e) {
                    legacyBehavior || "function" != typeof onClick || onClick(e),
                    legacyBehavior && child.props && "function" == typeof child.props.onClick && child.props.onClick(e),
                    router && !e.defaultPrevented && function(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled) {
                        let {nodeName} = e.currentTarget
                          , isAnchorNodeName = "A" === nodeName.toUpperCase();
                        if (isAnchorNodeName && (function(event) {
                            let {target} = event.currentTarget;
                            return target && "_self" !== target || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && 2 === event.nativeEvent.which
                        }(e) || !_router.isLocalURL(href)))
                            return;
                        e.preventDefault();
                        let navigate = ()=>{
                            "beforePopState"in router ? router[replace ? "replace" : "push"](href, as, {
                                shallow,
                                locale,
                                scroll
                            }) : router[replace ? "replace" : "push"](as || href, {
                                forceOptimisticNavigation: !prefetchEnabled
                            })
                        }
                        ;
                        isAppRouter ? _react.default.startTransition(navigate) : navigate()
                    }(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled)
                },
                onMouseEnter(e) {
                    legacyBehavior || "function" != typeof onMouseEnterProp || onMouseEnterProp(e),
                    legacyBehavior && child.props && "function" == typeof child.props.onMouseEnter && child.props.onMouseEnter(e),
                    router && (prefetchEnabled || !isAppRouter) && prefetch(router, href, as, {
                        locale,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    })
                },
                onTouchStart(e) {
                    legacyBehavior || "function" != typeof onTouchStartProp || onTouchStartProp(e),
                    legacyBehavior && child.props && "function" == typeof child.props.onTouchStart && child.props.onTouchStart(e),
                    router && (prefetchEnabled || !isAppRouter) && prefetch(router, href, as, {
                        locale,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    })
                }
            };
            if (!legacyBehavior || passHref || "a" === child.type && !("href"in child.props)) {
                let curLocale = void 0 !== locale ? locale : null == pagesRouter ? void 0 : pagesRouter.locale
                  , localeDomain = (null == pagesRouter ? void 0 : pagesRouter.isLocaleDomain) && _getDomainLocale.getDomainLocale(as, curLocale, null == pagesRouter ? void 0 : pagesRouter.locales, null == pagesRouter ? void 0 : pagesRouter.domainLocales);
                childProps.href = localeDomain || _addBasePath.addBasePath(_addLocale.addLocale(as, curLocale, null == pagesRouter ? void 0 : pagesRouter.defaultLocale))
            }
            return legacyBehavior ? _react.default.cloneElement(child, childProps) : _react.default.createElement("a", Object.assign({}, restProps, childProps), children)
        });
        exports.default = Link,
        ("function" == typeof exports.default || "object" == typeof exports.default && null !== exports.default) && void 0 === exports.default.__esModule && (Object.defineProperty(exports.default, "__esModule", {
            value: !0
        }),
        Object.assign(exports.default, exports),
        module.exports = exports.default)
    },
    69246: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.useIntersection = function(param) {
            let {rootRef, rootMargin, disabled} = param
              , isDisabled = disabled || !hasIntersectionObserver
              , [visible,setVisible] = _react.useState(!1)
              , [element,setElement] = _react.useState(null);
            _react.useEffect(()=>{
                if (hasIntersectionObserver) {
                    if (!isDisabled && !visible && element && element.tagName) {
                        let unobserve = function(element, callback, options) {
                            let {id, observer, elements} = function(options) {
                                let instance;
                                let id = {
                                    root: options.root || null,
                                    margin: options.rootMargin || ""
                                }
                                  , existing = idList.find(obj=>obj.root === id.root && obj.margin === id.margin);
                                if (existing && (instance = observers.get(existing)))
                                    return instance;
                                let elements = new Map
                                  , observer = new IntersectionObserver(entries=>{
                                    entries.forEach(entry=>{
                                        let callback = elements.get(entry.target)
                                          , isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
                                        callback && isVisible && callback(isVisible)
                                    }
                                    )
                                }
                                ,options);
                                return instance = {
                                    id,
                                    observer,
                                    elements
                                },
                                idList.push(id),
                                observers.set(id, instance),
                                instance
                            }(options);
                            return elements.set(element, callback),
                            observer.observe(element),
                            function() {
                                if (elements.delete(element),
                                observer.unobserve(element),
                                0 === elements.size) {
                                    observer.disconnect(),
                                    observers.delete(id);
                                    let index = idList.findIndex(obj=>obj.root === id.root && obj.margin === id.margin);
                                    index > -1 && idList.splice(index, 1)
                                }
                            }
                        }(element, isVisible=>isVisible && setVisible(isVisible), {
                            root: null == rootRef ? void 0 : rootRef.current,
                            rootMargin
                        });
                        return unobserve
                    }
                } else if (!visible) {
                    let idleCallback = _requestIdleCallback.requestIdleCallback(()=>setVisible(!0));
                    return ()=>_requestIdleCallback.cancelIdleCallback(idleCallback)
                }
            }
            , [element, isDisabled, rootMargin, rootRef, visible]);
            let resetVisible = _react.useCallback(()=>{
                setVisible(!1)
            }
            , []);
            return [setElement, visible, resetVisible]
        }
        ;
        var _react = __webpack_require__(2784)
          , _requestIdleCallback = __webpack_require__(44686);
        let hasIntersectionObserver = "function" == typeof IntersectionObserver
          , observers = new Map
          , idList = [];
        ("function" == typeof exports.default || "object" == typeof exports.default && null !== exports.default) && void 0 === exports.default.__esModule && (Object.defineProperty(exports.default, "__esModule", {
            value: !0
        }),
        Object.assign(exports.default, exports),
        module.exports = exports.default)
    },
    41664: function(module, __unused_webpack_exports, __webpack_require__) {
        module.exports = __webpack_require__(31551)
    }
}]);
