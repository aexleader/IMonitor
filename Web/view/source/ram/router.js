import './style/style.css';

let Router = ($urlRouterProvider, $stateProvider) => {
    $stateProvider.state('ram', {
        url: '/ram',
        controller: 'RamCtrl as RamVm',
        templateProvider: $q => {
            return $q(resolve => {
                require.ensure([], () => {
                    resolve(require('./template/main.tpl'));
                }, 'ram.tpl');
            });
        },
        resolve: {
            asyncLoadCtrl: ($q, $ocLazyLoad) => {
                return $q(resolve => {
                    require.ensure([], () => {
                        let ngModule = require('./index').default;
                        $ocLazyLoad.load({name: ngModule.name});
                        resolve(ngModule.controller);
                    }, 'ram.ctrl')
                })
            }
        }
    });
};

Router.$inject = ['$urlRouterProvider', '$stateProvider'];

export default angular.module('IMonitor.RamRouter', []).config(Router);