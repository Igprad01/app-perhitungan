<script setup>
// import components
import InputField from '@/components/Elements/InputField.vue'
import Heading from '@/components/Elements/Heading.vue'
import Button from '@/components/Elements/Button.vue'
import { ref } from 'vue'
// fungsi menghitung splitbill
const Pesanan = ref('')
const TotalTeman = ref('')
const Diskon = ref('')
const Ppn = ref('')

const Hitung = () => {
  let total = parseInt(Pesanan / 3)
}
// besok dilanjutkan dengan mempelajari algoritnya dan cara kerjanya
</script>

<template>
  <div class="flex items-center justify-center min-h-svh md:min-h-svw lg:min-h-screen">
    <div
      class="w-full border-hidden box-border max-w-8/10 bg-slate-200 rounded shadow-[5px_3px_0px_0px_rgba(0,_0,_0,_0.95)] p-6"
    >
      <div class="mx-auto">
        <Heading
          :level="3"
          text="- App patungan - "
          Classname=" text-center font-bold uppercase mb-5"
        />
        <InputField
          teksInput="Total Pesanan"
          classname="w-full bg-transparent mb-4 py-3 px-3 placeholder:text-black border border-dashed rounded-md border-black text-slate-900 text-sm transition duration-100 focus:outline-dashed shadow-md focus:shadow"
          v-model="Pesanan"
          type="number"
        />
        <InputField
          teksInput="Jumlah Teman"
          classname="w-full bg-transparent mb-4 py-3 px-3 placeholder:text-black border border-dashed rounded-md border-black text-slate-900 text-sm transition duration-100 focus:outline-dashed shadow-md focus:shadow"
          v-model="TotalTeman"
        />
        <InputField
          teksInput="Diskon"
          classname="w-full bg-transparent mb-4 py-3 px-3 placeholder:text-black border border-dashed rounded-md border-black text-slate-900 text-sm transition duration-100 focus:outline-dashed shadow-md focus:shadow"
          v-model="Diskon"
        />
        <InputField
          teksInput="PPN"
          classname="w-full bg-transparent mb-4 py-3 px-3 placeholder:text-black border border-dashed rounded-md border-black text-slate-900 text-sm transition duration-100 focus:outline-dashed shadow-md focus:shadow"
          v-model="Ppn"
        />
      </div>
      <div class="flex items-center justify-center min--screen mt-5">
        <Button
          Teks="ini adalah button"
          Link="/Hasil"
          Classname="px-3 py-3 border border-black outline-2 bg-amber-300  shadow-[8px_5px_0px_0px_rgba(0,_0,_0,_0.95)]"
        />
      </div>
    </div>
  </div>
</template>
