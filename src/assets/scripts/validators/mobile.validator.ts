import { Validator, regExpValidatorFactory, ValidatorFactory } from './validator'


export const mobileReg = /^1\d{10}$/

export const mobileValidatorFactory: ValidatorFactory<string> = regExpValidatorFactory(mobileReg, {
  mobile: {
    message: '请输入11位手机号码'
  }
}, (err, message) => message ? (err.mobile.message = message, err) : err)

export const mobileValidator: Validator = mobileValidatorFactory('')
