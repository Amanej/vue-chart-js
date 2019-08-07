<template>
  <div id="app">
    <h2>Graphs</h2>

    <input type="number" v-model="val" @change="changeData" />

    <h3>Bar chart</h3>
    <BasicChart :labels="BarGraphData.labels" :datasets="BarGraphData.datasets" />
    <h3>Line chart</h3>
    <BasicChart :labels="BarGraphData.labels" :datasets="BarGraphData.datasets" chartType="line" :test="val" />
    <h3>Radar chart</h3>
    <BasicChart :labels="BarGraphData.labels" :datasets="BarGraphData.datasets" chartType="radar" />
    <!--
      <h3>Polar chart</h3>
      <BasicChart :labels="BarGraphData.labels" :datasets="BarGraphData.datasets" chartType="polar" />
      <h3>Bubble chart</h3>
      <BasicChart :labels="BarGraphData.labels" :datasets="BarGraphData.datasets" chartType="bubble" />
      <h3>Scatter chart</h3>
      <BasicChart :labels="BarGraphData.labels" :datasets="BarGraphData.datasets" chartType="scatter" />
    -->

    <ul>
      <h4>Need to support</h4>
      <li>Polar</li>
      <li>Bubble</li>
      <li>Scatter</li>
    </ul>

    <button @click="changeData">Change data</button>

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
];


@Component({
  components: {
    BasicChart,
  },
})
export default class App extends Vue {
  public BarGraphData: any = grafData[0].data;

  public val: number = 0

  public changeData() {
    // this.BarGraphData[0].data[0].data[2] = this.val
    // this.BarGraphData.datasets.data[2] = 20
    this.BarGraphData.datasets[0].data[2] = this.val
    console.log(this.BarGraphData.datasets[0].data[2])
  }
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
