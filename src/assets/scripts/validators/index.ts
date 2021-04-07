import { accountValidator, accountValidatorFactory } from './account.validator'
import { mobileValidator, mobileValidatorFactory } from './mobile.validator'
import { lengthValidator, lengthValidatorFactory } from './length.validator'
import { passwordValidator, passwordValidatorFactory } from './password.validator'
import { integerValidator, integerValidatorFactory } from './integer.validator'
import { revalueValidator, revalueValidatorFactory } from './revalue.validator'
import { numberValidator, numberValidatorFactory } from './number.validator'
import { requiredValidator, requiredValidatorFactory } from './required.validator'

export const VmaValidators = {
  accountValidator,
  accountValidatorFactory,
  mobileValidator,
  mobileValidatorFactory,
  lengthValidator,
  lengthValidatorFactory,
  passwordValidator,
  passwordValidatorFactory,
  integerValidator,
  integerValidatorFactory,
  revalueValidator,
  revalueValidatorFactory,
  numberValidator,
  numberValidatorFactory,
  requiredValidator,
  requiredValidatorFactory,
}
