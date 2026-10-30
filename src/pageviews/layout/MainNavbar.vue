<script setup lang="ts">

</script>

<template>
	<div id="MainNavbar" class="w-full h-11 px-5 sm:px-10 flex items-end justify-end gap-x-2 select-none
		bg-[linear-gradient(90deg,var(--primary-back)_2%,var(--primary-back-dark)_80%)]">

		<MainTab to="/">
			<IconSymbol width="18px" class="mr-1" icon="heroicons-solid:home" />
			<span>Home</span>
		</MainTab>

		<MainTab to="/about" nav-text="About" />

		<MainTab to="/admin" nav-text="Admin" />

	</div>
</template>
