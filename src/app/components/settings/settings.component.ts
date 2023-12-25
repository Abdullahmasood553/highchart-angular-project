import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChartService } from '../../services/chart.service';
import { ChartModalComponent } from '../chart-modal/chart-modal.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent {
  charts: any[] = [];

  constructor(private modalService: NgbModal, private chartService: ChartService) {
    this.charts = this.chartService.getCharts();
  }

  openChartModal(chart?: any) {
  const modalRef = this.modalService.open(ChartModalComponent);    
   modalRef.componentInstance.chartData = chart ? { ...chart } : { color: '#000000' };
  }

  removeChart(index: number) {
    this.chartService.removeChart(index);
    this.charts = this.chartService.getCharts();
  }

  
   createNewChart(chartType: string) {
    const newChart = {
      id: this.generateUniqueId(),
      name: 'New Chart',
      type: chartType,
      color: this.chartService.selectedColor || '#000000',
    };

    this.chartService.addChart(newChart);
    this.charts = this.chartService.getCharts();
  }

  generateUniqueId(): number {
    return this.charts.length + 1;
  }

}
