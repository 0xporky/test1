/* Datadog-rum library version 2.5.2.
 * How to build DD bundle:
 * 1. Clone source code https://github.com/DataDog/browser-sdk
 * 2. Install webpack plugin https://www.npmjs.com/package/es3ify-webpack-plugin
 * 3. In packages/rum/package.json set webpack mode to development
 * 4. Build the project
 */
/******/
(function (modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ 		// Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ 		// Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/            i: moduleId,
            /******/            l: false,
            /******/            exports: {}
            /******/
        };
        /******/
        /******/ 		// Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ 		// Return the exports of the module
        /******/
        return module.exports;
        /******/
    }

    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ 	// define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {enumerable: true, get: getter});
            /******/
        }
        /******/
    };
    /******/
    /******/ 	// define __esModule on exports
    /******/
    __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {value: true});
        /******/
    };
    /******/
    /******/ 	// create a fake namespace object
    /******/ 	// mode & 1: value is a module id, require it
    /******/ 	// mode & 2: merge all properties of value into the ns
    /******/ 	// mode & 4: return value when already ns object
    /******/ 	// mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {enumerable: true, value: value});
        /******/
        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
            return value[key];
        }.bind(null, key));
        /******/
        return ns;
        /******/
    };
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
            /******/            function getDefault() {
                return module['default'];
            } :
            /******/            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ 	// __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/
    /******/ 	// Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = "./src/boot/rum.entry.ts");
    /******/
})
    /************************************************************************/
    /******/ ({

    /***/ "../../node_modules/tslib/tslib.es6.js":
    /*!**********************************************************************!*\
  !*** /home/user/Amplify/browser-sdk/node_modules/tslib/tslib.es6.js ***!
  \**********************************************************************/
    /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__extends", function () {
            return __extends;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__assign", function () {
            return __assign;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__rest", function () {
            return __rest;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__decorate", function () {
            return __decorate;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__param", function () {
            return __param;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__metadata", function () {
            return __metadata;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
            return __awaiter;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__generator", function () {
            return __generator;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
            return __exportStar;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__values", function () {
            return __values;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__read", function () {
            return __read;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__spread", function () {
            return __spread;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
            return __spreadArrays;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__await", function () {
            return __await;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
            return __asyncGenerator;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
            return __asyncDelegator;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
            return __asyncValues;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
            return __makeTemplateObject;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__importStar", function () {
            return __importStar;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
            return __importDefault;
        });
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
        /* global Reflect, Promise */

        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array && function (d, b) {
                    d.__proto__ = b;
                }) ||
                function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
            return extendStatics(d, b);
        };

        function __extends(d, b) {
            extendStatics(d, b);

            function __() {
                this.constructor = d;
            }

            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        }

        var __assign = function () {
            __assign = Object.assign || function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            }
            return __assign.apply(this, arguments);
        }

        function __rest(s, e) {
            var t = {};
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
            if (s != null && typeof Object.getOwnPropertySymbols === "function")
                for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                        t[p[i]] = s[p[i]];
                }
            return t;
        }

        function __decorate(decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        }

        function __param(paramIndex, decorator) {
            return function (target, key) {
                decorator(target, key, paramIndex);
            }
        }

        function __metadata(metadataKey, metadataValue) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
        }

        function __awaiter(thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))(function (resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }

                function rejected(value) {
                    try {
                        step(generator["throw"](value));
                    } catch (e) {
                        reject(e);
                    }
                }

                function step(result) {
                    result.done ? resolve(result.value) : new P(function (resolve) {
                        resolve(result.value);
                    }).then(fulfilled, rejected);
                }

                step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
        }

        function __generator(thisArg, body) {
            var _ = {
                label: 0, sent: function () {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                }, trys: [], ops: []
            }, f, y, t, g;
            return g = {
                next: verb(0),
                "throw": verb(1),
                "return": verb(2)
            }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
                return this;
            }), g;

            function verb(n) {
                return function (v) {
                    return step([n, v]);
                };
            }

            function step(op) {
                if (f) throw new TypeError("Generator is already executing.");
                while (_) try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                    if (y = 0, t) op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return {value: op[1], done: false};
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2]) _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [6, e];
                    y = 0;
                } finally {
                    f = t = 0;
                }
                if (op[0] & 5) throw op[1];
                return {value: op[0] ? op[1] : void 0, done: true};
            }
        }

        function __exportStar(m, exports) {
            for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }

        function __values(o) {
            var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
            if (m) return m.call(o);
            return {
                next: function () {
                    if (o && i >= o.length) o = void 0;
                    return {value: o && o[i++], done: !o};
                }
            };
        }

        function __read(o, n) {
            var m = typeof Symbol === "function" && o[Symbol.iterator];
            if (!m) return o;
            var i = m.call(o), r, ar = [], e;
            try {
                while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
            } catch (error) {
                e = {error: error};
            } finally {
                try {
                    if (r && !r.done && (m = i["return"])) m.call(i);
                } finally {
                    if (e) throw e.error;
                }
            }
            return ar;
        }

        function __spread() {
            for (var ar = [], i = 0; i < arguments.length; i++)
                ar = ar.concat(__read(arguments[i]));
            return ar;
        }

        function __spreadArrays() {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
            for (var r = Array(s), k = 0, i = 0; i < il; i++)
                for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                    r[k] = a[j];
            return r;
        };

        function __await(v) {
            return this instanceof __await ? (this.v = v, this) : new __await(v);
        }

        function __asyncGenerator(thisArg, _arguments, generator) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var g = generator.apply(thisArg, _arguments || []), i, q = [];
            return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
                return this;
            }, i;

            function verb(n) {
                if (g[n]) i[n] = function (v) {
                    return new Promise(function (a, b) {
                        q.push([n, v, a, b]) > 1 || resume(n, v);
                    });
                };
            }

            function resume(n, v) {
                try {
                    step(g[n](v));
                } catch (e) {
                    settle(q[0][3], e);
                }
            }

            function step(r) {
                r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
            }

            function fulfill(value) {
                resume("next", value);
            }

            function reject(value) {
                resume("throw", value);
            }

            function settle(f, v) {
                if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
            }
        }

        function __asyncDelegator(o) {
            var i, p;
            return i = {}, verb("next"), verb("throw", function (e) {
                throw e;
            }), verb("return"), i[Symbol.iterator] = function () {
                return this;
            }, i;

            function verb(n, f) {
                i[n] = o[n] ? function (v) {
                    return (p = !p) ? {value: __await(o[n](v)), done: n === "return"} : f ? f(v) : v;
                } : f;
            }
        }

        function __asyncValues(o) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var m = o[Symbol.asyncIterator], i;
            return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
                return this;
            }, i);

            function verb(n) {
                i[n] = o[n] && function (v) {
                    return new Promise(function (resolve, reject) {
                        v = o[n](v), settle(resolve, reject, v.done, v.value);
                    });
                };
            }

            function settle(resolve, reject, d, v) {
                Promise.resolve(v).then(function (v) {
                    resolve({value: v, done: d});
                }, reject);
            }
        }

        function __makeTemplateObject(cooked, raw) {
            if (Object.defineProperty) {
                Object.defineProperty(cooked, "raw", {value: raw});
            } else {
                cooked.raw = raw;
            }
            return cooked;
        };

        function __importStar(mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            result["default"] = mod;
            return result;
        }

        function __importDefault(mod) {
            return (mod && mod.__esModule) ? mod : {"default": mod};
        }


        /***/
    }),

    /***/ "../core/src/boot/init.ts":
    /*!********************************!*\
  !*** ../core/src/boot/init.ts ***!
  \********************************/
    /*! exports provided: makePublicApi, defineGlobal, BuildMode, commonInit, checkCookiesAuthorized, checkIsNotLocalFile */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "makePublicApi", function () {
            return makePublicApi;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "defineGlobal", function () {
            return defineGlobal;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "BuildMode", function () {
            return BuildMode;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "commonInit", function () {
            return commonInit;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "checkCookiesAuthorized", function () {
            return checkCookiesAuthorized;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "checkIsNotLocalFile", function () {
            return checkIsNotLocalFile;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _browser_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../browser/cookie */ "../core/src/browser/cookie.ts");
        /* harmony import */
        var _domain_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/configuration */ "../core/src/domain/configuration.ts");
        /* harmony import */
        var _domain_internalMonitoring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/internalMonitoring */ "../core/src/domain/internalMonitoring.ts");


        function makePublicApi(stub) {
            var publicApi = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, stub), {
                // This API method is intentionally not monitored, since the only thing executed is the
                // user-provided 'callback'.  All SDK usages executed in the callback should be monitored, and
                // we don't want to interfer with the user uncaught exceptions.
                onReady: function (callback) {
                    callback();
                }
            });
            // Add an "hidden" property to set debug mode. We define it that way to hide it
            // as much as possible but of course it's not a real protection.
            Object.defineProperty(publicApi, '_setDebug', {
                get: function () {
                    return _domain_internalMonitoring__WEBPACK_IMPORTED_MODULE_3__["setDebugMode"];
                },
                enumerable: false
            });
            return publicApi;
        }

        function defineGlobal(global, name, api) {
            var existingGlobalVariable = global[name];
            global[name] = api;
            if (existingGlobalVariable && existingGlobalVariable.q) {
                existingGlobalVariable.q.forEach(function (fn) {
                    return fn();
                });
            }
        }

        var BuildMode;
        (function (BuildMode) {
            BuildMode["RELEASE"] = "release";
            BuildMode["STAGING"] = "staging";
            BuildMode["E2E_TEST"] = "e2e-test";
        })(BuildMode || (BuildMode = {}));

        function commonInit(userConfiguration, buildEnv) {
            var configuration = Object(_domain_configuration__WEBPACK_IMPORTED_MODULE_2__["buildConfiguration"])(userConfiguration, buildEnv);
            var internalMonitoring = Object(_domain_internalMonitoring__WEBPACK_IMPORTED_MODULE_3__["startInternalMonitoring"])(configuration);
            return {
                configuration: configuration,
                internalMonitoring: internalMonitoring
            };
        }

        function checkCookiesAuthorized(options) {
            if (!Object(_browser_cookie__WEBPACK_IMPORTED_MODULE_1__["areCookiesAuthorized"])(options)) {
                console.warn('Cookies are not authorized, we will not send any data.');
                return false;
            }
            return true;
        }

        function checkIsNotLocalFile() {
            if (isLocalFile()) {
                console.error('Execution is not allowed in the current context.');
                return false;
            }
            return true;
        }

        function isLocalFile() {
            return window.location.protocol === 'file:';
        }


        /***/
    }),

    /***/ "../core/src/browser/cookie.ts":
    /*!*************************************!*\
  !*** ../core/src/browser/cookie.ts ***!
  \*************************************/
    /*! exports provided: COOKIE_ACCESS_DELAY, cacheCookieAccess, setCookie, getCookie, areCookiesAuthorized, getCurrentSite */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "COOKIE_ACCESS_DELAY", function () {
            return COOKIE_ACCESS_DELAY;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "cacheCookieAccess", function () {
            return cacheCookieAccess;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "setCookie", function () {
            return setCookie;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getCookie", function () {
            return getCookie;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "areCookiesAuthorized", function () {
            return areCookiesAuthorized;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getCurrentSite", function () {
            return getCurrentSite;
        });
        /* harmony import */
        var _tools_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/utils */ "../core/src/tools/utils.ts");

        var COOKIE_ACCESS_DELAY = _tools_utils__WEBPACK_IMPORTED_MODULE_0__["ONE_SECOND"];

        function cacheCookieAccess(name, options) {
            var timeout;
            var cache;
            var hasCache = false;
            var cacheAccess = function () {
                hasCache = true;
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    hasCache = false;
                }, COOKIE_ACCESS_DELAY);
            };
            return {
                get: function () {
                    if (hasCache) {
                        return cache;
                    }
                    cache = getCookie(name);
                    cacheAccess();
                    return cache;
                },
                set: function (value, expireDelay) {
                    setCookie(name, value, expireDelay, options);
                    cache = value;
                    cacheAccess();
                }
            };
        }

        function setCookie(name, value, expireDelay, options) {
            var date = new Date();
            date.setTime(date.getTime() + expireDelay);
            var expires = "expires=" + date.toUTCString();
            var sameSite = options && options.crossSite ? 'none' : 'strict';
            var domain = options && options.domain ? ";domain=" + options.domain : '';
            var secure = options && options.secure ? ";secure" : '';
            document.cookie = name + "=" + value + ";" + expires + ";path=/;samesite=" + sameSite + domain + secure;
        }

        function getCookie(name) {
            return Object(_tools_utils__WEBPACK_IMPORTED_MODULE_0__["findCommaSeparatedValue"])(document.cookie, name);
        }

        function areCookiesAuthorized(options) {
            if (document.cookie === undefined || document.cookie === null) {
                return false;
            }
            try {
                // Use a unique cookie name to avoid issues when the SDK is initialized multiple times during
                // the test cookie lifetime
                var testCookieName = "dd_cookie_test_" + Object(_tools_utils__WEBPACK_IMPORTED_MODULE_0__["generateUUID"])();
                var testCookieValue = 'test';
                setCookie(testCookieName, testCookieValue, _tools_utils__WEBPACK_IMPORTED_MODULE_0__["ONE_SECOND"], options);
                return getCookie(testCookieName) === testCookieValue;
            } catch (error) {
                console.error(error);
                return false;
            }
        }

        /**
         * No API to retrieve it, number of levels for subdomain and suffix are unknown
         * strategy: find the minimal domain on which cookies are allowed to be set
         * https://web.dev/same-site-same-origin/#site
         */
        var getCurrentSiteCache;

        function getCurrentSite() {
            if (getCurrentSiteCache === undefined) {
                // Use a unique cookie name to avoid issues when the SDK is initialized multiple times during
                // the test cookie lifetime
                var testCookieName = "dd_site_test_" + Object(_tools_utils__WEBPACK_IMPORTED_MODULE_0__["generateUUID"])();
                var testCookieValue = 'test';
                var domainLevels = window.location.hostname.split('.');
                var candidateDomain = domainLevels.pop();
                while (domainLevels.length && !getCookie(testCookieName)) {
                    candidateDomain = domainLevels.pop() + "." + candidateDomain;
                    setCookie(testCookieName, testCookieValue, _tools_utils__WEBPACK_IMPORTED_MODULE_0__["ONE_SECOND"], {domain: candidateDomain});
                }
                getCurrentSiteCache = candidateDomain;
            }
            return getCurrentSiteCache;
        }


        /***/
    }),

    /***/ "../core/src/browser/fetchProxy.ts":
    /*!*****************************************!*\
  !*** ../core/src/browser/fetchProxy.ts ***!
  \*****************************************/
    /*! exports provided: startFetchProxy, resetFetchProxy */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "startFetchProxy", function () {
            return startFetchProxy;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "resetFetchProxy", function () {
            return resetFetchProxy;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _domain_internalMonitoring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/internalMonitoring */ "../core/src/domain/internalMonitoring.ts");
        /* harmony import */
        var _domain_tracekit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/tracekit */ "../core/src/domain/tracekit.ts");
        /* harmony import */
        var _tools_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools/error */ "../core/src/tools/error.ts");
        /* harmony import */
        var _tools_urlPolyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools/urlPolyfill */ "../core/src/tools/urlPolyfill.ts");


        var fetchProxySingleton;
        var originalFetch;
        var beforeSendCallbacks = [];
        var onRequestCompleteCallbacks = [];

        function startFetchProxy() {
            if (!fetchProxySingleton) {
                proxyFetch();
                fetchProxySingleton = {
                    beforeSend: function (callback) {
                        beforeSendCallbacks.push(callback);
                    },
                    onRequestComplete: function (callback) {
                        onRequestCompleteCallbacks.push(callback);
                    }
                };
            }
            return fetchProxySingleton;
        }

        function resetFetchProxy() {
            if (fetchProxySingleton) {
                fetchProxySingleton = undefined;
                beforeSendCallbacks.splice(0, beforeSendCallbacks.length);
                onRequestCompleteCallbacks.splice(0, onRequestCompleteCallbacks.length);
                window.fetch = originalFetch;
            }
        }

        function proxyFetch() {
            if (!window.fetch) {
                return;
            }
            originalFetch = window.fetch;
            window.fetch = function (input, init) {
                var responsePromise;
                var context = Object(_domain_internalMonitoring__WEBPACK_IMPORTED_MODULE_1__["callMonitored"])(beforeSend, null, [input, init]);
                if (context) {
                    responsePromise = originalFetch.call(this, context.input, context.init);
                    Object(_domain_internalMonitoring__WEBPACK_IMPORTED_MODULE_1__["callMonitored"])(afterSend, null, [responsePromise, context]);
                } else {
                    responsePromise = originalFetch.call(this, input, init);
                }
                return responsePromise;
            };
        }

        function beforeSend(input, init) {
            var method = (init && init.method) || (typeof input === 'object' && input.method) || 'GET';
            var url = Object(_tools_urlPolyfill__WEBPACK_IMPORTED_MODULE_4__["normalizeUrl"])((typeof input === 'object' && input.url) || input);
            var startTime = performance.now();
            var context = {
                init: init,
                input: input,
                method: method,
                startTime: startTime,
                url: url
            };
            beforeSendCallbacks.forEach(function (callback) {
                return callback(context);
            });
            return context;
        }

        function afterSend(responsePromise, context) {
            var _this = this;
            var reportFetch = function (response) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    var text, e_1;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                context.duration = performance.now() - context.startTime;
                                if (!('stack' in response || response instanceof Error)) return [3 /*break*/, 1];
                                context.status = 0;
                                context.response = Object(_tools_error__WEBPACK_IMPORTED_MODULE_3__["toStackTraceString"])(Object(_domain_tracekit__WEBPACK_IMPORTED_MODULE_2__["computeStackTrace"])(response));
                                onRequestCompleteCallbacks.forEach(function (callback) {
                                    return callback(context);
                                });
                                return [3 /*break*/, 6];
                            case 1:
                                if (!('status' in response)) return [3 /*break*/, 6];
                                text = void 0;
                                _a.label = 2;
                            case 2:
                                _a.trys.push([2, 4, , 5]);
                                return [4 /*yield*/, response.clone().text()];
                            case 3:
                                text = _a.sent();
                                return [3 /*break*/, 5];
                            case 4:
                                e_1 = _a.sent();
                                text = "Unable to retrieve response: " + e_1;
                                return [3 /*break*/, 5];
                            case 5:
                                context.response = text;
                                context.responseType = response.type;
                                context.status = response.status;
                                onRequestCompleteCallbacks.forEach(function (callback) {
                                    return callback(context);
                                });
                                _a.label = 6;
                            case 6:
                                return [2 /*return*/];
                        }
                    });
                });
            };
            responsePromise.then(Object(_domain_internalMonitoring__WEBPACK_IMPORTED_MODULE_1__["monitor"])(reportFetch), Object(_domain_internalMonitoring__WEBPACK_IMPORTED_MODULE_1__["monitor"])(reportFetch));
        }


        /***/
    }),

    /***/ "../core/src/browser/xhrProxy.ts":
    /*!***************************************!*\
  !*** ../core/src/browser/xhrProxy.ts ***!
  \***************************************/
    /*! exports provided: startXhrProxy, resetXhrProxy */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "startXhrProxy", function () {
            return startXhrProxy;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "resetXhrProxy", function () {
            return resetXhrProxy;
        });
        /* harmony import */
        var _domain_internalMonitoring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/internalMonitoring */ "../core/src/domain/internalMonitoring.ts");
        /* harmony import */
        var _tools_urlPolyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/urlPolyfill */ "../core/src/tools/urlPolyfill.ts");
        /* eslint-disable no-underscore-dangle */


        var xhrProxySingleton;
        var beforeSendCallbacks = [];
        var onRequestCompleteCallbacks = [];
        var originalXhrOpen;
        var originalXhrSend;

        function startXhrProxy() {
            if (!xhrProxySingleton) {
                proxyXhr();
                xhrProxySingleton = {
                    beforeSend: function (callback) {
                        beforeSendCallbacks.push(callback);
                    },
                    onRequestComplete: function (callback) {
                        onRequestCompleteCallbacks.push(callback);
                    }
                };
            }
            return xhrProxySingleton;
        }

        function resetXhrProxy() {
            if (xhrProxySingleton) {
                xhrProxySingleton = undefined;
                beforeSendCallbacks.splice(0, beforeSendCallbacks.length);
                onRequestCompleteCallbacks.splice(0, onRequestCompleteCallbacks.length);
                XMLHttpRequest.prototype.open = originalXhrOpen;
                XMLHttpRequest.prototype.send = originalXhrSend;
            }
        }

        function proxyXhr() {
            // eslint-disable-next-line @typescript-eslint/unbound-method
            originalXhrOpen = XMLHttpRequest.prototype.open;
            // eslint-disable-next-line @typescript-eslint/unbound-method
            originalXhrSend = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.open = function (method, url) {
                var _this = this;
                Object(_domain_internalMonitoring__WEBPACK_IMPORTED_MODULE_0__["callMonitored"])(function () {
                    // WARN: since this data structure is tied to the instance, it is shared by both logs and rum
                    // and can be used by different code versions depending on customer setup
                    // so it should stay compatible with older versions
                    _this._datadog_xhr = {
                        method: method,
                        startTime: -1,
                        url: Object(_tools_urlPolyfill__WEBPACK_IMPORTED_MODULE_1__["normalizeUrl"])(url)
                    };
                });
                return originalXhrOpen.apply(this, arguments);
            };
            XMLHttpRequest.prototype.send = function () {
                var _this = this;
                Object(_domain_internalMonitoring__WEBPACK_IMPORTED_MODULE_0__["callMonitored"])(function () {
                    if (_this._datadog_xhr) {
                        _this._datadog_xhr.startTime = performance.now();
                        var originalOnreadystatechange_1 = _this.onreadystatechange;
                        _this.onreadystatechange = function () {
                            if (this.readyState === XMLHttpRequest.DONE) {
                                Object(_domain_internalMonitoring__WEBPACK_IMPORTED_MODULE_0__["callMonitored"])(reportXhr_1);
                            }
                            if (originalOnreadystatechange_1) {
                                originalOnreadystatechange_1.apply(this, arguments);
                            }
                        };
                        var hasBeenReported_1 = false;
                        var reportXhr_1 = function () {
                            if (hasBeenReported_1) {
                                return;
                            }
                            hasBeenReported_1 = true;
                            _this._datadog_xhr.duration = performance.now() - _this._datadog_xhr.startTime;
                            _this._datadog_xhr.response = _this.response;
                            _this._datadog_xhr.status = _this.status;
                            onRequestCompleteCallbacks.forEach(function (callback) {
                                return callback(_this._datadog_xhr);
                            });
                        };
                        _this.addEventListener('loadend', Object(_domain_internalMonitoring__WEBPACK_IMPORTED_MODULE_0__["monitor"])(reportXhr_1));
                        beforeSendCallbacks.forEach(function (callback) {
                            return callback(_this._datadog_xhr, _this);
                        });
                    }
                });
                return originalXhrSend.apply(this, arguments);
            };
        }


        /***/
    }),

    /***/ "../core/src/domain/automaticErrorCollection.ts":
    /*!******************************************************!*\
  !*** ../core/src/domain/automaticErrorCollection.ts ***!
  \******************************************************/
    /*! exports provided: startAutomaticErrorCollection, filterErrors, startConsoleTracking, stopConsoleTracking, startRuntimeErrorTracking, stopRuntimeErrorTracking, trackNetworkError */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "startAutomaticErrorCollection", function () {
            return startAutomaticErrorCollection;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "filterErrors", function () {
            return filterErrors;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "startConsoleTracking", function () {
            return startConsoleTracking;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "stopConsoleTracking", function () {
            return stopConsoleTracking;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "startRuntimeErrorTracking", function () {
            return startRuntimeErrorTracking;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "stopRuntimeErrorTracking", function () {
            return stopRuntimeErrorTracking;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "trackNetworkError", function () {
            return trackNetworkError;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _browser_fetchProxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../browser/fetchProxy */ "../core/src/browser/fetchProxy.ts");
        /* harmony import */
        var _browser_xhrProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../browser/xhrProxy */ "../core/src/browser/xhrProxy.ts");
        /* harmony import */
        var _tools_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools/error */ "../core/src/tools/error.ts");
        /* harmony import */
        var _tools_observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools/observable */ "../core/src/tools/observable.ts");
        /* harmony import */
        var _tools_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tools/utils */ "../core/src/tools/utils.ts");
        /* harmony import */
        var _internalMonitoring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./internalMonitoring */ "../core/src/domain/internalMonitoring.ts");
        /* harmony import */
        var _tracekit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tracekit */ "../core/src/domain/tracekit.ts");


        var filteredErrorsObservable;

        function startAutomaticErrorCollection(configuration) {
            if (!filteredErrorsObservable) {
                var errorObservable = new _tools_observable__WEBPACK_IMPORTED_MODULE_4__["Observable"]();
                trackNetworkError(configuration, errorObservable);
                startConsoleTracking(errorObservable);
                startRuntimeErrorTracking(errorObservable);
                filteredErrorsObservable = filterErrors(configuration, errorObservable);
            }
            return filteredErrorsObservable;
        }

        function filterErrors(configuration, errorObservable) {
            var errorCount = 0;
            var filteredErrorObservable = new _tools_observable__WEBPACK_IMPORTED_MODULE_4__["Observable"]();
            errorObservable.subscribe(function (error) {
                if (errorCount < configuration.maxErrorsByMinute) {
                    errorCount += 1;
                    filteredErrorObservable.notify(error);
                } else if (errorCount === configuration.maxErrorsByMinute) {
                    errorCount += 1;
                    filteredErrorObservable.notify({
                        message: "Reached max number of errors by minute: " + configuration.maxErrorsByMinute,
                        source: _tools_error__WEBPACK_IMPORTED_MODULE_3__["ErrorSource"].AGENT,
                        startTime: performance.now()
                    });
                }
            });
            setInterval(function () {
                return (errorCount = 0);
            }, _tools_utils__WEBPACK_IMPORTED_MODULE_5__["ONE_MINUTE"]);
            return filteredErrorObservable;
        }

        var originalConsoleError;

        function startConsoleTracking(errorObservable) {
            originalConsoleError = console.error;
            console.error = Object(_internalMonitoring__WEBPACK_IMPORTED_MODULE_6__["monitor"])(function (message) {
                var optionalParams = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    optionalParams[_i - 1] = arguments[_i];
                }
                originalConsoleError.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([message], optionalParams));
                errorObservable.notify({
                    message: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(['console error:', message], optionalParams).map(formatConsoleParameters).join(' '),
                    source: _tools_error__WEBPACK_IMPORTED_MODULE_3__["ErrorSource"].CONSOLE,
                    startTime: performance.now()
                });
            });
        }

        function stopConsoleTracking() {
            console.error = originalConsoleError;
        }

        function formatConsoleParameters(param) {
            if (typeof param === 'string') {
                return param;
            }
            if (param instanceof Error) {
                return Object(_tools_error__WEBPACK_IMPORTED_MODULE_3__["toStackTraceString"])(Object(_tracekit__WEBPACK_IMPORTED_MODULE_7__["computeStackTrace"])(param));
            }
            return Object(_tools_utils__WEBPACK_IMPORTED_MODULE_5__["jsonStringify"])(param, undefined, 2);
        }

        var traceKitReportHandler;

        function startRuntimeErrorTracking(errorObservable) {
            traceKitReportHandler = function (stackTrace, _, errorObject) {
                var _a = Object(_tools_error__WEBPACK_IMPORTED_MODULE_3__["formatUnknownError"])(stackTrace, errorObject, 'Uncaught'),
                    stack = _a.stack, message = _a.message, type = _a.type;
                errorObservable.notify({
                    message: message,
                    stack: stack,
                    type: type,
                    source: _tools_error__WEBPACK_IMPORTED_MODULE_3__["ErrorSource"].SOURCE,
                    startTime: performance.now()
                });
            };
            _tracekit__WEBPACK_IMPORTED_MODULE_7__["report"].subscribe(traceKitReportHandler);
        }

        function stopRuntimeErrorTracking() {
            ;
            _tracekit__WEBPACK_IMPORTED_MODULE_7__["report"].unsubscribe(traceKitReportHandler);
        }

        function trackNetworkError(configuration, errorObservable) {
            Object(_browser_xhrProxy__WEBPACK_IMPORTED_MODULE_2__["startXhrProxy"])().onRequestComplete(function (context) {
                return handleCompleteRequest(_tools_utils__WEBPACK_IMPORTED_MODULE_5__["RequestType"].XHR, context);
            });
            Object(_browser_fetchProxy__WEBPACK_IMPORTED_MODULE_1__["startFetchProxy"])().onRequestComplete(function (context) {
                return handleCompleteRequest(_tools_utils__WEBPACK_IMPORTED_MODULE_5__["RequestType"].FETCH, context);
            });

            function handleCompleteRequest(type, request) {
                if (!configuration.isIntakeUrl(request.url) && (isRejected(request) || isServerError(request))) {
                    errorObservable.notify({
                        message: format(type) + " error " + request.method + " " + request.url,
                        resource: {
                            method: request.method,
                            statusCode: request.status,
                            url: request.url
                        },
                        source: _tools_error__WEBPACK_IMPORTED_MODULE_3__["ErrorSource"].NETWORK,
                        stack: truncateResponse(request.response, configuration) || 'Failed to load',
                        startTime: request.startTime
                    });
                }
            }

            return {
                stop: function () {
                    Object(_browser_xhrProxy__WEBPACK_IMPORTED_MODULE_2__["resetXhrProxy"])();
                    Object(_browser_fetchProxy__WEBPACK_IMPORTED_MODULE_1__["resetFetchProxy"])();
                }
            };
        }

        function isRejected(request) {
            return request.status === 0 && request.responseType !== 'opaque';
        }

        function isServerError(request) {
            return request.status >= 500;
        }

        function truncateResponse(response, configuration) {
            if (response && response.length > configuration.requestErrorResponseLengthLimit) {
                return response.substring(0, configuration.requestErrorResponseLengthLimit) + "...";
            }
            return response;
        }

        function format(type) {
            if (_tools_utils__WEBPACK_IMPORTED_MODULE_5__["RequestType"].XHR === type) {
                return 'XHR';
            }
            return 'Fetch';
        }


        /***/
    }),

    /***/ "../core/src/domain/configuration.ts":
    /*!*******************************************!*\
  !*** ../core/src/domain/configuration.ts ***!
  \*******************************************/
    /*! exports provided: DEFAULT_CONFIGURATION, buildConfiguration, buildCookieOptions */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIGURATION", function () {
            return DEFAULT_CONFIGURATION;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "buildConfiguration", function () {
            return buildConfiguration;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "buildCookieOptions", function () {
            return buildCookieOptions;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _browser_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../browser/cookie */ "../core/src/browser/cookie.ts");
        /* harmony import */
        var _tools_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/utils */ "../core/src/tools/utils.ts");
        /* harmony import */
        var _transportConfiguration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transportConfiguration */ "../core/src/domain/transportConfiguration.ts");


        var DEFAULT_CONFIGURATION = {
            allowedTracingOrigins: [],
            maxErrorsByMinute: 3000,
            maxInternalMonitoringMessagesPerPage: 15,
            resourceSampleRate: 100,
            sampleRate: 100,
            silentMultipleInit: false,
            trackInteractions: false,
            /**
             * arbitrary value, byte precision not needed
             */
            requestErrorResponseLengthLimit: 32 * _tools_utils__WEBPACK_IMPORTED_MODULE_2__["ONE_KILO_BYTE"],
            /**
             * flush automatically, aim to be lower than ALB connection timeout
             * to maximize connection reuse.
             */
            flushTimeout: 30 * _tools_utils__WEBPACK_IMPORTED_MODULE_2__["ONE_SECOND"],
            /**
             * Logs intake limit
             */
            maxBatchSize: 50,
            maxMessageSize: 256 * _tools_utils__WEBPACK_IMPORTED_MODULE_2__["ONE_KILO_BYTE"],
            /**
             * beacon payload max queue size implementation is 64kb
             * ensure that we leave room for logs, rum and potential other users
             */
            batchBytesLimit: 16 * _tools_utils__WEBPACK_IMPORTED_MODULE_2__["ONE_KILO_BYTE"]
        };

        function buildConfiguration(userConfiguration, buildEnv) {
            var enableExperimentalFeatures = Array.isArray(userConfiguration.enableExperimentalFeatures)
                ? userConfiguration.enableExperimentalFeatures
                : [];
            var configuration = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
                beforeSend: userConfiguration.beforeSend,
                cookieOptions: buildCookieOptions(userConfiguration),
                isEnabled: function (feature) {
                    return Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["includes"])(enableExperimentalFeatures, feature);
                },
                service: userConfiguration.service
            }, Object(_transportConfiguration__WEBPACK_IMPORTED_MODULE_3__["computeTransportConfiguration"])(userConfiguration, buildEnv)), DEFAULT_CONFIGURATION);
            if ('allowedTracingOrigins' in userConfiguration) {
                configuration.allowedTracingOrigins = userConfiguration.allowedTracingOrigins;
            }
            if ('sampleRate' in userConfiguration) {
                configuration.sampleRate = userConfiguration.sampleRate;
            }
            if ('resourceSampleRate' in userConfiguration) {
                configuration.resourceSampleRate = userConfiguration.resourceSampleRate;
            }
            if ('trackInteractions' in userConfiguration) {
                configuration.trackInteractions = !!userConfiguration.trackInteractions;
            }
            return configuration;
        }

        function buildCookieOptions(userConfiguration) {
            var cookieOptions = {};
            cookieOptions.secure = mustUseSecureCookie(userConfiguration);
            cookieOptions.crossSite = !!userConfiguration.useCrossSiteSessionCookie;
            if (!!userConfiguration.trackSessionAcrossSubdomains) {
                cookieOptions.domain = Object(_browser_cookie__WEBPACK_IMPORTED_MODULE_1__["getCurrentSite"])();
            }
            return cookieOptions;
        }

        function mustUseSecureCookie(userConfiguration) {
            return !!userConfiguration.useSecureSessionCookie || !!userConfiguration.useCrossSiteSessionCookie;
        }


        /***/
    }),

    /***/ "../core/src/domain/internalMonitoring.ts":
    /*!************************************************!*\
  !*** ../core/src/domain/internalMonitoring.ts ***!
  \************************************************/
    /*! exports provided: startInternalMonitoring, resetInternalMonitoring, monitored, monitor, callMonitored, addMonitoringMessage, addErrorToMonitoringBatch, setDebugMode */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "startInternalMonitoring", function () {
            return startInternalMonitoring;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "resetInternalMonitoring", function () {
            return resetInternalMonitoring;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "monitored", function () {
            return monitored;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "monitor", function () {
            return monitor;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "callMonitored", function () {
            return callMonitored;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "addMonitoringMessage", function () {
            return addMonitoringMessage;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "addErrorToMonitoringBatch", function () {
            return addErrorToMonitoringBatch;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "setDebugMode", function () {
            return setDebugMode;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _tools_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/context */ "../core/src/tools/context.ts");
        /* harmony import */
        var _tools_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/error */ "../core/src/tools/error.ts");
        /* harmony import */
        var _tools_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools/utils */ "../core/src/tools/utils.ts");
        /* harmony import */
        var _transport_transport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../transport/transport */ "../core/src/transport/transport.ts");
        /* harmony import */
        var _tracekit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tracekit */ "../core/src/domain/tracekit.ts");


        var StatusType;
        (function (StatusType) {
            StatusType["info"] = "info";
            StatusType["error"] = "error";
        })(StatusType || (StatusType = {}));
        var monitoringConfiguration = {maxMessagesPerPage: 0, sentMessageCount: 0};
        var externalContextProvider;

        function startInternalMonitoring(configuration) {
            if (configuration.internalMonitoringEndpoint) {
                var batch = startMonitoringBatch(configuration);
                _tools_utils__WEBPACK_IMPORTED_MODULE_3__["assign"](monitoringConfiguration, {
                    batch: batch,
                    maxMessagesPerPage: configuration.maxInternalMonitoringMessagesPerPage,
                    sentMessageCount: 0
                });
            }
            return {
                setExternalContextProvider: function (provider) {
                    externalContextProvider = provider;
                }
            };
        }

        function startMonitoringBatch(configuration) {
            var primaryBatch = createMonitoringBatch(configuration.internalMonitoringEndpoint);
            var replicaBatch;
            if (configuration.replica !== undefined) {
                replicaBatch = createMonitoringBatch(configuration.replica.internalMonitoringEndpoint);
            }

            function createMonitoringBatch(endpointUrl) {
                return new _transport_transport__WEBPACK_IMPORTED_MODULE_4__["Batch"](new _transport_transport__WEBPACK_IMPORTED_MODULE_4__["HttpRequest"](endpointUrl, configuration.batchBytesLimit), configuration.maxBatchSize, configuration.batchBytesLimit, configuration.maxMessageSize, configuration.flushTimeout);
            }

            function withContext(message) {
                return Object(_tools_context__WEBPACK_IMPORTED_MODULE_1__["combine"])({
                    date: new Date().getTime(),
                    view: {
                        referrer: document.referrer,
                        url: window.location.href
                    }
                }, externalContextProvider !== undefined ? externalContextProvider() : {}, message);
            }

            return {
                add: function (message) {
                    var contextualizedMessage = withContext(message);
                    primaryBatch.add(contextualizedMessage);
                    if (replicaBatch) {
                        replicaBatch.add(contextualizedMessage);
                    }
                }
            };
        }

        function resetInternalMonitoring() {
            monitoringConfiguration.batch = undefined;
        }

        function monitored(_, __, descriptor) {
            var originalMethod = descriptor.value;
            descriptor.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var decorated = monitoringConfiguration.batch ? monitor(originalMethod) : originalMethod;
                return decorated.apply(this, args);
            };
        }

        function monitor(fn) {
            return function () {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                return callMonitored(fn, this, arguments);
            }; // consider output type has input type
        }

        function callMonitored(fn, context, args) {
            try {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                return fn.apply(context, args);
            } catch (e) {
                logErrorIfDebug(e);
                try {
                    addErrorToMonitoringBatch(e);
                } catch (e) {
                    logErrorIfDebug(e);
                }
            }
        }

        function addMonitoringMessage(message, context) {
            logMessageIfDebug(message);
            addToMonitoringBatch(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({message: message}, context), {status: StatusType.info}));
        }

        function addErrorToMonitoringBatch(e) {
            addToMonitoringBatch(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, formatError(e)), {status: StatusType.error}));
        }

        function addToMonitoringBatch(message) {
            if (monitoringConfiguration.batch &&
                monitoringConfiguration.sentMessageCount < monitoringConfiguration.maxMessagesPerPage) {
                monitoringConfiguration.sentMessageCount += 1;
                monitoringConfiguration.batch.add(message);
            }
        }

        function formatError(e) {
            if (e instanceof Error) {
                var stackTrace = Object(_tracekit__WEBPACK_IMPORTED_MODULE_5__["computeStackTrace"])(e);
                return {
                    error: {
                        kind: stackTrace.name,
                        stack: Object(_tools_error__WEBPACK_IMPORTED_MODULE_2__["toStackTraceString"])(stackTrace)
                    },
                    message: stackTrace.message
                };
            }
            return {
                error: {
                    stack: 'Not an instance of error'
                },
                message: "Uncaught " + _tools_utils__WEBPACK_IMPORTED_MODULE_3__["jsonStringify"](e)
            };
        }

        function setDebugMode(debugMode) {
            monitoringConfiguration.debugMode = debugMode;
        }

        function logErrorIfDebug(e) {
            if (monitoringConfiguration.debugMode) {
                // Log as warn to not forward the logs.
                console.warn('[INTERNAL ERROR]', e);
            }
        }

        function logMessageIfDebug(message) {
            if (monitoringConfiguration.debugMode) {
                console.log('[MONITORING MESSAGE]', message);
            }
        }


        /***/
    }),

    /***/ "../core/src/domain/oldCookiesMigration.ts":
    /*!*************************************************!*\
  !*** ../core/src/domain/oldCookiesMigration.ts ***!
  \*************************************************/
    /*! exports provided: OLD_SESSION_COOKIE_NAME, OLD_RUM_COOKIE_NAME, OLD_LOGS_COOKIE_NAME, RUM_SESSION_KEY, LOGS_SESSION_KEY, tryOldCookiesMigration */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "OLD_SESSION_COOKIE_NAME", function () {
            return OLD_SESSION_COOKIE_NAME;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "OLD_RUM_COOKIE_NAME", function () {
            return OLD_RUM_COOKIE_NAME;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "OLD_LOGS_COOKIE_NAME", function () {
            return OLD_LOGS_COOKIE_NAME;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RUM_SESSION_KEY", function () {
            return RUM_SESSION_KEY;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "LOGS_SESSION_KEY", function () {
            return LOGS_SESSION_KEY;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "tryOldCookiesMigration", function () {
            return tryOldCookiesMigration;
        });
        /* harmony import */
        var _browser_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../browser/cookie */ "../core/src/browser/cookie.ts");
        /* harmony import */
        var _sessionManagement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sessionManagement */ "../core/src/domain/sessionManagement.ts");


        var OLD_SESSION_COOKIE_NAME = '_dd';
        var OLD_RUM_COOKIE_NAME = '_dd_r';
        var OLD_LOGS_COOKIE_NAME = '_dd_l';
// duplicate values to avoid dependency issues
        var RUM_SESSION_KEY = 'rum';
        var LOGS_SESSION_KEY = 'logs';

        /**
         * This migration should remain in the codebase as long as older versions are available/live
         * to allow older sdk versions to be upgraded to newer versions without compatibility issues.
         */
        function tryOldCookiesMigration(sessionCookie) {
            var sessionString = sessionCookie.get();
            var oldSessionId = Object(_browser_cookie__WEBPACK_IMPORTED_MODULE_0__["getCookie"])(OLD_SESSION_COOKIE_NAME);
            var oldRumType = Object(_browser_cookie__WEBPACK_IMPORTED_MODULE_0__["getCookie"])(OLD_RUM_COOKIE_NAME);
            var oldLogsType = Object(_browser_cookie__WEBPACK_IMPORTED_MODULE_0__["getCookie"])(OLD_LOGS_COOKIE_NAME);
            if (!sessionString) {
                var session = {};
                if (oldSessionId) {
                    session.id = oldSessionId;
                }
                if (oldLogsType && /^[01]$/.test(oldLogsType)) {
                    session[LOGS_SESSION_KEY] = oldLogsType;
                }
                if (oldRumType && /^[012]$/.test(oldRumType)) {
                    session[RUM_SESSION_KEY] = oldRumType;
                }
                Object(_sessionManagement__WEBPACK_IMPORTED_MODULE_1__["persistSession"])(session, sessionCookie);
            }
        }


        /***/
    }),

    /***/ "../core/src/domain/sessionManagement.ts":
    /*!***********************************************!*\
  !*** ../core/src/domain/sessionManagement.ts ***!
  \***********************************************/
    /*! exports provided: SESSION_COOKIE_NAME, SESSION_EXPIRATION_DELAY, SESSION_TIME_OUT_DELAY, VISIBILITY_CHECK_DELAY, startSessionManagement, isValidSessionString, persistSession, stopSessionManagement, trackActivity */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SESSION_COOKIE_NAME", function () {
            return SESSION_COOKIE_NAME;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SESSION_EXPIRATION_DELAY", function () {
            return SESSION_EXPIRATION_DELAY;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SESSION_TIME_OUT_DELAY", function () {
            return SESSION_TIME_OUT_DELAY;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "VISIBILITY_CHECK_DELAY", function () {
            return VISIBILITY_CHECK_DELAY;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "startSessionManagement", function () {
            return startSessionManagement;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "isValidSessionString", function () {
            return isValidSessionString;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "persistSession", function () {
            return persistSession;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "stopSessionManagement", function () {
            return stopSessionManagement;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "trackActivity", function () {
            return trackActivity;
        });
        /* harmony import */
        var _browser_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../browser/cookie */ "../core/src/browser/cookie.ts");
        /* harmony import */
        var _tools_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/observable */ "../core/src/tools/observable.ts");
        /* harmony import */
        var _tools_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/utils */ "../core/src/tools/utils.ts");
        /* harmony import */
        var _internalMonitoring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internalMonitoring */ "../core/src/domain/internalMonitoring.ts");
        /* harmony import */
        var _oldCookiesMigration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oldCookiesMigration */ "../core/src/domain/oldCookiesMigration.ts");


        var SESSION_COOKIE_NAME = '_dd_s';
        var SESSION_EXPIRATION_DELAY = 15 * _tools_utils__WEBPACK_IMPORTED_MODULE_2__["ONE_MINUTE"];
        var SESSION_TIME_OUT_DELAY = 4 * _tools_utils__WEBPACK_IMPORTED_MODULE_2__["ONE_HOUR"];
        var VISIBILITY_CHECK_DELAY = _tools_utils__WEBPACK_IMPORTED_MODULE_2__["ONE_MINUTE"];

        /**
         * Limit access to cookie to avoid performance issues
         */
        function startSessionManagement(options, productKey, computeSessionState) {
            var sessionCookie = Object(_browser_cookie__WEBPACK_IMPORTED_MODULE_0__["cacheCookieAccess"])(SESSION_COOKIE_NAME, options);
            Object(_oldCookiesMigration__WEBPACK_IMPORTED_MODULE_4__["tryOldCookiesMigration"])(sessionCookie);
            var renewObservable = new _tools_observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
            var currentSessionId = retrieveActiveSession(sessionCookie).id;
            var expandOrRenewSession = _tools_utils__WEBPACK_IMPORTED_MODULE_2__["throttle"](Object(_internalMonitoring__WEBPACK_IMPORTED_MODULE_3__["monitor"])(function () {
                var session = retrieveActiveSession(sessionCookie);
                var _a = computeSessionState(session[productKey]), trackingType = _a.trackingType,
                    isTracked = _a.isTracked;
                session[productKey] = trackingType;
                if (isTracked && !session.id) {
                    session.id = _tools_utils__WEBPACK_IMPORTED_MODULE_2__["generateUUID"]();
                    session.created = String(Date.now());
                }
                // save changes and expand session duration
                persistSession(session, sessionCookie);
                // If the session id has changed, notify that the session has been renewed
                if (isTracked && currentSessionId !== session.id) {
                    currentSessionId = session.id;
                    renewObservable.notify();
                }
            }), _browser_cookie__WEBPACK_IMPORTED_MODULE_0__["COOKIE_ACCESS_DELAY"]).throttled;
            var expandSession = function () {
                var session = retrieveActiveSession(sessionCookie);
                persistSession(session, sessionCookie);
            };
            expandOrRenewSession();
            trackActivity(expandOrRenewSession);
            trackVisibility(expandSession);
            return {
                getId: function () {
                    return retrieveActiveSession(sessionCookie).id;
                },
                getTrackingType: function () {
                    return retrieveActiveSession(sessionCookie)[productKey];
                },
                renewObservable: renewObservable
            };
        }

        var SESSION_ENTRY_REGEXP = /^([a-z]+)=([a-z0-9-]+)$/;
        var SESSION_ENTRY_SEPARATOR = '&';

        function isValidSessionString(sessionString) {
            return (sessionString !== undefined &&
                (sessionString.indexOf(SESSION_ENTRY_SEPARATOR) !== -1 || SESSION_ENTRY_REGEXP.test(sessionString)));
        }

        function retrieveActiveSession(sessionCookie) {
            var session = retrieveSession(sessionCookie);
            if (isActiveSession(session)) {
                return session;
            }
            clearSession(sessionCookie);
            return {};
        }

        function isActiveSession(session) {
            // created and expire can be undefined for versions which was not storing them
            // these checks could be removed when older versions will not be available/live anymore
            return ((session.created === undefined || Date.now() - Number(session.created) < SESSION_TIME_OUT_DELAY) &&
                (session.expire === undefined || Date.now() < Number(session.expire)));
        }

        function retrieveSession(sessionCookie) {
            var sessionString = sessionCookie.get();
            var session = {};
            if (isValidSessionString(sessionString)) {
                sessionString.split(SESSION_ENTRY_SEPARATOR).forEach(function (entry) {
                    var matches = SESSION_ENTRY_REGEXP.exec(entry);
                    if (matches !== null) {
                        var key = matches[1], value = matches[2];
                        session[key] = value;
                    }
                });
            }
            return session;
        }

        function persistSession(session, cookie) {
            if (_tools_utils__WEBPACK_IMPORTED_MODULE_2__["isEmptyObject"](session)) {
                clearSession(cookie);
                return;
            }
            session.expire = String(Date.now() + SESSION_EXPIRATION_DELAY);
            var cookieString = _tools_utils__WEBPACK_IMPORTED_MODULE_2__["objectEntries"](session)
                .map(function (_a) {
                    var key = _a[0], value = _a[1];
                    return key + "=" + value;
                })
                .join(SESSION_ENTRY_SEPARATOR);
            cookie.set(cookieString, SESSION_EXPIRATION_DELAY);
        }

        function clearSession(cookie) {
            cookie.set('', 0);
        }

        function stopSessionManagement() {
            stopCallbacks.forEach(function (e) {
                return e();
            });
            stopCallbacks = [];
        }

        var stopCallbacks = [];

        function trackActivity(expandOrRenewSession) {
            var stop = _tools_utils__WEBPACK_IMPORTED_MODULE_2__["addEventListeners"](window, [_tools_utils__WEBPACK_IMPORTED_MODULE_2__["DOM_EVENT"].CLICK, _tools_utils__WEBPACK_IMPORTED_MODULE_2__["DOM_EVENT"].TOUCH_START, _tools_utils__WEBPACK_IMPORTED_MODULE_2__["DOM_EVENT"].KEY_DOWN, _tools_utils__WEBPACK_IMPORTED_MODULE_2__["DOM_EVENT"].SCROLL], expandOrRenewSession, {
                capture: true,
                passive: true
            }).stop;
            stopCallbacks.push(stop);
        }

        function trackVisibility(expandSession) {
            var expandSessionWhenVisible = Object(_internalMonitoring__WEBPACK_IMPORTED_MODULE_3__["monitor"])(function () {
                if (document.visibilityState === 'visible') {
                    expandSession();
                }
            });
            var stop = _tools_utils__WEBPACK_IMPORTED_MODULE_2__["addEventListener"](document, _tools_utils__WEBPACK_IMPORTED_MODULE_2__["DOM_EVENT"].VISIBILITY_CHANGE, expandSessionWhenVisible).stop;
            stopCallbacks.push(stop);
            var visibilityCheckInterval = setInterval(expandSessionWhenVisible, VISIBILITY_CHECK_DELAY);
            stopCallbacks.push(function () {
                clearInterval(visibilityCheckInterval);
            });
        }


        /***/
    }),

    /***/ "../core/src/domain/tracekit.ts":
    /*!**************************************!*\
  !*** ../core/src/domain/tracekit.ts ***!
  \**************************************/
    /*! exports provided: wrap, report, computeStackTrace */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "wrap", function () {
            return wrap;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "report", function () {
            return report;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "computeStackTrace", function () {
            return computeStackTrace;
        });
        /* harmony import */
        var _internalMonitoring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internalMonitoring */ "../core/src/domain/internalMonitoring.ts");

        var UNKNOWN_FUNCTION = '?';
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types
// eslint-disable-next-line  max-len
        var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

        /**
         * A better form of hasOwnProperty<br/>
         * Example: `has(MainHostObject, property) === true/false`
         *
         * @param {Object} object to check property
         * @param {string} key to check
         * @return {Boolean} true if the object has the key and it is not inherited
         */
        function has(object, key) {
            return Object.prototype.hasOwnProperty.call(object, key);
        }

        /**
         * Returns true if the parameter is undefined<br/>
         * Example: `isUndefined(val) === true/false`
         *
         * @param {*} what Value to check
         * @return {Boolean} true if undefined and false otherwise
         */
        function isUndefined(what) {
            return typeof what === 'undefined';
        }

        /**
         * Wrap any function in a TraceKit reporter<br/>
         * Example: `func = wrap(func);`
         *
         * @param {Function} func Function to be wrapped
         * @return {Function} The wrapped func
         * @memberof TraceKit
         */
        function wrap(func) {
            function wrapped() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                try {
                    return func.apply(this, args);
                } catch (e) {
                    report(e);
                    throw e;
                }
            }

            return wrapped;
        }

        /**
         * Cross-browser processing of unhandled exceptions
         *
         * Syntax:
         * ```js
         *   report.subscribe(function(stackInfo) { ... })
         *   report.unsubscribe(function(stackInfo) { ... })
         *   report(exception)
         *   try { ...code... } catch(ex) { report(ex); }
         * ```
         *
         * Supports:
         *   - Firefox: full stack trace with line numbers, plus column number
         *     on top frame; column number is not guaranteed
         *   - Opera: full stack trace with line and column numbers
         *   - Chrome: full stack trace with line and column numbers
         *   - Safari: line and column number for the top frame only; some frames
         *     may be missing, and column number is not guaranteed
         *   - IE: line and column number for the top frame only; some frames
         *     may be missing, and column number is not guaranteed
         *
         * In theory, TraceKit should work on all of the following versions:
         *   - IE5.5+ (only 8.0 tested)
         *   - Firefox 0.9+ (only 3.5+ tested)
         *   - Opera 7+ (only 10.50 tested; versions 9 and earlier may require
         *     Exceptions Have Stacktrace to be enabled in opera:config)
         *   - Safari 3+ (only 4+ tested)
         *   - Chrome 1+ (only 5+ tested)
         *   - Konqueror 3.5+ (untested)
         *
         * Requires computeStackTrace.
         *
         * Tries to catch all unhandled exceptions and report them to the
         * subscribed handlers. Please note that report will rethrow the
         * exception. This is REQUIRED in order to get a useful stack trace in IE.
         * If the exception does not reach the top of the browser, you will only
         * get a stack trace from the point where report was called.
         *
         * Handlers receive a StackTrace object as described in the
         * computeStackTrace docs.
         *
         * @memberof TraceKit
         * @namespace
         */
        var report = (function reportModuleWrapper() {
            var handlers = [];
            var lastException;
            var lastExceptionStack;

            /**
             * Add a crash handler.
             * @param {Function} handler
             * @memberof report
             */
            function subscribe(handler) {
                installGlobalHandler();
                installGlobalUnhandledRejectionHandler();
                handlers.push(handler);
            }

            /**
             * Remove a crash handler.
             * @param {Function} handler
             * @memberof report
             */
            function unsubscribe(handler) {
                for (var i = handlers.length - 1; i >= 0; i -= 1) {
                    if (handlers[i] === handler) {
                        handlers.splice(i, 1);
                    }
                }
                if (handlers.length === 0) {
                    uninstallGlobalHandler();
                    uninstallGlobalUnhandledRejectionHandler();
                }
            }

            /**
             * Dispatch stack information to all handlers.
             * @param {StackTrace} stack
             * @param {boolean} isWindowError Is this a top-level window error?
             * @param {Error=} error The error that's being handled (if available, null otherwise)
             * @memberof report
             * @throws An exception if an error occurs while calling an handler.
             */
            function notifyHandlers(stack, isWindowError, error) {
                var exception;
                handlers.forEach(function (handler) {
                    try {
                        handler(stack, isWindowError, error);
                    } catch (inner) {
                        exception = inner;
                    }
                });
                if (exception) {
                    throw exception;
                }
            }

            var oldOnerrorHandler;
            var onErrorHandlerInstalled;
            var oldOnunhandledrejectionHandler;
            var onUnhandledRejectionHandlerInstalled;

            /**
             * Ensures all global unhandled exceptions are recorded.
             * Supported by Gecko and IE.
             * @param {Event|string} message Error message.
             * @param {string=} url URL of script that generated the exception.
             * @param {(number|string)=} lineNo The line number at which the error occurred.
             * @param {(number|string)=} columnNo The column number at which the error occurred.
             * @param {Error=} errorObj The actual Error object.
             * @memberof report
             */
            function traceKitWindowOnError(message, url, lineNo, columnNo, errorObj) {
                var stack;
                if (lastExceptionStack) {
                    computeStackTrace.augmentStackTraceWithInitialElement(lastExceptionStack, url, lineNo);
                    processLastException();
                } else if (errorObj) {
                    stack = computeStackTrace(errorObj);
                    notifyHandlers(stack, true, errorObj);
                } else {
                    var location_1 = {
                        url: url,
                        column: columnNo,
                        line: lineNo
                    };
                    var name_1;
                    var msg = message;
                    if ({}.toString.call(message) === '[object String]') {
                        var groups = ERROR_TYPES_RE.exec(msg);
                        if (groups) {
                            name_1 = groups[1];
                            msg = groups[2];
                        }
                    }
                    stack = {
                        name: name_1,
                        message: typeof msg === 'string' ? msg : undefined,
                        stack: [location_1]
                    };
                    notifyHandlers(stack, true, message);
                }
                if (oldOnerrorHandler) {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                    return oldOnerrorHandler.apply(this, arguments);
                }
                return false;
            }

            /**
             * Ensures all unhandled rejections are recorded.
             * @param {PromiseRejectionEvent} e event.
             * @memberof report
             * @see https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onunhandledrejection
             * @see https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent
             */
            function traceKitWindowOnUnhandledRejection(e) {
                var reason = e.reason || 'Empty reason';
                var stack = computeStackTrace(reason);
                notifyHandlers(stack, true, reason);
            }

            /**
             * Install a global onerror handler
             * @memberof report
             */
            function installGlobalHandler() {
                if (onErrorHandlerInstalled) {
                    return;
                }
                oldOnerrorHandler = window.onerror;
                window.onerror = Object(_internalMonitoring__WEBPACK_IMPORTED_MODULE_0__["monitor"])(traceKitWindowOnError);
                onErrorHandlerInstalled = true;
            }

            /**
             * Uninstall the global onerror handler
             * @memberof report
             */
            function uninstallGlobalHandler() {
                if (onErrorHandlerInstalled) {
                    window.onerror = oldOnerrorHandler;
                    onErrorHandlerInstalled = false;
                }
            }

            /**
             * Install a global onunhandledrejection handler
             * @memberof report
             */
            function installGlobalUnhandledRejectionHandler() {
                if (onUnhandledRejectionHandlerInstalled) {
                    return;
                }
                oldOnunhandledrejectionHandler = window.onunhandledrejection !== null ? window.onunhandledrejection : undefined;
                window.onunhandledrejection = Object(_internalMonitoring__WEBPACK_IMPORTED_MODULE_0__["monitor"])(traceKitWindowOnUnhandledRejection);
                onUnhandledRejectionHandlerInstalled = true;
            }

            /**
             * Uninstall the global onunhandledrejection handler
             * @memberof report
             */
            function uninstallGlobalUnhandledRejectionHandler() {
                if (onUnhandledRejectionHandlerInstalled) {
                    window.onunhandledrejection = oldOnunhandledrejectionHandler;
                    onUnhandledRejectionHandlerInstalled = false;
                }
            }

            /**
             * Process the most recent exception
             * @memberof report
             */
            function processLastException() {
                var currentLastExceptionStack = lastExceptionStack;
                var currentLastException = lastException;
                lastExceptionStack = undefined;
                lastException = undefined;
                notifyHandlers(currentLastExceptionStack, false, currentLastException);
            }

            /**
             * Reports an unhandled Error.
             * @param {Error} ex
             * @memberof report
             * @throws An exception if an incomplete stack trace is detected (old IE browsers).
             */
            function doReport(ex) {
                if (lastExceptionStack) {
                    if (lastException === ex) {
                        return; // already caught by an inner catch block, ignore
                    }
                    processLastException();
                }
                var stack = computeStackTrace(ex);
                lastExceptionStack = stack;
                lastException = ex;
                // If the stack trace is incomplete, wait for 2 seconds for
                // slow slow IE to see if onerror occurs or not before reporting
                // this exception; otherwise, we will end up with an incomplete
                // stack trace
                setTimeout(function () {
                    if (lastException === ex) {
                        processLastException();
                    }
                }, stack.incomplete ? 2000 : 0);
                throw ex; // re-throw to propagate to the top level (and cause window.onerror)
            }

            doReport.subscribe = subscribe;
            doReport.unsubscribe = unsubscribe;
            doReport.traceKitWindowOnError = traceKitWindowOnError;
            return doReport;
        })();
        /**
         * computeStackTrace: cross-browser stack traces in JavaScript
         *
         * Syntax:
         * ```js
         * s = computeStackTrace.ofCaller([depth])
         * s = computeStackTrace(exception) // consider using report instead (see below)
         * ```
         *
         * Supports:
         *   - Firefox:  full stack trace with line numbers and unreliable column
         *               number on top frame
         *   - Opera 10: full stack trace with line and column numbers
         *   - Opera 9-: full stack trace with line numbers
         *   - Chrome:   full stack trace with line and column numbers
         *   - Safari:   line and column number for the topmost stacktrace element
         *               only
         *   - IE:       no line numbers whatsoever
         *
         * Tries to guess names of anonymous functions by looking for assignments
         * in the source code. In IE and Safari, we have to guess source file names
         * by searching for function bodies inside all page scripts. This will not
         * work for scripts that are loaded cross-domain.
         * Here be dragons: some function names may be guessed incorrectly, and
         * duplicate functions may be mismatched.
         *
         * computeStackTrace should only be used for tracing purposes.
         * Logging of unhandled exceptions should be done with report,
         * which builds on top of computeStackTrace and provides better
         * IE support by utilizing the window.onerror event to retrieve information
         * about the top of the stack.
         *
         * Note: In IE and Safari, no stack trace is recorded on the Error object,
         * so computeStackTrace instead walks its *own* chain of callers.
         * This means that:
         *  * in Safari, some methods may be missing from the stack trace;
         *  * in IE, the topmost function in the stack trace will always be the
         *    caller of computeStackTrace.
         *
         * This is okay for tracing (because you are likely to be calling
         * computeStackTrace from the function you want to be the topmost element
         * of the stack trace anyway), but not okay for logging unhandled
         * exceptions (because your catch block will likely be far away from the
         * inner function that actually caused the exception).
         *
         * Tracing example:
         * ```js
         *     function trace(message) {
         *         let stackInfo = computeStackTrace.ofCaller();
         *         let data = message + "\n";
         *         for(let i in stackInfo.stack) {
         *             let item = stackInfo.stack[i];
         *             data += (item.func || '[anonymous]') + "() in " + item.url + ":" + (item.line || '0') + "\n";
         *         }
         *         if (window.console)
         *             console.info(data);
         *         else
         *             alert(data);
         *     }
         * ```
         * @memberof TraceKit
         * @namespace
         */
        var computeStackTrace = (function computeStackTraceWrapper() {
            var debug = false;
            // Contents of Exception in various browsers.
            //
            // SAFARI:
            // ex.message = Can't find variable: qq
            // ex.line = 59
            // ex.sourceId = 580238192
            // ex.sourceURL = http://...
            // ex.expressionBeginOffset = 96
            // ex.expressionCaretOffset = 98
            // ex.expressionEndOffset = 98
            // ex.name = ReferenceError
            //
            // FIREFOX:
            // ex.message = qq is not defined
            // ex.fileName = http://...
            // ex.lineNumber = 59
            // ex.columnNumber = 69
            // ex.stack = ...stack trace... (see the example below)
            // ex.name = ReferenceError
            //
            // CHROME:
            // ex.message = qq is not defined
            // ex.name = ReferenceError
            // ex.type = not_defined
            // ex.arguments = ['aa']
            // ex.stack = ...stack trace...
            //
            // INTERNET EXPLORER:
            // ex.message = ...
            // ex.name = ReferenceError
            //
            // OPERA:
            // ex.message = ...message... (see the example below)
            // ex.name = ReferenceError
            // ex.opera#sourceloc = 11  (pretty much useless, duplicates the info in ex.message)
            // ex.stacktrace = n/a; see 'opera:config#UserPrefs|Exceptions Have Stacktrace'
            /**
             * Computes stack trace information from the stack property.
             * Chrome and Gecko use this property.
             * @param {Error} ex
             * @return {?StackTrace} Stack trace information.
             * @memberof computeStackTrace
             */
            function computeStackTraceFromStackProp(ex) {
                var stacktrace = tryToGetString(ex, 'stack');
                if (!stacktrace) {
                    return;
                }
                // eslint-disable-next-line  max-len
                var chrome = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
                // eslint-disable-next-line  max-len
                var gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
                // eslint-disable-next-line  max-len
                var winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
                // Used to additionally parse URL/line/column from eval frames
                var isEval;
                var geckoEval = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
                var chromeEval = /\((\S*)(?::(\d+))(?::(\d+))\)/;
                var lines = stacktrace.split('\n');
                var stack = [];
                var submatch;
                var parts;
                var element;
                for (var i = 0, j = lines.length; i < j; i += 1) {
                    if (chrome.exec(lines[i])) {
                        parts = chrome.exec(lines[i]);
                        var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line
                        isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line
                        submatch = chromeEval.exec(parts[2]);
                        if (isEval && submatch) {
                            // throw out eval line/column and use top-most line/column number
                            parts[2] = submatch[1]; // url
                            parts[3] = submatch[2]; // line
                            parts[4] = submatch[3]; // column
                        }
                        element = {
                            args: isNative ? [parts[2]] : [],
                            column: parts[4] ? +parts[4] : undefined,
                            func: parts[1] || UNKNOWN_FUNCTION,
                            line: parts[3] ? +parts[3] : undefined,
                            url: !isNative ? parts[2] : undefined
                        };
                    } else if (winjs.exec(lines[i])) {
                        parts = winjs.exec(lines[i]);
                        element = {
                            args: [],
                            column: parts[4] ? +parts[4] : undefined,
                            func: parts[1] || UNKNOWN_FUNCTION,
                            line: +parts[3],
                            url: parts[2]
                        };
                    } else if (gecko.exec(lines[i])) {
                        parts = gecko.exec(lines[i]);
                        isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
                        submatch = geckoEval.exec(parts[3]);
                        if (isEval && submatch) {
                            // throw out eval line/column and use top-most line number
                            parts[3] = submatch[1];
                            parts[4] = submatch[2];
                            parts[5] = undefined; // no column when eval
                        } else if (i === 0 && !parts[5] && !isUndefined(ex.columnNumber)) {
                            // FireFox uses this awesome columnNumber property for its top frame
                            // Also note, Firefox's column number is 0-based and everything else expects 1-based,
                            // so adding 1
                            // NOTE: this hack doesn't work if top-most frame is eval
                            stack[0].column = ex.columnNumber + 1;
                        }
                        element = {
                            args: parts[2] ? parts[2].split(',') : [],
                            column: parts[5] ? +parts[5] : undefined,
                            func: parts[1] || UNKNOWN_FUNCTION,
                            line: parts[4] ? +parts[4] : undefined,
                            url: parts[3]
                        };
                    } else {
                        continue;
                    }
                    if (!element.func && element.line) {
                        element.func = UNKNOWN_FUNCTION;
                    }
                    stack.push(element);
                }
                if (!stack.length) {
                    return;
                }
                return {
                    stack: stack,
                    message: tryToGetString(ex, 'message'),
                    name: tryToGetString(ex, 'name')
                };
            }

            /**
             * Computes stack trace information from the stacktrace property.
             * Opera 10+ uses this property.
             * @param {Error} ex
             * @return {?StackTrace} Stack trace information.
             * @memberof computeStackTrace
             */
            function computeStackTraceFromStacktraceProp(ex) {
                // Access and store the stacktrace property before doing ANYTHING
                // else to it because Opera is not very good at providing it
                // reliably in other circumstances.
                var stacktrace = tryToGetString(ex, 'stacktrace');
                if (!stacktrace) {
                    return;
                }
                var opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;
                // eslint-disable-next-line  max-len
                var opera11Regex = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i;
                var lines = stacktrace.split('\n');
                var stack = [];
                var parts;
                for (var line = 0; line < lines.length; line += 2) {
                    var element = void 0;
                    if (opera10Regex.exec(lines[line])) {
                        parts = opera10Regex.exec(lines[line]);
                        element = {
                            args: [],
                            column: undefined,
                            func: parts[3],
                            line: +parts[1],
                            url: parts[2]
                        };
                    } else if (opera11Regex.exec(lines[line])) {
                        parts = opera11Regex.exec(lines[line]);
                        element = {
                            args: parts[5] ? parts[5].split(',') : [],
                            column: +parts[2],
                            func: parts[3] || parts[4],
                            line: +parts[1],
                            url: parts[6]
                        };
                    }
                    if (element) {
                        if (!element.func && element.line) {
                            element.func = UNKNOWN_FUNCTION;
                        }
                        element.context = [lines[line + 1]];
                        stack.push(element);
                    }
                }
                if (!stack.length) {
                    return;
                }
                return {
                    stack: stack,
                    message: tryToGetString(ex, 'message'),
                    name: tryToGetString(ex, 'name')
                };
            }

            /**
             * NOT TESTED.
             * Computes stack trace information from an error message that includes
             * the stack trace.
             * Opera 9 and earlier use this method if the option to show stack
             * traces is turned on in opera:config.
             * @param {Error} ex
             * @return {?StackTrace} Stack information.
             * @memberof computeStackTrace
             */
            function computeStackTraceFromOperaMultiLineMessage(ex) {
                // TODO: Clean this function up
                // Opera includes a stack trace into the exception message. An example is:
                //
                // Statement on line 3: Undefined variable: undefinedFunc
                // Backtrace:
                //   Line 3 of linked script file://localhost/Users/andreyvit/Projects/TraceKit/javascript-client/sample.js:
                //   In function zzz
                //         undefinedFunc(a);
                //   Line 7 of inline#1 script in file://localhost/Users/andreyvit/Projects/TraceKit/javascript-client/sample.html:
                //   In function yyy
                //           zzz(x, y, z);
                //   Line 3 of inline#1 script in file://localhost/Users/andreyvit/Projects/TraceKit/javascript-client/sample.html:
                //   In function xxx
                //           yyy(a, a, a);
                //   Line 1 of function script
                //     try { xxx('hi'); return false; } catch(ex) { report(ex); }
                //   ...
                var message = tryToGetString(ex, 'message');
                if (!message) {
                    return;
                }
                var lines = message.split('\n');
                if (lines.length < 4) {
                    return;
                }
                var lineRE1 = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i;
                var lineRE2 = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i;
                var lineRE3 = /^\s*Line (\d+) of function script\s*$/i;
                var stack = [];
                var scripts = window && window.document && window.document.getElementsByTagName('script');
                var inlineScriptBlocks = [];
                var parts;
                for (var s in scripts) {
                    if (has(scripts, s) && !scripts[s].src) {
                        inlineScriptBlocks.push(scripts[s]);
                    }
                }
                for (var line = 2; line < lines.length; line += 2) {
                    var item = void 0;
                    if (lineRE1.exec(lines[line])) {
                        parts = lineRE1.exec(lines[line]);
                        item = {
                            args: [],
                            column: undefined,
                            func: parts[3],
                            line: +parts[1],
                            url: parts[2]
                        };
                    } else if (lineRE2.exec(lines[line])) {
                        parts = lineRE2.exec(lines[line]);
                        item = {
                            args: [],
                            column: undefined,
                            func: parts[4],
                            line: +parts[1],
                            url: parts[3]
                        };
                    } else if (lineRE3.exec(lines[line])) {
                        parts = lineRE3.exec(lines[line]);
                        var url = window.location.href.replace(/#.*$/, '');
                        item = {
                            url: url,
                            args: [],
                            column: undefined,
                            func: '',
                            line: +parts[1]
                        };
                    }
                    if (item) {
                        if (!item.func) {
                            item.func = UNKNOWN_FUNCTION;
                        }
                        item.context = [lines[line + 1]];
                        stack.push(item);
                    }
                }
                if (!stack.length) {
                    return; // could not parse multiline exception message as Opera stack trace
                }
                return {
                    stack: stack,
                    message: lines[0],
                    name: tryToGetString(ex, 'name')
                };
            }

            /**
             * Adds information about the first frame to incomplete stack traces.
             * Safari and IE require this to get complete data on the first frame.
             * @param {StackTrace} stackInfo Stack trace information from
             * one of the compute* methods.
             * @param {string=} url The URL of the script that caused an error.
             * @param {(number|string)=} lineNo The line number of the script that
             * caused an error.
             * @param {string=} message The error generated by the browser, which
             * hopefully contains the name of the object that caused the error.
             * @return {boolean} Whether or not the stack information was
             * augmented.
             * @memberof computeStackTrace
             */
            function augmentStackTraceWithInitialElement(stackInfo, url, lineNo) {
                var initial = {
                    url: url,
                    line: lineNo ? +lineNo : undefined
                };
                if (initial.url && initial.line) {
                    stackInfo.incomplete = false;
                    var stack = stackInfo.stack;
                    if (stack.length > 0) {
                        if (stack[0].url === initial.url) {
                            if (stack[0].line === initial.line) {
                                return false; // already in stack trace
                            }
                            if (!stack[0].line && stack[0].func === initial.func) {
                                stack[0].line = initial.line;
                                stack[0].context = initial.context;
                                return false;
                            }
                        }
                    }
                    stack.unshift(initial);
                    stackInfo.partial = true;
                    return true;
                }
                stackInfo.incomplete = true;
                return false;
            }

            /**
             * Computes stack trace information by walking the arguments.caller
             * chain at the time the exception occurred. This will cause earlier
             * frames to be missed but is the only way to get any stack trace in
             * Safari and IE. The top frame is restored by
             * {@link augmentStackTraceWithInitialElement}.
             * @param {Error} ex
             * @param {number} depth
             * @return {StackTrace} Stack trace information.
             * @memberof computeStackTrace
             */
            function computeStackTraceByWalkingCallerChain(ex, depth) {
                var functionName = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i;
                var stack = [];
                var funcs = {};
                var recursion = false;
                var parts;
                var item;
                for (var curr = computeStackTraceByWalkingCallerChain.caller; curr && !recursion; curr = curr.caller) {
                    if (curr === computeStackTrace || curr === report) {
                        continue;
                    }
                    item = {
                        args: [],
                        column: undefined,
                        func: UNKNOWN_FUNCTION,
                        line: undefined,
                        url: undefined
                    };
                    parts = functionName.exec(curr.toString());
                    if (curr.name) {
                        item.func = curr.name;
                    } else if (parts) {
                        item.func = parts[1];
                    }
                    if (typeof item.func === 'undefined') {
                        item.func = parts ? parts.input.substring(0, parts.input.indexOf('{')) : undefined;
                    }
                    if (funcs[curr.toString()]) {
                        recursion = true;
                    } else {
                        funcs[curr.toString()] = true;
                    }
                    stack.push(item);
                }
                if (depth) {
                    stack.splice(0, depth);
                }
                var result = {
                    stack: stack,
                    message: tryToGetString(ex, 'message'),
                    name: tryToGetString(ex, 'name')
                };
                augmentStackTraceWithInitialElement(result, tryToGetString(ex, 'sourceURL') || tryToGetString(ex, 'fileName'), tryToGetString(ex, 'line') || tryToGetString(ex, 'lineNumber'));
                return result;
            }

            /**
             * Computes a stack trace for an exception.
             * @param {Error} ex
             * @param {(string|number)=} depth
             * @memberof computeStackTrace
             */
            function doComputeStackTrace(ex, depth) {
                var stack;
                var normalizedDepth = depth === undefined ? 0 : +depth;
                try {
                    // This must be tried first because Opera 10 *destroys*
                    // its stacktrace property if you try to access the stack
                    // property first!!
                    stack = computeStackTraceFromStacktraceProp(ex);
                    if (stack) {
                        return stack;
                    }
                } catch (e) {
                    if (debug) {
                        throw e;
                    }
                }
                try {
                    stack = computeStackTraceFromStackProp(ex);
                    if (stack) {
                        return stack;
                    }
                } catch (e) {
                    if (debug) {
                        throw e;
                    }
                }
                try {
                    stack = computeStackTraceFromOperaMultiLineMessage(ex);
                    if (stack) {
                        return stack;
                    }
                } catch (e) {
                    if (debug) {
                        throw e;
                    }
                }
                try {
                    stack = computeStackTraceByWalkingCallerChain(ex, normalizedDepth + 1);
                    if (stack) {
                        return stack;
                    }
                } catch (e) {
                    if (debug) {
                        throw e;
                    }
                }
                return {
                    message: tryToGetString(ex, 'message'),
                    name: tryToGetString(ex, 'name'),
                    stack: []
                };
            }

            function tryToGetString(candidate, property) {
                if (typeof candidate !== 'object' || !candidate || !(property in candidate)) {
                    return undefined;
                }
                var value = candidate[property];
                return typeof value === 'string' ? value : undefined;
            }

            /**
             * Logs a stacktrace starting from the previous call and working down.
             * @param {(number|string)=} depth How many frames deep to trace.
             * @return {StackTrace} Stack trace information.
             * @memberof computeStackTrace
             */
            function computeStackTraceOfCaller(depth) {
                var currentDepth = (depth === undefined ? 0 : +depth) + 1; // "+ 1" because "ofCaller" should drop one frame
                try {
                    throw new Error();
                } catch (ex) {
                    return computeStackTrace(ex, currentDepth + 1);
                }
            }

            doComputeStackTrace.augmentStackTraceWithInitialElement = augmentStackTraceWithInitialElement;
            doComputeStackTrace.computeStackTraceFromStackProp = computeStackTraceFromStackProp;
            doComputeStackTrace.ofCaller = computeStackTraceOfCaller;
            return doComputeStackTrace;
        })();


        /***/
    }),

    /***/ "../core/src/domain/transportConfiguration.ts":
    /*!****************************************************!*\
  !*** ../core/src/domain/transportConfiguration.ts ***!
  \****************************************************/
    /*! exports provided: Datacenter, INTAKE_SITE, computeTransportConfiguration */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "Datacenter", function () {
            return Datacenter;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "INTAKE_SITE", function () {
            return INTAKE_SITE;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "computeTransportConfiguration", function () {
            return computeTransportConfiguration;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _boot_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../boot/init */ "../core/src/boot/init.ts");
        /* harmony import */
        var _tools_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/utils */ "../core/src/tools/utils.ts");
        var _a;


        var ENDPOINTS = {
            alternate: {
                logs: 'logs',
                rum: 'rum',
                sessionReplay: 'session-replay',
                trace: 'trace'
            },
            classic: {
                logs: 'browser',
                rum: 'rum',
                // session-replay has no classic endpoint
                sessionReplay: undefined,
                trace: 'public-trace'
            }
        };
        var Datacenter = {
            EU: 'eu',
            US: 'us'
        };
        var INTAKE_SITE = (_a = {},
            _a[Datacenter.EU] = 'datadoghq.eu',
            _a[Datacenter.US] = 'datadoghq.com',
            _a);
        var CLASSIC_ALLOWED_SITES = [INTAKE_SITE[Datacenter.US], INTAKE_SITE[Datacenter.EU]];

        function computeTransportConfiguration(userConfiguration, buildEnv) {
            var transportSettings = {
                applicationId: userConfiguration.applicationId,
                buildMode: buildEnv.buildMode,
                clientToken: userConfiguration.clientToken,
                env: userConfiguration.env,
                proxyHost: userConfiguration.proxyHost,
                sdkVersion: buildEnv.sdkVersion,
                service: userConfiguration.service,
                site: userConfiguration.site || INTAKE_SITE[userConfiguration.datacenter || buildEnv.datacenter],
                version: userConfiguration.version
            };
            var intakeType = getIntakeType(transportSettings.site, userConfiguration);
            var intakeUrls = getIntakeUrls(intakeType, transportSettings, userConfiguration.replica !== undefined);
            var configuration = {
                isIntakeUrl: function (url) {
                    return intakeUrls.some(function (intakeUrl) {
                        return url.indexOf(intakeUrl) === 0;
                    });
                },
                logsEndpoint: getEndpoint(intakeType, 'logs', transportSettings),
                rumEndpoint: getEndpoint(intakeType, 'rum', transportSettings),
                sessionReplayEndpoint: getEndpoint(intakeType, 'sessionReplay', transportSettings),
                traceEndpoint: getEndpoint(intakeType, 'trace', transportSettings)
            };
            if (userConfiguration.internalMonitoringApiKey) {
                configuration.internalMonitoringEndpoint = getEndpoint(intakeType, 'logs', transportSettings, 'browser-agent-internal-monitoring');
            }
            if (transportSettings.buildMode === _boot_init__WEBPACK_IMPORTED_MODULE_1__["BuildMode"].E2E_TEST) {
                configuration.internalMonitoringEndpoint = '<<< E2E INTERNAL MONITORING ENDPOINT >>>';
                configuration.logsEndpoint = '<<< E2E LOGS ENDPOINT >>>';
                configuration.rumEndpoint = '<<< E2E RUM ENDPOINT >>>';
                configuration.sessionReplayEndpoint = '<<< E2E SESSION REPLAY ENDPOINT >>>';
            }
            if (transportSettings.buildMode === _boot_init__WEBPACK_IMPORTED_MODULE_1__["BuildMode"].STAGING) {
                if (userConfiguration.replica !== undefined) {
                    var replicaTransportSettings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transportSettings), {
                        applicationId: userConfiguration.replica.applicationId,
                        clientToken: userConfiguration.replica.clientToken,
                        site: INTAKE_SITE[Datacenter.US]
                    });
                    configuration.replica = {
                        applicationId: userConfiguration.replica.applicationId,
                        internalMonitoringEndpoint: getEndpoint(intakeType, 'logs', replicaTransportSettings, 'browser-agent-internal-monitoring'),
                        logsEndpoint: getEndpoint(intakeType, 'logs', replicaTransportSettings),
                        rumEndpoint: getEndpoint(intakeType, 'rum', replicaTransportSettings)
                    };
                }
            }
            return configuration;
        }

        function getIntakeType(site, userConfiguration) {
            return !userConfiguration.useAlternateIntakeDomains && Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["includes"])(CLASSIC_ALLOWED_SITES, site) ? 'classic' : 'alternate';
        }

        function getIntakeUrls(intakeType, settings, withReplica) {
            if (settings.proxyHost) {
                return ["https://" + settings.proxyHost + "/v1/input/"];
            }
            var sites = [settings.site];
            if (settings.buildMode === _boot_init__WEBPACK_IMPORTED_MODULE_1__["BuildMode"].STAGING && withReplica) {
                sites.push(INTAKE_SITE[Datacenter.US]);
            }
            var urls = [];
            var endpointTypes = Object.keys(ENDPOINTS[intakeType]);
            for (var _i = 0, sites_1 = sites; _i < sites_1.length; _i++) {
                var site = sites_1[_i];
                for (var _a = 0, endpointTypes_1 = endpointTypes; _a < endpointTypes_1.length; _a++) {
                    var endpointType = endpointTypes_1[_a];
                    urls.push("https://" + getHost(intakeType, endpointType, site) + "/v1/input/");
                }
            }
            return urls;
        }

        function getHost(intakeType, endpointType, site) {
            return (intakeType === 'classic' && getClassicHost(endpointType, site)) || getAlternateHost(endpointType, site);
        }

        function getClassicHost(endpointType, site) {
            var endpoint = ENDPOINTS.classic[endpointType];
            return endpoint && endpoint + "-http-intake.logs." + site;
        }

        function getAlternateHost(endpointType, site) {
            var endpoint = ENDPOINTS.alternate[endpointType];
            var domainParts = site.split('.');
            var extension = domainParts.pop();
            var suffix = domainParts.join('-') + "." + extension;
            return endpoint + ".browser-intake-" + suffix;
        }

        function getEndpoint(intakeType, endpointType, settings, source) {
            var tags = "sdk_version:" + settings.sdkVersion +
                ("" + (settings.env ? ",env:" + settings.env : '')) +
                ("" + (settings.service ? ",service:" + settings.service : '')) +
                ("" + (settings.version ? ",version:" + settings.version : ''));
            var datadogHost = getHost(intakeType, endpointType, settings.site);
            var host = settings.proxyHost ? settings.proxyHost : datadogHost;
            var proxyParameter = settings.proxyHost ? "ddhost=" + datadogHost + "&" : '';
            var applicationIdParameter = settings.applicationId ? "_dd.application_id=" + settings.applicationId + "&" : '';
            var parameters = "" + applicationIdParameter + proxyParameter + "ddsource=" + (source || 'browser') + "&ddtags=" + encodeURIComponent(tags);
            return "https://" + host + "/v1/input/" + settings.clientToken + "?" + parameters;
        }


        /***/
    }),

    /***/ "../core/src/index.ts":
    /*!****************************!*\
  !*** ../core/src/index.ts ***!
  \****************************/
    /*! exports provided: DEFAULT_CONFIGURATION, buildCookieOptions, startAutomaticErrorCollection, computeStackTrace, BuildMode, defineGlobal, makePublicApi, commonInit, checkCookiesAuthorized, checkIsNotLocalFile, monitored, monitor, callMonitored, addMonitoringMessage, addErrorToMonitoringBatch, setDebugMode, Observable, startSessionManagement, SESSION_TIME_OUT_DELAY, SESSION_COOKIE_NAME, stopSessionManagement, HttpRequest, Batch, normalizeUrl, isValidUrl, haveSameOrigin, getOrigin, getPathName, getSearch, getHash, buildUrl, ONE_SECOND, ONE_MINUTE, ONE_HOUR, ONE_KILO_BYTE, DOM_EVENT, ResourceType, RequestType, throttle, assign, generateUUID, performDraw, round, msToNs, noop, jsonStringify, includes, find, isPercentage, isNumber, getRelativeTime, getTimestamp, getNavigationStart, objectValues, objectEntries, isEmptyObject, mapValues, getGlobalObject, getLocationOrigin, getLinkElementOrigin, findCommaSeparatedValue, safeTruncate, addEventListener, addEventListeners, ErrorSource, formatUnknownError, combine, deepClone, areCookiesAuthorized, getCookie, setCookie, COOKIE_ACCESS_DELAY, startXhrProxy, resetXhrProxy, startFetchProxy, resetFetchProxy, BoundedBuffer, createContextManager, limitModification, SPEC_ENDPOINTS, isSafari, isFirefox, isIE, clearAllCookies, stubFetch, createNewEvent, stubXhr, withXhr, setPageVisibility, restorePageVisibility, Datacenter */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var _domain_configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domain/configuration */ "../core/src/domain/configuration.ts");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIGURATION", function () {
            return _domain_configuration__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CONFIGURATION"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "buildCookieOptions", function () {
            return _domain_configuration__WEBPACK_IMPORTED_MODULE_0__["buildCookieOptions"];
        });

        /* harmony import */
        var _domain_automaticErrorCollection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain/automaticErrorCollection */ "../core/src/domain/automaticErrorCollection.ts");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "startAutomaticErrorCollection", function () {
            return _domain_automaticErrorCollection__WEBPACK_IMPORTED_MODULE_1__["startAutomaticErrorCollection"];
        });

        /* harmony import */
        var _domain_tracekit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domain/tracekit */ "../core/src/domain/tracekit.ts");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "computeStackTrace", function () {
            return _domain_tracekit__WEBPACK_IMPORTED_MODULE_2__["computeStackTrace"];
        });

        /* harmony import */
        var _boot_init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boot/init */ "../core/src/boot/init.ts");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "BuildMode", function () {
            return _boot_init__WEBPACK_IMPORTED_MODULE_3__["BuildMode"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "defineGlobal", function () {
            return _boot_init__WEBPACK_IMPORTED_MODULE_3__["defineGlobal"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "makePublicApi", function () {
            return _boot_init__WEBPACK_IMPORTED_MODULE_3__["makePublicApi"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "commonInit", function () {
            return _boot_init__WEBPACK_IMPORTED_MODULE_3__["commonInit"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "checkCookiesAuthorized", function () {
            return _boot_init__WEBPACK_IMPORTED_MODULE_3__["checkCookiesAuthorized"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "checkIsNotLocalFile", function () {
            return _boot_init__WEBPACK_IMPORTED_MODULE_3__["checkIsNotLocalFile"];
        });

        /* harmony import */
        var _domain_internalMonitoring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domain/internalMonitoring */ "../core/src/domain/internalMonitoring.ts");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "monitored", function () {
            return _domain_internalMonitoring__WEBPACK_IMPORTED_MODULE_4__["monitored"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "monitor", function () {
            return _domain_internalMonitoring__WEBPACK_IMPORTED_MODULE_4__["monitor"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "callMonitored", function () {
            return _domain_internalMonitoring__WEBPACK_IMPORTED_MODULE_4__["callMonitored"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "addMonitoringMessage", function () {
            return _domain_internalMonitoring__WEBPACK_IMPORTED_MODULE_4__["addMonitoringMessage"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "addErrorToMonitoringBatch", function () {
            return _domain_internalMonitoring__WEBPACK_IMPORTED_MODULE_4__["addErrorToMonitoringBatch"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "setDebugMode", function () {
            return _domain_internalMonitoring__WEBPACK_IMPORTED_MODULE_4__["setDebugMode"];
        });

        /* harmony import */
        var _tools_observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools/observable */ "../core/src/tools/observable.ts");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "Observable", function () {
            return _tools_observable__WEBPACK_IMPORTED_MODULE_5__["Observable"];
        });

        /* harmony import */
        var _domain_sessionManagement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domain/sessionManagement */ "../core/src/domain/sessionManagement.ts");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "startSessionManagement", function () {
            return _domain_sessionManagement__WEBPACK_IMPORTED_MODULE_6__["startSessionManagement"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "SESSION_TIME_OUT_DELAY", function () {
            return _domain_sessionManagement__WEBPACK_IMPORTED_MODULE_6__["SESSION_TIME_OUT_DELAY"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "SESSION_COOKIE_NAME", function () {
            return _domain_sessionManagement__WEBPACK_IMPORTED_MODULE_6__["SESSION_COOKIE_NAME"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "stopSessionManagement", function () {
            return _domain_sessionManagement__WEBPACK_IMPORTED_MODULE_6__["stopSessionManagement"];
        });

        /* harmony import */
        var _transport_transport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transport/transport */ "../core/src/transport/transport.ts");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "HttpRequest", function () {
            return _transport_transport__WEBPACK_IMPORTED_MODULE_7__["HttpRequest"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "Batch", function () {
            return _transport_transport__WEBPACK_IMPORTED_MODULE_7__["Batch"];
        });

        /* harmony import */
        var _tools_urlPolyfill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tools/urlPolyfill */ "../core/src/tools/urlPolyfill.ts");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "normalizeUrl", function () {
            return _tools_urlPolyfill__WEBPACK_IMPORTED_MODULE_8__["normalizeUrl"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "isValidUrl", function () {
            return _tools_urlPolyfill__WEBPACK_IMPORTED_MODULE_8__["isValidUrl"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "haveSameOrigin", function () {
            return _tools_urlPolyfill__WEBPACK_IMPORTED_MODULE_8__["haveSameOrigin"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "getOrigin", function () {
            return _tools_urlPolyfill__WEBPACK_IMPORTED_MODULE_8__["getOrigin"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "getPathName", function () {
            return _tools_urlPolyfill__WEBPACK_IMPORTED_MODULE_8__["getPathName"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "getSearch", function () {
            return _tools_urlPolyfill__WEBPACK_IMPORTED_MODULE_8__["getSearch"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "getHash", function () {
            return _tools_urlPolyfill__WEBPACK_IMPORTED_MODULE_8__["getHash"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "buildUrl", function () {
            return _tools_urlPolyfill__WEBPACK_IMPORTED_MODULE_8__["buildUrl"];
        });

        /* harmony import */
        var _tools_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tools/utils */ "../core/src/tools/utils.ts");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "ONE_SECOND", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["ONE_SECOND"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "ONE_MINUTE", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["ONE_MINUTE"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "ONE_HOUR", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["ONE_HOUR"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "ONE_KILO_BYTE", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["ONE_KILO_BYTE"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "DOM_EVENT", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["DOM_EVENT"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "ResourceType", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["ResourceType"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "RequestType", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["RequestType"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "throttle", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["throttle"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "assign", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["assign"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "generateUUID", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["generateUUID"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "performDraw", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["performDraw"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "round", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["round"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "msToNs", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["msToNs"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "noop", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["noop"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "jsonStringify", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["jsonStringify"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "includes", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["includes"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "find", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["find"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "isPercentage", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["isPercentage"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "isNumber", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["isNumber"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "getRelativeTime", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["getRelativeTime"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "getTimestamp", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["getTimestamp"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "getNavigationStart", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["getNavigationStart"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "objectValues", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["objectValues"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "objectEntries", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["objectEntries"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "isEmptyObject", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["isEmptyObject"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "mapValues", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["mapValues"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "getGlobalObject", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["getGlobalObject"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "getLocationOrigin", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["getLocationOrigin"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "getLinkElementOrigin", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["getLinkElementOrigin"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "findCommaSeparatedValue", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["findCommaSeparatedValue"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "safeTruncate", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["safeTruncate"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "addEventListener", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["addEventListener"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "addEventListeners", function () {
            return _tools_utils__WEBPACK_IMPORTED_MODULE_9__["addEventListeners"];
        });

        /* harmony import */
        var _tools_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tools/error */ "../core/src/tools/error.ts");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "ErrorSource", function () {
            return _tools_error__WEBPACK_IMPORTED_MODULE_10__["ErrorSource"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "formatUnknownError", function () {
            return _tools_error__WEBPACK_IMPORTED_MODULE_10__["formatUnknownError"];
        });

        /* harmony import */
        var _tools_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tools/context */ "../core/src/tools/context.ts");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "combine", function () {
            return _tools_context__WEBPACK_IMPORTED_MODULE_11__["combine"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "deepClone", function () {
            return _tools_context__WEBPACK_IMPORTED_MODULE_11__["deepClone"];
        });

        /* harmony import */
        var _browser_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./browser/cookie */ "../core/src/browser/cookie.ts");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "areCookiesAuthorized", function () {
            return _browser_cookie__WEBPACK_IMPORTED_MODULE_12__["areCookiesAuthorized"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "getCookie", function () {
            return _browser_cookie__WEBPACK_IMPORTED_MODULE_12__["getCookie"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "setCookie", function () {
            return _browser_cookie__WEBPACK_IMPORTED_MODULE_12__["setCookie"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "COOKIE_ACCESS_DELAY", function () {
            return _browser_cookie__WEBPACK_IMPORTED_MODULE_12__["COOKIE_ACCESS_DELAY"];
        });

        /* harmony import */
        var _browser_xhrProxy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./browser/xhrProxy */ "../core/src/browser/xhrProxy.ts");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "startXhrProxy", function () {
            return _browser_xhrProxy__WEBPACK_IMPORTED_MODULE_13__["startXhrProxy"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "resetXhrProxy", function () {
            return _browser_xhrProxy__WEBPACK_IMPORTED_MODULE_13__["resetXhrProxy"];
        });

        /* harmony import */
        var _browser_fetchProxy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./browser/fetchProxy */ "../core/src/browser/fetchProxy.ts");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "startFetchProxy", function () {
            return _browser_fetchProxy__WEBPACK_IMPORTED_MODULE_14__["startFetchProxy"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "resetFetchProxy", function () {
            return _browser_fetchProxy__WEBPACK_IMPORTED_MODULE_14__["resetFetchProxy"];
        });

        /* harmony import */
        var _tools_boundedBuffer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tools/boundedBuffer */ "../core/src/tools/boundedBuffer.ts");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "BoundedBuffer", function () {
            return _tools_boundedBuffer__WEBPACK_IMPORTED_MODULE_15__["BoundedBuffer"];
        });

        /* harmony import */
        var _tools_contextManager__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tools/contextManager */ "../core/src/tools/contextManager.ts");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "createContextManager", function () {
            return _tools_contextManager__WEBPACK_IMPORTED_MODULE_16__["createContextManager"];
        });

        /* harmony import */
        var _tools_limitModification__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tools/limitModification */ "../core/src/tools/limitModification.ts");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "limitModification", function () {
            return _tools_limitModification__WEBPACK_IMPORTED_MODULE_17__["limitModification"];
        });

        /* harmony import */
        var _tools_specHelper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tools/specHelper */ "../core/src/tools/specHelper.ts");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "SPEC_ENDPOINTS", function () {
            return _tools_specHelper__WEBPACK_IMPORTED_MODULE_18__["SPEC_ENDPOINTS"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "isSafari", function () {
            return _tools_specHelper__WEBPACK_IMPORTED_MODULE_18__["isSafari"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "isFirefox", function () {
            return _tools_specHelper__WEBPACK_IMPORTED_MODULE_18__["isFirefox"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "isIE", function () {
            return _tools_specHelper__WEBPACK_IMPORTED_MODULE_18__["isIE"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "clearAllCookies", function () {
            return _tools_specHelper__WEBPACK_IMPORTED_MODULE_18__["clearAllCookies"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "stubFetch", function () {
            return _tools_specHelper__WEBPACK_IMPORTED_MODULE_18__["stubFetch"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "createNewEvent", function () {
            return _tools_specHelper__WEBPACK_IMPORTED_MODULE_18__["createNewEvent"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "stubXhr", function () {
            return _tools_specHelper__WEBPACK_IMPORTED_MODULE_18__["stubXhr"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "withXhr", function () {
            return _tools_specHelper__WEBPACK_IMPORTED_MODULE_18__["withXhr"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "setPageVisibility", function () {
            return _tools_specHelper__WEBPACK_IMPORTED_MODULE_18__["setPageVisibility"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "restorePageVisibility", function () {
            return _tools_specHelper__WEBPACK_IMPORTED_MODULE_18__["restorePageVisibility"];
        });

        /* harmony import */
        var _domain_transportConfiguration__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./domain/transportConfiguration */ "../core/src/domain/transportConfiguration.ts");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "Datacenter", function () {
            return _domain_transportConfiguration__WEBPACK_IMPORTED_MODULE_19__["Datacenter"];
        });


        /***/
    }),

    /***/ "../core/src/tools/boundedBuffer.ts":
    /*!******************************************!*\
  !*** ../core/src/tools/boundedBuffer.ts ***!
  \******************************************/
    /*! exports provided: BoundedBuffer */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "BoundedBuffer", function () {
            return BoundedBuffer;
        });
        var DEFAULT_LIMIT = 10000;
        var BoundedBuffer = /** @class */ (function () {
            function BoundedBuffer(limit) {
                if (limit === void 0) {
                    limit = DEFAULT_LIMIT;
                }
                this.limit = limit;
                this.buffer = [];
            }

            BoundedBuffer.prototype.add = function (item) {
                var length = this.buffer.push(item);
                if (length > this.limit) {
                    this.buffer.splice(0, 1);
                }
            };
            BoundedBuffer.prototype.drain = function (fn) {
                this.buffer.forEach(function (item) {
                    return fn(item);
                });
                this.buffer.length = 0;
            };
            return BoundedBuffer;
        }());


        /***/
    }),

    /***/ "../core/src/tools/context.ts":
    /*!************************************!*\
  !*** ../core/src/tools/context.ts ***!
  \************************************/
    /*! exports provided: combine, deepClone, createCircularReferenceChecker, mergeInto */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "combine", function () {
            return combine;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "deepClone", function () {
            return deepClone;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "createCircularReferenceChecker", function () {
            return createCircularReferenceChecker;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "mergeInto", function () {
            return mergeInto;
        });
        var isContextArray = function (value) {
            return Array.isArray(value);
        };
        var isContext = function (value) {
            return !Array.isArray(value) && typeof value === 'object' && value !== null;
        };

        function combine() {
            var sources = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                sources[_i] = arguments[_i];
            }
            var destination;
            for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
                var source = sources_1[_a];
                // Ignore any undefined or null sources.
                if (source === undefined || source === null) {
                    continue;
                }
                destination = mergeInto(destination, source, createCircularReferenceChecker());
            }
            return destination;
        }

        /*
 * Performs a deep clone of objects and arrays.
 * - Circular references are replaced by 'undefined'
 */
        function deepClone(context) {
            return mergeInto(undefined, context, createCircularReferenceChecker());
        }

        function createCircularReferenceChecker() {
            if (typeof WeakSet !== 'undefined') {
                var set_1 = new WeakSet();
                return {
                    hasAlreadyBeenSeen: function (value) {
                        var has = set_1.has(value);
                        if (!has) {
                            set_1.add(value);
                        }
                        return has;
                    }
                };
            }
            var array = [];
            return {
                hasAlreadyBeenSeen: function (value) {
                    var has = array.indexOf(value) >= 0;
                    if (!has) {
                        array.push(value);
                    }
                    return has;
                }
            };
        }

        /**
         * Iterate over 'source' and affect its subvalues into 'destination', recursively.  If the 'source'
         * and 'destination' can't be merged, return 'source'.
         */
        function mergeInto(destination, source, circularReferenceChecker) {
            // Ignore the 'source' if it is undefined
            if (source === undefined) {
                return destination;
            }
            // If the 'source' is not an object or array, it can't be merged with 'destination' in any way, so
            // return it directly.
            if (!isContext(source) && !isContextArray(source)) {
                return source;
            }
            // Return 'undefined' if we already iterated over this 'source' to avoid infinite recursion
            if (circularReferenceChecker.hasAlreadyBeenSeen(source)) {
                return undefined;
            }
            // 'source' and 'destination' are objects, merge them together
            if (isContext(source) && (destination === undefined || isContext(destination))) {
                var finalDestination = destination || {};
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        finalDestination[key] = mergeInto(finalDestination[key], source[key], circularReferenceChecker);
                    }
                }
                return finalDestination;
            }
            // 'source' and 'destination' are arrays, merge them together
            if (isContextArray(source) && (destination === undefined || isContextArray(destination))) {
                var finalDestination = destination || [];
                finalDestination.length = Math.max(finalDestination.length, source.length);
                for (var index = 0; index < source.length; index += 1) {
                    finalDestination[index] = mergeInto(finalDestination[index], source[index], circularReferenceChecker);
                }
                return finalDestination;
            }
            // The destination in not an array nor an object, so we can't merge it
            return source;
        }


        /***/
    }),

    /***/ "../core/src/tools/contextManager.ts":
    /*!*******************************************!*\
  !*** ../core/src/tools/contextManager.ts ***!
  \*******************************************/
    /*! exports provided: createContextManager */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "createContextManager", function () {
            return createContextManager;
        });

        function createContextManager() {
            var context = {};
            return {
                get: function () {
                    return context;
                },
                add: function (key, value) {
                    context[key] = value;
                },
                remove: function (key) {
                    delete context[key];
                },
                set: function (newContext) {
                    context = newContext;
                }
            };
        }


        /***/
    }),

    /***/ "../core/src/tools/error.ts":
    /*!**********************************!*\
  !*** ../core/src/tools/error.ts ***!
  \**********************************/
    /*! exports provided: ErrorSource, formatUnknownError, toStackTraceString */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ErrorSource", function () {
            return ErrorSource;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "formatUnknownError", function () {
            return formatUnknownError;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "toStackTraceString", function () {
            return toStackTraceString;
        });
        /* harmony import */
        var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../core/src/tools/utils.ts");

        var ErrorSource = {
            AGENT: 'agent',
            CONSOLE: 'console',
            CUSTOM: 'custom',
            LOGGER: 'logger',
            NETWORK: 'network',
            SOURCE: 'source'
        };

        function formatUnknownError(stackTrace, errorObject, nonErrorPrefix) {
            if (!stackTrace || (stackTrace.message === undefined && !(errorObject instanceof Error))) {
                return {
                    message: nonErrorPrefix + " " + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["jsonStringify"])(errorObject),
                    stack: 'No stack, consider using an instance of Error',
                    type: stackTrace && stackTrace.name
                };
            }
            return {
                message: stackTrace.message || 'Empty message',
                stack: toStackTraceString(stackTrace),
                type: stackTrace.name
            };
        }

        function toStackTraceString(stack) {
            var result = (stack.name || 'Error') + ": " + stack.message;
            stack.stack.forEach(function (frame) {
                var func = frame.func === '?' ? '<anonymous>' : frame.func;
                var args = frame.args && frame.args.length > 0 ? "(" + frame.args.join(', ') + ")" : '';
                var line = frame.line ? ":" + frame.line : '';
                var column = frame.line && frame.column ? ":" + frame.column : '';
                result += "\n  at " + func + args + " @ " + frame.url + line + column;
            });
            return result;
        }


        /***/
    }),

    /***/ "../core/src/tools/limitModification.ts":
    /*!**********************************************!*\
  !*** ../core/src/tools/limitModification.ts ***!
  \**********************************************/
    /*! exports provided: limitModification */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "limitModification", function () {
            return limitModification;
        });
        /* harmony import */
        var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "../core/src/tools/context.ts");

        /**
         * Current limitations:
         * - field path do not support array, 'a.b.c' only
         * - modifiable fields type must be string
         */
        function limitModification(object, modifiableFieldPaths, modifier) {
            var clone = Object(_context__WEBPACK_IMPORTED_MODULE_0__["deepClone"])(object);
            try {
                modifier(clone);
            } catch (e) {
                console.error(e);
                return object;
            }
            modifiableFieldPaths.forEach(function (path) {
                var originalValue = get(object, path);
                var newValue = get(clone, path);
                if (typeof originalValue === 'string' && typeof newValue === 'string') {
                    set(object, path, newValue);
                }
            });
            return object;
        }

        function get(object, path) {
            var current = object;
            for (var _i = 0, _a = path.split('.'); _i < _a.length; _i++) {
                var field = _a[_i];
                if (!isValidObjectContaining(current, field)) {
                    return;
                }
                current = current[field];
            }
            return current;
        }

        function set(object, path, value) {
            var current = object;
            var fields = path.split('.');
            for (var i = 0; i < fields.length; i += 1) {
                var field = fields[i];
                if (!isValidObjectContaining(current, field)) {
                    return;
                }
                if (i !== fields.length - 1) {
                    current = current[field];
                } else {
                    current[field] = value;
                }
            }
        }

        function isValidObjectContaining(object, field) {
            return typeof object === 'object' && object !== null && field in object;
        }


        /***/
    }),

    /***/ "../core/src/tools/observable.ts":
    /*!***************************************!*\
  !*** ../core/src/tools/observable.ts ***!
  \***************************************/
    /*! exports provided: Observable */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "Observable", function () {
            return Observable;
        });
        var Observable = /** @class */ (function () {
            function Observable() {
                this.observers = [];
            }

            Observable.prototype.subscribe = function (f) {
                this.observers.push(f);
            };
            Observable.prototype.notify = function (data) {
                this.observers.forEach(function (observer) {
                    return observer(data);
                });
            };
            return Observable;
        }());


        /***/
    }),

    /***/ "../core/src/tools/specHelper.ts":
    /*!***************************************!*\
  !*** ../core/src/tools/specHelper.ts ***!
  \***************************************/
    /*! exports provided: SPEC_ENDPOINTS, isSafari, isFirefox, isIE, clearAllCookies, stubFetch, createNewEvent, stubXhr, withXhr, setPageVisibility, restorePageVisibility */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SPEC_ENDPOINTS", function () {
            return SPEC_ENDPOINTS;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "isSafari", function () {
            return isSafari;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "isFirefox", function () {
            return isFirefox;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "isIE", function () {
            return isIE;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "clearAllCookies", function () {
            return clearAllCookies;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "stubFetch", function () {
            return stubFetch;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "createNewEvent", function () {
            return createNewEvent;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "stubXhr", function () {
            return stubXhr;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "withXhr", function () {
            return withXhr;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "setPageVisibility", function () {
            return setPageVisibility;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "restorePageVisibility", function () {
            return restorePageVisibility;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../core/src/tools/utils.ts");


        var SPEC_ENDPOINTS = {
            internalMonitoringEndpoint: 'https://monitoring-intake.com/v1/input/abcde?foo=bar',
            logsEndpoint: 'https://logs-intake.com/v1/input/abcde?foo=bar',
            rumEndpoint: 'https://rum-intake.com/v1/input/abcde?foo=bar',
            traceEndpoint: 'https://trace-intake.com/v1/input/abcde?foo=bar',
            isIntakeUrl: function (url) {
                var intakeUrls = [
                    'https://monitoring-intake.com/v1/input/',
                    'https://logs-intake.com/v1/input/',
                    'https://rum-intake.com/v1/input/',
                    'https://trace-intake.com/v1/input/'
                ];
                return intakeUrls.some(function (intakeUrl) {
                    return url.indexOf(intakeUrl) === 0;
                });
            }
        };

        function isSafari() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        }

        function isFirefox() {
            return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        }

        function isIE() {
            var hasIEAgent = /Trident.*rv\:11\./.test(navigator.userAgent);
            return navigator.userAgent.indexOf('MSIE ') > 0 || hasIEAgent;
        }

        function clearAllCookies() {
            document.cookie.split(';').forEach(function (c) {
                document.cookie = c.replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/;samesite=strict");
            });
        }

        function stubFetch() {
            var originalFetch = window.fetch;
            var allFetchCompleteCallback = _utils__WEBPACK_IMPORTED_MODULE_1__["noop"];
            var pendingRequests = 0;

            function onRequestEnd() {
                pendingRequests -= 1;
                if (pendingRequests === 0) {
                    setTimeout(function () {
                        return allFetchCompleteCallback();
                    });
                }
            }

            window.fetch = (function () {
                pendingRequests += 1;
                var resolve;
                var reject;
                var promise = new Promise(function (res, rej) {
                    resolve = res;
                    reject = rej;
                });
                promise.resolveWith = function (response) {
                    resolve(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, response), {
                        clone: function () {
                            var cloned = {
                                text: function () {
                                    if (response.responseTextError) {
                                        return Promise.reject(response.responseTextError);
                                    }
                                    return Promise.resolve(response.responseText);
                                }
                            };
                            return cloned;
                        }
                    }));
                    onRequestEnd();
                };
                promise.rejectWith = function (error) {
                    reject(error);
                    onRequestEnd();
                };
                return promise;
            });
            return {
                whenAllComplete: function (callback) {
                    allFetchCompleteCallback = callback;
                },
                reset: function () {
                    window.fetch = originalFetch;
                    allFetchCompleteCallback = _utils__WEBPACK_IMPORTED_MODULE_1__["noop"];
                }
            };
        }

        var StubXhr = /** @class */ (function () {
            function StubXhr() {
                this.response = undefined;
                this.status = undefined;
                this.readyState = XMLHttpRequest.UNSENT;
                this.onreadystatechange = _utils__WEBPACK_IMPORTED_MODULE_1__["noop"];
                this.fakeEventTarget = document.createElement('div');
            }

            /* eslint-disable @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars */
            StubXhr.prototype.open = function (method, url) {
            };
            StubXhr.prototype.send = function () {
            };
            /* eslint-enable @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars */
            StubXhr.prototype.abort = function () {
                this.status = 0;
            };
            StubXhr.prototype.complete = function (status, response) {
                this.response = response;
                this.status = status;
                this.readyState = XMLHttpRequest.DONE;
                this.onreadystatechange();
                if (status >= 200 && status < 500) {
                    this.dispatchEvent('load');
                }
                if (status >= 500) {
                    this.dispatchEvent('error');
                }
                this.dispatchEvent('loadend');
            };
            StubXhr.prototype.addEventListener = function (name, callback) {
                this.fakeEventTarget.addEventListener(name, callback);
            };
            StubXhr.prototype.dispatchEvent = function (name) {
                this.fakeEventTarget.dispatchEvent(createNewEvent(name));
            };
            return StubXhr;
        }());

        function createNewEvent(eventName, properties) {
            if (properties === void 0) {
                properties = {};
            }
            var event;
            if (typeof Event === 'function') {
                event = new Event(eventName);
            } else {
                event = document.createEvent('Event');
                event.initEvent(eventName, true, true);
            }
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["objectEntries"])(properties).forEach(function (_a) {
                var name = _a[0], value = _a[1];
                // Setting values directly or with a `value` descriptor seems unsupported in IE11
                Object.defineProperty(event, name, {
                    get: function () {
                        return value;
                    }
                });
            });
            return event;
        }

        function stubXhr() {
            var originalXhr = XMLHttpRequest;
            XMLHttpRequest = StubXhr;
            return {
                reset: function () {
                    XMLHttpRequest = originalXhr;
                }
            };
        }

        function withXhr(_a) {
            var setup = _a.setup, onComplete = _a.onComplete;
            var xhr = new XMLHttpRequest();
            xhr.addEventListener('loadend', function () {
                setTimeout(function () {
                    onComplete(xhr);
                });
            });
            setup(xhr);
        }

        function setPageVisibility(visibility) {
            Object.defineProperty(document, 'visibilityState', {
                get: function () {
                    return visibility;
                },
                configurable: true
            });
        }

        function restorePageVisibility() {
            delete document.visibilityState;
        }


        /***/
    }),

    /***/ "../core/src/tools/urlPolyfill.ts":
    /*!****************************************!*\
  !*** ../core/src/tools/urlPolyfill.ts ***!
  \****************************************/
    /*! exports provided: normalizeUrl, isValidUrl, haveSameOrigin, getOrigin, getPathName, getSearch, getHash, buildUrl */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "normalizeUrl", function () {
            return normalizeUrl;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "isValidUrl", function () {
            return isValidUrl;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "haveSameOrigin", function () {
            return haveSameOrigin;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getOrigin", function () {
            return getOrigin;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getPathName", function () {
            return getPathName;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getSearch", function () {
            return getSearch;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getHash", function () {
            return getHash;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "buildUrl", function () {
            return buildUrl;
        });
        /* harmony import */
        var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../core/src/tools/utils.ts");

        function normalizeUrl(url) {
            return buildUrl(url, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getLocationOrigin"])()).href;
        }

        function isValidUrl(url) {
            try {
                return !!buildUrl(url);
            } catch (_a) {
                return false;
            }
        }

        function haveSameOrigin(url1, url2) {
            return getOrigin(url1) === getOrigin(url2);
        }

        function getOrigin(url) {
            return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getLinkElementOrigin"])(buildUrl(url));
        }

        function getPathName(url) {
            var pathname = buildUrl(url).pathname;
            return pathname[0] === '/' ? pathname : "/" + pathname;
        }

        function getSearch(url) {
            return buildUrl(url).search;
        }

        function getHash(url) {
            return buildUrl(url).hash;
        }

        function buildUrl(url, base) {
            if (checkURLSupported()) {
                return base !== undefined ? new URL(url, base) : new URL(url);
            }
            if (base === undefined && !/:/.test(url)) {
                throw new Error("Invalid URL: '" + url + "'");
            }
            var doc = document;
            var anchorElement = doc.createElement('a');
            if (base !== undefined) {
                doc = document.implementation.createHTMLDocument('');
                var baseElement = doc.createElement('base');
                baseElement.href = base;
                doc.head.appendChild(baseElement);
                doc.body.appendChild(anchorElement);
            }
            anchorElement.href = url;
            return anchorElement;
        }

        var isURLSupported;

        function checkURLSupported() {
            if (isURLSupported !== undefined) {
                return isURLSupported;
            }
            try {
                var url = new URL('http://test/path');
                isURLSupported = url.href === 'http://test/path';
                return isURLSupported;
            } catch (_a) {
                isURLSupported = false;
            }
            return isURLSupported;
        }


        /***/
    }),

    /***/ "../core/src/tools/utils.ts":
    /*!**********************************!*\
  !*** ../core/src/tools/utils.ts ***!
  \**********************************/
    /*! exports provided: ONE_SECOND, ONE_MINUTE, ONE_HOUR, ONE_KILO_BYTE, DOM_EVENT, ResourceType, RequestType, throttle, assign, generateUUID, performDraw, round, msToNs, noop, jsonStringify, includes, find, isPercentage, isNumber, getRelativeTime, getTimestamp, getNavigationStart, objectValues, objectEntries, isEmptyObject, mapValues, getGlobalObject, getLocationOrigin, getLinkElementOrigin, findCommaSeparatedValue, safeTruncate, addEventListener, addEventListeners */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ONE_SECOND", function () {
            return ONE_SECOND;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ONE_MINUTE", function () {
            return ONE_MINUTE;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ONE_HOUR", function () {
            return ONE_HOUR;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ONE_KILO_BYTE", function () {
            return ONE_KILO_BYTE;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "DOM_EVENT", function () {
            return DOM_EVENT;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ResourceType", function () {
            return ResourceType;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RequestType", function () {
            return RequestType;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "throttle", function () {
            return throttle;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "assign", function () {
            return assign;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "generateUUID", function () {
            return generateUUID;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "performDraw", function () {
            return performDraw;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "round", function () {
            return round;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "msToNs", function () {
            return msToNs;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "noop", function () {
            return noop;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "jsonStringify", function () {
            return jsonStringify;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "includes", function () {
            return includes;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "find", function () {
            return find;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "isPercentage", function () {
            return isPercentage;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "isNumber", function () {
            return isNumber;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getRelativeTime", function () {
            return getRelativeTime;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getTimestamp", function () {
            return getTimestamp;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getNavigationStart", function () {
            return getNavigationStart;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "objectValues", function () {
            return objectValues;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "objectEntries", function () {
            return objectEntries;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "isEmptyObject", function () {
            return isEmptyObject;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "mapValues", function () {
            return mapValues;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getGlobalObject", function () {
            return getGlobalObject;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getLocationOrigin", function () {
            return getLocationOrigin;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getLinkElementOrigin", function () {
            return getLinkElementOrigin;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "findCommaSeparatedValue", function () {
            return findCommaSeparatedValue;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "safeTruncate", function () {
            return safeTruncate;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "addEventListener", function () {
            return addEventListener;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "addEventListeners", function () {
            return addEventListeners;
        });
        /* harmony import */
        var _domain_internalMonitoring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/internalMonitoring */ "../core/src/domain/internalMonitoring.ts");

        var ONE_SECOND = 1000;
        var ONE_MINUTE = 60 * ONE_SECOND;
        var ONE_HOUR = 60 * ONE_MINUTE;
        var ONE_KILO_BYTE = 1024;
        var DOM_EVENT;
        (function (DOM_EVENT) {
            DOM_EVENT["BEFORE_UNLOAD"] = "beforeunload";
            DOM_EVENT["CLICK"] = "click";
            DOM_EVENT["KEY_DOWN"] = "keydown";
            DOM_EVENT["LOAD"] = "load";
            DOM_EVENT["POP_STATE"] = "popstate";
            DOM_EVENT["SCROLL"] = "scroll";
            DOM_EVENT["TOUCH_START"] = "touchstart";
            DOM_EVENT["VISIBILITY_CHANGE"] = "visibilitychange";
            DOM_EVENT["DOM_CONTENT_LOADED"] = "DOMContentLoaded";
            DOM_EVENT["POINTER_DOWN"] = "pointerdown";
            DOM_EVENT["POINTER_UP"] = "pointerup";
            DOM_EVENT["POINTER_CANCEL"] = "pointercancel";
            DOM_EVENT["HASH_CHANGE"] = "hashchange";
            DOM_EVENT["PAGE_HIDE"] = "pagehide";
            DOM_EVENT["MOUSE_DOWN"] = "mousedown";
            DOM_EVENT["FOCUS"] = "focus";
            DOM_EVENT["BLUR"] = "blur";
        })(DOM_EVENT || (DOM_EVENT = {}));
        var ResourceType;
        (function (ResourceType) {
            ResourceType["DOCUMENT"] = "document";
            ResourceType["XHR"] = "xhr";
            ResourceType["BEACON"] = "beacon";
            ResourceType["FETCH"] = "fetch";
            ResourceType["CSS"] = "css";
            ResourceType["JS"] = "js";
            ResourceType["IMAGE"] = "image";
            ResourceType["FONT"] = "font";
            ResourceType["MEDIA"] = "media";
            ResourceType["OTHER"] = "other";
        })(ResourceType || (ResourceType = {}));
        var RequestType;
        (function (RequestType) {
            RequestType["FETCH"] = "fetch";
            RequestType["XHR"] = "xhr";
        })(RequestType || (RequestType = {}));

// use lodash API
        function throttle(fn, wait, options) {
            var needLeadingExecution = options && options.leading !== undefined ? options.leading : true;
            var needTrailingExecution = options && options.trailing !== undefined ? options.trailing : true;
            var inWaitPeriod = false;
            var hasPendingExecution = false;
            var pendingTimeoutId;
            return {
                throttled: function () {
                    if (inWaitPeriod) {
                        hasPendingExecution = true;
                        return;
                    }
                    if (needLeadingExecution) {
                        fn();
                    } else {
                        hasPendingExecution = true;
                    }
                    inWaitPeriod = true;
                    pendingTimeoutId = setTimeout(function () {
                        if (needTrailingExecution && hasPendingExecution) {
                            fn();
                        }
                        inWaitPeriod = false;
                        hasPendingExecution = false;
                    }, wait);
                },
                cancel: function () {
                    clearTimeout(pendingTimeoutId);
                    inWaitPeriod = false;
                    hasPendingExecution = false;
                }
            };
        }

        function assign(target) {
            var toAssign = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                toAssign[_i - 1] = arguments[_i];
            }
            toAssign.forEach(function (source) {
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            });
        }

        /**
         * UUID v4
         * from https://gist.github.com/jed/982883
         */
        function generateUUID(placeholder) {
            return placeholder
                ? // eslint-disable-next-line  no-bitwise
                (parseInt(placeholder, 10) ^ ((Math.random() * 16) >> (parseInt(placeholder, 10) / 4))).toString(16)
                : (1e7 + "-" + 1e3 + "-" + 4e3 + "-" + 8e3 + "-" + 1e11).replace(/[018]/g, generateUUID);
        }

        /**
         * Return true if the draw is successful
         * @param threshold between 0 and 100
         */
        function performDraw(threshold) {
            return threshold !== 0 && Math.random() * 100 <= threshold;
        }

        function round(num, decimals) {
            return +num.toFixed(decimals);
        }

        function msToNs(duration) {
            if (typeof duration !== 'number') {
                return duration;
            }
            return round(duration * 1e6, 0);
        }

// eslint-disable-next-line @typescript-eslint/no-empty-function
        function noop() {
        }

        /**
         * Custom implementation of JSON.stringify that ignores value.toJSON.
         * We need to do that because some sites badly override toJSON on certain objects.
         * Note this still supposes that JSON.stringify is correct...
         */
        function jsonStringify(value, replacer, space) {
            if (value === null || value === undefined) {
                return JSON.stringify(value);
            }
            var originalToJSON = [false, undefined];
            if (hasToJSON(value)) {
                // We need to add a flag and not rely on the truthiness of value.toJSON
                // because it can be set but undefined and that's actually significant.
                originalToJSON = [true, value.toJSON];
                delete value.toJSON;
            }
            var originalProtoToJSON = [false, undefined];
            var prototype;
            if (typeof value === 'object') {
                prototype = Object.getPrototypeOf(value);
                if (hasToJSON(prototype)) {
                    originalProtoToJSON = [true, prototype.toJSON];
                    delete prototype.toJSON;
                }
            }
            var result;
            try {
                result = JSON.stringify(value, replacer, space);
            } catch (_a) {
                result = '<error: unable to serialize object>';
            } finally {
                if (originalToJSON[0]) {
                    ;
                    value.toJSON = originalToJSON[1];
                }
                if (originalProtoToJSON[0]) {
                    ;
                    prototype.toJSON = originalProtoToJSON[1];
                }
            }
            return result;
        }

        function hasToJSON(value) {
            return typeof value === 'object' && value !== null && value.hasOwnProperty('toJSON');
        }

        function includes(candidate, search) {
            return candidate.indexOf(search) !== -1;
        }

        function find(array, predicate) {
            for (var i = 0; i < array.length; i += 1) {
                var item = array[i];
                if (predicate(item, i, array)) {
                    return item;
                }
            }
            return undefined;
        }

        function isPercentage(value) {
            return isNumber(value) && value >= 0 && value <= 100;
        }

        function isNumber(value) {
            return typeof value === 'number';
        }

        /**
         * Get the time since the navigation was started.
         *
         * Note: this does not use `performance.timeOrigin` because it doesn't seem to reflect the actual
         * time on which the navigation has started: it may be much farther in the past, at least in Firefox 71.
         * Related issue in Firefox: https://bugzilla.mozilla.org/show_bug.cgi?id=1429926
         */
        function getRelativeTime(timestamp) {
            return timestamp - getNavigationStart();
        }

        function getTimestamp(relativeTime) {
            return Math.floor(getNavigationStart() + relativeTime);
        }

        /**
         * Navigation start slightly change on some rare cases
         */
        var navigationStart;

        function getNavigationStart() {
            if (navigationStart === undefined) {
                navigationStart = performance.timing.navigationStart;
            }
            return navigationStart;
        }

        function objectValues(object) {
            var values = [];
            Object.keys(object).forEach(function (key) {
                values.push(object[key]);
            });
            return values;
        }

        function objectEntries(object) {
            return Object.keys(object).map(function (key) {
                return [key, object[key]];
            });
        }

        function isEmptyObject(object) {
            return Object.keys(object).length === 0;
        }

        function mapValues(object, fn) {
            var newObject = {};
            for (var _i = 0, _a = Object.keys(object); _i < _a.length; _i++) {
                var key = _a[_i];
                newObject[key] = fn(object[key]);
            }
            return newObject;
        }

        /**
         * inspired by https://mathiasbynens.be/notes/globalthis
         */
        function getGlobalObject() {
            if (typeof globalThis === 'object') {
                return globalThis;
            }
            Object.defineProperty(Object.prototype, '_dd_temp_', {
                get: function () {
                    return this;
                },
                configurable: true
            });
            // @ts-ignore _dd_temp is defined using defineProperty
            var globalObject = _dd_temp_;
            // @ts-ignore _dd_temp is defined using defineProperty
            delete Object.prototype._dd_temp_; // eslint-disable-line no-underscore-dangle
            if (typeof globalObject !== 'object') {
                // on safari _dd_temp_ is available on window but not globally
                // fallback on other browser globals check
                if (typeof self === 'object') {
                    globalObject = self;
                } else if (typeof window === 'object') {
                    globalObject = window;
                } else {
                    globalObject = {};
                }
            }
            return globalObject;
        }

        function getLocationOrigin() {
            return getLinkElementOrigin(window.location);
        }

        /**
         * IE fallback
         * https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/origin
         */
        function getLinkElementOrigin(element) {
            if (element.origin) {
                return element.origin;
            }
            var sanitizedHost = element.host.replace(/(:80|:443)$/, '');
            return element.protocol + "//" + sanitizedHost;
        }

        function findCommaSeparatedValue(rawString, name) {
            var regex = new RegExp("(?:^|;)\\s*" + name + "\\s*=\\s*([^;]+)");
            var matches = regex.exec(rawString);
            return matches ? matches[1] : undefined;
        }

        function safeTruncate(candidate, length) {
            var lastChar = candidate.charCodeAt(length - 1);
            // check if it is the high part of a surrogate pair
            if (lastChar >= 0xd800 && lastChar <= 0xdbff) {
                return candidate.slice(0, length + 1);
            }
            return candidate.slice(0, length);
        }

        /**
         * Add an event listener to an event emitter object (Window, Element, mock object...).  This provides
         * a few conveniences compared to using `element.addEventListener` directly:
         *
         * * supports IE11 by: using an option object only if needed and emulating the `once` option
         *
         * * wraps the listener with a `monitor` function
         *
         * * returns a `stop` function to remove the listener
         */
        function addEventListener(emitter, event, listener, options) {
            return addEventListeners(emitter, [event], listener, options);
        }

        /**
         * Add event listeners to an event emitter object (Window, Element, mock object...).  This provides
         * a few conveniences compared to using `element.addEventListener` directly:
         *
         * * supports IE11 by: using an option object only if needed and emulating the `once` option
         *
         * * wraps the listener with a `monitor` function
         *
         * * returns a `stop` function to remove the listener
         *
         * * with `once: true`, the listener will be called at most once, even if different events are listened
         */
        function addEventListeners(emitter, events, listener, _a) {
            var _b = _a === void 0 ? {} : _a, once = _b.once, capture = _b.capture, passive = _b.passive;
            var wrapedListener = Object(_domain_internalMonitoring__WEBPACK_IMPORTED_MODULE_0__["monitor"])(once
                ? function (event) {
                    stop();
                    listener(event);
                }
                : listener);
            var options = passive ? {capture: capture, passive: passive} : capture;
            events.forEach(function (event) {
                return emitter.addEventListener(event, wrapedListener, options);
            });
            var stop = function () {
                return events.forEach(function (event) {
                    return emitter.removeEventListener(event, wrapedListener, options);
                });
            };
            return {
                stop: stop
            };
        }


        /***/
    }),

    /***/ "../core/src/transport/transport.ts":
    /*!******************************************!*\
  !*** ../core/src/transport/transport.ts ***!
  \******************************************/
    /*! exports provided: HttpRequest, Batch */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "HttpRequest", function () {
            return HttpRequest;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "Batch", function () {
            return Batch;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _tools_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/utils */ "../core/src/tools/utils.ts");


// https://en.wikipedia.org/wiki/UTF-8
        var HAS_MULTI_BYTES_CHARACTERS = /[^\u0000-\u007F]/;
        /**
         * Use POST request without content type to:
         * - avoid CORS preflight requests
         * - allow usage of sendBeacon
         *
         * multiple elements are sent separated by \n in order
         * to be parsed correctly without content type header
         */
        var HttpRequest = /** @class */ (function () {
            function HttpRequest(endpointUrl, bytesLimit, withBatchTime) {
                if (withBatchTime === void 0) {
                    withBatchTime = false;
                }
                this.endpointUrl = endpointUrl;
                this.bytesLimit = bytesLimit;
                this.withBatchTime = withBatchTime;
            }

            HttpRequest.prototype.send = function (data, size) {
                var url = this.withBatchTime ? addBatchTime(this.endpointUrl) : this.endpointUrl;
                if (navigator.sendBeacon && size < this.bytesLimit) {
                    var isQueued = navigator.sendBeacon(url, data);
                    if (isQueued) {
                        return;
                    }
                }
                var request = new XMLHttpRequest();
                request.open('POST', url, true);
                request.send(data);
            };
            return HttpRequest;
        }());

        function addBatchTime(url) {
            return "" + url + (url.indexOf('?') === -1 ? '?' : '&') + "batch_time=" + new Date().getTime();
        }

        var Batch = /** @class */ (function () {
            function Batch(request, maxSize, bytesLimit, maxMessageSize, flushTimeout, beforeUnloadCallback) {
                if (beforeUnloadCallback === void 0) {
                    beforeUnloadCallback = _tools_utils__WEBPACK_IMPORTED_MODULE_1__["noop"];
                }
                this.request = request;
                this.maxSize = maxSize;
                this.bytesLimit = bytesLimit;
                this.maxMessageSize = maxMessageSize;
                this.flushTimeout = flushTimeout;
                this.beforeUnloadCallback = beforeUnloadCallback;
                this.pushOnlyBuffer = [];
                this.upsertBuffer = {};
                this.bufferBytesSize = 0;
                this.bufferMessageCount = 0;
                this.flushOnVisibilityHidden();
                this.flushPeriodically();
            }

            Batch.prototype.add = function (message) {
                this.addOrUpdate(message);
            };
            Batch.prototype.upsert = function (message, key) {
                this.addOrUpdate(message, key);
            };
            Batch.prototype.flush = function () {
                if (this.bufferMessageCount !== 0) {
                    var messages = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.pushOnlyBuffer, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__["objectValues"])(this.upsertBuffer));
                    this.request.send(messages.join('\n'), this.bufferBytesSize);
                    this.pushOnlyBuffer = [];
                    this.upsertBuffer = {};
                    this.bufferBytesSize = 0;
                    this.bufferMessageCount = 0;
                }
            };
            Batch.prototype.sizeInBytes = function (candidate) {
                // Accurate byte size computations can degrade performances when there is a lot of events to process
                if (!HAS_MULTI_BYTES_CHARACTERS.test(candidate)) {
                    return candidate.length;
                }
                if (window.TextEncoder !== undefined) {
                    return new TextEncoder().encode(candidate).length;
                }
                return new Blob([candidate]).size;
            };
            Batch.prototype.addOrUpdate = function (message, key) {
                var _a = this.process(message), processedMessage = _a.processedMessage,
                    messageBytesSize = _a.messageBytesSize;
                if (messageBytesSize >= this.maxMessageSize) {
                    console.warn("Discarded a message whose size was bigger than the maximum allowed size " + this.maxMessageSize + "KB.");
                    return;
                }
                if (this.hasMessageFor(key)) {
                    this.remove(key);
                }
                if (this.willReachedBytesLimitWith(messageBytesSize)) {
                    this.flush();
                }
                this.push(processedMessage, messageBytesSize, key);
                if (this.isFull()) {
                    this.flush();
                }
            };
            Batch.prototype.process = function (message) {
                var processedMessage = Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__["jsonStringify"])(message);
                var messageBytesSize = this.sizeInBytes(processedMessage);
                return {processedMessage: processedMessage, messageBytesSize: messageBytesSize};
            };
            Batch.prototype.push = function (processedMessage, messageBytesSize, key) {
                if (this.bufferMessageCount > 0) {
                    // \n separator at serialization
                    this.bufferBytesSize += 1;
                }
                if (key !== undefined) {
                    this.upsertBuffer[key] = processedMessage;
                } else {
                    this.pushOnlyBuffer.push(processedMessage);
                }
                this.bufferBytesSize += messageBytesSize;
                this.bufferMessageCount += 1;
            };
            Batch.prototype.remove = function (key) {
                var removedMessage = this.upsertBuffer[key];
                delete this.upsertBuffer[key];
                var messageBytesSize = this.sizeInBytes(removedMessage);
                this.bufferBytesSize -= messageBytesSize;
                this.bufferMessageCount -= 1;
                if (this.bufferMessageCount > 0) {
                    this.bufferBytesSize -= 1;
                }
            };
            Batch.prototype.hasMessageFor = function (key) {
                return key !== undefined && this.upsertBuffer[key] !== undefined;
            };
            Batch.prototype.willReachedBytesLimitWith = function (messageBytesSize) {
                // byte of the separator at the end of the message
                return this.bufferBytesSize + messageBytesSize + 1 >= this.bytesLimit;
            };
            Batch.prototype.isFull = function () {
                return this.bufferMessageCount === this.maxSize || this.bufferBytesSize >= this.bytesLimit;
            };
            Batch.prototype.flushPeriodically = function () {
                var _this = this;
                setTimeout(function () {
                    _this.flush();
                    _this.flushPeriodically();
                }, this.flushTimeout);
            };
            Batch.prototype.flushOnVisibilityHidden = function () {
                var _this = this;
                /**
                 * With sendBeacon, requests are guaranteed to be successfully sent during document unload
                 */
                // @ts-ignore this function is not always defined
                if (navigator.sendBeacon) {
                    /**
                     * beforeunload is called before visibilitychange
                     * register first to be sure to be called before flush on beforeunload
                     * caveat: unload can still be canceled by another listener
                     */
                    Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__["addEventListener"])(window, _tools_utils__WEBPACK_IMPORTED_MODULE_1__["DOM_EVENT"].BEFORE_UNLOAD, this.beforeUnloadCallback);
                    /**
                     * Only event that guarantee to fire on mobile devices when the page transitions to background state
                     * (e.g. when user switches to a different application, goes to homescreen, etc), or is being unloaded.
                     */
                    Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__["addEventListener"])(document, _tools_utils__WEBPACK_IMPORTED_MODULE_1__["DOM_EVENT"].VISIBILITY_CHANGE, function () {
                        if (document.visibilityState === 'hidden') {
                            _this.flush();
                        }
                    });
                    /**
                     * Safari does not support yet to send a request during:
                     * - a visibility change during doc unload (cf: https://bugs.webkit.org/show_bug.cgi?id=194897)
                     * - a page hide transition (cf: https://bugs.webkit.org/show_bug.cgi?id=188329)
                     */
                    Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__["addEventListener"])(window, _tools_utils__WEBPACK_IMPORTED_MODULE_1__["DOM_EVENT"].BEFORE_UNLOAD, function () {
                        return _this.flush();
                    });
                }
            };
            return Batch;
        }());


        /***/
    }),

    /***/ "../rum-core/src/boot/buildEnv.ts":
    /*!***********************************!*\
  !*** .-core/src/boot/buildEnv.ts ***!
  \***********************************/
    /*! exports provided: buildEnv */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "buildEnv", function () {
            return buildEnv;
        });
        var buildEnv = {
            buildMode: 'undefined',
            datacenter: 'us',
            sdkVersion: 'dev'
        };


        /***/
    }),

    /***/ "../rum-core/src/boot/rum.ts":
    /*!******************************!*\
  !*** .-core/src/boot/rum.ts ***!
  \******************************/
    /*! exports provided: startRum, startRumEventCollection */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "startRum", function () {
            return startRum;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "startRumEventCollection", function () {
            return startRumEventCollection;
        });
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");
        /* harmony import */
        var _browser_domMutationCollection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../browser/domMutationCollection */ "../rum-core/src/browser/domMutationCollection.ts");
        /* harmony import */
        var _browser_performanceCollection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../browser/performanceCollection */ "../rum-core/src/browser/performanceCollection.ts");
        /* harmony import */
        var _domain_assembly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/assembly */ "../rum-core/src/domain/assembly.ts");
        /* harmony import */
        var _domain_internalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domain/internalContext */ "../rum-core/src/domain/internalContext.ts");
        /* harmony import */
        var _domain_lifeCycle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../domain/lifeCycle */ "../rum-core/src/domain/lifeCycle.ts");
        /* harmony import */
        var _domain_parentContexts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../domain/parentContexts */ "../rum-core/src/domain/parentContexts.ts");
        /* harmony import */
        var _domain_requestCollection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../domain/requestCollection */ "../rum-core/src/domain/requestCollection.ts");
        /* harmony import */
        var _domain_rumEventsCollection_action_actionCollection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../domain/rumEventsCollection/action/actionCollection */ "../rum-core/src/domain/rumEventsCollection/action/actionCollection.ts");
        /* harmony import */
        var _domain_rumEventsCollection_error_errorCollection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../domain/rumEventsCollection/error/errorCollection */ "../rum-core/src/domain/rumEventsCollection/error/errorCollection.ts");
        /* harmony import */
        var _domain_rumEventsCollection_longTask_longTaskCollection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../domain/rumEventsCollection/longTask/longTaskCollection */ "../rum-core/src/domain/rumEventsCollection/longTask/longTaskCollection.ts");
        /* harmony import */
        var _domain_rumEventsCollection_resource_resourceCollection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../domain/rumEventsCollection/resource/resourceCollection */ "../rum-core/src/domain/rumEventsCollection/resource/resourceCollection.ts");
        /* harmony import */
        var _domain_rumEventsCollection_view_viewCollection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../domain/rumEventsCollection/view/viewCollection */ "../rum-core/src/domain/rumEventsCollection/view/viewCollection.ts");
        /* harmony import */
        var _domain_rumSession__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../domain/rumSession */ "../rum-core/src/domain/rumSession.ts");
        /* harmony import */
        var _transport_batch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../transport/batch */ "../rum-core/src/transport/batch.ts");
        /* harmony import */
        var _buildEnv__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./buildEnv */ "../rum-core/src/boot/buildEnv.ts");


        function startRum(userConfiguration, getCommonContext) {
            var lifeCycle = new _domain_lifeCycle__WEBPACK_IMPORTED_MODULE_5__["LifeCycle"]();
            var _a = Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["commonInit"])(userConfiguration, _buildEnv__WEBPACK_IMPORTED_MODULE_15__["buildEnv"]),
                configuration = _a.configuration, internalMonitoring = _a.internalMonitoring;
            var session = Object(_domain_rumSession__WEBPACK_IMPORTED_MODULE_13__["startRumSession"])(configuration, lifeCycle);
            internalMonitoring.setExternalContextProvider(function () {
                return Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["combine"])({
                    application_id: userConfiguration.applicationId
                }, parentContexts.findView(), getCommonContext().context);
            });
            var _b = startRumEventCollection(userConfiguration.applicationId, location, lifeCycle, configuration, session, getCommonContext),
                parentContexts = _b.parentContexts, addError = _b.addError, addAction = _b.addAction,
                addTiming = _b.addTiming;
            Object(_domain_requestCollection__WEBPACK_IMPORTED_MODULE_7__["startRequestCollection"])(lifeCycle, configuration);
            Object(_browser_performanceCollection__WEBPACK_IMPORTED_MODULE_2__["startPerformanceCollection"])(lifeCycle, configuration);
            Object(_browser_domMutationCollection__WEBPACK_IMPORTED_MODULE_1__["startDOMMutationCollection"])(lifeCycle);
            var internalContext = Object(_domain_internalContext__WEBPACK_IMPORTED_MODULE_4__["startInternalContext"])(userConfiguration.applicationId, session, parentContexts);
            return {
                addAction: addAction,
                addError: addError,
                addTiming: addTiming,
                configuration: configuration,
                lifeCycle: lifeCycle,
                parentContexts: parentContexts,
                session: session,
                getInternalContext: internalContext.get
            };
        }

        function startRumEventCollection(applicationId, location, lifeCycle, configuration, session, getCommonContext) {
            var parentContexts = Object(_domain_parentContexts__WEBPACK_IMPORTED_MODULE_6__["startParentContexts"])(lifeCycle, session);
            var batch = Object(_transport_batch__WEBPACK_IMPORTED_MODULE_14__["startRumBatch"])(configuration, lifeCycle);
            Object(_domain_assembly__WEBPACK_IMPORTED_MODULE_3__["startRumAssembly"])(applicationId, configuration, lifeCycle, session, parentContexts, getCommonContext);
            Object(_domain_rumEventsCollection_longTask_longTaskCollection__WEBPACK_IMPORTED_MODULE_10__["startLongTaskCollection"])(lifeCycle);
            Object(_domain_rumEventsCollection_resource_resourceCollection__WEBPACK_IMPORTED_MODULE_11__["startResourceCollection"])(lifeCycle, session);
            var addTiming = Object(_domain_rumEventsCollection_view_viewCollection__WEBPACK_IMPORTED_MODULE_12__["startViewCollection"])(lifeCycle, location).addTiming;
            var addError = Object(_domain_rumEventsCollection_error_errorCollection__WEBPACK_IMPORTED_MODULE_9__["startErrorCollection"])(lifeCycle, configuration).addError;
            var addAction = Object(_domain_rumEventsCollection_action_actionCollection__WEBPACK_IMPORTED_MODULE_8__["startActionCollection"])(lifeCycle, configuration).addAction;
            return {
                addAction: addAction,
                addError: addError,
                parentContexts: parentContexts,
                addTiming: addTiming,
                stop: function () {
                    // prevent batch from previous tests to keep running and send unwanted requests
                    // could be replaced by stopping all the component when they will all have a stop method
                    batch.stop();
                }
            };
        }


        /***/
    }),

    /***/ "../rum-core/src/boot/rumPublicApi.ts":
    /*!***************************************!*\
  !*** .-core/src/boot/rumPublicApi.ts ***!
  \***************************************/
    /*! exports provided: makeRumPublicApi */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "makeRumPublicApi", function () {
            return makeRumPublicApi;
        });
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");
        /* harmony import */
        var _domain_rumEventsCollection_action_trackActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/rumEventsCollection/action/trackActions */ "../rum-core/src/domain/rumEventsCollection/action/trackActions.ts");


        function makeRumPublicApi(startRumImpl) {
            var isAlreadyInitialized = false;
            var globalContextManager = Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["createContextManager"])();
            var user = {};
            var getInternalContextStrategy = function () {
                return undefined;
            };
            var beforeInitAddTiming = new _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["BoundedBuffer"]();
            var addTimingStrategy = function (name) {
                beforeInitAddTiming.add([name, performance.now()]);
            };
            var beforeInitAddAction = new _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["BoundedBuffer"]();
            var addActionStrategy = function (action) {
                beforeInitAddAction.add([action, clonedCommonContext()]);
            };
            var beforeInitAddError = new _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["BoundedBuffer"]();
            var addErrorStrategy = function (providedError) {
                beforeInitAddError.add([providedError, clonedCommonContext()]);
            };

            function clonedCommonContext() {
                return Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["deepClone"])({
                    context: globalContextManager.get(),
                    user: user
                });
            }

            var rumGlobal = Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["makePublicApi"])({
                init: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["monitor"])(function (userConfiguration) {
                    var _a;
                    if (!Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["checkCookiesAuthorized"])(Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["buildCookieOptions"])(userConfiguration)) ||
                        !Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["checkIsNotLocalFile"])() ||
                        !canInitRum(userConfiguration)) {
                        return;
                    }
                    if (userConfiguration.publicApiKey) {
                        userConfiguration.clientToken = userConfiguration.publicApiKey;
                    }
                    ;
                    (_a = startRumImpl(userConfiguration, function () {
                        return ({
                            user: user,
                            context: globalContextManager.get()
                        });
                    }), addActionStrategy = _a.addAction, addErrorStrategy = _a.addError, addTimingStrategy = _a.addTiming, getInternalContextStrategy = _a.getInternalContext);
                    beforeInitAddAction.drain(function (_a) {
                        var action = _a[0], commonContext = _a[1];
                        return addActionStrategy(action, commonContext);
                    });
                    beforeInitAddError.drain(function (_a) {
                        var error = _a[0], commonContext = _a[1];
                        return addErrorStrategy(error, commonContext);
                    });
                    beforeInitAddTiming.drain(function (_a) {
                        var name = _a[0], time = _a[1];
                        return addTimingStrategy(name, time);
                    });
                    isAlreadyInitialized = true;
                }),
                addRumGlobalContext: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["monitor"])(globalContextManager.add),
                removeRumGlobalContext: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["monitor"])(globalContextManager.remove),
                getRumGlobalContext: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["monitor"])(globalContextManager.get),
                setRumGlobalContext: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["monitor"])(globalContextManager.set),
                getInternalContext: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["monitor"])(function (startTime) {
                    return getInternalContextStrategy(startTime);
                }),
                addAction: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["monitor"])(function (name, context) {
                    addActionStrategy({
                        name: name,
                        context: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["deepClone"])(context),
                        startTime: performance.now(),
                        type: _domain_rumEventsCollection_action_trackActions__WEBPACK_IMPORTED_MODULE_1__["ActionType"].CUSTOM
                    });
                }),
                /**
                 * @deprecated use addAction instead
                 */
                addUserAction: function (name, context) {
                    rumGlobal.addAction(name, context);
                },
                addError: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["monitor"])(function (error, context, source) {
                    if (source === void 0) {
                        source = _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["ErrorSource"].CUSTOM;
                    }
                    var checkedSource;
                    if (source === _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["ErrorSource"].CUSTOM || source === _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["ErrorSource"].NETWORK || source === _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["ErrorSource"].SOURCE) {
                        checkedSource = source;
                    } else {
                        console.error("DD_RUM.addError: Invalid source '" + source + "'");
                        checkedSource = _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["ErrorSource"].CUSTOM;
                    }
                    addErrorStrategy({
                        error: error,
                        context: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["deepClone"])(context),
                        source: checkedSource,
                        startTime: performance.now()
                    });
                }),
                addTiming: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["monitor"])(function (name) {
                    addTimingStrategy(name);
                }),
                setUser: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["monitor"])(function (newUser) {
                    var sanitizedUser = sanitizeUser(newUser);
                    if (sanitizedUser) {
                        user = sanitizedUser;
                    } else {
                        console.error('Unsupported user:', newUser);
                    }
                })
            });
            return rumGlobal;

            function sanitizeUser(newUser) {
                if (typeof newUser !== 'object' || !newUser) {
                    return;
                }
                var result = Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["deepClone"])(newUser);
                if ('id' in result) {
                    result.id = String(result.id);
                }
                if ('name' in result) {
                    result.name = String(result.name);
                }
                if ('email' in result) {
                    result.email = String(result.email);
                }
                return result;
            }

            function canInitRum(userConfiguration) {
                if (isAlreadyInitialized) {
                    if (!userConfiguration.silentMultipleInit) {
                        console.error('DD_RUM is already initialized.');
                    }
                    return false;
                }
                if (!userConfiguration || (!userConfiguration.clientToken && !userConfiguration.publicApiKey)) {
                    console.error('Client Token is not configured, we will not send any data.');
                    return false;
                }
                if (!userConfiguration.applicationId) {
                    console.error('Application ID is not configured, no RUM data will be collected.');
                    return false;
                }
                if (userConfiguration.sampleRate !== undefined && !Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["isPercentage"])(userConfiguration.sampleRate)) {
                    console.error('Sample Rate should be a number between 0 and 100');
                    return false;
                }
                if (userConfiguration.resourceSampleRate !== undefined && !Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["isPercentage"])(userConfiguration.resourceSampleRate)) {
                    console.error('Resource Sample Rate should be a number between 0 and 100');
                    return false;
                }
                if (Array.isArray(userConfiguration.allowedTracingOrigins) &&
                    userConfiguration.allowedTracingOrigins.length !== 0 &&
                    userConfiguration.service === undefined) {
                    console.error('Service need to be configured when tracing is enabled');
                    return false;
                }
                return true;
            }
        }


        /***/
    }),

    /***/ "../rum-core/src/browser/domMutationCollection.ts":
    /*!***************************************************!*\
  !*** .-core/src/browser/domMutationCollection.ts ***!
  \***************************************************/
    /*! exports provided: startDOMMutationCollection */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "startDOMMutationCollection", function () {
            return startDOMMutationCollection;
        });
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");
        /* harmony import */
        var _domain_lifeCycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/lifeCycle */ "../rum-core/src/domain/lifeCycle.ts");


        function getMutationObserverConstructor() {
            var constructor;
            var browserWindow = window;
            // Angular uses Zone.js to provide a context persisting accross async tasks.  Zone.js replaces the
            // global MutationObserver constructor with a patched version to support the context propagation.
            // There is an ongoing issue[1][2] with this setup when using a MutationObserver within a Angular
            // component: on some occasions, the callback is being called in an infinite loop, causing the
            // page to freeze (even if the callback is completely empty).
            //
            // To work around this issue, we are using the Zone __symbol__ API to get the original, unpatched
            // MutationObserver constructor.
            //
            // [1] https://github.com/angular/angular/issues/26948
            // [2] https://github.com/angular/angular/issues/31712
            if (browserWindow.Zone) {
                // eslint-disable-next-line no-underscore-dangle
                var symbol = browserWindow.Zone.__symbol__('MutationObserver');
                constructor = browserWindow[symbol];
            }
            if (!constructor) {
                constructor = browserWindow.MutationObserver;
            }
            return constructor;
        }

        function startDOMMutationCollection(lifeCycle) {
            var observer;
            var MutationObserver = getMutationObserverConstructor();
            if (MutationObserver) {
                observer = new MutationObserver(Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["monitor"])(function () {
                    lifeCycle.notify(_domain_lifeCycle__WEBPACK_IMPORTED_MODULE_1__["LifeCycleEventType"].DOM_MUTATED);
                }));
                observer.observe(document.documentElement, {
                    attributes: true,
                    characterData: true,
                    childList: true,
                    subtree: true
                });
            }
            return {
                stop: function () {
                    if (observer) {
                        observer.disconnect();
                    }
                }
            };
        }


        /***/
    }),

    /***/ "../rum-core/src/browser/performanceCollection.ts":
    /*!***************************************************!*\
  !*** .-core/src/browser/performanceCollection.ts ***!
  \***************************************************/
    /*! exports provided: supportPerformanceTimingEvent, startPerformanceCollection, retrieveInitialDocumentResourceTiming */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "supportPerformanceTimingEvent", function () {
            return supportPerformanceTimingEvent;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "startPerformanceCollection", function () {
            return startPerformanceCollection;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "retrieveInitialDocumentResourceTiming", function () {
            return retrieveInitialDocumentResourceTiming;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");
        /* harmony import */
        var _domain_lifeCycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/lifeCycle */ "../rum-core/src/domain/lifeCycle.ts");
        /* harmony import */
        var _domain_rumEventsCollection_resource_resourceUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/rumEventsCollection/resource/resourceUtils */ "../rum-core/src/domain/rumEventsCollection/resource/resourceUtils.ts");
        /* harmony import */
        var _domain_tracing_getDocumentTraceId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domain/tracing/getDocumentTraceId */ "../rum-core/src/domain/tracing/getDocumentTraceId.ts");


        function supportPerformanceObject() {
            return window.performance !== undefined && 'getEntries' in performance;
        }

        function supportPerformanceTimingEvent(entryType) {
            return (window.PerformanceObserver &&
                PerformanceObserver.supportedEntryTypes !== undefined &&
                PerformanceObserver.supportedEntryTypes.includes(entryType));
        }

        function startPerformanceCollection(lifeCycle, configuration) {
            retrieveInitialDocumentResourceTiming(function (timing) {
                handleRumPerformanceEntry(lifeCycle, configuration, timing);
            });
            if (supportPerformanceObject()) {
                handlePerformanceEntries(lifeCycle, configuration, performance.getEntries());
            }
            if (window.PerformanceObserver) {
                var observer = new PerformanceObserver(Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["monitor"])(function (entries) {
                    return handlePerformanceEntries(lifeCycle, configuration, entries.getEntries());
                }));
                var entryTypes = [
                    'resource',
                    'navigation',
                    'longtask',
                    'paint',
                    'largest-contentful-paint',
                    'first-input',
                    'layout-shift'
                ];
                observer.observe({entryTypes: entryTypes});
                if (supportPerformanceObject() && 'addEventListener' in performance) {
                    // https://bugzilla.mozilla.org/show_bug.cgi?id=1559377
                    performance.addEventListener('resourcetimingbufferfull', function () {
                        performance.clearResourceTimings();
                    });
                }
            }
            if (!supportPerformanceTimingEvent('navigation')) {
                retrieveNavigationTiming(function (timing) {
                    handleRumPerformanceEntry(lifeCycle, configuration, timing);
                });
            }
            if (!supportPerformanceTimingEvent('first-input')) {
                retrieveFirstInputTiming(function (timing) {
                    handleRumPerformanceEntry(lifeCycle, configuration, timing);
                });
            }
        }

        function retrieveInitialDocumentResourceTiming(callback) {
            runOnReadyState('interactive', function () {
                var timing;
                var forcedAttributes = {
                    entryType: 'resource',
                    initiatorType: _domain_rumEventsCollection_resource_resourceUtils__WEBPACK_IMPORTED_MODULE_3__["FAKE_INITIAL_DOCUMENT"],
                    traceId: Object(_domain_tracing_getDocumentTraceId__WEBPACK_IMPORTED_MODULE_4__["getDocumentTraceId"])(document)
                };
                if (supportPerformanceTimingEvent('navigation') && performance.getEntriesByType('navigation').length > 0) {
                    var navigationEntry = performance.getEntriesByType('navigation')[0];
                    timing = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, navigationEntry.toJSON()), forcedAttributes);
                } else {
                    var relativePerformanceTiming = computeRelativePerformanceTiming();
                    timing = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, relativePerformanceTiming), {
                        decodedBodySize: 0,
                        duration: relativePerformanceTiming.responseEnd,
                        name: window.location.href,
                        startTime: 0
                    }), forcedAttributes);
                }
                callback(timing);
            });
        }

        function retrieveNavigationTiming(callback) {
            function sendFakeTiming() {
                callback(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, computeRelativePerformanceTiming()), {entryType: 'navigation'}));
            }

            runOnReadyState('complete', function () {
                // Send it a bit after the actual load event, so the "loadEventEnd" timing is accurate
                setTimeout(Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["monitor"])(sendFakeTiming));
            });
        }

        /**
         * first-input timing entry polyfill based on
         * https://github.com/GoogleChrome/web-vitals/blob/master/src/lib/polyfills/firstInputPolyfill.ts
         */
        function retrieveFirstInputTiming(callback) {
            var startTimeStamp = Date.now();
            var timingSent = false;
            var removeEventListeners = Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["addEventListeners"])(window, [_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["DOM_EVENT"].CLICK, _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["DOM_EVENT"].MOUSE_DOWN, _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["DOM_EVENT"].KEY_DOWN, _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["DOM_EVENT"].TOUCH_START, _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["DOM_EVENT"].POINTER_DOWN], function (evt) {
                // Only count cancelable events, which should trigger behavior important to the user.
                if (!evt.cancelable) {
                    return;
                }
                // This timing will be used to compute the "first Input delay", which is the delta between
                // when the system received the event (e.g. evt.timeStamp) and when it could run the callback
                // (e.g. performance.now()).
                var timing = {
                    entryType: 'first-input',
                    processingStart: performance.now(),
                    startTime: evt.timeStamp
                };
                if (evt.type === _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["DOM_EVENT"].POINTER_DOWN) {
                    sendTimingIfPointerIsNotCancelled(timing);
                } else {
                    sendTiming(timing);
                }
            }, {passive: true, capture: true}).stop;

            /**
             * Pointer events are a special case, because they can trigger main or compositor thread behavior.
             * We differenciate these cases based on whether or not we see a pointercancel event, which are
             * fired when we scroll. If we're scrolling we don't need to report input delay since FID excludes
             * scrolling and pinch/zooming.
             */
            function sendTimingIfPointerIsNotCancelled(timing) {
                Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["addEventListeners"])(window, [_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["DOM_EVENT"].POINTER_UP, _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["DOM_EVENT"].POINTER_CANCEL], function (event) {
                    if (event.type === _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["DOM_EVENT"].POINTER_UP) {
                        sendTiming(timing);
                    }
                }, {once: true});
            }

            function sendTiming(timing) {
                if (!timingSent) {
                    timingSent = true;
                    removeEventListeners();
                    // In some cases the recorded delay is clearly wrong, e.g. it's negative or it's larger than
                    // the time between now and when the page was loaded.
                    // - https://github.com/GoogleChromeLabs/first-input-delay/issues/4
                    // - https://github.com/GoogleChromeLabs/first-input-delay/issues/6
                    // - https://github.com/GoogleChromeLabs/first-input-delay/issues/7
                    var delay = timing.processingStart - timing.startTime;
                    if (delay >= 0 && delay < Date.now() - startTimeStamp) {
                        callback(timing);
                    }
                }
            }
        }

        function runOnReadyState(expectedReadyState, callback) {
            if (document.readyState === expectedReadyState || document.readyState === 'complete') {
                callback();
            } else {
                var eventName = expectedReadyState === 'complete' ? _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["DOM_EVENT"].LOAD : _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["DOM_EVENT"].DOM_CONTENT_LOADED;
                Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["addEventListener"])(window, eventName, callback, {once: true});
            }
        }

        function computeRelativePerformanceTiming() {
            var result = {};
            var timing = performance.timing;
            for (var key in timing) {
                if (Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(timing[key])) {
                    result[key] = timing[key] === 0 ? 0 : Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["getRelativeTime"])(timing[key]);
                }
            }
            return result;
        }

        function handlePerformanceEntries(lifeCycle, configuration, entries) {
            entries.forEach(function (entry) {
                if (entry.entryType === 'resource' ||
                    entry.entryType === 'navigation' ||
                    entry.entryType === 'paint' ||
                    entry.entryType === 'longtask' ||
                    entry.entryType === 'largest-contentful-paint' ||
                    entry.entryType === 'first-input' ||
                    entry.entryType === 'layout-shift') {
                    handleRumPerformanceEntry(lifeCycle, configuration, entry);
                }
            });
        }

        function handleRumPerformanceEntry(lifeCycle, configuration, entry) {
            if (isIncompleteNavigation(entry) || isForbiddenResource(configuration, entry)) {
                return;
            }
            lifeCycle.notify(_domain_lifeCycle__WEBPACK_IMPORTED_MODULE_2__["LifeCycleEventType"].PERFORMANCE_ENTRY_COLLECTED, entry);
        }

        function isIncompleteNavigation(entry) {
            return entry.entryType === 'navigation' && entry.loadEventEnd <= 0;
        }

        function isForbiddenResource(configuration, entry) {
            return entry.entryType === 'resource' && !Object(_domain_rumEventsCollection_resource_resourceUtils__WEBPACK_IMPORTED_MODULE_3__["isAllowedRequestUrl"])(configuration, entry.name);
        }


        /***/
    }),

    /***/ "../rum-core/src/domain/assembly.ts":
    /*!*************************************!*\
  !*** .-core/src/domain/assembly.ts ***!
  \*************************************/
    /*! exports provided: startRumAssembly */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "startRumAssembly", function () {
            return startRumAssembly;
        });
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");
        /* harmony import */
        var _rawRumEvent_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rawRumEvent.types */ "../rum-core/src/rawRumEvent.types.ts");
        /* harmony import */
        var _lifeCycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lifeCycle */ "../rum-core/src/domain/lifeCycle.ts");


        var SessionType;
        (function (SessionType) {
            SessionType["SYNTHETICS"] = "synthetics";
            SessionType["USER"] = "user";
        })(SessionType || (SessionType = {}));
        var FIELDS_WITH_SENSITIVE_DATA = [
            'view.url',
            'view.referrer',
            'action.target.name',
            'error.message',
            'error.stack',
            'error.resource.url',
            'resource.url'
        ];

        function startRumAssembly(applicationId, configuration, lifeCycle, session, parentContexts, getCommonContext) {
            lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_2__["LifeCycleEventType"].RAW_RUM_EVENT_COLLECTED, function (_a) {
                var startTime = _a.startTime, rawRumEvent = _a.rawRumEvent, savedCommonContext = _a.savedCommonContext,
                    customerContext = _a.customerContext;
                var viewContext = parentContexts.findView(startTime);
                if (session.isTracked() && viewContext && viewContext.session.id) {
                    var actionContext = parentContexts.findAction(startTime);
                    var commonContext = savedCommonContext || getCommonContext();
                    var rumContext = {
                        _dd: {
                            format_version: 2
                        },
                        application: {
                            id: applicationId
                        },
                        date: new Date().getTime(),
                        service: configuration.service,
                        session: {
                            has_replay: commonContext.hasReplay,
                            // must be computed on each event because synthetics instrumentation can be done after sdk execution
                            // cf https://github.com/puppeteer/puppeteer/issues/3667
                            type: getSessionType()
                        }
                    };
                    var serverRumEvent = (needToAssembleWithAction(rawRumEvent)
                        ? Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["combine"])(rumContext, viewContext, actionContext, rawRumEvent)
                        : Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["combine"])(rumContext, viewContext, rawRumEvent));
                    var context = Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["combine"])(commonContext.context, customerContext);
                    if (!Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["isEmptyObject"])(context)) {
                        serverRumEvent.context = context;
                    }
                    if (!Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["isEmptyObject"])(commonContext.user)) {
                        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
                        ;
                        serverRumEvent.usr = commonContext.user;
                    }
                    if (configuration.beforeSend) {
                        Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["limitModification"])(serverRumEvent, FIELDS_WITH_SENSITIVE_DATA, configuration.beforeSend);
                    }
                    lifeCycle.notify(_lifeCycle__WEBPACK_IMPORTED_MODULE_2__["LifeCycleEventType"].RUM_EVENT_COLLECTED, serverRumEvent);
                }
            });
        }

        function needToAssembleWithAction(event) {
            return [_rawRumEvent_types__WEBPACK_IMPORTED_MODULE_1__["RumEventType"].ERROR, _rawRumEvent_types__WEBPACK_IMPORTED_MODULE_1__["RumEventType"].RESOURCE, _rawRumEvent_types__WEBPACK_IMPORTED_MODULE_1__["RumEventType"].LONG_TASK].indexOf(event.type) !== -1;
        }

        function getSessionType() {
            // eslint-disable-next-line no-underscore-dangle
            return window._DATADOG_SYNTHETICS_BROWSER === undefined ? SessionType.USER : SessionType.SYNTHETICS;
        }


        /***/
    }),

    /***/ "../rum-core/src/domain/internalContext.ts":
    /*!********************************************!*\
  !*** .-core/src/domain/internalContext.ts ***!
  \********************************************/
    /*! exports provided: startInternalContext */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "startInternalContext", function () {
            return startInternalContext;
        });

        /**
         * Internal context keep returning v1 format
         * to not break compatibility with logs data format
         */
        function startInternalContext(applicationId, session, parentContexts) {
            return {
                get: function (startTime) {
                    var viewContext = parentContexts.findView(startTime);
                    if (session.isTracked() && viewContext && viewContext.session.id) {
                        var actionContext = parentContexts.findAction(startTime);
                        return {
                            application_id: applicationId,
                            session_id: viewContext.session.id,
                            user_action: actionContext
                                ? {
                                    id: actionContext.action.id
                                }
                                : undefined,
                            view: viewContext.view
                        };
                    }
                }
            };
        }


        /***/
    }),

    /***/ "../rum-core/src/domain/lifeCycle.ts":
    /*!**************************************!*\
  !*** .-core/src/domain/lifeCycle.ts ***!
  \**************************************/
    /*! exports provided: LifeCycleEventType, LifeCycle */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "LifeCycleEventType", function () {
            return LifeCycleEventType;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "LifeCycle", function () {
            return LifeCycle;
        });
        var LifeCycleEventType;
        (function (LifeCycleEventType) {
            LifeCycleEventType[LifeCycleEventType["PERFORMANCE_ENTRY_COLLECTED"] = 0] = "PERFORMANCE_ENTRY_COLLECTED";
            LifeCycleEventType[LifeCycleEventType["AUTO_ACTION_CREATED"] = 1] = "AUTO_ACTION_CREATED";
            LifeCycleEventType[LifeCycleEventType["AUTO_ACTION_COMPLETED"] = 2] = "AUTO_ACTION_COMPLETED";
            LifeCycleEventType[LifeCycleEventType["AUTO_ACTION_DISCARDED"] = 3] = "AUTO_ACTION_DISCARDED";
            LifeCycleEventType[LifeCycleEventType["VIEW_CREATED"] = 4] = "VIEW_CREATED";
            LifeCycleEventType[LifeCycleEventType["VIEW_UPDATED"] = 5] = "VIEW_UPDATED";
            LifeCycleEventType[LifeCycleEventType["VIEW_ENDED"] = 6] = "VIEW_ENDED";
            LifeCycleEventType[LifeCycleEventType["REQUEST_STARTED"] = 7] = "REQUEST_STARTED";
            LifeCycleEventType[LifeCycleEventType["REQUEST_COMPLETED"] = 8] = "REQUEST_COMPLETED";
            LifeCycleEventType[LifeCycleEventType["SESSION_RENEWED"] = 9] = "SESSION_RENEWED";
            LifeCycleEventType[LifeCycleEventType["DOM_MUTATED"] = 10] = "DOM_MUTATED";
            LifeCycleEventType[LifeCycleEventType["BEFORE_UNLOAD"] = 11] = "BEFORE_UNLOAD";
            LifeCycleEventType[LifeCycleEventType["RAW_RUM_EVENT_COLLECTED"] = 12] = "RAW_RUM_EVENT_COLLECTED";
            LifeCycleEventType[LifeCycleEventType["RUM_EVENT_COLLECTED"] = 13] = "RUM_EVENT_COLLECTED";
        })(LifeCycleEventType || (LifeCycleEventType = {}));
        var LifeCycle = /** @class */ (function () {
            function LifeCycle() {
                this.callbacks = {};
            }

            LifeCycle.prototype.notify = function (eventType, data) {
                var eventCallbacks = this.callbacks[eventType];
                if (eventCallbacks) {
                    eventCallbacks.forEach(function (callback) {
                        return callback(data);
                    });
                }
            };
            LifeCycle.prototype.subscribe = function (eventType, callback) {
                var _this = this;
                if (!this.callbacks[eventType]) {
                    this.callbacks[eventType] = [];
                }
                this.callbacks[eventType].push(callback);
                return {
                    unsubscribe: function () {
                        _this.callbacks[eventType] = _this.callbacks[eventType].filter(function (other) {
                            return callback !== other;
                        });
                    }
                };
            };
            return LifeCycle;
        }());


        /***/
    }),

    /***/ "../rum-core/src/domain/parentContexts.ts":
    /*!*******************************************!*\
  !*** .-core/src/domain/parentContexts.ts ***!
  \*******************************************/
    /*! exports provided: VIEW_CONTEXT_TIME_OUT_DELAY, ACTION_CONTEXT_TIME_OUT_DELAY, CLEAR_OLD_CONTEXTS_INTERVAL, startParentContexts */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "VIEW_CONTEXT_TIME_OUT_DELAY", function () {
            return VIEW_CONTEXT_TIME_OUT_DELAY;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ACTION_CONTEXT_TIME_OUT_DELAY", function () {
            return ACTION_CONTEXT_TIME_OUT_DELAY;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "CLEAR_OLD_CONTEXTS_INTERVAL", function () {
            return CLEAR_OLD_CONTEXTS_INTERVAL;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "startParentContexts", function () {
            return startParentContexts;
        });
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");
        /* harmony import */
        var _lifeCycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lifeCycle */ "../rum-core/src/domain/lifeCycle.ts");


        var VIEW_CONTEXT_TIME_OUT_DELAY = _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["SESSION_TIME_OUT_DELAY"];
        var ACTION_CONTEXT_TIME_OUT_DELAY = 5 * _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["ONE_MINUTE"]; // arbitrary
        var CLEAR_OLD_CONTEXTS_INTERVAL = _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["ONE_MINUTE"];

        function startParentContexts(lifeCycle, session) {
            var currentView;
            var currentAction;
            var currentSessionId;
            var previousViews = [];
            var previousActions = [];
            lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_1__["LifeCycleEventType"].VIEW_CREATED, function (currentContext) {
                if (currentView) {
                    previousViews.unshift({
                        context: buildCurrentViewContext(),
                        endTime: currentContext.startTime,
                        startTime: currentView.startTime
                    });
                }
                currentView = currentContext;
                currentSessionId = session.getId();
            });
            lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_1__["LifeCycleEventType"].VIEW_UPDATED, function (currentContext) {
                // A view can be updated after its end.  We have to ensure that the view being updated is the
                // most recently created.
                if (currentView.id === currentContext.id) {
                    currentView = currentContext;
                }
            });
            lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_1__["LifeCycleEventType"].AUTO_ACTION_CREATED, function (currentContext) {
                currentAction = currentContext;
            });
            lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_1__["LifeCycleEventType"].AUTO_ACTION_COMPLETED, function (action) {
                if (currentAction) {
                    previousActions.unshift({
                        context: buildCurrentActionContext(),
                        endTime: currentAction.startTime + action.duration,
                        startTime: currentAction.startTime
                    });
                }
                currentAction = undefined;
            });
            lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_1__["LifeCycleEventType"].AUTO_ACTION_DISCARDED, function () {
                currentAction = undefined;
            });
            lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_1__["LifeCycleEventType"].SESSION_RENEWED, function () {
                previousViews = [];
                previousActions = [];
                currentView = undefined;
                currentAction = undefined;
            });
            var clearOldContextsInterval = setInterval(Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["monitor"])(function () {
                clearOldContexts(previousViews, VIEW_CONTEXT_TIME_OUT_DELAY);
                clearOldContexts(previousActions, ACTION_CONTEXT_TIME_OUT_DELAY);
            }), CLEAR_OLD_CONTEXTS_INTERVAL);

            function clearOldContexts(previousContexts, timeOutDelay) {
                var oldTimeThreshold = performance.now() - timeOutDelay;
                while (previousContexts.length > 0 && previousContexts[previousContexts.length - 1].startTime < oldTimeThreshold) {
                    previousContexts.pop();
                }
            }

            function buildCurrentViewContext() {
                return {
                    session: {
                        id: currentSessionId
                    },
                    view: {
                        id: currentView.id,
                        referrer: currentView.referrer,
                        url: currentView.location.href
                    }
                };
            }

            function buildCurrentActionContext() {
                return {action: {id: currentAction.id}};
            }

            function findContext(buildContext, previousContexts, currentContext, startTime) {
                if (startTime === undefined) {
                    return currentContext ? buildContext() : undefined;
                }
                if (currentContext && startTime >= currentContext.startTime) {
                    return buildContext();
                }
                for (var _i = 0, previousContexts_1 = previousContexts; _i < previousContexts_1.length; _i++) {
                    var previousContext = previousContexts_1[_i];
                    if (startTime > previousContext.endTime) {
                        break;
                    }
                    if (startTime >= previousContext.startTime) {
                        return previousContext.context;
                    }
                }
                return undefined;
            }

            return {
                findAction: function (startTime) {
                    return findContext(buildCurrentActionContext, previousActions, currentAction, startTime);
                },
                findView: function (startTime) {
                    return findContext(buildCurrentViewContext, previousViews, currentView, startTime);
                },
                stop: function () {
                    clearInterval(clearOldContextsInterval);
                }
            };
        }


        /***/
    }),

    /***/ "../rum-core/src/domain/requestCollection.ts":
    /*!**********************************************!*\
  !*** .-core/src/domain/requestCollection.ts ***!
  \**********************************************/
    /*! exports provided: startRequestCollection, trackXhr, trackFetch */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "startRequestCollection", function () {
            return startRequestCollection;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "trackXhr", function () {
            return trackXhr;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "trackFetch", function () {
            return trackFetch;
        });
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");
        /* harmony import */
        var _lifeCycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lifeCycle */ "../rum-core/src/domain/lifeCycle.ts");
        /* harmony import */
        var _rumEventsCollection_resource_resourceUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rumEventsCollection/resource/resourceUtils */ "../rum-core/src/domain/rumEventsCollection/resource/resourceUtils.ts");
        /* harmony import */
        var _tracing_tracer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tracing/tracer */ "../rum-core/src/domain/tracing/tracer.ts");


        var nextRequestIndex = 1;

        function startRequestCollection(lifeCycle, configuration) {
            var tracer = Object(_tracing_tracer__WEBPACK_IMPORTED_MODULE_3__["startTracer"])(configuration);
            trackXhr(lifeCycle, configuration, tracer);
            trackFetch(lifeCycle, configuration, tracer);
        }

        function trackXhr(lifeCycle, configuration, tracer) {
            var xhrProxy = Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["startXhrProxy"])();
            xhrProxy.beforeSend(function (context, xhr) {
                if (Object(_rumEventsCollection_resource_resourceUtils__WEBPACK_IMPORTED_MODULE_2__["isAllowedRequestUrl"])(configuration, context.url)) {
                    tracer.traceXhr(context, xhr);
                    context.requestIndex = getNextRequestIndex();
                    lifeCycle.notify(_lifeCycle__WEBPACK_IMPORTED_MODULE_1__["LifeCycleEventType"].REQUEST_STARTED, {
                        requestIndex: context.requestIndex
                    });
                }
            });
            xhrProxy.onRequestComplete(function (context) {
                if (Object(_rumEventsCollection_resource_resourceUtils__WEBPACK_IMPORTED_MODULE_2__["isAllowedRequestUrl"])(configuration, context.url)) {
                    tracer.clearTracingIfCancelled(context);
                    lifeCycle.notify(_lifeCycle__WEBPACK_IMPORTED_MODULE_1__["LifeCycleEventType"].REQUEST_COMPLETED, {
                        duration: context.duration,
                        method: context.method,
                        requestIndex: context.requestIndex,
                        response: context.response,
                        spanId: context.spanId,
                        startTime: context.startTime,
                        status: context.status,
                        traceId: context.traceId,
                        type: _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["RequestType"].XHR,
                        url: context.url
                    });
                }
            });
            return xhrProxy;
        }

        function trackFetch(lifeCycle, configuration, tracer) {
            var fetchProxy = Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["startFetchProxy"])();
            fetchProxy.beforeSend(function (context) {
                if (Object(_rumEventsCollection_resource_resourceUtils__WEBPACK_IMPORTED_MODULE_2__["isAllowedRequestUrl"])(configuration, context.url)) {
                    tracer.traceFetch(context);
                    context.requestIndex = getNextRequestIndex();
                    lifeCycle.notify(_lifeCycle__WEBPACK_IMPORTED_MODULE_1__["LifeCycleEventType"].REQUEST_STARTED, {
                        requestIndex: context.requestIndex
                    });
                }
            });
            fetchProxy.onRequestComplete(function (context) {
                if (Object(_rumEventsCollection_resource_resourceUtils__WEBPACK_IMPORTED_MODULE_2__["isAllowedRequestUrl"])(configuration, context.url)) {
                    tracer.clearTracingIfCancelled(context);
                    lifeCycle.notify(_lifeCycle__WEBPACK_IMPORTED_MODULE_1__["LifeCycleEventType"].REQUEST_COMPLETED, {
                        duration: context.duration,
                        method: context.method,
                        requestIndex: context.requestIndex,
                        response: context.response,
                        responseType: context.responseType,
                        spanId: context.spanId,
                        startTime: context.startTime,
                        status: context.status,
                        traceId: context.traceId,
                        type: _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["RequestType"].FETCH,
                        url: context.url
                    });
                }
            });
            return fetchProxy;
        }

        function getNextRequestIndex() {
            var result = nextRequestIndex;
            nextRequestIndex += 1;
            return result;
        }


        /***/
    }),

    /***/ "../rum-core/src/domain/rumEventsCollection/action/actionCollection.ts":
    /*!************************************************************************!*\
  !*** .-core/src/domain/rumEventsCollection/action/actionCollection.ts ***!
  \************************************************************************/
    /*! exports provided: startActionCollection */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "startActionCollection", function () {
            return startActionCollection;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");
        /* harmony import */
        var _rawRumEvent_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../rawRumEvent.types */ "../rum-core/src/rawRumEvent.types.ts");
        /* harmony import */
        var _lifeCycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lifeCycle */ "../rum-core/src/domain/lifeCycle.ts");
        /* harmony import */
        var _trackActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trackActions */ "../rum-core/src/domain/rumEventsCollection/action/trackActions.ts");


        function startActionCollection(lifeCycle, configuration) {
            lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_3__["LifeCycleEventType"].AUTO_ACTION_COMPLETED, function (action) {
                return lifeCycle.notify(_lifeCycle__WEBPACK_IMPORTED_MODULE_3__["LifeCycleEventType"].RAW_RUM_EVENT_COLLECTED, processAction(action));
            });
            if (configuration.trackInteractions) {
                Object(_trackActions__WEBPACK_IMPORTED_MODULE_4__["trackActions"])(lifeCycle);
            }
            return {
                addAction: function (action, savedCommonContext) {
                    lifeCycle.notify(_lifeCycle__WEBPACK_IMPORTED_MODULE_3__["LifeCycleEventType"].RAW_RUM_EVENT_COLLECTED, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({savedCommonContext: savedCommonContext}, processAction(action)));
                }
            };
        }

        function processAction(action) {
            var autoActionProperties = isAutoAction(action)
                ? {
                    action: {
                        error: {
                            count: action.counts.errorCount
                        },
                        id: action.id,
                        loading_time: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["msToNs"])(action.duration),
                        long_task: {
                            count: action.counts.longTaskCount
                        },
                        resource: {
                            count: action.counts.resourceCount
                        }
                    }
                }
                : undefined;
            var customerContext = !isAutoAction(action) ? action.context : undefined;
            var actionEvent = Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["combine"])({
                action: {
                    target: {
                        name: action.name
                    },
                    type: action.type
                },
                date: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["getTimestamp"])(action.startTime),
                type: _rawRumEvent_types__WEBPACK_IMPORTED_MODULE_2__["RumEventType"].ACTION
            }, autoActionProperties);
            return {
                customerContext: customerContext,
                rawRumEvent: actionEvent,
                startTime: action.startTime
            };
        }

        function isAutoAction(action) {
            return action.type !== _trackActions__WEBPACK_IMPORTED_MODULE_4__["ActionType"].CUSTOM;
        }


        /***/
    }),

    /***/ "../rum-core/src/domain/rumEventsCollection/action/getActionNameFromElement.ts":
    /*!********************************************************************************!*\
  !*** .-core/src/domain/rumEventsCollection/action/getActionNameFromElement.ts ***!
  \********************************************************************************/
    /*! exports provided: getActionNameFromElement */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getActionNameFromElement", function () {
            return getActionNameFromElement;
        });
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");

        function getActionNameFromElement(element) {
            // Proceed to get the action name in two steps:
            // * first, get the name programmatically, explicitly defined by the user.
            // * then, use strategies that are known to return good results. Those strategies will be used on
            //   the element and a few parents, but it's likely that they won't succeed at all.
            // * if no name is found this way, use strategies returning less accurate names as a fallback.
            //   Those are much likely to succeed.
            return (getActionNameFromElementProgrammatically(element) ||
                getActionNameFromElementForStrategies(element, priorityStrategies) ||
                getActionNameFromElementForStrategies(element, fallbackStrategies) ||
                '');
        }

        /**
         * Get the action name from the attribute 'data-dd-action-name' on the element or any of its parent.
         */
        var PROGRAMMATIC_ATTRIBUTE = 'data-dd-action-name';

        function getActionNameFromElementProgrammatically(targetElement) {
            var elementWithAttribute;
            // We don't use getActionNameFromElementForStrategies here, because we want to consider all parents,
            // without limit. It is up to the user to declare a relevant naming strategy.
            // If available, use element.closest() to match get the attribute from the element or any of its
            // parent.  Else fallback to a more traditional implementation.
            if (supportsElementClosest()) {
                elementWithAttribute = targetElement.closest("[" + PROGRAMMATIC_ATTRIBUTE + "]");
            } else {
                var element = targetElement;
                while (element) {
                    if (element.hasAttribute(PROGRAMMATIC_ATTRIBUTE)) {
                        elementWithAttribute = element;
                        break;
                    }
                    element = element.parentElement;
                }
            }
            if (!elementWithAttribute) {
                return;
            }
            var name = elementWithAttribute.getAttribute(PROGRAMMATIC_ATTRIBUTE);
            return truncate(normalizeWhitespace(name.trim()));
        }

        var priorityStrategies = [
            // associated LABEL text
            function (element) {
                // IE does not support element.labels, so we fallback to a CSS selector based on the element id
                // instead
                if (supportsLabelProperty()) {
                    if ('labels' in element && element.labels && element.labels.length > 0) {
                        return getTextualContent(element.labels[0]);
                    }
                } else if (element.id) {
                    var label = element.ownerDocument && element.ownerDocument.querySelector("label[for=\"" + element.id.replace('"', '\\"') + "\"]");
                    return label && getTextualContent(label);
                }
            },
            // INPUT button (and associated) value
            function (element) {
                if (element.nodeName === 'INPUT') {
                    var input = element;
                    var type = input.getAttribute('type');
                    if (type === 'button' || type === 'submit' || type === 'reset') {
                        return input.value;
                    }
                }
            },
            // BUTTON, LABEL or button-like element text
            function (element) {
                if (element.nodeName === 'BUTTON' || element.nodeName === 'LABEL' || element.getAttribute('role') === 'button') {
                    return getTextualContent(element);
                }
            },
            function (element) {
                return element.getAttribute('aria-label');
            },
            // associated element text designated by the aria-labelledby attribute
            function (element) {
                var labelledByAttribute = element.getAttribute('aria-labelledby');
                if (labelledByAttribute) {
                    return labelledByAttribute
                        .split(/\s+/)
                        .map(function (id) {
                            return getElementById(element, id);
                        })
                        .filter(function (label) {
                            return Boolean(label);
                        })
                        .map(getTextualContent)
                        .join(' ');
                }
            },
            function (element) {
                return element.getAttribute('alt');
            },
            function (element) {
                return element.getAttribute('name');
            },
            function (element) {
                return element.getAttribute('title');
            },
            function (element) {
                return element.getAttribute('placeholder');
            },
            // SELECT first OPTION text
            function (element) {
                if ('options' in element && element.options.length > 0) {
                    return getTextualContent(element.options[0]);
                }
            }
        ];
        var fallbackStrategies = [function (element) {
            return getTextualContent(element);
        }];
        /**
         * Iterates over the target element and its parent, using the strategies list to get an action name.
         * Each strategies are applied on each element, stopping as soon as a non-empty value is returned.
         */
        var MAX_PARENTS_TO_CONSIDER = 10;

        function getActionNameFromElementForStrategies(targetElement, strategies) {
            var element = targetElement;
            var recursionCounter = 0;
            while (recursionCounter <= MAX_PARENTS_TO_CONSIDER &&
            element &&
            element.nodeName !== 'BODY' &&
            element.nodeName !== 'HTML' &&
            element.nodeName !== 'HEAD') {
                for (var _i = 0, strategies_1 = strategies; _i < strategies_1.length; _i++) {
                    var strategy = strategies_1[_i];
                    var name_1 = strategy(element);
                    if (typeof name_1 === 'string') {
                        var trimmedName = name_1.trim();
                        if (trimmedName) {
                            return truncate(normalizeWhitespace(trimmedName));
                        }
                    }
                }
                // Consider a FORM as a contextual limit to get the action name.  This is experimental and may
                // be reconsidered in the future.
                if (element.nodeName === 'FORM') {
                    break;
                }
                element = element.parentElement;
                recursionCounter += 1;
            }
        }

        function normalizeWhitespace(s) {
            return s.replace(/\s+/g, ' ');
        }

        function truncate(s) {
            return s.length > 100 ? Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["safeTruncate"])(s, 100) + " [...]" : s;
        }

        function getElementById(refElement, id) {
            // Use the element ownerDocument here, because tests are executed in an iframe, so
            // document.getElementById won't work.
            return refElement.ownerDocument ? refElement.ownerDocument.getElementById(id) : null;
        }

        function getTextualContent(element) {
            if (element.isContentEditable) {
                return;
            }
            if ('innerText' in element) {
                var text = element.innerText;
                if (!supportsInnerTextScriptAndStyleRemoval()) {
                    // remove the inner text of SCRIPT and STYLES from the result. This is a bit dirty, but should
                    // be relatively fast and work in most cases.
                    var elementsTextToRemove = element.querySelectorAll('script, style');
                    // eslint-disable-next-line @typescript-eslint/prefer-for-of
                    for (var i = 0; i < elementsTextToRemove.length; i += 1) {
                        var innerText = elementsTextToRemove[i].innerText;
                        if (innerText.trim().length > 0) {
                            text = text.replace(innerText, '');
                        }
                    }
                }
                return text;
            }
            return element.textContent;
        }

        /**
         * Returns true if element.innerText excludes the text from inline SCRIPT and STYLE element.  This
         * should be the case everywhere except on some version of Internet Explorer.
         * See http://perfectionkills.com/the-poor-misunderstood-innerText/#diff-with-textContent
         */
        var supportsInnerTextScriptAndStyleRemovalResult;

        function supportsInnerTextScriptAndStyleRemoval() {
            if (supportsInnerTextScriptAndStyleRemovalResult === undefined) {
                var style = document.createElement('style');
                style.textContent = '*';
                var div = document.createElement('div');
                div.appendChild(style);
                document.body.appendChild(div);
                supportsInnerTextScriptAndStyleRemovalResult = div.innerText === '';
                document.body.removeChild(div);
            }
            return supportsInnerTextScriptAndStyleRemovalResult;
        }

        /**
         * Returns true if the browser supports the element.labels property.  This should be the case
         * everywhere except on Internet Explorer.
         * Note: The result is computed lazily, because we don't want any DOM access when the SDK is
         * evaluated.
         */
        var supportsLabelPropertyResult;

        function supportsLabelProperty() {
            if (supportsLabelPropertyResult === undefined) {
                supportsLabelPropertyResult = 'labels' in HTMLInputElement.prototype;
            }
            return supportsLabelPropertyResult;
        }

        /**
         * Returns true if the browser supports the element.closest method.  This should be the case
         * everywhere except on Internet Explorer.
         * Note: The result is computed lazily, because we don't want any DOM access when the SDK is
         * evaluated.
         */
        var supportsElementClosestResult;

        function supportsElementClosest() {
            if (supportsElementClosestResult === undefined) {
                supportsElementClosestResult = 'closest' in HTMLElement.prototype;
            }
            return supportsElementClosestResult;
        }


        /***/
    }),

    /***/ "../rum-core/src/domain/rumEventsCollection/action/trackActions.ts":
    /*!********************************************************************!*\
  !*** .-core/src/domain/rumEventsCollection/action/trackActions.ts ***!
  \********************************************************************/
    /*! exports provided: ActionType, trackActions */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ActionType", function () {
            return ActionType;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "trackActions", function () {
            return trackActions;
        });
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");
        /* harmony import */
        var _lifeCycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lifeCycle */ "../rum-core/src/domain/lifeCycle.ts");
        /* harmony import */
        var _trackEventCounts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../trackEventCounts */ "../rum-core/src/domain/trackEventCounts.ts");
        /* harmony import */
        var _trackPageActivities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../trackPageActivities */ "../rum-core/src/domain/trackPageActivities.ts");
        /* harmony import */
        var _getActionNameFromElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getActionNameFromElement */ "../rum-core/src/domain/rumEventsCollection/action/getActionNameFromElement.ts");


        var ActionType;
        (function (ActionType) {
            ActionType["CLICK"] = "click";
            ActionType["CUSTOM"] = "custom";
        })(ActionType || (ActionType = {}));

        function trackActions(lifeCycle) {
            var action = startActionManagement(lifeCycle);
            // New views trigger the discard of the current pending Action
            lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_1__["LifeCycleEventType"].VIEW_CREATED, function () {
                action.discardCurrent();
            });
            var stopListener = Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["addEventListener"])(window, _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["DOM_EVENT"].CLICK, function (event) {
                if (!(event.target instanceof Element)) {
                    return;
                }
                var name = Object(_getActionNameFromElement__WEBPACK_IMPORTED_MODULE_4__["getActionNameFromElement"])(event.target);
                if (!name) {
                    return;
                }
                action.create(ActionType.CLICK, name);
            }, {capture: true}).stop;
            return {
                stop: function () {
                    action.discardCurrent();
                    stopListener();
                }
            };
        }

        function startActionManagement(lifeCycle) {
            var currentAction;
            var currentIdlePageActivitySubscription;
            return {
                create: function (type, name) {
                    if (currentAction) {
                        // Ignore any new action if another one is already occurring.
                        return;
                    }
                    var pendingAutoAction = new PendingAutoAction(lifeCycle, type, name);
                    currentAction = pendingAutoAction;
                    currentIdlePageActivitySubscription = Object(_trackPageActivities__WEBPACK_IMPORTED_MODULE_3__["waitIdlePageActivity"])(lifeCycle, function (hadActivity, endTime) {
                        if (hadActivity) {
                            pendingAutoAction.complete(endTime);
                        } else {
                            pendingAutoAction.discard();
                        }
                        currentAction = undefined;
                    });
                },
                discardCurrent: function () {
                    if (currentAction) {
                        currentIdlePageActivitySubscription.stop();
                        currentAction.discard();
                        currentAction = undefined;
                    }
                }
            };
        }

        var PendingAutoAction = /** @class */ (function () {
            function PendingAutoAction(lifeCycle, type, name) {
                this.lifeCycle = lifeCycle;
                this.type = type;
                this.name = name;
                this.id = Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["generateUUID"])();
                this.startTime = performance.now();
                this.eventCountsSubscription = Object(_trackEventCounts__WEBPACK_IMPORTED_MODULE_2__["trackEventCounts"])(lifeCycle);
                this.lifeCycle.notify(_lifeCycle__WEBPACK_IMPORTED_MODULE_1__["LifeCycleEventType"].AUTO_ACTION_CREATED, {
                    id: this.id,
                    startTime: this.startTime
                });
            }

            PendingAutoAction.prototype.complete = function (endTime) {
                var eventCounts = this.eventCountsSubscription.eventCounts;
                this.lifeCycle.notify(_lifeCycle__WEBPACK_IMPORTED_MODULE_1__["LifeCycleEventType"].AUTO_ACTION_COMPLETED, {
                    counts: {
                        errorCount: eventCounts.errorCount,
                        longTaskCount: eventCounts.longTaskCount,
                        resourceCount: eventCounts.resourceCount
                    },
                    duration: endTime - this.startTime,
                    id: this.id,
                    name: this.name,
                    startTime: this.startTime,
                    type: this.type
                });
                this.eventCountsSubscription.stop();
            };
            PendingAutoAction.prototype.discard = function () {
                this.lifeCycle.notify(_lifeCycle__WEBPACK_IMPORTED_MODULE_1__["LifeCycleEventType"].AUTO_ACTION_DISCARDED);
                this.eventCountsSubscription.stop();
            };
            return PendingAutoAction;
        }());


        /***/
    }),

    /***/ "../rum-core/src/domain/rumEventsCollection/error/errorCollection.ts":
    /*!**********************************************************************!*\
  !*** .-core/src/domain/rumEventsCollection/error/errorCollection.ts ***!
  \**********************************************************************/
    /*! exports provided: startErrorCollection, doStartErrorCollection */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "startErrorCollection", function () {
            return startErrorCollection;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "doStartErrorCollection", function () {
            return doStartErrorCollection;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");
        /* harmony import */
        var _rawRumEvent_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../rawRumEvent.types */ "../rum-core/src/rawRumEvent.types.ts");
        /* harmony import */
        var _lifeCycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lifeCycle */ "../rum-core/src/domain/lifeCycle.ts");


        function startErrorCollection(lifeCycle, configuration) {
            return doStartErrorCollection(lifeCycle, Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["startAutomaticErrorCollection"])(configuration));
        }

        function doStartErrorCollection(lifeCycle, observable) {
            observable.subscribe(function (error) {
                return lifeCycle.notify(_lifeCycle__WEBPACK_IMPORTED_MODULE_3__["LifeCycleEventType"].RAW_RUM_EVENT_COLLECTED, processError(error));
            });
            return {
                addError: function (_a, savedCommonContext) {
                    var error = _a.error, startTime = _a.startTime, customerContext = _a.context, source = _a.source;
                    var rawError = computeRawError(error, startTime, source);
                    lifeCycle.notify(_lifeCycle__WEBPACK_IMPORTED_MODULE_3__["LifeCycleEventType"].RAW_RUM_EVENT_COLLECTED, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
                        customerContext: customerContext,
                        savedCommonContext: savedCommonContext
                    }, processError(rawError)));
                }
            };
        }

        function computeRawError(error, startTime, source) {
            var stackTrace = error instanceof Error ? Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["computeStackTrace"])(error) : undefined;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
                startTime: startTime,
                source: source
            }, Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["formatUnknownError"])(stackTrace, error, 'Provided'));
        }

        function processError(error) {
            var rawRumEvent = {
                date: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["getTimestamp"])(error.startTime),
                error: {
                    message: error.message,
                    resource: error.resource
                        ? {
                            method: error.resource.method,
                            status_code: error.resource.statusCode,
                            url: error.resource.url
                        }
                        : undefined,
                    source: error.source,
                    stack: error.stack,
                    type: error.type
                },
                type: _rawRumEvent_types__WEBPACK_IMPORTED_MODULE_2__["RumEventType"].ERROR
            };
            return {
                rawRumEvent: rawRumEvent,
                startTime: error.startTime
            };
        }


        /***/
    }),

    /***/ "../rum-core/src/domain/rumEventsCollection/longTask/longTaskCollection.ts":
    /*!****************************************************************************!*\
  !*** .-core/src/domain/rumEventsCollection/longTask/longTaskCollection.ts ***!
  \****************************************************************************/
    /*! exports provided: startLongTaskCollection */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "startLongTaskCollection", function () {
            return startLongTaskCollection;
        });
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");
        /* harmony import */
        var _rawRumEvent_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../rawRumEvent.types */ "../rum-core/src/rawRumEvent.types.ts");
        /* harmony import */
        var _lifeCycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lifeCycle */ "../rum-core/src/domain/lifeCycle.ts");


        function startLongTaskCollection(lifeCycle) {
            lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_2__["LifeCycleEventType"].PERFORMANCE_ENTRY_COLLECTED, function (entry) {
                if (entry.entryType !== 'longtask') {
                    return;
                }
                var rawRumEvent = {
                    date: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["getTimestamp"])(entry.startTime),
                    long_task: {
                        duration: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["msToNs"])(entry.duration)
                    },
                    type: _rawRumEvent_types__WEBPACK_IMPORTED_MODULE_1__["RumEventType"].LONG_TASK
                };
                lifeCycle.notify(_lifeCycle__WEBPACK_IMPORTED_MODULE_2__["LifeCycleEventType"].RAW_RUM_EVENT_COLLECTED, {
                    rawRumEvent: rawRumEvent,
                    startTime: entry.startTime
                });
            });
        }


        /***/
    }),

    /***/ "../rum-core/src/domain/rumEventsCollection/resource/matchRequestTiming.ts":
    /*!****************************************************************************!*\
  !*** .-core/src/domain/rumEventsCollection/resource/matchRequestTiming.ts ***!
  \****************************************************************************/
    /*! exports provided: matchRequestTiming */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "matchRequestTiming", function () {
            return matchRequestTiming;
        });
        /* harmony import */
        var _resourceUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resourceUtils */ "../rum-core/src/domain/rumEventsCollection/resource/resourceUtils.ts");

        /**
         * Look for corresponding timing in resource timing buffer
         *
         * Observations:
         * - Timing (start, end) are nested inside the request (start, end)
         * - Browsers generate a timing entry for OPTIONS request
         *
         * Strategy:
         * - from valid nested entries
         * - if a single timing match, return the timing
         * - if two following timings match (OPTIONS request), return the timing for the actual request
         * - otherwise we can't decide, return undefined
         */
        function matchRequestTiming(request) {
            if (!performance || !('getEntriesByName' in performance)) {
                return;
            }
            var sameNameEntries = performance.getEntriesByName(request.url, 'resource');
            if (!sameNameEntries.length || !('toJSON' in sameNameEntries[0])) {
                return;
            }
            var candidates = sameNameEntries
                .map(function (entry) {
                    return entry.toJSON();
                })
                .filter(_resourceUtils__WEBPACK_IMPORTED_MODULE_0__["toValidEntry"])
                .filter(function (entry) {
                    return isBetween(entry, request.startTime, endTime(request));
                });
            if (candidates.length === 1) {
                return candidates[0];
            }
            if (candidates.length === 2 && firstCanBeOptionRequest(candidates)) {
                return candidates[1];
            }
            return;
        }

        function firstCanBeOptionRequest(correspondingEntries) {
            return endTime(correspondingEntries[0]) <= correspondingEntries[1].startTime;
        }

        function endTime(timing) {
            return timing.startTime + timing.duration;
        }

        function isBetween(timing, start, end) {
            return timing.startTime >= start && endTime(timing) <= end;
        }


        /***/
    }),

    /***/ "../rum-core/src/domain/rumEventsCollection/resource/resourceCollection.ts":
    /*!****************************************************************************!*\
  !*** .-core/src/domain/rumEventsCollection/resource/resourceCollection.ts ***!
  \****************************************************************************/
    /*! exports provided: startResourceCollection */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "startResourceCollection", function () {
            return startResourceCollection;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");
        /* harmony import */
        var _rawRumEvent_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../rawRumEvent.types */ "../rum-core/src/rawRumEvent.types.ts");
        /* harmony import */
        var _lifeCycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lifeCycle */ "../rum-core/src/domain/lifeCycle.ts");
        /* harmony import */
        var _matchRequestTiming__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./matchRequestTiming */ "../rum-core/src/domain/rumEventsCollection/resource/matchRequestTiming.ts");
        /* harmony import */
        var _resourceUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resourceUtils */ "../rum-core/src/domain/rumEventsCollection/resource/resourceUtils.ts");


        function startResourceCollection(lifeCycle, session) {
            lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_3__["LifeCycleEventType"].REQUEST_COMPLETED, function (request) {
                if (session.isTrackedWithResource()) {
                    lifeCycle.notify(_lifeCycle__WEBPACK_IMPORTED_MODULE_3__["LifeCycleEventType"].RAW_RUM_EVENT_COLLECTED, processRequest(request));
                }
            });
            lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_3__["LifeCycleEventType"].PERFORMANCE_ENTRY_COLLECTED, function (entry) {
                if (session.isTrackedWithResource() && entry.entryType === 'resource' && !Object(_resourceUtils__WEBPACK_IMPORTED_MODULE_5__["isRequestKind"])(entry)) {
                    lifeCycle.notify(_lifeCycle__WEBPACK_IMPORTED_MODULE_3__["LifeCycleEventType"].RAW_RUM_EVENT_COLLECTED, processResourceEntry(entry));
                }
            });
        }

        function processRequest(request) {
            var type = request.type === _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["RequestType"].XHR ? _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["ResourceType"].XHR : _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["ResourceType"].FETCH;
            var matchingTiming = Object(_matchRequestTiming__WEBPACK_IMPORTED_MODULE_4__["matchRequestTiming"])(request);
            var startTime = matchingTiming ? matchingTiming.startTime : request.startTime;
            var correspondingTimingOverrides = matchingTiming ? computePerformanceEntryMetrics(matchingTiming) : undefined;
            var tracingInfo = computeRequestTracingInfo(request);
            var resourceEvent = Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["combine"])({
                date: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["getTimestamp"])(startTime),
                resource: {
                    type: type,
                    duration: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["msToNs"])(request.duration),
                    method: request.method,
                    status_code: request.status,
                    url: request.url
                },
                type: _rawRumEvent_types__WEBPACK_IMPORTED_MODULE_2__["RumEventType"].RESOURCE
            }, tracingInfo, correspondingTimingOverrides);
            return {startTime: startTime, rawRumEvent: resourceEvent};
        }

        function processResourceEntry(entry) {
            var type = Object(_resourceUtils__WEBPACK_IMPORTED_MODULE_5__["computeResourceKind"])(entry);
            var entryMetrics = computePerformanceEntryMetrics(entry);
            var tracingInfo = computeEntryTracingInfo(entry);
            var resourceEvent = Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["combine"])({
                date: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["getTimestamp"])(entry.startTime),
                resource: {
                    type: type,
                    url: entry.name
                },
                type: _rawRumEvent_types__WEBPACK_IMPORTED_MODULE_2__["RumEventType"].RESOURCE
            }, tracingInfo, entryMetrics);
            return {startTime: entry.startTime, rawRumEvent: resourceEvent};
        }

        function computePerformanceEntryMetrics(timing) {
            return {
                resource: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
                    duration: Object(_resourceUtils__WEBPACK_IMPORTED_MODULE_5__["computePerformanceResourceDuration"])(timing),
                    size: Object(_resourceUtils__WEBPACK_IMPORTED_MODULE_5__["computeSize"])(timing)
                }, Object(_resourceUtils__WEBPACK_IMPORTED_MODULE_5__["computePerformanceResourceDetails"])(timing))
            };
        }

        function computeRequestTracingInfo(request) {
            var hasBeenTraced = request.traceId && request.spanId;
            if (!hasBeenTraced) {
                return undefined;
            }
            return {
                _dd: {
                    span_id: request.spanId.toDecimalString(),
                    trace_id: request.traceId.toDecimalString()
                },
                resource: {id: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["generateUUID"])()}
            };
        }

        function computeEntryTracingInfo(entry) {
            return entry.traceId ? {_dd: {trace_id: entry.traceId}} : undefined;
        }


        /***/
    }),

    /***/ "../rum-core/src/domain/rumEventsCollection/resource/resourceUtils.ts":
    /*!***********************************************************************!*\
  !*** .-core/src/domain/rumEventsCollection/resource/resourceUtils.ts ***!
  \***********************************************************************/
    /*! exports provided: FAKE_INITIAL_DOCUMENT, computeResourceKind, isRequestKind, computePerformanceResourceDuration, computePerformanceResourceDetails, toValidEntry, computeSize, isAllowedRequestUrl */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "FAKE_INITIAL_DOCUMENT", function () {
            return FAKE_INITIAL_DOCUMENT;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "computeResourceKind", function () {
            return computeResourceKind;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "isRequestKind", function () {
            return isRequestKind;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "computePerformanceResourceDuration", function () {
            return computePerformanceResourceDuration;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "computePerformanceResourceDetails", function () {
            return computePerformanceResourceDetails;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "toValidEntry", function () {
            return toValidEntry;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "computeSize", function () {
            return computeSize;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "isAllowedRequestUrl", function () {
            return isAllowedRequestUrl;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");


        var FAKE_INITIAL_DOCUMENT = 'initial_document';
        var RESOURCE_TYPES = [
            [_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["ResourceType"].DOCUMENT, function (initiatorType) {
                return FAKE_INITIAL_DOCUMENT === initiatorType;
            }],
            [_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["ResourceType"].XHR, function (initiatorType) {
                return 'xmlhttprequest' === initiatorType;
            }],
            [_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["ResourceType"].FETCH, function (initiatorType) {
                return 'fetch' === initiatorType;
            }],
            [_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["ResourceType"].BEACON, function (initiatorType) {
                return 'beacon' === initiatorType;
            }],
            [_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["ResourceType"].CSS, function (_, path) {
                return /\.css$/i.test(path);
            }],
            [_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["ResourceType"].JS, function (_, path) {
                return /\.js$/i.test(path);
            }],
            [
                _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["ResourceType"].IMAGE,
                function (initiatorType, path) {
                    return Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["includes"])(['image', 'img', 'icon'], initiatorType) || /\.(gif|jpg|jpeg|tiff|png|svg|ico)$/i.exec(path) !== null;
                }
            ],
            [_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["ResourceType"].FONT, function (_, path) {
                return /\.(woff|eot|woff2|ttf)$/i.exec(path) !== null;
            }],
            [
                _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["ResourceType"].MEDIA,
                function (initiatorType, path) {
                    return Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["includes"])(['audio', 'video'], initiatorType) || /\.(mp3|mp4)$/i.exec(path) !== null;
                }
            ]
        ];

        function computeResourceKind(timing) {
            var url = timing.name;
            if (!Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["isValidUrl"])(url)) {
                Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["addMonitoringMessage"])("Failed to construct URL for \"" + timing.name + "\"");
                return _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["ResourceType"].OTHER;
            }
            var path = Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["getPathName"])(url);
            for (var _i = 0, RESOURCE_TYPES_1 = RESOURCE_TYPES; _i < RESOURCE_TYPES_1.length; _i++) {
                var _a = RESOURCE_TYPES_1[_i], type = _a[0], isType = _a[1];
                if (isType(timing.initiatorType, path)) {
                    return type;
                }
            }
            return _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["ResourceType"].OTHER;
        }

        function areInOrder() {
            var numbers = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                numbers[_i] = arguments[_i];
            }
            for (var i = 1; i < numbers.length; i += 1) {
                if (numbers[i - 1] > numbers[i]) {
                    return false;
                }
            }
            return true;
        }

        function isRequestKind(timing) {
            return timing.initiatorType === 'xmlhttprequest' || timing.initiatorType === 'fetch';
        }

        function computePerformanceResourceDuration(entry) {
            var duration = entry.duration, startTime = entry.startTime, responseEnd = entry.responseEnd;
            // Safari duration is always 0 on timings blocked by cross origin policies.
            if (duration === 0 && startTime < responseEnd) {
                return Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["msToNs"])(responseEnd - startTime);
            }
            return Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["msToNs"])(duration);
        }

        function computePerformanceResourceDetails(entry) {
            var validEntry = toValidEntry(entry);
            if (!validEntry) {
                return undefined;
            }
            var startTime = validEntry.startTime, fetchStart = validEntry.fetchStart,
                redirectStart = validEntry.redirectStart, redirectEnd = validEntry.redirectEnd,
                domainLookupStart = validEntry.domainLookupStart, domainLookupEnd = validEntry.domainLookupEnd,
                connectStart = validEntry.connectStart, secureConnectionStart = validEntry.secureConnectionStart,
                connectEnd = validEntry.connectEnd, requestStart = validEntry.requestStart,
                responseStart = validEntry.responseStart, responseEnd = validEntry.responseEnd;
            var details = {
                download: formatTiming(startTime, responseStart, responseEnd),
                first_byte: formatTiming(startTime, requestStart, responseStart)
            };
            // Make sure a connection occurred
            if (connectEnd !== fetchStart) {
                details.connect = formatTiming(startTime, connectStart, connectEnd);
                // Make sure a secure connection occurred
                if (areInOrder(connectStart, secureConnectionStart, connectEnd)) {
                    details.ssl = formatTiming(startTime, secureConnectionStart, connectEnd);
                }
            }
            // Make sure a domain lookup occurred
            if (domainLookupEnd !== fetchStart) {
                details.dns = formatTiming(startTime, domainLookupStart, domainLookupEnd);
            }
            if (hasRedirection(entry)) {
                details.redirect = formatTiming(startTime, redirectStart, redirectEnd);
            }
            return details;
        }

        function toValidEntry(entry) {
            // Ensure timings are in the right order. On top of filtering out potential invalid
            // RumPerformanceResourceTiming, it will ignore entries from requests where timings cannot be
            // collected, for example cross origin requests without a "Timing-Allow-Origin" header allowing
            // it.
            if (!areInOrder(entry.startTime, entry.fetchStart, entry.domainLookupStart, entry.domainLookupEnd, entry.connectStart, entry.connectEnd, entry.requestStart, entry.responseStart, entry.responseEnd)) {
                return undefined;
            }
            if (!hasRedirection(entry)) {
                return entry;
            }
            var redirectStart = entry.redirectStart, redirectEnd = entry.redirectEnd;
            // Firefox doesn't provide redirect timings on cross origin requests.
            // Provide a default for those.
            if (redirectStart < entry.startTime) {
                redirectStart = entry.startTime;
            }
            if (redirectEnd < entry.startTime) {
                redirectEnd = entry.fetchStart;
            }
            // Make sure redirect timings are in order
            if (!areInOrder(entry.startTime, redirectStart, redirectEnd, entry.fetchStart)) {
                return undefined;
            }
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, entry), {
                redirectEnd: redirectEnd,
                redirectStart: redirectStart
            });
        }

        function hasRedirection(entry) {
            // The only time fetchStart is different than startTime is if a redirection occurred.
            return entry.fetchStart !== entry.startTime;
        }

        function formatTiming(origin, start, end) {
            return {
                duration: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["msToNs"])(end - start),
                start: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["msToNs"])(start - origin)
            };
        }

        function computeSize(entry) {
            // Make sure a request actually occurred
            if (entry.startTime < entry.responseStart) {
                return entry.decodedBodySize;
            }
            return undefined;
        }

        function isAllowedRequestUrl(configuration, url) {
            return url && !configuration.isIntakeUrl(url);
        }


        /***/
    }),

    /***/ "../rum-core/src/domain/rumEventsCollection/view/trackFirstHidden.ts":
    /*!**********************************************************************!*\
  !*** .-core/src/domain/rumEventsCollection/view/trackFirstHidden.ts ***!
  \**********************************************************************/
    /*! exports provided: trackFirstHidden, resetFirstHidden */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "trackFirstHidden", function () {
            return trackFirstHidden;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "resetFirstHidden", function () {
            return resetFirstHidden;
        });
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");

        var trackFirstHiddenSingleton;
        var stopListeners;

        function trackFirstHidden(emitter) {
            if (emitter === void 0) {
                emitter = window;
            }
            if (!trackFirstHiddenSingleton) {
                if (document.visibilityState === 'hidden') {
                    trackFirstHiddenSingleton = {timeStamp: 0};
                } else {
                    trackFirstHiddenSingleton = {
                        timeStamp: Infinity
                    };
                    (stopListeners = Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["addEventListener"])(emitter, _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["DOM_EVENT"].PAGE_HIDE, function (_a) {
                        var timeStamp = _a.timeStamp;
                        trackFirstHiddenSingleton.timeStamp = timeStamp;
                    }, {capture: true, once: true}).stop);
                }
            }
            return trackFirstHiddenSingleton;
        }

        function resetFirstHidden() {
            if (stopListeners) {
                stopListeners();
            }
            trackFirstHiddenSingleton = undefined;
        }


        /***/
    }),

    /***/ "../rum-core/src/domain/rumEventsCollection/view/trackTimings.ts":
    /*!******************************************************************!*\
  !*** .-core/src/domain/rumEventsCollection/view/trackTimings.ts ***!
  \******************************************************************/
    /*! exports provided: trackTimings, trackNavigationTimings, trackFirstContentfulPaint, trackLargestContentfulPaint, trackFirstInputTimings */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "trackTimings", function () {
            return trackTimings;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "trackNavigationTimings", function () {
            return trackNavigationTimings;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "trackFirstContentfulPaint", function () {
            return trackFirstContentfulPaint;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "trackLargestContentfulPaint", function () {
            return trackLargestContentfulPaint;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "trackFirstInputTimings", function () {
            return trackFirstInputTimings;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");
        /* harmony import */
        var _lifeCycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lifeCycle */ "../rum-core/src/domain/lifeCycle.ts");
        /* harmony import */
        var _trackFirstHidden__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trackFirstHidden */ "../rum-core/src/domain/rumEventsCollection/view/trackFirstHidden.ts");


        function trackTimings(lifeCycle, callback) {
            var timings;

            function setTimings(newTimings) {
                timings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, timings), newTimings);
                callback(timings);
            }

            var stopNavigationTracking = trackNavigationTimings(lifeCycle, setTimings).stop;
            var stopFCPTracking = trackFirstContentfulPaint(lifeCycle, function (firstContentfulPaint) {
                return setTimings({firstContentfulPaint: firstContentfulPaint});
            }).stop;
            var stopLCPTracking = trackLargestContentfulPaint(lifeCycle, window, function (largestContentfulPaint) {
                setTimings({
                    largestContentfulPaint: largestContentfulPaint
                });
            }).stop;
            var stopFIDTracking = trackFirstInputTimings(lifeCycle, function (_a) {
                var firstInputDelay = _a.firstInputDelay, firstInputTime = _a.firstInputTime;
                setTimings({
                    firstInputDelay: firstInputDelay,
                    firstInputTime: firstInputTime
                });
            }).stop;
            return {
                stop: function () {
                    stopNavigationTracking();
                    stopFCPTracking();
                    stopLCPTracking();
                    stopFIDTracking();
                }
            };
        }

        function trackNavigationTimings(lifeCycle, callback) {
            var stop = lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_2__["LifeCycleEventType"].PERFORMANCE_ENTRY_COLLECTED, function (entry) {
                if (entry.entryType === 'navigation') {
                    callback({
                        domComplete: entry.domComplete,
                        domContentLoaded: entry.domContentLoadedEventEnd,
                        domInteractive: entry.domInteractive,
                        loadEvent: entry.loadEventEnd
                    });
                }
            }).unsubscribe;
            return {stop: stop};
        }

        function trackFirstContentfulPaint(lifeCycle, callback) {
            var firstHidden = Object(_trackFirstHidden__WEBPACK_IMPORTED_MODULE_3__["trackFirstHidden"])();
            var stop = lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_2__["LifeCycleEventType"].PERFORMANCE_ENTRY_COLLECTED, function (entry) {
                if (entry.entryType === 'paint' &&
                    entry.name === 'first-contentful-paint' &&
                    entry.startTime < firstHidden.timeStamp) {
                    callback(entry.startTime);
                }
            }).unsubscribe;
            return {stop: stop};
        }

        /**
         * Track the largest contentful paint (LCP) occurring during the initial View.  This can yield
         * multiple values, only the most recent one should be used.
         * Documentation: https://web.dev/lcp/
         * Reference implementation: https://github.com/GoogleChrome/web-vitals/blob/master/src/getLCP.ts
         */
        function trackLargestContentfulPaint(lifeCycle, emitter, callback) {
            var firstHidden = Object(_trackFirstHidden__WEBPACK_IMPORTED_MODULE_3__["trackFirstHidden"])();
            // Ignore entries that come after the first user interaction.  According to the documentation, the
            // browser should not send largest-contentful-paint entries after a user interact with the page,
            // but the web-vitals reference implementation uses this as a safeguard.
            var firstInteractionTimestamp = Infinity;
            var stopEventListener = Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["addEventListeners"])(emitter, [_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["DOM_EVENT"].POINTER_DOWN, _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["DOM_EVENT"].KEY_DOWN], function (event) {
                firstInteractionTimestamp = event.timeStamp;
            }, {capture: true, once: true}).stop;
            var unsubcribeLifeCycle = lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_2__["LifeCycleEventType"].PERFORMANCE_ENTRY_COLLECTED, function (entry) {
                if (entry.entryType === 'largest-contentful-paint' &&
                    entry.startTime < firstInteractionTimestamp &&
                    entry.startTime < firstHidden.timeStamp) {
                    callback(entry.startTime);
                }
            }).unsubscribe;
            return {
                stop: function () {
                    stopEventListener();
                    unsubcribeLifeCycle();
                }
            };
        }

        /**
         * Track the first input occurring during the initial View to return:
         * - First Input Delay
         * - First Input Time
         * Callback is called at most one time.
         * Documentation: https://web.dev/fid/
         * Reference implementation: https://github.com/GoogleChrome/web-vitals/blob/master/src/getFID.ts
         */
        function trackFirstInputTimings(lifeCycle, callback) {
            var firstHidden = Object(_trackFirstHidden__WEBPACK_IMPORTED_MODULE_3__["trackFirstHidden"])();
            var stop = lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_2__["LifeCycleEventType"].PERFORMANCE_ENTRY_COLLECTED, function (entry) {
                if (entry.entryType === 'first-input' && entry.startTime < firstHidden.timeStamp) {
                    callback({
                        firstInputDelay: entry.processingStart - entry.startTime,
                        firstInputTime: entry.startTime
                    });
                }
            }).unsubscribe;
            return {
                stop: stop
            };
        }


        /***/
    }),

    /***/ "../rum-core/src/domain/rumEventsCollection/view/trackViews.ts":
    /*!****************************************************************!*\
  !*** .-core/src/domain/rumEventsCollection/view/trackViews.ts ***!
  \****************************************************************/
    /*! exports provided: ViewLoadingType, THROTTLE_VIEW_UPDATE_PERIOD, SESSION_KEEP_ALIVE_INTERVAL, trackViews */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "ViewLoadingType", function () {
            return ViewLoadingType;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "THROTTLE_VIEW_UPDATE_PERIOD", function () {
            return THROTTLE_VIEW_UPDATE_PERIOD;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "SESSION_KEEP_ALIVE_INTERVAL", function () {
            return SESSION_KEEP_ALIVE_INTERVAL;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "trackViews", function () {
            return trackViews;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");
        /* harmony import */
        var _browser_performanceCollection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../browser/performanceCollection */ "../rum-core/src/browser/performanceCollection.ts");
        /* harmony import */
        var _lifeCycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lifeCycle */ "../rum-core/src/domain/lifeCycle.ts");
        /* harmony import */
        var _trackEventCounts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../trackEventCounts */ "../rum-core/src/domain/trackEventCounts.ts");
        /* harmony import */
        var _trackPageActivities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../trackPageActivities */ "../rum-core/src/domain/trackPageActivities.ts");
        /* harmony import */
        var _trackTimings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trackTimings */ "../rum-core/src/domain/rumEventsCollection/view/trackTimings.ts");


        var ViewLoadingType;
        (function (ViewLoadingType) {
            ViewLoadingType["INITIAL_LOAD"] = "initial_load";
            ViewLoadingType["ROUTE_CHANGE"] = "route_change";
        })(ViewLoadingType || (ViewLoadingType = {}));
        var THROTTLE_VIEW_UPDATE_PERIOD = 3000;
        var SESSION_KEEP_ALIVE_INTERVAL = 5 * _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["ONE_MINUTE"];

        function trackViews(location, lifeCycle) {
            var startOrigin = 0;
            var initialView = newView(lifeCycle, location, ViewLoadingType.INITIAL_LOAD, document.referrer, startOrigin);
            var currentView = initialView;
            var stopTimingsTracking = Object(_trackTimings__WEBPACK_IMPORTED_MODULE_6__["trackTimings"])(lifeCycle, function (timings) {
                initialView.updateTimings(timings);
                initialView.scheduleUpdate();
            }).stop;
            trackHistory(onLocationChange);
            trackHash(onLocationChange);

            function onLocationChange() {
                if (currentView.isDifferentView(location)) {
                    // Renew view on location changes
                    currentView.end();
                    currentView.triggerUpdate();
                    currentView = newView(lifeCycle, location, ViewLoadingType.ROUTE_CHANGE, currentView.getUrl());
                } else {
                    currentView.updateLocation(location);
                    currentView.triggerUpdate();
                }
            }

            // Renew view on session renewal
            lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_3__["LifeCycleEventType"].SESSION_RENEWED, function () {
                // do not trigger view update to avoid wrong data
                currentView.end();
                currentView = newView(lifeCycle, location, ViewLoadingType.ROUTE_CHANGE, currentView.getUrl());
            });
            // End the current view on page unload
            lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_3__["LifeCycleEventType"].BEFORE_UNLOAD, function () {
                currentView.end();
                currentView.triggerUpdate();
            });
            // Session keep alive
            var keepAliveInterval = window.setInterval(Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["monitor"])(function () {
                currentView.triggerUpdate();
            }), SESSION_KEEP_ALIVE_INTERVAL);
            return {
                addTiming: function (name, time) {
                    if (time === void 0) {
                        time = performance.now();
                    }
                    currentView.addTiming(name, time);
                    currentView.triggerUpdate();
                },
                stop: function () {
                    stopTimingsTracking();
                    currentView.end();
                    clearInterval(keepAliveInterval);
                }
            };
        }

        function newView(lifeCycle, initialLocation, loadingType, referrer, startTime) {
            if (startTime === void 0) {
                startTime = performance.now();
            }
            // Setup initial values
            var id = Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["generateUUID"])();
            var eventCounts = {
                errorCount: 0,
                longTaskCount: 0,
                resourceCount: 0,
                userActionCount: 0
            };
            var timings = {};
            var customTimings = {};
            var documentVersion = 0;
            var cumulativeLayoutShift;
            var loadingTime;
            var endTime;
            var location = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, initialLocation);
            lifeCycle.notify(_lifeCycle__WEBPACK_IMPORTED_MODULE_3__["LifeCycleEventType"].VIEW_CREATED, {
                id: id,
                startTime: startTime,
                location: location,
                referrer: referrer
            });
            // Update the view every time the measures are changing
            var _a = Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["throttle"])(Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["monitor"])(triggerViewUpdate), THROTTLE_VIEW_UPDATE_PERIOD, {
                leading: false
            }), scheduleViewUpdate = _a.throttled, cancelScheduleViewUpdate = _a.cancel;
            var stopEventCountsTracking = Object(_trackEventCounts__WEBPACK_IMPORTED_MODULE_4__["trackEventCounts"])(lifeCycle, function (newEventCounts) {
                eventCounts = newEventCounts;
                scheduleViewUpdate();
            }).stop;
            var _b = trackLoadingTime(loadingType, function (newLoadingTime) {
                loadingTime = newLoadingTime;
                scheduleViewUpdate();
            }), setActivityLoadingTime = _b.setActivityLoadingTime, setLoadEvent = _b.setLoadEvent;
            var stopActivityLoadingTimeTracking = trackActivityLoadingTime(lifeCycle, setActivityLoadingTime).stop;
            var stopCLSTracking;
            if (isLayoutShiftSupported()) {
                cumulativeLayoutShift = 0;
                (stopCLSTracking = trackLayoutShift(lifeCycle, function (layoutShift) {
                    cumulativeLayoutShift += layoutShift;
                    scheduleViewUpdate();
                }).stop);
            } else {
                stopCLSTracking = _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["noop"];
            }
            // Initial view update
            triggerViewUpdate();

            function triggerViewUpdate() {
                documentVersion += 1;
                lifeCycle.notify(_lifeCycle__WEBPACK_IMPORTED_MODULE_3__["LifeCycleEventType"].VIEW_UPDATED, {
                    cumulativeLayoutShift: cumulativeLayoutShift,
                    customTimings: customTimings,
                    documentVersion: documentVersion,
                    eventCounts: eventCounts,
                    id: id,
                    loadingTime: loadingTime,
                    loadingType: loadingType,
                    location: location,
                    referrer: referrer,
                    startTime: startTime,
                    timings: timings,
                    duration: (endTime === undefined ? performance.now() : endTime) - startTime,
                    isActive: endTime === undefined
                });
            }

            return {
                scheduleUpdate: scheduleViewUpdate,
                end: function () {
                    endTime = performance.now();
                    stopEventCountsTracking();
                    stopActivityLoadingTimeTracking();
                    stopCLSTracking();
                    lifeCycle.notify(_lifeCycle__WEBPACK_IMPORTED_MODULE_3__["LifeCycleEventType"].VIEW_ENDED);
                },
                isDifferentView: function (otherLocation) {
                    return (location.pathname !== otherLocation.pathname ||
                        (!isHashAnAnchor(otherLocation.hash) && otherLocation.hash !== location.hash));
                },
                triggerUpdate: function () {
                    // cancel any pending view updates execution
                    cancelScheduleViewUpdate();
                    triggerViewUpdate();
                },
                updateTimings: function (newTimings) {
                    timings = newTimings;
                    if (newTimings.loadEvent !== undefined) {
                        setLoadEvent(newTimings.loadEvent);
                    }
                },
                addTiming: function (name, time) {
                    customTimings[sanitizeTiming(name)] = time - startTime;
                },
                updateLocation: function (newLocation) {
                    location = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, newLocation);
                },
                getUrl: function () {
                    return location.href;
                }
            };
        }

        function isHashAnAnchor(hash) {
            var correspondingId = hash.substr(1);
            return !!document.getElementById(correspondingId);
        }

        function trackHistory(onHistoryChange) {
            // eslint-disable-next-line @typescript-eslint/unbound-method
            var originalPushState = history.pushState;
            history.pushState = Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["monitor"])(function () {
                originalPushState.apply(this, arguments);
                onHistoryChange();
            });
            // eslint-disable-next-line @typescript-eslint/unbound-method
            var originalReplaceState = history.replaceState;
            history.replaceState = Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["monitor"])(function () {
                originalReplaceState.apply(this, arguments);
                onHistoryChange();
            });
            Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["addEventListener"])(window, _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["DOM_EVENT"].POP_STATE, onHistoryChange);
        }

        function trackHash(onHashChange) {
            Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["addEventListener"])(window, _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["DOM_EVENT"].HASH_CHANGE, onHashChange);
        }

        function trackLoadingTime(loadType, callback) {
            var isWaitingForLoadEvent = loadType === ViewLoadingType.INITIAL_LOAD;
            var isWaitingForActivityLoadingTime = true;
            var loadingTimeCandidates = [];

            function invokeCallbackIfAllCandidatesAreReceived() {
                if (!isWaitingForActivityLoadingTime && !isWaitingForLoadEvent && loadingTimeCandidates.length > 0) {
                    callback(Math.max.apply(Math, loadingTimeCandidates));
                }
            }

            return {
                setLoadEvent: function (loadEvent) {
                    if (isWaitingForLoadEvent) {
                        isWaitingForLoadEvent = false;
                        loadingTimeCandidates.push(loadEvent);
                        invokeCallbackIfAllCandidatesAreReceived();
                    }
                },
                setActivityLoadingTime: function (activityLoadingTime) {
                    if (isWaitingForActivityLoadingTime) {
                        isWaitingForActivityLoadingTime = false;
                        if (activityLoadingTime !== undefined) {
                            loadingTimeCandidates.push(activityLoadingTime);
                        }
                        invokeCallbackIfAllCandidatesAreReceived();
                    }
                }
            };
        }

        function trackActivityLoadingTime(lifeCycle, callback) {
            var startTime = performance.now();
            var stopWaitIdlePageActivity = Object(_trackPageActivities__WEBPACK_IMPORTED_MODULE_5__["waitIdlePageActivity"])(lifeCycle, function (hadActivity, endTime) {
                if (hadActivity) {
                    callback(endTime - startTime);
                } else {
                    callback(undefined);
                }
            }).stop;
            return {stop: stopWaitIdlePageActivity};
        }

        /**
         * Track layout shifts (LS) occuring during the Views.  This yields multiple values that can be
         * added up to compute the cumulated layout shift (CLS).
         *
         * See isLayoutShiftSupported to check for browser support.
         *
         * Documentation: https://web.dev/cls/
         * Reference implementation: https://github.com/GoogleChrome/web-vitals/blob/master/src/getCLS.ts
         */
        function trackLayoutShift(lifeCycle, callback) {
            var stop = lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_3__["LifeCycleEventType"].PERFORMANCE_ENTRY_COLLECTED, function (entry) {
                if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
                    callback(entry.value);
                }
            }).unsubscribe;
            return {
                stop: stop
            };
        }

        /**
         * Check whether `layout-shift` is supported by the browser.
         */
        function isLayoutShiftSupported() {
            return Object(_browser_performanceCollection__WEBPACK_IMPORTED_MODULE_2__["supportPerformanceTimingEvent"])('layout-shift');
        }

        /**
         * Timing name is used as facet path that must contain only letters, digits, or the characters - _ . @ $
         */
        function sanitizeTiming(name) {
            var sanitized = name.replace(/[^a-zA-Z0-9-_.@$]/g, '_');
            if (sanitized !== name) {
                console.warn("Invalid timing name: " + name + ", sanitized to: " + sanitized);
            }
            return sanitized;
        }


        /***/
    }),

    /***/ "../rum-core/src/domain/rumEventsCollection/view/viewCollection.ts":
    /*!********************************************************************!*\
  !*** .-core/src/domain/rumEventsCollection/view/viewCollection.ts ***!
  \********************************************************************/
    /*! exports provided: startViewCollection */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "startViewCollection", function () {
            return startViewCollection;
        });
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");
        /* harmony import */
        var _rawRumEvent_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../rawRumEvent.types */ "../rum-core/src/rawRumEvent.types.ts");
        /* harmony import */
        var _lifeCycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lifeCycle */ "../rum-core/src/domain/lifeCycle.ts");
        /* harmony import */
        var _trackViews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trackViews */ "../rum-core/src/domain/rumEventsCollection/view/trackViews.ts");


        function startViewCollection(lifeCycle, location) {
            lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_2__["LifeCycleEventType"].VIEW_UPDATED, function (view) {
                return lifeCycle.notify(_lifeCycle__WEBPACK_IMPORTED_MODULE_2__["LifeCycleEventType"].RAW_RUM_EVENT_COLLECTED, processViewUpdate(view));
            });
            return Object(_trackViews__WEBPACK_IMPORTED_MODULE_3__["trackViews"])(location, lifeCycle);
        }

        function processViewUpdate(view) {
            var viewEvent = {
                _dd: {
                    document_version: view.documentVersion
                },
                date: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["getTimestamp"])(view.startTime),
                type: _rawRumEvent_types__WEBPACK_IMPORTED_MODULE_1__["RumEventType"].VIEW,
                view: {
                    action: {
                        count: view.eventCounts.userActionCount
                    },
                    cumulative_layout_shift: view.cumulativeLayoutShift,
                    dom_complete: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["msToNs"])(view.timings.domComplete),
                    dom_content_loaded: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["msToNs"])(view.timings.domContentLoaded),
                    dom_interactive: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["msToNs"])(view.timings.domInteractive),
                    error: {
                        count: view.eventCounts.errorCount
                    },
                    first_contentful_paint: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["msToNs"])(view.timings.firstContentfulPaint),
                    first_input_delay: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["msToNs"])(view.timings.firstInputDelay),
                    first_input_time: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["msToNs"])(view.timings.firstInputTime),
                    is_active: view.isActive,
                    largest_contentful_paint: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["msToNs"])(view.timings.largestContentfulPaint),
                    load_event: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["msToNs"])(view.timings.loadEvent),
                    loading_time: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["msToNs"])(view.loadingTime),
                    loading_type: view.loadingType,
                    long_task: {
                        count: view.eventCounts.longTaskCount
                    },
                    resource: {
                        count: view.eventCounts.resourceCount
                    },
                    time_spent: Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["msToNs"])(view.duration)
                }
            };
            if (!Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["isEmptyObject"])(view.customTimings)) {
                viewEvent.view.custom_timings = Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["mapValues"])(view.customTimings, _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["msToNs"]);
            }
            return {
                rawRumEvent: viewEvent,
                startTime: view.startTime
            };
        }


        /***/
    }),

    /***/ "../rum-core/src/domain/rumSession.ts":
    /*!***************************************!*\
  !*** .-core/src/domain/rumSession.ts ***!
  \***************************************/
    /*! exports provided: RUM_SESSION_KEY, RumTrackingType, startRumSession */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RUM_SESSION_KEY", function () {
            return RUM_SESSION_KEY;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RumTrackingType", function () {
            return RumTrackingType;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "startRumSession", function () {
            return startRumSession;
        });
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");
        /* harmony import */
        var _lifeCycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lifeCycle */ "../rum-core/src/domain/lifeCycle.ts");


        var RUM_SESSION_KEY = 'rum';
        var RumTrackingType;
        (function (RumTrackingType) {
            RumTrackingType["NOT_TRACKED"] = "0";
            RumTrackingType["TRACKED_WITH_RESOURCES"] = "1";
            RumTrackingType["TRACKED_WITHOUT_RESOURCES"] = "2";
        })(RumTrackingType || (RumTrackingType = {}));

        function startRumSession(configuration, lifeCycle) {
            var session = Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["startSessionManagement"])(configuration.cookieOptions, RUM_SESSION_KEY, function (rawTrackingType) {
                return computeSessionState(configuration, rawTrackingType);
            });
            session.renewObservable.subscribe(function () {
                lifeCycle.notify(_lifeCycle__WEBPACK_IMPORTED_MODULE_1__["LifeCycleEventType"].SESSION_RENEWED);
            });
            return {
                getId: session.getId,
                isTracked: function () {
                    return session.getId() !== undefined && isTracked(session.getTrackingType());
                },
                isTrackedWithResource: function () {
                    return session.getId() !== undefined && session.getTrackingType() === RumTrackingType.TRACKED_WITH_RESOURCES;
                }
            };
        }

        function computeSessionState(configuration, rawTrackingType) {
            var trackingType;
            if (hasValidRumSession(rawTrackingType)) {
                trackingType = rawTrackingType;
            } else if (!Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["performDraw"])(configuration.sampleRate)) {
                trackingType = RumTrackingType.NOT_TRACKED;
            } else if (!Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["performDraw"])(configuration.resourceSampleRate)) {
                trackingType = RumTrackingType.TRACKED_WITHOUT_RESOURCES;
            } else {
                trackingType = RumTrackingType.TRACKED_WITH_RESOURCES;
            }
            return {
                trackingType: trackingType,
                isTracked: isTracked(trackingType)
            };
        }

        function hasValidRumSession(trackingType) {
            return (trackingType === RumTrackingType.NOT_TRACKED ||
                trackingType === RumTrackingType.TRACKED_WITH_RESOURCES ||
                trackingType === RumTrackingType.TRACKED_WITHOUT_RESOURCES);
        }

        function isTracked(rumSessionType) {
            return (rumSessionType === RumTrackingType.TRACKED_WITH_RESOURCES ||
                rumSessionType === RumTrackingType.TRACKED_WITHOUT_RESOURCES);
        }


        /***/
    }),

    /***/ "../rum-core/src/domain/tracing/getDocumentTraceId.ts":
    /*!*******************************************************!*\
  !*** .-core/src/domain/tracing/getDocumentTraceId.ts ***!
  \*******************************************************/
    /*! exports provided: INITIAL_DOCUMENT_OUTDATED_TRACE_ID_THRESHOLD, getDocumentTraceId, getDocumentTraceDataFromMeta, getDocumentTraceDataFromComment, createDocumentTraceData, findTraceComment */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "INITIAL_DOCUMENT_OUTDATED_TRACE_ID_THRESHOLD", function () {
            return INITIAL_DOCUMENT_OUTDATED_TRACE_ID_THRESHOLD;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getDocumentTraceId", function () {
            return getDocumentTraceId;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getDocumentTraceDataFromMeta", function () {
            return getDocumentTraceDataFromMeta;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "getDocumentTraceDataFromComment", function () {
            return getDocumentTraceDataFromComment;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "createDocumentTraceData", function () {
            return createDocumentTraceData;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "findTraceComment", function () {
            return findTraceComment;
        });
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");

        var INITIAL_DOCUMENT_OUTDATED_TRACE_ID_THRESHOLD = 2 * _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["ONE_MINUTE"];

        function getDocumentTraceId(document) {
            var data = getDocumentTraceDataFromMeta(document) || getDocumentTraceDataFromComment(document);
            if (!data || data.traceTime <= Date.now() - INITIAL_DOCUMENT_OUTDATED_TRACE_ID_THRESHOLD) {
                return undefined;
            }
            return data.traceId;
        }

        function getDocumentTraceDataFromMeta(document) {
            var traceIdMeta = document.querySelector('meta[name=dd-trace-id]');
            var traceTimeMeta = document.querySelector('meta[name=dd-trace-time]');
            return createDocumentTraceData(traceIdMeta && traceIdMeta.content, traceTimeMeta && traceTimeMeta.content);
        }

        function getDocumentTraceDataFromComment(document) {
            var comment = findTraceComment(document);
            if (!comment) {
                return undefined;
            }
            return createDocumentTraceData(Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["findCommaSeparatedValue"])(comment, 'trace-id'), Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["findCommaSeparatedValue"])(comment, 'trace-time'));
        }

        function createDocumentTraceData(traceId, rawTraceTime) {
            var traceTime = rawTraceTime && Number(rawTraceTime);
            if (!traceId || !traceTime) {
                return undefined;
            }
            return {
                traceId: traceId,
                traceTime: traceTime
            };
        }

        function findTraceComment(document) {
            // 1. Try to find the comment as a direct child of the document
            // Note: TSLint advises to use a 'for of', but TS doesn't allow to use 'for of' if the iterated
            // value is not an array or string (here, a NodeList).
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (var i = 0; i < document.childNodes.length; i += 1) {
                var comment = getTraceCommentFromNode(document.childNodes[i]);
                if (comment) {
                    return comment;
                }
            }
            // 2. If the comment is placed after the </html> tag, but have some space or new lines before or
            // after, the DOM parser will lift it (and the surrounding text) at the end of the <body> tag.
            // Try to look for the comment at the end of the <body> by by iterating over its child nodes in
            // reverse order, stoping if we come accross a non-text node.
            if (document.body) {
                for (var i = document.body.childNodes.length - 1; i >= 0; i -= 1) {
                    var node = document.body.childNodes[i];
                    var comment = getTraceCommentFromNode(node);
                    if (comment) {
                        return comment;
                    }
                    if (!isTextNode(node)) {
                        break;
                    }
                }
            }
        }

        function getTraceCommentFromNode(node) {
            if (node && isCommentNode(node)) {
                var match = /^\s*DATADOG;(.*?)\s*$/.exec(node.data);
                if (match) {
                    return match[1];
                }
            }
        }

        function isCommentNode(node) {
            return node.nodeName === '#comment';
        }

        function isTextNode(node) {
            return node.nodeName === '#text';
        }


        /***/
    }),

    /***/ "../rum-core/src/domain/tracing/tracer.ts":
    /*!*******************************************!*\
  !*** .-core/src/domain/tracing/tracer.ts ***!
  \*******************************************/
    /*! exports provided: clearTracingIfCancelled, startTracer, isTracingSupported, TraceIdentifier */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "clearTracingIfCancelled", function () {
            return clearTracingIfCancelled;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "startTracer", function () {
            return startTracer;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "isTracingSupported", function () {
            return isTracingSupported;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "TraceIdentifier", function () {
            return TraceIdentifier;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");


        function clearTracingIfCancelled(context) {
            if (context.status === 0) {
                context.traceId = undefined;
                context.spanId = undefined;
            }
        }

        function startTracer(configuration) {
            return {
                clearTracingIfCancelled: clearTracingIfCancelled,
                traceFetch: function (context) {
                    return injectHeadersIfTracingAllowed(configuration, context, function (tracingHeaders) {
                        var _a;
                        if (context.input instanceof Request && !((_a = context.init) === null || _a === void 0 ? void 0 : _a.headers)) {
                            context.input = new Request(context.input);
                            Object.keys(tracingHeaders).forEach(function (key) {
                                ;
                                context.input.headers.append(key, tracingHeaders[key]);
                            });
                        } else {
                            context.init = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context.init);
                            var headers_1 = [];
                            if (context.init.headers instanceof Headers) {
                                context.init.headers.forEach(function (value, key) {
                                    headers_1.push([key, value]);
                                });
                            } else if (Array.isArray(context.init.headers)) {
                                context.init.headers.forEach(function (header) {
                                    headers_1.push(header);
                                });
                            } else if (context.init.headers) {
                                Object.keys(context.init.headers).forEach(function (key) {
                                    headers_1.push([key, context.init.headers[key]]);
                                });
                            }
                            context.init.headers = headers_1.concat(Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["objectEntries"])(tracingHeaders));
                        }
                    });
                },
                traceXhr: function (context, xhr) {
                    return injectHeadersIfTracingAllowed(configuration, context, function (tracingHeaders) {
                        Object.keys(tracingHeaders).forEach(function (name) {
                            xhr.setRequestHeader(name, tracingHeaders[name]);
                        });
                    });
                }
            };
        }

        function injectHeadersIfTracingAllowed(configuration, context, inject) {
            if (!isTracingSupported() || !isAllowedUrl(configuration, context.url)) {
                return;
            }
            context.traceId = new TraceIdentifier();
            context.spanId = new TraceIdentifier();
            inject(makeTracingHeaders(context.traceId, context.spanId));
        }

        function isAllowedUrl(configuration, requestUrl) {
            var requestOrigin = Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_1__["getOrigin"])(requestUrl);
            for (var _i = 0, _a = configuration.allowedTracingOrigins; _i < _a.length; _i++) {
                var allowedOrigin = _a[_i];
                if (requestOrigin === allowedOrigin || (allowedOrigin instanceof RegExp && allowedOrigin.test(requestOrigin))) {
                    return true;
                }
            }
            return false;
        }

        function isTracingSupported() {
            return getCrypto() !== undefined;
        }

        function getCrypto() {
            return window.crypto || window.msCrypto;
        }

        function makeTracingHeaders(traceId, spanId) {
            return {
                'x-datadog-origin': 'rum',
                'x-datadog-parent-id': spanId.toDecimalString(),
                'x-datadog-sampled': '1',
                'x-datadog-sampling-priority': '1',
                'x-datadog-trace-id': traceId.toDecimalString()
            };
        }

        /* eslint-disable no-bitwise */
        var TraceIdentifier = /** @class */ (function () {
            function TraceIdentifier() {
                this.buffer = new Uint8Array(8);
                getCrypto().getRandomValues(this.buffer);
                this.buffer[0] = this.buffer[0] & 0x7f; // force 63-bit
            }

            TraceIdentifier.prototype.toString = function (radix) {
                var high = this.readInt32(0);
                var low = this.readInt32(4);
                var str = '';
                while (1) {
                    var mod = (high % radix) * 4294967296 + low;
                    high = Math.floor(high / radix);
                    low = Math.floor(mod / radix);
                    str = (mod % radix).toString(radix) + str;
                    if (!high && !low) {
                        break;
                    }
                }
                return str;
            };
            /**
             * Format used everywhere except the trace intake
             */
            TraceIdentifier.prototype.toDecimalString = function () {
                return this.toString(10);
            };
            TraceIdentifier.prototype.readInt32 = function (offset) {
                return (this.buffer[offset] * 16777216 +
                    (this.buffer[offset + 1] << 16) +
                    (this.buffer[offset + 2] << 8) +
                    this.buffer[offset + 3]);
            };
            return TraceIdentifier;
        }());

        /* eslint-enable no-bitwise */


        /***/
    }),

    /***/ "../rum-core/src/domain/trackEventCounts.ts":
    /*!*********************************************!*\
  !*** .-core/src/domain/trackEventCounts.ts ***!
  \*********************************************/
    /*! exports provided: trackEventCounts */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "trackEventCounts", function () {
            return trackEventCounts;
        });
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");
        /* harmony import */
        var _rawRumEvent_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rawRumEvent.types */ "../rum-core/src/rawRumEvent.types.ts");
        /* harmony import */
        var _lifeCycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lifeCycle */ "../rum-core/src/domain/lifeCycle.ts");


        function trackEventCounts(lifeCycle, callback) {
            if (callback === void 0) {
                callback = _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["noop"];
            }
            var eventCounts = {
                errorCount: 0,
                longTaskCount: 0,
                resourceCount: 0,
                userActionCount: 0
            };
            var subscription = lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_2__["LifeCycleEventType"].RAW_RUM_EVENT_COLLECTED, function (_a) {
                var rawRumEvent = _a.rawRumEvent;
                switch (rawRumEvent.type) {
                    case _rawRumEvent_types__WEBPACK_IMPORTED_MODULE_1__["RumEventType"].ERROR:
                        eventCounts.errorCount += 1;
                        callback(eventCounts);
                        break;
                    case _rawRumEvent_types__WEBPACK_IMPORTED_MODULE_1__["RumEventType"].ACTION:
                        eventCounts.userActionCount += 1;
                        callback(eventCounts);
                        break;
                    case _rawRumEvent_types__WEBPACK_IMPORTED_MODULE_1__["RumEventType"].LONG_TASK:
                        eventCounts.longTaskCount += 1;
                        callback(eventCounts);
                        break;
                    case _rawRumEvent_types__WEBPACK_IMPORTED_MODULE_1__["RumEventType"].RESOURCE:
                        eventCounts.resourceCount += 1;
                        callback(eventCounts);
                        break;
                }
            });
            return {
                stop: function () {
                    subscription.unsubscribe();
                },
                eventCounts: eventCounts
            };
        }


        /***/
    }),

    /***/ "../rum-core/src/domain/trackPageActivities.ts":
    /*!************************************************!*\
  !*** .-core/src/domain/trackPageActivities.ts ***!
  \************************************************/
    /*! exports provided: PAGE_ACTIVITY_VALIDATION_DELAY, PAGE_ACTIVITY_END_DELAY, PAGE_ACTIVITY_MAX_DURATION, waitIdlePageActivity, trackPageActivities, waitPageActivitiesCompletion */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "PAGE_ACTIVITY_VALIDATION_DELAY", function () {
            return PAGE_ACTIVITY_VALIDATION_DELAY;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "PAGE_ACTIVITY_END_DELAY", function () {
            return PAGE_ACTIVITY_END_DELAY;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "PAGE_ACTIVITY_MAX_DURATION", function () {
            return PAGE_ACTIVITY_MAX_DURATION;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "waitIdlePageActivity", function () {
            return waitIdlePageActivity;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "trackPageActivities", function () {
            return trackPageActivities;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "waitPageActivitiesCompletion", function () {
            return waitPageActivitiesCompletion;
        });
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");
        /* harmony import */
        var _lifeCycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lifeCycle */ "../rum-core/src/domain/lifeCycle.ts");


// Delay to wait for a page activity to validate the tracking process
        var PAGE_ACTIVITY_VALIDATION_DELAY = 100;
// Delay to wait after a page activity to end the tracking process
        var PAGE_ACTIVITY_END_DELAY = 100;
// Maximum duration of the tracking process
        var PAGE_ACTIVITY_MAX_DURATION = 10000;

        function waitIdlePageActivity(lifeCycle, completionCallback) {
            var _a = trackPageActivities(lifeCycle), pageActivitiesObservable = _a.observable,
                stopPageActivitiesTracking = _a.stop;
            var stopWaitPageActivitiesCompletion = waitPageActivitiesCompletion(pageActivitiesObservable, stopPageActivitiesTracking, completionCallback).stop;
            var stop = function () {
                stopWaitPageActivitiesCompletion();
                stopPageActivitiesTracking();
            };
            return {stop: stop};
        }

// Automatic action collection lifecycle overview:
//                      (Start new trackPageActivities)
//              .-------------------'--------------------.
//              v                                        v
//     [Wait for a page activity ]          [Wait for a maximum duration]
//     [timeout: VALIDATION_DELAY]          [  timeout: MAX_DURATION    ]
//          /                  \                           |
//         v                    v                          |
//  [No page activity]   [Page activity]                   |
//         |                   |,----------------------.   |
//         v                   v                       |   |
//     (Discard)     [Wait for a page activity]        |   |
//                   [   timeout: END_DELAY   ]        |   |
//                       /                \            |   |
//                      v                  v           |   |
//             [No page activity]    [Page activity]   |   |
//                      |                 |            |   |
//                      |                 '------------'   |
//                      '-----------. ,--------------------'
//                                   v
//                                 (End)
//
// Note: because MAX_DURATION > VALIDATION_DELAY, we are sure that if the process is still alive
// after MAX_DURATION, it has been validated.
        function trackPageActivities(lifeCycle) {
            var observable = new _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
            var subscriptions = [];
            var firstRequestIndex;
            var pendingRequestsCount = 0;
            subscriptions.push(lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_1__["LifeCycleEventType"].DOM_MUTATED, function () {
                return notifyPageActivity();
            }));
            subscriptions.push(lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_1__["LifeCycleEventType"].PERFORMANCE_ENTRY_COLLECTED, function (entry) {
                if (entry.entryType !== 'resource') {
                    return;
                }
                notifyPageActivity();
            }));
            subscriptions.push(lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_1__["LifeCycleEventType"].REQUEST_STARTED, function (startEvent) {
                if (firstRequestIndex === undefined) {
                    firstRequestIndex = startEvent.requestIndex;
                }
                pendingRequestsCount += 1;
                notifyPageActivity();
            }));
            subscriptions.push(lifeCycle.subscribe(_lifeCycle__WEBPACK_IMPORTED_MODULE_1__["LifeCycleEventType"].REQUEST_COMPLETED, function (request) {
                // If the request started before the tracking start, ignore it
                if (firstRequestIndex === undefined || request.requestIndex < firstRequestIndex) {
                    return;
                }
                pendingRequestsCount -= 1;
                notifyPageActivity();
            }));

            function notifyPageActivity() {
                observable.notify({isBusy: pendingRequestsCount > 0});
            }

            return {
                observable: observable,
                stop: function () {
                    subscriptions.forEach(function (s) {
                        return s.unsubscribe();
                    });
                }
            };
        }

        function waitPageActivitiesCompletion(pageActivitiesObservable, stopPageActivitiesTracking, completionCallback) {
            var idleTimeoutId;
            var hasCompleted = false;
            var validationTimeoutId = setTimeout(Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["monitor"])(function () {
                return complete(false, 0);
            }), PAGE_ACTIVITY_VALIDATION_DELAY);
            var maxDurationTimeoutId = setTimeout(Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["monitor"])(function () {
                return complete(true, performance.now());
            }), PAGE_ACTIVITY_MAX_DURATION);
            pageActivitiesObservable.subscribe(function (_a) {
                var isBusy = _a.isBusy;
                clearTimeout(validationTimeoutId);
                clearTimeout(idleTimeoutId);
                var lastChangeTime = performance.now();
                if (!isBusy) {
                    idleTimeoutId = setTimeout(Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["monitor"])(function () {
                        return complete(true, lastChangeTime);
                    }), PAGE_ACTIVITY_END_DELAY);
                }
            });
            var stop = function () {
                hasCompleted = true;
                clearTimeout(validationTimeoutId);
                clearTimeout(idleTimeoutId);
                clearTimeout(maxDurationTimeoutId);
                stopPageActivitiesTracking();
            };

            function complete(hadActivity, endTime) {
                if (hasCompleted) {
                    return;
                }
                stop();
                completionCallback(hadActivity, endTime);
            }

            return {stop: stop};
        }


        /***/
    }),

    /***/ "../rum-core/src/index.ts":
    /*!***************************!*\
  !*** .-core/src/index.ts ***!
  \***************************/
    /*! exports provided: makeRumPublicApi, startRum, LifeCycle, LifeCycleEventType */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var _boot_rumPublicApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boot/rumPublicApi */ "../rum-core/src/boot/rumPublicApi.ts");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "makeRumPublicApi", function () {
            return _boot_rumPublicApi__WEBPACK_IMPORTED_MODULE_0__["makeRumPublicApi"];
        });

        /* harmony import */
        var _boot_rum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boot/rum */ "../rum-core/src/boot/rum.ts");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "startRum", function () {
            return _boot_rum__WEBPACK_IMPORTED_MODULE_1__["startRum"];
        });

        /* harmony import */
        var _domain_lifeCycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domain/lifeCycle */ "../rum-core/src/domain/lifeCycle.ts");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "LifeCycle", function () {
            return _domain_lifeCycle__WEBPACK_IMPORTED_MODULE_2__["LifeCycle"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "LifeCycleEventType", function () {
            return _domain_lifeCycle__WEBPACK_IMPORTED_MODULE_2__["LifeCycleEventType"];
        });


        /***/
    }),

    /***/ "../rum-core/src/rawRumEvent.types.ts":
    /*!***************************************!*\
  !*** .-core/src/rawRumEvent.types.ts ***!
  \***************************************/
    /*! exports provided: RumEventType */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "RumEventType", function () {
            return RumEventType;
        });
        var RumEventType;
        (function (RumEventType) {
            RumEventType["ACTION"] = "action";
            RumEventType["ERROR"] = "error";
            RumEventType["LONG_TASK"] = "long_task";
            RumEventType["VIEW"] = "view";
            RumEventType["RESOURCE"] = "resource";
        })(RumEventType || (RumEventType = {}));


        /***/
    }),

    /***/ "../rum-core/src/transport/batch.ts":
    /*!*************************************!*\
  !*** .-core/src/transport/batch.ts ***!
  \*************************************/
    /*! exports provided: startRumBatch */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "startRumBatch", function () {
            return startRumBatch;
        });
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");
        /* harmony import */
        var _domain_lifeCycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/lifeCycle */ "../rum-core/src/domain/lifeCycle.ts");
        /* harmony import */
        var _rawRumEvent_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rawRumEvent.types */ "../rum-core/src/rawRumEvent.types.ts");


        function startRumBatch(configuration, lifeCycle) {
            var batch = makeRumBatch(configuration, lifeCycle);
            lifeCycle.subscribe(_domain_lifeCycle__WEBPACK_IMPORTED_MODULE_1__["LifeCycleEventType"].RUM_EVENT_COLLECTED, function (serverRumEvent) {
                if (serverRumEvent.type === _rawRumEvent_types__WEBPACK_IMPORTED_MODULE_2__["RumEventType"].VIEW) {
                    batch.upsert(serverRumEvent, serverRumEvent.view.id);
                } else {
                    batch.add(serverRumEvent);
                }
            });
            return {
                stop: function () {
                    batch.stop();
                }
            };
        }

        function makeRumBatch(configuration, lifeCycle) {
            var primaryBatch = createRumBatch(configuration.rumEndpoint, function () {
                return lifeCycle.notify(_domain_lifeCycle__WEBPACK_IMPORTED_MODULE_1__["LifeCycleEventType"].BEFORE_UNLOAD);
            });
            var replicaBatch;
            var replica = configuration.replica;
            if (replica !== undefined) {
                replicaBatch = createRumBatch(replica.rumEndpoint);
            }

            function createRumBatch(endpointUrl, unloadCallback) {
                return new _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["Batch"](new _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"](endpointUrl, configuration.batchBytesLimit, true), configuration.maxBatchSize, configuration.batchBytesLimit, configuration.maxMessageSize, configuration.flushTimeout, unloadCallback);
            }

            function withReplicaApplicationId(message) {
                return Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["combine"])(message, {application: {id: replica.applicationId}});
            }

            var stopped = false;
            return {
                add: function (message) {
                    if (stopped) {
                        return;
                    }
                    primaryBatch.add(message);
                    if (replicaBatch) {
                        replicaBatch.add(withReplicaApplicationId(message));
                    }
                },
                stop: function () {
                    stopped = true;
                },
                upsert: function (message, key) {
                    if (stopped) {
                        return;
                    }
                    primaryBatch.upsert(message, key);
                    if (replicaBatch) {
                        replicaBatch.upsert(withReplicaApplicationId(message), key);
                    }
                }
            };
        }


        /***/
    }),

    /***/ "./src/boot/rum.entry.ts":
    /*!*******************************!*\
  !*** ./src/boot/rum.entry.ts ***!
  \*******************************/
    /*! exports provided: datadogRum */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "datadogRum", function () {
            return datadogRum;
        });
        /* harmony import */
        var _datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datadog/browser-core */ "../core/src/index.ts");
        /* harmony import */
        var _datadog_browser_rum_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datadog/browser-rum-core */ "../rum-core/src/index.ts");


        var datadogRum = Object(_datadog_browser_rum_core__WEBPACK_IMPORTED_MODULE_1__["makeRumPublicApi"])(_datadog_browser_rum_core__WEBPACK_IMPORTED_MODULE_1__["startRum"]);
        Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["defineGlobal"])(Object(_datadog_browser_core__WEBPACK_IMPORTED_MODULE_0__["getGlobalObject"])(), 'DD_RUM', datadogRum);


        /***/
    })

    /******/
});