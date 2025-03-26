
export interface Stock {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  volume: number
}

export interface Position {
  symbol: string
  shares: number
  averagePrice: number
  currentPrice: number
  totalValue: number
  totalGain: number
  totalGainPercent: number
  dayGain: number
  dayGainPercent: number
}

export interface Portfolio {
  totalValue: number
  totalGain: number
  totalGainPercent: number
  dayGain: number
  dayGainPercent: number
  positions: Position[]
  cash: number
}

export interface WatchlistItem extends Stock {
  addedAt: string
}

export interface Order {
  symbol: string
  type: 'buy' | 'sell'
  shares: number
  price: number
  status: 'pending' | 'completed' | 'cancelled'
  createdAt: string
  updatedAt: string
}