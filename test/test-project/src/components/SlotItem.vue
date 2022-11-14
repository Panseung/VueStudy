<template>
  <div>
    <h1>Slot Test</h1>
    <h3>slot 1</h3>
    <slot name="first"></slot>
    <h3>slot 2</h3>
    <slot name="second"></slot>
    <h3>slot 3</h3>
    <slot name="third"></slot>
    <h3>slot 4</h3>
    <slot name="forth"></slot>
    <h3>slot 5</h3>
    <slot name="fifth"></slot>
    
  </div>
</template>
<script>
export default {
  name: 'SlotItem',
  data() {
    return {

    }
  }
}
</script>
<style>

</style>