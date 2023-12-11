import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { QuotesComponent } from './quotes/quotes.component';
import { HousesComponent } from './houses/houses.component';
import { CharacterComponent } from './character/character.component';
import { HouseDetailsComponent } from './houses/house-details/house-details.component';

const routes: Routes = [
  { path: 'houses', component: HousesComponent },
  { path: 'houses/:slug', component: HouseDetailsComponent },
  { path: 'persons', component: PersonsComponent },
  { path: 'persons/:slug', component: CharacterComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: '', redirectTo: '/houses', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
