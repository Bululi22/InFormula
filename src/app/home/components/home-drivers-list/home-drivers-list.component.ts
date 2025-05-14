import { Component, input } from '@angular/core';
import { DriversGeneral } from '../../../shared/interfaces/drivers-interface';

@Component({
  selector: 'app-home-drivers-list',
  imports: [],
  templateUrl: './home-drivers-list.component.html',
})
export class HomeDriversListComponent {
  driversGeneral = input.required<DriversGeneral[]>();
}
