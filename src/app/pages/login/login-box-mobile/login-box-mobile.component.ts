import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core'
import LoginREQ from '@/api/common/v1.0/definitions/LoginREQ'
import { FormBuilder, AbstractControl, Validators } from '@angular/forms'
import { NzMessageService } from 'ng-zorro-antd/message'
import { eachOwn } from '@/utils'
import { VmaValidators } from '@/assets/scripts/validators/index'
import { LoginFormInputComponent } from '../login-form-input/login-form-input.component'

@Component({
  selector: 'app-login-box-mobile',
  templateUrl: './login-box-mobile.component.html',
  styleUrls: ['./login-box-mobile.component.scss']
})
export class LoginBoxMobileComponent implements OnInit {

  @Output()
  loginEvt = new EventEmitter<LoginREQ>()

  formBuilder = new FormBuilder()

  loginForm = this.formBuilder.group({
    mobile: ['', {
      validators: [Validators.required, VmaValidators.mobileValidator],
      updateOn: 'change'
    }],
    code: ['', [Validators.required, VmaValidators.lengthValidator(4)]],
  }, {
    updateOn: 'blur'
  })

  @ViewChild('codeInput')
  codeInputRef!: LoginFormInputComponent

  get mobile(): AbstractControl {
    return this.loginForm.get('mobile') as AbstractControl
  }

  get code(): AbstractControl {
    return this.loginForm.get('code') as AbstractControl
  }

  get captchaDisabled() {
    return this.mobile.invalid
  }

  constructor(
    private message: NzMessageService,
  ) { }

  ngOnInit(): void {
  }

  sendSMS(): void {
    if (this.mobile.valid) {
      this.message.success('发送成功')
      this.codeInputRef.focus()
    }
  }

  login(): void {
    if (this.loginForm.valid) {
      this.loginEvt.emit(this.loginForm.value)
    } else {
      eachOwn(this.loginForm.controls, control => {
        control.markAsDirty()
        control.updateValueAndValidity()
      })
    }
  }

}
