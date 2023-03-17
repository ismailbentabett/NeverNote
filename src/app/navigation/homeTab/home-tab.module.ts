import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeTab } from './home-tab.page';

import { HomeTabRoutingModule } from './home-tab-routing.module';
import { NavigationModule } from '../navigation.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomeTabRoutingModule,
    NavigationModule
  ],
  declarations: [HomeTab]
})
export class HomeTabPageModule {}
