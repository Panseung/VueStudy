<template>
  <div id="watch">
    <h1>watcher</h1>
    <h2>like useEffect()</h2>
    <h3>대부분 computed를 사용하지만,</h3>
    <h3>비동기, 무거운 작업 시 유용함</h3>
    <div id="watch-example">
      <p>
        Ask a yes/no question:
        <input v-model="question">
      </p>
      <p>{{ answer }}</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import _ from 'lodash'
  export default {
    name: 'MyWatch',
    data() {
      return {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!',
        d: 0
      }
    },
    created() {
    },
    mounted() {
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
      // debouncedGetAnswer(){}
      getAnswer() {
        setTimeout( () => {
          console.log( 123 )
        }, 1000 )

        if (this.question.indexOf( '?' ) === -1 ) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.answer = 'Thinking...'
        // var vm = this (arrow function이 있기 때문에 필요 없음)
        // this를 변수에 넣어놓는 행위는 매우 지양할 것
        axios.get( 'https://yesno.wtf/api' )
          .then( ( response ) => {
            this.answer = _.capitalize( response.data.answer )
          } )
          .catch( ( err ) => {
            this.answer = 'Error! Could not reach the API. ' + err
          } )
      },
    },
    watch: {
      question ( newQuestion, oldQuestion ) {
        this.answer = 'Waiting for you to stop typing...'
        this.debouncedGetAnswer()
        // _.debounce(this.getAnswer, 5000)()
      }
    }
    
  }
</script>
<style>

</style>