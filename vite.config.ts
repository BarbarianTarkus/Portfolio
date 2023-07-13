import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	base: 'https://barbariantarkus.github.io/svelte-blog/',
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
