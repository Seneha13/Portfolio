import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes the build work on any GitHub Pages URL
export default defineConfig({
  plugins: [react()],
  base: './',
})
