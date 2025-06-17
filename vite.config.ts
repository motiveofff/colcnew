import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/colcnew/', // ⚠️ ОБЯЗАТЕЛЬНО имя репозитория
});
