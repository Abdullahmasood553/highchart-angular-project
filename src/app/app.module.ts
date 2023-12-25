import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ViewModeComponent } from './components/view-mode/view-mode.component';
import { FormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartSettingModalComponent } from './components/chart-settings-modal/chart-settings-modal.component';
import { ChartModalComponent } from './components/chart-modal/chart-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SettingsComponent,
    ViewModeComponent,
    ChartSettingModalComponent,
    ChartModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
