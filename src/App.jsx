import React, { useState, useEffect } from 'react';
import { Search, Plus, TrendingUp, DollarSign, BarChart3, Eye, Trash2, Home, PieChart, Library, Send, User, Bot, Menu, X, CreditCard, BookOpen, HelpCircle, Check, Star } from 'lucide-react';

const brands = ['Rolex', 'Patek Philippe', 'Audemars Piguet', 'Omega', 'Cartier', 'Tudor', 'Breitling', 'TAG Heuer'];
const modelsByBrand = {
  'Rolex': ['Submariner', 'Daytona', 'Datejust', 'GMT-Master II', 'Explorer', 'Sea-Dweller'],
  'Patek Philippe': ['Nautilus', 'Aquanaut', 'Calatrava', 'Complications', 'Grand Complications'],
  'Audemars Piguet': ['Royal Oak', 'Royal Oak Offshore', 'Millenary', 'Jules Audemars'],
  'Omega': ['Speedmaster', 'Seamaster', 'Constellation', 'De Ville'],
  'Cartier': ['Tank', 'Santos', 'Ballon Bleu', 'Panthere'],
  'Tudor': ['Black Bay', 'Pelagos', 'GMT', 'Royal'],
  'Breitling': ['Navitimer', 'Superocean', 'Avenger', 'Premier'],
  'TAG Heuer': ['Carrera', 'Monaco', 'Aquaracer', 'Formula 1']
};

const referencesByModel = {
  'Submariner': ['126610LN', '126610LV', '124060', '116610LN', '116610LV', '114060', '16610', '5513', '1680'],
  'Daytona': ['116500LN', '116503', '116508', '116520', '116523', '116528', '6239', '6241', '6263', '6265'],
  'Datejust': ['126234', '126200', '126334', '116234', '116200', '16234', '16200', '1601', '1603'],
  'GMT-Master II': ['126710BLNR', '126710BLRO', '116710BLNR', '116710LN', '16710', '1675'],
  'Explorer': ['214270', '114270', '1016', '6350', '224270', '124270'],
  'Sea-Dweller': ['126600', '116600', '16600', '1665', '126603'],
  'Nautilus': ['5711/1A', '5712/1A', '5726/1A', '5980/1A', '5711/1R', '5712/1R', '5990/1A'],
  'Aquanaut': ['5167/1A', '5168/G', '5164/A', '5065/A', '5968/A'],
  'Calatrava': ['5196', '5227', '5296', '5119', '5120', '5127', '5153'],
  'Complications': ['5205', '5146', '5524', '5396', '5205G', '5235'],
  'Grand Complications': ['5970', '5204', '5208', '6104', '5002', '5104'],
  'Royal Oak': ['15202ST', '15400ST', '26331ST', '26470ST', '15500ST', '26320ST', '15300ST'],
  'Royal Oak Offshore': ['26400SO', '26470OR', '26401RO', '25940SK', '26703ST', '26420SO'],
  'Millenary': ['77247BC', '77301ST', '15320OR', '77315OR'],
  'Jules Audemars': ['15180OR', '26100OR', '15056OR', '26390OR'],
  'Speedmaster': ['310.30.42.50.01.001', '311.30.42.30.01.005', '304.30.44.52.01.001', '105.012', '145.022'],
  'Seamaster': ['210.30.42.20.01.001', '212.30.41.20.01.003', '233.30.41.21.01.001', '2531.80.00'],
  'Constellation': ['131.20.39.20.02.001', '123.20.35.20.02.001', '131.25.39.20.52.001'],
  'De Ville': ['424.23.40.20.02.001', '431.30.41.21.01.001', '424.10.40.20.02.001'],
  'Tank': ['W5200003', 'W5200004', 'W1529856', 'W1529755', 'WSTA0018', 'WSTA0017'],
  'Santos': ['WSSA0009', 'WSSA0010', 'W2SA0006', 'W20098D6', 'WGSA0007'],
  'Ballon Bleu': ['W69012Z4', 'W6920046', 'W2BB0023', 'W69016Z4'],
  'Panthere': ['W25032P5', 'W25054P5', 'WGPN0006', 'WSPN0006'],
  'Black Bay': ['79230N', '79230R', '79230B', '79540', '79030N', '79220N'],
  'Pelagos': ['25600TN', '25600TB', '25407N', '25500TN'],
  'GMT': ['79830RB', '79830WB', '79833MN'],
  'Royal': ['28500', '28400', '28300', '28600'],
  'Navitimer': ['A23322121B2A1', 'A17326211B1A1', 'AB0121211B1A1', 'A13324121B1A1'],
  'Superocean': ['A17367D71A1A1', 'AB2010121B1A1', 'A1736402BA29'],
  'Avenger': ['A13385101B1A1', 'A32390111B1A1', 'E13383101B1A1'],
  'Premier': ['AB0118221B1A1', 'A13315351B1A1', 'A40635161A1A1'],
  'Carrera': ['CBN2A1B.BA0643', 'CAR201T.BA0766', 'CBM2112.BA0651', 'CV201AH.BA0725'],
  'Monaco': ['CAW211P.BA0780', 'CBL2111.BA0644', 'CAW211R.FC6401'],
  'Aquaracer': ['WAY208A.BA0928', 'WAY111A.BA0928', 'CAY211A.BA0927'],
  'Formula 1': ['CAZ1014.BA0842', 'WAZ1112.BA0875', 'CAZ101E.BA0842']
};

