export interface DriversChampionshipGeneral {
  season: number;
  driversChampionship: DriversChampionship[];
}

export interface DriversChampionship {
  classificationId: number;
  driverId: string;
  teamId: string;
  points: number;
  position: number;
  wins: number | null;
  driver: Driver;
  team: Team;
}

export interface Driver {
  name: string;
  surname: string;
  nationality: string;
  birthday: string;
  number: number;
  shortName: string;
  url: string;
}

export interface Team {
  teamId: string;
  teamName: string;
  country: string;
  firstAppareance: number;
  constructorsChampionships: number | null;
  driversChampionships: number | null;
  url: string;
}
