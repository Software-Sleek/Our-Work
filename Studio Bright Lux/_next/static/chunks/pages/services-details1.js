(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [521],
    {
        4558: function (e, s, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/about",
                function () {
                    return i(1932);
                },
            ]);
        },
        3136: function (e, s, i) {
            "use strict";
            var t = i(5893),
                n = i(7294),
                a = i(1664),
                r = i(1163);
            s.Z = function (e) {
                var s = e.title,
                    i = e.fullPath,
                    c = e.image,
                    l = (0, r.useRouter)();
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
                                        (0, t.jsx)("h1", { children: s }),
                                        (0, t.jsx)("div", {
                                            className: "path",
                                            children: i.map(function (e, s) {
                                                return (0,
                                                    t.jsxs)(n.Fragment, { children: [(0, t.jsx)(a.default, { href: e.url, children: (0, t.jsx)("a", { className: l.pathname == e.url ? "active" : "", children: e.name }) }), s != i.length - 1 ? (0, t.jsx)("span", { children: "/" }) : ""] }, e.id);
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
        1054: function (e, s, i) {
            "use strict";
            i.d(s, {
                Z: function () {
                    return r;
                },
            });
            var t = i(5893),
                r = function (e) {
                    return (0, t.jsx)
                };
        },
        779: function (e, s, i) {
            "use strict";
            var t = i(5893),
                n = (i(7294), i(6699));
            s.Z = function () {
                return (0, t.jsxs)
            };
        },
        5046: function (e, s, i) {
            "use strict";
            i.d(s, {
                Z: function () {
                    return f;
                },
            });
            var t = i(5893),
                n = i(7294),
                a = i(6066),
                r =
                    (i(8322),
                        i(2739),
                        JSON.parse(
                            '[]'
                        )
                    );
            function c(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function l(e, s) {
                for (var i = 0; i < s.length; i++) {
                    var t = s[i];
                    (t.enumerable = t.enumerable || !1), (t.configurable = !0), "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
                }
            }
            function o(e) {
                return (o = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                    })(e);
            }
            function d(e, s) {
                return !s || ("object" !== m(s) && "function" !== typeof s) ? c(e) : s;
            }
            function u(e, s) {
                return (u =
                    Object.setPrototypeOf ||
                    function (e, s) {
                        return (e.__proto__ = s), e;
                    })(e, s);
            }
            var m = function (e) {
                return e && "undefined" !== typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
            };
            function h(e) {
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
                    var i,
                        t = o(e);
                    if (s) {
                        var n = o(this).constructor;
                        i = Reflect.construct(t, arguments, n);
                    } else i = t.apply(this, arguments);
                    return d(this, i);
                };
            }
            var f = (function (e) {
                !(function (e, s) {
                    if ("function" !== typeof s && null !== s) throw new TypeError("Super expression must either be null or a function");
                    (e.prototype = Object.create(s && s.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), s && u(e, s);
                })(d, e);
                var s,
                    i,
                    n,
                    o = h(d);
                function d(e) {
                    var s, i, n, a;
                    return (
                        (function (e, s) {
                            if (!(e instanceof s)) throw new TypeError("Cannot call a class as a function");
                        })(this, d),
                        (s = o.call(this, e)),
                        (i = c(s)),
                        (a = function () {
                            return (
                                !s.props.bigTitle &&
                                (0, t.jsxs)("div", {
                                    className: "navs mt-30",
                                    children: [
                                        (0, t.jsx)("span", {
                                            className: "prev",
                                            onClick: function () {
                                                return s.slider.slickPrev();
                                            },
                                            children: (0, t.jsx)("i", { className: "fas fa-long-arrow-alt-left" }),
                                        }),
                                        (0, t.jsx)("span", {
                                            className: "next",
                                            onClick: function () {
                                                return s.slider.slickNext();
                                            },
                                            children: (0, t.jsx)("i", { className: "fas fa-long-arrow-alt-right" }),
                                        }),
                                    ],
                                })
                            );
                        }),
                        (n = "renderArrows") in i ? Object.defineProperty(i, n, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (i[n] = a),
                        s
                    );
                }
                return (
                    (s = d),
                    (i = [
                        {
                            key: "render",
                            value: function () {
                                var e = this;
                                return (0, t.jsx)(t.Fragment, {
                                    children: (0, t.jsx)
                                });
                            },
                        },
                    ]) && l(s.prototype, i),
                    n && l(s, n),
                    d
                );
            })(n.Component);
        },
        843: function (e, s, i) {
            "use strict";
            var t = i(5893),
                n = i(7294),
                a = i(1696),
                r = i(1690),
                c = i(9008);
            s.Z = function (e) {
                var s = e.children,
                    i = e.logoClassText,
                    l = n.useRef(null),
                    o = n.useRef(null);
                return (
                    n.useEffect(
                        function () {
                            var e = l.current,
                                s = o.current;
                            window.pageYOffset > 300 ? e.classList.add("nav-scroll") : e.classList.remove("nav-scroll"),
                                window.addEventListener("scroll", function () {
                                    window.pageYOffset > 300 ? (e.classList.add("nav-scroll"), s.setAttribute("src", "/assets/img/logo-light.svg")) : (e.classList.remove("nav-scroll"), s.setAttribute("src", "/assets/img/logo-light.svg"));
                                });
                        },
                        [l]
                    ),
                    (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(c.default, { children: (0, t.jsx)("link", { rel: "stylesheet", href: "/assets/css/style.css" }) }), (0, t.jsx)(a.Z, { navbarRef: l, logoRef: o, logoClass: i }), s, (0, t.jsx)(r.Z, {})],
                    })
                );
            };
        },
        1932: function (e, s, i) {
            "use strict";
            i.r(s),
                i.d(s, {
                    default: function () {
                        return h;
                    },
                });
            var t = i(5893),
                n = i(7294),
                a = i(843),
                r = i(3136),
                c = function () {
                    return (0, t.jsx)("section", {
                        className: "about section-padding",
                        children: (0, t.jsx)("div", {
                            className: "container",
                            children: [
                                (0, t.jsxs)("h2", {
                                    className: 'text-center mb-40',
                                    children: 'Our Collaberation with Imperial Sanitations Private Limited',
                                }),
                                (0, t.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        (0, t.jsx)("div", {
                                            className: "col-lg-6",
                                            children: (0, t.jsx)("img", {
                                                src: "./assets/img/brand/01.jpg",
                                                alt: "Description of Image",
                                                className: "img-fluid"
                                            }),
                                        }),                                        
                                        (0, t.jsx)("div", {
                                            className: "col-lg-6",
                                            children: (0, t.jsxs)("div", {
                                                className: "txt-cont",
                                                children: [
                                                    (0, t.jsx)("p", {
                                                        className: "mb-20",
                                                        children: "In partnership with Imperial Sanitations Private Limited, Studio Bright Lux is proud to present a stunning collection of premium sanitaryware and ceramic solutions. This collaboration combines exceptional craftsmanship with innovative design principles, ensuring that every product we offer enhances the beauty and functionality of your spaces.",
                                                    }),
                                                    (0, t.jsx)("p", {
                                                        children:
                                                            "Our diverse selection includes everything from elegant ceramic tiles to reliable plumbing fixtures, meticulously crafted for durability and aesthetic appeal. With a shared commitment to excellence, we transform ordinary spaces into extraordinary environments, providing products that not only meet your needs but also elevate your interior design vision with style and sophistication.",
                                                    }),
                                                ]                                                                                                                                                                                                                                                                                    
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                },
                l = i(1054),
                o = function () {
                    var e = document.querySelector(".skills-sec");
                    e &&
                        window.addEventListener("scroll", function () {
                            document.querySelectorAll(".skill-progress .progres").forEach(function (s) {
                                var i = s.getAttribute("data-value");
                                window.pageYOffset > e.offsetTop - 400 && (s.style.width = i);
                            });
                        });
                },
                d = function () {
                    return (
                        n.useEffect(function () {
                            o();
                        }, []),
                        (0, t.jsx)
                    );
                },
                u = i(5046),
                m = i(779),
                h = function () {
                    return (
                        n.useEffect(function () {
                            document.querySelector("body").classList.add("index3");
                        }, []),
                        (0, t.jsxs)(a.Z, {
                            children: [
                                (0, t.jsx)(r.Z, {
                                    title: "Sanitaryware & Ceramics",
                                    fullPath: [
                                        { id: 1, name: "services", url: "/services.html" },
                                        { id: 2, name: "sanitaryware & ceramics", url: "/sanitaryware-and-ceramics.html" },
                                    ],
                                }),
                                (0, t.jsx)(c, {}),
                                (0, t.jsx)(l.Z, { bigTitle: !0, grid: !0 }),
                                (0, t.jsx)(u.Z, { bigTitle: !0 }),
                                (0, t.jsx)(m.Z, {}),
                                (0, t.jsx)(d, {}),
                            ],
                        })
                    );
                };
        },
        1163: function (e, s, i) {
            e.exports = i(387);
        },
        6699: function (e) {
            "use strict";
            e.exports = JSON.parse(
                '[{"id":1 ,"facebook":"#","twitter":"#","behance":"#","linkedin":"#","username":"Hasib sharif","usertitle":"General Manager"},{"id":2 ,"facebook":"#","twitter":"#","behance":"#","linkedin":"#","username":"Jonson Leo","usertitle":"Founder"},{"id":3 ,"facebook":"#","twitter":"#","behance":"#","linkedin":"#","username":"Leio Man","usertitle":"Founder"},{"id":4 ,"facebook":"#","twitter":"#","behance":"#","linkedin":"#","username":"Robert Front","usertitle":"CEO Founder"},{"id":5,"image":"/assets/img/team/5.jpg","facebook":"#","twitter":"#","behance":"#","linkedin":"#","username":"Matt Huk","usertitle":"3D Visualization"}]'
            );
        },
    },
    function (e) {
        e.O(0, [444, 613, 774, 888, 179], function () {
            return (s = 4558), e((e.s = s));
            var s;
        });
        var s = e.O();
        _N_E = s;
    },
]);
