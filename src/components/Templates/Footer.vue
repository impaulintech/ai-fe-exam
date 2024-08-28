<template>
	<footer
		@click="handleClickFAB"
		:class="[
			'fixed bottom-0 w-fit right-5 bottom-5 hover:opacity-50 hover:scale-90 transition duration-300 ease-in-out',
			isCreateArticleVisible && 'hidden'	
		]"
	>
		<img :src="FAB" alt="FAB" class="cursor-pointer" />
	</footer>
</template>

<script setup lang="ts">
import FAB from "@/assets/svg/FAB.svg";
import { defineProps } from 'vue';

const props = defineProps<({
	handleClickFAB: () => void,
	isCreateArticleVisible: Boolean
})>()
</script>
