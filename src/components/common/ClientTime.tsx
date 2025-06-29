// src/components/common/ClientTime.tsx
'use client';

import React, { useState, useEffect } from 'react';

export const ClientTime = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        // 这个 effect 只会在客户端挂载后运行一次
        // 初始化时间，并设置一个定时器每秒更新一次
        const timerId = setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000);

        // 初始化第一次显示
        setTime(new Date().toLocaleString());

        // 组件卸载时清除定时器，防止内存泄漏
        return () => clearInterval(timerId);
    }, []); // 空依赖数组意味着这个 effect 只运行一次

    // 在服务器和初始客户端渲染时，返回 null 或一个占位符
    // 这样可以确保服务器和客户端初次渲染的 HTML 完全一致
    if (!time) {
        return null;
    }

    return (
        <p className="text-nexus-text-muted">{time}</p>
    );
};