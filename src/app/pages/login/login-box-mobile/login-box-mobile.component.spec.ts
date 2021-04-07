import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LoginBoxMobileComponent } from './login-box-mobile.component'

describe('LoginBoxMobileComponent', () => {
  let component: LoginBoxMobileComponent
  let fixture: ComponentFixture<LoginBoxMobileComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginBoxMobileComponent ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBoxMobileComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
