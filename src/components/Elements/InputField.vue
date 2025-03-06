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

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div>
    <input
      :type="type"
      :placeholder="teksInput"
      :class="classname"
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>
