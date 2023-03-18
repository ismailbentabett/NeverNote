import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { IonicModule } from '@ionic/angular';
import { FormModalComponent } from './form-modal/form-modal.component';

//form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewsModule } from '../views/views.module';
import { NoteGridComponent } from './note-grid/note-grid.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { JsonDestringifyPipe } from '../pipes/json-destringify.pipe';

@NgModule({
  declarations: [
    AccountComponent,
    FormModalComponent,
    NoteGridComponent,
    NoteItemComponent,
    JsonDestringifyPipe
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
    FormModalComponent,
    NoteGridComponent,

  ],

})
export class ComponentsModule { }
