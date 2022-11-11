<template>
  <div>
    <h1>let, var, const, closure, curring</h1>
    <h3>var는 함수 스코프</h3>
    <h3>let, const는 블록 스코프</h3>
    <h3>스코프 체인: 자신이 찾는 스코프에 식별자가 없으면 상위 스코프로 넘어가는 현상</h3>
    <h3>Lexical Scope(정적스코프): 함수 선언 시점 기준으로 상위 스코프 결정</h3>
    <h3>dynamic Scope(동적스코프): 함수 호출 시점 기준으로 상위 스코프 결정</h3>

    
  </div>
</template>
<script>
export default {
  name: 'letVar',
  data() {
    return {
      testData: 1
    }
  },
  methods: {
    myArrow: () => {
      // console.log(this)
      return ('arrow: ' + this.testData)
    },
    myFunc1() {
      // console.log(this)
      return ('func1: ' + this.testData)
    },
    myFunc2: function() {
      // console.log(this)
      return ('func2: ' + this.testData)
    },
    myFunc: function(val) {
      var secFunc = (val2) => {
        var thirdFunc = (val3) => {
          return val + val2 + val3
        }
        return thirdFunc
      }
      return secFunc
    },
    outerFn() {
      let x = 10
      return function innerFn(y) {
        return x = x + y
      }
    },
    ounterFn2() {
      let x = 10
      return function innerFn(y) {
        return x = x + y
      }
    }
  }
  ,
  created() {
    let closureTest = this.outerFn()
    let closureTest2 = this.ounterFn2()
    console.log(closureTest(3))
    console.log(closureTest(3))
    console.log(closureTest(3))
    console.log(closureTest(3))
    console.log(closureTest2(3))
    console.log(closureTest2(3))
    console.log(closureTest2(3))
    console.log(closureTest2(3))
    // console.log(this.myFunc)
    // console.log(this.myArrow)
    // console.log(this.myFunc1)
    // console.log(this.myFunc2)
    // this.myArrow()
    // this.myFunc1()
    // this.myFunc2()
    // console.log(this.myArrow())
    // console.log(this.myFunc1())
    // console.log(this.myFunc2())
    
  }
}
</script>
<style>

</style>