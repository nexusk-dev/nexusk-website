'use client';

import React, { useState, useRef, useEffect } from 'react';
import { GlassCard } from './Card';
import { ChevronDown } from 'lucide-react';

type Option = {
    value: string;
    label: string;
};

type CyberSelectProps = {
    options?: Option[];
    value?: string;
    onChangeAction: (value: string) => void;
    placeholder?: string;
    label?: string;
    className?: string;
};

export const CyberSelect = ({
                                options = [],
                                value,
                                onChangeAction,
                                placeholder = 'Select option...',
                                label,
                                className = ''
                            }: CyberSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectedOption = options.find(opt => opt.value === value) || null;
    const selectRef = useRef<HTMLDivElement>(null);

    const handleSelect = (option: Option) => {
        onChangeAction(option.value);
        setIsOpen(false);
    };

    // 点击外部关闭
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`relative ${className}`} ref={selectRef}>
            {label && (
                <label className="block text-sm font-matrix text-nexus-text-muted uppercase tracking-wider mb-2">
                    {label}
                </label>
            )}

            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`
          relative w-full bg-black/40 backdrop-blur-sm border-2 rounded
          px-4 py-3 cursor-pointer font-matrix text-nexus-text
          transition-all duration-300
          ${isOpen
                    ? 'border-nexus-primary shadow-neon-primary/20'
                    : 'border-gray-600 hover:border-gray-500'
                }
        `}
            >
                <div className="flex items-center justify-between">
          <span className={selectedOption ? 'text-nexus-text' : 'text-nexus-text-muted'}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
                    <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                </div>
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 z-50">
                    <GlassCard className="border-2 border-nexus-primary/30 p-0 overflow-hidden" hover={false}>
                        {options.map((option, index) => (
                            <div
                                key={option.value}
                                onClick={() => handleSelect(option)}
                                className={`
                  px-4 py-3 cursor-pointer font-matrix transition-colors
                  ${index !== options.length - 1 ? 'border-b border-white/10' : ''}
                  hover:bg-nexus-primary/20 hover:text-nexus-primary
                  ${selectedOption?.value === option.value ? 'bg-nexus-primary/10 text-nexus-primary' : 'text-nexus-text'}
                `}
                            >
                                {option.label}
                            </div>
                        ))}
                    </GlassCard>
                </div>
            )}
        </div>
    );
};