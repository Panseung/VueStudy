<template>
  <div>
    <h1>Props Emit Test</h1>
    <h2 v-if="propsState">propsState: true</h2>
    <button v-if="propsState" @click="$emit('propsFalse')">숨기기</button>
    <button v-if="!propsState" @click="$emit('propsTrue')">보이기</button>
  </div>
</template>
<script>
export default {
  name: 'PropsTest',
  props: {
    propsState: Boolean
  },
  data () {
    return {

    }
  }
}
</script>
<style>
</style>