<template>
<!-- in raspi use ttyUSB0 -->
<div>    
    <div class="HeaderG">
        <!-- Heart Rate Result -->
        <!-- {{Hr}} -->
        <div>
            AVG : {{AVG}}
        </div>
        <div>
            AVG1 : {{AVG1}}
        </div>
        <div>
            AVG2 : {{AVG2}}
        </div>
        <div>
          <apexchart type="line" height="350" ref="chart" :options="chartOptions" :series="series"></apexchart>
        </div>
        <!-- <HrRateLine/> -->
    </div>
   
    <button class="StartBtnG" v-on:click="click122()">
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
        DataWave:[500],
        DataWave1:[500],
        DataWave2:[500],
        
        
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
var Wave=0
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
  console.log("########################################### AVG ##################################")
  console.log(avg/i)
that.DataHr.push(Hr); 
that.DataAvg.push(avg/i)
console.log("--data2--")
console.log(that.DataAvg)

});

// #####################################################

var Qwave  = firebase.database().ref("wave").orderByKey();
Qwave.on("value",snapshot=>{
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

that.series.data=that.DataWave
console.log("series")
console.log(that.series.data)
that.updateChart(that.series.data,that.series.data1,that.series.data2)

});

// 1--------------------------------------------------------------------------
this.dataHr1=[0]
 this.DataAvg1=[]
var i1 = 0
var avg1 =0
var Hr1=0
var Wave1=0
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
   console.log("########################################### AVG1 ##################################")
  console.log(avg1/i1)
that.DataHr1.push(Hr1); 
that.DataAvg1.push(avg1/i1)
console.log("--data2//--")
console.log(that.DataAvg1)

});

// #####################################################

var Qwave1  = firebase.database().ref("wave1").orderByKey();
Qwave1.on("value",snapshot=>{
  snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
    //   var key = childSnapshot.key;
    //   console.log(key)
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();
      console.log(childData)
      
      console.log(i)
      
      i++
      Wave1 = (parseFloat(childData))
      
      
     
  });
  
that.DataWave1.push(Wave1); 

that.series.data1=that.DataWave1
console.log("series1")
console.log(that.series.data1)
that.updateChart(that.series.data,that.series.data1,that.series.data2)

});

// -----------------------------------------------------------------------
this.dataHr2=[0]
this.DataAvg2=[]
var i2 = 0
var avg2 =0
var Hr2=0
var Wave2=0
var query2 = firebase.database().ref("hearthrate2").orderByKey();
query2.on("value",snapshot2=>{
  snapshot2.forEach(function(childSnapshot2) {
      // key will be "ada" the first time and "alan" the second time
    //   var key = childSnapshot.key;
    //   console.log(key)
      // childData will be the actual contents of the child
      var childData2 = childSnapshot2.val();
      console.log(childData2)
      
      console.log(i2)
      
      i2++
      Hr2 = (parseFloat(childData2))
      avg2 = (avg+parseFloat(childData2))
      console.log(avg2)
      
     
  });
   console.log("########################################### AVG2 ##################################")
  console.log(avg2/i2)
that.DataHr2.push(Hr2); 
that.DataAvg2.push(avg2/i2)
console.log("--data2##--")
console.log(that.DataAvg2)


});
// #####################################################

var Qwave2  = firebase.database().ref("wave2").orderByKey();
Qwave2.on("value",snapshot=>{
  snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
    //   var key = childSnapshot.key;
    //   console.log(key)
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();
      console.log(childData)
      
      console.log(i)
      
      i++
      Wave2 = (parseFloat(childData))
      
      
     
  });
  
that.DataWave2.push(Wave2); 

that.series.data2=that.DataWave2
console.log("series2")
console.log(that.series.data2)
that.updateChart(that.series.data,that.series.data1,that.series.data2)

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
        },
        AVG2: function(){
            return this.DataAvg2[0]
        },
        Hr2: function(){
            return this.DataHr2
        }
    },
   async mounted () {
     
     


        
    },
    methods:{
        click122:function(){
            this.DataHr=[]
            this.DataHr1=[]
            this.DataHr2=[]
        console.log('click')
        firebase.database().ref('/status').set(1);
        firebase.database().ref('/status1').set(1);
        firebase.database().ref('/status2').set(1);
        firebase.database().ref('/statuswave').set(1);
        firebase.database().ref('/statuswave1').set(1);
        firebase.database().ref('/statuswave2').set(1);
        setTimeout(this.AvgHr, 30000)
        },
        
        AvgHr(){
            this.DataAvg=[]
            this.DataAvg1=[]
            this.DataAvg2=[]
var that = this
var i = 0
var avg =0
var i1 = 0
var avg1 =0
var i2 = 0
var avg2 =0
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
var query1 = firebase.database().ref("hearthrate1").orderByKey();
query1.once("value")
  .then(function(snapshot1) {
    snapshot1.forEach(function(childSnapshot1) {
      // key will be "ada" the first time and "alan" the second time
    //   var key = childSnapshot.key;
    //   console.log(key)
      // childData will be the actual contents of the child
      var childData1 = childSnapshot1.val();
      console.log(childData1)
      
      console.log(i1)
      
      i1++
      avg1 = (avg1+parseFloat(childData1))
      console.log(avg1)
      
     
  });
    firebase.database().ref('/status1').set(2);
    that.DataAvg1.push(avg1/i1)
console.log("data--")
console.log(that.DataAvg1)
  });
  var query2 = firebase.database().ref("hearthrate2").orderByKey();
query2.once("value")
  .then(function(snapshot2) {
    snapshot2.forEach(function(childSnapshot2) {
      // key will be "ada" the first time and "alan" the second time
    //   var key = childSnapshot.key;
    //   console.log(key)
      // childData will be the actual contents of the child
      var childData2 = childSnapshot2.val();
      console.log(childData2)
      
      console.log(i2)
      
      i2++
      avg2 = (avg2+parseFloat(childData2))
      console.log(avg2)
      
     
  });
firebase.database().ref('/status2').set(2);
that.DataAvg2.push(avg2/i2)
console.log("data--")
console.log(that.DataAvg2)
  });

        },
        fillData () {
        
        
      },
      updateChart(data,data1,data2) {
        console.log("Update data : ")
        console.log(data)
        console.log("Update data1 : ")
        console.log(data1)
        console.log("Update data2 : ")
        console.log(data2)
        
        // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
        this.chartOptions = {
         
        };
        // In the same way, update the series option
        this.series = [{
          name:"data",
          data: data,
          colors:"#88AEDA"
        },
        {
            name:"data1",
            data:data1,
            colors:"#FFA183"
        },
        {
            name:"data2",
            data:data2,
            colors:"#ECB36C"
        },
        ]
      }
        
    }
    
  }
</script>

<style>
body{
    background-color: cadetblue;
}
.HeaderG{
    text-align: center;
    font-size: 50px;
    color: aliceblue;
}
.StartBtnG{
    position: absolute;
    width: 30%;
    bottom: 5%;
    height: 150px;
    font-size: 30px;
    left: 35%;

}


</style>