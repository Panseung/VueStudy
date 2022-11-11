<template>
  <div id="computed">
    <h1>computed test</h1>
    <h2>like useMemo()</h2>
    <h3>함수처럼 정의하지만 변수로 사용</h3>
    <h3>구독한 변수가 업데이트 될 때 마다</h3>
    <h3>해당 변수에도 변화가 일어남</h3>
    
    <h3>{{ firstName }}</h3>
    <h3>{{ fullName }}</h3>
    <button @click="testName">first name + a</button>
    <button @click="testFullName">rest btn</button>
  </div>
</template>
<script>
  export default {
    name: 'ComputedTest',
    data() {
      return {
        count: 0,
        firstName: 'Foo',
        lastName: 'Bar',
        value: 0
      }
    },
    computed: {
      curCount() {
        return this.count + 1
      },
      fullName: {
        get() {
          return this.firstName + ' ' + this.lastName
        },
        set (newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      },
      // watchTarget() {
      //   return [count, firstName]
      // }
    }, 
    methods: {
      testName() {
        this.firstName = this.firstName + 'a'
      },
      testFullName() {
        this.fullName = 'asd dfss efs'
      },
    },
    watch: {

    //   watchTarget(nv, ov) {
    //   consle.log({nv, ov})
    // }
    }

  }
</script>
<style>

</style>