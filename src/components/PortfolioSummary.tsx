
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { usePortfolioStore } from "@/store/portfolio"
import { formatCurrency, formatPercentage } from "@/lib/utils"
import { TrendingUp, TrendingDown } from "lucide-react"
import { Button } from "./ui/button"

export function PortfolioSummary() {
  const { portfolio, isLoading } = usePortfolioStore()

  if (isLoading) {
    return (
      <Card className="w-full animate-pulse">
        <CardHeader>
          <div className="h-8 w-1/3 bg-muted rounded"></div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="h-12 bg-muted rounded"></div>
            <div className="h-8 bg-muted rounded"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-16 bg-muted rounded"></div>
              <div className="h-16 bg-muted rounded"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  const isPositive = portfolio.dayGainPercent >= 0

  return (
    <Card className="w-full gradient-border">
      <CardHeader>
        <CardTitle>Portfolio</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-4xl font-bold tracking-tight">
              {formatCurrency(portfolio.totalValue)}
            </h3>
            <div className={`flex items-center gap-2 mt-2 ${isPositive ? 'text-success' : 'text-destructive'}`}>
              {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
              <span className="text-sm font-medium">
                {formatCurrency(portfolio.dayGain)} ({formatPercentage(portfolio.dayGainPercent)}) Today
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Total Gain/Loss</p>
              <p className={`text-xl font-semibold ${portfolio.totalGain >= 0 ? 'text-success' : 'text-destructive'}`}>
                {formatCurrency(portfolio.totalGain)}
              </p>
              <p className="text-sm text-muted-foreground">
                {formatPercentage(portfolio.totalGainPercent)}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Available Cash</p>
              <p className="text-xl font-semibold">{formatCurrency(portfolio.cash)}</p>
              <Button variant="gradient" className="w-full mt-2">
                Deposit
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}