<template>
  <div>
    <h1>Arrow Test</h1>
    <h3>Arrow에서 this: 상위 스코프의 this</h3>
    <button @click="arrowFunc">활살표 버튼</button>
    <button @click="func">일반 버튼</button>
  </div>
</template>
<script>
  export default {
    name: 'ArrowTest',
    data() {
      return {
        arrowFuncConsole: '',
        funcConsole: '',
      }
    },
    methods: {
      arrowFunc : () => {
        console.log(this)
      },
      func : function() {
        console.log(this)
      }
    }
  }
</script>
<style>

</style>