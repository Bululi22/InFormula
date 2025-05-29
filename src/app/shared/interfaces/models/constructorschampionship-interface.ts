export interface ConstructorsChampionshipGeneral {
  season: number;
  constructors_championship: ConstructorsChampionship[];
}

export interface ConstructorsChampionship {
  teamId: string;
  points: number;
  position: number;
  team: Team;
}

export interface Team {
  teamName: string;
  country: string;
}
