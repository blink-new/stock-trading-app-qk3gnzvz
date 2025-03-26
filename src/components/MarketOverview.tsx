
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
      <div className="glass-card p-4 shadow-2xl animate-slide-up">
        <p className="label-text mb-1">{label}</p>
        <p className="text-lg font-semibold text-success">${payload[0].value.toLocaleString()}</p>
        <p className="label-text mt-1">Volume: {payload[1].value.toLocaleString()}</p>
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

  return (
    <div className="relative w-full rounded-3xl overflow-hidden glass-card hover-card">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-success/10 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      
      <div className="relative p-8">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-8 animate-slide-up">
          <div>
            <h2 className="heading-text mb-4 text-muted-foreground">Market Overview</h2>
            <div className="flex items-center gap-4">
              <span className="display-text">
                ${currentValue.toLocaleString()}
              </span>
              <div className={cn(
                "flex items-center gap-1.5 px-4 py-2 rounded-xl glass-button",
                isPositive ? "text-success" : "text-destructive"
              )}>
                {isPositive ? <ArrowUpRight size={18} /> : <ArrowDownRight size={18} />}
                <span className="text-sm font-semibold">{percentageChange}%</span>
              </div>
            </div>
          </div>

          {/* Buy/Sell Buttons */}
          <div className="flex gap-3">
            <Button
              className="glass-button px-6 py-5 text-destructive font-medium"
            >
              Sell
            </Button>
            <Button
              className="glass-button px-6 py-5 text-success font-medium"
            >
              Buy
            </Button>
          </div>
        </div>

        {/* Time Range Selector */}
        <div className="flex items-center justify-end gap-2 mb-8">
          {timeRanges.map((range) => (
            <button
              key={range}
              onClick={() => setSelectedRange(range)}
              className={cn(
                "px-6 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                selectedRange === range 
                  ? "bg-success text-success-foreground shadow-lg shadow-success/20" 
                  : "text-muted-foreground hover:bg-muted glass-button"
              )}
            >
              {range}
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {[
            { icon: Clock, label: 'Last Update', value: '16:00 EST' },
            { icon: TrendingUp, label: '24h High', value: `$${Math.max(...mockData.map(d => d.value)).toLocaleString()}` },
            { icon: Volume2, label: 'Volume', value: mockData[mockData.length - 1].volume.toLocaleString() }
          ].map((stat, i) => (
            <div 
              key={i} 
              className="glass-card p-6 transition-all duration-200 hover:bg-muted/50 hover-card"
            >
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <stat.icon size={18} />
                <span className="text-sm font-medium">{stat.label}</span>
              </div>
              <span className="text-lg font-semibold">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="h-[400px] w-full animate-slide-up">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="rgb(16, 185, 129)" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="rgb(16, 185, 129)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="time"
                stroke="currentColor"
                className="text-muted-foreground"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                dy={10}
              />
              <YAxis 
                stroke="currentColor"
                className="text-muted-foreground"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
                dx={-10}
              />
              <Tooltip 
                content={<CustomTooltip />}
                cursor={{ stroke: 'rgb(16, 185, 129)', strokeWidth: 1, strokeDasharray: '5 5' }}
              />
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
                fillOpacity={0.05}
                className="text-muted-foreground"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}