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
                n = (i(7294),
                    JSON.parse(
                        '[{"id":1,"image":"/assets/img/service/1.jpg","title":"Sanitaryware & Ceramics","content":"Studio Bright Lux offers premium sanitaryware and ceramic solutions, adding elegance and functionality to every space.","buttonText":"Read more","href":"sanitaryware-and-ceramics.html"},{"id":2,"image":"/assets/img/service/2.jpg","title":"Interior Design & Decor","content":"Our custom interior design and decor bring style and comfort to every room, creating a personalized and luxurious ambiance.","buttonText":"Read more","href":"interior-design-and-decor.html"},{"id":3,"image":"/assets/img/service/3.jpg","title":"PVC Plumbing & Flooring","content":"Providing durable PVC plumbing and stylish wooden flooring solutions that combine functionality with refined design.","buttonText":"Read more","href":"pvc-plumbing-and-flooring.html"},{"id":4,"image":"/assets/img/service/4.jpg","title":"Wesmarc & Aristo Doors","content":"Choose our high-quality Wesmarc doors and Aristo sliding doors for a blend of modern style and practical functionality.","buttonText":"Read more","href":"wesmarc-and-aristo-doors.html"},{"id":5,"image":"/assets/img/service/5.jpg","title":"Custom Paints & Finishes","content":"Offering a wide range of premium paints and finishes to enhance interiors and create beautiful, lasting impressions.","buttonText":"Read more","href":"custom-paints-and-finishes.html"},{"id":6,"image":"/assets/img/service/6.jpg","title":"Ceramic Tiles & Flooring","content":"Studio Bright Lux provides elegant ceramic tiles and flooring solutions for a sophisticated, seamless look.","buttonText":"Read more","href":"ceramic-tiles-and-flooring.html"}]'
                    )),
                a = i(1664),
                r = function (e) {
                    var s = e.bigTitle,
                        i = e.grid;
                    return (0, t.jsx)("section", {
                        className: "".concat(i ? "services-grid" : "services", " section-padding ").concat(i ? "pt-0" : "bg-gray", " "),
                        children: (0, t.jsxs)("div", {
                            className: "container",
                            children: [
                                s
                                    ? (0, t.jsxs)("div", { className: "main-header text-center", children: [(0, t.jsx)("h3", { children: "All Services" }), (0, t.jsx)("div", { className: "tex-bg", children: "Our Services" })] })
                                    : (0, t.jsx)("div", {
                                        className: "section-head text-center",
                                        children: (0, t.jsx)("div", {
                                            className: "row justify-content-center",
                                            children: (0, t.jsxs)("div", {
                                                className: "col-lg-6 col-md-8 col-sm-10",
                                                children: [
                                                    (0, t.jsx)("h6", { className: "custom-font wow fadeInDown", "data-wow-delay": ".3s", children: "Best Features" }),
                                                    (0, t.jsx)("h4", { className: "playfont wow flipInX", "data-wow-delay": ".5s", children: "Our Services" }),
                                                ],
                                            }),
                                        }),
                                    }),
                                (0, t.jsx)("div", {
                                    className: "row",
                                    children: n.map(function (e, s) {
                                        return (0,
                                            t.jsx)("div", { className: "col-lg-4", children: (0, t.jsxs)("div", { className: "item-bx bg-img wow fadeInUp", "data-wow-delay": 0 == s ? ".3s" : 1 == s ? ".5s" : ".7s", style: { backgroundImage: "url(".concat(e.image, ")") }, children: [(0, t.jsx)("span", { className: e.icon }), (0, t.jsx)("h6", { className: "mb-20", children: e.title }), (0, t.jsx)("p", { children: e.content }), (0, t.jsx)(a.default, { href: e.href, children: (0, t.jsx)("a", { className: "more ".concat(i ? "" : "custom-font", " mt-30"), children: e.buttonText }) })] }) }, e.id);
                                    }),
                                }),
                            ],
                        }),
                    });
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
                                    title: "Our Services",
                                    fullPath: [
                                        { id: 1, name: "home", url: "/" },
                                        { id: 2, name: "our services", url: "/services.html" },
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
