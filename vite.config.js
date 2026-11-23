
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],

  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(
          new URL('./index.html', import.meta.url)
        ),
        portachiavi: fileURLToPath(
          new URL('./portachiavi-personalizzati/index.html', import.meta.url)
        ),
        horeca: fileURLToPath(
          new URL('./accessori-horeca/index.html', import.meta.url)
        ),
        qr: fileURLToPath(
          new URL('./porta-qr-code/index.html', import.meta.url)
        )
      }
    }
  }
})
