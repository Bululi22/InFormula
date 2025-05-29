import { Component, inject, signal } from '@angular/core';
import { GeneralService } from '../../../../shared/service/general.service';
import { ConstructorsChampionship } from './../../../../shared/interfaces/models/constructorschampionship-interface';
import { FlagPipe } from '../../../../pipes/flag.pipe';

@Component({
  selector: 'app-home-constructor-podium',
  templateUrl: './home-constructor-podium.component.html',
  imports: [FlagPipe],
})
export class HomeConstructorPodiumComponent {
  generalService = inject(GeneralService);

  constructorsChampionship = signal<ConstructorsChampionship[]>([]);

  constructor() {
    this.generalService.searchConstructorsChampionship().subscribe((res) => {
      this.constructorsChampionship.set(
        res.constructors_championship.slice(0, 3)
      );
    });
  }
}
