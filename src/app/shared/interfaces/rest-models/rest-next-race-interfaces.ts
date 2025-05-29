export interface RESTNextRace {
  api: string;
  url: string;
  total: number;
  season: number;
  round: number;
  championship: RESTChampionship;
  race: RESTRace[];
}

export interface RESTChampionship {
  championshipId: string;
  championshipName: string;
  url: string;
  year: number;
}

export interface RESTRace {
  raceId: string;
  championshipId: string;
  raceName: string;
  schedule: RESTSchedule;
  laps: number;
  round: number;
  url: string;
  fast_lap: RESTFastLap;
  circuit: RESTCircuit;
  winner: null;
  teamWinner: null;
}

export interface RESTCircuit {
  circuitId: string;
  circuitName: string;
  country: string;
  city: string;
  circuitLength: string;
  lapRecord: string;
  firstParticipationYear: number;
  corners: number;
  fastestLapDriverId: string;
  fastestLapTeamId: string;
  fastestLapYear: number;
  url: string;
}

export interface RESTFastLap {
  fast_lap: null;
  fast_lap_driver_id: null;
  fast_lap_team_id: null;
}

export interface RESTSchedule {
  race: RESTFp1;
  qualy: RESTFp1;
  fp1: RESTFp1;
  fp2: RESTFp1;
  fp3: RESTFp1;
  sprintQualy: RESTFp1;
  sprintRace: RESTFp1;
}

export interface RESTFp1 {
  date: Date | null;
  time: null | string;
}
