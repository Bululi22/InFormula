import { Component, inject, signal } from '@angular/core';
import { ConstructorsChampionship } from '../../../../shared/interfaces/models/constructorschampionship-interface';
import { GeneralService } from '../../../../shared/service/general.service';
import { FlagPipe } from '../../../../pipes/flag.pipe';

@Component({
  selector: 'app-home-constructors-championship',
  imports: [FlagPipe],
  templateUrl: './home-constructors-championship.component.html',
})
export class HomeConstructorsChampionshipComponent {
  generalService = inject(GeneralService);

  constructorsChampionship = signal<ConstructorsChampionship[]>([]);

  constructor() {
    this.generalService.searchConstructorsChampionship().subscribe((res) => {
      this.constructorsChampionship.set(
        res.constructors_championship.slice(
          3,
          res.constructors_championship.length
        )
      );
    });
  }
}
