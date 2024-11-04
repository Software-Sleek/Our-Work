(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [485],
    {
        92: function () { },
        8770: function () { },
        933: function () { },
        2873: function (e, t, s) {
            "use strict";
            s.d(t, {
                t: function () {
                    return w;
                },
                o: function () {
                    return y;
                },
            });
            var i = s(7294),
                n = s(1911);
            function r(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
            }
            function a(e, t) {
                const s = ["__proto__", "constructor", "prototype"];
                Object.keys(t)
                    .filter((e) => s.indexOf(e) < 0)
                    .forEach((s) => {
                        "undefined" === typeof e[s] ? (e[s] = t[s]) : r(t[s]) && r(e[s]) && Object.keys(t[s]).length > 0 ? (t[s].__swiper__ ? (e[s] = t[s]) : a(e[s], t[s])) : (e[s] = t[s]);
                    });
            }
            function l(e = {}) {
                return e.navigation && "undefined" === typeof e.navigation.nextEl && "undefined" === typeof e.navigation.prevEl;
            }
            function o(e = {}) {
                return e.pagination && "undefined" === typeof e.pagination.el;
            }
            function d(e = {}) {
                return e.scrollbar && "undefined" === typeof e.scrollbar.el;
            }
            function p(e = "") {
                const t = e
                    .split(" ")
                    .map((e) => e.trim())
                    .filter((e) => !!e),
                    s = [];
                return (
                    t.forEach((e) => {
                        s.indexOf(e) < 0 && s.push(e);
                    }),
                    s.join(" ")
                );
            }
            const c = [
                "modules",
                "init",
                "_direction",
                "touchEventsTarget",
                "initialSlide",
                "_speed",
                "cssMode",
                "updateOnWindowResize",
                "resizeObserver",
                "nested",
                "focusableElements",
                "_enabled",
                "_width",
                "_height",
                "preventInteractionOnTransition",
                "userAgent",
                "url",
                "_edgeSwipeDetection",
                "_edgeSwipeThreshold",
                "_freeMode",
                "_autoHeight",
                "setWrapperSize",
                "virtualTranslate",
                "_effect",
                "breakpoints",
                "_spaceBetween",
                "_slidesPerView",
                "_grid",
                "_slidesPerGroup",
                "_slidesPerGroupSkip",
                "_slidesPerGroupAuto",
                "_centeredSlides",
                "_centeredSlidesBounds",
                "_slidesOffsetBefore",
                "_slidesOffsetAfter",
                "normalizeSlideIndex",
                "_centerInsufficientSlides",
                "_watchOverflow",
                "roundLengths",
                "touchRatio",
                "touchAngle",
                "simulateTouch",
                "_shortSwipes",
                "_longSwipes",
                "longSwipesRatio",
                "longSwipesMs",
                "_followFinger",
                "allowTouchMove",
                "_threshold",
                "touchMoveStopPropagation",
                "touchStartPreventDefault",
                "touchStartForcePreventDefault",
                "touchReleaseOnEdges",
                "uniqueNavElements",
                "_resistance",
                "_resistanceRatio",
                "_watchSlidesProgress",
                "_grabCursor",
                "preventClicks",
                "preventClicksPropagation",
                "_slideToClickedSlide",
                "_preloadImages",
                "updateOnImagesReady",
                "_loop",
                "_loopAdditionalSlides",
                "_loopedSlides",
                "_loopFillGroupWithBlank",
                "loopPreventsSlide",
                "_allowSlidePrev",
                "_allowSlideNext",
                "_swipeHandler",
                "_noSwiping",
                "noSwipingClass",
                "noSwipingSelector",
                "passiveListeners",
                "containerModifierClass",
                "slideClass",
                "slideBlankClass",
                "slideActiveClass",
                "slideDuplicateActiveClass",
                "slideVisibleClass",
                "slideDuplicateClass",
                "slideNextClass",
                "slideDuplicateNextClass",
                "slidePrevClass",
                "slideDuplicatePrevClass",
                "wrapperClass",
                "runCallbacksOnInit",
                "observer",
                "observeParents",
                "observeSlideChildren",
                "a11y",
                "autoplay",
                "_controller",
                "coverflowEffect",
                "cubeEffect",
                "fadeEffect",
                "flipEffect",
                "creativeEffect",
                "cardsEffect",
                "hashNavigation",
                "history",
                "keyboard",
                "lazy",
                "mousewheel",
                "_navigation",
                "_pagination",
                "parallax",
                "_scrollbar",
                "_thumbs",
                "virtual",
                "zoom",
            ];
            function u(e, t) {
                let s = t.slidesPerView;
                if (t.breakpoints) {
                    const e = n.ZP.prototype.getBreakpoint(t.breakpoints),
                        i = e in t.breakpoints ? t.breakpoints[e] : void 0;
                    i && i.slidesPerView && (s = i.slidesPerView);
                }
                let i = Math.ceil(parseFloat(t.loopedSlides || s, 10));
                return (i += t.loopAdditionalSlides), i > e.length && (i = e.length), i;
            }
            function f(e) {
                const t = [];
                return (
                    i.Children.toArray(e).forEach((e) => {
                        e.type && "SwiperSlide" === e.type.displayName ? t.push(e) : e.props && e.props.children && f(e.props.children).forEach((e) => t.push(e));
                    }),
                    t
                );
            }
            function h(e) {
                const t = [],
                    s = { "container-start": [], "container-end": [], "wrapper-start": [], "wrapper-end": [] };
                return (
                    i.Children.toArray(e).forEach((e) => {
                        if (e.type && "SwiperSlide" === e.type.displayName) t.push(e);
                        else if (e.props && e.props.slot && s[e.props.slot]) s[e.props.slot].push(e);
                        else if (e.props && e.props.children) {
                            const i = f(e.props.children);
                            i.length > 0 ? i.forEach((e) => t.push(e)) : s["container-end"].push(e);
                        } else s["container-end"].push(e);
                    }),
                    { slides: t, slots: s }
                );
            }
            function m({ swiper: e, slides: t, passedParams: s, changedParams: i, nextEl: n, prevEl: l, scrollbarEl: o, paginationEl: d }) {
                const p = i.filter((e) => "children" !== e && "direction" !== e),
                    { params: c, pagination: u, navigation: f, scrollbar: h, virtual: m, thumbs: g } = e;
                let v, w, b, y, C;
                i.includes("thumbs") && s.thumbs && s.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (v = !0),
                    i.includes("controller") && s.controller && s.controller.control && c.controller && !c.controller.control && (w = !0),
                    i.includes("pagination") && s.pagination && (s.pagination.el || d) && (c.pagination || !1 === c.pagination) && u && !u.el && (b = !0),
                    i.includes("scrollbar") && s.scrollbar && (s.scrollbar.el || o) && (c.scrollbar || !1 === c.scrollbar) && h && !h.el && (y = !0),
                    i.includes("navigation") && s.navigation && (s.navigation.prevEl || l) && (s.navigation.nextEl || n) && (c.navigation || !1 === c.navigation) && f && !f.prevEl && !f.nextEl && (C = !0);
                if (
                    (p.forEach((t) => {
                        if (r(c[t]) && r(s[t])) a(c[t], s[t]);
                        else {
                            const n = s[t];
                            (!0 !== n && !1 !== n) || ("navigation" !== t && "pagination" !== t && "scrollbar" !== t)
                                ? (c[t] = s[t])
                                : !1 === n && e[(i = t)] && (e[i].destroy(), "navigation" === i ? ((c[i].prevEl = void 0), (c[i].nextEl = void 0), (e[i].prevEl = void 0), (e[i].nextEl = void 0)) : ((c[i].el = void 0), (e[i].el = void 0)));
                        }
                        var i;
                    }),
                        i.includes("children") && m && c.virtual.enabled ? ((m.slides = t), m.update(!0)) : i.includes("children") && e.lazy && e.params.lazy.enabled && e.lazy.load(),
                        v)
                ) {
                    g.init() && g.update(!0);
                }
                w && (e.controller.control = c.controller.control),
                    b && (d && (c.pagination.el = d), u.init(), u.render(), u.update()),
                    y && (o && (c.scrollbar.el = o), h.init(), h.updateSize(), h.setTranslate()),
                    C && (n && (c.navigation.nextEl = n), l && (c.navigation.prevEl = l), f.init(), f.update()),
                    i.includes("allowSlideNext") && (e.allowSlideNext = s.allowSlideNext),
                    i.includes("allowSlidePrev") && (e.allowSlidePrev = s.allowSlidePrev),
                    i.includes("direction") && e.changeDirection(s.direction, !1),
                    e.update();
            }
            function g(e, t) {
                return "undefined" === typeof window ? (0, i.useEffect)(e, t) : (0, i.useLayoutEffect)(e, t);
            }
            function v() {
                return (v =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var s = arguments[t];
                            for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            const w = (0, i.forwardRef)(({ className: e, tag: t = "div", wrapperTag: s = "div", children: f, onSwiper: w, ...b } = {}, y) => {
                let C = !1;
                const [S, x] = (0, i.useState)("swiper"),
                    [E, T] = (0, i.useState)(null),
                    [k, P] = (0, i.useState)(!1),
                    $ = (0, i.useRef)(!1),
                    M = (0, i.useRef)(null),
                    O = (0, i.useRef)(null),
                    L = (0, i.useRef)(null),
                    _ = (0, i.useRef)(null),
                    z = (0, i.useRef)(null),
                    I = (0, i.useRef)(null),
                    A = (0, i.useRef)(null),
                    N = (0, i.useRef)(null),
                    { params: D, passedParams: G, rest: B, events: j } = (function (e = {}) {
                        const t = { on: {} },
                            s = {},
                            i = {};
                        a(t, n.ZP.defaults), a(t, n.ZP.extendedDefaults), (t._emitClasses = !0), (t.init = !1);
                        const l = {},
                            o = c.map((e) => e.replace(/_/, ""));
                        return (
                            Object.keys(e).forEach((n) => {
                                o.indexOf(n) >= 0
                                    ? r(e[n])
                                        ? ((t[n] = {}), (i[n] = {}), a(t[n], e[n]), a(i[n], e[n]))
                                        : ((t[n] = e[n]), (i[n] = e[n]))
                                    : 0 === n.search(/on[A-Z]/) && "function" === typeof e[n]
                                        ? (s[`${n[2].toLowerCase()}${n.substr(3)}`] = e[n])
                                        : (l[n] = e[n]);
                            }),
                            ["navigation", "pagination", "scrollbar"].forEach((e) => {
                                !0 === t[e] && (t[e] = {}), !1 === t[e] && delete t[e];
                            }),
                            { params: t, passedParams: i, rest: l, events: s }
                        );
                    })(b),
                    { slides: F, slots: H } = h(f),
                    V = () => {
                        P(!k);
                    };
                if (
                    (Object.assign(D.on, {
                        _containerClasses(e, t) {
                            x(t);
                        },
                    }),
                        !M.current &&
                        (Object.assign(D.on, j),
                            (C = !0),
                            (O.current = (function (e) {
                                return new n.ZP(e);
                            })(D)),
                            (O.current.loopCreate = () => { }),
                            (O.current.loopDestroy = () => { }),
                            D.loop && (O.current.loopedSlides = u(F, D)),
                            O.current.virtual && O.current.params.virtual.enabled))
                ) {
                    O.current.virtual.slides = F;
                    const e = { cache: !1, slides: F, renderExternal: T, renderExternalUpdate: !1 };
                    a(O.current.params.virtual, e), a(O.current.originalParams.virtual, e);
                }
                O.current && O.current.on("_beforeBreakpoint", V);
                return (
                    (0, i.useEffect)(() => () => {
                        O.current && O.current.off("_beforeBreakpoint", V);
                    }),
                    (0, i.useEffect)(() => {
                        !$.current && O.current && (O.current.emitSlidesClasses(), ($.current = !0));
                    }),
                    g(() => {
                        if ((y && (y.current = M.current), M.current))
                            return (
                                (function ({ el: e, nextEl: t, prevEl: s, paginationEl: i, scrollbarEl: n, swiper: r }, a) {
                                    l(a) && t && s && ((r.params.navigation.nextEl = t), (r.originalParams.navigation.nextEl = t), (r.params.navigation.prevEl = s), (r.originalParams.navigation.prevEl = s)),
                                        o(a) && i && ((r.params.pagination.el = i), (r.originalParams.pagination.el = i)),
                                        d(a) && n && ((r.params.scrollbar.el = n), (r.originalParams.scrollbar.el = n)),
                                        r.init(e);
                                })({ el: M.current, nextEl: z.current, prevEl: I.current, paginationEl: A.current, scrollbarEl: N.current, swiper: O.current }, D),
                                w && w(O.current),
                                () => {
                                    O.current && !O.current.destroyed && O.current.destroy(!0, !1);
                                }
                            );
                    }, []),
                    g(() => {
                        !C &&
                            j &&
                            O.current &&
                            Object.keys(j).forEach((e) => {
                                O.current.on(e, j[e]);
                            });
                        const e = (function (e, t, s, i) {
                            const n = [];
                            if (!t) return n;
                            const a = (e) => {
                                n.indexOf(e) < 0 && n.push(e);
                            },
                                l = i.map((e) => e.key),
                                o = s.map((e) => e.key);
                            return (
                                l.join("") !== o.join("") && a("children"),
                                i.length !== s.length && a("children"),
                                c
                                    .filter((e) => "_" === e[0])
                                    .map((e) => e.replace(/_/, ""))
                                    .forEach((s) => {
                                        if (s in e && s in t)
                                            if (r(e[s]) && r(t[s])) {
                                                const i = Object.keys(e[s]),
                                                    n = Object.keys(t[s]);
                                                i.length !== n.length
                                                    ? a(s)
                                                    : (i.forEach((i) => {
                                                        e[s][i] !== t[s][i] && a(s);
                                                    }),
                                                        n.forEach((i) => {
                                                            e[s][i] !== t[s][i] && a(s);
                                                        }));
                                            } else e[s] !== t[s] && a(s);
                                    }),
                                n
                            );
                        })(G, L.current, F, _.current);
                        return (
                            (L.current = G),
                            (_.current = F),
                            e.length && O.current && !O.current.destroyed && m({ swiper: O.current, slides: F, passedParams: G, changedParams: e, nextEl: z.current, prevEl: I.current, scrollbarEl: N.current, paginationEl: A.current }),
                            () => {
                                j &&
                                    O.current &&
                                    Object.keys(j).forEach((e) => {
                                        O.current.off(e, j[e]);
                                    });
                            }
                        );
                    }),
                    g(() => {
                        var e;
                        !(e = O.current) ||
                            e.destroyed ||
                            !e.params.virtual ||
                            (e.params.virtual && !e.params.virtual.enabled) ||
                            (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate());
                    }, [E]),
                    i.createElement(
                        t,
                        v({ ref: M, className: p(`${S}${e ? ` ${e}` : ""}`) }, B),
                        H["container-start"],
                        l(D) && i.createElement(i.Fragment, null, i.createElement("div", { ref: I, className: "swiper-button-prev" }), i.createElement("div", { ref: z, className: "swiper-button-next" })),
                        d(D) && i.createElement("div", { ref: N, className: "swiper-scrollbar" }),
                        o(D) && i.createElement("div", { ref: A, className: "swiper-pagination" }),
                        i.createElement(
                            s,
                            { className: "swiper-wrapper" },
                            H["wrapper-start"],
                            D.virtual
                                ? (function (e, t, s) {
                                    if (!s) return null;
                                    const n = e.isHorizontal() ? { [e.rtlTranslate ? "right" : "left"]: `${s.offset}px` } : { top: `${s.offset}px` };
                                    return t.filter((e, t) => t >= s.from && t <= s.to).map((t) => i.cloneElement(t, { swiper: e, style: n }));
                                })(O.current, F, E)
                                : !D.loop || (O.current && O.current.destroyed)
                                    ? F.map((e) => i.cloneElement(e, { swiper: O.current }))
                                    : (function (e, t, s) {
                                        const n = t.map((t, s) => i.cloneElement(t, { swiper: e, "data-swiper-slide-index": s }));
                                        function r(e, t, n) {
                                            return i.cloneElement(e, { key: `${e.key}-duplicate-${t}-${n}`, className: `${e.props.className || ""} ${s.slideDuplicateClass}` });
                                        }
                                        if (s.loopFillGroupWithBlank) {
                                            const e = s.slidesPerGroup - (n.length % s.slidesPerGroup);
                                            if (e !== s.slidesPerGroup)
                                                for (let t = 0; t < e; t += 1) {
                                                    const e = i.createElement("div", { className: `${s.slideClass} ${s.slideBlankClass}` });
                                                    n.push(e);
                                                }
                                        }
                                        "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length);
                                        const a = u(n, s),
                                            l = [],
                                            o = [];
                                        return (
                                            n.forEach((e, t) => {
                                                t < a && o.push(r(e, t, "prepend")), t < n.length && t >= n.length - a && l.push(r(e, t, "append"));
                                            }),
                                            e && (e.loopedSlides = a),
                                            [...l, ...n, ...o]
                                        );
                                    })(O.current, F, D),
                            H["wrapper-end"]
                        ),
                        H["container-end"]
                    )
                );
            });
            function b() {
                return (b =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var s = arguments[t];
                            for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            w.displayName = "Swiper";
            const y = (0, i.forwardRef)(({ tag: e = "div", children: t, className: s = "", swiper: n, zoom: r, virtualIndex: a, ...l } = {}, o) => {
                const d = (0, i.useRef)(null),
                    [c, u] = (0, i.useState)("swiper-slide");
                function f(e, t, s) {
                    t === d.current && u(s);
                }
                let h;
                g(() => {
                    if ((o && (o.current = d.current), d.current && n)) {
                        if (!n.destroyed)
                            return (
                                n.on("_slideClass", f),
                                () => {
                                    n && n.off("_slideClass", f);
                                }
                            );
                        "swiper-slide" !== c && u("swiper-slide");
                    }
                }),
                    g(() => {
                        n && d.current && u(n.getSlideClasses(d.current));
                    }, [n]),
                    "function" === typeof t &&
                    (h = {
                        isActive: c.indexOf("swiper-slide-active") >= 0 || c.indexOf("swiper-slide-duplicate-active") >= 0,
                        isVisible: c.indexOf("swiper-slide-visible") >= 0,
                        isDuplicate: c.indexOf("swiper-slide-duplicate") >= 0,
                        isPrev: c.indexOf("swiper-slide-prev") >= 0 || c.indexOf("swiper-slide-duplicate-prev") >= 0,
                        isNext: c.indexOf("swiper-slide-next") >= 0 || c.indexOf("swiper-slide-duplicate-next") >= 0,
                    });
                const m = () => ("function" === typeof t ? t(h) : t);
                return i.createElement(
                    e,
                    b({ ref: d, className: p(`${c}${s ? ` ${s}` : ""}`), "data-swiper-slide-index": a }, l),
                    r ? i.createElement("div", { className: "swiper-zoom-container", "data-swiper-zoom": "number" === typeof r ? r : void 0 }, m()) : m()
                );
            });
            y.displayName = "SwiperSlide";
        },
        1911: function (e, t, s) {
            "use strict";
            function i(e) {
                return null !== e && "object" === typeof e && "constructor" in e && e.constructor === Object;
            }
            function n(e = {}, t = {}) {
                Object.keys(t).forEach((s) => {
                    "undefined" === typeof e[s] ? (e[s] = t[s]) : i(t[s]) && i(e[s]) && Object.keys(t[s]).length > 0 && n(e[s], t[s]);
                });
            }
            s.d(t, {
                pt: function () {
                    return Q;
                },
                W_: function () {
                    return U;
                },
                tl: function () {
                    return K;
                },
                VS: function () {
                    return J;
                },
                ZP: function () {
                    return X;
                },
            });
            const r = {
                body: {},
                addEventListener() { },
                removeEventListener() { },
                activeElement: { blur() { }, nodeName: "" },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({ initEvent() { } }),
                createElement: () => ({ children: [], childNodes: [], style: {}, setAttribute() { }, getElementsByTagName: () => [] }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
            };
            function a() {
                const e = "undefined" !== typeof document ? document : {};
                return n(e, r), e;
            }
            const l = {
                document: r,
                navigator: { userAgent: "" },
                location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
                history: { replaceState() { }, pushState() { }, go() { }, back() { } },
                CustomEvent: function () {
                    return this;
                },
                addEventListener() { },
                removeEventListener() { },
                getComputedStyle: () => ({ getPropertyValue: () => "" }),
                Image() { },
                Date() { },
                screen: {},
                setTimeout() { },
                clearTimeout() { },
                matchMedia: () => ({}),
                requestAnimationFrame: (e) => ("undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0)),
                cancelAnimationFrame(e) {
                    "undefined" !== typeof setTimeout && clearTimeout(e);
                },
            };
            function o() {
                const e = "undefined" !== typeof window ? window : {};
                return n(e, l), e;
            }
            class d extends Array {
                constructor(e) {
                    super(...(e || [])),
                        (function (e) {
                            const t = e.__proto__;
                            Object.defineProperty(e, "__proto__", {
                                get: () => t,
                                set(e) {
                                    t.__proto__ = e;
                                },
                            });
                        })(this);
                }
            }
            function p(e = []) {
                const t = [];
                return (
                    e.forEach((e) => {
                        Array.isArray(e) ? t.push(...p(e)) : t.push(e);
                    }),
                    t
                );
            }
            function c(e, t) {
                return Array.prototype.filter.call(e, t);
            }
            function u(e, t) {
                const s = o(),
                    i = a();
                let n = [];
                if (!t && e instanceof d) return e;
                if (!e) return new d(n);
                if ("string" === typeof e) {
                    const s = e.trim();
                    if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                        let e = "div";
                        0 === s.indexOf("<li") && (e = "ul"),
                            0 === s.indexOf("<tr") && (e = "tbody"),
                            (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
                            0 === s.indexOf("<tbody") && (e = "table"),
                            0 === s.indexOf("<option") && (e = "select");
                        const t = i.createElement(e);
                        t.innerHTML = s;
                        for (let s = 0; s < t.childNodes.length; s += 1) n.push(t.childNodes[s]);
                    } else
                        n = (function (e, t) {
                            if ("string" !== typeof e) return [e];
                            const s = [],
                                i = t.querySelectorAll(e);
                            for (let n = 0; n < i.length; n += 1) s.push(i[n]);
                            return s;
                        })(e.trim(), t || i);
                } else if (e.nodeType || e === s || e === i) n.push(e);
                else if (Array.isArray(e)) {
                    if (e instanceof d) return e;
                    n = e;
                }
                return new d(
                    (function (e) {
                        const t = [];
                        for (let s = 0; s < e.length; s += 1) -1 === t.indexOf(e[s]) && t.push(e[s]);
                        return t;
                    })(n)
                );
            }
            u.fn = d.prototype;
            const f = "resize scroll".split(" ");
            function h(e) {
                return function (...t) {
                    if ("undefined" === typeof t[0]) {
                        for (let t = 0; t < this.length; t += 1) f.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : u(this[t]).trigger(e));
                        return this;
                    }
                    return this.on(e, ...t);
                };
            }
            h("click"),
                h("blur"),
                h("focus"),
                h("focusin"),
                h("focusout"),
                h("keyup"),
                h("keydown"),
                h("keypress"),
                h("submit"),
                h("change"),
                h("mousedown"),
                h("mousemove"),
                h("mouseup"),
                h("mouseenter"),
                h("mouseleave"),
                h("mouseout"),
                h("mouseover"),
                h("touchstart"),
                h("touchend"),
                h("touchmove"),
                h("resize"),
                h("scroll");
            const m = {
                addClass: function (...e) {
                    const t = p(e.map((e) => e.split(" ")));
                    return (
                        this.forEach((e) => {
                            e.classList.add(...t);
                        }),
                        this
                    );
                },
                removeClass: function (...e) {
                    const t = p(e.map((e) => e.split(" ")));
                    return (
                        this.forEach((e) => {
                            e.classList.remove(...t);
                        }),
                        this
                    );
                },
                hasClass: function (...e) {
                    const t = p(e.map((e) => e.split(" ")));
                    return c(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0).length > 0;
                },
                toggleClass: function (...e) {
                    const t = p(e.map((e) => e.split(" ")));
                    this.forEach((e) => {
                        t.forEach((t) => {
                            e.classList.toggle(t);
                        });
                    });
                },
                attr: function (e, t) {
                    if (1 === arguments.length && "string" === typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (let s = 0; s < this.length; s += 1)
                        if (2 === arguments.length) this[s].setAttribute(e, t);
                        else for (const t in e) (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
                    return this;
                },
                removeAttr: function (e) {
                    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                    return this;
                },
                transform: function (e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                    return this;
                },
                transition: function (e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" !== typeof e ? `${e}ms` : e;
                    return this;
                },
                on: function (...e) {
                    let [t, s, i, n] = e;
                    function r(e) {
                        const t = e.target;
                        if (!t) return;
                        const n = e.target.dom7EventData || [];
                        if ((n.indexOf(e) < 0 && n.unshift(e), u(t).is(s))) i.apply(t, n);
                        else {
                            const e = u(t).parents();
                            for (let t = 0; t < e.length; t += 1) u(e[t]).is(s) && i.apply(e[t], n);
                        }
                    }
                    function a(e) {
                        const t = (e && e.target && e.target.dom7EventData) || [];
                        t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
                    }
                    "function" === typeof e[1] && (([t, i, n] = e), (s = void 0)), n || (n = !1);
                    const l = t.split(" ");
                    let o;
                    for (let d = 0; d < this.length; d += 1) {
                        const e = this[d];
                        if (s)
                            for (o = 0; o < l.length; o += 1) {
                                const t = l[o];
                                e.dom7LiveListeners || (e.dom7LiveListeners = {}), e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []), e.dom7LiveListeners[t].push({ listener: i, proxyListener: r }), e.addEventListener(t, r, n);
                            }
                        else
                            for (o = 0; o < l.length; o += 1) {
                                const t = l[o];
                                e.dom7Listeners || (e.dom7Listeners = {}), e.dom7Listeners[t] || (e.dom7Listeners[t] = []), e.dom7Listeners[t].push({ listener: i, proxyListener: a }), e.addEventListener(t, a, n);
                            }
                    }
                    return this;
                },
                off: function (...e) {
                    let [t, s, i, n] = e;
                    "function" === typeof e[1] && (([t, i, n] = e), (s = void 0)), n || (n = !1);
                    const r = t.split(" ");
                    for (let a = 0; a < r.length; a += 1) {
                        const e = r[a];
                        for (let t = 0; t < this.length; t += 1) {
                            const r = this[t];
                            let a;
                            if ((!s && r.dom7Listeners ? (a = r.dom7Listeners[e]) : s && r.dom7LiveListeners && (a = r.dom7LiveListeners[e]), a && a.length))
                                for (let t = a.length - 1; t >= 0; t -= 1) {
                                    const s = a[t];
                                    (i && s.listener === i) || (i && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === i)
                                        ? (r.removeEventListener(e, s.proxyListener, n), a.splice(t, 1))
                                        : i || (r.removeEventListener(e, s.proxyListener, n), a.splice(t, 1));
                                }
                        }
                    }
                    return this;
                },
                trigger: function (...e) {
                    const t = o(),
                        s = e[0].split(" "),
                        i = e[1];
                    for (let n = 0; n < s.length; n += 1) {
                        const r = s[n];
                        for (let s = 0; s < this.length; s += 1) {
                            const n = this[s];
                            if (t.CustomEvent) {
                                const s = new t.CustomEvent(r, { detail: i, bubbles: !0, cancelable: !0 });
                                (n.dom7EventData = e.filter((e, t) => t > 0)), n.dispatchEvent(s), (n.dom7EventData = []), delete n.dom7EventData;
                            }
                        }
                    }
                    return this;
                },
                transitionEnd: function (e) {
                    const t = this;
                    return (
                        e &&
                        t.on("transitionend", function s(i) {
                            i.target === this && (e.call(this, i), t.off("transitionend", s));
                        }),
                        this
                    );
                },
                outerWidth: function (e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"));
                        }
                        return this[0].offsetWidth;
                    }
                    return null;
                },
                outerHeight: function (e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"));
                        }
                        return this[0].offsetHeight;
                    }
                    return null;
                },
                styles: function () {
                    const e = o();
                    return this[0] ? e.getComputedStyle(this[0], null) : {};
                },
                offset: function () {
                    if (this.length > 0) {
                        const e = o(),
                            t = a(),
                            s = this[0],
                            i = s.getBoundingClientRect(),
                            n = t.body,
                            r = s.clientTop || n.clientTop || 0,
                            l = s.clientLeft || n.clientLeft || 0,
                            d = s === e ? e.scrollY : s.scrollTop,
                            p = s === e ? e.scrollX : s.scrollLeft;
                        return { top: i.top + d - r, left: i.left + p - l };
                    }
                    return null;
                },
                css: function (e, t) {
                    const s = o();
                    let i;
                    if (1 === arguments.length) {
                        if ("string" !== typeof e) {
                            for (i = 0; i < this.length; i += 1) for (const t in e) this[i].style[t] = e[t];
                            return this;
                        }
                        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
                    }
                    if (2 === arguments.length && "string" === typeof e) {
                        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                        return this;
                    }
                    return this;
                },
                each: function (e) {
                    return e
                        ? (this.forEach((t, s) => {
                            e.apply(t, [t, s]);
                        }),
                            this)
                        : this;
                },
                html: function (e) {
                    if ("undefined" === typeof e) return this[0] ? this[0].innerHTML : null;
                    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                    return this;
                },
                text: function (e) {
                    if ("undefined" === typeof e) return this[0] ? this[0].textContent.trim() : null;
                    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                    return this;
                },
                is: function (e) {
                    const t = o(),
                        s = a(),
                        i = this[0];
                    let n, r;
                    if (!i || "undefined" === typeof e) return !1;
                    if ("string" === typeof e) {
                        if (i.matches) return i.matches(e);
                        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                        if (i.msMatchesSelector) return i.msMatchesSelector(e);
                        for (n = u(e), r = 0; r < n.length; r += 1) if (n[r] === i) return !0;
                        return !1;
                    }
                    if (e === s) return i === s;
                    if (e === t) return i === t;
                    if (e.nodeType || e instanceof d) {
                        for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1) if (n[r] === i) return !0;
                        return !1;
                    }
                    return !1;
                },
                index: function () {
                    let e,
                        t = this[0];
                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                        return e;
                    }
                },
                eq: function (e) {
                    if ("undefined" === typeof e) return this;
                    const t = this.length;
                    if (e > t - 1) return u([]);
                    if (e < 0) {
                        const s = t + e;
                        return u(s < 0 ? [] : [this[s]]);
                    }
                    return u([this[e]]);
                },
                append: function (...e) {
                    let t;
                    const s = a();
                    for (let i = 0; i < e.length; i += 1) {
                        t = e[i];
                        for (let e = 0; e < this.length; e += 1)
                            if ("string" === typeof t) {
                                const i = s.createElement("div");
                                for (i.innerHTML = t; i.firstChild;) this[e].appendChild(i.firstChild);
                            } else if (t instanceof d) for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
                            else this[e].appendChild(t);
                    }
                    return this;
                },
                prepend: function (e) {
                    const t = a();
                    let s, i;
                    for (s = 0; s < this.length; s += 1)
                        if ("string" === typeof e) {
                            const n = t.createElement("div");
                            for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(n.childNodes[i], this[s].childNodes[0]);
                        } else if (e instanceof d) for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]);
                        else this[s].insertBefore(e, this[s].childNodes[0]);
                    return this;
                },
                next: function (e) {
                    return this.length > 0 ? (e ? (this[0].nextElementSibling && u(this[0].nextElementSibling).is(e) ? u([this[0].nextElementSibling]) : u([])) : this[0].nextElementSibling ? u([this[0].nextElementSibling]) : u([])) : u([]);
                },
                nextAll: function (e) {
                    const t = [];
                    let s = this[0];
                    if (!s) return u([]);
                    for (; s.nextElementSibling;) {
                        const i = s.nextElementSibling;
                        e ? u(i).is(e) && t.push(i) : t.push(i), (s = i);
                    }
                    return u(t);
                },
                prev: function (e) {
                    if (this.length > 0) {
                        const t = this[0];
                        return e ? (t.previousElementSibling && u(t.previousElementSibling).is(e) ? u([t.previousElementSibling]) : u([])) : t.previousElementSibling ? u([t.previousElementSibling]) : u([]);
                    }
                    return u([]);
                },
                prevAll: function (e) {
                    const t = [];
                    let s = this[0];
                    if (!s) return u([]);
                    for (; s.previousElementSibling;) {
                        const i = s.previousElementSibling;
                        e ? u(i).is(e) && t.push(i) : t.push(i), (s = i);
                    }
                    return u(t);
                },
                parent: function (e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? u(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
                    return u(t);
                },
                parents: function (e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        let i = this[s].parentNode;
                        for (; i;) e ? u(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
                    }
                    return u(t);
                },
                closest: function (e) {
                    let t = this;
                    return "undefined" === typeof e ? u([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
                },
                find: function (e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        const i = this[s].querySelectorAll(e);
                        for (let e = 0; e < i.length; e += 1) t.push(i[e]);
                    }
                    return u(t);
                },
                children: function (e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        const i = this[s].children;
                        for (let s = 0; s < i.length; s += 1) (e && !u(i[s]).is(e)) || t.push(i[s]);
                    }
                    return u(t);
                },
                filter: function (e) {
                    return u(c(this, e));
                },
                remove: function () {
                    for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this;
                },
            };
            Object.keys(m).forEach((e) => {
                Object.defineProperty(u.fn, e, { value: m[e], writable: !0 });
            });
            var g = u;
            function v(e, t = 0) {
                return setTimeout(e, t);
            }
            function w() {
                return Date.now();
            }
            function b(e, t = "x") {
                const s = o();
                let i, n, r;
                const a = (function (e) {
                    const t = o();
                    let s;
                    return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
                })(e);
                return (
                    s.WebKitCSSMatrix
                        ? ((n = a.transform || a.webkitTransform),
                            n.split(",").length > 6 &&
                            (n = n
                                .split(", ")
                                .map((e) => e.replace(",", "."))
                                .join(", ")),
                            (r = new s.WebKitCSSMatrix("none" === n ? "" : n)))
                        : ((r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")), (i = r.toString().split(","))),
                    "x" === t && (n = s.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
                    "y" === t && (n = s.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
                    n || 0
                );
            }
            function y(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
            }
            function C(...e) {
                const t = Object(e[0]),
                    s = ["__proto__", "constructor", "prototype"];
                for (let n = 1; n < e.length; n += 1) {
                    const r = e[n];
                    if (void 0 !== r && null !== r && ((i = r), !("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement ? i instanceof HTMLElement : i && (1 === i.nodeType || 11 === i.nodeType)))) {
                        const e = Object.keys(Object(r)).filter((e) => s.indexOf(e) < 0);
                        for (let s = 0, i = e.length; s < i; s += 1) {
                            const i = e[s],
                                n = Object.getOwnPropertyDescriptor(r, i);
                            void 0 !== n && n.enumerable && (y(t[i]) && y(r[i]) ? (r[i].__swiper__ ? (t[i] = r[i]) : C(t[i], r[i])) : !y(t[i]) && y(r[i]) ? ((t[i] = {}), r[i].__swiper__ ? (t[i] = r[i]) : C(t[i], r[i])) : (t[i] = r[i]));
                        }
                    }
                }
                var i;
                return t;
            }
            function S(e, t, s) {
                e.style.setProperty(t, s);
            }
            function x({ swiper: e, targetPosition: t, side: s }) {
                const i = o(),
                    n = -e.translate;
                let r,
                    a = null;
                const l = e.params.speed;
                (e.wrapperEl.style.scrollSnapType = "none"), i.cancelAnimationFrame(e.cssModeFrameID);
                const d = t > n ? "next" : "prev",
                    p = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
                    c = () => {
                        (r = new Date().getTime()), null === a && (a = r);
                        const o = Math.max(Math.min((r - a) / l, 1), 0),
                            d = 0.5 - Math.cos(o * Math.PI) / 2;
                        let u = n + d * (t - n);
                        if ((p(u, t) && (u = t), e.wrapperEl.scrollTo({ [s]: u }), p(u, t)))
                            return (
                                (e.wrapperEl.style.overflow = "hidden"),
                                (e.wrapperEl.style.scrollSnapType = ""),
                                setTimeout(() => {
                                    (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [s]: u });
                                }),
                                void i.cancelAnimationFrame(e.cssModeFrameID)
                            );
                        e.cssModeFrameID = i.requestAnimationFrame(c);
                    };
                c();
            }
            let E, T, k;
            function P() {
                return (
                    E ||
                    (E = (function () {
                        const e = o(),
                            t = a();
                        return {
                            smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                            touch: !!("ontouchstart" in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
                            passiveListener: (function () {
                                let t = !1;
                                try {
                                    const s = Object.defineProperty({}, "passive", {
                                        get() {
                                            t = !0;
                                        },
                                    });
                                    e.addEventListener("testPassiveListener", null, s);
                                } catch (s) { }
                                return t;
                            })(),
                            gestures: "ongesturestart" in e,
                        };
                    })()),
                    E
                );
            }
            function $(e = {}) {
                return (
                    T ||
                    (T = (function ({ userAgent: e } = {}) {
                        const t = P(),
                            s = o(),
                            i = s.navigator.platform,
                            n = e || s.navigator.userAgent,
                            r = { ios: !1, android: !1 },
                            a = s.screen.width,
                            l = s.screen.height,
                            d = n.match(/(Android);?[\s\/]+([\d.]+)?/);
                        let p = n.match(/(iPad).*OS\s([\d_]+)/);
                        const c = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                            u = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                            f = "Win32" === i;
                        let h = "MacIntel" === i;
                        return (
                            !p &&
                            h &&
                            t.touch &&
                            ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${a}x${l}`) >= 0 &&
                            ((p = n.match(/(Version)\/([\d.]+)/)), p || (p = [0, 1, "13_0_0"]), (h = !1)),
                            d && !f && ((r.os = "android"), (r.android = !0)),
                            (p || u || c) && ((r.os = "ios"), (r.ios = !0)),
                            r
                        );
                    })(e)),
                    T
                );
            }
            function M() {
                return (
                    k ||
                    (k = (function () {
                        const e = o();
                        return {
                            isSafari: (function () {
                                const t = e.navigator.userAgent.toLowerCase();
                                return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
                            })(),
                            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
                        };
                    })()),
                    k
                );
            }
            var O = {
                on(e, t, s) {
                    const i = this;
                    if ("function" !== typeof t) return i;
                    const n = s ? "unshift" : "push";
                    return (
                        e.split(" ").forEach((e) => {
                            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][n](t);
                        }),
                        i
                    );
                },
                once(e, t, s) {
                    const i = this;
                    if ("function" !== typeof t) return i;
                    function n(...s) {
                        i.off(e, n), n.__emitterProxy && delete n.__emitterProxy, t.apply(i, s);
                    }
                    return (n.__emitterProxy = t), i.on(e, n, s);
                },
                onAny(e, t) {
                    const s = this;
                    if ("function" !== typeof e) return s;
                    const i = t ? "unshift" : "push";
                    return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s;
                },
                offAny(e) {
                    const t = this;
                    if (!t.eventsAnyListeners) return t;
                    const s = t.eventsAnyListeners.indexOf(e);
                    return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
                },
                off(e, t) {
                    const s = this;
                    return s.eventsListeners
                        ? (e.split(" ").forEach((e) => {
                            "undefined" === typeof t
                                ? (s.eventsListeners[e] = [])
                                : s.eventsListeners[e] &&
                                s.eventsListeners[e].forEach((i, n) => {
                                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) && s.eventsListeners[e].splice(n, 1);
                                });
                        }),
                            s)
                        : s;
                },
                emit(...e) {
                    const t = this;
                    if (!t.eventsListeners) return t;
                    let s, i, n;
                    "string" === typeof e[0] || Array.isArray(e[0]) ? ((s = e[0]), (i = e.slice(1, e.length)), (n = t)) : ((s = e[0].events), (i = e[0].data), (n = e[0].context || t)), i.unshift(n);
                    return (
                        (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
                            t.eventsAnyListeners &&
                                t.eventsAnyListeners.length &&
                                t.eventsAnyListeners.forEach((t) => {
                                    t.apply(n, [e, ...i]);
                                }),
                                t.eventsListeners &&
                                t.eventsListeners[e] &&
                                t.eventsListeners[e].forEach((e) => {
                                    e.apply(n, i);
                                });
                        }),
                        t
                    );
                },
            };
            function L({ swiper: e, runCallbacks: t, direction: s, step: i }) {
                const { activeIndex: n, previousIndex: r } = e;
                let a = s;
                if ((a || (a = n > r ? "next" : n < r ? "prev" : "reset"), e.emit(`transition${i}`), t && n !== r)) {
                    if ("reset" === a) return void e.emit(`slideResetTransition${i}`);
                    e.emit(`slideChangeTransition${i}`), "next" === a ? e.emit(`slideNextTransition${i}`) : e.emit(`slidePrevTransition${i}`);
                }
            }
            function _(e) {
                const t = this,
                    s = a(),
                    i = o(),
                    n = t.touchEventsData,
                    { params: r, touches: l, enabled: d } = t;
                if (!d) return;
                if (t.animating && r.preventInteractionOnTransition) return;
                !t.animating && r.cssMode && r.loop && t.loopFix();
                let p = e;
                p.originalEvent && (p = p.originalEvent);
                let c = g(p.target);
                if ("wrapper" === r.touchEventsTarget && !c.closest(t.wrapperEl).length) return;
                if (((n.isTouchEvent = "touchstart" === p.type), !n.isTouchEvent && "which" in p && 3 === p.which)) return;
                if (!n.isTouchEvent && "button" in p && p.button > 0) return;
                if (n.isTouched && n.isMoved) return;
                !!r.noSwipingClass && "" !== r.noSwipingClass && p.target && p.target.shadowRoot && e.path && e.path[0] && (c = g(e.path[0]));
                const u = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
                    f = !(!p.target || !p.target.shadowRoot);
                if (
                    r.noSwiping &&
                    (f
                        ? (function (e, t = this) {
                            return (function t(s) {
                                return s && s !== a() && s !== o() ? (s.assignedSlot && (s = s.assignedSlot), s.closest(e) || t(s.getRootNode().host)) : null;
                            })(t);
                        })(u, p.target)
                        : c.closest(u)[0])
                )
                    return void (t.allowClick = !0);
                if (r.swipeHandler && !c.closest(r.swipeHandler)[0]) return;
                (l.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX), (l.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY);
                const h = l.currentX,
                    m = l.currentY,
                    v = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                    b = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                if (v && (h <= b || h >= i.innerWidth - b)) {
                    if ("prevent" !== v) return;
                    e.preventDefault();
                }
                if (
                    (Object.assign(n, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
                        (l.startX = h),
                        (l.startY = m),
                        (n.touchStartTime = w()),
                        (t.allowClick = !0),
                        t.updateSize(),
                        (t.swipeDirection = void 0),
                        r.threshold > 0 && (n.allowThresholdMove = !1),
                        "touchstart" !== p.type)
                ) {
                    let e = !0;
                    c.is(n.focusableElements) && (e = !1), s.activeElement && g(s.activeElement).is(n.focusableElements) && s.activeElement !== c[0] && s.activeElement.blur();
                    const i = e && t.allowTouchMove && r.touchStartPreventDefault;
                    (!r.touchStartForcePreventDefault && !i) || c[0].isContentEditable || p.preventDefault();
                }
                t.emit("touchStart", p);
            }
            function z(e) {
                const t = a(),
                    s = this,
                    i = s.touchEventsData,
                    { params: n, touches: r, rtlTranslate: l, enabled: o } = s;
                if (!o) return;
                let d = e;
                if ((d.originalEvent && (d = d.originalEvent), !i.isTouched)) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", d));
                if (i.isTouchEvent && "touchmove" !== d.type) return;
                const p = "touchmove" === d.type && d.targetTouches && (d.targetTouches[0] || d.changedTouches[0]),
                    c = "touchmove" === d.type ? p.pageX : d.pageX,
                    u = "touchmove" === d.type ? p.pageY : d.pageY;
                if (d.preventedByNestedSwiper) return (r.startX = c), void (r.startY = u);
                if (!s.allowTouchMove) return (s.allowClick = !1), void (i.isTouched && (Object.assign(r, { startX: c, startY: u, currentX: c, currentY: u }), (i.touchStartTime = w())));
                if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                    if (s.isVertical()) {
                        if ((u < r.startY && s.translate <= s.maxTranslate()) || (u > r.startY && s.translate >= s.minTranslate())) return (i.isTouched = !1), void (i.isMoved = !1);
                    } else if ((c < r.startX && s.translate <= s.maxTranslate()) || (c > r.startX && s.translate >= s.minTranslate())) return;
                if (i.isTouchEvent && t.activeElement && d.target === t.activeElement && g(d.target).is(i.focusableElements)) return (i.isMoved = !0), void (s.allowClick = !1);
                if ((i.allowTouchCallbacks && s.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1)) return;
                (r.currentX = c), (r.currentY = u);
                const f = r.currentX - r.startX,
                    h = r.currentY - r.startY;
                if (s.params.threshold && Math.sqrt(f ** 2 + h ** 2) < s.params.threshold) return;
                if ("undefined" === typeof i.isScrolling) {
                    let e;
                    (s.isHorizontal() && r.currentY === r.startY) || (s.isVertical() && r.currentX === r.startX)
                        ? (i.isScrolling = !1)
                        : f * f + h * h >= 25 && ((e = (180 * Math.atan2(Math.abs(h), Math.abs(f))) / Math.PI), (i.isScrolling = s.isHorizontal() ? e > n.touchAngle : 90 - e > n.touchAngle));
                }
                if ((i.isScrolling && s.emit("touchMoveOpposite", d), "undefined" === typeof i.startMoving && ((r.currentX === r.startX && r.currentY === r.startY) || (i.startMoving = !0)), i.isScrolling)) return void (i.isTouched = !1);
                if (!i.startMoving) return;
                (s.allowClick = !1),
                    !n.cssMode && d.cancelable && d.preventDefault(),
                    n.touchMoveStopPropagation && !n.nested && d.stopPropagation(),
                    i.isMoved ||
                    (n.loop && !n.cssMode && s.loopFix(),
                        (i.startTranslate = s.getTranslate()),
                        s.setTransition(0),
                        s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                        (i.allowMomentumBounce = !1),
                        !n.grabCursor || (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) || s.setGrabCursor(!0),
                        s.emit("sliderFirstMove", d)),
                    s.emit("sliderMove", d),
                    (i.isMoved = !0);
                let m = s.isHorizontal() ? f : h;
                (r.diff = m), (m *= n.touchRatio), l && (m = -m), (s.swipeDirection = m > 0 ? "prev" : "next"), (i.currentTranslate = m + i.startTranslate);
                let v = !0,
                    b = n.resistanceRatio;
                if (
                    (n.touchReleaseOnEdges && (b = 0),
                        m > 0 && i.currentTranslate > s.minTranslate()
                            ? ((v = !1), n.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + m) ** b))
                            : m < 0 && i.currentTranslate < s.maxTranslate() && ((v = !1), n.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - m) ** b)),
                        v && (d.preventedByNestedSwiper = !0),
                        !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
                        !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
                        s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate),
                        n.threshold > 0)
                ) {
                    if (!(Math.abs(m) > n.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                    if (!i.allowThresholdMove)
                        return (i.allowThresholdMove = !0), (r.startX = r.currentX), (r.startY = r.currentY), (i.currentTranslate = i.startTranslate), void (r.diff = s.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY);
                }
                n.followFinger &&
                    !n.cssMode &&
                    (((n.freeMode && n.freeMode.enabled && s.freeMode) || n.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()),
                        s.params.freeMode && n.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
                        s.updateProgress(i.currentTranslate),
                        s.setTranslate(i.currentTranslate));
            }
            function I(e) {
                const t = this,
                    s = t.touchEventsData,
                    { params: i, touches: n, rtlTranslate: r, slidesGrid: a, enabled: l } = t;
                if (!l) return;
                let o = e;
                if ((o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), (s.allowTouchCallbacks = !1), !s.isTouched))
                    return s.isMoved && i.grabCursor && t.setGrabCursor(!1), (s.isMoved = !1), void (s.startMoving = !1);
                i.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                const d = w(),
                    p = d - s.touchStartTime;
                if (t.allowClick) {
                    const e = o.path || (o.composedPath && o.composedPath());
                    t.updateClickedSlide((e && e[0]) || o.target), t.emit("tap click", o), p < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o);
                }
                if (
                    ((s.lastClickTime = w()),
                        v(() => {
                            t.destroyed || (t.allowClick = !0);
                        }),
                        !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === n.diff || s.currentTranslate === s.startTranslate)
                )
                    return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
                let c;
                if (((s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1), (c = i.followFinger ? (r ? t.translate : -t.translate) : -s.currentTranslate), i.cssMode)) return;
                if (t.params.freeMode && i.freeMode.enabled) return void t.freeMode.onTouchEnd({ currentPos: c });
                let u = 0,
                    f = t.slidesSizesGrid[0];
                for (let g = 0; g < a.length; g += g < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
                    const e = g < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                    "undefined" !== typeof a[g + e] ? c >= a[g] && c < a[g + e] && ((u = g), (f = a[g + e] - a[g])) : c >= a[g] && ((u = g), (f = a[a.length - 1] - a[a.length - 2]));
                }
                const h = (c - a[u]) / f,
                    m = u < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                if (p > i.longSwipesMs) {
                    if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (h >= i.longSwipesRatio ? t.slideTo(u + m) : t.slideTo(u)), "prev" === t.swipeDirection && (h > 1 - i.longSwipesRatio ? t.slideTo(u + m) : t.slideTo(u));
                } else {
                    if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
                        ? o.target === t.navigation.nextEl
                            ? t.slideTo(u + m)
                            : t.slideTo(u)
                        : ("next" === t.swipeDirection && t.slideTo(u + m), "prev" === t.swipeDirection && t.slideTo(u));
                }
            }
            function A() {
                const e = this,
                    { params: t, el: s } = e;
                if (s && 0 === s.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                const { allowSlideNext: i, allowSlidePrev: n, snapGrid: r } = e;
                (e.allowSlideNext = !0),
                    (e.allowSlidePrev = !0),
                    e.updateSize(),
                    e.updateSlides(),
                    e.updateSlidesClasses(),
                    ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
                    (e.allowSlidePrev = n),
                    (e.allowSlideNext = i),
                    e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
            }
            function N(e) {
                const t = this;
                t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
            }
            function D() {
                const e = this,
                    { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
                if (!i) return;
                let n;
                (e.previousTranslate = e.translate), e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop), -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                const r = e.maxTranslate() - e.minTranslate();
                (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r), n !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
            }
            let G = !1;
            function B() { }
            const j = (e, t) => {
                const s = a(),
                    { params: i, touchEvents: n, el: r, wrapperEl: l, device: o, support: d } = e,
                    p = !!i.nested,
                    c = "on" === t ? "addEventListener" : "removeEventListener",
                    u = t;
                if (d.touch) {
                    const t = !("touchstart" !== n.start || !d.passiveListener || !i.passiveListeners) && { passive: !0, capture: !1 };
                    r[c](n.start, e.onTouchStart, t), r[c](n.move, e.onTouchMove, d.passiveListener ? { passive: !1, capture: p } : p), r[c](n.end, e.onTouchEnd, t), n.cancel && r[c](n.cancel, e.onTouchEnd, t);
                } else r[c](n.start, e.onTouchStart, !1), s[c](n.move, e.onTouchMove, p), s[c](n.end, e.onTouchEnd, !1);
                (i.preventClicks || i.preventClicksPropagation) && r[c]("click", e.onClick, !0),
                    i.cssMode && l[c]("scroll", e.onScroll),
                    i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : e[u]("observerUpdate", A, !0);
            };
            const F = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var H = {
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
                longSwipesRatio: 0.5,
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
                resistanceRatio: 0.85,
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
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
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
                _emitClasses: !1,
            };
            function V(e, t) {
                return function (s = {}) {
                    const i = Object.keys(s)[0],
                        n = s[i];
                    "object" === typeof n && null !== n
                        ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === e[i] && (e[i] = { auto: !0 }),
                            i in e && "enabled" in n ? (!0 === e[i] && (e[i] = { enabled: !0 }), "object" !== typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = { enabled: !1 }), C(t, s)) : C(t, s))
                        : C(t, s);
                };
            }
            const R = {
                eventsEmitter: O,
                update: {
                    updateSize: function () {
                        const e = this;
                        let t, s;
                        const i = e.$el;
                        (t = "undefined" !== typeof e.params.width && null !== e.params.width ? e.params.width : i[0].clientWidth),
                            (s = "undefined" !== typeof e.params.height && null !== e.params.height ? e.params.height : i[0].clientHeight),
                            (0 === t && e.isHorizontal()) ||
                            (0 === s && e.isVertical()) ||
                            ((t = t - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10)),
                                (s = s - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10)),
                                Number.isNaN(t) && (t = 0),
                                Number.isNaN(s) && (s = 0),
                                Object.assign(e, { width: t, height: s, size: e.isHorizontal() ? t : s }));
                    },
                    updateSlides: function () {
                        const e = this;
                        function t(t) {
                            return e.isHorizontal()
                                ? t
                                : {
                                    width: "height",
                                    "margin-top": "margin-left",
                                    "margin-bottom ": "margin-right",
                                    "margin-left": "margin-top",
                                    "margin-right": "margin-bottom",
                                    "padding-left": "padding-top",
                                    "padding-right": "padding-bottom",
                                    marginRight: "marginBottom",
                                }[t];
                        }
                        function s(e, s) {
                            return parseFloat(e.getPropertyValue(t(s)) || 0);
                        }
                        const i = e.params,
                            { $wrapperEl: n, size: r, rtlTranslate: a, wrongRTL: l } = e,
                            o = e.virtual && i.virtual.enabled,
                            d = o ? e.virtual.slides.length : e.slides.length,
                            p = n.children(`.${e.params.slideClass}`),
                            c = o ? e.virtual.slides.length : p.length;
                        let u = [];
                        const f = [],
                            h = [];
                        let m = i.slidesOffsetBefore;
                        "function" === typeof m && (m = i.slidesOffsetBefore.call(e));
                        let g = i.slidesOffsetAfter;
                        "function" === typeof g && (g = i.slidesOffsetAfter.call(e));
                        const v = e.snapGrid.length,
                            w = e.slidesGrid.length;
                        let b = i.spaceBetween,
                            y = -m,
                            C = 0,
                            x = 0;
                        if ("undefined" === typeof r) return;
                        "string" === typeof b && b.indexOf("%") >= 0 && (b = (parseFloat(b.replace("%", "")) / 100) * r),
                            (e.virtualSize = -b),
                            a ? p.css({ marginLeft: "", marginBottom: "", marginTop: "" }) : p.css({ marginRight: "", marginBottom: "", marginTop: "" }),
                            i.centeredSlides && i.cssMode && (S(e.wrapperEl, "--swiper-centered-offset-before", ""), S(e.wrapperEl, "--swiper-centered-offset-after", ""));
                        const E = i.grid && i.grid.rows > 1 && e.grid;
                        let T;
                        E && e.grid.initSlides(c);
                        const k = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter((e) => "undefined" !== typeof i.breakpoints[e].slidesPerView).length > 0;
                        for (let S = 0; S < c; S += 1) {
                            T = 0;
                            const n = p.eq(S);
                            if ((E && e.grid.updateSlide(S, n, c, t), "none" !== n.css("display"))) {
                                if ("auto" === i.slidesPerView) {
                                    k && (p[S].style[t("width")] = "");
                                    const r = getComputedStyle(n[0]),
                                        a = n[0].style.transform,
                                        l = n[0].style.webkitTransform;
                                    if ((a && (n[0].style.transform = "none"), l && (n[0].style.webkitTransform = "none"), i.roundLengths)) T = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                                    else {
                                        const e = s(r, "width"),
                                            t = s(r, "padding-left"),
                                            i = s(r, "padding-right"),
                                            a = s(r, "margin-left"),
                                            l = s(r, "margin-right"),
                                            o = r.getPropertyValue("box-sizing");
                                        if (o && "border-box" === o) T = e + a + l;
                                        else {
                                            const { clientWidth: s, offsetWidth: r } = n[0];
                                            T = e + t + i + a + l + (r - s);
                                        }
                                    }
                                    a && (n[0].style.transform = a), l && (n[0].style.webkitTransform = l), i.roundLengths && (T = Math.floor(T));
                                } else (T = (r - (i.slidesPerView - 1) * b) / i.slidesPerView), i.roundLengths && (T = Math.floor(T)), p[S] && (p[S].style[t("width")] = `${T}px`);
                                p[S] && (p[S].swiperSlideSize = T),
                                    h.push(T),
                                    i.centeredSlides
                                        ? ((y = y + T / 2 + C / 2 + b),
                                            0 === C && 0 !== S && (y = y - r / 2 - b),
                                            0 === S && (y = y - r / 2 - b),
                                            Math.abs(y) < 0.001 && (y = 0),
                                            i.roundLengths && (y = Math.floor(y)),
                                            x % i.slidesPerGroup === 0 && u.push(y),
                                            f.push(y))
                                        : (i.roundLengths && (y = Math.floor(y)), (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup === 0 && u.push(y), f.push(y), (y = y + T + b)),
                                    (e.virtualSize += T + b),
                                    (C = T),
                                    (x += 1);
                            }
                        }
                        if (
                            ((e.virtualSize = Math.max(e.virtualSize, r) + g),
                                a && l && ("slide" === i.effect || "coverflow" === i.effect) && n.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
                                i.setWrapperSize && n.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
                                E && e.grid.updateWrapperSize(T, u, t),
                                !i.centeredSlides)
                        ) {
                            const t = [];
                            for (let s = 0; s < u.length; s += 1) {
                                let n = u[s];
                                i.roundLengths && (n = Math.floor(n)), u[s] <= e.virtualSize - r && t.push(n);
                            }
                            (u = t), Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r);
                        }
                        if ((0 === u.length && (u = [0]), 0 !== i.spaceBetween)) {
                            const s = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
                            p.filter((e, t) => !i.cssMode || t !== p.length - 1).css({ [s]: `${b}px` });
                        }
                        if (i.centeredSlides && i.centeredSlidesBounds) {
                            let e = 0;
                            h.forEach((t) => {
                                e += t + (i.spaceBetween ? i.spaceBetween : 0);
                            }),
                                (e -= i.spaceBetween);
                            const t = e - r;
                            u = u.map((e) => (e < 0 ? -m : e > t ? t + g : e));
                        }
                        if (i.centerInsufficientSlides) {
                            let e = 0;
                            if (
                                (h.forEach((t) => {
                                    e += t + (i.spaceBetween ? i.spaceBetween : 0);
                                }),
                                    (e -= i.spaceBetween),
                                    e < r)
                            ) {
                                const t = (r - e) / 2;
                                u.forEach((e, s) => {
                                    u[s] = e - t;
                                }),
                                    f.forEach((e, s) => {
                                        f[s] = e + t;
                                    });
                            }
                        }
                        if ((Object.assign(e, { slides: p, snapGrid: u, slidesGrid: f, slidesSizesGrid: h }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)) {
                            S(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), S(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
                            const t = -e.snapGrid[0],
                                s = -e.slidesGrid[0];
                            (e.snapGrid = e.snapGrid.map((e) => e + t)), (e.slidesGrid = e.slidesGrid.map((e) => e + s));
                        }
                        c !== d && e.emit("slidesLengthChange"),
                            u.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
                            f.length !== w && e.emit("slidesGridLengthChange"),
                            i.watchSlidesProgress && e.updateSlidesOffset();
                    },
                    updateAutoHeight: function (e) {
                        const t = this,
                            s = [],
                            i = t.virtual && t.params.virtual.enabled;
                        let n,
                            r = 0;
                        "number" === typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                        const a = (e) => (i ? t.slides.filter((t) => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0] : t.slides.eq(e)[0]);
                        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                            if (t.params.centeredSlides)
                                t.visibleSlides.each((e) => {
                                    s.push(e);
                                });
                            else
                                for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                                    const e = t.activeIndex + n;
                                    if (e > t.slides.length && !i) break;
                                    s.push(a(e));
                                }
                        else s.push(a(t.activeIndex));
                        for (n = 0; n < s.length; n += 1)
                            if ("undefined" !== typeof s[n]) {
                                const e = s[n].offsetHeight;
                                r = e > r ? e : r;
                            }
                        r && t.$wrapperEl.css("height", `${r}px`);
                    },
                    updateSlidesOffset: function () {
                        const e = this,
                            t = e.slides;
                        for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop;
                    },
                    updateSlidesProgress: function (e = (this && this.translate) || 0) {
                        const t = this,
                            s = t.params,
                            { slides: i, rtlTranslate: n, snapGrid: r } = t;
                        if (0 === i.length) return;
                        "undefined" === typeof i[0].swiperSlideOffset && t.updateSlidesOffset();
                        let a = -e;
                        n && (a = e), i.removeClass(s.slideVisibleClass), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
                        for (let l = 0; l < i.length; l += 1) {
                            const e = i[l];
                            let o = e.swiperSlideOffset;
                            s.cssMode && s.centeredSlides && (o -= i[0].swiperSlideOffset);
                            const d = (a + (s.centeredSlides ? t.minTranslate() : 0) - o) / (e.swiperSlideSize + s.spaceBetween),
                                p = (a - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (e.swiperSlideSize + s.spaceBetween),
                                c = -(a - o),
                                u = c + t.slidesSizesGrid[l];
                            ((c >= 0 && c < t.size - 1) || (u > 1 && u <= t.size) || (c <= 0 && u >= t.size)) && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(l), i.eq(l).addClass(s.slideVisibleClass)),
                                (e.progress = n ? -d : d),
                                (e.originalProgress = n ? -p : p);
                        }
                        t.visibleSlides = g(t.visibleSlides);
                    },
                    updateProgress: function (e) {
                        const t = this;
                        if ("undefined" === typeof e) {
                            const s = t.rtlTranslate ? -1 : 1;
                            e = (t && t.translate && t.translate * s) || 0;
                        }
                        const s = t.params,
                            i = t.maxTranslate() - t.minTranslate();
                        let { progress: n, isBeginning: r, isEnd: a } = t;
                        const l = r,
                            o = a;
                        0 === i ? ((n = 0), (r = !0), (a = !0)) : ((n = (e - t.minTranslate()) / i), (r = n <= 0), (a = n >= 1)),
                            Object.assign(t, { progress: n, isBeginning: r, isEnd: a }),
                            (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) && t.updateSlidesProgress(e),
                            r && !l && t.emit("reachBeginning toEdge"),
                            a && !o && t.emit("reachEnd toEdge"),
                            ((l && !r) || (o && !a)) && t.emit("fromEdge"),
                            t.emit("progress", n);
                    },
                    updateSlidesClasses: function () {
                        const e = this,
                            { slides: t, params: s, $wrapperEl: i, activeIndex: n, realIndex: r } = e,
                            a = e.virtual && s.virtual.enabled;
                        let l;
                        t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),
                            (l = a ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${n}"]`) : t.eq(n)),
                            l.addClass(s.slideActiveClass),
                            s.loop &&
                            (l.hasClass(s.slideDuplicateClass)
                                ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass)
                                : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
                        let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
                        s.loop && 0 === o.length && ((o = t.eq(0)), o.addClass(s.slideNextClass));
                        let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
                        s.loop && 0 === d.length && ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
                            s.loop &&
                            (o.hasClass(s.slideDuplicateClass)
                                ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass)
                                : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),
                                d.hasClass(s.slideDuplicateClass)
                                    ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)
                                    : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),
                            e.emitSlidesClasses();
                    },
                    updateActiveIndex: function (e) {
                        const t = this,
                            s = t.rtlTranslate ? t.translate : -t.translate,
                            { slidesGrid: i, snapGrid: n, params: r, activeIndex: a, realIndex: l, snapIndex: o } = t;
                        let d,
                            p = e;
                        if ("undefined" === typeof p) {
                            for (let e = 0; e < i.length; e += 1) "undefined" !== typeof i[e + 1] ? (s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2 ? (p = e) : s >= i[e] && s < i[e + 1] && (p = e + 1)) : s >= i[e] && (p = e);
                            r.normalizeSlideIndex && (p < 0 || "undefined" === typeof p) && (p = 0);
                        }
                        if (n.indexOf(s) >= 0) d = n.indexOf(s);
                        else {
                            const e = Math.min(r.slidesPerGroupSkip, p);
                            d = e + Math.floor((p - e) / r.slidesPerGroup);
                        }
                        if ((d >= n.length && (d = n.length - 1), p === a)) return void (d !== o && ((t.snapIndex = d), t.emit("snapIndexChange")));
                        const c = parseInt(t.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
                        Object.assign(t, { snapIndex: d, realIndex: c, previousIndex: a, activeIndex: p }),
                            t.emit("activeIndexChange"),
                            t.emit("snapIndexChange"),
                            l !== c && t.emit("realIndexChange"),
                            (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
                    },
                    updateClickedSlide: function (e) {
                        const t = this,
                            s = t.params,
                            i = g(e).closest(`.${s.slideClass}`)[0];
                        let n,
                            r = !1;
                        if (i)
                            for (let a = 0; a < t.slides.length; a += 1)
                                if (t.slides[a] === i) {
                                    (r = !0), (n = a);
                                    break;
                                }
                        if (!i || !r) return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
                        (t.clickedSlide = i),
                            t.virtual && t.params.virtual.enabled ? (t.clickedIndex = parseInt(g(i).attr("data-swiper-slide-index"), 10)) : (t.clickedIndex = n),
                            s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
                    },
                },
                translate: {
                    getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
                        const { params: t, rtlTranslate: s, translate: i, $wrapperEl: n } = this;
                        if (t.virtualTranslate) return s ? -i : i;
                        if (t.cssMode) return i;
                        let r = b(n[0], e);
                        return s && (r = -r), r || 0;
                    },
                    setTranslate: function (e, t) {
                        const s = this,
                            { rtlTranslate: i, params: n, $wrapperEl: r, wrapperEl: a, progress: l } = s;
                        let o,
                            d = 0,
                            p = 0;
                        s.isHorizontal() ? (d = i ? -e : e) : (p = e),
                            n.roundLengths && ((d = Math.floor(d)), (p = Math.floor(p))),
                            n.cssMode ? (a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -p) : n.virtualTranslate || r.transform(`translate3d(${d}px, ${p}px, 0px)`),
                            (s.previousTranslate = s.translate),
                            (s.translate = s.isHorizontal() ? d : p);
                        const c = s.maxTranslate() - s.minTranslate();
                        (o = 0 === c ? 0 : (e - s.minTranslate()) / c), o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
                    },
                    minTranslate: function () {
                        return -this.snapGrid[0];
                    },
                    maxTranslate: function () {
                        return -this.snapGrid[this.snapGrid.length - 1];
                    },
                    translateTo: function (e = 0, t = this.params.speed, s = !0, i = !0, n) {
                        const r = this,
                            { params: a, wrapperEl: l } = r;
                        if (r.animating && a.preventInteractionOnTransition) return !1;
                        const o = r.minTranslate(),
                            d = r.maxTranslate();
                        let p;
                        if (((p = i && e > o ? o : i && e < d ? d : e), r.updateProgress(p), a.cssMode)) {
                            const e = r.isHorizontal();
                            if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -p;
                            else {
                                if (!r.support.smoothScroll) return x({ swiper: r, targetPosition: -p, side: e ? "left" : "top" }), !0;
                                l.scrollTo({ [e ? "left" : "top"]: -p, behavior: "smooth" });
                            }
                            return !0;
                        }
                        return (
                            0 === t
                                ? (r.setTransition(0), r.setTranslate(p), s && (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd")))
                                : (r.setTransition(t),
                                    r.setTranslate(p),
                                    s && (r.emit("beforeTransitionStart", t, n), r.emit("transitionStart")),
                                    r.animating ||
                                    ((r.animating = !0),
                                        r.onTranslateToWrapperTransitionEnd ||
                                        (r.onTranslateToWrapperTransitionEnd = function (e) {
                                            r &&
                                                !r.destroyed &&
                                                e.target === this &&
                                                (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                                                    r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd),
                                                    (r.onTranslateToWrapperTransitionEnd = null),
                                                    delete r.onTranslateToWrapperTransitionEnd,
                                                    s && r.emit("transitionEnd"));
                                        }),
                                        r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                                        r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))),
                            !0
                        );
                    },
                },
                transition: {
                    setTransition: function (e, t) {
                        const s = this;
                        s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t);
                    },
                    transitionStart: function (e = !0, t) {
                        const s = this,
                            { params: i } = s;
                        i.cssMode || (i.autoHeight && s.updateAutoHeight(), L({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
                    },
                    transitionEnd: function (e = !0, t) {
                        const s = this,
                            { params: i } = s;
                        (s.animating = !1), i.cssMode || (s.setTransition(0), L({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
                    },
                },
                slide: {
                    slideTo: function (e = 0, t = this.params.speed, s = !0, i, n) {
                        if ("number" !== typeof e && "string" !== typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                        if ("string" === typeof e) {
                            const t = parseInt(e, 10);
                            if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                            e = t;
                        }
                        const r = this;
                        let a = e;
                        a < 0 && (a = 0);
                        const { params: l, snapGrid: o, slidesGrid: d, previousIndex: p, activeIndex: c, rtlTranslate: u, wrapperEl: f, enabled: h } = r;
                        if ((r.animating && l.preventInteractionOnTransition) || (!h && !i && !n)) return !1;
                        const m = Math.min(r.params.slidesPerGroupSkip, a);
                        let g = m + Math.floor((a - m) / r.params.slidesPerGroup);
                        g >= o.length && (g = o.length - 1), (c || l.initialSlide || 0) === (p || 0) && s && r.emit("beforeSlideChangeStart");
                        const v = -o[g];
                        if ((r.updateProgress(v), l.normalizeSlideIndex))
                            for (let b = 0; b < d.length; b += 1) {
                                const e = -Math.floor(100 * v),
                                    t = Math.floor(100 * d[b]),
                                    s = Math.floor(100 * d[b + 1]);
                                "undefined" !== typeof d[b + 1] ? (e >= t && e < s - (s - t) / 2 ? (a = b) : e >= t && e < s && (a = b + 1)) : e >= t && (a = b);
                            }
                        if (r.initialized && a !== c) {
                            if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
                            if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (c || 0) !== a) return !1;
                        }
                        let w;
                        if (((w = a > c ? "next" : a < c ? "prev" : "reset"), (u && -v === r.translate) || (!u && v === r.translate)))
                            return r.updateActiveIndex(a), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(v), "reset" !== w && (r.transitionStart(s, w), r.transitionEnd(s, w)), !1;
                        if (l.cssMode) {
                            const e = r.isHorizontal(),
                                s = u ? v : -v;
                            if (0 === t) {
                                const t = r.virtual && r.params.virtual.enabled;
                                t && ((r.wrapperEl.style.scrollSnapType = "none"), (r._immediateVirtual = !0)),
                                    (f[e ? "scrollLeft" : "scrollTop"] = s),
                                    t &&
                                    requestAnimationFrame(() => {
                                        (r.wrapperEl.style.scrollSnapType = ""), (r._swiperImmediateVirtual = !1);
                                    });
                            } else {
                                if (!r.support.smoothScroll) return x({ swiper: r, targetPosition: s, side: e ? "left" : "top" }), !0;
                                f.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
                            }
                            return !0;
                        }
                        return (
                            0 === t
                                ? (r.setTransition(0), r.setTranslate(v), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(s, w), r.transitionEnd(s, w))
                                : (r.setTransition(t),
                                    r.setTranslate(v),
                                    r.updateActiveIndex(a),
                                    r.updateSlidesClasses(),
                                    r.emit("beforeTransitionStart", t, i),
                                    r.transitionStart(s, w),
                                    r.animating ||
                                    ((r.animating = !0),
                                        r.onSlideToWrapperTransitionEnd ||
                                        (r.onSlideToWrapperTransitionEnd = function (e) {
                                            r &&
                                                !r.destroyed &&
                                                e.target === this &&
                                                (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                                                    r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd),
                                                    (r.onSlideToWrapperTransitionEnd = null),
                                                    delete r.onSlideToWrapperTransitionEnd,
                                                    r.transitionEnd(s, w));
                                        }),
                                        r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                                        r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))),
                            !0
                        );
                    },
                    slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
                        const n = this;
                        let r = e;
                        return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, s, i);
                    },
                    slideNext: function (e = this.params.speed, t = !0, s) {
                        const i = this,
                            { animating: n, enabled: r, params: a } = i;
                        if (!r) return i;
                        let l = a.slidesPerGroup;
                        "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
                        const o = i.activeIndex < a.slidesPerGroupSkip ? 1 : l;
                        if (a.loop) {
                            if (n && a.loopPreventsSlide) return !1;
                            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
                        }
                        return i.slideTo(i.activeIndex + o, e, t, s);
                    },
                    slidePrev: function (e = this.params.speed, t = !0, s) {
                        const i = this,
                            { params: n, animating: r, snapGrid: a, slidesGrid: l, rtlTranslate: o, enabled: d } = i;
                        if (!d) return i;
                        if (n.loop) {
                            if (r && n.loopPreventsSlide) return !1;
                            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
                        }
                        function p(e) {
                            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
                        }
                        const c = p(o ? i.translate : -i.translate),
                            u = a.map((e) => p(e));
                        let f = a[u.indexOf(c) - 1];
                        if ("undefined" === typeof f && n.cssMode) {
                            let e;
                            a.forEach((t, s) => {
                                c >= t && (e = s);
                            }),
                                "undefined" !== typeof e && (f = a[e > 0 ? e - 1 : e]);
                        }
                        let h = 0;
                        return (
                            "undefined" !== typeof f &&
                            ((h = l.indexOf(f)),
                                h < 0 && (h = i.activeIndex - 1),
                                "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && ((h = h - i.slidesPerViewDynamic("previous", !0) + 1), (h = Math.max(h, 0)))),
                            i.slideTo(h, e, t, s)
                        );
                    },
                    slideReset: function (e = this.params.speed, t = !0, s) {
                        return this.slideTo(this.activeIndex, e, t, s);
                    },
                    slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
                        const n = this;
                        let r = n.activeIndex;
                        const a = Math.min(n.params.slidesPerGroupSkip, r),
                            l = a + Math.floor((r - a) / n.params.slidesPerGroup),
                            o = n.rtlTranslate ? n.translate : -n.translate;
                        if (o >= n.snapGrid[l]) {
                            const e = n.snapGrid[l];
                            o - e > (n.snapGrid[l + 1] - e) * i && (r += n.params.slidesPerGroup);
                        } else {
                            const e = n.snapGrid[l - 1];
                            o - e <= (n.snapGrid[l] - e) * i && (r -= n.params.slidesPerGroup);
                        }
                        return (r = Math.max(r, 0)), (r = Math.min(r, n.slidesGrid.length - 1)), n.slideTo(r, e, t, s);
                    },
                    slideToClickedSlide: function () {
                        const e = this,
                            { params: t, $wrapperEl: s } = e,
                            i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                        let n,
                            r = e.clickedIndex;
                        if (t.loop) {
                            if (e.animating) return;
                            (n = parseInt(g(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
                                t.centeredSlides
                                    ? r < e.loopedSlides - i / 2 || r > e.slides.length - e.loopedSlides + i / 2
                                        ? (e.loopFix(),
                                            (r = s.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index()),
                                            v(() => {
                                                e.slideTo(r);
                                            }))
                                        : e.slideTo(r)
                                    : r > e.slides.length - i
                                        ? (e.loopFix(),
                                            (r = s.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index()),
                                            v(() => {
                                                e.slideTo(r);
                                            }))
                                        : e.slideTo(r);
                        } else e.slideTo(r);
                    },
                },
                loop: {
                    loopCreate: function () {
                        const e = this,
                            t = a(),
                            { params: s, $wrapperEl: i } = e,
                            n = i.children().length > 0 ? g(i.children()[0].parentNode) : i;
                        n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
                        let r = n.children(`.${s.slideClass}`);
                        if (s.loopFillGroupWithBlank) {
                            const e = s.slidesPerGroup - (r.length % s.slidesPerGroup);
                            if (e !== s.slidesPerGroup) {
                                for (let i = 0; i < e; i += 1) {
                                    const e = g(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                                    n.append(e);
                                }
                                r = n.children(`.${s.slideClass}`);
                            }
                        }
                        "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = r.length),
                            (e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10))),
                            (e.loopedSlides += s.loopAdditionalSlides),
                            e.loopedSlides > r.length && (e.loopedSlides = r.length);
                        const l = [],
                            o = [];
                        r.each((t, s) => {
                            const i = g(t);
                            s < e.loopedSlides && o.push(t), s < r.length && s >= r.length - e.loopedSlides && l.push(t), i.attr("data-swiper-slide-index", s);
                        });
                        for (let a = 0; a < o.length; a += 1) n.append(g(o[a].cloneNode(!0)).addClass(s.slideDuplicateClass));
                        for (let a = l.length - 1; a >= 0; a -= 1) n.prepend(g(l[a].cloneNode(!0)).addClass(s.slideDuplicateClass));
                    },
                    loopFix: function () {
                        const e = this;
                        e.emit("beforeLoopFix");
                        const { activeIndex: t, slides: s, loopedSlides: i, allowSlidePrev: n, allowSlideNext: r, snapGrid: a, rtlTranslate: l } = e;
                        let o;
                        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
                        const d = -a[t] - e.getTranslate();
                        if (t < i) {
                            (o = s.length - 3 * i + t), (o += i);
                            e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
                        } else if (t >= s.length - i) {
                            (o = -s.length + t + i), (o += i);
                            e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
                        }
                        (e.allowSlidePrev = n), (e.allowSlideNext = r), e.emit("loopFix");
                    },
                    loopDestroy: function () {
                        const { $wrapperEl: e, params: t, slides: s } = this;
                        e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index");
                    },
                },
                grabCursor: {
                    setGrabCursor: function (e) {
                        const t = this;
                        if (t.support.touch || !t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode) return;
                        const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                        (s.style.cursor = "move"), (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"), (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"), (s.style.cursor = e ? "grabbing" : "grab");
                    },
                    unsetGrabCursor: function () {
                        const e = this;
                        e.support.touch || (e.params.watchOverflow && e.isLocked) || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
                    },
                },
                events: {
                    attachEvents: function () {
                        const e = this,
                            t = a(),
                            { params: s, support: i } = e;
                        (e.onTouchStart = _.bind(e)),
                            (e.onTouchMove = z.bind(e)),
                            (e.onTouchEnd = I.bind(e)),
                            s.cssMode && (e.onScroll = D.bind(e)),
                            (e.onClick = N.bind(e)),
                            i.touch && !G && (t.addEventListener("touchstart", B), (G = !0)),
                            j(e, "on");
                    },
                    detachEvents: function () {
                        j(this, "off");
                    },
                },
                breakpoints: {
                    setBreakpoint: function () {
                        const e = this,
                            { activeIndex: t, initialized: s, loopedSlides: i = 0, params: n, $el: r } = e,
                            a = n.breakpoints;
                        if (!a || (a && 0 === Object.keys(a).length)) return;
                        const l = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                        if (!l || e.currentBreakpoint === l) return;
                        const o = (l in a ? a[l] : void 0) || e.originalParams,
                            d = F(e, n),
                            p = F(e, o),
                            c = n.enabled;
                        d && !p
                            ? (r.removeClass(`${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`), e.emitContainerClasses())
                            : !d &&
                            p &&
                            (r.addClass(`${n.containerModifierClass}grid`),
                                ((o.grid.fill && "column" === o.grid.fill) || (!o.grid.fill && "column" === n.grid.fill)) && r.addClass(`${n.containerModifierClass}grid-column`),
                                e.emitContainerClasses());
                        const u = o.direction && o.direction !== n.direction,
                            f = n.loop && (o.slidesPerView !== n.slidesPerView || u);
                        u && s && e.changeDirection(), C(e.params, o);
                        const h = e.params.enabled;
                        Object.assign(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }),
                            c && !h ? e.disable() : !c && h && e.enable(),
                            (e.currentBreakpoint = l),
                            e.emit("_beforeBreakpoint", o),
                            f && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)),
                            e.emit("breakpoint", o);
                    },
                    getBreakpoint: function (e, t = "window", s) {
                        if (!e || ("container" === t && !s)) return;
                        let i = !1;
                        const n = o(),
                            r = "window" === t ? n.innerHeight : s.clientHeight,
                            a = Object.keys(e).map((e) => {
                                if ("string" === typeof e && 0 === e.indexOf("@")) {
                                    const t = parseFloat(e.substr(1));
                                    return { value: r * t, point: e };
                                }
                                return { value: e, point: e };
                            });
                        a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                        for (let l = 0; l < a.length; l += 1) {
                            const { point: e, value: r } = a[l];
                            "window" === t ? n.matchMedia(`(min-width: ${r}px)`).matches && (i = e) : r <= s.clientWidth && (i = e);
                        }
                        return i || "max";
                    },
                },
                checkOverflow: {
                    checkOverflow: function () {
                        const e = this,
                            { isLocked: t, params: s } = e,
                            { slidesOffsetBefore: i } = s;
                        if (i) {
                            const t = e.slides.length - 1,
                                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                            e.isLocked = e.size > s;
                        } else e.isLocked = 1 === e.snapGrid.length;
                        !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                            t && t !== e.isLocked && (e.isEnd = !1),
                            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
                    },
                },
                classes: {
                    addClasses: function () {
                        const e = this,
                            { classNames: t, params: s, rtl: i, $el: n, device: r, support: a } = e,
                            l = (function (e, t) {
                                const s = [];
                                return (
                                    e.forEach((e) => {
                                        "object" === typeof e
                                            ? Object.keys(e).forEach((i) => {
                                                e[i] && s.push(t + i);
                                            })
                                            : "string" === typeof e && s.push(t + e);
                                    }),
                                    s
                                );
                            })(
                                [
                                    "initialized",
                                    s.direction,
                                    { "pointer-events": !a.touch },
                                    { "free-mode": e.params.freeMode && s.freeMode.enabled },
                                    { autoheight: s.autoHeight },
                                    { rtl: i },
                                    { grid: s.grid && s.grid.rows > 1 },
                                    { "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill },
                                    { android: r.android },
                                    { ios: r.ios },
                                    { "css-mode": s.cssMode },
                                    { centered: s.cssMode && s.centeredSlides },
                                ],
                                s.containerModifierClass
                            );
                        t.push(...l), n.addClass([...t].join(" ")), e.emitContainerClasses();
                    },
                    removeClasses: function () {
                        const { $el: e, classNames: t } = this;
                        e.removeClass(t.join(" ")), this.emitContainerClasses();
                    },
                },
                images: {
                    loadImage: function (e, t, s, i, n, r) {
                        const a = o();
                        let l;
                        function d() {
                            r && r();
                        }
                        g(e).parent("picture")[0] || (e.complete && n) ? d() : t ? ((l = new a.Image()), (l.onload = d), (l.onerror = d), i && (l.sizes = i), s && (l.srcset = s), t && (l.src = t)) : d();
                    },
                    preloadImages: function () {
                        const e = this;
                        function t() {
                            "undefined" !== typeof e &&
                                null !== e &&
                                e &&
                                !e.destroyed &&
                                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                        }
                        e.imagesToLoad = e.$el.find("img");
                        for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                            const i = e.imagesToLoad[s];
                            e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t);
                        }
                    },
                },
            },
                W = {};
            class q {
                constructor(...e) {
                    let t, s;
                    if (
                        (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? (s = e[0]) : ([t, s] = e), s || (s = {}), (s = C({}, s)), t && !s.el && (s.el = t), s.el && g(s.el).length > 1)
                    ) {
                        const e = [];
                        return (
                            g(s.el).each((t) => {
                                const i = C({}, s, { el: t });
                                e.push(new q(i));
                            }),
                            e
                        );
                    }
                    const i = this;
                    (i.__swiper__ = !0),
                        (i.support = P()),
                        (i.device = $({ userAgent: s.userAgent })),
                        (i.browser = M()),
                        (i.eventsListeners = {}),
                        (i.eventsAnyListeners = []),
                        (i.modules = [...i.__modules__]),
                        s.modules && Array.isArray(s.modules) && i.modules.push(...s.modules);
                    const n = {};
                    i.modules.forEach((e) => {
                        e({ swiper: i, extendParams: V(s, n), on: i.on.bind(i), once: i.once.bind(i), off: i.off.bind(i), emit: i.emit.bind(i) });
                    });
                    const r = C({}, H, n);
                    return (
                        (i.params = C({}, r, W, s)),
                        (i.originalParams = C({}, i.params)),
                        (i.passedParams = C({}, s)),
                        i.params &&
                        i.params.on &&
                        Object.keys(i.params.on).forEach((e) => {
                            i.on(e, i.params.on[e]);
                        }),
                        i.params && i.params.onAny && i.onAny(i.params.onAny),
                        (i.$ = g),
                        Object.assign(i, {
                            enabled: i.params.enabled,
                            el: t,
                            classNames: [],
                            slides: g(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: () => "horizontal" === i.params.direction,
                            isVertical: () => "vertical" === i.params.direction,
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: i.params.allowSlideNext,
                            allowSlidePrev: i.params.allowSlidePrev,
                            touchEvents: (function () {
                                const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                                    t = ["pointerdown", "pointermove", "pointerup"];
                                return (
                                    (i.touchEventsTouch = { start: e[0], move: e[1], end: e[2], cancel: e[3] }),
                                    (i.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                                    i.support.touch || !i.params.simulateTouch ? i.touchEventsTouch : i.touchEventsDesktop
                                );
                            })(),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                focusableElements: i.params.focusableElements,
                                lastClickTime: w(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0,
                            },
                            allowClick: !0,
                            allowTouchMove: i.params.allowTouchMove,
                            touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                            imagesToLoad: [],
                            imagesLoaded: 0,
                        }),
                        i.emit("_swiper"),
                        i.params.init && i.init(),
                        i
                    );
                }
                enable() {
                    const e = this;
                    e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
                }
                disable() {
                    const e = this;
                    e.enabled && ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
                }
                setProgress(e, t) {
                    const s = this;
                    e = Math.min(Math.max(e, 0), 1);
                    const i = s.minTranslate(),
                        n = (s.maxTranslate() - i) * e + i;
                    s.translateTo(n, "undefined" === typeof t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
                }
                emitContainerClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = e.el.className.split(" ").filter((t) => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                    e.emit("_containerClasses", t.join(" "));
                }
                getSlideClasses(e) {
                    const t = this;
                    return e.className
                        .split(" ")
                        .filter((e) => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))
                        .join(" ");
                }
                emitSlidesClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = [];
                    e.slides.each((s) => {
                        const i = e.getSlideClasses(s);
                        t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
                    }),
                        e.emit("_slideClasses", t);
                }
                slidesPerViewDynamic(e = "current", t = !1) {
                    const { params: s, slides: i, slidesGrid: n, slidesSizesGrid: r, size: a, activeIndex: l } = this;
                    let o = 1;
                    if (s.centeredSlides) {
                        let e,
                            t = i[l].swiperSlideSize;
                        for (let s = l + 1; s < i.length; s += 1) i[s] && !e && ((t += i[s].swiperSlideSize), (o += 1), t > a && (e = !0));
                        for (let s = l - 1; s >= 0; s -= 1) i[s] && !e && ((t += i[s].swiperSlideSize), (o += 1), t > a && (e = !0));
                    } else if ("current" === e)
                        for (let d = l + 1; d < i.length; d += 1) {
                            (t ? n[d] + r[d] - n[l] < a : n[d] - n[l] < a) && (o += 1);
                        }
                    else
                        for (let d = l - 1; d >= 0; d -= 1) {
                            n[l] - n[d] < a && (o += 1);
                        }
                    return o;
                }
                update() {
                    const e = this;
                    if (!e || e.destroyed) return;
                    const { snapGrid: t, params: s } = e;
                    function i() {
                        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
                    }
                    let n;
                    s.breakpoints && e.setBreakpoint(),
                        e.updateSize(),
                        e.updateSlides(),
                        e.updateProgress(),
                        e.updateSlidesClasses(),
                        e.params.freeMode && e.params.freeMode.enabled
                            ? (i(), e.params.autoHeight && e.updateAutoHeight())
                            : ((n = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)), n || i()),
                        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                        e.emit("update");
                }
                changeDirection(e, t = !0) {
                    const s = this,
                        i = s.params.direction;
                    return (
                        e || (e = "horizontal" === i ? "vertical" : "horizontal"),
                        e === i ||
                        ("horizontal" !== e && "vertical" !== e) ||
                        (s.$el.removeClass(`${s.params.containerModifierClass}${i}`).addClass(`${s.params.containerModifierClass}${e}`),
                            s.emitContainerClasses(),
                            (s.params.direction = e),
                            s.slides.each((t) => {
                                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
                            }),
                            s.emit("changeDirection"),
                            t && s.update()),
                        s
                    );
                }
                mount(e) {
                    const t = this;
                    if (t.mounted) return !0;
                    const s = g(e || t.params.el);
                    if (!(e = s[0])) return !1;
                    e.swiper = t;
                    const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
                    let n = (() => {
                        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                            const t = g(e.shadowRoot.querySelector(i()));
                            return (t.children = (e) => s.children(e)), t;
                        }
                        return s.children(i());
                    })();
                    if (0 === n.length && t.params.createElements) {
                        const e = a().createElement("div");
                        (n = g(e)),
                            (e.className = t.params.wrapperClass),
                            s.append(e),
                            s.children(`.${t.params.slideClass}`).each((e) => {
                                n.append(e);
                            });
                    }
                    return (
                        Object.assign(t, {
                            $el: s,
                            el: e,
                            $wrapperEl: n,
                            wrapperEl: n[0],
                            mounted: !0,
                            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                            wrongRTL: "-webkit-box" === n.css("display"),
                        }),
                        !0
                    );
                }
                init(e) {
                    const t = this;
                    if (t.initialized) return t;
                    return (
                        !1 === t.mount(e) ||
                        (t.emit("beforeInit"),
                            t.params.breakpoints && t.setBreakpoint(),
                            t.addClasses(),
                            t.params.loop && t.loopCreate(),
                            t.updateSize(),
                            t.updateSlides(),
                            t.params.watchOverflow && t.checkOverflow(),
                            t.params.grabCursor && t.enabled && t.setGrabCursor(),
                            t.params.preloadImages && t.preloadImages(),
                            t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
                            t.attachEvents(),
                            (t.initialized = !0),
                            t.emit("init"),
                            t.emit("afterInit")),
                        t
                    );
                }
                destroy(e = !0, t = !0) {
                    const s = this,
                        { params: i, $el: n, $wrapperEl: r, slides: a } = s;
                    return (
                        "undefined" === typeof s.params ||
                        s.destroyed ||
                        (s.emit("beforeDestroy"),
                            (s.initialized = !1),
                            s.detachEvents(),
                            i.loop && s.loopDestroy(),
                            t &&
                            (s.removeClasses(),
                                n.removeAttr("style"),
                                r.removeAttr("style"),
                                a && a.length && a.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                            s.emit("destroy"),
                            Object.keys(s.eventsListeners).forEach((e) => {
                                s.off(e);
                            }),
                            !1 !== e &&
                            ((s.$el[0].swiper = null),
                                (function (e) {
                                    const t = e;
                                    Object.keys(t).forEach((e) => {
                                        try {
                                            t[e] = null;
                                        } catch (s) { }
                                        try {
                                            delete t[e];
                                        } catch (s) { }
                                    });
                                })(s)),
                            (s.destroyed = !0)),
                        null
                    );
                }
                static extendDefaults(e) {
                    C(W, e);
                }
                static get extendedDefaults() {
                    return W;
                }
                static get defaults() {
                    return H;
                }
                static installModule(e) {
                    q.prototype.__modules__ || (q.prototype.__modules__ = []);
                    const t = q.prototype.__modules__;
                    "function" === typeof e && t.indexOf(e) < 0 && t.push(e);
                }
                static use(e) {
                    return Array.isArray(e) ? (e.forEach((e) => q.installModule(e)), q) : (q.installModule(e), q);
                }
            }
            Object.keys(R).forEach((e) => {
                Object.keys(R[e]).forEach((t) => {
                    q.prototype[t] = R[e][t];
                });
            }),
                q.use([
                    function ({ swiper: e, on: t, emit: s }) {
                        const i = o();
                        let n = null;
                        const r = () => {
                            e && !e.destroyed && e.initialized && (s("beforeResize"), s("resize"));
                        },
                            a = () => {
                                e && !e.destroyed && e.initialized && s("orientationchange");
                            };
                        t("init", () => {
                            e.params.resizeObserver && "undefined" !== typeof i.ResizeObserver
                                ? e &&
                                !e.destroyed &&
                                e.initialized &&
                                ((n = new ResizeObserver((t) => {
                                    const { width: s, height: i } = e;
                                    let n = s,
                                        a = i;
                                    t.forEach(({ contentBoxSize: t, contentRect: s, target: i }) => {
                                        (i && i !== e.el) || ((n = s ? s.width : (t[0] || t).inlineSize), (a = s ? s.height : (t[0] || t).blockSize));
                                    }),
                                        (n === s && a === i) || r();
                                })),
                                    n.observe(e.el))
                                : (i.addEventListener("resize", r), i.addEventListener("orientationchange", a));
                        }),
                            t("destroy", () => {
                                n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)), i.removeEventListener("resize", r), i.removeEventListener("orientationchange", a);
                            });
                    },
                    function ({ swiper: e, extendParams: t, on: s, emit: i }) {
                        const n = [],
                            r = o(),
                            a = (e, t = {}) => {
                                const s = new (r.MutationObserver || r.WebkitMutationObserver)((e) => {
                                    if (1 === e.length) return void i("observerUpdate", e[0]);
                                    const t = function () {
                                        i("observerUpdate", e[0]);
                                    };
                                    r.requestAnimationFrame ? r.requestAnimationFrame(t) : r.setTimeout(t, 0);
                                });
                                s.observe(e, {
                                    attributes: "undefined" === typeof t.attributes || t.attributes,
                                    childList: "undefined" === typeof t.childList || t.childList,
                                    characterData: "undefined" === typeof t.characterData || t.characterData,
                                }),
                                    n.push(s);
                            };
                        t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
                            s("init", () => {
                                if (e.params.observer) {
                                    if (e.params.observeParents) {
                                        const t = e.$el.parents();
                                        for (let e = 0; e < t.length; e += 1) a(t[e]);
                                    }
                                    a(e.$el[0], { childList: e.params.observeSlideChildren }), a(e.$wrapperEl[0], { attributes: !1 });
                                }
                            }),
                            s("destroy", () => {
                                n.forEach((e) => {
                                    e.disconnect();
                                }),
                                    n.splice(0, n.length);
                            });
                    },
                ]);
            var X = q;
            function Y(e, t, s, i) {
                const n = a();
                return (
                    e.params.createElements &&
                    Object.keys(i).forEach((r) => {
                        if (!s[r] && !0 === s.auto) {
                            let a = e.$el.children(`.${i[r]}`)[0];
                            a || ((a = n.createElement("div")), (a.className = i[r]), e.$el.append(a)), (s[r] = a), (t[r] = a);
                        }
                    }),
                    s
                );
            }
            function U({ swiper: e, extendParams: t, on: s, emit: i }) {
                function n(t) {
                    let s;
                    return t && ((s = g(t)), e.params.uniqueNavElements && "string" === typeof t && s.length > 1 && 1 === e.$el.find(t).length && (s = e.$el.find(t))), s;
                }
                function r(t, s) {
                    const i = e.params.navigation;
                    t &&
                        t.length > 0 &&
                        (t[s ? "addClass" : "removeClass"](i.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](i.lockClass));
                }
                function a() {
                    if (e.params.loop) return;
                    const { $nextEl: t, $prevEl: s } = e.navigation;
                    r(s, e.isBeginning), r(t, e.isEnd);
                }
                function l(t) {
                    t.preventDefault(), (e.isBeginning && !e.params.loop) || e.slidePrev();
                }
                function o(t) {
                    t.preventDefault(), (e.isEnd && !e.params.loop) || e.slideNext();
                }
                function d() {
                    const t = e.params.navigation;
                    if (((e.params.navigation = Y(e, e.originalParams.navigation, e.params.navigation, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" })), !t.nextEl && !t.prevEl)) return;
                    const s = n(t.nextEl),
                        i = n(t.prevEl);
                    s && s.length > 0 && s.on("click", o),
                        i && i.length > 0 && i.on("click", l),
                        Object.assign(e.navigation, { $nextEl: s, nextEl: s && s[0], $prevEl: i, prevEl: i && i[0] }),
                        e.enabled || (s && s.addClass(t.lockClass), i && i.addClass(t.lockClass));
                }
                function p() {
                    const { $nextEl: t, $prevEl: s } = e.navigation;
                    t && t.length && (t.off("click", o), t.removeClass(e.params.navigation.disabledClass)), s && s.length && (s.off("click", l), s.removeClass(e.params.navigation.disabledClass));
                }
                t({ navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } }),
                    (e.navigation = { nextEl: null, $nextEl: null, prevEl: null, $prevEl: null }),
                    s("init", () => {
                        d(), a();
                    }),
                    s("toEdge fromEdge lock unlock", () => {
                        a();
                    }),
                    s("destroy", () => {
                        p();
                    }),
                    s("enable disable", () => {
                        const { $nextEl: t, $prevEl: s } = e.navigation;
                        t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), s && s[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass);
                    }),
                    s("click", (t, s) => {
                        const { $nextEl: n, $prevEl: r } = e.navigation,
                            a = s.target;
                        if (e.params.navigation.hideOnClick && !g(a).is(r) && !g(a).is(n)) {
                            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === a || e.pagination.el.contains(a))) return;
                            let t;
                            n ? (t = n.hasClass(e.params.navigation.hiddenClass)) : r && (t = r.hasClass(e.params.navigation.hiddenClass)),
                                i(!0 === t ? "navigationShow" : "navigationHide"),
                                n && n.toggleClass(e.params.navigation.hiddenClass),
                                r && r.toggleClass(e.params.navigation.hiddenClass);
                        }
                    }),
                    Object.assign(e.navigation, { update: a, init: d, destroy: p });
            }
            function Z(e = "") {
                return `.${e
                    .trim()
                    .replace(/([\.:!\/])/g, "\\$1")
                    .replace(/ /g, ".")}`;
            }
            function K({ swiper: e, extendParams: t, on: s, emit: i }) {
                const n = "swiper-pagination";
                let r;
                t({
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
                        formatFractionCurrent: (e) => e,
                        formatFractionTotal: (e) => e,
                        bulletClass: `${n}-bullet`,
                        bulletActiveClass: `${n}-bullet-active`,
                        modifierClass: `${n}-`,
                        currentClass: `${n}-current`,
                        totalClass: `${n}-total`,
                        hiddenClass: `${n}-hidden`,
                        progressbarFillClass: `${n}-progressbar-fill`,
                        progressbarOppositeClass: `${n}-progressbar-opposite`,
                        clickableClass: `${n}-clickable`,
                        lockClass: `${n}-lock`,
                        horizontalClass: `${n}-horizontal`,
                        verticalClass: `${n}-vertical`,
                    },
                }),
                    (e.pagination = { el: null, $el: null, bullets: [] });
                let a = 0;
                function l() {
                    return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length;
                }
                function o(t, s) {
                    const { bulletActiveClass: i } = e.params.pagination;
                    t[s]().addClass(`${i}-${s}`)[s]().addClass(`${i}-${s}-${s}`);
                }
                function d() {
                    const t = e.rtl,
                        s = e.params.pagination;
                    if (l()) return;
                    const n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        d = e.pagination.$el;
                    let p;
                    const c = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (
                        (e.params.loop
                            ? ((p = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)),
                                p > n - 1 - 2 * e.loopedSlides && (p -= n - 2 * e.loopedSlides),
                                p > c - 1 && (p -= c),
                                p < 0 && "bullets" !== e.params.paginationType && (p = c + p))
                            : (p = "undefined" !== typeof e.snapIndex ? e.snapIndex : e.activeIndex || 0),
                            "bullets" === s.type && e.pagination.bullets && e.pagination.bullets.length > 0)
                    ) {
                        const i = e.pagination.bullets;
                        let n, l, c;
                        if (
                            (s.dynamicBullets &&
                                ((r = i.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                                    d.css(e.isHorizontal() ? "width" : "height", r * (s.dynamicMainBullets + 4) + "px"),
                                    s.dynamicMainBullets > 1 && void 0 !== e.previousIndex && ((a += p - e.previousIndex), a > s.dynamicMainBullets - 1 ? (a = s.dynamicMainBullets - 1) : a < 0 && (a = 0)),
                                    (n = p - a),
                                    (l = n + (Math.min(i.length, s.dynamicMainBullets) - 1)),
                                    (c = (l + n) / 2)),
                                i.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e) => `${s.bulletActiveClass}${e}`).join(" ")),
                                d.length > 1)
                        )
                            i.each((e) => {
                                const t = g(e),
                                    i = t.index();
                                i === p && t.addClass(s.bulletActiveClass), s.dynamicBullets && (i >= n && i <= l && t.addClass(`${s.bulletActiveClass}-main`), i === n && o(t, "prev"), i === l && o(t, "next"));
                            });
                        else {
                            const t = i.eq(p),
                                r = t.index();
                            if ((t.addClass(s.bulletActiveClass), s.dynamicBullets)) {
                                const t = i.eq(n),
                                    a = i.eq(l);
                                for (let e = n; e <= l; e += 1) i.eq(e).addClass(`${s.bulletActiveClass}-main`);
                                if (e.params.loop)
                                    if (r >= i.length - s.dynamicMainBullets) {
                                        for (let e = s.dynamicMainBullets; e >= 0; e -= 1) i.eq(i.length - e).addClass(`${s.bulletActiveClass}-main`);
                                        i.eq(i.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`);
                                    } else o(t, "prev"), o(a, "next");
                                else o(t, "prev"), o(a, "next");
                            }
                        }
                        if (s.dynamicBullets) {
                            const n = Math.min(i.length, s.dynamicMainBullets + 4),
                                a = (r * n - r) / 2 - c * r,
                                l = t ? "right" : "left";
                            i.css(e.isHorizontal() ? l : "top", `${a}px`);
                        }
                    }
                    if (("fraction" === s.type && (d.find(Z(s.currentClass)).text(s.formatFractionCurrent(p + 1)), d.find(Z(s.totalClass)).text(s.formatFractionTotal(c))), "progressbar" === s.type)) {
                        let t;
                        t = s.progressbarOpposite ? (e.isHorizontal() ? "vertical" : "horizontal") : e.isHorizontal() ? "horizontal" : "vertical";
                        const i = (p + 1) / c;
                        let n = 1,
                            r = 1;
                        "horizontal" === t ? (n = i) : (r = i), d.find(Z(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${r})`).transition(e.params.speed);
                    }
                    "custom" === s.type && s.renderCustom ? (d.html(s.renderCustom(e, p + 1, c)), i("paginationRender", d[0])) : i("paginationUpdate", d[0]),
                        e.params.watchOverflow && e.enabled && d[e.isLocked ? "addClass" : "removeClass"](s.lockClass);
                }
                function p() {
                    const t = e.params.pagination;
                    if (l()) return;
                    const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        n = e.pagination.$el;
                    let r = "";
                    if ("bullets" === t.type) {
                        let i = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                        e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && i > s && (i = s);
                        for (let s = 0; s < i; s += 1) t.renderBullet ? (r += t.renderBullet.call(e, s, t.bulletClass)) : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
                        n.html(r), (e.pagination.bullets = n.find(Z(t.bulletClass)));
                    }
                    "fraction" === t.type && ((r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`), n.html(r)),
                        "progressbar" === t.type && ((r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`), n.html(r)),
                        "custom" !== t.type && i("paginationRender", e.pagination.$el[0]);
                }
                function c() {
                    e.params.pagination = Y(e, e.originalParams.pagination, e.params.pagination, { el: "swiper-pagination" });
                    const t = e.params.pagination;
                    if (!t.el) return;
                    let s = g(t.el);
                    0 !== s.length &&
                        (e.params.uniqueNavElements && "string" === typeof t.el && s.length > 1 && ((s = e.$el.find(t.el)), s.length > 1 && (s = s.filter((t) => g(t).parents(".swiper")[0] === e.el))),
                            "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
                            s.addClass(t.modifierClass + t.type),
                            s.addClass(t.modifierClass + e.params.direction),
                            "bullets" === t.type && t.dynamicBullets && (s.addClass(`${t.modifierClass}${t.type}-dynamic`), (a = 0), t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                            "progressbar" === t.type && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass),
                            t.clickable &&
                            s.on("click", Z(t.bulletClass), function (t) {
                                t.preventDefault();
                                let s = g(this).index() * e.params.slidesPerGroup;
                                e.params.loop && (s += e.loopedSlides), e.slideTo(s);
                            }),
                            Object.assign(e.pagination, { $el: s, el: s[0] }),
                            e.enabled || s.addClass(t.lockClass));
                }
                function u() {
                    const t = e.params.pagination;
                    if (l()) return;
                    const s = e.pagination.$el;
                    s.removeClass(t.hiddenClass),
                        s.removeClass(t.modifierClass + t.type),
                        s.removeClass(t.modifierClass + e.params.direction),
                        e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass),
                        t.clickable && s.off("click", Z(t.bulletClass));
                }
                s("init", () => {
                    c(), p(), d();
                }),
                    s("activeIndexChange", () => {
                        (e.params.loop || "undefined" === typeof e.snapIndex) && d();
                    }),
                    s("snapIndexChange", () => {
                        e.params.loop || d();
                    }),
                    s("slidesLengthChange", () => {
                        e.params.loop && (p(), d());
                    }),
                    s("snapGridLengthChange", () => {
                        e.params.loop || (p(), d());
                    }),
                    s("destroy", () => {
                        u();
                    }),
                    s("enable disable", () => {
                        const { $el: t } = e.pagination;
                        t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass);
                    }),
                    s("lock unlock", () => {
                        d();
                    }),
                    s("click", (t, s) => {
                        const n = s.target,
                            { $el: r } = e.pagination;
                        if (e.params.pagination.el && e.params.pagination.hideOnClick && r.length > 0 && !g(n).hasClass(e.params.pagination.bulletClass)) {
                            if (e.navigation && ((e.navigation.nextEl && n === e.navigation.nextEl) || (e.navigation.prevEl && n === e.navigation.prevEl))) return;
                            const t = r.hasClass(e.params.pagination.hiddenClass);
                            i(!0 === t ? "paginationShow" : "paginationHide"), r.toggleClass(e.params.pagination.hiddenClass);
                        }
                    }),
                    Object.assign(e.pagination, { render: p, update: d, init: c, destroy: u });
            }
            function J({ swiper: e, extendParams: t, on: s }) {
                t({ parallax: { enabled: !1 } });
                const i = (t, s) => {
                    const { rtl: i } = e,
                        n = g(t),
                        r = i ? -1 : 1,
                        a = n.attr("data-swiper-parallax") || "0";
                    let l = n.attr("data-swiper-parallax-x"),
                        o = n.attr("data-swiper-parallax-y");
                    const d = n.attr("data-swiper-parallax-scale"),
                        p = n.attr("data-swiper-parallax-opacity");
                    if (
                        (l || o ? ((l = l || "0"), (o = o || "0")) : e.isHorizontal() ? ((l = a), (o = "0")) : ((o = a), (l = "0")),
                            (l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px"),
                            (o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px"),
                            "undefined" !== typeof p && null !== p)
                    ) {
                        const e = p - (p - 1) * (1 - Math.abs(s));
                        n[0].style.opacity = e;
                    }
                    if ("undefined" === typeof d || null === d) n.transform(`translate3d(${l}, ${o}, 0px)`);
                    else {
                        const e = d - (d - 1) * (1 - Math.abs(s));
                        n.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`);
                    }
                },
                    n = () => {
                        const { $el: t, slides: s, progress: n, snapGrid: r } = e;
                        t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e) => {
                            i(e, n);
                        }),
                            s.each((t, s) => {
                                let a = t.progress;
                                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (a += Math.ceil(s / 2) - n * (r.length - 1)),
                                    (a = Math.min(Math.max(a, -1), 1)),
                                    g(t)
                                        .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]")
                                        .each((e) => {
                                            i(e, a);
                                        });
                            });
                    };
                s("beforeInit", () => {
                    e.params.parallax.enabled && ((e.params.watchSlidesProgress = !0), (e.originalParams.watchSlidesProgress = !0));
                }),
                    s("init", () => {
                        e.params.parallax.enabled && n();
                    }),
                    s("setTranslate", () => {
                        e.params.parallax.enabled && n();
                    }),
                    s("setTransition", (t, s) => {
                        e.params.parallax.enabled &&
                            ((t = e.params.speed) => {
                                const { $el: s } = e;
                                s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e) => {
                                    const s = g(e);
                                    let i = parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
                                    0 === t && (i = 0), s.transition(i);
                                });
                            })(s);
                    });
            }
            function Q({ swiper: e, extendParams: t, on: s, emit: i }) {
                let n;
                function r() {
                    const t = e.slides.eq(e.activeIndex);
                    let s = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                        clearTimeout(n),
                        (n = v(() => {
                            let t;
                            e.params.autoplay.reverseDirection
                                ? e.params.loop
                                    ? (e.loopFix(), (t = e.slidePrev(e.params.speed, !0, !0)), i("autoplay"))
                                    : e.isBeginning
                                        ? e.params.autoplay.stopOnLastSlide
                                            ? o()
                                            : ((t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0)), i("autoplay"))
                                        : ((t = e.slidePrev(e.params.speed, !0, !0)), i("autoplay"))
                                : e.params.loop
                                    ? (e.loopFix(), (t = e.slideNext(e.params.speed, !0, !0)), i("autoplay"))
                                    : e.isEnd
                                        ? e.params.autoplay.stopOnLastSlide
                                            ? o()
                                            : ((t = e.slideTo(0, e.params.speed, !0, !0)), i("autoplay"))
                                        : ((t = e.slideNext(e.params.speed, !0, !0)), i("autoplay")),
                                ((e.params.cssMode && e.autoplay.running) || !1 === t) && r();
                        }, s));
                }
                function l() {
                    return "undefined" === typeof n && !e.autoplay.running && ((e.autoplay.running = !0), i("autoplayStart"), r(), !0);
                }
                function o() {
                    return !!e.autoplay.running && "undefined" !== typeof n && (n && (clearTimeout(n), (n = void 0)), (e.autoplay.running = !1), i("autoplayStop"), !0);
                }
                function d(t) {
                    e.autoplay.running &&
                        (e.autoplay.paused ||
                            (n && clearTimeout(n),
                                (e.autoplay.paused = !0),
                                0 !== t && e.params.autoplay.waitForTransition
                                    ? ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                                        e.$wrapperEl[0].addEventListener(t, c);
                                    })
                                    : ((e.autoplay.paused = !1), r())));
                }
                function p() {
                    const t = a();
                    "hidden" === t.visibilityState && e.autoplay.running && d(), "visible" === t.visibilityState && e.autoplay.paused && (r(), (e.autoplay.paused = !1));
                }
                function c(t) {
                    e &&
                        !e.destroyed &&
                        e.$wrapperEl &&
                        t.target === e.$wrapperEl[0] &&
                        (["transitionend", "webkitTransitionEnd"].forEach((t) => {
                            e.$wrapperEl[0].removeEventListener(t, c);
                        }),
                            (e.autoplay.paused = !1),
                            e.autoplay.running ? r() : o());
                }
                function u() {
                    e.params.autoplay.disableOnInteraction ? o() : d(),
                        ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                            e.$wrapperEl[0].removeEventListener(t, c);
                        });
                }
                function f() {
                    e.params.autoplay.disableOnInteraction || ((e.autoplay.paused = !1), r());
                }
                (e.autoplay = { running: !1, paused: !1 }),
                    t({ autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1, pauseOnMouseEnter: !1 } }),
                    s("init", () => {
                        if (e.params.autoplay.enabled) {
                            l();
                            a().addEventListener("visibilitychange", p), e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", u), e.$el.on("mouseleave", f));
                        }
                    }),
                    s("beforeTransitionStart", (t, s, i) => {
                        e.autoplay.running && (i || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(s) : o());
                    }),
                    s("sliderFirstMove", () => {
                        e.autoplay.running && (e.params.autoplay.disableOnInteraction ? o() : d());
                    }),
                    s("touchEnd", () => {
                        e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && r();
                    }),
                    s("destroy", () => {
                        e.$el.off("mouseenter", u), e.$el.off("mouseleave", f), e.autoplay.running && o();
                        a().removeEventListener("visibilitychange", p);
                    }),
                    Object.assign(e.autoplay, { pause: d, run: r, start: l, stop: o });
            }
        },
    },
]);
