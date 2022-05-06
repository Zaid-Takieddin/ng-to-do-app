import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartComponent } from '../components/chart/chart.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  private apiUrl =
    'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=compact&apikey=CTJGIS6X3BF51RGG';
  constructor(private httpClient: HttpClient) {}

  getData(obj: ChartComponent) {
    return this.httpClient
      .get(this.apiUrl)
      .subscribe((res: any) => obj.setData(res));
  }

  getData2() {
    return this.httpClient.get(this.apiUrl);
  }
}
