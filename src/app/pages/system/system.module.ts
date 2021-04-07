import { NgModule } from '@angular/core'

import { SystemRoutingModule } from './system-routing.module'
import { SystemComponent } from './system.component'
import { AllModule } from 'app/modules/all.module'
import { DemoComponent } from './demo/demo.component'
import { DemoFormComponent } from './demo/demo-form/demo-form.component'
import { ResourceMenuListTreeComponent } from './demo/demo-form/resource-menu-list-tree/resource-menu-list-tree.component'
import { ResourceActionListComponent } from './demo/demo-form/resource-action-list/resource-action-list.component'
import { FormComponent } from './form/form.component'


@NgModule({
  declarations: [
    SystemComponent,
    DemoComponent,
    DemoFormComponent,
    ResourceMenuListTreeComponent,
    ResourceActionListComponent,
    FormComponent,
  ],
  imports: [
    SystemRoutingModule,
    AllModule,
  ]
})
export class SystemModule { }
