import { Component, OnInit } from '@angular/core'
import { AdminInfoService } from 'app/modules/services/adminInfo/admin-info.service'
import LoginBO from '@/api/api/v1.0/definitions/LoginBO'
import { RouterService } from 'app/modules/services/router/router.service'
import { NzMessageService } from 'ng-zorro-antd/message'

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {

  isCollapsed = false
  adminInfo: LoginBO | null = null

  constructor(
    private adminInfoService: AdminInfoService,
    private routerService: RouterService,
    private message: NzMessageService,
  ) {
    this.adminInfoService.initAndSubscribe(val => this.adminInfo = val)
  }

  ngOnInit(): void {
  }

  async logout() {
    await this.adminInfoService.logout()
    this.routerService.navigateToLogin()
    this.message.success('退出成功')
  }

}
