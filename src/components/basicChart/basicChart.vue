<template>
    <canvas :id="name" :width="width" :height="width" :ref="name"></canvas>
</template>

<script lang="ts">
import Chart from 'chart.js';
import { Component, Vue, Prop } from 'vue-property-decorator';
import { GrafDataSet } from './../../types/graph'

@Component
export default class BaseChart extends Vue {

    /**
     * A unique name, and it will be used for the elements id
     */
    @Prop({required: true}) public name: string = ''

    /**
     * The initial inline width of the canvas HTML element.
    */
    @Prop({default: "400"}) public width: string = ''

    /**
     * The initial inline height of the canvas HTML element.
    */
    @Prop({default: "400"}) public height: string = ''

    /**
     * The initial inline height of the canvas HTML element.
    */
    @Prop({default: "bar"}) public chartType: string = ''

    /**
     * The text of the labels in an ordered manner
    */
    @Prop({required: true}) public labels: string[] = []

    /**
     * The datasets for the graph.
    */
    @Prop({required: true}) public datasets: GrafDataSet[] = []

    // Methods
    public renderChart() {
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
    
    // Lifecycle hooks
    public mounted() {
        this.renderChart()
    }
};
</script>