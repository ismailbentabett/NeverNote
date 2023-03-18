import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { IonicModule } from '@ionic/angular';
import { FormModalComponent } from './form-modal/form-modal.component';

//form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewsModule } from '../views/views.module';

@NgModule({
  declarations: [
    AccountComponent,
    FormModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    ViewsModule

  ],
  exports: [
    AccountComponent,
    FormModalComponent
  ],

})
export class ComponentsModule { }
