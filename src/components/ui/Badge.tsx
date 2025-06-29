import React from 'react';

type CyberBadgeProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
};

export const CyberBadge = ({
                               children,
                               variant = 'primary',
                               size = 'md',
                               className = ''
                           }: CyberBadgeProps) => {
    const variants = {
        primary: 'bg-nexus-primary/20 text-nexus-primary border-nexus-primary/50',
        secondary: 'bg-nexus-secondary/20 text-nexus-secondary border-nexus-secondary/50',
        success: 'bg-nexus-accent/20 text-nexus-accent border-nexus-accent/50',
        warning: 'bg-nexus-warning/20 text-nexus-warning border-nexus-warning/50',
        danger: 'bg-nexus-error/20 text-nexus-error border-nexus-error/50'
    };

    const sizes = {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-2 text-base'
    };

    return (
        <span
            className={`
        inline-flex items-center justify-center border backdrop-blur-sm
        font-matrix font-bold uppercase tracking-wider rounded
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
        >
      {children}
    </span>
    );
};