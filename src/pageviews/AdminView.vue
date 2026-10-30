<script setup lang="ts">

	const appStore = useAppStore()
	const { fullWidth } = storeToRefs(appStore)

</script>


<template>
	<h1 class="mt-5 text-2xl font-bold">Admin Page</h1>
	<p class="mt-5">
		This is the admin page. Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
	</p>

	<button class="btn-primary mt-10" @click="fullWidth = !fullWidth">
		{{ fullWidth ? 'Full Width' : 'Normal Width' }}
	</button>

</template>
