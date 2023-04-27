(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
    59511: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        let hadFocusVisibleRecentlyTimeout, generate, _t, _t2, _t3, _t4;
        __webpack_require__.d(__webpack_exports__, {
            Mn: function() {
                return CommandButton
            },
            ZI: function() {
                return FloatingToolbar
            },
            jQ: function() {
                return FloatingWrapper
            },
            JO: function() {
                return Icon
            },
            T8: function() {
                return MentionAtomPopupComponent
            }
        });
        var _generatorOptions, _generatorOptions$def, defaultModifiers, _generatorOptions$def2, defaultOptions, remirror_icons_namespaceObject = {};
        __webpack_require__.r(remirror_icons_namespaceObject),
        __webpack_require__.d(remirror_icons_namespaceObject, {
            ab: function() {
                return ab
            },
            addFill: function() {
                return addFill
            },
            addLine: function() {
                return addLine
            },
            alertLine: function() {
                return alertLine
            },
            alignBottom: function() {
                return alignBottom
            },
            alignCenter: function() {
                return alignCenter
            },
            alignJustify: function() {
                return alignJustify
            },
            alignLeft: function() {
                return alignLeft
            },
            alignRight: function() {
                return alignRight
            },
            alignTop: function() {
                return alignTop
            },
            alignVertically: function() {
                return alignVertically
            },
            appsLine: function() {
                return appsLine
            },
            arrowDownSFill: function() {
                return arrowDownSFill
            },
            arrowGoBackFill: function() {
                return arrowGoBackFill
            },
            arrowGoForwardFill: function() {
                return arrowGoForwardFill
            },
            arrowLeftSFill: function() {
                return arrowLeftSFill
            },
            arrowRightSFill: function() {
                return arrowRightSFill
            },
            arrowUpSFill: function() {
                return arrowUpSFill
            },
            asterisk: function() {
                return asterisk
            },
            attachment2: function() {
                return attachment2
            },
            bold: function() {
                return bold
            },
            bracesLine: function() {
                return bracesLine
            },
            bringForward: function() {
                return bringForward
            },
            bringToFront: function() {
                return bringToFront
            },
            chatNewLine: function() {
                return chatNewLine
            },
            checkboxCircleLine: function() {
                return checkboxCircleLine
            },
            checkboxMultipleLine: function() {
                return checkboxMultipleLine
            },
            clipboardFill: function() {
                return clipboardFill
            },
            clipboardLine: function() {
                return clipboardLine
            },
            closeCircleLine: function() {
                return closeCircleLine
            },
            closeFill: function() {
                return closeFill
            },
            closeLine: function() {
                return closeLine
            },
            codeLine: function() {
                return codeLine
            },
            codeView: function() {
                return codeView
            },
            deleteBinFill: function() {
                return deleteBinFill
            },
            deleteBinLine: function() {
                return deleteBinLine
            },
            deleteColumn: function() {
                return deleteColumn
            },
            deleteRow: function() {
                return deleteRow
            },
            doubleQuotesL: function() {
                return doubleQuotesL
            },
            doubleQuotesR: function() {
                return doubleQuotesR
            },
            download2Fill: function() {
                return download2Fill
            },
            dragDropLine: function() {
                return dragDropLine
            },
            emphasis: function() {
                return emphasis
            },
            emphasisCn: function() {
                return emphasisCn
            },
            englishInput: function() {
                return englishInput
            },
            errorWarningLine: function() {
                return errorWarningLine
            },
            externalLinkFill: function() {
                return externalLinkFill
            },
            fileCopyLine: function() {
                return fileCopyLine
            },
            flowChart: function() {
                return flowChart
            },
            fontColor: function() {
                return fontColor
            },
            fontSize: function() {
                return fontSize
            },
            fontSize2: function() {
                return fontSize2
            },
            formatClear: function() {
                return formatClear
            },
            fullscreenExitLine: function() {
                return fullscreenExitLine
            },
            fullscreenLine: function() {
                return fullscreenLine
            },
            functions: function() {
                return functions
            },
            galleryUploadLine: function() {
                return galleryUploadLine
            },
            h1: function() {
                return h1
            },
            h2: function() {
                return h2
            },
            h3: function() {
                return h3
            },
            h4: function() {
                return h4
            },
            h5: function() {
                return h5
            },
            h6: function() {
                return h6
            },
            hashtag: function() {
                return hashtag
            },
            heading: function() {
                return heading
            },
            imageAddLine: function() {
                return imageAddLine
            },
            imageEditLine: function() {
                return imageEditLine
            },
            imageLine: function() {
                return imageLine
            },
            indentDecrease: function() {
                return indentDecrease
            },
            indentIncrease: function() {
                return indentIncrease
            },
            informationLine: function() {
                return informationLine
            },
            inputCursorMove: function() {
                return inputCursorMove
            },
            insertColumnLeft: function() {
                return insertColumnLeft
            },
            insertColumnRight: function() {
                return insertColumnRight
            },
            insertRowBottom: function() {
                return insertRowBottom
            },
            insertRowTop: function() {
                return insertRowTop
            },
            italic: function() {
                return italic
            },
            layoutColumnLine: function() {
                return layoutColumnLine
            },
            lineHeight: function() {
                return lineHeight
            },
            link: function() {
                return remirror_icons_link
            },
            linkM: function() {
                return linkM
            },
            linkUnlink: function() {
                return linkUnlink
            },
            linkUnlinkM: function() {
                return linkUnlinkM
            },
            listCheck: function() {
                return listCheck
            },
            listCheck2: function() {
                return listCheck2
            },
            listOrdered: function() {
                return listOrdered
            },
            listUnordered: function() {
                return listUnordered
            },
            markPenLine: function() {
                return markPenLine
            },
            markdownFill: function() {
                return markdownFill
            },
            markdownLine: function() {
                return markdownLine
            },
            mergeCellsHorizontal: function() {
                return mergeCellsHorizontal
            },
            mergeCellsVertical: function() {
                return mergeCellsVertical
            },
            mindMap: function() {
                return mindMap
            },
            moreFill: function() {
                return moreFill
            },
            nodeTree: function() {
                return nodeTree
            },
            number0: function() {
                return number0
            },
            number1: function() {
                return number1
            },
            number2: function() {
                return number2
            },
            number3: function() {
                return number3
            },
            number4: function() {
                return number4
            },
            number5: function() {
                return number5
            },
            number6: function() {
                return number6
            },
            number7: function() {
                return number7
            },
            number8: function() {
                return number8
            },
            number9: function() {
                return number9
            },
            omega: function() {
                return omega
            },
            organizationChart: function() {
                return organizationChart
            },
            pageSeparator: function() {
                return pageSeparator
            },
            paragraph: function() {
                return paragraph
            },
            pencilFill: function() {
                return pencilFill
            },
            pencilLine: function() {
                return pencilLine
            },
            pinyinInput: function() {
                return pinyinInput
            },
            questionMark: function() {
                return questionMark
            },
            roundedCorner: function() {
                return roundedCorner
            },
            scissorsFill: function() {
                return scissorsFill
            },
            sendBackward: function() {
                return sendBackward
            },
            sendToBack: function() {
                return sendToBack
            },
            separator: function() {
                return separator
            },
            singleQuotesL: function() {
                return singleQuotesL
            },
            singleQuotesR: function() {
                return singleQuotesR
            },
            sortAsc: function() {
                return sortAsc
            },
            sortDesc: function() {
                return sortDesc
            },
            space: function() {
                return space
            },
            spamLine: function() {
                return spamLine
            },
            splitCellsHorizontal: function() {
                return splitCellsHorizontal
            },
            splitCellsVertical: function() {
                return splitCellsVertical
            },
            strikethrough: function() {
                return strikethrough
            },
            strikethrough2: function() {
                return strikethrough2
            },
            subscript: function() {
                return subscript
            },
            subscript2: function() {
                return subscript2
            },
            subtractLine: function() {
                return subtractLine
            },
            superscript: function() {
                return superscript
            },
            superscript2: function() {
                return superscript2
            },
            table2: function() {
                return table2
            },
            tableLine: function() {
                return tableLine
            },
            text: function() {
                return remirror_icons_text
            },
            textDirectionL: function() {
                return textDirectionL
            },
            textDirectionR: function() {
                return textDirectionR
            },
            textSpacing: function() {
                return textSpacing
            },
            textWrap: function() {
                return textWrap
            },
            translate: function() {
                return translate
            },
            translate2: function() {
                return translate2
            },
            underline: function() {
                return underline
            },
            upload2Fill: function() {
                return upload2Fill
            },
            videoLine: function() {
                return videoLine
            },
            wubiInput: function() {
                return wubiInput
            }
        });
        var react = __webpack_require__(2784)
          , react_namespaceObject = __webpack_require__.t(react, 2)
          , objectWithoutPropertiesLoose = __webpack_require__(98283)
          , esm_extends = __webpack_require__(7560)
          , clsx_m = function() {
            for (var e, t, f = 0, n = ""; f < arguments.length; )
                (e = arguments[f++]) && (t = function r(e) {
                    var t, f, n = "";
                    if ("string" == typeof e || "number" == typeof e)
                        n += e;
                    else if ("object" == typeof e) {
                        if (Array.isArray(e))
                            for (t = 0; t < e.length; t++)
                                e[t] && (f = r(e[t])) && (n && (n += " "),
                                n += f);
                        else
                            for (t in e)
                                e[t] && (n && (n += " "),
                                n += t)
                    }
                    return n
                }(e)) && (n && (n += " "),
                n += t);
            return n
        };
        function composeClasses(slots, getUtilityClass, classes) {
            let output = {};
            return Object.keys(slots).forEach(slot=>{
                output[slot] = slots[slot].reduce((acc,key)=>(key && (acc.push(getUtilityClass(key)),
                classes && classes[key] && acc.push(classes[key])),
                acc), []).join(" ")
            }
            ),
            output
        }
        function appendOwnerState(elementType, otherProps, ownerState) {
            return void 0 === elementType || "string" == typeof elementType ? otherProps : (0,
            esm_extends.Z)({}, otherProps, {
                ownerState: (0,
                esm_extends.Z)({}, otherProps.ownerState, ownerState)
            })
        }
        function formatMuiErrorMessage(code) {
            let url = "https://mui.com/production-error/?code=" + code;
            for (let i = 1; i < arguments.length; i += 1)
                url += "&args[]=" + encodeURIComponent(arguments[i]);
            return "Minified MUI error #" + code + "; visit " + url + " for the full message."
        }
        function clamp(value, min=0, max=1) {
            return Math.min(Math.max(min, value), max)
        }
        function decomposeColor(color) {
            let colorSpace;
            if (color.type)
                return color;
            if ("#" === color.charAt(0))
                return decomposeColor(function(color) {
                    color = color.slice(1);
                    let re = RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, "g")
                      , colors = color.match(re);
                    return colors && 1 === colors[0].length && (colors = colors.map(n=>n + n)),
                    colors ? `rgb${4 === colors.length ? "a" : ""}(${colors.map((n,index)=>index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : ""
                }(color));
            let marker = color.indexOf("(")
              , type = color.substring(0, marker);
            if (-1 === ["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type))
                throw Error(formatMuiErrorMessage(9, color));
            let values = color.substring(marker + 1, color.length - 1);
            if ("color" === type) {
                if (colorSpace = (values = values.split(" ")).shift(),
                4 === values.length && "/" === values[3].charAt(0) && (values[3] = values[3].slice(1)),
                -1 === ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(colorSpace))
                    throw Error(formatMuiErrorMessage(10, colorSpace))
            } else
                values = values.split(",");
            return values = values.map(value=>parseFloat(value)),
            {
                type,
                values,
                colorSpace
            }
        }
        function recomposeColor(color) {
            let {type, colorSpace} = color
              , {values} = color;
            return -1 !== type.indexOf("rgb") ? values = values.map((n,i)=>i < 3 ? parseInt(n, 10) : n) : -1 !== type.indexOf("hsl") && (values[1] = `${values[1]}%`,
            values[2] = `${values[2]}%`),
            `${type}(${values = -1 !== type.indexOf("color") ? `${colorSpace} ${values.join(" ")}` : `${values.join(", ")}`})`
        }
        function getLuminance(color) {
            let rgb = "hsl" === (color = decomposeColor(color)).type || "hsla" === color.type ? decomposeColor(function(color) {
                color = decomposeColor(color);
                let {values} = color
                  , h = values[0]
                  , s = values[1] / 100
                  , l = values[2] / 100
                  , a = s * Math.min(l, 1 - l)
                  , f = (n,k=(n + h / 30) % 12)=>l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
                  , type = "rgb"
                  , rgb = [Math.round(255 * f(0)), Math.round(255 * f(8)), Math.round(255 * f(4))];
                return "hsla" === color.type && (type += "a",
                rgb.push(values[3])),
                recomposeColor({
                    type,
                    values: rgb
                })
            }(color)).values : color.values;
            return Number((.2126 * (rgb = rgb.map(val=>("color" !== color.type && (val /= 255),
            val <= .03928 ? val / 12.92 : ((val + .055) / 1.055) ** 2.4)))[0] + .7152 * rgb[1] + .0722 * rgb[2]).toFixed(3))
        }
        function alpha(color, value) {
            return color = decomposeColor(color),
            value = clamp(value),
            ("rgb" === color.type || "hsl" === color.type) && (color.type += "a"),
            "color" === color.type ? color.values[3] = `/${value}` : color.values[3] = value,
            recomposeColor(color)
        }
        var emotion_memoize_esm = __webpack_require__(86894)
          , reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/
          , isPropValid = (0,
        emotion_memoize_esm.Z)(function(prop) {
            return reactPropsRegex.test(prop) || 111 === prop.charCodeAt(0) && 110 === prop.charCodeAt(1) && 91 > prop.charCodeAt(2)
        })
          , emotion_element_6a883da9_browser_esm = __webpack_require__(66330)
          , emotion_utils_browser_esm = __webpack_require__(82792)
          , emotion_serialize_browser_esm = __webpack_require__(40653)
          , emotion_use_insertion_effect_with_fallbacks_browser_esm = __webpack_require__(82668)
          , testOmitPropsOnComponent = function(key) {
            return "theme" !== key
        }
          , getDefaultShouldForwardProp = function(tag) {
            return "string" == typeof tag && tag.charCodeAt(0) > 96 ? isPropValid : testOmitPropsOnComponent
        }
          , composeShouldForwardProps = function(tag, options, isReal) {
            var shouldForwardProp;
            if (options) {
                var optionsShouldForwardProp = options.shouldForwardProp;
                shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
                    return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName)
                }
                : optionsShouldForwardProp
            }
            return "function" != typeof shouldForwardProp && isReal && (shouldForwardProp = tag.__emotion_forwardProp),
            shouldForwardProp
        }
          , Insertion = function(_ref) {
            var cache = _ref.cache
              , serialized = _ref.serialized
              , isStringTag = _ref.isStringTag;
            return (0,
            emotion_utils_browser_esm.hC)(cache, serialized, isStringTag),
            (0,
            emotion_use_insertion_effect_with_fallbacks_browser_esm.L)(function() {
                return (0,
                emotion_utils_browser_esm.My)(cache, serialized, isStringTag)
            }),
            null
        }
          , newStyled = (function createStyled(tag, options) {
            var identifierName, targetClassName, isReal = tag.__emotion_real === tag, baseTag = isReal && tag.__emotion_base || tag;
            void 0 !== options && (identifierName = options.label,
            targetClassName = options.target);
            var shouldForwardProp = composeShouldForwardProps(tag, options, isReal)
              , defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag)
              , shouldUseAs = !defaultShouldForwardProp("as");
            return function() {
                var args = arguments
                  , styles = isReal && void 0 !== tag.__emotion_styles ? tag.__emotion_styles.slice(0) : [];
                if (void 0 !== identifierName && styles.push("label:" + identifierName + ";"),
                null == args[0] || void 0 === args[0].raw)
                    styles.push.apply(styles, args);
                else {
                    styles.push(args[0][0]);
                    for (var len = args.length, i = 1; i < len; i++)
                        styles.push(args[i], args[0][i])
                }
                var Styled = (0,
                emotion_element_6a883da9_browser_esm.w)(function(props, cache, ref) {
                    var FinalTag = shouldUseAs && props.as || baseTag
                      , className = ""
                      , classInterpolations = []
                      , mergedProps = props;
                    if (null == props.theme) {
                        for (var key in mergedProps = {},
                        props)
                            mergedProps[key] = props[key];
                        mergedProps.theme = (0,
                        react.useContext)(emotion_element_6a883da9_browser_esm.T)
                    }
                    "string" == typeof props.className ? className = (0,
                    emotion_utils_browser_esm.fp)(cache.registered, classInterpolations, props.className) : null != props.className && (className = props.className + " ");
                    var serialized = (0,
                    emotion_serialize_browser_esm.O)(styles.concat(classInterpolations), cache.registered, mergedProps);
                    className += cache.key + "-" + serialized.name,
                    void 0 !== targetClassName && (className += " " + targetClassName);
                    var finalShouldForwardProp = shouldUseAs && void 0 === shouldForwardProp ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp
                      , newProps = {};
                    for (var _key in props)
                        (!shouldUseAs || "as" !== _key) && finalShouldForwardProp(_key) && (newProps[_key] = props[_key]);
                    return newProps.className = className,
                    newProps.ref = ref,
                    (0,
                    react.createElement)(react.Fragment, null, (0,
                    react.createElement)(Insertion, {
                        cache: cache,
                        serialized: serialized,
                        isStringTag: "string" == typeof FinalTag
                    }), (0,
                    react.createElement)(FinalTag, newProps))
                });
                return Styled.displayName = void 0 !== identifierName ? identifierName : "Styled(" + ("string" == typeof baseTag ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")",
                Styled.defaultProps = tag.defaultProps,
                Styled.__emotion_real = Styled,
                Styled.__emotion_base = baseTag,
                Styled.__emotion_styles = styles,
                Styled.__emotion_forwardProp = shouldForwardProp,
                Object.defineProperty(Styled, "toString", {
                    value: function() {
                        return "." + targetClassName
                    }
                }),
                Styled.withComponent = function(nextTag, nextOptions) {
                    return createStyled(nextTag, (0,
                    esm_extends.Z)({}, options, nextOptions, {
                        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, !0)
                    })).apply(void 0, styles)
                }
                ,
                Styled
            }
        }
        ).bind();
        /**
 * @mui/styled-engine v5.11.11
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        function styled(tag, options) {
            let stylesFactory = newStyled(tag, options);
            return stylesFactory
        }
        ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach(function(tagName) {
            newStyled[tagName] = newStyled(tagName)
        });
        let internal_processStyles = (tag,processor)=>{
            Array.isArray(tag.__emotion_styles) && (tag.__emotion_styles = processor(tag.__emotion_styles))
        }
        ;
        function isPlainObject(item) {
            return null !== item && "object" == typeof item && item.constructor === Object
        }
        function deepmerge(target, source, options={
            clone: !0
        }) {
            let output = options.clone ? (0,
            esm_extends.Z)({}, target) : target;
            return isPlainObject(target) && isPlainObject(source) && Object.keys(source).forEach(key=>{
                "__proto__" !== key && (isPlainObject(source[key]) && key in target && isPlainObject(target[key]) ? output[key] = deepmerge(target[key], source[key], options) : options.clone ? output[key] = isPlainObject(source[key]) ? function deepClone(source) {
                    if (!isPlainObject(source))
                        return source;
                    let output = {};
                    return Object.keys(source).forEach(key=>{
                        output[key] = deepClone(source[key])
                    }
                    ),
                    output
                }(source[key]) : source[key] : output[key] = source[key])
            }
            ),
            output
        }
        let _excluded = ["values", "unit", "step"]
          , sortBreakpointsValues = values=>{
            let breakpointsAsArray = Object.keys(values).map(key=>({
                key,
                val: values[key]
            })) || [];
            return breakpointsAsArray.sort((breakpoint1,breakpoint2)=>breakpoint1.val - breakpoint2.val),
            breakpointsAsArray.reduce((acc,obj)=>(0,
            esm_extends.Z)({}, acc, {
                [obj.key]: obj.val
            }), {})
        }
        ;
        var createTheme_shape = {
            borderRadius: 4
        };
        let values = {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
          , defaultBreakpoints = {
            keys: ["xs", "sm", "md", "lg", "xl"],
            up: key=>`@media (min-width:${values[key]}px)`
        };
        function handleBreakpoints(props, propValue, styleFromPropValue) {
            let theme = props.theme || {};
            if (Array.isArray(propValue)) {
                let themeBreakpoints = theme.breakpoints || defaultBreakpoints;
                return propValue.reduce((acc,item,index)=>(acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]),
                acc), {})
            }
            if ("object" == typeof propValue) {
                let themeBreakpoints1 = theme.breakpoints || defaultBreakpoints;
                return Object.keys(propValue).reduce((acc,breakpoint)=>{
                    if (-1 !== Object.keys(themeBreakpoints1.values || values).indexOf(breakpoint)) {
                        let mediaKey = themeBreakpoints1.up(breakpoint);
                        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint)
                    } else
                        acc[breakpoint] = propValue[breakpoint];
                    return acc
                }
                , {})
            }
            let output = styleFromPropValue(propValue);
            return output
        }
        function createEmptyBreakpointObject(breakpointsInput={}) {
            var _breakpointsInput$key;
            let breakpointsInOrder = null == (_breakpointsInput$key = breakpointsInput.keys) ? void 0 : _breakpointsInput$key.reduce((acc,key)=>{
                let breakpointStyleKey = breakpointsInput.up(key);
                return acc[breakpointStyleKey] = {},
                acc
            }
            , {});
            return breakpointsInOrder || {}
        }
        function removeUnusedBreakpoints(breakpointKeys, style) {
            return breakpointKeys.reduce((acc,key)=>{
                let breakpointOutput = acc[key]
                  , isBreakpointUnused = !breakpointOutput || 0 === Object.keys(breakpointOutput).length;
                return isBreakpointUnused && delete acc[key],
                acc
            }
            , style)
        }
        function resolveBreakpointValues({values: breakpointValues, breakpoints: themeBreakpoints, base: customBase}) {
            let previous;
            let base = customBase || function(breakpointValues, themeBreakpoints) {
                if ("object" != typeof breakpointValues)
                    return {};
                let base = {}
                  , breakpointsKeys = Object.keys(themeBreakpoints);
                return Array.isArray(breakpointValues) ? breakpointsKeys.forEach((breakpoint,i)=>{
                    i < breakpointValues.length && (base[breakpoint] = !0)
                }
                ) : breakpointsKeys.forEach(breakpoint=>{
                    null != breakpointValues[breakpoint] && (base[breakpoint] = !0)
                }
                ),
                base
            }(breakpointValues, themeBreakpoints)
              , keys = Object.keys(base);
            return 0 === keys.length ? breakpointValues : keys.reduce((acc,breakpoint,i)=>(Array.isArray(breakpointValues) ? (acc[breakpoint] = null != breakpointValues[i] ? breakpointValues[i] : breakpointValues[previous],
            previous = i) : "object" == typeof breakpointValues ? (acc[breakpoint] = null != breakpointValues[breakpoint] ? breakpointValues[breakpoint] : breakpointValues[previous],
            previous = breakpoint) : acc[breakpoint] = breakpointValues,
            acc), {})
        }
        function capitalize(string) {
            if ("string" != typeof string)
                throw Error(formatMuiErrorMessage(7));
            return string.charAt(0).toUpperCase() + string.slice(1)
        }
        function getPath(obj, path, checkVars=!0) {
            if (!path || "string" != typeof path)
                return null;
            if (obj && obj.vars && checkVars) {
                let val = `vars.${path}`.split(".").reduce((acc,item)=>acc && acc[item] ? acc[item] : null, obj);
                if (null != val)
                    return val
            }
            return path.split(".").reduce((acc,item)=>acc && null != acc[item] ? acc[item] : null, obj)
        }
        function getStyleValue(themeMapping, transform, propValueFinal, userValue=propValueFinal) {
            let value;
            return value = "function" == typeof themeMapping ? themeMapping(propValueFinal) : Array.isArray(themeMapping) ? themeMapping[propValueFinal] || userValue : getPath(themeMapping, propValueFinal) || userValue,
            transform && (value = transform(value, userValue, themeMapping)),
            value
        }
        var esm_style = function(options) {
            let {prop, cssProperty=options.prop, themeKey, transform} = options
              , fn = props=>{
                if (null == props[prop])
                    return null;
                let propValue = props[prop]
                  , theme = props.theme
                  , themeMapping = getPath(theme, themeKey) || {}
                  , styleFromPropValue = propValueFinal=>{
                    let value = getStyleValue(themeMapping, transform, propValueFinal);
                    return (propValueFinal === value && "string" == typeof propValueFinal && (value = getStyleValue(themeMapping, transform, `${prop}${"default" === propValueFinal ? "" : capitalize(propValueFinal)}`, propValueFinal)),
                    !1 === cssProperty) ? value : {
                        [cssProperty]: value
                    }
                }
                ;
                return handleBreakpoints(props, propValue, styleFromPropValue)
            }
            ;
            return fn.propTypes = {},
            fn.filterProps = [prop],
            fn
        }
          , esm_merge = function(acc, item) {
            return item ? deepmerge(acc, item, {
                clone: !1
            }) : acc
        };
        let properties = {
            m: "margin",
            p: "padding"
        }
          , directions = {
            t: "Top",
            r: "Right",
            b: "Bottom",
            l: "Left",
            x: ["Left", "Right"],
            y: ["Top", "Bottom"]
        }
          , aliases = {
            marginX: "mx",
            marginY: "my",
            paddingX: "px",
            paddingY: "py"
        }
          , getCssProperties = function(fn) {
            let cache = {};
            return arg=>(void 0 === cache[arg] && (cache[arg] = fn(arg)),
            cache[arg])
        }(prop=>{
            if (prop.length > 2) {
                if (!aliases[prop])
                    return [prop];
                prop = aliases[prop]
            }
            let[a,b] = prop.split("")
              , property = properties[a]
              , direction = directions[b] || "";
            return Array.isArray(direction) ? direction.map(dir=>property + dir) : [property + direction]
        }
        )
          , marginKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]
          , paddingKeys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]
          , spacingKeys = [...marginKeys, ...paddingKeys];
        function createUnaryUnit(theme, themeKey, defaultValue, propName) {
            var _getPath;
            let themeSpacing = null != (_getPath = getPath(theme, themeKey, !1)) ? _getPath : defaultValue;
            return "number" == typeof themeSpacing ? abs=>"string" == typeof abs ? abs : themeSpacing * abs : Array.isArray(themeSpacing) ? abs=>"string" == typeof abs ? abs : themeSpacing[abs] : "function" == typeof themeSpacing ? themeSpacing : ()=>void 0
        }
        function createUnarySpacing(theme) {
            return createUnaryUnit(theme, "spacing", 8, "spacing")
        }
        function getValue(transformer, propValue) {
            if ("string" == typeof propValue || null == propValue)
                return propValue;
            let transformed = transformer(Math.abs(propValue));
            return propValue >= 0 ? transformed : "number" == typeof transformed ? -transformed : `-${transformed}`
        }
        function spacing_style(props, keys) {
            let transformer = createUnarySpacing(props.theme);
            return Object.keys(props).map(prop=>(function(props, keys, prop, transformer) {
                if (-1 === keys.indexOf(prop))
                    return null;
                let cssProperties = getCssProperties(prop)
                  , styleFromPropValue = propValue=>cssProperties.reduce((acc,cssProperty)=>(acc[cssProperty] = getValue(transformer, propValue),
                acc), {})
                  , propValue = props[prop];
                return handleBreakpoints(props, propValue, styleFromPropValue)
            }
            )(props, keys, prop, transformer)).reduce(esm_merge, {})
        }
        function margin(props) {
            return spacing_style(props, marginKeys)
        }
        function padding(props) {
            return spacing_style(props, paddingKeys)
        }
        function spacing(props) {
            return spacing_style(props, spacingKeys)
        }
        margin.propTypes = {},
        margin.filterProps = marginKeys,
        padding.propTypes = {},
        padding.filterProps = paddingKeys,
        spacing.propTypes = {},
        spacing.filterProps = spacingKeys;
        var esm_compose = function(...styles) {
            let handlers = styles.reduce((acc,style)=>(style.filterProps.forEach(prop=>{
                acc[prop] = style
            }
            ),
            acc), {})
              , fn = props=>Object.keys(props).reduce((acc,prop)=>handlers[prop] ? esm_merge(acc, handlers[prop](props)) : acc, {});
            return fn.propTypes = {},
            fn.filterProps = styles.reduce((acc,style)=>acc.concat(style.filterProps), []),
            fn
        };
        function borderTransform(value) {
            return "number" != typeof value ? value : `${value}px solid`
        }
        let border = esm_style({
            prop: "border",
            themeKey: "borders",
            transform: borderTransform
        })
          , borderTop = esm_style({
            prop: "borderTop",
            themeKey: "borders",
            transform: borderTransform
        })
          , borderRight = esm_style({
            prop: "borderRight",
            themeKey: "borders",
            transform: borderTransform
        })
          , borderBottom = esm_style({
            prop: "borderBottom",
            themeKey: "borders",
            transform: borderTransform
        })
          , borderLeft = esm_style({
            prop: "borderLeft",
            themeKey: "borders",
            transform: borderTransform
        })
          , borderColor = esm_style({
            prop: "borderColor",
            themeKey: "palette"
        })
          , borderTopColor = esm_style({
            prop: "borderTopColor",
            themeKey: "palette"
        })
          , borderRightColor = esm_style({
            prop: "borderRightColor",
            themeKey: "palette"
        })
          , borderBottomColor = esm_style({
            prop: "borderBottomColor",
            themeKey: "palette"
        })
          , borderLeftColor = esm_style({
            prop: "borderLeftColor",
            themeKey: "palette"
        })
          , borderRadius = props=>{
            if (void 0 !== props.borderRadius && null !== props.borderRadius) {
                let transformer = createUnaryUnit(props.theme, "shape.borderRadius", 4, "borderRadius")
                  , styleFromPropValue = propValue=>({
                    borderRadius: getValue(transformer, propValue)
                });
                return handleBreakpoints(props, props.borderRadius, styleFromPropValue)
            }
            return null
        }
        ;
        borderRadius.propTypes = {},
        borderRadius.filterProps = ["borderRadius"],
        esm_compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius);
        let gap = props=>{
            if (void 0 !== props.gap && null !== props.gap) {
                let transformer = createUnaryUnit(props.theme, "spacing", 8, "gap")
                  , styleFromPropValue = propValue=>({
                    gap: getValue(transformer, propValue)
                });
                return handleBreakpoints(props, props.gap, styleFromPropValue)
            }
            return null
        }
        ;
        gap.propTypes = {},
        gap.filterProps = ["gap"];
        let columnGap = props=>{
            if (void 0 !== props.columnGap && null !== props.columnGap) {
                let transformer = createUnaryUnit(props.theme, "spacing", 8, "columnGap")
                  , styleFromPropValue = propValue=>({
                    columnGap: getValue(transformer, propValue)
                });
                return handleBreakpoints(props, props.columnGap, styleFromPropValue)
            }
            return null
        }
        ;
        columnGap.propTypes = {},
        columnGap.filterProps = ["columnGap"];
        let rowGap = props=>{
            if (void 0 !== props.rowGap && null !== props.rowGap) {
                let transformer = createUnaryUnit(props.theme, "spacing", 8, "rowGap")
                  , styleFromPropValue = propValue=>({
                    rowGap: getValue(transformer, propValue)
                });
                return handleBreakpoints(props, props.rowGap, styleFromPropValue)
            }
            return null
        }
        ;
        rowGap.propTypes = {},
        rowGap.filterProps = ["rowGap"];
        let gridColumn = esm_style({
            prop: "gridColumn"
        })
          , gridRow = esm_style({
            prop: "gridRow"
        })
          , gridAutoFlow = esm_style({
            prop: "gridAutoFlow"
        })
          , gridAutoColumns = esm_style({
            prop: "gridAutoColumns"
        })
          , gridAutoRows = esm_style({
            prop: "gridAutoRows"
        })
          , gridTemplateColumns = esm_style({
            prop: "gridTemplateColumns"
        })
          , gridTemplateRows = esm_style({
            prop: "gridTemplateRows"
        })
          , gridTemplateAreas = esm_style({
            prop: "gridTemplateAreas"
        })
          , gridArea = esm_style({
            prop: "gridArea"
        });
        function paletteTransform(value, userValue) {
            return "grey" === userValue ? userValue : value
        }
        esm_compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
        let color = esm_style({
            prop: "color",
            themeKey: "palette",
            transform: paletteTransform
        })
          , bgcolor = esm_style({
            prop: "bgcolor",
            cssProperty: "backgroundColor",
            themeKey: "palette",
            transform: paletteTransform
        })
          , backgroundColor = esm_style({
            prop: "backgroundColor",
            themeKey: "palette",
            transform: paletteTransform
        });
        function sizingTransform(value) {
            return value <= 1 && 0 !== value ? `${100 * value}%` : value
        }
        esm_compose(color, bgcolor, backgroundColor);
        let width = esm_style({
            prop: "width",
            transform: sizingTransform
        })
          , maxWidth = props=>{
            if (void 0 !== props.maxWidth && null !== props.maxWidth) {
                let styleFromPropValue = propValue=>{
                    var _props$theme, _props$theme$breakpoi, _props$theme$breakpoi2;
                    let breakpoint = (null == (_props$theme = props.theme) ? void 0 : null == (_props$theme$breakpoi = _props$theme.breakpoints) ? void 0 : null == (_props$theme$breakpoi2 = _props$theme$breakpoi.values) ? void 0 : _props$theme$breakpoi2[propValue]) || values[propValue];
                    return {
                        maxWidth: breakpoint || sizingTransform(propValue)
                    }
                }
                ;
                return handleBreakpoints(props, props.maxWidth, styleFromPropValue)
            }
            return null
        }
        ;
        maxWidth.filterProps = ["maxWidth"];
        let minWidth = esm_style({
            prop: "minWidth",
            transform: sizingTransform
        })
          , height = esm_style({
            prop: "height",
            transform: sizingTransform
        })
          , maxHeight = esm_style({
            prop: "maxHeight",
            transform: sizingTransform
        })
          , minHeight = esm_style({
            prop: "minHeight",
            transform: sizingTransform
        });
        esm_style({
            prop: "size",
            cssProperty: "width",
            transform: sizingTransform
        }),
        esm_style({
            prop: "size",
            cssProperty: "height",
            transform: sizingTransform
        });
        let boxSizing = esm_style({
            prop: "boxSizing"
        });
        esm_compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
        var styleFunctionSx_defaultSxConfig = {
            border: {
                themeKey: "borders",
                transform: borderTransform
            },
            borderTop: {
                themeKey: "borders",
                transform: borderTransform
            },
            borderRight: {
                themeKey: "borders",
                transform: borderTransform
            },
            borderBottom: {
                themeKey: "borders",
                transform: borderTransform
            },
            borderLeft: {
                themeKey: "borders",
                transform: borderTransform
            },
            borderColor: {
                themeKey: "palette"
            },
            borderTopColor: {
                themeKey: "palette"
            },
            borderRightColor: {
                themeKey: "palette"
            },
            borderBottomColor: {
                themeKey: "palette"
            },
            borderLeftColor: {
                themeKey: "palette"
            },
            borderRadius: {
                themeKey: "shape.borderRadius",
                style: borderRadius
            },
            color: {
                themeKey: "palette",
                transform: paletteTransform
            },
            bgcolor: {
                themeKey: "palette",
                cssProperty: "backgroundColor",
                transform: paletteTransform
            },
            backgroundColor: {
                themeKey: "palette",
                transform: paletteTransform
            },
            p: {
                style: padding
            },
            pt: {
                style: padding
            },
            pr: {
                style: padding
            },
            pb: {
                style: padding
            },
            pl: {
                style: padding
            },
            px: {
                style: padding
            },
            py: {
                style: padding
            },
            padding: {
                style: padding
            },
            paddingTop: {
                style: padding
            },
            paddingRight: {
                style: padding
            },
            paddingBottom: {
                style: padding
            },
            paddingLeft: {
                style: padding
            },
            paddingX: {
                style: padding
            },
            paddingY: {
                style: padding
            },
            paddingInline: {
                style: padding
            },
            paddingInlineStart: {
                style: padding
            },
            paddingInlineEnd: {
                style: padding
            },
            paddingBlock: {
                style: padding
            },
            paddingBlockStart: {
                style: padding
            },
            paddingBlockEnd: {
                style: padding
            },
            m: {
                style: margin
            },
            mt: {
                style: margin
            },
            mr: {
                style: margin
            },
            mb: {
                style: margin
            },
            ml: {
                style: margin
            },
            mx: {
                style: margin
            },
            my: {
                style: margin
            },
            margin: {
                style: margin
            },
            marginTop: {
                style: margin
            },
            marginRight: {
                style: margin
            },
            marginBottom: {
                style: margin
            },
            marginLeft: {
                style: margin
            },
            marginX: {
                style: margin
            },
            marginY: {
                style: margin
            },
            marginInline: {
                style: margin
            },
            marginInlineStart: {
                style: margin
            },
            marginInlineEnd: {
                style: margin
            },
            marginBlock: {
                style: margin
            },
            marginBlockStart: {
                style: margin
            },
            marginBlockEnd: {
                style: margin
            },
            displayPrint: {
                cssProperty: !1,
                transform: value=>({
                    "@media print": {
                        display: value
                    }
                })
            },
            display: {},
            overflow: {},
            textOverflow: {},
            visibility: {},
            whiteSpace: {},
            flexBasis: {},
            flexDirection: {},
            flexWrap: {},
            justifyContent: {},
            alignItems: {},
            alignContent: {},
            order: {},
            flex: {},
            flexGrow: {},
            flexShrink: {},
            alignSelf: {},
            justifyItems: {},
            justifySelf: {},
            gap: {
                style: gap
            },
            rowGap: {
                style: rowGap
            },
            columnGap: {
                style: columnGap
            },
            gridColumn: {},
            gridRow: {},
            gridAutoFlow: {},
            gridAutoColumns: {},
            gridAutoRows: {},
            gridTemplateColumns: {},
            gridTemplateRows: {},
            gridTemplateAreas: {},
            gridArea: {},
            position: {},
            zIndex: {
                themeKey: "zIndex"
            },
            top: {},
            right: {},
            bottom: {},
            left: {},
            boxShadow: {
                themeKey: "shadows"
            },
            width: {
                transform: sizingTransform
            },
            maxWidth: {
                style: maxWidth
            },
            minWidth: {
                transform: sizingTransform
            },
            height: {
                transform: sizingTransform
            },
            maxHeight: {
                transform: sizingTransform
            },
            minHeight: {
                transform: sizingTransform
            },
            boxSizing: {},
            fontFamily: {
                themeKey: "typography"
            },
            fontSize: {
                themeKey: "typography"
            },
            fontStyle: {
                themeKey: "typography"
            },
            fontWeight: {
                themeKey: "typography"
            },
            letterSpacing: {},
            textTransform: {},
            lineHeight: {},
            textAlign: {},
            typography: {
                cssProperty: !1,
                themeKey: "typography"
            }
        };
        let styleFunctionSx = function() {
            function getThemeValue(prop, val, theme, config) {
                let props = {
                    [prop]: val,
                    theme
                }
                  , options = config[prop];
                if (!options)
                    return {
                        [prop]: val
                    };
                let {cssProperty=prop, themeKey, transform, style} = options;
                if (null == val)
                    return null;
                let themeMapping = getPath(theme, themeKey) || {};
                if (style)
                    return style(props);
                let styleFromPropValue = propValueFinal=>{
                    let value = getStyleValue(themeMapping, transform, propValueFinal);
                    return (propValueFinal === value && "string" == typeof propValueFinal && (value = getStyleValue(themeMapping, transform, `${prop}${"default" === propValueFinal ? "" : capitalize(propValueFinal)}`, propValueFinal)),
                    !1 === cssProperty) ? value : {
                        [cssProperty]: value
                    }
                }
                ;
                return handleBreakpoints(props, val, styleFromPropValue)
            }
            return function styleFunctionSx(props) {
                var _theme$unstable_sxCon;
                let {sx, theme={}} = props || {};
                if (!sx)
                    return null;
                let config = null != (_theme$unstable_sxCon = theme.unstable_sxConfig) ? _theme$unstable_sxCon : styleFunctionSx_defaultSxConfig;
                function traverse(sxInput) {
                    let sxObject = sxInput;
                    if ("function" == typeof sxInput)
                        sxObject = sxInput(theme);
                    else if ("object" != typeof sxInput)
                        return sxInput;
                    if (!sxObject)
                        return null;
                    let emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints)
                      , breakpointsKeys = Object.keys(emptyBreakpoints)
                      , css = emptyBreakpoints;
                    return Object.keys(sxObject).forEach(styleKey=>{
                        var maybeFn;
                        let value = "function" == typeof (maybeFn = sxObject[styleKey]) ? maybeFn(theme) : maybeFn;
                        if (null != value) {
                            if ("object" == typeof value) {
                                if (config[styleKey])
                                    css = esm_merge(css, getThemeValue(styleKey, value, theme, config));
                                else {
                                    let breakpointsValues = handleBreakpoints({
                                        theme
                                    }, value, x=>({
                                        [styleKey]: x
                                    }));
                                    (function(...objects) {
                                        let allKeys = objects.reduce((keys,object)=>keys.concat(Object.keys(object)), [])
                                          , union = new Set(allKeys);
                                        return objects.every(object=>union.size === Object.keys(object).length)
                                    }
                                    )(breakpointsValues, value) ? css[styleKey] = styleFunctionSx({
                                        sx: value,
                                        theme
                                    }) : css = esm_merge(css, breakpointsValues)
                                }
                            } else
                                css = esm_merge(css, getThemeValue(styleKey, value, theme, config))
                        }
                    }
                    ),
                    removeUnusedBreakpoints(breakpointsKeys, css)
                }
                return Array.isArray(sx) ? sx.map(traverse) : traverse(sx)
            }
        }();
        styleFunctionSx.filterProps = ["sx"];
        let createTheme_excluded = ["breakpoints", "palette", "spacing", "shape"];
        var esm_createTheme_createTheme = function(options={}, ...args) {
            let {breakpoints: breakpointsInput={}, palette: paletteInput={}, spacing: spacingInput, shape: shapeInput={}} = options
              , other = (0,
            objectWithoutPropertiesLoose.Z)(options, createTheme_excluded)
              , breakpoints = function(breakpoints) {
                let {values={
                    xs: 0,
                    sm: 600,
                    md: 900,
                    lg: 1200,
                    xl: 1536
                }, unit="px", step=5} = breakpoints
                  , other = (0,
                objectWithoutPropertiesLoose.Z)(breakpoints, _excluded)
                  , sortedValues = sortBreakpointsValues(values)
                  , keys = Object.keys(sortedValues);
                function up(key) {
                    let value = "number" == typeof values[key] ? values[key] : key;
                    return `@media (min-width:${value}${unit})`
                }
                function down(key) {
                    let value = "number" == typeof values[key] ? values[key] : key;
                    return `@media (max-width:${value - step / 100}${unit})`
                }
                function between(start, end) {
                    let endIndex = keys.indexOf(end);
                    return `@media (min-width:${"number" == typeof values[start] ? values[start] : start}${unit}) and (max-width:${(-1 !== endIndex && "number" == typeof values[keys[endIndex]] ? values[keys[endIndex]] : end) - step / 100}${unit})`
                }
                return (0,
                esm_extends.Z)({
                    keys,
                    values: sortedValues,
                    up,
                    down,
                    between,
                    only: function(key) {
                        return keys.indexOf(key) + 1 < keys.length ? between(key, keys[keys.indexOf(key) + 1]) : up(key)
                    },
                    not: function(key) {
                        let keyIndex = keys.indexOf(key);
                        return 0 === keyIndex ? up(keys[1]) : keyIndex === keys.length - 1 ? down(keys[keyIndex]) : between(key, keys[keys.indexOf(key) + 1]).replace("@media", "@media not all and")
                    },
                    unit
                }, other)
            }(breakpointsInput)
              , spacing = function(spacingInput=8) {
                if (spacingInput.mui)
                    return spacingInput;
                let transform = createUnarySpacing({
                    spacing: spacingInput
                })
                  , spacing = (...argsInput)=>{
                    let args = 0 === argsInput.length ? [1] : argsInput;
                    return args.map(argument=>{
                        let output = transform(argument);
                        return "number" == typeof output ? `${output}px` : output
                    }
                    ).join(" ")
                }
                ;
                return spacing.mui = !0,
                spacing
            }(spacingInput)
              , muiTheme = deepmerge({
                breakpoints,
                direction: "ltr",
                components: {},
                palette: (0,
                esm_extends.Z)({
                    mode: "light"
                }, paletteInput),
                spacing,
                shape: (0,
                esm_extends.Z)({}, createTheme_shape, shapeInput)
            }, other);
            return (muiTheme = args.reduce((acc,argument)=>deepmerge(acc, argument), muiTheme)).unstable_sxConfig = (0,
            esm_extends.Z)({}, styleFunctionSx_defaultSxConfig, null == other ? void 0 : other.unstable_sxConfig),
            muiTheme.unstable_sx = function(props) {
                return styleFunctionSx({
                    sx: props,
                    theme: this
                })
            }
            ,
            muiTheme
        };
        let propsToClassKey_excluded = ["variant"];
        function isEmpty(string) {
            return 0 === string.length
        }
        function propsToClassKey(props) {
            let {variant} = props
              , other = (0,
            objectWithoutPropertiesLoose.Z)(props, propsToClassKey_excluded)
              , classKey = variant || "";
            return Object.keys(other).sort().forEach(key=>{
                "color" === key ? classKey += isEmpty(classKey) ? props[key] : capitalize(props[key]) : classKey += `${isEmpty(classKey) ? key : capitalize(key)}${capitalize(props[key].toString())}`
            }
            ),
            classKey
        }
        let createStyled_excluded = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"]
          , _excluded2 = ["theme"]
          , _excluded3 = ["theme"];
        function createStyled_isEmpty(obj) {
            return 0 === Object.keys(obj).length
        }
        let getStyleOverrides = (name,theme)=>theme.components && theme.components[name] && theme.components[name].styleOverrides ? theme.components[name].styleOverrides : null
          , getVariantStyles = (name,theme)=>{
            let variants = [];
            theme && theme.components && theme.components[name] && theme.components[name].variants && (variants = theme.components[name].variants);
            let variantsStyles = {};
            return variants.forEach(definition=>{
                let key = propsToClassKey(definition.props);
                variantsStyles[key] = definition.style
            }
            ),
            variantsStyles
        }
          , variantsResolver = (props,styles,theme,name)=>{
            var _theme$components, _theme$components$nam;
            let {ownerState={}} = props
              , variantsStyles = []
              , themeVariants = null == theme ? void 0 : null == (_theme$components = theme.components) ? void 0 : null == (_theme$components$nam = _theme$components[name]) ? void 0 : _theme$components$nam.variants;
            return themeVariants && themeVariants.forEach(themeVariant=>{
                let isMatch = !0;
                Object.keys(themeVariant.props).forEach(key=>{
                    ownerState[key] !== themeVariant.props[key] && props[key] !== themeVariant.props[key] && (isMatch = !1)
                }
                ),
                isMatch && variantsStyles.push(styles[propsToClassKey(themeVariant.props)])
            }
            ),
            variantsStyles
        }
        ;
        function createStyled_shouldForwardProp(prop) {
            return "ownerState" !== prop && "theme" !== prop && "sx" !== prop && "as" !== prop
        }
        let systemDefaultTheme = esm_createTheme_createTheme();
        function createStyled_createStyled(input={}) {
            let {defaultTheme=systemDefaultTheme, rootShouldForwardProp=createStyled_shouldForwardProp, slotShouldForwardProp=createStyled_shouldForwardProp} = input
              , systemSx = props=>{
                let theme = createStyled_isEmpty(props.theme) ? defaultTheme : props.theme;
                return styleFunctionSx((0,
                esm_extends.Z)({}, props, {
                    theme
                }))
            }
            ;
            return systemSx.__mui_systemSx = !0,
            (tag,inputOptions={})=>{
                let label;
                internal_processStyles(tag, styles=>styles.filter(style=>!(null != style && style.__mui_systemSx)));
                let {name: componentName, slot: componentSlot, skipVariantsResolver: inputSkipVariantsResolver, skipSx: inputSkipSx, overridesResolver} = inputOptions
                  , options = (0,
                objectWithoutPropertiesLoose.Z)(inputOptions, createStyled_excluded)
                  , skipVariantsResolver = void 0 !== inputSkipVariantsResolver ? inputSkipVariantsResolver : componentSlot && "Root" !== componentSlot || !1
                  , skipSx = inputSkipSx || !1
                  , shouldForwardPropOption = createStyled_shouldForwardProp;
                "Root" === componentSlot ? shouldForwardPropOption = rootShouldForwardProp : componentSlot ? shouldForwardPropOption = slotShouldForwardProp : "string" == typeof tag && tag.charCodeAt(0) > 96 && (shouldForwardPropOption = void 0);
                let defaultStyledResolver = styled(tag, (0,
                esm_extends.Z)({
                    shouldForwardProp: shouldForwardPropOption,
                    label
                }, options))
                  , muiStyledResolver = (styleArg,...expressions)=>{
                    let expressionsWithDefaultTheme = expressions ? expressions.map(stylesArg=>"function" == typeof stylesArg && stylesArg.__emotion_real !== stylesArg ? _ref=>{
                        let {theme: themeInput} = _ref
                          , other = (0,
                        objectWithoutPropertiesLoose.Z)(_ref, _excluded2);
                        return stylesArg((0,
                        esm_extends.Z)({
                            theme: createStyled_isEmpty(themeInput) ? defaultTheme : themeInput
                        }, other))
                    }
                    : stylesArg) : []
                      , transformedStyleArg = styleArg;
                    componentName && overridesResolver && expressionsWithDefaultTheme.push(props=>{
                        let theme = createStyled_isEmpty(props.theme) ? defaultTheme : props.theme
                          , styleOverrides = getStyleOverrides(componentName, theme);
                        if (styleOverrides) {
                            let resolvedStyleOverrides = {};
                            return Object.entries(styleOverrides).forEach(([slotKey,slotStyle])=>{
                                resolvedStyleOverrides[slotKey] = "function" == typeof slotStyle ? slotStyle((0,
                                esm_extends.Z)({}, props, {
                                    theme
                                })) : slotStyle
                            }
                            ),
                            overridesResolver(props, resolvedStyleOverrides)
                        }
                        return null
                    }
                    ),
                    componentName && !skipVariantsResolver && expressionsWithDefaultTheme.push(props=>{
                        let theme = createStyled_isEmpty(props.theme) ? defaultTheme : props.theme;
                        return variantsResolver(props, getVariantStyles(componentName, theme), theme, componentName)
                    }
                    ),
                    skipSx || expressionsWithDefaultTheme.push(systemSx);
                    let numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
                    if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
                        let placeholders = Array(numOfCustomFnsApplied).fill("");
                        (transformedStyleArg = [...styleArg, ...placeholders]).raw = [...styleArg.raw, ...placeholders]
                    } else
                        "function" == typeof styleArg && styleArg.__emotion_real !== styleArg && (transformedStyleArg = _ref2=>{
                            let {theme: themeInput} = _ref2
                              , other = (0,
                            objectWithoutPropertiesLoose.Z)(_ref2, _excluded3);
                            return styleArg((0,
                            esm_extends.Z)({
                                theme: createStyled_isEmpty(themeInput) ? defaultTheme : themeInput
                            }, other))
                        }
                        );
                    let Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
                    return Component
                }
                ;
                return defaultStyledResolver.withConfig && (muiStyledResolver.withConfig = defaultStyledResolver.withConfig),
                muiStyledResolver
            }
        }
        var colors_common = {
            black: "#000",
            white: "#fff"
        }
          , colors_grey = {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#eeeeee",
            300: "#e0e0e0",
            400: "#bdbdbd",
            500: "#9e9e9e",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
            A100: "#f5f5f5",
            A200: "#eeeeee",
            A400: "#bdbdbd",
            A700: "#616161"
        }
          , colors_purple = {
            50: "#f3e5f5",
            100: "#e1bee7",
            200: "#ce93d8",
            300: "#ba68c8",
            400: "#ab47bc",
            500: "#9c27b0",
            600: "#8e24aa",
            700: "#7b1fa2",
            800: "#6a1b9a",
            900: "#4a148c",
            A100: "#ea80fc",
            A200: "#e040fb",
            A400: "#d500f9",
            A700: "#aa00ff"
        }
          , colors_red = {
            50: "#ffebee",
            100: "#ffcdd2",
            200: "#ef9a9a",
            300: "#e57373",
            400: "#ef5350",
            500: "#f44336",
            600: "#e53935",
            700: "#d32f2f",
            800: "#c62828",
            900: "#b71c1c",
            A100: "#ff8a80",
            A200: "#ff5252",
            A400: "#ff1744",
            A700: "#d50000"
        }
          , colors_orange = {
            50: "#fff3e0",
            100: "#ffe0b2",
            200: "#ffcc80",
            300: "#ffb74d",
            400: "#ffa726",
            500: "#ff9800",
            600: "#fb8c00",
            700: "#f57c00",
            800: "#ef6c00",
            900: "#e65100",
            A100: "#ffd180",
            A200: "#ffab40",
            A400: "#ff9100",
            A700: "#ff6d00"
        }
          , colors_blue = {
            50: "#e3f2fd",
            100: "#bbdefb",
            200: "#90caf9",
            300: "#64b5f6",
            400: "#42a5f5",
            500: "#2196f3",
            600: "#1e88e5",
            700: "#1976d2",
            800: "#1565c0",
            900: "#0d47a1",
            A100: "#82b1ff",
            A200: "#448aff",
            A400: "#2979ff",
            A700: "#2962ff"
        }
          , colors_lightBlue = {
            50: "#e1f5fe",
            100: "#b3e5fc",
            200: "#81d4fa",
            300: "#4fc3f7",
            400: "#29b6f6",
            500: "#03a9f4",
            600: "#039be5",
            700: "#0288d1",
            800: "#0277bd",
            900: "#01579b",
            A100: "#80d8ff",
            A200: "#40c4ff",
            A400: "#00b0ff",
            A700: "#0091ea"
        }
          , colors_green = {
            50: "#e8f5e9",
            100: "#c8e6c9",
            200: "#a5d6a7",
            300: "#81c784",
            400: "#66bb6a",
            500: "#4caf50",
            600: "#43a047",
            700: "#388e3c",
            800: "#2e7d32",
            900: "#1b5e20",
            A100: "#b9f6ca",
            A200: "#69f0ae",
            A400: "#00e676",
            A700: "#00c853"
        };
        let createPalette_excluded = ["mode", "contrastThreshold", "tonalOffset"]
          , light = {
            text: {
                primary: "rgba(0, 0, 0, 0.87)",
                secondary: "rgba(0, 0, 0, 0.6)",
                disabled: "rgba(0, 0, 0, 0.38)"
            },
            divider: "rgba(0, 0, 0, 0.12)",
            background: {
                paper: colors_common.white,
                default: colors_common.white
            },
            action: {
                active: "rgba(0, 0, 0, 0.54)",
                hover: "rgba(0, 0, 0, 0.04)",
                hoverOpacity: .04,
                selected: "rgba(0, 0, 0, 0.08)",
                selectedOpacity: .08,
                disabled: "rgba(0, 0, 0, 0.26)",
                disabledBackground: "rgba(0, 0, 0, 0.12)",
                disabledOpacity: .38,
                focus: "rgba(0, 0, 0, 0.12)",
                focusOpacity: .12,
                activatedOpacity: .12
            }
        }
          , dark = {
            text: {
                primary: colors_common.white,
                secondary: "rgba(255, 255, 255, 0.7)",
                disabled: "rgba(255, 255, 255, 0.5)",
                icon: "rgba(255, 255, 255, 0.5)"
            },
            divider: "rgba(255, 255, 255, 0.12)",
            background: {
                paper: "#121212",
                default: "#121212"
            },
            action: {
                active: colors_common.white,
                hover: "rgba(255, 255, 255, 0.08)",
                hoverOpacity: .08,
                selected: "rgba(255, 255, 255, 0.16)",
                selectedOpacity: .16,
                disabled: "rgba(255, 255, 255, 0.3)",
                disabledBackground: "rgba(255, 255, 255, 0.12)",
                disabledOpacity: .38,
                focus: "rgba(255, 255, 255, 0.12)",
                focusOpacity: .12,
                activatedOpacity: .24
            }
        };
        function addLightOrDark(intent, direction, shade, tonalOffset) {
            let tonalOffsetLight = tonalOffset.light || tonalOffset
              , tonalOffsetDark = tonalOffset.dark || 1.5 * tonalOffset;
            intent[direction] || (intent.hasOwnProperty(shade) ? intent[direction] = intent[shade] : "light" === direction ? intent.light = function(color, coefficient) {
                if (color = decomposeColor(color),
                coefficient = clamp(coefficient),
                -1 !== color.type.indexOf("hsl"))
                    color.values[2] += (100 - color.values[2]) * coefficient;
                else if (-1 !== color.type.indexOf("rgb"))
                    for (let i = 0; i < 3; i += 1)
                        color.values[i] += (255 - color.values[i]) * coefficient;
                else if (-1 !== color.type.indexOf("color"))
                    for (let i1 = 0; i1 < 3; i1 += 1)
                        color.values[i1] += (1 - color.values[i1]) * coefficient;
                return recomposeColor(color)
            }(intent.main, tonalOffsetLight) : "dark" === direction && (intent.dark = function(color, coefficient) {
                if (color = decomposeColor(color),
                coefficient = clamp(coefficient),
                -1 !== color.type.indexOf("hsl"))
                    color.values[2] *= 1 - coefficient;
                else if (-1 !== color.type.indexOf("rgb") || -1 !== color.type.indexOf("color"))
                    for (let i = 0; i < 3; i += 1)
                        color.values[i] *= 1 - coefficient;
                return recomposeColor(color)
            }(intent.main, tonalOffsetDark)))
        }
        let createTypography_excluded = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]
          , caseAllCaps = {
            textTransform: "uppercase"
        }
          , defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
        function createShadow(...px) {
            return `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,0.2),${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,0.14),${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,0.12)`
        }
        let shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)]
          , createTransitions_excluded = ["duration", "easing", "delay"]
          , easing = {
            easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
            easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
            easeIn: "cubic-bezier(0.4, 0, 1, 1)",
            sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
        }
          , duration = {
            shortest: 150,
            shorter: 200,
            short: 250,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195
        };
        function formatMs(milliseconds) {
            return `${Math.round(milliseconds)}ms`
        }
        function getAutoHeightDuration(height) {
            if (!height)
                return 0;
            let constant = height / 36;
            return Math.round((4 + 15 * constant ** .25 + constant / 5) * 10)
        }
        var styles_zIndex = {
            mobileStepper: 1e3,
            fab: 1050,
            speedDial: 1050,
            appBar: 1100,
            drawer: 1200,
            modal: 1300,
            snackbar: 1400,
            tooltip: 1500
        };
        let styles_createTheme_excluded = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
        var styles_createTheme = function(options={}, ...args) {
            var breakpoints;
            let {mixins: mixinsInput={}, palette: paletteInput={}, transitions: transitionsInput={}, typography: typographyInput={}} = options
              , other = (0,
            objectWithoutPropertiesLoose.Z)(options, styles_createTheme_excluded);
            if (options.vars)
                throw Error(formatMuiErrorMessage(18));
            let palette = function(palette) {
                let {mode="light", contrastThreshold=3, tonalOffset=.2} = palette
                  , other = (0,
                objectWithoutPropertiesLoose.Z)(palette, createPalette_excluded)
                  , primary = palette.primary || function(mode="light") {
                    return "dark" === mode ? {
                        main: colors_blue[200],
                        light: colors_blue[50],
                        dark: colors_blue[400]
                    } : {
                        main: colors_blue[700],
                        light: colors_blue[400],
                        dark: colors_blue[800]
                    }
                }(mode)
                  , secondary = palette.secondary || function(mode="light") {
                    return "dark" === mode ? {
                        main: colors_purple[200],
                        light: colors_purple[50],
                        dark: colors_purple[400]
                    } : {
                        main: colors_purple[500],
                        light: colors_purple[300],
                        dark: colors_purple[700]
                    }
                }(mode)
                  , error = palette.error || function(mode="light") {
                    return "dark" === mode ? {
                        main: colors_red[500],
                        light: colors_red[300],
                        dark: colors_red[700]
                    } : {
                        main: colors_red[700],
                        light: colors_red[400],
                        dark: colors_red[800]
                    }
                }(mode)
                  , info = palette.info || function(mode="light") {
                    return "dark" === mode ? {
                        main: colors_lightBlue[400],
                        light: colors_lightBlue[300],
                        dark: colors_lightBlue[700]
                    } : {
                        main: colors_lightBlue[700],
                        light: colors_lightBlue[500],
                        dark: colors_lightBlue[900]
                    }
                }(mode)
                  , success = palette.success || function(mode="light") {
                    return "dark" === mode ? {
                        main: colors_green[400],
                        light: colors_green[300],
                        dark: colors_green[700]
                    } : {
                        main: colors_green[800],
                        light: colors_green[500],
                        dark: colors_green[900]
                    }
                }(mode)
                  , warning = palette.warning || function(mode="light") {
                    return "dark" === mode ? {
                        main: colors_orange[400],
                        light: colors_orange[300],
                        dark: colors_orange[700]
                    } : {
                        main: "#ed6c02",
                        light: colors_orange[500],
                        dark: colors_orange[900]
                    }
                }(mode);
                function getContrastText(background) {
                    let contrastText = function(foreground, background) {
                        let lumA = getLuminance(foreground)
                          , lumB = getLuminance(background);
                        return (Math.max(lumA, lumB) + .05) / (Math.min(lumA, lumB) + .05)
                    }(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
                    return contrastText
                }
                let augmentColor = ({color, name, mainShade=500, lightShade=300, darkShade=700})=>{
                    if (!(color = (0,
                    esm_extends.Z)({}, color)).main && color[mainShade] && (color.main = color[mainShade]),
                    !color.hasOwnProperty("main"))
                        throw Error(formatMuiErrorMessage(11, name ? ` (${name})` : "", mainShade));
                    if ("string" != typeof color.main)
                        throw Error(formatMuiErrorMessage(12, name ? ` (${name})` : "", JSON.stringify(color.main)));
                    return addLightOrDark(color, "light", lightShade, tonalOffset),
                    addLightOrDark(color, "dark", darkShade, tonalOffset),
                    color.contrastText || (color.contrastText = getContrastText(color.main)),
                    color
                }
                  , paletteOutput = deepmerge((0,
                esm_extends.Z)({
                    common: (0,
                    esm_extends.Z)({}, colors_common),
                    mode,
                    primary: augmentColor({
                        color: primary,
                        name: "primary"
                    }),
                    secondary: augmentColor({
                        color: secondary,
                        name: "secondary",
                        mainShade: "A400",
                        lightShade: "A200",
                        darkShade: "A700"
                    }),
                    error: augmentColor({
                        color: error,
                        name: "error"
                    }),
                    warning: augmentColor({
                        color: warning,
                        name: "warning"
                    }),
                    info: augmentColor({
                        color: info,
                        name: "info"
                    }),
                    success: augmentColor({
                        color: success,
                        name: "success"
                    }),
                    grey: colors_grey,
                    contrastThreshold,
                    getContrastText,
                    augmentColor,
                    tonalOffset
                }, {
                    dark,
                    light
                }[mode]), other);
                return paletteOutput
            }(paletteInput)
              , systemTheme = esm_createTheme_createTheme(options)
              , muiTheme = deepmerge(systemTheme, {
                mixins: (breakpoints = systemTheme.breakpoints,
                (0,
                esm_extends.Z)({
                    toolbar: {
                        minHeight: 56,
                        [breakpoints.up("xs")]: {
                            "@media (orientation: landscape)": {
                                minHeight: 48
                            }
                        },
                        [breakpoints.up("sm")]: {
                            minHeight: 64
                        }
                    }
                }, mixinsInput)),
                palette,
                shadows: shadows.slice(),
                typography: function(palette, typography) {
                    let _ref = "function" == typeof typography ? typography(palette) : typography
                      , {fontFamily=defaultFontFamily, fontSize=14, fontWeightLight=300, fontWeightRegular=400, fontWeightMedium=500, fontWeightBold=700, htmlFontSize=16, allVariants, pxToRem: pxToRem2} = _ref
                      , other = (0,
                    objectWithoutPropertiesLoose.Z)(_ref, createTypography_excluded)
                      , coef = fontSize / 14
                      , pxToRem = pxToRem2 || (size=>`${size / htmlFontSize * coef}rem`)
                      , buildVariant = (fontWeight,size,lineHeight,letterSpacing,casing)=>(0,
                    esm_extends.Z)({
                        fontFamily,
                        fontWeight,
                        fontSize: pxToRem(size),
                        lineHeight
                    }, fontFamily === defaultFontFamily ? {
                        letterSpacing: `${Math.round(1e5 * (letterSpacing / size)) / 1e5}em`
                    } : {}, casing, allVariants)
                      , variants = {
                        h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
                        h2: buildVariant(fontWeightLight, 60, 1.2, -.5),
                        h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
                        h4: buildVariant(fontWeightRegular, 34, 1.235, .25),
                        h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
                        h6: buildVariant(fontWeightMedium, 20, 1.6, .15),
                        subtitle1: buildVariant(fontWeightRegular, 16, 1.75, .15),
                        subtitle2: buildVariant(fontWeightMedium, 14, 1.57, .1),
                        body1: buildVariant(fontWeightRegular, 16, 1.5, .15),
                        body2: buildVariant(fontWeightRegular, 14, 1.43, .15),
                        button: buildVariant(fontWeightMedium, 14, 1.75, .4, caseAllCaps),
                        caption: buildVariant(fontWeightRegular, 12, 1.66, .4),
                        overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
                    };
                    return deepmerge((0,
                    esm_extends.Z)({
                        htmlFontSize,
                        pxToRem,
                        fontFamily,
                        fontSize,
                        fontWeightLight,
                        fontWeightRegular,
                        fontWeightMedium,
                        fontWeightBold
                    }, variants), other, {
                        clone: !1
                    })
                }(palette, typographyInput),
                transitions: function(inputTransitions) {
                    let mergedEasing = (0,
                    esm_extends.Z)({}, easing, inputTransitions.easing)
                      , mergedDuration = (0,
                    esm_extends.Z)({}, duration, inputTransitions.duration)
                      , create = (props=["all"],options={})=>{
                        let {duration: durationOption=mergedDuration.standard, easing: easingOption=mergedEasing.easeInOut, delay=0} = options;
                        return (0,
                        objectWithoutPropertiesLoose.Z)(options, createTransitions_excluded),
                        (Array.isArray(props) ? props : [props]).map(animatedProp=>`${animatedProp} ${"string" == typeof durationOption ? durationOption : formatMs(durationOption)} ${easingOption} ${"string" == typeof delay ? delay : formatMs(delay)}`).join(",")
                    }
                    ;
                    return (0,
                    esm_extends.Z)({
                        getAutoHeightDuration,
                        create
                    }, inputTransitions, {
                        easing: mergedEasing,
                        duration: mergedDuration
                    })
                }(transitionsInput),
                zIndex: (0,
                esm_extends.Z)({}, styles_zIndex)
            });
            return muiTheme = deepmerge(muiTheme, other),
            (muiTheme = args.reduce((acc,argument)=>deepmerge(acc, argument), muiTheme)).unstable_sxConfig = (0,
            esm_extends.Z)({}, styleFunctionSx_defaultSxConfig, null == other ? void 0 : other.unstable_sxConfig),
            muiTheme.unstable_sx = function(props) {
                return styleFunctionSx({
                    sx: props,
                    theme: this
                })
            }
            ,
            muiTheme
        };
        let defaultTheme = styles_createTheme()
          , rootShouldForwardProp = prop=>createStyled_shouldForwardProp(prop) && "classes" !== prop
          , styled_styled = createStyled_createStyled({
            defaultTheme: defaultTheme,
            rootShouldForwardProp
        })
          , ThemeContext = react.createContext(null);
        var useThemeWithoutDefault = function(defaultTheme=null) {
            let contextTheme = function() {
                let theme = react.useContext(ThemeContext);
                return theme
            }();
            return contextTheme && 0 !== Object.keys(contextTheme).length ? contextTheme : defaultTheme
        };
        let useTheme_systemDefaultTheme = esm_createTheme_createTheme();
        var esm_useTheme = function(defaultTheme=useTheme_systemDefaultTheme) {
            return useThemeWithoutDefault(defaultTheme)
        };
        function styles_useTheme_useTheme() {
            let theme = esm_useTheme(defaultTheme);
            return theme
        }
        function useThemeProps({props, name, defaultTheme}) {
            let theme = esm_useTheme(defaultTheme)
              , mergedProps = function(params) {
                let {theme, name, props} = params;
                return theme && theme.components && theme.components[name] && theme.components[name].defaultProps ? function resolveProps(defaultProps, props) {
                    let output = (0,
                    esm_extends.Z)({}, props);
                    return Object.keys(defaultProps).forEach(propName=>{
                        if (propName.toString().match(/^(components|slots)$/))
                            output[propName] = (0,
                            esm_extends.Z)({}, defaultProps[propName], output[propName]);
                        else if (propName.toString().match(/^(componentsProps|slotProps)$/)) {
                            let defaultSlotProps = defaultProps[propName] || {}
                              , slotProps = props[propName];
                            output[propName] = {},
                            slotProps && Object.keys(slotProps) ? defaultSlotProps && Object.keys(defaultSlotProps) ? (output[propName] = (0,
                            esm_extends.Z)({}, slotProps),
                            Object.keys(defaultSlotProps).forEach(slotPropName=>{
                                output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName])
                            }
                            )) : output[propName] = slotProps : output[propName] = defaultSlotProps
                        } else
                            void 0 === output[propName] && (output[propName] = defaultProps[propName])
                    }
                    ),
                    output
                }(theme.components[name].defaultProps, props) : props
            }({
                theme,
                name,
                props
            });
            return mergedProps
        }
        function useThemeProps_useThemeProps({props, name}) {
            return useThemeProps({
                props,
                name,
                defaultTheme: defaultTheme
            })
        }
        var setPrototypeOf = __webpack_require__(74938);
        function _inheritsLoose(subClass, superClass) {
            subClass.prototype = Object.create(superClass.prototype),
            subClass.prototype.constructor = subClass,
            (0,
            setPrototypeOf.Z)(subClass, superClass)
        }
        var react_dom = __webpack_require__(28316)
          , config = {
            disabled: !1
        }
          , TransitionGroupContext = react.createContext(null)
          , UNMOUNTED = "unmounted"
          , EXITED = "exited"
          , ENTERING = "entering"
          , ENTERED = "entered"
          , EXITING = "exiting"
          , Transition = function(_React$Component) {
            function Transition(props, context) {
                _this = _React$Component.call(this, props, context) || this;
                var _this, initialStatus, appear = context && !context.isMounting ? props.enter : props.appear;
                return _this.appearStatus = null,
                props.in ? appear ? (initialStatus = EXITED,
                _this.appearStatus = ENTERING) : initialStatus = ENTERED : initialStatus = props.unmountOnExit || props.mountOnEnter ? UNMOUNTED : EXITED,
                _this.state = {
                    status: initialStatus
                },
                _this.nextCallback = null,
                _this
            }
            _inheritsLoose(Transition, _React$Component),
            Transition.getDerivedStateFromProps = function(_ref, prevState) {
                return _ref.in && prevState.status === UNMOUNTED ? {
                    status: EXITED
                } : null
            }
            ;
            var _proto = Transition.prototype;
            return _proto.componentDidMount = function() {
                this.updateStatus(!0, this.appearStatus)
            }
            ,
            _proto.componentDidUpdate = function(prevProps) {
                var nextStatus = null;
                if (prevProps !== this.props) {
                    var status = this.state.status;
                    this.props.in ? status !== ENTERING && status !== ENTERED && (nextStatus = ENTERING) : (status === ENTERING || status === ENTERED) && (nextStatus = EXITING)
                }
                this.updateStatus(!1, nextStatus)
            }
            ,
            _proto.componentWillUnmount = function() {
                this.cancelNextCallback()
            }
            ,
            _proto.getTimeouts = function() {
                var exit, enter, appear, timeout = this.props.timeout;
                return exit = enter = appear = timeout,
                null != timeout && "number" != typeof timeout && (exit = timeout.exit,
                enter = timeout.enter,
                appear = void 0 !== timeout.appear ? timeout.appear : enter),
                {
                    exit: exit,
                    enter: enter,
                    appear: appear
                }
            }
            ,
            _proto.updateStatus = function(mounting, nextStatus) {
                if (void 0 === mounting && (mounting = !1),
                null !== nextStatus) {
                    if (this.cancelNextCallback(),
                    nextStatus === ENTERING) {
                        if (this.props.unmountOnExit || this.props.mountOnEnter) {
                            var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom.findDOMNode(this);
                            node && node.scrollTop
                        }
                        this.performEnter(mounting)
                    } else
                        this.performExit()
                } else
                    this.props.unmountOnExit && this.state.status === EXITED && this.setState({
                        status: UNMOUNTED
                    })
            }
            ,
            _proto.performEnter = function(mounting) {
                var _this2 = this
                  , enter = this.props.enter
                  , appearing = this.context ? this.context.isMounting : mounting
                  , _ref2 = this.props.nodeRef ? [appearing] : [react_dom.findDOMNode(this), appearing]
                  , maybeNode = _ref2[0]
                  , maybeAppearing = _ref2[1]
                  , timeouts = this.getTimeouts()
                  , enterTimeout = appearing ? timeouts.appear : timeouts.enter;
                if (!mounting && !enter || config.disabled) {
                    this.safeSetState({
                        status: ENTERED
                    }, function() {
                        _this2.props.onEntered(maybeNode)
                    });
                    return
                }
                this.props.onEnter(maybeNode, maybeAppearing),
                this.safeSetState({
                    status: ENTERING
                }, function() {
                    _this2.props.onEntering(maybeNode, maybeAppearing),
                    _this2.onTransitionEnd(enterTimeout, function() {
                        _this2.safeSetState({
                            status: ENTERED
                        }, function() {
                            _this2.props.onEntered(maybeNode, maybeAppearing)
                        })
                    })
                })
            }
            ,
            _proto.performExit = function() {
                var _this3 = this
                  , exit = this.props.exit
                  , timeouts = this.getTimeouts()
                  , maybeNode = this.props.nodeRef ? void 0 : react_dom.findDOMNode(this);
                if (!exit || config.disabled) {
                    this.safeSetState({
                        status: EXITED
                    }, function() {
                        _this3.props.onExited(maybeNode)
                    });
                    return
                }
                this.props.onExit(maybeNode),
                this.safeSetState({
                    status: EXITING
                }, function() {
                    _this3.props.onExiting(maybeNode),
                    _this3.onTransitionEnd(timeouts.exit, function() {
                        _this3.safeSetState({
                            status: EXITED
                        }, function() {
                            _this3.props.onExited(maybeNode)
                        })
                    })
                })
            }
            ,
            _proto.cancelNextCallback = function() {
                null !== this.nextCallback && (this.nextCallback.cancel(),
                this.nextCallback = null)
            }
            ,
            _proto.safeSetState = function(nextState, callback) {
                callback = this.setNextCallback(callback),
                this.setState(nextState, callback)
            }
            ,
            _proto.setNextCallback = function(callback) {
                var _this4 = this
                  , active = !0;
                return this.nextCallback = function(event) {
                    active && (active = !1,
                    _this4.nextCallback = null,
                    callback(event))
                }
                ,
                this.nextCallback.cancel = function() {
                    active = !1
                }
                ,
                this.nextCallback
            }
            ,
            _proto.onTransitionEnd = function(timeout, handler) {
                this.setNextCallback(handler);
                var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom.findDOMNode(this)
                  , doesNotHaveTimeoutOrListener = null == timeout && !this.props.addEndListener;
                if (!node || doesNotHaveTimeoutOrListener) {
                    setTimeout(this.nextCallback, 0);
                    return
                }
                if (this.props.addEndListener) {
                    var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback]
                      , maybeNode = _ref3[0]
                      , maybeNextCallback = _ref3[1];
                    this.props.addEndListener(maybeNode, maybeNextCallback)
                }
                null != timeout && setTimeout(this.nextCallback, timeout)
            }
            ,
            _proto.render = function() {
                var status = this.state.status;
                if (status === UNMOUNTED)
                    return null;
                var _this$props = this.props
                  , children = _this$props.children
                  , childProps = (_this$props.in,
                _this$props.mountOnEnter,
                _this$props.unmountOnExit,
                _this$props.appear,
                _this$props.enter,
                _this$props.exit,
                _this$props.timeout,
                _this$props.addEndListener,
                _this$props.onEnter,
                _this$props.onEntering,
                _this$props.onEntered,
                _this$props.onExit,
                _this$props.onExiting,
                _this$props.onExited,
                _this$props.nodeRef,
                (0,
                objectWithoutPropertiesLoose.Z)(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                return react.createElement(TransitionGroupContext.Provider, {
                    value: null
                }, "function" == typeof children ? children(status, childProps) : react.cloneElement(react.Children.only(children), childProps))
            }
            ,
            Transition
        }(react.Component);
        function noop() {}
        Transition.contextType = TransitionGroupContext,
        Transition.propTypes = {},
        Transition.defaultProps = {
            in: !1,
            mountOnEnter: !1,
            unmountOnExit: !1,
            appear: !1,
            enter: !0,
            exit: !0,
            onEnter: noop,
            onEntering: noop,
            onEntered: noop,
            onExit: noop,
            onExiting: noop,
            onExited: noop
        },
        Transition.UNMOUNTED = UNMOUNTED,
        Transition.EXITED = EXITED,
        Transition.ENTERING = ENTERING,
        Transition.ENTERED = ENTERED,
        Transition.EXITING = EXITING;
        let reflow = node=>node.scrollTop;
        function getTransitionProps(props, options) {
            var _style$transitionDura, _style$transitionTimi;
            let {timeout, easing, style={}} = props;
            return {
                duration: null != (_style$transitionDura = style.transitionDuration) ? _style$transitionDura : "number" == typeof timeout ? timeout : timeout[options.mode] || 0,
                easing: null != (_style$transitionTimi = style.transitionTimingFunction) ? _style$transitionTimi : "object" == typeof easing ? easing[options.mode] : easing,
                delay: style.transitionDelay
            }
        }
        function setRef(ref, value) {
            "function" == typeof ref ? ref(value) : ref && (ref.current = value)
        }
        function useForkRef(...refs) {
            return react.useMemo(()=>refs.every(ref=>null == ref) ? null : instance=>{
                refs.forEach(ref=>{
                    setRef(ref, instance)
                }
                )
            }
            , refs)
        }
        var jsx_runtime = __webpack_require__(52322);
        let Grow_excluded = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
        function getScale(value) {
            return `scale(${value}, ${value ** 2})`
        }
        let styles = {
            entering: {
                opacity: 1,
                transform: getScale(1)
            },
            entered: {
                opacity: 1,
                transform: "none"
            }
        }
          , isWebKit154 = "undefined" != typeof navigator && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent)
          , Grow = react.forwardRef(function(props, ref) {
            let {addEndListener, appear=!0, children, easing, in: inProp, onEnter, onEntered, onEntering, onExit, onExited, onExiting, style, timeout="auto", TransitionComponent=Transition} = props
              , other = (0,
            objectWithoutPropertiesLoose.Z)(props, Grow_excluded)
              , timer = react.useRef()
              , autoTimeout = react.useRef()
              , theme = styles_useTheme_useTheme()
              , nodeRef = react.useRef(null)
              , handleRef = useForkRef(nodeRef, children.ref, ref)
              , normalizedTransitionCallback = callback=>maybeIsAppearing=>{
                if (callback) {
                    let node = nodeRef.current;
                    void 0 === maybeIsAppearing ? callback(node) : callback(node, maybeIsAppearing)
                }
            }
              , handleEntering = normalizedTransitionCallback(onEntering)
              , handleEnter = normalizedTransitionCallback((node,isAppearing)=>{
                let duration;
                reflow(node);
                let {duration: transitionDuration, delay, easing: transitionTimingFunction} = getTransitionProps({
                    style,
                    timeout,
                    easing
                }, {
                    mode: "enter"
                });
                "auto" === timeout ? (duration = theme.transitions.getAutoHeightDuration(node.clientHeight),
                autoTimeout.current = duration) : duration = transitionDuration,
                node.style.transition = [theme.transitions.create("opacity", {
                    duration,
                    delay
                }), theme.transitions.create("transform", {
                    duration: isWebKit154 ? duration : .666 * duration,
                    delay,
                    easing: transitionTimingFunction
                })].join(","),
                onEnter && onEnter(node, isAppearing)
            }
            )
              , handleEntered = normalizedTransitionCallback(onEntered)
              , handleExiting = normalizedTransitionCallback(onExiting)
              , handleExit = normalizedTransitionCallback(node=>{
                let duration;
                let {duration: transitionDuration, delay, easing: transitionTimingFunction} = getTransitionProps({
                    style,
                    timeout,
                    easing
                }, {
                    mode: "exit"
                });
                "auto" === timeout ? (duration = theme.transitions.getAutoHeightDuration(node.clientHeight),
                autoTimeout.current = duration) : duration = transitionDuration,
                node.style.transition = [theme.transitions.create("opacity", {
                    duration,
                    delay
                }), theme.transitions.create("transform", {
                    duration: isWebKit154 ? duration : .666 * duration,
                    delay: isWebKit154 ? delay : delay || .333 * duration,
                    easing: transitionTimingFunction
                })].join(","),
                node.style.opacity = 0,
                node.style.transform = getScale(.75),
                onExit && onExit(node)
            }
            )
              , handleExited = normalizedTransitionCallback(onExited)
              , handleAddEndListener = next=>{
                "auto" === timeout && (timer.current = setTimeout(next, autoTimeout.current || 0)),
                addEndListener && addEndListener(nodeRef.current, next)
            }
            ;
            return react.useEffect(()=>()=>{
                clearTimeout(timer.current)
            }
            , []),
            (0,
            jsx_runtime.jsx)(TransitionComponent, (0,
            esm_extends.Z)({
                appear: appear,
                in: inProp,
                nodeRef: nodeRef,
                onEnter: handleEnter,
                onEntered: handleEntered,
                onEntering: handleEntering,
                onExit: handleExit,
                onExited: handleExited,
                onExiting: handleExiting,
                addEndListener: handleAddEndListener,
                timeout: "auto" === timeout ? null : timeout
            }, other, {
                children: (state,childProps)=>react.cloneElement(children, (0,
                esm_extends.Z)({
                    style: (0,
                    esm_extends.Z)({
                        opacity: 0,
                        transform: getScale(.75),
                        visibility: "exited" !== state || inProp ? void 0 : "hidden"
                    }, styles[state], style, children.props.style),
                    ref: handleRef
                }, childProps))
            }))
        });
        Grow.muiSupportAuto = !0;
        let useEnhancedEffect = "undefined" != typeof window ? react.useLayoutEffect : react.useEffect;
        function ownerDocument(node) {
            return node && node.ownerDocument || document
        }
        function getWindow(node) {
            if (null == node)
                return window;
            if ("[object Window]" !== node.toString()) {
                var ownerDocument = node.ownerDocument;
                return ownerDocument && ownerDocument.defaultView || window
            }
            return node
        }
        function isElement(node) {
            var OwnElement = getWindow(node).Element;
            return node instanceof OwnElement || node instanceof Element
        }
        function isHTMLElement(node) {
            var OwnElement = getWindow(node).HTMLElement;
            return node instanceof OwnElement || node instanceof HTMLElement
        }
        function isShadowRoot(node) {
            if ("undefined" == typeof ShadowRoot)
                return !1;
            var OwnElement = getWindow(node).ShadowRoot;
            return node instanceof OwnElement || node instanceof ShadowRoot
        }
        var math_max = Math.max
          , math_min = Math.min
          , math_round = Math.round;
        function getUAString() {
            var uaData = navigator.userAgentData;
            return null != uaData && uaData.brands ? uaData.brands.map(function(item) {
                return item.brand + "/" + item.version
            }).join(" ") : navigator.userAgent
        }
        function isLayoutViewport() {
            return !/^((?!chrome|android).)*safari/i.test(getUAString())
        }
        function getBoundingClientRect(element, includeScale, isFixedStrategy) {
            void 0 === includeScale && (includeScale = !1),
            void 0 === isFixedStrategy && (isFixedStrategy = !1);
            var clientRect = element.getBoundingClientRect()
              , scaleX = 1
              , scaleY = 1;
            includeScale && isHTMLElement(element) && (scaleX = element.offsetWidth > 0 && math_round(clientRect.width) / element.offsetWidth || 1,
            scaleY = element.offsetHeight > 0 && math_round(clientRect.height) / element.offsetHeight || 1);
            var visualViewport = (isElement(element) ? getWindow(element) : window).visualViewport
              , addVisualOffsets = !isLayoutViewport() && isFixedStrategy
              , x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX
              , y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY
              , width = clientRect.width / scaleX
              , height = clientRect.height / scaleY;
            return {
                width: width,
                height: height,
                top: y,
                right: x + width,
                bottom: y + height,
                left: x,
                x: x,
                y: y
            }
        }
        function getWindowScroll(node) {
            var win = getWindow(node);
            return {
                scrollLeft: win.pageXOffset,
                scrollTop: win.pageYOffset
            }
        }
        function getNodeName(element) {
            return element ? (element.nodeName || "").toLowerCase() : null
        }
        function getDocumentElement(element) {
            return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement
        }
        function getWindowScrollBarX(element) {
            return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft
        }
        function getComputedStyle1(element) {
            return getWindow(element).getComputedStyle(element)
        }
        function isScrollParent(element) {
            var _getComputedStyle = getComputedStyle1(element)
              , overflow = _getComputedStyle.overflow
              , overflowX = _getComputedStyle.overflowX
              , overflowY = _getComputedStyle.overflowY;
            return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX)
        }
        function getLayoutRect(element) {
            var clientRect = getBoundingClientRect(element)
              , width = element.offsetWidth
              , height = element.offsetHeight;
            return 1 >= Math.abs(clientRect.width - width) && (width = clientRect.width),
            1 >= Math.abs(clientRect.height - height) && (height = clientRect.height),
            {
                x: element.offsetLeft,
                y: element.offsetTop,
                width: width,
                height: height
            }
        }
        function getParentNode(element) {
            return "html" === getNodeName(element) ? element : element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element)
        }
        function listScrollParents(element, list) {
            void 0 === list && (list = []);
            var _element$ownerDocumen, scrollParent = function getScrollParent(node) {
                return ["html", "body", "#document"].indexOf(getNodeName(node)) >= 0 ? node.ownerDocument.body : isHTMLElement(node) && isScrollParent(node) ? node : getScrollParent(getParentNode(node))
            }(element), isBody = scrollParent === (null == (_element$ownerDocumen = element.ownerDocument) ? void 0 : _element$ownerDocumen.body), win = getWindow(scrollParent), target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent, updatedList = list.concat(target);
            return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)))
        }
        function getTrueOffsetParent(element) {
            return isHTMLElement(element) && "fixed" !== getComputedStyle1(element).position ? element.offsetParent : null
        }
        function getOffsetParent(element) {
            for (var window1 = getWindow(element), offsetParent = getTrueOffsetParent(element); offsetParent && ["table", "td", "th"].indexOf(getNodeName(offsetParent)) >= 0 && "static" === getComputedStyle1(offsetParent).position; )
                offsetParent = getTrueOffsetParent(offsetParent);
            return offsetParent && ("html" === getNodeName(offsetParent) || "body" === getNodeName(offsetParent) && "static" === getComputedStyle1(offsetParent).position) ? window1 : offsetParent || function(element) {
                var isFirefox = /firefox/i.test(getUAString());
                if (/Trident/i.test(getUAString()) && isHTMLElement(element) && "fixed" === getComputedStyle1(element).position)
                    return null;
                var currentNode = getParentNode(element);
                for (isShadowRoot(currentNode) && (currentNode = currentNode.host); isHTMLElement(currentNode) && 0 > ["html", "body"].indexOf(getNodeName(currentNode)); ) {
                    var css = getComputedStyle1(currentNode);
                    if ("none" !== css.transform || "none" !== css.perspective || "paint" === css.contain || -1 !== ["transform", "perspective"].indexOf(css.willChange) || isFirefox && "filter" === css.willChange || isFirefox && css.filter && "none" !== css.filter)
                        return currentNode;
                    currentNode = currentNode.parentNode
                }
                return null
            }(element) || window1
        }
        var bottom = "bottom"
          , right = "right"
          , left = "left"
          , auto = "auto"
          , basePlacements = ["top", bottom, right, left]
          , start = "start"
          , viewport = "viewport"
          , popper = "popper"
          , variationPlacements = basePlacements.reduce(function(acc, placement) {
            return acc.concat([placement + "-" + start, placement + "-end"])
        }, [])
          , enums_placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
            return acc.concat([placement, placement + "-" + start, placement + "-end"])
        }, [])
          , modifierPhases = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"]
          , DEFAULT_OPTIONS = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        };
        function areValidElements() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++)
                args[_key] = arguments[_key];
            return !args.some(function(element) {
                return !(element && "function" == typeof element.getBoundingClientRect)
            })
        }
        var passive = {
            passive: !0
        };
        function getBasePlacement(placement) {
            return placement.split("-")[0]
        }
        function getVariation(placement) {
            return placement.split("-")[1]
        }
        function getMainAxisFromPlacement(placement) {
            return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y"
        }
        function computeOffsets(_ref) {
            var offsets, reference = _ref.reference, element = _ref.element, placement = _ref.placement, basePlacement = placement ? getBasePlacement(placement) : null, variation = placement ? getVariation(placement) : null, commonX = reference.x + reference.width / 2 - element.width / 2, commonY = reference.y + reference.height / 2 - element.height / 2;
            switch (basePlacement) {
            case "top":
                offsets = {
                    x: commonX,
                    y: reference.y - element.height
                };
                break;
            case bottom:
                offsets = {
                    x: commonX,
                    y: reference.y + reference.height
                };
                break;
            case right:
                offsets = {
                    x: reference.x + reference.width,
                    y: commonY
                };
                break;
            case left:
                offsets = {
                    x: reference.x - element.width,
                    y: commonY
                };
                break;
            default:
                offsets = {
                    x: reference.x,
                    y: reference.y
                }
            }
            var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
            if (null != mainAxis) {
                var len = "y" === mainAxis ? "height" : "width";
                switch (variation) {
                case start:
                    offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                    break;
                case "end":
                    offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2)
                }
            }
            return offsets
        }
        var unsetSides = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };
        function mapToStyles(_ref2) {
            var _ref, x, y, dpr, _Object$assign2, _Object$assign, popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed, _offsets$x = offsets.x, x1 = void 0 === _offsets$x ? 0 : _offsets$x, _offsets$y = offsets.y, y1 = void 0 === _offsets$y ? 0 : _offsets$y, _ref3 = "function" == typeof roundOffsets ? roundOffsets({
                x: x1,
                y: y1
            }) : {
                x: x1,
                y: y1
            };
            x1 = _ref3.x,
            y1 = _ref3.y;
            var hasX = offsets.hasOwnProperty("x")
              , hasY = offsets.hasOwnProperty("y")
              , sideX = left
              , sideY = "top"
              , win = window;
            if (adaptive) {
                var offsetParent = getOffsetParent(popper)
                  , heightProp = "clientHeight"
                  , widthProp = "clientWidth";
                offsetParent === getWindow(popper) && "static" !== getComputedStyle1(offsetParent = getDocumentElement(popper)).position && "absolute" === position && (heightProp = "scrollHeight",
                widthProp = "scrollWidth"),
                ("top" === placement || (placement === left || placement === right) && "end" === variation) && (sideY = bottom,
                y1 -= (isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp]) - popperRect.height,
                y1 *= gpuAcceleration ? 1 : -1),
                (placement === left || ("top" === placement || placement === bottom) && "end" === variation) && (sideX = right,
                x1 -= (isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp]) - popperRect.width,
                x1 *= gpuAcceleration ? 1 : -1)
            }
            var commonStyles = Object.assign({
                position: position
            }, adaptive && unsetSides)
              , _ref4 = !0 === roundOffsets ? (x = (_ref = {
                x: x1,
                y: y1
            }).x,
            y = _ref.y,
            {
                x: math_round(x * (dpr = window.devicePixelRatio || 1)) / dpr || 0,
                y: math_round(y * dpr) / dpr || 0
            }) : {
                x: x1,
                y: y1
            };
            return (x1 = _ref4.x,
            y1 = _ref4.y,
            gpuAcceleration) ? Object.assign({}, commonStyles, ((_Object$assign = {})[sideY] = hasY ? "0" : "",
            _Object$assign[sideX] = hasX ? "0" : "",
            _Object$assign.transform = 1 >= (win.devicePixelRatio || 1) ? "translate(" + x1 + "px, " + y1 + "px)" : "translate3d(" + x1 + "px, " + y1 + "px, 0)",
            _Object$assign)) : Object.assign({}, commonStyles, ((_Object$assign2 = {})[sideY] = hasY ? y1 + "px" : "",
            _Object$assign2[sideX] = hasX ? x1 + "px" : "",
            _Object$assign2.transform = "",
            _Object$assign2))
        }
        var hash = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        function getOppositePlacement(placement) {
            return placement.replace(/left|right|bottom|top/g, function(matched) {
                return hash[matched]
            })
        }
        var getOppositeVariationPlacement_hash = {
            start: "end",
            end: "start"
        };
        function getOppositeVariationPlacement(placement) {
            return placement.replace(/start|end/g, function(matched) {
                return getOppositeVariationPlacement_hash[matched]
            })
        }
        function contains(parent, child) {
            var rootNode = child.getRootNode && child.getRootNode();
            if (parent.contains(child))
                return !0;
            if (rootNode && isShadowRoot(rootNode)) {
                var next = child;
                do {
                    if (next && parent.isSameNode(next))
                        return !0;
                    next = next.parentNode || next.host
                } while (next)
            }
            return !1
        }
        function rectToClientRect(rect) {
            return Object.assign({}, rect, {
                left: rect.x,
                top: rect.y,
                right: rect.x + rect.width,
                bottom: rect.y + rect.height
            })
        }
        function getClientRectFromMixedType(element, clippingParent, strategy) {
            var rect, element1, _element$ownerDocumen, html, winScroll, body, width, height, x, y;
            return clippingParent === viewport ? rectToClientRect(function(element, strategy) {
                var win = getWindow(element)
                  , html = getDocumentElement(element)
                  , visualViewport = win.visualViewport
                  , width = html.clientWidth
                  , height = html.clientHeight
                  , x = 0
                  , y = 0;
                if (visualViewport) {
                    width = visualViewport.width,
                    height = visualViewport.height;
                    var layoutViewport = isLayoutViewport();
                    (layoutViewport || !layoutViewport && "fixed" === strategy) && (x = visualViewport.offsetLeft,
                    y = visualViewport.offsetTop)
                }
                return {
                    width: width,
                    height: height,
                    x: x + getWindowScrollBarX(element),
                    y: y
                }
            }(element, strategy)) : isElement(clippingParent) ? ((rect = getBoundingClientRect(clippingParent, !1, "fixed" === strategy)).top = rect.top + clippingParent.clientTop,
            rect.left = rect.left + clippingParent.clientLeft,
            rect.bottom = rect.top + clippingParent.clientHeight,
            rect.right = rect.left + clippingParent.clientWidth,
            rect.width = clippingParent.clientWidth,
            rect.height = clippingParent.clientHeight,
            rect.x = rect.left,
            rect.y = rect.top,
            rect) : rectToClientRect((element1 = getDocumentElement(element),
            html = getDocumentElement(element1),
            winScroll = getWindowScroll(element1),
            body = null == (_element$ownerDocumen = element1.ownerDocument) ? void 0 : _element$ownerDocumen.body,
            width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0),
            height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0),
            x = -winScroll.scrollLeft + getWindowScrollBarX(element1),
            y = -winScroll.scrollTop,
            "rtl" === getComputedStyle1(body || html).direction && (x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width),
            {
                width: width,
                height: height,
                x: x,
                y: y
            }))
        }
        function getFreshSideObject() {
            return {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        }
        function mergePaddingObject(paddingObject) {
            return Object.assign({}, getFreshSideObject(), paddingObject)
        }
        function expandToHashMap(value, keys) {
            return keys.reduce(function(hashMap, key) {
                return hashMap[key] = value,
                hashMap
            }, {})
        }
        function detectOverflow(state, options) {
            void 0 === options && (options = {});
            var element, boundary, clippingParents, clipperElement, clippingParents1, firstClippingParent, clippingRect, _options = options, _options$placement = _options.placement, placement = void 0 === _options$placement ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = void 0 === _options$strategy ? state.strategy : _options$strategy, _options$boundary = _options.boundary, _options$rootBoundary = _options.rootBoundary, _options$elementConte = _options.elementContext, elementContext = void 0 === _options$elementConte ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, _options$padding = _options.padding, padding = void 0 === _options$padding ? 0 : _options$padding, paddingObject = mergePaddingObject("number" != typeof padding ? padding : expandToHashMap(padding, basePlacements)), popperRect = state.rects.popper, element1 = state.elements[void 0 !== _options$altBoundary && _options$altBoundary ? elementContext === popper ? "reference" : popper : elementContext], clippingClientRect = (element = isElement(element1) ? element1 : element1.contextElement || getDocumentElement(state.elements.popper),
            firstClippingParent = (clippingParents1 = [].concat("clippingParents" === (boundary = void 0 === _options$boundary ? "clippingParents" : _options$boundary) ? (clippingParents = listScrollParents(getParentNode(element)),
            isElement(clipperElement = ["absolute", "fixed"].indexOf(getComputedStyle1(element).position) >= 0 && isHTMLElement(element) ? getOffsetParent(element) : element) ? clippingParents.filter(function(clippingParent) {
                return isElement(clippingParent) && contains(clippingParent, clipperElement) && "body" !== getNodeName(clippingParent)
            }) : []) : [].concat(boundary), [void 0 === _options$rootBoundary ? viewport : _options$rootBoundary]))[0],
            (clippingRect = clippingParents1.reduce(function(accRect, clippingParent) {
                var rect = getClientRectFromMixedType(element, clippingParent, strategy);
                return accRect.top = math_max(rect.top, accRect.top),
                accRect.right = math_min(rect.right, accRect.right),
                accRect.bottom = math_min(rect.bottom, accRect.bottom),
                accRect.left = math_max(rect.left, accRect.left),
                accRect
            }, getClientRectFromMixedType(element, firstClippingParent, strategy))).width = clippingRect.right - clippingRect.left,
            clippingRect.height = clippingRect.bottom - clippingRect.top,
            clippingRect.x = clippingRect.left,
            clippingRect.y = clippingRect.top,
            clippingRect), referenceClientRect = getBoundingClientRect(state.elements.reference), popperOffsets = computeOffsets({
                reference: referenceClientRect,
                element: popperRect,
                strategy: "absolute",
                placement: placement
            }), popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets)), elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect, overflowOffsets = {
                top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
                bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
                left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
                right: elementClientRect.right - clippingClientRect.right + paddingObject.right
            }, offsetData = state.modifiersData.offset;
            if (elementContext === popper && offsetData) {
                var offset = offsetData[placement];
                Object.keys(overflowOffsets).forEach(function(key) {
                    var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1
                      , axis = ["top", bottom].indexOf(key) >= 0 ? "y" : "x";
                    overflowOffsets[key] += offset[axis] * multiply
                })
            }
            return overflowOffsets
        }
        function within(min, value, max) {
            return math_max(min, math_min(value, max))
        }
        function getSideOffsets(overflow, rect, preventedOffsets) {
            return void 0 === preventedOffsets && (preventedOffsets = {
                x: 0,
                y: 0
            }),
            {
                top: overflow.top - rect.height - preventedOffsets.y,
                right: overflow.right - rect.width + preventedOffsets.x,
                bottom: overflow.bottom - rect.height + preventedOffsets.y,
                left: overflow.left - rect.width - preventedOffsets.x
            }
        }
        function isAnySideFullyClipped(overflow) {
            return ["top", right, bottom, left].some(function(side) {
                return overflow[side] >= 0
            })
        }
        var popper_createPopper = (defaultModifiers = void 0 === (_generatorOptions$def = (_generatorOptions = {
            defaultModifiers: [{
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function() {},
                effect: function(_ref) {
                    var state = _ref.state
                      , instance = _ref.instance
                      , options = _ref.options
                      , _options$scroll = options.scroll
                      , scroll = void 0 === _options$scroll || _options$scroll
                      , _options$resize = options.resize
                      , resize = void 0 === _options$resize || _options$resize
                      , window1 = getWindow(state.elements.popper)
                      , scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
                    return scroll && scrollParents.forEach(function(scrollParent) {
                        scrollParent.addEventListener("scroll", instance.update, passive)
                    }),
                    resize && window1.addEventListener("resize", instance.update, passive),
                    function() {
                        scroll && scrollParents.forEach(function(scrollParent) {
                            scrollParent.removeEventListener("scroll", instance.update, passive)
                        }),
                        resize && window1.removeEventListener("resize", instance.update, passive)
                    }
                },
                data: {}
            }, {
                name: "popperOffsets",
                enabled: !0,
                phase: "read",
                fn: function(_ref) {
                    var state = _ref.state
                      , name = _ref.name;
                    state.modifiersData[name] = computeOffsets({
                        reference: state.rects.reference,
                        element: state.rects.popper,
                        strategy: "absolute",
                        placement: state.placement
                    })
                },
                data: {}
            }, {
                name: "computeStyles",
                enabled: !0,
                phase: "beforeWrite",
                fn: function(_ref5) {
                    var state = _ref5.state
                      , options = _ref5.options
                      , _options$gpuAccelerat = options.gpuAcceleration
                      , _options$adaptive = options.adaptive
                      , _options$roundOffsets = options.roundOffsets
                      , roundOffsets = void 0 === _options$roundOffsets || _options$roundOffsets
                      , commonStyles = {
                        placement: getBasePlacement(state.placement),
                        variation: getVariation(state.placement),
                        popper: state.elements.popper,
                        popperRect: state.rects.popper,
                        gpuAcceleration: void 0 === _options$gpuAccelerat || _options$gpuAccelerat,
                        isFixed: "fixed" === state.options.strategy
                    };
                    null != state.modifiersData.popperOffsets && (state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
                        offsets: state.modifiersData.popperOffsets,
                        position: state.options.strategy,
                        adaptive: void 0 === _options$adaptive || _options$adaptive,
                        roundOffsets: roundOffsets
                    })))),
                    null != state.modifiersData.arrow && (state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
                        offsets: state.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: roundOffsets
                    })))),
                    state.attributes.popper = Object.assign({}, state.attributes.popper, {
                        "data-popper-placement": state.placement
                    })
                },
                data: {}
            }, {
                name: "applyStyles",
                enabled: !0,
                phase: "write",
                fn: function(_ref) {
                    var state = _ref.state;
                    Object.keys(state.elements).forEach(function(name) {
                        var style = state.styles[name] || {}
                          , attributes = state.attributes[name] || {}
                          , element = state.elements[name];
                        isHTMLElement(element) && getNodeName(element) && (Object.assign(element.style, style),
                        Object.keys(attributes).forEach(function(name) {
                            var value = attributes[name];
                            !1 === value ? element.removeAttribute(name) : element.setAttribute(name, !0 === value ? "" : value)
                        }))
                    })
                },
                effect: function(_ref2) {
                    var state = _ref2.state
                      , initialStyles = {
                        popper: {
                            position: state.options.strategy,
                            left: "0",
                            top: "0",
                            margin: "0"
                        },
                        arrow: {
                            position: "absolute"
                        },
                        reference: {}
                    };
                    return Object.assign(state.elements.popper.style, initialStyles.popper),
                    state.styles = initialStyles,
                    state.elements.arrow && Object.assign(state.elements.arrow.style, initialStyles.arrow),
                    function() {
                        Object.keys(state.elements).forEach(function(name) {
                            var element = state.elements[name]
                              , attributes = state.attributes[name] || {}
                              , style = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]).reduce(function(style, property) {
                                return style[property] = "",
                                style
                            }, {});
                            isHTMLElement(element) && getNodeName(element) && (Object.assign(element.style, style),
                            Object.keys(attributes).forEach(function(attribute) {
                                element.removeAttribute(attribute)
                            }))
                        })
                    }
                },
                requires: ["computeStyles"]
            }, {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function(_ref2) {
                    var state = _ref2.state
                      , options = _ref2.options
                      , name = _ref2.name
                      , _options$offset = options.offset
                      , offset = void 0 === _options$offset ? [0, 0] : _options$offset
                      , data = enums_placements.reduce(function(acc, placement) {
                        var rects, basePlacement, invertDistance, _ref, skidding, distance;
                        return acc[placement] = (rects = state.rects,
                        invertDistance = [left, "top"].indexOf(basePlacement = getBasePlacement(placement)) >= 0 ? -1 : 1,
                        skidding = (_ref = "function" == typeof offset ? offset(Object.assign({}, rects, {
                            placement: placement
                        })) : offset)[0],
                        distance = _ref[1],
                        skidding = skidding || 0,
                        distance = (distance || 0) * invertDistance,
                        [left, right].indexOf(basePlacement) >= 0 ? {
                            x: distance,
                            y: skidding
                        } : {
                            x: skidding,
                            y: distance
                        }),
                        acc
                    }, {})
                      , _data$state$placement = data[state.placement]
                      , x = _data$state$placement.x
                      , y = _data$state$placement.y;
                    null != state.modifiersData.popperOffsets && (state.modifiersData.popperOffsets.x += x,
                    state.modifiersData.popperOffsets.y += y),
                    state.modifiersData[name] = data
                }
            }, {
                name: "flip",
                enabled: !0,
                phase: "main",
                fn: function(_ref) {
                    var state = _ref.state
                      , options = _ref.options
                      , name = _ref.name;
                    if (!state.modifiersData[name]._skip) {
                        for (var _options$mainAxis = options.mainAxis, checkMainAxis = void 0 === _options$mainAxis || _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = void 0 === _options$altAxis || _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = void 0 === _options$flipVariatio || _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements, preferredPlacement = state.options.placement, basePlacement = getBasePlacement(preferredPlacement), placements = [preferredPlacement].concat(specifiedFallbackPlacements || (basePlacement !== preferredPlacement && flipVariations ? function(placement) {
                            if (getBasePlacement(placement) === auto)
                                return [];
                            var oppositePlacement = getOppositePlacement(placement);
                            return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)]
                        }(preferredPlacement) : [getOppositePlacement(preferredPlacement)])).reduce(function(acc, placement) {
                            var _options, placement1, boundary1, rootBoundary1, padding1, flipVariations1, _options$allowedAutoP, allowedAutoPlacements1, variation, placements, allowedPlacements, overflows;
                            return acc.concat(getBasePlacement(placement) === auto ? (placement1 = (_options = {
                                placement: placement,
                                boundary: boundary,
                                rootBoundary: rootBoundary,
                                padding: padding,
                                flipVariations: flipVariations,
                                allowedAutoPlacements: allowedAutoPlacements
                            }).placement,
                            boundary1 = _options.boundary,
                            rootBoundary1 = _options.rootBoundary,
                            padding1 = _options.padding,
                            flipVariations1 = _options.flipVariations,
                            allowedAutoPlacements1 = void 0 === (_options$allowedAutoP = _options.allowedAutoPlacements) ? enums_placements : _options$allowedAutoP,
                            0 === (allowedPlacements = (placements = (variation = getVariation(placement1)) ? flipVariations1 ? variationPlacements : variationPlacements.filter(function(placement) {
                                return getVariation(placement) === variation
                            }) : basePlacements).filter(function(placement) {
                                return allowedAutoPlacements1.indexOf(placement) >= 0
                            })).length && (allowedPlacements = placements),
                            Object.keys(overflows = allowedPlacements.reduce(function(acc, placement) {
                                return acc[placement] = detectOverflow(state, {
                                    placement: placement,
                                    boundary: boundary1,
                                    rootBoundary: rootBoundary1,
                                    padding: padding1
                                })[getBasePlacement(placement)],
                                acc
                            }, {})).sort(function(a, b) {
                                return overflows[a] - overflows[b]
                            })) : placement)
                        }, []), referenceRect = state.rects.reference, popperRect = state.rects.popper, checksMap = new Map, makeFallbackChecks = !0, firstFittingPlacement = placements[0], i = 0; i < placements.length; i++) {
                            var placement = placements[i]
                              , _basePlacement = getBasePlacement(placement)
                              , isStartVariation = getVariation(placement) === start
                              , isVertical = ["top", bottom].indexOf(_basePlacement) >= 0
                              , len = isVertical ? "width" : "height"
                              , overflow = detectOverflow(state, {
                                placement: placement,
                                boundary: boundary,
                                rootBoundary: rootBoundary,
                                altBoundary: altBoundary,
                                padding: padding
                            })
                              , mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : "top";
                            referenceRect[len] > popperRect[len] && (mainVariationSide = getOppositePlacement(mainVariationSide));
                            var altVariationSide = getOppositePlacement(mainVariationSide)
                              , checks = [];
                            if (checkMainAxis && checks.push(overflow[_basePlacement] <= 0),
                            checkAltAxis && checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0),
                            checks.every(function(check) {
                                return check
                            })) {
                                firstFittingPlacement = placement,
                                makeFallbackChecks = !1;
                                break
                            }
                            checksMap.set(placement, checks)
                        }
                        if (makeFallbackChecks)
                            for (var numberOfChecks = flipVariations ? 3 : 1, _loop = function(_i) {
                                var fittingPlacement = placements.find(function(placement) {
                                    var checks = checksMap.get(placement);
                                    if (checks)
                                        return checks.slice(0, _i).every(function(check) {
                                            return check
                                        })
                                });
                                if (fittingPlacement)
                                    return firstFittingPlacement = fittingPlacement,
                                    "break"
                            }, _i = numberOfChecks; _i > 0 && "break" !== _loop(_i); _i--)
                                ;
                        state.placement !== firstFittingPlacement && (state.modifiersData[name]._skip = !0,
                        state.placement = firstFittingPlacement,
                        state.reset = !0)
                    }
                },
                requiresIfExists: ["offset"],
                data: {
                    _skip: !1
                }
            }, {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function(_ref) {
                    var state = _ref.state
                      , options = _ref.options
                      , name = _ref.name
                      , _options$mainAxis = options.mainAxis
                      , _options$altAxis = options.altAxis
                      , boundary = options.boundary
                      , rootBoundary = options.rootBoundary
                      , altBoundary = options.altBoundary
                      , padding = options.padding
                      , _options$tether = options.tether
                      , tether = void 0 === _options$tether || _options$tether
                      , _options$tetherOffset = options.tetherOffset
                      , tetherOffset = void 0 === _options$tetherOffset ? 0 : _options$tetherOffset
                      , overflow = detectOverflow(state, {
                        boundary: boundary,
                        rootBoundary: rootBoundary,
                        padding: padding,
                        altBoundary: altBoundary
                    })
                      , basePlacement = getBasePlacement(state.placement)
                      , variation = getVariation(state.placement)
                      , isBasePlacement = !variation
                      , mainAxis = getMainAxisFromPlacement(basePlacement)
                      , altAxis = "x" === mainAxis ? "y" : "x"
                      , popperOffsets = state.modifiersData.popperOffsets
                      , referenceRect = state.rects.reference
                      , popperRect = state.rects.popper
                      , tetherOffsetValue = "function" == typeof tetherOffset ? tetherOffset(Object.assign({}, state.rects, {
                        placement: state.placement
                    })) : tetherOffset
                      , normalizedTetherOffsetValue = "number" == typeof tetherOffsetValue ? {
                        mainAxis: tetherOffsetValue,
                        altAxis: tetherOffsetValue
                    } : Object.assign({
                        mainAxis: 0,
                        altAxis: 0
                    }, tetherOffsetValue)
                      , offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null
                      , data = {
                        x: 0,
                        y: 0
                    };
                    if (popperOffsets) {
                        if (void 0 === _options$mainAxis || _options$mainAxis) {
                            var _offsetModifierState$, mainSide = "y" === mainAxis ? "top" : left, altSide = "y" === mainAxis ? bottom : right, len = "y" === mainAxis ? "height" : "width", offset = popperOffsets[mainAxis], min = offset + overflow[mainSide], max = offset - overflow[altSide], additive = tether ? -popperRect[len] / 2 : 0, minLen = variation === start ? referenceRect[len] : popperRect[len], maxLen = variation === start ? -popperRect[len] : -referenceRect[len], arrowElement = state.elements.arrow, arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
                                width: 0,
                                height: 0
                            }, arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject(), arrowPaddingMin = arrowPaddingObject[mainSide], arrowPaddingMax = arrowPaddingObject[altSide], arrowLen = within(0, referenceRect[len], arrowRect[len]), minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis, maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis, arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow), clientOffset = arrowOffsetParent ? "y" === mainAxis ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0, offsetModifierValue = null != (_offsetModifierState$ = null == offsetModifierState ? void 0 : offsetModifierState[mainAxis]) ? _offsetModifierState$ : 0, preventedOffset = within(tether ? math_min(min, offset + minOffset - offsetModifierValue - clientOffset) : min, offset, tether ? math_max(max, offset + maxOffset - offsetModifierValue) : max);
                            popperOffsets[mainAxis] = preventedOffset,
                            data[mainAxis] = preventedOffset - offset
                        }
                        if (void 0 !== _options$altAxis && _options$altAxis) {
                            var _offsetModifierState$2, v, _offset = popperOffsets[altAxis], _len = "y" === altAxis ? "height" : "width", _min = _offset + overflow["x" === mainAxis ? "top" : left], _max = _offset - overflow["x" === mainAxis ? bottom : right], isOriginSide = -1 !== ["top", left].indexOf(basePlacement), _offsetModifierValue = null != (_offsetModifierState$2 = null == offsetModifierState ? void 0 : offsetModifierState[altAxis]) ? _offsetModifierState$2 : 0, _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis, _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max, _preventedOffset = tether && isOriginSide ? (v = within(_tetherMin, _offset, _tetherMax)) > _tetherMax ? _tetherMax : v : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
                            popperOffsets[altAxis] = _preventedOffset,
                            data[altAxis] = _preventedOffset - _offset
                        }
                        state.modifiersData[name] = data
                    }
                },
                requiresIfExists: ["offset"]
            }, {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function(_ref) {
                    var padding, _state$modifiersData$, state = _ref.state, name = _ref.name, options = _ref.options, arrowElement = state.elements.arrow, popperOffsets = state.modifiersData.popperOffsets, basePlacement = getBasePlacement(state.placement), axis = getMainAxisFromPlacement(basePlacement), len = [left, right].indexOf(basePlacement) >= 0 ? "height" : "width";
                    if (arrowElement && popperOffsets) {
                        var paddingObject = mergePaddingObject("number" != typeof (padding = "function" == typeof (padding = options.padding) ? padding(Object.assign({}, state.rects, {
                            placement: state.placement
                        })) : padding) ? padding : expandToHashMap(padding, basePlacements))
                          , arrowRect = getLayoutRect(arrowElement)
                          , endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len]
                          , startDiff = popperOffsets[axis] - state.rects.reference[axis]
                          , arrowOffsetParent = getOffsetParent(arrowElement)
                          , clientSize = arrowOffsetParent ? "y" === axis ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0
                          , min = paddingObject["y" === axis ? "top" : left]
                          , max = clientSize - arrowRect[len] - paddingObject["y" === axis ? bottom : right]
                          , center = clientSize / 2 - arrowRect[len] / 2 + (endDiff / 2 - startDiff / 2)
                          , offset = within(min, center, max);
                        state.modifiersData[name] = ((_state$modifiersData$ = {})[axis] = offset,
                        _state$modifiersData$.centerOffset = offset - center,
                        _state$modifiersData$)
                    }
                },
                effect: function(_ref2) {
                    var state = _ref2.state
                      , _options$element = _ref2.options.element
                      , arrowElement = void 0 === _options$element ? "[data-popper-arrow]" : _options$element;
                    null != arrowElement && ("string" != typeof arrowElement || (arrowElement = state.elements.popper.querySelector(arrowElement))) && contains(state.elements.popper, arrowElement) && (state.elements.arrow = arrowElement)
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"]
            }, {
                name: "hide",
                enabled: !0,
                phase: "main",
                requiresIfExists: ["preventOverflow"],
                fn: function(_ref) {
                    var state = _ref.state
                      , name = _ref.name
                      , referenceRect = state.rects.reference
                      , popperRect = state.rects.popper
                      , preventedOffsets = state.modifiersData.preventOverflow
                      , referenceOverflow = detectOverflow(state, {
                        elementContext: "reference"
                    })
                      , popperAltOverflow = detectOverflow(state, {
                        altBoundary: !0
                    })
                      , referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect)
                      , popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets)
                      , isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets)
                      , hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
                    state.modifiersData[name] = {
                        referenceClippingOffsets: referenceClippingOffsets,
                        popperEscapeOffsets: popperEscapeOffsets,
                        isReferenceHidden: isReferenceHidden,
                        hasPopperEscaped: hasPopperEscaped
                    },
                    state.attributes.popper = Object.assign({}, state.attributes.popper, {
                        "data-popper-reference-hidden": isReferenceHidden,
                        "data-popper-escaped": hasPopperEscaped
                    })
                }
            }]
        }).defaultModifiers) ? [] : _generatorOptions$def,
        defaultOptions = void 0 === (_generatorOptions$def2 = _generatorOptions.defaultOptions) ? DEFAULT_OPTIONS : _generatorOptions$def2,
        function(reference, popper, options) {
            void 0 === options && (options = defaultOptions);
            var pending, state = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
                modifiersData: {},
                elements: {
                    reference: reference,
                    popper: popper
                },
                attributes: {},
                styles: {}
            }, effectCleanupFns = [], isDestroyed = !1, instance = {
                state: state,
                setOptions: function(setOptionsAction) {
                    var merged, modifiers, map, visited, result, options = "function" == typeof setOptionsAction ? setOptionsAction(state.options) : setOptionsAction;
                    cleanupModifierEffects(),
                    state.options = Object.assign({}, defaultOptions, state.options, options),
                    state.scrollParents = {
                        reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
                        popper: listScrollParents(popper)
                    };
                    var orderedModifiers = (modifiers = Object.keys(merged = [].concat(defaultModifiers, state.options.modifiers).reduce(function(merged, current) {
                        var existing = merged[current.name];
                        return merged[current.name] = existing ? Object.assign({}, existing, current, {
                            options: Object.assign({}, existing.options, current.options),
                            data: Object.assign({}, existing.data, current.data)
                        }) : current,
                        merged
                    }, {})).map(function(key) {
                        return merged[key]
                    }),
                    map = new Map,
                    visited = new Set,
                    result = [],
                    modifiers.forEach(function(modifier) {
                        map.set(modifier.name, modifier)
                    }),
                    modifiers.forEach(function(modifier) {
                        visited.has(modifier.name) || function sort(modifier) {
                            visited.add(modifier.name),
                            [].concat(modifier.requires || [], modifier.requiresIfExists || []).forEach(function(dep) {
                                if (!visited.has(dep)) {
                                    var depModifier = map.get(dep);
                                    depModifier && sort(depModifier)
                                }
                            }),
                            result.push(modifier)
                        }(modifier)
                    }),
                    modifierPhases.reduce(function(acc, phase) {
                        return acc.concat(result.filter(function(modifier) {
                            return modifier.phase === phase
                        }))
                    }, []));
                    return state.orderedModifiers = orderedModifiers.filter(function(m) {
                        return m.enabled
                    }),
                    state.orderedModifiers.forEach(function(_ref3) {
                        var name = _ref3.name
                          , _ref3$options = _ref3.options
                          , effect = _ref3.effect;
                        if ("function" == typeof effect) {
                            var cleanupFn = effect({
                                state: state,
                                name: name,
                                instance: instance,
                                options: void 0 === _ref3$options ? {} : _ref3$options
                            });
                            effectCleanupFns.push(cleanupFn || function() {}
                            )
                        }
                    }),
                    instance.update()
                },
                forceUpdate: function() {
                    if (!isDestroyed) {
                        var node, offsetParent, isFixed, isOffsetParentAnElement, rect, scaleX, scaleY, offsetParentIsScaled, documentElement, rect1, scroll, offsets, _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper;
                        if (areValidElements(reference, popper)) {
                            state.rects = {
                                reference: (offsetParent = getOffsetParent(popper),
                                isFixed = "fixed" === state.options.strategy,
                                isOffsetParentAnElement = isHTMLElement(offsetParent),
                                offsetParentIsScaled = isHTMLElement(offsetParent) && (scaleX = math_round((rect = offsetParent.getBoundingClientRect()).width) / offsetParent.offsetWidth || 1,
                                scaleY = math_round(rect.height) / offsetParent.offsetHeight || 1,
                                1 !== scaleX || 1 !== scaleY),
                                documentElement = getDocumentElement(offsetParent),
                                rect1 = getBoundingClientRect(reference, offsetParentIsScaled, isFixed),
                                scroll = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                offsets = {
                                    x: 0,
                                    y: 0
                                },
                                (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) && (("body" !== getNodeName(offsetParent) || isScrollParent(documentElement)) && (scroll = (node = offsetParent) !== getWindow(node) && isHTMLElement(node) ? {
                                    scrollLeft: node.scrollLeft,
                                    scrollTop: node.scrollTop
                                } : getWindowScroll(node)),
                                isHTMLElement(offsetParent) ? (offsets = getBoundingClientRect(offsetParent, !0),
                                offsets.x += offsetParent.clientLeft,
                                offsets.y += offsetParent.clientTop) : documentElement && (offsets.x = getWindowScrollBarX(documentElement))),
                                {
                                    x: rect1.left + scroll.scrollLeft - offsets.x,
                                    y: rect1.top + scroll.scrollTop - offsets.y,
                                    width: rect1.width,
                                    height: rect1.height
                                }),
                                popper: getLayoutRect(popper)
                            },
                            state.reset = !1,
                            state.placement = state.options.placement,
                            state.orderedModifiers.forEach(function(modifier) {
                                return state.modifiersData[modifier.name] = Object.assign({}, modifier.data)
                            });
                            for (var index = 0; index < state.orderedModifiers.length; index++) {
                                if (!0 === state.reset) {
                                    state.reset = !1,
                                    index = -1;
                                    continue
                                }
                                var _state$orderedModifie = state.orderedModifiers[index]
                                  , fn = _state$orderedModifie.fn
                                  , _state$orderedModifie2 = _state$orderedModifie.options
                                  , _options = void 0 === _state$orderedModifie2 ? {} : _state$orderedModifie2
                                  , name = _state$orderedModifie.name;
                                "function" == typeof fn && (state = fn({
                                    state: state,
                                    options: _options,
                                    name: name,
                                    instance: instance
                                }) || state)
                            }
                        }
                    }
                },
                update: function() {
                    return pending || (pending = new Promise(function(resolve) {
                        Promise.resolve().then(function() {
                            pending = void 0,
                            resolve(new Promise(function(resolve) {
                                instance.forceUpdate(),
                                resolve(state)
                            }
                            ))
                        })
                    }
                    )),
                    pending
                },
                destroy: function() {
                    cleanupModifierEffects(),
                    isDestroyed = !0
                }
            };
            if (!areValidElements(reference, popper))
                return instance;
            function cleanupModifierEffects() {
                effectCleanupFns.forEach(function(fn) {
                    return fn()
                }),
                effectCleanupFns = []
            }
            return instance.setOptions(options).then(function(state) {
                !isDestroyed && options.onFirstUpdate && options.onFirstUpdate(state)
            }),
            instance
        }
        );
        let Portal = react.forwardRef(function(props, ref) {
            let {children, container, disablePortal=!1} = props
              , [mountNode,setMountNode] = react.useState(null)
              , handleRef = useForkRef(react.isValidElement(children) ? children.ref : null, ref);
            return (useEnhancedEffect(()=>{
                !disablePortal && setMountNode(("function" == typeof container ? container() : container) || document.body)
            }
            , [container, disablePortal]),
            useEnhancedEffect(()=>{
                if (mountNode && !disablePortal)
                    return setRef(ref, mountNode),
                    ()=>{
                        setRef(ref, null)
                    }
            }
            , [ref, mountNode, disablePortal]),
            disablePortal) ? react.isValidElement(children) ? react.cloneElement(children, {
                ref: handleRef
            }) : (0,
            jsx_runtime.jsx)(react.Fragment, {
                children: children
            }) : (0,
            jsx_runtime.jsx)(react.Fragment, {
                children: mountNode ? react_dom.createPortal(children, mountNode) : mountNode
            })
        })
          , defaultGenerator = componentName=>componentName
          , ClassNameGenerator = (generate = defaultGenerator,
        {
            configure(generator) {
                generate = generator
            },
            generate: componentName=>generate(componentName),
            reset() {
                generate = defaultGenerator
            }
        })
          , globalStateClassesMapping = {
            active: "active",
            checked: "checked",
            completed: "completed",
            disabled: "disabled",
            readOnly: "readOnly",
            error: "error",
            expanded: "expanded",
            focused: "focused",
            focusVisible: "focusVisible",
            required: "required",
            selected: "selected"
        };
        function generateUtilityClass_generateUtilityClass(componentName, slot, globalStatePrefix="Mui") {
            let globalStateClass = globalStateClassesMapping[slot];
            return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator.generate(componentName)}-${slot}`
        }
        function generateUtilityClasses(componentName, slots, globalStatePrefix="Mui") {
            let result = {};
            return slots.forEach(slot=>{
                result[slot] = generateUtilityClass_generateUtilityClass(componentName, slot, globalStatePrefix)
            }
            ),
            result
        }
        function getPopperUnstyledUtilityClass(slot) {
            return generateUtilityClass_generateUtilityClass("MuiPopper", slot)
        }
        function omitEventHandlers(object) {
            if (void 0 === object)
                return {};
            let result = {};
            return Object.keys(object).filter(prop=>!(prop.match(/^on[A-Z]/) && "function" == typeof object[prop])).forEach(prop=>{
                result[prop] = object[prop]
            }
            ),
            result
        }
        generateUtilityClasses("MuiPopper", ["root"]);
        let useSlotProps_excluded = ["elementType", "externalSlotProps", "ownerState"];
        function useSlotProps(parameters) {
            var _parameters$additiona;
            let {elementType, externalSlotProps, ownerState} = parameters
              , rest = (0,
            objectWithoutPropertiesLoose.Z)(parameters, useSlotProps_excluded)
              , resolvedComponentsProps = "function" == typeof externalSlotProps ? externalSlotProps(ownerState) : externalSlotProps
              , {props: mergedProps, internalRef} = function(parameters) {
                let {getSlotProps, additionalProps, externalSlotProps, externalForwardedProps, className} = parameters;
                if (!getSlotProps) {
                    let joinedClasses = clsx_m(null == externalForwardedProps ? void 0 : externalForwardedProps.className, null == externalSlotProps ? void 0 : externalSlotProps.className, className, null == additionalProps ? void 0 : additionalProps.className)
                      , mergedStyle = (0,
                    esm_extends.Z)({}, null == additionalProps ? void 0 : additionalProps.style, null == externalForwardedProps ? void 0 : externalForwardedProps.style, null == externalSlotProps ? void 0 : externalSlotProps.style)
                      , props = (0,
                    esm_extends.Z)({}, additionalProps, externalForwardedProps, externalSlotProps);
                    return joinedClasses.length > 0 && (props.className = joinedClasses),
                    Object.keys(mergedStyle).length > 0 && (props.style = mergedStyle),
                    {
                        props,
                        internalRef: void 0
                    }
                }
                let eventHandlers = function(object, excludeKeys=[]) {
                    if (void 0 === object)
                        return {};
                    let result = {};
                    return Object.keys(object).filter(prop=>prop.match(/^on[A-Z]/) && "function" == typeof object[prop] && !excludeKeys.includes(prop)).forEach(prop=>{
                        result[prop] = object[prop]
                    }
                    ),
                    result
                }((0,
                esm_extends.Z)({}, externalForwardedProps, externalSlotProps))
                  , componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps)
                  , otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps)
                  , internalSlotProps = getSlotProps(eventHandlers)
                  , joinedClasses1 = clsx_m(null == internalSlotProps ? void 0 : internalSlotProps.className, null == additionalProps ? void 0 : additionalProps.className, className, null == externalForwardedProps ? void 0 : externalForwardedProps.className, null == externalSlotProps ? void 0 : externalSlotProps.className)
                  , mergedStyle1 = (0,
                esm_extends.Z)({}, null == internalSlotProps ? void 0 : internalSlotProps.style, null == additionalProps ? void 0 : additionalProps.style, null == externalForwardedProps ? void 0 : externalForwardedProps.style, null == externalSlotProps ? void 0 : externalSlotProps.style)
                  , props1 = (0,
                esm_extends.Z)({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
                return joinedClasses1.length > 0 && (props1.className = joinedClasses1),
                Object.keys(mergedStyle1).length > 0 && (props1.style = mergedStyle1),
                {
                    props: props1,
                    internalRef: internalSlotProps.ref
                }
            }((0,
            esm_extends.Z)({}, rest, {
                externalSlotProps: resolvedComponentsProps
            }))
              , ref = useForkRef(internalRef, null == resolvedComponentsProps ? void 0 : resolvedComponentsProps.ref, null == (_parameters$additiona = parameters.additionalProps) ? void 0 : _parameters$additiona.ref)
              , props = appendOwnerState(elementType, (0,
            esm_extends.Z)({}, mergedProps, {
                ref
            }), ownerState);
            return props
        }
        let PopperUnstyled_excluded = ["anchorEl", "children", "component", "direction", "disablePortal", "modifiers", "open", "ownerState", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps"]
          , PopperUnstyled_excluded2 = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
        function resolveAnchorEl(anchorEl) {
            return "function" == typeof anchorEl ? anchorEl() : anchorEl
        }
        let useUtilityClasses = ()=>composeClasses({
            root: ["root"]
        }, getPopperUnstyledUtilityClass, {})
          , defaultPopperOptions = {}
          , PopperTooltip = react.forwardRef(function(props, ref) {
            var _ref;
            let {anchorEl, children, component, direction, disablePortal, modifiers, open, ownerState, placement: initialPlacement, popperOptions, popperRef: popperRefProp, slotProps={}, slots={}, TransitionProps} = props
              , other = (0,
            objectWithoutPropertiesLoose.Z)(props, PopperUnstyled_excluded)
              , tooltipRef = react.useRef(null)
              , ownRef = useForkRef(tooltipRef, ref)
              , popperRef = react.useRef(null)
              , handlePopperRef = useForkRef(popperRef, popperRefProp)
              , handlePopperRefRef = react.useRef(handlePopperRef);
            useEnhancedEffect(()=>{
                handlePopperRefRef.current = handlePopperRef
            }
            , [handlePopperRef]),
            react.useImperativeHandle(popperRefProp, ()=>popperRef.current, []);
            let rtlPlacement = function(placement, direction) {
                if ("ltr" === direction)
                    return placement;
                switch (placement) {
                case "bottom-end":
                    return "bottom-start";
                case "bottom-start":
                    return "bottom-end";
                case "top-end":
                    return "top-start";
                case "top-start":
                    return "top-end";
                default:
                    return placement
                }
            }(initialPlacement, direction)
              , [placement,setPlacement] = react.useState(rtlPlacement)
              , [resolvedAnchorElement,setResolvedAnchorElement] = react.useState(resolveAnchorEl(anchorEl));
            react.useEffect(()=>{
                popperRef.current && popperRef.current.forceUpdate()
            }
            ),
            react.useEffect(()=>{
                anchorEl && setResolvedAnchorElement(resolveAnchorEl(anchorEl))
            }
            , [anchorEl]),
            useEnhancedEffect(()=>{
                if (!resolvedAnchorElement || !open)
                    return;
                let handlePopperUpdate = data=>{
                    setPlacement(data.placement)
                }
                  , popperModifiers = [{
                    name: "preventOverflow",
                    options: {
                        altBoundary: disablePortal
                    }
                }, {
                    name: "flip",
                    options: {
                        altBoundary: disablePortal
                    }
                }, {
                    name: "onUpdate",
                    enabled: !0,
                    phase: "afterWrite",
                    fn({state}) {
                        handlePopperUpdate(state)
                    }
                }];
                null != modifiers && (popperModifiers = popperModifiers.concat(modifiers)),
                popperOptions && null != popperOptions.modifiers && (popperModifiers = popperModifiers.concat(popperOptions.modifiers));
                let popper = popper_createPopper(resolvedAnchorElement, tooltipRef.current, (0,
                esm_extends.Z)({
                    placement: rtlPlacement
                }, popperOptions, {
                    modifiers: popperModifiers
                }));
                return handlePopperRefRef.current(popper),
                ()=>{
                    popper.destroy(),
                    handlePopperRefRef.current(null)
                }
            }
            , [resolvedAnchorElement, disablePortal, modifiers, open, popperOptions, rtlPlacement]);
            let childProps = {
                placement: placement
            };
            null !== TransitionProps && (childProps.TransitionProps = TransitionProps);
            let classes = useUtilityClasses()
              , Root = null != (_ref = null != component ? component : slots.root) ? _ref : "div"
              , rootProps = useSlotProps({
                elementType: Root,
                externalSlotProps: slotProps.root,
                externalForwardedProps: other,
                additionalProps: {
                    role: "tooltip",
                    ref: ownRef
                },
                ownerState: (0,
                esm_extends.Z)({}, props, ownerState),
                className: classes.root
            });
            return (0,
            jsx_runtime.jsx)(Root, (0,
            esm_extends.Z)({}, rootProps, {
                children: "function" == typeof children ? children(childProps) : children
            }))
        })
          , PopperUnstyled = react.forwardRef(function(props, ref) {
            let container;
            let {anchorEl, children, container: containerProp, direction="ltr", disablePortal=!1, keepMounted=!1, modifiers, open, placement="bottom", popperOptions=defaultPopperOptions, popperRef, style, transition=!1, slotProps={}, slots={}} = props
              , other = (0,
            objectWithoutPropertiesLoose.Z)(props, PopperUnstyled_excluded2)
              , [exited,setExited] = react.useState(!0)
              , handleEnter = ()=>{
                setExited(!1)
            }
              , handleExited = ()=>{
                setExited(!0)
            }
            ;
            if (!keepMounted && !open && (!transition || exited))
                return null;
            if (containerProp)
                container = containerProp;
            else if (anchorEl) {
                let resolvedAnchorEl = resolveAnchorEl(anchorEl);
                container = resolvedAnchorEl && void 0 !== resolvedAnchorEl.nodeType ? ownerDocument(resolvedAnchorEl).body : ownerDocument(null).body
            }
            return (0,
            jsx_runtime.jsx)(Portal, {
                disablePortal: disablePortal,
                container: container,
                children: (0,
                jsx_runtime.jsx)(PopperTooltip, (0,
                esm_extends.Z)({
                    anchorEl: anchorEl,
                    direction: direction,
                    disablePortal: disablePortal,
                    modifiers: modifiers,
                    ref: ref,
                    open: transition ? !exited : open,
                    placement: placement,
                    popperOptions: popperOptions,
                    popperRef: popperRef,
                    slotProps: slotProps,
                    slots: slots
                }, other, {
                    style: (0,
                    esm_extends.Z)({
                        position: "fixed",
                        top: 0,
                        left: 0,
                        display: !open && keepMounted && (!transition || exited) ? "none" : void 0
                    }, style),
                    TransitionProps: transition ? {
                        in: open,
                        onEnter: handleEnter,
                        onExited: handleExited
                    } : void 0,
                    children: children
                }))
            })
        })
          , Popper_excluded = ["components", "componentsProps", "slots", "slotProps"]
          , PopperRoot = styled_styled(PopperUnstyled, {
            name: "MuiPopper",
            slot: "Root",
            overridesResolver: (props,styles)=>styles.root
        })({})
          , Popper = react.forwardRef(function(inProps, ref) {
            var _slots$root;
            let theme = useThemeWithoutDefault()
              , props = useThemeProps_useThemeProps({
                props: inProps,
                name: "MuiPopper"
            })
              , {components, componentsProps, slots, slotProps} = props
              , other = (0,
            objectWithoutPropertiesLoose.Z)(props, Popper_excluded)
              , RootComponent = null != (_slots$root = null == slots ? void 0 : slots.root) ? _slots$root : null == components ? void 0 : components.Root;
            return (0,
            jsx_runtime.jsx)(PopperRoot, (0,
            esm_extends.Z)({
                direction: null == theme ? void 0 : theme.direction,
                slots: {
                    root: RootComponent
                },
                slotProps: null != slotProps ? slotProps : componentsProps
            }, other, {
                ref: ref
            }))
        });
        var utils_useEventCallback = function(fn) {
            let ref = react.useRef(fn);
            return useEnhancedEffect(()=>{
                ref.current = fn
            }
            ),
            react.useCallback((...args)=>(0,
            ref.current)(...args), [])
        };
        let globalId = 0
          , maybeReactUseId = react_namespaceObject.useId;
        var utils_useId = function(idOverride) {
            if (void 0 !== maybeReactUseId) {
                let reactId = maybeReactUseId();
                return null != idOverride ? idOverride : reactId
            }
            return function(idOverride) {
                let[defaultId,setDefaultId] = react.useState(idOverride);
                return react.useEffect(()=>{
                    null == defaultId && setDefaultId(`mui-${globalId += 1}`)
                }
                , [defaultId]),
                idOverride || defaultId
            }(idOverride)
        };
        let hadKeyboardEvent = !0
          , hadFocusVisibleRecently = !1
          , inputTypesWhitelist = {
            text: !0,
            search: !0,
            url: !0,
            tel: !0,
            email: !0,
            password: !0,
            number: !0,
            date: !0,
            month: !0,
            week: !0,
            time: !0,
            datetime: !0,
            "datetime-local": !0
        };
        function handleKeyDown(event) {
            event.metaKey || event.altKey || event.ctrlKey || (hadKeyboardEvent = !0)
        }
        function handlePointerDown() {
            hadKeyboardEvent = !1
        }
        function handleVisibilityChange() {
            "hidden" === this.visibilityState && hadFocusVisibleRecently && (hadKeyboardEvent = !0)
        }
        var utils_useIsFocusVisible = function() {
            let ref = react.useCallback(node=>{
                if (null != node) {
                    var doc;
                    (doc = node.ownerDocument).addEventListener("keydown", handleKeyDown, !0),
                    doc.addEventListener("mousedown", handlePointerDown, !0),
                    doc.addEventListener("pointerdown", handlePointerDown, !0),
                    doc.addEventListener("touchstart", handlePointerDown, !0),
                    doc.addEventListener("visibilitychange", handleVisibilityChange, !0)
                }
            }
            , [])
              , isFocusVisibleRef = react.useRef(!1);
            return {
                isFocusVisibleRef,
                onFocus: function(event) {
                    return !!function(event) {
                        let {target} = event;
                        try {
                            return target.matches(":focus-visible")
                        } catch (error) {}
                        return hadKeyboardEvent || function(node) {
                            let {type, tagName} = node;
                            return "INPUT" === tagName && !!inputTypesWhitelist[type] && !node.readOnly || "TEXTAREA" === tagName && !node.readOnly || !!node.isContentEditable
                        }(target)
                    }(event) && (isFocusVisibleRef.current = !0,
                    !0)
                },
                onBlur: function() {
                    return !!isFocusVisibleRef.current && (hadFocusVisibleRecently = !0,
                    window.clearTimeout(hadFocusVisibleRecentlyTimeout),
                    hadFocusVisibleRecentlyTimeout = window.setTimeout(()=>{
                        hadFocusVisibleRecently = !1
                    }
                    , 100),
                    isFocusVisibleRef.current = !1,
                    !0)
                },
                ref
            }
        }
          , utils_useControlled = function({controlled, default: defaultProp, name, state="value"}) {
            let {current: isControlled} = react.useRef(void 0 !== controlled)
              , [valueState,setValue] = react.useState(defaultProp)
              , setValueIfUncontrolled = react.useCallback(newValue=>{
                isControlled || setValue(newValue)
            }
            , []);
            return [isControlled ? controlled : valueState, setValueIfUncontrolled]
        };
        function getTooltipUtilityClass(slot) {
            return generateUtilityClass_generateUtilityClass("MuiTooltip", slot)
        }
        let tooltipClasses = generateUtilityClasses("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"])
          , Tooltip_excluded = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"]
          , Tooltip_useUtilityClasses = ownerState=>{
            let {classes, disableInteractive, arrow, touch, placement} = ownerState
              , slots = {
                popper: ["popper", !disableInteractive && "popperInteractive", arrow && "popperArrow"],
                tooltip: ["tooltip", arrow && "tooltipArrow", touch && "touch", `tooltipPlacement${capitalize(placement.split("-")[0])}`],
                arrow: ["arrow"]
            };
            return composeClasses(slots, getTooltipUtilityClass, classes)
        }
          , TooltipPopper = styled_styled(Popper, {
            name: "MuiTooltip",
            slot: "Popper",
            overridesResolver(props, styles) {
                let {ownerState} = props;
                return [styles.popper, !ownerState.disableInteractive && styles.popperInteractive, ownerState.arrow && styles.popperArrow, !ownerState.open && styles.popperClose]
            }
        })(({theme, ownerState, open})=>(0,
        esm_extends.Z)({
            zIndex: (theme.vars || theme).zIndex.tooltip,
            pointerEvents: "none"
        }, !ownerState.disableInteractive && {
            pointerEvents: "auto"
        }, !open && {
            pointerEvents: "none"
        }, ownerState.arrow && {
            [`&[data-popper-placement*="bottom"] .${tooltipClasses.arrow}`]: {
                top: 0,
                marginTop: "-0.71em",
                "&::before": {
                    transformOrigin: "0 100%"
                }
            },
            [`&[data-popper-placement*="top"] .${tooltipClasses.arrow}`]: {
                bottom: 0,
                marginBottom: "-0.71em",
                "&::before": {
                    transformOrigin: "100% 0"
                }
            },
            [`&[data-popper-placement*="right"] .${tooltipClasses.arrow}`]: (0,
            esm_extends.Z)({}, ownerState.isRtl ? {
                right: 0,
                marginRight: "-0.71em"
            } : {
                left: 0,
                marginLeft: "-0.71em"
            }, {
                height: "1em",
                width: "0.71em",
                "&::before": {
                    transformOrigin: "100% 100%"
                }
            }),
            [`&[data-popper-placement*="left"] .${tooltipClasses.arrow}`]: (0,
            esm_extends.Z)({}, ownerState.isRtl ? {
                left: 0,
                marginLeft: "-0.71em"
            } : {
                right: 0,
                marginRight: "-0.71em"
            }, {
                height: "1em",
                width: "0.71em",
                "&::before": {
                    transformOrigin: "0 0"
                }
            })
        }))
          , TooltipTooltip = styled_styled("div", {
            name: "MuiTooltip",
            slot: "Tooltip",
            overridesResolver(props, styles) {
                let {ownerState} = props;
                return [styles.tooltip, ownerState.touch && styles.touch, ownerState.arrow && styles.tooltipArrow, styles[`tooltipPlacement${capitalize(ownerState.placement.split("-")[0])}`]]
            }
        })(({theme, ownerState})=>(0,
        esm_extends.Z)({
            backgroundColor: theme.vars ? theme.vars.palette.Tooltip.bg : alpha(theme.palette.grey[700], .92),
            borderRadius: (theme.vars || theme).shape.borderRadius,
            color: (theme.vars || theme).palette.common.white,
            fontFamily: theme.typography.fontFamily,
            padding: "4px 8px",
            fontSize: theme.typography.pxToRem(11),
            maxWidth: 300,
            margin: 2,
            wordWrap: "break-word",
            fontWeight: theme.typography.fontWeightMedium
        }, ownerState.arrow && {
            position: "relative",
            margin: 0
        }, ownerState.touch && {
            padding: "8px 16px",
            fontSize: theme.typography.pxToRem(14),
            lineHeight: `${Math.round(1e5 * (16 / 14)) / 1e5}em`,
            fontWeight: theme.typography.fontWeightRegular
        }, {
            [`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]: (0,
            esm_extends.Z)({
                transformOrigin: "right center"
            }, ownerState.isRtl ? (0,
            esm_extends.Z)({
                marginLeft: "14px"
            }, ownerState.touch && {
                marginLeft: "24px"
            }) : (0,
            esm_extends.Z)({
                marginRight: "14px"
            }, ownerState.touch && {
                marginRight: "24px"
            })),
            [`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]: (0,
            esm_extends.Z)({
                transformOrigin: "left center"
            }, ownerState.isRtl ? (0,
            esm_extends.Z)({
                marginRight: "14px"
            }, ownerState.touch && {
                marginRight: "24px"
            }) : (0,
            esm_extends.Z)({
                marginLeft: "14px"
            }, ownerState.touch && {
                marginLeft: "24px"
            })),
            [`.${tooltipClasses.popper}[data-popper-placement*="top"] &`]: (0,
            esm_extends.Z)({
                transformOrigin: "center bottom",
                marginBottom: "14px"
            }, ownerState.touch && {
                marginBottom: "24px"
            }),
            [`.${tooltipClasses.popper}[data-popper-placement*="bottom"] &`]: (0,
            esm_extends.Z)({
                transformOrigin: "center top",
                marginTop: "14px"
            }, ownerState.touch && {
                marginTop: "24px"
            })
        }))
          , TooltipArrow = styled_styled("span", {
            name: "MuiTooltip",
            slot: "Arrow",
            overridesResolver: (props,styles)=>styles.arrow
        })(({theme})=>({
            overflow: "hidden",
            position: "absolute",
            width: "1em",
            height: "0.71em",
            boxSizing: "border-box",
            color: theme.vars ? theme.vars.palette.Tooltip.bg : alpha(theme.palette.grey[700], .9),
            "&::before": {
                content: '""',
                margin: "auto",
                display: "block",
                width: "100%",
                height: "100%",
                backgroundColor: "currentColor",
                transform: "rotate(45deg)"
            }
        }))
          , hystersisOpen = !1
          , hystersisTimer = null
          , cursorPosition = {
            x: 0,
            y: 0
        };
        function composeEventHandler(handler, eventHandler) {
            return event=>{
                eventHandler && eventHandler(event),
                handler(event)
            }
        }
        let Tooltip = react.forwardRef(function(inProps, ref) {
            var _ref, _slots$popper, _ref2, _ref3, _slots$transition, _ref4, _slots$tooltip, _ref5, _slots$arrow, _slotProps$popper, _ref6, _slotProps$popper2, _slotProps$transition, _slotProps$tooltip, _ref7, _slotProps$tooltip2, _slotProps$arrow, _ref8, _slotProps$arrow2;
            let props = useThemeProps_useThemeProps({
                props: inProps,
                name: "MuiTooltip"
            })
              , {arrow=!1, children, components={}, componentsProps={}, describeChild=!1, disableFocusListener=!1, disableHoverListener=!1, disableInteractive: disableInteractiveProp=!1, disableTouchListener=!1, enterDelay=100, enterNextDelay=0, enterTouchDelay=700, followCursor=!1, id: idProp, leaveDelay=0, leaveTouchDelay=1500, onClose, onOpen, open: openProp, placement="bottom", PopperComponent: PopperComponentProp, PopperProps={}, slotProps={}, slots={}, title, TransitionComponent: TransitionComponentProp=Grow, TransitionProps} = props
              , other = (0,
            objectWithoutPropertiesLoose.Z)(props, Tooltip_excluded)
              , theme = styles_useTheme_useTheme()
              , isRtl = "rtl" === theme.direction
              , [childNode,setChildNode] = react.useState()
              , [arrowRef,setArrowRef] = react.useState(null)
              , ignoreNonTouchEvents = react.useRef(!1)
              , disableInteractive = disableInteractiveProp || followCursor
              , closeTimer = react.useRef()
              , enterTimer = react.useRef()
              , leaveTimer = react.useRef()
              , touchTimer = react.useRef()
              , [openState,setOpenState] = utils_useControlled({
                controlled: openProp,
                default: !1,
                name: "Tooltip",
                state: "open"
            })
              , open = openState
              , id = utils_useId(idProp)
              , prevUserSelect = react.useRef()
              , stopTouchInteraction = react.useCallback(()=>{
                void 0 !== prevUserSelect.current && (document.body.style.WebkitUserSelect = prevUserSelect.current,
                prevUserSelect.current = void 0),
                clearTimeout(touchTimer.current)
            }
            , []);
            react.useEffect(()=>()=>{
                clearTimeout(closeTimer.current),
                clearTimeout(enterTimer.current),
                clearTimeout(leaveTimer.current),
                stopTouchInteraction()
            }
            , [stopTouchInteraction]);
            let handleOpen = event=>{
                clearTimeout(hystersisTimer),
                hystersisOpen = !0,
                setOpenState(!0),
                onOpen && !open && onOpen(event)
            }
              , handleClose = utils_useEventCallback(event=>{
                clearTimeout(hystersisTimer),
                hystersisTimer = setTimeout(()=>{
                    hystersisOpen = !1
                }
                , 800 + leaveDelay),
                setOpenState(!1),
                onClose && open && onClose(event),
                clearTimeout(closeTimer.current),
                closeTimer.current = setTimeout(()=>{
                    ignoreNonTouchEvents.current = !1
                }
                , theme.transitions.duration.shortest)
            }
            )
              , handleEnter = event=>{
                ignoreNonTouchEvents.current && "touchstart" !== event.type || (childNode && childNode.removeAttribute("title"),
                clearTimeout(enterTimer.current),
                clearTimeout(leaveTimer.current),
                enterDelay || hystersisOpen && enterNextDelay ? enterTimer.current = setTimeout(()=>{
                    handleOpen(event)
                }
                , hystersisOpen ? enterNextDelay : enterDelay) : handleOpen(event))
            }
              , handleLeave = event=>{
                clearTimeout(enterTimer.current),
                clearTimeout(leaveTimer.current),
                leaveTimer.current = setTimeout(()=>{
                    handleClose(event)
                }
                , leaveDelay)
            }
              , {isFocusVisibleRef, onBlur: handleBlurVisible, onFocus: handleFocusVisible, ref: focusVisibleRef} = utils_useIsFocusVisible()
              , [,setChildIsFocusVisible] = react.useState(!1)
              , handleBlur = event=>{
                handleBlurVisible(event),
                !1 === isFocusVisibleRef.current && (setChildIsFocusVisible(!1),
                handleLeave(event))
            }
              , handleFocus = event=>{
                childNode || setChildNode(event.currentTarget),
                handleFocusVisible(event),
                !0 === isFocusVisibleRef.current && (setChildIsFocusVisible(!0),
                handleEnter(event))
            }
              , detectTouchStart = event=>{
                ignoreNonTouchEvents.current = !0;
                let childrenProps = children.props;
                childrenProps.onTouchStart && childrenProps.onTouchStart(event)
            }
              , handleTouchStart = event=>{
                detectTouchStart(event),
                clearTimeout(leaveTimer.current),
                clearTimeout(closeTimer.current),
                stopTouchInteraction(),
                prevUserSelect.current = document.body.style.WebkitUserSelect,
                document.body.style.WebkitUserSelect = "none",
                touchTimer.current = setTimeout(()=>{
                    document.body.style.WebkitUserSelect = prevUserSelect.current,
                    handleEnter(event)
                }
                , enterTouchDelay)
            }
              , handleTouchEnd = event=>{
                children.props.onTouchEnd && children.props.onTouchEnd(event),
                stopTouchInteraction(),
                clearTimeout(leaveTimer.current),
                leaveTimer.current = setTimeout(()=>{
                    handleClose(event)
                }
                , leaveTouchDelay)
            }
            ;
            react.useEffect(()=>{
                if (open)
                    return document.addEventListener("keydown", handleKeyDown),
                    ()=>{
                        document.removeEventListener("keydown", handleKeyDown)
                    }
                    ;
                function handleKeyDown(nativeEvent) {
                    ("Escape" === nativeEvent.key || "Esc" === nativeEvent.key) && handleClose(nativeEvent)
                }
            }
            , [handleClose, open]);
            let handleRef = useForkRef(children.ref, focusVisibleRef, setChildNode, ref);
            title || 0 === title || (open = !1);
            let popperRef = react.useRef()
              , handleMouseMove = event=>{
                let childrenProps = children.props;
                childrenProps.onMouseMove && childrenProps.onMouseMove(event),
                cursorPosition = {
                    x: event.clientX,
                    y: event.clientY
                },
                popperRef.current && popperRef.current.update()
            }
              , nameOrDescProps = {}
              , titleIsString = "string" == typeof title;
            describeChild ? (nameOrDescProps.title = open || !titleIsString || disableHoverListener ? null : title,
            nameOrDescProps["aria-describedby"] = open ? id : null) : (nameOrDescProps["aria-label"] = titleIsString ? title : null,
            nameOrDescProps["aria-labelledby"] = open && !titleIsString ? id : null);
            let childrenProps = (0,
            esm_extends.Z)({}, nameOrDescProps, other, children.props, {
                className: clsx_m(other.className, children.props.className),
                onTouchStart: detectTouchStart,
                ref: handleRef
            }, followCursor ? {
                onMouseMove: handleMouseMove
            } : {})
              , interactiveWrapperListeners = {};
            disableTouchListener || (childrenProps.onTouchStart = handleTouchStart,
            childrenProps.onTouchEnd = handleTouchEnd),
            disableHoverListener || (childrenProps.onMouseOver = composeEventHandler(handleEnter, childrenProps.onMouseOver),
            childrenProps.onMouseLeave = composeEventHandler(handleLeave, childrenProps.onMouseLeave),
            disableInteractive || (interactiveWrapperListeners.onMouseOver = handleEnter,
            interactiveWrapperListeners.onMouseLeave = handleLeave)),
            disableFocusListener || (childrenProps.onFocus = composeEventHandler(handleFocus, childrenProps.onFocus),
            childrenProps.onBlur = composeEventHandler(handleBlur, childrenProps.onBlur),
            disableInteractive || (interactiveWrapperListeners.onFocus = handleFocus,
            interactiveWrapperListeners.onBlur = handleBlur));
            let popperOptions = react.useMemo(()=>{
                var _PopperProps$popperOp;
                let tooltipModifiers = [{
                    name: "arrow",
                    enabled: Boolean(arrowRef),
                    options: {
                        element: arrowRef,
                        padding: 4
                    }
                }];
                return null != (_PopperProps$popperOp = PopperProps.popperOptions) && _PopperProps$popperOp.modifiers && (tooltipModifiers = tooltipModifiers.concat(PopperProps.popperOptions.modifiers)),
                (0,
                esm_extends.Z)({}, PopperProps.popperOptions, {
                    modifiers: tooltipModifiers
                })
            }
            , [arrowRef, PopperProps])
              , ownerState = (0,
            esm_extends.Z)({}, props, {
                isRtl,
                arrow,
                disableInteractive,
                placement,
                PopperComponentProp,
                touch: ignoreNonTouchEvents.current
            })
              , classes = Tooltip_useUtilityClasses(ownerState)
              , PopperComponent = null != (_ref = null != (_slots$popper = slots.popper) ? _slots$popper : components.Popper) ? _ref : TooltipPopper
              , TransitionComponent = null != (_ref2 = null != (_ref3 = null != (_slots$transition = slots.transition) ? _slots$transition : components.Transition) ? _ref3 : TransitionComponentProp) ? _ref2 : Grow
              , TooltipComponent = null != (_ref4 = null != (_slots$tooltip = slots.tooltip) ? _slots$tooltip : components.Tooltip) ? _ref4 : TooltipTooltip
              , ArrowComponent = null != (_ref5 = null != (_slots$arrow = slots.arrow) ? _slots$arrow : components.Arrow) ? _ref5 : TooltipArrow
              , popperProps = appendOwnerState(PopperComponent, (0,
            esm_extends.Z)({}, PopperProps, null != (_slotProps$popper = slotProps.popper) ? _slotProps$popper : componentsProps.popper, {
                className: clsx_m(classes.popper, null == PopperProps ? void 0 : PopperProps.className, null == (_ref6 = null != (_slotProps$popper2 = slotProps.popper) ? _slotProps$popper2 : componentsProps.popper) ? void 0 : _ref6.className)
            }), ownerState)
              , transitionProps = appendOwnerState(TransitionComponent, (0,
            esm_extends.Z)({}, TransitionProps, null != (_slotProps$transition = slotProps.transition) ? _slotProps$transition : componentsProps.transition), ownerState)
              , tooltipProps = appendOwnerState(TooltipComponent, (0,
            esm_extends.Z)({}, null != (_slotProps$tooltip = slotProps.tooltip) ? _slotProps$tooltip : componentsProps.tooltip, {
                className: clsx_m(classes.tooltip, null == (_ref7 = null != (_slotProps$tooltip2 = slotProps.tooltip) ? _slotProps$tooltip2 : componentsProps.tooltip) ? void 0 : _ref7.className)
            }), ownerState)
              , tooltipArrowProps = appendOwnerState(ArrowComponent, (0,
            esm_extends.Z)({}, null != (_slotProps$arrow = slotProps.arrow) ? _slotProps$arrow : componentsProps.arrow, {
                className: clsx_m(classes.arrow, null == (_ref8 = null != (_slotProps$arrow2 = slotProps.arrow) ? _slotProps$arrow2 : componentsProps.arrow) ? void 0 : _ref8.className)
            }), ownerState);
            return (0,
            jsx_runtime.jsxs)(react.Fragment, {
                children: [react.cloneElement(children, childrenProps), (0,
                jsx_runtime.jsx)(PopperComponent, (0,
                esm_extends.Z)({
                    as: null != PopperComponentProp ? PopperComponentProp : Popper,
                    placement: placement,
                    anchorEl: followCursor ? {
                        getBoundingClientRect: ()=>({
                            top: cursorPosition.y,
                            left: cursorPosition.x,
                            right: cursorPosition.x,
                            bottom: cursorPosition.y,
                            width: 0,
                            height: 0
                        })
                    } : childNode,
                    popperRef: popperRef,
                    open: !!childNode && open,
                    id: id,
                    transition: !0
                }, interactiveWrapperListeners, popperProps, {
                    popperOptions: popperOptions,
                    children: ({TransitionProps: TransitionPropsInner})=>(0,
                    jsx_runtime.jsx)(TransitionComponent, (0,
                    esm_extends.Z)({
                        timeout: theme.transitions.duration.shorter
                    }, TransitionPropsInner, transitionProps, {
                        children: (0,
                        jsx_runtime.jsxs)(TooltipComponent, (0,
                        esm_extends.Z)({}, tooltipProps, {
                            children: [title, arrow ? (0,
                            jsx_runtime.jsx)(ArrowComponent, (0,
                            esm_extends.Z)({}, tooltipArrowProps, {
                                ref: setArrowRef
                            })) : null]
                        }))
                    }))
                }))]
            })
        });
        var assertThisInitialized = __webpack_require__(73989);
        function getChildMapping(children, mapFn) {
            var result = Object.create(null);
            return children && react.Children.map(children, function(c) {
                return c
            }).forEach(function(child) {
                result[child.key] = mapFn && (0,
                react.isValidElement)(child) ? mapFn(child) : child
            }),
            result
        }
        function getProp(child, prop, props) {
            return null != props[prop] ? props[prop] : child.props[prop]
        }
        var TransitionGroup_values = Object.values || function(obj) {
            return Object.keys(obj).map(function(k) {
                return obj[k]
            })
        }
          , TransitionGroup = function(_React$Component) {
            function TransitionGroup(props, context) {
                var _this, handleExited = (_this = _React$Component.call(this, props, context) || this).handleExited.bind((0,
                assertThisInitialized.Z)(_this));
                return _this.state = {
                    contextValue: {
                        isMounting: !0
                    },
                    handleExited: handleExited,
                    firstRender: !0
                },
                _this
            }
            _inheritsLoose(TransitionGroup, _React$Component);
            var _proto = TransitionGroup.prototype;
            return _proto.componentDidMount = function() {
                this.mounted = !0,
                this.setState({
                    contextValue: {
                        isMounting: !1
                    }
                })
            }
            ,
            _proto.componentWillUnmount = function() {
                this.mounted = !1
            }
            ,
            TransitionGroup.getDerivedStateFromProps = function(nextProps, _ref) {
                var nextChildMapping, children, prevChildMapping = _ref.children, handleExited = _ref.handleExited;
                return {
                    children: _ref.firstRender ? getChildMapping(nextProps.children, function(child) {
                        return (0,
                        react.cloneElement)(child, {
                            onExited: handleExited.bind(null, child),
                            in: !0,
                            appear: getProp(child, "appear", nextProps),
                            enter: getProp(child, "enter", nextProps),
                            exit: getProp(child, "exit", nextProps)
                        })
                    }) : (Object.keys(children = function(prev, next) {
                        function getValueForKey(key) {
                            return key in next ? next[key] : prev[key]
                        }
                        prev = prev || {},
                        next = next || {};
                        var i, nextKeysPending = Object.create(null), pendingKeys = [];
                        for (var prevKey in prev)
                            prevKey in next ? pendingKeys.length && (nextKeysPending[prevKey] = pendingKeys,
                            pendingKeys = []) : pendingKeys.push(prevKey);
                        var childMapping = {};
                        for (var nextKey in next) {
                            if (nextKeysPending[nextKey])
                                for (i = 0; i < nextKeysPending[nextKey].length; i++) {
                                    var pendingNextKey = nextKeysPending[nextKey][i];
                                    childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey)
                                }
                            childMapping[nextKey] = getValueForKey(nextKey)
                        }
                        for (i = 0; i < pendingKeys.length; i++)
                            childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
                        return childMapping
                    }(prevChildMapping, nextChildMapping = getChildMapping(nextProps.children))).forEach(function(key) {
                        var child = children[key];
                        if ((0,
                        react.isValidElement)(child)) {
                            var hasPrev = key in prevChildMapping
                              , hasNext = key in nextChildMapping
                              , prevChild = prevChildMapping[key]
                              , isLeaving = (0,
                            react.isValidElement)(prevChild) && !prevChild.props.in;
                            hasNext && (!hasPrev || isLeaving) ? children[key] = (0,
                            react.cloneElement)(child, {
                                onExited: handleExited.bind(null, child),
                                in: !0,
                                exit: getProp(child, "exit", nextProps),
                                enter: getProp(child, "enter", nextProps)
                            }) : hasNext || !hasPrev || isLeaving ? hasNext && hasPrev && (0,
                            react.isValidElement)(prevChild) && (children[key] = (0,
                            react.cloneElement)(child, {
                                onExited: handleExited.bind(null, child),
                                in: prevChild.props.in,
                                exit: getProp(child, "exit", nextProps),
                                enter: getProp(child, "enter", nextProps)
                            })) : children[key] = (0,
                            react.cloneElement)(child, {
                                in: !1
                            })
                        }
                    }),
                    children),
                    firstRender: !1
                }
            }
            ,
            _proto.handleExited = function(child, node) {
                var currentChildMapping = getChildMapping(this.props.children);
                child.key in currentChildMapping || (child.props.onExited && child.props.onExited(node),
                this.mounted && this.setState(function(state) {
                    var children = (0,
                    esm_extends.Z)({}, state.children);
                    return delete children[child.key],
                    {
                        children: children
                    }
                }))
            }
            ,
            _proto.render = function() {
                var _this$props = this.props
                  , Component = _this$props.component
                  , childFactory = _this$props.childFactory
                  , props = (0,
                objectWithoutPropertiesLoose.Z)(_this$props, ["component", "childFactory"])
                  , contextValue = this.state.contextValue
                  , children = TransitionGroup_values(this.state.children).map(childFactory);
                return (delete props.appear,
                delete props.enter,
                delete props.exit,
                null === Component) ? react.createElement(TransitionGroupContext.Provider, {
                    value: contextValue
                }, children) : react.createElement(TransitionGroupContext.Provider, {
                    value: contextValue
                }, react.createElement(Component, props, children))
            }
            ,
            TransitionGroup
        }(react.Component);
        TransitionGroup.propTypes = {},
        TransitionGroup.defaultProps = {
            component: "div",
            childFactory: function(child) {
                return child
            }
        };
        var emotion_react_browser_esm = __webpack_require__(28165);
        let touchRippleClasses = generateUtilityClasses("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"])
          , TouchRipple_excluded = ["center", "classes", "className"]
          , enterKeyframe = (0,
        emotion_react_browser_esm.F4)(_t || (_t = (t=>t)`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`))
          , exitKeyframe = (0,
        emotion_react_browser_esm.F4)(_t2 || (_t2 = (t=>t)`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`))
          , pulsateKeyframe = (0,
        emotion_react_browser_esm.F4)(_t3 || (_t3 = (t=>t)`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`))
          , TouchRippleRoot = styled_styled("span", {
            name: "MuiTouchRipple",
            slot: "Root"
        })({
            overflow: "hidden",
            pointerEvents: "none",
            position: "absolute",
            zIndex: 0,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            borderRadius: "inherit"
        })
          , TouchRippleRipple = styled_styled(function(props) {
            let {className, classes, pulsate=!1, rippleX, rippleY, rippleSize, in: inProp, onExited, timeout} = props
              , [leaving,setLeaving] = react.useState(!1)
              , rippleClassName = clsx_m(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate)
              , childClassName = clsx_m(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
            return inProp || leaving || setLeaving(!0),
            react.useEffect(()=>{
                if (!inProp && null != onExited) {
                    let timeoutId = setTimeout(onExited, timeout);
                    return ()=>{
                        clearTimeout(timeoutId)
                    }
                }
            }
            , [onExited, inProp, timeout]),
            (0,
            jsx_runtime.jsx)("span", {
                className: rippleClassName,
                style: {
                    width: rippleSize,
                    height: rippleSize,
                    top: -(rippleSize / 2) + rippleY,
                    left: -(rippleSize / 2) + rippleX
                },
                children: (0,
                jsx_runtime.jsx)("span", {
                    className: childClassName
                })
            })
        }, {
            name: "MuiTouchRipple",
            slot: "Ripple"
        })(_t4 || (_t4 = (t=>t)`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), touchRippleClasses.rippleVisible, enterKeyframe, 550, ({theme})=>theme.transitions.easing.easeInOut, touchRippleClasses.ripplePulsate, ({theme})=>theme.transitions.duration.shorter, touchRippleClasses.child, touchRippleClasses.childLeaving, exitKeyframe, 550, ({theme})=>theme.transitions.easing.easeInOut, touchRippleClasses.childPulsate, pulsateKeyframe, ({theme})=>theme.transitions.easing.easeInOut)
          , TouchRipple = react.forwardRef(function(inProps, ref) {
            let props = useThemeProps_useThemeProps({
                props: inProps,
                name: "MuiTouchRipple"
            })
              , {center: centerProp=!1, classes={}, className} = props
              , other = (0,
            objectWithoutPropertiesLoose.Z)(props, TouchRipple_excluded)
              , [ripples,setRipples] = react.useState([])
              , nextKey = react.useRef(0)
              , rippleCallback = react.useRef(null);
            react.useEffect(()=>{
                rippleCallback.current && (rippleCallback.current(),
                rippleCallback.current = null)
            }
            , [ripples]);
            let ignoringMouseDown = react.useRef(!1)
              , startTimer = react.useRef(null)
              , startTimerCommit = react.useRef(null)
              , container = react.useRef(null);
            react.useEffect(()=>()=>{
                clearTimeout(startTimer.current)
            }
            , []);
            let startCommit = react.useCallback(params=>{
                let {pulsate, rippleX, rippleY, rippleSize, cb} = params;
                setRipples(oldRipples=>[...oldRipples, (0,
                jsx_runtime.jsx)(TouchRippleRipple, {
                    classes: {
                        ripple: clsx_m(classes.ripple, touchRippleClasses.ripple),
                        rippleVisible: clsx_m(classes.rippleVisible, touchRippleClasses.rippleVisible),
                        ripplePulsate: clsx_m(classes.ripplePulsate, touchRippleClasses.ripplePulsate),
                        child: clsx_m(classes.child, touchRippleClasses.child),
                        childLeaving: clsx_m(classes.childLeaving, touchRippleClasses.childLeaving),
                        childPulsate: clsx_m(classes.childPulsate, touchRippleClasses.childPulsate)
                    },
                    timeout: 550,
                    pulsate: pulsate,
                    rippleX: rippleX,
                    rippleY: rippleY,
                    rippleSize: rippleSize
                }, nextKey.current)]),
                nextKey.current += 1,
                rippleCallback.current = cb
            }
            , [classes])
              , start = react.useCallback((event={},options={},cb=()=>{}
            )=>{
                let rippleX, rippleY, rippleSize;
                let {pulsate=!1, center=centerProp || options.pulsate, fakeElement=!1} = options;
                if ((null == event ? void 0 : event.type) === "mousedown" && ignoringMouseDown.current) {
                    ignoringMouseDown.current = !1;
                    return
                }
                (null == event ? void 0 : event.type) === "touchstart" && (ignoringMouseDown.current = !0);
                let element = fakeElement ? null : container.current
                  , rect = element ? element.getBoundingClientRect() : {
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                };
                if (!center && void 0 !== event && (0 !== event.clientX || 0 !== event.clientY) && (event.clientX || event.touches)) {
                    let {clientX, clientY} = event.touches && event.touches.length > 0 ? event.touches[0] : event;
                    rippleX = Math.round(clientX - rect.left),
                    rippleY = Math.round(clientY - rect.top)
                } else
                    rippleX = Math.round(rect.width / 2),
                    rippleY = Math.round(rect.height / 2);
                if (center)
                    (rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3)) % 2 == 0 && (rippleSize += 1);
                else {
                    let sizeX = 2 * Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) + 2
                      , sizeY = 2 * Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) + 2;
                    rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2)
                }
                null != event && event.touches ? null === startTimerCommit.current && (startTimerCommit.current = ()=>{
                    startCommit({
                        pulsate,
                        rippleX,
                        rippleY,
                        rippleSize,
                        cb
                    })
                }
                ,
                startTimer.current = setTimeout(()=>{
                    startTimerCommit.current && (startTimerCommit.current(),
                    startTimerCommit.current = null)
                }
                , 80)) : startCommit({
                    pulsate,
                    rippleX,
                    rippleY,
                    rippleSize,
                    cb
                })
            }
            , [centerProp, startCommit])
              , pulsate = react.useCallback(()=>{
                start({}, {
                    pulsate: !0
                })
            }
            , [start])
              , stop = react.useCallback((event,cb)=>{
                if (clearTimeout(startTimer.current),
                (null == event ? void 0 : event.type) === "touchend" && startTimerCommit.current) {
                    startTimerCommit.current(),
                    startTimerCommit.current = null,
                    startTimer.current = setTimeout(()=>{
                        stop(event, cb)
                    }
                    );
                    return
                }
                startTimerCommit.current = null,
                setRipples(oldRipples=>oldRipples.length > 0 ? oldRipples.slice(1) : oldRipples),
                rippleCallback.current = cb
            }
            , []);
            return react.useImperativeHandle(ref, ()=>({
                pulsate,
                start,
                stop
            }), [pulsate, start, stop]),
            (0,
            jsx_runtime.jsx)(TouchRippleRoot, (0,
            esm_extends.Z)({
                className: clsx_m(touchRippleClasses.root, classes.root, className),
                ref: container
            }, other, {
                children: (0,
                jsx_runtime.jsx)(TransitionGroup, {
                    component: null,
                    exit: !0,
                    children: ripples
                })
            }))
        });
        function getButtonBaseUtilityClass(slot) {
            return generateUtilityClass_generateUtilityClass("MuiButtonBase", slot)
        }
        let buttonBaseClasses = generateUtilityClasses("MuiButtonBase", ["root", "disabled", "focusVisible"])
          , ButtonBase_excluded = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"]
          , ButtonBase_useUtilityClasses = ownerState=>{
            let {disabled, focusVisible, focusVisibleClassName, classes} = ownerState
              , composedClasses = composeClasses({
                root: ["root", disabled && "disabled", focusVisible && "focusVisible"]
            }, getButtonBaseUtilityClass, classes);
            return focusVisible && focusVisibleClassName && (composedClasses.root += ` ${focusVisibleClassName}`),
            composedClasses
        }
          , ButtonBaseRoot = styled_styled("button", {
            name: "MuiButtonBase",
            slot: "Root",
            overridesResolver: (props,styles)=>styles.root
        })({
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            boxSizing: "border-box",
            WebkitTapHighlightColor: "transparent",
            backgroundColor: "transparent",
            outline: 0,
            border: 0,
            margin: 0,
            borderRadius: 0,
            padding: 0,
            cursor: "pointer",
            userSelect: "none",
            verticalAlign: "middle",
            MozAppearance: "none",
            WebkitAppearance: "none",
            textDecoration: "none",
            color: "inherit",
            "&::-moz-focus-inner": {
                borderStyle: "none"
            },
            [`&.${buttonBaseClasses.disabled}`]: {
                pointerEvents: "none",
                cursor: "default"
            },
            "@media print": {
                colorAdjust: "exact"
            }
        })
          , ButtonBase = react.forwardRef(function(inProps, ref) {
            let props = useThemeProps_useThemeProps({
                props: inProps,
                name: "MuiButtonBase"
            })
              , {action, centerRipple=!1, children, className, component="button", disabled=!1, disableRipple=!1, disableTouchRipple=!1, focusRipple=!1, LinkComponent="a", onBlur, onClick, onContextMenu, onDragLeave, onFocus, onFocusVisible, onKeyDown, onKeyUp, onMouseDown, onMouseLeave, onMouseUp, onTouchEnd, onTouchMove, onTouchStart, tabIndex=0, TouchRippleProps, touchRippleRef, type} = props
              , other = (0,
            objectWithoutPropertiesLoose.Z)(props, ButtonBase_excluded)
              , buttonRef = react.useRef(null)
              , rippleRef = react.useRef(null)
              , handleRippleRef = useForkRef(rippleRef, touchRippleRef)
              , {isFocusVisibleRef, onFocus: handleFocusVisible, onBlur: handleBlurVisible, ref: focusVisibleRef} = utils_useIsFocusVisible()
              , [focusVisible,setFocusVisible] = react.useState(!1);
            disabled && focusVisible && setFocusVisible(!1),
            react.useImperativeHandle(action, ()=>({
                focusVisible() {
                    setFocusVisible(!0),
                    buttonRef.current.focus()
                }
            }), []);
            let[mountedState,setMountedState] = react.useState(!1);
            function useRippleHandler(rippleAction, eventCallback, skipRippleAction=disableTouchRipple) {
                return utils_useEventCallback(event=>(eventCallback && eventCallback(event),
                !skipRippleAction && rippleRef.current && rippleRef.current[rippleAction](event),
                !0))
            }
            react.useEffect(()=>{
                setMountedState(!0)
            }
            , []),
            react.useEffect(()=>{
                focusVisible && focusRipple && !disableRipple && mountedState && rippleRef.current.pulsate()
            }
            , [disableRipple, focusRipple, focusVisible, mountedState]);
            let handleMouseDown = useRippleHandler("start", onMouseDown)
              , handleContextMenu = useRippleHandler("stop", onContextMenu)
              , handleDragLeave = useRippleHandler("stop", onDragLeave)
              , handleMouseUp = useRippleHandler("stop", onMouseUp)
              , handleMouseLeave = useRippleHandler("stop", event=>{
                focusVisible && event.preventDefault(),
                onMouseLeave && onMouseLeave(event)
            }
            )
              , handleTouchStart = useRippleHandler("start", onTouchStart)
              , handleTouchEnd = useRippleHandler("stop", onTouchEnd)
              , handleTouchMove = useRippleHandler("stop", onTouchMove)
              , handleBlur = useRippleHandler("stop", event=>{
                handleBlurVisible(event),
                !1 === isFocusVisibleRef.current && setFocusVisible(!1),
                onBlur && onBlur(event)
            }
            , !1)
              , handleFocus = utils_useEventCallback(event=>{
                buttonRef.current || (buttonRef.current = event.currentTarget),
                handleFocusVisible(event),
                !0 === isFocusVisibleRef.current && (setFocusVisible(!0),
                onFocusVisible && onFocusVisible(event)),
                onFocus && onFocus(event)
            }
            )
              , isNonNativeButton = ()=>{
                let button = buttonRef.current;
                return component && "button" !== component && !("A" === button.tagName && button.href)
            }
              , keydownRef = react.useRef(!1)
              , handleKeyDown = utils_useEventCallback(event=>{
                focusRipple && !keydownRef.current && focusVisible && rippleRef.current && " " === event.key && (keydownRef.current = !0,
                rippleRef.current.stop(event, ()=>{
                    rippleRef.current.start(event)
                }
                )),
                event.target === event.currentTarget && isNonNativeButton() && " " === event.key && event.preventDefault(),
                onKeyDown && onKeyDown(event),
                event.target === event.currentTarget && isNonNativeButton() && "Enter" === event.key && !disabled && (event.preventDefault(),
                onClick && onClick(event))
            }
            )
              , handleKeyUp = utils_useEventCallback(event=>{
                focusRipple && " " === event.key && rippleRef.current && focusVisible && !event.defaultPrevented && (keydownRef.current = !1,
                rippleRef.current.stop(event, ()=>{
                    rippleRef.current.pulsate(event)
                }
                )),
                onKeyUp && onKeyUp(event),
                onClick && event.target === event.currentTarget && isNonNativeButton() && " " === event.key && !event.defaultPrevented && onClick(event)
            }
            )
              , ComponentProp = component;
            "button" === ComponentProp && (other.href || other.to) && (ComponentProp = LinkComponent);
            let buttonProps = {};
            "button" === ComponentProp ? (buttonProps.type = void 0 === type ? "button" : type,
            buttonProps.disabled = disabled) : (other.href || other.to || (buttonProps.role = "button"),
            disabled && (buttonProps["aria-disabled"] = disabled));
            let handleRef = useForkRef(ref, focusVisibleRef, buttonRef)
              , ownerState = (0,
            esm_extends.Z)({}, props, {
                centerRipple,
                component,
                disabled,
                disableRipple,
                disableTouchRipple,
                focusRipple,
                tabIndex,
                focusVisible
            })
              , classes = ButtonBase_useUtilityClasses(ownerState);
            return (0,
            jsx_runtime.jsxs)(ButtonBaseRoot, (0,
            esm_extends.Z)({
                as: ComponentProp,
                className: clsx_m(classes.root, className),
                ownerState: ownerState,
                onBlur: handleBlur,
                onClick: onClick,
                onContextMenu: handleContextMenu,
                onFocus: handleFocus,
                onKeyDown: handleKeyDown,
                onKeyUp: handleKeyUp,
                onMouseDown: handleMouseDown,
                onMouseLeave: handleMouseLeave,
                onMouseUp: handleMouseUp,
                onDragLeave: handleDragLeave,
                onTouchEnd: handleTouchEnd,
                onTouchMove: handleTouchMove,
                onTouchStart: handleTouchStart,
                ref: handleRef,
                tabIndex: disabled ? -1 : tabIndex,
                type: type
            }, buttonProps, other, {
                children: [children, !mountedState || disableRipple || disabled ? null : (0,
                jsx_runtime.jsx)(TouchRipple, (0,
                esm_extends.Z)({
                    ref: handleRippleRef,
                    center: centerRipple
                }, TouchRippleProps))]
            }))
        });
        function getToggleButtonUtilityClass(slot) {
            return generateUtilityClass_generateUtilityClass("MuiToggleButton", slot)
        }
        let toggleButtonClasses = generateUtilityClasses("MuiToggleButton", ["root", "disabled", "selected", "standard", "primary", "secondary", "sizeSmall", "sizeMedium", "sizeLarge"])
          , ToggleButton_excluded = ["children", "className", "color", "disabled", "disableFocusRipple", "fullWidth", "onChange", "onClick", "selected", "size", "value"]
          , ToggleButton_useUtilityClasses = ownerState=>{
            let {classes, fullWidth, selected, disabled, size, color} = ownerState
              , slots = {
                root: ["root", selected && "selected", disabled && "disabled", fullWidth && "fullWidth", `size${capitalize(size)}`, color]
            };
            return composeClasses(slots, getToggleButtonUtilityClass, classes)
        }
          , ToggleButtonRoot = styled_styled(ButtonBase, {
            name: "MuiToggleButton",
            slot: "Root",
            overridesResolver(props, styles) {
                let {ownerState} = props;
                return [styles.root, styles[`size${capitalize(ownerState.size)}`]]
            }
        })(({theme, ownerState})=>{
            let selectedColorChannel, selectedColor = "standard" === ownerState.color ? theme.palette.text.primary : theme.palette[ownerState.color].main;
            return theme.vars && (selectedColor = "standard" === ownerState.color ? theme.vars.palette.text.primary : theme.vars.palette[ownerState.color].main,
            selectedColorChannel = "standard" === ownerState.color ? theme.vars.palette.text.primaryChannel : theme.vars.palette[ownerState.color].mainChannel),
            (0,
            esm_extends.Z)({}, theme.typography.button, {
                borderRadius: (theme.vars || theme).shape.borderRadius,
                padding: 11,
                border: `1px solid ${(theme.vars || theme).palette.divider}`,
                color: (theme.vars || theme).palette.action.active
            }, ownerState.fullWidth && {
                width: "100%"
            }, {
                [`&.${toggleButtonClasses.disabled}`]: {
                    color: (theme.vars || theme).palette.action.disabled,
                    border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`
                },
                "&:hover": {
                    textDecoration: "none",
                    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
                    "@media (hover: none)": {
                        backgroundColor: "transparent"
                    }
                },
                [`&.${toggleButtonClasses.selected}`]: {
                    color: selectedColor,
                    backgroundColor: theme.vars ? `rgba(${selectedColorChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(selectedColor, theme.palette.action.selectedOpacity),
                    "&:hover": {
                        backgroundColor: theme.vars ? `rgba(${selectedColorChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(selectedColor, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
                        "@media (hover: none)": {
                            backgroundColor: theme.vars ? `rgba(${selectedColorChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(selectedColor, theme.palette.action.selectedOpacity)
                        }
                    }
                }
            }, "small" === ownerState.size && {
                padding: 7,
                fontSize: theme.typography.pxToRem(13)
            }, "large" === ownerState.size && {
                padding: 15,
                fontSize: theme.typography.pxToRem(15)
            })
        }
        )
          , ToggleButton = react.forwardRef(function(inProps, ref) {
            let props = useThemeProps_useThemeProps({
                props: inProps,
                name: "MuiToggleButton"
            })
              , {children, className, color="standard", disabled=!1, disableFocusRipple=!1, fullWidth=!1, onChange, onClick, selected, size="medium", value} = props
              , other = (0,
            objectWithoutPropertiesLoose.Z)(props, ToggleButton_excluded)
              , ownerState = (0,
            esm_extends.Z)({}, props, {
                color,
                disabled,
                disableFocusRipple,
                fullWidth,
                size
            })
              , classes = ToggleButton_useUtilityClasses(ownerState)
              , handleChange = event=>{
                onClick && (onClick(event, value),
                event.defaultPrevented) || !onChange || onChange(event, value)
            }
            ;
            return (0,
            jsx_runtime.jsx)(ToggleButtonRoot, (0,
            esm_extends.Z)({
                className: clsx_m(classes.root, className),
                disabled: disabled,
                focusRipple: !disableFocusRipple,
                ref: ref,
                onClick: handleChange,
                onChange: onChange,
                value: value,
                ownerState: ownerState,
                "aria-pressed": selected
            }, other, {
                children: children
            }))
        });
        var remirror_core_helpers = __webpack_require__(62120)
          , remirror_react_core = __webpack_require__(16263)
          , remirror_core_utils = __webpack_require__(85775);
        let usePreviousProps = value=>{
            let ref = react.useRef({});
            return react.useEffect(()=>{
                ref.current = value
            }
            ),
            ref.current
        }
        ;
        function getBadgeUtilityClass(slot) {
            return generateUtilityClass_generateUtilityClass("MuiBadge", slot)
        }
        let badgeClasses = generateUtilityClasses("MuiBadge", ["root", "badge", "dot", "standard", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft", "invisible", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "overlapRectangular", "overlapCircular", "anchorOriginTopLeftCircular", "anchorOriginTopLeftRectangular", "anchorOriginTopRightCircular", "anchorOriginTopRightRectangular", "anchorOriginBottomLeftCircular", "anchorOriginBottomLeftRectangular", "anchorOriginBottomRightCircular", "anchorOriginBottomRightRectangular"])
          , Badge_excluded = ["anchorOrigin", "className", "classes", "component", "components", "componentsProps", "children", "overlap", "color", "invisible", "max", "badgeContent", "slots", "slotProps", "showZero", "variant"]
          , Badge_useUtilityClasses = ownerState=>{
            let {color, anchorOrigin, invisible, overlap, variant, classes={}} = ownerState
              , slots = {
                root: ["root"],
                badge: ["badge", variant, invisible && "invisible", `anchorOrigin${capitalize(anchorOrigin.vertical)}${capitalize(anchorOrigin.horizontal)}`, `anchorOrigin${capitalize(anchorOrigin.vertical)}${capitalize(anchorOrigin.horizontal)}${capitalize(overlap)}`, `overlap${capitalize(overlap)}`, "default" !== color && `color${capitalize(color)}`]
            };
            return composeClasses(slots, getBadgeUtilityClass, classes)
        }
          , BadgeRoot = styled_styled("span", {
            name: "MuiBadge",
            slot: "Root",
            overridesResolver: (props,styles)=>styles.root
        })({
            position: "relative",
            display: "inline-flex",
            verticalAlign: "middle",
            flexShrink: 0
        })
          , BadgeBadge = styled_styled("span", {
            name: "MuiBadge",
            slot: "Badge",
            overridesResolver(props, styles) {
                let {ownerState} = props;
                return [styles.badge, styles[ownerState.variant], styles[`anchorOrigin${capitalize(ownerState.anchorOrigin.vertical)}${capitalize(ownerState.anchorOrigin.horizontal)}${capitalize(ownerState.overlap)}`], "default" !== ownerState.color && styles[`color${capitalize(ownerState.color)}`], ownerState.invisible && styles.invisible]
            }
        })(({theme, ownerState})=>(0,
        esm_extends.Z)({
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            position: "absolute",
            boxSizing: "border-box",
            fontFamily: theme.typography.fontFamily,
            fontWeight: theme.typography.fontWeightMedium,
            fontSize: theme.typography.pxToRem(12),
            minWidth: 20,
            lineHeight: 1,
            padding: "0 6px",
            height: 20,
            borderRadius: 10,
            zIndex: 1,
            transition: theme.transitions.create("transform", {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.enteringScreen
            })
        }, "default" !== ownerState.color && {
            backgroundColor: (theme.vars || theme).palette[ownerState.color].main,
            color: (theme.vars || theme).palette[ownerState.color].contrastText
        }, "dot" === ownerState.variant && {
            borderRadius: 4,
            height: 8,
            minWidth: 8,
            padding: 0
        }, "top" === ownerState.anchorOrigin.vertical && "right" === ownerState.anchorOrigin.horizontal && "rectangular" === ownerState.overlap && {
            top: 0,
            right: 0,
            transform: "scale(1) translate(50%, -50%)",
            transformOrigin: "100% 0%",
            [`&.${badgeClasses.invisible}`]: {
                transform: "scale(0) translate(50%, -50%)"
            }
        }, "bottom" === ownerState.anchorOrigin.vertical && "right" === ownerState.anchorOrigin.horizontal && "rectangular" === ownerState.overlap && {
            bottom: 0,
            right: 0,
            transform: "scale(1) translate(50%, 50%)",
            transformOrigin: "100% 100%",
            [`&.${badgeClasses.invisible}`]: {
                transform: "scale(0) translate(50%, 50%)"
            }
        }, "top" === ownerState.anchorOrigin.vertical && "left" === ownerState.anchorOrigin.horizontal && "rectangular" === ownerState.overlap && {
            top: 0,
            left: 0,
            transform: "scale(1) translate(-50%, -50%)",
            transformOrigin: "0% 0%",
            [`&.${badgeClasses.invisible}`]: {
                transform: "scale(0) translate(-50%, -50%)"
            }
        }, "bottom" === ownerState.anchorOrigin.vertical && "left" === ownerState.anchorOrigin.horizontal && "rectangular" === ownerState.overlap && {
            bottom: 0,
            left: 0,
            transform: "scale(1) translate(-50%, 50%)",
            transformOrigin: "0% 100%",
            [`&.${badgeClasses.invisible}`]: {
                transform: "scale(0) translate(-50%, 50%)"
            }
        }, "top" === ownerState.anchorOrigin.vertical && "right" === ownerState.anchorOrigin.horizontal && "circular" === ownerState.overlap && {
            top: "14%",
            right: "14%",
            transform: "scale(1) translate(50%, -50%)",
            transformOrigin: "100% 0%",
            [`&.${badgeClasses.invisible}`]: {
                transform: "scale(0) translate(50%, -50%)"
            }
        }, "bottom" === ownerState.anchorOrigin.vertical && "right" === ownerState.anchorOrigin.horizontal && "circular" === ownerState.overlap && {
            bottom: "14%",
            right: "14%",
            transform: "scale(1) translate(50%, 50%)",
            transformOrigin: "100% 100%",
            [`&.${badgeClasses.invisible}`]: {
                transform: "scale(0) translate(50%, 50%)"
            }
        }, "top" === ownerState.anchorOrigin.vertical && "left" === ownerState.anchorOrigin.horizontal && "circular" === ownerState.overlap && {
            top: "14%",
            left: "14%",
            transform: "scale(1) translate(-50%, -50%)",
            transformOrigin: "0% 0%",
            [`&.${badgeClasses.invisible}`]: {
                transform: "scale(0) translate(-50%, -50%)"
            }
        }, "bottom" === ownerState.anchorOrigin.vertical && "left" === ownerState.anchorOrigin.horizontal && "circular" === ownerState.overlap && {
            bottom: "14%",
            left: "14%",
            transform: "scale(1) translate(-50%, 50%)",
            transformOrigin: "0% 100%",
            [`&.${badgeClasses.invisible}`]: {
                transform: "scale(0) translate(-50%, 50%)"
            }
        }, ownerState.invisible && {
            transition: theme.transitions.create("transform", {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.leavingScreen
            })
        }))
          , Badge = react.forwardRef(function(inProps, ref) {
            var _ref, _slots$root, _ref2, _slots$badge, _slotProps$root, _slotProps$badge;
            let props = useThemeProps_useThemeProps({
                props: inProps,
                name: "MuiBadge"
            })
              , {anchorOrigin: anchorOriginProp={
                vertical: "top",
                horizontal: "right"
            }, className, component, components={}, componentsProps={}, children, overlap: overlapProp="rectangular", color: colorProp="default", invisible: invisibleProp=!1, max: maxProp=99, badgeContent: badgeContentProp, slots, slotProps, showZero=!1, variant: variantProp="standard"} = props
              , other = (0,
            objectWithoutPropertiesLoose.Z)(props, Badge_excluded)
              , {badgeContent, invisible: invisibleFromHook, max, displayValue: displayValueFromHook} = function(parameters) {
                let {badgeContent: badgeContentProp, invisible: invisibleProp=!1, max: maxProp=99, showZero=!1} = parameters
                  , prevProps = usePreviousProps({
                    badgeContent: badgeContentProp,
                    max: maxProp
                })
                  , invisible = invisibleProp;
                !1 !== invisibleProp || 0 !== badgeContentProp || showZero || (invisible = !0);
                let {badgeContent, max=maxProp} = invisible ? prevProps : parameters
                  , displayValue = badgeContent && Number(badgeContent) > max ? `${max}+` : badgeContent;
                return {
                    badgeContent,
                    invisible,
                    max,
                    displayValue
                }
            }({
                max: maxProp,
                invisible: invisibleProp,
                badgeContent: badgeContentProp,
                showZero
            })
              , prevProps = usePreviousProps({
                anchorOrigin: anchorOriginProp,
                color: colorProp,
                overlap: overlapProp,
                variant: variantProp,
                badgeContent: badgeContentProp
            })
              , invisible = invisibleFromHook || null == badgeContent && "dot" !== variantProp
              , {color=colorProp, overlap=overlapProp, anchorOrigin=anchorOriginProp, variant=variantProp} = invisible ? prevProps : props
              , displayValue = "dot" !== variant ? displayValueFromHook : void 0
              , ownerState = (0,
            esm_extends.Z)({}, props, {
                badgeContent,
                invisible,
                max,
                displayValue,
                showZero,
                anchorOrigin,
                color,
                overlap,
                variant
            })
              , classes = Badge_useUtilityClasses(ownerState)
              , RootSlot = null != (_ref = null != (_slots$root = null == slots ? void 0 : slots.root) ? _slots$root : components.Root) ? _ref : BadgeRoot
              , BadgeSlot = null != (_ref2 = null != (_slots$badge = null == slots ? void 0 : slots.badge) ? _slots$badge : components.Badge) ? _ref2 : BadgeBadge
              , rootSlotProps = null != (_slotProps$root = null == slotProps ? void 0 : slotProps.root) ? _slotProps$root : componentsProps.root
              , badgeSlotProps = null != (_slotProps$badge = null == slotProps ? void 0 : slotProps.badge) ? _slotProps$badge : componentsProps.badge
              , rootProps = useSlotProps({
                elementType: RootSlot,
                externalSlotProps: rootSlotProps,
                externalForwardedProps: other,
                additionalProps: {
                    ref,
                    as: component
                },
                ownerState,
                className: clsx_m(null == rootSlotProps ? void 0 : rootSlotProps.className, classes.root, className)
            })
              , badgeProps = useSlotProps({
                elementType: BadgeSlot,
                externalSlotProps: badgeSlotProps,
                ownerState,
                className: clsx_m(classes.badge, null == badgeSlotProps ? void 0 : badgeSlotProps.className)
            });
            return (0,
            jsx_runtime.jsxs)(RootSlot, (0,
            esm_extends.Z)({}, rootProps, {
                children: [children, (0,
                jsx_runtime.jsx)(BadgeSlot, (0,
                esm_extends.Z)({}, badgeProps, {
                    children: displayValue
                }))]
            }))
        });
        var ab = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M5 15v2c0 1.054.95 2 2 2h3v2H7a4 4 0 0 1-4-4v-2h2zm13-5l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16 10h2zm-1 2.885L15.753 16h2.492L17 12.885zM3 3h6a3 3 0 0 1 2.235 5A3 3 0 0 1 9 13H3V3zm6 6H5v2h4a1 1 0 0 0 0-2zm8-6a4 4 0 0 1 4 4v2h-2V7a2 2 0 0 0-2-2h-3V3h3zM9 5H5v2h4a1 1 0 1 0 0-2z"
            }
        }]
          , addFill = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
            }
        }]
          , addLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
            }
        }]
          , alertLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                fillRule: "nonzero",
                d: "M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zm-8.66 16h15.588L12 5.5 4.206 19zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z"
            }
        }]
          , alignBottom = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M3 19h18v2H3v-2zm5-6h3l-4 4-4-4h3V3h2v10zm10 0h3l-4 4-4-4h3V3h2v10z"
            }
        }]
          , alignCenter = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M3 4h18v2H3V4zm2 15h14v2H5v-2zm-2-5h18v2H3v-2zm2-5h14v2H5V9z"
            }
        }]
          , alignJustify = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M3 4h18v2H3V4zm0 15h18v2H3v-2zm0-5h18v2H3v-2zm0-5h18v2H3V9z"
            }
        }]
          , alignLeft = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M3 4h18v2H3V4zm0 15h14v2H3v-2zm0-5h18v2H3v-2zm0-5h14v2H3V9z"
            }
        }]
          , alignRight = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M3 4h18v2H3V4zm4 15h14v2H7v-2zm-4-5h18v2H3v-2zm4-5h14v2H7V9z"
            }
        }]
          , alignTop = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M3 3h18v2H3V3zm5 8v10H6V11H3l4-4 4 4H8zm10 0v10h-2V11h-3l4-4 4 4h-3z"
            }
        }]
          , alignVertically = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M3 11h18v2H3v-2zm15 7v3h-2v-3h-3l4-4 4 4h-3zM8 18v3H6v-3H3l4-4 4 4H8zM18 6h3l-4 4-4-4h3V3h2v3zM8 6h3l-4 4-4-4h3V3h2v3z"
            }
        }]
          , appsLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M6.75 2.5A4.25 4.25 0 0 1 11 6.75V11H6.75a4.25 4.25 0 1 1 0-8.5zM9 9V6.75A2.25 2.25 0 1 0 6.75 9H9zm-2.25 4H11v4.25A4.25 4.25 0 1 1 6.75 13zm0 2A2.25 2.25 0 1 0 9 17.25V15H6.75zm10.5-12.5a4.25 4.25 0 1 1 0 8.5H13V6.75a4.25 4.25 0 0 1 4.25-4.25zm0 6.5A2.25 2.25 0 1 0 15 6.75V9h2.25zM13 13h4.25A4.25 4.25 0 1 1 13 17.25V13zm2 2v2.25A2.25 2.25 0 1 0 17.25 15H15z"
            }
        }]
          , arrowDownSFill = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12 16l-6-6h12z"
            }
        }]
          , arrowGoBackFill = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M8 7v4L2 6l6-5v4h5a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H8z"
            }
        }]
          , arrowGoForwardFill = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M16 7h-5a6 6 0 1 0 0 12h9v2h-9a8 8 0 1 1 0-16h5V1l6 5-6 5V7z"
            }
        }]
          , arrowLeftSFill = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M8 12l6-6v12z"
            }
        }]
          , arrowRightSFill = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M16 12l-6 6V6z"
            }
        }]
          , arrowUpSFill = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12 8l6 6H6z"
            }
        }]
          , asterisk = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M13 3v7.267l6.294-3.633 1 1.732-6.293 3.633 6.293 3.635-1 1.732L13 13.732V21h-2v-7.268l-6.294 3.634-1-1.732L9.999 12 3.706 8.366l1-1.732L11 10.267V3z"
            }
        }]
          , attachment2 = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M14.828 7.757l-5.656 5.657a1 1 0 1 0 1.414 1.414l5.657-5.656A3 3 0 1 0 12 4.929l-5.657 5.657a5 5 0 1 0 7.071 7.07L19.071 12l1.414 1.414-5.657 5.657a7 7 0 1 1-9.9-9.9l5.658-5.656a5 5 0 0 1 7.07 7.07L12 16.244A3 3 0 1 1 7.757 12l5.657-5.657 1.414 1.414z"
            }
        }]
          , bold = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z"
            }
        }]
          , bracesLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M4 18v-3.7a1.5 1.5 0 0 0-1.5-1.5H2v-1.6h.5A1.5 1.5 0 0 0 4 9.7V6a3 3 0 0 1 3-3h1v2H7a1 1 0 0 0-1 1v4.1A2 2 0 0 1 4.626 12 2 2 0 0 1 6 13.9V18a1 1 0 0 0 1 1h1v2H7a3 3 0 0 1-3-3zm16-3.7V18a3 3 0 0 1-3 3h-1v-2h1a1 1 0 0 0 1-1v-4.1a2 2 0 0 1 1.374-1.9A2 2 0 0 1 18 10.1V6a1 1 0 0 0-1-1h-1V3h1a3 3 0 0 1 3 3v3.7a1.5 1.5 0 0 0 1.5 1.5h.5v1.6h-.5a1.5 1.5 0 0 0-1.5 1.5z"
            }
        }]
          , bringForward = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M14 3c.552 0 1 .448 1 1v5h5c.552 0 1 .448 1 1v10c0 .552-.448 1-1 1H10c-.552 0-1-.448-1-1v-5H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h10zm-1 2H5v8h8V5z"
            }
        }]
          , bringToFront = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M11 3c.552 0 1 .448 1 1v2h5c.552 0 1 .448 1 1v5h2c.552 0 1 .448 1 1v7c0 .552-.448 1-1 1h-7c-.552 0-1-.448-1-1v-2H7c-.552 0-1-.448-1-1v-5H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h7zm5 5H8v8h8V8z"
            }
        }]
          , chatNewLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M14 3v2H4v13.385L5.763 17H20v-7h2v8a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1h11zm5 0V0h2v3h3v2h-3v3h-2V5h-3V3h3z"
            }
        }]
          , checkboxCircleLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"
            }
        }]
          , checkboxMultipleLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                fillRule: "nonzero",
                d: "M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zm6 2H4.003L4 20h11V9zm-6.497 9l-3.536-3.536 1.414-1.414 2.122 2.122 4.242-4.243 1.414 1.414L8.503 18z"
            }
        }]
          , clipboardFill = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M6 4v4h12V4h2.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4H6zm2-2h8v4H8V2z"
            }
        }]
          , clipboardLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M7 4V2h10v2h3.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7zm0 2H5v14h14V6h-2v2H7V6zm2-2v2h6V4H9z"
            }
        }]
          , closeCircleLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
            }
        }]
          , closeFill = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
            }
        }]
          , closeLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
            }
        }]
          , codeLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M23 12l-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414L23 12zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414L3.828 12z"
            }
        }]
          , codeView = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M16.95 8.464l1.414-1.414 4.95 4.95-4.95 4.95-1.414-1.414L20.485 12 16.95 8.464zm-9.9 0L3.515 12l3.535 3.536-1.414 1.414L.686 12l4.95-4.95L7.05 8.464z"
            }
        }]
          , deleteBinFill = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm-8 5v6h2v-6H9zm4 0v6h2v-6h-2zM9 4v2h6V4H9z"
            }
        }]
          , deleteBinLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"
            }
        }]
          , deleteColumn = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12 3c.552 0 1 .448 1 1v8c.835-.628 1.874-1 3-1 2.761 0 5 2.239 5 5s-2.239 5-5 5c-1.032 0-1.99-.313-2.787-.848L13 20c0 .552-.448 1-1 1H6c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h6zm-1 2H7v14h4V5zm8 10h-6v2h6v-2z"
            }
        }]
          , deleteRow = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M20 5c.552 0 1 .448 1 1v6c0 .552-.448 1-1 1 .628.835 1 1.874 1 3 0 2.761-2.239 5-5 5s-5-2.239-5-5c0-1.126.372-2.165 1-3H4c-.552 0-1-.448-1-1V6c0-.552.448-1 1-1h16zm-7 10v2h6v-2h-6zm6-8H5v4h14V7z"
            }
        }]
          , doubleQuotesL = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
            }
        }]
          , doubleQuotesR = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z"
            }
        }]
          , download2Fill = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zM14 9h5l-7 7-7-7h5V3h4v6z"
            }
        }]
          , dragDropLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                fillRule: "nonzero",
                d: "M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z"
            }
        }]
          , emphasisCn = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-5.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm11 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM13 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.621 6.302 14.685 14.685 0 0 0 5.327 3.042l-.536 1.93A16.685 16.685 0 0 1 12 13.726a16.696 16.696 0 0 1-6.202 3.547l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042 18.077 18.077 0 0 1-2.822-4.3h2.24A16.031 16.031 0 0 0 12 10.876a16.168 16.168 0 0 0 2.91-4.876L5 6V4h6V2h2z"
            }
        }]
          , emphasis = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-5.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm11 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM18 3v2H8v4h9v2H8v4h10v2H6V3h12z"
            }
        }]
          , englishInput = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M14 10h2v.757a4.5 4.5 0 0 1 7 3.743V20h-2v-5.5c0-1.43-1.175-2.5-2.5-2.5S16 13.07 16 14.5V20h-2V10zm-2-6v2H4v5h8v2H4v5h8v2H2V4h10z"
            }
        }]
          , errorWarningLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"
            }
        }]
          , externalLinkFill = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z"
            }
        }]
          , fileCopyLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z"
            }
        }]
          , flowChart = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M6 21.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5c1.585 0 2.924 1.054 3.355 2.5H15v-2h2V9.242L14.757 7H9V9H3V3h6v2h5.757L18 1.756 22.243 6 19 9.241V15L21 15v6h-6v-2H9.355c-.43 1.446-1.77 2.5-3.355 2.5zm0-5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm13 .5h-2v2h2v-2zM18 4.586L16.586 6 18 7.414 19.414 6 18 4.586zM7 5H5v2h2V5z"
            }
        }]
          , fontColor = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M15.246 14H8.754l-1.6 4H5l6-15h2l6 15h-2.154l-1.6-4zm-.8-2L12 5.885 9.554 12h4.892zM3 20h18v2H3v-2z"
            }
        }]
          , fontSize2 = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M10 6v15H8V6H2V4h14v2h-6zm8 8v7h-2v-7h-3v-2h8v2h-3z"
            }
        }]
          , fontSize = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M11.246 15H4.754l-2 5H.6L7 4h2l6.4 16h-2.154l-2-5zm-.8-2L8 6.885 5.554 13h4.892zM21 12.535V12h2v8h-2v-.535a4 4 0 1 1 0-6.93zM19 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
            }
        }]
          , formatClear = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12.651 14.065L11.605 20H9.574l1.35-7.661-7.41-7.41L4.93 3.515 20.485 19.07l-1.414 1.414-6.42-6.42zm-.878-6.535l.27-1.53h-1.8l-2-2H20v2h-5.927L13.5 9.257 11.773 7.53z"
            }
        }]
          , fullscreenExitLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"
            }
        }]
          , fullscreenLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M20 3h2v6h-2V5h-4V3h4zM4 3h4v2H4v4H2V3h2zm16 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"
            }
        }]
          , functions = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M5 18l7.68-6L5 6V4h14v2H8.263L16 12l-7.737 6H19v2H5v-2z"
            }
        }]
          , galleryUploadLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M8 1v4H4v14h16V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2zm4 7l4 4h-3v4h-2v-4H8l4-4zm6-7v4h-8V3h6V1h2z"
            }
        }]
          , h1 = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16zm8-12v12h-2v-9.796l-2 .536V8.67L19.5 8H21z"
            }
        }]
          , h2 = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M4 4v7h7V4h2v16h-2v-7H4v7H2V4h2zm14.5 4c2.071 0 3.75 1.679 3.75 3.75 0 .857-.288 1.648-.772 2.28l-.148.18L18.034 18H22v2h-7v-1.556l4.82-5.546c.268-.307.43-.709.43-1.148 0-.966-.784-1.75-1.75-1.75-.918 0-1.671.707-1.744 1.606l-.006.144h-2C14.75 9.679 16.429 8 18.5 8z"
            }
        }]
          , h3 = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M22 8l-.002 2-2.505 2.883c1.59.435 2.757 1.89 2.757 3.617 0 2.071-1.679 3.75-3.75 3.75-1.826 0-3.347-1.305-3.682-3.033l1.964-.382c.156.806.866 1.415 1.718 1.415.966 0 1.75-.784 1.75-1.75s-.784-1.75-1.75-1.75c-.286 0-.556.069-.794.19l-1.307-1.547L19.35 10H15V8h7zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2z"
            }
        }]
          , h4 = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16zm9-12v8h1.5v2H22v2h-2v-2h-5.5v-1.34l5-8.66H22zm-2 3.133L17.19 16H20v-4.867z"
            }
        }]
          , h5 = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M22 8v2h-4.323l-.464 2.636c.33-.089.678-.136 1.037-.136 2.21 0 4 1.79 4 4s-1.79 4-4 4c-1.827 0-3.367-1.224-3.846-2.897l1.923-.551c.24.836 1.01 1.448 1.923 1.448 1.105 0 2-.895 2-2s-.895-2-2-2c-.63 0-1.193.292-1.56.748l-1.81-.904L16 8h6zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2z"
            }
        }]
          , h6 = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M21.097 8l-2.598 4.5c2.21 0 4.001 1.79 4.001 4s-1.79 4-4 4-4-1.79-4-4c0-.736.199-1.426.546-2.019L18.788 8h2.309zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2zm14.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z"
            }
        }]
          , hashtag = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M7.784 14l.42-4H4V8h4.415l.525-5h2.011l-.525 5h3.989l.525-5h2.011l-.525 5H20v2h-3.784l-.42 4H20v2h-4.415l-.525 5h-2.011l.525-5H9.585l-.525 5H7.049l.525-5H4v-2h3.784zm2.011 0h3.99l.42-4h-3.99l-.42 4z"
            }
        }]
          , heading = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M17 11V4h2v17h-2v-8H7v8H5V4h2v7z"
            }
        }]
          , imageAddLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm.008-12c.548 0 .992.445.992.993V13h-2V5H4v13.999L14 9l3 3v2.829l-3-3L6.827 19H14v2H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016zM8 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
            }
        }]
          , imageEditLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M20 3c.552 0 1 .448 1 1v1.757l-2 2V5H5v8.1l4-4 4.328 4.329-1.415 1.413L9 11.93l-4 3.999V19h10.533l.708.001 1.329-1.33L18.9 19h.1v-2.758l2-2V20c0 .552-.448 1-1 1H4c-.55 0-1-.45-1-1V4c0-.552.448-1 1-1h16zm1.778 4.808l1.414 1.414L15.414 17l-1.416-.002.002-1.412 7.778-7.778zM15.5 7c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5S14 9.328 14 8.5 14.672 7 15.5 7z"
            }
        }]
          , imageLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
            }
        }]
          , indentDecrease = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M3 4h18v2H3V4zm0 15h18v2H3v-2zm8-5h10v2H11v-2zm0-5h10v2H11V9zm-8 3.5L7 9v7l-4-3.5z"
            }
        }]
          , indentIncrease = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M3 4h18v2H3V4zm0 15h18v2H3v-2zm8-5h10v2H11v-2zm0-5h10v2H11V9zm-4 3.5L3 16V9l4 3.5z"
            }
        }]
          , informationLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"
            }
        }]
          , inputCursorMove = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M8 21v-2h3V5H8V3h8v2h-3v14h3v2H8zM18.05 7.05L23 12l-4.95 4.95-1.414-1.414L20.172 12l-3.536-3.536L18.05 7.05zm-12.1 0l1.414 1.414L3.828 12l3.536 3.536L5.95 16.95 1 12l4.95-4.95z"
            }
        }]
          , insertColumnLeft = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M20 3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h6zm-1 2h-4v14h4V5zM6 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm1 2H5v1.999L3 11v2l2-.001V15h2v-2.001L9 13v-2l-2-.001V9z"
            }
        }]
          , insertColumnRight = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M10 3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h6zM9 5H5v14h4V5zm9 2c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm1 2h-2v1.999L15 11v2l2-.001V15h2v-2.001L21 13v-2l-2-.001V9z"
            }
        }]
          , insertRowBottom = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12 13c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm1 2h-2v1.999L9 17v2l2-.001V21h2v-2.001L15 19v-2l-2-.001V15zm7-12c.552 0 1 .448 1 1v6c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h16zM5 5v4h14V5H5z"
            }
        }]
          , insertRowTop = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M20 13c.552 0 1 .448 1 1v6c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1v-6c0-.552.448-1 1-1h16zm-1 2H5v4h14v-4zM12 1c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm1 2h-2v1.999L9 5v2l2-.001V9h2V6.999L15 7V5l-2-.001V3z"
            }
        }]
          , italic = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z"
            }
        }]
          , layoutColumnLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                fillRule: "nonzero",
                d: "M11 5H5v14h6V5zm2 0v14h6V5h-6zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
            }
        }]
          , lineHeight = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M11 4h10v2H11V4zM6 7v4H4V7H1l4-4 4 4H6zm0 10h3l-4 4-4-4h3v-4h2v4zm5 1h10v2H11v-2zm-2-7h12v2H9v-2z"
            }
        }]
          , linkM = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M17.657 14.828l-1.414-1.414L17.657 12A4 4 0 1 0 12 6.343l-1.414 1.414-1.414-1.414 1.414-1.414a6 6 0 0 1 8.485 8.485l-1.414 1.414zm-2.829 2.829l-1.414 1.414a6 6 0 1 1-8.485-8.485l1.414-1.414 1.414 1.414L6.343 12A4 4 0 1 0 12 17.657l1.414-1.414 1.414 1.414zm0-9.9l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"
            }
        }]
          , linkUnlinkM = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M17.657 14.828l-1.414-1.414L17.657 12A4 4 0 1 0 12 6.343l-1.414 1.414-1.414-1.414 1.414-1.414a6 6 0 0 1 8.485 8.485l-1.414 1.414zm-2.829 2.829l-1.414 1.414a6 6 0 1 1-8.485-8.485l1.414-1.414 1.414 1.414L6.343 12A4 4 0 1 0 12 17.657l1.414-1.414 1.414 1.414zm0-9.9l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07zM5.775 2.293l1.932-.518L8.742 5.64l-1.931.518-1.036-3.864zm9.483 16.068l1.931-.518 1.036 3.864-1.932.518-1.035-3.864zM2.293 5.775l3.864 1.036-.518 1.931-3.864-1.035.518-1.932zm16.068 9.483l3.864 1.035-.518 1.932-3.864-1.036.518-1.931z"
            }
        }]
          , linkUnlink = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M17 17h5v2h-3v3h-2v-5zM7 7H2V5h3V2h2v5zm11.364 8.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"
            }
        }]
          , remirror_icons_link = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"
            }
        }]
          , listCheck2 = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M11 4h10v2H11V4zm0 4h6v2h-6V8zm0 6h10v2H11v-2zm0 4h6v2h-6v-2zM3 4h6v6H3V4zm2 2v2h2V6H5zm-2 8h6v6H3v-6zm2 2v2h2v-2H5z"
            }
        }]
          , listCheck = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M8 4h13v2H8V4zm-5-.5h3v3H3v-3zm0 7h3v3H3v-3zm0 7h3v3H3v-3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z"
            }
        }]
          , listOrdered = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M8 4h13v2H8V4zM5 3v3h1v1H3V6h1V4H3V3h2zM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1H3zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2v-.5zM8 11h13v2H8v-2zm0 7h13v2H8v-2z"
            }
        }]
          , listUnordered = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z"
            }
        }]
          , markPenLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M15.243 4.515l-6.738 6.737-.707 2.121-1.04 1.041 2.828 2.829 1.04-1.041 2.122-.707 6.737-6.738-4.242-4.242zm6.364 3.535a1 1 0 0 1 0 1.414l-7.779 7.779-2.12.707-1.415 1.414a1 1 0 0 1-1.414 0l-4.243-4.243a1 1 0 0 1 0-1.414l1.414-1.414.707-2.121 7.779-7.779a1 1 0 0 1 1.414 0l5.657 5.657zm-6.364-.707l1.414 1.414-4.95 4.95-1.414-1.414 4.95-4.95zM4.283 16.89l2.828 2.829-1.414 1.414-4.243-1.414 2.828-2.829z"
            }
        }]
          , markdownFill = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4 12.5v-4l2 2 2-2v4h2v-7h-2l-2 2-2-2H5v7h2zm11-3v-4h-2v4h-2l3 3 3-3h-2z"
            }
        }]
          , markdownLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                fillRule: "nonzero",
                d: "M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm3 10.5H5v-7h2l2 2 2-2h2v7h-2v-4l-2 2-2-2v4zm11-3h2l-3 3-3-3h2v-4h2v4z"
            }
        }]
          , mergeCellsHorizontal = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M20 3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h16zm-9 2H5v5.999h2V9l3 3-3 3v-2H5v6h6v-2h2v2h6v-6h-2v2l-3-3 3-3v1.999h2V5h-6v2h-2V5zm2 8v2h-2v-2h2zm0-4v2h-2V9h2z"
            }
        }]
          , mergeCellsVertical = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M21 20c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v16zm-2-9V5h-5.999v2H15l-3 3-3-3h2V5H5v6h2v2H5v6h6v-2H9l3-3 3 3h-1.999v2H19v-6h-2v-2h2zm-8 2H9v-2h2v2zm4 0h-2v-2h2v2z"
            }
        }]
          , mindMap = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M18 3c1.657 0 3 1.343 3 3s-1.343 3-3 3h-3c-1.306 0-2.417-.834-2.829-2H11c-1.1 0-2 .9-2 2v.171c1.166.412 2 1.523 2 2.829 0 1.306-.834 2.417-2 2.829V15c0 1.1.9 2 2 2h1.17c.412-1.165 1.524-2 2.83-2h3c1.657 0 3 1.343 3 3s-1.343 3-3 3h-3c-1.306 0-2.417-.834-2.829-2H11c-2.21 0-4-1.79-4-4H5c-1.657 0-3-1.343-3-3s1.343-3 3-3h2c0-2.21 1.79-4 4-4h1.17c.412-1.165 1.524-2 2.83-2h3zm0 14h-3c-.552 0-1 .448-1 1s.448 1 1 1h3c.552 0 1-.448 1-1s-.448-1-1-1zM8 11H5c-.552 0-1 .448-1 1s.448 1 1 1h3c.552 0 1-.448 1-1s-.448-1-1-1zm10-6h-3c-.552 0-1 .448-1 1s.448 1 1 1h3c.552 0 1-.448 1-1s-.448-1-1-1z"
            }
        }]
          , moreFill = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
            }
        }]
          , nodeTree = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M10 2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1H8v2h5V9c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1v-1H8v6h5v-1c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1v-1H7c-.552 0-1-.448-1-1V8H4c-.552 0-1-.448-1-1V3c0-.552.448-1 1-1h6zm9 16h-4v2h4v-2zm0-8h-4v2h4v-2zM9 4H5v2h4V4z"
            }
        }]
          , number0 = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12 1.5c1.321 0 2.484.348 3.447.994.963.645 1.726 1.588 2.249 2.778.522 1.19.804 2.625.804 4.257v4.942c0 1.632-.282 3.068-.804 4.257-.523 1.19-1.286 2.133-2.25 2.778-.962.646-2.125.994-3.446.994-1.321 0-2.484-.348-3.447-.994-.963-.645-1.726-1.588-2.249-2.778-.522-1.19-.804-2.625-.804-4.257V9.529c0-1.632.282-3.068.804-4.257.523-1.19 1.286-2.133 2.25-2.778C9.515 1.848 10.678 1.5 12 1.5zm0 2c-.916 0-1.694.226-2.333.655-.637.427-1.158 1.07-1.532 1.92-.412.94-.635 2.108-.635 3.454v4.942c0 1.346.223 2.514.635 3.453.374.851.895 1.494 1.532 1.921.639.429 1.417.655 2.333.655.916 0 1.694-.226 2.333-.655.637-.427 1.158-1.07 1.532-1.92.412-.94.635-2.108.635-3.454V9.529c0-1.346-.223-2.514-.635-3.453-.374-.851-.895-1.494-1.532-1.921C13.694 3.726 12.916 3.5 12 3.5z"
            }
        }]
          , number1 = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M14 1.5V22h-2V3.704L7.5 4.91V2.839l5-1.339z"
            }
        }]
          , number2 = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M16 7.5a4 4 0 1 0-8 0H6a6 6 0 1 1 10.663 3.776l-7.32 8.723L18 20v2H6v-1.127l9.064-10.802A3.982 3.982 0 0 0 16 7.5z"
            }
        }]
          , number3 = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M18 2v1.362L12.809 9.55a6.501 6.501 0 1 1-7.116 8.028l1.94-.486A4.502 4.502 0 0 0 16.5 16a4.5 4.5 0 0 0-6.505-4.03l-.228.122-.69-1.207L14.855 4 6.5 4V2H18z"
            }
        }]
          , number4 = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M16 1.5V16h3v2h-3v4h-2v-4H4v-1.102L14 1.5h2zM14 16V5.171L6.968 16H14z"
            }
        }]
          , number5 = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M18 2v2H9.3l-.677 6.445a6.5 6.5 0 1 1-2.93 7.133l1.94-.486A4.502 4.502 0 0 0 16.5 16a4.5 4.5 0 0 0-4.5-4.5c-2.022 0-3.278.639-3.96 1.53l-1.575-1.182L7.5 2H18z"
            }
        }]
          , number6 = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M14.886 2l-4.438 7.686A6.5 6.5 0 1 1 6.4 12.7L12.576 2h2.31zM12 11.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z"
            }
        }]
          , number7 = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M19 2v1.5L10.763 22H8.574l8.013-18H6V2z"
            }
        }]
          , number8 = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12 1.5a5.5 5.5 0 0 1 3.352 9.86C17.24 12.41 18.5 14.32 18.5 16.5c0 3.314-2.91 6-6.5 6s-6.5-2.686-6.5-6c0-2.181 1.261-4.09 3.147-5.141A5.5 5.5 0 0 1 12 1.5zm0 11c-2.52 0-4.5 1.828-4.5 4 0 2.172 1.98 4 4.5 4s4.5-1.828 4.5-4c0-2.172-1.98-4-4.5-4zm0-9a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"
            }
        }]
          , number9 = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12 1.5a6.5 6.5 0 0 1 5.619 9.77l-6.196 10.729H9.114l4.439-7.686A6.5 6.5 0 1 1 12 1.5zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z"
            }
        }]
          , omega = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                fillRule: "nonzero",
                d: "M14 20v-2.157c1.863-1.192 3.5-3.875 3.5-6.959 0-3.073-2-6.029-5.5-6.029s-5.5 2.956-5.5 6.03c0 3.083 1.637 5.766 3.5 6.958V20H3v-2h4.76C5.666 16.505 4 13.989 4 10.884 4 6.247 7.5 3 12 3s8 3.247 8 7.884c0 3.105-1.666 5.621-3.76 7.116H21v2h-7z"
            }
        }]
          , organizationChart = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M15 3c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-2v2h4c.552 0 1 .448 1 1v3h2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h2v-2H8v2h2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h2v-3c0-.552.448-1 1-1h4V9H9c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h6zM9 17H5v2h4v-2zm10 0h-4v2h4v-2zM14 5h-4v2h4V5z"
            }
        }]
          , pageSeparator = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M17 21v-4H7v4H5v-5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5h-2zM7 3v4h10V3h2v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3h2zM2 9l4 3-4 3V9zm20 0v6l-4-3 4-3z"
            }
        }]
          , paragraph = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12 6v15h-2v-5a6 6 0 1 1 0-12h10v2h-3v15h-2V6h-3zm-2 0a4 4 0 1 0 0 8V6z"
            }
        }]
          , pencilFill = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"
            }
        }]
          , pencilLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z"
            }
        }]
          , pinyinInput = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M17.934 3.036l1.732 1L18.531 6H21v2h-2v4h2v2h-2v7h-2v-7h-3.084c-.325 2.862-1.564 5.394-3.37 7.193l-1.562-1.27c1.52-1.438 2.596-3.522 2.917-5.922L10 14v-2l2-.001V8h-2V6h2.467l-1.133-1.964 1.732-1L14.777 6h1.444l1.713-2.964zM5 13.803l-2 .536v-2.071l2-.536V8H3V6h2V3h2v3h2v2H7v3.197l2-.536v2.07l-2 .536V18.5A2.5 2.5 0 0 1 4.5 21H3v-2h1.5a.5.5 0 0 0 .492-.41L5 18.5v-4.697zM17 8h-3v4h3V8z"
            }
        }]
          , questionMark = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12 19c.828 0 1.5.672 1.5 1.5S12.828 22 12 22s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm0-17c3.314 0 6 2.686 6 6 0 2.165-.753 3.29-2.674 4.923C13.399 14.56 13 15.297 13 17h-2c0-2.474.787-3.695 3.031-5.601C15.548 10.11 16 9.434 16 8c0-2.21-1.79-4-4-4S8 5.79 8 8v1H6V8c0-3.314 2.686-6 6-6z"
            }
        }]
          , roundedCorner = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M21 19v2h-2v-2h2zm-4 0v2h-2v-2h2zm-4 0v2h-2v-2h2zm-4 0v2H7v-2h2zm-4 0v2H3v-2h2zm16-4v2h-2v-2h2zM5 15v2H3v-2h2zm0-4v2H3v-2h2zm11-8c2.687 0 4.882 2.124 4.995 4.783L21 8v5h-2V8c0-1.591-1.255-2.903-2.824-2.995L16 5h-5V3h5zM5 7v2H3V7h2zm0-4v2H3V3h2zm4 0v2H7V3h2z"
            }
        }]
          , scissorsFill = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M9.683 7.562L12 9.88l6.374-6.375a2 2 0 0 1 2.829 0l.707.707L9.683 16.438a4 4 0 1 1-2.121-2.121L9.88 12 7.562 9.683a4 4 0 1 1 2.121-2.121zM6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm9.535-6.587l6.375 6.376-.707.707a2 2 0 0 1-2.829 0l-4.96-4.961 2.12-2.122z"
            }
        }]
          , sendBackward = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M14 3c.552 0 1 .448 1 1v5h5c.552 0 1 .448 1 1v10c0 .552-.448 1-1 1H10c-.552 0-1-.448-1-1v-5H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h10zm-1 2H5v8h4v-3c0-.552.448-1 1-1h3V5z"
            }
        }]
          , sendToBack = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M11 3c.552 0 1 .448 1 1v2h5c.552 0 1 .448 1 1v5h2c.552 0 1 .448 1 1v7c0 .552-.448 1-1 1h-7c-.552 0-1-.448-1-1v-2H7c-.552 0-1-.448-1-1v-5H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h7zm5 5h-4v3c0 .552-.448 1-1 1H8v4h4v-3c0-.552.448-1 1-1h3V8z"
            }
        }]
          , separator = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M2 11h2v2H2v-2zm4 0h12v2H6v-2zm14 0h2v2h-2v-2z"
            }
        }]
          , singleQuotesL = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M9.583 17.321C8.553 16.227 8 15 8 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
            }
        }]
          , singleQuotesR = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M14.417 6.679C15.447 7.773 16 9 16 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C9.591 12.322 8.17 10.841 8.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z"
            }
        }]
          , sortAsc = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M19 3l4 5h-3v12h-2V8h-3l4-5zm-5 15v2H3v-2h11zm0-7v2H3v-2h11zm-2-7v2H3V4h9z"
            }
        }]
          , sortDesc = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M20 4v12h3l-4 5-4-5h3V4h2zm-8 14v2H3v-2h9zm2-7v2H3v-2h11zm0-7v2H3V4h11z"
            }
        }]
          , space = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M4 9v4h16V9h2v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9h2z"
            }
        }]
          , spamLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                fillRule: "nonzero",
                d: "M17.5 2.5L23 12l-5.5 9.5h-11L1 12l5.5-9.5h11zm-1.153 2H7.653L3.311 12l4.342 7.5h8.694l4.342-7.5-4.342-7.5zM11 15h2v2h-2v-2zm0-8h2v6h-2V7z"
            }
        }]
          , splitCellsHorizontal = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M20 3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h16zm-9 2H5v14h6v-4h2v4h6V5h-6v4h-2V5zm4 4l3 3-3 3v-2H9v2l-3-3 3-3v2h6V9z"
            }
        }]
          , splitCellsVertical = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0H24V24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M20 3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h16zm-1 2H5v5.999L9 11v2H5v6h14v-6h-4v-2l4-.001V5zm-7 1l3 3h-2v6h2l-3 3-3-3h2V9H9l3-3z"
            }
        }]
          , strikethrough2 = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M13 9h-2V6H5V4h14v2h-6v3zm0 6v5h-2v-5h2zM3 11h18v2H3v-2z"
            }
        }]
          , strikethrough = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M17.154 14c.23.516.346 1.09.346 1.72 0 1.342-.524 2.392-1.571 3.147C14.88 19.622 13.433 20 11.586 20c-1.64 0-3.263-.381-4.87-1.144V16.6c1.52.877 3.075 1.316 4.666 1.316 2.551 0 3.83-.732 3.839-2.197a2.21 2.21 0 0 0-.648-1.603l-.12-.117H3v-2h18v2h-3.846zm-4.078-3H7.629a4.086 4.086 0 0 1-.481-.522C6.716 9.92 6.5 9.246 6.5 8.452c0-1.236.466-2.287 1.397-3.153C8.83 4.433 10.271 4 12.222 4c1.471 0 2.879.328 4.222.984v2.152c-1.2-.687-2.515-1.03-3.946-1.03-2.48 0-3.719.782-3.719 2.346 0 .42.218.786.654 1.099.436.313.974.562 1.613.75.62.18 1.297.414 2.03.699z"
            }
        }]
          , subscript2 = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M11 6v13H9V6H3V4h14v2h-6zm8.55 10.58a.8.8 0 1 0-1.32-.36l-1.154.33A2.001 2.001 0 0 1 19 14a2 2 0 0 1 1.373 3.454L18.744 19H21v1h-4v-1l2.55-2.42z"
            }
        }]
          , subscript = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M5.596 4L10.5 9.928 15.404 4H18l-6.202 7.497L18 18.994V19h-2.59l-4.91-5.934L5.59 19H3v-.006l6.202-7.497L3 4h2.596zM21.55 16.58a.8.8 0 1 0-1.32-.36l-1.155.33A2.001 2.001 0 0 1 21 14a2 2 0 0 1 1.373 3.454L20.744 19H23v1h-4v-1l2.55-2.42z"
            }
        }]
          , subtractLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M5 11h14v2H5z"
            }
        }]
          , superscript2 = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M11 7v13H9V7H3V5h12v2h-4zm8.55-.42a.8.8 0 1 0-1.32-.36l-1.154.33A2.001 2.001 0 0 1 19 4a2 2 0 0 1 1.373 3.454L18.744 9H21v1h-4V9l2.55-2.42z"
            }
        }]
          , superscript = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M5.596 5l4.904 5.928L15.404 5H18l-6.202 7.497L18 19.994V20h-2.59l-4.91-5.934L5.59 20H3v-.006l6.202-7.497L3 5h2.596zM21.55 6.58a.8.8 0 1 0-1.32-.36l-1.155.33A2.001 2.001 0 0 1 21 4a2 2 0 0 1 1.373 3.454L20.744 9H23v1h-4V9l2.55-2.42z"
            }
        }]
          , table2 = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                fillRule: "nonzero",
                d: "M13 10v4h6v-4h-6zm-2 0H5v4h6v-4zm2 9h6v-3h-6v3zm-2 0v-3H5v3h6zm2-14v3h6V5h-6zm-2 0H5v3h6V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
            }
        }]
          , tableLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M4 8h16V5H4v3zm10 11v-9h-4v9h4zm2 0h4v-9h-4v9zm-8 0v-9H4v9h4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
            }
        }]
          , textDirectionL = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M11 5v10H9v-4a4 4 0 1 1 0-8h8v2h-2v10h-2V5h-2zM9 5a2 2 0 1 0 0 4V5zm8 12v-2.5l4 3.5-4 3.5V19H5v-2h12z"
            }
        }]
          , textDirectionR = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M11 5v10H9v-4a4 4 0 1 1 0-8h8v2h-2v10h-2V5h-2zM9 5a2 2 0 1 0 0 4V5zM7 17h12v2H7v2.5L3 18l4-3.5V17z"
            }
        }]
          , textSpacing = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M7 17h10v-2.5l3.5 3.5-3.5 3.5V19H7v2.5L3.5 18 7 14.5V17zm6-11v9h-2V6H5V4h14v2h-6z"
            }
        }]
          , textWrap = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M15 18h1.5a2.5 2.5 0 1 0 0-5H3v-2h13.5a4.5 4.5 0 1 1 0 9H15v2l-4-3 4-3v2zM3 4h18v2H3V4zm6 14v2H3v-2h6z"
            }
        }]
          , remirror_icons_text = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M13 6v15h-2V6H5V4h14v2z"
            }
        }]
          , translate2 = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301 14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z"
            }
        }]
          , translate = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M5 15v2a2 2 0 0 0 1.85 1.995L7 19h3v2H7a4 4 0 0 1-4-4v-2h2zm13-5l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16 10h2zm-1 2.885L15.753 16h2.492L17 12.885zM8 2v2h4v7H8v3H6v-3H2V4h4V2h2zm9 1a4 4 0 0 1 4 4v2h-2V7a2 2 0 0 0-2-2h-3V3h3zM6 6H4v3h2V6zm4 0H8v3h2V6z"
            }
        }]
          , underline = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M8 3v9a4 4 0 1 0 8 0V3h2v9a6 6 0 1 1-12 0V3h2zM4 20h16v2H4v-2z"
            }
        }]
          , upload2Fill = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zM14 9v6h-4V9H5l7-7 7 7h-5z"
            }
        }]
          , videoLine = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 20.007V3.993zM5 5v14h14V5H5zm5.622 3.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332z"
            }
        }]
          , wubiInput = [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M3 21v-2h3.662l1.234-7H5v-2h3.249l.881-5H4V3h16v2h-8.839l-.882 5H18v9h3v2H3zm13-9H9.927l-1.235 7H16v-7z"
            }
        }];
        let extendSxProp_excluded = ["sx"]
          , splitProps = props=>{
            var _props$theme$unstable, _props$theme;
            let result = {
                systemProps: {},
                otherProps: {}
            }
              , config = null != (_props$theme$unstable = null == props ? void 0 : null == (_props$theme = props.theme) ? void 0 : _props$theme.unstable_sxConfig) ? _props$theme$unstable : styleFunctionSx_defaultSxConfig;
            return Object.keys(props).forEach(prop=>{
                config[prop] ? result.systemProps[prop] = props[prop] : result.otherProps[prop] = props[prop]
            }
            ),
            result
        }
        ;
        function extendSxProp(props) {
            let finalSx;
            let {sx: inSx} = props
              , other = (0,
            objectWithoutPropertiesLoose.Z)(props, extendSxProp_excluded)
              , {systemProps, otherProps} = splitProps(other);
            return finalSx = Array.isArray(inSx) ? [systemProps, ...inSx] : "function" == typeof inSx ? (...args)=>{
                let result = inSx(...args);
                return isPlainObject(result) ? (0,
                esm_extends.Z)({}, systemProps, result) : systemProps
            }
            : (0,
            esm_extends.Z)({}, systemProps, inSx),
            (0,
            esm_extends.Z)({}, otherProps, {
                sx: finalSx
            })
        }
        let createBox_excluded = ["className", "component"]
          , Box_defaultTheme = styles_createTheme()
          , Box = function(options={}) {
            let {defaultTheme, defaultClassName="MuiBox-root", generateClassName} = options
              , BoxRoot = styled("div", {
                shouldForwardProp: prop=>"theme" !== prop && "sx" !== prop && "as" !== prop
            })(styleFunctionSx)
              , Box = react.forwardRef(function(inProps, ref) {
                let theme = esm_useTheme(defaultTheme)
                  , _extendSxProp = extendSxProp(inProps)
                  , {className, component="div"} = _extendSxProp
                  , other = (0,
                objectWithoutPropertiesLoose.Z)(_extendSxProp, createBox_excluded);
                return (0,
                jsx_runtime.jsx)(BoxRoot, (0,
                esm_extends.Z)({
                    as: component,
                    ref: ref,
                    className: clsx_m(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
                    theme: theme
                }, other))
            });
            return Box
        }({
            defaultTheme: Box_defaultTheme,
            defaultClassName: "MuiBox-root",
            generateClassName: ClassNameGenerator.generate
        });
        var remirror_extension_positioner = __webpack_require__(45916)
          , remirror_react_hooks = __webpack_require__(46376)
          , remirror_theme = __webpack_require__(12114)
          , composeRefs = __webpack_require__(42719)
          , remirror_messages = __webpack_require__(35708);
        let esm_styled_styled = createStyled_createStyled()
          , createStack_excluded = ["component", "direction", "spacing", "divider", "children", "className"]
          , createStack_defaultTheme = esm_createTheme_createTheme()
          , defaultCreateStyledComponent = esm_styled_styled("div", {
            name: "MuiStack",
            slot: "Root",
            overridesResolver: (props,styles)=>styles.root
        });
        function useThemePropsDefault(props) {
            return useThemeProps({
                props,
                name: "MuiStack",
                defaultTheme: createStack_defaultTheme
            })
        }
        let getSideFromDirection = direction=>({
            row: "Left",
            "row-reverse": "Right",
            column: "Top",
            "column-reverse": "Bottom"
        })[direction]
          , createStack_style = ({ownerState, theme})=>{
            let styles = (0,
            esm_extends.Z)({
                display: "flex",
                flexDirection: "column"
            }, handleBreakpoints({
                theme
            }, resolveBreakpointValues({
                values: ownerState.direction,
                breakpoints: theme.breakpoints.values
            }), propValue=>({
                flexDirection: propValue
            })));
            if (ownerState.spacing) {
                let transformer = createUnarySpacing(theme)
                  , base = Object.keys(theme.breakpoints.values).reduce((acc,breakpoint)=>(("object" == typeof ownerState.spacing && null != ownerState.spacing[breakpoint] || "object" == typeof ownerState.direction && null != ownerState.direction[breakpoint]) && (acc[breakpoint] = !0),
                acc), {})
                  , directionValues = resolveBreakpointValues({
                    values: ownerState.direction,
                    base
                })
                  , spacingValues = resolveBreakpointValues({
                    values: ownerState.spacing,
                    base
                });
                "object" == typeof directionValues && Object.keys(directionValues).forEach((breakpoint,index,breakpoints)=>{
                    let directionValue = directionValues[breakpoint];
                    if (!directionValue) {
                        let previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : "column";
                        directionValues[breakpoint] = previousDirectionValue
                    }
                }
                );
                let styleFromPropValue = (propValue,breakpoint)=>({
                    "& > :not(style) + :not(style)": {
                        margin: 0,
                        [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: getValue(transformer, propValue)
                    }
                });
                styles = deepmerge(styles, handleBreakpoints({
                    theme
                }, spacingValues, styleFromPropValue))
            }
            return function(breakpointsInput, ...styles) {
                let emptyBreakpoints = createEmptyBreakpointObject(breakpointsInput)
                  , mergedOutput = [emptyBreakpoints, ...styles].reduce((prev,next)=>deepmerge(prev, next), {});
                return removeUnusedBreakpoints(Object.keys(emptyBreakpoints), mergedOutput)
            }(theme.breakpoints, styles)
        }
          , Stack = function(options={}) {
            let {createStyledComponent=defaultCreateStyledComponent, useThemeProps=useThemePropsDefault, componentName="MuiStack"} = options
              , useUtilityClasses = ()=>composeClasses({
                root: ["root"]
            }, slot=>generateUtilityClass_generateUtilityClass(componentName, slot), {})
              , StackRoot = createStyledComponent(createStack_style)
              , Stack = react.forwardRef(function(inProps, ref) {
                let themeProps = useThemeProps(inProps)
                  , props = extendSxProp(themeProps)
                  , {component="div", direction="column", spacing=0, divider, children, className} = props
                  , other = (0,
                objectWithoutPropertiesLoose.Z)(props, createStack_excluded)
                  , classes = useUtilityClasses();
                return (0,
                jsx_runtime.jsx)(StackRoot, (0,
                esm_extends.Z)({
                    as: component,
                    ownerState: {
                        direction,
                        spacing
                    },
                    ref: ref,
                    className: clsx_m(classes.root, className)
                }, other, {
                    children: divider ? function(children, separator) {
                        let childrenArray = react.Children.toArray(children).filter(Boolean);
                        return childrenArray.reduce((output,child,index)=>(output.push(child),
                        index < childrenArray.length - 1 && output.push(react.cloneElement(separator, {
                            key: `separator-${index}`
                        })),
                        output), [])
                    }(children, divider) : children
                }))
            });
            return Stack
        }({
            createStyledComponent: styled_styled("div", {
                name: "MuiStack",
                slot: "Root",
                overridesResolver: (props,styles)=>styles.root
            }),
            useThemeProps: inProps=>useThemeProps_useThemeProps({
                props: inProps,
                name: "MuiStack"
            })
        });
        function getCommandOptionValue(value, commandProps) {
            return (0,
            remirror_core_helpers.mf)(value) ? value(commandProps) : value
        }
        var CASINGS = {
            title: value=>(0,
            remirror_core_helpers.kC)(value),
            upper: value=>value.toLocaleUpperCase(),
            lower: value=>value.toLocaleLowerCase()
        }
          , useCommandOptionValues = ({commandName, active, enabled, attrs})=>{
            let {t} = (0,
            remirror_react_core.QT)()
              , {getCommandOptions} = (0,
            remirror_react_core.z8)()
              , options = getCommandOptions(commandName)
              , {description, label, icon, shortcut} = options || {}
              , commandProps = (0,
            react.useMemo)(()=>({
                active,
                attrs,
                enabled,
                t
            }), [active, attrs, enabled, t])
              , shortcutString = (0,
            react.useMemo)(()=>{
                if (shortcut) {
                    var uiShortcut, attrs1, _a, _b, _c, _d;
                    return function(shortcut, options) {
                        var _a;
                        let {casing="title", namedAsSymbol=!1, modifierAsSymbol=!0, separator=" ", t} = options
                          , symbols = (0,
                        remirror_core_utils.Jv)(shortcut)
                          , stringSymbols = []
                          , transform = CASINGS[casing];
                        for (let sym of symbols) {
                            if ("char" === sym.type) {
                                stringSymbols.push(transform(sym.key));
                                continue
                            }
                            if ("named" === sym.type) {
                                let value2 = (!0 === namedAsSymbol || (0,
                                remirror_core_helpers.kJ)(namedAsSymbol) && (0,
                                remirror_core_helpers.q9)(namedAsSymbol, sym.key)) && null != (_a = sym.symbol) ? _a : t(sym.i18n);
                                stringSymbols.push(transform(value2));
                                continue
                            }
                            let value = !0 === modifierAsSymbol || (0,
                            remirror_core_helpers.kJ)(modifierAsSymbol) && (0,
                            remirror_core_helpers.q9)(modifierAsSymbol, sym.key) ? sym.symbol : t(sym.i18n);
                            stringSymbols.push(transform(value))
                        }
                        return stringSymbols.join(separator)
                    }((uiShortcut = shortcut,
                    attrs1 = null != attrs ? attrs : {},
                    (0,
                    remirror_core_helpers.HD)(uiShortcut) ? uiShortcut : (0,
                    remirror_core_helpers.kJ)(uiShortcut) ? (0,
                    remirror_core_helpers.HD)(uiShortcut[0]) ? null != (_a = uiShortcut[0]) ? _a : "" : null != (_d = null == (_c = null != (_b = uiShortcut.find(shortcut=>(0,
                    remirror_core_helpers.Xy)(shortcut.attrs, attrs1))) ? _b : uiShortcut[0]) ? void 0 : _c.shortcut) ? _d : "" : uiShortcut.shortcut), {
                        t,
                        separator: ""
                    })
                }
            }
            , [shortcut, attrs, t]);
            return (0,
            react.useMemo)(()=>({
                description: getCommandOptionValue(description, commandProps),
                label: getCommandOptionValue(label, commandProps),
                icon: getCommandOptionValue(icon, commandProps),
                shortcut: shortcutString
            }), [commandProps, description, label, icon, shortcutString])
        }
          , IconContext = (0,
        react.createContext)({
            color: void 0,
            size: void 0,
            className: void 0,
            style: void 0,
            attr: void 0
        });
        IconContext.Provider;
        var Icon = props=>{
            let {name} = props;
            return react.createElement(IconBase, {
                ...props
            }, function Tree2Element(tree) {
                return tree.map((node,index)=>{
                    var _a;
                    return (0,
                    react.createElement)(node.tag, {
                        key: index,
                        ...node.attr
                    }, Tree2Element(null != (_a = node.child) ? _a : []))
                }
                )
            }(remirror_icons_namespaceObject[name]))
        }
          , IconBase = props=>{
            let renderSvg = context=>{
                var _a, _b, _c;
                let className;
                let computedSize = null != (_b = null != (_a = props.size) ? _a : context.size) ? _b : "1em";
                context.className && (className = context.className),
                props.className && (className = (className ? `${className} ` : "") + props.className);
                let {title, ...svgProps} = props;
                return react.createElement("svg", {
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0",
                    ...context.attr,
                    ...svgProps,
                    className,
                    style: {
                        color: null != (_c = props.color) ? _c : context.color,
                        ...context.style,
                        ...props.style
                    },
                    height: computedSize,
                    width: computedSize,
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, title && react.createElement("title", null, title), props.children)
            }
            ;
            return react.createElement(IconContext.Consumer, null, renderSvg)
        }
          , isCommandUiIcon = val=>!!(0,
        remirror_core_helpers.PO)(val) && !!val.name
          , CommandButtonIcon = ({icon})=>(0,
        remirror_core_helpers.HD)(icon) ? react.createElement(Icon, {
            name: icon,
            size: "1rem"
        }) : icon
          , CommandButtonBadge = ({icon, children})=>{
            if (!isCommandUiIcon(icon))
                return react.createElement(react.Fragment, null, children);
            let {sub, sup} = icon
              , value = null != sub ? sub : sup;
            return void 0 === value ? react.createElement(react.Fragment, null, children) : react.createElement(Badge, {
                anchorOrigin: {
                    vertical: void 0 !== sub ? "bottom" : "top",
                    horizontal: "right"
                },
                badgeContent: value,
                sx: {
                    "& > .MuiBadge-badge": {
                        bgcolor: "background.paper",
                        color: "text.secondary",
                        minWidth: 12,
                        height: 12,
                        margin: "2px 0",
                        padding: "1px"
                    }
                }
            }, children)
        }
          , CommandButton = ({commandName, active=!1, enabled, attrs, onSelect, onChange, icon, displayShortcut=!0, "aria-label": ariaLabel, label, ...rest})=>{
            var _a;
            let handleChange = (0,
            react.useCallback)((e,value)=>{
                onSelect(),
                null == onChange || onChange(e, value)
            }
            , [onSelect, onChange])
              , handleMouseDown = (0,
            react.useCallback)(e=>{
                e.preventDefault()
            }
            , [])
              , commandOptions = useCommandOptionValues({
                commandName,
                active,
                enabled,
                attrs
            })
              , fallbackIcon = null;
            commandOptions.icon && (fallbackIcon = (0,
            remirror_core_helpers.HD)(commandOptions.icon) ? commandOptions.icon : commandOptions.icon.name);
            let labelText = null != (_a = null != ariaLabel ? ariaLabel : commandOptions.label) ? _a : ""
              , shortcutText = displayShortcut && commandOptions.shortcut ? ` (${commandOptions.shortcut})` : "";
            return react.createElement(Tooltip, {
                title: `${null != label ? label : labelText}${shortcutText}`
            }, react.createElement(ToggleButton, {
                "aria-label": labelText,
                selected: active,
                disabled: !enabled,
                onMouseDown: handleMouseDown,
                color: "primary",
                size: "small",
                sx: {
                    padding: "6px 12px",
                    "&.Mui-selected": {
                        backgroundColor: "primary.main",
                        color: "primary.contrastText"
                    },
                    "&.Mui-selected:hover": {
                        backgroundColor: "primary.dark",
                        color: "primary.contrastText"
                    },
                    "&:not(:first-of-type)": {
                        marginLeft: "-1px",
                        borderLeft: "1px solid transparent",
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0
                    },
                    "&:not(:last-of-type)": {
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0
                    }
                },
                ...rest,
                value: commandName,
                onChange: handleChange
            }, react.createElement(CommandButtonBadge, {
                icon: commandOptions.icon
            }, react.createElement(CommandButtonIcon, {
                icon: null != icon ? icon : fallbackIcon
            }))))
        }
          , ToggleBoldButton = props=>{
            let {toggleBold} = (0,
            remirror_react_core.xd)()
              , handleSelect = (0,
            react.useCallback)(()=>{
                toggleBold.enabled() && toggleBold()
            }
            , [toggleBold])
              , active = (0,
            remirror_react_core.tZ)().bold()
              , enabled = toggleBold.enabled();
            return react.createElement(CommandButton, {
                ...props,
                commandName: "toggleBold",
                active,
                enabled,
                onSelect: handleSelect
            })
        }
          , ToggleCodeButton = props=>{
            let {toggleCode} = (0,
            remirror_react_core.xd)()
              , handleSelect = (0,
            react.useCallback)(()=>{
                toggleCode.enabled() && toggleCode()
            }
            , [toggleCode])
              , active = (0,
            remirror_react_core.tZ)().code()
              , enabled = toggleCode.enabled();
            return react.createElement(CommandButton, {
                ...props,
                commandName: "toggleCode",
                active,
                enabled,
                onSelect: handleSelect
            })
        }
          , ToggleItalicButton = props=>{
            let {toggleItalic} = (0,
            remirror_react_core.xd)()
              , handleSelect = (0,
            react.useCallback)(()=>{
                toggleItalic.enabled() && toggleItalic()
            }
            , [toggleItalic])
              , active = (0,
            remirror_react_core.tZ)().italic()
              , enabled = toggleItalic.enabled();
            return react.createElement(CommandButton, {
                ...props,
                commandName: "toggleItalic",
                active,
                enabled,
                onSelect: handleSelect
            })
        }
          , ToggleStrikeButton = props=>{
            let {toggleStrike} = (0,
            remirror_react_core.xd)()
              , handleSelect = (0,
            react.useCallback)(()=>{
                toggleStrike.enabled() && toggleStrike()
            }
            , [toggleStrike])
              , active = (0,
            remirror_react_core.tZ)().strike()
              , enabled = toggleStrike.enabled();
            return react.createElement(CommandButton, {
                ...props,
                commandName: "toggleStrike",
                active,
                enabled,
                onSelect: handleSelect
            })
        }
          , ToggleUnderlineButton = props=>{
            let {toggleUnderline} = (0,
            remirror_react_core.xd)()
              , handleSelect = (0,
            react.useCallback)(()=>{
                toggleUnderline.enabled() && toggleUnderline()
            }
            , [toggleUnderline])
              , active = (0,
            remirror_react_core.tZ)().underline()
              , enabled = toggleUnderline.enabled();
            return react.createElement(CommandButton, {
                ...props,
                commandName: "toggleUnderline",
                active,
                enabled,
                onSelect: handleSelect
            })
        }
          , CommandButtonGroup = props=>react.createElement(Box, {
            sx: {
                display: "flex",
                alignItems: "center",
                width: "fit-content",
                bgcolor: "background.paper",
                color: "text.secondary"
            },
            ...props
        })
          , FormattingButtonGroup = ({children})=>react.createElement(CommandButtonGroup, null, react.createElement(ToggleBoldButton, null), react.createElement(ToggleItalicButton, null), react.createElement(ToggleUnderlineButton, null), react.createElement(ToggleStrikeButton, null), react.createElement(ToggleCodeButton, null), children)
          , remirror_react_components_composeRefs = "object" == typeof composeRefs.Z && composeRefs.Z.__esModule && composeRefs.Z.default ? composeRefs.Z.default : composeRefs.Z
          , useIsomorphicLayoutEffect = "undefined" != typeof document ? react.useLayoutEffect : react.useEffect
          , isSafariBrowser = remirror_core_utils.NZ.isBrowser && (0,
        remirror_core_utils.G6)();
        function remirror_react_components_applyStyles(styles) {
            return prevStyles=>styles && !(0,
            remirror_core_helpers.Xy)(prevStyles, styles) ? styles : prevStyles
        }
        var FloatingWrapper = props=>{
            let {containerClass, placement="right-end", positioner, children, blurOnInactive=!1, ignoredElements=[], enabled=!0, floatingLabel, hideWhenInvisible=!0, renderOutsideEditor=!1} = props
              , [isFocused] = (0,
            remirror_react_hooks.bg)({
                blurOnInactive,
                ignoredElements
            })
              , {ref, active, height, x: left, y: top, width, visible} = (0,
            remirror_react_hooks.GB)(()=>{
                let refinedPositioner = (0,
                remirror_extension_positioner.$7)(positioner);
                return refinedPositioner.active(isFocused && enabled)
            }
            , [isFocused, enabled, renderOutsideEditor])
              , shouldShow = (!hideWhenInvisible || visible) && active
              , position = function(props) {
                let {height, left, top, width} = props;
                return (0,
                react.useMemo)(()=>({
                    height,
                    left,
                    top,
                    width
                }), [height, left, top, width])
            }({
                height,
                left,
                top,
                width
            })
              , {popperRef, referenceRef, popoverStyles, update} = function(props={}) {
                let {gutter=12, placement: sealedPlacement="bottom", flip=!0, offset: sealedOffset, preventOverflow=!0, fixed=!1, visible=!1} = props
                  , popper = (0,
                react.useRef)(null)
                  , referenceRef = (0,
                react.useRef)()
                  , popperRef = (0,
                react.useRef)()
                  , arrowRef = (0,
                react.useRef)()
                  , [originalPlacement,place] = (0,
                react.useState)(sealedPlacement)
                  , [placement,setPlacement] = (0,
                react.useState)(sealedPlacement)
                  , [offset] = (0,
                react.useState)(sealedOffset || [0, gutter])
                  , [popoverStyles,setPopoverStyles] = (0,
                react.useState)({
                    position: fixed ? "fixed" : "absolute",
                    left: "-9999999px",
                    top: "-9999999px"
                })
                  , [arrowStyles,setArrowStyles] = (0,
                react.useState)({})
                  , update = (0,
                react.useCallback)(()=>!!popper.current && (popper.current.forceUpdate(),
                !0), [])
                  , updateState = (0,
                react.useCallback)(state=>{
                    state.placement && setPlacement(state.placement),
                    state.styles && (setPopoverStyles(remirror_react_components_applyStyles(state.styles.popper)),
                    arrowRef.current && setArrowStyles(remirror_react_components_applyStyles(state.styles.arrow)))
                }
                , []);
                return useIsomorphicLayoutEffect(()=>(referenceRef.current && popperRef.current && (popper.current = popper_createPopper(referenceRef.current, popperRef.current, {
                    placement: originalPlacement,
                    strategy: fixed ? "fixed" : "absolute",
                    onFirstUpdate: isSafariBrowser ? updateState : void 0,
                    modifiers: [{
                        name: "eventListeners",
                        enabled: visible
                    }, {
                        name: "applyStyles",
                        enabled: !1
                    }, {
                        name: "flip",
                        enabled: flip,
                        options: {
                            padding: 8
                        }
                    }, {
                        name: "offset",
                        options: {
                            offset
                        }
                    }, {
                        name: "preventOverflow",
                        enabled: preventOverflow,
                        options: {
                            tetherOffset() {
                                var _a;
                                return (null == (_a = arrowRef.current) ? void 0 : _a.clientWidth) || 0
                            }
                        }
                    }, {
                        name: "arrow",
                        enabled: !!arrowRef.current,
                        options: {
                            element: arrowRef.current
                        }
                    }, {
                        name: "updateState",
                        phase: "write",
                        requires: ["computeStyles"],
                        enabled: visible,
                        fn: ({state})=>updateState(state)
                    }]
                })),
                ()=>{
                    popper.current && (popper.current.destroy(),
                    popper.current = null)
                }
                ), [originalPlacement, fixed, visible, flip, offset, preventOverflow, updateState]),
                (0,
                react.useEffect)(()=>{
                    if (!visible)
                        return;
                    let id = window.requestAnimationFrame(()=>{
                        var _a;
                        null == (_a = popper.current) || _a.forceUpdate()
                    }
                    );
                    return ()=>{
                        window.cancelAnimationFrame(id)
                    }
                }
                , [visible]),
                (0,
                react.useMemo)(()=>({
                    referenceRef,
                    popperRef,
                    arrowRef,
                    popoverStyles,
                    arrowStyles,
                    update,
                    originalPlacement,
                    placement,
                    place
                }), [arrowStyles, originalPlacement, placement, popoverStyles, update])
            }({
                placement,
                visible
            })
              , floatingElement = react.createElement("div", {
                "aria-label": floatingLabel,
                ref: popperRef,
                style: popoverStyles,
                className: (0,
                remirror_core_helpers.cx)(remirror_theme.kd.FLOATING_POPOVER, containerClass)
            }, shouldShow && children);
            return renderOutsideEditor || (floatingElement = react.createElement(PositionerPortal, null, floatingElement)),
            useIsomorphicLayoutEffect(()=>{
                update()
            }
            , [shouldShow, update, height, left, top, width]),
            react.createElement(react.Fragment, null, react.createElement(PositionerPortal, null, react.createElement("span", {
                className: remirror_theme.bu.POSITIONER,
                style: {
                    top: position.top,
                    left: position.left,
                    width: position.width,
                    height: position.height
                },
                ref: remirror_react_components_composeRefs(ref, referenceRef)
            })), floatingElement)
        }
          , PositionerPortal = props=>{
            let container = (0,
            remirror_react_core.z8)().getPositionerWidget();
            return (0,
            react_dom.createPortal)(react.createElement(react.Fragment, null, props.children), container)
        }
        ;
        function MentionAtomPopupComponent(props) {
            let {focus} = (0,
            remirror_react_core.xd)()
              , {onChange, ItemComponent=DefaultItemComponent, ZeroItemsComponent=DefaultZeroItemsComponent, ...hookProps} = props
              , {state, getMenuProps, getItemProps, indexIsHovered, indexIsSelected} = (0,
            remirror_react_hooks.HK)(hookProps);
            return !function(props) {
                let {onChange, state} = props;
                (0,
                react.useEffect)(()=>{
                    onChange(state)
                }
                , [state, onChange])
            }({
                state,
                onChange
            }),
            react.createElement(FloatingWrapper, {
                positioner: "cursor",
                enabled: !!state,
                placement: "auto-end",
                renderOutsideEditor: !0
            }, react.createElement("div", {
                ...getMenuProps(),
                className: (0,
                remirror_core_helpers.cx)(remirror_theme.T4.MENTION_ATOM_POPUP_WRAPPER)
            }, state && (0,
            remirror_core_helpers.yD)(hookProps.items) ? react.createElement(ZeroItemsComponent, null) : hookProps.items.map((item,index)=>{
                let isHighlighted = indexIsSelected(index)
                  , isHovered = indexIsHovered(index);
                return react.createElement("div", {
                    key: item.id,
                    className: (0,
                    remirror_core_helpers.cx)(remirror_theme.T4.MENTION_ATOM_POPUP_ITEM, isHighlighted && remirror_theme.T4.MENTION_ATOM_POPUP_HIGHLIGHT, isHovered && remirror_theme.T4.MENTION_ATOM_POPUP_HOVERED),
                    ...getItemProps({
                        onClick() {
                            null == state || state.command(item),
                            focus()
                        },
                        item,
                        index
                    })
                }, react.createElement(ItemComponent, {
                    item,
                    state
                }))
            }
            )))
        }
        function DefaultItemComponent(props) {
            return react.createElement("span", {
                className: remirror_theme.T4.MENTION_ATOM_POPUP_NAME
            }, props.item.label)
        }
        var DefaultZeroItemsComponent = ()=>{
            let {t} = (0,
            remirror_react_core.QT)();
            return react.createElement("span", {
                className: remirror_theme.T4.MENTION_ATOM_ZERO_ITEMS
            }, t(remirror_messages.ri.NO_ITEMS_AVAILABLE))
        }
        ;
        (0,
        react.createContext)({});
        var Toolbar = props=>react.createElement(Stack, {
            direction: "row",
            spacing: 1,
            sx: {
                backgroundColor: "background.paper",
                overflowX: "auto"
            },
            ...props
        })
          , DEFAULT_MODIFIERS = [{
            name: "offset",
            options: {
                offset: [0, 8]
            }
        }]
          , FloatingToolbar = ({positioner="selection", children, ...rest})=>{
            let {ref, x, y, width, height, active} = (0,
            remirror_react_hooks.GB)(()=>(0,
            remirror_extension_positioner.$7)(positioner), [positioner])
              , [anchorEl,setAnchorEl] = (0,
            react.useState)(null)
              , inlineStyle = (0,
            react.useMemo)(()=>({
                position: "absolute",
                pointerEvents: "none",
                left: x,
                top: y,
                width,
                height
            }), [x, y, width, height])
              , combinedSelectionRefs = (0,
            react.useCallback)(elem=>{
                setAnchorEl(elem),
                null == ref || ref(elem)
            }
            , [ref]);
            return react.createElement(react.Fragment, null, react.createElement("div", {
                ref: combinedSelectionRefs,
                style: inlineStyle
            }), react.createElement(Popper, {
                placement: "top",
                modifiers: DEFAULT_MODIFIERS,
                ...rest,
                open: active,
                anchorEl
            }, react.createElement(Toolbar, null, children ? react.createElement(react.Fragment, null, children) : react.createElement(FormattingButtonGroup, null))))
        }
    },
    46376: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            bg: function() {
                return useEditorFocus
            },
            og: function() {
                return useKeymap
            },
            HK: function() {
                return useMentionAtom
            },
            GB: function() {
                return usePositioner
            }
        });
        var cb, mod, mod1, target, statusDiv, remirror_extension_events = __webpack_require__(86924), remirror_react_core = __webpack_require__(16263), react = __webpack_require__(2784), remirror_core_utils = __webpack_require__(85775), esm = __webpack_require__(43352), remirror_core_helpers = __webpack_require__(62120), composeRefs = __webpack_require__(42719), useIsomorphicLayoutEffect = "undefined" != typeof window && window.document && window.document.createElement ? react.useLayoutEffect : react.useEffect, serverHandoffComplete = !1, id = 0, genId = function() {
            return ++id
        }, getStatusDiv = (doc=document)=>(statusDiv || ((statusDiv = doc.createElement("div")).setAttribute("id", "a11y-status-message"),
        statusDiv.setAttribute("role", "status"),
        statusDiv.setAttribute("aria-live", "polite"),
        statusDiv.setAttribute("aria-relevant", "additions text"),
        Object.assign(statusDiv.style, {
            border: "0",
            clip: "rect(0 0 0 0)",
            height: "1px",
            margin: "-1px",
            overflow: "hidden",
            padding: "0",
            position: "absolute",
            width: "1px"
        }),
        doc.body.append(statusDiv)),
        statusDiv), cleanupStatus = (0,
        esm.D)(500, ()=>{
            getStatusDiv().textContent = ""
        }
        ), setStatus = (status,doc)=>{
            let div = getStatusDiv(doc);
            status && (div.textContent = status,
            cleanupStatus())
        }
        ;
        function t(t) {
            return "object" == typeof t && null != t && 1 === t.nodeType
        }
        function e(t, e) {
            return (!e || "hidden" !== t) && "visible" !== t && "clip" !== t
        }
        function n(t, n) {
            if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
                var e1, r = getComputedStyle(t, null);
                return e(r.overflowY, n) || e(r.overflowX, n) || !!(e1 = function(t) {
                    if (!t.ownerDocument || !t.ownerDocument.defaultView)
                        return null;
                    try {
                        return t.ownerDocument.defaultView.frameElement
                    } catch (t1) {
                        return null
                    }
                }(t)) && (e1.clientHeight < t.scrollHeight || e1.clientWidth < t.scrollWidth)
            }
            return !1
        }
        function r(t, e, n, r, i, o, l, d) {
            return o < t && l > e || o > t && l < e ? 0 : o <= t && d <= n || l >= e && d >= n ? o - t - r : l > e && d < n || o < t && d > n ? l - e + i : 0
        }
        var tiny_warning_esm = __webpack_require__(55518)
          , index_es = __webpack_require__(42142)
          , object_omit = __webpack_require__(13e3)
          , object_omit_default = __webpack_require__.n(object_omit)
          , __create = Object.create
          , __defProp = Object.defineProperty
          , __getOwnPropDesc = Object.getOwnPropertyDescriptor
          , __getOwnPropNames = Object.getOwnPropertyNames
          , __getProtoOf = Object.getPrototypeOf
          , __hasOwnProp = Object.prototype.hasOwnProperty
          , require_fast_shallow_equal = (cb = {
            "node_modules/.pnpm/fast-shallow-equal@1.0.0/node_modules/fast-shallow-equal/index.js"(exports) {
                var keyList = Object.keys;
                exports.equal = function(a, b) {
                    if (a === b)
                        return !0;
                    if (!(a instanceof Object) || !(b instanceof Object))
                        return !1;
                    for (var keys2 = keyList(a), length = keys2.length, i = 0; i < length; i++)
                        if (!(keys2[i]in b))
                            return !1;
                    for (var i = 0; i < length; i++)
                        if (a[keys2[i]] !== b[keys2[i]])
                            return !1;
                    return length === keyList(b).length
                }
            }
        },
        function() {
            return mod || (0,
            cb[__getOwnPropNames(cb)[0]])((mod = {
                exports: {}
            }).exports, mod),
            mod.exports
        }
        )
          , isPrimitive = function(val) {
            return val !== Object(val)
        }
          , useCustomCompareEffect_default = function(effect, deps, depsEqual) {
            deps instanceof Array && deps.length || console.warn("`useCustomCompareEffect` should not be used with no dependencies. Use React.useEffect instead."),
            deps.every(isPrimitive) && console.warn("`useCustomCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead."),
            "function" != typeof depsEqual && console.warn("`useCustomCompareEffect` should be used with depsEqual callback for comparing deps list");
            var ref = (0,
            react.useRef)(void 0);
            ref.current && depsEqual(deps, ref.current) || (ref.current = deps),
            (0,
            react.useEffect)(effect, ref.current)
        }
          , useEffectOnce_default = function(effect) {
            (0,
            react.useEffect)(effect, [])
        }
          , import_fast_shallow_equal = (target = null != (mod1 = require_fast_shallow_equal()) ? __create(__getProtoOf(mod1)) : {},
        ((to,from,except,desc)=>{
            if (from && "object" == typeof from || "function" == typeof from)
                for (let key of __getOwnPropNames(from))
                    __hasOwnProp.call(to, key) || void 0 === key || __defProp(to, key, {
                        get: ()=>from[key],
                        enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                    });
            return to
        }
        )(mod1 && mod1.__esModule ? target : __defProp(target, "default", {
            value: mod1,
            enumerable: !0
        }), mod1))
          , isPrimitive2 = function(val) {
            return val !== Object(val)
        }
          , shallowEqualDepsList = function(prevDeps, nextDeps) {
            return prevDeps.every(function(dep, index) {
                return (0,
                import_fast_shallow_equal.equal)(dep, nextDeps[index])
            })
        }
          , useShallowCompareEffect_default = function(effect, deps) {
            deps instanceof Array && deps.length || console.warn("`useShallowCompareEffect` should not be used with no dependencies. Use React.useEffect instead."),
            deps.every(isPrimitive2) && console.warn("`useShallowCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead."),
            useCustomCompareEffect_default(effect, deps, shallowEqualDepsList)
        }
          , multishift_composeRefs = "object" == typeof composeRefs.Z && composeRefs.Z.__esModule && composeRefs.Z.default ? composeRefs.Z.default : composeRefs.Z
          , SPECIAL_INPUT_KEYS = ["ArrowDown", "ArrowUp", "Enter", "Escape"]
          , SPECIAL_MENU_KEYS = ["ArrowDown", "ArrowUp", "Space", "Tab", "Enter", "Escape", "Home", "End", "SelectAll"]
          , SPECIAL_TOGGLE_BUTTON_KEYS = ["ArrowDown", "ArrowUp", "Space"]
          , Type = {
            Select: "select",
            ComboBox: "combobox",
            ControlledMenu: "controlled-menu"
        }
          , MultishiftActionTypes = {
            SelectItems: "$$__SELECT_ITEMS__",
            SelectItem: "$$__SELECT_ITEM__",
            RemoveSelectedItems: "$$_REMOVE__SELECTED_ITEMS__",
            RemoveSelectedItem: "$$__REMOVE_SELECTED_ITEM__",
            ClearSelection: "$$__CLEAR_SELECTION__",
            SetHoverItemIndex: "$$__SET_HOVER_ITEM_INDEX__",
            ToggleMenu: "$$__TOGGLE_MENU__",
            CloseMenu: "$$__CLOSE_MENU__",
            OpenMenu: "$$__OPEN_MENU__",
            SetHighlightedIndexes: "$$__SET_HIGHLIGHTED_INDEXES__",
            SetHighlightedIndex: "$$__SET_HIGHLIGHTED_INDEX__",
            ClearHighlighted: "$$__CLEAR_HIGHLIGHTED__",
            ClearHover: "$$__CLEAR_HOVER__",
            Reset: "$$__RESET__",
            SetState: "$$__SET_STATE__",
            ItemMouseMove: "$$__ITEM_MOUSE_MOVE__",
            ItemMouseLeave: "$$__ITEM_MOUSE_LEAVE__",
            ItemClick: "$$__ITEM_CLICK__",
            ToggleButtonClick: "$$__TOGGLE_BUTTON_CLICK__",
            ToggleButtonBlur: "$$__TOGGLE_BUTTON_BLUR__",
            ToggleButtonSpecialKeyDown: "$$__TOGGLE_BUTTON_SPECIAL_KEY_DOWN__",
            MenuBlur: "$$__MENU_BLUR__",
            MenuSpecialKeyDown: "$$__MENU_SPECIAL_KEY_DOWN__",
            MenuCharacterKeyDown: "$$__MENU_CHARACTER_KEY_DOWN__",
            InputBlur: "$$__INPUT_BLUR__",
            InputSpecialKeyDown: "$$__INPUT_SPECIAL_KEY_DOWN__",
            ClearJumpText: "$$__CLEAR_JUMP_TEXT__",
            InputValueChange: "$$__INPUT_VALUE_CHANGE__",
            ClearInputValue: "$$__CLEAR_INPUT_VALUE__",
            OuterMouseUp: "$$__OUTER_MOUSE_UP__",
            OuterTouchEnd: "$$__OUTER_TOUCH_END__"
        }
          , Actions = {
            itemMouseMove: function(payload) {
                return {
                    type: MultishiftActionTypes.ItemMouseMove,
                    payload
                }
            },
            itemMouseLeave: function(payload) {
                return {
                    type: MultishiftActionTypes.ItemMouseLeave,
                    payload
                }
            },
            itemClick: function(payload) {
                return {
                    type: MultishiftActionTypes.ItemClick,
                    payload
                }
            },
            menuBlur: function() {
                return {
                    type: MultishiftActionTypes.MenuBlur
                }
            },
            toggleButtonBlur: function() {
                return {
                    type: MultishiftActionTypes.ToggleButtonBlur
                }
            },
            inputBlur: function() {
                return {
                    type: MultishiftActionTypes.InputBlur
                }
            },
            toggleButtonClick: function() {
                return {
                    type: MultishiftActionTypes.ToggleButtonClick
                }
            },
            menuSpecialKeyDown: function(payload) {
                return {
                    type: MultishiftActionTypes.MenuSpecialKeyDown,
                    payload
                }
            },
            toggleButtonSpecialKeyDown: function(payload) {
                return {
                    type: MultishiftActionTypes.ToggleButtonSpecialKeyDown,
                    payload
                }
            },
            inputSpecialKeyDown: function(payload) {
                return {
                    type: MultishiftActionTypes.InputSpecialKeyDown,
                    payload
                }
            },
            menuCharacterKeyDown: function(payload) {
                return {
                    type: MultishiftActionTypes.MenuCharacterKeyDown,
                    payload
                }
            },
            outerTouchEnd: function() {
                return {
                    type: MultishiftActionTypes.OuterTouchEnd
                }
            },
            outerMouseUp: function() {
                return {
                    type: MultishiftActionTypes.OuterMouseUp
                }
            },
            selectItems: function(items, keepHighlights=!1) {
                return {
                    type: MultishiftActionTypes.SelectItems,
                    payload: {
                        items,
                        keepHighlights
                    }
                }
            },
            selectItem: function(item, keepHighlights=!1) {
                return {
                    type: MultishiftActionTypes.SelectItem,
                    payload: {
                        items: [item],
                        keepHighlights
                    }
                }
            },
            removeSelectedItems: function(items, keepHighlights=!1) {
                return {
                    type: MultishiftActionTypes.RemoveSelectedItems,
                    payload: {
                        items,
                        keepHighlights
                    }
                }
            },
            removeSelectedItem: function(item, keepHighlights=!1) {
                return {
                    type: MultishiftActionTypes.RemoveSelectedItem,
                    payload: {
                        items: [item],
                        keepHighlights
                    }
                }
            },
            setState: function(payload) {
                return {
                    type: MultishiftActionTypes.SetState,
                    payload
                }
            },
            clearSelection: function() {
                return {
                    type: MultishiftActionTypes.ClearSelection
                }
            },
            setHoverItemIndex: function(payload) {
                return {
                    type: MultishiftActionTypes.SetHoverItemIndex,
                    payload
                }
            },
            inputValueChange: function(payload) {
                return {
                    type: MultishiftActionTypes.InputValueChange,
                    payload
                }
            },
            clearInputValue: function() {
                return {
                    type: MultishiftActionTypes.ClearInputValue
                }
            },
            toggleMenu: function() {
                return {
                    type: MultishiftActionTypes.ToggleMenu
                }
            },
            closeMenu: function() {
                return {
                    type: MultishiftActionTypes.CloseMenu
                }
            },
            openMenu: function() {
                return {
                    type: MultishiftActionTypes.OpenMenu
                }
            },
            setHighlightedIndexes: function(payload) {
                return {
                    type: MultishiftActionTypes.SetHighlightedIndexes,
                    payload
                }
            },
            setHighlightedIndex: function(index) {
                return {
                    type: MultishiftActionTypes.SetHighlightedIndex,
                    payload: [index]
                }
            },
            clearHighlighted: function() {
                return {
                    type: MultishiftActionTypes.ClearHighlighted
                }
            },
            reset: function() {
                return {
                    type: MultishiftActionTypes.Reset
                }
            },
            clearJumpText: function() {
                return {
                    type: MultishiftActionTypes.ClearJumpText
                }
            }
        }
          , computeScrollIntoView = (0,
        remirror_core_helpers.bH)(function(e, i) {
            var o = window
              , l = i.scrollMode
              , d = i.block
              , f = i.inline
              , h = i.boundary
              , u = i.skipOverflowHiddenElements
              , s = "function" == typeof h ? h : function(t) {
                return t !== h
            }
            ;
            if (!t(e))
                throw TypeError("Invalid target");
            for (var a, c, g = document.scrollingElement || document.documentElement, p = [], m = e; t(m) && s(m); ) {
                if ((m = null == (c = (a = m).parentElement) ? a.getRootNode().host || null : c) === g) {
                    p.push(m);
                    break
                }
                null != m && m === document.body && n(m) && !n(document.documentElement) || null != m && n(m, u) && p.push(m)
            }
            for (var w = o.visualViewport ? o.visualViewport.width : innerWidth, v = o.visualViewport ? o.visualViewport.height : innerHeight, W = window.scrollX || pageXOffset, H = window.scrollY || pageYOffset, b = e.getBoundingClientRect(), y = b.height, E = b.width, M = b.top, V = b.right, x = b.bottom, I = b.left, C = "start" === d || "nearest" === d ? M : "end" === d ? x : M + y / 2, R = "center" === f ? I + E / 2 : "end" === f ? V : I, T = [], k = 0; k < p.length; k++) {
                var B = p[k]
                  , D = B.getBoundingClientRect()
                  , O = D.height
                  , X = D.width
                  , Y = D.top
                  , L = D.right
                  , S = D.bottom
                  , j = D.left;
                if ("if-needed" === l && M >= 0 && I >= 0 && x <= v && V <= w && M >= Y && x <= S && I >= j && V <= L)
                    break;
                var N = getComputedStyle(B)
                  , q = parseInt(N.borderLeftWidth, 10)
                  , z = parseInt(N.borderTopWidth, 10)
                  , A = parseInt(N.borderRightWidth, 10)
                  , F = parseInt(N.borderBottomWidth, 10)
                  , G = 0
                  , J = 0
                  , K = "offsetWidth"in B ? B.offsetWidth - B.clientWidth - q - A : 0
                  , P = "offsetHeight"in B ? B.offsetHeight - B.clientHeight - z - F : 0
                  , Q = "offsetWidth"in B ? 0 === B.offsetWidth ? 0 : X / B.offsetWidth : 0
                  , U = "offsetHeight"in B ? 0 === B.offsetHeight ? 0 : O / B.offsetHeight : 0;
                if (g === B)
                    G = "start" === d ? C : "end" === d ? C - v : "nearest" === d ? r(H, H + v, v, z, F, H + C, H + C + y, y) : C - v / 2,
                    J = "start" === f ? R : "center" === f ? R - w / 2 : "end" === f ? R - w : r(W, W + w, w, q, A, W + R, W + R + E, E),
                    G = Math.max(0, G + H),
                    J = Math.max(0, J + W);
                else {
                    G = "start" === d ? C - Y - z : "end" === d ? C - S + F + P : "nearest" === d ? r(Y, S, O, z, F + P, C, C + y, y) : C - (Y + O / 2) + P / 2,
                    J = "start" === f ? R - j - q : "center" === f ? R - (j + X / 2) + K / 2 : "end" === f ? R - L + A + K : r(j, L, X, q, A + K, R, R + E, E);
                    var Z = B.scrollLeft
                      , $ = B.scrollTop;
                    C += $ - (G = Math.max(0, Math.min($ + G / U, B.scrollHeight - O / U + P))),
                    R += Z - (J = Math.max(0, Math.min(Z + J / Q, B.scrollWidth - X / Q + K)))
                }
                T.push({
                    el: B,
                    top: G,
                    left: J
                })
            }
            return T
        });
        function defaultGetItemId(item) {
            return item
        }
        function defaultItemToString(item) {
            return item ? String(item) : ""
        }
        function defaultItemsToString(selectedItems, itemToString=defaultItemToString) {
            return selectedItems.map(itemToString).join(", ")
        }
        var DEFAULT_STATE = {
            selectedItems: [],
            jumpText: "",
            isOpen: !1,
            inputValue: "",
            hoveredIndex: -1,
            highlightedIndexes: [],
            highlightedGroupStartIndex: -1,
            highlightedGroupEndIndex: void 0
        }
          , noUndefined = (fallback,values)=>{
            for (let value of values)
                if (!(0,
                remirror_core_helpers.o8)(value))
                    return value;
            return fallback
        }
        ;
        function getDefaultState(defaults) {
            let {defaultSelectedItems, defaultJumpText, defaultIsOpen, defaultInputValue, defaultHoveredIndex, defaultHighlightedIndexes, defaultHighlightedGroupStartIndex, defaultHighlightedGroupEndIndex} = defaults;
            return {
                selectedItems: null != defaultSelectedItems ? defaultSelectedItems : DEFAULT_STATE.selectedItems,
                jumpText: noUndefined(DEFAULT_STATE.jumpText, [defaultJumpText]),
                isOpen: noUndefined(DEFAULT_STATE.isOpen, [defaultIsOpen]),
                inputValue: noUndefined(DEFAULT_STATE.inputValue, [defaultInputValue]),
                hoveredIndex: noUndefined(DEFAULT_STATE.hoveredIndex, [defaultHoveredIndex]),
                highlightedIndexes: null != defaultHighlightedIndexes ? defaultHighlightedIndexes : DEFAULT_STATE.highlightedIndexes,
                highlightedGroupStartIndex: noUndefined(DEFAULT_STATE.highlightedGroupStartIndex, [defaultHighlightedGroupStartIndex]),
                highlightedGroupEndIndex: noUndefined(DEFAULT_STATE.highlightedGroupEndIndex, [defaultHighlightedGroupEndIndex])
            }
        }
        function getHighlightReset(defaultState) {
            return {
                highlightedGroupEndIndex: defaultState.highlightedGroupEndIndex,
                highlightedGroupStartIndex: defaultState.highlightedGroupStartIndex,
                highlightedIndexes: defaultState.highlightedIndexes,
                hoveredIndex: defaultState.hoveredIndex
            }
        }
        var changeHandlerMap = {
            selectedItems: ({onSelectedItemsChange},{state})=>null == onSelectedItemsChange ? void 0 : onSelectedItemsChange(state.selectedItems, state),
            jumpText: ({onJumpTextChange},{state})=>null == onJumpTextChange ? void 0 : onJumpTextChange(state.jumpText, state),
            isOpen: ({onIsOpenChange},{state})=>null == onIsOpenChange ? void 0 : onIsOpenChange(state.isOpen, state),
            inputValue: ({onInputValueChange},{state})=>null == onInputValueChange ? void 0 : onInputValueChange(state.inputValue, state),
            hoveredIndex: ({onHoveredIndexChange},{state})=>null == onHoveredIndexChange ? void 0 : onHoveredIndexChange(state.hoveredIndex, state),
            highlightedIndexes: ({onHighlightedIndexesChange},{state})=>null == onHighlightedIndexesChange ? void 0 : onHighlightedIndexesChange(state.highlightedIndexes, state),
            highlightedGroupStartIndex: ({onHighlightedGroupStartIndexChange},{state})=>null == onHighlightedGroupStartIndexChange ? void 0 : onHighlightedGroupStartIndexChange(state.highlightedGroupStartIndex, state),
            highlightedGroupEndIndex: ({onHighlightedGroupEndIndexChange},{state})=>null == onHighlightedGroupEndIndexChange ? void 0 : onHighlightedGroupEndIndexChange(state.highlightedGroupEndIndex, state)
        };
        function getNextWrappingIndex({start, steps, size, circular}) {
            if (0 === size)
                return;
            if (-1 === start)
                return steps > 0 ? 0 : size - 1;
            let nextIndex = start + steps;
            return nextIndex < 0 ? circular ? size - 1 : 0 : nextIndex >= size ? circular ? 0 : size - 1 : nextIndex
        }
        function isValidIndex(index) {
            return (0,
            remirror_core_helpers.hj)(index) && index > -1
        }
        function getNextWrappingIndexes(params) {
            let index = getNextWrappingIndex(params);
            return isValidIndex(index) ? [index] : []
        }
        function getHighlightedIndexOnOpen(props, state, offset, getItemId) {
            let {items, initialHighlightedIndexes, defaultHighlightedIndexes} = props
              , {selectedItems, highlightedIndexes} = state;
            if (!(0,
            remirror_core_helpers.o8)(initialHighlightedIndexes) && !(0,
            remirror_core_helpers.yD)(highlightedIndexes))
                return initialHighlightedIndexes;
            if (defaultHighlightedIndexes)
                return defaultHighlightedIndexes;
            if (!(0,
            remirror_core_helpers.yD)(selectedItems)) {
                let idsOfItems = items.map(getItemId)
                  , index = selectedItems.map(selectedItem=>idsOfItems.indexOf(getItemId(selectedItem))).findIndex(isValidIndex);
                return isValidIndex(index) ? 0 === offset ? [index] : getNextWrappingIndexes({
                    steps: offset,
                    start: index,
                    size: items.length,
                    circular: !1
                }) : []
            }
            return 0 === offset ? [0] : offset < 0 ? [items.length - 1] : [0]
        }
        function getMostRecentHighlightIndex(lastHighlight) {
            let {highlightedGroupEndIndex, highlightedGroupStartIndex, highlightedIndexes} = lastHighlight
              , lastIndex = (0,
            remirror_core_helpers.Z$)(highlightedIndexes);
            return isValidIndex(highlightedGroupEndIndex) ? highlightedGroupEndIndex : isValidIndex(highlightedGroupStartIndex) ? highlightedGroupStartIndex : isValidIndex(lastIndex) ? lastIndex : -1
        }
        var isMac = ()=>/Mac|iPod|iPhone|iPad/.test(navigator.platform);
        function addItems(currentItems, newItems, getItemId, multiple) {
            return multiple ? (0,
            remirror_core_helpers.uw)([...currentItems, ...newItems], getItemId, !0) : (0,
            remirror_core_helpers.qn)(newItems, 1)
        }
        function removeItems(currentItems, removalItems, getItemId) {
            return currentItems.filter(prevItem=>!removalItems.some(newItem=>getItemId(newItem) === getItemId(prevItem)))
        }
        function toggleSelectedItems(currentItems, toggleItems, getItemId, multiple) {
            return !(0,
            remirror_core_helpers.yD)(toggleItems) && toggleItems.every(newItem=>currentItems.some(item=>getItemId(item) === getItemId(newItem))) ? removeItems(currentItems, toggleItems, getItemId) : addItems(currentItems, toggleItems, getItemId, multiple)
        }
        function getHighlightedIndexes({start, end, indexes, items, hoveredIndex}) {
            let max = items.length - 1
              , groupIndexes = isValidIndex(start) ? (0,
            remirror_core_helpers.w6)((0,
            remirror_core_helpers.uZ)({
                min: 0,
                max,
                value: start
            }), (0,
            remirror_core_helpers.uZ)({
                min: 0,
                max,
                value: isValidIndex(end) ? end : start
            })) : []
              , hoveredIndexes = isValidIndex(hoveredIndex) ? [hoveredIndex] : [];
            return (0,
            remirror_core_helpers.Nb)([...hoveredIndexes, ...indexes, ...groupIndexes], !0).filter(index=>0 <= index && index <= max)
        }
        function checkItemHighlighted(index, options) {
            let {start, end, indexes} = options;
            return indexes.includes(index) || (0,
            remirror_core_helpers.uh)(index, start, end)
        }
        function omitUnchangedState(changes, {state, getItemId}) {
            return object_omit_default()(changes, (value,key)=>{
                if ((0,
                remirror_core_helpers.kJ)(value)) {
                    if ("selectedItems" === key)
                        return value.length !== state.selectedItems.length || value.some((item,index)=>getItemId(item) !== getItemId((0,
                        remirror_core_helpers.fp)(state.selectedItems, index)));
                    if ("highlightedIndexes" === key)
                        return value.length !== state.highlightedIndexes.length || value.some((val,index)=>val !== state.highlightedIndexes[index])
                }
                return value !== state[key]
            }
            )
        }
        function getKeyName(event) {
            let key = (0,
            index_es.YG)(event.nativeEvent);
            return " " === key ? "Space" : ("a" === key.toLowerCase() && isMac() ? event.metaKey : event.ctrlKey) ? "SelectAll" : key
        }
        function getChangesFromMenuKeyDown({modifiers, defaultState, state, key, items, getItemId, props, disabled}) {
            let shiftKeyPressed = modifiers.includes("shiftKey")
              , metaKeyPressed = modifiers.includes("metaKey")
              , params = {
                state,
                getItemId
            }
              , mostRecentHighlightIndex = getMostRecentHighlightIndex(state)
              , highlightReset = getHighlightReset(defaultState)
              , indexes = getHighlightedIndexes({
                start: state.highlightedGroupStartIndex,
                end: state.highlightedGroupEndIndex,
                indexes: state.highlightedIndexes,
                hoveredIndex: props.includeHoveredIndexInSelection ? state.hoveredIndex : void 0,
                items
            }).filter(index=>!disabled.includes(index));
            if ("Escape" === key)
                return omitUnchangedState({
                    ...getHighlightReset(defaultState),
                    isOpen: !1
                }, params);
            if ("Enter" === key || "Space" === key) {
                let highlightedItems = indexes.map(index=>(0,
                remirror_core_helpers.fp)(items, index))
                  , highlights = props.multiple ? {} : {
                    ...highlightReset,
                    highlightedIndexes: [mostRecentHighlightIndex]
                }
                  , selectedItems = toggleSelectedItems(state.selectedItems, highlightedItems, getItemId, props.multiple)
                  , changes = {
                    ...highlights,
                    isOpen: !!props.multiple || defaultState.isOpen,
                    jumpText: defaultState.jumpText,
                    selectedItems
                };
                return omitUnchangedState(changes, params)
            }
            if ("SelectAll" === key) {
                let changes1 = {
                    highlightedIndexes: (0,
                    remirror_core_helpers.w6)(0, items.length - 1).filter(index=>!disabled.includes(index)),
                    highlightedGroupStartIndex: mostRecentHighlightIndex,
                    highlightedGroupEndIndex: defaultState.highlightedGroupEndIndex
                };
                return omitUnchangedState(changes1, params)
            }
            if (props.multiple && ("ArrowDown" === key || "ArrowUp" === key) && shiftKeyPressed) {
                let isDown = "ArrowDown" === key
                  , index = getNextWrappingIndex({
                    start: mostRecentHighlightIndex,
                    size: items.length,
                    circular: !1,
                    steps: isDown ? 1 : -1
                })
                  , endIndex = metaKeyPressed ? isDown ? items.length - 1 : 0 : index
                  , changes2 = isValidIndex(state.highlightedGroupStartIndex) ? {
                    highlightedGroupEndIndex: endIndex
                } : isValidIndex(mostRecentHighlightIndex) ? {
                    highlightedGroupStartIndex: mostRecentHighlightIndex,
                    highlightedGroupEndIndex: endIndex
                } : {
                    highlightedGroupStartIndex: index,
                    highlightedGroupEndIndex: endIndex
                };
                return omitUnchangedState(changes2, params)
            }
            if ("Home" === key || "ArrowUp" === key && metaKeyPressed || "End" === key || "ArrowDown" === key && metaKeyPressed) {
                let changes3 = {
                    highlightedIndexes: "Home" === key || "ArrowUp" === key ? [0] : [items.length - 1]
                };
                return omitUnchangedState(changes3, params)
            }
            if ("ArrowDown" === key || "ArrowUp" === key) {
                let highlightedIndexes = getNextWrappingIndexes({
                    start: mostRecentHighlightIndex,
                    size: items.length,
                    circular: !0,
                    steps: "ArrowDown" === key ? 1 : -1
                })
                  , changes4 = {
                    ...getHighlightReset(defaultState),
                    highlightedIndexes
                };
                return omitUnchangedState(changes4, params)
            }
            return "Tab" === key ? omitUnchangedState({
                isOpen: !1
            }, params) : {}
        }
        var getChangesFromInputKeyDown = params=>getChangesFromMenuKeyDown(params)
          , modifierKeys = ["altKey", "shiftKey", "metaKey", "ctrlKey"];
        function getModifiers(event) {
            return modifierKeys.filter(key=>event[key])
        }
        function callAllEventHandlers(...fns) {
            return (event,...args)=>{
                fns.some(fn=>!!fn && !0 === fn(event, ...args))
            }
        }
        function createKeyDownPayload(event, key, disabled) {
            return {
                event,
                key,
                modifiers: getModifiers(event),
                disabled
            }
        }
        var isHTMLElement = domNode=>(0,
        remirror_core_helpers.Kn)(domNode) && (0,
        remirror_core_helpers.hj)(domNode.nodeType) && (0,
        remirror_core_helpers.HD)(domNode.nodeName) && 1 === domNode.nodeType;
        function isOrContainsNode(parent, child) {
            return parent === child || parent.contains(child)
        }
        var multishiftReducer = (state,action,props)=>{
            let changes = (0,
            remirror_core_helpers.Ry)()
              , defaultState = getDefaultState(props)
              , {multiple, items, getItemId=defaultGetItemId, autoSelectOnBlur=!0, itemToString, initialHighlightedIndexes} = props
              , highlightReset = getHighlightReset(defaultState);
            switch (action.type) {
            case MultishiftActionTypes.SelectItems:
            case MultishiftActionTypes.SelectItem:
                {
                    let extra = action.payload.keepHighlights ? {} : highlightReset;
                    changes = {
                        ...extra,
                        selectedItems: addItems(state.selectedItems, action.payload.items, getItemId, multiple)
                    };
                    break
                }
            case MultishiftActionTypes.RemoveSelectedItems:
            case MultishiftActionTypes.RemoveSelectedItem:
                {
                    let extra1 = action.payload.keepHighlights ? {} : highlightReset;
                    changes = {
                        ...extra1,
                        selectedItems: removeItems(state.selectedItems, action.payload.items, getItemId)
                    };
                    break
                }
            case MultishiftActionTypes.ClearSelection:
                changes = {
                    ...highlightReset,
                    selectedItems: []
                };
                break;
            case MultishiftActionTypes.SetHoverItemIndex:
                changes = {
                    ...state,
                    hoveredIndex: action.payload
                };
                break;
            case MultishiftActionTypes.ItemMouseMove:
                changes = {
                    hoveredIndex: action.payload
                };
                break;
            case MultishiftActionTypes.ItemMouseLeave:
                changes = state.hoveredIndex === action.payload ? {
                    hoveredIndex: defaultState.hoveredIndex
                } : {};
                break;
            case MultishiftActionTypes.ItemClick:
                {
                    let {modifiers, index} = action.payload;
                    changes = function({modifiers, items, defaultState, state, index, props, getItemId}) {
                        let selectedItem = items[index]
                          , isOpen = !!props.multiple || defaultState.isOpen
                          , params = {
                            state,
                            getItemId
                        }
                          , defaultReturn = {
                            highlightedGroupEndIndex: defaultState.highlightedGroupEndIndex,
                            highlightedGroupStartIndex: props.multiple ? index : defaultState.highlightedGroupStartIndex
                        };
                        if (!selectedItem)
                            return {
                                ...defaultReturn,
                                isOpen
                            };
                        let selectedItems = toggleSelectedItems(state.selectedItems, [selectedItem], getItemId, props.multiple)
                          , shiftKeyPressed = modifiers.includes("shiftKey")
                          , singleHighlightKeyPressed = modifiers.includes(isMac() ? "metaKey" : "ctrlKey") && 1 === modifiers.length;
                        if (!props.multiple)
                            return {
                                ...defaultReturn,
                                highlightedIndexes: defaultState.highlightedIndexes,
                                selectedItems
                            };
                        if (singleHighlightKeyPressed) {
                            let indexes = getHighlightedIndexes({
                                indexes: state.highlightedIndexes,
                                start: state.highlightedGroupStartIndex,
                                end: state.highlightedGroupEndIndex,
                                hoveredIndex: props.includeHoveredIndexInSelection ? state.hoveredIndex : void 0,
                                items
                            })
                              , isHighlighted = checkItemHighlighted(index, {
                                indexes,
                                start: state.highlightedGroupStartIndex,
                                end: state.highlightedGroupEndIndex
                            })
                              , extra = isHighlighted ? {
                                highlightedIndexes: indexes.filter(ii=>ii !== index),
                                highlightedGroupEndIndex: void 0,
                                highlightedGroupStartIndex: -1
                            } : {
                                highlightedIndexes: indexes,
                                highlightedGroupStartIndex: index
                            }
                              , changes = {
                                ...defaultReturn,
                                ...extra
                            };
                            return omitUnchangedState(changes, params)
                        }
                        if (shiftKeyPressed) {
                            let indexes1 = (0,
                            remirror_core_helpers.Nb)(state.highlightedIndexes, !0)
                              , extra1 = isValidIndex(state.highlightedGroupStartIndex) ? {
                                highlightedIndexes: indexes1,
                                highlightedGroupStartIndex: state.highlightedGroupStartIndex,
                                highlightedGroupEndIndex: index
                            } : {
                                highlightedIndexes: indexes1,
                                highlightedGroupStartIndex: index
                            }
                              , changes1 = {
                                ...defaultReturn,
                                ...extra1
                            };
                            return omitUnchangedState(changes1, params)
                        }
                        return omitUnchangedState({
                            ...defaultReturn,
                            selectedItems,
                            isOpen,
                            highlightedIndexes: defaultState.highlightedIndexes
                        }, params)
                    }({
                        defaultState,
                        state,
                        index,
                        items,
                        modifiers,
                        props,
                        getItemId
                    });
                    break
                }
            case MultishiftActionTypes.InputBlur:
            case MultishiftActionTypes.ToggleButtonBlur:
            case MultishiftActionTypes.MenuBlur:
                {
                    let {highlightedIndexes, selectedItems: selected, highlightedGroupStartIndex, highlightedGroupEndIndex} = state
                      , indexes = getHighlightedIndexes({
                        start: highlightedGroupStartIndex,
                        end: highlightedGroupEndIndex,
                        indexes: highlightedIndexes,
                        items
                    })
                      , extra2 = !(0,
                    remirror_core_helpers.yD)(indexes) && autoSelectOnBlur ? {
                        selectedItems: addItems(selected, indexes.map(index=>(0,
                        remirror_core_helpers.fp)(items, index)), getItemId, multiple)
                    } : {};
                    changes = omitUnchangedState({
                        isOpen: defaultState.isOpen,
                        highlightedIndexes: defaultState.highlightedIndexes,
                        highlightedGroupEndIndex: defaultState.highlightedGroupEndIndex,
                        highlightedGroupStartIndex: defaultState.highlightedGroupStartIndex,
                        hoveredIndex: defaultState.hoveredIndex,
                        jumpText: defaultState.jumpText,
                        ...extra2
                    }, {
                        state,
                        getItemId
                    });
                    break
                }
            case MultishiftActionTypes.MenuSpecialKeyDown:
                {
                    let {key, modifiers: modifiers1, disabled} = action.payload;
                    changes = getChangesFromMenuKeyDown({
                        defaultState,
                        items,
                        key,
                        modifiers: modifiers1,
                        props,
                        state,
                        getItemId,
                        disabled
                    });
                    break
                }
            case MultishiftActionTypes.ToggleButtonSpecialKeyDown:
                {
                    let {key: key1, modifiers: modifiers2, disabled: disabled1} = action.payload;
                    changes = function({key, defaultState, props, getItemId, state}) {
                        let params = {
                            state,
                            getItemId
                        };
                        if ("ArrowDown" === key || "ArrowUp" === key || "Enter" === key || "Space" === key) {
                            let highlights = props.type === Type.Select ? {
                                highlightedIndexes: getHighlightedIndexOnOpen(props, state, "ArrowDown" === key ? 1 : "ArrowUp" === key ? -1 : 0, getItemId)
                            } : {}
                              , changes = {
                                isOpen: !0,
                                ...highlights
                            };
                            return omitUnchangedState(changes, params)
                        }
                        return "Escape" === key ? omitUnchangedState({
                            ...getHighlightReset(defaultState),
                            isOpen: !1
                        }, params) : {}
                    }({
                        defaultState,
                        items,
                        key: key1,
                        modifiers: modifiers2,
                        props,
                        state,
                        getItemId,
                        disabled: disabled1
                    });
                    break
                }
            case MultishiftActionTypes.InputSpecialKeyDown:
                {
                    let {key: key2, modifiers: modifiers3, disabled: disabled2} = action.payload;
                    changes = getChangesFromInputKeyDown({
                        defaultState,
                        items,
                        key: key2,
                        modifiers: modifiers3,
                        props,
                        state,
                        getItemId,
                        disabled: disabled2
                    });
                    break
                }
            case MultishiftActionTypes.MenuCharacterKeyDown:
                {
                    let jumpText = `${state.jumpText}${action.payload}`
                      , indexes1 = function({text, highlightedIndexes, items, itemToString=defaultItemToString}) {
                        let newHighlightedIndex = -1
                          , finder = str=>str.startsWith(text)
                          , itemStrings = items.map(item=>itemToString(item).toLowerCase())
                          , startPosition = (Math.min(...highlightedIndexes) || -1) + 1;
                        if ((newHighlightedIndex = itemStrings.slice(startPosition).findIndex(finder)) > -1)
                            return [newHighlightedIndex + startPosition];
                        let index = itemStrings.slice(0, startPosition).findIndex(finder);
                        return isValidIndex(index) ? [index] : []
                    }({
                        text: jumpText,
                        highlightedIndexes: state.highlightedIndexes,
                        itemToString,
                        items
                    })
                      , extraHighlights = (0,
                    remirror_core_helpers.yD)(indexes1) ? {} : {
                        highlightedIndexes: indexes1
                    };
                    changes = omitUnchangedState({
                        jumpText,
                        ...extraHighlights
                    }, {
                        state,
                        getItemId
                    });
                    break
                }
            case MultishiftActionTypes.ToggleButtonClick:
            case MultishiftActionTypes.ToggleMenu:
                {
                    let indexes2 = getHighlightedIndexOnOpen({
                        defaultHighlightedIndexes: defaultState.highlightedIndexes,
                        initialHighlightedIndexes,
                        items
                    }, state, 0, getItemId);
                    changes = {
                        isOpen: !state.isOpen,
                        highlightedIndexes: state.isOpen ? [] : indexes2
                    };
                    break
                }
            case MultishiftActionTypes.OpenMenu:
                {
                    let highlightedIndexes1 = getHighlightedIndexOnOpen({
                        defaultHighlightedIndexes: defaultState.highlightedIndexes,
                        initialHighlightedIndexes,
                        items
                    }, state, 0, getItemId);
                    changes = {
                        isOpen: !0,
                        highlightedIndexes: highlightedIndexes1,
                        highlightedGroupEndIndex: void 0,
                        highlightedGroupStartIndex: -1
                    };
                    break
                }
            case MultishiftActionTypes.CloseMenu:
                changes = {
                    isOpen: !1
                };
                break;
            case MultishiftActionTypes.SetHighlightedIndexes:
            case MultishiftActionTypes.SetHighlightedIndex:
                changes = {
                    highlightedIndexes: action.payload
                };
                break;
            case MultishiftActionTypes.ClearHighlighted:
                changes = getHighlightReset(defaultState);
                break;
            case MultishiftActionTypes.ClearJumpText:
                changes = {
                    jumpText: ""
                };
                break;
            case MultishiftActionTypes.OuterMouseUp:
            case MultishiftActionTypes.OuterTouchEnd:
                {
                    let {highlightedIndexes: highlightedIndexes2, selectedItems: selected1, highlightedGroupEndIndex: highlightedGroupEndIndex1, highlightedGroupStartIndex: highlightedGroupStartIndex1} = state
                      , indexes3 = getHighlightedIndexes({
                        start: highlightedGroupStartIndex1,
                        end: highlightedGroupEndIndex1,
                        indexes: highlightedIndexes2,
                        items
                    })
                      , highlightedItems = indexes3.map(index=>(0,
                    remirror_core_helpers.fp)(items, index))
                      , extra3 = !(0,
                    remirror_core_helpers.yD)(indexes3) && autoSelectOnBlur ? {
                        selectedItems: addItems(selected1, highlightedItems, getItemId, multiple)
                    } : {};
                    changes = {
                        ...extra3,
                        isOpen: !1,
                        ...highlightReset
                    };
                    break
                }
            case MultishiftActionTypes.Reset:
                changes = defaultState;
                break;
            case MultishiftActionTypes.InputValueChange:
                changes = {
                    ...getHighlightReset(defaultState),
                    isOpen: !0,
                    inputValue: action.payload,
                    jumpText: defaultState.jumpText
                };
                break;
            case MultishiftActionTypes.SetState:
                changes = {
                    ...action.payload
                };
                break;
            default:
                !function(type, message="") {
                    (0,
                    tiny_warning_esm.Z)(!type.startsWith("$$"), message)
                }(action.type, "All internal action types need to be managed")
            }
            return [{
                ...state,
                ...changes
            }, changes]
        }
          , defaultGetA11yStatusMessage = ({items, state: {selectedItems, isOpen}, itemsToString=defaultItemsToString})=>{
            if (!(0,
            remirror_core_helpers.yD)(selectedItems))
                return `${itemsToString(selectedItems)} has been selected.`;
            if ((0,
            remirror_core_helpers.yD)(items))
                return "";
            let resultCount = items.length;
            return isOpen ? 0 === resultCount ? "No results are available" : `${resultCount} result${1 === resultCount ? " is" : "s are"} available, use up and down arrow keys to navigate. Press Enter key to select.` : ""
        }
        ;
        function useEffectOnUpdate(effect, dependencies) {
            let isInitialMount = (0,
            react.useRef)(!0);
            useShallowCompareEffect_default(()=>{
                if (!isInitialMount.current)
                    return effect();
                isInitialMount.current = !1
            }
            , [dependencies])
        }
        var useMultishift = props=>{
            var _a, _b;
            let {type, customA11yStatusMessage, getA11yStatusMessage, items, getItemId=defaultGetItemId, multiple} = props
              , [state,dispatch] = function(props) {
                let {stateReducer, ...rest} = props
                  , initialState = function(initialProps) {
                    let {initialSelectedItems, initialJumpText, initialIsOpen, initialInputValue, initialHoveredIndex, initialHighlightedIndexes, initialHighlightedGroupStartIndex, initialHighlightedGroupEndIndex, selectedItems, jumpText, isOpen, inputValue, hoveredIndex, highlightedIndexes, highlightedGroupStartIndex, highlightedGroupEndIndex, ...props} = initialProps
                      , fallback = getDefaultState(props);
                    return {
                        selectedItems: noUndefined(fallback.selectedItems, [selectedItems, initialSelectedItems]),
                        jumpText: noUndefined(fallback.jumpText, [jumpText, initialJumpText]),
                        isOpen: noUndefined(fallback.isOpen, [isOpen, initialIsOpen]),
                        inputValue: noUndefined(fallback.inputValue, [inputValue, initialInputValue]),
                        hoveredIndex: noUndefined(fallback.hoveredIndex, [hoveredIndex, initialHoveredIndex]),
                        highlightedIndexes: noUndefined(fallback.highlightedIndexes, [highlightedIndexes, initialHighlightedIndexes]),
                        highlightedGroupStartIndex: noUndefined(fallback.highlightedGroupStartIndex, [highlightedGroupStartIndex, initialHighlightedGroupStartIndex]),
                        highlightedGroupEndIndex: noUndefined(fallback.highlightedGroupEndIndex, [highlightedGroupEndIndex, initialHighlightedGroupEndIndex])
                    }
                }(rest);
                return (0,
                react.useReducer)((prevState,action)=>{
                    let[state,changes] = multishiftReducer(prevState, action, rest)
                      , changeset = {
                        changes,
                        state,
                        prevState
                    };
                    return (!function(handlers, changeset) {
                        let {changes, state, prevState} = changeset
                          , changedKeys = (0,
                        remirror_core_helpers.XP)(changes)
                          , {onStateChange} = handlers;
                        changedKeys.forEach(key=>{
                            changeHandlerMap[key](handlers, {
                                changes,
                                state,
                                prevState
                            })
                        }
                        ),
                        !(0,
                        remirror_core_helpers.yD)(changedKeys.length) && onStateChange && onStateChange(changes, state)
                    }(rest, changeset),
                    stateReducer) ? stateReducer(changeset, action, rest) : state
                }
                , initialState)
            }(props)
              , actions = (0,
            react.useMemo)(()=>(function(actionCreators, dispatch) {
                let boundActionCreators = (0,
                remirror_core_helpers.Ry)()
                  , creatorKeys = (0,
                remirror_core_helpers.XP)(actionCreators);
                for (let key of creatorKeys) {
                    let actionCreator = (0,
                    remirror_core_helpers.fp)(actionCreators, key);
                    boundActionCreators[key] = function(actionCreator, dispatch) {
                        return (...args)=>dispatch(actionCreator(...args))
                    }(actionCreator, dispatch)
                }
                return boundActionCreators
            }
            )(Actions, dispatch), [dispatch]);
            !function(props) {
                let {state, items, itemsToString=defaultItemsToString, getA11yStatusMessage=defaultGetA11yStatusMessage, customA11yStatusMessage=""} = props
                  , automaticMessage = getA11yStatusMessage({
                    state,
                    items,
                    itemsToString
                });
                useEffectOnUpdate(()=>{
                    setStatus(automaticMessage)
                }
                , [state.isOpen, state.selectedItems]),
                (0,
                react.useEffect)(()=>{
                    customA11yStatusMessage && setStatus(customA11yStatusMessage)
                }
                , [customA11yStatusMessage])
            }({
                state,
                items,
                customA11yStatusMessage,
                getA11yStatusMessage
            });
            let stateProps = {
                selectedItems: null != (_a = props.selectedItems) ? _a : state.selectedItems,
                jumpText: noUndefined(state.jumpText, [props.jumpText]),
                isOpen: noUndefined(state.isOpen, [props.isOpen]),
                inputValue: noUndefined(state.inputValue, [props.inputValue]),
                hoveredIndex: noUndefined(state.hoveredIndex, [props.hoveredIndex]),
                highlightedIndexes: null != (_b = props.highlightedIndexes) ? _b : state.highlightedIndexes,
                highlightedGroupStartIndex: noUndefined(state.highlightedGroupStartIndex, [props.highlightedGroupStartIndex]),
                highlightedGroupEndIndex: noUndefined(state.highlightedGroupEndIndex, [props.highlightedGroupEndIndex])
            }
              , {highlightedIndexes, highlightedGroupEndIndex, highlightedGroupStartIndex, selectedItems, hoveredIndex, inputValue, isOpen, jumpText} = stateProps
              , {getItemA11yId, labelId, menuId, toggleButtonId, inputId} = function(props) {
                var initialId, _React$useState, id, setId;
                let defaultId = (initialId = serverHandoffComplete ? genId() : null,
                id = (_React$useState = (0,
                react.useState)(initialId))[0],
                setId = _React$useState[1],
                useIsomorphicLayoutEffect(function() {
                    null === id && setId(genId())
                }, []),
                (0,
                react.useEffect)(function() {
                    !1 === serverHandoffComplete && (serverHandoffComplete = !0)
                }, []),
                null != id ? String(id) : void 0);
                return function(defaultId, props=(0,
                remirror_core_helpers.Ry)()) {
                    let {id, labelId, menuId, getItemA11yId, toggleButtonId, inputId} = props
                      , uniqueId = void 0 === id ? `multishift-${defaultId}` : id;
                    return {
                        labelId: null != labelId ? labelId : `${uniqueId}-label`,
                        inputId: null != inputId ? inputId : `${uniqueId}-input`,
                        menuId: null != menuId ? menuId : `${uniqueId}-menu`,
                        getItemA11yId: null != getItemA11yId ? getItemA11yId : index=>`${uniqueId}-item-${null != index ? index : 0}`,
                        toggleButtonId: null != toggleButtonId ? toggleButtonId : `${uniqueId}-toggle-button`
                    }
                }(null != defaultId ? defaultId : "", props)
            }(props)
              , refs = function() {
                let items = (0,
                react.useRef)([])
                  , ignored = (0,
                react.useRef)([])
                  , toggleButton = (0,
                react.useRef)()
                  , input = (0,
                react.useRef)()
                  , menu = (0,
                react.useRef)()
                  , comboBox = (0,
                react.useRef)();
                return items.current = [],
                ignored.current = [],
                (0,
                react.useRef)({
                    toggleButton,
                    input,
                    menu,
                    comboBox,
                    items,
                    ignored
                }).current
            }()
              , shouldScroll = (0,
            react.useRef)(!0)
              , clearJumpText2 = (0,
            esm.D)(500, actions.clearJumpText)
              , disabled = (0,
            react.useRef)([]);
            disabled.current = [];
            let contextRef = function(refs, state, {outerMouseUp: outerMouseUp2, outerTouchEnd: outerTouchEnd2}) {
                let context = (0,
                react.useRef)({
                    isMouseDown: !1,
                    isTouchMove: !1,
                    lastBlurred: void 0
                })
                  , isOpen = (0,
                react.useRef)(state.isOpen);
                isOpen.current = state.isOpen;
                let targetWithinMultishift = (target,checkActiveElement=!0)=>[refs.comboBox.current, refs.menu.current, refs.toggleButton.current, refs.input.current, ...refs.ignored.current, ...refs.items.current].some(node=>node && (isOrContainsNode(node, target) || checkActiveElement && isOrContainsNode(node, window.document.activeElement)));
                return useEffectOnce_default(()=>{
                    let onMouseDown = ()=>{
                        context.current.isMouseDown = !0
                    }
                      , onMouseUp = event=>{
                        context.current.isMouseDown = !1;
                        let contextWithinMultishift = targetWithinMultishift(event.target);
                        !contextWithinMultishift && isOpen.current && outerMouseUp2()
                    }
                      , onTouchStart = ()=>{
                        context.current.isTouchMove = !1
                    }
                      , onTouchMove = ()=>{
                        context.current.isTouchMove = !0
                    }
                      , onTouchEnd = event=>{
                        let contextWithinMultishift = targetWithinMultishift(event.target, !1);
                        context.current.isTouchMove || contextWithinMultishift || !isOpen.current || outerTouchEnd2()
                    }
                    ;
                    return window.addEventListener("mousedown", onMouseDown),
                    window.addEventListener("mouseup", onMouseUp),
                    window.addEventListener("touchstart", onTouchStart),
                    window.addEventListener("touchmove", onTouchMove),
                    window.addEventListener("touchend", onTouchEnd),
                    ()=>{
                        window.removeEventListener("mousedown", onMouseDown),
                        window.removeEventListener("mouseup", onMouseUp),
                        window.removeEventListener("touchstart", onTouchStart),
                        window.removeEventListener("touchmove", onTouchMove),
                        window.removeEventListener("touchend", onTouchEnd)
                    }
                }
                ),
                context
            }(refs, stateProps, {
                outerMouseUp: actions.outerMouseUp,
                outerTouchEnd: actions.outerTouchEnd
            })
              , [setInternalTimeout,clearTimeouts] = function() {
                let timeoutIds = (0,
                react.useRef)([])
                  , setHookTimeout = (fn,time=1)=>{
                    let id = setTimeout(()=>{
                        timeoutIds.current = timeoutIds.current.filter(timeoutId=>timeoutId !== id),
                        fn()
                    }
                    , time);
                    timeoutIds.current.push(id)
                }
                  , clearHookTimeouts = ()=>{
                    timeoutIds.current.forEach(id=>{
                        clearTimeout(id)
                    }
                    ),
                    timeoutIds.current = []
                }
                ;
                return useEffectOnce_default(()=>clearHookTimeouts),
                [setHookTimeout, clearHookTimeouts]
            }()
              , mostRecentHighlightedIndex = getMostRecentHighlightIndex({
                highlightedGroupEndIndex,
                highlightedGroupStartIndex,
                highlightedIndexes
            });
            useEffectOnce_default(()=>clearTimeouts()),
            useEffectOnUpdate(()=>{
                jumpText && clearJumpText2()
            }
            , [jumpText]),
            useEffectOnce_default(()=>{
                isOpen && (type === Type.ComboBox && refs.input.current ? refs.input.current.focus() : refs.menu.current && type !== Type.ControlledMenu && refs.menu.current.focus())
            }
            ),
            useEffectOnUpdate(()=>{
                isOpen ? type === Type.ComboBox && refs.input.current ? refs.input.current.focus() : refs.menu.current && type !== Type.ControlledMenu && refs.menu.current.focus() : document.activeElement === refs.menu.current && (type === Type.ComboBox && refs.input.current ? refs.input.current.focus() : refs.toggleButton.current && refs.toggleButton.current.focus())
            }
            , [isOpen]),
            (0,
            react.useEffect)(()=>{
                !(!isValidIndex(mostRecentHighlightedIndex) || !isOpen || (0,
                remirror_core_helpers.yD)(refs.items.current)) && (!1 === shouldScroll.current ? shouldScroll.current = !0 : refs.menu.current && function(element, menuElement) {
                    if (!element || !menuElement)
                        return;
                    let actions = computeScrollIntoView(element, {
                        boundary: menuElement,
                        block: "nearest",
                        scrollMode: "if-needed"
                    });
                    actions.forEach(({el, top, left})=>{
                        el.scrollTop = top,
                        el.scrollLeft = left
                    }
                    )
                }(refs.items.current[mostRecentHighlightedIndex], refs.menu.current))
            }
            , [isOpen, mostRecentHighlightedIndex, refs.items, refs.menu]);
            let itemHighlightedAtIndex = (0,
            react.useCallback)(index=>{
                let isHovered = index === hoveredIndex;
                return checkItemHighlighted(index, {
                    start: highlightedGroupStartIndex,
                    end: highlightedGroupEndIndex,
                    indexes: highlightedIndexes
                }) || (multiple ? isHovered : !isValidIndex(mostRecentHighlightedIndex) && isHovered)
            }
            , [highlightedGroupEndIndex, highlightedGroupStartIndex, highlightedIndexes, hoveredIndex, mostRecentHighlightedIndex, multiple])
              , indexIsHovered = (0,
            react.useCallback)(index=>index === hoveredIndex, [hoveredIndex])
              , itemIsHovered = (0,
            react.useCallback)(item=>item === items[hoveredIndex], [hoveredIndex, items])
              , indexIsSelected = (0,
            react.useCallback)(index=>checkItemHighlighted(index, {
                start: highlightedGroupStartIndex,
                end: highlightedGroupEndIndex,
                indexes: highlightedIndexes
            }), [highlightedGroupEndIndex, highlightedGroupStartIndex, highlightedIndexes])
              , itemIsSelected = (0,
            react.useCallback)(item=>selectedItems.map(getItemId).includes(getItemId(item)), [getItemId, selectedItems])
              , indexOfItem = (0,
            react.useCallback)(item=>items.map(getItemId).indexOf(getItemId(item)), [getItemId, items])
              , getComboBoxProps = (0,
            react.useCallback)((options={
                refKey: "ref"
            })=>{
                let {refKey="ref", ref, ...rest} = options;
                if (type !== Type.ComboBox)
                    throw Error("`getComboBoxProps` is only available for the autocomplete dropdown");
                let extra = (0,
                remirror_core_helpers.o8)(rest["aria-label"]) ? {
                    "aria-labelledby": labelId
                } : {};
                return {
                    [refKey]: multishift_composeRefs(ref, refs.comboBox),
                    role: "combobox",
                    "aria-expanded": isOpen,
                    "aria-haspopup": "listbox",
                    "aria-owns": isOpen ? menuId : null,
                    ...extra,
                    ...rest
                }
            }
            , [isOpen, labelId, menuId, refs.comboBox, type])
              , getInputProps = (0,
            react.useCallback)((options={
                refKey: "ref"
            })=>{
                let {onKeyDown, onBlur, onChange, onInput, refKey="ref", ref, ...rest} = options;
                if (type !== Type.ComboBox)
                    throw Error("`getInputProps` is only available for the `autocomplete` dropdown");
                let activeDescendant = isValidIndex(mostRecentHighlightedIndex) ? {
                    "aria-activedescendant": getItemA11yId(mostRecentHighlightedIndex)
                } : {}
                  , eventHandlers = {
                    onChange: callAllEventHandlers(onChange, onInput, event=>{
                        actions.inputValueChange(event.target.value)
                    }
                    ),
                    onKeyDown: callAllEventHandlers(onKeyDown, event=>{
                        let key = getKeyName(event);
                        (0,
                        remirror_core_helpers.q9)(SPECIAL_INPUT_KEYS, key) && (actions.inputSpecialKeyDown(createKeyDownPayload(event, key, disabled.current)),
                        event.preventDefault())
                    }
                    ),
                    onBlur: callAllEventHandlers(onBlur, ()=>{
                        setInternalTimeout(()=>{
                            let multishiftActive = isHTMLElement(document.activeElement) && refs.comboBox.current && refs.comboBox.current.contains(document.activeElement);
                            contextRef.current.isMouseDown || multishiftActive || actions.inputBlur()
                        }
                        )
                    }
                    )
                };
                return rest.disabled && (eventHandlers = (0,
                remirror_core_helpers.Ry)()),
                {
                    [refKey]: multishift_composeRefs(ref, refs.input),
                    "aria-autocomplete": "list",
                    ...activeDescendant,
                    "aria-controls": isOpen ? menuId : null,
                    "aria-labelledby": labelId,
                    autoComplete: "off",
                    value: inputValue,
                    id: inputId,
                    ...eventHandlers,
                    ...rest
                }
            }
            , [actions, contextRef, getItemA11yId, inputId, inputValue, isOpen, labelId, menuId, mostRecentHighlightedIndex, refs, setInternalTimeout, type])
              , getMenuProps = (0,
            react.useCallback)((options={
                refKey: "ref"
            })=>{
                let {onKeyDown, onBlur, refKey="ref", ref, ...rest} = options
                  , activeDescendant = (0,
                remirror_core_helpers.yD)(highlightedIndexes) ? {} : {
                    "aria-activedescendant": getItemA11yId(mostRecentHighlightedIndex)
                }
                  , eventHandlers = {
                    onKeyDown: callAllEventHandlers(onKeyDown, event=>{
                        let key = getKeyName(event);
                        (0,
                        remirror_core_helpers.q9)(SPECIAL_MENU_KEYS, key) ? (actions.menuSpecialKeyDown(createKeyDownPayload(event, key, disabled.current)),
                        "Tab" !== key && event.preventDefault()) : /^\S$/.test(key) && actions.menuCharacterKeyDown(key)
                    }
                    ),
                    onBlur: callAllEventHandlers(onBlur, event=>{
                        let blurTarget = event.target;
                        setInternalTimeout(()=>{
                            !contextRef.current.isMouseDown && ((0,
                            remirror_core_helpers.le)(document.activeElement) || ![refs.comboBox.current, refs.input.current, refs.toggleButton.current, ...refs.items.current, ...refs.ignored.current].some(node=>node && isOrContainsNode(node, document.activeElement)) && document.activeElement !== blurTarget) && actions.menuBlur()
                        }
                        )
                    }
                    )
                };
                return rest.disabled && (eventHandlers = (0,
                remirror_core_helpers.Ry)()),
                {
                    [refKey]: multishift_composeRefs(ref, refs.menu),
                    id: menuId,
                    role: type === Type.ControlledMenu ? "menu" : "listbox",
                    "aria-labelledby": labelId,
                    tabIndex: -1,
                    ...multiple ? {
                        "aria-multiselectable": multiple
                    } : {},
                    ...activeDescendant,
                    ...eventHandlers,
                    ...rest
                }
            }
            , [actions, contextRef, getItemA11yId, highlightedIndexes, labelId, menuId, mostRecentHighlightedIndex, multiple, refs, setInternalTimeout, type])
              , getToggleButtonProps = (0,
            react.useCallback)((options={
                refKey: "ref"
            })=>{
                let {onClick, onKeyDown, onBlur, refKey="ref", ref, ...rest} = options;
                if (type === Type.ControlledMenu)
                    throw Error("The toggle button props should not be used for the controlled menu");
                let isInternalEvent = event=>[refs.input.current, refs.menu.current, ...refs.items.current].some(node=>node && isOrContainsNode(node, event.target))
                  , eventHandlers = {
                    onClick: callAllEventHandlers(onClick, ()=>actions.toggleButtonClick()),
                    onKeyDown: callAllEventHandlers(onKeyDown, event=>{
                        let key = getKeyName(event);
                        !isInternalEvent(event) && (0,
                        remirror_core_helpers.q9)(SPECIAL_TOGGLE_BUTTON_KEYS, key) && (actions.toggleButtonSpecialKeyDown(createKeyDownPayload(event, key, disabled.current)),
                        event.preventDefault())
                    }
                    ),
                    onBlur: callAllEventHandlers(onBlur, event=>{
                        if (isInternalEvent(event))
                            return;
                        let blurTarget = event.target;
                        setInternalTimeout(()=>{
                            !contextRef.current.isMouseDown && ((0,
                            remirror_core_helpers.le)(document.activeElement) || document.activeElement.id !== menuId) && document.activeElement !== blurTarget && actions.toggleButtonBlur()
                        }
                        )
                    }
                    )
                };
                rest.disabled && (eventHandlers = (0,
                remirror_core_helpers.Ry)());
                let extra = type === Type.Select ? {
                    "aria-expanded": isOpen
                } : {}
                  , ariaLabel = (0,
                remirror_core_helpers.o8)(rest["aria-label"]) ? {
                    "aria-labelledby": `${labelId} ${toggleButtonId}`
                } : {};
                return {
                    [refKey]: multishift_composeRefs(ref, refs.toggleButton),
                    type: "button",
                    role: "button",
                    id: toggleButtonId,
                    "aria-haspopup": type === Type.ComboBox || "listbox",
                    ...ariaLabel,
                    ...extra,
                    ...eventHandlers,
                    ...rest
                }
            }
            , [actions, contextRef, isOpen, labelId, menuId, refs, setInternalTimeout, toggleButtonId, type])
              , getItemProps = (0,
            react.useCallback)(options=>{
                let {item, index, refKey="ref", ref, onMouseMove, onMouseLeave, onClick, ...rest} = options
                  , itemIndex = void 0 !== index ? index : 0 === items.length ? -1 : items.indexOf(item);
                if (!isValidIndex(itemIndex))
                    throw Error("Pass either item or item index in getItemProps!");
                let eventHandlers = {
                    onMouseMove: callAllEventHandlers(onMouseMove, ()=>actions.itemMouseMove(itemIndex)),
                    onMouseLeave: callAllEventHandlers(onMouseLeave, ()=>actions.itemMouseLeave(itemIndex)),
                    onClick: callAllEventHandlers(onClick, event=>{
                        event.preventDefault(),
                        actions.itemClick({
                            event: event,
                            modifiers: getModifiers(event),
                            index: itemIndex
                        })
                    }
                    )
                };
                return rest.disabled && (disabled.current.push(itemIndex),
                eventHandlers = (0,
                remirror_core_helpers.Ry)()),
                {
                    [refKey]: multishift_composeRefs(ref, itemNode=>{
                        itemNode && refs.items.current.push(itemNode)
                    }
                    ),
                    role: type === Type.ControlledMenu ? multiple ? "menuitemcheckbox" : "menuitemradio" : "option",
                    "aria-current": index === hoveredIndex || index === mostRecentHighlightedIndex,
                    "aria-selected": itemHighlightedAtIndex(index) && !rest.disabled,
                    id: getItemA11yId(itemIndex),
                    ...eventHandlers,
                    ...rest
                }
            }
            , [actions, getItemA11yId, hoveredIndex, itemHighlightedAtIndex, items, mostRecentHighlightedIndex, multiple, refs.items, type])
              , getIgnoredElementProps = (0,
            react.useCallback)((options={
                refKey: "ref"
            })=>{
                let {refKey="ref", ref, onMouseMove, onFocus, ...rest} = options
                  , eventHandlers = (0,
                remirror_core_helpers.Ry)();
                return rest.disabled && (eventHandlers = (0,
                remirror_core_helpers.Ry)()),
                {
                    [refKey]: multishift_composeRefs(ref, node=>{
                        node && !rest.disabled && refs.ignored.current.push(node)
                    }
                    ),
                    ...eventHandlers,
                    ...rest
                }
            }
            , [refs.ignored])
              , getLabelProps = (0,
            react.useCallback)((options={
                refKey: "ref"
            })=>{
                let {refKey="ref", ref, ...rest} = options;
                return {
                    [refKey]: multishift_composeRefs(ref, node=>{
                        node && refs.ignored.current.push(node)
                    }
                    ),
                    id: labelId,
                    htmlFor: "combobox" === type && refs.input.current ? inputId : menuId,
                    ...rest
                }
            }
            , [inputId, labelId, menuId, refs, type])
              , getRemoveButtonProps = (0,
            react.useCallback)(options=>{
                let {onClick, item, ...rest} = options
                  , eventHandlers = {
                    onClick: callAllEventHandlers(onClick, ()=>{
                        actions.removeSelectedItem(item)
                    }
                    )
                };
                return rest.disabled && (eventHandlers = (0,
                remirror_core_helpers.Ry)()),
                {
                    ...eventHandlers,
                    role: "button",
                    ...rest
                }
            }
            , [actions])
              , focusHelpers = (0,
            react.useMemo)(()=>({
                focusInput() {
                    if (type !== Type.ComboBox)
                        throw Error(`The input element cannot be focused for this type of dropdown: ${type}`);
                    refs.input.current && refs.input.current.focus()
                },
                focusToggleButton() {
                    refs.toggleButton.current && refs.toggleButton.current.focus()
                },
                focusMenu() {
                    refs.menu.current && refs.menu.current.focus()
                },
                focusMenuItem(index) {
                    var _a;
                    refs.items.current[index] && (null == (_a = refs.items.current[index]) || _a.focus())
                }
            }), [refs.input, refs.items, refs.menu, refs.toggleButton, type])
              , stateHelpers = function({getItemId=defaultGetItemId, multiple}, state) {
                return {
                    addItems: itemsToAdd=>addItems(state.selectedItems, itemsToAdd, getItemId, multiple),
                    addItem: itemToAdd=>addItems(state.selectedItems, [itemToAdd], getItemId, multiple),
                    removeItems: itemsToRemove=>removeItems(state.selectedItems, itemsToRemove, getItemId),
                    removeItem: itemToRemove=>removeItems(state.selectedItems, [itemToRemove], getItemId),
                    toggleItems: itemsToToggle=>removeItems(state.selectedItems, itemsToToggle, getItemId),
                    toggleItem: itemToToggle=>removeItems(state.selectedItems, [itemToToggle], getItemId)
                }
            }(props, state);
            return {
                highlightedIndexes,
                highlightedGroupEndIndex,
                highlightedGroupStartIndex,
                selectedItems,
                hoveredIndex,
                inputValue,
                isOpen,
                jumpText,
                ...stateHelpers,
                mostRecentHighlightedIndex,
                itemHighlightedAtIndex,
                indexIsHovered,
                itemIsHovered,
                indexIsSelected,
                itemIsSelected,
                indexOfItem,
                dispatch,
                clearSelection: actions.clearSelection,
                selectItems: actions.selectItems,
                selectItem: actions.selectItem,
                clearHighlighted: actions.clearHighlighted,
                inputValueChange: actions.inputValueChange,
                removeSelectedItem: actions.removeSelectedItem,
                removeSelectedItems: actions.removeSelectedItems,
                setHoverItemIndex: actions.setHoverItemIndex,
                toggleMenu: actions.toggleMenu,
                closeMenu: actions.closeMenu,
                openMenu: actions.openMenu,
                setHighlightedIndexes: actions.setHighlightedIndexes,
                setHighlightedIndex: actions.setHighlightedIndex,
                reset: actions.reset,
                setState: actions.setState,
                clearInputValue: actions.clearInputValue,
                clearJumpText: actions.clearJumpText,
                getMenuProps,
                getComboBoxProps,
                getToggleButtonProps,
                getItemProps,
                getInputProps,
                getRemoveButtonProps,
                getLabelProps,
                getIgnoredElementProps,
                ...focusHelpers
            }
        }
          , remirror_core_constants = __webpack_require__(9436)
          , remirror_core = __webpack_require__(80117)
          , remirror_extension_mention_atom = __webpack_require__(97054)
          , prosemirror_suggest = __webpack_require__(75430)
          , remirror_extension_positioner = __webpack_require__(45916);
        function indexFromArrowPress({direction, matchLength, previousIndex}) {
            return "next" === direction ? previousIndex + 1 > matchLength - 1 ? 0 : previousIndex + 1 : previousIndex - 1 < 0 ? matchLength - 1 : previousIndex - 1
        }
        function useEditorEvent(event, handler) {
            (0,
            remirror_react_core.zf)(remirror_extension_events.Q, event, handler)
        }
        function useEditorFocus(props={}) {
            let {ignoredElements=[], blurOnInactive=!1} = props
              , {view, commands} = (0,
            remirror_react_core.rj)()
              , [isFocused,setIsFocused] = (0,
            react.useState)(()=>view.hasFocus());
            return useEditorEvent("blur", (0,
            react.useCallback)(event=>{
                let focusedElement = (0,
                remirror_core_utils.jd)(event.target) ? event.target : document.activeElement;
                if (!blurOnInactive && !focusedElement || view.dom.contains(focusedElement))
                    return !1;
                for (let element of ignoredElements)
                    if (null == element ? void 0 : element.contains(focusedElement))
                        return !1;
                return setIsFocused(!1),
                !1
            }
            , [blurOnInactive, ignoredElements, view.dom])),
            useEditorEvent("focus", (0,
            react.useCallback)(_=>!isFocused && (setIsFocused(!0),
            !1), [isFocused])),
            [isFocused, commands.focus]
        }
        function useKeymap(name, handler, priority=remirror_core_constants.xV.Medium) {
            let tuple = (0,
            react.useMemo)(()=>[priority, {
                [name]: handler
            }], [priority, name, handler]);
            (0,
            remirror_react_core.T6)(remirror_core.KeymapExtension, "keymap", tuple)
        }
        function useKeymaps(bindings, priority=remirror_core_constants.xV.Medium) {
            let tuple = (0,
            react.useMemo)(()=>[priority, bindings], [priority, bindings]);
            (0,
            remirror_react_core.T6)(remirror_core.KeymapExtension, "keymap", tuple)
        }
        var DEFAULT_DISMISS_KEYS = ["Escape", "Tab", "Shift-Tab"]
          , DEFAULT_SUBMIT_KEYS = ["Enter"];
        function useMentionAtom(props) {
            let {ignoreMatchesOnDismiss=!0, items, direction, dismissKeys, focusOnClick, submitKeys} = props
              , [state,setState] = (0,
            react.useState)(null)
              , helpers = (0,
            remirror_react_core.z8)()
              , onDismiss = (0,
            react.useCallback)(()=>{
                if (!state)
                    return !1;
                let {range, name} = state;
                return ignoreMatchesOnDismiss && helpers.getSuggestMethods().addIgnored({
                    from: range.from,
                    name,
                    specific: !0
                }),
                setState(null),
                !0
            }
            , [helpers, ignoreMatchesOnDismiss, state])
              , onSubmit = (0,
            react.useCallback)(item=>!!state && (state.command(item),
            !0), [state])
              , menu = function(props) {
                let {items, direction="vertical", isOpen, onDismiss, onSubmit, focusOnClick=!0, dismissKeys=DEFAULT_DISMISS_KEYS, submitKeys=DEFAULT_SUBMIT_KEYS} = props
                  , [index,setIndex] = (0,
                react.useState)(0)
                  , {focus} = (0,
                remirror_react_core.xd)()
                  , nextShortcut = "vertical" === direction ? "ArrowDown" : "ArrowRight"
                  , previousShortcut = "vertical" === direction ? "ArrowUp" : "ArrowLeft"
                  , {getMenuProps, getItemProps: _getItemProps, hoveredIndex, itemIsSelected, indexIsSelected, indexIsHovered, itemIsHovered} = useMultishift({
                    items,
                    isOpen,
                    highlightedIndexes: 0 <= index && index < items.length ? [index] : [],
                    type: Type.ControlledMenu
                })
                  , homeCallback = (0,
                react.useCallback)(()=>!!isOpen && (0 !== index && setIndex(0),
                !0), [index, isOpen])
                  , endCallback = (0,
                react.useCallback)(()=>!!isOpen && (index === items.length - 1 && setIndex(items.length - 1),
                !0), [items, index, isOpen])
                  , nextCallback = (0,
                react.useCallback)(()=>!!isOpen && (setIndex(indexFromArrowPress({
                    direction: "next",
                    matchLength: items.length,
                    previousIndex: index
                })),
                !0), [items, index, isOpen])
                  , previousCallback = (0,
                react.useCallback)(()=>!!isOpen && (setIndex(indexFromArrowPress({
                    direction: "previous",
                    matchLength: items.length,
                    previousIndex: index
                })),
                !0), [items, index, isOpen])
                  , submitCallback = (0,
                react.useCallback)(()=>{
                    let item = items[index];
                    return !!isOpen && !!item && onSubmit(item, "keyPress")
                }
                , [index, isOpen, items, onSubmit])
                  , dismissCallback = (0,
                react.useCallback)(()=>!!isOpen && onDismiss(), [isOpen, onDismiss])
                  , getItemProps = (0,
                react.useCallback)(itemProps=>({
                    ..._getItemProps({
                        ...itemProps,
                        onClick(event) {
                            var _a;
                            null == (_a = itemProps.onClick) || _a.call(itemProps, event),
                            onSubmit(itemProps.item, "click"),
                            focusOnClick && focus()
                        }
                    })
                }), [_getItemProps, onSubmit, focus, focusOnClick])
                  , submitBindings = (0,
                react.useMemo)(()=>{
                    let bindings = {};
                    for (let key of submitKeys)
                        bindings[key] = submitCallback;
                    return bindings
                }
                , [submitCallback, submitKeys])
                  , dismissBindings = (0,
                react.useMemo)(()=>{
                    let bindings = {};
                    for (let key of dismissKeys)
                        bindings[key] = dismissCallback;
                    return bindings
                }
                , [dismissCallback, dismissKeys]);
                return useKeymap(nextShortcut, nextCallback),
                useKeymap(previousShortcut, previousCallback),
                useKeymap("Home", homeCallback),
                useKeymap(`Cmd-${nextShortcut}`, homeCallback),
                useKeymap("End", nextCallback),
                useKeymap(`Cmd-${previousShortcut}`, endCallback),
                useKeymaps(submitBindings),
                useKeymaps(dismissBindings),
                (0,
                react.useMemo)(()=>({
                    getMenuProps,
                    getItemProps,
                    hoveredIndex,
                    indexIsSelected,
                    itemIsSelected,
                    indexIsHovered,
                    itemIsHovered,
                    index,
                    setIndex
                }), [getItemProps, getMenuProps, hoveredIndex, indexIsHovered, indexIsSelected, itemIsHovered, itemIsSelected, index])
            }({
                items,
                isOpen: !!state,
                onDismiss,
                onSubmit,
                direction,
                dismissKeys,
                focusOnClick,
                submitKeys
            })
              , {setIndex} = menu
              , onChange = (0,
            react.useCallback)((props2,command)=>{
                let {query, range, name, exitReason, changeReason, text} = props2;
                if (exitReason) {
                    setState(null);
                    return
                }
                changeReason && (changeReason !== prosemirror_suggest.$Y.Move && setIndex(0),
                setState({
                    query,
                    range,
                    name,
                    reason: changeReason,
                    text,
                    command(attrs) {
                        command(attrs),
                        setState(null)
                    }
                }))
            }
            , [setIndex]);
            return (0,
            remirror_react_core.zf)(remirror_extension_mention_atom.D, "onChange", onChange),
            (0,
            react.useMemo)(()=>({
                ...menu,
                state
            }), [menu, state])
        }
        var remirror_react_hooks_useIsomorphicLayoutEffect = "undefined" != typeof document ? react.useLayoutEffect : react.useEffect;
        function usePositioner(positioner, activeOrDeps) {
            let deps = null == activeOrDeps || (0,
            remirror_core_helpers.jn)(activeOrDeps) ? [positioner] : activeOrDeps
              , isActive = !(0,
            remirror_core_helpers.jn)(activeOrDeps) || activeOrDeps
              , key = (0,
            react.useRef)((0,
            remirror_core_helpers.EL)())
              , positions = function(positioner, deps) {
                let[state,setState] = (0,
                react.useState)([])
                  , [memoizedPositioner,setMemoizedPositioner] = (0,
                react.useState)(()=>(0,
                remirror_extension_positioner.$7)(positioner))
                  , [collectRefs,setCollectRefs] = (0,
                react.useState)([])
                  , positionerRef = (0,
                react.useRef)(positioner)
                  , previousPositioner = function(value) {
                    let ref = (0,
                    react.useRef)();
                    return remirror_react_hooks_useIsomorphicLayoutEffect(()=>{
                        ref.current = value
                    }
                    ),
                    ref.current
                }(memoizedPositioner);
                return positionerRef.current = positioner,
                (0,
                remirror_react_core.Ml)(remirror_extension_positioner.xv, ({addCustomHandler})=>{
                    let positioner2 = (0,
                    remirror_extension_positioner.$7)(positionerRef.current)
                      , dispose = addCustomHandler("positioner", positioner2);
                    return setMemoizedPositioner(positioner2),
                    dispose
                }
                , deps),
                (0,
                react.useLayoutEffect)(()=>{
                    let disposeUpdate = memoizedPositioner.addListener("update", options=>{
                        let items = [];
                        for (let {id, data, setElement} of options) {
                            let ref = element=>{
                                element && setElement(element)
                            }
                            ;
                            items.push({
                                id,
                                data,
                                ref
                            })
                        }
                        setCollectRefs(items)
                    }
                    )
                      , disposeDone = memoizedPositioner.addListener("done", options=>{
                        setState(options)
                    }
                    );
                    return (null == previousPositioner ? void 0 : previousPositioner.recentUpdate) && memoizedPositioner.onActiveChanged(null == previousPositioner ? void 0 : previousPositioner.recentUpdate),
                    ()=>{
                        disposeUpdate(),
                        disposeDone()
                    }
                }
                , [memoizedPositioner, previousPositioner]),
                (0,
                react.useMemo)(()=>{
                    let positions = [];
                    for (let[index,{ref, data, id: key}] of collectRefs.entries()) {
                        let stateValue = state[index]
                          , {element, position={}} = null != stateValue ? stateValue : {}
                          , absolutePosition = {
                            ...remirror_extension_positioner.oI,
                            ...(0,
                            remirror_core_helpers.Yc)(position)
                        };
                        positions.push({
                            ref,
                            element,
                            data,
                            key,
                            ...absolutePosition
                        })
                    }
                    return positions
                }
                , [collectRefs, state])
            }(positioner, deps)
              , position = positions[0];
            return (0,
            react.useMemo)(()=>position && isActive ? {
                ...position,
                active: !0
            } : {
                ...remirror_extension_positioner.oI,
                ref: void 0,
                data: {},
                active: !1,
                key: key.current
            }, [isActive, position])
        }
    },
    79969: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
                d: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            }))
        });
        __webpack_exports__.Z = ForwardRef
    },
    61603: function() {}
}]);
