'use client';

import React, { useState, useEffect, useRef } from 'react';
import { CyberFrame } from '@/components/cyberpunk';
import { NeonButton } from '@/components/ui';
import { Play, Pause, RotateCcw, Download, Terminal } from 'lucide-react';

type LogLevel = 'INFO' | 'WARN' | 'ERROR' | 'COMMAND' | 'DEFAULT';

const levelConfig: Record<LogLevel, { className: string }> = {
    INFO: { className: 'text-nexus-accent' },
    WARN: { className: 'text-nexus-warning' },
    ERROR: { className: 'text-nexus-error' },
    COMMAND: { className: 'text-nexus-primary' },
    DEFAULT: { className: 'text-nexus-text-muted' },
};

type LogEntry = {
    id: number;
    timestamp: string;
    level: LogLevel; // 使用我们定义的 LogLevel 类型
    message: string;
};

export const ServerConsole = () => {
    const [logs, setLogs] = useState<LogEntry[]>([
        { id: 1, timestamp: '14:23:15', level: 'INFO', message: 'Server started successfully' },
        { id: 2, timestamp: '14:24:01', level: 'INFO', message: 'Steve_Builder joined' },
        { id: 3, timestamp: '14:24:15', level: 'WARN', message: 'Alex_Miner tried to access restricted area' },
        { id: 4, timestamp: '14:26:45', level: 'ERROR', message: 'Failed to connect to database' },
    ]);
    const [command, setCommand] = useState('');
    const logsEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logs]);

    const executeCommand = () => {
        if (!command.trim()) return;
        const newLogs: LogEntry[] = [
            ...logs,
            { id: Date.now(), timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }), level: 'COMMAND', message: `> ${command}` },
            { id: Date.now() + 1, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }), level: 'INFO', message: `Command executed: ${command}` }
        ];
        setLogs(newLogs);
        setCommand('');
    };
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <NeonButton variant="success" size="sm"><Play className="w-4 h-4 mr-2"/>Start</NeonButton>
                    <NeonButton variant="warning" size="sm"><Pause className="w-4 h-4 mr-2"/>Stop</NeonButton>
                    <NeonButton variant="primary" size="sm"><RotateCcw className="w-4 h-4 mr-2"/>Restart</NeonButton>
                </div>
                <NeonButton variant="secondary" size="sm"><Download className="w-4 h-4 mr-2"/>Export Logs</NeonButton>
            </div>
            <CyberFrame color="var(--color-nexus-primary)" corners className="h-96">
                <div className="h-full flex flex-col bg-nexus-darker/80">
                    <div className="flex-1 overflow-y-auto p-4 font-matrix text-sm space-y-1">
                        {logs.map(log => {
                            const config = levelConfig[log.level] || levelConfig.DEFAULT;
                            return (
                                <div key={log.id} className="flex">
                                    <span className="text-nexus-text-muted mr-4">{log.timestamp}</span>
                                    <span className={`font-bold w-20 flex-shrink-0 ${config.className}`}>[{log.level}]</span>
                                    <p className="flex-1 text-white whitespace-pre-wrap">{log.message}</p>
                                </div>
                            );
                        })}
                        <div ref={logsEndRef} />
                    </div>
                    <div className="p-3 border-t border-nexus-primary/20 bg-nexus-surface/50">
                        <div className="flex items-center space-x-3">
                            <Terminal className="w-5 h-5 text-nexus-primary" />
                            <input
                                type="text"
                                value={command}
                                onChange={e => setCommand(e.target.value)}
                                onKeyPress={e => e.key === 'Enter' && executeCommand()}
                                placeholder="Enter server command..."
                                className="flex-1 bg-transparent border-none outline-none text-white font-matrix placeholder-nexus-text-muted"
                            />
                            <NeonButton size="sm" onClick={executeCommand}>Execute</NeonButton>
                        </div>
                    </div>
                </div>
            </CyberFrame>
        </div>
    );
};