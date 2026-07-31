import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server:{
    proxy:{
      "/auth": "http://localhost:3000",
      "/materials": "http://localhost:3000",
      "/categories": "http://localhost:3000",
      "/results": "http://localhost:3000",
      "/user": "http://localhost:3000"
    }
  }
})
