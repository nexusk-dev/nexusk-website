// src/app/page.tsx - 测试所有样式
export default function Home() {
  return (
      <div className="min-h-screen bg-nexus-darker flex items-center justify-center">
        <div className="text-center space-y-8 p-8">
          {/* 主标题 */}
          <h1 className="hero-title animate-neon-glow">
            NEXUSK
          </h1>

          {/* 副标题 */}
          <p className="text-xl text-nexus-muted font-matrix">
            未来科技连接点 · The Future Tech Nexus
          </p>

          {/* 服务器状态卡片 */}
          <div className="server-status online max-w-md mx-auto">
            <div className="flex items-center justify-between">
              <span className="text-nexus-accent font-cyber">SERVER STATUS</span>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-nexus-accent rounded-full animate-pulse"></div>
                <span className="text-nexus-accent font-matrix">ONLINE</span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-nexus-muted">玩家在线</div>
                <div className="text-nexus-text font-cyber text-lg">24/100</div>
              </div>
              <div>
                <div className="text-nexus-muted">延迟</div>
                <div className="text-nexus-text font-cyber text-lg">12ms</div>
              </div>
            </div>
          </div>

          {/* 按钮组 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="neon-button">
              CONNECT TO SERVER
            </button>
            <button className="glass-card border border-nexus-secondary/50 px-6 py-3 text-nexus-secondary hover:bg-nexus-secondary/10 transition-all font-cyber">
              DISCORD
            </button>
          </div>

          {/* 底部文字 */}
          <p className="text-nexus-muted text-sm font-matrix">
            服务器 IP: nexusk.fun | 版本: 1.20.4
          </p>
        </div>
      </div>
  )
}