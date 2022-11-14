<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-view/>

    <hr/>
    <my-props
      @propsTrue="propsState=true"
      @propsFalse="propsState=false"
      :propsState="propsState"
    />
  </div>
</template>


<script>
import MyWatch from './components/MyWatch'
import MyComputed from './components/MyComputed'
import MyPromise from './components/MyPromise'
import MyMixins from './components/MyMixins'
import MyVfor from './components/MyVfor'
import MyArrow from './components/MyArrow'
import MyProps from './components/MyProps'
import MySlot from './components/MySlot'
import MyDirectives from './components/MyDirectives'
import MySpecialAttributes from './components/MySpecialAttributes'
import MyLifecycle from './components/MyLifecycle'
import MyLetVar from './components/MyLetVar'
import MyCurring from './components/MyCurring'
export default {
  name: 'App',
  components: { 
    MyWatch, 
    MyComputed,
    MyPromise,
    MyMixins,
    MyVfor, 
    MyArrow, 
    MyProps, 
    MySlot, 
    MyDirectives, 
    MySpecialAttributes, 
    MyLifecycle,
    MyLetVar,
    MyCurring
  },
  mixins: [],
  data() {
     return {
      propsState: true,
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
