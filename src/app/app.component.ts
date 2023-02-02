import { Component } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Nasa';
  public 'imgOfTheDay': { hdurl: string };

  constructor(public nasaService: NasaService) {}

  ngOnInit(): void {
    this.nasaService
      .getImageOfTheDay()
      .subscribe((data) => (this.imgOfTheDay = data));
  }
}
