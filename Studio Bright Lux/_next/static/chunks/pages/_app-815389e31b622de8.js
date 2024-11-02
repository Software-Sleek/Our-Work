(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888],
    {
        1780: function (e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/_app",
                function () {
                    return s(2021);
                },
            ]);
        },
        2021: function (e, t, s) {
            "use strict";
            s.r(t),
                s.d(t, {
                    default: function () {
                        return h;
                    },
                });
            var r = s(5893),
                n = s(7294),
                o = s(4298),
                i = s(9008),
                c = function () {
                    var e = document.querySelector("#preloader"),
                        t = document.querySelector(".loading-text"),
                        s = function () {
                            e.classList.add("isdone"), t.classList.add("isdone");
                        };
                    Pace.on("start", function () {
                        e.classList.remove("isdone"), t.classList.remove("isdone");
                    }),
                        Pace.on("done", function () {
                            s();
                        }),
                        document.querySelector("body").classList.contains("pace-done") && s(),
                        document.addEventListener("load", function () {
                            s();
                        });
                },
                a = s(2806),
                l = function () {
                    return (
                        n.useEffect(function () {
                            var e = document.querySelector("body");
                            a.QP ? (c(), e.classList.contains("hideX") && e.classList.remove("hideX")) : e.classList.add("hideX");
                        }),
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", { className: "".concat(!0 === a.QP ? "showX" : "hideX"), children: (0, r.jsx)("div", { id: "preloader", children: (0, r.jsx)("div", { className: "loading-text", children: "Loading" }) }) }),
                                a.QP ? (0, r.jsx)(o.default, { id: "pace", strategy: "beforeInteractive", src: "/assets/js/pace.min.js" }) : "",
                            ],
                        })
                    );
                },
                u =
                    (s(472),
                        function () {
                            !(function () {
                                var e = document.querySelector(".cursor-inner"),
                                    t = document.querySelector(".cursor-outer");
                                (window.onmousemove = function (s) {
                                    (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), (e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), s.clientY, s.clientX;
                                }),
                                    document.querySelector(".cursor-pointer") &&
                                    (document.querySelector(".cursor-pointer").addEventListener("mouseenter", function () {
                                        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                                    }),
                                        document.querySelector(".cursor-pointer").addEventListener("mouseleave", function () {
                                            e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
                                        }),
                                        (e.style.visibility = "visible"),
                                        (t.style.visibility = "visible")),
                                    document.querySelectorAll("a").forEach(function (s) {
                                        s.addEventListener("mouseenter", function () {
                                            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                                        });
                                    }),
                                    document.querySelectorAll("a").forEach(function (s) {
                                        s.addEventListener("mouseleave", function () {
                                            e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
                                        });
                                    }),
                                    (e.style.visibility = "visible"),
                                    (t.style.visibility = "visible");
                            })();
                        }),
                d = function () {
                    return (
                        n.useEffect(function () {
                            u();
                        }, []),
                        (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)("div", { className: "mouse-cursor cursor-outer" }), (0, r.jsx)("div", { className: "mouse-cursor cursor-inner" })] })
                    );
                },
                f = function () {
                    var e = document.querySelector(".progress-wrap"),
                        t = document.querySelector(".progress-wrap path"),
                        s = t.getTotalLength(),
                        r = function () {
                            var e = window.pageYOffset,
                                r = document.documentElement.scrollHeight - window.innerHeight,
                                n = s - (e * s) / r;
                            t.style.strokeDashoffset = n;
                        };
                    e &&
                        ((t.style.transition = t.style.WebkitTransition = "none"),
                            (t.style.strokeDasharray = s + " " + s),
                            (t.style.strokeDashoffset = s),
                            t.getBoundingClientRect(),
                            (t.style.transition = t.style.WebkitTransition = "stroke-dashoffset 10ms linear"),
                            r(),
                            window.addEventListener("scroll", r),
                            window.addEventListener("scroll", function () {
                                window.pageYOffset > 150 ? e.classList.add("active-progress") : document.querySelector(".progress-wrap").classList.remove("active-progress");
                            }),
                            e.addEventListener("click", function (e) {
                                return e.preventDefault(), window.scrollTo({ top: 0, behavior: "smooth" }), !1;
                            }));
                },
                m = function () {
                    return (
                        n.useEffect(function () {
                            f();
                        }, []),
                        (0, r.jsx)("div", {
                            className: "progress-wrap cursor-pointer",
                            children: (0, r.jsx)("svg", {
                                className: "progress-circle svg-content",
                                width: "100%",
                                height: "100%",
                                viewBox: "-1 -1 102 102",
                                children: (0, r.jsx)("path", { d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" }),
                            }),
                        })
                    );
                };
            function v(e, t, s) {
                return t in e ? Object.defineProperty(e, t, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = s), e;
            }
            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(s);
                    "function" === typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(s).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(s, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            v(e, t, s[t]);
                        });
                }
                return e;
            }
            var h = function (e) {
                var t = e.Component,
                    s = e.pageProps;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(i.default, { children: [(0, r.jsx)("title", { children: "Studio Bright Lux" }), (0, r.jsx)("meta", { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" })] }),
                        (0, r.jsx)(d, {}),
                        (0, r.jsx)(l, {}),
                        (0, r.jsx)(t, p({}, s)),
                        (0, r.jsx)(m, {}),
                        (0, r.jsx)(o.default, { id: "wow", src: "/assets/js/wow.min.js" }),
                        (0, r.jsx)(o.default, { id: "splitting", strategy: "beforeInteractive", src: "/assets/js/splitting.min.js" }),
                        (0, r.jsx)(o.default, { id: "simpleParallax", src: "/assets/js/simpleParallax.min.js" }),
                        (0, r.jsx)(o.default, { id: "isotope", src: "/assets/js/isotope.pkgd.min.js" }),
                        (0, r.jsx)(o.default, { src: "/assets/js/main.js", id: "init", strategy: "lazyOnload" }),
                    ],
                });
            };
        },
        472: function () { },
        9008: function (e, t, s) {
            e.exports = s(5443);
        },
        4298: function (e, t, s) {
            e.exports = s(699);
        },
        2806: function (e) {
            "use strict";
            e.exports = JSON.parse(
                '{"E8":"/assets/img/logo-light.svg","Q1":"/assets/img/logo-dark.png","xU":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13165.82875806769!2d77.76447824457321!3d12.998513344059191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU5JzM1LjkiTiA3N8KwNDUnNDcuNiJF!5e1!3m2!1sen!2sin!4v1730221279528!5m2!1sen!2sin","QP":true}'
            );
        },
    },
    function (e) {
        var t = function (t) {
            return e((e.s = t));
        };
        e.O(0, [774, 179], function () {
            return t(1780), t(387);
        });
        var s = e.O();
        _N_E = s;
    },
]);
