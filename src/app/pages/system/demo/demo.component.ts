import { Component, OnInit, Injector } from '@angular/core'
import { RoleApi } from '@/api/api/v1.0/roleApi'
import { IndexComponent } from 'app/modules/components/base/index/index.component'

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent extends IndexComponent implements OnInit {

  api = RoleApi

  params = this.$params.clone({
    name: '',
  }).copyValue

  constructor(
    injector: Injector,
  ) {
    super(injector)
  }

  ngOnInit(): void {
    this.search()
  }

  getApiDetail() {
    return this.api.get
  }
}
