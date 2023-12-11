import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Character } from '../models/character'

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  charactersApiUrl = 'https://api.gameofthronesquotes.xyz/v1/characters'
  characterApiUrl = 'https://api.gameofthronesquotes.xyz/v1/character'

  constructor(private httpClient: HttpClient) {
  }

  getPeople(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.charactersApiUrl)
  }

  getPerson(slug: string): Observable<Character[]> {
    return this.httpClient.get<Character[]>(`${this.characterApiUrl}/${slug}`)
  }
  
}
