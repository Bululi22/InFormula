import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import {
  RESTDrivers,
  RESTDriversGeneral,
} from '../interfaces/rest-drivers-interfaces';
import { environment } from '../../../environments/environment';
import { DriversGeneralMapper } from '../mappers/drivers-mapper';
import { DriversGeneral } from '../interfaces/drivers-interface';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  private http = inject(HttpClient);

  searchCurrentDrivers(): Observable<DriversGeneral[]> {
    return this.http
      .get<RESTDriversGeneral[]>(`${environment.f1ApiUrl}/api/current/drivers`)
      .pipe(
        map((restDriversGeneral) =>
          DriversGeneralMapper.mapRestDriversArrayToDriversArray(
            restDriversGeneral
          )
        ),
        catchError((error) => {
          console.log('Error fetching ', error);
          return throwError(
            () => new Error(`Error en la API, intentelo mas tarde`)
          );
        })
      );
  }
}
