<template>
    <canvas :id="name" :width="width" :height="width" :ref="name"></canvas>
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
        },
    },
    methods: {
        renderChart() {
            const myChart = this.$refs[this.name];
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
        this.renderChart();
    },
};
</script>