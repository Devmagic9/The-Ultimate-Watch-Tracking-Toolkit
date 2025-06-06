import { Search, BarChart3, Eye, Bot, TrendingUp, PieChart } from 'lucide-react';

export default function LearningCenter() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Learning Center</h1>
        <p className="text-slate-300 text-lg">Master watch trading with our comprehensive guides and tutorials</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
            <Search className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Watch Selection</h3>
          <p className="text-slate-400 mb-6">Learn how to use our comprehensive watch database to research specific models, references, and market trends across different brands.</p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Brand and model selection</li>
            <li>• Reference number importance</li>
            <li>• Year and condition factors</li>
          </ul>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
            <BarChart3 className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Market Analytics</h3>
          <p className="text-slate-400 mb-6">Understand how to interpret our analytics dashboard to make informed pricing decisions and identify market opportunities.</p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Reading price trends</li>
            <li>• Median vs average pricing</li>
            <li>• Profit margin analysis</li>
          </ul>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
            <Eye className="w-6 h-6 text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Watchlist Management</h3>
          <p className="text-slate-400 mb-6">Organize and monitor watches you're interested in buying or selling with our intelligent watchlist system.</p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Adding watches to watchlist</li>
            <li>• Setting target prices</li>
            <li>• Tracking opportunities</li>
          </ul>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6">
            <Bot className="w-6 h-6 text-yellow-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">AI Listing Generator</h3>
          <p className="text-slate-400 mb-6">Create compelling listings with our AI-powered assistant that generates professional titles and descriptions for any platform.</p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Crafting effective titles</li>
            <li>• Writing detailed descriptions</li>
            <li>• Platform-specific optimization</li>
          </ul>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
            <TrendingUp className="w-6 h-6 text-red-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Price Tracking</h3>
          <p className="text-slate-400 mb-6">Master the art of tracking market prices across different platforms to identify the best buying and selling opportunities.</p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Multi-platform monitoring</li>
            <li>• Historical price data</li>
            <li>• Market timing strategies</li>
          </ul>
        </div>
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6">
            <PieChart className="w-6 h-6 text-indigo-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Portfolio Insights</h3>
          <p className="text-slate-400 mb-6">Learn how to build and manage a profitable watch portfolio using data-driven insights and market analysis.</p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Diversification strategies</li>
            <li>• ROI calculations</li>
            <li>• Risk management</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
