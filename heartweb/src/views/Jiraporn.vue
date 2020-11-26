<template>
<!-- in raspi use ttyUSB1 -->
<div>  
  <div v-on:click="changepage()">   
  <img class="home_icon_fern" alt="home_fern" src="../assets/logo1.svg">
        <div class="home_font_fern">Microelectrics and Info Healthcare </div>
  </div>   
    <div class="Header1">
        <!-- Heart Rate Result -->
        <!-- {{Hr}} -->
        <div>
            AVG : {{AVG}}
        </div>
    </div>
        <div class="div_graph_fern">
          <apexchart class="graph_jiraporn" type="line" height="250" ref="chart" :options="chartOptions" :series="series"></apexchart>
        </div>
        <div class="div_graph_fern">
          <apexchart class="graph_jiraporn" type="line" height="250" ref="chart" :options="chartOptions" :series="series2"></apexchart>
        </div>
        <!-- <HrRateLine/> -->
    
   
    <button class="StartBtn1" v-on:click="click122()">
      <img class="logo-start_fern" alt="start_fern" src="../assets/start.svg">
      <div class="text_start_fern">Start</div>
      <div class="text_heartrate_fern">Start to Measure Heartrate</div>
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

        series2: [{
          name: 'series-1',
          data: [0],
        }],
        
      
        messagesRef:'',
        DataHr:[],
        DataAvg:[],
        DataWave:[],
        
        
        
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
var Wave=0
var query = firebase.database().ref("hearthrate1").orderByKey();
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

var query2 = firebase.database().ref("wave1").orderByKey();
query2.on("value",snapshot=>{
  snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
    //   var key = childSnapshot.key;
    //   console.log(key)
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();
      console.log(childData)
      
      console.log(i)
      
      i++
      Wave = (parseFloat(childData))
      
      
     
  });
  
that.DataWave.push(Wave); 

that.series2.data=that.DataWave

that.updateChart2(that.series2.data)

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
      changepage(){
        this.$router.push("/")
      },
        click122:function(){
            this.DataHr=[]
        console.log('click')
        firebase.database().ref('/status1').set(1);
        firebase.database().ref('/statuswave1').set(1);
        setTimeout(this.AvgHr, 30000)
        },
        
        AvgHr(){
            this.DataAvg=[]
var that = this
var i = 0
var avg =0
var query = firebase.database().ref("hearthrate1").orderByKey();
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
  firebase.database().ref('/status1').set(2);
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
        

        // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
        this.chartOptions = {
          
        };
        // In the same way, update the series option
        this.series = [{
          data: data,
          colors:"#88AEDA"
        }]
      },
      updateChart2(data) {
        console.log("Update data : ")
        console.log(data)
        const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']

        // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
        this.chartOptions = {
          colors: [colors[Math.floor(Math.random()*colors.length)]]
        };
        // In the same way, update the series option
        this.series2 = [{
          data: data
        }]
      }
      
        
    }
    
  }
</script>

<style>
body{
    background-color: #FFA183;
}
.home_icon_fern{
  width:3.2%;
  margin-top:-120px;
  margin-left:8%;
  font-weight:200;
  position: absolute;
   } 
.home_font_fern{
  font-size:1.3em;
  margin-left:13%;
  margin-top:-105px;
  font-weight:700;
  position: absolute;
  color:#ffffff;
   }
.div_graph_fern{
  background: #f7f7f7;
  margin-top:-35px;
  border-radius: 10px;
  width:90%;
  margin-left:5%;
  height: 350px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.text_start_fern{
  color:#fff;
  font-size: 1.5em;
  text-align: center;
}
.graph_jiraporn{
  width:90%;
  margin-left:5%;
  padding-top:50px;
  color:#fff;
  margin-top:5%;
}
.Header1{
  margin-top:170px;
  text-align: center;
  font-size: 50px;
  color: aliceblue;
}
.StartBtn1{
  position: static;
  margin-top:20px;
  width:25%;
  height:150px;
  margin-left:40%;
   margin-bottom: 20px;
  background: #445D68;
  border-radius: 10px;
  border:none;
}
.text_heartrate_fern{
  margin-top:10px;
  font-size:1em;
  color:#fff;
  text-align: center;
}
.logo-start_fern{
  padding-top:10px;
  width:10%;
}

</style>