
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { useWatchlistStore } from "@/store/watchlist"
import { formatCurrency, formatPercentage } from "@/lib/utils"
import { TrendingUp, TrendingDown, X } from "lucide-react"

export function WatchlistCard() {
  const { items, isLoading, removeFromWatchlist } = useWatchlistStore()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Watchlist</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.symbol} className="flex items-center justify-between p-2 hover:bg-secondary rounded-lg transition-colors">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">{item.symbol}</h4>
                  <button 
                    onClick={() => removeFromWatchlist(item.symbol)}
                    className="opacity-0 group-hover:opacity-100 hover:text-destructive transition-opacity"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground">{item.name}</p>
              </div>
              
              <div className="text-right">
                <p className="font-medium">{formatCurrency(item.price)}</p>
                <div className={`flex items-center gap-1 justify-end ${item.changePercent >= 0 ? 'text-success' : 'text-destructive'}`}>
                  {item.changePercent >= 0 ? 
                    <TrendingUp className="h-3 w-3" /> : 
                    <TrendingDown className="h-3 w-3" />
                  }
                  <span className="text-sm">
                    {formatPercentage(item.changePercent)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}