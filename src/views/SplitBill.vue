<script setup>
// import components
import InputField from '@/components/Elements/InputField.vue'
import Heading from '@/components/Elements/Heading.vue'
import Button from '@/components/Elements/Button.vue'
import { ref } from 'vue'
// fungsi menghitung splitbill
const TotalPesanan = ref('0')
const TotalTeman = ref('1')
const Diskon = ref('0')
const Ppn = ref('0')

const HitungPatungan = () => {
  // deklarasi variable
  let Total = parseFloat(TotalPesanan.value) || 0
  let JumlahTeman = parseInt(TotalTeman.value) || 1
  let TotalDiskon = parseFloat(Diskon.value) || 0
  let TotalPpn = parseFloat(Ppn.value) || 0

  console.log('Total:', Total)
  console.log('Jumlah Teman:', JumlahTeman)
  console.log('Diskon:', TotalDiskon)
  console.log('PPN:', TotalPpn)

  // perhitungan nya
  let TotalSemuanya = Total - (Total * TotalDiskon) / 100
  let AfterPPN = TotalSemuanya + (TotalSemuanya * TotalPpn) / 100
  let BiayaOrang = AfterPPN / JumlahTeman
  let totalPembayaran = BiayaOrang * JumlahTeman
  let Sisa = AfterPPN - totalPembayaran

  console.log('jumlah :', TotalSemuanya)
  console.log('Total PPN :', AfterPPN)
  console.log('Total Pembayaran', totalPembayaran)
  console.log('Sisa yang dibayar: ', Sisa)
}
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
          @input="TotalPesanan = parseFloat($event.target.value)"
          type="number"
        />
        <InputField
          teksInput="Jumlah Teman"
          classname="w-full bg-transparent mb-4 py-3 px-3 placeholder:text-black border border-dashed rounded-md border-black text-slate-900 text-sm transition duration-100 focus:outline-dashed shadow-md focus:shadow"
          @input="TotalTeman = parseInt($event.target.value)"
          type="number"
        />
        <InputField
          teksInput="Diskon"
          classname="w-full bg-transparent mb-4 py-3 px-3 placeholder:text-black border border-dashed rounded-md border-black text-slate-900 text-sm transition duration-100 focus:outline-dashed shadow-md focus:shadow"
          @input="Diskon = parseFloat($event.target.value)"
          type="number"
        />
        <InputField
          teksInput="PPN"
          classname="w-full bg-transparent mb-4 py-3 px-3 placeholder:text-black border border-dashed rounded-md border-black text-slate-900 text-sm transition duration-100 focus:outline-dashed shadow-md focus:shadow"
          @input="Ppn = parseFloat($event.target.value)"
          type="number"
        />
      </div>
      <div class="flex items-center justify-center min--screen mt-5">
        <Button
          Teks="ini adalah button"
          @click="HitungPatungan"
          Classname="px-3 py-3 border border-black outline-2 bg-amber-300  shadow-[8px_5px_0px_0px_rgba(0,_0,_0,_0.95)]"
        />
      </div>
    </div>
  </div>
</template>
