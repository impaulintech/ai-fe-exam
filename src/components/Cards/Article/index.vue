<template>
	<div class="flex-grow min-w-72 max-w-96 bg-slate-100 px-6 py-4 rounded-sm">
		<div class="flex gap-4 py-4">
			<div
				class="h-10 w-10 bg-slate-400 rounded-full bg-cover bg-center"
				:style="{ backgroundImage: `url(${userAvatar || AvatarDefault})` }"
			></div>
			<div class="flex flex-col">
				<h1 class="text-l font-semibold">{{ userName }}</h1>
				<span class="text-sm">{{ decodeTimestampToDate(date) }}</span>
			</div>
		</div>
		<div
			class="min-h-40 w-full bg-cover bg-center rounded-md"
			:style="{ backgroundImage: `url(${imageLink || CoverImageDefault})` }"
		></div>
		<div class="flex flex-col gap-1 py-4">
			<h1 class="text-l font-bold">{{ articleTitle }}</h1>
			<p class="text-sm">{{ articleSummary }}</p>
		</div>
		<div>
			<div v-if="role === 'writer'">
				<PrimaryButton
					v-if="status === 'for-edit'"
					label="Edit"
					type="secondary"
				/>
				<div v-else-if="status === 'published'" class="w-full text-slate-400 flex gap-2 items-center">
					<img :src="PublishedIcon" alt="Published" class="w-4 h-4" title="Published"/>
					<span>by {{ userName }}</span>
				</div>
				<PrimaryButton v-else-if="status === 'published'" hidden />
			</div>

			<div v-else-if="role === 'editor'" class="flex gap-4">
				<PrimaryButton
					v-if="status === 'for-edit'"
					label="Edit"
					type="secondary"
				/>
				<PrimaryButton
					v-if="status === 'for-edit'"
					label="Publish"
					type="primary"
				/>
				<div v-else-if="status === 'published'" class="w-full text-slate-400 flex gap-2 items-center">
					<img :src="PublishedIcon" alt="Published" class="w-4 h-4" title="Published"/>
					<span>by {{ userName }}</span>
				</div>
				<PrimaryButton v-else-if="status === 'published'" hidden />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import PrimaryButton from "@/components/Buttons/Primary.vue";
import { defineProps } from "vue";
import { decodeTimestampToDate } from "@/utils/dateHelper";
import AvatarDefault from "@/assets/svg/profile.svg";
import CoverImageDefault from "@/assets/images/image_default.png";
import PublishedIcon from "@/assets/svg/published.svg";

defineProps({
	userAvatar: {
		type: String,
		required: false,
	},
	role: {
		type: String as () => "writer" | "editor",
		required: true,
	},
	status: {
		type: String as () => "for-edit" | "published",
		required: true,
	},
	userName: String,
	imageLink: String,
	articleTitle: String,
	articleSummary: String,
	date: String,
});
</script>
