import DashboardHeader from '../components/DashboardHeader';
import WatchSelection from '../components/WatchSelection';
import MetricsCards from '../components/MetricsCards';
import MarketListings from '../components/MarketListings';
import Watchlist from '../components/Watchlist';
import AnalyticsCards from '../components/AnalyticsCards';

export default function Dashboard({
  activeTab,
  setActiveTab,
  selectedBrand,
  setSelectedBrand,
  selectedModel,
  setSelectedModel,
  selectedReference,
  setSelectedReference,
  selectedYear,
  setSelectedYear,
  selectedCondition,
  setSelectedCondition,
  addToWatchlist,
  metrics,
  suggestedPrice,
  filteredListings,
  searchTerm,
  setSearchTerm,
  setShowAddModal,
  deleteListing,
  watchlist,
  deleteWatchlistItem,
  watchAnalytics,
  deleteWatchAnalytics,
}) {
  return (
    <>
      <DashboardHeader />
      <div className="flex justify-center mb-8">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-full p-1">
          {['tracker', 'watchlist', 'analytics'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 lg:px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm lg:text-base ${
                activeTab === tab
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'tracker' && (
        <div className="space-y-6 lg:space-y-8">
          <WatchSelection
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
            selectedReference={selectedReference}
            setSelectedReference={setSelectedReference}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            selectedCondition={selectedCondition}
            setSelectedCondition={setSelectedCondition}
            addToWatchlist={addToWatchlist}
          />
          <MetricsCards metrics={metrics} suggestedPrice={suggestedPrice} />
          <MarketListings
            filteredListings={filteredListings}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setShowAddModal={setShowAddModal}
            deleteListing={deleteListing}
          />
        </div>
      )}

      {activeTab === 'watchlist' && (
        <Watchlist watchlist={watchlist} deleteWatchlistItem={deleteWatchlistItem} />
      )}

      {activeTab === 'analytics' && (
        <AnalyticsCards watchAnalytics={watchAnalytics} deleteWatchAnalytics={deleteWatchAnalytics} />
      )}
    </>
  );
}
