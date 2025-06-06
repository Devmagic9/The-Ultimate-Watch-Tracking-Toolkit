import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import Subscription from './pages/Subscription';
import LearningCenter from './pages/LearningCenter';
import Library from './pages/Library';
import HelpCenter from './pages/HelpCenter';
import { platforms } from './data/platforms';
import calculateMetrics from './utils/calculateMetrics';
import formatWatchKey from './utils/formatWatchKey';

export default function App() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedReference, setSelectedReference] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');
  const [userListings, setUserListings] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [activeTab, setActiveTab] = useState('tracker');
  const [activePage, setActivePage] = useState('dashboard');
  const [showAddModal, setShowAddModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [newListing, setNewListing] = useState({ platform: '', listingPrice: '', soldPrice: '', condition: '', notes: '' });
  const [watchAnalytics, setWatchAnalytics] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [helpSearchTerm, setHelpSearchTerm] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hello! I can help you generate compelling titles and descriptions for your watch listings. What watch would you like to create a listing for?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const metrics = calculateMetrics(userListings, selectedBrand, selectedModel, selectedReference);
  const suggestedPrice = (metrics.averageListingPrice + metrics.averageSoldPrice) / 2;

  useEffect(() => {
    const currentWatchKey = formatWatchKey(selectedBrand, selectedModel, selectedReference);
    if (currentWatchKey) {
      const m = calculateMetrics(userListings, selectedBrand, selectedModel, selectedReference);
      setWatchAnalytics(prev => ({
        ...prev,
        [currentWatchKey]: {
          ...m,
          watchInfo: {
            brand: selectedBrand,
            model: selectedModel,
            reference: selectedReference,
            lastUpdated: new Date().toLocaleDateString(),
          },
        },
      }));
    }
  }, [userListings, selectedBrand, selectedModel, selectedReference]);

  const addListing = () => {
    if (newListing.platform && newListing.listingPrice && selectedBrand && selectedModel) {
      const listing = {
        id: Date.now(),
        ...newListing,
        brand: selectedBrand,
        model: selectedModel,
        reference: selectedReference,
        year: selectedYear,
        condition: selectedCondition,
        listingPrice: parseFloat(newListing.listingPrice),
        soldPrice: parseFloat(newListing.soldPrice) || 0,
        date: new Date().toLocaleDateString(),
      };
      setUserListings([...userListings, listing]);
      setNewListing({ platform: '', listingPrice: '', soldPrice: '', condition: '', notes: '' });
      setShowAddModal(false);
    }
  };

  const addToWatchlist = () => {
    if (selectedBrand && selectedModel) {
      const watchItem = {
        id: Date.now(),
        brand: selectedBrand,
        model: selectedModel,
        reference: selectedReference,
        year: selectedYear,
        condition: selectedCondition,
        targetPrice: suggestedPrice,
        dateAdded: new Date().toLocaleDateString(),
      };
      setWatchlist([...watchlist, watchItem]);
    }
  };

  const deleteListing = (id) => {
    setUserListings(userListings.filter((listing) => listing.id !== id));
  };

  const deleteWatchAnalytics = (watchKey) => {
    setWatchAnalytics((prev) => {
      const updated = { ...prev };
      delete updated[watchKey];
      return updated;
    });
    setUserListings((prev) => prev.filter((listing) => formatWatchKey(listing.brand, listing.model, listing.reference) !== watchKey));
  };

  const deleteWatchlistItem = (id) => {
    setWatchlist((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredListings = userListings.filter(
    (listing) =>
      listing.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.model?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.platform?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sendChatMessage = () => {
    if (!chatInput.trim()) return;

    const userMessage = { type: 'user', message: chatInput };
    setChatMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      let botResponse = '';
      const input = chatInput.toLowerCase();

      if (input.includes('rolex') || input.includes('submariner')) {
        botResponse = `Here's a compelling listing for your Rolex Submariner:\n\n**Title:** "Rolex Submariner 126610LN - Black Dial, Ceramic Bezel, Excellent Condition"\n\n**Description:**\n"Presenting this stunning Rolex Submariner Date 126610LN featuring the iconic black dial and unidirectional rotating black Cerachrom bezel. This modern classic showcases Rolex's latest 3235 movement with 70-hour power reserve. The watch is in excellent condition with minimal signs of wear, complete with original box and papers. Perfect for both diving adventures and formal occasions. A true investment piece that combines legendary Swiss craftsmanship with timeless design."\n\nWould you like me to adjust the tone or focus on specific features?`;
      } else if (input.includes('title') || input.includes('description')) {
        botResponse = `I'd be happy to help create a title and description! Could you tell me:\n1. What brand and model watch?\n2. The condition of the watch?\n3. Any special features or accessories included?\n4. Which platform you're listing on (eBay, Chrono24, etc.)?\n\nThis will help me craft the perfect listing for you!`;
      } else {
        botResponse = `I can help you create compelling listings for your watches! Try asking me about:\n- "Create a title for my Rolex Submariner"\n- "Write a description for my Patek Philippe Nautilus"\n- "Help me list my vintage Omega Speedmaster"\n\nWhat watch would you like to create a listing for?`;
      }

      setChatMessages((prev) => [...prev, { type: 'bot', message: botResponse }]);
    }, 1000);

    setChatInput('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 text-white"
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      <Sidebar activePage={activePage} setActivePage={setActivePage} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {sidebarOpen && <div className="lg:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setSidebarOpen(false)} />}
      <div className="flex-1 overflow-auto lg:ml-64">
        <div className="container mx-auto px-4 lg:px-6 py-8">
          {activePage === 'dashboard' && (
            <Dashboard
              activeTab={activeTab}
              setActiveTab={setActiveTab}
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
              metrics={metrics}
              suggestedPrice={suggestedPrice}
              filteredListings={filteredListings}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setShowAddModal={setShowAddModal}
              deleteListing={deleteListing}
              watchlist={watchlist}
              deleteWatchlistItem={deleteWatchlistItem}
              watchAnalytics={watchAnalytics}
              deleteWatchAnalytics={deleteWatchAnalytics}
            />
          )}
          {activePage === 'portfolio' && <Portfolio />}
          {activePage === 'subscription' && <Subscription />}
          {activePage === 'learning' && <LearningCenter />}
          {activePage === 'library' && (
            <Library
              chatMessages={chatMessages}
              chatInput={chatInput}
              setChatInput={setChatInput}
              sendChatMessage={sendChatMessage}
            />
          )}
          {activePage === 'help' && (
            <HelpCenter helpSearchTerm={helpSearchTerm} setHelpSearchTerm={setHelpSearchTerm} />
          )}
        </div>
      </div>
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-2xl p-6 lg:p-8 w-full max-w-md border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-6">Add New Listing</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-slate-300 mb-2">Platform</label>
                <select
                  value={newListing.platform}
                  onChange={(e) => setNewListing({ ...newListing, platform: e.target.value })}
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:outline-none"
                >
                  <option value="">Select Platform</option>
                  {platforms.map((platform) => (
                    <option key={platform} value={platform}>
                      {platform}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-slate-300 mb-2">Listing Price</label>
                <input
                  type="number"
                  value={newListing.listingPrice}
                  onChange={(e) => setNewListing({ ...newListing, listingPrice: e.target.value })}
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:outline-none"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2">Sold Price (Optional)</label>
                <input
                  type="number"
                  value={newListing.soldPrice}
                  onChange={(e) => setNewListing({ ...newListing, soldPrice: e.target.value })}
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:outline-none"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2">Notes (Optional)</label>
                <textarea
                  value={newListing.notes}
                  onChange={(e) => setNewListing({ ...newListing, notes: e.target.value })}
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:outline-none"
                  rows="3"
                  placeholder="Additional notes..."
                />
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 py-3 bg-slate-700 text-white rounded-lg font-medium hover:bg-slate-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={addListing}
                className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Add Listing
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
