<template>
  <div id="app">
    <h1>Convention</h1>
    <h3>Component name at least two words</h3>
    <h3>start with upper</h3>
    <h3>when use component, using '-', start with lower</h3>
    <h3></h3>

    <hr/>

    <computed-test/>
   
    <hr/>

    <watch-test/>

    <hr/>
  
    <promise-test/>
    
    <hr/>

    <mixins-test/>
  </div>
</template>


<script>
import HelloWord from './components/HelloWorld'
import WatchTest from './components/watchTest'
import ComputedTest from './components/ComputedTest'
import PromiseTest from './components/PromiseTest'
import MixinsTest from './components/MixinsTest'

export default {
  name: 'App',
  components: { HelloWord, WatchTest, ComputedTest, PromiseTest, MixinsTest },
  mixins: [],
  data() {
     return {
      } 
  },
  computed: {

  }, 
  created() {

  },
  mounted() {
    
  },
  destroyed() {

  },
  methods: {
  },
  watch: {

  }
}
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
