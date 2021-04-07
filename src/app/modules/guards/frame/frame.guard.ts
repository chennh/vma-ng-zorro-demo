import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { AdminInfoService } from '../../services/adminInfo/admin-info.service'
import { RouterService } from '../../services/router/router.service'

@Injectable({
  providedIn: 'root'
})
export class FrameGuard implements CanActivate {
  constructor(
    private adminInfoService: AdminInfoService,
    private routerService: RouterService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.adminInfoService.confirmAdminInfo().then(res => {
      if (!res) {
        this.routerService.navigateToLogin()
      }
      return res
    })
  }
}
