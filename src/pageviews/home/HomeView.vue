<script setup lang="ts">

	const showModal = ref(false)

</script>


<template>
	<div>
		<h1 class="mt-5 text-2xl font-bold">Main Page</h1>
		<button class="btn-primary mt-10" @click="showModal = true">
			Open Modal
		</button>
		<ModalControl v-model="showModal" title="Advanced Search" height="400px" width="500px">
			<div class="p-5 pb-0">Content Here</div>
		</ModalControl>
	</div>
</template>
