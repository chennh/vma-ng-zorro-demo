import { loginDefaultConfig } from '@/environments'
import { Component, OnInit } from '@angular/core'
import LoginREQ from '@/api/common/v1.0/definitions/LoginREQ'
import { VmaLoaderService } from 'vma-ng/vma-ng-zorro'
import { LoginService } from './login.service'
import { RouterService } from 'app/modules/services/router/router.service'

enum LoginNav {
  CODE = 0,
  PASSWORD = 1,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginDefaultConfig = loginDefaultConfig

  isTrail = false

  loginNav = LoginNav.CODE

  LoginNav = LoginNav

  constructor(
    private routerService: RouterService,
    private loaderService: VmaLoaderService,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void { }

  toggleIsTrail(isTrail = !this.isTrail): void {
    this.isTrail = isTrail
  }

  changeLoginNav(index: LoginNav): void {
    this.loginNav = index
  }

  async loginMobile(entity: LoginREQ) {
    this.loaderService.show()
    try {
      entity.domain = location.hostname
      await this.loginService.loginMobileSystem(entity)
      this.routerService.navigateToFrame()
    } finally {
      this.loaderService.hide()
    }
  }

  loginPassword(): void {
    this.routerService.navigateToFrame()
  }
}
