import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { DocumentPageModule } from '../components/document/document.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [UpdateComponent , CreateComponent],
  imports: [
    CommonModule,
    DocumentPageModule,
    IonicModule
  ],
  exports: [UpdateComponent , CreateComponent]
})
export class ViewsModule { }
