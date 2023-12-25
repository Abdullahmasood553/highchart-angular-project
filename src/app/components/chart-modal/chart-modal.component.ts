import { Component, EventEmitter, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChartService } from '../../services/chart.service';
import { Chart } from '../../models/Chart';

@Component({
  selector: 'app-chart-modal',
  templateUrl: './chart-modal.component.html',
  styleUrls: ['./chart-modal.component.css'],
})
export class ChartModalComponent {
  @Input() modalTitle: string = '';
  @Input() chart: Chart | undefined;
  chartData: Chart = {
    id: null,
    name: '',
    color: '',
    type: '',
  };
  chartAdded: EventEmitter<Chart> = new EventEmitter<Chart>();

  constructor(
    public activeModal: NgbActiveModal,
    private chartService: ChartService
  ) {
    if (this.chart) {
      this.chartData = { ...this.chart };
    }
  }

  onSave() {
    if (!this.chartData.id) {
      this.chartService.addChart(this.chartData);
    } else {
      this.chartService.updateChart(this.chartData.id, this.chartData);
    }
    console.log('Chart Saved and event emitted');
    this.activeModal.close('Saved');
  }

  onColorSelect(color: string) {
    this.chartData.color = color;
  }

  onChartTypeChange() {
    console.log(this.chartData);
  }
}
