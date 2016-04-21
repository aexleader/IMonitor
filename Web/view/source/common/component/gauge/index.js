import './GaugeStyle.css';
import GaugeDirective from './GaugeDirective';

export default angular
    .module('imMap.Gauge', [])
    .directive('imMapGauge', () => new GaugeDirective);