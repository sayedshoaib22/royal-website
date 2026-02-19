
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Booking from './pages/Booking';
import { vehicles as vehicleData } from './data';
import { Vehicle, Transmission, VehicleType } from './types';
import VehicleCard from './components/VehicleCard';

const FleetPage: React.FC<{ type: VehicleType, onSelect: (v: Vehicle, t: Transmission) => void }> = ({ type, onSelect }) => {
  const filtered = vehicleData.filter(v => v.type === type);
  return (
    <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto animate-fade-in">
      <div className="mb-20 text-center">
        <span className="text-teal-600 font-black text-sm uppercase tracking-widest">{type === VehicleType.CAR ? 'Elite Cars' : 'Legendary Bikes'}</span>
        <h1 className="text-5xl md:text-6xl font-black font-serif text-slate-900 mt-2">Browse Our {type === VehicleType.CAR ? 'Fleet' : 'Collection'}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filtered.map(v => <VehicleCard key={v.id} vehicle={v} onSelect={onSelect} />)}
      </div>
    </div>
  );
};

const ContactPage: React.FC = () => (
  <div className="pt-40 pb-32 px-6 max-w-3xl mx-auto text-center animate-fade-in">
    <h1 className="text-5xl font-black font-serif text-slate-900 mb-8">Get In Touch</h1>
    <p className="text-slate-500 text-lg mb-12">Arriving at Madgao? Need help choosing? Our team is available 24/7 via phone and WhatsApp.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100">
        <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
        </div>
        <h3 className="font-black text-xl mb-2">WhatsApp Support</h3>
        <p className="text-teal-600 font-bold">+91 99753 56697</p>
      </div>
      <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100">
        <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        </div>
        <h3 className="font-black text-xl mb-2">Email Us</h3>
        <p className="text-teal-600 font-bold">bookings@royalgoa.com</p>
      </div>
    </div>
  </div>
);

const AppContent: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [selectedTransmission, setSelectedTransmission] = useState<Transmission | null>(null);
  const navigate = useNavigate();

  const handleSelect = (vehicle: Vehicle, transmission: Transmission) => {
    setSelectedVehicle(vehicle);
    setSelectedTransmission(transmission);
    navigate('/booking');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onSelect={handleSelect} />} />
          <Route path="/cars" element={<FleetPage type={VehicleType.CAR} onSelect={handleSelect} />} />
          <Route path="/bikes" element={<FleetPage type={VehicleType.BIKE} onSelect={handleSelect} />} />
          <Route path="/booking" element={<Booking selectedVehicle={selectedVehicle} selectedTransmission={selectedTransmission} />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      
      <footer className="bg-slate-900 text-slate-400 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <h4 className="text-white text-2xl font-black font-serif">RoyalGoa<span className="text-teal-500">.</span></h4>
            <p className="text-sm leading-relaxed">Goa's elite vehicle rental service. Explore the emerald land with unmatched style, comfort, and professional support.</p>
          </div>
          <div>
            <h5 className="text-white font-black mb-6 uppercase tracking-widest text-xs">Quick Links</h5>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="/" className="hover:text-teal-500 transition-colors">Home</a></li>
              <li><a href="#/cars" className="hover:text-teal-500 transition-colors">Premium Cars</a></li>
              <li><a href="#/bikes" className="hover:text-teal-500 transition-colors">Iconic Bikes</a></li>
              <li><a href="#/contact" className="hover:text-teal-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-black mb-6 uppercase tracking-widest text-xs">Pickup Points</h5>
            <ul className="space-y-4 text-sm font-bold">
              <li>Madgao Station</li>
              <li>Mopa Airport</li>
              <li>Dabolim Airport</li>
              <li>Panjim City</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-black mb-6 uppercase tracking-widest text-xs">Contact</h5>
            <ul className="space-y-4 text-sm font-bold">
              <li>+91 99753 56697</li>
              <li>bookings@royalgoa.com</li>
              <li>Madgao Junction, Margao, Goa</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-slate-800 text-center text-[10px] font-black uppercase tracking-[0.3em]">
          © 2024 RoyalGoa Rentals. All Rights Reserved. Professionalism on Wheels.
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a 
        href="https://wa.me/919975356697" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-10 right-10 z-[100] bg-green-500 text-white p-5 rounded-3xl shadow-2xl transition-transform hover:scale-110 active:scale-95 group"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.405 2.436 1.091 3.39l-.715 2.614 2.677-.702c.868.538 1.884.85 2.98.85 3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.767-5.767zm3.39 8.044c-.131.368-.763.702-1.053.74-.29.038-.538.077-.828-.077-.29-.153-1.221-.458-2.329-1.41-.87-.751-1.46-1.678-1.63-1.956-.17-.279-.018-.431.121-.571.126-.126.279-.328.419-.493.14-.164.186-.279.279-.458.093-.186.047-.35-.023-.493-.07-.14-.627-1.517-.859-2.083-.226-.546-.455-.472-.627-.481-.157-.008-.34-.01-.523-.01s-.481.07-.732.338c-.251.27-.96 1.051-.96 2.564s1.102 2.977 1.253 3.181c.153.204 2.169 3.313 5.253 4.646.735.316 1.309.505 1.756.647.737.236 1.41.203 1.94.123.593-.088 1.815-.742 2.071-1.459.256-.717.256-1.332.181-1.459-.074-.127-.279-.204-.571-.35z"/></svg>
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Chat with Us</span>
      </a>
    </div>
  );
};

const App: React.FC = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
