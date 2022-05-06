import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  data!: Object;
  dataSource!: Object;

  constructor(private chartService: ChartService) {
    const chartData = [
      {
        label: 'Venezuela',
        value: '290',
      },
      {
        label: 'Saudi',
        value: '260',
      },
      {
        label: 'Canada',
        value: '180',
      },
      {
        label: 'Iran',
        value: '140',
      },
      {
        label: 'Russia',
        value: '115',
      },
      {
        label: 'UAE',
        value: '100',
      },
      {
        label: 'US',
        value: '30',
      },
      {
        label: 'China',
        value: '30',
      },
    ];

    const dataSource = {
      chart: {
        caption: 'Countries With Most Oil Reserves [2017-18]',

        subCaption: 'In MMbbl = One Million barrels',

        xAxisName: 'Country',

        yAxisName: 'Reserves (MMbbl)',
        numberSuffix: 'K',
        theme: 'fusion',
      },
      data: chartData,
    };
    this.dataSource = dataSource;
  }

  ngOnInit(): void {
    // this.chartService.getData(this);
    // this.setData(this);
    this.chartService.getData2().subscribe((res: Object) => (this.data = res));
    console.log(this.data);
  }

  public setData(data: any) {
    this.data = data;
  }
}
