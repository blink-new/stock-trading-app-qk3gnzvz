
import { create } from 'zustand'
import { WatchlistItem } from '../types/market'

interface WatchlistStore {
  items: WatchlistItem[]
  isLoading: boolean
  error: string | null
  addToWatchlist: (symbol: string) => void
  removeFromWatchlist: (symbol: string) => void
  fetchWatchlist: () => Promise<void>
}

const mockWatchlist: WatchlistItem[] = [
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    price: 475.25,
    change: 12.25,
    changePercent: 2.65,
    volume: 25000000,
    addedAt: new Date().toISOString(),
  },
  {
    symbol: 'TSLA',
    name: 'Tesla, Inc.',
    price: 225.75,
    change: -5.25,
    changePercent: -2.27,
    volume: 35000000,
    addedAt: new Date().toISOString(),
  },
  {
    symbol: 'AMD',
    name: 'Advanced Micro Devices, Inc.',
    price: 125.50,
    change: 3.75,
    changePercent: 3.08,
    volume: 15000000,
    addedAt: new Date().toISOString(),
  },
]

export const useWatchlistStore = create<WatchlistStore>((set) => ({
  items: mockWatchlist,
  isLoading: false,
  error: null,
  addToWatchlist: (symbol) => {
    set((state) => ({
      items: [...state.items, {
        symbol,
        name: `${symbol} Corp`, // In real app, this would come from API
        price: 100,
        change: 0,
        changePercent: 0,
        volume: 0,
        addedAt: new Date().toISOString(),
      }],
    }))
  },
  removeFromWatchlist: (symbol) => {
    set((state) => ({
      items: state.items.filter((item) => item.symbol !== symbol),
    }))
  },
  fetchWatchlist: async () => {
    set({ isLoading: true })
    try {
      // In real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      set({ items: mockWatchlist, isLoading: false })
    } catch (error) {
      set({ error: 'Failed to fetch watchlist', isLoading: false })
    }
  },
}))