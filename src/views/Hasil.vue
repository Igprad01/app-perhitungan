<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const TotalHasil = ref([
  { label: 'ini adalah label', value: 'ini adalah value' },
  { label: 'ini adalah label', value: '' },
  { label: 'ini adalah label' },
])

const route = useRoute()
const data = route.query
console.log(data)
</script>

<template>
  <div class="flex items-center justify-center min-h-svh md:min-h-svw lg:min-h-screen font-doto">
    <div
      class="w-full border-hidden box-border max-w-8/10 bg-slate-200 rounded shadow-[5px_3px_0px_0px_rgba(0,_0,_0,_0.95)] p-6"
    >
      <div class="mx-auto">
        <div class="border-b pb-2 mb-6" v-for="(item, index) in TotalHasil" :key="index">
          <p>{{ item.label }}</p>
          <p>{{ item.value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- nanti dipikirkan perihal outputnya -->
