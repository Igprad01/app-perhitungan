<script setup>
import Heading from '@/components/Elements/Heading.vue'
import InputField from '@/components/Elements/InputField.vue'
import Button from '@/components/Elements/Button.vue'
import { ref } from 'vue'

const TotalPesanan = ref('')
const TotalTeman = ref('')
const Diskon = ref('')
const PPN = ref('')
const Hasil = ref('')

const ListInput = ref([
  { Teks: 'Total Pesanan', hasil: TotalPesanan, tipe: 'number' },
  { Teks: 'Jumlah Teman', hasil: TotalTeman },
  { Teks: 'Total Diskon', hasil: Diskon },
  { Teks: 'Pajak Pesanan', hasil: PPN },
])

const HitungHasil = () => {
  let Total = parseFloat(TotalPesanan.value)
  let JumlahTeman = parseInt(TotalTeman.value)
  let TotalDiskon = parseFloat(Diskon.value)
  let Ppn = parseFloat(PPN.value)

  // perhitungan

  let TotalSemuanya = Total - (Total * TotalDiskon) / 100
  let sesudahPPN = TotalSemuanya + (TotalSemuanya * Ppn) / 100
  let BiayaOrang = sesudahPPN / JumlahTeman
  let totalPembayaran = BiayaOrang * JumlahTeman

  Hasil.value = `total pesanan: ${Total}, total pesanan: ${Total}${JumlahTeman}, ${TotalDiskon},${Ppn}, ${TotalSemuanya}, ${BiayaOrang}, ${totalPembayaran}`
}

// tinggal fix font dan tinggal fix proses perhitungan
</script>

<template>
  <div class="flex items-center justify-center min-h-screen font-Red-Mono">
    <div
      class="w-full border box-border max-w-7/10 bg-slate-300 p-6 shadow-[8px_5px_0px_0px_rgba(0,_0,_0,_0.95)]"
    >
      <Heading text="--APP PATUNGAN--" level="5" Classname="font-bold uppercase text-center mb-5" />
      <InputField
        v-for="(item, index) in ListInput"
        :key="index"
        :teksInput="item.Teks"
        v-model="item.hasil"
        classname="w-full mb-4 py-3 px-3 border rounded-md border-black text bg-slate-100 text-sm transition
        duration-200 focus:outline-2 shadow-lg focus:shadow"
      />
      <div class="flex items-center justify-center mt-5">
        <Button
          Teks="Hitung Patungan"
          @click="HitungHasil"
          Classname="px-4 py-4 bg-amber-500 outline shadow-[8px_5px_0px_0px_rgba(0,_0,_0,_0.95)]"
        />
      </div>
      <textarea v-model="Hasil" class="border w-full mt-5" cols="50" rows="5" disabled></textarea>
    </div>
  </div>
</template>
