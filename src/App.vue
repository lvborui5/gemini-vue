<template>
  <div id="app">
    <i class="fa fa-home" style="font-size:35px;"></i>
    <img v-lazy="'https://lvborui5.github.io/images/avatar.jpg'">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  &::before {
    content: '';
  }
}
</style>
