import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PublicRoutingModule } from './public-routing.module';
import { MaintainComponent } from './maintain/maintain.component'


@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  declarations: [MaintainComponent]
})
export class PublicModule { }
