// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                nexus: {
                    primary: '#00d4ff',      // 电子蓝
                    secondary: '#ff2a6d',    // 霓虹粉
                    accent: '#01ff89',       // 矩阵绿
                    dark: '#0a0a0f',         // 主背景
                    darker: '#050508',       // 卡片背景
                    surface: '#1a1a2e',      // 表面色
                    online: '#01ff89',       // 在线
                    warning: '#ffaa00',      // 警告
                    error: '#ff073a',        // 错误
                    text: '#e6e6fa',         // 主文字
                    'text-muted': '#a0a0b8',   // 次要文字
                    'electric-purple': '#8a2be2',
                },
                mc: {
                    grass: '#8BC34A',
                    stone: '#9E9E9E',
                    diamond: '#00BCD4',
                    gold: '#FFC107',
                    redstone: '#F44336',
                    emerald: '#4CAF50',
                    iron: '#607D8B',
                    coal: '#424242',
                    lapis: '#3F51B5',
                    netherite: '#5D4037',
                },
                rarity: {
                    common: '#FFFFFF',
                    uncommon: '#55FF55',
                    rare: '#5555FF',
                    epic: '#AA00AA',
                    legendary: '#FFAA00'
                }
            },
            fontFamily: {
                'cyber': ['Orbitron', 'monospace'],
                'matrix': ['Source Code Pro', 'monospace'],
            },
            animation: {
                'neon-glow': 'neon-glow 2s ease-in-out infinite alternate',
                'glitch': 'glitch 1s linear infinite',
                'matrix-rain': 'matrix-rain 20s linear infinite',
                // 新增动画
                'scan': 'scan 2s linear infinite',
                'progress-shine': 'progress-shine 2s ease-in-out infinite',
                'bounce-sm': 'bounce-sm 1s infinite', // 自定义 bounce
                'hologram-scan': 'hologram-scan var(--scan-speed, 2s) linear infinite',
                'cyber-scan': 'cyber-scan 3s linear infinite',
                'pulse-ring': 'pulse-ring var(--pulse-speed, 2s) ease-out infinite',
                'scan-horizontal': 'scan-horizontal var(--scan-speed, 2s) linear infinite',
                'scan-vertical': 'scan-vertical var(--scan-speed, 2s) linear infinite',
            },
            keyframes: {
                'neon-glow': { /* ... */ },
                'glitch': { /* ... */ },
                'matrix-rain': { /* ... */ },
                // 新增 keyframes
                scan: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                'progress-shine': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                'bounce-sm': { // 用于 loading dots
                    '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
                    '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
                },
                'hologram-scan': {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' },
                },
                'cyber-scan': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                'pulse-ring': {
                    '0%': { transform: 'scale(1)', opacity: 'var(--pulse-intensity, 0.8)' },
                    '100%': { transform: 'scale(2)', opacity: 0 },
                },
                'scan-horizontal': {
                    '0%': { transform: 'translateY(-10%)' },
                    '100%': { transform: 'translateY(calc(100% + 10%))' },
                },
                'scan-vertical': {
                    '0%': { transform: 'translateX(-10%)' },
                    '100%': { transform: 'translateX(calc(100% + 10%))' },
                },
            },
            boxShadow: {
                'neon-primary': '0 0 20px #00d4ff',
                'neon-secondary': '0 0 20px #ff2a6d',
                'neon-accent': '0 0 20px #01ff89',
                'neon-warning': '0 0 20px #ffaa00',
                'neon-error': '0 0 20px #ff073a',
            }
        },
    },
    plugins: [],
};