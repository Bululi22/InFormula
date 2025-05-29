import { DriversGeneral } from '../interfaces/models/drivers-interface';
import { RESTDriversGeneral } from '../interfaces/rest-models/rest-drivers-general-interfaces';

export class DriversGeneralMapper {
  static mapRestDriversGeneralToDriversGeneral(
    restDriversGeneral: RESTDriversGeneral
  ): DriversGeneral {
    return {
      season: restDriversGeneral.season,
      drivers: restDriversGeneral.drivers,
    };
  }

  static mapRestDriversGeneralArrayToDriversGeneralArray(
    restDriversGeneral: RESTDriversGeneral[]
  ): DriversGeneral[] {
    return restDriversGeneral.map(this.mapRestDriversGeneralToDriversGeneral);
  }
}
