<template>
  <div>
    <h1>Directives</h1>
    
    <br/>

    <h2>v-text</h2>
    <h3>&lt;span v-text="msg"&gt;&lt;/span&gt;</h3>
    <h3>same</h3>
    <h3 v-pre>&lt;span&gt; {{ msg }} &lt;/span&gt; </h3>

    <br/>

    <h2>v-show vs v-if</h2>
    <h3>v-if : 조건이 맞지 않으면 렌더링 하지 않음</h3>
    <h3>조건이 바뀔때마다 렌더링</h3>
    <h3>v-show : 조건에 상관없이 렌더링 해놓음</h3>
    <h3>이미 렌더링 해놓았기 때문에 조건 바껴도 리렌더링x</h3>
    <h3>결론: 변경 빈도가 높은 경우 v-show 사용</h3>
    
    <br/>

    <h2>v-on (shorthand: '@')</h2>
    <h2>v-bind (shorthand: ':')</h2>
    <h2>slot (shorthand: '#')</h2>
    <br/>

    <h2>v-model</h2>
    <input v-model="modelState">
    <h3>입력: {{ modelState }}</h3>
    <textarea v-model="multiLineState"></textarea>
    <h3 style="white-space: pre-line">입력: {{ multiLineState }}</h3>

    <h2 v-pre>{{ mustache를 텍스트로 사용 가능 }}</h2>
    
    <br/>
    
    <h2>v-once</h2>
    <h3>요소나 컴포넌트를 한 번만 렌더링 함</h3>
    <button @click="changeMyMessage">myMessage 변경</button>
    <h3 v-once>원래 myMessage: {{ myMessage }}</h3>
    <h3>변경된 myMessage: {{ myMessage }}</h3>
  </div>
</template>
<script>
export default {
  name: 'MyDirectives',
  data() {
    return{
      msg: 'same',
      modelState: '',
      multiLineState: '',
      myMessage: '아직 안바뀜',
    }
  },
  beforeCreate() {
    setTimeout( () => {

    },1000)
  },
  methods: {
    changeMyMessage() {
      console.log( this.myMessage )
      this.myMessage = '바뀜'
    }
  }
}
</script>
<style>
[v-cloak] {
  display: none;
}
</style>