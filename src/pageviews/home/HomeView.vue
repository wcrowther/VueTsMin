<script setup lang="ts">

	const showModal = ref(false)

</script>


<template>
	<div>
		<h1 class="mt-5 text-2xl font-bold">Main Page</h1>

		<p class="mt-5">
			Homepage content. Dolor sit amet consectetur adipisicing elit. Blanditiis, expedita
			inventore quo delectus itaque quia aperiam doloribus, enim omnis amet praesentium dolorem ab officia
			quibusdam accusamus? Nisi, tenetur eius! Deleniti.
		</p>

		<button class="btn-primary mt-10" @click="showModal = true">
			Open Modal
		</button>


		<ModalControl v-model="showModal" title="Advanced Search" height="400px" width="500px">
			<div class="p-5 pb-0">Content Here</div>
		</ModalControl>
	</div>
</template>
