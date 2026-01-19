import React from 'react';

const Navigation: React.FC = () => {
  const whatsappUrl = "https://wa.me/2349033597562?text=Hello%20Uncle%20Blessing%20Research%20Institute,%20I'm%20ready%20to%20order%20help%20with%20my%20project.";

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-800 rounded-xl flex items-center justify-center text-white">
              <i className="fas fa-book-open"></i>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black text-slate-900 leading-none">UNCLE BLESSING</span>
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Research Institute</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-slate-600 hover:text-emerald-700 font-bold transition-colors text-xs uppercase tracking-widest">About</a>
            <a href="#services" className="text-slate-600 hover:text-emerald-700 font-bold transition-colors text-xs uppercase tracking-widest">Services</a>
            <a href="#global-pathway" className="text-slate-600 hover:text-emerald-700 font-bold transition-colors text-xs uppercase tracking-widest">Global Pathway</a>
            <a href="#consultation" className="text-slate-600 hover:text-emerald-700 font-bold transition-colors text-xs uppercase tracking-widest">AI Strategist</a>
          </div>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-emerald-700 transition shadow-md shadow-emerald-100"
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
