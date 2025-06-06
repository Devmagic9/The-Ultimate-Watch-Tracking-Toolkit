import { Trash2 } from 'lucide-react';

export default function AnalyticsCards({ watchAnalytics, deleteWatchAnalytics }) {
  return (
    <div className="space-y-8">
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
        <h2 className="text-2xl font-bold text-white mb-6">Market Analytics by Watch</h2>
        {Object.keys(watchAnalytics).length === 0 ? (
          <div className="text-center py-12 text-slate-400">
            No analytics data yet. Start adding listings for different watches to see analytics here!
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(watchAnalytics).map(([watchKey, analytics]) => (
              <div key={watchKey} className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50 relative">
                <button
                  onClick={() => deleteWatchAnalytics(watchKey)}
                  className="absolute top-4 right-4 text-red-400 hover:text-red-300 transition-colors z-10"
                  title="Delete this watch analytics"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <div className="mb-6 pr-8">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {analytics.watchInfo.brand} {analytics.watchInfo.model}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {analytics.watchInfo.reference ? `Ref: ${analytics.watchInfo.reference} • ` : ''}
                    Last updated: {analytics.watchInfo.lastUpdated}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-slate-400 text-sm">Avg Listing</p>
                      <p className="text-xl font-bold text-blue-400">${analytics.averageListingPrice.toFixed(2)}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-slate-400 text-sm">Avg Sold</p>
                      <p className="text-xl font-bold text-green-400">${analytics.averageSoldPrice.toFixed(2)}</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">Median Listing</span>
                      <span className="text-white">${analytics.medianListingPrice.toFixed(2)}</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">Median Sold</span>
                      <span className="text-white">${analytics.medianSoldPrice.toFixed(2)}</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-slate-400">Total Listings</span>
                    <span className="text-white font-bold">{analytics.totalListings}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Profit Margin</span>
                    <span className={analytics.profitMargin >= 0 ? 'text-green-400 font-bold' : 'text-red-400 font-bold'}>
                      {analytics.profitMargin.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
