// tailwind.config.js - v3 版本
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                nexus: {
                    primary: '#00d4ff',
                    secondary: '#ff2a6d',
                    accent: '#01ff89',
                    dark: '#0a0a0f',
                    darker: '#050508',
                    surface: '#1a1a2e',
                    text: '#e6e6fa',
                    muted: '#a0a0b8'
                }
            },
            fontFamily: {
                'cyber': ['Orbitron', 'monospace'],
                'matrix': ['Source Code Pro', 'monospace']
            }
        },
    },
    plugins: [],
}