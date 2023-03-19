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
import { RouterModule } from '@angular/router';
import {
  BrowserModule,
  HammerGestureConfig,
  HammerModule,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';

@NgModule({
  declarations: [
    AccountComponent,
    FormModalComponent,
    NoteGridComponent,
    NoteItemComponent,
    JsonDestringifyPipe,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    ViewsModule,
    RouterModule,
  ],
  exports: [
    AccountComponent,
    FormModalComponent,
    NoteGridComponent,
    NoteItemComponent,
    HammerModule,
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig,
    },
  ],
})
export class ComponentsModule {}
