import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeTab } from './home-tab.page';

import { HomeTabRoutingModule } from './home-tab-routing.module';
import { NavigationModule } from '../navigation.module';
import { DocumentPageModule } from 'src/app/components/document/document.module';
import { HomePageModule } from 'src/app/components/home/home.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomeTabRoutingModule,
    NavigationModule,
    DocumentPageModule,
    HomePageModule
  ],
  declarations: [HomeTab]
})
export class HomeTabPageModule {}
