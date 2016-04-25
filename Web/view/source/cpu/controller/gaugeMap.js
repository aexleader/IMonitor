export default class GaugeDemoController {
    constructor($scope, $timeout) {
        let vm = this;
        vm.width = '300px';
        vm.height = '300px';
        vm.val = 30;
        !function repeat(){
            $timeout(() => {
                vm.val = (Math.random() * 100).toFixed(2) - 0;
                repeat();
            }, 2000);
        }()
    }
}
GaugeDemoController.$inject = ['$scope', '$timeout'];