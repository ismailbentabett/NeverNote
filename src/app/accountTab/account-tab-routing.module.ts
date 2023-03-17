import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountTab } from './account-tab.page';

const routes: Routes = [
  {
    path: '',
    component: AccountTab,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountTabRoutingModule {}
