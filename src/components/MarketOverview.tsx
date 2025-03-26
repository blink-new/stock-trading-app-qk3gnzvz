
import { useState } from 'react'
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { LineChart, Line, ResponsiveContainer, YAxis, XAxis, Tooltip, Area, AreaChart } from 'recharts'
import { ArrowUpRight, ArrowDownRight, Clock, TrendingUp, Volume2, DollarSign } from 'lucide-react'
import { cn } from "@/lib/utils"

const mockData = [
  { time: '9:30', value: 13500, volume: 2100 },
  { time: '10:00', value: 13750, volume: 1800 },
  { time: '10:30', value: 14000, volume: 2300 },
  { time: '11:00', value: 14250, volume: 2500 },
  { time: '11:30', value: 14500, volume: 1900 },
  { time: '12:00', value: 15000, volume: 2200 },
  { time: '12:30', value: 15250, volume: 2400 },
  { time: '13:00', value: 15500, volume: 2600 },
  { time: '13:30', value: 15750, volume: 2800 },
  { time: '14:00', value: 16000, volume: 3000 },
  { time: '14:30', value: 16250, volume: 2700 },
  { time: '15:00', value: 16500, volume: 2900 },
  { time: '15:30', value: 17000, volume: 3200 },
  { time: '16:00', value: 17500, volume: 3500 },
]

const timeRanges = ['1D', '1W', '1M', '3M', '1Y', 'ALL']

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-4 rounded-xl shadow-xl">
        <p className="text-muted-foreground mb-1">{label}</p>
        <p className="text-emerald-500 font-medium">${payload[0].value.toLocaleString()}</p>
        <p className="text-muted-foreground/70 text-sm">Volume: {payload[1].value.toLocaleString()}</p>
      </div>
    )
  }
  return null
}

export function MarketOverview() {
  const [selectedRange, setSelectedRange] = useState('1D')
  const currentValue = mockData[mockData.length - 1].value
  const previousValue = mockData[0].value
  const percentageChange = ((currentValue - previousValue) / previousValue * 100).toFixed(2)
  const isPositive = currentValue > previousValue

  const handleBuy = () => {
    console.log('Buy clicked')
  }

  const handleSell = () => {
    console.log('Sell clicked')
  }

  return (
    <div className="relative w-full p-6 rounded-2xl overflow-hidden glass-card">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-medium text-foreground mb-2">Market Overview</h2>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-foreground tracking-tight">
                ${currentValue.toLocaleString()}
              </span>
              <div className={cn(
                "flex items-center gap-1 px-3 py-1.5 rounded-full glass-button",
                isPositive ? "text-emerald-500" : "text-red-500"
              )}>
                {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                <span className="text-sm font-medium">{percentageChange}%</span>
              </div>
            </div>
          </div>

          {/* Buy/Sell Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={handleSell}
              className="glass-button text-red-500"
            >
              Sell
            </Button>
            <Button
              onClick={handleBuy}
              className="glass-button text-emerald-500"
            >
              Buy
            </Button>
          </div>
        </div>

        {/* Time Range Selector */}
        <div className="flex items-center justify-end gap-2 mb-6">
          {timeRanges.map((range) => (
            <button
              key={range}
              onClick={() => setSelectedRange(range)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                selectedRange === range 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              {range}
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { icon: Clock, label: 'Last Update', value: '16:00 EST' },
            { icon: TrendingUp, label: '24h High', value: `$${Math.max(...mockData.map(d => d.value)).toLocaleString()}` },
            { icon: Volume2, label: 'Volume', value: mockData[mockData.length - 1].volume.toLocaleString() }
          ].map((stat, i) => (
            <div key={i} className="glass-card rounded-xl p-4 transition-all duration-200 hover:bg-muted/50">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <stat.icon size={16} />
                <span className="text-sm">{stat.label}</span>
              </div>
              <span className="text-foreground font-medium">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="rgb(16, 185, 129)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="rgb(16, 185, 129)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="time" stroke="currentColor"
                className="text-muted-foreground"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="currentColor"
                className="text-muted-foreground"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="rgb(16, 185, 129)"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorValue)"
              />
              <Area
                type="monotone"
                dataKey="volume"
                stroke="transparent"
                fill="currentColor"
                fillOpacity={0.1}
                className="text-muted-foreground"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}