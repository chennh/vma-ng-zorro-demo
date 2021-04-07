import { AbstractControl } from '@angular/forms'

export interface ValidatorObj {
  [key: string]: any
}

export interface ValidatorMessageObj extends ValidatorObj {
  message: string
}

export interface ValidatorErrors extends ValidatorObj {
  [key: string]: ValidatorMessageObj
}

export type Fn<T, R> = (args0: T, ...args: any[]) => R
export type RegExpFn<T> = RegExp | Fn<T, RegExp>
export type ErrorFn<T> = (err: ValidatorErrors, args0?: T, ...args: any[]) => ValidatorErrors
export type Validator = (control: AbstractControl) => ValidatorErrors | null
export type ValidatorFactory<T = void> = Fn<T, Validator>
export type RegExpValidator = (reg: RegExp, err: ValidatorErrors) => Validator
export type RegExpValidatorFactory<T = void> =
  (regOrFn: RegExpFn<T>, err: ValidatorErrors, errFn?: ErrorFn<T>) => ValidatorFactory<T>


export const regExpValidator: RegExpValidator = (reg, err) => (control) => {
  const value = String(control.value).trim()
  return (value && !reg.test(value)) ? err : null
}

export function regExpValidatorFactory<T>(regOrFn: RegExpFn<T>, err: ValidatorErrors, errFn?: ErrorFn<T>)
  : ValidatorFactory<T> {
  return (args0, ...args) => {
    const reg = typeof regOrFn === 'function' ? regOrFn(args0, ...args) : regOrFn
    return (control) => {
      const value = String(control.value).trim()
      return (value && !reg.test(value)) ? (errFn ? errFn(err, args0, ...args) : err) : null
    }
  }
}
