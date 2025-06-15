import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/anke-hao.github.io/', // Replace with your repo name
  build: {
    outDir: 'dist'
  }
})