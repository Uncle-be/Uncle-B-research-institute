import React from 'react';
import Navigation from './components/Navigation.tsx';
import AIConsultant from './components/AIConsultant.tsx';

const App: React.FC = () => {
  const whatsappNumber = "2349033597562";
  
  const getWhatsappUrl = (service?: string) => {
    const text = service 
      ? `Hello Uncle Blessing, I want to order your "${service}" service. Please let me know the requirements.`
      : "Hello Uncle Blessing Research Institute, I need help with a research project.";
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const services = [
    {
      title: "Academic Project Writing",
      description: "Undergraduate, Masters, and PhD project assistance from proposal to final defense.",
      icon: "fa-graduation-cap",
      price: "Best Rates"
    },
    {
      title: "Business Market Research",
      description: "Professional market analysis and feasibility studies for startups and established firms.",
      icon: "fa-chart-line",
      price: "Contact for Quote"
    },
    {
      title: "Data Analysis",
      description: "Expert statistical analysis using SPSS, Stata, and Python with detailed interpretation.",
      icon: "fa-database",
      price: "Fast Turnaround"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6">
            Get Your Research <br/>
            <span className="text-emerald-700">Done Right.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Premium Academic & Market Research Services. We handle the data, you get the results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={getWhatsappUrl()} className="px-8 py-4 bg-emerald-700 text-white rounded-full font-bold shadow-lg hover:bg-emerald-800 transition transform hover:scale-105">
              Order My Service Now
            </a>
            <a href="#services" className="px-8 py-4 bg-white text-emerald-800 border border-emerald-200 rounded-full font-bold hover:bg-emerald-50 transition">
              View Services
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-emerald-700 text-2xl group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                <i className={`fas ${s.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-slate-600 mb-6">{s.description}</p>
              <p className="text-emerald-600 font-bold mb-6">{s.price}</p>
              <a href={getWhatsappUrl(s.title)} className="inline-block w-full text-center py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-emerald-700 transition">
                Order Now
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Chat with our AI Strategist</h2>
            <p className="text-slate-600">Get instant advice on your project topic or business idea before you order.</p>
          </div>
          <AIConsultant />
        </div>
      </section>

      <footer className="py-12 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Uncle Blessing Research Institute. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
