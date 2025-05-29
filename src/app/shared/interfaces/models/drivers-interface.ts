export interface DriversGeneral {
  season: number;
  drivers: Drivers[];
}

export interface Drivers {
  driverId: string;
  name: string;
  surname: string;
  nationality: string;
  birthday: string;
  number: number;
  shortName: string;
  url: string;
  teamId: string;
}
