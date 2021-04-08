import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import LoginBO from '@/api/api/v1.0/definitions/LoginBO'
import { AccountApi } from '@/api/common/v1.0/accountApi'
import { macKeyCookie } from '@/storage/cookie/index'
import LoginREQ from '@/api/common/v1.0/definitions/LoginREQ'

@Injectable({
  providedIn: 'root'
})
export class AdminInfoService {

  adminInfo$ = new Subject<LoginBO | null>()
  adminInfo: LoginBO | null = null

  constructor() {
    this.adminInfo$.subscribe(val => this.adminInfo = val)
  }

  setAdminInfo(data: LoginBO | null) {
    this.adminInfo$.next(data)
    if (data) {
      macKeyCookie.set(data.macKey)
    } else {
      macKeyCookie.remove()
    }
  }

  initAndSubscribe(fn: (data: LoginBO | null) => void) {
    fn(this.adminInfo)
    return this.adminInfo$.subscribe(fn)
  }

  async regetAdminInfo() {
    const data = await AccountApi.menuList({ loading: false })
    this.setAdminInfo(data)
    return data
  }

  async confirmAdminInfo() {
    if (this.adminInfo) {
      return true
    }
    try {
      await this.regetAdminInfo()
      return !!this.adminInfo
    } catch (e) {
      return false
    }
  }

  async loginMobileSystem(entity: LoginREQ) {
    const data = await AccountApi.login(entity)
    macKeyCookie.set(data.macKey)
    await this.regetAdminInfo()
  }

  async logout() {
    await AccountApi.logout()
    this.afterLogout()
  }

  afterLogout() {
    this.setAdminInfo(null)
    macKeyCookie.remove()
  }
}
