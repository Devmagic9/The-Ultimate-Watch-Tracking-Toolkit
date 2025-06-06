import { Send, User, Bot } from 'lucide-react';

export default function Library({ chatMessages, chatInput, setChatInput, sendChatMessage }) {
  return (
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
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${msg.type === 'user' ? 'bg-blue-500' : 'bg-slate-600'}`}>
                  {msg.type === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                </div>
                <div className={`p-4 rounded-2xl ${msg.type === 'user' ? 'bg-blue-500 text-white ml-4' : 'bg-slate-700/50 text-slate-100 mr-4'}`}>
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
  );
}
