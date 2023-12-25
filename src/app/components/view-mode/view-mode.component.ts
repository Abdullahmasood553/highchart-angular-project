import { Component } from '@angular/core';
import Highcharts from 'highcharts';
import { ChartService } from '../../services/chart.service';
import { Chart } from '../../models/Chart';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-view-mode',
  templateUrl: './view-mode.component.html',
  styleUrls: ['./view-mode.component.css'],
})
export class ViewModeComponent {
  Highcharts: typeof Highcharts = Highcharts;
   charts: Chart[] = [];

  $charts = new Observable<Chart[]>();
  allChartData: any[] = [];
  startDate: string = '';
  endDate: string = '';
  updateFlag = false;
  constructor(private chartService: ChartService) {

    this.ngOnInit();
    this.chartService.$getCharts
      .pipe(
        tap((values) => {
          console.log(values);

          return values;
        })
      )
      .subscribe({
        next: (val: Chart[]) => {
          this.updateFlag = false;
          this.charts = val.map((chart) => {
            chart.options = this.createOption(
              chart.color,
              chart.type,
              chart.name
            );
            return chart;
          });
          this.updateFlag = true;
          console.log('at Subscriber ' , this.charts);
        },
      });

    
  }

  ngOnInit() {
    this.allChartData = [
      { value: 10, date: '2023-01-01' },
      { value: 15, date: '2023-01-02' },
      { value: 20, date: '2023-01-03' },
      { value: 40, date: '2023-01-05' },
      { value: 50, date: '2023-01-07' },
      { value: 60, date: '2023-01-11' },
      { value: 30, date: '2023-01-22' },
    ];

  }

  updateChartData(color?: string, chartType?: string) {
    console.log('Received Color:', color);
    console.log('Chart Type:', chartType);

    this.chartService.setSelectedColor(color!);
    this.chartService.setSelectedChartType(chartType!);

  }

  createOption(color: string, chartType: string, name: string) {
    console.log('Received Color:', color);
    console.log('Chart Type:', chartType);
    console.log('Chart Name', name);
    


    const filteredData = this.filterData();
    const seriesData = filteredData.map((item) => ({
      x: new Date(item.date).getTime(),
      y: item.value,
    }));

    const chartOptions = {
      accessibility: {
        enabled: false,
      },
      title: {
        text: name,
      },
      xAxis: {
        type: 'datetime',
        title: {
          text: 'Date',
        },
      },
      yAxis: {
        title: {
          text: 'Value',
        },
      },
      series: [
        {
          name: name || 'Value',
          data: seriesData,
          color: color || 'red',
          type: chartType || 'line',
        },
      ],
    };
    return chartOptions;

  }

  filterData() {
    return this.allChartData.filter((item) => {
      const itemDate = new Date(item.date).getTime();
      const startDateTime = this.startDate
        ? new Date(this.startDate).getTime()
        : 0;
      const endDateTime = this.endDate
        ? new Date(this.endDate).getTime()
        : Date.now();

      return itemDate >= startDateTime && itemDate <= endDateTime;
    });
  }

  onDateChange() {
  this.updateChartData(); 
  this.charts = this.charts.map((chart) => {
    chart.options = this.createOption(
      chart.color,
      chart.type,
      chart.name
    );
    return chart;
  });

  this.updateFlag = true;
  }
}
