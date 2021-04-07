import { Component, OnInit, Injector } from '@angular/core'
import { VmaValidators } from '@/assets/scripts/validators/index'
import { RoleApi } from '@/api/api/v1.0/roleApi'
import MenuListBO from '@/api/api/v1.0/definitions/MenuListBO'
import RoleActionBO from '@/api/api/v1.0/definitions/RoleActionBO'
import { FormComponent } from 'app/modules/components/base/form/form.component'

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.scss']
})
export class DemoFormComponent extends FormComponent implements OnInit {

  api = RoleApi
  entity = this.formBuilder.group({
    id: '',
    name: ['', [VmaValidators.requiredValidator]],
    resourceMenuList: [[], {
      validators: [VmaValidators.requiredValidator],
      updateOn: 'change'
    }],
    resourceActionList: [[]],
  }, {
    updateOn: 'blur'
  })
  loadingResource = true
  resourceMenuList: MenuListBO[] = []
  resourceActionList: RoleActionBO[] = []

  constructor(
    injector: Injector,
  ) {
    super(injector)
  }

  async ngOnInit() {
    this.loadingResource = true
    const data = await RoleApi.listMenu()
    this.resourceMenuList = data.resourceMenuList
    this.resourceActionList = data.resourceActionList
    this.loadingResource = false
  }
}
