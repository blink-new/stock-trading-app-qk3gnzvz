
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { usePortfolioStore } from "@/store/portfolio"
import { formatCurrency, formatNumber, formatPercentage } from "@/lib/utils"
import { Button } from "./ui/button"

export function PositionsList() {
  const { portfolio, isLoading } = usePortfolioStore()

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
      <CardHeader>
        <CardTitle>Positions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {portfolio.positions.map((position) => (
            <div 
              key={position.symbol} 
              className="flex items-center justify-between p-4 hover:bg-accent rounded-lg transition-all duration-200 animate-scale"
            >
              <div className="space-y-1">
                <h4 className="text-lg font-medium">{position.symbol}</h4>
                <div className="flex items-center gap-4">
                  <p className="text-sm text-muted-foreground">
                    {formatNumber(position.shares)} shares
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Avg {formatCurrency(position.averagePrice)}
                  </p>
                </div>
              </div>
              
              <div className="text-right space-y-1">
                <p className="text-lg font-medium">{formatCurrency(position.totalValue)}</p>
                <div className={`flex items-center gap-2 justify-end ${position.totalGainPercent >= 0 ? 'text-success' : 'text-destructive'}`}>
                  <span className="text-sm font-medium">
                    {formatCurrency(position.totalGain)}
                  </span>
                  <span className="text-sm font-medium">
                    ({formatPercentage(position.totalGainPercent)})
                  </span>
                </div>
                <div className="flex gap-2 mt-2">
                  <Button variant="outline" size="sm">Buy</Button>
                  <Button variant="outline" size="sm">Sell</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}