import { Home, PieChart, Library, CreditCard, BookOpen, HelpCircle } from 'lucide-react';

export default function Sidebar({ activePage, setActivePage, sidebarOpen, setSidebarOpen }) {
  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'portfolio', label: 'Portfolio Tracking', icon: PieChart },
    { id: 'library', label: 'Library', icon: Library },
    { id: 'subscription', label: 'Subscription', icon: CreditCard },
    { id: 'learning', label: 'Learning center', icon: BookOpen },
    { id: 'help', label: 'Help center', icon: HelpCircle }
  ];

  return (
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
  );
}
