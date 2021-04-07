import { Validator, ValidatorFactory, regExpValidatorFactory } from './validator'

export const accountReg = /^[\d|\w|_]{6,16}$/

export const accountValidatorFactory: ValidatorFactory<string> = regExpValidatorFactory(accountReg, {
  account: {
    message: '请输入6-16位数字、字母、下划线组合的账号'
  }
}, (err, message) => message ? (err.account.message = message, err) : err)

export const accountValidator: Validator = accountValidatorFactory('')
