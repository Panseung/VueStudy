<template>
  <div id="app">
    <h1>Convention</h1>
    <h3>Component name at least two words</h3>
    <h3>start with upper</h3>
    <h3>when use component, using '-', start with lower</h3>
    <h3>$: for public instance properties</h3>
    <h3>_: for private instance properties</h3>
    <h3></h3>

    <hr/>

    <computed-test/>
   
    <hr/>

    <watch-test/>

    <hr/>
  
    <promise-test/>
    
    <hr/>

    <mixins-test/>

    <hr/>

    <vfor-test/>
    
    <hr/>

    <arrow-test/>

    <hr/>

    <props-test
      @propsTrue = "propsState=true"
      @propsFalse = "propsState=false"
      :propsState="propsState"
      />

      <hr/>

      <slot-test>
        <template v-slot:first>
          <h3>
            first slot
          </h3>
        </template>
        <template v-slot:second>
          <h3>
            second slot
          </h3>
        </template>
        <template v-slot:third>
          <h3>
            third slot
          </h3>
        </template>
        <template #forth>
          <h3>
            forth slot
          </h3>
        </template>
        <template #fifth>
          <h3>
            fifth slot
          </h3>
        </template>
      </slot-test>

      <hr/>

      <directives-test/>

      <hr/>

      <special-attributes/>
  </div>
</template>


<script>
import WatchTest from './components/watchTest'
import ComputedTest from './components/ComputedTest'
import PromiseTest from './components/PromiseTest'
import MixinsTest from './components/MixinsTest'
import VforTest from './components/VforTest'
import ArrowTest from './components/ArrowTest'
import PropsTest from './components/PropsTest'
import SlotTest from './components/SlotTest'
import DirectivesTest from './components/DirectivesTest'
import SpecialAttributes from './components/SpecialAttributes'
export default {
  name: 'App',
  components: { WatchTest, ComputedTest, PromiseTest, MixinsTest, VforTest, ArrowTest, PropsTest, SlotTest, DirectivesTest, SpecialAttributes },
  mixins: [],
  data() {
     return {
      propsState: true
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
    propsState: () => {
      console.log('App.vue propsState 변경')
    }
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
