"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [536],
    {
        8063: function (e, s) {
            s.Z = function () {
                var e,
                    s = document.querySelectorAll(".gallery"),
                    n = document.querySelector(".filtering"),
                    r = document.querySelectorAll(".filtering");
                if (
                    (s.length >= 1 &&
                        s.forEach(function (s) {
                            e = new Isotope(s, { itemSelector: ".items" });
                        }),
                        n)
                ) {
                    n.addEventListener("click", function (s) {
                        if (matchesSelector(s.target, "span")) {
                            var n = s.target.getAttribute("data-filter");
                            (n = n), e.arrange({ filter: n });
                        }
                    });
                    for (
                        var t = function (e) {
                            e.addEventListener("click", function (s) {
                                matchesSelector(s.target, "span") && (e.querySelector(".active").classList.remove("active"), s.target.classList.add("active"));
                            });
                        },
                        i = 0,
                        l = r.length;
                        i < l;
                        i++
                    ) {
                        t(r[i]);
                    }
                }
            };
        },
        5850: function (e, s) {
            s.Z = function () {
                var e = document.querySelector(".swiper-pagination");
                e && (e.innerHTML = e.innerHTML.replace(" / ", ""));
            };
        },
        2813: function (e, s, n) {
            var r = n(5893),
                t = (n(7294), n(1664));
            s.Z = function (e) {
                var s = e.smallTitle;
                return (0, r.jsx)
                // ("section", {
                //     className: "blog-grid section-padding",
                //     children: (0, r.jsxs)("div", {
                //         className: "container",
                //         children: [
                //             s
                //                 ? (0, r.jsx)("div", { className: "section-head", children: (0, r.jsx)("h3", { children: "News" }) })
                //                 : (0, r.jsxs)("div", { className: "main-header text-center", children: [(0, r.jsx)("h3", { children: "Latest News." }), (0, r.jsx)("div", { className: "tex-bg", children: "Blog" })] }),
                //             (0, r.jsxs)("div", {
                //                 className: "row",
                //                 children: [
                //                     (0, r.jsx)("div", {
                //                         className: "col-lg-4",
                //                         children: (0, r.jsx)("div", {
                //                             className: "item bg-img md-mb50 wow fadeInUp",
                //                             "data-wow-delay": ".3s",
                //                             style: { backgroundImage: "url(/assets/img/blog/1.jpg)" },
                //                             children: (0, r.jsxs)("div", {
                //                                 className: "cont",
                //                                 children: [
                //                                     (0, r.jsx)(t.default, {
                //                                         href: "/blog-details",
                //                                         children: (0, r.jsx)("a", { className: "date", children: (0, r.jsxs)("span", { children: [(0, r.jsx)("i", { children: "06" }), " August"] }) }),
                //                                     }),
                //                                     (0, r.jsxs)("div", {
                //                                         className: "info",
                //                                         children: [
                //                                             (0, r.jsx)(t.default, { href: "#", children: (0, r.jsx)("a", { className: "author", children: (0, r.jsx)("span", { children: "Admin" }) }) }),
                //                                             (0, r.jsx)(t.default, { href: "/blog-details", children: (0, r.jsx)("a", { className: "tag", children: (0, r.jsx)("span", { children: "WordPress" }) }) }),
                //                                         ],
                //                                     }),
                //                                     (0, r.jsx)("h6", { children: (0, r.jsx)(t.default, { href: "/blog-details", children: "Double rectangle houses from old containers." }) }),
                //                                     (0, r.jsx)("div", { className: "btn-more", children: (0, r.jsx)(t.default, { href: "/blog-details", children: (0, r.jsx)("a", { className: "simple-btn", children: "Read More" }) }) }),
                //                                 ],
                //                             }),
                //                         }),
                //                     }),
                //                     (0, r.jsx)("div", {
                //                         className: "col-lg-4",
                //                         children: (0, r.jsx)("div", {
                //                             className: "item active bg-img md-mb50 wow fadeInUp",
                //                             "data-wow-delay": ".5s",
                //                             style: { backgroundImage: "url(/assets/img/blog/2.jpg)" },
                //                             children: (0, r.jsxs)("div", {
                //                                 className: "cont",
                //                                 children: [
                //                                     (0, r.jsx)(t.default, {
                //                                         href: "/blog-details",
                //                                         children: (0, r.jsx)("a", { className: "date", children: (0, r.jsxs)("span", { children: [(0, r.jsx)("i", { children: "06" }), " August"] }) }),
                //                                     }),
                //                                     (0, r.jsxs)("div", {
                //                                         className: "info",
                //                                         children: [
                //                                             (0, r.jsx)(t.default, { href: "#", children: (0, r.jsx)("a", { className: "author", children: (0, r.jsx)("span", { children: "Admin" }) }) }),
                //                                             (0, r.jsx)(t.default, { href: "/blog-details", children: (0, r.jsx)("a", { className: "tag", children: (0, r.jsx)("span", { children: "WordPress" }) }) }),
                //                                         ],
                //                                     }),
                //                                     (0, r.jsx)("h6", { children: (0, r.jsx)(t.default, { href: "/blog-details", children: "How to use solid color combine with simple furnitures." }) }),
                //                                     (0, r.jsx)("div", { className: "btn-more", children: (0, r.jsx)(t.default, { href: "/blog-details", className: "simple-btn", children: "Read More" }) }),
                //                                 ],
                //                             }),
                //                         }),
                //                     }),
                //                     (0, r.jsx)("div", {
                //                         className: "col-lg-4",
                //                         children: (0, r.jsx)("div", {
                //                             className: "item bg-img wow fadeInUp",
                //                             "data-wow-delay": ".8s",
                //                             style: { backgroundImage: "url(/assets/img/blog/3.jpg)" },
                //                             children: (0, r.jsxs)("div", {
                //                                 className: "cont",
                //                                 children: [
                //                                     (0, r.jsx)(t.default, {
                //                                         href: "/blog-details",
                //                                         children: (0, r.jsx)("a", { className: "date", children: (0, r.jsxs)("span", { children: [(0, r.jsx)("i", { children: "06" }), " August"] }) }),
                //                                     }),
                //                                     (0, r.jsxs)("div", {
                //                                         className: "info",
                //                                         children: [
                //                                             (0, r.jsx)(t.default, { href: "#", children: (0, r.jsx)("a", { className: "author", children: (0, r.jsx)("span", { children: "Admin" }) }) }),
                //                                             (0, r.jsx)(t.default, { href: "/blog-details", children: (0, r.jsx)("a", { className: "tag", children: (0, r.jsx)("span", { children: "WordPress" }) }) }),
                //                                         ],
                //                                     }),
                //                                     (0, r.jsx)("h6", { children: (0, r.jsx)(t.default, { href: "/blog-details", children: "How to use solid color combine with simple furnitures." }) }),
                //                                     (0, r.jsx)("div", { className: "btn-more", children: (0, r.jsx)(t.default, { href: "/blog-details", className: "simple-btn", children: "Read More" }) }),
                //                                 ],
                //                             }),
                //                         }),
                //                     }),
                //                 ],
                //             }),
                //         ],
                //     }),
                // });
            };
        },
        8636: function (e, s, n) {
            var r = n(5893),
                t = n(7294);
            function i(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function l(e, s) {
                if (!(e instanceof s)) throw new TypeError("Cannot call a class as a function");
            }
            function c(e, s) {
                for (var n = 0; n < s.length; n++) {
                    var r = s[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function a(e, s, n) {
                return s in e ? Object.defineProperty(e, s, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[s] = n), e;
            }
            function d(e) {
                return (d = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                    })(e);
            }
            function o(e, s) {
                return !s || ("object" !== u(s) && "function" !== typeof s) ? i(e) : s;
            }
            function h(e, s) {
                return (h =
                    Object.setPrototypeOf ||
                    function (e, s) {
                        return (e.__proto__ = s), e;
                    })(e, s);
            }
            var u = function (e) {
                return e && "undefined" !== typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
            };
            function m(e) {
                var s = (function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { })), !0;
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = d(e);
                    if (s) {
                        var t = d(this).constructor;
                        n = Reflect.construct(r, arguments, t);
                    } else n = r.apply(this, arguments);
                    return o(this, n);
                };
            }
            var f = (function (e) {
                !(function (e, s) {
                    if ("function" !== typeof s && null !== s) throw new TypeError("Super expression must either be null or a function");
                    (e.prototype = Object.create(s && s.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), s && h(e, s);
                })(u, e);
                var s,
                    n,
                    d,
                    o = m(u);
                function u() {
                    var e;
                    return (
                        l(this, u),
                        a(i((e = o.apply(this, arguments))), "target", t.createRef()),
                        a(i(e), "split", function () {
                            e.target.current && Splitting({ target: e.target.current });
                        }),
                        a(i(e), "componentDidMount", e.split),
                        a(i(e), "componentDidUpdate", e.split),
                        e
                    );
                }
                return (
                    (s = u),
                    (n = [
                        {
                            key: "render",
                            value: function () {
                                return (0, r.jsx)("div", { ref: this.target, children: this.props.children });
                            },
                        },
                    ]) && c(s.prototype, n),
                    d && c(s, d),
                    u
                );
            })(t.Component);
            s.Z = f;
        },
        106: function (e, s, n) {
            var r = n(5893),
                t = n(7294),
                i = n(1664),
                l = n(8063);
            s.Z = function (e) {
                var s = e.vis;
                return (
                    t.useEffect(function () {
                        setTimeout(function () {
                            window.Isotope && (0, l.Z)();
                        }, 1e3);
                    }, []),
                    (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)("section", {
                            className: "works section-padding",
                            children: (0, r.jsx)("div", {
                                className: "container",
                                children: (0, r.jsxs)("div", {
                                    className: "row gallery",
                                    children: [
                                        (0, r.jsx)("div", { className: "col-md-6 items mt-0", children: (0, r.jsx)("div", { className: "main-header mb-0", children: (0, r.jsx)("h3", { children: "Works." }) }) }),
                                        (0, r.jsx)("div", {
                                            className: "col-md-6 items",
                                            children: (0, r.jsxs)("div", {
                                                className: "item",
                                                children: [
                                                    (0, r.jsx)("div", { className: "img", children: (0, r.jsx)("img", { src: "/assets/img/works/2.jpg", alt: "" }) }),
                                                    (0, r.jsxs)("div", {
                                                        className: "cont ".concat(s ? "vis" : ""),
                                                        children: [
                                                            (0, r.jsx)("span", { children: "Architecture" }),
                                                            (0, r.jsx)("span", { children: "Modern" }),
                                                            (0, r.jsx)("h5", { children: (0, r.jsx)(i.default, { href: "/project-details", children: "Modern Townhouse" }) }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: "col-md-6 items",
                                            children: (0, r.jsxs)("div", {
                                                className: "item",
                                                children: [
                                                    (0, r.jsx)("div", { className: "img", children: (0, r.jsx)("img", { src: "/assets/img/works/1.jpg", alt: "" }) }),
                                                    (0, r.jsxs)("div", {
                                                        className: "cont ".concat(s ? "vis" : ""),
                                                        children: [
                                                            (0, r.jsx)("span", { children: "Architecture" }),
                                                            (0, r.jsx)("span", { children: "Modern" }),
                                                            (0, r.jsx)("h5", { children: (0, r.jsx)(i.default, { href: "/project-details", children: "Modern Townhouse" }) }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: "col-md-6 items",
                                            children: (0, r.jsxs)("div", {
                                                className: "item",
                                                children: [
                                                    (0, r.jsx)("div", { className: "img", children: (0, r.jsx)("img", { src: "/assets/img/works/5.jpg", alt: "" }) }),
                                                    (0, r.jsxs)("div", {
                                                        className: "cont ".concat(s ? "vis" : ""),
                                                        children: [
                                                            (0, r.jsx)("span", { children: "Architecture" }),
                                                            (0, r.jsx)("span", { children: "Modern" }),
                                                            (0, r.jsx)("h5", { children: (0, r.jsx)(i.default, { href: "/project-details", children: "Modern Townhouse" }) }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: "col-md-6 items",
                                            children: (0, r.jsxs)("div", {
                                                className: "item",
                                                children: [
                                                    (0, r.jsx)("div", { className: "img", children: (0, r.jsx)("img", { src: "/assets/img/works/3.jpg", alt: "" }) }),
                                                    (0, r.jsxs)("div", {
                                                        className: "cont ".concat(s ? "vis" : ""),
                                                        children: [
                                                            (0, r.jsx)("span", { children: "Architecture" }),
                                                            (0, r.jsx)("span", { children: "Modern" }),
                                                            (0, r.jsx)("h5", { children: (0, r.jsx)(i.default, { href: "/project-details", children: "Modern Townhouse" }) }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: "col-md-6 items",
                                            children: (0, r.jsxs)("div", {
                                                className: "item",
                                                children: [
                                                    (0, r.jsx)("div", { className: "img", children: (0, r.jsx)("img", { src: "/assets/img/works/4.jpg", alt: "" }) }),
                                                    (0, r.jsxs)("div", {
                                                        className: "cont ".concat(s ? "vis" : ""),
                                                        children: [
                                                            (0, r.jsx)("span", { children: "Architecture" }),
                                                            (0, r.jsx)("span", { children: "Modern" }),
                                                            (0, r.jsx)("h5", { children: (0, r.jsx)(i.default, { href: "/project-details", children: "Modern Townhouse" }) }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    })
                );
            };
        },
        843: function (e, s, n) {
            var r = n(5893),
                t = n(7294),
                i = n(1696),
                l = n(1690),
                c = n(9008);
            s.Z = function (e) {
                var s = e.children,
                    n = e.logoClassText,
                    a = t.useRef(null),
                    d = t.useRef(null);
                return (
                    t.useEffect(
                        function () {
                            var e = a.current,
                                s = d.current;
                            window.pageYOffset > 300 ? e.classList.add("nav-scroll") : e.classList.remove("nav-scroll"),
                                window.addEventListener("scroll", function () {
                                    window.pageYOffset > 300 ? (e.classList.add("nav-scroll"), s.setAttribute("src", "/assets/img/logo-light.svg")) : (e.classList.remove("nav-scroll"), s.setAttribute("src", "/assets/img/logo-light.svg"));
                                });
                        },
                        [a]
                    ),
                    (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(c.default, { children: (0, r.jsx)("link", { rel: "stylesheet", href: "/assets/css/style.css" }) }), (0, r.jsx)(i.Z, { navbarRef: a, logoRef: d, logoClass: n }), s, (0, r.jsx)(l.Z, {})],
                    })
                );
            };
        },
    },
]);
