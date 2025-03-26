
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { LineChart, Line, ResponsiveContainer, YAxis, XAxis, Tooltip } from 'recharts'
import { formatCurrency } from "@/lib/utils"

const mockData = [
  { time: '9:30', value: 15750 },
  { time: '10:00', value: 15850 },
  { time: '10:30', value: 15900 },
  { time: '11:00', value: 15875 },
  { time: '11:30', value: 15950 },
  { time: '12:00', value: 16000 },
  { time: '12:30', value: 16100 },
  { time: '13:00', value: 16050 },
  { time: '13:30', value: 16150 },
  { time: '14:00', value: 16200 },
  { time: '14:30', value: 16250 },
  { time: '15:00', value: 16300 },
  { time: '15:30', value: 16350 },
  { time: '16:00', value: 16400 },
]

export function MarketOverview() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Market Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <XAxis 
                dataKey="time" 
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Value
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {formatCurrency(payload[0].value)}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Time
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {payload[0].payload.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
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