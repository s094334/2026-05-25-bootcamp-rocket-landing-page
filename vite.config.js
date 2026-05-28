import { defineConfig } from 'vite'
import { dirname, resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
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