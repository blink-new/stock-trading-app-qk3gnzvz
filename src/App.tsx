
import { useEffect } from 'react'
import { usePortfolioStore } from './store/portfolio'
import { useWatchlistStore } from './store/watchlist'
import { PortfolioSummary } from './components/PortfolioSummary'
import { WatchlistCard } from './components/WatchlistCard'
import { PositionsList } from './components/PositionsList'
import { MarketOverview } from './components/MarketOverview'

function App() {
  const fetchPortfolio = usePortfolioStore(state => state.fetchPortfolio)
  const fetchWatchlist = useWatchlistStore(state => state.fetchWatchlist)

  useEffect(() => {
    fetchPortfolio()
    fetchWatchlist()
  }, [fetchPortfolio, fetchWatchlist])

  return (
    <div className="min-h-screen bg-black">
      <main className="px-4 py-6 md:px-6 md:py-8 lg:px-8 max-w-7xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold tracking-tight text-gradient">TradePro</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PortfolioSummary />
          <WatchlistCard />
        </div>
        
        <MarketOverview />
        <PositionsList />
      </main>
    </div>
  )
}

export default App