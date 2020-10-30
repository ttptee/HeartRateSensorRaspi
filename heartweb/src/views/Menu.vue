<template>

<div class="main_menu">
    <div class="bg_mainmenu">
        </div>
   <!-- <menuv2/> -->

    <!--div for homeicon-->
        <img class="home_icon" alt="home" src="../assets/logo.svg">
        <div class="home_font">Microelectrics and Info Healthcare </div>
   <!--div for homeicon-->
      <router-link to="/Jiraporn">
        <div class="menu_card_production"><!--div for card menu production-->
            <img class="card_production" alt="heart" src="../assets/heart-rate.svg">
            <div class="font_card_production">60010150</div>
            <div class="font_detail_r ">Jiraporn Sornsumdang</div> 
        </div>  <!--div for card menu production-->  
      </router-link>

       <router-link to="/Thitipat">
        <div class="menu_card_abnormal"><!--div for card menu abnormal-->
            <img class="card_abnormal" alt="heart1" src="../assets/heart-rate1.svg">
            <div class="font_card_abnormal">60010265</div>
            <div class="font_detail_l ">Thitipat Cherdchookwamdee</div>
        </div>  <!--div for card menu abnormal--> 
       </router-link>

      <router-link to="/Chawprapa">
        <div class="menu_card_manpower"><!--div for card menu manpower-->
            <img class="card_manpower" alt="heart2" src="../assets/heart-rate2.svg">
            <div class="font_card_manpower">60010248</div>
            <div class="font_detail_r ">Chawprapa Charoenrat</div>
        </div>  <!--div for card menu manpower--> 
      </router-link>
        
        
   
        <div class="menu_card_assetcontrol"><!--div for card menu assetcontrol-->
            <img class="card_assetcontrol" alt="balloons" src="../assets/balloons.svg">
            <div class="font_card_assetcontrol">Group Heart Rate</div>
            <div class="font_detail_l ">60010150 / 60010265 / 60010248</div>
        </div>  <!--div for card menu manpower--> 
        
        
        <router-view/>
</div>

</template>

<script>    
import Vue from "vue"
import Router from 'vue-router'

Vue.use(Router);

export default {
     name: 'main_menuv2',
 
     components: {
       
  },
  mounted(){
      
  },
    data() {
      return {
       
      }
    }
}
</script>

