import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { AppBarComponent } from './appBar/app-bar.component';
@NgModule({
  declarations: [AppBarComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [AppBarComponent]
})
export class NavigationModule { }
