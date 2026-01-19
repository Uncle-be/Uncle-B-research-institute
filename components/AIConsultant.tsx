import React, { useState, useRef, useEffect } from 'react';
import { getResearchConsultation } from '../services/geminiService';
import { ConsultationMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ConsultationMessage[]>([
    { role: 'assistant', content: "Welcome to Uncle Blessing Research Institute. I'm your Research Strategist. How can I help you navigate your academic or business research today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ConsultationMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const response = await getResearchConsultation(input);
    setMessages(prev => [...prev, { role: 'assistant', content: response || "I'm having trouble connecting. Please try again." }]);
    setLoading(false);
  };

  return (
    <div id="consultation" className="bg-white rounded-2xl md:rounded-3xl border border-emerald-100 shadow-xl overflow-hidden flex flex-col h-[480px] md:h-[550px] relative">
      <div className="bg-emerald-800 p-4 text-white flex items-center gap-3 shrink-0">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-600/50 flex items-center justify-center border border-emerald-400">
          <i className="fas fa-brain text-sm md:text-lg"></i>
        </div>
        <div>
          <h3 className="font-bold text-sm md:text-base leading-tight">Research Architect AI</h3>
          <p className="text-[10px] text-emerald-200">Expert Strategy • Online</p>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-emerald-50/20 scroll-smooth">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[90%] rounded-xl md:rounded-2xl px-4 py-2.5 ${
              msg.role === 'user' 
                ? 'bg-emerald-700 text-white rounded-tr-none shadow-sm' 
                : 'bg-white border border-emerald-100 text-slate-700 rounded-tl-none shadow-sm'
            }`}>
              <p className="text-[13px] md:text-sm leading-snug whitespace-pre-wrap">{msg.content}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border border-emerald-100 rounded-xl rounded-tl-none px-4 py-2.5 shadow-sm">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-3 bg-white border-t border-emerald-100 shrink-0">
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your goals..."
            className="flex-1 border border-emerald-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all bg-slate-50"
          />
          <button 
            type="submit"
            disabled={loading || !input.trim()}
            className="w-10 h-10 bg-emerald-700 text-white rounded-xl flex items-center justify-center hover:bg-emerald-800 disabled:opacity-30 disabled:bg-slate-400 transition-all shadow-md shadow-emerald-200 shrink-0"
          >
            <i className="fas fa-paper-plane text-xs"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIConsultant;
