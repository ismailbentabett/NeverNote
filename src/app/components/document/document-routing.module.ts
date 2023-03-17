import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentPage } from './document.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentPageRoutingModule {}
