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
  time: any = [];
  open: any = [];
  high: any = [];
  low: any = [];

  constructor(private chartService: ChartService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.chartService.getData().subscribe((res: any) => {
      this.data = res;
      this.dataSource = this.data['Time Series (5min)'];
      this.time = Object.keys(this.dataSource);
      for (let i = 0; i < this.time.length; i++) {
        this.open.push(Object.values(this.dataSource[this.time[i]])[0]);
        this.high.push(Object.values(this.dataSource[this.time[i]])[1]);
        this.low.push(Object.values(this.dataSource[this.time[i]])[2]);
      }
      console.log(this.low);
    });

    const myChart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.time,
        datasets: [
          {
            label: 'open',
            data: this.open,
            borderWidth: 2,
            borderColor: 'crimson',
          },
          {
            label: 'high',
            data: this.high,
            borderWidth: 2,
            borderColor: 'skyblue',
          },
          {
            label: 'low',
            data: this.low,
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
}
