
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { usePortfolioStore } from "@/store/portfolio"
import { formatCurrency, formatPercentage } from "@/lib/utils"
import { TrendingUp, TrendingDown } from "lucide-react"

export function PortfolioSummary() {
  const { portfolio, isLoading } = usePortfolioStore()

  if (isLoading) {
    return <div>Loading...</div>
  }

  const isPositive = portfolio.dayGainPercent >= 0

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Portfolio</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-4xl font-bold">
              {formatCurrency(portfolio.totalValue)}
            </h3>
            <div className={`flex items-center gap-2 ${isPositive ? 'text-success' : 'text-destructive'}`}>
              {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
              <span className="text-sm">
                {formatCurrency(portfolio.dayGain)} ({formatPercentage(portfolio.dayGainPercent)}) Today
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Total Gain/Loss</p>
              <p className={portfolio.totalGain >= 0 ? 'text-success' : 'text-destructive'}>
                {formatCurrency(portfolio.totalGain)}
              </p>
              <p className="text-xs text-muted-foreground">
                {formatPercentage(portfolio.totalGainPercent)}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Available Cash</p>
              <p className="text-foreground">{formatCurrency(portfolio.cash)}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}