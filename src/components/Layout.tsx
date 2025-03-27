
import React from 'react';
import { Search, Bell, Monitor, Wallet, History, Settings, HelpCircle, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className={cn(
        "flex flex-col border-r border-border transition-all duration-300",
        collapsed ? "w-[60px]" : "w-[240px]"
      )}>
        <div className="flex items-center gap-2 p-4">
          <div className="h-8 w-8 rounded-full bg-primary" />
          {!collapsed && <span className="font-semibold text-xl">TradePro</span>}
        </div>

        <nav className="flex-1 space-y-1 p-2">
          <a href="#" className="sidebar-item active">
            <Monitor size={20} />
            {!collapsed && <span>Markets</span>}
          </a>
          <a href="#" className="sidebar-item">
            <Wallet size={20} />
            {!collapsed && <span>Portfolio</span>}
          </a>
          <a href="#" className="sidebar-item">
            <History size={20} />
            {!collapsed && <span>Transactions</span>}
          </a>
          <a href="#" className="sidebar-item">
            <Settings size={20} />
            {!collapsed && <span>Settings</span>}
          </a>
          <a href="#" className="sidebar-item">
            <HelpCircle size={20} />
            {!collapsed && <span>Help</span>}
          </a>
        </nav>

        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center gap-2 p-4 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <ChevronLeft className={cn(
            "transition-transform",
            collapsed && "rotate-180"
          )} />
          {!collapsed && <span>Collapse</span>}
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Bar */}
        <header className="flex items-center justify-between border-b border-border p-4">
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search markets..."
                className="w-full rounded-lg bg-secondary pl-10 pr-4 py-2 text-sm text-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="rounded-lg p-2 hover:bg-secondary">
              <Monitor className="h-5 w-5 text-gray-400" />
            </button>
            <button className="rounded-lg p-2 hover:bg-secondary">
              <Bell className="h-5 w-5 text-gray-400" />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">John Doe</span>
              <div className="h-8 w-8 rounded-full bg-secondary" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}