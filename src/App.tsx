
import { MarketOverview } from "./components/MarketOverview"
import { ThemeProvider } from "./components/theme-provider"
import { ThemeToggle } from "./components/theme-toggle"
import { Sidebar } from "./components/Sidebar"
import { Header } from "./components/Header"

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-gradient-to-br from-background to-background/80 transition-colors duration-300">
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            <Header />
            <div className="container p-6">
              <div className="flex justify-end mb-4">
                <ThemeToggle />
              </div>
              <MarketOverview />
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App