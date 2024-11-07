import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/__tests__/setup.ts'],
    coverage: {
      include: ['src/**/*.tsx', 'src/**/*.ts'],
      exclude: ['.next', 'src/i18n', 'src/app', 'src/middleware.ts', 'src/__tests__'],
    },
  },
})
