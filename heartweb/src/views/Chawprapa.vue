<template>
<!-- in raspi use ttyUSB1 -->
<div>    
    <div class="Header1">
        <!-- Heart Rate Result -->
        <!-- {{Hr}} -->
        <div>
            AVG : {{AVG}}
        </div>
        <div>
          <apexchart type="line" height="350" ref="chart" :options="chartOptions" :series="series"></apexchart>
        </div>
        <!-- <HrRateLine/> -->
    </div>
   
    <button class="StartBtn1" v-on:click="click122()">
        Start
    </button>
     <router-view/>
</div>

</template>

<script>

import Vue from 'vue'
import firebase from 'firebase'
import { firestorePlugin } from 'vuefire'
// import HrRateLine from '../components/lineHr.vue'
// import LineChart from '../components/lineHr.vue'
import VueApexCharts from 'vue-apexcharts'
Vue.component('apexchart', VueApexCharts)

  export default {
      components:{
          // HrRateLine,
          // LineChart,
      },
      name: 'App',
      data () {
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
          data: [0],
        }],
      
        messagesRef:'',
        DataHr:[],
        DataAvg:[],
        
        
        
      }
    },
    created(){
        Vue.use(firestorePlugin)
var firebaseConfig = {
    apiKey: "AIzaSyBQUx8d26u_F6K5GA9kGRo_wHrS77_RrwA",
    authDomain: "healthcare-715f5.firebaseapp.com",
    databaseURL: "https://healthcare-715f5.firebaseio.com",
    projectId: "healthcare-715f5",
    storageBucket: "healthcare-715f5.appspot.com",
    messagingSenderId: "496826199527",
    appId: "1:496826199527:web:6849e4b5dddde3ff9fe142",
    measurementId: "G-PNXTZDDN1S"
  };
   
if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig) 
}
this.dataHr=[0]
 this.DataAvg=[]
var that = this
var i = 0
var avg =0
var Hr=0
var query = firebase.database().ref("hearthrate2").orderByKey();
query.on("value",snapshot=>{
  snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
    //   var key = childSnapshot.key;
    //   console.log(key)
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();
      console.log(childData)
      
      console.log(i)
      
      i++
      Hr = (parseFloat(childData))
      avg = (avg+parseFloat(childData))
      console.log(avg)
      
     
  });
  console.log(avg/i)
that.DataHr.push(Hr); 
that.DataAvg.push(avg/i)
console.log("--data2--")
console.log(that.DataAvg)
that.series.data=that.DataHr
console.log("series")
console.log(that.series.data)
that.updateChart(that.series.data)

});



    },
    computed:{
        AVG: function(){
            return this.DataAvg[0]
        },
        Hr: function(){
            return this.DataHr
        }
    },
   async mounted () {
     
     


        
    },
    methods:{
        click122:function(){
            this.DataHr=[]
        console.log('click')
        firebase.database().ref('/status2').set(1);
        setTimeout(this.AvgHr, 30000)
        },
        
        AvgHr(){
            this.DataAvg=[]
var that = this
var i = 0
var avg =0
var query = firebase.database().ref("hearthrate2").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
    //   var key = childSnapshot.key;
    //   console.log(key)
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();
      console.log(childData)
      
      console.log(i)
      
      i++
      avg = (avg+parseFloat(childData))
      console.log(avg)
      
     
  });
  console.log(avg/i)
  firebase.database().ref('/status2').set(2);
that.DataAvg.push(avg/i)
console.log("data--")
console.log(that.DataAvg)
  
  
});

        },
        fillData () {
        
        
      },
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
    
  }
</script>

<style>
body{
    background-color: #ECB36C;
}
.Header1{
    text-align: center;
    font-size: 50px;
    color: aliceblue;
}
.StartBtn1{
    position: absolute;
    width: 30%;
    bottom: 10%;
    height: 150px;
    font-size: 30px;
    left: 35%;

}


</style>