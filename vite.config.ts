import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // This tells Vite to build using relative paths
  base: './',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
