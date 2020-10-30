<template>
<!-- in raspi use ttyUSB0 -->
<div>
   <div v-on:click="changepage()">  
  <img class="home_icon_tee" alt="home_tee" src="../assets/logo1.svg">
        <div class="home_font_tee">Microelectrics and Info Healthcare </div>
  </div> 
    <div class="Header">
        <!-- Heart Rate Result -->
        <!-- {{Hr}} -->
        <div>
            AVG : {{AVG}}
        </div>
         </div>
        <div class="div_graph">
          <apexchart class="graph_thitipat" type="line" height="250" ref="chart" :options="chartOptions" :series="series"></apexchart>
        </div>
        <!-- <HrRateLine/> -->
   
   
    <button class="StartBtn" v-on:click="click122()">
       <img class="logo-start" alt="start" src="../assets/start.svg">
      <div class="text_start">Start</div>
      <div class="text_heartrate">Start to Measure Heartrate</div>
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
      changepage(){
        this.$router.push("/")
      },
        click122:function(){
            this.DataHr=[]
        console.log('click')
        firebase.database().ref('/status').set(1);
        setTimeout(this.AvgHr, 30000)
        },
        
        AvgHr(){
            this.DataAvg=[]
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
.home_icon_tee{
  width:3.2%;
  margin-top:-120px;
  margin-left:8%;
  font-weight:200;
  position: absolute;
   } 
.home_font_tee{
  font-size:1.3em;
  margin-left:13%;
  margin-top:-105px;
  font-weight:700;
  position: absolute;
  color:#ffffff;
   }
.div_graph{
  background: #f7f7f7;
  margin-top:-40px;
  border-radius: 10px;
  width:90%;
  margin-left:5%;
  height: 350px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.text_start{
  color:#fff;
  font-size: 1.5em;
  text-align: center;
}
.graph_thitipat{
  width:90%;
  margin-left:5%;
  padding-top:50px;
  color:#fff;
  margin-top:5%;
}
body{
  background-color: #88AEDA;
}
.Header{
  margin-top:170px;
  text-align: center;
  font-size: 50px;
  color: aliceblue;
}
.StartBtn{
  position: absolute;
  top:670px;
  width:25%;
  bottom:10%;
  height:150px;
  left:40%;
  background: #445D68;
  border-radius: 10px;
  border:none;
}
.text_heartrate{
  margin-top:10px;
  font-size:1em;
  color:#fff;
  text-align: center;
}
.logo-start{
  padding-top:10px;
  width:10%;
}


</style>