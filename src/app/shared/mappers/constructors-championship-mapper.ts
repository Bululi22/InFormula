import { RESTTeam } from './../interfaces/rest-models/rest-constructors-championship-interfaces';
import {
  ConstructorsChampionship,
  ConstructorsChampionshipGeneral,
  Team,
} from '../interfaces/models/constructorschampionship-interface';
import {
  RESTConstructorsChampionship,
  RESTConstructorsChampionshipGeneral,
} from '../interfaces/rest-models/rest-constructors-championship-interfaces';

export class ConstructorsChampionshipMapper {
  static mapRestConstructorsChampionshipGeneralToConstructorsChampionshipGeneral(
    restConstructorsChampionship: RESTConstructorsChampionshipGeneral
  ): ConstructorsChampionshipGeneral {
    return {
      season: restConstructorsChampionship.season,
      constructors_championship:
        restConstructorsChampionship.constructors_championship,
    };
  }

  private static mapConstructorsChampionship(
    restConstructorsChampionship: RESTConstructorsChampionship
  ): ConstructorsChampionship {
    return {
      teamId: restConstructorsChampionship.teamId,
      points: restConstructorsChampionship.points,
      position: restConstructorsChampionship.position,
      team: restConstructorsChampionship.team,
    };
  }

  private static mapTeam(restTeam: RESTTeam): Team {
    return {
      teamName: restTeam.teamName,
      country: restTeam.country,
    };
  }
}

//   static mapRestNextRaceToNextRace(restNextRace: RESTNextRace): NextRace {
//     return {
//       season: restNextRace.season,
//       round: restNextRace.round,
//       race: restNextRace.race.map((race) => this.mapRace(race)),
//     };
//   }

//   private static mapRace(restRace: RESTRace): Race {
//     return {
//       raceId: restRace.raceId,
//       championshipId: restRace.championshipId,
//       raceName: restRace.raceName,
//       horarios: this.mapScheduleToHorarios(restRace.schedule),
//     };
//   }

//   private static mapScheduleToHorarios(schedule: any): Horarios {
//     return {
//       race: this.mapFecha(schedule?.race),
//       qualy: this.mapFecha(schedule?.qualy),
//     };
//   }

//   private static mapFecha(fecha: any): FechaRodaje {
//     return {
//       date: fecha?.date ?? null,
//       time: fecha?.time ?? null,
//     };
//   }
// }
