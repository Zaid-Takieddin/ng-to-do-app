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
      console.log(this.low, this.high, this.open);
    });

    // example
    const myChart2 = new Chart('myChart', {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
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
            yAxisID: 'y',
          },
          {
            label: 'high',
            data: this.high,
            borderWidth: 2,
            borderColor: 'skyblue',
            yAxisID: 'y1',
          },
          {
            label: 'low',
            data: this.low,
            borderWidth: 2,
            borderColor: 'yellow',
            yAxisID: 'y2',
          },
        ],
      },
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
          },
          y2: {
            type: 'linear',
            display: true,
            position: 'right',
          },
        },
      },
    });
  }
}
