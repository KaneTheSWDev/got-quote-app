import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quote } from '../models/quote';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  apiUrl = 'https://api.gameofthronesquotes.xyz/v1/random/5';
  constructor(private httpClient: HttpClient) {}

  getQuotes(): Observable<Quote[]> {
    return this.httpClient.get<Quote[]>(this.apiUrl);
  }
}
