import { Search, HelpCircle } from 'lucide-react';
import { faqArticles } from '../data/faqArticles';

export default function HelpCenter({ helpSearchTerm, setHelpSearchTerm }) {
  const filteredFAQ = faqArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(helpSearchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(helpSearchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(helpSearchTerm.toLowerCase())
  );

  return (
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
  );
}
