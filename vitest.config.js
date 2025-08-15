import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    include: ['src/**/*.{test,spec}.{ts,tsx,js,jsx}'],
    exclude: [
      'node_modules',
      'dist',
      'e2e/**',
      '**/*.e2e.*',
      'tests-examples/**',
    ],
    globals: true,
    coverage: {
      reporter: ['text', 'html'],
      include: ['src/**/*.{ts,tsx,js,jsx}'],
      exclude: ['src/index.jsx', 'src/styles.js', 'src/**/icons/**'],
      thresholds: { lines: 60, statements: 60, functions: 50, branches: 50 },
    },
  },
});
