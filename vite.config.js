import { defineConfig } from 'vite'
import { dirname, resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    base: '/2026-05-25-bootcamp-rocket-landing-page/',
    build: {
        rolldownOptions: {
            input: {
                main: resolve(import.meta.dirname, 'index.html'),
                space: resolve(import.meta.dirname, 'space.html'),
            },
        },
    },
    plugins: [
        tailwindcss(),
    ],
})