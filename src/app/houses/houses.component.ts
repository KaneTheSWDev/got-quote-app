import { Component, OnInit } from '@angular/core'
import { HousesService } from '../services/houses.service'
import { House } from '../models/house'
import { debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap } from 'rxjs'

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss'],
})
export class HousesComponent implements OnInit {

  houses: House[] = []
  filteredHouses: House[] = [];

  searchValue: string = ''
  private searchSubject = new Subject<string>()

  constructor(private housesService: HousesService) {
    this.setupSearch()
  }

  ngOnInit() {
    this.housesService.getHouses().subscribe((houses) => {
      this.houses = houses
      this.filteredHouses = houses
      console.log(this.houses)
    })
  }

  setupSearch() {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.searchItems(term)),
    ).subscribe(results => {
      this.filteredHouses = results
    })
  }

  private searchItems(term: string): Observable<House[]> {
    const filteredItems = this.houses.filter(item => item.name.toLowerCase().includes(term.toLowerCase()))
    return of(filteredItems)
  }

  onSearchInput() {
    this.searchSubject.next(this.searchValue)
  }

  clearSearch() {
    this.searchValue = ''
    this.filteredHouses = this.houses
  }
}
