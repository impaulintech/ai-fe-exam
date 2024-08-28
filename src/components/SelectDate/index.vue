<template>
  <div class="relative w-full">
    <div
      class="flex items-center p-2 border border-gray-300 rounded-md bg-white cursor-pointer"
      @click="handleDateChange"
    >
      <input
        ref="dateInput"
        type="date"
        v-model="formattedDate"
        placeholder="Select Date"
        class="flex-1 bg-transparent border-none text-gray-700 text-lg placeholder-gray-400 focus:outline-none"
      />
      <img :src="CalendarIcon" alt="Calendar" class="w-6 h-6 ml-2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import 'flatpickr/dist/flatpickr.css'; 
import { defineProps } from 'vue';
import CalendarIcon from '@/assets/svg/calendar.svg';

let formattedDate: any;
const {handleDateChange}: any = defineProps<({
  handleDateChange: {
    type: any,
    required: true
  },
})>()
</script>
