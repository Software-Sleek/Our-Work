(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [889],
    {
        523: function (e, s, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/work3",
                function () {
                    return r(6434);
                },
            ]);
        },
        8418: function (e, s, r) {
            "use strict";
            function t(e, s) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, s) {
                        var r = [],
                            t = !0,
                            n = !1,
                            i = void 0;
                        try {
                            for (var c, l = e[Symbol.iterator](); !(t = (c = l.next()).done) && (r.push(c.value), !s || r.length !== s); t = !0);
                        } catch (a) {
                            (n = !0), (i = a);
                        } finally {
                            try {
                                t || null == l.return || l.return();
                            } finally {
                                if (n) throw i;
                            }
                        }
                        return r;
                    })(e, s) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    })()
                );
            }
            s.default = void 0;
            var n,
                i = (n = r(7294)) && n.__esModule ? n : { default: n },
                c = r(6273),
                l = r(387),
                a = r(7190);
            var o = {};
            function d(e, s, r, t) {
                if (e && c.isLocalURL(s)) {
                    e.prefetch(s, r, t).catch(function (e) {
                        0;
                    });
                    var n = t && "undefined" !== typeof t.locale ? t.locale : e && e.locale;
                    o[s + "%" + r + (n ? "%" + n : "")] = !0;
                }
            }
            var u = function (e) {
                var s,
                    r = !1 !== e.prefetch,
                    n = l.useRouter(),
                    u = i.default.useMemo(
                        function () {
                            var s = t(c.resolveHref(n, e.href, !0), 2),
                                r = s[0],
                                i = s[1];
                            return { href: r, as: e.as ? c.resolveHref(n, e.as) : i || r };
                        },
                        [n, e.href, e.as]
                    ),
                    h = u.href,
                    f = u.as,
                    m = e.children,
                    j = e.replace,
                    v = e.shallow,
                    x = e.scroll,
                    p = e.locale;
                "string" === typeof m && (m = i.default.createElement("a", null, m));
                var g = (s = i.default.Children.only(m)) && "object" === typeof s && s.ref,
                    N = t(a.useIntersection({ rootMargin: "200px" }), 2),
                    w = N[0],
                    y = N[1],
                    b = i.default.useCallback(
                        function (e) {
                            w(e), g && ("function" === typeof g ? g(e) : "object" === typeof g && (g.current = e));
                        },
                        [g, w]
                    );
                i.default.useEffect(
                    function () {
                        var e = y && r && c.isLocalURL(h),
                            s = "undefined" !== typeof p ? p : n && n.locale,
                            t = o[h + "%" + f + (s ? "%" + s : "")];
                        e && !t && d(n, h, f, { locale: s });
                    },
                    [f, h, y, p, r, n]
                );
                var M = {
                    ref: b,
                    onClick: function (e) {
                        s.props && "function" === typeof s.props.onClick && s.props.onClick(e),
                            e.defaultPrevented ||
                            (function (e, s, r, t, n, i, l, a) {
                                ("A" !== e.currentTarget.nodeName ||
                                    (!(function (e) {
                                        var s = e.currentTarget.target;
                                        return (s && "_self" !== s) || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.nativeEvent && 2 === e.nativeEvent.which);
                                    })(e) &&
                                        c.isLocalURL(r))) &&
                                    (e.preventDefault(), null == l && t.indexOf("#") >= 0 && (l = !1), s[n ? "replace" : "push"](r, t, { shallow: i, locale: a, scroll: l }));
                            })(e, n, h, f, j, v, x, p);
                    },
                    onMouseEnter: function (e) {
                        s.props && "function" === typeof s.props.onMouseEnter && s.props.onMouseEnter(e), c.isLocalURL(h) && d(n, h, f, { priority: !0 });
                    },
                };
                if (e.passHref || ("a" === s.type && !("href" in s.props))) {
                    var k = "undefined" !== typeof p ? p : n && n.locale,
                        E = n && n.isLocaleDomain && c.getDomainLocale(f, k, n && n.locales, n && n.domainLocales);
                    M.href = E || c.addBasePath(c.addLocale(f, k, n && n.defaultLocale));
                }
                return i.default.cloneElement(s, M);
            };
            s.default = u;
        },
        7190: function (e, s, r) {
            "use strict";
            function t(e, s) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, s) {
                        var r = [],
                            t = !0,
                            n = !1,
                            i = void 0;
                        try {
                            for (var c, l = e[Symbol.iterator](); !(t = (c = l.next()).done) && (r.push(c.value), !s || r.length !== s); t = !0);
                        } catch (a) {
                            (n = !0), (i = a);
                        } finally {
                            try {
                                t || null == l.return || l.return();
                            } finally {
                                if (n) throw i;
                            }
                        }
                        return r;
                    })(e, s) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    })()
                );
            }
            Object.defineProperty(s, "__esModule", { value: !0 }),
                (s.useIntersection = function (e) {
                    var s = e.rootMargin,
                        r = e.disabled || !c,
                        a = n.useRef(),
                        o = t(n.useState(!1), 2),
                        d = o[0],
                        u = o[1],
                        h = n.useCallback(
                            function (e) {
                                a.current && (a.current(), (a.current = void 0)),
                                    r ||
                                    d ||
                                    (e &&
                                        e.tagName &&
                                        (a.current = (function (e, s, r) {
                                            var t = (function (e) {
                                                var s = e.rootMargin || "",
                                                    r = l.get(s);
                                                if (r) return r;
                                                var t = new Map(),
                                                    n = new IntersectionObserver(function (e) {
                                                        e.forEach(function (e) {
                                                            var s = t.get(e.target),
                                                                r = e.isIntersecting || e.intersectionRatio > 0;
                                                            s && r && s(r);
                                                        });
                                                    }, e);
                                                return l.set(s, (r = { id: s, observer: n, elements: t })), r;
                                            })(r),
                                                n = t.id,
                                                i = t.observer,
                                                c = t.elements;
                                            return (
                                                c.set(e, s),
                                                i.observe(e),
                                                function () {
                                                    c.delete(e), i.unobserve(e), 0 === c.size && (i.disconnect(), l.delete(n));
                                                }
                                            );
                                        })(
                                            e,
                                            function (e) {
                                                return e && u(e);
                                            },
                                            { rootMargin: s }
                                        )));
                            },
                            [r, s, d]
                        );
                    return (
                        n.useEffect(
                            function () {
                                if (!c && !d) {
                                    var e = i.requestIdleCallback(function () {
                                        return u(!0);
                                    });
                                    return function () {
                                        return i.cancelIdleCallback(e);
                                    };
                                }
                            },
                            [d]
                        ),
                        [h, d]
                    );
                });
            var n = r(7294),
                i = r(9311),
                c = "undefined" !== typeof IntersectionObserver;
            var l = new Map();
        },
        8063: function (e, s) {
            "use strict";
            s.Z = function () {
                var e,
                    s = document.querySelectorAll(".gallery"),
                    r = document.querySelector(".filtering"),
                    t = document.querySelectorAll(".filtering");
                if (
                    (s.length >= 1 &&
                        s.forEach(function (s) {
                            e = new Isotope(s, { itemSelector: ".items" });
                        }),
                        r)
                ) {
                    r.addEventListener("click", function (s) {
                        if (matchesSelector(s.target, "span")) {
                            var r = s.target.getAttribute("data-filter");
                            (r = r), e.arrange({ filter: r });
                        }
                    });
                    for (
                        var n = function (e) {
                            e.addEventListener("click", function (s) {
                                matchesSelector(s.target, "span") && (e.querySelector(".active").classList.remove("active"), s.target.classList.add("active"));
                            });
                        },
                        i = 0,
                        c = t.length;
                        i < c;
                        i++
                    ) {
                        n(t[i]);
                    }
                }
            };
        },
        7068: function (e, s, r) {
            "use strict";
            var t = r(5893);
            r(7294);
            s.Z = function (e) {
                var s = e.title,
                    r = e.content,
                    n = e.center;
                return (0, t.jsx)("header", {
                    className: "work-header bg-img valign",
                    style: { backgroundImage: "url(/assets/img/patern.png)" },
                    children: (0, t.jsx)("div", {
                        className: "container",
                        children: (0, t.jsx)("div", {
                            className: "row ".concat(n ? "justify-content-center" : ""),
                            children: (0, t.jsx)("div", {
                                className: "col-lg-9",
                                children: (0, t.jsxs)("div", {
                                    className: "cont ".concat(n ? "text-center" : ""),
                                    children: [(0, t.jsx)("h2", { children: "object" == typeof s ? (0, t.jsxs)(t.Fragment, { children: [s.first, " ", (0, t.jsx)("br", {}), " ", s.second] }) : s }), (0, t.jsx)("p", { children: r })],
                                }),
                            }),
                        }),
                    }),
                });
            };
        },
        843: function (e, s, r) {
            "use strict";
            var t = r(5893),
                n = r(7294),
                i = r(1696),
                c = r(1690),
                l = r(9008);
            s.Z = function (e) {
                var s = e.children,
                    r = e.logoClassText,
                    a = n.useRef(null),
                    o = n.useRef(null);
                return (
                    n.useEffect(
                        function () {
                            var e = a.current,
                                s = o.current;
                            window.pageYOffset > 300 ? e.classList.add("nav-scroll") : e.classList.remove("nav-scroll"),
                                window.addEventListener("scroll", function () {
                                    window.pageYOffset > 300 ? (e.classList.add("nav-scroll"), s.setAttribute("src", "/assets/img/logo-light.svg")) : (e.classList.remove("nav-scroll"), s.setAttribute("src", "/assets/img/logo-light.svg"));
                                });
                        },
                        [a]
                    ),
                    (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(l.default, { children: (0, t.jsx)("link", { rel: "stylesheet", href: "/assets/css/style.css" }) }), (0, t.jsx)(i.Z, { navbarRef: a, logoRef: o, logoClass: r }), s, (0, t.jsx)(c.Z, {})],
                    })
                );
            };
        },
        6434: function (e, s, r) {
            "use strict";
            r.r(s),
                r.d(s, {
                    default: function () {
                        return d;
                    },
                });
            var t = r(5893),
                n = r(7294),
                i = r(843),
                c = r(7068),
                l = r(1664),
                a = r(8063),
                o = function () {
                    return (
                        n.useEffect(function () {
                            setTimeout(function () {
                                window.Isotope && (0, a.Z)();
                            }, 1e3);
                        }, []),
                        (0, t.jsx)(t.Fragment, {
                            children: (0, t.jsx)("section", {
                                className: "works filter-img four-col section-padding",
                                children: (0, t.jsxs)("div", {
                                    className: "container-fluid",
                                    children: [
                                        (0, t.jsx)("div", {
                                            className: "filtering text-center mb-30",
                                            children: (0, t.jsxs)("div", {
                                                className: "filter",
                                                children: [
                                                    (0, t.jsx)("span", { "data-filter": "*", className: "active", children: "All" }),
                                                    (0, t.jsx)("span", { "data-filter": ".interior", children: "Interior" }),
                                                    (0, t.jsx)("span", { "data-filter": ".theaters", children: "Theaters" }),
                                                    (0, t.jsx)("span", { "data-filter": ".residential", children: "Residential" }),
                                                ],
                                            }),
                                        }),
                                        (0, t.jsxs)("div", {
                                            className: "row gallery",
                                            children: [
                                                (0, t.jsx)("div", {
                                                    className: "col-lg-3 col-md-6 items theaters",
                                                    children: (0, t.jsxs)("div", {
                                                        className: "item",
                                                        children: [
                                                            (0, t.jsx)("div", { className: "img", children: (0, t.jsx)("img", { src: "/assets/img/works/col/01.jpg", alt: "" }) }),
                                                            (0, t.jsxs)("div", {
                                                                className: "cont",
                                                                children: [
                                                                    (0, t.jsx)("h5", { children: (0, t.jsx)(l.default, { href: "/project-details", children: "Modern Townhouse" }) }),
                                                                    (0, t.jsx)("span", { children: "Architecture" }),
                                                                    (0, t.jsx)("span", { children: "Modern" }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                (0, t.jsx)("div", {
                                                    className: "col-lg-3 col-md-6 items residential interior",
                                                    children: (0, t.jsxs)("div", {
                                                        className: "item",
                                                        children: [
                                                            (0, t.jsx)("div", { className: "img", children: (0, t.jsx)("img", { src: "/assets/img/works/col/02.jpg", alt: "" }) }),
                                                            (0, t.jsxs)("div", {
                                                                className: "cont",
                                                                children: [
                                                                    (0, t.jsx)("h5", { children: (0, t.jsx)(l.default, { href: "/project-details", children: "Modern Townhouse" }) }),
                                                                    (0, t.jsx)("span", { children: "Architecture" }),
                                                                    (0, t.jsx)("span", { children: "Modern" }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                (0, t.jsx)("div", {
                                                    className: "col-lg-3 col-md-6 items interior",
                                                    children: (0, t.jsxs)("div", {
                                                        className: "item",
                                                        children: [
                                                            (0, t.jsx)("div", { className: "img", children: (0, t.jsx)("img", { src: "/assets/img/works/col/03.jpg", alt: "" }) }),
                                                            (0, t.jsxs)("div", {
                                                                className: "cont",
                                                                children: [
                                                                    (0, t.jsx)("h5", { children: (0, t.jsx)(l.default, { href: "/project-details", children: "Modern Townhouse" }) }),
                                                                    (0, t.jsx)("span", { children: "Architecture" }),
                                                                    (0, t.jsx)("span", { children: "Modern" }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                (0, t.jsx)("div", {
                                                    className: "col-lg-3 col-md-6 items residential",
                                                    children: (0, t.jsxs)("div", {
                                                        className: "item",
                                                        children: [
                                                            (0, t.jsx)("div", { className: "img", children: (0, t.jsx)("img", { src: "/assets/img/works/col/04.jpg", alt: "" }) }),
                                                            (0, t.jsxs)("div", {
                                                                className: "cont",
                                                                children: [
                                                                    (0, t.jsx)("h5", { children: (0, t.jsx)(l.default, { href: "/project-details", children: "Modern Townhouse" }) }),
                                                                    (0, t.jsx)("span", { children: "Architecture" }),
                                                                    (0, t.jsx)("span", { children: "Modern" }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                (0, t.jsx)("div", {
                                                    className: "col-lg-3 col-md-6 items theaters",
                                                    children: (0, t.jsxs)("div", {
                                                        className: "item",
                                                        children: [
                                                            (0, t.jsx)("div", { className: "img", children: (0, t.jsx)("img", { src: "/assets/img/works/col/05.jpg", alt: "" }) }),
                                                            (0, t.jsxs)("div", {
                                                                className: "cont",
                                                                children: [
                                                                    (0, t.jsx)("h5", { children: (0, t.jsx)(l.default, { href: "/project-details", children: "Modern Townhouse" }) }),
                                                                    (0, t.jsx)("span", { children: "Architecture" }),
                                                                    (0, t.jsx)("span", { children: "Modern" }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                (0, t.jsx)("div", {
                                                    className: "col-lg-3 col-md-6 items residential",
                                                    children: (0, t.jsxs)("div", {
                                                        className: "item",
                                                        children: [
                                                            (0, t.jsx)("div", { className: "img", children: (0, t.jsx)("img", { src: "/assets/img/works/col/06.jpg", alt: "" }) }),
                                                            (0, t.jsxs)("div", {
                                                                className: "cont",
                                                                children: [
                                                                    (0, t.jsx)("h5", { children: (0, t.jsx)(l.default, { href: "/project-details", children: "Modern Townhouse" }) }),
                                                                    (0, t.jsx)("span", { children: "Architecture" }),
                                                                    (0, t.jsx)("span", { children: "Modern" }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                (0, t.jsx)("div", {
                                                    className: "col-lg-3 col-md-6 items residential interior",
                                                    children: (0, t.jsxs)("div", {
                                                        className: "item",
                                                        children: [
                                                            (0, t.jsx)("div", { className: "img", children: (0, t.jsx)("img", { src: "/assets/img/works/col/07.jpg", alt: "" }) }),
                                                            (0, t.jsxs)("div", {
                                                                className: "cont",
                                                                children: [
                                                                    (0, t.jsx)("h5", { children: (0, t.jsx)(l.default, { href: "/project-details", children: "Modern Townhouse" }) }),
                                                                    (0, t.jsx)("span", { children: "Architecture" }),
                                                                    (0, t.jsx)("span", { children: "Modern" }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                (0, t.jsx)("div", {
                                                    className: "col-lg-3 col-md-6 items interior",
                                                    children: (0, t.jsxs)("div", {
                                                        className: "item",
                                                        children: [
                                                            (0, t.jsx)("div", { className: "img", children: (0, t.jsx)("img", { src: "/assets/img/works/col/08.jpg", alt: "" }) }),
                                                            (0, t.jsxs)("div", {
                                                                className: "cont",
                                                                children: [
                                                                    (0, t.jsx)("h5", { children: (0, t.jsx)(l.default, { href: "/project-details", children: "Modern Townhouse" }) }),
                                                                    (0, t.jsx)("span", { children: "Architecture" }),
                                                                    (0, t.jsx)("span", { children: "Modern" }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                (0, t.jsx)("div", {
                                                    className: "col-lg-3 col-md-6 items theaters",
                                                    children: (0, t.jsxs)("div", {
                                                        className: "item",
                                                        children: [
                                                            (0, t.jsx)("div", { className: "img", children: (0, t.jsx)("img", { src: "/assets/img/works/col/09.jpg", alt: "" }) }),
                                                            (0, t.jsxs)("div", {
                                                                className: "cont",
                                                                children: [
                                                                    (0, t.jsx)("h5", { children: (0, t.jsx)(l.default, { href: "/project-details", children: "Modern Townhouse" }) }),
                                                                    (0, t.jsx)("span", { children: "Architecture" }),
                                                                    (0, t.jsx)("span", { children: "Modern" }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        })
                    );
                },
                d = function () {
                    return (
                        n.useEffect(function () {
                            document.querySelector("body").classList.add("index3");
                        }, []),
                        (0, t.jsxs)(i.Z, {
                            children: [
                                (0, t.jsx)(c.Z, {
                                    center: !0,
                                    title: { first: "Design is an Art,", second: "and Every Space Tells Its Story" },
                                    content:
                                        "Our projects showcase a seamless blend of design, functionality, and quality that defines Studio Bright Lux. From premium sanitaryware and elegant ceramic pieces to thoughtfully curated interiors, each project reflects our dedication to enhancing spaces.",
                                }),
                                (0, t.jsx)(o, {}),
                            ],
                        })
                    );
                };
        },
        1664: function (e, s, r) {
            e.exports = r(8418);
        },
    },
    function (e) {
        e.O(0, [613, 774, 888, 179], function () {
            return (s = 523), e((e.s = s));
            var s;
        });
        var s = e.O();
        _N_E = s;
    },
]);