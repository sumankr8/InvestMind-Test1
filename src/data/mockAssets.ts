import { Asset } from '../types/asset';

export const mockAssets: Asset[] = [
  {
    id: '1',
    rank: 1,
    symbol: 'AAPL',
    name: 'Apple Inc.',
    type: 'stock',
    price: 181.56,
    priceChange24h: 0.82,
    marketCap: 2800000000000,
    volume: 57000000000
  },
  {
    id: '2',
    rank: 2,
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    type: 'stock',
    price: 326.22,
    priceChange24h: -0.32,
    marketCap: 2400000000000,
    volume: 31000000000
  },
  {
    id: '3',
    rank: 3,
    symbol: 'BTC',
    name: 'Bitcoin',
    type: 'crypto',
    price: 43291.78,
    priceChange24h: 2.14,
    marketCap: 847000000000,
    volume: 28000000000
  },
  {
    id: '4',
    rank: 4,
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    type: 'stock',
    price: 141.18,
    priceChange24h: 0.53,
    marketCap: 1800000000000,
    volume: 23000000000
  },
  {
    id: '5',
    rank: 5,
    symbol: 'ETH',
    name: 'Ethereum',
    type: 'crypto',
    price: 2308.45,
    priceChange24h: -1.23,
    marketCap: 276000000000,
    volume: 19500000000
  },
  {
    id: '6',
    rank: 6,
    symbol: 'VFIAX',
    name: 'Vanguard 500 Index Fund',
    type: 'fund',
    price: 429.87,
    priceChange24h: 0.41,
    marketCap: 740000000000,
    volume: 12000000000
  },
  {
    id: '7',
    rank: 7,
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    type: 'stock',
    price: 178.12,
    priceChange24h: 1.06,
    marketCap: 1850000000000,
    volume: 26700000000
  },
  {
    id: '8',
    rank: 8,
    symbol: 'SOL',
    name: 'Solana',
    type: 'crypto',
    price: 124.75,
    priceChange24h: 5.28,
    marketCap: 53000000000,
    volume: 7800000000
  },
  {
    id: '9',
    rank: 9,
    symbol: 'FXAIX',
    name: 'Fidelity 500 Index Fund',
    type: 'fund',
    price: 171.23,
    priceChange24h: 0.38,
    marketCap: 368000000000,
    volume: 8200000000
  },
  {
    id: '10',
    rank: 10,
    symbol: 'TSLA',
    name: 'Tesla, Inc.',
    type: 'stock',
    price: 176.52,
    priceChange24h: -2.14,
    marketCap: 562000000000,
    volume: 37500000000
  }
];