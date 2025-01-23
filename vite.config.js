import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Remplacez 'ocean-sous-pression' par le nom de votre dépôt GitHub
export default defineConfig({
    plugins: [react()],
    base: '/ocean-sous-pression/', // Chemin de base pour GitHub Pages
});
