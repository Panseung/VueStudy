<template>
  <div>
    <h3>나는 keep-alive 1</h3>
    <input v-model="data1"/>
    <h3>{{ data1 }}</h3>
  </div>
</template>
<script>
export default {
  name: 'KeepAliveTest1',
  data() {
    return {
      data1: '데이터1 초깃값'
    }
  },
  beforeCreate() {
    console.group('keepAlive1')
    console.log('keepAlive1.beforeCreate')
  },
  created() {
    console.log('keepAlive1.created')
  },
  beforeMount() {
    console.log('keepAlive1.beforeMount')
  },
  mounted() {
    console.log('keepAlive1.mounted')
  },
  beforeDestroy() {
    console.log('keepAlive1.beforeDestroy')
  },
  destroyed() {
    console.log('keepAlive1.destroyed')
    console.groupEnd('keepAlive1')
  },
  activated() {
    console.log('keepAlive1.activated')
  },
  deactivated() {
    console.log('keepAlive1.deactivated')
  }

}
</script>
<style>

</style>