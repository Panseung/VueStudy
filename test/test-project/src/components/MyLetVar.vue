<template>
  <div>
    <h1>let, var, const, closure</h1>
    <h3>var는 함수 스코프</h3>
    <h3>let, const는 블록 스코프</h3>
    <h3>스코프 체인: 자신이 찾는 스코프에 식별자가 없으면 상위 스코프로 넘어가는 현상</h3>
    <h3>Lexical Scope(정적스코프): 함수 선언 시점 기준으로 상위 스코프 결정</h3>
    <h3>dynamic Scope(동적스코프): 함수 호출 시점 기준으로 상위 스코프 결정</h3>
    <br/>
    <h3>closure: 외부함수가 이미 반한되었어도 외부함수 내의 변수를</h3>
    <h3>필요로 하는 내부함수가 하나 이상 존재하는 경우 계속 유지됨</h3>
    <button @click="closureFunc">toggle</button>
    <div ref="closureRef" style="width: 100px; height: 100px; background: red; margin: auto; display: block;"></div>
  </div>
</template>
<script>
export default {
  name: 'myLetVar',
  data() {
    return {
      testData: 1,
    }
  },
  created() {
    this.closureFunc = this.closureTest()
  },
  methods: {
    // closureFunc
    closureTest() {
      let isShow = false;
      console.log( this )
      return () => {
        this.$refs.closureRef.style.display = isShow? 'block' : 'none'
        isShow = !isShow
      }
    }
  },
}
</script>
<style>

</style>