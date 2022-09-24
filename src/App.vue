<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 v-for=" message  in (user.data.msg)" v-bind:key="message">{{message}}</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: ['user'],
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
