import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { Page404Component } from './page404/page404.component'
import { MaintainComponent } from './maintain/maintain.component'

const routes: Routes = [{
  path: 'page404',
  component: Page404Component
}, {
  path: 'maintain',
  component: MaintainComponent
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
