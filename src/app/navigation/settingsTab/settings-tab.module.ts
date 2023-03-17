import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingsTab } from './settings-tab.page';

import { SettingsTabRoutingModule } from './settings-tab-routing.module';
import { NavigationModule } from '../navigation.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SettingsTabRoutingModule,
    NavigationModule
  ],
  declarations: [SettingsTab]
})
export class SettingsTabModule {}
