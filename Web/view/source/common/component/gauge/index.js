import './gaugeStyle.css';
import GaugeDirective from './gaugeDirective';

export default angular
    .module('imMap.Gauge', [])
    .directive('imMapGauge', () => new GaugeDirective);