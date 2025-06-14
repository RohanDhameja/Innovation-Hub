import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Innovation-Hub/', // 👈 required for GitHub Pages
  plugins: [react()],
})
