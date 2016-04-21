webpackJsonp([2],{

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _cpu = __webpack_require__(15);

	var _cpu2 = _interopRequireDefault(_cpu);

	var _gaugeMap = __webpack_require__(16);

	var _gaugeMap2 = _interopRequireDefault(_gaugeMap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('Cpu', ['ui.bootstrap']).controller('CpuCtrl', _cpu2.default).controller('GaugeDemoCtrl', _gaugeMap2.default);

/***/ },

/***/ 15:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CpuController = function CpuController() {
	    _classCallCheck(this, CpuController);
	};

	exports.default = CpuController;

/***/ },

/***/ 16:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GaugeDemoController = function GaugeDemoController() {
	    _classCallCheck(this, GaugeDemoController);
	};

	exports.default = GaugeDemoController;

/***/ }

});