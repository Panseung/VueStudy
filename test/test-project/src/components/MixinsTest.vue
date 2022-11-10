<template>
  <div>
    <h1>Mixin</h1>
    <h3>콘솔창 확인</h3>
    <h3>현재 컴포넌트의 data에</h3>
    <h3>다른 컴포넌트의 데이터를 추가</h3>
    <h3>이미 있는 데이터는 제외</h3>
  </div>
</template>
<script>
import MixinDatas from './MixinDatas'
var mixinsBox = {
  data() {
    return {
      message: 'new abcd',
      message3: 'ijkl'
    }
  }
}
export default{
  name: 'MixinsTest',
  components: {MixinDatas},
  mixins: [mixinsBox, MixinDatas],
  data(){
    return {
      message : 'abcd',
      message2 : 'efgh'
    }
  },
  created() {
    console.log(this.$data)
  }

}
</script>
<style>

</style>