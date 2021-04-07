import { Validator, ValidatorFactory, regExpValidatorFactory } from './validator'

export const passwordReg = /^(?!\d+$)(?![a-z]+$)(?![A-Z]+$)(?!_+$).{6,16}$/

export const passwordValidatorFactory: ValidatorFactory<string> = regExpValidatorFactory(passwordReg, {
  password: {
    message: '请输入6-16位大写字母、小写字母、数字、下划线中任意至少两种组合'
  }
}, (err, message) => message ? (err.password.message = message, err) : err)

export const passwordValidator: Validator = passwordValidatorFactory('')
