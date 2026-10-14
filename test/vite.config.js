import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom', // Esto es obligatorio para que el 'render' funcione
        globals: true,
        setupFiles: './src/test/setup.js',
        css: true // Esto evita que las pruebas exploten al leer tus archivos .module.css
    }
})