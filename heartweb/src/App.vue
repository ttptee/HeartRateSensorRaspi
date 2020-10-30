<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  
  name: 'App',
  components: {
   
  },
  created(){
    
  },
  
}
</script>

<style>
@font-face {
  font-family: "Prompt";
  src: local("Prompt"),
   url(./assets/font/Prompt/Prompt-Light.ttf) format("truetype");
}
*{
font-family: "Prompt";

}
</style>
