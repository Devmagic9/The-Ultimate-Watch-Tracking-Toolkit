import { DollarSign, TrendingUp, BarChart3, Eye } from 'lucide-react';

export default function MetricsCards({ metrics, suggestedPrice }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-slate-700/50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-xs lg:text-sm">Suggested Price</p>
            <p className="text-lg lg:text-2xl font-bold text-green-400">${suggestedPrice.toFixed(2)}</p>
          </div>
          <DollarSign className="text-green-400 w-6 h-6 lg:w-8 lg:h-8" />
        </div>
      </div>
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-slate-700/50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-xs lg:text-sm">Avg Listing</p>
            <p className="text-lg lg:text-2xl font-bold text-blue-400">${metrics.averageListingPrice.toFixed(2)}</p>
          </div>
          <TrendingUp className="text-blue-400 w-6 h-6 lg:w-8 lg:h-8" />
        </div>
      </div>
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-slate-700/50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-xs lg:text-sm">Avg Sold</p>
            <p className="text-lg lg:text-2xl font-bold text-purple-400">${metrics.averageSoldPrice.toFixed(2)}</p>
          </div>
          <BarChart3 className="text-purple-400 w-6 h-6 lg:w-8 lg:h-8" />
        </div>
      </div>
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-slate-700/50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-xs lg:text-sm">Total Listings</p>
            <p className="text-lg lg:text-2xl font-bold text-yellow-400">{metrics.totalListings}</p>
          </div>
          <Eye className="text-yellow-400 w-6 h-6 lg:w-8 lg:h-8" />
        </div>
      </div>
    </div>
  );
}
