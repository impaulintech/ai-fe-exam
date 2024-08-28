<template>
	<div class="min-h-screen bg-theme-60">
		<NavigationBar :activeUser="activeUser" />
		<Dashboard v-if="isCreateArticleVisible" :activeUser="activeUser" />
		<CreateArticle :handleCreateArticle="handleCreateArticle" v-else />
		<Footer :handleClickFAB="handleClickFAB" :isCreateArticleVisible="isCreateArticleVisible" />
	</div>
</template>

<script setup lang="ts">
import { useHooks } from "./hooks";
import CreateArticle from "@/components/Templates/CreateArticle/index.vue";

const {
	Footer,
	Dashboard,
	activeUser,
	NavigationBar,
	handleClickFAB,
	handleCreateArticle,
	isCreateArticleVisible,
} = useHooks();
</script>
