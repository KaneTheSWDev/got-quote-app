import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { House } from '../models/house'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class HousesService {
  housesApiUrl = 'https://api.gameofthronesquotes.xyz/v1/houses';
  houseDetailsApiUrl = 'https://api.gameofthronesquotes.xyz/v1/house';
  constructor(private httpClient: HttpClient) {}

  getHouses(): Observable<House[]> {
   return this.httpClient
      .get<House[]>(this.housesApiUrl)
  }

  getHouseDetails(slug: string): Observable<House[]> {
    return this.httpClient
      .get<House[]>(`${this.houseDetailsApiUrl}/${slug}`)
  }
}
