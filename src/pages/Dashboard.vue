<template>
    <div class="p-3">
        dashboard
<!--        <Row :gutter="20">-->
<!--            <i-col span="24">-->
<!--                <chart :options="options"-->
<!--                       :auto-resize="true">-->
<!--                </chart>-->
<!--            </i-col>-->
<!--            <i-col span="24">-->
<!--                <chart :options="optionsPie"-->
<!--                       :auto-resize="true"></chart>-->
<!--            </i-col>-->
<!--        </Row>-->
    </div>
</template>

<style>
    .echarts {
        width: 100%;
    }
</style>

<script>
    export default {
        name: 'Dashboard',

        computed: {
            optionsPie() {
                return {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    grid: {
                        width: '100%',
                        containLabel: true,
                        top: '0',
                        left: '1.5%',
                        right: '1.5%',
                        bottom: '0',
                    },
                    legend: {
                        orient: 'vertical',
                        left: 10,
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value: 335, name: '直接访问'},
                                {value: 310, name: '邮件营销'},
                                {value: 234, name: '联盟广告'},
                                {value: 135, name: '视频广告'},
                                {value: 1548, name: '搜索引擎'}
                            ]
                        }
                    ]
                };
            },
            options() {
                return {
                    color: ['#3398DB'],
                    tooltip: {
                        trigger: 'axis',
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '直接访问',
                            type: 'bar',
                            barWidth: '60%',
                            data: [10, 52, 200, 334, 390, 330, 220]
                        }
                    ]
                };
            }
        }
    }
</script>
