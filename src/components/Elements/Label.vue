<script setup>
defineProps({
  modelValue: [String, Number],
  type: {
    type: String,
    default: 'text',
  },
  TulisanLabel: String,
})
</script>

<template>
  <div>
    <label for="">{{ TulisanLabel }}</label>
  </div>
</template>
