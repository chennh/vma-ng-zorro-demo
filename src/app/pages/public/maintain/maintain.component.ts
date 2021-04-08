import { Component, OnDestroy, OnInit } from '@angular/core'
import { AdminInfoService } from 'app/modules/services/adminInfo/admin-info.service'
import { Timer } from '@/utils'
import { RouterService } from 'app/modules/services/router/router.service'

@Component({
  selector: 'app-maintain',
  templateUrl: './maintain.component.html',
  styleUrls: ['./maintain.component.scss']
})
export class MaintainComponent implements OnInit, OnDestroy {

  private timer = new Timer()

  constructor(
    private adminInfoService: AdminInfoService,
    private routerService: RouterService,
  ) { }

  ngOnDestroy(): void {
    this.timer.clear()
  }

  ngOnInit(): void {
    this.timer.setInterval(() => {
      this.adminInfoService.regetAdminInfo().then(() => {
        this.routerService.navigateToLogin()
      })
    }, 1000)
  }

}
