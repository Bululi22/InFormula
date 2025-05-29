import { Component, inject, signal } from '@angular/core';
import { GeneralService } from '../../../shared/service/general.service';
import { interval } from 'rxjs';

interface Countdown {
  day: number;
  hour: number;
  min: number;
  sec: number;
}

@Component({
  selector: 'app-home-countdown',
  imports: [],
  templateUrl: './home-countdown.component.html',
})
export class HomeCountdownComponent {
  generalService = inject(GeneralService);

  raceDate = signal<Date | null>(null);
  countdown = signal<Countdown>({ day: 0, hour: 0, min: 0, sec: 0 });
  formattedRaceDate = signal<string>('');
  raceName = signal<string>('');

  constructor() {
    this.generalService.searchNextRace().subscribe((nextRace) => {
      const date = nextRace?.race[0]?.horarios?.race?.date ?? null;
      const time = nextRace?.race[0]?.horarios?.race?.time ?? null;

      if (date && time) {
        // Combina fecha y hora (UTC)
        const fullDate = new Date(`${date}T${time}`);
        this.raceDate.set(fullDate);

        // Fecha en texto completo y mayúsculas: "1 DE JUNIO DE 2025"
        this.formattedRaceDate.set(
          fullDate
            .toLocaleDateString('es-ES', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })
            .toUpperCase()
            .replace(/\sDE\s/g, ' DE ') // por si acaso, para uniformidad
        );
      }

      this.raceName.set(nextRace?.race[0]?.raceName ?? '');
    });

    interval(1000).subscribe(() => {
      const target = this.raceDate()?.getTime();
      if (!target) return;

      const now = new Date().getTime();
      const diff = Math.max(target - now, 0);

      const sec = Math.floor((diff / 1000) % 60);
      const min = Math.floor((diff / (1000 * 60)) % 60);
      const hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const day = Math.floor(diff / (1000 * 60 * 60 * 24));

      this.countdown.set({ day, hour, min, sec });
    });
  }
}
