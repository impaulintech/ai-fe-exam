<template>
	<div class="flex flex-col items-center justify-center bg-theme-30 text-slate-50 px-8 rounded-md flex-grow">
		<h1 class="text-l py-4 border-b border-slate-400 w-full text-center">{{ title }}</h1>
		<h2 class="text-4xl font-bold py-2 w-full text-center">{{ count }}</h2>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
	title: string;
	count: number;
}>();
</script>
