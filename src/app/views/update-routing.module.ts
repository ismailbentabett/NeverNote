import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UpdatePageRoutingModule {}
