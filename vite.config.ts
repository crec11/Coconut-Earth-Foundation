import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  root: 'src',
  plugins: [react(), viteSingleFile()],
  publicDir: false,
  build: {
    assetsInlineLimit: 100_000_000,
    cssCodeSplit: false,
    emptyOutDir: false,
    outDir: '..',
  },
  test: {
    environment: 'jsdom',
    include: ['**/tests/**/*.test.{ts,tsx}'],
  },
});
