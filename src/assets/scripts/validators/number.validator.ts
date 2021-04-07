import { Validator, regExpValidatorFactory, ValidatorFactory } from './validator'

type NumberObj = { num: number, digit: number }
type NumberOptions = number | NumberObj

function resolveOptions(options?: NumberOptions): NumberObj {
  let digit = 2
  let num = 7
  if (typeof options === 'object') {
    digit = options.digit
    num = Math.max(options.num, 1)
  } else if (typeof options === 'number') {
    digit = options
  }
  return {
    digit,
    num,
  }
}

export const numberValidatorFactory: ValidatorFactory<NumberOptions> =
  regExpValidatorFactory((args0) => {
    const { num, digit } = resolveOptions(args0)
    if (digit > 0) {
      return new RegExp(`^-?\\d{1, ${num}}\\.\\d{1, ${digit}}$`)
    }
    return new RegExp(`^-?\\d{1, ${num}}$`)
  }, {
    number: {
      message: '请输入正确的数值'
    }
  }, (err, args0, message) => {
    if (message) {
      err.number.message = message
    }
    return err
  })

export const numberValidator: (options: NumberOptions) => Validator = (options) => numberValidatorFactory(options)
