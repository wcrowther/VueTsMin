import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'vue-router/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		// must be placed before vue()
		VueRouter({ routesFolder: 'src/pages' }),
		vue({ include: [/\.vue$/, /\.md$/] }), // allow Vue to compile Markdown files
		Markdown({}),
		AutoImport({
			dts: 'src/auto-imports.d.ts',
			vueTemplate: true,
			dirs: ['./src/helpers', './src/models', './src/stores', './src/composables'],
			imports:
				[
					'vue',
					'vue-router',
					{
						'@vueuse/core':
							[
								'useClipboard',
								'useDebounceFn',
								'useLocalStorage',
								'useWindowSize',
								['useDraggable', 'Draggable']
							],
						'pinia':
							[
								'storeToRefs',
								'defineStore'
							]
					}
				],
		}),
		Components({
			dirs: ['src/components', 'src/pageviews', 'src/pagelayouts'],
			dts: 'src/components.d.ts',
		})
		//vueDevTools(), // Uncomment for Vue DevTools overlay in browser
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	server: {
		open: true  // open the browser after compiling
	},
})
