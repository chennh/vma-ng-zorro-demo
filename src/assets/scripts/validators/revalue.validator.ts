import { AbstractControl } from '@angular/forms'
import { Validator } from './validator'

export type RevalueControlOrFn = AbstractControl | (() => AbstractControl)

export function revalueValidatorFactory(revalueControlOrFn: RevalueControlOrFn, message?: string): Validator {
  let bindRevalueControlSubscribe = false
  return (control) => {
    const value = String(control.value).trim()
    if (!value) {
      return null
    }

    const revalueControl = typeof revalueControlOrFn === 'function' ? revalueControlOrFn() : revalueControlOrFn
    if (!bindRevalueControlSubscribe) {
      // TODO 此处带优化，如何取消监听
      revalueControl.valueChanges.subscribe(() => {
        if (control) {
          control.updateValueAndValidity()
        }
      })
      bindRevalueControlSubscribe = true
    }
    const revalue = String(revalueControl.value).trim()
    if (value !== revalue) {
      return {
        revalue: {
          message: message || '两次输入值一致',
        }
      }
    }
    return null
  }
}

export const revalueValidator: (revalueControl: RevalueControlOrFn) => Validator
  = (revalueControl) => revalueValidatorFactory(revalueControl)
