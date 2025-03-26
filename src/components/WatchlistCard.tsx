
import { Card, CardContent } from "./ui/card"
import { useWatchlistStore } from "@/store/watchlist"
import { formatCurrency, formatPercentage } from "@/lib/utils"
import { Plus, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

export function WatchlistCard() {
  const { items, isLoading } = useWatchlistStore()

  if (isLoading) {
    return (
      <Card className="w-full animate-pulse glass-card">
        <CardContent className="p-8">
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-muted rounded-xl"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full glass-card hover-card">
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="heading-text text-muted-foreground">Watchlist</h2>
          <Button 
            className="glass-button font-medium"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Stock
          </Button>
        </div>
        
        <div className="space-y-6">
          {items.map((item, index) => (
            <div 
              key={item.symbol} 
              className={cn(
                "glass-card p-6 rounded-2xl hover-card animate-slide-up",
                "transition-all duration-200 hover:bg-muted/50"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium mb-1">{item.symbol}</p>
                  <p className="text-sm text-muted-foreground">{item.name}</p>
                </div>
                
                <div className="text-right">
                  <p className="text-lg font-semibold mb-1">
                    {formatCurrency(item.price)}
                  </p>
                  <div className={cn(
                    "flex items-center gap-1 justify-end",
                    item.changePercent >= 0 ? "text-success" : "text-destructive"
                  )}>
                    {item.changePercent >= 0 
                      ? <ArrowUpRight className="h-4 w-4" />
                      : <ArrowDownRight className="h-4 w-4" />
                    }
                    <span className="text-sm font-medium">
                      {formatPercentage(item.changePercent)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}