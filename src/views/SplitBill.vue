<script setup>
// import components
import InputField from '@/components/Elements/InputField.vue'
import Heading from '@/components/Elements/Heading.vue'
import Button from '@/components/Elements/Button.vue'
import { ref } from 'vue'

// fungsi menghitung splitbill
const TotalPesanan = ref('')
const TotalTeman = ref('')
const Diskon = ref('')
const Ppn = ref('')
const HasilData = ref('')

const HitungPatungan = () => {
  // deklarasi variable
  let Total = parseFloat(TotalPesanan.value)
  let JumlahTeman = parseInt(TotalTeman.value)
  let TotalDiskon = parseFloat(Diskon.value)
  let TotalPpn = parseFloat(Ppn.value)
  // perhitungan nya
  let TotalSemuanya = Total - (Total * TotalDiskon) / 100
  let AfterPPN = TotalSemuanya + (TotalSemuanya * TotalPpn) / 100
  let BiayaOrang = AfterPPN / JumlahTeman
  let totalPembayaran = BiayaOrang * JumlahTeman

  HasilData.value = `Total Pesanan: ${Total}\nJumlah Teman: ${JumlahTeman}\nDiskon: ${TotalDiskon}%\nPPN: ${TotalPpn}%\nTotal Setelah Diskon: ${TotalSemuanya}\nTotal Setelah PPN: ${AfterPPN}\nBiaya Per Orang: ${BiayaOrang}\nTotal Pembayaran: ${totalPembayaran}`
}
</script>

<template>
  <div class="flex items-center justify-center min-h-svh md:min-h-svw lg:min-h-screen font-doto">
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
          v-model="TotalPesanan"
          type="number"
          classname="w-full bg-transparent mb-4 py-3 px-3 placeholder:text-black border border-dashed rounded-md border-black text-slate-900 text-sm transition duration-100 focus:outline-dashed shadow-md focus:shadow"
        />
        <InputField
          teksInput="Jumlah Teman"
          v-model="TotalTeman"
          type="number"
          classname="w-full bg-transparent mb-4 py-3 px-3 placeholder:text-black border border-dashed rounded-md border-black text-slate-900 text-sm transition duration-100 focus:outline-dashed shadow-md focus:shadow"
        />
        <InputField
          teksInput="Diskon"
          v-model="Diskon"
          type="number"
          classname="w-full bg-transparent mb-4 py-3 px-3 placeholder:text-black border border-dashed rounded-md border-black text-slate-900 text-sm transition duration-100 focus:outline-dashed shadow-md focus:shadow"
        />
        <InputField
          teksInput="PPN"
          v-model="Ppn"
          type="number"
          classname="w-full bg-transparent mb-4 py-3 px-3 placeholder:text-black border border-dashed rounded-md border-black text-slate-900 text-sm transition duration-100 focus:outline-dashed shadow-md focus:shadow"
        />
        <div class="flex items-center justify-center min--screen mt-5">
          <Button
            Teks="ini adalah button"
            @click="HitungPatungan"
            Classname="px-3 py-3 border border-black outline-2 bg-amber-300  shadow-[8px_5px_0px_0px_rgba(0,_0,_0,_0.95)]"
          />
        </div>
        <textarea v-model="HasilData" cols="30" rows="10" class="w-full border p-2 mt-4"></textarea>
      </div>
    </div>
  </div>
</template>
