(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./getTVL.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./abi/Multicall.json":
/*!****************************!*\
  !*** ./abi/Multicall.json ***!
  \****************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"constant\":true,\"inputs\":[{\"components\":[{\"name\":\"target\",\"type\":\"address\"},{\"name\":\"callData\",\"type\":\"bytes\"}],\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate\",\"outputs\":[{\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"name\":\"returnData\",\"type\":\"bytes[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"getEthBalance\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]");

/***/ }),

/***/ "./abi/erc20.json":
/*!************************!*\
  !*** ./abi/erc20.json ***!
  \************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"}]");

/***/ }),

/***/ "./configs/ContractAddresses.js":
/*!**************************************!*\
  !*** ./configs/ContractAddresses.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ContractAddresses = undefined;

__webpack_require__(/*! source-map-support/register */ "source-map-support/register");

var ContractAddresses = exports.ContractAddresses = {
    masterChef: "0xe70E9185F5ea7Ba3C5d63705784D8563017f2E57",
    multiCall: "0x1ee38d535d541c55c9dae27b12edf090c608e6fb"
};

/***/ }),

/***/ "./configs/TokenAddresses.js":
/*!***********************************!*\
  !*** ./configs/TokenAddresses.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TokenAddresses = undefined;

__webpack_require__(/*! source-map-support/register */ "source-map-support/register");

var TokenAddresses = exports.TokenAddresses = {
    wbnb: {
        56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
        97: ''
    },
    busd: {
        56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        97: ''
    }
};

/***/ }),

/***/ "./configs/TokenSymbols.js":
/*!*********************************!*\
  !*** ./configs/TokenSymbols.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TokenSymbols = undefined;

__webpack_require__(/*! source-map-support/register */ "source-map-support/register");

var TokenSymbols = exports.TokenSymbols = {
    "PHARM": "PHARM",
    "BNB": "BNB",
    "BUSD": "BUSD",
    "USDC": "USDC",
    "USDT": "USDT"
};

/***/ }),

/***/ "./configs/farms.js":
/*!**************************!*\
  !*** ./configs/farms.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.farmsConfig = undefined;

__webpack_require__(/*! source-map-support/register */ "source-map-support/register");

var _TokenAddresses = __webpack_require__(/*! ./TokenAddresses */ "./configs/TokenAddresses.js");

var _TokenSymbols = __webpack_require__(/*! ./TokenSymbols */ "./configs/TokenSymbols.js");

