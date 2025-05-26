import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, ResponsiveContainer, Legend, Area } from 'recharts';
import { Download, Plus, Brain, Filter, TrendingUp, TrendingDown, DollarSign, Percent, Calendar, ArrowUpRight, ArrowDownRight, ChevronRight } from 'lucide-react';

const mockPortfolios = [
  { id: 1, name: 'Growth Portfolio', type: 'Stocks', performance: 12.5, allocation: 45 },
  { id: 2, name: 'Crypto Holdings', type: 'Crypto', performance: -8.3, allocation: 30 },
  { id: 3, name: 'Retirement Fund', type: 'Mixed', performance: 5.7, allocation: 25 },
];

const mockHoldings = [
  { symbol: 'AAPL', name: 'Apple Inc.', quantity: 10, avgBuyPrice: 150.25, currentPrice: 181.56, invested: 1502.50, currentValue: 1815.60 },
  { symbol: 'BTC', name: 'Bitcoin', quantity: 0.5, avgBuyPrice: 40000, currentPrice: 43291.78, invested: 20000, currentValue: 21645.89 },
  { symbol: 'MSFT', name: 'Microsoft', quantity: 8, avgBuyPrice: 300.75, currentPrice: 326.22, invested: 2406, currentValue: 2609.76 },
  { symbol: 'ETH', name: 'Ethereum', quantity: 2.5, avgBuyPrice: 2000, currentPrice: 2308.45, invested: 5000, currentValue: 5771.13 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', quantity: 15, avgBuyPrice: 125.50, currentPrice: 141.18, invested: 1882.50, currentValue: 2117.70 },
];

const sectorData = [
  { name: 'Technology', value: 45, color: '#60A5FA' },
  { name: 'Crypto', value: 30, color: '#34D399' },
  { name: 'Finance', value: 15, color: '#F472B6' },
  { name: 'Healthcare', value: 10, color: '#A78BFA' },
];

let performanceData = [];
const baseValue = 100000;

performanceData = Array.from({ length: 12 }, (_, i) => {
  const monthlyGrowth = Array.from({ length: i + 1 }, () => 1 + (Math.random() * 0.06 - 0.02));
  const value = monthlyGrowth.reduce((acc, growth) => acc * growth, baseValue);
  
  return {
    month: new Date(2024, i, 1).toLocaleString('default', { month: 'short' }),
    value: Math.round(value),
    previousValue: i > 0 ? performanceData[i - 1]?.value : baseValue,
  };
});

const Portfolio: React.FC = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState('all');
  const [timeRange, setTimeRange] = useState('1Y');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const totalInvested = mockHoldings.reduce((sum, holding) => sum + holding.invested, 0);
  const currentValue = mockHoldings.reduce((sum, holding) => sum + holding.currentValue, 0);
  const netProfitLoss = currentValue - totalInvested;
  const netProfitLossPercentage = (netProfitLoss / totalInvested) * 100;
  const dailyChange = 2345.67;
  const dailyChangePercentage = (dailyChange / currentValue) * 100;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-lg">
          <p className="text-gray-300 mb-2">{label}</p>
          <p className="text-white font-medium">
            ${payload[0].value.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  const StatCard = ({ title, value, subValue, icon: Icon, trend = 0 }) => (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <div className="bg-gray-700/50 rounded-lg p-3">
          <Icon className="h-6 w-6 text-blue-400" />
        </div>
        {trend !== 0 && (
          <div className={`flex items-center ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend > 0 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
            <span className="ml-1 text-sm font-medium">{Math.abs(trend).toFixed(2)}%</span>
          </div>
        )}
      </div>
      <h3 className="text-gray-400 text-sm mb-1">{title}</h3>
      <p className="text-2xl font-bold text-white mb-2">{value}</p>
      {subValue && <p className="text-sm text-gray-400">{subValue}</p>}
    </div>
  );

  const TimeRangeSelector = () => (
    <div className="flex space-x-2 bg-gray-800 p-1 rounded-lg">
      {['1M', '3M', '6M', '1Y', 'All'].map((range) => (
        <button
          key={range}
          className={`px-3 py-1 text-sm rounded-md transition-all ${
            timeRange === range
              ? 'bg-gray-700 text-white shadow-sm'
              : 'text-gray-400 hover:text-gray-200'
          }`}
          onClick={() => setTimeRange(range)}
        >
          {range}
        </button>
      ))}
    </div>
  );

  const MobileHoldingCard = ({ holding }) => {
    const profitLoss = holding.currentValue - holding.invested;
    const profitLossPercentage = (profitLoss / holding.invested) * 100;

    return (
      <div className="bg-gray-750 rounded-lg p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gray-700 rounded-md py-1 px-2">
              <span className="font-medium">{holding.symbol}</span>
            </div>
            <span className="text-sm text-gray-300">{holding.name}</span>
          </div>
          <span className={`text-sm font-mono ${profitLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {profitLoss >= 0 ? '+' : ''}{profitLossPercentage.toFixed(2)}%
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-gray-400">Quantity</p>
            <p className="font-mono">{holding.quantity}</p>
          </div>
          <div>
            <p className="text-gray-400">Avg Price</p>
            <p className="font-mono">${holding.avgBuyPrice.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-gray-400">Current Value</p>
            <p className="font-mono">${holding.currentValue.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-gray-400">P/L</p>
            <p className={`font-mono ${profitLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              ${Math.abs(profitLoss).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="flex-grow py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
        {/* Portfolio Summary Cards - Now more responsive */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <StatCard
            title="Total Portfolio Value"
            value={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(currentValue)}
            subValue="Updated just now"
            icon={DollarSign}
            trend={dailyChangePercentage}
          />
          <StatCard
            title="Total Profit/Loss"
            value={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(netProfitLoss)}
            subValue="All time"
            icon={TrendingUp}
            trend={netProfitLossPercentage}
          />
          <StatCard
            title="Daily Change"
            value={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dailyChange)}
            subValue="Today's P/L"
            icon={Calendar}
            trend={dailyChangePercentage}
          />
          <StatCard
            title="Portfolio Return"
            value={`${netProfitLossPercentage.toFixed(2)}%`}
            subValue="All time return"
            icon={Percent}
          />
        </div>

        {/* Performance Chart - Responsive height */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 md:p-6">
          <div className="flex flex-col space-y-4 mb-6">
            <div>
              <h2 className="text-xl font-bold mb-1">Portfolio Performance</h2>
              <p className="text-gray-400 text-sm">Track your portfolio's growth over time</p>
            </div>
            <div className="flex justify-end">
              <TimeRangeSelector />
            </div>
          </div>
          <div className="h-60 md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#60A5FA" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="month" 
                  stroke="#9CA3AF"
                  tick={{ fontSize: 12 }}
                  interval={'preserveStartEnd'}
                />
                <YAxis 
                  stroke="#9CA3AF"
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                  tick={{ fontSize: 12 }}
                  width={60}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#60A5FA"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Portfolio Distribution - Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Asset Allocation */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 md:p-6">
            <h3 className="text-lg font-semibold mb-6">Asset Allocation</h3>
            <div className="h-48 md:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sectorData}
                    cx="50%"
                    cy="50%"
                    innerRadius={window.innerWidth < 768 ? 40 : 60}
                    outerRadius={window.innerWidth < 768 ? 60 : 80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {sectorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    formatter={(value, entry) => (
                      <span className="text-gray-300 text-sm">{value}</span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top Performers */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 md:p-6">
            <h3 className="text-lg font-semibold mb-6">Top Performers</h3>
            <div className="space-y-3 md:space-y-4">
              {mockHoldings
                .sort((a, b) => ((b.currentValue - b.invested) / b.invested) - ((a.currentValue - a.invested) / a.invested))
                .slice(0, 3)
                .map((holding) => {
                  const profit = holding.currentValue - holding.invested;
                  const profitPercentage = (profit / holding.invested) * 100;
                  return (
                    <div key={holding.symbol} className="flex items-center justify-between p-3 bg-gray-750 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gray-700 rounded-md py-1 px-2">
                          <span className="font-medium text-sm md:text-base">{holding.symbol}</span>
                        </div>
                        <span className="text-gray-300 text-sm md:text-base">{holding.name}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-green-500 text-sm md:text-base">+{profitPercentage.toFixed(2)}%</p>
                        <p className="text-xs md:text-sm text-gray-400">${profit.toFixed(2)}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 md:p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Brain className="h-6 w-6 text-blue-500" />
              <h3 className="text-lg font-semibold">AI Insights</h3>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="p-3 md:p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <h4 className="font-medium text-blue-400 mb-2 text-sm md:text-base">Portfolio Diversification</h4>
                <p className="text-gray-300 text-xs md:text-sm">
                  Your portfolio shows a strong tech sector bias. Consider diversifying into other sectors to reduce risk.
                </p>
              </div>
              <div className="p-3 md:p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <h4 className="font-medium text-green-400 mb-2 text-sm md:text-base">Growth Opportunity</h4>
                <p className="text-gray-300 text-xs md:text-sm">
                  AAPL and MSFT are showing strong momentum. Consider increasing positions during market dips.
                </p>
              </div>
              <div className="p-3 md:p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <h4 className="font-medium text-yellow-400 mb-2 text-sm md:text-base">Risk Alert</h4>
                <p className="text-gray-300 text-xs md:text-sm">
                  Crypto exposure is relatively high. Monitor market conditions and consider rebalancing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Holdings Section */}
        <div className="bg-gray-800 rounded-xl border border-gray-700">
          <div className="p-4 md:p-6 border-b border-gray-700">
            <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center">
              <div>
                <h2 className="text-xl font-bold mb-1">Holdings</h2>
                <p className="text-gray-400 text-sm">Manage your investment portfolio</p>
              </div>
              
              {/* Mobile Filters Button */}
              <button
                className="md:hidden flex items-center justify-between w-full bg-gray-700 px-4 py-2 rounded-lg"
                onClick={() => setShowMobileFilters(!showMobileFilters)}
              >
                <span className="text-sm">Filters & Actions</span>
                <ChevronRight className={`h-4 w-4 transition-transform ${showMobileFilters ? 'rotate-90' : ''}`} />
              </button>
              
              {/* Desktop Actions */}
              <div className={`flex-col space-y-3 md:flex-row md:items-center md:space-x-4 md:space-y-0 ${showMobileFilters ? 'flex' : 'hidden md:flex'}`}>
                <div className="relative">
                  <select
                    value={selectedPortfolio}
                    onChange={(e) => setSelectedPortfolio(e.target.value)}
                    className="w-full md:w-auto appearance-none bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Portfolios</option>
                    {mockPortfolios.map(p => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                  <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
                <button className="w-full md:w-auto bg-gray-700 hover:bg-gray-600 text-sm px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                  <Download className="h-4 w-4" />
                  <span>Export</span>
                </button>
                <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                  <Plus className="h-4 w-4" />
                  <span>Add Holding</span>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 text-sm">
                  <th className="px-6 py-4 font-medium">Symbol</th>
                  <th className="px-6 py-4 font-medium">Asset Name</th>
                  <th className="px-6 py-4 font-medium text-right">Quantity</th>
                  <th className="px-6 py-4 font-medium text-right">Avg Buy Price</th>
                  <th className="px-6 py-4 font-medium text-right">Current Price</th>
                  <th className="px-6 py-4 font-medium text-right">Invested Amount</th>
                  <th className="px-6 py-4 font-medium text-right">Current Value</th>
                  <th className="px-6 py-4 font-medium text-right">Profit/Loss</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {mockHoldings.map((holding) => {
                  const profitLoss = holding.currentValue - holding.invested;
                  const profitLossPercentage = (profitLoss / holding.invested) * 100;

                  return (
                    <tr key={holding.symbol} className="hover:bg-gray-750 transition-colors">
                      <td className="px-6 py-4">
                        <div className="bg-gray-700 rounded-md py-1 px-2 inline-block">
                          <span className="font-medium">{holding.symbol}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">{holding.name}</td>
                      <td className="px-6 py-4 text-right font-mono">{holding.quantity}</td>
                      <td className="px-6 py-4 text-right font-mono">${holding.avgBuyPrice.toFixed(2)}</td>
                      <td className="px-6 py-4 text-right font-mono">${holding.currentPrice.toFixed(2)}</td>
                      <td className="px-6 py-4 text-right font-mono">${holding.invested.toFixed(2)}</td>
                      <td className="px-6 py-4 text-right font-mono">${holding.currentValue.toFixed(2)}</td>
                      <td className="px-6 py-4 text-right">
                        <span className={`font-mono ${profitLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                          ${Math.abs(profitLoss).toFixed(2)}
                          <span className="ml-1 text-xs">
                            ({profitLoss >= 0 ? '+' : ''}{profitLossPercentage.toFixed(2)}%)
                          </span>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden p-4 space-y-4">
            {mockHoldings.map((holding) => (
              <MobileHoldingCard key={holding.symbol} holding={holding} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;