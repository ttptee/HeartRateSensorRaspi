<template>
  <div>
    <Main/>
  </div>
</template>

<script>
import Main from '@/views/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  }
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
