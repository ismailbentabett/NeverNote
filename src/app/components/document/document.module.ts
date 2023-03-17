import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentPageRoutingModule } from './document-routing.module';

import { DocumentPage } from './document.page';
import { QuillModule } from 'ngx-quill';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentPageRoutingModule,
    QuillModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DocumentPage],
  exports: [DocumentPage]
})
export class DocumentPageModule {}
