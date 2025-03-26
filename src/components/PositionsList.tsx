
import { Card, CardContent } from "./ui/card"
import { usePortfolioStore } from "@/store/portfolio"
import { formatCurrency, formatNumber } from "@/lib/utils"
import { Button } from "./ui/button"

export function PositionsList() {
  const { portfolio, isLoading } = usePortfolioStore()

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
        <h2 className="text-xl text-zinc-500 mb-6">Positions</h2>
        <div className="space-y-6">
          {portfolio.positions.map((position) => (
            <div 
              key={position.symbol} 
              className="flex items-center justify-between"
            >
              <div>
                <h4 className="text-lg">{position.symbol}</h4>
                <div className="text-sm text-zinc-500">
                  {formatNumber(position.shares)} shares · Avg {formatCurrency(position.averagePrice)}
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-lg">{formatCurrency(position.totalValue)}</p>
                <p className="success-text">
                  {formatCurrency(position.totalGain)} ({formatNumber(position.totalGainPercent)}%)
                </p>
                <div className="flex gap-2 mt-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-transparent border-zinc-800 text-white hover:bg-zinc-800"
                  >
                    Buy
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-transparent border-zinc-800 text-white hover:bg-zinc-800"
                  >
                    Sell
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}