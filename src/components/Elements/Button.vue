<script setup>
defineProps({
  modelValue: [String, Number],
  type: {
    type: String,
    default: 'text',
  },
  Link: String,
  Teks: String,
})
</script>

<template>
  <div>
    <button>
      <a href="">{{ Teks }}</a>
    </button>
  </div>
</template>
