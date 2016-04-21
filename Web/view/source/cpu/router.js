import './style/style.css';

let Router = ($urlRouterProvider, $stateProvider) => {
    $stateProvider.state('cpu', {
        url: '/cpu',
        controller: 'CpuCtrl as CpuVm',
        templateProvider: $q => {
            return $q(resolve => {
                require.ensure([], () => {
                    resolve(require('./template/main.tpl'));
                }, 'cpu.tpl');
            });
        },
        resolve: {
            asyncLoadCtrl: ($q, $ocLazyLoad) => {
                return $q(resolve => {
                    require.ensure([], () => {
                        let ngModule = require('./index').default;
                        $ocLazyLoad.load({name: ngModule.name});
                        resolve(ngModule.controller);
                    }, 'cpu.ctrl')
                })
            }
        }
    });
};

Router.$inject = ['$urlRouterProvider', '$stateProvider'];

export default angular.module('IMonitor.CpuRouter', []).config(Router);