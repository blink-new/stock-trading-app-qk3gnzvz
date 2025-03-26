
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { usePortfolioStore } from "@/store/portfolio"
import { formatCurrency, formatNumber, formatPercentage } from "@/lib/utils"

export function PositionsList() {
  const { portfolio, isLoading } = usePortfolioStore()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Positions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {portfolio.positions.map((position) => (
            <div key={position.symbol} className="flex items-center justify-between p-2 hover:bg-secondary rounded-lg transition-colors">
              <div>
                <h4 className="font-medium">{position.symbol}</h4>
                <p className="text-sm text-muted-foreground">
                  {formatNumber(position.shares)} shares
                </p>
              </div>
              
              <div className="text-right">
                <p className="font-medium">{formatCurrency(position.totalValue)}</p>
                <div className={position.totalGainPercent >= 0 ? 'text-success' : 'text-destructive'}>
                  <span className="text-sm">
                    {formatPercentage(position.totalGainPercent)}
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