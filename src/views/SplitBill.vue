<script setup>
import InputField from '@/components/Elements/InputField.vue'
import Teks from '@/components/Elements/Teks.vue'
import Heading from '@/components/Elements/Heading.vue'
import Label from '@/components/Elements/Label.vue'
</script>

<template>
  <div class="flex items-center justify-center min-h-screen p-6">
    <div class="w-full border-hidden box-border max-w-5/10 bg-amber-400 rounded-md shadow-2xl p-6">
      <div class="mx-auto"></div>
      <Heading :level="1" text="Ini adalah H1" />
      <Label TulisanLabel="ini adalah label" />
      <InputField
        teksInput="ini adalah teks"
        classname="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      />
    </div>
  </div>
</template>
