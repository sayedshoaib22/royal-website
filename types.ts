
export enum VehicleType {
  CAR = 'car',
  BIKE = 'bike'
}

export enum Transmission {
  MANUAL = 'Manual',
  AUTOMATIC = 'Automatic',
  AUTO_ONLY = 'Automatic Only'
}

export interface Pricing {
  manual?: number;
  automatic?: number;
}

export interface Vehicle {
  id: string;
  name: string;
  type: VehicleType;
  category: string;
  prices: Pricing;
  deposit: number;
  image: string;
  fuel: string;
  seats: number;
  features: string[];
}

export interface BookingData {
  name: string;
  phone: string;
  pickup: string;
  date: string;
  duration: number;
  transmission: Transmission;
  vehicleId: string;
}
