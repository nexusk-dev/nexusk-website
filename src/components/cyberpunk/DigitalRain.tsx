'use client';

import React, { useRef, useEffect } from 'react';

type DigitalRainProps = {
    color?: string;
    density?: number;
    speed?: number;
    binary?: boolean;
    className?: string;
};

export const DigitalRain = ({
                                color = '#01ff89', // nexus-accent
                                density = 0.8,
                                speed = 1,
                                binary = false,
                                className = '',
                            }: DigitalRainProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const chars = binary ? '01' : '0123456789ABCDEF';
        const fontSize = 16;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array(columns).fill(0).map(() => Math.random() * canvas.height);

        const draw = () => {
            ctx.fillStyle = 'rgba(10, 10, 15, 0.05)'; // nexus-dark with alpha
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length * density; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                const colIndex = i % columns;
                const x = colIndex * fontSize;
                const y = drops[colIndex];

                const gradient = ctx.createLinearGradient(0, y - fontSize * 10, 0, y);
                gradient.addColorStop(0, 'transparent');
                gradient.addColorStop(0.8, color);
                gradient.addColorStop(1, color);
                ctx.fillStyle = gradient;

                ctx.fillText(text, x, y);

                if (y > canvas.height && Math.random() > 0.975) {
                    drops[colIndex] = 0;
                }
                drops[colIndex] += speed * fontSize;
            }
            animationFrameId = requestAnimationFrame(draw);
        };
        draw();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, [color, density, speed, binary]);

    return <canvas ref={canvasRef} className={`fixed inset-0 pointer-events-none ${className}`} style={{ zIndex: -1 }} />;
};