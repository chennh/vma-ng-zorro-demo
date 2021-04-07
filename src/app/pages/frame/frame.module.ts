import { NgModule } from '@angular/core'
import { FrameComponent } from './frame.component'
import { FrameRoutingModule } from './frame-routing.module'
import { AllModule } from 'app/modules/all.module'


@NgModule({
  declarations: [FrameComponent],
  imports: [
    FrameRoutingModule,
    AllModule,
  ],
  exports: [
    FrameRoutingModule
  ]
})
export class FrameModule { }
