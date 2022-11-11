<template>
  <div>
    <button @click="dataChange">데이터 변경  child2</button>
    <h4>{{ testData }}</h4>
  </div>
</template>
<script>
export default {
  name: 'LifecycleChild2',
  data() {
    return {
      testData: 0,
    }
  },
  methods: {
    dataChange () {
      this.testData++
    }
  },
  beforeCreate() {
    console.group('child2')
    console.log('child2.beforeCreate')
  },
  created() {
    console.log('child2.created')
  },
  beforeMount() {
    console.log('child2.beforeMonut')
  },
  mounted() {
    console.log('child2.mounted')
    console.groupEnd('child2')
  },
  beforeUpdate() {
    console.log('child2.beforeupdated')
  },
  updated() {
    console.log('child2.updated')
  }

}
</script>
<style>

</style>