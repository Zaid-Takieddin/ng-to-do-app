import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  data!: any;
  dataSource!: any;
  time!: any;
  open!: any;

  constructor(private chartService: ChartService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.chartService.getData().subscribe((res: any) => {
      this.data = res;
      this.dataSource = this.data['Time Series (5min)'];
      this.time = Object.keys(this.dataSource);
      this.open = Object.keys(this.dataSource);
      console.log(this.dataSource);
    });

    const myChart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.time,
        datasets: [
          {
            label: 'open',
            data: [12, 136, 3, 5, 2, 3],
            borderWidth: 2,
            borderColor: 'crimson',
          },
          {
            label: 'high',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 2,
            borderColor: 'skyblue',
          },
          {
            label: 'low',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 2,
            borderColor: 'yellow',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  public setData(data: any) {
    this.data = data;
  }
}