const platforms = ['eBay', 'Chrono24', 'FB Marketplace', 'Crown & Caliber', 'Hodinkee Shop', 'WatchStation'];
const conditions = ['New', 'Like New', 'Excellent', 'Very Good', 'Good', 'Fair'];
const faqArticles = [
  {
    id: 1,
    title: "How to accurately price your Rolex Submariner",
    category: "Pricing",
    content: "Learn the key factors that determine Submariner values including year, condition, box & papers, and market trends."
  },
  {
    id: 2,
    title: "Understanding watch conditions: New vs Like New vs Excellent",
    category: "Condition Guide",
    content: "Detailed guide on how to properly assess and categorize your watch's condition for accurate pricing."
  },
  {
    id: 3,
    title: "Best platforms for selling luxury watches",
    category: "Selling",
    content: "Compare eBay, Chrono24, and other platforms to choose the best one for your watch type and budget."
  },
  {
    id: 4,
    title: "How to use the Analytics feature effectively",
    category: "Features",
    content: "Maximize your market research using our analytics dashboard to track price trends across different watches."
  },
  {
    id: 5,
    title: "Vintage watch pricing: What makes them valuable",
    category: "Vintage",
    content: "Understanding the factors that drive vintage watch prices including rarity, provenance, and historical significance."
  },
  {
    id: 6,
    title: "Creating compelling watch listings with AI",
    category: "AI Tools",
    content: "How to use our Library feature to generate professional titles and descriptions that sell."
  }
];
export default function WatchTracker() {
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
  const [newListing, setNewListing] = useState({
    platform: '',
    listingPrice: '',
    soldPrice: '',
    condition: '',
    notes: ''
  });
  const [watchAnalytics, setWatchAnalytics] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [helpSearchTerm, setHelpSearchTerm] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hello! I can help you generate compelling titles and descriptions for your watch listings. What watch would you like to create a listing for?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const getCurrentWatchKey = () => {
    if (!selectedBrand || !selectedModel) return null;
    return `${selectedBrand}-${selectedModel}-${selectedReference || 'all'}`;
  };

  const calculateMetrics = () => {
    const currentWatchKey = getCurrentWatchKey();
    if (!currentWatchKey) return {
      averageListingPrice: 0,
      averageSoldPrice: 0,
      medianListingPrice: 0,
      medianSoldPrice: 0,
      totalListings: 0,
      profitMargin: 0
    };

    const currentWatchListings = userListings.filter(listing => 
      `${listing.brand}-${listing.model}-${listing.reference || 'all'}` === currentWatchKey
    );

    if (currentWatchListings.length === 0) return {
      averageListingPrice: 0,
      averageSoldPrice: 0,
      medianListingPrice: 0,
      medianSoldPrice: 0,
      totalListings: 0,
      profitMargin: 0
    };

    const listingPrices = currentWatchListings.map(l => l.listingPrice).filter(p => p > 0);
    const soldPrices = currentWatchListings.map(l => l.soldPrice).filter(p => p > 0);

    const avg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
    const median = arr => {
      const sorted = [...arr].sort((a, b) => a - b);
      const mid = Math.floor(sorted.length / 2);
      return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    };

    const avgListing = avg(listingPrices) || 0;
    const avgSold = avg(soldPrices) || 0;

    return {
      averageListingPrice: avgListing,
      averageSoldPrice: avgSold,
      medianListingPrice: median(listingPrices) || 0,
      medianSoldPrice: median(soldPrices) || 0,
      totalListings: currentWatchListings.length,
      profitMargin: avgSold > 0 ? ((avgSold - avgListing) / avgListing * 100) : 0
    };
  };
  useEffect(() => {
    const currentWatchKey = getCurrentWatchKey();
    if (currentWatchKey) {
      const metrics = calculateMetrics();
      setWatchAnalytics(prev => ({
        ...prev,
        [currentWatchKey]: {
          ...metrics,
          watchInfo: {
            brand: selectedBrand,
            model: selectedModel,
            reference: selectedReference,
            lastUpdated: new Date().toLocaleDateString()
          }
        }
      }));
    }
  }, [userListings, selectedBrand, selectedModel, selectedReference]);

  const metrics = calculateMetrics();
  const suggestedPrice = (metrics.averageListingPrice + metrics.averageSoldPrice) / 2;

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
        date: new Date().toLocaleDateString()
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
        dateAdded: new Date().toLocaleDateString()
      };
      setWatchlist([...watchlist, watchItem]);
    }
  };

  const deleteListing = (id) => {
    setUserListings(userListings.filter(listing => listing.id !== id));
  };

  const deleteWatchAnalytics = (watchKey) => {
    setWatchAnalytics(prev => {
      const updated = { ...prev };
      delete updated[watchKey];
      return updated;
    });
    setUserListings(prev => prev.filter(listing => 
      `${listing.brand}-${listing.model}-${listing.reference || 'all'}` !== watchKey
    ));
  };
  const filteredListings = userListings.filter(listing =>
    listing.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.model?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.platform?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredFAQ = faqArticles.filter(article =>
    article.title.toLowerCase().includes(helpSearchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(helpSearchTerm.toLowerCase()) ||
    article.content.toLowerCase().includes(helpSearchTerm.toLowerCase())
  );

  const sendChatMessage = () => {
    if (!chatInput.trim()) return;

    const userMessage = { type: 'user', message: chatInput };
    setChatMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      let botResponse = '';
      const input = chatInput.toLowerCase();
      
      if (input.includes('rolex') || input.includes('submariner')) {
        botResponse = `Here's a compelling listing for your Rolex Submariner:

**Title:** "Rolex Submariner 126610LN - Black Dial, Ceramic Bezel, Excellent Condition"

**Description:** 
"Presenting this stunning Rolex Submariner Date 126610LN featuring the iconic black dial and unidirectional rotating black Cerachrom bezel. This modern classic showcases Rolex's latest 3235 movement with 70-hour power reserve. The watch is in excellent condition with minimal signs of wear, complete with original box and papers. Perfect for both diving adventures and formal occasions. A true investment piece that combines legendary Swiss craftsmanship with timeless design."

Would you like me to adjust the tone or focus on specific features?`;
      } else if (input.includes('title') || input.includes('description')) {
        botResponse = `I'd be happy to help create a title and description! Could you tell me:
1. What brand and model watch?
2. The condition of the watch?
3. Any special features or accessories included?
4. Which platform you're listing on (eBay, Chrono24, etc.)?

This will help me craft the perfect listing for you!`;
      } else {
        botResponse = `I can help you create compelling listings for your watches! Try asking me about:
- "Create a title for my Rolex Submariner"
- "Write a description for my Patek Philippe Nautilus"
- "Help me list my vintage Omega Speedmaster"

What watch would you like to create a listing for?`;
      }

      setChatMessages(prev => [...prev, { type: 'bot', message: botResponse }]);
    }, 1000);

    setChatInput('');
  };

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'portfolio', label: 'Portfolio Tracking', icon: PieChart },
    { id: 'library', label: 'Library', icon: Library },
    { id: 'subscription', label: 'Subscription', icon: CreditCard },
    { id: 'learning', label: 'Learning center', icon: BookOpen },
    { id: 'help', label: 'Help center', icon: HelpCircle }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 text-white"
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div className={`w-64 bg-slate-900 border-r border-slate-800 flex flex-col fixed lg:relative h-full z-40 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:block transition-transform duration-300 ease-in-out lg:transition-none`}>
        <div className="p-6">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-lg">W</span>
          </div>
        </div>
        
        <nav className="flex-1 px-4">
          <div className="space-y-1">
            {sidebarItems.slice(0, 3).map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                    activePage === item.id
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-3" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>

        <div className="p-4">
          <div className="space-y-1">
            {sidebarItems.slice(3).map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                    activePage === item.id
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-3" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <div className="flex-1 overflow-auto lg:ml-0">
        <div className="container mx-auto px-4 lg:px-6 py-8">
          {activePage === 'dashboard' && (
            <>
              <div className="text-center mb-8 lg:mb-12 mt-12 lg:mt-0">
                <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Dashboard
                </h1>
                <p className="text-slate-300 text-base lg:text-lg">Professional watch market analysis and portfolio management</p>
              </div>

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
                          {brands.map(brand => (
                            <option key={brand} value={brand}>{brand}</option>
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
                          {(modelsByBrand[selectedBrand] || []).map(model => (
                            <option key={model} value={model}>{model}</option>
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
                          {(referencesByModel[selectedModel] || []).map(ref => (
                            <option key={ref} value={ref}>{ref}</option>
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
                          {Array.from({ length: 81 }, (_, i) => 2030 - i).map(year => (
                            <option key={year} value={year}>{year}</option>
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
                          {conditions.map(condition => (
                            <option key={condition} value={condition}>{condition}</option>
                          ))}
                        </select>
                      </div>
                      <div className="flex items-end">
                        <button
                          onClick={addToWatchlist}
                          disabled={!selectedBrand || !selectedModel}
                          className="w-full p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-sm lg:text-base"
                        >
                          Add to Watchlist
                        </button>
                      </div>
                    </div>
                  </div>
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
                        <div className="text-center py-12 text-slate-400">
                          No listings found. Add your first listing to get started!
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'watchlist' && (
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
              )}
              {activeTab === 'analytics' && (
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
              )}
            </>
          )}
          {activePage === 'subscription' && (
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Choose a plan</h1>
                <p className="text-slate-300 text-lg">Select the perfect plan for your watch trading needs</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
                    <p className="text-slate-400 mb-4 text-sm">For individual collectors</p>
                    <div className="text-3xl font-bold text-white">Free</div>
                    <p className="text-slate-400 text-xs mt-1">Forever</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6 flex-1">
                    <li className="flex items-center text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      Track up to 5 watches
                    </li>
                    <li className="flex items-center text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      Basic analytics
                    </li>
                    <li className="flex items-center text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      Watchlist management
                    </li>
                    <li className="flex items-center text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      Basic listing generator
                    </li>
                  </ul>
                  
                  <button className="w-full py-3 bg-slate-700 text-white rounded-lg font-medium hover:bg-slate-600 transition-colors text-sm">
                    Get Started
                  </button>
                </div>

                <div className="bg-gradient-to-b from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/50 relative flex flex-col h-full">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </span>
                  </div>
                  
                  <div className="text-center mb-6 mt-2">
                    <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
                    <p className="text-slate-400 mb-4 text-sm">For serious traders</p>
                    <div className="text-3xl font-bold text-white">$5.99</div>
                    <p className="text-slate-400 text-xs mt-1">per month</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6 flex-1">
                    <li className="flex items-center text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      Track unlimited watches
                    </li>
                    <li className="flex items-center text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      Advanced analytics & insights
                    </li>
                    <li className="flex items-center text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      AI-powered listing generator
                    </li>
                    <li className="flex items-center text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      Price alerts & notifications
                    </li>
                    <li className="flex items-center text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      Export reports (PDF/CSV)
                    </li>
                    <li className="flex items-center text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      Priority support
                    </li>
                  </ul>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-sm">
                    Start Free Trial
                  </button>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">Business</h3>
                    <p className="text-slate-400 mb-4 text-sm">For watch dealers & shops</p>
                    <div className="text-2xl font-bold text-white">Custom</div>
                    <p className="text-slate-400 text-xs mt-1">pricing</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6 flex-1">
                    <li className="flex items-center text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      Everything in Pro
                    </li>
                    <li className="flex items-center text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      Multi-user team access
                    </li>
                    <li className="flex items-center text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      Inventory management
                    </li>
                    <li className="flex items-center text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      API access
                    </li>
                    <li className="flex items-center text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      Custom integrations
                    </li>
                    <li className="flex items-center text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      Dedicated support
                    </li>
                  </ul>
                  
                  <button className="w-full py-3 bg-slate-700 text-white rounded-lg font-medium hover:bg-slate-600 transition-colors text-sm">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          )}
          {activePage === 'learning' && (
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
          )}
          {activePage === 'library' && (
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-white mb-4 text-center">Library</h1>
              <p className="text-slate-300 text-lg mb-8 text-center">AI-powered listing generator for your watch sales</p>
              
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 h-96 flex flex-col">
                <div className="p-6 border-b border-slate-700/50">
                  <h2 className="text-xl font-semibold text-white">Listing Assistant</h2>
                  <p className="text-slate-400 text-sm">Get help creating compelling titles and descriptions for your watch listings</p>
                </div>
                
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-3xl flex items-start gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          msg.type === 'user' ? 'bg-blue-500' : 'bg-slate-600'
                        }`}>
                          {msg.type === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                        </div>
                        <div className={`p-4 rounded-2xl ${
                          msg.type === 'user' 
                            ? 'bg-blue-500 text-white ml-4' 
                            : 'bg-slate-700/50 text-slate-100 mr-4'
                        }`}>
                          <div className="whitespace-pre-wrap">{msg.message}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-6 border-t border-slate-700/50">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                      placeholder="Ask me to help create a listing for your watch..."
                      className="flex-1 p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-400 focus:outline-none"
                    />
                    <button
                      onClick={sendChatMessage}
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activePage === 'help' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Help Center</h1>
                <p className="text-slate-300 text-lg">Find answers to common questions about watch trading and our platform</p>
              </div>

              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={helpSearchTerm}
                    onChange={(e) => setHelpSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-blue-400 focus:outline-none text-lg"
                  />
                </div>
              </div>

              <div className="space-y-6">
                {filteredFAQ.map((article) => (
                  <div key={article.id} className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
                        <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{article.content}</p>
                  </div>
                ))}
                
                {filteredFAQ.length === 0 && (
                  <div className="text-center py-12 text-slate-400">
                    <HelpCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>No articles found matching your search.</p>
                  </div>
                )}
              </div>
            </div>
          )}
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
                      {platforms.map(platform => (
                        <option key={platform} value={platform}>{platform}</option>
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
      </div>
    </div>
  );
}
