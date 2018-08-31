(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("SmarttagPlugin", [], factory);
	else if(typeof exports === 'object')
		exports["SmarttagPlugin"] = factory();
	else
		root["SmarttagPlugin"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable max-len,camelcase,no-undef */
var SmarttagPlugin =
/*#__PURE__*/
function () {
  /**
   * @param xtsite
   * @param options
   */
  function SmarttagPlugin(xtsite, options) {
    var _this = this;

    _classCallCheck(this, SmarttagPlugin);

    _defineProperty(this, "loaded", false);

    _defineProperty(this, "fail", false);

    if (xtsite !== undefined) {
      this.getScript("//tag.aticdn.net/".concat(xtsite, "/smarttag.js"), function () {
        if (window.ATInternet) {
          _this.tag = _this.newTag(options);
          _this.loaded = true;
          console.log(_this.tag);
        } else {
          _this.fail = true;
        }
      });
    }
  }
  /**
   * @param options
   * @returns {*}
   */


  _createClass(SmarttagPlugin, [{
    key: "newTag",
    value: function newTag(options) {
      try {
        return new ATInternet.Tracker.Tag(options);
      } catch (ex) {
        return {
          dispatch: function dispatch() {
            return {};
          },
          page: {
            set: function set() {
              return {};
            }
          },
          click: {
            send: function send() {
              return {};
            }
          }
        };
      }
    }
    /**
     * @param info: {name: string, level2?: string, chapter1?: string, chapter2?: string, chapter3?: string, customObject?: any}
     */

  }, {
    key: "sendPage",
    value: function sendPage(info) {
      var _this2 = this;

      if (!this.fail) {
        var time = setInterval(function () {
          if (_this2.loaded) {
            _this2.tag.page.set(info);

            _this2.tag.dispatch();

            clearInterval(time);
          }
        }, 100);
      }
    }
    /**
     * @param info: {elem: any, name: string, level2?: string, chapter1?: string, chapter2?: string, chapter3?: string, type: string, customObject?: any}
     */

  }, {
    key: "sendClick",
    value: function sendClick(info) {
      if (!this.fail) {
        this.tag.click.send(info);
      }
    }
    /**
     * Generic script loader
     * @param src
     * @param callback
     */

  }, {
    key: "getScript",
    value: function getScript(src, callback) {
      var d = document;
      var o = {
        callback: callback || function () {}
      };
      var s;

      if (typeof src === 'undefined') {
        return;
      }

      s = d.createElement('script');
      s.language = 'javascript';
      s.type = 'text/javascript';
      s.async = 1;
      s.charset = 'utf-8';
      s.src = src;

      if (typeof o.callback === 'function') {
        if (d.addEventListener) {
          s.addEventListener('load', function () {
            o.callback();
          }, false);
        } else {
          // old IE support
          s.onreadystatechange = function () {
            if (this.readyState === 'complete' || this.readyState === 'loaded') {
              this.onreadystatechange = null;
              o.callback();
            }
          };
        }
      }

      d.getElementsByTagName('head')[0].appendChild(s);
    }
  }]);

  return SmarttagPlugin;
}();

exports.default = SmarttagPlugin;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=SmarttagPlugin.js.map