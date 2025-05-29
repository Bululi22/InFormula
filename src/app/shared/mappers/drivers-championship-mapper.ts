import { DriversChampionshipGeneral } from '../interfaces/models/driverschampionship-interface';
import { RESTDriversChampionshipGeneral } from '../interfaces/rest-models/rest-drivers-championship-interfaces';

export class DriversChampionshipMapper {
  static mapRestDriversChampionshipGeneralToDriversChampionshipGeneral(
    restDriversChampionship: RESTDriversChampionshipGeneral
  ): DriversChampionshipGeneral {
    return {
      season: restDriversChampionship.season,
      driversChampionship: restDriversChampionship.drivers_championship,
    };
  }
}

// static mapRestDriversGeneralToDriversGeneral(
//   restDriversGeneral: RESTDriversGeneral
// ): DriversGeneral {
//   return {
//     season: restDriversGeneral.season,
//     drivers: restDriversGeneral.drivers,
//   };
// }
