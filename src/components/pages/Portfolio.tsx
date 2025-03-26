
import { Card } from "../ui/card"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"

const mockData = [
  { date: "Jan", value: 4000 },
  { date: "Feb", value: 3000 },
  { date: "Mar", value: 5000 },
  { date: "Apr", value: 4800 },
  { date: "May", value: 6000 },
  { date: "Jun", value: 5500 },
]

const holdings = [
  { asset: "Bitcoin", amount: "2.5", value: "$75,000", change: "+5.2%" },
  { asset: "Ethereum", amount: "18.2", value: "$45,000", change: "-2.1%" },
  { asset: "Solana", amount: "145.0", value: "$22,000", change: "+12.4%" },
]

export function Portfolio() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <div className="text-right">
          <p className="text-2xl font-bold">$142,000</p>
          <p className="text-muted-foreground">+4.2% (24h)</p>
        </div>
      </div>

      <Card className="p-6 glass-card">
        <h2 className="text-lg font-semibold mb-4">Portfolio Value</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="glass-card">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Holdings</h2>
          <div className="space-y-4">
            {holdings.map((holding) => (
              <div key={holding.asset} className="flex items-center justify-between p-4 rounded-lg bg-card/50">
                <div>
                  <h3 className="font-medium">{holding.asset}</h3>
                  <p className="text-sm text-muted-foreground">{holding.amount}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{holding.value}</p>
                  <p className={holding.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                    {holding.change}
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