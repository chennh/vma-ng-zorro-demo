import { Validator, regExpValidatorFactory, ValidatorFactory } from './validator'


export const requiredReg = /^1\d{10}$/

export function requiredValidatorFactory(message: string): Validator {
  return (control) => {
    const errMessage = { required: { message: message || '不能为空' } }
    if (Array.isArray(control.value)) {
      return control.value.length ? null : errMessage
    } else {
      const value = String(control.value).trim()
      return !!value ? null : errMessage
    }
  }
}


export const requiredValidator: Validator = requiredValidatorFactory('')
