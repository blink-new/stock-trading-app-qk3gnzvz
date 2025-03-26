
import { Card, CardContent } from "./ui/card"
import { usePortfolioStore } from "@/store/portfolio"
import { formatCurrency, formatPercentage } from "@/lib/utils"
import { TrendingUp } from "lucide-react"
import { Button } from "./ui/button"

export function PortfolioSummary() {
  const { portfolio, isLoading } = usePortfolioStore()

  if (isLoading) {
    return (
      <Card className="w-full animate-pulse card-dark">
        <CardContent className="p-6">
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

  return (
    <Card className="w-full card-dark">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl mb-4 text-zinc-500">Portfolio</h2>
            <h3 className="text-4xl font-medium tracking-tight">
              {formatCurrency(portfolio.totalValue)}
            </h3>
            <div className="flex items-center gap-2 mt-2 success-text">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm">
                {formatCurrency(portfolio.dayGain)} ({formatPercentage(portfolio.dayGainPercent)}) Today
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-sm text-zinc-500">Total Gain/Loss</p>
              <p className="text-2xl success-text">
                {formatCurrency(portfolio.totalGain)}
              </p>
              <p className="text-sm success-text">
                {formatPercentage(portfolio.totalGainPercent)}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-zinc-500">Available Cash</p>
              <p className="text-2xl">{formatCurrency(portfolio.cash)}</p>
              <Button className="w-full mt-2 bg-[#111111] hover:bg-[#222222] text-white border-none">
                Deposit
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}