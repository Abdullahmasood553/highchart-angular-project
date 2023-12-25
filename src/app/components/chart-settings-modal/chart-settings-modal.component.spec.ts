import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSettingsModalComponent } from './chart-settings-modal.component';

describe('ChartSettingsModalComponent', () => {
  let component: ChartSettingsModalComponent;
  let fixture: ComponentFixture<ChartSettingsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartSettingsModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartSettingsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
