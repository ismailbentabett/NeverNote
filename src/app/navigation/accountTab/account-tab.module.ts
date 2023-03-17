import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountTab } from './account-tab.page';

import { AccountTabRoutingModule } from './account-tab-routing.module';
import { NavigationModule } from '../navigation.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AccountTabRoutingModule,
    NavigationModule,
    ComponentsModule
  ],
  declarations: [AccountTab]
})
export class AccountTabModule {}
