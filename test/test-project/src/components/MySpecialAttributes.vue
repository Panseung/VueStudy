<template>
  <div>
    <h1>Special Attributes</h1>
    <br/>
    <h2>ref</h2>
    <input ref="myInputRef" v-model="myModel"/>
    <h2>{{ myModel }}</h2>    
    <button @click="inputRef">console</button>
    <h3>input 입력값에 접근하려면 v-model 사용</h3>
    <button ref="myRef" @click="refTest">input값으로 버튼 이름 변경</button>
    
    <br/>
    <br/>

    <h2>Is Test</h2>
    <h3>컴포넌트 태그에 :is="컴포넌트명"</h3>
    <h3>"컴포넌트명" 에 따라 보여주는 컴포넌트 바뀜</h3>
    <component :is="myComponent"></component>
    <button @click="isTest" ref="isBtn">컴포넌트 2로 바꾸기</button>
  </div>
</template>
<script>
import IsTest1 from './IsTest1'
import IsTest2 from './IsTest2'
export default {
  name: 'MySpecialAttributes',
  components: { IsTest1, IsTest2 },
  data() {
    return {
      myModel:'',
      myComponent: 'is-test1',
      componentState: true
    }
  },
  methods: {
    inputRef() {
      console.log( this.$refs.myInputRef._value )
    },
    refTest() {
      this.$refs.myRef.innerText = this.myModel
    },
    isTest() {
      if ( this.componentState ) {
        this.myComponent = 'is-test2'
        this.componentState = false
        this.$refs.isBtn.innerText = '컴포넌트 2로 바꾸기'
      } else {
        this.myComponent = 'is-test1'
        this.componentState = true
        this.$refs.isBtn.innerText = '컴포넌트 1로 바꾸기'
      }
    }
  }
}
</script>
<style>

</style>