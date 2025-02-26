<script setup>
defineProps({
  modelValue: [String, Number],
  type: {
    type: String,
    default: 'text',
  },

  teksInput: String,
  classname: String,
})
</script>

<template>
  <div>
    <input :type="type" :placeholder="teksInput" :class="classname" />
  </div>
</template>
