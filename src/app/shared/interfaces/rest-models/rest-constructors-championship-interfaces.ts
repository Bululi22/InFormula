export interface RESTConstructorsChampionshipGeneral {
  api: string;
  url: string;
  limit: number;
  offset: number;
  total: number;
  season: number;
  championshipId: string;
  constructors_championship: RESTConstructorsChampionship[];
}

export interface RESTConstructorsChampionship {
  classificationId: number;
  teamId: string;
  points: number;
  position: number;
  wins: number | null;
  team: RESTTeam;
}

export interface RESTTeam {
  teamName: string;
  country: string;
  firstAppareance: number;
  constructorsChampionships: number | null;
  driversChampionships: number | null;
  url: string;
}
