<template>
  <div id="app">
    <h2>Graphs</h2>

    <h3>Bar chart</h3>
    <BasicChart :labels="BarGraphData.labels" :datasets="BarGraphData.datasets" />
    <h3>Line chart</h3>
    <BasicChart :labels="BarGraphData.labels" :datasets="BarGraphData.datasets" chartType="line" />
    <h3>Radar chart</h3>
    <BasicChart :labels="BarGraphData.labels" :datasets="BarGraphData.datasets" chartType="radar" />
    <h3>Polar chart</h3>
    <BasicChart :labels="BarGraphData.labels" :datasets="BarGraphData.datasets" chartType="polarArea" />
    <h3>Bubble chart</h3>
    <BasicChart :labels="BubbleGraphData.labels" :datasets="BubbleGraphData.datasets" chartType="bubble" />
    <h3>Scatter chart</h3>
    <BasicChart :labels="ScatterGraphData.labels" :datasets="ScatterGraphData.datasets" chartType="scatter" />

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BasicChart from './components/basicChart/basicChart.vue';
import {GrafData} from './types/graph';
// import grafData from './assets/grafData.json'

const grafData: GrafData[] = [
  {
       name: 'bar_1',
       type: 'bar',
       data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 8],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        }],
      },
  },
  {
    name: 'bubble_1',
    type: 'bubble',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [{x: 2, y: 3, r:12},{x:1, y: 2, r:8}],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      }],
    },
  },
  {
    name: 'scatter_1',
    type: 'scatter',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [
          {x: -10, y: 0 },
          {x: 0, y: 10 },
          {x: 10, y: 5}
        ],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      }],
    },
  },
];


@Component({
  components: {
    BasicChart,
  },
})
export default class App extends Vue {
  public BarGraphData: any = grafData[0].data;

  public BubbleGraphData: any = grafData[1].data;

  public ScatterGraphData: any = grafData[2].data;

  public val: number = 0

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
