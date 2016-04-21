import './style/style.css';

let Router = ($urlRouterProvider, $stateProvider) => {
    $stateProvider.state('traffic', {
        url: '/traffic',
        controller: 'TrafficCtrl as TrafficVm',
        templateProvider: $q => {
            return $q(resolve => {
                require.ensure([], () => {
                    resolve(require('./template/main.tpl'));
                }, 'traffic.tpl');
            });
        },
        resolve: {
            asyncLoadCtrl: ($q, $ocLazyLoad) => {
                return $q(resolve => {
                    require.ensure([], () => {
                        let ngModule = require('./index').default;
                        $ocLazyLoad.load({name: ngModule.name});
                        resolve(ngModule.controller);
                    }, 'traffic.ctrl')
                })
            }
        }
    });
};

Router.$inject = ['$urlRouterProvider', '$stateProvider'];

export default angular.module('IMonitor.TrafficRouter', []).config(Router);