import { Component, inject } from '@angular/core';
import { HomeCountdownComponent } from '../../components/home-countdown/home-countdown.component';
import { HomePodiumComponent } from '../../components/home-podium/home-podium.component';
import { GeneralService } from '../../../shared/service/general.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { HomeDriversListComponent } from '../../components/home-drivers-list/home-drivers-list.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HomeCountdownComponent,
    HomePodiumComponent,
    HomeDriversListComponent,
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  generalService = inject(GeneralService);

  driversGeneralResources = rxResource({
    loader: () => {
      return this.generalService.searchCurrentDrivers();
    },
  });
}
