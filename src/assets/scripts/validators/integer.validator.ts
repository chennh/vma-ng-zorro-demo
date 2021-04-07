import { Validator, ValidatorFactory, regExpValidatorFactory } from './validator'

export const integerReg = /^-?\d+$/

export const integerValidatorFactory: ValidatorFactory<string> = regExpValidatorFactory(integerReg, {
  integer: {
    message: '请输入正确的整数值'
  }
}, (err, message) => message ? (err.integer.message = message, err) : err)

export const integerValidator: Validator = integerValidatorFactory('')
