'use client';

import React, {useEffect, useState} from 'react';
import {GlassCard} from './Card';
import {AlertTriangle, Check, Info, LucideIcon, X} from 'lucide-react';

type ToastProps = {
    message: string;
    type?: 'success' | 'error' | 'warning' | 'info';
    isVisible: boolean;
    onCloseAction: () => void;
    duration?: number;
};

export const Toast = ({
                          message,
                          type = 'info',
                          isVisible,
                          onCloseAction,
                          duration = 3000
                      }: ToastProps) => {
    const [show, setShow] = useState(isVisible);

    // 当外部 isVisible 状态改变时，同步内部 show 状态
    useEffect(() => {
        setShow(isVisible);
        if (isVisible && duration > 0) {
            const timer = setTimeout(() => {
                // 触发关闭动画，然后调用 onClose
                setShow(false);
                setTimeout(onCloseAction, 300);
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [isVisible, duration, onCloseAction]);

    const handleClose = () => {
        setShow(false);
        setTimeout(onCloseAction, 300);
    };

    const types: Record<typeof type, { className: string; icon: LucideIcon }> = {
        success: {className: 'border-l-nexus-accent text-nexus-accent', icon: Check},
        error: {className: 'border-l-nexus-error text-nexus-error', icon: AlertTriangle},
        warning: {className: 'border-l-nexus-warning text-nexus-warning', icon: AlertTriangle},
        info: {className: 'border-l-nexus-primary text-nexus-primary', icon: Info}
    };

    const selectedType = types[type];
    const Icon = selectedType.icon;

    return (
        <div
            className={`
        fixed top-4 right-4 z-[999] transform transition-all duration-300
        ${show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}
        >
            <GlassCard
                className={`min-w-[300px] border-l-4 !p-4 ${selectedType.className}`}
                hover={false}
            >
                <div className="flex items-center space-x-3">
                    <Icon className={`w-5 h-5 ${selectedType.className.split(' ')[1]}`}/>
                    <span className="text-nexus-text font-matrix flex-grow">{message}</span>
                    <button
                        onClick={handleClose}
                        className="ml-auto text-nexus-text-muted hover:text-white transition-colors flex-shrink-0"
                    >
                        <X className="w-4 h-4"/>
                    </button>
                </div>
            </GlassCard>
        </div>
    );
};