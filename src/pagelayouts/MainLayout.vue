<script setup lang="ts">

	const appStore = useAppStore()
	const { fullWidth } = storeToRefs(appStore)

</script>

<template>

	<main id="MainLayout" :class="['mx-auto mb-10 relative z-0 h-full', { 'main-width': !fullWidth }]">

		<BrandBar />

		<MainNavbar />

		<div class="border border-gray-300 p-3 min-h-125">
			<slot></slot>
		</div>

		<FooterBox />

	</main>


</template>
