<script setup lang="ts">

	const route = useRoute()

	const isActive = (path: string) => route.path === path

</script>

<template>
	<div id="MainNavbar" class="w-full h-11 px-5 sm:px-10 flex items-end gap-x-2 select-none
		bg-[linear-gradient(90deg,var(--primary-back)_2%,var(--primary-back-dark)_80%)]">

		<RouterLink to="/" class="nav-tab" :class="{ 'active-tab': isActive('/') }">
			<IconSymbol width="18px" class="mr-1" icon="heroicons-solid:home" />
			<span>Home</span>
		</RouterLink>

		<RouterLink to="/about" class="nav-tab" :class="{ 'active-tab': isActive('/about') }">
			About
		</RouterLink>

		<RouterLink to="/admin" class="nav-tab" :class="{ 'active-tab': isActive('/admin') }">
			Admin
		</RouterLink>

	</div>
</template>