var farmsConfig = exports.farmsConfig = [{
    pid: 0,
    risk: 5,
    lpSymbol: 'PHARM-BUSD LP',
    lpAddresses: {
        97: '',
        56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019'
    },
    tokenSymbol: 'PHARM',
    tokenAddresses: {
        97: '',
        56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6'
    },
    quoteTokenSymbol: _TokenSymbols.TokenSymbols.BUSD,
    quoteTokenAdresses: _TokenAddresses.TokenAddresses.busd
}, {
    pid: 1,
    risk: 5,
    lpSymbol: 'PHARM-BNB LP',
    lpAddresses: {
        97: '',
        56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3'
    },
    tokenSymbol: 'PHARM',
    tokenAddresses: {
        97: '',
        56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6'
    },
    quoteTokenSymbol: _TokenSymbols.TokenSymbols.BNB,
    quoteTokenAdresses: _TokenAddresses.TokenAddresses.wbnb
}, {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
        97: '',
        56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f'
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
        97: '',
        56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
    },
    quoteTokenSymbol: _TokenSymbols.TokenSymbols.BUSD,
    quoteTokenAdresses: _TokenAddresses.TokenAddresses.busd
}, {
    pid: 3,
    risk: 1,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
        97: '',
        56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd'
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
        97: '',
        56: '0x55d398326f99059ff775485246999027b3197955'
    },
    quoteTokenSymbol: _TokenSymbols.TokenSymbols.BUSD,
    quoteTokenAdresses: _TokenAddresses.TokenAddresses.busd
}, {
    pid: 4,
    risk: 2,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
        97: '',
        56: '0x7561eee90e24f3b348e1087a005f78b4c8453524'
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
        97: '',
        56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c'
    },
    quoteTokenSymbol: _TokenSymbols.TokenSymbols.BNB,
    quoteTokenAdresses: _TokenAddresses.TokenAddresses.wbnb
}, {
    pid: 5,
    risk: 2,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
        97: '',
        56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422'
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
        97: '',
        56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8'
    },
    quoteTokenSymbol: _TokenSymbols.TokenSymbols.BNB,
    quoteTokenAdresses: _TokenAddresses.TokenAddresses.wbnb
}, {
    pid: 6,
    risk: 1,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
        97: '',
        56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc'
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
        97: '',
        56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3'
    },
    quoteTokenSymbol: _TokenSymbols.TokenSymbols.BUSD,
    quoteTokenAdresses: _TokenAddresses.TokenAddresses.busd
}, {
    pid: 7,
    risk: 1,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
        97: '',
        56: '0x680dd100e4b394bda26a59dd5c119a391e747d18'
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
        97: '',
        56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'
    },
    quoteTokenSymbol: _TokenSymbols.TokenSymbols.BUSD,
    quoteTokenAdresses: _TokenAddresses.TokenAddresses.busd
}, {
    pid: 9,
    risk: 3,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
        97: '',
        56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c'
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
        97: '',
        56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402'
    },
    quoteTokenSymbol: _TokenSymbols.TokenSymbols.BNB,
    quoteTokenAdresses: _TokenAddresses.TokenAddresses.wbnb
}, {
    pid: 10,
    risk: 4,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
        97: '',
        56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458'
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
        97: '',
        56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'
    },
    quoteTokenSymbol: _TokenSymbols.TokenSymbols.BUSD,
    quoteTokenAdresses: _TokenAddresses.TokenAddresses.busd
}, {
    pid: 11,
    risk: 4,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
        97: '',
        56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6'
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
        97: '',
        56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'
    },
    quoteTokenSymbol: _TokenSymbols.TokenSymbols.BNB,
    quoteTokenAdresses: _TokenAddresses.TokenAddresses.wbnb
}, {
    pid: 12,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'PHARM',
    lpAddresses: {
        97: '',
        56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019' // PHARM-BUSD LP
    },
    tokenSymbol: 'PHARM',
    tokenAddresses: {
        97: '',
        56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6'
    },
    quoteTokenSymbol: _TokenSymbols.TokenSymbols.BUSD,
    quoteTokenAdresses: _TokenAddresses.TokenAddresses.busd
}, {
    pid: 13,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
        97: '',
        56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019' // PHARM-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
        97: '',
        56: '0xe9e7cea3dedca5984780bafc599bd69add087d56'
    },
    quoteTokenSymbol: _TokenSymbols.TokenSymbols.BUSD,
    quoteTokenAdresses: _TokenAddresses.TokenAddresses.busd
}, {
    pid: 14,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
        97: '',
        56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f' // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
        97: '',
        56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
    },
    quoteTokenSymbol: _TokenSymbols.TokenSymbols.BUSD,
    quoteTokenAdresses: _TokenAddresses.TokenAddresses.busd
}, {
    pid: 15,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
        97: '',
        56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd' // USDT-BUSD LP
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
        97: '',
        56: '0x55d398326f99059ff775485246999027b3197955'
    },
    quoteTokenSymbol: _TokenSymbols.TokenSymbols.BUSD,
    quoteTokenAdresses: _TokenAddresses.TokenAddresses.busd
}, {
    pid: 16,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
        97: '',
        56: '0xb8875e207ee8096a929d543c9981c9586992eacb' // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
        97: '',
        56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c'
    },
    quoteTokenSymbol: _TokenSymbols.TokenSymbols.BUSD,
    quoteTokenAdresses: _TokenAddresses.TokenAddresses.busd
}, {
    pid: 17,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
        97: '',
        56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494' // ETH-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
        97: '',
        56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8'
    },
    quoteTokenSymbol: _TokenSymbols.TokenSymbols.BUSD,
    quoteTokenAdresses: _TokenAddresses.TokenAddresses.busd
}, {
    pid: 18,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    lpAddresses: {
        97: '',
        56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc' // DAI-BUSD LP
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
        97: '',
        56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3'
    },
    quoteTokenSymbol: _TokenSymbols.TokenSymbols.BUSD,
    quoteTokenAdresses: _TokenAddresses.TokenAddresses.busd
}, {
    pid: 19,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    lpAddresses: {
        97: '',
        56: '0x680dd100e4b394bda26a59dd5c119a391e747d18' // USDC-BUSD LP
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
        97: '',
        56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'
    },
    quoteTokenSymbol: _TokenSymbols.TokenSymbols.BUSD,
    quoteTokenAdresses: _TokenAddresses.TokenAddresses.busd
}, {
    pid: 20,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DOT',
    lpAddresses: {
        97: '',
        56: '0x54c1ec2f543966953f2f7564692606ea7d5a184e' // DOT-BUSD LP
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
        97: '',
        56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402'
    },
    quoteTokenSymbol: _TokenSymbols.TokenSymbols.BUSD,
    quoteTokenAdresses: _TokenAddresses.TokenAddresses.busd
}, {
    pid: 21,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
        97: '',
        56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458' // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
        97: '',
        56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'
    },
    quoteTokenSymbol: _TokenSymbols.TokenSymbols.BUSD,
    quoteTokenAdresses: _TokenAddresses.TokenAddresses.busd
}, {
    pid: 22,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'BSCX',
    lpAddresses: {
        97: '',
        56: '0xa32a983a64ce21834221aa0ad1f1533907553136' // BSCX-BUSD LP
    },
    tokenSymbol: 'BSCX',
    tokenAddresses: {
        97: '',
        56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587'
    },
    quoteTokenSymbol: _TokenSymbols.TokenSymbols.BUSD,
    quoteTokenAdresses: _TokenAddresses.TokenAddresses.busd
}];

