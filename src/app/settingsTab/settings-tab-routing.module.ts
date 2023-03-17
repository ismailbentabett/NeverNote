import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsTab } from './settings-tab.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsTab,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsTabRoutingModule {}
