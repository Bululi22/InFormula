import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home/pages/home-page/home-page.component';

@Component({
  selector: 'app-root',
  imports: [HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'f1-app';
}
