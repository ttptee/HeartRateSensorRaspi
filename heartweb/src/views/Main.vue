<template>
<div>    
    <div class="Header">
        <!-- Heart Rate Result -->
        {{Hr}}
        <div>
            AVG : {{AVG}}
        </div>
        <div>
          <LineChart :chartData="datacollection" :options="chartOptions"></LineChart>
        </div>
        <!-- <HrRateLine/> -->
    </div>
   
    <button class="StartBtn" v-on:click="click122()">
        Start
    </button>
</div>

</template>

<script>
import Vue from 'vue'
import firebase from 'firebase'
import { firestorePlugin } from 'vuefire'
// import HrRateLine from '../components/lineHr.vue'
import LineChart from '../components/lineHr.vue'

  export default {
      components:{
          // HrRateLine,
          LineChart,
      },
      name: 'App',
      data () {
      return {
        messagesRef:'',
        DataHr:[],
        DataAvg:[],
        datacollection: null,
        chartOptions: null,
        
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
   
 let app = firebase.initializeApp(firebaseConfig) 
  let db = app.database()
  this.messagesRef = db.ref('/status') //นำค่าของ messages ใส่เก็บไว้ในตัวแปร messagesRef  
  console.log(this.messagesRef)   
// var ref = firebase.database().ref("hearthrate").orderByKey();

// ref.on('value', snapshot=> {
  
//   this.DataHr=[]
//    this.DataHr.push(snapshot.val());
//    console.log(this.DataHr)
// });
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
});

// -----------------------------------------------


  
  


// -----------------------------------------
// var i = 0
// var avg =0
// var query = firebase.database().ref("hearthrate").orderByKey();
// var that = this
// query.on("value")
//   .then(function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       // key will be "ada" the first time and "alan" the second time
//     //   var key = childSnapshot.key;
//     //   console.log(key)
//       // childData will be the actual contents of the child
//       var childData = childSnapshot.val();
      
      
      
//       console.log(i)
      
//       i++
//       avg = (avg+parseFloat(childData))
//       console.log(avg)
      
//   });
  
//   console.log(avg/i)
//   that.DataAvg.push(avg/i)
//   console.log(that.DataAvg)
// });

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
     
      this.datacollection = {
        //   labels: ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00'],
          datasets: [

            {
              label: 'Plan',
              backgroundColor: 'rgba(255, 122, 122, 1)',
              fill:false,
              data: await this.DataHr,
              datalabels: {
              display:false,                
            },
            }, 
          ],      
        },
        this.chartOptions ={
          plugins: {
          datalabels: {
            color: "black",
            textAlign: "center",
            font: {
              weight: "bold",
              size: 12,
            },
          }
        },
            responsive: true,
          legend: {
            position: "top"
          },
          hover: {
            mode: "label"
          },
          scales: {
            xAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Time"
                },
                gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
              }
            ],
                yAxes: [{
                        
                        type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: "left",
                        id: "y-axis-1",
                        scaleLabel:{
                          display:true,
                          labelString: "Production (unit)"
                        },
                         gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                        ticks: {
                  
                  stepSize: 10,
                  min:40,
                  max: 200,
                                  
                }
                    },],
          }
    }
    this.loadcheck=true
    


        
    },
    methods:{
        click122:function(){
            this.DataHr=[]
        console.log('click')
        firebase.database().ref('/status').set(1);
// var query = firebase.database().ref("hearthrate").orderByKey();
// var that = this
// query.once("child_added")
//   .then(function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       // key will be "ada" the first time and "alan" the second time
//     //   var key = childSnapshot.key;
//     //   console.log(key)
//       // childData will be the actual contents of the child
//     //   var childData = childSnapshot.val();
      
//       that.DataHr.push(childSnapshot.val());
//       console.log(that.DataHr)
      
//   });
// });
        setTimeout(this.AvgHr, 10000)
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