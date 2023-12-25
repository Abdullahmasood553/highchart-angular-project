
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-chart-setting-modal',
  templateUrl: './chart-settings-modal.component.html',
  styleUrls: ['./chart-settings-modal.component.css']
})
export class ChartSettingModalComponent {
  @Input() chart: any;

  constructor(public activeModal: NgbActiveModal) {}

  onSaveClick() {
    this.activeModal.close();
  }

  onCancelClick() {
    this.activeModal.dismiss('cancel');
  }
}
