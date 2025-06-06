import { Plus, Trash2 } from 'lucide-react';

export default function MarketListings({
  filteredListings,
  searchTerm,
  setSearchTerm,
  setShowAddModal,
  deleteListing,
}) {
  return (
    <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-4 lg:p-8 border border-slate-700/50">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <h2 className="text-xl lg:text-2xl font-bold text-white">Market Listings</h2>
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          <input
            type="text"
            placeholder="Search listings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-400 focus:outline-none text-sm lg:text-base"
          />
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 lg:px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center text-sm lg:text-base"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Listing
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left text-slate-300 font-medium py-3 text-sm lg:text-base">Watch</th>
              <th className="text-left text-slate-300 font-medium py-3 text-sm lg:text-base">Platform</th>
              <th className="text-left text-slate-300 font-medium py-3 text-sm lg:text-base">Listing Price</th>
              <th className="text-left text-slate-300 font-medium py-3 text-sm lg:text-base">Sold Price</th>
              <th className="text-left text-slate-300 font-medium py-3 text-sm lg:text-base hidden lg:table-cell">Condition</th>
              <th className="text-left text-slate-300 font-medium py-3 text-sm lg:text-base hidden lg:table-cell">Date</th>
              <th className="text-left text-slate-300 font-medium py-3 text-sm lg:text-base">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredListings.map((listing) => (
              <tr key={listing.id} className="border-b border-slate-700/50 hover:bg-slate-700/25 transition-colors">
                <td className="py-4">
                  <div>
                    <p className="text-white font-medium text-sm lg:text-base">{listing.brand} {listing.model}</p>
                    <p className="text-slate-400 text-xs lg:text-sm">{listing.reference} ({listing.year})</p>
                  </div>
                </td>
                <td className="py-4 text-slate-300 text-sm lg:text-base">{listing.platform}</td>
                <td className="py-4 text-green-400 font-medium text-sm lg:text-base">${listing.listingPrice.toFixed(2)}</td>
                <td className="py-4 text-blue-400 font-medium text-sm lg:text-base">
                  {listing.soldPrice > 0 ? `$${listing.soldPrice.toFixed(2)}` : '-'}
                </td>
                <td className="py-4 text-slate-300 text-sm lg:text-base hidden lg:table-cell">{listing.condition}</td>
                <td className="py-4 text-slate-400 text-sm lg:text-base hidden lg:table-cell">{listing.date}</td>
                <td className="py-4">
                  <button
                    onClick={() => deleteListing(listing.id)}
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredListings.length === 0 && (
          <div className="text-center py-12 text-slate-400">No listings found. Add your first listing to get started!</div>
        )}
      </div>
    </div>
  );
}
