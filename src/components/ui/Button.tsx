import React from 'react';

// 请确保已安装 lucide-react: npm install lucide-react
// 或者根据需要移除图标相关代码

type NeonButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    loading?: boolean;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const NeonButton = ({
                               children,
                               onClick,
                               variant = 'primary',
                               size = 'md',
                               disabled = false,
                               loading = false,
                               className = '',
                               ...props
                           }: NeonButtonProps) => {

    const variants = {
        primary: 'border-nexus-primary text-nexus-primary hover:bg-nexus-primary hover:text-nexus-dark hover:shadow-neon-primary',
        secondary: 'border-nexus-secondary text-nexus-secondary hover:bg-nexus-secondary hover:text-nexus-dark hover:shadow-neon-secondary',
        success: 'border-nexus-accent text-nexus-accent hover:bg-nexus-accent hover:text-nexus-dark hover:shadow-neon-accent',
        warning: 'border-nexus-warning text-nexus-warning hover:bg-nexus-warning hover:text-nexus-dark hover:shadow-neon-warning',
        danger: 'border-nexus-error text-nexus-error hover:bg-nexus-error hover:text-nexus-dark hover:shadow-neon-error'
    };

    const sizes = {
        sm: 'px-3 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={`
        relative border-2 bg-transparent backdrop-blur-sm
        font-cyber font-bold uppercase tracking-wider
        transition-all duration-300 ease-out
        transform hover:scale-105 active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
            style={{
                clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'
            }}
            {...props}
        >
            <div className="flex items-center justify-center space-x-2">
                {loading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
                ) : (
                    children
                )}
            </div>
        </button>
    );
};