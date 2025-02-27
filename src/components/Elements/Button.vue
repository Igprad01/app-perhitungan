<script setup>
defineProps({
  modelValue: [String, Number],
  type: {
    type: String,
    default: 'text',
  },
  Link: {
    type: String,
    default: true,
  },
  target: {
    type: String,
    default: '_self',
  },
  Teks: String,
  Classname: String,
})
</script>

<template>
  <div>
    <button :class="Classname">
      <a :href="Link">{{ Teks }}</a>
    </button>
  </div>
</template>
