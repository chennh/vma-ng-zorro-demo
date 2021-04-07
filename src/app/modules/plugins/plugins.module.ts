import { NgModule } from '@angular/core'
import { NzModule } from './nz/nz.module'
import { AxiosModule } from './axios/axios.module'
import { VmaNgModule } from './vma-ng/vma-ng.module'



@NgModule({
  declarations: [],
  exports: [
    NzModule,
    AxiosModule,
    VmaNgModule,
  ]
})
export class PluginsModule { }
