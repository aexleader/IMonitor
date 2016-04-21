import CpuCtrl from './controller/cpu';
import GaugeDemoCtrl from './controller/gaugeMap';
export default angular
    .module('Cpu', ['ui.bootstrap'])
    .controller('CpuCtrl', CpuCtrl)
    .controller('GaugeDemoCtrl', GaugeDemoCtrl);