
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { useWatchlistStore } from "@/store/watchlist"
import { formatCurrency, formatPercentage } from "@/lib/utils"
import { TrendingUp, TrendingDown, X, Plus } from "lucide-react"
import { Button } from "./ui/button"

export function WatchlistCard() {
  const { items, isLoading, removeFromWatchlist } = useWatchlistStore()

  if (isLoading) {
    return (
      <Card className="w-full animate-pulse">
        <CardHeader>
          <div className="h-8 w-1/3 bg-muted rounded"></div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-muted rounded"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full gradient-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Watchlist</CardTitle>
        <Button variant="outline" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Stock
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item) => (
            <div 
              key={item.symbol} 
              className="flex items-center justify-between p-3 hover:bg-accent rounded-lg transition-all duration-200 group animate-scale"
            >
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
                  <span className="text-sm font-medium">
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