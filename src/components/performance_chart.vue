<template>
    <div class="performance-chart">
        <p class="component-intro">前端性能数据展示图表</p>
        <div id="chart"></div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        data() {
            return {
                ydata: []
            }
        },
        computed: {
            ...mapGetters(['getList'])
        },
        mounted() {
            setTimeout(()=>{
                this.ydata = this.getList
                this.drawChart()
            },200)
        },
        methods: {
            drawChart() {
                let myChart = echarts.init(document.getElementById('chart'));
                let option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },
                    grid: {　　
                        x: 60,
                        x2: 40,
                        y2: 100
                    },
                    xAxis: [{
                        type: 'category',
                        data: ['白屏时间', '页面加载', 'DOM加载', 'DNS', 'TCP', '请求'],
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLabel: {
                            interval: 0,
                            formatter: function(value) {
                                return value.split("").join("\n");
                            }
                        }
    
                    }],
                    yAxis: [{
                        type: 'value',
                        name: '耗时',
                        splitLine: {
                            show: false
                        },
                        scale: true,
                        axisLabel: {
                            formatter: '{value} ms'
                        }
                    }],
                    series: [{
                            type: 'bar',
                            barWidth: 10,
                            data: this.ydata,
                            itemStyle: {
                                normal: {
                                    color: function(params) {
                                        var colorList = ['#C33531', '#EFE42A', '#64BD3D', '#EE9201', '#29AAE3', '#B74AE5', '#0AAF9F', '#E89589', '#16A085', '#4A235A', '#C39BD3 ', '#F9E79F', '#BA4A00', '#ECF0F1', '#616A6B', '#EAF2F8', '#4A235A', '#3498DB'];
                                        return colorList[params.dataIndex]
                                    }
                                }
                            }
                        },
                        {
                            type: 'line',
                            yAxisIndex: 0,
                            data: this.ydata,
                            itemStyle: {
                                normal: {
                                    color: function(params) {
                                        var colorList = ['#C33531', '#EFE42A', '#64BD3D', '#EE9201', '#29AAE3', '#B74AE5', '#0AAF9F', '#E89589', '#16A085', '#4A235A', '#C39BD3 ', '#F9E79F', '#BA4A00', '#ECF0F1', '#616A6B', '#EAF2F8', '#4A235A', '#3498DB'];
                                        return colorList[params.dataIndex]
                                    }
                                }
                            }
                        }
                    ]
                }
                myChart.setOption(option)
            }
        }
    }
</script>

<style>
    #chart {
        margin: 0 auto;
        width: 7rem;
        height: 8rem;
    }
</style>


