import { NgModule } from '@angular/core'

import { LoginComponent } from './login.component'
import { LoginRoutingModule } from './login-routing.module'
import { LoginFormInputComponent } from './login-form-input/login-form-input.component'
import { LoginBoxMobileComponent } from './login-box-mobile/login-box-mobile.component'
import { LoginBoxPasswordComponent } from './login-box-password/login-box-password.component'
import { LoginNavComponent } from './login-nav/login-nav.component'
import { AllModule } from 'app/modules/all.module'



@NgModule({
  declarations: [
    LoginComponent,
    LoginFormInputComponent,
    LoginBoxMobileComponent,
    LoginBoxPasswordComponent,
    LoginNavComponent
  ],
  imports: [
    AllModule,
    LoginRoutingModule,
  ],
})
export class LoginModule { }
