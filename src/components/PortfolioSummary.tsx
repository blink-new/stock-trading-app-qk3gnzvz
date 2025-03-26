
import { Card, CardContent } from "./ui/card"
import { usePortfolioStore } from "@/store/portfolio"
import { formatCurrency, formatPercentage } from "@/lib/utils"
import { TrendingUp, Wallet, ArrowUpRight } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

export function PortfolioSummary() {
  const { portfolio, isLoading } = usePortfolioStore()

  if (isLoading) {
    return (
      <Card className="w-full animate-pulse glass-card">
        <CardContent className="p-8">
          <div className="space-y-6">
            <div className="h-12 bg-muted rounded-xl"></div>
            <div className="h-8 bg-muted rounded-xl"></div>
            <div className="grid grid-cols-2 gap-6">
              <div className="h-24 bg-muted rounded-xl"></div>
              <div className="h-24 bg-muted rounded-xl"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full glass-card hover-card">
      <CardContent className="p-8">
        <div className="space-y-8">
          <div className="animate-slide-up">
            <h2 className="heading-text mb-6 text-muted-foreground">Portfolio Value</h2>
            <h3 className="display-text mb-3">
              {formatCurrency(portfolio.totalValue)}
            </h3>
            <div className="flex items-center gap-2 text-success">
              <ArrowUpRight className="h-5 w-5" />
              <span className="text-base font-medium">
                {formatCurrency(portfolio.dayGain)} ({formatPercentage(portfolio.dayGainPercent)}) Today
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="glass-card p-6 rounded-2xl hover-card">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <TrendingUp className="h-5 w-5" />
                <p className="text-sm font-medium">Total Gain/Loss</p>
              </div>
              <p className="text-2xl font-semibold text-success mb-1">
                {formatCurrency(portfolio.totalGain)}
              </p>
              <p className="text-sm text-success font-medium">
                {formatPercentage(portfolio.totalGainPercent)}
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl hover-card">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Wallet className="h-5 w-5" />
                <p className="text-sm font-medium">Available Cash</p>
              </div>
              <p className="text-2xl font-semibold mb-4">
                {formatCurrency(portfolio.cash)}
              </p>
              <Button className="w-full glass-button font-medium">
                Deposit Funds
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}