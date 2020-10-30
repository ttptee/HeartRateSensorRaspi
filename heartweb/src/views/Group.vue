<template>
<!-- in raspi use ttyUSB0 -->
<div>    
    <div class="Header">
        <!-- Heart Rate Result -->
        <!-- {{Hr}} -->
        <div>
            AVG : {{AVG}}
        </div>
        <div>
            AVG1 : {{AVG1}}
        </div>
        <div>
            AVG : {{AVG}}
        </div>
        <div>
          <apexchart type="line" height="350" ref="chart" :options="chartOptions" :series="series"></apexchart>
        </div>
        <!-- <HrRateLine/> -->
    </div>
   
    <button class="StartBtn" v-on:click="click122()">
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
          name: 'data',
          data: [0],
        },
        {
          name: 'data1',
          data: [0], 
        },
        {
          name: 'data2',
          data: [0], 
        }],
      
        messagesRef:'',
        DataHr:[],
        DataAvg:[],
        DataHr1:[],
        DataAvg1:[],
        DataHr2:[],
        DataAvg2:[],
        
        
        
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
// 0----------------------------------------------------------------------------
this.dataHr=[0]
 this.DataAvg=[]
var that = this
var i = 0
var avg =0
var Hr=0
var query = firebase.database().ref("hearthrate").orderByKey();
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

});

// 1--------------------------------------------------------------------------
this.dataHr1=[0]
 this.DataAvg1=[]
var i1 = 0
var avg1 =0
var Hr1=0
var query1 = firebase.database().ref("hearthrate1").orderByKey();
query1.on("value",snapshot1=>{
  snapshot1.forEach(function(childSnapshot1) {
      // key will be "ada" the first time and "alan" the second time
    //   var key = childSnapshot.key;
    //   console.log(key)
      // childData will be the actual contents of the child
      var childData1 = childSnapshot1.val();
      console.log(childData1)
      
      console.log(i1)
      
      i1++
      Hr1 = (parseFloat(childData1))
      avg1 = (avg+parseFloat(childData1))
      console.log(avg1)
      
     
  });
  console.log(avg1/i1)
that.DataHr1.push(Hr1); 
that.DataAvg1.push(avg1/i1)
console.log("--data2--")
console.log(that.DataAvg1)
that.series.data1=that.DataHr1
console.log("series")
console.log(that.series.data1)
that.updateChart(that.series.data,that.series.data1)

});

    },
    computed:{
        AVG: function(){
            return this.DataAvg[0]
        },
        Hr: function(){
            return this.DataHr
        },
        AVG1: function(){
            return this.DataAvg1[0]
        },
        Hr1: function(){
            return this.DataHr1
        }
    },
   async mounted () {
     
     


        
    },
    methods:{
        click122:function(){
            this.DataHr=[]
            this.DataHr1=[]
        console.log('click')
        firebase.database().ref('/status').set(1);
        setTimeout(this.AvgHr, 30000)
        },
        
        AvgHr(){
            this.DataAvg=[]
            this.DataAvg1=[]
var that = this
var i = 0
var avg =0
var query = firebase.database().ref("hearthrate").orderByKey();
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
  firebase.database().ref('/status').set(2);
that.DataAvg.push(avg/i)
console.log("data--")
console.log(that.DataAvg)
  
  
});

        },
        fillData () {
        
        
      },
      updateChart(data,data1) {
        console.log("Update data : ")
        console.log(data)
        const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']

        // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
        this.chartOptions = {
          colors: [colors[Math.floor(Math.random()*colors.length)]]
        };
        // In the same way, update the series option
        this.series = [{
          name:"data",
          data: data
        },
        {
            name:"data1",
            data:data1
        }]
      }
        
    }
    
  }
</script>

<style>
body{
    background-color: cadetblue;
}
.Header{
    text-align: center;
    font-size: 50px;
    color: aliceblue;
}
.StartBtn{
    position: absolute;
    width: 30%;
    bottom: 10%;
    height: 150px;
    font-size: 30px;
    left: 35%;

}


</style>