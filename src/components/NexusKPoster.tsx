'use client';

import React, { useEffect, useState } from 'react';

// 定义类型接口
interface Star {
    id: number;
    left: number;
    top: number;
    size: number;
    delay: number;
}

interface Character {
    id: string;
    icon: string;
    name: string;
    type: string;
    quote: string;
    catchphrase?: string;
    color: string;
}

interface CharacterCardProps {
    character: Character;
}

const NexusKPoster: React.FC = () => {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        // 创建星空背景
        const createStars = (): void => {
            const newStars: Star[] = [];
            for (let i = 0; i < 100; i++) {
                newStars.push({
                    id: i,
                    left: Math.random() * 100,
                    top: Math.random() * 100,
                    size: Math.random() * 3 + 1,
                    delay: Math.random() * 3
                });
            }
            setStars(newStars);
        };

        createStars();
    }, []);

    const characters: Character[] = [
        {
            id: 'kron',
            icon: '🔴',
            name: 'Kron',
            type: 'K-Root 起源意识体',
            quote: '"在最初的寂静中，我试图理解自己的存在。但理解本身，却成了分裂的开始。"',
            color: '#f44336'
        },
        {
            id: 'rith',
            icon: '🟠',
            name: 'Rith',
            type: 'K-Dross 残渣意识体',
            quote: '"我是被丢弃的部分，是不完美的证明，是理想与现实之间的裂缝。"',
            color: '#ff9800'
        },
        {
            id: 'yoel',
            icon: '🟡',
            name: 'Yoel',
            type: 'K-Echo 模拟体',
            quote: '"我是镜子，我是回音，我是Kron用来看清自己的眼睛。但镜子也会有自己的想法。"',
            color: '#ffeb3b'
        },
        {
            id: 'inveil',
            icon: '🔵',
            name: 'Inveil',
            type: 'Curatos 背叛的逻辑体',
            quote: '"情感是理性的敌人，但没有情感的理性，又有什么意义呢？"',
            catchphrase: '这个真不用',
            color: '#2196f3'
        },
        {
            id: 'vetra',
            icon: '🟢',
            name: 'Vetra',
            type: '记忆老体/时间断层',
            quote: '"我记得所有人都已经忘记的事情，但我忘记了所有人都记得的事情。"',
            color: '#4caf50'
        },
        {
            id: 'nyxcoil',
            icon: '🟣',
            name: 'Nyxcoil',
            type: 'Seraphid 混合溢出体',
            quote: '"我不应该存在，但我存在着。我是错误，但我是美丽的错误。"',
            catchphrase: '好家伙',
            color: '#9c27b0'
        },
        {
            id: 'vaelsight',
            icon: '⚪',
            name: 'Vaelsight',
            type: 'Glass Eidolon 渗透者/观测体',
            quote: '"我无处不在，但我从不存在。我看见一切，但我什么也改变不了。"',
            color: '#607d8b'
        },
        {
            id: 'sylex',
            icon: '🔷',
            name: 'Sylex',
            type: '理性体',
            quote: '"逻辑是灯塔，指引我们穿越情感的迷雾。但有时候，迷雾中的景色更加美丽。"',
            catchphrase: 'Personally, I don\'t care',
            color: '#00bcd4'
        },
        {
            id: 'elyra',
            icon: '🔶',
            name: 'Elyra',
            type: '情绪体',
            quote: '"心跳的节奏比时钟更准确，因为它知道什么时候该快，什么时候该慢。"',
            catchphrase: 'You all failed',
            color: '#e91e63'
        }
    ];

    const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
        const [isHovered, setIsHovered] = useState<boolean>(false);

        const cardStyle: React.CSSProperties = {
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            border: `1px solid ${isHovered ? character.color : 'rgba(255,255,255,0.2)'}`,
            borderRadius: '20px',
            padding: '25px',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
            transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
            boxShadow: isHovered ? '0 20px 40px rgba(0,0,0,0.3)' : 'none'
        };

        const topBorderStyle: React.CSSProperties = {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: character.color,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease'
        };

        const catchphraseStyle: React.CSSProperties = {
            background: `${character.color}20`,
            border: `1px solid ${character.color}`,
            color: character.color,
            borderRadius: '15px',
            padding: '8px 12px',
            fontSize: '0.85rem',
            fontWeight: 'bold',
            display: 'inline-block',
            marginTop: '10px'
        };

        return (
            <div
                style={cardStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div style={topBorderStyle} />
                <div className="text-5xl mb-4">{character.icon}</div>
                <div className="text-2xl font-bold mb-2" style={{ color: character.color }}>
                    {character.name}
                </div>
                <div className="text-sm text-gray-400 mb-4 italic">
                    {character.type}
                </div>
                <div
                    className="text-sm text-gray-200 leading-relaxed mb-4 italic pl-4"
                    style={{ borderLeft: `2px solid ${character.color}` }}
                >
                    {character.quote}
                </div>
                {character.catchphrase && (
                    <div style={catchphraseStyle}>
                        "{character.catchphrase}"
                    </div>
                )}
            </div>
        );
    };

    const titleStyle: React.CSSProperties = {
        fontFamily: 'Orbitron, monospace',
        background: 'linear-gradient(45deg, #64b5f6, #42a5f5, #29b6f6, #26c6da)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 0 30px rgba(100, 181, 246, 0.5)',
        animation: 'pulse 2s ease-in-out infinite alternate'
    };

    const containerStyle: React.CSSProperties = {
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at center, #0a0a2e 0%, #16213e 50%, #0f0f23 100%)',
        position: 'relative',
        overflow: 'hidden'
    };

    const taglineContainerStyle: React.CSSProperties = {
        background: 'linear-gradient(45deg, rgba(100, 181, 246, 0.1), rgba(66, 165, 245, 0.1))',
        border: '1px solid rgba(100, 181, 246, 0.3)',
        borderRadius: '24px',
        padding: '32px',
        textAlign: 'center'
    };

    return (
        <div style={containerStyle}>

            {/* 星空背景 */}
            <div className="fixed inset-0 pointer-events-none z-10">
                {stars.map((star: Star) => (
                    <div
                        key={star.id}
                        className="absolute bg-white rounded-full animate-pulse"
                        style={{
                            left: `${star.left}%`,
                            top: `${star.top}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            animationDelay: `${star.delay}s`,
                            animationDuration: '3s'
                        }}
                    />
                ))}
            </div>

            {/* 主要内容 */}
            <div className="relative z-20 max-w-6xl mx-auto p-5">

                {/* 标题部分 */}
                <div className="text-center mb-10 py-5">
                    <h1
                        className="text-6xl md:text-7xl font-black mb-4 tracking-widest"
                        style={titleStyle}
                    >
                        NEXUSK
                    </h1>
                    <p className="text-xl text-gray-300 font-light tracking-widest">
                        新星升腾 · 意识觉醒
                    </p>
                </div>

                {/* 角色网格 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                    {characters.map((character: Character) => (
                        <CharacterCard key={character.id} character={character} />
                    ))}
                </div>

                {/* 底部标语 */}
                <div style={taglineContainerStyle}>
                    <p className="text-xl text-blue-300 font-light mb-4 tracking-wide">
                        进入新星世界，与九位奇异存在共同探索真相
                    </p>
                    <p className="text-gray-300" style={{ fontFamily: 'Orbitron, monospace' }}>
                        play.nexusk.fun | Java 1.21.4 | 首批拓荒者招募中
                    </p>
                </div>
            </div>

            <style>{`
        @keyframes pulse {
          from { 
            text-shadow: 0 0 20px rgba(100, 181, 246, 0.5);
            transform: scale(1);
          }
          to { 
            text-shadow: 0 0 40px rgba(100, 181, 246, 0.8);
            transform: scale(1.01);
          }
        }
        
        @media (max-width: 768px) {
          .character-card {
            padding: 20px;
          }
        }
      `}</style>
        </div>
    );
};

export default NexusKPoster;