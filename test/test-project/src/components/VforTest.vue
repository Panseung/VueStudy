<template>
  <div>
    <h1>v-for</h1>
    <h3>v-for와 v-if를 같은 요소에 넣지 않기</h3>
    <h3>2.x버전은 v-for가 더 높은 우선순위</h3>
    <h3>3.x버전은 v-if가 더 높은 우선순위</h3>
    <ul v-if="condition">
      <li v-for="(todo, i) in todos" :key="i">
        {{ todo }}, 인덱스: {{ i }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'VforTest',
  data() {
    return {
      todos: [
        'aaaa',
        'bbbb',
        'cccc',
        'dddd'
      ],
      condition: true
    }
  }
}
</script>
<style>

</style>