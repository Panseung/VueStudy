<template>
  <div>
    <h2>curring</h2>
    <p>인자를 여러개 받는 함수를 분리하여,</p>
    <p>인자를 하나씩 받는 함수의 체인으로 만드는 방법</p>
    <p>외부 함수 일수록 (가장 인자를 먼저 받을수록)</p>
    <p>인자가 변하지 않아야 한다.</p>
  </div>
</template>
<script>
export default {
  name: 'CurringTest',
  data() {
    return {

    }
  },
  created() {
    console.group('curringTest')
    this.outerCurring('hi')('bye')
    const curcur = this.outerCurring('hi2')
    curcur('bye2')
    console.groupEnd('curringTest')
  },
  methods: {
    outerCurring(outer) {
      // const innerCurring = function(inner) {
      //   console.log('inner: ' + inner + '&' + 'outer: ' + outer)
      // }
      // return innerCurring(inner)
      return function(inner) {
        console.log('inner: ' + inner + ' & ' + 'outer: ' + outer)
      }
    }
  }
}
</script>
<style>

</style>