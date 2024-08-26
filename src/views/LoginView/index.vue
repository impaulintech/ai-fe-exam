<template>
	<div class="flex h-screen relative">
		<div
			class="w-3/5 bg-cover bg-center hidden lg:block"
			:style="{ backgroundImage: `url(${BackgroundImage})` }"
		>
			<div class="flex items-start p-10">
				<img :src="LogoXL" alt="Logo" class="h-12" />
			</div>
		</div>

		<div class="absolute lg:hidden top-10 left-10">
			<img :src="LogoXL" alt="Logo" class="h-12" />
		</div>

		<div class="w-full lg:w-2/5 flex items-center justify-center bg-theme-60">
			<div class="w-96 p-8 rounded-md">
				<img
					:src="Profile"
					alt="Profile"
					class="w-16 h-16 rounded-full mx-auto"
				/>
				<h1 class="text-xl font-bold mb-6 text-center text-blue-gray-900">
					Sign In
				</h1>
				<form @submit.prevent="handleLogin">
					<div class="mb-4">
						<label for="username" class="block text-gray-700">Username</label>
						<input
							type="text"
							id="username"
							v-model="username"
							required
							placeholder="username"
							class="mt-1 block w-full border border-theme-30 p-2 rounded"
						/>
					</div>
					<div class="mb-4">
						<label for="password" class="block text-gray-700">Password</label>
						<input
							type="password"
							id="password"
							v-model="password"
							required
							placeholder="*********"
							class="mt-1 block w-full border border-theme-30 p-2 rounded"
						/>
					</div>
					<div class="flex items-center mb-4">
						<input
							type="checkbox"
							id="remember"
							v-model="rememberMe"
							class="mr-2"
						/>
						<label for="remember" class="text-gray-700">Remember Me</label>
					</div>
					<button
						type="submit"
						class="w-full bg-theme-10 text-white p-2 rounded hover:opacity-60 transition"
					>
						Sign In
					</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useHooks } from "./hooks";

const {
	username,
	password,
	rememberMe,
	LogoXL,
	Profile,
	BackgroundImage,
	handleLogin,
} = useHooks();
</script>
