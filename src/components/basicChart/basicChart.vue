<template>
    <canvas id="myChart" :width="width" :height="width" ref="myChart"></canvas>
</template>

<script>
import Chart from 'chart.js';

export default {
    props: {
        name: {
            type: String,
            required: true,
            description: 'A unique name, and it will be used for the elements id',
        },
        width: {
            type: String,
            default: "400",
        },
        height: {
            type: String,
            default: "400",
        },
        chartType: {
            type: String,
            default: 'bar',
        },
        labels: {
            type: Array,
            required: true,
        },
        datasets: {
            type: Array,
            required: true,
        },
        test: {
            type: String,
        }
    },
    methods: {
        renderChart() {
            const myChart = this.$refs.myChart;
            const chart = new Chart(myChart, {
                type: this.chartType,
                data: {
                    labels: this.labels,
                    datasets: this.datasets,
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                            },
                        }],
                    },
                    responsive: true,
                },
            });
        }
    },
    mounted() {
        this.renderChart()
    },
    watch: {
        datasets: function(oldValue, newValue) {
            console.log('Dataset changed')
        },
        test: function() {
            console.log('test changed')
        }
    },
};
</script>