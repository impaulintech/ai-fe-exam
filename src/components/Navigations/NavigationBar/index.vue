<template>
	<nav
		class="h-16 bg-gray-800 text-white flex items-center justify-between px-8 lg:px-24"
	>
		<div class="relative lg:hidden block">
			<img
				:src="HamburgerMenu"
				alt="Hamburger Menu"
				class="lg:hidden cursor-pointer"
				@click="toggleDropdownMenu"
			/>
			<div
				v-if="showDropdownMenu"
				class="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10"
			>
				<ul>
					<li>
						<a
							href="/dashboard"
							class="block px-4 py-2 text-sm hover:bg-gray-200 rounded-t-md"
						>
							Dashboard
						</a>
					</li>
					<li>
						<a
							href="/all-media"
							class="block px-4 py-2 text-sm hover:bg-gray-200"
						>
							All media
						</a>
					</li>
					<li v-if="activeUser === UserTypes.Editor">
						<a
							href="/manage-users"
							class="block px-4 py-2 text-sm hover:bg-gray-200"
						>
							Users
						</a>
					</li>
					<li v-if="activeUser === UserTypes.Editor">
						<a
							href="/manage-companies"
							class="block px-4 py-2 text-sm hover:bg-gray-200"
						>
							Company
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="text-lg font-semibold">
			<Logo />
		</div>
		<div class="flex items-center gap-4">
			<ul class="flex space-x-4 pr-4 border-r border-slate-400 hidden lg:flex">
				<li>
					<a href="/dashboard" class="hover:text-theme-10 text-slate-50"
						>Dashboard</a
					>
				</li>
				<li>
					<a href="/all-media" class="hover:text-theme-10 text-slate-400"
						>All Media</a
					>
				</li>
				<li v-if="activeUser === UserTypes.Editor">
					<a href="/manage-users" class="hover:text-theme-10 text-slate-400"
						>Users</a
					>
				</li>
				<li v-if="activeUser === UserTypes.Editor">
					<a href="/manage-companies" class="hover:text-theme-10 text-slate-400"
						>Companies</a
					>
				</li>
			</ul>
			<div class="relative" ref="dropdownRef">
				<div
					@click="toggleDropdown"
					class="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center cursor-pointer"
				>
					<img :src="Profile" alt="Profile" />
				</div>
				<div
					v-if="showDropdown"
					class="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10"
				>
					<ul>
						<li>
							<a
								href="#"
								@click="logout"
								class="block px-4 py-2 text-sm hover:bg-gray-200"
							>
								Logout
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
import { useHooks } from "./hooks";
import { defineProps } from "vue";
import { Role } from "@/views/Dashboard/hooks";

defineProps<{
  activeUser: Role;
}>();

const {
	Logo,
	logout,
	Profile,
	UserTypes,
	dropdownRef,
	showDropdown,
	HamburgerMenu,
	toggleDropdown,
	showDropdownMenu,
	toggleDropdownMenu,
} = useHooks();
</script>
