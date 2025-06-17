import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/colcnew/', // имя репозитория
  optimizeDeps: {
    exclude: ['lucide-react']
  }
})
