import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map, catchError, throwError, of, tap } from 'rxjs';
import { RESTDriversGeneral } from '../interfaces/rest-models/rest-drivers-general-interfaces';
import { environment } from '../../../environments/environment';
import { DriversGeneralMapper } from '../mappers/drivers-general-mapper';
import { DriversGeneral } from '../interfaces/models/drivers-interface';
import { DriversChampionshipGeneral } from '../interfaces/models/driverschampionship-interface';
import { RESTDriversChampionshipGeneral } from '../interfaces/rest-models/rest-drivers-championship-interfaces';
import { DriversChampionshipMapper } from '../mappers/drivers-championship-mapper';
import { NextRace } from '../interfaces/models/next-race-interface';
import { RESTNextRace } from '../interfaces/rest-models/rest-next-race-interfaces';
import { NextRaceMapper } from '../mappers/next-race-mapper';
import { ConstructorsChampionshipGeneral } from '../interfaces/models/constructorschampionship-interface';
import { RESTConstructorsChampionshipGeneral } from '../interfaces/rest-models/rest-constructors-championship-interfaces';
import { ConstructorsChampionshipMapper } from '../mappers/constructors-championship-mapper';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  private http = inject(HttpClient);
  private driversChampionshipCache?: DriversChampionshipGeneral;
  private constructorsChampionshipCache?: ConstructorsChampionshipGeneral;

  searchCurrentDrivers(): Observable<DriversGeneral> {
    return this.http
      .get<RESTDriversGeneral>(`${environment.f1ApiUrl}/api/current/drivers`)
      .pipe(
        map((restDriversGeneral) =>
          DriversGeneralMapper.mapRestDriversGeneralToDriversGeneral(
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

  searchDriversChampionship(): Observable<DriversChampionshipGeneral> {
    if (this.driversChampionshipCache) {
      return of(this.driversChampionshipCache);
    }
    return this.http
      .get<RESTDriversChampionshipGeneral>(
        `${environment.f1ApiUrl}/api/current/drivers-championship`
      )
      .pipe(
        map((rest) =>
          DriversChampionshipMapper.mapRestDriversChampionshipGeneralToDriversChampionshipGeneral(
            rest
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

  searchNextRace(): Observable<NextRace> {
    return this.http
      .get<RESTNextRace>(`${environment.f1ApiUrl}/api/current/next`)
      .pipe(
        map((rest) => NextRaceMapper.mapRestNextRaceToNextRace(rest)),
        catchError((error) => {
          console.log('Error fetching ', error);
          return throwError(
            () => new Error(`Error en la API, intentelo mas tarde`)
          );
        })
      );
  }

  searchConstructorsChampionship(): Observable<ConstructorsChampionshipGeneral> {
    // Si ya lo tenemos en caché, devolvemos un observable con esos datos
    if (this.constructorsChampionshipCache) {
      return of(this.constructorsChampionshipCache);
    }
    return this.http
      .get<RESTConstructorsChampionshipGeneral>(
        `${environment.f1ApiUrl}/api/current/constructors-championship`
      )
      .pipe(
        map((rest) =>
          ConstructorsChampionshipMapper.mapRestConstructorsChampionshipGeneralToConstructorsChampionshipGeneral(
            rest
          )
        ),
        tap((mappedData) => {
          // Guardamos en caché
          this.constructorsChampionshipCache = mappedData;
        }),
        catchError((error) => {
          console.log('Error fetching ', error);
          return throwError(
            () => new Error(`Error en la API, inténtelo más tarde`)
          );
        })
      );
  }
}
// restDriversChampionshipGeneral
