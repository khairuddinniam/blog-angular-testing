import { defineConfig } from 'vitest/config'

export default defineConfig((env) => {
  return {
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './test-setup.ts',
    },
  }
})
