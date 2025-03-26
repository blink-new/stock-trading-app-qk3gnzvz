
import { Card, CardContent } from "./ui/card"
import { LineChart, Line, ResponsiveContainer, YAxis, XAxis } from 'recharts'

const mockData = [
  { time: '9:30', value: 13500 },
  { time: '10:00', value: 13750 },
  { time: '10:30', value: 14000 },
  { time: '11:00', value: 14250 },
  { time: '11:30', value: 14500 },
  { time: '12:00', value: 15000 },
  { time: '12:30', value: 15250 },
  { time: '13:00', value: 15500 },
  { time: '13:30', value: 15750 },
  { time: '14:00', value: 16000 },
  { time: '14:30', value: 16250 },
  { time: '15:00', value: 16500 },
  { time: '15:30', value: 17000 },
  { time: '16:00', value: 17500 },
]

export function MarketOverview() {
  return (
    <Card className="w-full card-dark">
      <CardContent className="p-6">
        <h2 className="text-xl text-zinc-500 mb-4">Market Overview</h2>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
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
              <Line
                type="monotone"
                dataKey="value"
                stroke="#00DC82"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}