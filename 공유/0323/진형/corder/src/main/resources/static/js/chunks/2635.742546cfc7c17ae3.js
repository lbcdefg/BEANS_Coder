"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2635], {
    22635: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
            default: function() {
                return Viewer
            }
        });
        var jsx_runtime = __webpack_require__(52322)
          , remirror_react_core = __webpack_require__(16263)
          , react = __webpack_require__(2784)
          , remirror_extension_placeholder = __webpack_require__(46669)
          , remirror_extension_heading = __webpack_require__(24553)
          , remirror_extension_bold = __webpack_require__(78390)
          , remirror_extension_italic = __webpack_require__(62546)
          , remirror_extension_underline = __webpack_require__(35846)
          , remirror_extension_strike = __webpack_require__(83184)
          , remirror_extension_blockquote = __webpack_require__(8987)
          , remirror_extension_code = __webpack_require__(76519)
          , remirror_extension_code_block = __webpack_require__(52486)
          , remirror_extension_horizontal_rule = __webpack_require__(50557)
          , remirror_extension_link = __webpack_require__(46606)
          , remirror_extension_image = __webpack_require__(81696)
          , remirror_extension_tables = __webpack_require__(18868)
          , remirror_extension_list = __webpack_require__(79183)
          , remirror_core = __webpack_require__(80117)
          , remirror_core_constants = __webpack_require__(9436)
          , remirror_core_utils = __webpack_require__(85775)
          , remirror_messages = __webpack_require__(35708)
          , __defProp = Object.defineProperty
          , __getOwnPropDesc = Object.getOwnPropertyDescriptor
          , __decorateClass = (decorators,target,key,kind)=>{
            for (var decorator, result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target, i = decorators.length - 1; i >= 0; i--)
                (decorator = decorators[i]) && (result = (kind ? decorator(target, key, result) : decorator(result)) || result);
            return kind && result && __defProp(target, key, result),
            result
        }
          , COLUMN_DATA_ATTRIBUTE = "data-column-type"
          , ColumnsExtension = class extends remirror_core.NodeExtension {
            get name() {
                return "columns"
            }
            createTags() {
                return [remirror_core_constants.eX.Block]
            }
            createNodeSpec(extra, override) {
                var _a;
                return {
                    ...override,
                    content: "block+",
                    attrs: {
                        ...extra.defaults(),
                        count: {
                            default: this.options.defaults.count
                        },
                        fill: {
                            default: this.options.defaults.fill
                        },
                        gap: {
                            default: this.options.defaults.gap
                        },
                        ruleColor: {
                            default: this.options.defaults.ruleColor
                        },
                        ruleStyle: {
                            default: this.options.defaults.ruleStyle
                        },
                        ruleWidth: {
                            default: this.options.defaults.ruleWidth
                        },
                        width: {
                            default: this.options.defaults.width
                        }
                    },
                    parseDOM: [{
                        tag: `div[${COLUMN_DATA_ATTRIBUTE}]`,
                        getAttrs(node) {
                            if (!(0,
                            remirror_core_utils.jd)(node))
                                return !1;
                            let {columnCount, columnFill, columnGap, columnRuleColor, columnRuleStyle, columnRuleWidth, columnWidth} = node.style;
                            return {
                                ...extra.parse(node),
                                count: columnCount,
                                fill: columnFill,
                                gap: columnGap,
                                ruleColor: columnRuleColor,
                                ruleStyle: columnRuleStyle,
                                ruleWidth: columnRuleWidth,
                                width: columnWidth
                            }
                        }
                    }, ...null != (_a = override.parseDOM) ? _a : []],
                    toDOM(node) {
                        let {count, fill, gap, ruleColor, ruleStyle, ruleWidth, width, ...other} = (0,
                        remirror_core_utils.Kh)(node.attrs, extra)
                          , {style: currentStyle="", ...rest} = extra.dom(node)
                          , style = (0,
                        remirror_core_utils.X3)({
                            columnCount: count,
                            columnFill: fill,
                            columnGap: gap,
                            columnRuleColor: ruleColor,
                            columnRuleStyle: ruleStyle,
                            columnRuleWidth: ruleWidth,
                            columnWidth: width
                        }, currentStyle)
                          , attributes = {
                            ...rest,
                            ...other,
                            style,
                            [COLUMN_DATA_ATTRIBUTE]: "true"
                        };
                        return ["div", attributes, 0]
                    }
                }
            }
            createSchemaAttributes() {
                return [{
                    identifiers: {
                        tags: [remirror_core_constants.eX.Block],
                        type: "node",
                        excludeNames: ["columns"]
                    },
                    attributes: {
                        columnSpan: {
                            default: null,
                            parseDOM(node) {
                                var _a;
                                return null != (_a = node.getAttribute("column-span")) ? _a : "none"
                            },
                            toDOM: attrs=>attrs.columnSpan ? ["column-span", "all" === attrs.columnSpan ? "all" : "none"] : null
                        }
                    }
                }]
            }
            toggleColumns(attrs={}, options={}) {
                return this.store.commands.toggleWrappingNode.original(this.type, attrs, options.selection)
            }
        }
        ;
        __decorateClass([(0,
        remirror_core.command)({
            icon: ({attrs})=>({
                name: "layoutColumnLine",
                sup: null == attrs ? void 0 : attrs.count
            }),
            label: ({t, attrs})=>t(remirror_messages.Q5.LABEL, {
                count: null == attrs ? void 0 : attrs.count
            }),
            description: ({t, attrs})=>t(remirror_messages.Q5.DESCRIPTION, {
                count: null == attrs ? void 0 : attrs.count
            })
        })], ColumnsExtension.prototype, "toggleColumns", 1),
        ColumnsExtension = __decorateClass([(0,
        remirror_core.extension)({
            defaultOptions: {
                defaults: {
                    count: 2,
                    fill: "auto",
                    gap: "inherit",
                    ruleColor: "inherit",
                    ruleStyle: "none",
                    ruleWidth: "inherit",
                    width: "inherit"
                }
            },
            staticKeys: ["defaults"]
        })], ColumnsExtension);
        var remirror_extension_drop_cursor = __webpack_require__(89515)
          , remirror_extension_embed = __webpack_require__(83740)
          , remirror_extension_mention_atom = __webpack_require__(97054)
          , remirror_extension_hard_break = __webpack_require__(58924);
        __webpack_require__(70177),
        __webpack_require__(92947),
        __webpack_require__(47030),
        __webpack_require__(4219),
        __webpack_require__(34092);
        var code_block_langs = __webpack_require__(47529);
        let extensions = ()=>[new remirror_extension_placeholder.X({
            placeholder: "내용을 입력해주세요."
        }), new remirror_extension_heading.e, new remirror_extension_bold.H, new remirror_extension_italic.f, new remirror_extension_underline.A, new remirror_extension_strike.V, new remirror_extension_blockquote.z, new remirror_extension_code.l, new remirror_extension_code_block.W({
            supportedLanguages: code_block_langs.Z
        }), new remirror_extension_horizontal_rule.V, new remirror_extension_link.y5({
            autoLink: !0,
            defaultTarget: "_blank"
        }), new remirror_extension_image.Gc({
            enableResizing: !0
        }), new remirror_extension_tables.vI, new remirror_extension_list.UQ, new remirror_extension_list._3, new remirror_extension_list.JQ, new ColumnsExtension, new remirror_extension_drop_cursor.U, new remirror_extension_embed.a, new remirror_extension_mention_atom.D({
            extraAttributes: {
                type: "user"
            },
            matchers: [{
                name: "at",
                char: "@",
                matchOffset: 0
            }],
            appendText: " "
        }), new remirror_extension_hard_break.h];
        function Viewer(param) {
            let {content="", onRendered=()=>{}
            } = param
              , {manager, state, setState} = (0,
            remirror_react_core.iF)({
                extensions,
                content,
                selection: "start",
                stringHandler: "html"
            });
            return (0,
            react.useEffect)(()=>{
                manager.view.updateState(manager.createState({
                    content,
                    stringHandler: "html"
                })),
                onRendered()
            }
            , [content, manager, setState, onRendered]),
            (0,
            jsx_runtime.jsx)("div", {
                className: "remirror-theme",
                children: (0,
                jsx_runtime.jsx)(remirror_react_core.O1, {
                    manager: manager,
                    initialContent: state,
                    editable: !1
                })
            })
        }
    }
}]);
