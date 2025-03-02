<script setup>
defineProps({
  modelValue: [String, Number],
  type: {
    type: String,
    Number,
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