<style>
.bg_mainmenu{
    background-color:#d8e7e7;
    position: fixed;
    width: 100%;
    height:100%;
    top: 0px;
    left: 0px;
}
.main_menu{
    width: 100%;
    height: 100%;
    position:absolute;
}
@media only screen and (max-width: 425px) {
.home_icon{
    width:8%;
    top: 11%;
    margin-left:6%;
    font-weight:200;
    position: absolute;
} 
.home_font{
    
    font-size:0.9em;
    left:18%;
    top:12%;
    font-weight:bold;
    position: absolute;
   }
.menu_card_production{
    background: #FFFFFF;
    width: 90%;
    position:absolute;
    top: 16%;
    left:5%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.menu_card_production:hover{
    background: #ffffff;
    width: 90%;
    position:absolute;
    top: 16%;
    left:5%;
    border-radius: 10px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
}
.card_production{
    width: 13%;
    padding-top:10%;
    margin-left:13%;
    position: absolute;
}
.font_card_production{
    font-size:1em;
    
    font-weight:300;
    margin-left:55%;
    padding-top:12%;
    padding-bottom: 0px;
    color: black;
    
}
.font_detail_l{
    
    font-size:0.6em;
    color:#6D6E71;
    text-align: center;
    padding-top:2.5%;
    margin-left:-30%;
    padding-bottom: 12%;
    font-weight: 500;
}
.font_detail_r{
    
    font-size:0.6em;
    color:#6D6E71;
    text-align: center;
    padding-top:2.5%;
    margin-left:30%;
    padding-bottom: 12%;
    font-weight: 500;
}
.menu_card_abnormal{
    background: #ffffff;
    width: 90%;
    position:absolute;
    top: 36%;
    left:5%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.menu_card_abnormal:hover{
    background: #ffffff;
    width: 90%;
    position:absolute;
    top: 36%;
    left:5%;
    border-radius: 10px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
}
.card_abnormal{
    width: 13%;
    margin-top:10%;
    margin-left:75%;
    position: absolute;
}
.font_card_abnormal{
    font-size:1em;
    
    font-weight:300;
    text-align: center;
    padding-top:12%;
    padding-bottom: 0px;
    margin-left:-30%;
    color: black;
}
.menu_card_manpower{
    background: #ffffff;
    width: 90%;
    position:absolute;
    top: 56%;
    left:5%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.menu_card_manpower:hover{
    background: #ffffff;
    width: 90%;
    position:absolute;
    top: 56%;
    left:5%;
    border-radius: 10px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
}
.card_manpower{
    width: 13%;
    margin-top:10%;
    position: absolute;
    margin-left:13%;
}
.font_card_manpower{
    font-size:1em;
    
    font-weight:300;
    text-align: center;
    padding-top:12%;
    padding-bottom: 0px;
    margin-left:30%;
     color: black;
}
.menu_card_assetcontrol{
    background: #ffffff;
    width: 90%;
    position:absolute;
    top: 76%;
    left:5%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-bottom:10%;    
}
.menu_card_assetcontrol:hover{
    background: #ffffff;
    width: 90%;
    position:absolute;
    top: 76%;
    left:5%;
    border-radius: 10px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    margin-bottom:10%;    
}
.card_assetcontrol{
    width: 16%;
    margin-top:10%;
     margin-left:75%;
    position: absolute;
}
.font_card_assetcontrol{
    font-size:1em;
    
    font-weight:300;
    text-align: center;
    padding-top:12%;
    padding-bottom: 0px;
    margin-left:-30%;
     color: black;
}
}
@media only screen and (min-width: 426px) {
    
    .home_icon{
       width:8%;
       margin-top: 12%;
       margin-left:6%;
       font-weight:200;
       position: absolute;
   } 
   .home_font{
       
       font-size:1em;
       margin-left:17%;
       margin-top: 14%;
       font-weight:bold;
        position: absolute;
   }
   .menu_card_production{
    background: #ffffff;
    width: 43%;
    position: absolute;
    margin-top: 24%;
    left:6%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
 .menu_card_production:hover{
    background: #ffffff;
    width: 43%;
    position: absolute;
    margin-top: 24%;
    left:6%;
    border-radius: 10px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
}
.card_production{
    width: 20%;
    margin-top:10%;
    margin-left:40%;
}
.font_card_production{
    font-size:1em;
    
    font-weight:300;
    text-align: center;
    padding-top:10%;
    padding-bottom: 0px;
     color: black;
    
}
.font_detail_r{
     
    font-size:0.6em;
    color:#6D6E71;
  text-align: center;
  padding-top:2.5%;
  padding-bottom: 20%;
}
.font_detail_l{
     
    font-size:0.6em;
    color:#6D6E71;
  text-align: center;
  padding-top:2.5%;
  padding-bottom: 20%;
}
.menu_card_abnormal{
    background: #ffffff;
    width: 43%;

    position:absolute;
    margin-top: 24%;
    left:51%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.menu_card_abnormal:hover{
    background: #ffffff;
    width: 43%;
    position:absolute;
    margin-top: 24%;
    left:51%;
    border-radius: 10px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
}
.card_abnormal{
    width: 20%;
    margin-top:10%;
    margin-left:40%;
}
.font_card_abnormal{
    font-size:1em;
    
    font-weight:300;
    text-align: center;
    padding-top:10%;
    padding-bottom: 0px;
    color: black;
}
.menu_card_manpower{
    background: #ffffff;
    width: 43%;
    position:absolute;
    margin-top: 63%;
    left:6%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.menu_card_manpower:hover{
    background: #ffffff;
    width: 43%;
    position:absolute;
    margin-top: 63%;
    left:6%;
    border-radius: 10px;
     box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
}
.card_manpower{
    width: 20%;
    margin-top:10%;
    margin-left:40%;
}
.font_card_manpower{
    font-size:1em;
    
    font-weight:300;
    text-align: center;
    padding-top:10%;
    padding-bottom: 0px;
    color: black;
}
.menu_card_assetcontrol{
    background: #ffffff;
    width: 43%;
    position:absolute;
      margin-top: 63%;
    left:51%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-bottom:20px;    
}
.menu_card_assetcontrol:hover{
    background: #ffffff;
    width: 43%;
    position:absolute;
    margin-top: 63%;
    left:51%;
    border-radius: 10px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    margin-bottom:20px;    
}
.card_assetcontrol{
    width:22%;
    margin-top:9%;
    margin-left:43%;
}
.font_card_assetcontrol{
    font-size:1em;
    
    font-weight:300;
    text-align: center;
    padding-top:10%;
    padding-bottom: 0px;
    color: black;

}
}
@media only screen and (min-width: 590px) {

    .home_icon{
       width:6%;
       margin-top: 10%;
       margin-left:6%;
       font-weight:200;
       position: absolute;
   } 
   .home_font{
       
       font-size:1em;
       margin-left:14%;
       margin-top: 12%;
       font-weight:bold;
        position: absolute;
   }
   .menu_card_production{
    background: #ffffff;
    width: 43%;
    margin-top: 19%;
    left:6%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      position:absolute;
}
 .menu_card_production:hover{
    background: #ffffff;
    width: 43%;
    margin-top: 19%;
    left:6%;
    border-radius: 10px;
    position:absolute;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
}
.card_production{
    width: 20%;
    margin-top:10%;
    margin-left:43%;
}
.font_card_production{
    font-size:1em;
    
    font-weight:300;
    text-align: center;
    padding-top:10%;
    padding-bottom: 0px;
    color: black;
    
}
.font_detail_l{
     
    font-size:0.6em;
    color:#6D6E71;
  text-align: center;
  padding-top:2.5%;
  padding-bottom: 20%;
}
.font_detail_r{
     
    font-size:0.6em;
    color:#6D6E71;
  text-align: center;
  padding-top:2.5%;
  padding-bottom: 20%;
}
.menu_card_abnormal{
    background: #ffffff;
    width: 43%;
     margin-top: 19%;
    left:51%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      position:absolute;
}
.menu_card_abnormal:hover{
    background: #ffffff;
    width: 43%;
     margin-top: 19%;
    left:51%;
    border-radius: 10px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
      position:absolute;
}
.card_abnormal{
    width: 20%;
    margin-top:10%;
    margin-left:43%;
}
.font_card_abnormal{
    font-size:1em;
    
    font-weight:300;
    text-align: center;
    padding-top:10%;
    padding-bottom: 0px;
    color: black;
}
.menu_card_manpower{
    background: #ffffff;
    width: 43%;
      position:absolute;
      margin-top: 55%;
    left:6%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.menu_card_manpower:hover{
    background: #ffffff;
    width: 43%;
      margin-top: 55%;
    left:6%;
    border-radius: 10px;
      position:absolute;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
}
.card_manpower{
    width: 20%;
    margin-top:10%;
    margin-left:43%;
}
.font_card_manpower{
    font-size:1em;
    
    font-weight:300;
    text-align: center;
    padding-top:10%;
    padding-bottom: 0px;
    color: black;
}
.menu_card_assetcontrol{
    background: #ffffff;
    width: 43%;
      margin-top: 55%;
    left:51%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-bottom:20px;   
      position:absolute; 
}
.menu_card_assetcontrol:hover{
    background: #ffffff;
    width: 43%;
      margin-top: 55%;
    left:51%;
    border-radius: 10px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    margin-bottom:20px;    
      position:absolute;
}
.card_assetcontrol{
    width: 22%;
    margin-top:9%;
    margin-left:43%;
}
.font_card_assetcontrol{
    font-size:1em;
    
    font-weight:300;
    text-align: center;
    padding-top:10%;
    padding-bottom: 0px;
    color: black;

}
}
@media only screen and (min-width: 768px) {
 .home_icon{
       width:4%;
       margin-top: 70px;
       margin-left:10%;
       font-weight:200;
       position: absolute;
   } 
   .home_font{
       
       font-size:1em;
       margin-left:15%;
       margin-top: 80px;
       font-weight:bold;
        position: absolute;
   }
   .menu_card_production{
    background: #ffffff;
    width: 40%;
    margin-top: 15%;
    left:10%;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    position: absolute;
}
   .menu_card_production:hover{
    background: #ffffff;
    width: 40%;
    margin-top: 15%;
    left:10%;
    border-radius: 5px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    position: absolute;
}
.card_production{
    width: 18%;
    margin-top:7%;
    margin-left:40%;
}
.font_card_production{
    font-size:1em;
    
    font-weight:300;
    text-align: center;
    padding-top:10%;
    padding-bottom: 0px;
      color: black;
    
}
.font_detail_l{
     
    font-size:0.6em;
    color:#6D6E71;
  text-align: center;
  padding-top:2.5%;
  padding-bottom: 7%;
}
.font_detail_r{
    
    font-size:0.6em;
    color:#6D6E71;
    text-align: center;
    padding-top:2.5%;
    padding-bottom: 7%;
}
.menu_card_abnormal{
    background: #ffffff;
    width: 40%;
    margin-top: 15%;
    left:55%;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    position: absolute;
}
.menu_card_abnormal:hover{
    background: #ffffff;
    width: 40%;
    margin-top: 15%;
    left:55%;
    border-radius: 5px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    position: absolute;
}
.card_abnormal{
    width: 18%;
    margin-top:7%;
    margin-left:40%;
}
.font_card_abnormal{
    font-size:1em;
    
    font-weight:300;
    text-align: center;
    padding-top:10%;
    padding-bottom: 0px;
    color: black;
}
.menu_card_manpower{
    background: #ffffff;
    width: 40%;
    margin-top: 39%;
    left:10%;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    position: absolute;
}
.menu_card_manpower:hover{
    background: #ffffff;
    width: 40%;
    margin-top: 39%;
    left:10%;
    border-radius: 5px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    position: absolute;
}
.card_manpower{
    width: 18%;
    margin-top:7%;
    margin-left:40%;
}
.font_card_manpower{
    font-size:1em;
    
    font-weight:300;
    text-align: center;
    padding-top:10%;
    padding-bottom: 0px;
    color: black;
}
.menu_card_assetcontrol{
    background: #ffffff;
    width: 40%;
    margin-top:39%;
    left:55%;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-bottom:20px;    
    position: absolute;
}
.menu_card_assetcontrol:hover{
    background: #ffffff;
    width: 40%;
    margin-top:39%;
    left:55%;
    border-radius: 5px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    margin-bottom:20px;    
    position: absolute;
}
.card_assetcontrol{
    width: 19%;
    margin-top:6%;
    margin-left:43%;
}
.font_card_assetcontrol{
    font-size:1em;
    
    font-weight:300;
    text-align: center;
    padding-top:10%;
    padding-bottom: 0px;
    color: black;

}
}
@media only screen and (min-width: 1030px) {
 .home_icon{
       width:3.2%;
       margin-top: 80px;
       margin-left:8%;
       font-weight:200;
       position: absolute;
   } 
   .home_font{
       
       font-size:1.3em;
       margin-left:13%;
       margin-top: 95px;
       font-weight:700;
        position: absolute;
   }
   .menu_card_production:hover{
    background: #ffffff;
    width: 30%;
    margin-top: 12%;
    left:13%;
    border-radius: 5px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    position: absolute;
}
   .menu_card_production{
    background: #ffffff;
    width: 30%;
    margin-top: 12%;
    left:13%;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    position: absolute;
}
.card_production{
    width: 20%;
    margin-top:7%;
    margin-left:40%;
}
.font_card_production{
    font-size:1.4em;
    
    font-weight:400;
    text-align: center;
    padding-top:10%;
    padding-bottom: 0px;
    color: black;
    
}
.font_detail_l{
     
    font-size:1em;
    color:#6D6E71;
  text-align: center;
  padding-top:2.5%;
  padding-bottom: 7%;
}
.font_detail_r{
    
    font-size:1em;
    color:#6D6E71;
    text-align: center;
    padding-top:2.5%;
    padding-bottom: 7%;
}
.menu_card_abnormal{
    background: #ffffff;
    width: 30%;
    margin-top: 12%;
    left:48%;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    position: absolute;
}
.menu_card_abnormal:hover{
    background: #ffffff;
    width: 30%;
    margin-top: 12%;
    left:48%;
    border-radius: 5px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    position: absolute;
}
.card_abnormal{
    width: 20%;
    margin-top:7%;
    margin-left:40%;
}
.font_card_abnormal{
    font-size:1.4em;
    
    font-weight:400;
    text-align: center;
    padding-top:10%;
    padding-bottom: 0px;
    color: black;
}
.menu_card_manpower{
    background: #ffffff;
    width: 30%;
    margin-top: 33%;
    left:13%;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    position: absolute;
}
.menu_card_manpower:hover{
    background: #ffffff;
    width: 30%;
    margin-top: 33%;
    left:13%;
    border-radius: 5px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    position: absolute;
}
.card_manpower{
    width: 20%;
    margin-top:7%;
    margin-left:40%;
}
.font_card_manpower{
    font-size:1.4em;
    
    font-weight:400;
    text-align: center;
    padding-top:10%;
    padding-bottom: 0px;
    color: black;
}
.menu_card_assetcontrol{
    background: #ffffff;
    width: 30%;
    margin-top:33%;
    left:48%;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-bottom:20px;    
    position: absolute;
}
.menu_card_assetcontrol:hover{
    background: #ffffff;
    width: 30%;
    margin-top:33%;
    left:48%;
    border-radius: 5px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    margin-bottom:20px;    
    position: absolute;
}
.card_assetcontrol{
    width: 21%;
    margin-top:6%;
    margin-left:43%;
}
.font_card_assetcontrol{
    font-size:1.4em;
    
    font-weight:400;
    text-align: center;
    padding-top:10%;
    padding-bottom: 0px;
    color: black;

}
}

</style>