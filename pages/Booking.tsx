
import React, { useState } from 'react';
import { Vehicle, Transmission, BookingData } from '../types';

interface BookingProps {
  selectedVehicle: Vehicle | null;
  selectedTransmission: Transmission | null;
}

const Booking: React.FC<BookingProps> = ({ selectedVehicle, selectedTransmission }) => {
  const [formData, setFormData] = useState<Partial<BookingData>>({
    name: '',
    phone: '',
    pickup: 'Madgao Railway Station (Main Exit)',
    date: '',
    duration: 1,
    transmission: selectedTransmission || undefined
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedVehicle) return;

    const message = `*New Booking Request - RoyalGoa*%0A%0A*Vehicle:* ${selectedVehicle.name}%0A*Transmission:* ${formData.transmission}%0A*Customer:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Pickup:* ${formData.pickup}%0A*Date:* ${formData.date}%0A*Duration:* ${formData.duration} days%0A%0APlease confirm availability.`;
    
    window.open(`https://wa.me/919975356697?text=${message}`, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-32 px-6 flex justify-center items-center min-h-[70vh]">
        <div className="max-w-md w-full glass p-12 rounded-[3rem] shadow-2xl text-center border border-teal-100">
          <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h2 className="text-4xl font-black font-serif text-slate-900 mb-4">Request Sent!</h2>
          <p className="text-slate-500 mb-10 leading-relaxed">Your request has been forwarded to our WhatsApp concierge. We'll reply within minutes!</p>
          <button onClick={() => window.location.href='/'} className="w-full bg-teal-600 text-white py-5 rounded-2xl font-black">Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div>
            <span className="text-teal-600 font-black text-sm uppercase tracking-widest">Final Step</span>
            <h1 className="text-5xl font-black font-serif text-slate-900 mt-2">Book Your Journey</h1>
          </div>

          {selectedVehicle ? (
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-teal-50 flex items-center space-x-8">
              <img src={selectedVehicle.image} alt={selectedVehicle.name} className="w-32 h-32 object-cover rounded-2xl" />
              <div>
                <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">Selected Ride</span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">{selectedVehicle.name}</h3>
                <p className="text-slate-500 font-bold">{formData.transmission} Mode</p>
                <p className="text-teal-600 font-black mt-2">₹{selectedVehicle.prices[formData.transmission?.toLowerCase() as keyof typeof selectedVehicle.prices] || Object.values(selectedVehicle.prices)[0]} /day</p>
              </div>
            </div>
          ) : (
            <div className="p-8 border-2 border-dashed border-slate-200 rounded-[2rem] text-center">
              <p className="text-slate-400 font-bold">No vehicle selected. Please browse our collection.</p>
              <button onClick={() => window.location.href='/cars'} className="mt-4 text-teal-600 font-black hover:underline">View Fleet</button>
            </div>
          )}

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-teal-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <p className="font-bold text-slate-700">Free delivery to Madgao Station Exit</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-teal-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              </div>
              <p className="font-bold text-slate-700">Instant WhatsApp confirmation</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Full Name</label>
                <input required type="text" placeholder="John Doe" className="w-full bg-slate-50 p-5 rounded-2xl border-none outline-none focus:ring-2 focus:ring-teal-500 font-bold" 
                  value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Phone Number</label>
                <input required type="tel" placeholder="+91 99..." className="w-full bg-slate-50 p-5 rounded-2xl border-none outline-none focus:ring-2 focus:ring-teal-500 font-bold" 
                  value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Station / Pickup Point</label>
              <select className="w-full bg-slate-50 p-5 rounded-2xl border-none outline-none focus:ring-2 focus:ring-teal-500 font-bold"
                value={formData.pickup} onChange={(e) => setFormData({...formData, pickup: e.target.value})}>
                <option>Madgao Railway Station (Main Exit)</option>
                <option>Madgao Railway Station (PFC Exit)</option>
                <option>Mopa International Airport</option>
                <option>Dabolim Airport</option>
                <option>Margao City Center</option>
                <option>Colva Beach</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Pickup Date</label>
                <input required type="date" className="w-full bg-slate-50 p-5 rounded-2xl border-none outline-none focus:ring-2 focus:ring-teal-500 font-bold" 
                  value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Duration (Days)</label>
                <input required type="number" min="1" className="w-full bg-slate-50 p-5 rounded-2xl border-none outline-none focus:ring-2 focus:ring-teal-500 font-bold" 
                  value={formData.duration} onChange={(e) => setFormData({...formData, duration: parseInt(e.target.value)})} />
              </div>
            </div>

            {selectedVehicle?.prices.manual && selectedVehicle?.prices.automatic && (
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Selected Mode</label>
                <div className="flex gap-4">
                  {[Transmission.MANUAL, Transmission.AUTOMATIC].map(t => (
                    <button 
                      key={t}
                      type="button"
                      onClick={() => setFormData({...formData, transmission: t})}
                      className={`flex-1 py-4 rounded-2xl font-black border-2 transition-all ${formData.transmission === t ? 'border-teal-600 bg-teal-50 text-teal-700' : 'border-slate-100 bg-white text-slate-400'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button 
              type="submit" 
              disabled={!selectedVehicle}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 rounded-[2rem] font-black text-xl shadow-2xl transition-transform active:scale-95 disabled:opacity-50"
            >
              Confirm via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
