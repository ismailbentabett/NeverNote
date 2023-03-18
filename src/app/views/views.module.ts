import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { DocumentPageModule } from '../components/document/document.module';



@NgModule({
  declarations: [UpdateComponent , CreateComponent],
  imports: [
    CommonModule,
    DocumentPageModule
  ],
  exports: [UpdateComponent , CreateComponent]
})
export class ViewsModule { }
