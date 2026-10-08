import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Deployed at https://sayan0110.github.io/Areca-Crown-react/ (override with VITE_BASE for other hosts)
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
})
