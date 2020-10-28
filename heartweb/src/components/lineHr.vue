<template>
    <div>
 <apexchart type="line" height="350" ref="chart" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'
// import firebase from 'firebase'
// import { firestorePlugin } from 'vuefire'
Vue.component('apexchart', VueApexCharts)

export default {
    data(){
      return {
         
        chartOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            
          },
        },
        series: [{
          name: 'series-1',
          data: [0]
        }]
      }
    },
     created(){
       

    },
    mouted(){
      setInterval(function(){console.log("Update data : ")}, 1000);
    },
    methods: {
      updateChart(data) {
        console.log("Update data : ")
        console.log(data)
        const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']

        // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
        this.chartOptions = {
          colors: [colors[Math.floor(Math.random()*colors.length)]]
        };
        // In the same way, update the series option
        this.series = [{
          data: data
        }]
      }
    }
};

    

</script>