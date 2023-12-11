import { Component } from '@angular/core';
import { HousesService } from './services/houses.service';
import { QuoteService } from './services/quote.service';
import { PeopleService } from './services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'got-quote-app';

  constructor(
    private peopleService: PeopleService
  ) {
    this.peopleService.getPeople();
  }
}
