import { Component, inject, signal } from '@angular/core';
import { HomeCountdownComponent } from '../../components/home-countdown/home-countdown.component';
import { GeneralService } from '../../../shared/service/general.service';
import { HomeDriverChampionshipComponent } from '../../components/home-drivers/home-driver-championship/home-driver-championship.component';
import { HomePodiumDriverComponent } from '../../components/home-drivers/home-driver-podium/home-driver-podium.component';
import { HomeConstructorPodiumComponent } from '../../components/home-constructors/home-constructor-podium/home-constructor-podium.component';
import { HomeConstructorsChampionshipComponent } from '../../components/home-constructors/home-constructors-championship/home-constructors-championship.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HomeCountdownComponent,
    HomeDriverChampionshipComponent,
    HomePodiumDriverComponent,
    HomeConstructorPodiumComponent,
    HomeConstructorsChampionshipComponent,
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  generalService = inject(GeneralService);

  onSearch() {
    console.log(this.generalService.searchCurrentDrivers());
  }

  activeTab = signal<'pilots' | 'constructors'>('pilots');
}
