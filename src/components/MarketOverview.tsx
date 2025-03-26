
import { Card, CardContent } from "./ui/card"
import { LineChart, Line, ResponsiveContainer, YAxis, XAxis, Tooltip, Area, AreaChart } from 'recharts'
import { ArrowUpRight, ArrowDownRight, Clock, TrendingUp, DollarSign, Volume2 } from 'lucide-react'
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
      <div className="bg-zinc-800 border border-zinc-700 p-3 rounded-lg shadow-lg">
        <p className="text-zinc-400 mb-1">{label}</p>
        <p className="text-emerald-500 font-medium">${payload[0].value.toLocaleString()}</p>
        <p className="text-zinc-500 text-sm">Volume: {payload[1].value.toLocaleString()}</p>
      </div>
    )
  }
  return null
}

export function MarketOverview() {
  const currentValue = mockData[mockData.length - 1].value
  const previousValue = mockData[0].value
  const percentageChange = ((currentValue - previousValue) / previousValue * 100).toFixed(2)
  const isPositive = currentValue > previousValue

  return (
    <Card className="w-full card-dark">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-medium text-zinc-200 mb-2">Market Overview</h2>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-zinc-100">
                ${currentValue.toLocaleString()}
              </span>
              <div className={cn(
                "flex items-center gap-1 px-2 py-1 rounded",
                isPositive ? "text-emerald-500 bg-emerald-500/10" : "text-red-500 bg-red-500/10"
              )}>
                {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                <span className="text-sm font-medium">{percentageChange}%</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {timeRanges.map((range) => (
              <button
                key={range}
                className="px-3 py-1 rounded text-sm font-medium hover:bg-zinc-800 transition-colors
                          focus:outline-none focus:ring-2 focus:ring-emerald-500/20
                          data-[active=true]:bg-emerald-500 data-[active=true]:text-zinc-900"
                data-active={range === '1D'}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-zinc-800/50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-zinc-400 mb-2">
              <Clock size={16} />
              <span className="text-sm">Last Update</span>
            </div>
            <span className="text-zinc-200 font-medium">16:00 EST</span>
          </div>
          <div className="bg-zinc-800/50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-zinc-400 mb-2">
              <TrendingUp size={16} />
              <span className="text-sm">24h High</span>
            </div>
            <span className="text-zinc-200 font-medium">${(Math.max(...mockData.map(d => d.value))).toLocaleString()}</span>
          </div>
          <div className="bg-zinc-800/50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-zinc-400 mb-2">
              <Volume2 size={16} />
              <span className="text-sm">Volume</span>
            </div>
            <span className="text-zinc-200 font-medium">{mockData[mockData.length - 1].volume.toLocaleString()}</span>
          </div>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00DC82" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#00DC82" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="time" 
                stroke="#666666"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#666666"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#00DC82"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorValue)"
              />
              <Area
                type="monotone"
                dataKey="volume"
                stroke="transparent"
                fill="#4B5563"
                fillOpacity={0.1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}