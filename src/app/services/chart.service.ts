import { EventEmitter, Injectable } from '@angular/core';
import { Chart } from '../models/Chart';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  private charts: Chart[] = [];
  colorSelected: EventEmitter<string> = new EventEmitter<string>();
  chartTypeSelected: EventEmitter<string> = new EventEmitter<string>();
  chartAdded: EventEmitter<void> = new EventEmitter<void>();
  private $charts = new BehaviorSubject<Chart[]>([]);
  selectedColor: string = '';
  selectedChartType: string = '';

  constructor() {}

  getCharts(): Chart[] {
    return this.charts;
  }

  get $getCharts() {
    return this.$charts.asObservable();
  }

  addChart(newChart: Chart): void {
    newChart.id = this.generateUniqueId();
    this.charts.push(newChart);
    this.$charts.next(this.charts);
  }

  updateChart(id: number, updatedChart: Chart): void {
    const index = this.charts.findIndex((chart) => chart.id === id);
    if (index !== -1) {
      this.charts[index] = updatedChart;
    }
    this.$charts.next(this.charts);
  }

  private generateUniqueId(): number {
    return this.charts.length + 1;
  }

  removeChart(index: number): void {
    this.charts.splice(index, 1);
  }

  getChartById(id: number): Chart | null {
    return this.charts.find((chart) => chart.id === id) || null;
  }

  setSelectedColor(color: string): void {
    if (this.selectedColor !== color) {
      this.selectedColor = color;
    }
  }

  setSelectedChartType(chartType: string): void {
    if (this.selectedChartType !== chartType) {
      this.selectedChartType = chartType;
    }
  }
}
