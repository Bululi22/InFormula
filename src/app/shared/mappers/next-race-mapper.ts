import {
  NextRace,
  Race,
  Horarios,
  FechaRodaje,
} from '../interfaces/models/next-race-interface';
import {
  RESTNextRace,
  RESTRace,
} from '../interfaces/rest-models/rest-next-race-interfaces';

export class NextRaceMapper {
  static mapRestNextRaceToNextRace(restNextRace: RESTNextRace): NextRace {
    return {
      season: restNextRace.season,
      round: restNextRace.round,
      race: restNextRace.race.map((race) => this.mapRace(race)),
    };
  }

  private static mapRace(restRace: RESTRace): Race {
    return {
      raceId: restRace.raceId,
      championshipId: restRace.championshipId,
      raceName: restRace.raceName,
      horarios: this.mapScheduleToHorarios(restRace.schedule),
    };
  }

  private static mapScheduleToHorarios(schedule: any): Horarios {
    return {
      race: this.mapFecha(schedule?.race),
      qualy: this.mapFecha(schedule?.qualy),
    };
  }

  private static mapFecha(fecha: any): FechaRodaje {
    return {
      date: fecha?.date ?? null,
      time: fecha?.time ?? null,
    };
  }
}
