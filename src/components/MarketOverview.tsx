
import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MarketOverviewProps {
  price: number;
  change: number;
  lastUpdate: string;
  high24h: number;
  volume: number;
}

export function MarketOverview({ price, change, lastUpdate, high24h, volume }: MarketOverviewProps) {
  const timeFilters = ['1D', '1W', '1M', '3M', '1Y', 'ALL'];
  const [activeFilter, setActiveFilter] = React.useState('1D');
  
  return (
    <div className="animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Market Overview</h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-destructive hover:bg-destructive/10 rounded-lg font-medium transition-colors">
            Sell
          </button>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Buy
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-3">
          <span className="price-tag">${price.toLocaleString()}</span>
          <span className={cn(
            "percentage-change",
            change < 0 && "negative"
          )}>
            {change >= 0 ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
            {Math.abs(change)}%
          </span>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        {timeFilters.map((filter) => (
          <button
            key={filter}
            className={cn(
              "time-filter-button",
              activeFilter === filter && "active"
            )}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="chart-container mb-6">
        {/* Chart will be implemented separately */}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-lg bg-card p-4">
          <div className="text-sm text-gray-400 mb-1">Last Update</div>
          <div className="font-medium">{lastUpdate}</div>
        </div>
        <div className="rounded-lg bg-card p-4">
          <div className="text-sm text-gray-400 mb-1">24h High</div>
          <div className="font-medium">${high24h.toLocaleString()}</div>
        </div>
        <div className="rounded-lg bg-card p-4">
          <div className="text-sm text-gray-400 mb-1">Volume</div>
          <div className="font-medium">{volume.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}