/***/ }),

/***/ "./getTVL.js":
/*!*******************!*\
  !*** ./getTVL.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTVL = undefined;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getTVL = exports.getTVL = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var farms, bnbbusdFarm, bnbPrice, value, i, farm, val;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return fetchFarms();

                    case 3:
                        farms = _context.sent;
                        bnbbusdFarm = farms.find(function (f) {
                            return f.pid === 2;
                        });
                        bnbPrice = bnbbusdFarm.tokenPriceVsQuote ? new _bignumber2.default(bnbbusdFarm.tokenPriceVsQuote) : ZERO;
                        value = new _bignumber2.default(0);

                        for (i = 0; i < farms.length; i++) {
                            farm = farms[i];

                            if (farm.lpTotalInQuoteToken) {
                                val = void 0;

                                if (farm.quoteTokenSymbol === _TokenSymbols.TokenSymbols.BNB) {
                                    val = bnbPrice.times(farm.lpTotalInQuoteToken);
                                } else {
                                    val = farm.lpTotalInQuoteToken;
                                }
                                value = value.plus(val);
                            }
                        }
                        return _context.abrupt("return", (0, _responseLib.success)(value.toFixed(2)));

                    case 11:
                        _context.prev = 11;
                        _context.t0 = _context["catch"](0);
                        return _context.abrupt("return", (0, _responseLib.failure)(_context.t0));

                    case 14:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 11]]);
    }));

    return function getTVL() {
        return _ref.apply(this, arguments);
    };
}();

var multicall = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(abi, calls) {
        var itf, callData, _ref3, returnData, res;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        itf = new _abi.Interface(abi);
                        callData = calls.map(function (call) {
                            return [call.address.toLowerCase(), itf.encodeFunctionData(call.name, call.params)];
                        });
                        _context2.next = 4;
                        return multi.methods.aggregate(callData).call();

                    case 4:
                        _ref3 = _context2.sent;
                        returnData = _ref3.returnData;
                        res = returnData.map(function (call, i) {
                            return itf.decodeFunctionResult(calls[i].name, call);
                        });
                        return _context2.abrupt("return", res);

                    case 8:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function multicall(_x, _x2) {
        return _ref2.apply(this, arguments);
    };
}();

var fetchFarms = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var _this = this;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return _promise2.default.all(_farms.farmsConfig.map(function () {
                            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(farmConfig) {
                                var lpAddress, calls, _ref6, _ref7, tokenBalanceLP, quoteTokenBlanceLP, lpTokenBalanceMC, lpTotalSupply, tokenDecimals, quoteTokenDecimals, tokenAmount, lpTotalInQuoteToken, tokenPriceVsQuote, lpTokenRatio, quoteTokenAmount;

                                return _regenerator2.default.wrap(function _callee3$(_context3) {
                                    while (1) {
                                        switch (_context3.prev = _context3.next) {
                                            case 0:
                                                lpAddress = farmConfig.lpAddresses[CHAIN_ID];
                                                calls = [
                                                // Balance of token in the LP contract
                                                {
                                                    address: farmConfig.tokenAddresses[CHAIN_ID],
                                                    name: 'balanceOf',
                                                    params: [lpAddress]
                                                },
                                                // Balance of quote token on LP contract
                                                {
                                                    address: farmConfig.quoteTokenAdresses[CHAIN_ID],
                                                    name: 'balanceOf',
                                                    params: [lpAddress]
                                                },
                                                // Balance of LP tokens in the master chef contract
                                                {
                                                    address: farmConfig.isTokenOnly ? farmConfig.tokenAddresses[CHAIN_ID] : lpAddress,
                                                    name: 'balanceOf',
                                                    params: [_ContractAddresses.ContractAddresses.masterChef]
                                                },
                                                // Total supply of LP tokens
                                                {
                                                    address: lpAddress,
                                                    name: 'totalSupply'
                                                },
                                                // Token decimals
                                                {
                                                    address: farmConfig.tokenAddresses[CHAIN_ID],
                                                    name: 'decimals'
                                                },
                                                // Quote token decimals
                                                {
                                                    address: farmConfig.quoteTokenAdresses[CHAIN_ID],
                                                    name: 'decimals'
                                                }];
                                                _context3.next = 4;
                                                return multicall(_erc2.default, calls);

                                            case 4:
                                                _ref6 = _context3.sent;
                                                _ref7 = (0, _slicedToArray3.default)(_ref6, 6);
                                                tokenBalanceLP = _ref7[0];
                                                quoteTokenBlanceLP = _ref7[1];
                                                lpTokenBalanceMC = _ref7[2];
                                                lpTotalSupply = _ref7[3];
                                                tokenDecimals = _ref7[4];
                                                quoteTokenDecimals = _ref7[5];
                                                tokenAmount = void 0;
                                                lpTotalInQuoteToken = void 0;
                                                tokenPriceVsQuote = void 0;

                                                if (farmConfig.isTokenOnly) {
                                                    tokenAmount = new _bignumber2.default(lpTokenBalanceMC).div(new _bignumber2.default(10).pow(tokenDecimals));
                                                    if (farmConfig.tokenSymbol === _TokenSymbols.TokenSymbols.BUSD && farmConfig.quoteTokenSymbol === _TokenSymbols.TokenSymbols.BUSD) {
                                                        tokenPriceVsQuote = new _bignumber2.default(1);
                                                    } else {
                                                        tokenPriceVsQuote = new _bignumber2.default(quoteTokenBlanceLP).div(new _bignumber2.default(tokenBalanceLP));
                                                    }
                                                    lpTotalInQuoteToken = tokenAmount.times(tokenPriceVsQuote);
                                                } else {
                                                    // Ratio in % a LP tokens that are in staking, vs the total number in circulation
                                                    lpTokenRatio = new _bignumber2.default(lpTokenBalanceMC).div(new _bignumber2.default(lpTotalSupply));

                                                    // Total value in staking in quote token value

                                                    lpTotalInQuoteToken = new _bignumber2.default(quoteTokenBlanceLP).div(new _bignumber2.default(10).pow(18)).times(new _bignumber2.default(2)).times(lpTokenRatio);

                                                    // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
                                                    tokenAmount = new _bignumber2.default(tokenBalanceLP).div(new _bignumber2.default(10).pow(tokenDecimals)).times(lpTokenRatio);
                                                    quoteTokenAmount = new _bignumber2.default(quoteTokenBlanceLP).div(new _bignumber2.default(10).pow(quoteTokenDecimals)).times(lpTokenRatio);


                                                    if (tokenAmount.comparedTo(0) > 0) {
                                                        tokenPriceVsQuote = quoteTokenAmount.div(tokenAmount);
                                                    } else {
                                                        tokenPriceVsQuote = new _bignumber2.default(quoteTokenBlanceLP).div(new _bignumber2.default(tokenBalanceLP));
                                                    }
                                                }

                                                return _context3.abrupt("return", (0, _extends3.default)({}, farmConfig, {
                                                    tokenAmount: tokenAmount.toJSON(),
                                                    lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
                                                    tokenPriceVsQuote: tokenPriceVsQuote.toJSON()
                                                }));

                                            case 17:
                                            case "end":
                                                return _context3.stop();
                                        }
                                    }
                                }, _callee3, _this);
                            }));

                            return function (_x3) {
                                return _ref5.apply(this, arguments);
                            };
                        }()));

                    case 2:
                        return _context4.abrupt("return", _context4.sent);

                    case 3:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function fetchFarms() {
        return _ref4.apply(this, arguments);
    };
}();

__webpack_require__(/*! source-map-support/register */ "source-map-support/register");

