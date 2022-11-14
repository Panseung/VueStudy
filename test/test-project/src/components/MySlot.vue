<template>
  <div>
    <slot-item>
        <template v-slot:first>
          <h3>
            first slot
          </h3>
        </template>
        <template v-slot:second>
          <h3>
            second slot
          </h3>
        </template>
        <template v-slot:third>
          <h3>
            third slot
          </h3>
        </template>
        <template #forth>
          <h3>
            forth slot
          </h3>
        </template>
        <template #fifth>
          <h3>
            fifth slot
          </h3>
        </template>
    </slot-item>
  </div>
</template>
<script>
import SlotItem from './SlotItem';
export default {
  name: 'MySlot',
  components: { SlotItem },
  data() {
    return {

    }
  }
}
</script>
<style>

</style>