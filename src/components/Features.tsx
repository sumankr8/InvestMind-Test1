import React from 'react';
import { TrendingUp, Sparkles, BarChart3 } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Smart Investor?</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Real-Time Market Data */}
          <div className="group bg-gradient-to-b from-gray-800/80 to-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:-translate-y-1 hover:scale-[1.02]">
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/5 rounded-lg p-4 w-fit mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
              <TrendingUp className="h-7 w-7 text-emerald-400 group-hover:text-emerald-300 transition-colors" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-emerald-300 transition-colors">Real-Time Market Data</h3>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              Stay up-to-date with global asset prices, volumes, and trends.
            </p>
          </div>

          {/* AI-Powered Insights */}
          <div className="group bg-gradient-to-b from-gray-800/80 to-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-1 hover:scale-[1.02]">
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/5 rounded-lg p-4 w-fit mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
              <Sparkles className="h-7 w-7 text-purple-400 group-hover:text-purple-300 transition-colors" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">AI-Powered Insights</h3>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              Get personalized recommendations from our inbuilt AI assistant.
            </p>
          </div>

          {/* Portfolio Analytics */}
          <div className="group bg-gradient-to-b from-gray-800/80 to-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-1 hover:scale-[1.02]">
            <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/5 rounded-lg p-4 w-fit mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
              <BarChart3 className="h-7 w-7 text-cyan-400 group-hover:text-cyan-300 transition-colors" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors">Portfolio Analytics</h3>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              Visualize sector exposure, gains, and growth with intuitive dashboards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;