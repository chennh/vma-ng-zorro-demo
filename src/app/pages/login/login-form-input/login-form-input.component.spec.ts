import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LoginFormInputComponent } from './login-form-input.component'

describe('LoginFormInputComponent', () => {
  let component: LoginFormInputComponent
  let fixture: ComponentFixture<LoginFormInputComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormInputComponent ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormInputComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
