<template>
<div>    
    <div class="Header">
        Heart Rate Result
        <div v-for="data in DataHr" v-bind:key="data">
            {{data}}

        </div>
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

  export default {
      name: 'App',
      data () {
      return {
        messagesRef:'',
        DataHr:[],
        
        
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
var ref = firebase.database().ref();

ref.on('value', snapshot=> {
   this.DataHr.push(snapshot.val().hearthrate);
   console.log(this.DataHr[0])
});
    },
    mounted () {
      


        
    },
    methods:{
        click122:function(){
        console.log('click')
        firebase.database().ref('/status').set(1);
        setTimeout(this.AvgHr, 20000)

        },
        AvgHr(){
            firebase.database().ref('/status').set(2);
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