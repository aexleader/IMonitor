import CommonModule from './common/index';
import CpuRouter from './cpu/router';
import RamRouter from './ram/router';
import TrafficRouter from './ram/router';

let ngModules = [
    'ui.router',
    'oc.lazyLoad',
    'ui.bootstrap',
    CommonModule.name
];

;[CpuRouter, RamRouter, TrafficRouter].forEach(ngMod => { ngModules.push(ngMod.name) });

let DefaultRouter = ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/cpu');
};

DefaultRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

angular.module('IMonitor', ngModules).config(DefaultRouter);