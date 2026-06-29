import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Proxy /api requests to the Fastify server during development.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
})
