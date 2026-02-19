
import { Vehicle, VehicleType } from './types';

export const vehicles: Vehicle[] = [
  {
    id: 'ignis',
    name: 'Maruti Ignis',
    type: VehicleType.CAR,
    category: 'Compact Hatchback',
    prices: { automatic: 1200, manual: 1600 },
    deposit: 3000,
    image: 'https://images.unsplash.com/photo-1624564858031-6e3e536104e1?auto=format&fit=crop&q=80&w=800',
    fuel: 'Petrol',
    seats: 5,
    features: ['Compact Design', 'Touchscreen', 'Reverse Sensors']
  },
  {
    id: 'swift',
    name: 'Maruti Swift',
    type: VehicleType.CAR,
    category: 'Premium Hatchback',
    prices: { automatic: 1600, manual: 1200 },
    deposit: 3000,
    image: 'https://images.unsplash.com/photo-1631481358042-3e3c042217f2?auto=format&fit=crop&q=80&w=800',
    fuel: 'Petrol',
    seats: 5,
    features: ['Sporty Drive', 'Keyless Entry', 'Bluetooth']
  },
  {
    id: 'mercedes_c300',
    name: "Mercedes-Benz C300",
    type: VehicleType.CAR,
    category: "Luxury Sedan",
    prices: { automatic: 20000 },
    deposit: 10000,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800",
    fuel: "Petrol",
    seats: 5,
    features: ["Luxury convertible", "Sunroof", "Premium Sound"]
  },
  {
    id: 'baleno',
    name: 'Maruti Baleno',
    type: VehicleType.CAR,
    category: 'Luxury Hatchback',
    prices: { manual: 1300, automatic: 1500 },
    deposit: 3000,
    image: 'https://images.unsplash.com/photo-1616091216791-a5360b5fc58e?auto=format&fit=crop&q=80&w=800',
    fuel: 'Petrol',
    seats: 5,
    features: ['Spacious Cabin', '360 Camera', 'Cruise Control']
  },
  {
    id: 'creta',
    name: 'Hyundai Creta',
    type: VehicleType.CAR,
    category: 'Premium SUV',
    prices: { automatic: 3500, manual: 3000 },
    deposit: 5000,
    image: 'https://images.unsplash.com/photo-1621434934509-322479e394f4?auto=format&fit=crop&q=80&w=800',
    fuel: 'Diesel',
    seats: 5,
    features: ['Panoramic Sunroof', 'Ventilated Seats', 'Bose Speakers']
  },
  {
    id: 'ertiga',
    name: 'Maruti Ertiga',
    type: VehicleType.CAR,
    category: 'MUV / 7 Seater',
    prices: { manual: 2300, automatic: 2800 },
    deposit: 3000,
    image: 'https://images.unsplash.com/photo-1673891780004-897d91e6005c?auto=format&fit=crop&q=80&w=800',
    fuel: 'Petrol',
    seats: 7,
    features: ['Perfect for Families', 'Rear AC Vents', 'Flexible Seating']
  },
  {
    id: 'thar-roxx',
    name: 'Mahindra Thar Roxx',
    type: VehicleType.CAR,
    category: 'Premium 4x4 SUV',
    prices: { automatic: 7000 },
    deposit: 5000,
    image: 'https://images.unsplash.com/photo-1662973161314-256191b48b64?auto=format&fit=crop&q=80&w=800',
    fuel: 'Diesel',
    seats: 5,
    features: ['Automatic Only', 'Premium Interiors', '4x4']
  },
  {
    id: 'fortuner',
    name: 'Toyota Fortuner',
    type: VehicleType.CAR,
    category: 'Luxury SUV',
    prices: { automatic: 9000 },
    deposit: 5000,
    image: 'https://images.unsplash.com/photo-1623945763595-36427387b32d?auto=format&fit=crop&q=80&w=800',
    fuel: 'Diesel',
    seats: 7,
    features: ['Road Dominance', 'VIP Presence']
  },
  {
    id: 'hunter',
    name: 'RE Hunter 350',
    type: VehicleType.BIKE,
    category: 'Cruiser',
    prices: { manual: 2000 },
    deposit: 2000,
    image: 'https://images.unsplash.com/photo-1689599943500-0f73b9e5b78b?auto=format&fit=crop&q=80&w=800',
    fuel: 'Petrol',
    seats: 2,
    features: ['Modern Retro', 'Punchy Engine']
  },
  {
    id: 'bullet',
    name: 'RE Bullet 350',
    type: VehicleType.BIKE,
    category: 'Classic',
    prices: { manual: 2000 },
    deposit: 2000,
    image: 'https://images.unsplash.com/photo-1655179552613-4532b003cd50?auto=format&fit=crop&q=80&w=800',
    fuel: 'Petrol',
    seats: 2,
    features: ['Iconic Thump', 'Vintage Design']
  }
];
