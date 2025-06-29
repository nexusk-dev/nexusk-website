'use client';

import React, { useRef, useEffect } from 'react';

type MatrixRainProps = {
    density?: number;
    speed?: number;
    color?: string;
    characters?: string;
    className?: string;
    children?: React.ReactNode;
};

export const MatrixRain = ({
                               density = 1,
                               speed = 1,
                               color = '#01ff89', // nexus-accent
                               characters = '日目的地のはばまぱひびぴふぶぷへべぺほぼぽまみむめもやゆよらりるれろわをん',
                               className = '',
                               children,
                           }: MatrixRainProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.offsetWidth;
        let height = canvas.offsetHeight;
        canvas.width = width;
        canvas.height = height;

        const fontSize = 14;
        const columns = Math.floor(width / fontSize);
        const drops = Array(columns).fill(1).map(() => Math.random() * height);

        const draw = () => {
            ctx.fillStyle = 'rgba(10, 10, 15, 0.05)'; // nexus-dark with alpha
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = color;
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i] += speed * density;
            }
            animationRef.current = requestAnimationFrame(draw);
        };

        draw();

        const handleResize = () => {
            width = canvas.offsetWidth;
            height = canvas.offsetHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, [density, speed, color, characters]);

    return (
        <div className={`relative overflow-hidden bg-nexus-dark ${className}`}>
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
            {children && (
                <div className="relative z-10 h-full w-full">{children}</div>
            )}
        </div>
    );
};