<template>
<div class="container">
  <img alt="Vue logo" src="./assets/logo.png" class= "logo">
  <ToBuyList/>
  </div>
</template>

<script>

import ToBuyList from './components/ToBuyList.vue'

export default {
  name: 'App',
  components: {
    ToBuyList
  }
}
</script>

<style>

*{
  box-sizing: border-box;
}

.container{
  max-width: 600px;
  margin: 0 auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 24px;
}

.logo{
  display: block;
  margin: 25px auto;
  height: 75px;

}
</style>
