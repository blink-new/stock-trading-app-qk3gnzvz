
import { create } from 'zustand'
import { Portfolio, Position } from '../types/market'

interface PortfolioStore {
  portfolio: Portfolio
  isLoading: boolean
  error: string | null
  fetchPortfolio: () => Promise<void>
}

// Mock data for initial development
const mockPortfolio: Portfolio = {
  totalValue: 125750.25,
  totalGain: 25750.25,
  totalGainPercent: 25.75,
  dayGain: 1250.25,
  dayGainPercent: 1.25,
  cash: 25000,
  positions: [
    {
      symbol: 'AAPL',
      shares: 100,
      averagePrice: 150,
      currentPrice: 175.25,
      totalValue: 17525,
      totalGain: 2525,
      totalGainPercent: 16.83,
      dayGain: 125,
      dayGainPercent: 0.83,
    },
    {
      symbol: 'MSFT',
      shares: 50,
      averagePrice: 250,
      currentPrice: 285.75,
      totalValue: 14287.50,
      totalGain: 1787.50,
      totalGainPercent: 7.15,
      dayGain: 87.50,
      dayGainPercent: 0.35,
    },
    {
      symbol: 'GOOGL',
      shares: 25,
      averagePrice: 2500,
      currentPrice: 2755.50,
      totalValue: 68887.50,
      totalGain: 6387.50,
      totalGainPercent: 10.23,
      dayGain: 387.50,
      dayGainPercent: 0.62,
    },
  ],
}

export const usePortfolioStore = create<PortfolioStore>((set) => ({
  portfolio: mockPortfolio,
  isLoading: false,
  error: null,
  fetchPortfolio: async () => {
    set({ isLoading: true })
    try {
      // In real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      set({ portfolio: mockPortfolio, isLoading: false })
    } catch (error) {
      set({ error: 'Failed to fetch portfolio', isLoading: false })
    }
  },
}))