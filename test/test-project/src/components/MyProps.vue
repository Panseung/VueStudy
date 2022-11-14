<template>
  <div>
    <h1>Props Emit</h1>
    <h2>propsState: {{ propsState }}</h2>
    <h2 v-if="propsState">test text</h2>
    <button v-if="propsState" @click="$emit('propsFalse')">숨기기</button>
    <button v-if="!propsState" @click="$emit('propsTrue')">보이기</button>
    <button @click="propsRouterTest">go to MyVueRouterProps</button>
  </div>
</template>
<script>
export default {
  name: 'MyProps',
  props: {
    propsState: Boolean
  },
  data () {
    return {

    }
  },
  methods: {
    propsRouterTest() {
      this.$router.push( { 
        name: 'routerProps', params: { myStartDate: '1995-05-29', myEndDate: '9999-12-31' }
        // path: '/routerProps', query: { myStartDate: '1995-05-29', myEndDate: '9999-12-31' }
      } )
    }
  }
}
</script>
<style>
</style>