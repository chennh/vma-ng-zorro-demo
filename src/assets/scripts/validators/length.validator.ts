import { Validator, regExpValidatorFactory, ValidatorFactory } from './validator'


export const lengthValidatorFactory: ValidatorFactory<number> = regExpValidatorFactory(
  (len) => new RegExp(`^\\d{${len}}$`), {
  length: {
    message: '请输入指定长度的字符'
  }
}, (err, len, message) => {
  if (message) {
    err.length.message = message
  } else {
    err.length.message = `请输入${len}位字符`
  }
  return err
})

export const lengthValidator: (len: number) => Validator = (len) => lengthValidatorFactory(len)
