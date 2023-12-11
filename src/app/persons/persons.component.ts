import { Component, OnInit } from '@angular/core'
import { PeopleService } from '../services/people.service'
import { Character } from '../models/character'
import { debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap } from 'rxjs'
import { House } from '../models/house'

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
})
export class PersonsComponent implements OnInit {
  people: Character[] = []
  filteredPeople: Character[] = []
  searchValue: string = ''
  private searchSubject = new Subject<string>()

  constructor(private personsService: PeopleService) {
    this.setupSearch();
  }
  ngOnInit() {
    this.personsService.getPeople().subscribe((people) => {
      this.people = people
      this.filteredPeople = people
      console.log(this.people)
    })
  }


  setupSearch() {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.searchItems(term)),
    ).subscribe(results => {
      this.filteredPeople = results
    })
  }

  private searchItems(term: string): Observable<Character[]> {
    const filteredItems = this.people.filter(character => character.name.toLowerCase().includes(term.toLowerCase()))
    return of(filteredItems)
  }

  onSearchInput() {
    this.searchSubject.next(this.searchValue)
  }

  clearSearch() {
    this.searchValue = ''
    this.filteredPeople = this.people
  }


}
