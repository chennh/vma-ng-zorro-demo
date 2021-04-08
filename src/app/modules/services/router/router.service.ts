import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(
    private router: Router,
  ) { }

  navigateToFrame() {
    this.router.navigateByUrl('/frame')
  }

  navigateToLogin() {
    this.router.navigateByUrl('/login')
  }

  navigateToMaintain() {
    this.router.navigateByUrl('/public/maintain')
  }
}
