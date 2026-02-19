
import React from 'react';
import { Vehicle, Transmission, VehicleType } from '../types';

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelect: (v: Vehicle, t: Transmission) => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onSelect }) => {
  const isCar = vehicle.type === VehicleType.CAR;

  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-slate-100 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={vehicle.image} 
          alt={vehicle.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute top-4 left-4">
          <span className="bg-teal-600/90 text-white px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest backdrop-blur-md">
            {vehicle.category}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl shadow-lg">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Security Deposit</p>
          <p className="text-sm font-black text-teal-700">₹{vehicle.deposit}</p>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-black font-serif text-slate-800 mb-2">{vehicle.name}</h3>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center text-slate-500 text-sm font-medium">
            <svg className="w-4 h-4 mr-1.5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            {vehicle.fuel}
          </div>
          <div className="flex items-center text-slate-500 text-sm font-medium">
            <svg className="w-4 h-4 mr-1.5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            {vehicle.seats} Seats
          </div>
        </div>

        <div className="mt-auto space-y-3">
          {vehicle.prices.manual && (
            <button 
              onClick={() => onSelect(vehicle, Transmission.MANUAL)}
              className="w-full bg-slate-50 hover:bg-teal-600 hover:text-white border border-teal-100 py-4 rounded-2xl flex justify-between px-6 transition-all group/btn"
            >
              <span className="font-bold">Manual</span>
              <span className="font-black">₹{vehicle.prices.manual}<small className="font-normal opacity-60 ml-1">/day</small></span>
            </button>
          )}
          {vehicle.prices.automatic && (
            <button 
              onClick={() => onSelect(vehicle, Transmission.AUTOMATIC)}
              className="w-full bg-teal-50 hover:bg-teal-600 hover:text-white border border-teal-600/20 py-4 rounded-2xl flex justify-between px-6 transition-all group/btn"
            >
              <span className="font-bold">Automatic</span>
              <span className="font-black text-teal-800 group-hover/btn:text-white">₹{vehicle.prices.automatic}<small className="font-normal opacity-60 ml-1">/day</small></span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
