import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FrameComponent } from './frame.component'

const routes: Routes = [
  {
    path: '',
    component: FrameComponent,
    children: [
      { path: 'system', loadChildren: () => import('../system/system.module').then(m => m.SystemModule) }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrameRoutingModule { }
