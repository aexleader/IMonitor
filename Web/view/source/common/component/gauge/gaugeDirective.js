import echarts from 'echarts';

export default class GaugeDirective {
    constructor() {
        this.restrict = 'E';
        this.template = '<div class="gauge-map"></div>';

        this.scope = {

        }
    }
    link(scope, ele, attrs) {
        let option = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    detail: {formatter:'50%'},
                    data: [{value: 50, name: '完成率'}]
                }
            ]
        };
        ele.css({ width: '500px', height: '500px' });
        var myChart = echarts.init(ele[0]);
        myChart.setOption(option, true);
        debugger;
    }
}