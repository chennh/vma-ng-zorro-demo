import { Component, Input, OnInit, Output, EventEmitter, forwardRef, ViewChild, ElementRef } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'app-login-form-input',
  templateUrl: './login-form-input.component.html',
  styleUrls: ['./login-form-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LoginFormInputComponent),
      multi: true
    }
  ]
})
export class LoginFormInputComponent implements OnInit, ControlValueAccessor {

  @Input()
  icon = ''

  @Input()
  type = 'text'

  @Input()
  placeholder = ''

  @Input()
  maxLength: number | null = null

  @Input()
  invalid = true

  @Output()
  focusedEvt = new EventEmitter<void>()

  @Output()
  blurEvt = new EventEmitter<void>()

  @Output()
  enterEvt = new EventEmitter<void>()

  @Output()
  inputEvt = new EventEmitter<string>()

  value = ''

  isFocus = false

  disabled = false

  @ViewChild('inputRef')
  inputRef!: ElementRef

  onChange!: (val: string) => void

  onTouched!: () => void

  constructor() { }

  writeValue(obj: any): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  ngOnInit(): void {
  }

  focus() {
    this.inputRef.nativeElement.focus()
    this.isFocus = true
  }

  onFocus(): void {
    if (this.disabled) {
      return
    }
    this.isFocus = true
    this.focusedEvt.emit()
  }

  onBlur(): void {
    if (this.disabled) {
      return
    }
    this.isFocus = false
    this.blurEvt.emit()
    this.onTouched()
  }

  onEnter(): void {
    if (this.disabled) {
      return
    }
    this.enterEvt.emit()
  }

  onInput(value: string): void {
    if (this.disabled) {
      return
    }
    this.value = value
    this.inputEvt.emit(value)
    this.onChange(value)
  }

}
