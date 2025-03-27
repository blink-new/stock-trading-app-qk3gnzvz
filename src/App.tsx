
import { Layout } from './components/Layout';
import { MarketOverview } from './components/MarketOverview';

export default function App() {
  // Sample data - in a real app this would come from an API
  const marketData = {
    price: 17500,
    change: 29.63,
    lastUpdate: '16:00 EST',
    high24h: 17500,
    volume: 3500
  };

  return (
    <Layout>
      <MarketOverview {...marketData} />
    </Layout>
  );
}