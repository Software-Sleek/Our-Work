(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [335],
    {
        5474: function (e, n, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/contact",
                function () {
                    return r(7528);
                },
            ]);
        },
        8418: function (e, n, r) {
            "use strict";
            function t(e, n) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, n) {
                        var r = [],
                            t = !0,
                            s = !1,
                            a = void 0;
                        try {
                            for (var i, c = e[Symbol.iterator](); !(t = (i = c.next()).done) && (r.push(i.value), !n || r.length !== n); t = !0);
                        } catch (l) {
                            (s = !0), (a = l);
                        } finally {
                            try {
                                t || null == c.return || c.return();
                            } finally {
                                if (s) throw a;
                            }
                        }
                        return r;
                    })(e, n) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    })()
                );
            }
            n.default = void 0;
            var s,
                a = (s = r(7294)) && s.__esModule ? s : { default: s },
                i = r(6273),
                c = r(387),
                l = r(7190);
            var o = {};
            function u(e, n, r, t) {
                if (e && i.isLocalURL(n)) {
                    e.prefetch(n, r, t).catch(function (e) {
                        0;
                    });
                    var s = t && "undefined" !== typeof t.locale ? t.locale : e && e.locale;
                    o[n + "%" + r + (s ? "%" + s : "")] = !0;
                }
            }
            var d = function (e) {
                var n,
                    r = !1 !== e.prefetch,
                    s = c.useRouter(),
                    d = a.default.useMemo(
                        function () {
                            var n = t(i.resolveHref(s, e.href, !0), 2),
                                r = n[0],
                                a = n[1];
                            return { href: r, as: e.as ? i.resolveHref(s, e.as) : a || r };
                        },
                        [s, e.href, e.as]
                    ),
                    f = d.href,
                    m = d.as,
                    h = e.children,
                    v = e.replace,
                    p = e.shallow,
                    x = e.scroll,
                    g = e.locale;
                "string" === typeof h && (h = a.default.createElement("a", null, h));
                var j = (n = a.default.Children.only(h)) && "object" === typeof n && n.ref,
                    N = t(l.useIntersection({ rootMargin: "200px" }), 2),
                    y = N[0],
                    b = N[1],
                    w = a.default.useCallback(
                        function (e) {
                            y(e), j && ("function" === typeof j ? j(e) : "object" === typeof j && (j.current = e));
                        },
                        [j, y]
                    );
                a.default.useEffect(
                    function () {
                        var e = b && r && i.isLocalURL(f),
                            n = "undefined" !== typeof g ? g : s && s.locale,
                            t = o[f + "%" + m + (n ? "%" + n : "")];
                        e && !t && u(s, f, m, { locale: n });
                    },
                    [m, f, b, g, r, s]
                );
                var E = {
                    ref: w,
                    onClick: function (e) {
                        n.props && "function" === typeof n.props.onClick && n.props.onClick(e),
                            e.defaultPrevented ||
                            (function (e, n, r, t, s, a, c, l) {
                                ("A" !== e.currentTarget.nodeName ||
                                    (!(function (e) {
                                        var n = e.currentTarget.target;
                                        return (n && "_self" !== n) || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.nativeEvent && 2 === e.nativeEvent.which);
                                    })(e) &&
                                        i.isLocalURL(r))) &&
                                    (e.preventDefault(), null == c && t.indexOf("#") >= 0 && (c = !1), n[s ? "replace" : "push"](r, t, { shallow: a, locale: l, scroll: c }));
                            })(e, s, f, m, v, p, x, g);
                    },
                    onMouseEnter: function (e) {
                        n.props && "function" === typeof n.props.onMouseEnter && n.props.onMouseEnter(e), i.isLocalURL(f) && u(s, f, m, { priority: !0 });
                    },
                };
                if (e.passHref || ("a" === n.type && !("href" in n.props))) {
                    var L = "undefined" !== typeof g ? g : s && s.locale,
                        _ = s && s.isLocaleDomain && i.getDomainLocale(m, L, s && s.locales, s && s.domainLocales);
                    E.href = _ || i.addBasePath(i.addLocale(m, L, s && s.defaultLocale));
                }
                return a.default.cloneElement(n, E);
            };
            n.default = d;
        },
        7190: function (e, n, r) {
            "use strict";
            function t(e, n) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, n) {
                        var r = [],
                            t = !0,
                            s = !1,
                            a = void 0;
                        try {
                            for (var i, c = e[Symbol.iterator](); !(t = (i = c.next()).done) && (r.push(i.value), !n || r.length !== n); t = !0);
                        } catch (l) {
                            (s = !0), (a = l);
                        } finally {
                            try {
                                t || null == c.return || c.return();
                            } finally {
                                if (s) throw a;
                            }
                        }
                        return r;
                    })(e, n) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    })()
                );
            }
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.useIntersection = function (e) {
                    var n = e.rootMargin,
                        r = e.disabled || !i,
                        l = s.useRef(),
                        o = t(s.useState(!1), 2),
                        u = o[0],
                        d = o[1],
                        f = s.useCallback(
                            function (e) {
                                l.current && (l.current(), (l.current = void 0)),
                                    r ||
                                    u ||
                                    (e &&
                                        e.tagName &&
                                        (l.current = (function (e, n, r) {
                                            var t = (function (e) {
                                                var n = e.rootMargin || "",
                                                    r = c.get(n);
                                                if (r) return r;
                                                var t = new Map(),
                                                    s = new IntersectionObserver(function (e) {
                                                        e.forEach(function (e) {
                                                            var n = t.get(e.target),
                                                                r = e.isIntersecting || e.intersectionRatio > 0;
                                                            n && r && n(r);
                                                        });
                                                    }, e);
                                                return c.set(n, (r = { id: n, observer: s, elements: t })), r;
                                            })(r),
                                                s = t.id,
                                                a = t.observer,
                                                i = t.elements;
                                            return (
                                                i.set(e, n),
                                                a.observe(e),
                                                function () {
                                                    i.delete(e), a.unobserve(e), 0 === i.size && (a.disconnect(), c.delete(s));
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
                            [r, n, u]
                        );
                    return (
                        s.useEffect(
                            function () {
                                if (!i && !u) {
                                    var e = a.requestIdleCallback(function () {
                                        return d(!0);
                                    });
                                    return function () {
                                        return a.cancelIdleCallback(e);
                                    };
                                }
                            },
                            [u]
                        ),
                        [f, u]
                    );
                });
            var s = r(7294),
                a = r(9311),
                i = "undefined" !== typeof IntersectionObserver;
            var c = new Map();
        },
        3136: function (e, n, r) {
            "use strict";
            var t = r(5893),
                s = r(7294),
                a = r(1664),
                i = r(1163);
            n.Z = function (e) {
                var n = e.title,
                    r = e.fullPath,
                    c = e.image,
                    l = (0, i.useRouter)();
                return (0, t.jsx)("header", {
                    className: "pages-header bg-img valign parallaxie",
                    style: { backgroundImage: "url(".concat(c || "/assets/img/pg1.jpg", ")") },
                    "data-overlay-dark": "5",
                    children: (0, t.jsx)("div", {
                        className: "container",
                        children: (0, t.jsx)("div", {
                            className: "row",
                            children: (0, t.jsx)("div", {
                                className: "col-lg-12",
                                children: (0, t.jsxs)("div", {
                                    className: "cont text-center",
                                    children: [
                                        (0, t.jsx)("h1", { children: n }),
                                        (0, t.jsx)("div", {
                                            className: "path",
                                            children: r.map(function (e, n) {
                                                return (0,
                                                    t.jsxs)(s.Fragment, { children: [(0, t.jsx)(a.default, { href: e.url, children: (0, t.jsx)("a", { className: l.pathname == e.url ? "active" : "", children: e.name }) }), n != r.length - 1 ? (0, t.jsx)("span", { children: "/" }) : ""] }, e.id);
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
        843: function (e, n, r) {
            "use strict";
            var t = r(5893),
                s = r(7294),
                a = r(1696),
                i = r(1690),
                c = r(9008);
            n.Z = function (e) {
                var n = e.children,
                    r = e.logoClassText,
                    l = s.useRef(null),
                    o = s.useRef(null);
                return (
                    s.useEffect(
                        function () {
                            var e = l.current,
                                n = o.current;
                            window.pageYOffset > 300 ? e.classList.add("nav-scroll") : e.classList.remove("nav-scroll"),
                                window.addEventListener("scroll", function () {
                                    window.pageYOffset > 300 ? (e.classList.add("nav-scroll"), n.setAttribute("src", "/assets/img/logo-light.svg")) : (e.classList.remove("nav-scroll"), n.setAttribute("src", "/assets/img/logo-light.svg"));
                                });
                        },
                        [l]
                    ),
                    (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(c.default, { children: (0, t.jsx)("link", { rel: "stylesheet", href: "/assets/css/style.css" }) }), (0, t.jsx)(a.Z, { navbarRef: l, logoRef: o, logoClass: r }), n, (0, t.jsx)(i.Z, {})],
                    })
                );
            };
        },
        7528: function (e, n, r) {
            "use strict";
            r.r(n),
                r.d(n, {
                    default: function () {
                        return h;
                    },
                });
            var t = r(5893),
                s = r(7294),
                a = r(3136),
                i = function () {
                    return (0, t.jsx)("div", {
                        className: "info pt-80 pb-80",
                        children: (0, t.jsx)("div", {
                            className: "container",
                            children: (0, t.jsxs)("div", {
                                className: "row",
                                children: [
                                    (0, t.jsx)("div", {
                                        className: "col-lg-4",
                                        children: (0, t.jsxs)("div", {
                                            className: "item",
                                            children: [
                                                (0, t.jsx)("span", { className: "icon pe-7s-phone" }),
                                                (0, t.jsxs)("div", {
                                                    className: "cont",
                                                    children: [(0, t.jsx)("h6", { className: "custom-font", children: "Call Us" }), (0, t.jsx)("p", { children: "+91 9035347222" }), (0, t.jsx)("p", { children: "+91 9902734419" })],
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, t.jsx)("div", {
                                        className: "col-lg-4",
                                        children: (0, t.jsxs)("div", {
                                            className: "item",
                                            children: [
                                                (0, t.jsx)("span", { className: "icon pe-7s-mail-open" }),
                                                (0, t.jsxs)("div", {
                                                    className: "cont",
                                                    children: [(0, t.jsx)("h6", { className: "custom-font", children: "Email Us" }), (0, t.jsx)("p", { children: "Info@studiobrightlux.com" })],
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, t.jsx)("div", {
                                        className: "col-lg-4",
                                        children: (0, t.jsxs)("div", {
                                            className: "item",
                                            children: [
                                                (0, t.jsx)("span", { className: "icon pe-7s-map" }),
                                                (0, t.jsxs)("div", {
                                                    className: "cont",
                                                    children: [(0, t.jsx)("h6", { className: "custom-font", children: "Address" }), (0, t.jsx)("p", { children: "1st Floor “A.R.S ARCADE” Sy No.25/4 of Kurudusonnenahalli Village, Bidarahalli Hobli, Bangalore East Taluk, Bangalore-560049." })],
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    });
                },
                c = r(5666),
                l = r.n(c),
                o = r(2175),
                u = r(2806);
            function d(e, n, r, t, s, a, i) {
                try {
                    var c = e[a](i),
                        l = c.value;
                } catch (o) {
                    return void r(o);
                }
                c.done ? n(l) : Promise.resolve(l).then(t, s);
            }
            var f = function () {
                var e,
                    n = function (e) {
                        var n;
                        return e ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e) || (n = "Invalid email address") : (n = "Required"), n;
                    },
                    r = s.useRef(null),
                    a = function (e) {
                        return new Promise(function (n) {
                            return setTimeout(n, e);
                        });
                    };
                return (0, t.jsx)("div", {
                    className: "container-fluid",
                    children: (0, t.jsxs)("div", {
                        className: "row",
                        children: [
                            (0, t.jsx)("div", { className: "col-lg-6 map-box", children: (0, t.jsx)("iframe", { src: u.xU }) }),
                            (0, t.jsx)("div", {
                                className: "col-lg-6 form",
                                children: (0, t.jsx)(o.J9, {
                                    initialValues: { name: "", email: "", message: "" },
                                    onSubmit:
                                        ((e = l().mark(function e(n) {
                                            return l().wrap(function (e) {
                                                for (; ;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (e.next = 2), a(500);
                                                        case 2:
                                                            alert(JSON.stringify(n, null, 2)),
                                                                (r.current.innerText = "Your Message has been successfully sent. I will contact you soon."),
                                                                (n.name = ""),
                                                                (n.email = ""),
                                                                (n.message = ""),
                                                                setTimeout(function () {
                                                                    r.current.innerText = "";
                                                                }, 2e3);
                                                        case 8:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            }, e);
                                        })),
                                            function () {
                                                var n = this,
                                                    r = arguments;
                                                return new Promise(function (t, s) {
                                                    var a = e.apply(n, r);
                                                    function i(e) {
                                                        d(a, t, s, i, c, "next", e);
                                                    }
                                                    function c(e) {
                                                        d(a, t, s, i, c, "throw", e);
                                                    }
                                                    i(void 0);
                                                });
                                            }),
                                    children: function (e) {
                                        var s = e.errors,
                                            a = e.touched;
                                        return (0, t.jsxs)(o.l0, {
                                            id: "contact-form",
                                            children: [
                                                (0, t.jsx)("div", { className: "messages", ref: r }),
                                                (0, t.jsxs)("div", {
                                                    className: "controls",
                                                    children: [
                                                        (0, t.jsx)("div", { className: "form-group", children: (0, t.jsx)(o.gN, { id: "form_name", type: "text", name: "name", placeholder: "Name", required: "required" }) }),
                                                        (0, t.jsxs)("div", {
                                                            className: "form-group",
                                                            children: [
                                                                (0, t.jsx)(o.gN, { id: "form_email", type: "email", name: "email", validate: n, placeholder: "Email", required: "required" }),
                                                                s.email && a.email && (0, t.jsx)("div", { children: s.email }),
                                                            ],
                                                        }),
                                                        (0, t.jsx)("div", {
                                                            className: "form-group",
                                                            children: (0, t.jsx)(o.gN, { as: "textarea", id: "form_message", name: "message", placeholder: "Message", rows: "4", required: "required" }),
                                                        }),
                                                        (0, t.jsx)("button", { type: "submit", className: "btn-curve btn-color", children: (0, t.jsx)("span", { children: "Send Message" }) }),
                                                    ],
                                                }),
                                            ],
                                        });
                                    },
                                }),
                            }),
                        ],
                    }),
                });
            },
                m = r(843),
                h = function () {
                    return (
                        s.useEffect(function () {
                            document.querySelector("body").classList.add("index3");
                        }, []),
                        (0, t.jsxs)(m.Z, {
                            children: [
                                (0, t.jsx)(a.Z, {
                                    title: "Contact Us",
                                    fullPath: [
                                        { id: 1, name: "home", url: "/" },
                                        { id: 2, name: "contact us", url: "/contact" },
                                    ],
                                    image: "/assets/img/pg2.jpg",
                                }),
                                (0, t.jsxs)("section", { className: "contact", children: [(0, t.jsx)(i, {}), (0, t.jsx)(f, {})] }),
                            ],
                        })
                    );
                };
        },
        1664: function (e, n, r) {
            e.exports = r(8418);
        },
        1163: function (e, n, r) {
            e.exports = r(387);
        },
    },
    function (e) {
        e.O(0, [175, 613, 774, 888, 179], function () {
            return (n = 5474), e((e.s = n));
            var n;
        });
        var n = e.O();
        _N_E = n;
    },
]);
