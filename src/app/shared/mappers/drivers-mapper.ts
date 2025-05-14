import { DriversGeneral } from '../interfaces/drivers-interface';
import {
  RESTDrivers,
  RESTDriversGeneral,
} from '../interfaces/rest-drivers-interfaces';

export class DriversGeneralMapper {
  static mapRestDriversToDrivers(
    restDriversGeneral: RESTDriversGeneral
  ): DriversGeneral {
    return {
      season: restDriversGeneral.season,
      drivers: restDriversGeneral.drivers,
    };
  }

  static mapRestDriversArrayToDriversArray(
    restDriversGeneral: RESTDriversGeneral[]
  ): DriversGeneral[] {
    return restDriversGeneral.map(this.mapRestDriversToDrivers);
  }
}
