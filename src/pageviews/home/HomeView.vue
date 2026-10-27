<script setup lang="ts">

	const showModal = ref(false)

</script>


<template>
	<div class="main">
		<h1>This is the main page</h1>
		<button @click="showModal = true">Open Modal</button>
		<ModalControl v-model="showModal" title="Advanced Search" height="400px" width="500px">
			<div class="p-5 pb-0">Content Here</div>
		</ModalControl>
	</div>
</template>
