
import { MarketOverview } from "./components/MarketOverview"
import { ThemeProvider } from "./components/theme-provider"
import { ThemeToggle } from "./components/theme-toggle"
import { Sidebar } from "./components/Sidebar"
import { Header } from "./components/Header"
import { Portfolio } from "./components/pages/Portfolio"
import { Transactions } from "./components/pages/Transactions"
import { Settings } from "./components/pages/Settings"
import { Help } from "./components/pages/Help"
import { useState } from "react"
import { useSidebarStore } from "./store/sidebar"
import { cn } from "./lib/utils"

function App() {
  const [currentPage, setCurrentPage] = useState('markets')
  const isCollapsed = useSidebarStore((state) => state.isCollapsed)

  const renderPage = () => {
    switch (currentPage) {
      case 'markets':
        return <MarketOverview />
      case 'portfolio':
        return <Portfolio />
      case 'transactions':
        return <Transactions />
      case 'settings':
        return <Settings />
      case 'help':
        return <Help />
      default:
        return <MarketOverview />
    }
  }

  return (
    <ThemeProvider defaultTheme="system">
      <div className="min-h-screen bg-gradient-to-br from-background to-background/80 transition-colors duration-300">
        <div className="flex h-screen overflow-hidden">
          <Sidebar onNavigate={setCurrentPage} currentPage={currentPage} />
          <main className={cn(
            "flex-1 overflow-y-auto transition-all duration-300",
            isCollapsed ? "ml-[80px]" : "ml-[240px]"
          )}>
            <Header />
            <div className="container p-6">
              <div className="flex justify-end mb-4">
                <ThemeToggle />
              </div>
              {renderPage()}
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App