import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react(), tailwindcss()],
    base: command === 'serve' ? '/' : '/portfolio2/'
  }
  return config
})