<template>
  <div>
    <button @click="dataChange">데이터 변경  child3</button>
    <h4>{{ testData }}</h4>
  </div>
</template>
<script>
export default {
  name: 'LifecycleChild3',
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
    console.group( 'child3' )
    console.log( 'child3.beforeCreate' )
  },
  created() {
    console.log( 'child3.created' )
  },
  beforeMount() {
    console.log( 'child3.beforeMonut' )
  },
  mounted() {
    console.log( 'child3.mounted' )
    console.groupEnd( 'child3' )
  },
  beforeUpdate() {
    console.log( 'child3.beforeupdated' )
  },
  updated() {
    console.log( 'child3.updated' )
  }

}
</script>
<style>

</style>