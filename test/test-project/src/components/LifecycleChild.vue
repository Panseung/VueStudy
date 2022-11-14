<template>
  <div>
    <button @click="dataChange">데이터 변경 child1</button>
    <h4>{{ testData }}</h4>
  </div>
</template>
<script>
export default {
  name: 'LifecycleChild',
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
    console.group( 'child' )
    console.log( 'child.beforeCreate' )
  },
  created() {
    console.log( 'child.created' )
  },
  beforeMount() {
    console.log( 'child.beforeMonut' )
  },
  mounted() {
    console.log( 'child.mounted' )
    console.groupEnd( 'child' )
  },
  beforeUpdate() {
    console.log( 'child.beforeupdated' )
  },
  updated() {
    console.log( 'child.updated' )
  }

}
</script>
<style>

</style>