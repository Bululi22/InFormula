import { Component, computed, inject, signal } from '@angular/core';
import { GeneralService } from '../../../../shared/service/general.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { DriversChampionship } from '../../../../shared/interfaces/models/driverschampionship-interface';
import { FlagPipe } from '../../../../pipes/flag.pipe';

@Component({
  selector: 'app-home-driver-podium',
  imports: [CommonModule, FlagPipe],
  templateUrl: './home-driver-podium.component.html',
})
export class HomePodiumDriverComponent {
  generalService = inject(GeneralService);

  driversChampionship = signal<DriversChampionship[]>([]);

  constructor() {
    this.generalService.searchDriversChampionship().subscribe((res) => {
      this.driversChampionship.set(res.driversChampionship.slice(0, 3));
    });
  }

  driverImg(name: string, surname: string): string {
    const nombre = name.substring(0, 3).toLowerCase() || '';
    const apellido = surname.substring(0, 3).toLowerCase() || '';
    return nombre + apellido + '01.avif';
  }

  imagenSilueta(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'images/silueta.png';
  }
}
