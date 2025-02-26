<script setup>
defineProps({
  modelValue: [String, Number],
  Type: {
    type: String,
    default: 'text',
  },
  Paragraf: String,
})
</script>

<template>
  <div>
    <p>{{ Paragraf }}</p>
  </div>
</template>
