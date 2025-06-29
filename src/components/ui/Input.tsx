'use client'; // <--- 在这里添加这一行
import React, { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';

type CyberInputProps = {
    label?: string;
    error?: string;
    icon?: LucideIcon;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const CyberInput = ({
                               label,
                               error,
                               type = 'text',
                               placeholder,
                               value,
                               onChange,
                               icon: Icon,
                               className = '',
                               ...props
                           }: CyberInputProps) => {
    const [focused, setFocused] = useState(false);

    return (
        <div className={`space-y-2 ${className}`}>
            {label && (
                <label className="block text-sm font-matrix text-nexus-text-muted uppercase tracking-wider">
                    {label}
                </label>
            )}
            <div className="relative">
                {Icon && (
                    <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-nexus-text-muted" />
                )}
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className={`
            w-full bg-black/40 backdrop-blur-sm border-2 rounded
            ${Icon ? 'pl-12' : 'pl-4'} pr-4 py-3
            font-matrix text-nexus-text placeholder-nexus-text-muted
            transition-all duration-300 focus:outline-none
            ${focused
                        ? 'border-nexus-primary shadow-neon-primary/20'
                        : error
                            ? 'border-nexus-error'
                            : 'border-gray-600 hover:border-gray-500'
                    }
          `}
                    {...props}
                />
                {focused && (
                    <div
                        className="absolute inset-0 rounded pointer-events-none bg-gradient-to-r from-transparent via-nexus-primary/20 to-transparent animate-scan"
                    />
                )}
            </div>
            {error && (
                <div className="flex items-center space-x-2 text-sm text-nexus-error">
                    <AlertTriangle className="w-4 h-4" />
                    <span>{error}</span>
                </div>
            )}
        </div>
    );
};