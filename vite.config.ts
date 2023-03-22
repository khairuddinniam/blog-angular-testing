import { defineConfig } from 'vite'
import swc from 'unplugin-swc'

export default defineConfig(() => {
  return {
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: 'testing/test-setup.ts',
    },
    plugins: [
      swc.vite(),
    ],
    esbuild: false,
  }
})
