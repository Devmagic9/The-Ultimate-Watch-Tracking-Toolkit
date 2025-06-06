import { Trash2 } from 'lucide-react';

export default function Watchlist({ watchlist, deleteWatchlistItem }) {
  return (
    <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-slate-700/50">
      <h2 className="text-xl lg:text-2xl font-bold text-white mb-6">Your Watchlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {watchlist.map((item) => (
          <div key={item.id} className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50 relative">
            <button
              onClick={() => deleteWatchlistItem(item.id)}
              className="absolute top-4 right-4 text-red-400 hover:text-red-300 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <h3 className="text-white font-bold text-lg mb-2">{item.brand} {item.model}</h3>
            <p className="text-slate-400 mb-2">{item.reference} ({item.year})</p>
            <p className="text-slate-400 mb-4">Condition: {item.condition}</p>
            <div className="flex justify-between items-center">
              <p className="text-green-400 font-bold">Target: ${item.targetPrice.toFixed(2)}</p>
              <p className="text-slate-500 text-sm">{item.dateAdded}</p>
            </div>
          </div>
        ))}
        {watchlist.length === 0 && (
          <div className="col-span-full text-center py-12 text-slate-400">
            Your watchlist is empty. Add watches from the tracker to monitor prices!
          </div>
        )}
      </div>
    </div>
  );
}
