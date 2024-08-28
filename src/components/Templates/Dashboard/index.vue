<template>
	<main class="px-8 lg:px-24">
		<h1 class="text-3xl font-semibold text-slate-900 py-8">Dashboard</h1>
		<div class="flex w-full gap-2 lg:gap-8 flex-wrap lg:flex-nowrap">
			<CountCard
				v-for="(card, index) in editorCards"
				:key="index"
				:title="card.title"
				:count="card.count"
			/>
		</div>
		<div class="py-12">
			<div class="flex gap-4 border-b border-slate-400 py-4">
				<button
					@click="onSwitchTab('for-edit')"
					:class="[
						'text-md',
						'cursor-pointer',
						'hover:text-theme-10',
						activeTab === 'for-edit'
							? 'text-theme-30 font-semibold'
							: 'text-slate-400',
					]"
				>
					For Edit
				</button>
				<button
					@click="onSwitchTab('published')"
					:class="[
						'text-md',
						'cursor-pointer',
						'hover:text-theme-10',
						activeTab === 'published'
							? 'text-theme-30 font-semibold'
							: 'text-slate-400',
					]"
				>
					Published
				</button>
			</div>
			<div class="flex flex-wrap gap-8 justify-center align-stretch py-8">
				<ArticleCard
					v-for="(article, index) in filteredArticles(activeTab, activeUser)"
					:key="index"
					:role="article.role"
					:status="article.status"
					:articleTitle="article.articleTitle"
					:articleSummary="article.articleSummary"
					:userName="article.userName"
					:imageLink="article.imageLink"
					:date="article.date"
					:buttonLabel="article.buttonLabel"
					:buttonType="article.buttonType"
				/>
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
import { Role, useHooks } from "./hooks";
import { defineProps } from "vue";

defineProps<({
  activeUser: Role
})>()

const {
	CountCard,
	activeTab,
	ArticleCard,
	editorCards,
	onSwitchTab,
	filteredArticles,
} = useHooks();

</script>
