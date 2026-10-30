<script setup lang="ts">
	import { computed } from 'vue'
	import { useRoute } from 'vue-router'

	const props = defineProps({
		navText: { type: String },
		to: { type: String, required: true },
		matchFirstSection: { type: Boolean, default: true },
	})

	const route = useRoute()

	const baseSectionPath = computed(() => {
		const targetPath = props.to?.split('?')?.[0] ?? ''
		if (!targetPath) return ''

		const normalizedTarget = targetPath.replace(/\/+$/, '') || '/'
		const parts = normalizedTarget.split('/').filter(Boolean)

		return parts.length ? `/${parts[0]}` : '/'
	})

	const isSectionActive = computed(() => {
		if (!props.matchFirstSection || !baseSectionPath.value) return false

		const currentPath = route.path.replace(/\/+$/, '') || '/'
		return (
			currentPath === baseSectionPath.value ||
			currentPath.startsWith(`${baseSectionPath.value}/`)
		)
	})
</script>

<template>
	<router-link :to="props.to" class="nav-tab" :class="{ 'active-tab': isSectionActive }">
		<slot>
			<span>{{ props.navText }}</span>
		</slot>
	</router-link>
</template>

<style scoped>
	@reference '../../styles/main.css';

	.nav-tab {
		@apply text-green-700 bg-(--primary-back) font-semibold tracking-wide font-sans rounded-full px-4 pt-px h-7 text-sm flex items-center mb-1.5 transition-colors duration-150 hover:bg-transparent hover:text-green-600;
	}

	.active-tab {
		@apply text-green-800 rounded-t-md rounded-b-none opacity-100 m-0 h-9 hover:text-black hover:opacity-100;
		background: linear-gradient(220deg, #dadada 0%, white 20%);
	}
</style>
