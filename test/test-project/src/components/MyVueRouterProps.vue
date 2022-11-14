<template>
  <div>
    <h1>VueRouter Props</h1>
    <h3>props컴포넌트에서 오면 1995-05-29 ~ 9999-12-31 찍히고</h3>
    <h3>router-link 통해서 들어오면 오늘 날짜 찍힘</h3>
    <h3>startDate: {{ myStartDate }}</h3>
    <h3>endDate: {{ myEndDate }}</h3>
    <br/>
    <h3>src/router/index.js에서 해당 컴포넌트에 props:true 설정 후</h3>
    <h3>사용할 곳에서 params에 담아서 보내기</h3>
    <h3>이 때 path로 넘기지 말고 name으로 넘겨야 프롭스에 담김</h3>
    <h3>parmas는 name과, query는 path와 쓰기</h3>
  </div>
</template>
<script>
export default {
  name: 'MyVueRouterProps',
  props: {
    myStartDate: {
      type: String,
      default() {
        let today = new Date()
        let year = today.getFullYear() 
        let month = today.getMonth() + 1 
        let date = today.getDate()
        return year + '-' + month + '-' + date
        
      }
      // required: true
    },
    myEndDate: {
      type: String,
      default() {
        let today = new Date()
        let year = today.getFullYear() 
        let month = today.getMonth() + 1 
        let date = today.getDate()
        return year + '-' + month + '-' + date
      }
      // required: true
    }
  },
  data() {
    return {
      
    }
  },
  created() {
    console.log( this.$props )
  },
}
</script>
<style>

</style>