var _Multicall = __webpack_require__(/*! ./abi/Multicall.json */ "./abi/Multicall.json");

var _Multicall2 = _interopRequireDefault(_Multicall);

var _erc = __webpack_require__(/*! ./abi/erc20.json */ "./abi/erc20.json");

var _erc2 = _interopRequireDefault(_erc);

var _bignumber = __webpack_require__(/*! bignumber.js */ "bignumber.js");

var _bignumber2 = _interopRequireDefault(_bignumber);

var _ContractAddresses = __webpack_require__(/*! ./configs/ContractAddresses */ "./configs/ContractAddresses.js");

var _abi = __webpack_require__(/*! @ethersproject/abi */ "@ethersproject/abi");

var _farms = __webpack_require__(/*! ./configs/farms */ "./configs/farms.js");

var _web = __webpack_require__(/*! web3 */ "web3");

var _web2 = _interopRequireDefault(_web);

var _TokenSymbols = __webpack_require__(/*! ./configs/TokenSymbols */ "./configs/TokenSymbols.js");

var _responseLib = __webpack_require__(/*! ./response-lib */ "./response-lib.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZERO = new _bignumber2.default(0);
var web3 = new _web2.default(process.env.Provider);
var multi = new web3.eth.Contract(_Multicall2.default, _ContractAddresses.ContractAddresses.multiCall);

var CHAIN_ID = 56;

/***/ }),

