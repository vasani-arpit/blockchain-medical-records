import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: false
  },
  optimizeDeps: {
    exclude: ['ipfs-http-client', 'electron-fetch']
  },
  define: {
    'process.env.NODE_DEBUG': 'false',
    'global': 'globalThis'
  }
})
