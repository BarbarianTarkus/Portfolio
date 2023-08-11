import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { createLogger } from 'vite';

const logger = createLogger();
const originalWarning = logger.warn;
logger.warn = (msg, options) => {
	if (msg.includes('element should have an alt') ||  msg.includes('Unused CSS selector')) return;
	originalWarning(msg, options);
};

export default defineConfig({
	plugins: [sveltekit()],
	base: 'https://barbariantarkus.github.io/svelte-blog/',
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	customLogger: logger,
});
