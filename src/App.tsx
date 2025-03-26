
import { MarketOverview } from "./components/MarketOverview"
import { ThemeProvider } from "./components/theme-provider"
import { ThemeToggle } from "./components/theme-toggle"

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-gradient-to-br from-background to-background/80 transition-colors duration-300">
        <div className="container mx-auto p-4">
          <div className="flex justify-end mb-4">
            <ThemeToggle />
          </div>
          <MarketOverview />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App