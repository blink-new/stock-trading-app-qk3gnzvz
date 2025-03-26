
import { Card, CardContent } from "./ui/card"
import { useWatchlistStore } from "@/store/watchlist"
import { formatCurrency, formatPercentage } from "@/lib/utils"
import { Plus } from "lucide-react"
import { Button } from "./ui/button"

export function WatchlistCard() {
  const { items, isLoading } = useWatchlistStore()

  if (isLoading) {
    return (
      <Card className="w-full animate-pulse card-dark">
        <CardContent className="p-6">
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
    <Card className="w-full card-dark">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl text-zinc-500">Watchlist</h2>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-transparent border-zinc-800 text-white hover:bg-zinc-800"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Stock
          </Button>
        </div>
        
        <div className="space-y-6">
          {items.map((item) => (
            <div 
              key={item.symbol} 
              className="flex items-center justify-between"
            >
              <div>
                <p className="text-zinc-500">{item.name}</p>
              </div>
              
              <div className="text-right">
                <p className="text-lg">{formatCurrency(item.price)}</p>
                <p className={item.changePercent >= 0 ? 'success-text' : 'error-text'}>
                  {formatPercentage(item.changePercent)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}