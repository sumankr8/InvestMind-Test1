import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, ResponsiveContainer } from 'recharts';
import { Download, Plus, Brain, Filter } from 'lucide-react';

const mockPortfolios = [
  { id: 1, name: 'Growth Portfolio', type: 'Stocks', performance: 12.5 },
  { id: 2, name: 'Crypto Holdings', type: 'Crypto', performance: -8.3 },
  { id: 3, name: 'Retirement Fund', type: 'Mixed', performance: 5.7 },
];

const mockHoldings = [
  { symbol: 'AAPL', name: 'Apple Inc.', quantity: 10, avgBuyPrice: 150.25, currentPrice: 181.56, invested: 1502.50, currentValue: 1815.60 },
  { symbol: 'BTC', name: 'Bitcoin', quantity: 0.5, avgBuyPrice: 40000, currentPrice: 43291.78, invested: 20000, currentValue: 21645.89 },
  { symbol: 'MSFT', name: 'Microsoft', quantity: 8, avgBuyPrice: 300.75, currentPrice: 326.22, invested: 2406, currentValue: 2609.76 },
];

const sectorData = [
  { name: 'Technology', value: 45 },
  { name: 'Crypto', value: 30 },
  { name: 'Finance', value: 25 },
];

const valueByAssetData = mockHoldings.map(holding => ({
  name: holding.symbol,
  value: holding.currentValue,
}));

const portfolioHistoryData = Array.from({ length: 12 }, (_, i) => ({
  month: `Month ${i + 1}`,
  value: 100000 + Math.random() * 20000,
}));

const COLORS = ['#60A5FA', '#34D399', '#F472B6'];

const Portfolio: React.FC = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState('all');

  const totalInvested = mockHoldings.reduce((sum, holding) => sum + holding.invested, 0);
  const currentValue = mockHoldings.reduce((sum, holding) => sum + holding.currentValue, 0);
  const netProfitLoss = currentValue - totalInvested;
  const netProfitLossPercentage = (netProfitLoss / totalInvested) * 100;

  return (
    <main className="flex-grow py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Summary Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-gray-400 text-sm mb-2">Total Invested</h3>
            <p className="text-2xl font-bold">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalInvested)}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-gray-400 text-sm mb-2">Current Value</h3>
            <p className="text-2xl font-bold">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(currentValue)}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-gray-400 text-sm mb-2">Net Profit/Loss</h3>
            <p className={`text-2xl font-bold ${netProfitLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(netProfitLoss)}
              <span className="text-sm ml-2">({netProfitLossPercentage.toFixed(2)}%)</span>
            </p>
          </div>
        </div>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockPortfolios.map(portfolio => (
            <div key={portfolio.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{portfolio.name}</h3>
                  <p className="text-gray-400 text-sm">{portfolio.type}</p>
                </div>
                <span className={`text-sm font-medium ${portfolio.performance >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {portfolio.performance >= 0 ? '+' : ''}{portfolio.performance}%
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Holdings Table */}
        <div className="bg-gray-800 rounded-xl border border-gray-700">
          <div className="p-6 border-b border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <h2 className="text-xl font-bold">Holdings</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <select
                    value={selectedPortfolio}
                    onChange={(e) => setSelectedPortfolio(e.target.value)}
                    className="appearance-none bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Portfolios</option>
                    {mockPortfolios.map(p => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                  <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
                <button className="bg-gray-700 hover:bg-gray-600 text-sm px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                  <Download className="h-4 w-4" />
                  <span>Export</span>
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                  <Plus className="h-4 w-4" />
                  <span>Add Holding</span>
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
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
        </div>

        {/* AI Insights */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center space-x-3 mb-4">
            <Brain className="h-6 w-6 text-blue-500" />
            <h2 className="text-xl font-bold">AI Portfolio Insights</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Your portfolio shows strong performance in the technology sector, with Apple and Microsoft contributing significantly to overall gains. 
            Consider diversifying into other sectors to reduce risk. Bitcoin's recent volatility suggests monitoring your crypto exposure. 
            Based on market trends, consider increasing positions in stable dividend-paying stocks.
          </p>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sector Exposure */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4">Sector Exposure</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sectorData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {sectorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {sectorData.map((item, index) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                    <span className="text-sm text-gray-300">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Value by Asset */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4">Value by Asset</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={valueByAssetData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#60A5FA" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Portfolio Value Over Time */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4">Portfolio Value Over Time</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={portfolioHistoryData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#60A5FA" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;