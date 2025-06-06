import { Search } from 'lucide-react';
import { brands } from '../data/brands';
import { modelsByBrand } from '../data/models';
import { referencesByModel } from '../data/references';
import { conditions } from '../data/conditions';

export default function WatchSelection({
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
}) {
  return (
    <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-slate-700/50">
      <h2 className="text-xl lg:text-2xl font-bold text-white mb-6 flex items-center">
        <Search className="mr-3 text-blue-400 w-5 h-5 lg:w-6 lg:h-6" />
        Watch Selection
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <div>
          <label className="block text-slate-300 mb-2 font-medium text-sm lg:text-base">Brand</label>
          <select
            value={selectedBrand}
            onChange={(e) => {
              setSelectedBrand(e.target.value);
              setSelectedModel('');
              setSelectedReference('');
            }}
            className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors text-sm lg:text-base"
          >
            <option value="">Select Brand</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-slate-300 mb-2 font-medium text-sm lg:text-base">Model</label>
          <select
            value={selectedModel}
            onChange={(e) => {
              setSelectedModel(e.target.value);
              setSelectedReference('');
            }}
            className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors text-sm lg:text-base"
            disabled={!selectedBrand}
          >
            <option value="">Select Model</option>
            {(modelsByBrand[selectedBrand] || []).map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-slate-300 mb-2 font-medium text-sm lg:text-base">Reference</label>
          <select
            value={selectedReference}
            onChange={(e) => setSelectedReference(e.target.value)}
            className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors text-sm lg:text-base"
            disabled={!selectedModel}
          >
            <option value="">Select Reference</option>
            {(referencesByModel[selectedModel] || []).map((ref) => (
              <option key={ref} value={ref}>
                {ref}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-slate-300 mb-2 font-medium text-sm lg:text-base">Year</label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors text-sm lg:text-base"
          >
            <option value="">Select Year</option>
            {Array.from({ length: 81 }, (_, i) => 2030 - i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-slate-300 mb-2 font-medium text-sm lg:text-base">Condition</label>
          <select
            value={selectedCondition}
            onChange={(e) => setSelectedCondition(e.target.value)}
            className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors text-sm lg:text-base"
          >
            <option value="">Select Condition</option>
            {conditions.map((condition) => (
              <option key={condition} value={condition}>
                {condition}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-end">
          <button
            onClick={addToWatchlist}
            disabled={!selectedBrand || !selectedModel}
            className="px-4 lg:px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 w-full"
          >
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
}
