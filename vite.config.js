import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			//alias : 파일시스템의 경로에 별칭을 만들때 사용
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
