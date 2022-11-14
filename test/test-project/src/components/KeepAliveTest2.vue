<template>
  <div>
    <h3>나는 keep-alive 2</h3>
    <input v-model="data2"/>
    <h3>{{ data2 }}</h3>
  </div>
</template>
<script>
export default {
  name: 'KeepAliveTest2',
  data() {
    return {
      data2: '데이터2 초깃값'
    }
  },
  beforeCreate() {
    console.group( 'keepAlive2' )
    console.log( 'keepAlive2.beforeCreate' )
  },
  created() {
    console.log( 'keepAlive2.created' )
  },
  beforeMount() {
    console.log( 'keepAlive2.beforeMount' )
  },
  mounted() {
    console.log( 'keepAlive2.mounted' )
  },
  beforeDestroy() {
    console.log( 'keepAlive2.beforeDestroy' )
  },
  destroyed() {
    console.log( 'keepAlive2.destroyed' )
    console.groupEnd( 'keepAlive2' )
  },
  activated() {
    console.log( 'keepAlive2.activated' )
  },
  deactivated() {
    console.log( 'keepAlive2.deactivated' )
  }
}
</script>
<style>

</style>