/***/ "./response-lib.js":
/*!*************************!*\
  !*** ./response-lib.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

exports.success = success;
exports.badRequest = badRequest;
exports.exception = exception;
exports.failure = failure;
exports.buildResponse = buildResponse;

__webpack_require__(/*! source-map-support/register */ "source-map-support/register");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function success(body) {
  if (typeof body === "string") {
    return buildResponse(200, body);
  } else {
    return buildResponse(200, (0, _stringify2.default)(body));
  }
}

function badRequest(message) {
  return buildResponse(400, (0, _stringify2.default)({ message: message }));
}

function exception(ex) {
  return buildResponse(500, (0, _stringify2.default)({ message: ex.toString() }));
}

function failure(body) {
  console.log(body);
  if (body.statusCode) {
    return body;
  }
  return buildResponse(500, (0, _stringify2.default)({ message: body.toString() }));
}

function buildResponse(statusCode, body, headers) {
  return {
    statusCode: statusCode,
    headers: (0, _extends3.default)({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    }, headers),
    body: body
  };
}

/***/ }),

/***/ "@ethersproject/abi":
/*!*************************************!*\
  !*** external "@ethersproject/abi" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ethersproject/abi");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),

/***/ "babel-runtime/core-js/promise":
/*!************************************************!*\
  !*** external "babel-runtime/core-js/promise" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),

/***/ "babel-runtime/helpers/asyncToGenerator":
/*!*********************************************************!*\
  !*** external "babel-runtime/helpers/asyncToGenerator" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "babel-runtime/helpers/extends":
/*!************************************************!*\
  !*** external "babel-runtime/helpers/extends" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),

/***/ "babel-runtime/helpers/slicedToArray":
/*!******************************************************!*\
  !*** external "babel-runtime/helpers/slicedToArray" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "bignumber.js":
/*!*******************************!*\
  !*** external "bignumber.js" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bignumber.js");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ })));
//# sourceMappingURL=getTVL.js.map