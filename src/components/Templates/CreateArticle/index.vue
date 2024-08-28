<template>
	<div class="px-8 lg:px-24">
		<h1 class="text-3xl font-semibold py-8">Create New Article</h1>
		<form @submit.prevent="handleSubmit" class="space-y-4">
			<div class="full-width">
				<label for="title" class="block text-lg font-medium text-gray-700"
					>Title:</label
				>
				<input
					id="title"
					v-model="title"
					type="text"
					required
					placeholder="Enter title"
					class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm min-h-[44px] px-2"
				/>
			</div>

			<div class="full-width">
				<label for="link" class="block text-lg font-medium text-gray-700"
					>Link:</label
				>
				<input
					id="link"
					v-model="link"
					type="url"
					placeholder="https://"
					class="mt-1 min-h-[44px] px-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				/>
			</div>

			<div class="full-width">
				<label for="company" class="block text-lg font-medium text-gray-700"
					>Company:</label
				>
				<select
					id="company"
					v-model="company"
					required
					class="border-r-[15px] outline-none bg-white !border-white mt-1 min-h-[44px] px-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				>
					<option disabled value="">Select Company</option>
					<option
						v-for="option in companyOptions"
						:key="option.value"
						:value="option.value"
					>
						{{ option.label }}
					</option>
				</select>
			</div>

			<div class="flex gap-4">
				<div class="flex-1">
					<label
						for="uploadImage"
						class="block text-lg font-medium text-gray-700"
					>
						Upload Image:
					</label>
					<div class="relative mt-1">
						<label
							for="uploadImageFile"
							class="block w-full bg-theme-30 text-white text-center px-4 py-2 border border-gray-300 rounded-md shadow-sm cursor-pointer flex items-center justify-center space-x-2"
						>
							<img :src="Cloud" alt="Cloud icon" class="w-6 h-6" />
							<span>Upload Image</span>
						</label>
						<input
							id="uploadImageFile"
							type="file"
							name="uploadImage"
							class="hidden"
							required
							accept=".png, .jpg, .jpeg"
							@change="handleFileChange"
						/>
					</div>
				</div>

				<div class="flex-1">
					<label for="date" class="block text-lg font-medium text-gray-700">
						Date:
					</label>
					<SelectDate :handleDateChange="handleDateChange" />
				</div>
			</div>

			<div class="flex-1">
				<div
					class="relative mt-8 max-w-full bg-no-repeat bg-center min-h-[300px] border border-theme-30 rounded-md overflow-hidden"
					:style="{
						backgroundImage: `url(${backgroundImage})`,
					}"
				></div>
			</div>
		</form>
	</div>
</template>

<script setup lang="ts">
import { useHooks } from "./hooks";

const {
	title,
	link,
	company,
	uploadImage,
	formattedDate,
	companyOptions,
	handleSubmit,
	handleFileChange,
	backgroundImage,
	Cloud,
	SelectDate,
  handleDateChange,
} = useHooks();
</script>

<style scoped></style>
