
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { vehicles } from '../data';
import VehicleCard from '../components/VehicleCard';
import { Vehicle, Transmission } from '../types';
import { getTravelRecommendation } from '../services/gemini';

const Home: React.FC<{ onSelect: (v: Vehicle, t: Transmission) => void }> = ({ onSelect }) => {
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const navigate = useNavigate();

  const handleAiAsk = async () => {
    if (!aiPrompt.trim()) return;
    setIsAiLoading(true);
    const res = await getTravelRecommendation(aiPrompt);
    setAiResponse(res || '');
    setIsAiLoading(false);
  };

  const featured = vehicles.slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover brightness-[0.4]" 
            alt="Goa Landscape" 
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 pt-20">
          <div className="space-y-8 animate-fade-up">
            <span className="inline-block bg-teal-500/20 backdrop-blur-md border border-teal-500/30 text-teal-400 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em]">
              Premium Goa Experience
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white font-serif leading-tight">
              Elegance <br /> In <span className="text-teal-500">Motion.</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-lg leading-relaxed font-light">
              Premium car and bike rentals delivered across Goa. Arriving at Madgao Station? We'll have your engine running the moment you step out.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => navigate('/cars')}
                className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-5 rounded-2xl font-black text-lg transition-transform hover:-translate-y-1 shadow-2xl"
              >
                Explore Cars
              </button>
              <button 
                onClick={() => navigate('/bikes')}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-10 py-5 rounded-2xl font-black text-lg transition-all"
              >
                Iconic Bikes
              </button>
            </div>
          </div>

          <div className="hidden lg:block animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass p-10 rounded-[3rem] shadow-2xl border border-white/20 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-600 rounded-2xl flex items-center justify-center">
                  <svg className="text-white w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div>
                  <h4 className="text-slate-900 font-black text-xl">Travel Concierge</h4>
                  <p className="text-slate-500 text-sm">AI Recommendation Assistant</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <textarea 
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder="Tell me your group size and destination..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-teal-500 outline-none h-24 transition-all"
                />
                <button 
                  onClick={handleAiAsk}
                  disabled={isAiLoading}
                  className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black hover:bg-black transition-colors flex items-center justify-center space-x-2"
                >
                  {isAiLoading ? <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span> : <span>Get Recommendation</span>}
                </button>
              </div>

              {aiResponse && (
                <div className="bg-teal-50 border border-teal-100 p-6 rounded-2xl animate-fade-up">
                  <p className="text-teal-900 text-sm leading-relaxed italic">"{aiResponse}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Fleet */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="space-y-4">
              <span className="text-teal-600 font-black text-sm uppercase tracking-widest">Our Fleet</span>
              <h2 className="text-4xl md:text-5xl font-black font-serif text-slate-900">Featured Vehicles</h2>
            </div>
            <button 
              onClick={() => navigate('/cars')}
              className="text-teal-600 font-bold hover:underline flex items-center mt-6 md:mt-0"
            >
              View Full Collection <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featured.map(v => (
              <VehicleCard key={v.id} vehicle={v} onSelect={onSelect} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex space-x-6">
            <div className="flex-shrink-0 w-16 h-16 bg-white rounded-3xl shadow-xl flex items-center justify-center text-teal-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <div className="space-y-2">
              <h4 className="font-black text-xl text-slate-800">Station Pickup</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Swift handovers right outside Madgao platform exit.</p>
            </div>
          </div>
          <div className="flex space-x-6">
            <div className="flex-shrink-0 w-16 h-16 bg-white rounded-3xl shadow-xl flex items-center justify-center text-teal-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <div className="space-y-2">
              <h4 className="font-black text-xl text-slate-800">Zero Hidden Costs</h4>
              <p className="text-slate-500 text-sm leading-relaxed">No surprise fees. Transparent deposits and daily rates.</p>
            </div>
          </div>
          <div className="flex space-x-6">
            <div className="flex-shrink-0 w-16 h-16 bg-white rounded-3xl shadow-xl flex items-center justify-center text-teal-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div className="space-y-2">
              <h4 className="font-black text-xl text-slate-800">24/7 Support</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Dedicated road-side assistance across North & South Goa.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
