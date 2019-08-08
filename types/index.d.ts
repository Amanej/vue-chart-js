import BaseChart from './../src/components/Chart/Base';
import Vue from 'vue';

declare module '@solutus/vue-chart-js' {
    export class BaseChart extends Vue {}
}