export interface IChassis {
  garageId: number;
  unitId: number;
  section: string;
  condition: boolean;
  make: string;
  model: string;
  cab: string;
  sleeper: boolean;
  vin: string;
  vinLastSix: string;
  engineHours: number;
  mileage: number;
  description: string;
  category: string;
  subCategory1: string;
  subCategory2: string;
  displayOnWeb: boolean;
  inServiceDate: Date;
  warranty: boolean;
}

export interface IEngineTransExhaust {
  garageId: number;
  unitId: number;
  section: string;
  enginMake: string;
  engineModel: string;
  mfgDate: Date;
  OEM: boolean;
  serialNumber: string;
  remanufactured: boolean;
  horsepower: number;
  engineJakeBrake: boolean;
  exhaustBrake: boolean;
  transmissionType: string;
  transmissionMake: string;
  transmiisionModel: string;
  numberOfSpeeds: number;
}

export interface IGarage {
  garageID: number;
  businessName: string;
  contactFirstName: string;
  contactLastName: string;
  address1: string;
  address2: string;
  address3: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  phone2: string;
  loginEmail: string;
}
