(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5405], {
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
    48312: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return __webpack_require__(70756)
        }
        ])
    },
    95902: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            N: function() {
                return OH1Desktop
            },
            a: function() {
                return OH1Mobile
            }
        });
        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52322)
          , react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6917)
          , _components_banner_google_adsense__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63099)
          , _components_banner_use_track_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16075)
          , _banner_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98986)
          , _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22199);
        function OH1Desktop() {
            let {banners: {MAIN}} = (0,
            _context__WEBPACK_IMPORTED_MODULE_4__.nn)()
              , isDesktop = (0,
            react_use__WEBPACK_IMPORTED_MODULE_5__.Z)("(min-width: 1024px)")
              , {trackImpressBanner} = (0,
            _components_banner_use_track_events__WEBPACK_IMPORTED_MODULE_2__.Z)("OH1");
            return void 0 === MAIN ? (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_banner_google_adsense__WEBPACK_IMPORTED_MODULE_1__._, {
                desktopStyle: _banner_styles__WEBPACK_IMPORTED_MODULE_3__.$n,
                mobileStyle: _banner_styles__WEBPACK_IMPORTED_MODULE_3__.Qu
            }) : isDesktop ? (trackImpressBanner(MAIN),
            (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "hidden items-center lg:flex",
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                        className: "min-w-0 flex-1 sm:flex",
                        href: null == MAIN ? void 0 : MAIN.targetUrl,
                        target: "_blank",
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                            className: "h-[140px] w-full",
                            src: null == MAIN ? void 0 : MAIN.image,
                            alt: ""
                        })
                    })
                })
            })) : null
        }
        function OH1Mobile() {
            let {banners: {MAIN}} = (0,
            _context__WEBPACK_IMPORTED_MODULE_4__.nn)()
              , isDesktop = (0,
            react_use__WEBPACK_IMPORTED_MODULE_5__.Z)("(min-width: 1024px)")
              , {trackImpressBanner} = (0,
            _components_banner_use_track_events__WEBPACK_IMPORTED_MODULE_2__.Z)("OH1");
            return void 0 === MAIN ? (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_banner_google_adsense__WEBPACK_IMPORTED_MODULE_1__._, {
                desktopStyle: _banner_styles__WEBPACK_IMPORTED_MODULE_3__.$n,
                mobileStyle: _banner_styles__WEBPACK_IMPORTED_MODULE_3__.Qu
            }) : isDesktop ? null : (trackImpressBanner(MAIN),
            (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                className: "flex items-center justify-center",
                href: null == MAIN ? void 0 : MAIN.targetUrl,
                target: "_blank",
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                    className: "min-w-0 max-w-[640px]",
                    src: null == MAIN ? void 0 : MAIN.mobileImage,
                    alt: ""
                })
            }))
        }
    },
    9551: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            G: function() {
                return OH2Mobile
            },
            O: function() {
                return OH2Desktop
            }
        });
        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52322)
          , react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6917)
          , _components_banner_use_track_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16075)
          , _banner_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98986)
          , _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22199)
          , _google_adsense__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63099);
        function OH2Desktop() {
            let {banners: {MAIN_RIGHT_TOP}} = (0,
            _context__WEBPACK_IMPORTED_MODULE_3__.nn)()
              , isDesktop = (0,
            react_use__WEBPACK_IMPORTED_MODULE_5__.Z)("(min-width: 1024px)")
              , {trackImpressBanner} = (0,
            _components_banner_use_track_events__WEBPACK_IMPORTED_MODULE_1__.Z)("OH2");
            return void 0 === MAIN_RIGHT_TOP ? (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_google_adsense__WEBPACK_IMPORTED_MODULE_4__._, {
                desktopStyle: _banner_styles__WEBPACK_IMPORTED_MODULE_2__.om,
                mobileStyle: _banner_styles__WEBPACK_IMPORTED_MODULE_2__.ch
            }) : isDesktop ? (trackImpressBanner(MAIN_RIGHT_TOP),
            (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "hidden items-center lg:flex",
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                    className: "min-w-0 flex-1 sm:flex",
                    href: null == MAIN_RIGHT_TOP ? void 0 : MAIN_RIGHT_TOP.targetUrl,
                    target: "_blank",
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                        className: "max-h-[380px] w-full",
                        src: null == MAIN_RIGHT_TOP ? void 0 : MAIN_RIGHT_TOP.image,
                        alt: ""
                    })
                })
            })) : null
        }
        function OH2Mobile() {
            let {banners: {MAIN_RIGHT_TOP}} = (0,
            _context__WEBPACK_IMPORTED_MODULE_3__.nn)()
              , isDesktop = (0,
            react_use__WEBPACK_IMPORTED_MODULE_5__.Z)("(min-width: 1024px)")
              , {trackImpressBanner} = (0,
            _components_banner_use_track_events__WEBPACK_IMPORTED_MODULE_1__.Z)("OH2");
            return void 0 === MAIN_RIGHT_TOP ? (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_google_adsense__WEBPACK_IMPORTED_MODULE_4__._, {
                desktopStyle: _banner_styles__WEBPACK_IMPORTED_MODULE_2__.om,
                mobileStyle: _banner_styles__WEBPACK_IMPORTED_MODULE_2__.ch
            }) : isDesktop ? null : (trackImpressBanner(MAIN_RIGHT_TOP),
            (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                className: "flex items-center justify-center",
                href: null == MAIN_RIGHT_TOP ? void 0 : MAIN_RIGHT_TOP.targetUrl,
                target: "_blank",
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                    className: "min-w-0 max-w-[640px]",
                    src: null == MAIN_RIGHT_TOP ? void 0 : MAIN_RIGHT_TOP.mobileImage,
                    alt: ""
                })
            }))
        }
    },
    51827: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            G: function() {
                return OH3Desktop
            },
            w: function() {
                return OH3Mobile
            }
        });
        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52322)
          , react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6917)
          , _components_banner_use_track_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16075)
          , _banner_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98986)
          , _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22199)
          , _common_google_adsense__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99672);
        function OH3Desktop() {
            let {banners: {MAIN_RIGHT_BOTTOM}} = (0,
            _context__WEBPACK_IMPORTED_MODULE_3__.nn)()
              , isDesktop = (0,
            react_use__WEBPACK_IMPORTED_MODULE_5__.Z)("(min-width: 1024px)")
              , {trackImpressBanner} = (0,
            _components_banner_use_track_events__WEBPACK_IMPORTED_MODULE_1__.Z)("OH3");
            return void 0 === MAIN_RIGHT_BOTTOM ? (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "hidden lg:flex",
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_google_adsense__WEBPACK_IMPORTED_MODULE_4__.Z, {
                    style: _banner_styles__WEBPACK_IMPORTED_MODULE_2__.Jk
                })
            }) : isDesktop ? (trackImpressBanner(MAIN_RIGHT_BOTTOM),
            (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "hidden items-center lg:flex",
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                        className: "min-w-0 flex-1 sm:flex",
                        href: null == MAIN_RIGHT_BOTTOM ? void 0 : MAIN_RIGHT_BOTTOM.targetUrl,
                        target: "_blank",
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                            className: "max-h-[380px] w-full",
                            src: null == MAIN_RIGHT_BOTTOM ? void 0 : MAIN_RIGHT_BOTTOM.image,
                            alt: ""
                        })
                    })
                })
            })) : null
        }
        function OH3Mobile() {
            let {banners: {MAIN_RIGHT_BOTTOM}} = (0,
            _context__WEBPACK_IMPORTED_MODULE_3__.nn)()
              , isDesktop = (0,
            react_use__WEBPACK_IMPORTED_MODULE_5__.Z)("(min-width: 1024px)")
              , {trackImpressBanner} = (0,
            _components_banner_use_track_events__WEBPACK_IMPORTED_MODULE_1__.Z)("OH3");
            return isDesktop || void 0 === MAIN_RIGHT_BOTTOM ? null : (trackImpressBanner(MAIN_RIGHT_BOTTOM),
            (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                className: "flex items-center justify-center",
                href: null == MAIN_RIGHT_BOTTOM ? void 0 : MAIN_RIGHT_BOTTOM.targetUrl,
                target: "_blank",
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                    className: "min-w-0 max-w-[640px]",
                    src: null == MAIN_RIGHT_BOTTOM ? void 0 : MAIN_RIGHT_BOTTOM.mobileImage,
                    alt: ""
                })
            }))
        }
    },
    26304: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            A: function() {
                return OH4Mobile
            },
            Z: function() {
                return OH4Desktop
            }
        });
        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52322)
          , react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6917)
          , _components_banner_use_track_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16075)
          , _banner_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98986)
          , _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22199)
          , _common_google_adsense__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99672);
        function OH4Desktop() {
            let {banners: {MAIN_BLOCK}} = (0,
            _context__WEBPACK_IMPORTED_MODULE_3__.nn)()
              , isDesktop = (0,
            react_use__WEBPACK_IMPORTED_MODULE_5__.Z)("(min-width: 1024px)")
              , {trackImpressBanner} = (0,
            _components_banner_use_track_events__WEBPACK_IMPORTED_MODULE_1__.Z)("OH4");
            return void 0 === MAIN_BLOCK ? (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "hidden lg:flex",
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_google_adsense__WEBPACK_IMPORTED_MODULE_4__.Z, {
                    style: _banner_styles__WEBPACK_IMPORTED_MODULE_2__.Ek
                })
            }) : isDesktop ? (trackImpressBanner(MAIN_BLOCK),
            (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "hidden items-center lg:flex",
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                    className: "min-w-0 flex-1 sm:flex",
                    href: null == MAIN_BLOCK ? void 0 : MAIN_BLOCK.targetUrl,
                    target: "_blank",
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                        className: "w-full",
                        src: null == MAIN_BLOCK ? void 0 : MAIN_BLOCK.image,
                        alt: ""
                    })
                })
            })) : null
        }
        function OH4Mobile() {
            let {banners: {MAIN_BLOCK}} = (0,
            _context__WEBPACK_IMPORTED_MODULE_3__.nn)()
              , isDesktop = (0,
            react_use__WEBPACK_IMPORTED_MODULE_5__.Z)("(min-width: 1024px)")
              , {trackImpressBanner} = (0,
            _components_banner_use_track_events__WEBPACK_IMPORTED_MODULE_1__.Z)("OH4");
            return isDesktop || void 0 === MAIN_BLOCK ? null : (trackImpressBanner(MAIN_BLOCK),
            (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                className: "flex items-center justify-center",
                href: null == MAIN_BLOCK ? void 0 : MAIN_BLOCK.targetUrl,
                target: "_blank",
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                    className: "min-w-0 max-w-[640px]",
                    src: null == MAIN_BLOCK ? void 0 : MAIN_BLOCK.mobileImage,
                    alt: ""
                })
            }))
        }
    },
    98986: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            $f: function() {
                return OL4_STYLE
            },
            $n: function() {
                return OH1_STYLE
            },
            Ek: function() {
                return OH4_STYLE
            },
            HS: function() {
                return OL1_STYLE
            },
            Jk: function() {
                return OH3_STYLE
            },
            Qu: function() {
                return OH1_MOBILE_STYLE
            },
            ch: function() {
                return OH2_MOBILE_STYLE
            },
            if: function() {
                return OL1_MOBILE_STYLE
            },
            lW: function() {
                return OL2_MOBILE_STYLE
            },
            om: function() {
                return OH2_STYLE
            },
            yK: function() {
                return OD5_STYLE
            },
            yu: function() {
                return OL2_STYLE
            },
            yv: function() {
                return OL3_STYLE
            }
        });
        let OH1_STYLE = {
            display: "block",
            margin: "auto",
            width: "840px",
            height: "140px"
        }
          , OH1_MOBILE_STYLE = {
            display: "block",
            width: "640px",
            height: "200px"
        }
          , OH2_STYLE = {
            display: "inline-block",
            width: "180px",
            height: "380px"
        }
          , OH2_MOBILE_STYLE = {
            display: "inline-block",
            width: "840px",
            height: "140px"
        }
          , OH4_STYLE = {
            display: "inline-block",
            width: "180px",
            height: "180px"
        }
          , OH3_STYLE = {
            display: "inline-block",
            width: "180px",
            height: "380px"
        }
          , OL1_STYLE = {
            display: "block",
            margin: "auto",
            width: "840px",
            height: "140px"
        }
          , OL1_MOBILE_STYLE = {
            display: "block",
            width: "640px",
            height: "200px"
        }
          , OL4_STYLE = {
            display: "inline-block",
            width: "180px",
            height: "180px"
        }
          , OD5_STYLE = {
            display: "block",
            margin: "auto",
            width: "840px",
            height: "140px"
        }
          , OL2_STYLE = {
            display: "inline-block",
            width: "180px",
            height: "380px"
        }
          , OL2_MOBILE_STYLE = {
            display: "inline-block",
            width: "840px",
            height: "140px"
        }
          , OL3_STYLE = {
            display: "inline-block",
            width: "180px",
            height: "380px"
        }
    },
    22199: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            ZP: function() {
                return BannerProvider
            },
            nn: function() {
                return useBannerContext
            }
        });
        var jsx_runtime = __webpack_require__(52322)
          , react = __webpack_require__(2784)
          , okky_web = __webpack_require__(26697)
          , rand = __webpack_require__(78720)
          , with_asset_prefix = __webpack_require__(30676);
        function refine(banners) {
            let newBanners = function(banners) {
                let newBanners = [];
                for (let property in banners) {
                    let type = property
                      , arr = banners[type]
                      , one = arr[(0,
                    rand.Z)(0, arr.length - 1)];
                    newBanners.push(one)
                }
                return newBanners
            }(banners.reduce((accu,banner)=>{
                let b = accu[banner.type]
                  , arr = void 0 !== b ? b : [];
                return arr.push(banner),
                {
                    ...accu,
                    [banner.type]: arr
                }
            }
            , {}));
            return newBanners.reduce((accu,banner)=>({
                ...accu,
                [banner.type]: {
                    _raw: banner,
                    ...banner,
                    targetUrl: (0,
                    with_asset_prefix.BS)("/banners/".concat(banner.id))
                }
            }), {})
        }
        let BannerContext = (0,
        react.createContext)({
            banners: refine([])
        });
        function BannerProvider(param) {
            let {typeGroup, children} = param
              , {banners} = function(typeGroup) {
                let[fetching,setFetching] = (0,
                react.useState)(!1)
                  , [banners,setBanners] = (0,
                react.useState)(refine([]))
                  , getBanners = (0,
                react.useCallback)(async()=>{
                    setFetching(!0);
                    let {ok, result} = await (0,
                    okky_web.getBannerList)({
                        typeGroup
                    });
                    return ok && result ? (setFetching(!1),
                    setBanners(refine(result)),
                    !0) : (setFetching(!1),
                    !1)
                }
                , [typeGroup]);
                return (0,
                react.useEffect)(()=>{
                    getBanners()
                }
                , [getBanners]),
                {
                    fetching,
                    banners,
                    getBanners
                }
            }(typeGroup);
            return (0,
            jsx_runtime.jsx)(BannerContext.Provider, {
                value: {
                    banners
                },
                children: children
            })
        }
        function useBannerContext() {
            let context = (0,
            react.useContext)(BannerContext);
            if (void 0 === context)
                throw Error("useBannerContext must be used within a BannerProvider");
            return context
        }
    },
    63099: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            _: function() {
                return GoogleAdsenseWrapper
            }
        });
        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52322)
          , react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2784);
        function GoogleAdsense(param) {
            let {style} = param;
            return (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
                (window.adsbygoogle = window.adsbygoogle || []).push({})
            }
            , []),
            (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ins", {
                style: style,
                className: "adsbygoogle",
                "data-adtest": "off",
                "data-ad-client": "ca-pub-8103607814406874",
                "data-ad-slot": "6573675943"
            })
        }
        function GoogleAdsenseWrapper(param) {
            let {desktopStyle, mobileStyle} = param;
            return (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [(0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "hidden items-center lg:flex",
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GoogleAdsense, {
                        style: desktopStyle
                    })
                }), (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "flex items-center lg:hidden",
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GoogleAdsense, {
                        style: mobileStyle
                    })
                })]
            })
        }
    },
    16075: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            Z: function() {
                return useTrackEvents
            }
        });
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784)
          , _libs_gtag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29673);
        function useTrackEvents(areaCode) {
            let trackImpressBanner = (0,
            react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(param=>{
                let {id} = param;
                (0,
                _libs_gtag__WEBPACK_IMPORTED_MODULE_1__.B)({
                    action: "impress_banner",
                    type: "ad",
                    areaCode,
                    bannerId: id
                })
            }
            , [areaCode]);
            return {
                trackImpressBanner
            }
        }
    },
    99672: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            Z: function() {
                return GoogleAdsense
            }
        });
        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52322)
          , react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2784);
        function GoogleAdsense(param) {
            let {style} = param;
            return (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
                (window.adsbygoogle = window.adsbygoogle || []).push({})
            }
            , []),
            (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ins", {
                style: style,
                className: "adsbygoogle",
                "data-adtest": "off",
                "data-ad-client": "ca-pub-8103607814406874",
                "data-ad-slot": "6573675943"
            })
        }
    },
    30045: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            Bx: function() {
                return BannerLawServiceMobile
            },
            cm: function() {
                return BannerLawServiceTablet
            },
            ZP: function() {
                return BannerLawService
            }
        });
        var jsx_runtime = __webpack_require__(52322)
          , next_link = __webpack_require__(41664)
          , link_default = __webpack_require__.n(next_link)
          , shared_anchor = __webpack_require__(86563)
          , react = __webpack_require__(2784)
          , gtag = __webpack_require__(29673);
        function useTrackEvents() {
            let trackPcBannerLawServiceClick = (0,
            react.useCallback)(()=>(0,
            gtag.V4)({
                label: "법률상담서비스 배너-1 클릭"
            }), [])
              , trackMobileBannerLawServiceClick = (0,
            react.useCallback)(()=>(0,
            gtag.V4)({
                label: "법률상담서비스 배너-2 클릭"
            }), [])
              , trackTabletBannerLawServiceClick = (0,
            react.useCallback)(()=>(0,
            gtag.V4)({
                label: "법률상담서비스 배너-3 클릭"
            }), []);
            return {
                trackPcBannerLawServiceClick,
                trackMobileBannerLawServiceClick,
                trackTabletBannerLawServiceClick
            }
        }
        function BannerLawService() {
            let {trackPcBannerLawServiceClick} = useTrackEvents();
            return (0,
            jsx_runtime.jsx)("div", {
                className: "flex items-center justify-center rounded-md",
                children: (0,
                jsx_runtime.jsx)(link_default(), {
                    href: "/supports/together",
                    passHref: !0,
                    legacyBehavior: !0,
                    children: (0,
                    jsx_runtime.jsx)(shared_anchor.e, {
                        className: "flex flex-col items-center",
                        onClick: trackPcBannerLawServiceClick,
                        children: (0,
                        jsx_runtime.jsx)("img", {
                            src: "/supports/lawyer_desktop@2x.png",
                            className: "",
                            alt: ""
                        })
                    })
                })
            })
        }
        function BannerLawServiceMobile() {
            let {trackMobileBannerLawServiceClick} = useTrackEvents();
            return (0,
            jsx_runtime.jsx)(link_default(), {
                href: "/supports/together",
                passHref: !0,
                legacyBehavior: !0,
                children: (0,
                jsx_runtime.jsx)(shared_anchor.e, {
                    className: "flex items-center justify-center md:hidden",
                    target: "_blank",
                    onClick: trackMobileBannerLawServiceClick,
                    children: (0,
                    jsx_runtime.jsx)("img", {
                        className: "min-w-0 max-w-[640px]",
                        src: "/supports/lawyer_mobile@2x.png",
                        alt: ""
                    })
                })
            })
        }
        function BannerLawServiceTablet() {
            let {trackTabletBannerLawServiceClick} = useTrackEvents();
            return (0,
            jsx_runtime.jsx)(link_default(), {
                href: "/supports/together",
                passHref: !0,
                legacyBehavior: !0,
                children: (0,
                jsx_runtime.jsx)(shared_anchor.e, {
                    className: "flex items-center justify-center lg:hidden",
                    target: "_blank",
                    onClick: trackTabletBannerLawServiceClick,
                    children: (0,
                    jsx_runtime.jsx)("img", {
                        className: "min-w-0 max-w-[640px]",
                        src: "/supports/lawyer_mobile@2x.png",
                        alt: ""
                    })
                })
            })
        }
    },
    49575: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
            data: function() {
                return data
            }
        });
        let data = [{
            id: 1399976,
            username: "OKKY",
            dateCreated: "2023-02-20T16:52:44",
            description: "세상에서 가장 쉬운 코딩책",
            img: "https://file.okky.kr/images/1676944537180.jpg",
            provider: "길벗출판사",
            displayAuthor: {
                id: 45597
            }
        }, {
            id: 1399976,
            username: "OKKY",
            dateCreated: "2023-02-10T14:28:46",
            description: "프로덕트 매니저는 무슨 일을 하고 있을까",
            img: "https://file.okky.kr/images/1676278907570.jpg",
            provider: "한빛미디어",
            displayAuthor: {
                id: 45597
            }
        }, {
            id: 1391117,
            username: "OKKY",
            dateCreated: "2023-01-25T10:44:10",
            description: "거니의 문과 감성 실용 파이썬",
            img: "https://file.okky.kr/images/1674613014455.jpg",
            provider: "길벗출판사",
            displayAuthor: {
                id: 45597
            }
        }]
    },
    56980: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            Z: function() {
                return TopWritersSection
            }
        });
        var jsx_runtime = __webpack_require__(52322)
          , next_link = __webpack_require__(41664)
          , link_default = __webpack_require__.n(next_link)
          , shared_anchor = __webpack_require__(86563);
        function TopWritersSkeleton() {
            return (0,
            jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: [0, 1, 2, 3, 4].map(index=>(0,
                jsx_runtime.jsxs)("div", {
                    className: "flex animate-pulse items-center space-x-1",
                    children: [(0,
                    jsx_runtime.jsx)("div", {
                        className: "h-6 w-6 rounded-full bg-gray-200"
                    }), (0,
                    jsx_runtime.jsx)("div", {
                        className: "flex-1",
                        children: (0,
                        jsx_runtime.jsx)("div", {
                            className: "h-4 w-14 rounded-md bg-gray-200"
                        })
                    }), (0,
                    jsx_runtime.jsx)("div", {
                        className: "space-x-1",
                        children: (0,
                        jsx_runtime.jsx)("span", {
                            className: "flex items-center",
                            children: (0,
                            jsx_runtime.jsx)("span", {
                                className: "h-4 w-7 rounded-md bg-gray-200"
                            })
                        })
                    })]
                }, index))
            })
        }
        var okky_web = __webpack_require__(26697)
          , dist = __webpack_require__(36282)
          , react = __webpack_require__(2784)
          , picture = __webpack_require__(22018)
          , gtag = __webpack_require__(29673);
        function PrizeIcon(param) {
            let {className} = param;
            return (0,
            jsx_runtime.jsxs)("svg", {
                className: className,
                width: "9",
                height: "14",
                viewBox: "0 0 9 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                jsx_runtime.jsx)("g", {
                    clipPath: "url(#clip0_1235_8883)",
                    children: (0,
                    jsx_runtime.jsx)("path", {
                        d: "M7.80117 7.58697C7.45552 7.58697 7.13503 7.73556 6.90915 7.99814L5.97885 7.85806L5.55718 6.97278C5.66438 6.78393 5.72071 6.56899 5.72071 6.34611C5.72071 6.03476 5.61078 5.74212 5.41334 5.51584L8.30542 3.76513C8.43777 3.68517 8.51981 3.53658 8.51981 3.37835V0.448594C8.51981 0.201329 8.32566 0 8.0872 0H0.904047C0.665593 0 0.471439 0.201329 0.471439 0.448594V3.37778C0.471439 3.53658 0.553476 3.6846 0.685829 3.76456L3.61181 5.53569C3.42532 5.7597 3.3214 6.04496 3.3214 6.34554C3.3214 6.56048 3.37391 6.76861 3.47399 6.95293L3.04302 7.85749L2.09249 8.00041C1.86552 7.73953 1.53792 7.58641 1.19938 7.58641C0.538162 7.58641 0 8.14389 0 8.82897C0 9.51406 0.538162 10.0715 1.19938 10.0715C1.27978 10.0715 1.35963 10.063 1.43893 10.0466L2.1357 10.7504L1.98475 11.6612C1.59699 11.875 1.35088 12.2964 1.35088 12.7574C1.35088 13.4425 1.88904 14 2.55026 14C3.14475 14 3.63916 13.5593 3.73323 12.961L4.51039 12.538L5.33568 12.9877C5.44069 13.5707 5.93346 14.0006 6.51428 14.0006C7.1755 14.0006 7.71366 13.4431 7.71366 12.758C7.71366 12.272 7.44895 11.8415 7.03166 11.6368L6.88509 10.751L7.57803 10.0511C7.65077 10.0653 7.72515 10.0721 7.80007 10.0721C8.46129 10.0721 8.99945 9.51462 8.99945 8.82954C8.99945 8.14445 8.46184 7.58697 7.80062 7.58697H7.80117ZM7.65459 1.95317V3.12088L6.35568 3.90691V0.896622H7.65459V1.9526V1.95317ZM2.55244 3.85587L1.33666 3.12031V0.896622H2.55244V3.85587ZM3.41766 4.37989V0.896622H5.49046V4.43037L4.49563 5.03208L3.41766 4.37989ZM7.80718 9.17492H7.80117C7.74921 9.17492 7.69999 9.16301 7.65405 9.13976C7.48997 9.05582 7.29199 9.08871 7.16073 9.22085L6.23207 10.1583C6.05925 10.333 5.98049 10.5842 6.02097 10.8303L6.22332 12.0514C6.25395 12.2368 6.39505 12.3837 6.57444 12.4172C6.73359 12.4466 6.84899 12.5896 6.84899 12.7574C6.84899 12.948 6.69914 13.1034 6.51483 13.1034C6.33052 13.1034 6.18066 12.9486 6.18066 12.7574C6.18066 12.7495 6.18066 12.7421 6.18176 12.7342C6.19215 12.5584 6.10191 12.3911 5.95151 12.3094L4.85167 11.7105C4.74666 11.6532 4.62907 11.6232 4.51094 11.6232C4.39281 11.6232 4.27467 11.6532 4.17021 11.7105L3.11248 12.2867C2.95661 12.3718 2.86692 12.5436 2.88278 12.7251C2.88387 12.737 2.88442 12.7472 2.88442 12.758C2.88442 12.9486 2.73456 13.1039 2.55026 13.1039C2.36595 13.1039 2.21609 12.9491 2.21609 12.758C2.21609 12.5975 2.3211 12.4597 2.47095 12.4217C2.6394 12.3797 2.76683 12.2385 2.79637 12.0616L3.00036 10.8303C3.04084 10.5842 2.96208 10.333 2.7898 10.1583L1.85403 9.21291C1.72004 9.07794 1.51878 9.04731 1.35306 9.13635C1.30548 9.16187 1.25407 9.17492 1.19993 9.17492C1.01562 9.17492 0.865763 9.02009 0.865763 8.82897C0.865763 8.63785 1.01562 8.48303 1.19993 8.48303C1.32955 8.48303 1.44494 8.55789 1.50128 8.67925C1.58386 8.85619 1.76489 8.95601 1.95303 8.92765L3.23718 8.73426C3.47563 8.69853 3.68237 8.54314 3.78901 8.31913L4.36765 7.10492C4.44968 6.93251 4.41687 6.72551 4.28561 6.5894C4.22272 6.52418 4.18771 6.43741 4.18771 6.34497C4.18771 6.15442 4.33757 5.99903 4.52188 5.99903C4.70619 5.99903 4.85604 6.15442 4.85604 6.34497C4.85604 6.44025 4.8194 6.52929 4.75213 6.59507C4.61431 6.73118 4.57821 6.94102 4.66243 7.11796L5.2345 8.31856C5.34115 8.54257 5.54734 8.69797 5.78634 8.7337L7.0508 8.92425C7.23785 8.95204 7.41887 8.85222 7.50146 8.67698C7.55779 8.55675 7.67319 8.48246 7.80171 8.48246C7.98602 8.48246 8.13588 8.63785 8.13588 8.8284C8.13588 9.01896 7.9893 9.17095 7.80773 9.17378L7.80718 9.17492Z",
                        fill: "currentColor"
                    })
                }), (0,
                jsx_runtime.jsx)("defs", {
                    children: (0,
                    jsx_runtime.jsx)("clipPath", {
                        id: "clip0_1235_8883",
                        children: (0,
                        jsx_runtime.jsx)("rect", {
                            width: "9",
                            height: "14",
                            fill: "white"
                        })
                    })
                })]
            })
        }
        var image_avatar = __webpack_require__(89746);
        function TopWritersSection() {
            let {fetching, topWriters, hasTopWriter} = function() {
                let[topWriters,setTopWriters] = (0,
                react.useState)([])
                  , [fetching,setFetching] = (0,
                react.useState)(!0)
                  , hasTopWriter = topWriters.length > 0;
                return (0,
                react.useEffect)(()=>{
                    (async function() {
                        setFetching(!0);
                        let {result} = await (0,
                        okky_web.getTopWritersWidget)();
                        result ? (setFetching(!1),
                        setTopWriters(result.slice(0, 5).map(item=>({
                            _raw: item,
                            ...item,
                            displayImage: (0,
                            picture.Z)(item.pictureType, item.picture, 96),
                            abbreviatedPoint: (0,
                            dist.abbreviateNumber)(item.gotPoints, 1)
                        })))) : setFetching(!1)
                    }
                    )()
                }
                , []),
                {
                    topWriters,
                    fetching,
                    hasTopWriter
                }
            }()
              , {trackTopWritersClick} = function() {
                let trackTopWritersClick = (0,
                react.useCallback)((param,index)=>{
                    let {id, nickname, gotPoints} = param;
                    (0,
                    gtag.V4)({
                        label: "top-writer 위젯 아이템 클릭",
                        authorId: id,
                        authorName: nickname,
                        activityPoint: gotPoints,
                        index: index
                    })
                }
                , []);
                return {
                    trackTopWritersClick
                }
            }();
            return (0,
            jsx_runtime.jsx)("div", {
                className: "hidden space-y-4 divide-y divide-gray-500/30 dark:divide-gray-500/70 lg:block",
                children: hasTopWriter && (0,
                jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [(0,
                    jsx_runtime.jsx)("div", {
                        className: "text-sm font-bold",
                        children: "Top Writers"
                    }), (0,
                    jsx_runtime.jsx)("div", {
                        className: "space-y-4 pt-4",
                        children: fetching ? (0,
                        jsx_runtime.jsx)(TopWritersSkeleton, {}) : (0,
                        jsx_runtime.jsx)(jsx_runtime.Fragment, {
                            children: topWriters.map((param,index)=>{
                                let {id, nickname, displayImage, abbreviatedPoint} = param;
                                return (0,
                                jsx_runtime.jsxs)("div", {
                                    className: "flex items-center space-x-1",
                                    children: [(0,
                                    jsx_runtime.jsx)(link_default(), {
                                        href: "/users/".concat(id),
                                        passHref: !0,
                                        legacyBehavior: !0,
                                        children: (0,
                                        jsx_runtime.jsx)(shared_anchor.e, {
                                            onClick() {
                                                trackTopWritersClick(topWriters[index], index)
                                            },
                                            children: (0,
                                            jsx_runtime.jsx)(image_avatar.Z, {
                                                src: displayImage,
                                                className: "h-6 w-6 rounded-full",
                                                alt: ""
                                            })
                                        })
                                    }), (0,
                                    jsx_runtime.jsx)("div", {
                                        className: "flex-1",
                                        children: (0,
                                        jsx_runtime.jsx)(link_default(), {
                                            href: "/users/".concat(id),
                                            passHref: !0,
                                            legacyBehavior: !0,
                                            children: (0,
                                            jsx_runtime.jsx)(shared_anchor.e, {
                                                className: "text-inherit",
                                                onClick() {
                                                    trackTopWritersClick(topWriters[index], index)
                                                },
                                                children: (0,
                                                jsx_runtime.jsx)("span", {
                                                    className: "line-clamp-1 break-all text-xs font-medium hover:text-blue-500 hover:no-underline dark:hover:text-blue-200",
                                                    children: nickname
                                                })
                                            })
                                        })
                                    }), (0,
                                    jsx_runtime.jsx)("div", {
                                        className: "space-x-1",
                                        children: (0,
                                        jsx_runtime.jsxs)("span", {
                                            className: "flex items-center",
                                            children: [(0,
                                            jsx_runtime.jsx)(PrizeIcon, {
                                                className: "inline h-4 w-4"
                                            }), (0,
                                            jsx_runtime.jsx)("span", {
                                                className: "line-clamp-1 break-all text-xs font-normal text-gray-700 dark:text-gray-300",
                                                children: abbreviatedPoint
                                            })]
                                        })
                                    })]
                                }, id)
                            }
                            )
                        })
                    })]
                })
            })
        }
    },
    42773: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            Z: function() {
                return BoltIcon
            }
        });
        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52322);
        function BoltIcon(param) {
            let {className} = param;
            return (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                className: className,
                width: "9",
                height: "12",
                viewBox: "0 1 9 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
                    children: "bolt icon"
                }), (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M5.21535 0.575533C5.4443 0.647704 5.6 0.86003 5.6 1.10009V3.85009L7.8 3.85009C8.00508 3.85009 8.19313 3.96419 8.28783 4.14609C8.38254 4.328 8.36818 4.54748 8.25057 4.71549L4.40057 10.2155C4.26291 10.4122 4.0136 10.4968 3.78464 10.4246C3.55569 10.3525 3.4 10.1401 3.4 9.90009L3.4 7.15009H1.2C0.994914 7.15009 0.806866 7.03599 0.712157 6.85408C0.617448 6.67218 0.631811 6.45269 0.749418 6.28468L4.59942 0.784684C4.73708 0.588021 4.98639 0.503362 5.21535 0.575533Z",
                    fill: "currentColor"
                })]
            })
        }
    },
    39101: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var Sections, PageCodes, OKKYContentType, Sections1, PageCodes1, OKKYContentType1;
        __webpack_require__.d(__webpack_exports__, {
            bx: function() {
                return Sections
            },
            dn: function() {
                return PageCodes
            },
            oX: function() {
                return OKKYContentType
            }
        }),
        (Sections1 = Sections || (Sections = {})).EDITORS_CHOICE = "EDITORS_CHOICE",
        Sections1.WEEKLY_BEST = "WEEKLY_BEST",
        Sections1.QUESTIONS = "QUESTIONS",
        Sections1.COMMUNITY = "COMMUNITY",
        Sections1.KNOWLEDGE = "KNOWLEDGE",
        Sections1.NOTICE = "NOTICE",
        Sections1.EVENTS = "EVENTS",
        (PageCodes1 = PageCodes || (PageCodes = {})).HOME_LAND_PAGE = "HLP",
        PageCodes1.CONTENT_LIST_PAGE = "CLP",
        PageCodes1.CONTENT_DETAIL_PAGE = "CDP",
        PageCodes1.QUESTION_LIST_PAGE = "QCLP",
        PageCodes1.QUESTION_DETAIL_PAGE = "QCDP",
        PageCodes1.JOB_LIST_PAGE = "JCLP",
        PageCodes1.JOB_DETAIL_PAGE = "JCDP",
        (OKKYContentType1 = OKKYContentType || (OKKYContentType = {})).ARTICLE = "ARTICLE",
        OKKYContentType1.QUESTIONS = "QUESTION",
        OKKYContentType1.ANSWER = "ANSWER",
        OKKYContentType1.RECRUIT = "RECRUIT",
        OKKYContentType1.NOTE = "NOTE"
    },
    78720: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function rand(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        __webpack_require__.d(__webpack_exports__, {
            Z: function() {
                return rand
            }
        })
    },
    70756: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
            __N_SSP: function() {
                return __N_SSP
            },
            default: function() {
                return IndexPage
            }
        });
        var jsx_runtime = __webpack_require__(52322)
          , react = __webpack_require__(2784)
          , context = __webpack_require__(22199)
          , OH1 = __webpack_require__(95902)
          , OH2 = __webpack_require__(9551)
          , OH3 = __webpack_require__(51827)
          , OH4 = __webpack_require__(26304)
          , useMedia = __webpack_require__(6917);
        function CoupangAd(param) {
            let {title, id, trackingCode, template="banner", width="100%", height=80} = param
              , src = (0,
            react.useMemo)(()=>{
                let URL = new URLSearchParams({
                    id,
                    template,
                    trackingCode,
                    width: String(width),
                    height: String(height),
                    subId: ""
                });
                return "".concat("https://ads-partners.coupang.com/widgets.html", "?").concat(URL.toString())
            }
            , [width, height, id, template, trackingCode]);
            return (0,
            jsx_runtime.jsx)("iframe", {
                title: title,
                src: src,
                width: "100%",
                height: height,
                frameBorder: "0",
                scrolling: "no",
                referrerPolicy: "unsafe-url"
            })
        }
        function OH5Desktop() {
            let isDesktop = (0,
            useMedia.Z)("(min-width: 1024px)");
            return isDesktop ? (0,
            jsx_runtime.jsx)("div", {
                className: "hidden items-center lg:flex",
                children: (0,
                jsx_runtime.jsx)(CoupangAd, {
                    id: "627278",
                    trackingCode: "AF3355811",
                    title: "Coupang AD - OH5",
                    width: 840,
                    height: 120
                })
            }) : null
        }
        function OH5Mobile() {
            let isDesktop = (0,
            useMedia.Z)("(min-width: 1024px)");
            return isDesktop ? null : (0,
            jsx_runtime.jsx)("div", {
                className: "flex items-center",
                children: (0,
                jsx_runtime.jsx)("a", {
                    href: "https://link.coupang.com/a/Nlw2y",
                    className: "flex flex-1 justify-center",
                    target: "_blank",
                    referrerPolicy: "unsafe-url",
                    children: (0,
                    jsx_runtime.jsx)("img", {
                        className: "min-w-0 max-w-[640px] flex-1",
                        src: "https://ads-partners.coupang.com/banners/634634?subId=&traceId=V0-301-bae0f72e5e59e45f-I634634&w=640&h=100",
                        alt: ""
                    })
                })
            })
        }
        var footer = __webpack_require__(77684)
          , header = __webpack_require__(18485)
          , banner_law_service = __webpack_require__(30045)
          , ChevronUpDownIcon = __webpack_require__(80408)
          , ChatBubbleLeftEllipsisIcon = __webpack_require__(92397)
          , LockClosedIcon = __webpack_require__(15030)
          , next_link = __webpack_require__(41664)
          , link_default = __webpack_require__.n(next_link)
          , types_d = __webpack_require__(39101)
          , dist = __webpack_require__(36282)
          , date = __webpack_require__(61915)
          , picture = __webpack_require__(22018);
        function useArticlesForMain(originalArticles) {
            let[articles] = (0,
            react.useState)(originalArticles.map(item=>{
                var topic;
                return {
                    _raw: item,
                    ...item,
                    displayContent: item.content ? "TEXT" === item.content.textType ? item.content.text.replace(/\n/g, "<br />") : (0,
                    item.content.text).replace(/\n/gi, " ").replace(/<br \/>/gi, " ").replace(/(<([^>]+)>)/gi, "") : "",
                    displayAuthor: {
                        _raw: item.displayAuthor,
                        ...item.displayAuthor,
                        displayImage: (0,
                        picture.Z)(item.displayAuthor.pictureType, item.displayAuthor.picture),
                        isWithdrawnUser: item.displayAuthor.withdraw,
                        abbreviatedPoint: (0,
                        dist.abbreviateNumber)(item.displayAuthor.activityPoint, 1)
                    },
                    displayCreatedAt: (0,
                    date.no)(item.dateCreated),
                    displayVoteCount: (0,
                    dist.abbreviateNumber)(item.voteCount, 1),
                    displayNoteCount: (0,
                    dist.abbreviateNumber)(item.noteCount, 1),
                    displayAnswerCount: (0,
                    dist.abbreviateNumber)(item.answerCount, 1),
                    linkContentDetailPage: "questions" === (topic = item.category.code) || "tech" === topic || "career" === topic || "qna-etc" === topic ? "/questions/".concat(item.id) : "/articles/".concat(item.id)
                }
            }
            ));
            return {
                articles
            }
        }
        var gtag = __webpack_require__(29673);
        function useTrackEvents(param) {
            let {parentCategory} = param
              , trackViewItem = (0,
            react.useCallback)((item,type)=>{
                (0,
                gtag.B)({
                    action: "view_item",
                    type,
                    parentCategory,
                    itemId: item.id,
                    title: item.title,
                    author: item.displayAuthor.id,
                    itemCategory: item.category.code,
                    noteCount: item.noteCount,
                    voteCount: item.voteCount,
                    viewCount: item.viewCount
                })
            }
            , [parentCategory])
              , trackViewItemList = (0,
            react.useCallback)(label=>{
                (0,
                gtag.B)({
                    action: "view_item_list",
                    label,
                    parentCategory
                })
            }
            , [parentCategory])
              , trackEventViewItem = (0,
            react.useCallback)(item=>{
                (0,
                gtag.B)({
                    action: "view_item",
                    type: types_d.oX.ARTICLE,
                    parentCategory,
                    itemId: item.id,
                    authorId: item.displayAuthor.id
                })
            }
            , [parentCategory]);
            return {
                trackViewItem,
                trackViewItemList,
                trackEventViewItem
            }
        }
        var shared_anchor = __webpack_require__(86563)
          , bolt = __webpack_require__(42773)
          , shared_image = __webpack_require__(7527)
          , image_avatar = __webpack_require__(89746);
        function CommunitySection(param) {
            let {articles: originalArticles} = param
              , {trackViewItem, trackViewItemList} = useTrackEvents({
                parentCategory: types_d.bx.COMMUNITY
            })
              , {articles} = useArticlesForMain(originalArticles);
            return (0,
            jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [(0,
                jsx_runtime.jsx)(link_default(), {
                    href: "/community",
                    passHref: !0,
                    legacyBehavior: !0,
                    children: (0,
                    jsx_runtime.jsx)(shared_anchor.e, {
                        className: "relative mb-2 text-gray-900 no-underline dark:text-gray-100",
                        onClick() {
                            trackViewItemList(types_d.dn.HOME_LAND_PAGE)
                        },
                        children: (0,
                        jsx_runtime.jsxs)("div", {
                            className: "group relative",
                            children: [(0,
                            jsx_runtime.jsx)("div", {
                                className: "h-16 w-full rounded-xl bg-blue-50 dark:bg-gray-700",
                                children: (0,
                                jsx_runtime.jsx)(shared_image.X, {
                                    src: "pattern.svg",
                                    className: "h-full rounded-xl bg-bottom opacity-10"
                                })
                            }), (0,
                            jsx_runtime.jsx)("div", {
                                className: "absolute top-0 flex h-full w-full items-center px-8 hover:no-underline dark:hover:no-underline",
                                children: (0,
                                jsx_runtime.jsx)("span", {
                                    className: "w-full font-semibold hover:text-blue-500 hover:no-underline group-hover:text-blue-500 dark:hover:text-blue-200 dark:hover:no-underline dark:group-hover:text-blue-200 sm:text-lg",
                                    children: "커뮤니티"
                                })
                            }), (0,
                            jsx_runtime.jsxs)("div", {
                                className: "absolute -top-[8px] right-0 mr-10 h-[72px] w-[116px] overflow-y-hidden",
                                children: [(0,
                                jsx_runtime.jsx)(shared_image.Z, {
                                    src: "/community.svg",
                                    alt: "community",
                                    className: "dark:hidden"
                                }), (0,
                                jsx_runtime.jsx)(shared_image.Z, {
                                    src: "/darkmode/community.svg",
                                    alt: "community",
                                    className: "hidden dark:block"
                                })]
                            })]
                        })
                    })
                }), (0,
                jsx_runtime.jsx)("div", {
                    children: (0,
                    jsx_runtime.jsx)("ul", {
                        className: "divide-y divide-gray-500/30 dark:divide-gray-500/70",
                        children: articles.map((param,index)=>{
                            let {id, displayAuthor, title, displayCreatedAt, displayNoteCount, displayVoteCount, linkContentDetailPage} = param;
                            return (0,
                            jsx_runtime.jsxs)("li", {
                                className: "py-4 last:pb-0",
                                children: [(0,
                                jsx_runtime.jsxs)("div", {
                                    className: "mb-2 flex",
                                    children: [(0,
                                    jsx_runtime.jsxs)("div", {
                                        className: "flex flex-1 items-center space-x-1",
                                        children: [displayAuthor.isWithdrawnUser ? (0,
                                        jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [(0,
                                            jsx_runtime.jsx)("span", {
                                                children: (0,
                                                jsx_runtime.jsx)(image_avatar.Z, {
                                                    className: "h-5 w-5 rounded-full",
                                                    src: displayAuthor.displayImage,
                                                    alt: "프로필 사진"
                                                })
                                            }), (0,
                                            jsx_runtime.jsx)("span", {
                                                className: "inline text-xs font-medium text-gray-700 dark:text-gray-300 sm:text-sm",
                                                children: displayAuthor.nickname
                                            }), (0,
                                            jsx_runtime.jsx)(LockClosedIcon.Z, {
                                                className: "h-3 w-3 dark:text-gray-300"
                                            })]
                                        }) : (0,
                                        jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [(0,
                                            jsx_runtime.jsx)(link_default(), {
                                                href: "/users/".concat(displayAuthor.id),
                                                children: (0,
                                                jsx_runtime.jsx)(image_avatar.Z, {
                                                    className: "h-5 w-5 rounded-full",
                                                    src: displayAuthor.displayImage,
                                                    alt: "프로필 사진"
                                                })
                                            }), (0,
                                            jsx_runtime.jsx)(link_default(), {
                                                href: "/users/".concat(displayAuthor.id),
                                                className: "inline pl-1 text-xs font-medium text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-200 sm:text-sm",
                                                children: displayAuthor.nickname
                                            })]
                                        }), (0,
                                        jsx_runtime.jsxs)("div", {
                                            className: "text-xs font-normal leading-5 text-gray-700 dark:text-gray-300 sm:text-sm",
                                            children: [(0,
                                            jsx_runtime.jsx)("span", {
                                                className: "mr-0.5",
                                                children: "\xb7"
                                            }), (0,
                                            jsx_runtime.jsx)(bolt.Z, {
                                                className: "inline h-3 w-3"
                                            }), (0,
                                            jsx_runtime.jsxs)("span", {
                                                className: "space-x-1",
                                                children: [(0,
                                                jsx_runtime.jsx)("span", {
                                                    children: displayAuthor.abbreviatedPoint
                                                }), (0,
                                                jsx_runtime.jsx)("span", {
                                                    children: "\xb7"
                                                }), (0,
                                                jsx_runtime.jsxs)("span", {
                                                    children: [displayCreatedAt, " 전"]
                                                })]
                                            })]
                                        })]
                                    }), (0,
                                    jsx_runtime.jsxs)("div", {
                                        className: "flex space-x-2 text-gray-700 dark:text-gray-300",
                                        children: [(0,
                                        jsx_runtime.jsxs)("div", {
                                            className: "flex flex-1 items-center",
                                            children: [(0,
                                            jsx_runtime.jsx)(ChevronUpDownIcon.Z, {
                                                className: "h-4 w-4 shrink-0"
                                            }), (0,
                                            jsx_runtime.jsx)("span", {
                                                className: "text-xs font-normal sm:text-sm",
                                                children: displayVoteCount
                                            })]
                                        }), (0,
                                        jsx_runtime.jsxs)("div", {
                                            className: "flex flex-1 items-center",
                                            children: [(0,
                                            jsx_runtime.jsx)(ChatBubbleLeftEllipsisIcon.Z, {
                                                className: "h-4 w-4 shrink-0"
                                            }), (0,
                                            jsx_runtime.jsx)("span", {
                                                className: "ml-0.5 text-xs font-normal sm:text-sm",
                                                children: displayNoteCount
                                            })]
                                        })]
                                    })]
                                }), (0,
                                jsx_runtime.jsx)("div", {
                                    children: (0,
                                    jsx_runtime.jsx)(link_default(), {
                                        href: linkContentDetailPage,
                                        passHref: !0,
                                        legacyBehavior: !0,
                                        children: (0,
                                        jsx_runtime.jsx)(shared_anchor.e, {
                                            className: "line-clamp-1 w-fit break-all text-sm font-semibold text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-200 sm:text-base sm:leading-5",
                                            onClick() {
                                                trackViewItem(articles[index], types_d.oX.ARTICLE)
                                            },
                                            children: title
                                        })
                                    })
                                })]
                            }, id)
                        }
                        )
                    })
                })]
            })
        }
        function EditorsChoiceSection(param) {
            let {articles: originalArticles} = param
              , {articles} = useArticlesForMain(originalArticles)
              , {trackViewItem} = useTrackEvents({
                parentCategory: types_d.bx.EDITORS_CHOICE
            });
            return (0,
            jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [(0,
                jsx_runtime.jsx)("div", {
                    className: "relative mb-2",
                    children: (0,
                    jsx_runtime.jsxs)("div", {
                        className: "relative",
                        children: [(0,
                        jsx_runtime.jsx)("div", {
                            className: "h-16 w-full rounded-xl bg-blue-50 dark:bg-gray-700",
                            children: (0,
                            jsx_runtime.jsx)(shared_image.X, {
                                src: "pattern.svg",
                                className: "h-full rounded-xl bg-left-top opacity-10"
                            })
                        }), (0,
                        jsx_runtime.jsx)("div", {
                            className: "absolute top-0 flex h-full w-full items-center px-8",
                            children: (0,
                            jsx_runtime.jsx)("span", {
                                className: "w-full text-base font-semibold text-gray-900 dark:text-gray-100 sm:text-lg",
                                children: "EDITOR'S CHOICE"
                            })
                        }), (0,
                        jsx_runtime.jsxs)("div", {
                            className: "absolute -top-[6px] right-0 mr-10 h-[70px] w-[118px] overflow-y-hidden",
                            children: [(0,
                            jsx_runtime.jsx)(shared_image.Z, {
                                src: "/editors-choice.svg",
                                alt: "editor's choice",
                                className: "dark:hidden"
                            }), (0,
                            jsx_runtime.jsx)(shared_image.Z, {
                                src: "/darkmode/editors-choice.svg",
                                alt: "editor's choice",
                                className: "hidden dark:block"
                            })]
                        })]
                    })
                }), (0,
                jsx_runtime.jsx)("div", {
                    children: (0,
                    jsx_runtime.jsx)("ul", {
                        className: "divide-y divide-gray-500/30 dark:divide-gray-500/70",
                        children: articles.map((param,index)=>{
                            let {id, displayAuthor, title, displayCreatedAt, displayNoteCount, displayVoteCount, linkContentDetailPage} = param;
                            return (0,
                            jsx_runtime.jsxs)("li", {
                                className: "py-4 last:pb-0",
                                children: [(0,
                                jsx_runtime.jsxs)("div", {
                                    className: "mb-2 flex",
                                    children: [(0,
                                    jsx_runtime.jsxs)("div", {
                                        className: "flex flex-1 items-center space-x-1",
                                        children: [displayAuthor.isWithdrawnUser ? (0,
                                        jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [(0,
                                            jsx_runtime.jsx)("span", {
                                                children: (0,
                                                jsx_runtime.jsx)(image_avatar.Z, {
                                                    className: "h-5 w-5 rounded-full",
                                                    src: displayAuthor.displayImage,
                                                    alt: "프로필 사진"
                                                })
                                            }), (0,
                                            jsx_runtime.jsx)("span", {
                                                className: "inline text-xs font-medium text-gray-700 dark:text-gray-300 sm:text-sm",
                                                children: displayAuthor.nickname
                                            }), (0,
                                            jsx_runtime.jsx)(LockClosedIcon.Z, {
                                                className: "h-3 w-3 dark:text-gray-300"
                                            })]
                                        }) : (0,
                                        jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [(0,
                                            jsx_runtime.jsx)(link_default(), {
                                                href: "/users/".concat(displayAuthor.id),
                                                children: (0,
                                                jsx_runtime.jsx)(image_avatar.Z, {
                                                    className: "h-5 w-5 rounded-full",
                                                    src: displayAuthor.displayImage,
                                                    alt: "프로필 사진"
                                                })
                                            }), (0,
                                            jsx_runtime.jsx)(link_default(), {
                                                href: "/users/".concat(displayAuthor.id),
                                                className: "inline pl-1 text-xs font-medium text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-200 sm:text-sm",
                                                children: displayAuthor.nickname
                                            })]
                                        }), (0,
                                        jsx_runtime.jsxs)("div", {
                                            className: "text-xs font-normal leading-5 text-gray-700 dark:text-gray-300 sm:text-sm",
                                            children: [(0,
                                            jsx_runtime.jsx)("span", {
                                                className: "mr-0.5",
                                                children: "\xb7"
                                            }), (0,
                                            jsx_runtime.jsx)(bolt.Z, {
                                                className: "inline h-3 w-3"
                                            }), (0,
                                            jsx_runtime.jsxs)("span", {
                                                className: "space-x-1",
                                                children: [(0,
                                                jsx_runtime.jsx)("span", {
                                                    children: displayAuthor.abbreviatedPoint
                                                }), (0,
                                                jsx_runtime.jsx)("span", {
                                                    children: "\xb7"
                                                }), (0,
                                                jsx_runtime.jsxs)("span", {
                                                    children: [displayCreatedAt, " 전"]
                                                })]
                                            })]
                                        })]
                                    }), (0,
                                    jsx_runtime.jsxs)("div", {
                                        className: "flex space-x-2 text-gray-700 dark:text-gray-300",
                                        children: [(0,
                                        jsx_runtime.jsxs)("div", {
                                            className: "flex flex-1 items-center",
                                            children: [(0,
                                            jsx_runtime.jsx)(ChevronUpDownIcon.Z, {
                                                className: "h-4 w-4 shrink-0"
                                            }), (0,
                                            jsx_runtime.jsx)("span", {
                                                className: "text-xs font-normal sm:text-sm",
                                                children: displayVoteCount
                                            })]
                                        }), (0,
                                        jsx_runtime.jsxs)("div", {
                                            className: "flex flex-1 items-center",
                                            children: [(0,
                                            jsx_runtime.jsx)(ChatBubbleLeftEllipsisIcon.Z, {
                                                className: "h-4 w-4 shrink-0"
                                            }), (0,
                                            jsx_runtime.jsx)("span", {
                                                className: "ml-0.5 text-xs font-normal sm:text-sm",
                                                children: displayNoteCount
                                            })]
                                        })]
                                    })]
                                }), (0,
                                jsx_runtime.jsx)("div", {
                                    children: (0,
                                    jsx_runtime.jsx)(link_default(), {
                                        href: linkContentDetailPage,
                                        passHref: !0,
                                        legacyBehavior: !0,
                                        children: (0,
                                        jsx_runtime.jsx)(shared_anchor.e, {
                                            className: "line-clamp-1 w-fit break-all text-sm font-semibold text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-200 sm:text-base sm:leading-5",
                                            onClick() {
                                                trackViewItem(articles[index], types_d.oX.ARTICLE)
                                            },
                                            children: title
                                        })
                                    })
                                })]
                            }, id)
                        }
                        )
                    })
                })]
            })
        }
        var useMeasure = __webpack_require__(13405)
          , swiper_esm = __webpack_require__(84047)
          , swiper_react = __webpack_require__(59579);
        function EventsSection() {
            let[ref,{width}] = (0,
            useMeasure.Z)()
              , {eventsData} = function() {
                let[eventsData,setEventsData] = (0,
                react.useState)([]);
                return (0,
                react.useEffect)(()=>{
                    (async function() {
                        let {data} = __webpack_require__(49575);
                        setEventsData(data.map(item=>({
                            _raw: item,
                            ...item,
                            displayDateCreated: (0,
                            date.no)(item.dateCreated)
                        })))
                    }
                    )()
                }
                , []),
                {
                    eventsData
                }
            }()
              , {trackEventViewItem, trackViewItemList} = useTrackEvents({
                parentCategory: types_d.bx.EVENTS
            });
            return (0,
            jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [(0,
                jsx_runtime.jsx)(link_default(), {
                    href: "/events",
                    passHref: !0,
                    legacyBehavior: !0,
                    children: (0,
                    jsx_runtime.jsx)(shared_anchor.e, {
                        className: "my-2 inline-block text-xl font-semibold text-gray-900 no-underline hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-500",
                        onClick() {
                            trackViewItemList(types_d.dn.HOME_LAND_PAGE)
                        },
                        children: "이벤트"
                    })
                }), (0,
                jsx_runtime.jsx)("div", {
                    ref: ref,
                    children: (0,
                    jsx_runtime.jsx)(swiper_react.tq, {
                        className: "flex flex-col justify-between",
                        modules: [swiper_esm.tl, swiper_esm.s5, swiper_esm.pt],
                        spaceBetween: 24,
                        slidesPerView: width / 280,
                        autoplay: {
                            delay: 3500,
                            disableOnInteraction: !1
                        },
                        pagination: {
                            clickable: !0
                        },
                        children: eventsData.map((param,index)=>{
                            let {id, img, displayAuthor, username, displayDateCreated, description, provider} = param;
                            return (0,
                            jsx_runtime.jsx)(swiper_react.o5, {
                                className: "flex items-stretch",
                                children: (0,
                                jsx_runtime.jsxs)("div", {
                                    className: "w-64 space-y-[9px]",
                                    children: [(0,
                                    jsx_runtime.jsx)(link_default(), {
                                        href: "/articles/".concat(id),
                                        legacyBehavior: !0,
                                        children: (0,
                                        jsx_runtime.jsx)(shared_anchor.e, {
                                            onClick: ()=>trackEventViewItem(eventsData[index]),
                                            className: "line-clamp-1 w-full break-all rounded-md bg-gray-50 hover:cursor-pointer",
                                            children: (0,
                                            jsx_runtime.jsx)(shared_image.Z, {
                                                src: img,
                                                className: "h-40 w-full rounded-md border border-gray-300 object-contain",
                                                alt: ""
                                            })
                                        })
                                    }), (0,
                                    jsx_runtime.jsxs)("div", {
                                        className: "flex justify-between text-xs font-normal",
                                        children: [(0,
                                        jsx_runtime.jsxs)("div", {
                                            className: "flex items-center space-x-1",
                                            children: [(0,
                                            jsx_runtime.jsx)(link_default(), {
                                                href: "/users/".concat(displayAuthor.id),
                                                className: "line-clamp-1 break-all text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-200",
                                                children: username
                                            }), (0,
                                            jsx_runtime.jsx)("span", {
                                                className: "h-0.5 w-0.5 rounded-full bg-gray-700 dark:bg-gray-300"
                                            }), (0,
                                            jsx_runtime.jsxs)("span", {
                                                className: "line-clamp-1 break-all text-gray-700 dark:text-gray-300",
                                                children: [displayDateCreated, " 전"]
                                            })]
                                        }), (0,
                                        jsx_runtime.jsx)("div", {
                                            className: "text-gray-700 dark:text-gray-300",
                                            children: provider
                                        })]
                                    }), (0,
                                    jsx_runtime.jsx)(link_default(), {
                                        href: "/articles/".concat(id),
                                        className: "block truncate font-semibold text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-200",
                                        children: description
                                    })]
                                })
                            }, id)
                        }
                        )
                    })
                })]
            })
        }
        __webpack_require__(21082),
        __webpack_require__(36797),
        __webpack_require__(46648);
        let ForwardRef = react.forwardRef(function({title, titleId, ...props}, svgRef) {
            return react.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: svgRef,
                "aria-labelledby": titleId
            }, props), title ? react.createElement("title", {
                id: titleId
            }, title) : null, react.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
            }))
        });
        function FeedbackSection() {
            return (0,
            jsx_runtime.jsx)("div", {
                children: (0,
                jsx_runtime.jsx)("a", {
                    className: "group",
                    href: "/articles/1413824",
                    target: "_blank",
                    children: (0,
                    jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-x-2 rounded-md bg-[#EFF6FF] px-7 py-6 hover:no-underline dark:bg-gray-700 sm:gap-x-1.5 sm:px-3 sm:py-4",
                        children: [(0,
                        jsx_runtime.jsx)("div", {
                            className: "rounded-lg bg-blue-200 p-1.5 dark:bg-gray-500",
                            children: (0,
                            jsx_runtime.jsx)(ForwardRef, {
                                className: "h-5 w-5 bg-transparent text-white"
                            })
                        }), (0,
                        jsx_runtime.jsx)("span", {
                            className: "sm:text-3/2xs break-keep text-xs font-normal text-gray-900 hover:text-blue-500 hover:no-underline group-hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-200 dark:group-hover:text-blue-200",
                            children: "버그와 제안은 여기에 댓글로 남겨주세요."
                        })]
                    })
                })
            })
        }
        function KnowledgeSection(param) {
            let {articles: originalArticles} = param
              , {articles} = useArticlesForMain(originalArticles)
              , {trackViewItem, trackViewItemList} = useTrackEvents({
                parentCategory: types_d.bx.KNOWLEDGE
            });
            return (0,
            jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [(0,
                jsx_runtime.jsx)(link_default(), {
                    href: "/knowledge",
                    passHref: !0,
                    legacyBehavior: !0,
                    children: (0,
                    jsx_runtime.jsx)(shared_anchor.e, {
                        className: "relative mb-2 text-gray-900 no-underline dark:text-gray-100",
                        onClick() {
                            trackViewItemList(types_d.dn.HOME_LAND_PAGE)
                        },
                        children: (0,
                        jsx_runtime.jsxs)("div", {
                            className: "group relative",
                            children: [(0,
                            jsx_runtime.jsx)("div", {
                                className: "h-16 w-full rounded-xl bg-blue-50 dark:bg-gray-700",
                                children: (0,
                                jsx_runtime.jsx)(shared_image.X, {
                                    src: "pattern.svg",
                                    className: "h-full rounded-xl bg-bottom opacity-10"
                                })
                            }), (0,
                            jsx_runtime.jsx)("div", {
                                className: "absolute top-0 flex h-full w-full items-center px-8 hover:no-underline dark:hover:no-underline",
                                children: (0,
                                jsx_runtime.jsx)("span", {
                                    className: "w-full font-semibold hover:text-blue-500 hover:no-underline group-hover:text-blue-500 dark:hover:text-blue-200 dark:hover:no-underline dark:group-hover:text-blue-200 sm:text-lg",
                                    children: "지식"
                                })
                            }), (0,
                            jsx_runtime.jsxs)("div", {
                                className: "absolute -top-[4px] right-0 mr-10 h-[70px] w-[90px] overflow-y-hidden",
                                children: [(0,
                                jsx_runtime.jsx)(shared_image.Z, {
                                    src: "/knowledge.svg",
                                    alt: "knowledge",
                                    className: "dark:hidden"
                                }), (0,
                                jsx_runtime.jsx)(shared_image.Z, {
                                    src: "/darkmode/knowledge.svg",
                                    alt: "knowledge",
                                    className: "hidden dark:block"
                                })]
                            })]
                        })
                    })
                }), (0,
                jsx_runtime.jsx)("div", {
                    children: (0,
                    jsx_runtime.jsx)("ul", {
                        className: "divide-y divide-gray-500/30 dark:divide-gray-500/70",
                        children: articles.map((param,index)=>{
                            let {id, displayAuthor, title, displayCreatedAt, displayNoteCount, displayVoteCount, linkContentDetailPage} = param;
                            return (0,
                            jsx_runtime.jsxs)("li", {
                                className: "py-4 last:pb-0",
                                children: [(0,
                                jsx_runtime.jsxs)("div", {
                                    className: "mb-2 flex",
                                    children: [(0,
                                    jsx_runtime.jsxs)("div", {
                                        className: "flex flex-1 items-center space-x-1",
                                        children: [displayAuthor.isWithdrawnUser ? (0,
                                        jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [(0,
                                            jsx_runtime.jsx)("span", {
                                                children: (0,
                                                jsx_runtime.jsx)(image_avatar.Z, {
                                                    className: "h-5 w-5 rounded-full",
                                                    src: displayAuthor.displayImage,
                                                    alt: "프로필 사진"
                                                })
                                            }), (0,
                                            jsx_runtime.jsx)("span", {
                                                className: "inline text-xs font-medium text-gray-700 dark:text-gray-300 sm:text-sm",
                                                children: displayAuthor.nickname
                                            }), (0,
                                            jsx_runtime.jsx)(LockClosedIcon.Z, {
                                                className: "h-3 w-3 dark:text-gray-300"
                                            })]
                                        }) : (0,
                                        jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [(0,
                                            jsx_runtime.jsx)(link_default(), {
                                                href: "/users/".concat(displayAuthor.id),
                                                children: (0,
                                                jsx_runtime.jsx)(image_avatar.Z, {
                                                    className: "h-5 w-5 rounded-full",
                                                    src: displayAuthor.displayImage,
                                                    alt: "프로필 사진"
                                                })
                                            }), (0,
                                            jsx_runtime.jsx)(link_default(), {
                                                href: "/users/".concat(displayAuthor.id),
                                                className: "inline pl-1 text-xs font-medium text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-200 sm:text-sm",
                                                children: displayAuthor.nickname
                                            })]
                                        }), (0,
                                        jsx_runtime.jsxs)("div", {
                                            className: "text-xs font-normal leading-5 text-gray-700 dark:text-gray-300 sm:text-sm",
                                            children: [(0,
                                            jsx_runtime.jsx)("span", {
                                                className: "mr-0.5",
                                                children: "\xb7"
                                            }), (0,
                                            jsx_runtime.jsx)(bolt.Z, {
                                                className: "inline h-3 w-3"
                                            }), (0,
                                            jsx_runtime.jsxs)("span", {
                                                className: "space-x-1",
                                                children: [(0,
                                                jsx_runtime.jsx)("span", {
                                                    children: displayAuthor.abbreviatedPoint
                                                }), (0,
                                                jsx_runtime.jsx)("span", {
                                                    children: "\xb7"
                                                }), (0,
                                                jsx_runtime.jsxs)("span", {
                                                    children: [displayCreatedAt, " 전"]
                                                })]
                                            })]
                                        })]
                                    }), (0,
                                    jsx_runtime.jsxs)("div", {
                                        className: "flex space-x-2 text-gray-700 dark:text-gray-300",
                                        children: [(0,
                                        jsx_runtime.jsxs)("div", {
                                            className: "flex flex-1 items-center",
                                            children: [(0,
                                            jsx_runtime.jsx)(ChevronUpDownIcon.Z, {
                                                className: "h-4 w-4 shrink-0"
                                            }), (0,
                                            jsx_runtime.jsx)("span", {
                                                className: "text-xs font-normal sm:text-sm",
                                                children: displayVoteCount
                                            })]
                                        }), (0,
                                        jsx_runtime.jsxs)("div", {
                                            className: "flex flex-1 items-center",
                                            children: [(0,
                                            jsx_runtime.jsx)(ChatBubbleLeftEllipsisIcon.Z, {
                                                className: "h-4 w-4 shrink-0"
                                            }), (0,
                                            jsx_runtime.jsx)("span", {
                                                className: "ml-0.5 text-xs font-normal sm:text-sm",
                                                children: displayNoteCount
                                            })]
                                        })]
                                    })]
                                }), (0,
                                jsx_runtime.jsx)("div", {
                                    children: (0,
                                    jsx_runtime.jsx)(link_default(), {
                                        href: linkContentDetailPage,
                                        passHref: !0,
                                        legacyBehavior: !0,
                                        children: (0,
                                        jsx_runtime.jsx)(shared_anchor.e, {
                                            className: "line-clamp-1 w-fit break-all text-sm font-semibold text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-200 sm:text-base sm:leading-5",
                                            onClick() {
                                                trackViewItem(articles[index], types_d.oX.ARTICLE)
                                            },
                                            children: title
                                        })
                                    })
                                })]
                            }, id)
                        }
                        )
                    })
                })]
            })
        }
        function NoticeSection(param) {
            let {articles: originalArticles} = param
              , {trackViewItem, trackViewItemList} = useTrackEvents({
                parentCategory: types_d.bx.NOTICE
            })
              , {articles} = useArticlesForMain(originalArticles);
            return (0,
            jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [(0,
                jsx_runtime.jsx)(link_default(), {
                    href: "/notice",
                    passHref: !0,
                    legacyBehavior: !0,
                    children: (0,
                    jsx_runtime.jsx)(shared_anchor.e, {
                        className: "relative mb-2 text-gray-900 no-underline dark:text-gray-100",
                        onClick() {
                            trackViewItemList(types_d.dn.HOME_LAND_PAGE)
                        },
                        children: (0,
                        jsx_runtime.jsxs)("div", {
                            className: "group relative",
                            children: [(0,
                            jsx_runtime.jsx)("div", {
                                className: "h-16 w-full rounded-xl bg-blue-50 dark:bg-gray-700",
                                children: (0,
                                jsx_runtime.jsx)(shared_image.X, {
                                    src: "pattern.svg",
                                    className: "h-full rounded-xl bg-bottom opacity-10"
                                })
                            }), (0,
                            jsx_runtime.jsx)("div", {
                                className: "absolute top-0 flex h-full w-full items-center px-8 hover:no-underline dark:hover:no-underline",
                                children: (0,
                                jsx_runtime.jsx)("span", {
                                    className: "w-full font-semibold hover:text-blue-500 hover:no-underline group-hover:text-blue-500 dark:hover:text-blue-200 dark:hover:no-underline dark:group-hover:text-blue-200 sm:text-lg",
                                    children: "공지사항"
                                })
                            }), (0,
                            jsx_runtime.jsxs)("div", {
                                className: "absolute -top-[10px] right-0 mr-10 h-[74px] w-[112px] overflow-y-hidden",
                                children: [(0,
                                jsx_runtime.jsx)(shared_image.Z, {
                                    src: "/notice.svg",
                                    alt: "notice",
                                    className: "dark:hidden"
                                }), (0,
                                jsx_runtime.jsx)(shared_image.Z, {
                                    src: "/darkmode/notice.svg",
                                    alt: "notice",
                                    className: "hidden dark:block"
                                })]
                            })]
                        })
                    })
                }), (0,
                jsx_runtime.jsx)("div", {
                    children: (0,
                    jsx_runtime.jsx)("ul", {
                        className: "divide-y divide-gray-500/30 dark:divide-gray-500/70",
                        children: articles.map((param,index)=>{
                            let {id, displayAuthor, title, displayCreatedAt, displayNoteCount, displayVoteCount, linkContentDetailPage} = param;
                            return (0,
                            jsx_runtime.jsxs)("li", {
                                className: "py-4 last:pb-0",
                                children: [(0,
                                jsx_runtime.jsxs)("div", {
                                    className: "mb-2 flex",
                                    children: [(0,
                                    jsx_runtime.jsxs)("div", {
                                        className: "flex flex-1 items-center space-x-1",
                                        children: [displayAuthor.isWithdrawnUser ? (0,
                                        jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [(0,
                                            jsx_runtime.jsx)("span", {
                                                children: (0,
                                                jsx_runtime.jsx)(image_avatar.Z, {
                                                    className: "h-5 w-5 rounded-full",
                                                    src: displayAuthor.displayImage,
                                                    alt: "프로필 사진"
                                                })
                                            }), (0,
                                            jsx_runtime.jsx)("span", {
                                                className: "inline text-xs font-medium text-gray-700 dark:text-gray-300 sm:text-sm",
                                                children: displayAuthor.nickname
                                            }), (0,
                                            jsx_runtime.jsx)(LockClosedIcon.Z, {
                                                className: "h-3 w-3 dark:text-gray-300"
                                            })]
                                        }) : (0,
                                        jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [(0,
                                            jsx_runtime.jsx)(link_default(), {
                                                href: "/users/".concat(displayAuthor.id),
                                                children: (0,
                                                jsx_runtime.jsx)(image_avatar.Z, {
                                                    className: "h-5 w-5 rounded-full",
                                                    src: displayAuthor.displayImage,
                                                    alt: "프로필 사진"
                                                })
                                            }), (0,
                                            jsx_runtime.jsx)(link_default(), {
                                                href: "/users/".concat(displayAuthor.id),
                                                className: "inline pl-1 text-xs font-medium text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-200 sm:text-sm",
                                                children: displayAuthor.nickname
                                            })]
                                        }), (0,
                                        jsx_runtime.jsxs)("div", {
                                            className: "text-xs font-normal leading-5 text-gray-700 dark:text-gray-300 sm:text-sm",
                                            children: [(0,
                                            jsx_runtime.jsx)("span", {
                                                className: "mr-0.5",
                                                children: "\xb7"
                                            }), (0,
                                            jsx_runtime.jsx)(bolt.Z, {
                                                className: "inline h-3 w-3"
                                            }), (0,
                                            jsx_runtime.jsxs)("span", {
                                                className: "space-x-1",
                                                children: [(0,
                                                jsx_runtime.jsx)("span", {
                                                    children: displayAuthor.abbreviatedPoint
                                                }), (0,
                                                jsx_runtime.jsx)("span", {
                                                    children: "\xb7"
                                                }), (0,
                                                jsx_runtime.jsxs)("span", {
                                                    children: [displayCreatedAt, " 전"]
                                                })]
                                            })]
                                        })]
                                    }), (0,
                                    jsx_runtime.jsxs)("div", {
                                        className: "flex space-x-2 text-gray-700 dark:text-gray-300",
                                        children: [(0,
                                        jsx_runtime.jsxs)("div", {
                                            className: "flex flex-1 items-center",
                                            children: [(0,
                                            jsx_runtime.jsx)(ChevronUpDownIcon.Z, {
                                                className: "h-4 w-4 shrink-0"
                                            }), (0,
                                            jsx_runtime.jsx)("span", {
                                                className: "text-xs font-normal sm:text-sm",
                                                children: displayVoteCount
                                            })]
                                        }), (0,
                                        jsx_runtime.jsxs)("div", {
                                            className: "flex flex-1 items-center",
                                            children: [(0,
                                            jsx_runtime.jsx)(ChatBubbleLeftEllipsisIcon.Z, {
                                                className: "h-4 w-4 shrink-0"
                                            }), (0,
                                            jsx_runtime.jsx)("span", {
                                                className: "ml-0.5 text-xs font-normal sm:text-sm",
                                                children: displayNoteCount
                                            })]
                                        })]
                                    })]
                                }), (0,
                                jsx_runtime.jsx)("div", {
                                    children: (0,
                                    jsx_runtime.jsx)(link_default(), {
                                        href: linkContentDetailPage,
                                        passHref: !0,
                                        legacyBehavior: !0,
                                        children: (0,
                                        jsx_runtime.jsx)(shared_anchor.e, {
                                            className: "line-clamp-1 w-fit break-all text-sm font-semibold text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-200 sm:text-base sm:leading-5",
                                            onClick() {
                                                trackViewItem(articles[index], types_d.oX.ARTICLE)
                                            },
                                            children: title
                                        })
                                    })
                                })]
                            }, id)
                        }
                        )
                    })
                })]
            })
        }
        function QuestionSection(param) {
            let {articles: originalArticles} = param
              , {articles} = useArticlesForMain(originalArticles)
              , {trackViewItem, trackViewItemList} = useTrackEvents({
                parentCategory: types_d.bx.QUESTIONS
            });
            return (0,
            jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [(0,
                jsx_runtime.jsx)(link_default(), {
                    href: "/questions",
                    passHref: !0,
                    legacyBehavior: !0,
                    children: (0,
                    jsx_runtime.jsx)(shared_anchor.e, {
                        className: "relative mb-2 text-gray-900 no-underline dark:text-gray-100",
                        onClick() {
                            trackViewItemList(types_d.dn.HOME_LAND_PAGE)
                        },
                        children: (0,
                        jsx_runtime.jsxs)("div", {
                            className: "group relative",
                            children: [(0,
                            jsx_runtime.jsx)("div", {
                                className: "h-16 w-full rounded-xl bg-blue-50 dark:bg-gray-700",
                                children: (0,
                                jsx_runtime.jsx)(shared_image.X, {
                                    src: "pattern.svg",
                                    className: "h-full rounded-xl bg-right-bottom opacity-10"
                                })
                            }), (0,
                            jsx_runtime.jsx)("div", {
                                className: "absolute top-0 flex h-full w-full items-center px-8 hover:no-underline dark:hover:no-underline",
                                children: (0,
                                jsx_runtime.jsx)("span", {
                                    className: "w-full font-semibold hover:text-blue-500 hover:no-underline group-hover:text-blue-500 dark:hover:text-blue-200 dark:hover:no-underline dark:group-hover:text-blue-200 sm:text-lg",
                                    children: "Q&A"
                                })
                            }), (0,
                            jsx_runtime.jsxs)("div", {
                                className: "absolute -top-[4px] right-0 mr-6 h-[68px] w-[145px] overflow-y-hidden",
                                children: [(0,
                                jsx_runtime.jsx)(shared_image.Z, {
                                    src: "/questions.svg",
                                    alt: "questions",
                                    className: "dark:hidden"
                                }), (0,
                                jsx_runtime.jsx)(shared_image.Z, {
                                    src: "/darkmode/questions.svg",
                                    alt: "questions",
                                    className: "hidden dark:block"
                                })]
                            })]
                        })
                    })
                }), (0,
                jsx_runtime.jsx)("div", {
                    children: (0,
                    jsx_runtime.jsx)("ul", {
                        className: "divide-y divide-gray-500/30 dark:divide-gray-500/70",
                        children: articles.map((param,index)=>{
                            let {id, displayAuthor, title, displayCreatedAt, displayVoteCount, displayAnswerCount, linkContentDetailPage} = param;
                            return (0,
                            jsx_runtime.jsxs)("li", {
                                className: "py-4 last:pb-0",
                                children: [(0,
                                jsx_runtime.jsxs)("div", {
                                    className: "mb-2 flex",
                                    children: [(0,
                                    jsx_runtime.jsxs)("div", {
                                        className: "flex flex-1 items-center space-x-1",
                                        children: [displayAuthor.isWithdrawnUser ? (0,
                                        jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [(0,
                                            jsx_runtime.jsx)("span", {
                                                children: (0,
                                                jsx_runtime.jsx)(image_avatar.Z, {
                                                    className: "h-5 w-5 rounded-full",
                                                    src: displayAuthor.displayImage,
                                                    alt: "프로필 사진"
                                                })
                                            }), (0,
                                            jsx_runtime.jsx)("span", {
                                                className: "inline text-xs font-medium text-gray-700 dark:text-gray-300 sm:text-sm",
                                                children: displayAuthor.nickname
                                            }), (0,
                                            jsx_runtime.jsx)(LockClosedIcon.Z, {
                                                className: "h-3 w-3 dark:text-gray-300"
                                            })]
                                        }) : (0,
                                        jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [(0,
                                            jsx_runtime.jsx)(link_default(), {
                                                href: "/users/".concat(displayAuthor.id),
                                                children: (0,
                                                jsx_runtime.jsx)(image_avatar.Z, {
                                                    className: "h-5 w-5 rounded-full",
                                                    src: displayAuthor.displayImage,
                                                    alt: "프로필 사진"
                                                })
                                            }), (0,
                                            jsx_runtime.jsx)(link_default(), {
                                                href: "/users/".concat(displayAuthor.id),
                                                className: "inline pl-1 text-xs font-medium text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-200 sm:text-sm",
                                                children: displayAuthor.nickname
                                            })]
                                        }), (0,
                                        jsx_runtime.jsxs)("div", {
                                            className: "text-xs font-normal leading-5 text-gray-700 dark:text-gray-300 sm:text-sm",
                                            children: [(0,
                                            jsx_runtime.jsx)("span", {
                                                className: "mr-0.5",
                                                children: "\xb7"
                                            }), (0,
                                            jsx_runtime.jsx)(bolt.Z, {
                                                className: "inline h-3 w-3"
                                            }), (0,
                                            jsx_runtime.jsxs)("span", {
                                                className: "space-x-1",
                                                children: [(0,
                                                jsx_runtime.jsx)("span", {
                                                    children: displayAuthor.abbreviatedPoint
                                                }), (0,
                                                jsx_runtime.jsx)("span", {
                                                    children: "\xb7"
                                                }), (0,
                                                jsx_runtime.jsxs)("span", {
                                                    children: [displayCreatedAt, " 전"]
                                                })]
                                            })]
                                        })]
                                    }), (0,
                                    jsx_runtime.jsxs)("div", {
                                        className: "flex space-x-2 text-gray-700 dark:text-gray-300",
                                        children: [(0,
                                        jsx_runtime.jsxs)("div", {
                                            className: "flex flex-1 items-center",
                                            children: [(0,
                                            jsx_runtime.jsx)(ChevronUpDownIcon.Z, {
                                                className: "h-4 w-4 shrink-0"
                                            }), (0,
                                            jsx_runtime.jsx)("span", {
                                                className: "text-xs font-normal sm:text-sm",
                                                children: displayVoteCount
                                            })]
                                        }), (0,
                                        jsx_runtime.jsxs)("div", {
                                            className: "flex flex-1 items-center",
                                            children: [(0,
                                            jsx_runtime.jsx)(ChatBubbleLeftEllipsisIcon.Z, {
                                                className: "h-4 w-4 shrink-0"
                                            }), (0,
                                            jsx_runtime.jsx)("span", {
                                                className: "ml-0.5 text-xs font-normal sm:text-sm",
                                                children: displayAnswerCount
                                            })]
                                        })]
                                    })]
                                }), (0,
                                jsx_runtime.jsx)("div", {
                                    children: (0,
                                    jsx_runtime.jsx)(link_default(), {
                                        href: linkContentDetailPage,
                                        passHref: !0,
                                        legacyBehavior: !0,
                                        children: (0,
                                        jsx_runtime.jsx)(shared_anchor.e, {
                                            className: "line-clamp-1 w-fit break-all text-sm font-semibold text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-200 sm:text-base sm:leading-5",
                                            onClick() {
                                                trackViewItem(articles[index], types_d.oX.QUESTIONS)
                                            },
                                            children: title
                                        })
                                    })
                                })]
                            }, id)
                        }
                        )
                    })
                })]
            })
        }
        var top_writers_section = __webpack_require__(56980);
        function WeeklyBestSection(param) {
            let {articles: originalArticles} = param
              , {articles} = useArticlesForMain(originalArticles)
              , {trackViewItem} = useTrackEvents({
                parentCategory: types_d.bx.WEEKLY_BEST
            });
            return (0,
            jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [(0,
                jsx_runtime.jsx)("div", {
                    className: "relative mb-2",
                    children: (0,
                    jsx_runtime.jsxs)("div", {
                        className: "relative",
                        children: [(0,
                        jsx_runtime.jsx)("div", {
                            className: "h-16 w-full rounded-xl bg-blue-50 dark:bg-gray-700",
                            children: (0,
                            jsx_runtime.jsx)(shared_image.X, {
                                src: "pattern.svg",
                                className: "h-full rounded-xl bg-right-top opacity-10"
                            })
                        }), (0,
                        jsx_runtime.jsx)("div", {
                            className: "absolute top-0 flex h-full w-full items-center px-8",
                            children: (0,
                            jsx_runtime.jsx)("span", {
                                className: "w-full font-semibold text-gray-900 dark:text-gray-100 sm:text-lg",
                                children: "WEEKLY BEST"
                            })
                        }), (0,
                        jsx_runtime.jsxs)("div", {
                            className: "absolute -top-[9px] right-0 mr-10 h-[73px] w-[117px] overflow-y-hidden",
                            children: [(0,
                            jsx_runtime.jsx)(shared_image.Z, {
                                src: "/weekly-best.svg",
                                alt: "weekly best",
                                className: "dark:hidden"
                            }), (0,
                            jsx_runtime.jsx)(shared_image.Z, {
                                src: "/darkmode/weekly-best.svg",
                                alt: "weekly best",
                                className: "hidden dark:block"
                            })]
                        })]
                    })
                }), (0,
                jsx_runtime.jsx)("div", {
                    children: (0,
                    jsx_runtime.jsx)("ul", {
                        className: "divide-y divide-gray-500/30 dark:divide-gray-500/70",
                        children: articles.map((param,index)=>{
                            let {id, displayAuthor, title, displayCreatedAt, displayNoteCount, displayVoteCount, linkContentDetailPage} = param;
                            return (0,
                            jsx_runtime.jsxs)("li", {
                                className: "py-4 last:pb-0",
                                children: [(0,
                                jsx_runtime.jsxs)("div", {
                                    className: "mb-2 flex",
                                    children: [(0,
                                    jsx_runtime.jsxs)("div", {
                                        className: "flex flex-1 items-center space-x-1",
                                        children: [displayAuthor.isWithdrawnUser ? (0,
                                        jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [(0,
                                            jsx_runtime.jsx)("span", {
                                                children: (0,
                                                jsx_runtime.jsx)(image_avatar.Z, {
                                                    className: "h-5 w-5 rounded-full",
                                                    src: displayAuthor.displayImage,
                                                    alt: "프로필 사진"
                                                })
                                            }), (0,
                                            jsx_runtime.jsx)("span", {
                                                className: "inline text-xs font-medium text-gray-700 dark:text-gray-300 sm:text-sm",
                                                children: displayAuthor.nickname
                                            }), (0,
                                            jsx_runtime.jsx)(LockClosedIcon.Z, {
                                                className: "h-3 w-3 dark:text-gray-300"
                                            })]
                                        }) : (0,
                                        jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [(0,
                                            jsx_runtime.jsx)(link_default(), {
                                                href: "/users/".concat(displayAuthor.id),
                                                children: (0,
                                                jsx_runtime.jsx)(image_avatar.Z, {
                                                    className: "h-5 w-5 rounded-full",
                                                    src: displayAuthor.displayImage,
                                                    alt: "프로필 사진"
                                                })
                                            }), (0,
                                            jsx_runtime.jsx)(link_default(), {
                                                href: "/users/".concat(displayAuthor.id),
                                                className: "inline pl-1 text-xs font-medium text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-200 sm:text-sm",
                                                children: displayAuthor.nickname
                                            })]
                                        }), (0,
                                        jsx_runtime.jsxs)("div", {
                                            className: "text-xs font-normal leading-5 text-gray-700 dark:text-gray-300 sm:text-sm",
                                            children: [(0,
                                            jsx_runtime.jsx)("span", {
                                                className: "mr-0.5",
                                                children: "\xb7"
                                            }), (0,
                                            jsx_runtime.jsx)(bolt.Z, {
                                                className: "inline h-3 w-3"
                                            }), (0,
                                            jsx_runtime.jsxs)("span", {
                                                className: "space-x-1",
                                                children: [(0,
                                                jsx_runtime.jsx)("span", {
                                                    children: displayAuthor.abbreviatedPoint
                                                }), (0,
                                                jsx_runtime.jsx)("span", {
                                                    children: "\xb7"
                                                }), (0,
                                                jsx_runtime.jsxs)("span", {
                                                    children: [displayCreatedAt, " 전"]
                                                })]
                                            })]
                                        })]
                                    }), (0,
                                    jsx_runtime.jsxs)("div", {
                                        className: "flex space-x-2 text-gray-700 dark:text-gray-300",
                                        children: [(0,
                                        jsx_runtime.jsxs)("div", {
                                            className: "flex flex-1 items-center",
                                            children: [(0,
                                            jsx_runtime.jsx)(ChevronUpDownIcon.Z, {
                                                className: "h-4 w-4 shrink-0"
                                            }), (0,
                                            jsx_runtime.jsx)("span", {
                                                className: "text-xs font-normal sm:text-sm",
                                                children: displayVoteCount
                                            })]
                                        }), (0,
                                        jsx_runtime.jsxs)("div", {
                                            className: "flex flex-1 items-center",
                                            children: [(0,
                                            jsx_runtime.jsx)(ChatBubbleLeftEllipsisIcon.Z, {
                                                className: "h-4 w-4 shrink-0"
                                            }), (0,
                                            jsx_runtime.jsx)("span", {
                                                className: "ml-0.5 text-xs font-normal sm:text-sm",
                                                children: displayNoteCount
                                            })]
                                        })]
                                    })]
                                }), (0,
                                jsx_runtime.jsx)("div", {
                                    children: (0,
                                    jsx_runtime.jsx)(link_default(), {
                                        href: linkContentDetailPage,
                                        passHref: !0,
                                        legacyBehavior: !0,
                                        children: (0,
                                        jsx_runtime.jsx)(shared_anchor.e, {
                                            className: "line-clamp-1 w-fit break-all text-sm font-semibold text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-200 sm:text-base sm:leading-5",
                                            onClick() {
                                                trackViewItem(articles[index], types_d.oX.ARTICLE)
                                            },
                                            children: title
                                        })
                                    })
                                })]
                            }, id)
                        }
                        )
                    })
                })]
            })
        }
        var __N_SSP = !0;
        function IndexPage(param) {
            let {result: {questions, community, weeklyBest, editorsChoice, knowledge, notice}} = param;
            return (0,
            jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: (0,
                jsx_runtime.jsxs)(context.ZP, {
                    typeGroup: "MAIN",
                    children: [(0,
                    jsx_runtime.jsx)(header.Z, {}), (0,
                    jsx_runtime.jsx)("main", {
                        className: "mx-auto mt-2 w-full max-w-7xl px-4 lg:mt-[18px] lg:px-0",
                        children: (0,
                        jsx_runtime.jsxs)("div", {
                            className: "flex lg:space-x-10",
                            children: [(0,
                            jsx_runtime.jsxs)("div", {
                                className: "hidden w-[180px] shrink-0 lg:block",
                                children: [(0,
                                jsx_runtime.jsx)(banner_law_service.ZP, {}), (0,
                                jsx_runtime.jsx)("div", {
                                    className: "mt-10 mb-8",
                                    children: (0,
                                    jsx_runtime.jsx)(OH4.Z, {})
                                }), (0,
                                jsx_runtime.jsx)("div", {
                                    className: "my-8",
                                    children: (0,
                                    jsx_runtime.jsx)(FeedbackSection, {})
                                }), (0,
                                jsx_runtime.jsx)("div", {
                                    children: (0,
                                    jsx_runtime.jsx)(top_writers_section.Z, {})
                                })]
                            }), (0,
                            jsx_runtime.jsx)("div", {
                                className: "w-full min-w-0 flex-auto lg:static lg:max-h-full lg:overflow-visible",
                                children: (0,
                                jsx_runtime.jsxs)("div", {
                                    className: "min-w-0 flex-auto",
                                    children: [(0,
                                    jsx_runtime.jsx)(OH1.N, {}), (0,
                                    jsx_runtime.jsx)(OH1.a, {}), (0,
                                    jsx_runtime.jsxs)("div", {
                                        className: "my-8 flex flex-col gap-x-10 gap-y-10 md:flex-row",
                                        children: [(0,
                                        jsx_runtime.jsx)("div", {
                                            className: "w-full",
                                            children: (0,
                                            jsx_runtime.jsx)(QuestionSection, {
                                                articles: questions
                                            })
                                        }), (0,
                                        jsx_runtime.jsx)(banner_law_service.Bx, {}), (0,
                                        jsx_runtime.jsx)("div", {
                                            className: "w-full",
                                            children: (0,
                                            jsx_runtime.jsx)(CommunitySection, {
                                                articles: community
                                            })
                                        })]
                                    }), (0,
                                    jsx_runtime.jsx)("div", {
                                        className: "my-8 lg:hidden",
                                        children: (0,
                                        jsx_runtime.jsx)(OH2.G, {})
                                    }), (0,
                                    jsx_runtime.jsx)("div", {
                                        className: "my-8 sm:my-16"
                                    }), (0,
                                    jsx_runtime.jsxs)("div", {
                                        className: "my-8 flex flex-col gap-x-10 gap-y-10 md:flex-row",
                                        children: [(0,
                                        jsx_runtime.jsx)("div", {
                                            className: "w-full",
                                            children: (0,
                                            jsx_runtime.jsx)(WeeklyBestSection, {
                                                articles: weeklyBest
                                            })
                                        }), (0,
                                        jsx_runtime.jsx)("div", {
                                            className: "w-full",
                                            children: (0,
                                            jsx_runtime.jsx)(EditorsChoiceSection, {
                                                articles: editorsChoice
                                            })
                                        })]
                                    }), (0,
                                    jsx_runtime.jsx)("div", {
                                        className: "my-8 lg:hidden",
                                        children: (0,
                                        jsx_runtime.jsx)(OH3.w, {})
                                    }), (0,
                                    jsx_runtime.jsx)("div", {
                                        className: "my-8 sm:my-16"
                                    }), (0,
                                    jsx_runtime.jsxs)("div", {
                                        className: "my-8 flex flex-col gap-x-10 gap-y-10 md:flex-row",
                                        children: [(0,
                                        jsx_runtime.jsx)("div", {
                                            className: "w-full",
                                            children: (0,
                                            jsx_runtime.jsx)(KnowledgeSection, {
                                                articles: knowledge
                                            })
                                        }), (0,
                                        jsx_runtime.jsx)("div", {
                                            className: "w-full",
                                            children: (0,
                                            jsx_runtime.jsx)(NoticeSection, {
                                                articles: notice
                                            })
                                        })]
                                    }), (0,
                                    jsx_runtime.jsx)("div", {
                                        className: "my-8 lg:hidden",
                                        children: (0,
                                        jsx_runtime.jsx)(banner_law_service.cm, {})
                                    }), (0,
                                    jsx_runtime.jsx)("div", {
                                        className: "my-8 sm:my-16",
                                        children: (0,
                                        jsx_runtime.jsx)(EventsSection, {})
                                    }), (0,
                                    jsx_runtime.jsxs)("div", {
                                        className: "my-4 sm:my-8",
                                        children: [(0,
                                        jsx_runtime.jsx)(OH5Desktop, {}), (0,
                                        jsx_runtime.jsx)(OH5Mobile, {})]
                                    }), (0,
                                    jsx_runtime.jsx)("div", {
                                        className: "my-8 lg:hidden",
                                        children: (0,
                                        jsx_runtime.jsx)(FeedbackSection, {})
                                    }), (0,
                                    jsx_runtime.jsx)("div", {
                                        className: "my-8 lg:hidden",
                                        children: (0,
                                        jsx_runtime.jsx)(OH4.A, {})
                                    })]
                                })
                            }), (0,
                            jsx_runtime.jsxs)("div", {
                                className: "hidden w-[180px] flex-none space-y-4 lg:block",
                                children: [(0,
                                jsx_runtime.jsx)(OH2.O, {}), (0,
                                jsx_runtime.jsx)(OH3.G, {})]
                            })]
                        })
                    }), (0,
                    jsx_runtime.jsx)("div", {
                        className: "relative mt-16 sm:mt-20",
                        children: (0,
                        jsx_runtime.jsx)(footer.Z, {})
                    })]
                })
            })
        }
    }
}, function(__webpack_require__) {
    __webpack_require__.O(0, [1664, 8213, 942, 7156, 8485, 9774, 2888, 179], function() {
        return __webpack_require__(__webpack_require__.s = 48312)
    }),
    _N_E = __webpack_require__.O()
}
]);
