(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [55],
    {
        5162: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/blogs",
                function () {
                    return t(5952);
                },
            ]);
        },
        8418: function (e, n, t) {
            "use strict";
            function r(e, n) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, n) {
                        var t = [],
                            r = !0,
                            a = !1,
                            s = void 0;
                        try {
                            for (var l, i = e[Symbol.iterator](); !(r = (l = i.next()).done) && (t.push(l.value), !n || t.length !== n); r = !0);
                        } catch (c) {
                            (a = !0), (s = c);
                        } finally {
                            try {
                                r || null == i.return || i.return();
                            } finally {
                                if (a) throw s;
                            }
                        }
                        return t;
                    })(e, n) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    })()
                );
            }
            n.default = void 0;
            var a,
                s = (a = t(7294)) && a.__esModule ? a : { default: a },
                l = t(6273),
                i = t(387),
                c = t(7190);
            var o = {};
            function u(e, n, t, r) {
                if (e && l.isLocalURL(n)) {
                    e.prefetch(n, t, r).catch(function (e) {
                        0;
                    });
                    var a = r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
                    o[n + "%" + t + (a ? "%" + a : "")] = !0;
                }
            }
            var d = function (e) {
                var n,
                    t = !1 !== e.prefetch,
                    a = i.useRouter(),
                    d = s.default.useMemo(
                        function () {
                            var n = r(l.resolveHref(a, e.href, !0), 2),
                                t = n[0],
                                s = n[1];
                            return { href: t, as: e.as ? l.resolveHref(a, e.as) : s || t };
                        },
                        [a, e.href, e.as]
                    ),
                    f = d.href,
                    h = d.as,
                    g = e.children,
                    v = e.replace,
                    m = e.shallow,
                    p = e.scroll,
                    x = e.locale;
                "string" === typeof g && (g = s.default.createElement("a", null, g));
                var j = (n = s.default.Children.only(g)) && "object" === typeof n && n.ref,
                    y = r(c.useIntersection({ rootMargin: "200px" }), 2),
                    b = y[0],
                    N = y[1],
                    w = s.default.useCallback(
                        function (e) {
                            b(e), j && ("function" === typeof j ? j(e) : "object" === typeof j && (j.current = e));
                        },
                        [j, b]
                    );
                s.default.useEffect(
                    function () {
                        var e = N && t && l.isLocalURL(f),
                            n = "undefined" !== typeof x ? x : a && a.locale,
                            r = o[f + "%" + h + (n ? "%" + n : "")];
                        e && !r && u(a, f, h, { locale: n });
                    },
                    [h, f, N, x, t, a]
                );
                var E = {
                    ref: w,
                    onClick: function (e) {
                        n.props && "function" === typeof n.props.onClick && n.props.onClick(e),
                            e.defaultPrevented ||
                            (function (e, n, t, r, a, s, i, c) {
                                ("A" !== e.currentTarget.nodeName ||
                                    (!(function (e) {
                                        var n = e.currentTarget.target;
                                        return (n && "_self" !== n) || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.nativeEvent && 2 === e.nativeEvent.which);
                                    })(e) &&
                                        l.isLocalURL(t))) &&
                                    (e.preventDefault(), null == i && r.indexOf("#") >= 0 && (i = !1), n[a ? "replace" : "push"](t, r, { shallow: s, locale: c, scroll: i }));
                            })(e, a, f, h, v, m, p, x);
                    },
                    onMouseEnter: function (e) {
                        n.props && "function" === typeof n.props.onMouseEnter && n.props.onMouseEnter(e), l.isLocalURL(f) && u(a, f, h, { priority: !0 });
                    },
                };
                if (e.passHref || ("a" === n.type && !("href" in n.props))) {
                    var L = "undefined" !== typeof x ? x : a && a.locale,
                        A = a && a.isLocaleDomain && l.getDomainLocale(h, L, a && a.locales, a && a.domainLocales);
                    E.href = A || l.addBasePath(l.addLocale(h, L, a && a.defaultLocale));
                }
                return s.default.cloneElement(n, E);
            };
            n.default = d;
        },
        7190: function (e, n, t) {
            "use strict";
            function r(e, n) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, n) {
                        var t = [],
                            r = !0,
                            a = !1,
                            s = void 0;
                        try {
                            for (var l, i = e[Symbol.iterator](); !(r = (l = i.next()).done) && (t.push(l.value), !n || t.length !== n); r = !0);
                        } catch (c) {
                            (a = !0), (s = c);
                        } finally {
                            try {
                                r || null == i.return || i.return();
                            } finally {
                                if (a) throw s;
                            }
                        }
                        return t;
                    })(e, n) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    })()
                );
            }
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.useIntersection = function (e) {
                    var n = e.rootMargin,
                        t = e.disabled || !l,
                        c = a.useRef(),
                        o = r(a.useState(!1), 2),
                        u = o[0],
                        d = o[1],
                        f = a.useCallback(
                            function (e) {
                                c.current && (c.current(), (c.current = void 0)),
                                    t ||
                                    u ||
                                    (e &&
                                        e.tagName &&
                                        (c.current = (function (e, n, t) {
                                            var r = (function (e) {
                                                var n = e.rootMargin || "",
                                                    t = i.get(n);
                                                if (t) return t;
                                                var r = new Map(),
                                                    a = new IntersectionObserver(function (e) {
                                                        e.forEach(function (e) {
                                                            var n = r.get(e.target),
                                                                t = e.isIntersecting || e.intersectionRatio > 0;
                                                            n && t && n(t);
                                                        });
                                                    }, e);
                                                return i.set(n, (t = { id: n, observer: a, elements: r })), t;
                                            })(t),
                                                a = r.id,
                                                s = r.observer,
                                                l = r.elements;
                                            return (
                                                l.set(e, n),
                                                s.observe(e),
                                                function () {
                                                    l.delete(e), s.unobserve(e), 0 === l.size && (s.disconnect(), i.delete(a));
                                                }
                                            );
                                        })(
                                            e,
                                            function (e) {
                                                return e && d(e);
                                            },
                                            { rootMargin: n }
                                        )));
                            },
                            [t, n, u]
                        );
                    return (
                        a.useEffect(
                            function () {
                                if (!l && !u) {
                                    var e = s.requestIdleCallback(function () {
                                        return d(!0);
                                    });
                                    return function () {
                                        return s.cancelIdleCallback(e);
                                    };
                                }
                            },
                            [u]
                        ),
                        [f, u]
                    );
                });
            var a = t(7294),
                s = t(9311),
                l = "undefined" !== typeof IntersectionObserver;
            var i = new Map();
        },
        8941: function (e, n) {
            "use strict";
            n.Z = function () {
                var e = document.getElementsByClassName("thumparallax");
                e && new simpleParallax(e, { delay: 1, scale: 1.1 });
            };
        },
        3136: function (e, n, t) {
            "use strict";
            var r = t(5893),
                a = t(7294),
                s = t(1664),
                l = t(1163);
            n.Z = function (e) {
                var n = e.title,
                    t = e.fullPath,
                    i = e.image,
                    c = (0, l.useRouter)();
                return (0, r.jsx)("header", {
                    className: "pages-header bg-img valign parallaxie",
                    style: { backgroundImage: "url(".concat(i || "/assets/img/pg1.jpg", ")") },
                    "data-overlay-dark": "5",
                    children: (0, r.jsx)("div", {
                        className: "container",
                        children: (0, r.jsx)("div", {
                            className: "row",
                            children: (0, r.jsx)("div", {
                                className: "col-lg-12",
                                children: (0, r.jsxs)("div", {
                                    className: "cont text-center",
                                    children: [
                                        (0, r.jsx)("h1", { children: n }),
                                        (0, r.jsx)("div", {
                                            className: "path",
                                            children: t.map(function (e, n) {
                                                return (0,
                                                    r.jsxs)(a.Fragment, { children: [(0, r.jsx)(s.default, { href: e.url, children: (0, r.jsx)("a", { className: c.pathname == e.url ? "active" : "", children: e.name }) }), n != t.length - 1 ? (0, r.jsx)("span", { children: "/" }) : ""] }, e.id);
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    }),
                });
            };
        },
        843: function (e, n, t) {
            "use strict";
            var r = t(5893),
                a = t(7294),
                s = t(1696),
                l = t(1690),
                i = t(9008);
            n.Z = function (e) {
                var n = e.children,
                    t = e.logoClassText,
                    c = a.useRef(null),
                    o = a.useRef(null);
                return (
                    a.useEffect(
                        function () {
                            var e = c.current,
                                n = o.current;
                            window.pageYOffset > 300 ? e.classList.add("nav-scroll") : e.classList.remove("nav-scroll"),
                                window.addEventListener("scroll", function () {
                                    window.pageYOffset > 300 ? (e.classList.add("nav-scroll"), n.setAttribute("src", "/assets/img/logo-light.svg")) : (e.classList.remove("nav-scroll"), n.setAttribute("src", "/assets/img/logo-light.svg"));
                                });
                        },
                        [c]
                    ),
                    (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(i.default, { children: (0, r.jsx)("link", { rel: "stylesheet", href: "/assets/css/style.css" }) }), (0, r.jsx)(s.Z, { navbarRef: c, logoRef: o, logoClass: t }), n, (0, r.jsx)(l.Z, {})],
                    })
                );
            };
        },
        5952: function (e, n, t) {
            "use strict";
            t.r(n),
                t.d(n, {
                    default: function () {
                        return d;
                    },
                });
            var r = t(5893),
                a = t(7294),
                s = t(843),
                l = t(3136),
                i = JSON.parse(
                    '[{"id":1,"image":"/assets/img/blog/1.jpg","title":"In Good Taste: Mark Finlay Architects and Interiors","by":"ALEX SMITH","date":"Aug 06 2022","date2":["Aug 2022","06"]},{"id":2,"image":"/assets/img/blog/2.jpg","title":"Five Things You Should Know About Modern Furniture.","by":"ALEX SMITH","date":"Aug 06 2022","date2":["Aug 2022","06"]},{"id":3,"image":"/assets/img/blog/3.jpg","title":"What it\'s like to be an interior designer?","by":"ALEX SMITH","date":"Aug 06 2022","date2":["Aug 2022","06"]}]'
                ),
                c = t(1664),
                o = t(8941),
                u = function () {
                    return (
                        a.useEffect(function () {
                            setTimeout(function () {
                                window.simpleParallax && (0, o.Z)();
                            }, 1e3);
                        }, []),
                        (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)("section", {
                                className: "blog-pg section-padding",
                                children: (0, r.jsx)("div", {
                                    className: "container",
                                    children: (0, r.jsx)("div", {
                                        className: "row",
                                        children: (0, r.jsx)("div", {
                                            className: "col-lg-10 offset-lg-1",
                                            children: (0, r.jsxs)("div", {
                                                className: "posts",
                                                children: [
                                                    i.map(function (e) {
                                                        return (0,
                                                            r.jsxs)("div", { className: "item mb-80", children: [(0, r.jsx)("div", { className: "img", children: (0, r.jsx)(c.default, { href: "/blog-details", children: (0, r.jsx)("a", { children: (0, r.jsx)("img", { src: e.image, alt: "", className: "thumparallax" }) }) }) }), (0, r.jsxs)("div", { className: "content", children: [(0, r.jsx)("div", { className: "date", children: (0, r.jsx)("h5", { children: (0, r.jsx)(c.default, { href: "/blog-details", children: (0, r.jsxs)("a", { children: [(0, r.jsx)("span", { className: "num", children: e.date2[1] }), (0, r.jsx)("span", { children: e.date2[0] })] }) }) }) }), (0, r.jsxs)("div", { className: "cont", children: [(0, r.jsxs)("div", { className: "tags", children: [(0, r.jsx)(c.default, { href: "#", children: "WordPress" }), (0, r.jsx)(c.default, { href: "#", children: "Themeforest" }), (0, r.jsx)(c.default, { href: "#", children: "Archo" })] }), (0, r.jsx)("h4", { className: "title", children: (0, r.jsx)(c.default, { href: "/blog-details", children: "Build a Beautiful Blog With Ease" }) }), (0, r.jsx)("p", { children: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing." }), (0, r.jsx)(c.default, { href: "/blog-details", children: (0, r.jsx)("a", { className: "more", children: "Read More" }) })] })] })] }, e.id);
                                                    }),
                                                    (0, r.jsxs)("div", {
                                                        className: "pagination",
                                                        children: [
                                                            (0, r.jsx)("span", { className: "active", children: (0, r.jsx)(c.default, { href: "#", children: "1" }) }),
                                                            (0, r.jsx)("span", { children: (0, r.jsx)(c.default, { href: "#", children: "2" }) }),
                                                            (0, r.jsx)("span", { children: (0, r.jsx)(c.default, { href: "#", children: (0, r.jsx)("a", { children: (0, r.jsx)("i", { className: "fas fa-angle-right" }) }) }) }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                    }),
                                }),
                            }),
                        })
                    );
                },
                d = function () {
                    return (
                        a.useEffect(function () {
                            document.querySelector("body").classList.add("index3");
                        }, []),
                        (0, r.jsxs)(s.Z, {
                            children: [
                                (0, r.jsx)(l.Z, {
                                    title: "Our Blogs",
                                    fullPath: [
                                        { id: 1, name: "home", url: "/" },
                                        { id: 2, name: "blogs", url: "/blogs" },
                                    ],
                                }),
                                (0, r.jsx)(u, {}),
                            ],
                        })
                    );
                };
        },
        1664: function (e, n, t) {
            e.exports = t(8418);
        },
        1163: function (e, n, t) {
            e.exports = t(387);
        },
    },
    function (e) {
        e.O(0, [613, 774, 888, 179], function () {
            return (n = 5162), e((e.s = n));
            var n;
        });
        var n = e.O();
        _N_E = n;
    },
]);
