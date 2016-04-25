webpackJsonp([2],{

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _cpu = __webpack_require__(18);

	var _cpu2 = _interopRequireDefault(_cpu);

	var _gaugeMap = __webpack_require__(19);

	var _gaugeMap2 = _interopRequireDefault(_gaugeMap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('Cpu', ['ui.bootstrap']).controller('CpuCtrl', _cpu2.default).controller('GaugeDemoCtrl', _gaugeMap2.default);

/***/ },

/***/ 18:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CpuController = function CpuController() {
	    _classCallCheck(this, CpuController);

	    console.log('cpu controller');
	};

	exports.default = CpuController;

/***/ },

/***/ 19:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GaugeDemoController = function GaugeDemoController($scope, $timeout) {
	    _classCallCheck(this, GaugeDemoController);

	    var vm = this;
	    vm.width = '300px';
	    vm.height = '300px';
	    vm.val = 30;
	    !function repeat() {
	        $timeout(function () {
	            vm.val = (Math.random() * 100).toFixed(2) - 0;
	            repeat();
	        }, 2000);
	    }();
	};

	exports.default = GaugeDemoController;

	GaugeDemoController.$inject = ['$scope', '$timeout'];

/***/ }

});