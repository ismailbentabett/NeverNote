import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountTab } from './account-tab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AccountTabRoutingModule } from './account-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AccountTabRoutingModule
  ],
  declarations: [AccountTab]
})
export class AccountTabModule {}
