import React from 'react';
import {X} from 'lucide-react';
import {GlassCard} from './Card';

type CyberModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    showClose?: boolean;
};

export const CyberModal = ({
                               isOpen,
                               onClose,
                               title,
                               children,
                               size = 'md',
                               showClose = true
                           }: CyberModalProps) => {
    const sizes = {
        sm: 'max-w-md',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl'
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />
            <div className={`relative w-full ${sizes[size]} mx-4`}>
                <GlassCard className="border-2 border-nexus-primary/30" hover={false}>
                    {(title || showClose) && (
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                            {title && (
                                <h3 className="text-xl font-bold font-cyber text-nexus-primary uppercase tracking-wider">
                                    {title}
                                </h3>
                            )}
                            {showClose && (
                                <button
                                    onClick={onClose}
                                    className="text-nexus-text-muted hover:text-nexus-error transition-colors"
                                >
                                    <X className="w-6 h-6"/>
                                </button>
                            )}
                        </div>
                    )}
                    <div>{children}</div>
                </GlassCard>
            </div>
        </div>
    );
};