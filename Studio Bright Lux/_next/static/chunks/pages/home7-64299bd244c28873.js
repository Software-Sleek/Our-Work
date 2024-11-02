(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [952],
    {
        974: function (e, s, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/home7",
                function () {
                    return i(4008);
                },
            ]);
        },
        5046: function (e, s, i) {
            "use strict";
            i.d(s, {
                Z: function () {
                    return x;
                },
            });
            var n = i(5893),
                t = i(7294),
                r = i(6066),
                a =
                    (i(8322),
                        i(2739),
                        JSON.parse(
                            '[{"id":1 ,"content":"Studio Bright Lux’s sanitaryware and ceramics brought elegance to our spaces, transforming our home with beautiful, high-quality products.","username":"Rohit Sharma","usertitle":"Customer"},{"id":2 ,"content":"Their interior design work turned our living area into a cozy, luxurious space. Studio Bright Lux captures your style perfectly with every detail.","username":"Priya Desai","usertitle":"Customer"},{"id":3 ,"content":"Studio Bright Lux provided us with durable PVC plumbing and stunning wooden floors, making our home warm, stylish, and efficiently equipped.","username":"Anil Kumar","usertitle":"Customer"},{"id":4 ,"content":"The Wesmarc and Aristo doors installed by Studio Bright Lux added modern style to our home, combining functionality with sleek, quality design.","username":"Meera Patel","usertitle":"Customer"}]'
                        ));
            function c(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function l(e, s) {
                for (var i = 0; i < s.length; i++) {
                    var n = s[i];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
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
                return !s || ("object" !== u(s) && "function" !== typeof s) ? c(e) : s;
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
                    var i,
                        n = o(e);
                    if (s) {
                        var t = o(this).constructor;
                        i = Reflect.construct(n, arguments, t);
                    } else i = n.apply(this, arguments);
                    return d(this, i);
                };
            }
            var x = (function (e) {
                !(function (e, s) {
                    if ("function" !== typeof s && null !== s) throw new TypeError("Super expression must either be null or a function");
                    (e.prototype = Object.create(s && s.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), s && h(e, s);
                })(d, e);
                var s,
                    i,
                    t,
                    o = m(d);
                function d(e) {
                    var s, i, t, r;
                    return (
                        (function (e, s) {
                            if (!(e instanceof s)) throw new TypeError("Cannot call a class as a function");
                        })(this, d),
                        (s = o.call(this, e)),
                        (i = c(s)),
                        (r = function () {
                            return (
                                !s.props.bigTitle &&
                                (0, n.jsxs)("div", {
                                    className: "navs mt-30",
                                    children: [
                                        (0, n.jsx)("span", {
                                            className: "prev",
                                            onClick: function () {
                                                return s.slider.slickPrev();
                                            },
                                            children: (0, n.jsx)("i", { className: "fas fa-long-arrow-alt-left" }),
                                        }),
                                        (0, n.jsx)("span", {
                                            className: "next",
                                            onClick: function () {
                                                return s.slider.slickNext();
                                            },
                                            children: (0, n.jsx)("i", { className: "fas fa-long-arrow-alt-right" }),
                                        }),
                                    ],
                                })
                            );
                        }),
                        (t = "renderArrows") in i ? Object.defineProperty(i, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (i[t] = r),
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
                                return (0, n.jsx)(n.Fragment, {
                                    children: (0, n.jsx)("section", {
                                        className: "testimonials grid section-padding ".concat(this.props.withBg ? "bg-img parallaxie" : ""),
                                        style: { backgroundImage: this.props.withBg ? "url(/assets/img/001.jpg)" : "none" },
                                        "data-overlay-dark": this.props.withBg ? 9 : null,
                                        children: (0, n.jsxs)("div", {
                                            className: "container",
                                            children: [
                                                !this.props.bigTitle &&
                                                (0, n.jsx)("div", {
                                                    className: "section-head text-center",
                                                    children: (0, n.jsx)("div", {
                                                        className: "row justify-content-center",
                                                        children: (0, n.jsxs)("div", {
                                                            className: "col-lg-6 col-md-8 col-sm-10",
                                                            children: [
                                                                (0, n.jsx)("h6", { className: "wow fadeInDown", "data-wow-delay": ".3s", children: "Testimonials" }),
                                                                (0, n.jsx)("h4", { className: "playfont wow flipInX", "data-wow-delay": ".5s", children: "What People Says?" }),
                                                            ],
                                                        }),
                                                    }),
                                                }),
                                                (0, n.jsx)("div", {
                                                    className: "row",
                                                    children: (0, n.jsxs)("div", {
                                                        className: "col-lg-12",
                                                        children: [
                                                            (0, n.jsx)(r.Z, {
                                                                className: "testim",
                                                                ref: function (s) {
                                                                    return (e.slider = s);
                                                                },
                                                                dots: !1,
                                                                arrows: !0,
                                                                autoplay: !0,
                                                                rows: 1,
                                                                slidesToScroll: 1,
                                                                slidesToShow: 2,
                                                                responsive: [
                                                                    { breakpoint: 1024, settings: { slidesToShow: 2 } },
                                                                    { breakpoint: 767, settings: { slidesToShow: 1 } },
                                                                    { breakpoint: 480, settings: { slidesToShow: 1 } },
                                                                ],
                                                                children: a.map(function (e) {
                                                                    return (0,
                                                                        n.jsxs)("div", { className: "item wow fadeInUp", "data-wow-delay": ".3s", children: [(0, n.jsx)("span", { className: "quote-icon", children: (0, n.jsx)("img", { src: "/assets/img/clients/quote.svg", alt: "" }) }), (0, n.jsx)("div", { className: "cont", children: (0, n.jsxs)("p", { className: "", children: ['"', e.content, '"'] }) }), (0, n.jsxs)("div", { className: "info", children: [(0, n.jsxs)("h6", { children: [e.username, " ", (0, n.jsx)("span", { children: e.usertitle })] })] })] }, e.id);
                                                                }),
                                                            }),
                                                            this.renderArrows(),
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                                });
                            },
                        },
                    ]) && l(s.prototype, i),
                    t && l(s, t),
                    d
                );
            })(t.Component);
        },
        4008: function (e, s, i) {
            "use strict";
            i.r(s),
                i.d(s, {
                    default: function () {
                        return b;
                    },
                });
            var n = i(5893),
                t = i(7294),
                r = function () {
                    return (0, n.jsxs)("section", {
                        className: "team section-padding",
                        children: [
                            (0, n.jsx)("div", { className: "container", children: (0, n.jsx)("div", { className: "section-head", children: (0, n.jsx)("h3", { children: "Our Team" }) }) }),
                            (0, n.jsx)("div", {
                                className: "container-fluid",
                                children: (0, n.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: "col-lg-3 col-md-6",
                                            children: (0, n.jsx)("div", {
                                                className: "item cir md-mb50",
                                                children: (0, n.jsxs)("div", {
                                                    className: "img",
                                                    children: [
                                                        (0, n.jsx)("img", { src: "/assets/img/team/1.jpg", alt: "" }),
                                                        (0, n.jsx)("div", {
                                                            id: "circle",
                                                            children: (0, n.jsxs)("svg", {
                                                                version: "1.1",
                                                                x: "0px",
                                                                y: "0px",
                                                                width: "300px",
                                                                height: "300px",
                                                                viewBox: "0 0 300 300",
                                                                enableBackground: "new 0 0 300 300",
                                                                xmlSpace: "preserve",
                                                                children: [
                                                                    (0, n.jsx)("defs", { children: (0, n.jsx)("path", { id: "circlePath", d: " M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " }) }),
                                                                    (0, n.jsx)("circle", { cx: "150", cy: "100", r: "75", fill: "none" }),
                                                                    (0, n.jsxs)("g", {
                                                                        children: [
                                                                            (0, n.jsx)("use", { xlinkHref: "#circlePath", fill: "none" }),
                                                                            (0, n.jsx)("text", { fill: "#00a3df", children: (0, n.jsx)("textPath", { xlinkHref: "#circlePath", children: "CEO Manager CEO Manager CEO Manager" }) }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                        (0, n.jsxs)("div", { className: "info", children: [(0, n.jsx)("h6", { children: "Ryan Hicks" }), (0, n.jsx)("span", { children: "Client Manager" })] }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "col-lg-3 col-md-6",
                                            children: (0, n.jsx)("div", {
                                                className: "item cir md-mb50",
                                                children: (0, n.jsxs)("div", {
                                                    className: "img",
                                                    children: [
                                                        (0, n.jsx)("img", { src: "/assets/img/team/2.jpg", alt: "" }),
                                                        (0, n.jsx)("div", {
                                                            id: "circle",
                                                            children: (0, n.jsxs)("svg", {
                                                                version: "1.1",
                                                                x: "0px",
                                                                y: "0px",
                                                                width: "300px",
                                                                height: "300px",
                                                                viewBox: "0 0 300 300",
                                                                enableBackground: "new 0 0 300 300",
                                                                xmlSpace: "preserve",
                                                                children: [
                                                                    (0, n.jsx)("defs", { children: (0, n.jsx)("path", { id: "circlePath", d: " M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " }) }),
                                                                    (0, n.jsx)("circle", { cx: "150", cy: "100", r: "75", fill: "none" }),
                                                                    (0, n.jsxs)("g", {
                                                                        children: [
                                                                            (0, n.jsx)("use", { xlinkHref: "#circlePath", fill: "none" }),
                                                                            (0, n.jsx)("text", {
                                                                                fill: "#00a3df",
                                                                                children: (0, n.jsx)("textPath", { xlinkHref: "#circlePath", children: "Interior Designer Interior Designer Interior Designer" }),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                        (0, n.jsxs)("div", { className: "info", children: [(0, n.jsx)("h6", { children: "Ryan Hicks" }), (0, n.jsx)("span", { children: "Client Manager" })] }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "col-lg-3 col-md-6",
                                            children: (0, n.jsx)("div", {
                                                className: "item cir sm-mb50",
                                                children: (0, n.jsxs)("div", {
                                                    className: "img",
                                                    children: [
                                                        (0, n.jsx)("img", { src: "/assets/img/team/3.jpg", alt: "" }),
                                                        (0, n.jsx)("div", {
                                                            id: "circle",
                                                            children: (0, n.jsxs)("svg", {
                                                                version: "1.1",
                                                                x: "0px",
                                                                y: "0px",
                                                                width: "300px",
                                                                height: "300px",
                                                                viewBox: "0 0 300 300",
                                                                enableBackground: "new 0 0 300 300",
                                                                xmlSpace: "preserve",
                                                                children: [
                                                                    (0, n.jsx)("defs", { children: (0, n.jsx)("path", { id: "circlePath", d: " M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " }) }),
                                                                    (0, n.jsx)("circle", { cx: "150", cy: "100", r: "75", fill: "none" }),
                                                                    (0, n.jsxs)("g", {
                                                                        children: [
                                                                            (0, n.jsx)("use", { xlinkHref: "#circlePath", fill: "none" }),
                                                                            (0, n.jsx)("text", {
                                                                                fill: "#00a3df",
                                                                                children: (0, n.jsx)("textPath", { xlinkHref: "#circlePath", children: "Landscape Designer Landscape Designer Landscape Designer" }),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                        (0, n.jsxs)("div", { className: "info", children: [(0, n.jsx)("h6", { children: "Ryan Hicks" }), (0, n.jsx)("span", { children: "Client Manager" })] }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "col-lg-3 col-md-6",
                                            children: (0, n.jsx)("div", {
                                                className: "item cir",
                                                children: (0, n.jsxs)("div", {
                                                    className: "img",
                                                    children: [
                                                        (0, n.jsx)("img", { src: "/assets/img/team/4.jpg", alt: "" }),
                                                        (0, n.jsx)("div", {
                                                            id: "circle",
                                                            children: (0, n.jsxs)("svg", {
                                                                version: "1.1",
                                                                x: "0px",
                                                                y: "0px",
                                                                width: "300px",
                                                                height: "300px",
                                                                viewBox: "0 0 300 300",
                                                                enableBackground: "new 0 0 300 300",
                                                                xmlSpace: "preserve",
                                                                children: [
                                                                    (0, n.jsx)("defs", { children: (0, n.jsx)("path", { id: "circlePath", d: " M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " }) }),
                                                                    (0, n.jsx)("circle", { cx: "150", cy: "100", r: "75", fill: "none" }),
                                                                    (0, n.jsxs)("g", {
                                                                        children: [
                                                                            (0, n.jsx)("use", { xlinkHref: "#circlePath", fill: "none" }),
                                                                            (0, n.jsx)("text", { fill: "#00a3df", children: (0, n.jsx)("textPath", { xlinkHref: "#circlePath", children: "Client Manager Client Manager Client Manager" }) }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                        (0, n.jsxs)("div", { className: "info", children: [(0, n.jsx)("h6", { children: "Ryan Hicks" }), (0, n.jsx)("span", { children: "Client Manager" })] }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                },
                a = i(843),
                c = i(1239);
            i(2157);
            function l(e, s) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, s) {
                        var i = [],
                            n = !0,
                            t = !1,
                            r = void 0;
                        try {
                            for (var a, c = e[Symbol.iterator](); !(n = (a = c.next()).done) && (i.push(a.value), !s || i.length !== s); n = !0);
                        } catch (l) {
                            (t = !0), (r = l);
                        } finally {
                            try {
                                n || null == c.return || c.return();
                            } finally {
                                if (t) throw r;
                            }
                        }
                        return i;
                    })(e, s) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    })()
                );
            }
            var o = function () {
                t.useEffect(function () {
                    console.clear();
                }, []);
                var e = l(t.useState(!1), 2),
                    s = e[0],
                    i = e[1];
                return (0, n.jsxs)("section", {
                    className: "video bg-img parallaxie bg-center",
                    style: { backgroundImage: "url(/assets/img/bg-vid.jpg)" },
                    children: [
                        (0, n.jsx)(c.Z, {
                            channel: "vimeo",
                            autoplay: !0,
                            isOpen: s,
                            videoId: "127203262",
                            onClose: function () {
                                return i(!1);
                            },
                        }),
                        // (0, n.jsx)("a", {
                        //     className: "vid valign",
                        //     href: "https://vimeo.com/127203262",
                        //     onClick: function (e) {
                        //         e.preventDefault(), i(!0);
                        //     },
                        //     children: (0, n.jsx)("div", { className: "vid-butn", children: (0, n.jsx)("span", { className: "icon", children: (0, n.jsx)("i", { className: "pe-7s-play" }) }) }),
                        // }),
                        (0, n.jsx)("div", {
                            className: "container",
                            children: (0, n.jsxs)("div", {
                                className: "stauts",
                                children: [
                                    (0, n.jsxs)("div", { className: "item", children: [(0, n.jsxs)("h4", { children: ["3", (0, n.jsx)("span", { children: "K" }), " +"] }), (0, n.jsx)("h6", { children: "Happy Clients" })] }),
                                    (0, n.jsxs)("div", { className: "item", children: [(0, n.jsxs)("h4", { children: ["14", (0, n.jsx)("span", { children: "K" }), " +"] }), (0, n.jsx)("h6", { children: "Success Projects" })] }),
                                ],
                            }),
                        }),
                    ],
                });
            },
                d = i(2813),
                h = function () {
                    return (0, n.jsx)("section", {
                        className: "about section-padding",
                        children: (0, n.jsx)("div", {
                            className: "container",
                            children: (0, n.jsxs)("div", {
                                className: "row",
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: "col-lg-5 exp",
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: "mb-50",
                                                children: [(0, n.jsx)("h6", { className: "fw-100 text-u ls10 main-color mb-10", children: "About Us" }), (0, n.jsx)("h3", { className: "fw-400 text-u ls4", children: "Our Comapny" })],
                                            }),
                                            (0, n.jsxs)("div", {
                                                className: "box",
                                                children: [
                                                    (0, n.jsxs)("h2", { className: "fz-40 fw-600 ls1 mb-20", children: ["10 years ", (0, n.jsx)("br", {}), " of Experience"] }),
                                                    (0, n.jsx)("p", { children: "With years of expertise in the industry, Studio Bright Lux leads in delivering top-quality sanitaryware solutions, designed with innovation and crafted for excellence." }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: "col-lg-7 img",
                                        children: [
                                            (0, n.jsx)("img", { src: "/assets/img/about1.jpg", alt: "" }),
                                            (0, n.jsxs)("div", {
                                                className: "feat mt-30",
                                                children: [
                                                    (0, n.jsx)("div", { className: "item", children: (0, n.jsxs)("div", { children: [(0, n.jsx)("h5", { children: "01" }), (0, n.jsx)("h6", { children: "Sanitaryware" })] }) }),
                                                    (0, n.jsx)("div", { className: "item", children: (0, n.jsxs)("div", { children: [(0, n.jsx)("h5", { children: "02" }), (0, n.jsx)("h6", { children: "Interior Design" })] }) }),
                                                    (0, n.jsx)("div", { className: "item", children: (0, n.jsxs)("div", { children: [(0, n.jsx)("h5", { children: "03" }), (0, n.jsx)("h6", { children: "Wooden Flooring" })] }) }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    });
                },
                u = function () {
                    return (0, n.jsx)("section", {
                        className: "services section-padding pb-0",
                        children: (0, n.jsxs)("div", {
                            className: "container",
                            children: [
                                (0, n.jsx)("div", { className: "section-head", children: (0, n.jsx)("h3", { children: "Services" }) }),
                                (0, n.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: "col-lg-4",
                                            children: (0, n.jsxs)("div", {
                                                className: "item md-mb50",
                                                children: [
                                                    (0, n.jsx)("span", { className: "icon flaticon-sketch" }),
                                                    (0, n.jsx)("h6", { children: "Interior Design & Decor" }),
                                                    (0, n.jsx)("p", { children: "Creating beautiful, functional spaces with customized interior design solutions that bring style, comfort, and a touch of sophistication to every room." }),
                                                ],
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "col-lg-4",
                                            children: (0, n.jsxs)("div", {
                                                className: "item md-mb50",
                                                children: [
                                                    (0, n.jsx)("span", { className: "icon flaticon-furniture" }),
                                                    (0, n.jsx)("h6", { children: "Sanitaryware & Ceramics" }),
                                                    (0, n.jsx)("p", { children: "Offering top-quality sanitaryware and ceramics to elevate bathroom and kitchen spaces, with designs that blend aesthetics and functionality." }),
                                                ],
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "col-lg-4",
                                            children: (0, n.jsxs)("div", {
                                                className: "item",
                                                children: [
                                                    (0, n.jsx)("span", { className: "icon flaticon-home-1" }),
                                                    (0, n.jsx)("h6", { children: "PVC Plumbing Solutions" }),
                                                    (0, n.jsx)("p", { children: "Providing durable and reliable PVC plumbing solutions for residential and commercial projects, ensuring efficient and sustainable water systems." }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", { className: "section-head", children: (0, n.jsx)("h3", { children: "" }) }),
                                (0, n.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: "col-lg-4",
                                            children: (0, n.jsxs)("div", {
                                                className: "item md-mb50",
                                                children: [
                                                    (0, n.jsx)("span", { className: "icon flaticon-sketch" }),
                                                    (0, n.jsx)("h6", { children: "Wooden Flooring" }),
                                                    (0, n.jsx)("p", { children: "High-grade wooden flooring options that add warmth and elegance to any space, crafted for durability and easy maintenance." }),
                                                ],
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "col-lg-4",
                                            children: (0, n.jsxs)("div", {
                                                className: "item md-mb50",
                                                children: [
                                                    (0, n.jsx)("span", { className: "icon flaticon-furniture" }),
                                                    (0, n.jsx)("h6", { children: "Wesmarc Doors" }),
                                                    (0, n.jsx)("p", { children: "Supplying premium doors from Wesmarc, known for their quality and craftsmanship, offering security and style in equal measure." }),
                                                ],
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "col-lg-4",
                                            children: (0, n.jsxs)("div", {
                                                className: "item",
                                                children: [
                                                    (0, n.jsx)("span", { className: "icon flaticon-home-1" }),
                                                    (0, n.jsx)("h6", { children: "Aristo Sliding Doors" }),
                                                    (0, n.jsx)("p", { children: "Modern sliding door solutions from Aristo, combining space-saving functionality with sleek, contemporary design." }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                },
                m = i(5046),
                x = i(106),
                j = i(9839),
                f = i(2873),
                p = i(8636),
                g = i(1664),
                v = i(1911),
                N = (i(933), i(8770), i(92), i(5850));
            function w(e, s) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, s) {
                        var i = [],
                            n = !0,
                            t = !1,
                            r = void 0;
                        try {
                            for (var a, c = e[Symbol.iterator](); !(n = (a = c.next()).done) && (i.push(a.value), !s || i.length !== s); n = !0);
                        } catch (l) {
                            (t = !0), (r = l);
                        } finally {
                            try {
                                n || null == c.return || c.return();
                            } finally {
                                if (t) throw r;
                            }
                        }
                        return i;
                    })(e, s) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    })()
                );
            }
            v.ZP.use([v.W_, v.tl, v.VS]);
            var y = function () {
                var e = w(t.useState(!0), 2),
                    s = e[0],
                    i = e[1];
                t.useEffect(function () {
                    setTimeout(function () {
                        (0, N.Z)();
                    }, 1e3),
                        setTimeout(function () {
                            i(!1);
                        });
                }, []);
                var r = t.useRef(null),
                    a = t.useRef(null),
                    c = t.useRef(null);
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)("header", {
                        className: "slid-half",
                        children: [
                            (0, n.jsxs)("div", {
                                id: "js-cta-slider",
                                className: "cta__slider-wrapper nofull swiper-container",
                                children: [
                                    s
                                        ? null
                                        : (0, n.jsx)(f.t, {
                                            speed: 800,
                                            parallax: !0,
                                            navigation: { prevEl: r.current, nextEl: a.current },
                                            pagination: { type: "fraction", clickable: !0, el: c.current },
                                            slidesPerView: 1,
                                            direction: "vertical",
                                            loop: !0,
                                            grabCursor: !0,
                                            watchSlidesProgress: !0,
                                            onBeforeInit: function (e) {
                                                (e.params.navigation.prevEl = r.current), (e.params.navigation.nextEl = a.current), (e.params.pagination.el = c.current);
                                            },
                                            onSwiper: function (e) {
                                                setTimeout(function () {
                                                    for (var s = 0; s < e.slides.length; s++) e.slides[s].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * e.height);
                                                    (e.params.navigation.prevEl = r.current),
                                                        (e.params.navigation.nextEl = a.current),
                                                        (e.params.pagination.el = c.current),
                                                        e.navigation.destroy(),
                                                        e.navigation.init(),
                                                        e.navigation.update(),
                                                        e.pagination.destroy(),
                                                        e.pagination.init(),
                                                        e.pagination.update();
                                                });
                                            },
                                            className: "swiper-wrapper cta__slider",
                                            children: j.map(function (e) {
                                                return (0,
                                                    n.jsx)(f.o, { className: "cta__slider-item swiper-slide", children: (0, n.jsxs)("div", { className: "media-wrapper slide-inner valign", children: [(0, n.jsx)("div", { className: "bg-img", style: { backgroundImage: "url(".concat(e.image, ")") }, "data-overlay-dark": "5" }), (0, n.jsx)("div", { className: "container", children: (0, n.jsx)("div", { className: "row", children: (0, n.jsx)("div", { className: "col-lg-10", children: (0, n.jsxs)("div", { className: "caption", children: [(0, n.jsxs)("div", { className: "custom", children: [(0, n.jsx)("h5", { className: "thin custom-font", children: e.title.first }), (0, n.jsx)(p.Z, { children: (0, n.jsx)("h1", { "data-splitting": !0, className: "words chars splitting", children: (0, n.jsx)(g.default, { href: "#", children: e.title.second }) }) })] }), (null === e || void 0 === e ? void 0 : e.content) && (0, n.jsxs)("p", { className: "mt-10", children: [e.content.first, " ", (0, n.jsx)("br", {}), e.content.second] }), (0, n.jsx)(g.default, { href: "/projects.html", children: (0, n.jsx)("a", { className: "btn-curve btn-color mt-30", children: (0, n.jsx)("span", { children: "Discover Work" }) }) })] }) }) }) })] }) }, e.id);
                                            }),
                                        }),
                                    (0, n.jsxs)("div", {
                                        className: "cta__slider-arrows",
                                        children: [
                                            (0, n.jsx)("i", { id: "js-cta-slider-next", ref: a, className: "cta__slider-arrow cta__slider-arrow--next", children: (0, n.jsx)("i", { className: "fas fa-chevron-up" }) }),
                                            (0, n.jsx)("i", { id: "js-cta-slider-previous", ref: r, className: "cta__slider-arrow cta__slider-arrow--previous", children: (0, n.jsx)("i", { className: "fas fa-chevron-down" }) }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, n.jsx)("div", { ref: c, className: "swiper-pagination top custom-font" }),
                        ],
                    }),
                });
            },
                b = function () {
                    return (
                        t.useEffect(function () {
                            document.querySelector("body").classList.add("index3");
                        }),
                        (0, n.jsxs)(a.Z, {
                            children: [(0, n.jsx)(y, {}), (0, n.jsx)(h, {}), (0, n.jsx)(u, {}), (0, n.jsx)(x.Z, {}), (0, n.jsx)(o, {}), (0, n.jsx)(r, {}), (0, n.jsx)(m.Z, { bigTitle: !0 }), (0, n.jsx)(d.Z, { smallTitle: !0 })],
                        })
                    );
                };
        },
        9839: function (e) {
            "use strict";
            e.exports = JSON.parse(
                '[{"id":1,"title":{"first":"Sanitaryware","second":"Bathroom Solutions"},"content":{"first":"Elegant, functionaland durable sanitaryware,","second":" for all bathroom needs."},"image":"/assets/img/slide/01.jpg"},{"id":2,"title":{"first":"Ceramics & PVC","second":"Quality Solutions"},"content":{"first":"Ceramics, PVC plumbing solutions and,","second":"essential materials for any project."},"image":"/assets/img/slide/02.jpg"},{"id":3,"title":{"first":"Doors & Flooring","second":"Premium Options"},"content":{"first":"Wooden flooring, specialty doors, and","second":"sliding options for modern spaces."},"image":"/assets/img/slide/03.jpg"}]'
            );
        },
    },
    function (e) {
        e.O(0, [444, 485, 104, 884, 613, 536, 774, 888, 179], function () {
            return (s = 974), e((e.s = s));
            var s;
        });
        var s = e.O();
        _N_E = s;
    },
]);
