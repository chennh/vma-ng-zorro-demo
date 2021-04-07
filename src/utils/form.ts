import { FormGroup } from '@angular/forms'
import { eachOwn } from 'vma-assist/dist/static/js/utils'

export const validateFormGroup = (group: FormGroup) => {
  if (!group.valid) {
    eachOwn(group.controls, (control) => {
      control.markAsDirty()
      control.updateValueAndValidity()
    })
    return false
  }
  return true
}
