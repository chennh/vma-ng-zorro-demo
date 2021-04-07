import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import LoginREQ from '@/api/common/v1.0/definitions/LoginREQ'
import { FormBuilder, AbstractControl, Validators } from '@angular/forms'
import { eachOwn } from '@/utils'

@Component({
  selector: 'app-login-box-password',
  templateUrl: './login-box-password.component.html',
  styleUrls: ['./login-box-password.component.scss']
})
export class LoginBoxPasswordComponent implements OnInit {

  @Output()
  loginEvt = new EventEmitter<LoginREQ>()

  formBuilder = new FormBuilder()

  entity = new LoginREQ()

  loginForm = this.formBuilder.group({
    mobile: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

  get mobile(): AbstractControl {
    return this.loginForm.get('mobile') as AbstractControl
  }

  get password(): AbstractControl {
    return this.loginForm.get('password') as AbstractControl
  }

  constructor() { }

  ngOnInit(): void {
  }

  login(): void {
    if (this.loginForm.valid) {
      this.loginEvt.emit(this.entity)
    } else {
      eachOwn(this.loginForm.controls, control => {
        control.markAsDirty()
        control.updateValueAndValidity()
      })
    }
  }

}
