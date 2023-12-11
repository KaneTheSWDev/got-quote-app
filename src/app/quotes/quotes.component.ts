import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services/quote.service';
import { Quote } from '../models/quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [];

  constructor(private quoteService: QuoteService) {}
  ngOnInit(): void {
    this.quoteService.getQuotes().subscribe((quotes) => {
      this.quotes = quotes;
      console.log(this.quotes);
    });
  }

  getNewQuotes() {
    this.quotes = [];
    this.quoteService.getQuotes().subscribe((quotes) => {
      this.quotes = quotes;
      console.log(this.quotes);
    });
  }
}
