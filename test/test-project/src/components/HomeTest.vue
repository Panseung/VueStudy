<template>
  <div>
    <h1>Vue Study</h1>
    <div><router-link to="convention"><h2>Convention</h2></router-link></div>
    <div><router-link to="computed"><h2>Computed</h2></router-link></div>
    <div><router-link to="watch"><h2>Watch</h2></router-link></div>
    <div><router-link to="promise"><h2>Promise</h2></router-link></div>
    <div><router-link to="mixins"><h2>Mixins</h2></router-link></div>
    <div><router-link to="vfor"><h2>v-for</h2></router-link></div>
    <div><router-link to="arrow"><h2>arrow</h2></router-link></div>
    <div><router-link to="props"><h2>props!!!</h2></router-link></div>
    <div><router-link to="slot"><h2>slot!!!</h2></router-link></div>
    <div><router-link to="directives"><h2>directives</h2></router-link></div>
    <div><router-link to="specialAttributes"><h2>specialAttributes</h2></router-link></div>
    <div><router-link to="lifecycle"><h2>lifecycle!!!</h2></router-link></div>
    <div><router-link to="letvar"><h2>letvar</h2></router-link></div>
    <div><router-link to="curring"><h2>curring</h2></router-link></div>
    <div><router-link to="router"><h2>router</h2></router-link></div>
    <div><router-link to="routerProps"><h2>routerProps</h2></router-link></div>
    <div><router-link to="vuex"><h2>vuex</h2></router-link></div>
  </div>
</template>
<script>
export default {
  name: 'HomeTest',
  data() {
    return {
      propsState: true,
    }
  }
}
</script>
<style>

</style>