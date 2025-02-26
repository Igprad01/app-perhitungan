<script setup>
defineProps({
  level: {
    type: Number,
    default: 1,
  },

  text: {
    type: String,
    default: true,
  },
})
</script>

<template>
  <div>
    <component
      :is="`h${level}`"
      :class="
        {
          1: 'text-4xl',
          2: 'text-3xl',
          3: 'text-2xl',
          4: 'text-xl',
          5: 'text-lg',
          6: 'text-base',
        }[level]
      "
      >{{ text }}</component
    >
  </div>
</template>
