import { Injectable } from '@angular/core'
import LoginREQ from '@/api/common/v1.0/definitions/LoginREQ'
import { AccountApi } from '@/api/common/v1.0/accountApi'
import { macKeyCookie } from '@/storage/cookie/index'
import { AdminInfoService } from 'app/modules/services/adminInfo/admin-info.service'
import { NzMessageService } from 'ng-zorro-antd/message'


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private adminInfoService: AdminInfoService,
    private message: NzMessageService
  ) { }

  async loginMobileSystem(entity: LoginREQ) {
    await this.adminInfoService.loginMobileSystem(entity)
    this.message.success('登录成功')
  }

}
