import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { House } from '../models/house'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class HousesService {
  apiUrl = 'https://api.gameofthronesquotes.xyz/v1/houses';
  constructor(private httpClient: HttpClient) {}

  getHouses(): Observable<House[]> {
   return this.httpClient
      .get<House[]>(this.apiUrl)
  }
}