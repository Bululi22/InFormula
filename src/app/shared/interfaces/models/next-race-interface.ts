export interface NextRace {
  season: number;
  round: number;
  race: Race[];
}

export interface Race {
  raceId: string;
  championshipId: string;
  raceName: string;
  horarios: Horarios;
}

export interface Horarios {
  race: FechaRodaje;
  qualy: FechaRodaje;
}

export interface FechaRodaje {
  date: Date | null;
  time: null | string;
}
