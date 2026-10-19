<script setup lang="ts">

	// const appStore = useAppStore()
	// const { fullWidth } = storeToRefs(appStore)

</script>

<template>

	<main id="layout-main" style="min-height: 600px;">

		<BrandBar />

		<MainNavbar />

		<div style="border: solid red 1px; min-height: 600px; padding: 10px;">
			<slot></slot>
		</div>

		<FooterBox />

	</main>


</template>
