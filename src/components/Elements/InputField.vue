<script setup>
defineProps({
  modelValue: [String, Number],
  type: {
    type: String,
    default: 'text',
  },

  inputdata: String,
})
</script>

<template>
  <div>
    <input :type="type" :placeholder="inputdata" class="" />
  </div>
</template>
