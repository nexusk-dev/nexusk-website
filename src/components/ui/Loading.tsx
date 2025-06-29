import React from 'react';

type CyberLoadingProps = {
    type?: 'spinner' | 'pulse' | 'dots';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'primary' | 'secondary' | 'accent';
    text?: string;
    className?: string;
};

export const CyberLoading = ({
                                 type = 'spinner',
                                 size = 'md',
                                 variant = 'primary',
                                 text,
                                 className = ''
                             }: CyberLoadingProps) => {
    const sizes = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16'
    };

    const colors = {
        primary: 'text-nexus-primary',
        secondary: 'text-nexus-secondary',
        accent: 'text-nexus-accent',
    }

    const bgColors = {
        primary: 'bg-nexus-primary',
        secondary: 'bg-nexus-secondary',
        accent: 'bg-nexus-accent',
    }

    const renderSpinner = () => (
        <div
            className={`animate-spin rounded-full border-2 border-transparent ${sizes[size]} ${colors[variant]}`}
            style={{
                borderTopColor: 'currentColor',
                borderRightColor: 'currentColor'
            }}
        />
    );

    const renderPulse = () => (
        <div className={`${sizes[size]} relative`}>
            <div
                className={`absolute inset-0 rounded-full animate-ping opacity-40 ${bgColors[variant]}`}
            />
            <div
                className={`relative rounded-full animate-pulse w-full h-full ${bgColors[variant]}`}
            />
        </div>
    );

    const renderDots = () => (
        <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    className={`w-2 h-2 rounded-full animate-bounce-sm ${bgColors[variant]}`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                />
            ))}
        </div>
    );

    const loaders = {
        spinner: renderSpinner,
        pulse: renderPulse,
        dots: renderDots
    };

    return (
        <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
            {loaders[type]()}
            {text && (
                <span className="text-sm font-matrix text-nexus-text-muted animate-pulse">
          {text}
        </span>
            )}
        </div>
    );
};