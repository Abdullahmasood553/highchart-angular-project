import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewModeComponent } from './components/view-mode/view-mode.component';
import { SettingsComponent } from './components/settings/settings.component';


const appRoutes: Routes = [
  { path: 'view-mode', component: ViewModeComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/view-mode', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
