<template>
	<button
		:class="[
			type === 'primary' && 'bg-theme-10',
			type === 'secondary' && 'border border-theme-10',
			type === 'secondary' ? 'text-theme-10' : 'text-white',
			type === 'tertiary' && 'text-theme-10',
			'px-4',
			'py-2',
      'font-semibold',
			'rounded-sm',
			hidden && 'hidden',
		]"
	>
		{{ label }}
	</button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
	label?: String;
	type?: "primary" | "secondary" | "tertiary";
	hidden?: Boolean;
}>();
</script>
