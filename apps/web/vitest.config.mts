import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@ui/storybook': path.resolve(__dirname, '../../packages/ui/src'),
        },
        dedupe: ['react', 'react-dom'],     // 👈 important
    },
    test: {
        environment: 'jsdom',
        setupFiles: ['./vitest.setup.ts'],
        globals: true,
    },
    esbuild: {
        jsx: 'automatic',
        jsxImportSource: 'react',
    },
});
