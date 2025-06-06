import { Check, Star } from 'lucide-react';

export default function Subscription() {
  return (
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
  );
}
