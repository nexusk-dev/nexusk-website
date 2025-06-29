import React from 'react';

type CyberFrameProps = {
    children?: React.ReactNode;
    variant?: 'default' | 'thick' | 'thin' | 'dashed';
    color?: string;
    corners?: boolean;
    scanLine?: boolean;
    className?: string;
};

export const CyberFrame = ({
                               children,
                               variant = 'default',
                               color = '#00d4ff', // nexus-primary
                               corners = true,
                               scanLine = true,
                               className = '',
                           }: CyberFrameProps) => {

    const variants = {
        default: 'border-2',
        thick: 'border-4',
        thin: 'border',
        dashed: 'border-2 border-dashed',
    };

    const clipPathStyle = corners ? {clipPath: 'polygon(15px 0%, 100% 0%, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0% 100%, 0% 15px)'} : {};

    const Corner = ({position}: { position: string }) => (
        <div
            className={`absolute w-4 h-4 ${position}`}
            style={{
                borderColor: color,
                filter: `drop-shadow(0 0 5px ${color})`,
                borderTopWidth: position.includes('top') ? '3px' : '0',
                borderBottomWidth: position.includes('bottom') ? '3px' : '0',
                borderLeftWidth: position.includes('left') ? '3px' : '0',
                borderRightWidth: position.includes('right') ? '3px' : '0',
                borderStyle: 'solid',
            }}
        />
    );

    return (
        <div className={`relative p-0.5 ${className}`} style={clipPathStyle}>
            <div className="relative w-full h-full p-4"
                 style={{backgroundColor: '#0a0a0f90' /* nexus-dark with alpha */}}>
                {children}
            </div>
            {corners && (
                <>
                    <Corner position="top-0 left-0"/>
                    <Corner position="top-0 right-0"/>
                    <Corner position="bottom-0 left-0"/>
                    <Corner position="bottom-0 right-0"/>
                </>
            )}
            {scanLine && (
                <div className="absolute inset-0 pointer-events-none animate-cyber-scan"
                     style={{background: `linear-gradient(90deg, transparent, ${color}30, transparent)`}}/>
            )}
        </div>
    );
};