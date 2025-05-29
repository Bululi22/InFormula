import { Component, inject, signal } from '@angular/core';
import { GeneralService } from '../../../../shared/service/general.service';
import { DriversChampionship } from '../../../../shared/interfaces/models/driverschampionship-interface';
import { CommonModule } from '@angular/common';
import { FlagPipe } from '../../../../pipes/flag.pipe';

@Component({
  selector: 'app-home-driver-championship',
  imports: [CommonModule, FlagPipe],
  templateUrl: './home-driver-championship.component.html',
})
export class HomeDriverChampionshipComponent {
  generalService = inject(GeneralService);

  driversChampionship = signal<DriversChampionship[]>([]);

  constructor() {
    this.generalService
      .searchDriversChampionship()
      .subscribe((driversChampionship) => {
        this.driversChampionship.set(driversChampionship.driversChampionship);
      });
  }
}
