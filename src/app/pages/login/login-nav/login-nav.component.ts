import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-login-nav',
  templateUrl: './login-nav.component.html',
  styleUrls: ['./login-nav.component.scss']
})
export class LoginNavComponent implements OnInit {

  @Input()
  list: string[] = []

  @Output()
  clickEvt = new EventEmitter<number>()

  activeNav = 0

  constructor() { }

  ngOnInit(): void {
  }

  clickNav(index: number): void {
    this.activeNav = index
    this.clickEvt.emit(index)
  }

}
