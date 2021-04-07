import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DemoComponent } from './demo/demo.component'
import { SystemComponent } from './system.component'
import { FormComponent } from './form/form.component'

const routes: Routes = [
  {
    path: '', component: SystemComponent, children: [
      { path: 'demo', component: DemoComponent },
      { path: 'form', component: FormComponent }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
