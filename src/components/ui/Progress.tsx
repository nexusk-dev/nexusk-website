import React from 'react';

type CyberProgressProps = {
    value?: number;
    max?: number;
    label?: string;
    variant?: 'primary' | 'accent' | 'warning' | 'error';
    showPercentage?: boolean;
    animated?: boolean;
    className?: string;
};

export const CyberProgress = ({
                                  value = 0,
                                  max = 100,
                                  label,
                                  variant = 'primary',
                                  showPercentage = true,
                                  animated = true,
                                  className = ''
                              }: CyberProgressProps) => {
    const percentage = Math.min((value / max) * 100, 100);

    const variants = {
        primary: 'bg-nexus-primary shadow-neon-primary/60',
        accent: 'bg-nexus-accent shadow-neon-accent/60',
        warning: 'bg-nexus-warning shadow-neon-warning/60',
        error: 'bg-nexus-error shadow-neon-error/60'
    };

    const textVariants = {
        primary: 'text-nexus-primary',
        accent: 'text-nexus-accent',
        warning: 'text-nexus-warning',
        error: 'text-nexus-error'
    };

    return (
        <div className={`space-y-2 ${className}`}>
            {(label || showPercentage) && (
                <div className="flex justify-between items-center">
                    {label && (
                        <span className="text-sm font-matrix text-nexus-text-muted uppercase tracking-wider">
              {label}
            </span>
                    )}
                    {showPercentage && (
                        <span className={`text-sm font-matrix ${textVariants[variant]}`}>
              {Math.round(percentage)}%
            </span>
                    )}
                </div>
            )}
            <div className="relative h-3 bg-nexus-darker rounded-full overflow-hidden border border-white/10">
                <div
                    className={`h-full rounded-full transition-all duration-500 ${animated ? 'animate-pulse' : ''} ${variants[variant]}`}
                    style={{
                        width: `${percentage}%`,
                    }}
                />
                {animated && (
                    <div
                        className="absolute top-0 left-0 h-full w-full opacity-30 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-progress-shine"
                    />
                )}
            </div>
        </div>
    );
};