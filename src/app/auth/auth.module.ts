import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './home-tab-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [LoginComponent , SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [LoginComponent , SignupComponent]
})
export class AuthModule { }
