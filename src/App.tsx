
import { useEffect } from 'react'
import { usePortfolioStore } from './store/portfolio'
import { useWatchlistStore } from './store/watchlist'
import { PortfolioSummary } from './components/PortfolioSummary'
import { WatchlistCard } from './components/WatchlistCard'
import { PositionsList } from './components/PositionsList'

function App() {
  const fetchPortfolio = usePortfolioStore(state => state.fetchPortfolio)
  const fetchWatchlist = useWatchlistStore(state => state.fetchWatchlist)

  useEffect(() => {
    fetchPortfolio()
    fetchWatchlist()
  }, [fetchPortfolio, fetchWatchlist])

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">TradePro</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PortfolioSummary />
          <WatchlistCard />
        </div>
        
        <PositionsList />
      </div>
    </div>
  )
}

export default App