(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4201:
/***/ ((module) => {

// Exports
module.exports = {
	"footer_container": "Footer_footer_container__ChW_Y"
};


/***/ }),

/***/ 5512:
/***/ ((module) => {

// Exports
module.exports = {
	"header_container": "Header_header_container__ckYMk"
};


/***/ }),

/***/ 4459:
/***/ ((module) => {

// Exports
module.exports = {
	"layout_container": "Layouts_layout_container__IqhCA"
};


/***/ }),

/***/ 4951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ ContextUser),
/* harmony export */   "Z": () => (/* binding */ Provider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ContextUser = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function Provider({ children  }) {
    const [userContext, setUserContext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContextUser.Provider, {
        value: {
            userContext,
            setUserContext
        },
        children: children
    });
}


/***/ }),

/***/ 6375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: ./src/styles/Layouts.module.css
var Layouts_module = __webpack_require__(4459);
var Layouts_module_default = /*#__PURE__*/__webpack_require__.n(Layouts_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/styles/Header.module.css
var Header_module = __webpack_require__(5512);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Header.tsx





function Header() {
    const [song, setSong] = (0,external_react_.useState)(false);
    function toggleSong() {
        setSong(!song);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (Header_module_default()).header_container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: "P\xe1gina inicial"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/fale_conosco",
                    children: "Feedback"
                }),
                song ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: toggleSong,
                            style: {
                                backgroundColor: "green"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/img/som-emoji.png",
                                alt: "Emoji de som",
                                width: 20,
                                height: 20
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("audio", {
                            autoPlay: true,
                            controls: true,
                            src: "audio\\Interstellar Main Theme - Hans Zimmer.mp3"
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    onClick: toggleSong,
                    style: {
                        backgroundColor: "red"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/img/som-emoji.png",
                        alt: "Emoji de som",
                        width: 20,
                        height: 20
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/styles/Footer.module.css
var Footer_module = __webpack_require__(4201);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: ./src/components/Footer.tsx



function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: (Footer_module_default()).footer_container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "https://www.instagram.com/lucksilva01/",
                    target: "_blank",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaInstagram, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Instagram"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "https://www.linkedin.com/in/lucas-da-silva-12154a240/",
                    target: "_blank",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaLinkedin, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Linkedin"
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Layouts.tsx




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Layouts_module_default()).layout_container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};
/* harmony default export */ const Layouts = (Layout);

// EXTERNAL MODULE: ./src/Context/Context.tsx
var Context = __webpack_require__(4951);
;// CONCATENATED MODULE: ./src/pages/_app.tsx




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Context/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layouts, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675,664], () => (__webpack_exec__(6375)));
module.exports = __webpack_exports__;

})();