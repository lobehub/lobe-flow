import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: './tests/setup.ts',
    environment: 'jsdom',
    globals: true,
    alias: {
      '@': './src',
    },
  },
});
