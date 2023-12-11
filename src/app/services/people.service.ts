import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Character } from '../models/character'

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  apiUrl = 'https://api.gameofthronesquotes.xyz/v1/characters'

  constructor(private httpClient: HttpClient) {
  }

  getPeople(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.apiUrl)
  }
}
