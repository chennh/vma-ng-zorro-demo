import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LoginBoxPasswordComponent } from './login-box-password.component'

describe('LoginBoxPasswordComponent', () => {
  let component: LoginBoxPasswordComponent
  let fixture: ComponentFixture<LoginBoxPasswordComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginBoxPasswordComponent ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBoxPasswordComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
