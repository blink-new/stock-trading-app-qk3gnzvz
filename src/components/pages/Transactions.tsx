
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Download } from "lucide-react"

const transactions = [
  { 
    id: "1",
    type: "Buy",
    asset: "Bitcoin",
    amount: "0.25 BTC",
    value: "$7,500",
    status: "Completed",
    date: "2024-02-19 14:30"
  },
  { 
    id: "2",
    type: "Sell",
    asset: "Ethereum",
    amount: "5.0 ETH",
    value: "$12,000",
    status: "Completed",
    date: "2024-02-18 09:15"
  },
  { 
    id: "3",
    type: "Buy",
    asset: "Solana",
    amount: "50 SOL",
    value: "$5,000",
    status: "Pending",
    date: "2024-02-17 16:45"
  },
]

export function Transactions() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Transactions</h1>
        <Button className="glass-button">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>

      <Card className="glass-card">
        <div className="p-6">
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search transactions..."
                className="pl-8 glass-button"
              />
            </div>
            <Button variant="outline" className="glass-button">Filter</Button>
          </div>

          <div className="space-y-4">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-4 rounded-lg bg-card/50">
                <div className="flex gap-4 items-center">
                  <div className={`w-2 h-2 rounded-full ${
                    tx.type === 'Buy' ? 'bg-green-500' : 'bg-red-500'
                  }`} />
                  <div>
                    <h3 className="font-medium">{tx.asset}</h3>
                    <p className="text-sm text-muted-foreground">{tx.date}</p>
                  </div>
                </div>
                <div>
                  <p className="font-medium">{tx.amount}</p>
                  <p className="text-sm text-muted-foreground">{tx.value}</p>
                </div>
                <div className="text-right">
                  <p className={`text-sm ${
                    tx.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'
                  }`}>
                    {tx.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}