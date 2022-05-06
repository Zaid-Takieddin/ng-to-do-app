import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.css'],
})
export class CurrencyExchangeComponent implements OnInit {
  USD!: number;
  EUR!: number;

  constructor() {}

  ngOnInit(): void {}
}
