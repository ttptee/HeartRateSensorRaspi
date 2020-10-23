<template>
<div>    
    <div class="Header">
        Heart Rate Result
    </div>
    <button class="StartBtn">
        Start
    </button>
</div>

</template>

<script>
import * as firebase from 'firebase'
var config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',      
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
}
firebase.initializeApp(config)
export default {
    
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